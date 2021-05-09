(self.webpackChunk_ts_node_website=self.webpackChunk_ts_node_website||[]).push([[162],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},601:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={title:"Getting Started",slug:"/"},l={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Installation",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/",permalink:"/ts-node/docs/",editUrl:"https://github.com/TypeStrong/ts-node/edit/docs/website/docs/getting-started.md",version:"current",frontMatter:{title:"Getting Started",slug:"/"},sidebar:"primarySidebar",next:{title:"How It Works",permalink:"/ts-node/docs/how-it-works"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[{value:"Shell",id:"shell",children:[]},{value:"Shebang",id:"shebang",children:[]},{value:"Programmatic",id:"programmatic",children:[]}]}],p={toc:s};function c(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# Locally in your project.\nnpm install -D typescript\nnpm install -D ts-node\n\n# Or globally with TypeScript.\nnpm install -g typescript\nnpm install -g ts-node\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Tip:")," Installing modules locally allows you to control and share the versions through ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". TS Node will always resolve the compiler from ",(0,i.kt)("inlineCode",{parentName:"p"},"cwd")," before checking relative to its own installation."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"shell"},"Shell"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# Execute a script as `node` + `tsc`.\nts-node script.ts\n\n# Starts a TypeScript REPL.\nts-node\n\n# Execute code with TypeScript.\nts-node -e 'console.log(\"Hello, world!\")'\n\n# Execute, and print, code with TypeScript.\nts-node -p -e '\"Hello, world!\"'\n\n# Pipe scripts to execute with TypeScript.\necho 'console.log(\"Hello, world!\")' | ts-node\n\n# Equivalent to ts-node --transpile-only\nts-node-transpile-only script.ts\n\n# Equivalent to ts-node --cwd-mode\nts-node-cwd script.ts\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"TypeScript REPL",src:n(9218).Z})),(0,i.kt)("h3",{id:"shebang"},"Shebang"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'#!/usr/bin/env ts-node\n\nconsole.log("Hello, world!")\n')),(0,i.kt)("p",null,"Passing CLI arguments via shebang is allowed on Mac but not Linux.  For example, the following will fail on Linux:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#!/usr/bin/env ts-node --files\n// This shebang is not portable.  It only works on Mac\n")),(0,i.kt)("p",null,"Instead, specify all ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-node")," options in your ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"."),(0,i.kt)("h3",{id:"programmatic"},"Programmatic"),(0,i.kt)("p",null,"You can require ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-node")," and register the loader for future requires by using ",(0,i.kt)("inlineCode",{parentName:"p"},"require('ts-node').register({ /* options */ })"),". You can also use file shortcuts - ",(0,i.kt)("inlineCode",{parentName:"p"},"node -r ts-node/register")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"node -r ts-node/register/transpile-only")," - depending on your preferences."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," If you need to use advanced node.js CLI arguments (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"--inspect"),"), use them with ",(0,i.kt)("inlineCode",{parentName:"p"},"node -r ts-node/register")," instead of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-node")," CLI."),(0,i.kt)("h4",{id:"developers"},"Developers"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ts-node")," exports a ",(0,i.kt)("inlineCode",{parentName:"p"},"create()")," function that can be used to initialize a TypeScript compiler that isn't registered to ",(0,i.kt)("inlineCode",{parentName:"p"},"require.extensions"),", and it uses the same code as ",(0,i.kt)("inlineCode",{parentName:"p"},"register"),"."))}c.isMDXComponent=!0},9218:function(e,t,n){"use strict";t.Z=n.p+"assets/images/screenshot-73aaaea232c2c691916fe51409986ec1.png"}}]);