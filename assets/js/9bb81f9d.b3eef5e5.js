"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[1096],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return m}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(o),m=n,f=s["".concat(l,".").concat(m)]||s[m]||c[m]||a;return o?r.createElement(f,p(p({ref:t},u),{},{components:o})):r.createElement(f,p({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,p=new Array(a);p[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var d=2;d<a;d++)p[d]=o[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,o)}s.displayName="MDXCreateElement"},5754:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),p=["components"],i={title:"Moodle App"},l=void 0,d={unversionedId:"guides/moodleapp/index",id:"guides/moodleapp/index",title:"Moodle App",description:"Welcome to the Moodle App developer documentation!",source:"@site/docs/guides/moodleapp/index.md",sourceDirName:"guides/moodleapp",slug:"/guides/moodleapp/",permalink:"/devdocs/docs/guides/moodleapp/",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/guides/moodleapp/index.md",tags:[],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1649909741,formattedLastUpdatedAt:"14/04/2022",frontMatter:{title:"Moodle App"},sidebar:"docs",previous:{title:"JavaScript",permalink:"/devdocs/docs/guides/javascript/"},next:{title:"Moodle App Overview",permalink:"/devdocs/docs/guides/moodleapp/overview"}},u={},c=[],s={toc:c};function m(e){var t=e.components,o=(0,n.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Welcome to the Moodle App developer documentation!"),(0,a.kt)("p",null,"Here, you will find everything you need to start working with the Moodle App right away."),(0,a.kt)("p",null,"We suggest that you read the ",(0,a.kt)("a",{parentName:"p",href:"./moodleapp/overview"},"Moodle App Overview")," before diving into specifics. Once you're familiar with the basic concepts and understand how the application works, you can dig into the particulars:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Do you want to contribute to the core? Read the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Moodle_App_Development_Guide"},"Moodle App Development Guide"),"."),(0,a.kt)("li",{parentName:"ul"},"Do you want to adapt a plugin to mobile? Read the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Moodle_App_Plugins_Development_Guide"},"Moodle App Plugins Development Guide"),"."),(0,a.kt)("li",{parentName:"ul"},"Do you want to customise your site in the app? Read the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Moodle_App_Customisation"},"Moodle App Customisation")," page."),(0,a.kt)("li",{parentName:"ul"},"Do you want to make a custom app? Read the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Custom_Moodle_Apps"},"Custom Moodle Apps")," page.")),(0,a.kt)("p",null,"If you have any further questions, check out the ",(0,a.kt)("a",{parentName:"p",href:"#"},"FAQ"),". If there's anything you want to share, you can do it in ",(0,a.kt)("a",{parentName:"p",href:"https://moodle.org/mod/forum/view.php?id=7798"},"the forum")," or ",(0,a.kt)("a",{parentName:"p",href:"#"},"the Telegram developer room"),". You can also report any bugs that you find in ",(0,a.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MOBILE"},"the tracker"),"."))}m.isMDXComponent=!0}}]);