"use strict";(self.webpackChunkdaxiong=self.webpackChunkdaxiong||[]).push([[9323],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),s=a,g=m["".concat(p,".").concat(s)]||m[s]||d[s]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"\u57fa\u4e8e Caddy \u90e8\u7f72\u76d8\u53e4 Admin",authors:["xiongchun"],tags:["\u6280\u672f\u6742\u6587","\u4e2d\u95f4\u4ef6","\u8fd0\u7ef4","Caddy","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"],date:new Date("2022-10-02T00:00:00.000Z"),hide_table_of_contents:!1,slug:"deploy-pangu-admin-by-caddy"},i=void 0,l={permalink:"/home/blog/deploy-pangu-admin-by-caddy",source:"@site/blog/\u57fa\u4e8e Caddy \u90e8\u7f72\u76d8\u53e4 Admin.md",title:"\u57fa\u4e8e Caddy \u90e8\u7f72\u76d8\u53e4 Admin",description:"\u672c\u6587\u4ee5\u90e8\u7f72\u76d8\u53e4 Admin \u5728\u7ebf\u6f14\u793a\u7cfb\u7edf\u4e3a\u4f8b\u8bb2\u89e3\u5982\u4f55\u57fa\u4e8e Caddy \u90e8\u7f72\u76d8\u53e4 Admin \u7684\u9759\u6001\u8d44\u6e90\u548c Web \u8282\u70b9\uff08\u4e1a\u52a1\u7f51\u5173\uff09\u3002",date:"2022-10-02T00:00:00.000Z",formattedDate:"2022\u5e7410\u67082\u65e5",tags:[{label:"\u6280\u672f\u6742\u6587",permalink:"/home/blog/tags/\u6280\u672f\u6742\u6587"},{label:"\u4e2d\u95f4\u4ef6",permalink:"/home/blog/tags/\u4e2d\u95f4\u4ef6"},{label:"\u8fd0\u7ef4",permalink:"/home/blog/tags/\u8fd0\u7ef4"},{label:"Caddy",permalink:"/home/blog/tags/caddy"},{label:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6",permalink:"/home/blog/tags/\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"}],readingTime:2.125,hasTruncateMarker:!0,authors:[{name:"\u7a0b\u5e8f\u5458\u5927\u718a",title:"Pangu Framework maintainer",url:"https://gitee.com/xiong-chun",imageURL:"https://xiong-chun.gitee.io/home/img/xiongchun.jpg",key:"xiongchun"}],frontMatter:{title:"\u57fa\u4e8e Caddy \u90e8\u7f72\u76d8\u53e4 Admin",authors:["xiongchun"],tags:["\u6280\u672f\u6742\u6587","\u4e2d\u95f4\u4ef6","\u8fd0\u7ef4","Caddy","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"],date:"2022-10-02T00:00:00.000Z",hide_table_of_contents:!1,slug:"deploy-pangu-admin-by-caddy"},prevItem:{title:"\u5f00\u6e90\u5341\u5e74\uff0cAOSuite \u5f00\u53d1\u5e73\u53f0\u505c\u6b62\u7ef4\u62a4 [EOL]",permalink:"/home/blog/aosuite-eol"},nextItem:{title:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u4e0b\u901a\u8fc7 ShenYu \u7f51\u5173\u5b9e\u73b0 HTTP \u5230 Dubbo \u670d\u52a1\u7684\u4ee3\u7406",permalink:"/home/blog/pangu-dev-framework-apache-shenyu"}},p={authorsImageUrls:[void 0]},c=[],u={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4ee5\u90e8\u7f72\u76d8\u53e4 Admin \u5728\u7ebf\u6f14\u793a\u7cfb\u7edf\u4e3a\u4f8b\u8bb2\u89e3\u5982\u4f55\u57fa\u4e8e Caddy \u90e8\u7f72\u76d8\u53e4 Admin \u7684\u9759\u6001\u8d44\u6e90\u548c Web \u8282\u70b9\uff08\u4e1a\u52a1\u7f51\u5173\uff09\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u90e8\u7f72\u6548\u679c\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://pangu-admin.pulanit.com/"},"https://pangu-admin.pulanit.com")))}m.isMDXComponent=!0}}]);