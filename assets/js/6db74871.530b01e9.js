(self.webpackChunk_ts_node_website=self.webpackChunk_ts_node_website||[]).push([[935],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=p(n),f=o,m=l["".concat(s,".").concat(f)]||l[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},7534:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={title:"Watching and Restarting"},c={unversionedId:"recipes/watching-and-restarting",id:"recipes/watching-and-restarting",isDocsHomePage:!1,title:"Watching and Restarting",description:"TypeScript Node compiles source code via require(), watching files and code reloads are out of scope for the project. If you want to restart the ts-node process on file change, existing node.js tools such as nodemon, onchange and node-dev work.",source:"@site/docs/recipes/watching-and-restarting.md",sourceDirName:"recipes",slug:"/recipes/watching-and-restarting",permalink:"/ts-node/docs/recipes/watching-and-restarting",editUrl:"https://github.com/TypeStrong/ts-node/edit/docs/website/docs/recipes/watching-and-restarting.md",version:"current",frontMatter:{title:"Watching and Restarting"},sidebar:"primarySidebar",previous:{title:"Third-party transpilers",permalink:"/ts-node/docs/transpilers"},next:{title:"Mocha",permalink:"/ts-node/docs/recipes/mocha"}},s=[],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TypeScript Node")," compiles source code via ",(0,a.kt)("inlineCode",{parentName:"p"},"require()"),", watching files and code reloads are out of scope for the project. If you want to restart the ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-node")," process on file change, existing node.js tools such as ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/remy/nodemon"},"nodemon"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Qard/onchange"},"onchange")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fgnass/node-dev"},"node-dev")," work."),(0,a.kt)("p",null,"There's also ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/whitecolor/ts-node-dev"},(0,a.kt)("inlineCode",{parentName:"a"},"ts-node-dev")),", a modified version of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fgnass/node-dev"},(0,a.kt)("inlineCode",{parentName:"a"},"node-dev"))," using ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-node")," for compilation that will restart the process on file change."))}d.isMDXComponent=!0}}]);