"use strict";(self.webpackChunkdaxiong=self.webpackChunkdaxiong||[]).push([[5292],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),m=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},c="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=m(n),u=a,k=c["".concat(p,".").concat(u)]||c[u]||g[u]||l;return n?r.createElement(k,i(i({ref:e},d),{},{components:n})):r.createElement(k,i({ref:e},d))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[c]="string"==typeof t?t:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8526:(t,e,n)=>{n.r(e),n.d(e,{Highlight:()=>d,assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const l={title:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u67b6\u6784\u6a21\u5f0f\u9009\u9879\u5bf9\u6bd4",authors:["xiongchun"],tags:["\u670d\u52a1\u7aef\u5f00\u53d1","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"],date:new Date("2020-12-30T00:00:00.000Z"),hide_table_of_contents:!1,slug:"pangu-dev-framework-architecture"},i=void 0,o={permalink:"/home/blog/pangu-dev-framework-architecture",source:"@site/blog/\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u67b6\u6784\u6a21\u5f0f\u9009\u9879\u5bf9\u6bd4.md",title:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u67b6\u6784\u6a21\u5f0f\u9009\u9879\u5bf9\u6bd4",description:"\u8f6f\u4ef6\u67b6\u6784\u7684\u672c\u8d28\u662f\u4e00\u79cd\u5728\u7279\u5b9a\u8d44\u6e90\u80cc\u666f\u4e0b\u6298\u4e2d\u5e73\u8861\u540e\u8ffd\u6c42\u4e1a\u52a1\u589e\u957f\u7684\u4e00\u95e8\u827a\u672f\u3002\u51b3\u5b9a\u5f00\u53d1\u6280\u672f\u67b6\u6784\u9009\u578b\u7684\u56e0\u7d20\u5f88\u591a\u3002\u8fd9\u91cc\uff0c\u6211\u4eec\u7b80\u5355\u7684\u5bf9\u4e24\u79cd\u4e0d\u540c\u5f00\u53d1\u67b6\u6784\u6a21\u5f0f\u8fdb\u884c\u5ba2\u89c2\u6bd4\u8f83\uff0c\u5e0c\u671b\u5bf9\u5927\u5bb6\u5728\u6280\u672f\u67b6\u6784\u9009\u578b\u65f6\u80fd\u6709\u6240\u53c2\u8003\u610f\u4e49\u3002",date:"2020-12-30T00:00:00.000Z",formattedDate:"2020\u5e7412\u670830\u65e5",tags:[{label:"\u670d\u52a1\u7aef\u5f00\u53d1",permalink:"/home/blog/tags/\u670d\u52a1\u7aef\u5f00\u53d1"},{label:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6",permalink:"/home/blog/tags/\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"}],readingTime:3.395,hasTruncateMarker:!0,authors:[{name:"\u7a0b\u5e8f\u5458\u5927\u718a",title:"Pangu Framework maintainer",url:"https://gitee.com/xiong-chun",imageURL:"https://xiong-chun.gitee.io/home/img/xiongchun.jpg",key:"xiongchun"}],frontMatter:{title:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u67b6\u6784\u6a21\u5f0f\u9009\u9879\u5bf9\u6bd4",authors:["xiongchun"],tags:["\u670d\u52a1\u7aef\u5f00\u53d1","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"],date:"2020-12-30T00:00:00.000Z",hide_table_of_contents:!1,slug:"pangu-dev-framework-architecture"},prevItem:{title:"\u5982\u4f55\u57fa\u4e8e\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u5f00\u53d1\u5355\u4f53\u5e94\u7528",permalink:"/home/blog/pangu-dev-framework-create-standalone-app"},nextItem:{title:"bit\u3001Byte\u3001KB\u3001MB\u3001GB... \u4e4b\u95f4\u7684\u5173\u7cfb",permalink:"/home/blog/bit-byte-kb-etc"}},p={authorsImageUrls:[void 0]},m=[{value:"\u5355\u4f53\u5206\u5c42\u67b6\u6784 VS \u5fae\u670d\u52a1\u5206\u5e03\u5f0f\u67b6\u6784",id:"\u5355\u4f53\u5206\u5c42\u67b6\u6784-vs-\u5fae\u670d\u52a1\u5206\u5e03\u5f0f\u67b6\u6784",level:2},{value:"\u76d8\u53e4\u5f00\u53d1\u67b6\u6784\u9009\u578b\u5efa\u8bae",id:"\u76d8\u53e4\u5f00\u53d1\u67b6\u6784\u9009\u578b\u5efa\u8bae",level:2}],d=t=>{let{children:e,color:n}=t;return(0,a.kt)("span",{style:{backgroundColor:n,borderRadius:"3px",color:"#fff",padding:"0.1rem"}},e)},c={toc:m,Highlight:d};function g(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8f6f\u4ef6\u67b6\u6784\u7684\u672c\u8d28\u662f\u4e00\u79cd\u5728\u7279\u5b9a\u8d44\u6e90\u80cc\u666f\u4e0b\u6298\u4e2d\u5e73\u8861\u540e\u8ffd\u6c42\u4e1a\u52a1\u589e\u957f\u7684\u4e00\u95e8\u827a\u672f\u3002\u51b3\u5b9a\u5f00\u53d1\u6280\u672f\u67b6\u6784\u9009\u578b\u7684\u56e0\u7d20\u5f88\u591a\u3002\u8fd9\u91cc\uff0c\u6211\u4eec\u7b80\u5355\u7684\u5bf9\u4e24\u79cd\u4e0d\u540c\u5f00\u53d1\u67b6\u6784\u6a21\u5f0f\u8fdb\u884c\u5ba2\u89c2\u6bd4\u8f83\uff0c\u5e0c\u671b\u5bf9\u5927\u5bb6\u5728\u6280\u672f\u67b6\u6784\u9009\u578b\u65f6\u80fd\u6709\u6240\u53c2\u8003\u610f\u4e49\u3002"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://pulanos.gitee.io/pangu-framework"},"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6")," \u4e0d\u4f1a\u628a\u7528\u6237\u7ed1\u5b9a\u5230\u4e00\u4e2a\u56fa\u5b9a\u7684\u5f00\u53d1\u8303\u5f0f\u548c\u67b6\u6784\u4e0a\uff0c\u800c\u662f\u652f\u6301\u968f\u610f\u7ec4\u5408\u3001\u81ea\u52a8\u88c5\u914d\u3001\u7075\u6d3b\u63d2\u62d4\u3002 \u65e2\u80fd\u6784\u5efa\u5927\u5e76\u53d1\u9ad8\u53ef\u7528\u7684\u5206\u5e03\u5f0f\u5fae\u670d\u52a1\u67b6\u6784\u4e5f\u80fd\u642d\u5efa\u5c0f\u5de7\u7684\u5782\u76f4\u5355\u4f53\u5206\u5c42\u67b6\u6784\u3002")),(0,a.kt)("h2",{id:"\u5355\u4f53\u5206\u5c42\u67b6\u6784-vs-\u5fae\u670d\u52a1\u5206\u5e03\u5f0f\u67b6\u6784"},"\u5355\u4f53\u5206\u5c42\u67b6\u6784 VS \u5fae\u670d\u52a1\u5206\u5e03\u5f0f\u67b6\u6784"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("div",{style:{width:"80px"}},"-")),(0,a.kt)("th",{parentName:"tr",align:null},"\u5355\u4f53\u5206\u5c42\u67b6\u6784"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5fae\u670d\u52a1\u5206\u5e03\u5f0f\u67b6\u6784"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5f00\u53d1"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f00\u53d1\u6d4b\u8bd5\u6d41\u7a0b\u7b80\u5355"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f00\u53d1\u6d4b\u8bd5\u6d41\u7a0b\u76f8\u5bf9\u590d\u6742")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u90e8\u7f72\u8fd0\u7ef4"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5355\u673a\u90e8\u7f72\u6216\u96c6\u7fa4\u90e8\u7f72\uff08\u7b80\u5355\uff09\u3001\u8fd0\u7ef4\u6210\u672c\u4f4e"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5206\u5e03\u5f0f\u90e8\u7f72\uff08\u7565\u96be\uff09\u3001\u8fd0\u7ef4\u6210\u672c\u9ad8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u56e2\u961f\u4eba\u5458"),(0,a.kt)("td",{parentName:"tr",align:null},"\u56e2\u961f\u56f4\u7ed5\u4e00\u4e2a\u4e2d\u5fc3\u5e94\u7528\u5f00\u53d1\uff0c\u5bf9\u5f00\u53d1\u4eba\u5458\u80fd\u529b\u8981\u6c42\u4f4e\u3002\u5f00\u53d1\u3001\u7ef4\u62a4\u6210\u672c\u76f8\u5bf9\u8f83\u4f4e\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"\u56e2\u961f\u57fa\u4e8e\u5206\u5e03\u5f0f\u591a\u5e94\u7528\u534f\u4f5c\uff0c\u5bf9\u5f00\u53d1\u4eba\u5458\u80fd\u529b\u8981\u6c42\u7565\u9ad8\u3002\u5f00\u53d1\u3001\u7ef4\u62a4\u6210\u672c\u76f8\u5bf9\u8f83\u9ad8\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5176\u5b83"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u6027\u5f31\u3001\u53ef\u9760\u6027\u4f4e\u3001\u6280\u672f\u521b\u65b0\u80fd\u529b\u5f31\u3001\u4f01\u4e1a\u5bf9\u4ee3\u7801\u7b49\u6570\u5b57\u8d44\u4ea7\u7ba1\u63a7\u80fd\u529b\u5f31\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6269\u5c55\u6027\u5f3a\u3001\u53ef\u9760\u6027\u9ad8\u3001\u6280\u672f\u521b\u65b0\u80fd\u529b\u5f3a\u3001\u4f01\u4e1a\u5bf9\u4ee3\u7801\u7b49\u6570\u5b57\u8d44\u4ea7\u7ba1\u63a7\u80fd\u529b\u9ad8\u3002")))),(0,a.kt)("admonition",{title:"\u8b66\u62a5",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"\u4e0a\u8ff0\u6307\u6807\u5bf9\u6bd4\u5747\u4e3a\u76f8\u5bf9\u7ed3\u679c\uff0c\u4ec5\u4f9b\u53c2\u8003\u3002\u5728\u7279\u5b9a\u9879\u76ee\u8d44\u6e90\u3001\u56e2\u961f\u80cc\u666f\u3001\u4e1a\u52a1\u573a\u666f\u7b49\u73af\u5883\u4e0b\uff0c\u76f8\u5173\u6307\u6807\u7684\u76f8\u5bf9\u9ad8\u4f4e\u5f3a\u5f31\u5bf9\u6bd4\u662f\u4f1a\u6709\u504f\u5dee\u751a\u81f3\u53cd\u8f6c\u7684\u3002")),(0,a.kt)("h2",{id:"\u76d8\u53e4\u5f00\u53d1\u67b6\u6784\u9009\u578b\u5efa\u8bae"},"\u76d8\u53e4\u5f00\u53d1\u67b6\u6784\u9009\u578b\u5efa\u8bae"),(0,a.kt)("p",null,"\u5982\u4e0b\u662f\u4ece\u4e0d\u540c\u7ef4\u5ea6\u7b80\u5355\u7c97\u66b4\u7684\u4ee5\u5b9a\u91cf\u6216\u5b9a\u6027\u7684\u89d2\u5ea6\u7ed9\u51fa\u4e86\u4e00\u4e9b\u9009\u578b\u5efa\u8bae\uff0c\u7ed3\u8bba\u662f\u5b64\u7acb\u7684\u8131\u79bb\u5b9e\u9645\u7684\uff0c\u4ec5\u4f9b\u53c2\u8003\u3002\u91c7\u7528\u4ec0\u4e48\u6837\u7684\u67b6\u6784\u5f00\u53d1\u6a21\u5f0f\u4e0d\u80fd\u4e00\u6982\u800c\u8bba\uff0c\u9700\u8981\u5927\u5bb6\u7efc\u5408\u5f53\u4e0b\u5b9e\u9645\u60c5\u51b5 ",(0,a.kt)(d,{color:"#E6A23C",mdxType:"Highlight"},"\u914c\u60c5\u9009\u62e9")," \u3002 \ud83d\udc7b "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"-"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5355\u4f53\u5206\u5c42\u67b6\u6784"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u670d\u52a1\u5206\u5e03\u5f0f\u67b6\u6784"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5f00\u53d1\u4eba\u5458 < 5"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u7814\u53d1\u9884\u7b97 < 100 w"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u6570\u8f83\u5c0f\u7684\u7ba1\u7406\u7c7b\u7cfb\u7edf"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u9762\u5411C\u7aef\u7684\uff08\u79fb\u52a8\uff09\u4e92\u8054\u7f51\u5e94\u7528"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u591a\u4efb\u52a1\u591a\u5c0f\u7ec4\u534f\u4f5c"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u6709\u4e13\u804c\u8fd0\u7ef4\u4eba\u5458"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u8ffd\u6c42\u53ef\u7ef4\u62a4\u6027\u548c\u6269\u5c55\u6027"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u8ffd\u6c42\u6280\u672f\u56e2\u961f\u957f\u671f\u6536\u76ca & \u589e\u957f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u7532\u65b9\u4f01\u4e1a\u81ea\u5efa\u7684\u6280\u672f\u56e2\u961f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714")))))}g.isMDXComponent=!0}}]);