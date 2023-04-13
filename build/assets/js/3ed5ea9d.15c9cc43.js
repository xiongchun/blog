"use strict";(self.webpackChunkdaxiong=self.webpackChunkdaxiong||[]).push([[4178],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),i=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=i(a),b=r,d=c["".concat(u,".").concat(b)]||c[b]||m[b]||l;return a?n.createElement(d,o(o({ref:t},s),{},{components:a})):n.createElement(d,o({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=b;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[c]="string"==typeof e?e:r,o[1]=p;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(7462),r=a(7294),l=a(6010),o=a(2389),p=a(7392),u=a(7094),i=a(2466);const s="tabList__CuJ",c="tabItem_LNqP";function m(e){const{lazy:t,block:a,defaultValue:o,values:m,groupId:b,className:d}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,p.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===o?o:o??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==h&&!k.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:y}=(0,u.U)(),[N,w]=(0,r.useState)(h),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,i.o5)();if(null!=b){const e=f[b];null!=e&&e!==N&&k.some((t=>t.value===e))&&w(e)}const I=e=>{const t=e.currentTarget,a=x.indexOf(t),n=k[a].value;n!==N&&(T(t),w(n),null!=b&&y(b,String(n)))},S=e=>{let t=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;t=x[a]??x[0];break}case"ArrowLeft":{const a=x.indexOf(e.currentTarget)-1;t=x[a]??x[x.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},d)},k.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:S,onClick:I},o,{className:(0,l.Z)("tabs__item",c,o?.className,{"tabs__item--active":N===t})}),a??t)}))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function b(e){const t=(0,o.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},3307:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>b,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),o=a(5162);const p={title:"\u5982\u4f55\u8fdb\u884c\u76d8\u53e4\u5fae\u670d\u52a1\u7f51\u5173\u5f00\u53d1",authors:["xiongchun"],tags:["\u670d\u52a1\u7aef\u5f00\u53d1","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"],date:"2021-2-8",hide_table_of_contents:!1,slug:"deploy-pangu-dev-framework-create-microservice-as-webapi"},u=void 0,i={permalink:"/blog/blog/deploy-pangu-dev-framework-create-microservice-as-webapi",source:"@site/blog/\u5982\u4f55\u8fdb\u884c\u76d8\u53e4\u5fae\u670d\u52a1\u7f51\u5173\u5f00\u53d1.md",title:"\u5982\u4f55\u8fdb\u884c\u76d8\u53e4\u5fae\u670d\u52a1\u7f51\u5173\u5f00\u53d1",description:"\u5728\u4e0a\u6587\u300a\u5982\u4f55\u5f00\u53d1\u5fae\u670d\u52a1\u5e94\u7528\u300b\u4e2d\uff0c\u5df2\u7ecf\u4ecb\u7ecd\u4e86\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u5fae\u670d\u52a1\u5e94\u7528\u4ee5\u53ca\u5fae\u670d\u52a1\u6a21\u5757\u4e4b\u95f4\u7684\u4e92\u76f8\u8c03\u7528\u3002\u672c\u6587\u4e3b\u8981\u8ba8\u8bba\u5982\u4f55\u5c06\u5fae\u670d\u52a1\u53d1\u5e03\u4e3a HTTP \u63a5\u53e3\u4f9b\u524d\u7aef\u8c03\u7528\u3002\uff08HTTP -> Dubbo Provider\uff09",date:"2021-02-08T00:00:00.000Z",formattedDate:"2021\u5e742\u67088\u65e5",tags:[{label:"\u670d\u52a1\u7aef\u5f00\u53d1",permalink:"/blog/blog/tags/\u670d\u52a1\u7aef\u5f00\u53d1"},{label:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6",permalink:"/blog/blog/tags/\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"}],readingTime:5.785,hasTruncateMarker:!0,authors:[{name:"xiongchun",title:"Pangu Framework maintainer",url:"https://gitee.com/xiong-chun",imageURL:"https://xiongchun.pulanit.com/img/xiongchun.jpg",key:"xiongchun"}],frontMatter:{title:"\u5982\u4f55\u8fdb\u884c\u76d8\u53e4\u5fae\u670d\u52a1\u7f51\u5173\u5f00\u53d1",authors:["xiongchun"],tags:["\u670d\u52a1\u7aef\u5f00\u53d1","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"],date:"2021-2-8",hide_table_of_contents:!1,slug:"deploy-pangu-dev-framework-create-microservice-as-webapi"},prevItem:{title:"TLog \u52a9\u529b\u76d8\u53e4\u6846\u67b6\u5b9e\u73b0\u5fae\u670d\u52a1\u94fe\u8def\u65e5\u5fd7\u8ffd\u8e2a",permalink:"/blog/blog/tlog"},nextItem:{title:"\u4f7f\u7528 Caddy \u90e8\u7f72\u76d8\u53e4\u9879\u76ee\u5b98\u7f51",permalink:"/blog/blog/deploy-pangu-website-by-caddy"}},s={authorsImageUrls:[void 0]},c=[{value:"\u6280\u672f\u5b9e\u73b0\u65b9\u6848",id:"\u6280\u672f\u5b9e\u73b0\u65b9\u6848",level:2},{value:"\u6280\u672f\u65b9\u6848\u9009\u578b\u5bf9\u6bd4",id:"\u6280\u672f\u65b9\u6848\u9009\u578b\u5bf9\u6bd4",level:2},{value:"\u57fa\u4e8e Spring WebMVC \u7684\u63a5\u53e3\u8c03\u7528\u6a21\u5f0f",id:"\u57fa\u4e8e-spring-webmvc-\u7684\u63a5\u53e3\u8c03\u7528\u6a21\u5f0f",level:3},{value:"\u57fa\u4e8e Apache ShenYu \u7684\u6cdb\u5316\u8c03\u7528\u6a21\u5f0f",id:"\u57fa\u4e8e-apache-shenyu-\u7684\u6cdb\u5316\u8c03\u7528\u6a21\u5f0f",level:3},{value:"\u7f16\u7a0b\u5b9e\u6218\u4e00\uff1a\u57fa\u4e8e Spring WebMVC \u7684\u63a5\u53e3\u8c03\u7528\u6a21\u5f0f",id:"\u7f16\u7a0b\u5b9e\u6218\u4e00\u57fa\u4e8e-spring-webmvc-\u7684\u63a5\u53e3\u8c03\u7528\u6a21\u5f0f",level:2},{value:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757",id:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757",level:3},{value:"\u672c\u5730\u914d\u7f6e",id:"\u672c\u5730\u914d\u7f6e",level:3},{value:"\u8c03\u7528\u5fae\u670d\u52a1\u63a5\u53e3",id:"\u8c03\u7528\u5fae\u670d\u52a1\u63a5\u53e3",level:3},{value:"\u542f\u52a8\u5165\u53e3",id:"\u542f\u52a8\u5165\u53e3",level:3},{value:"\u672c\u8303\u4f8b\u6e90\u7801",id:"\u672c\u8303\u4f8b\u6e90\u7801",level:3},{value:"\u7f16\u7a0b\u5b9e\u6218\u4e8c\uff1a\u57fa\u4e8e ShenYu \u7f51\u5173\u7684\u6cdb\u5316\u8c03\u7528\u6a21\u5f0f",id:"\u7f16\u7a0b\u5b9e\u6218\u4e8c\u57fa\u4e8e-shenyu-\u7f51\u5173\u7684\u6cdb\u5316\u8c03\u7528\u6a21\u5f0f",level:2}],m={toc:c};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u4e0a\u6587",(0,r.kt)("a",{parentName:"p",href:"/blog/pangu-dev-framework-create-microservice"},"\u300a\u5982\u4f55\u5f00\u53d1\u5fae\u670d\u52a1\u5e94\u7528\u300b"),"\u4e2d\uff0c\u5df2\u7ecf\u4ecb\u7ecd\u4e86\u5982\u4f55\u5f00\u53d1\u4e00\u4e2a\u5fae\u670d\u52a1\u5e94\u7528\u4ee5\u53ca\u5fae\u670d\u52a1\u6a21\u5757\u4e4b\u95f4\u7684\u4e92\u76f8\u8c03\u7528\u3002\u672c\u6587\u4e3b\u8981\u8ba8\u8bba\u5982\u4f55\u5c06\u5fae\u670d\u52a1\u53d1\u5e03\u4e3a HTTP \u63a5\u53e3\u4f9b\u524d\u7aef\u8c03\u7528\u3002\uff08HTTP -> Dubbo Provider\uff09"),(0,r.kt)("h2",{id:"\u6280\u672f\u5b9e\u73b0\u65b9\u6848"},"\u6280\u672f\u5b9e\u73b0\u65b9\u6848"),(0,r.kt)("p",null,"\u5728\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u4e0b\u5b9e\u73b0\u5c06\u5fae\u670d\u52a1\u53d1\u5e03\u4e3a HTTP \u63a5\u53e3\u6709\u4e24\u79cd\u65b9\u5f0f\u3002  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://pulanos.gitee.io/pangu-framework/docs/quick-start/gateway/webmvc"},"\u57fa\u4e8e Spring WebMVC \u7684\u63a5\u53e3\u8c03\u7528\u6a21\u5f0f")),(0,r.kt)("br",{parentName:"li"}),"\u4e25\u683c\u610f\u4e49\u4e0a\u8bf4\uff0c\u8fd9\u53ea\u7b97\u4e00\u79cd\u5c06 Dubbo \u670d\u52a1\u88c5\u4e3a HTTP \u63a5\u53e3\u7684\u4f20\u7edf\u7ecf\u5178\u5f00\u53d1\u6a21\u5f0f\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://pulanos.gitee.io/pangu-framework/docs/quick-start/gateway/shenyu"},"\u57fa\u4e8e Apache ShenYu \u7684\u6cdb\u5316\u8c03\u7528\u6a21\u5f0f")),(0,r.kt)("br",{parentName:"li"}),"\u8bbf\u95ee\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://shenyu.apache.org/"},"Apache ShenYu"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5176\u5b83"),(0,r.kt)("br",{parentName:"li"}),"\u7f51\u5173\u7684\u5b9e\u73b0\u65b9\u5f0f\u6216\u73b0\u6210\u6280\u672f\u7ec4\u4ef6\u8fd8\u5f88\u591a\u3002\u6bd4\u5982\uff1a\u4f60\u4e5f\u53ef\u4ee5\u81ea\u5df1\u5728 WebMVC \u6216\u8005 WebFlex \u6846\u67b6\u4e0a\u5b9e\u73b0 Dubbo \u6cdb\u5316\u8c03\u7528\uff1b\u5176\u6b21\uff0c\u9664 ShenYu \u4e4b\u5916\uff0cDubbo \u5b98\u65b9\u4e5f ",(0,r.kt)("a",{parentName:"li",href:"https://cn.dubbo.apache.org/zh-cn/overview/what/ecosystem/gateway/"},"\u63a8\u8350\u4e86\u51e0\u6b3e\u7684\u7f51\u5173\u7ec4\u4ef6\u53ef\u4ee5\u9009\u62e9"),"\u3002")),(0,r.kt)("h2",{id:"\u6280\u672f\u65b9\u6848\u9009\u578b\u5bf9\u6bd4"},"\u6280\u672f\u65b9\u6848\u9009\u578b\u5bf9\u6bd4"),(0,r.kt)("h3",{id:"\u57fa\u4e8e-spring-webmvc-\u7684\u63a5\u53e3\u8c03\u7528\u6a21\u5f0f"},"\u57fa\u4e8e Spring WebMVC \u7684\u63a5\u53e3\u8c03\u7528\u6a21\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5b9e\u73b0\u539f\u7406"),(0,r.kt)("br",{parentName:"li"}),"\u57fa\u4e8e Spring WebMVC\uff0c\u672c\u8d28\u4e0a\u662f Servlet \u540c\u6b65\u8bf7\u6c42\u673a\u5236\uff0c\u4f9d\u8d56 Servlet \u5bb9\u5668\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dubbo \u96c6\u6210"),(0,r.kt)("br",{parentName:"li"}),"\u4f9d\u8d56\u63a5\u53e3 JAR \uff0c\u901a\u8fc7\u63a5\u53e3\u8c03\u7528 Dubbo \u670d\u52a1\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6027\u80fd & \u590d\u6742\u5ea6"),(0,r.kt)("br",{parentName:"li"}),"\u6027\u80fd\u9ad8\uff0c\u5f00\u53d1\u7b80\u5355\uff0c\u90e8\u7f72\u8fd0\u7ef4\u7b80\u5355\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5176\u5b83\u7279\u6027"),"  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5173\u4e8e\u8de8\u57df\u914d\u7f6e\u3001\u6d41\u91cf\u63a7\u5236\u3001\u9274\u6743\u3001\u7194\u65ad\u3001\u767d\u540d\u5355\u7b49\uff08\u76d8\u53e4 Web \u6a21\u5757\u63d0\u4f9b\u4e86\u90e8\u5206\u529f\u80fd\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u4e86Controller\u805a\u5408\u5c42\uff0c\u53ef\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u51cf\u5c11\u4e86\u5fae\u670d\u52a1\u4e4b\u95f4\u7684\u5faa\u73af\u4f9d\u8d56\u548c\u8c03\u7528\u3002")))),(0,r.kt)("h3",{id:"\u57fa\u4e8e-apache-shenyu-\u7684\u6cdb\u5316\u8c03\u7528\u6a21\u5f0f"},"\u57fa\u4e8e Apache ShenYu \u7684\u6cdb\u5316\u8c03\u7528\u6a21\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5b9e\u73b0\u539f\u7406"),(0,r.kt)("br",{parentName:"li"}),"\u57fa\u4e8e Spring Webflex\uff0c\u4f9d\u8d56 Netty \u6846\u67b6\u6216 Servlet 3.1+ \u5bb9\u5668\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dubbo \u96c6\u6210"),(0,r.kt)("br",{parentName:"li"}),"\u4e0d\u4f9d\u8d56\u63a5\u53e3 JAR\uff0c\u6cdb\u5316\u8c03\u7528 Dubbo \u670d\u52a1\u3002\uff08\u9700\u8981\u7ef4\u62a4\u63a5\u53e3\u5143\u6570\u636e\uff0c\u6709\u4e00\u5b9a\u7684\u6027\u80fd\u635f\u8017\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6027\u80fd & \u590d\u6742\u5ea6"),(0,r.kt)("br",{parentName:"li"}),"\u7f51\u5173\u81ea\u8eab\u6027\u80fd\u8f83\u9ad8\uff08Webflex\u975e\u963b\u585e\u6a21\u578b\uff09\u3002\u90e8\u7f72\u548c\u8fd0\u7ef4\u7f51\u5173\u7cfb\u7edf\u5e26\u6765\u4e00\u5b9a\u7684\u6210\u672c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5176\u5b83\u7279\u6027"),(0,r.kt)("br",{parentName:"li"}),"\u652f\u6301\u6d41\u91cf\u63a7\u5236\u3001\u9274\u6743\u3001\u7194\u65ad\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u3002")),(0,r.kt)("admonition",{title:"\u63d0\u793a",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u4e0a\u8ff0\u662f\u4ece\u4e0d\u540c\u7ef4\u5ea6\u7b80\u5355\u7c97\u66b4\u7684\u4ee5\u5b9a\u6027\u7684\u89d2\u5ea6\u7ed9\u51fa\u4e86\u4e00\u4e9b\u6bd4\u8f83\uff0c\u7ed3\u8bba\u662f\u5b64\u7acb\u4e14\u8131\u79bb\u9879\u76ee\u80cc\u666f\u548c\u4e1a\u52a1\u573a\u666f\u7684\uff0c\u4ec5\u4f9b\u53c2\u8003\u3002\u91c7\u7528\u4ec0\u4e48\u6837\u7684\u5f00\u53d1\u6a21\u5f0f\u4e0d\u80fd\u4e00\u6982\u800c\u8bba\uff0c\u9700\u8981\u7efc\u5408\u5b9e\u9645\u60c5\u51b5\u914c\u60c5\u9009\u62e9\u3002\u4f46\u5bf9\u4e8e\u5927\u90e8\u5206\u76d8\u53e4\u5f00\u53d1\u9879\u76ee\u800c\u8a00\uff0c\u6211\u4eec\u63a8\u8350\u6574\u4f53\u6027\u4ef7\u6bd4\u8f83\u9ad8\u7684\u65b9\u6848\u4e00\u3002\u5f53\u7136\uff0c\u5982\u679c\u60a8\u7684\u9879\u76ee\u80cc\u666f\u9002\u5408\u4f7f\u7528 ShenYu \u7f51\u5173\uff0c\u6211\u4eec\u4e5f\u7ed9\u51fa\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/blog/pangu-dev-framework-apache-shenyu"},"\u8be6\u7ec6\u7684\u96c6\u6210\u65b9\u6848"),"\uff0c\u8fd9\u4e5f\u4f1a\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u9009\u62e9\u3002")),(0,r.kt)("h2",{id:"\u7f16\u7a0b\u5b9e\u6218\u4e00\u57fa\u4e8e-spring-webmvc-\u7684\u63a5\u53e3\u8c03\u7528\u6a21\u5f0f"},"\u7f16\u7a0b\u5b9e\u6218\u4e00\uff1a\u57fa\u4e8e Spring WebMVC \u7684\u63a5\u53e3\u8c03\u7528\u6a21\u5f0f"),(0,r.kt)("p",null,"\u6b64\u79cd\u6a21\u5f0f\u57fa\u4e8e SpringMVC \u901a\u8fc7 Controller \u8c03\u7528\u540e\u7aef Dubbo \u670d\u52a1\u3002\u4f9d\u8d56 Servlet \u5bb9\u5668\uff0c\u9700\u8981\u5f15\u5165\u670d\u52a1\u63a5\u53e3\u5305\u3002\u5bf9\u4e8e HTTP \u63a5\u53e3\u5c42\u9762\u7684\u9274\u6743\u3001\u6d41\u63a7\u7b49\u9700\u6c42\u90fd\u9700\u8981\u57fa\u4e8e\u62e6\u622a\u5668\u6765\u5b9e\u73b0\u3002\u9ad8\u53ef\u7528\u548c\u6027\u80fd\u63d0\u5347\u53ef\u901a\u8fc7Caddy/Nginx \u5145\u5f53 API \u7f51\u5173 \u53cd\u5411\u4ee3\u7406\u540e\u7aef\u591a\u4e2a Web \u8282\u70b9\u5b9e\u73b0\u3002"),(0,r.kt)("h3",{id:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757"},"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757"),(0,r.kt)(l.Z,{defaultValue:"dependency3",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"parent",label:"\u76d8\u53e4 Parent",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<parent>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-parent</artifactId>\n    <version>latest.version.xxx</version>\n    <relativePath/>\n</parent>\n"))),(0,r.kt)(o.Z,{value:"dependency1",label:"\u57fa\u7840\u6a21\u5757",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-spring-boot-starter</artifactId>\n</dependency>\n"))),(0,r.kt)(o.Z,{value:"dependency2",label:"Dubbo\u6a21\u5757",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-dubbo-spring-boot-starter</artifactId>\n</dependency>\n"))),(0,r.kt)(o.Z,{value:"dependency3",label:"Web\u6a21\u5757",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-web-spring-boot-starter</artifactId>\n</dependency>\n"))),(0,r.kt)(o.Z,{value:"dependency4",label:"\u670d\u52a1\u63a5\u53e3\u5305",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-examples-dubbo-api</artifactId>\n    <version>1.0.0</version>\n</dependency>\n")))),(0,r.kt)("h3",{id:"\u672c\u5730\u914d\u7f6e"},"\u672c\u5730\u914d\u7f6e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e3a\u4fbf\u4e8e\u7406\u89e3\uff0c\u672c\u6587\u57fa\u4e8e\u672c\u5730\u914d\u7f6e\u7684\u65b9\u5f0f\u7f16\u5199\u3002\u82e5\u6539\u4e3a\u6807\u51c6\u7684 Nacos \u914d\u7f6e\u4e2d\u5fc3\u6a21\u5f0f\uff0c\u8bf7\u53c2\u9605\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://pulanos.gitee.io/pangu-framework/docs/advanced-guide/nacos-config-center"},"\u914d\u7f6e\u4e2d\u5fc3")," \u7ae0\u8282\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"spring.application.name=pangu-examples-webapi-dubbo-service-based\nspring.jackson.time-zone=GMT+8\n\npangu.web.cross-origin=true\n\ndubbo.protocol.name=dubbo\ndubbo.protocol.port=-1 \ndubbo.consumer.timeout=5000\ndubbo.registry.address=nacos://${nacos.server-addr}?namespace=${nacos.namespace}\ndubbo.consumer.check=false\n\nlogging.level.root=INFO\n")),(0,r.kt)("h3",{id:"\u8c03\u7528\u5fae\u670d\u52a1\u63a5\u53e3"},"\u8c03\u7528\u5fae\u670d\u52a1\u63a5\u53e3"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5728\u4efb\u4f55\u4e00\u4e2a SpringBean \u7ec4\u4ef6\u4e2d\uff08\u9488\u5bf9\u7f51\u5173\u6a21\u5757\u800c\u8a00\u4e00\u822c\u662f Controller \u4e2d\uff09\uff0c\u5f15\u5165\u670d\u52a1\u63a5\u53e3\u540e\u5c31\u50cf\u672c\u5730\u63a5\u53e3\u8c03\u7528\u4e00\u6837\u8c03\u7528\u8fdc\u7a0b\u670d\u52a1\u3002Dubbo \u5c06\u63d0\u4f9b\u9ad8\u6027\u80fd\u7684\u57fa\u4e8e\u4ee3\u7406\u7684\u8fdc\u7a0b\u8c03\u7528\u80fd\u529b\uff0c\u670d\u52a1\u4ee5\u63a5\u53e3\u4e3a\u7c92\u5ea6\uff0c\u4e3a\u5f00\u53d1\u8005\u5c4f\u853d\u8fdc\u7a0b\u8c03\u7528\u5e95\u5c42\u7ec6\u8282\u3002\n\u5982\u4e0b\u6240\u793a\uff0c\u901a\u8fc7 Cotroller \u8c03\u7528\u8fdc\u7a0b\u670d\u52a1\u63a5\u53e3\uff0c\u5b9e\u73b0\u5c06\u5fae\u670d\u52a1\u63a5\u53e3\u53d1\u5e03\u4e3a WebAPI\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="DemoController.java"',title:'"DemoController.java"'},'// \u6ce8\u5165 Dubbo \u670d\u52a1\u63a5\u53e3\n@Reference(version = "1.0.0", group = "pangu-examples-dubbo-service")\nprivate UserService userService;\n\n/**\n * \u901a\u8fc7 Spring MVC \u5c06 Duboo \u5fae\u670d\u52a1\u63a5\u53e3\u53d1\u5e03\u4e3a HTTP API\n * @return\n */\n@RequestMapping("/case1")\npublic Result<List<UserOut>> case1() {\n    log.info("call case1...");\n    UserIn userIn = new UserIn().setUserType("1");\n    List<UserOut> userOuts = userService.listUserOuts(userIn);\n    return Result.success(userOuts);\n}\n')),(0,r.kt)("h3",{id:"\u542f\u52a8\u5165\u53e3"},"\u542f\u52a8\u5165\u53e3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"@EnableDubbo\n@SpringBootApplication\npublic class DubboProviderApplication {\n    public static void main(String[] args) {\n        PanGuApplicationBuilder.init(DubboProviderApplication.class).run(args);\n    }\n}\n")),(0,r.kt)("h3",{id:"\u672c\u8303\u4f8b\u6e90\u7801"},"\u672c\u8303\u4f8b\u6e90\u7801"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-dubbo-api"},"pangu-examples-dubbo-api"),"\uff1aDubbo \u670d\u52a1\u63a5\u53e3\u5305"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-dubbo-service"},"pangu-examples-dubbo-service"),"\uff1aDubbo \u670d\u52a1\u63d0\u4f9b\u8005"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-webapi-dubbo-service-based"},"pangu-examples-webapi-dubbo-service-based"),"\uff1a\u57fa\u4e8e Spring Controller \u5c06 Dubbo \u670d\u52a1\u53d1\u5e03\u4e3a HTTP \u63a5\u53e3")),(0,r.kt)("h2",{id:"\u7f16\u7a0b\u5b9e\u6218\u4e8c\u57fa\u4e8e-shenyu-\u7f51\u5173\u7684\u6cdb\u5316\u8c03\u7528\u6a21\u5f0f"},"\u7f16\u7a0b\u5b9e\u6218\u4e8c\uff1a\u57fa\u4e8e ShenYu \u7f51\u5173\u7684\u6cdb\u5316\u8c03\u7528\u6a21\u5f0f"),(0,r.kt)("p",null,"\u8be6\u89c1\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://xiongchun.pulanit.com/blog/pangu-dev-framework-apache-shenyu"},"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u96c6\u6210 Apache ShenYu \u7f51\u5173"),"\u3002"))}b.isMDXComponent=!0}}]);