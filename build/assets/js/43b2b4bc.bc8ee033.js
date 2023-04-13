"use strict";(self.webpackChunkdaxiong=self.webpackChunkdaxiong||[]).push([[3800],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,d=s["".concat(c,".").concat(m)]||s[m]||g[m]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5906:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"\u57fa\u4e8e Nacos \u5b9e\u73b0\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3",authors:["xiongchun"],tags:["\u670d\u52a1\u7aef\u5f00\u53d1","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6","Nacos"],date:"2019-7-15",hide_table_of_contents:!1,slug:"pangu-dev-framework-service-discovery-center"},l=void 0,i={permalink:"/blog/blog/pangu-dev-framework-service-discovery-center",source:"@site/blog/\u57fa\u4e8e Nacos \u5b9e\u73b0\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3.md",title:"\u57fa\u4e8e Nacos \u5b9e\u73b0\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3",description:"\u6ce8\u518c\u4e2d\u5fc3\u662f\u5206\u5e03\u5f0f\u5fae\u670d\u52a1\u5f00\u53d1\u7684\u6807\u914d\u7ec4\u4ef6\uff0c\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 \u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u501f\u52a9 Nacos \u63d0\u4f9b\u52a8\u6001\u670d\u52a1\u6ce8\u518c\u548c\u670d\u52a1\u53d1\u73b0\u80fd\u529b\u3002",date:"2019-07-15T00:00:00.000Z",formattedDate:"2019\u5e747\u670815\u65e5",tags:[{label:"\u670d\u52a1\u7aef\u5f00\u53d1",permalink:"/blog/blog/tags/\u670d\u52a1\u7aef\u5f00\u53d1"},{label:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6",permalink:"/blog/blog/tags/\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"},{label:"Nacos",permalink:"/blog/blog/tags/nacos"}],readingTime:2.01,hasTruncateMarker:!0,authors:[{name:"xiongchun",title:"Pangu Framework maintainer",url:"https://gitee.com/xiong-chun",imageURL:"https://xiongchun.pulanit.com/img/xiongchun.jpg",key:"xiongchun"}],frontMatter:{title:"\u57fa\u4e8e Nacos \u5b9e\u73b0\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3",authors:["xiongchun"],tags:["\u670d\u52a1\u7aef\u5f00\u53d1","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6","Nacos"],date:"2019-7-15",hide_table_of_contents:!1,slug:"pangu-dev-framework-service-discovery-center"},prevItem:{title:"\u57fa\u4e8e Nacos \u5b9e\u73b0\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u914d\u7f6e\u4e2d\u5fc3",permalink:"/blog/blog/pangu-dev-framework-configuration-center"},nextItem:{title:"\u6d88\u606f\u961f\u5217 RabbitMQ \u5165\u95e8\u4e0e\u5b9e\u8df5",permalink:"/blog/blog/rabbitmq-quick-start-and-best-practice"}},c={authorsImageUrls:[void 0]},p=[{value:"\u6ce8\u518c\u4e2d\u5fc3\u4ecb\u7ecd",id:"\u6ce8\u518c\u4e2d\u5fc3\u4ecb\u7ecd",level:2},{value:"\u76f8\u5173\u540d\u8bcd\u89e3\u91ca",id:"\u76f8\u5173\u540d\u8bcd\u89e3\u91ca",level:3},{value:"\u6ce8\u518c\u4e2d\u5fc3",id:"\u6ce8\u518c\u4e2d\u5fc3",level:4},{value:"\u670d\u52a1\u6ce8\u518c",id:"\u670d\u52a1\u6ce8\u518c",level:4},{value:"\u670d\u52a1\u53d1\u73b0",id:"\u670d\u52a1\u53d1\u73b0",level:4},{value:"\u5065\u5eb7\u68c0\u67e5",id:"\u5065\u5eb7\u68c0\u67e5",level:4},{value:"\u6ce8\u518c\u4e2d\u5fc3\u56fe\u793a",id:"\u6ce8\u518c\u4e2d\u5fc3\u56fe\u793a",level:3},{value:"\u6ce8\u518c\u4e2d\u5fc3\u5b9e\u6218",id:"\u6ce8\u518c\u4e2d\u5fc3\u5b9e\u6218",level:2}],u={toc:p};function s(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6ce8\u518c\u4e2d\u5fc3\u662f\u5206\u5e03\u5f0f\u5fae\u670d\u52a1\u5f00\u53d1\u7684\u6807\u914d\u7ec4\u4ef6\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://pulanos.gitee.io/pangu-framework"},"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6")," \u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u501f\u52a9 ",(0,a.kt)("a",{parentName:"p",href:"https://nacos.io/en-us/index.html"},"Nacos")," \u63d0\u4f9b\u52a8\u6001\u670d\u52a1\u6ce8\u518c\u548c\u670d\u52a1\u53d1\u73b0\u80fd\u529b\u3002"),(0,a.kt)("h2",{id:"\u6ce8\u518c\u4e2d\u5fc3\u4ecb\u7ecd"},"\u6ce8\u518c\u4e2d\u5fc3\u4ecb\u7ecd"),(0,a.kt)("p",null,"\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u662f\u4ee5\u670d\u52a1\u4e3a\u4e2d\u5fc3\u67b6\u6784\uff0c\u5b9e\u73b0\u670d\u52a1\u5316\u7ba1\u7406\u7684\u6838\u5fc3\u7ec4\u4ef6\u3002\u7c7b\u4f3c\u4e8e\u76ee\u5f55\u670d\u52a1\u7684\u4f5c\u7528\uff0c\u4e3b\u8981\u7528\u6765\u5b58\u50a8\u670d\u52a1\u5b9e\u4f8b\u4fe1\u606f\uff0c\u8b6c\u5982\u63d0\u4f9b\u8005\u5730\u5740\u3001\u8def\u7531\u4fe1\u606f\u7b49\u3002\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u662f\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\u5fc5\u9009\u7684\u6807\u914d\u57fa\u7840\u8bbe\u65bd\u4e4b\u4e00\u3002"),(0,a.kt)("h3",{id:"\u76f8\u5173\u540d\u8bcd\u89e3\u91ca"},"\u76f8\u5173\u540d\u8bcd\u89e3\u91ca"),(0,a.kt)("h4",{id:"\u6ce8\u518c\u4e2d\u5fc3"},"\u6ce8\u518c\u4e2d\u5fc3"),(0,a.kt)("p",null,"\u5b58\u50a8\u670d\u52a1\u5b9e\u4f8b\u548c\u670d\u52a1\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\u7684\u7cfb\u7edf\u3002"),(0,a.kt)("h4",{id:"\u670d\u52a1\u6ce8\u518c"},"\u670d\u52a1\u6ce8\u518c"),(0,a.kt)("p",null,"\u5c06\u670d\u52a1\u5b9e\u4f8b\u5730\u5740\u548c\u5143\u6570\u636e\u4fe1\u606f\u5199\u5165\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u7684\u8fc7\u7a0b\u3002"),(0,a.kt)("h4",{id:"\u670d\u52a1\u53d1\u73b0"},"\u670d\u52a1\u53d1\u73b0"),(0,a.kt)("p",null,"\u5728\u8ba1\u7b97\u673a\u7f51\u7edc\u4e0a\uff0c\u4f7f\u7528\u670d\u52a1\u540d\u5bf9\u670d\u52a1\u7684\u5b9e\u4f8b\u5730\u5740\u548c\u5143\u6570\u636e\u8fdb\u884c\u63a2\u6d4b\uff0c\u5e76\u4ee5\u9884\u5148\u5b9a\u4e49\u7684\u63a5\u53e3\u63d0\u4f9b\u7ed9\u5ba2\u6237\u7aef\u8fdb\u884c\u67e5\u8be2\u3002"),(0,a.kt)("h4",{id:"\u5065\u5eb7\u68c0\u67e5"},"\u5065\u5eb7\u68c0\u67e5"),(0,a.kt)("p",null,"\u4ee5\u6307\u5b9a\u65b9\u5f0f\u68c0\u67e5\u670d\u52a1\u4e0b\u6302\u8f7d\u5b9e\u4f8b\u7684\u5065\u5eb7\u5ea6\uff0c\u4ece\u800c\u786e\u8ba4\u8be5\u5b9e\u4f8b\u662f\u5426\u80fd\u63d0\u4f9b\u670d\u52a1\u3002\u6839\u636e\u68c0\u67e5\u7ed3\u679c\uff0c\u5b9e\u4f8b\u4f1a\u88ab\u5224\u65ad\u4e3a\u5065\u5eb7\u6216\u4e0d\u5065\u5eb7\u3002\u5bf9\u670d\u52a1\u53d1\u8d77\u89e3\u6790\u8bf7\u6c42\u65f6\uff0c\u4e0d\u5065\u5eb7\u7684\u5b9e\u4f8b\u4e0d\u4f1a\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002"),(0,a.kt)("h3",{id:"\u6ce8\u518c\u4e2d\u5fc3\u56fe\u793a"},"\u6ce8\u518c\u4e2d\u5fc3\u56fe\u793a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u6ce8\u518c\u4e2d\u5fc3\u56fe\u793a",src:r(753).Z,width:"2872",height:"1358"})),(0,a.kt)("h2",{id:"\u6ce8\u518c\u4e2d\u5fc3\u5b9e\u6218"},"\u6ce8\u518c\u4e2d\u5fc3\u5b9e\u6218"),(0,a.kt)("p",null,"\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"./blog/pangu-dev-framework-create-microservice"},"\u5982\u4f55\u57fa\u4e8e\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u5f00\u53d1\u5fae\u670d\u52a1\u5e94\u7528")," \u535a\u6587\uff0c\u90a3\u91cc\u5df2\u7ecf\u8be6\u7ec6\u5b8c\u6574\u7684\u8bb2\u89e3\u4e86\u670d\u52a1\u6ce8\u518c&\u670d\u52a1\u53d1\u73b0\u7684\u76f8\u5173\u5185\u5bb9\u3002"))}s.isMDXComponent=!0},753:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/8-pangu-framework-nacos-7fa670ee776977bdde35ba85cffeb379.png"}}]);