(self.webpackChunk_ts_node_website=self.webpackChunk_ts_node_website||[]).push([[367],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return l},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5001:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),i={title:"Troubleshooting Errors"},p={unversionedId:"errors",id:"errors",isDocsHomePage:!1,title:"Troubleshooting Errors",description:"It is important to differentiate between errors from ts-node, errors from the TypeScript compiler, and errors from node.  It is also important to understand when errors are caused by a type error in your code, a bug in your code, or a flaw in your configuration.",source:"@site/docs/errors.md",sourceDirName:".",slug:"/errors",permalink:"/ts-node/docs/errors",editUrl:"https://github.com/TypeStrong/ts-node/edit/docs/website/docs/errors.md",version:"current",frontMatter:{title:"Troubleshooting Errors"},sidebar:"primarySidebar",previous:{title:"Shebang",permalink:"/ts-node/docs/shebang"},next:{title:'"paths" and "baseUrl"\n',permalink:"/ts-node/docs/paths"}},s=[{value:"<code>TSError</code>",id:"tserror",children:[]},{value:"<code>SyntaxError</code>",id:"syntaxerror",children:[{value:"Unsupported JavaScript syntax",id:"unsupported-javascript-syntax",children:[]}]}],c={toc:s};function l(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It is important to differentiate between errors from ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-node"),", errors from the TypeScript compiler, and errors from ",(0,a.kt)("inlineCode",{parentName:"p"},"node"),".  It is also important to understand when errors are caused by a type error in your code, a bug in your code, or a flaw in your configuration."),(0,a.kt)("h2",{id:"tserror"},(0,a.kt)("inlineCode",{parentName:"h2"},"TSError")),(0,a.kt)("p",null,"Type errors from the compiler are thrown as a ",(0,a.kt)("inlineCode",{parentName:"p"},"TSError"),".  These are the same as errors you get from ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc"),"."),(0,a.kt)("h2",{id:"syntaxerror"},(0,a.kt)("inlineCode",{parentName:"h2"},"SyntaxError")),(0,a.kt)("p",null,"Any error that is not a ",(0,a.kt)("inlineCode",{parentName:"p"},"TSError")," is from node.js (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"SyntaxError"),"), and cannot be fixed by TypeScript or ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-node"),". These are bugs in your code or configuration."),(0,a.kt)("h3",{id:"unsupported-javascript-syntax"},"Unsupported JavaScript syntax"),(0,a.kt)("p",null,"Your version of ",(0,a.kt)("inlineCode",{parentName:"p"},"node"),' may not support all JavaScript syntax supported by TypeScript.  The compiler must transform this syntax via "downleveling," which is controlled by\nthe ',(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig#target"},"tsconfig ",(0,a.kt)("inlineCode",{parentName:"a"},'"target"')," option"),".  Otherwise your code will compile fine, but node will throw a ",(0,a.kt)("inlineCode",{parentName:"p"},"SyntaxError"),"."),(0,a.kt)("p",null,"For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"node")," 12 does not understand the ",(0,a.kt)("inlineCode",{parentName:"p"},"?.")," optional chaining operator.  If you use ",(0,a.kt)("inlineCode",{parentName:"p"},'"target": "esnext"'),", then the following TypeScript syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const bar: string | undefined = foo?.bar;\n")),(0,a.kt)("p",null,"will compile into this JavaScript:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const a = foo?.bar;\n")),(0,a.kt)("p",null,"When you try to run this code, node 12 will throw a ",(0,a.kt)("inlineCode",{parentName:"p"},"SyntaxError"),".  To fix this, you must switch to ",(0,a.kt)("inlineCode",{parentName:"p"},'"target": "es2019"')," or lower so TypeScript transforms ",(0,a.kt)("inlineCode",{parentName:"p"},"?.")," into something ",(0,a.kt)("inlineCode",{parentName:"p"},"node")," can understand."))}l.isMDXComponent=!0}}]);