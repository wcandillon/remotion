import {registerVideo, useCurrentFrame, useVideoConfig} from '@remotion/core';
import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
	font-family: -apple-system, BlinkMacSystemFont, sans-serif;
	font-weight: bold;
	font-size: 110px;
	line-height: 110px;
`;

const wordLength = {
	one: 187.45,
	thing: 258.41,
	every: 277.58,
	any: 183.11,
	'Stickerify ': 499.52,
};

type Word = keyof typeof wordLength;

const words: [Word, Word, Word][] = [
	['Stickerify ', 'any', 'one'],
	['Stickerify ', 'any', 'thing'],
	['Stickerify ', 'every', 'thing'],
];

const getWordsForFrame = (frame: number, videoLength: number) => {
	const ratio = frame / videoLength;
	const index = Math.max(
		0,
		Math.min(words.length - 1, Math.floor(ratio * words.length))
	);
	return words[index];
};

const getTotalLength = (wordsToUse: Word[]) => {
	return wordsToUse.reduce((a, b) => a + wordLength[b], 0);
};

const leftForWord = ({
	wordArray,
	index,
	compWidth,
}: {
	wordArray: Word[];
	index: number;
	compWidth: number;
}) => {
	let length = 0;
	for (let i = 0; i < wordArray.length; i++) {
		if (i === index) {
			return (compWidth - getTotalLength(wordArray)) / 2 + length;
		}
		length += wordLength[wordArray[i]];
	}
};

type Change = {
	distance: number;
	words: [Word, Word, Word];
} | null;

const transitionDur = 4;

const getNextChange = (frame: number, videoLength: number): Change => {
	const currentWords = getWordsForFrame(frame, videoLength);
	let j = 1;
	for (j; j < videoLength; j++) {
		const w = getWordsForFrame(frame + j, videoLength);
		if (w.join() !== currentWords.join()) {
			return {distance: j, words: w};
		}
	}
	return null;
};

const getPreviousChange = (frame: number, videoLength: number): Change => {
	const currentWords = getWordsForFrame(frame, videoLength);
	let j = 1;
	for (j; j < videoLength; j++) {
		const w = getWordsForFrame(frame - j, videoLength);
		if (w.join() !== currentWords.join()) {
			return {distance: j, words: w};
		}
	}
	return null;
};

const getFactorForDistance = (
	nextChange: Change,
	currentWords: [Word, Word, Word],
	index: number
) => {
	if (nextChange === null) {
		return 0;
	}
	const nextDiff =
		Math.max(0, transitionDur - nextChange.distance) / transitionDur;
	if (currentWords[index] === nextChange.words[index]) {
		return 0;
	}
	return nextDiff;
};

const getYForDistance = (
	nextChange: Change,
	currentWords: [Word, Word, Word],
	index: number
) => {
	return getFactorForDistance(nextChange, currentWords, index) * 30;
};

const getOpacityForDistance = (
	nextChange: Change,
	currentWords: [Word, Word, Word],
	index: number
) => {
	return (
		1 - getFactorForDistance(nextChange, currentWords, index) / transitionDur
	);
};

const getWidthChangeForDistance = (
	nextChange: Change,
	currentWords: [Word, Word, Word],
	index: number
) => {
	if (!nextChange) {
		return 0;
	}
	const widthChange =
		wordLength[nextChange.words[index]] - wordLength[currentWords[index]];
	return getFactorForDistance(nextChange, currentWords, index) * widthChange;
};

export const Comp = () => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();
	const wordsToUse = getWordsForFrame(frame, videoConfig.durationInFrames);
	return (
		<div
			style={{
				flex: 1,
				backgroundColor: 'white',
				justifyContent: 'center',
				alignItems: 'center',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Text>
				{wordsToUse.map((w, i) => {
					const left = leftForWord({
						wordArray: wordsToUse,
						index: i,
						compWidth: videoConfig.width,
					});
					const nextChange = getNextChange(frame, videoConfig.durationInFrames);
					const previousChange = getPreviousChange(
						frame,
						videoConfig.durationInFrames
					);
					console.log(getWidthChangeForDistance(nextChange, wordsToUse, i));
					return (
						<span
							key={w}
							style={{
								display: 'inline-block',
								position: 'absolute',
								width:
									wordLength[w] +
									getWidthChangeForDistance(nextChange, wordsToUse, i),
								left,
								marginTop:
									getYForDistance(previousChange, wordsToUse, i) -
									getYForDistance(nextChange, wordsToUse, i),
								opacity: Math.min(
									getOpacityForDistance(nextChange, wordsToUse, i),
									getOpacityForDistance(previousChange, wordsToUse, i)
								),
							}}
						>
							{w}
						</span>
					);
				})}
			</Text>
		</div>
	);
};

registerVideo(Comp, {
	width: 1080,
	height: 1080,
	fps: 30,
	durationInFrames: 3 * 30,
});