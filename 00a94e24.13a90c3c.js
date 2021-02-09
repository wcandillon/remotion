(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{110:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(t),f=r,d=b["".concat(a,".").concat(f)]||b[f]||s[f]||i;return t?o.a.createElement(d,c(c({ref:n},p),{},{components:t})):o.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},69:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),i=(t(0),t(110)),a={id:"webpack",title:"Custom Webpack config"},c={unversionedId:"webpack",id:"webpack",isDocsHomePage:!1,title:"Custom Webpack config",description:"You can customize the Webpack configuration if you have at least Version 1.1 of Remotion.",source:"@site/docs/overwriting-webpack-config.md",slug:"/webpack",permalink:"/docs/webpack",editUrl:"https://github.com/JonnyBurger/remotion/edit/main/packages/docs/docs/overwriting-webpack-config.md",version:"current",sidebar:"someSidebar",previous:{title:"Using Fonts",permalink:"/docs/fonts"},next:{title:"CLI options",permalink:"/docs/cli"}},l=[{value:"Overriding the webpack config",id:"overriding-the-webpack-config",children:[]},{value:"Enabling MDX support",id:"enabling-mdx-support",children:[]},{value:"Customizing configuration file location",id:"customizing-configuration-file-location",children:[]}],p={toc:l};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can customize the Webpack configuration if you have at least Version 1.1 of Remotion."),Object(i.b)("p",null,"Create a config file called ",Object(i.b)("inlineCode",{parentName:"p"},"remotion.config.ts")," in the root of your project. As a confirmation, you should get a console message ",Object(i.b)("inlineCode",{parentName:"p"},"Applied configuration from [configuration-file]"),"."),Object(i.b)("h2",{id:"overriding-the-webpack-config"},"Overriding the webpack config"),Object(i.b)("p",null,"Get familiar with the default Webpack configuration which can be ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/JonnyBurger/remotion/blob/main/packages/bundler/src/webpack-config.ts"}),"found here"),"."),Object(i.b)("p",null,"In your ",Object(i.b)("inlineCode",{parentName:"p"},"remotion.config.ts")," file, you can call ",Object(i.b)("inlineCode",{parentName:"p"},"overrideWebpackConfig")," from ",Object(i.b)("inlineCode",{parentName:"p"},"@remotion/bundler"),"."),Object(i.b)("p",null,"Overriding the Webpack config uses the reducer pattern - pass in a function that takes as it's argument a Webpack configuration and return a new Webpack configuration."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"import {overrideWebpackConfig} from '@remotion/bundler';\n\noverrideWebpackConfig((currentConfiguration) => {\n  return {\n    ...currentConfiguration,\n    module: {\n      ...currentConfiguration.module,\n      rules: [\n        ...currentConfiguration.module.rules,\n        // Add more loaders here\n      ],\n    },\n  };\n});\n")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Using the reducer pattern will help with type safety, give you auto-complete, ensure forwards-compatibility and keep it completely flexible - you can override just one property or pass in a completely new Webpack configuration."))),Object(i.b)("h2",{id:"enabling-mdx-support"},"Enabling MDX support"),Object(i.b)("p",null,"The following ",Object(i.b)("inlineCode",{parentName:"p"},"remotion.config.ts")," file shows how to enable support for MDX. Installation of ",Object(i.b)("inlineCode",{parentName:"p"},"mdx-loader babel-loader @babel/preset-env @babel/preset-react")," is required."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import {overrideWebpackConfig} from '@remotion/bundler';\n\noverrideWebpackConfig((currentConfiguration) => {\n  return {\n    ...currentConfiguration,\n    module: {\n      ...currentConfiguration.module,\n      rules: [\n        ...currentConfiguration.module.rules,\n        {\n          test: /\\.mdx?$/,\n          use: [\n            {\n              loader: 'babel-loader',\n              options: {\n                presets: [\n                  '@babel/preset-env',\n                  [\n                    '@babel/preset-react',\n                    {\n                      runtime: 'automatic',\n                    },\n                  ],\n                ],\n              },\n            },\n            'mdx-loader',\n          ],\n        },\n      ],\n    },\n  };\n});\n\n")),Object(i.b)("h2",{id:"customizing-configuration-file-location"},"Customizing configuration file location"),Object(i.b)("p",null,"You can pass a ",Object(i.b)("inlineCode",{parentName:"p"},"--config")," option to the command line to specify a custom location for your configuration file."))}u.isMDXComponent=!0}}]);