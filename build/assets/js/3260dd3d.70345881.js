"use strict";(self.webpackChunkdaxiong=self.webpackChunkdaxiong||[]).push([[7241],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),l=a(6010),i=a(2389),o=a(7392),p=a(7094),s=a(2466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){const{lazy:t,block:a,defaultValue:i,values:m,groupId:d,className:g}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,o.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===i?i:i??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==h&&!k.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:y}=(0,p.U)(),[N,x]=(0,r.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:w}=(0,s.o5)();if(null!=d){const e=f[d];null!=e&&e!==N&&k.some((t=>t.value===e))&&x(e)}const q=e=>{const t=e.currentTarget,a=T.indexOf(t),n=k[a].value;n!==N&&(w(t),x(n),null!=d&&y(d,String(n)))},Z=e=>{let t=null;switch(e.key){case"Enter":q(e);break;case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;t=T[a]??T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;t=T[a]??T[T.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},g)},k.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:Z,onClick:q},i,{className:(0,l.Z)("tabs__item",c,i?.className,{"tabs__item--active":N===t})}),a??t)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,i.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},7222:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),i=a(5162);const o={title:"\u6d88\u606f\u961f\u5217 RabbitMQ \u5165\u95e8\u4e0e\u5b9e\u8df5",authors:["xiongchun"],tags:["\u670d\u52a1\u7aef\u5f00\u53d1","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6","\u6d88\u606f\u961f\u5217"],date:new Date("2018-11-29T00:00:00.000Z"),hide_table_of_contents:!1,slug:"rabbitmq-quick-start-and-best-practice"},p=void 0,s={permalink:"/blog/blog/rabbitmq-quick-start-and-best-practice",source:"@site/blog/\u6d88\u606f\u961f\u5217 RabbitMQ \u5165\u95e8\u4e0e\u5b9e\u8df5.md",title:"\u6d88\u606f\u961f\u5217 RabbitMQ \u5165\u95e8\u4e0e\u5b9e\u8df5",description:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 \u7f3a\u7701\u4f7f\u7528\u7684\u6d88\u606f\u961f\u5217\u4e2d\u95f4\u4ef6\u662f RabbitMQ\u3002\u6d88\u606f\u961f\u5217\u5728\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u5f02\u6b65\u901a\u4fe1\u3001\u670d\u52a1\u89e3\u8026\u3001\u6d88\u5cf0\u586b\u8c37\u3001\u7f13\u5b58\u540c\u6b65\u7b49\u5e94\u7528\u573a\u666f\u4e0b\u6709\u5e7f\u6cdb\u7684\u4f7f\u7528\u3002",date:"2018-11-29T00:00:00.000Z",formattedDate:"2018\u5e7411\u670829\u65e5",tags:[{label:"\u670d\u52a1\u7aef\u5f00\u53d1",permalink:"/blog/blog/tags/\u670d\u52a1\u7aef\u5f00\u53d1"},{label:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6",permalink:"/blog/blog/tags/\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"},{label:"\u6d88\u606f\u961f\u5217",permalink:"/blog/blog/tags/\u6d88\u606f\u961f\u5217"}],readingTime:7.285,hasTruncateMarker:!0,authors:[{name:"xiongchun",title:"Pangu Framework maintainer",url:"https://gitee.com/xiong-chun",imageURL:"https://xiongchun.pulanit.com/img/xiongchun.jpg",key:"xiongchun"}],frontMatter:{title:"\u6d88\u606f\u961f\u5217 RabbitMQ \u5165\u95e8\u4e0e\u5b9e\u8df5",authors:["xiongchun"],tags:["\u670d\u52a1\u7aef\u5f00\u53d1","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6","\u6d88\u606f\u961f\u5217"],date:"2018-11-29T00:00:00.000Z",hide_table_of_contents:!1,slug:"rabbitmq-quick-start-and-best-practice"},prevItem:{title:"\u57fa\u4e8e Nacos \u5b9e\u73b0\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3",permalink:"/blog/blog/pangu-dev-framework-service-discovery-center"},nextItem:{title:"\u57fa\u4e8e Mybatis Plus \u7684\u6570\u636e\u6301\u4e45\u5316 API \u603b\u7ed3",permalink:"/blog/blog/mybatis-plus-data-persistance-summary"}},u={authorsImageUrls:[void 0]},c=[{value:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757",id:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757",level:2},{value:"\u961f\u5217\u89c4\u5212",id:"\u961f\u5217\u89c4\u5212",level:2},{value:"\u56fe\u793a\u8bf4\u660e",id:"\u56fe\u793a\u8bf4\u660e",level:3},{value:"\u521b\u5efa\u961f\u5217",id:"\u521b\u5efa\u961f\u5217",level:2},{value:"\u6d88\u606f\u751f\u4ea7\u8005",id:"\u6d88\u606f\u751f\u4ea7\u8005",level:2},{value:"\u672c\u5730\u914d\u7f6e",id:"\u672c\u5730\u914d\u7f6e",level:3},{value:"\u6d88\u606f\u53d1\u9001\u4ee3\u7801",id:"\u6d88\u606f\u53d1\u9001\u4ee3\u7801",level:3},{value:"\u6d88\u606f\u6d88\u8d39\u8005",id:"\u6d88\u606f\u6d88\u8d39\u8005",level:2},{value:"\u672c\u5730\u914d\u7f6e",id:"\u672c\u5730\u914d\u7f6e-1",level:3},{value:"\u5173\u952e\u914d\u7f6e\u9879\u8bf4\u660e",id:"\u5173\u952e\u914d\u7f6e\u9879\u8bf4\u660e",level:4},{value:"\u6d88\u606f\u76d1\u542c\u4ee3\u7801",id:"\u6d88\u606f\u76d1\u542c\u4ee3\u7801",level:3},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:2},{value:"\u6d88\u8d39\u8005\uff1a\u542f\u52a8\u6d88\u8d39\u76d1\u542c\u7a0b\u5e8f",id:"\u6d88\u8d39\u8005\u542f\u52a8\u6d88\u8d39\u76d1\u542c\u7a0b\u5e8f",level:3},{value:"\u751f\u4ea7\u8005\uff1a\u6267\u884c\u6d4b\u8bd5\u7528\u4f8b\u53d1\u9001\u6d88\u606f",id:"\u751f\u4ea7\u8005\u6267\u884c\u6d4b\u8bd5\u7528\u4f8b\u53d1\u9001\u6d88\u606f",level:3},{value:"\u6d4b\u8bd5\u7ed3\u679c\u622a\u56fe",id:"\u6d4b\u8bd5\u7ed3\u679c\u622a\u56fe",level:3},{value:"\u751f\u4ea7\u8005",id:"\u751f\u4ea7\u8005",level:4},{value:"\u6d88\u8d39\u8005",id:"\u6d88\u8d39\u8005",level:4},{value:"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801",id:"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801",level:2}],m={toc:c};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulanos.gitee.io/pangu-framework"},"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6")," \u7f3a\u7701\u4f7f\u7528\u7684\u6d88\u606f\u961f\u5217\u4e2d\u95f4\u4ef6\u662f ",(0,r.kt)("a",{parentName:"p",href:"https://www.rabbitmq.com/"},"RabbitMQ"),"\u3002\u6d88\u606f\u961f\u5217\u5728\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u5f02\u6b65\u901a\u4fe1\u3001\u670d\u52a1\u89e3\u8026\u3001\u6d88\u5cf0\u586b\u8c37\u3001\u7f13\u5b58\u540c\u6b65\u7b49\u5e94\u7528\u573a\u666f\u4e0b\u6709\u5e7f\u6cdb\u7684\u4f7f\u7528\u3002"),(0,r.kt)("h2",{id:"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757"},"\u5b89\u88c5\u76f8\u5173\u76d8\u53e4\u6a21\u5757"),(0,r.kt)(l.Z,{defaultValue:"dependency2",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"parent",label:"\u76d8\u53e4 Parent",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<parent>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-parent</artifactId>\n    <version>latest.version.xxx</version>\n    <relativePath/>\n</parent>\n"))),(0,r.kt)(i.Z,{value:"dependency1",label:"\u57fa\u7840\u6a21\u5757",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-spring-boot-starter</artifactId>\n</dependency>\n"))),(0,r.kt)(i.Z,{value:"dependency2",label:"\u6d88\u606f\u961f\u5217\u6a21\u5757",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-rabbitmq-spring-boot-starter</artifactId>\n</dependency>\n")))),(0,r.kt)("h2",{id:"\u961f\u5217\u89c4\u5212"},"\u961f\u5217\u89c4\u5212"),(0,r.kt)("admonition",{title:"\u5efa\u8bae",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5efa\u8bae\u63d0\u524d\u89c4\u5212\u961f\u5217\u7ed3\u6784\u6a21\u578b\uff0c\u800c\u4e0d\u662f\u901a\u8fc7\u5ba2\u6237\u7aef API \u52a8\u6001\u521b\u5efa\u6d88\u606f\u4ea4\u6362\u673a\u548c\u7ed1\u5b9a\u961f\u5217\u3002")),(0,r.kt)("p",null,"\u6839\u636e\u5e94\u7528\u573a\u666f\u548c\u4e1a\u52a1\u7c7b\u578b\u5148\u89c4\u5212\u8bbe\u8ba1\u51fa\u961f\u5217\u7ed3\u6784\u6a21\u578b\uff0c\u7136\u540e\u5206\u522b\u5c06\u961f\u5217\u76f8\u5173\u4fe1\u606f\u5206\u914d\u7ed9\u751f\u4ea7\u4fa7\u548c\u6d88\u8d39\u4fa7\u5f00\u53d1\u4eba\u5458\u3002\u672c\u6559\u7a0b\u4f7f\u7528\u7684\u961f\u5217\u6a21\u578b\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,r.kt)("img",{width:"580",src:a(5901).Z,alt:"\u961f\u5217\u89c4\u5212"}),(0,r.kt)("h3",{id:"\u56fe\u793a\u8bf4\u660e"},"\u56fe\u793a\u8bf4\u660e"),(0,r.kt)("p",null,"\u4e0a\u56fe\u6240\u793a\u865a\u62df\u673a\u3001\u4ea4\u6362\u4e3b\u673a\u3001\u961f\u5217\u3001\u8def\u7531\u7c7b\u578b\u3001\u8def\u7531\u952e\u7b49\u4e3a RabbitMQ \u4e2d\u95f4\u4ef6\u7684\u6982\u5ff5\u3002\u672c\u6587\u5bf9\u5176\u505a\u5982\u4e0b\u7b80\u8981\u63cf\u8ff0\uff0c\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://www.rabbitmq.com/"},"RabbitMQ")," \u76f8\u5173\u6587\u6863\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u865a\u62df\u4e3b\u673a\uff08Virtual Host\uff09"),(0,r.kt)("br",{parentName:"li"}),"\u4e00\u4e2a\u8d44\u6e90\u7ba1\u7406\u6982\u5ff5\uff0c\u7528\u4f5c\u903b\u8f91\u9694\u79bb\u3002\u4e0d\u540c Vhost \u4e4b\u95f4\u7684 Exchange \u548c Queue \u76f8\u4e92\u9694\u79bb\uff0c\u4e92\u4e0d\u5e72\u6270\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4ea4\u6362\u673a\uff08Exchange\uff09"),(0,r.kt)("br",{parentName:"li"}),"\u751f\u4ea7\u8005\u5c06\u6d88\u606f\u53d1\u9001\u5230 Exchange \u4e2d\uff0cExchange \u6839\u636e\u6d88\u606f\u7684\u5c5e\u6027\u6216\u5185\u5bb9\u5c06\u6d88\u606f\u8def\u7531\u5230\u4e00\u4e2a\u6216\u591a\u4e2a Queue \u4e2d\uff08\u6216\u8005\u4e22\u5f03\uff09\uff0cConsumer \u4ece Queue \u4e2d\u62c9\u53d6\u6d88\u606f\u8fdb\u884c\u6d88\u8d39\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8def\u7531\u7c7b\u578b"),(0,r.kt)("br",{parentName:"li"}),"\u4ea4\u6362\u673a\u7684\u5173\u952e\u5c5e\u6027\u3002\u5305\u62ec\uff1aDirect\u3001Fanout\u3001Topic\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Direct"),"\uff1a\u8be5\u7c7b\u578b\u7684\u4ea4\u6362\u673a\u4f1a\u628a\u6d88\u606f\u8def\u7531\u5230\u4e0e\u8def\u7531\u952e\u5b8c\u5168\u5339\u914d\u7684 Queue \u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fanout"),"\uff1a\u8be5\u7c7b\u578b\u7684\u4ea4\u6362\u673a\u4f1a\u5c06\u6d88\u606f\u8def\u7531\u5230\u6240\u6709\u4e0e\u5176\u7ed1\u5b9a\u7684 Queue \u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Topic"),"\uff1a\u8be5\u7c7b\u578b\u7684\u4ea4\u6362\u673a\u4f1a\u652f\u6301\u591a\u6761\u4ef6\u5339\u914d\u548c\u6a21\u7cca\u5339\u914d\u5c06\u6d88\u606f\u8def\u7531\u81f3\u4e0e\u5176\u7ed1\u5b9a\u7684 Queue \u4e2d\u3002\uff08\u672c\u6587\u4e0d\u8bb2\u89e3\uff0c\u4e00\u822c\u60c5\u51b5\u4f7f\u7528 Direct\u3001Fanout \u5373\u53ef\uff09"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u8def\u7531\u952e"),(0,r.kt)("br",{parentName:"li"}),"\u5f53\u4ea4\u6362\u673a\u8def\u7531\u7c7b\u578b\u4e3a Direct \u6216 Topic \u65f6\uff0c\u4ea4\u6362\u673a\u7ed1\u5b9a\u961f\u5217\u65f6\u9700\u8981\u8bbe\u7f6e\u8def\u7531\u952e\uff0c\u7ed9\u4ea4\u6362\u673a\u53d1\u9001\u6d88\u606f\u65f6\u9700\u8981\u5e26\u4e0a\u8fd9\u4e2a\u53c2\u6570\uff0c\u4ea4\u6362\u673a\u6839\u636e\u8def\u7531\u7c7b\u578b\u548c\u8def\u7531\u952e\u5339\u914d\u89c4\u5219\u5c06\u6d88\u606f\u6295\u9012\u5230\u5408\u9002\u7684\u961f\u5217\u7b49\u5f85\u6d88\u8d39\u3002\uff08Direct \u662f\u7cbe\u786e\u5339\u914d\u3001Topic \u662f\u6a21\u7cca\u5339\u914d\u3001Fanout \u4e0d\u9700\u8981\u8def\u7531\u5339\u914d\uff09")),(0,r.kt)("h2",{id:"\u521b\u5efa\u961f\u5217"},"\u521b\u5efa\u961f\u5217"),(0,r.kt)("p",null,"\u672c\u6587\u4ee5\u817e\u8baf\u4e91 TDMQ (RabbitMQ \u7248\u672c) \u4e3a\u4f8b\u3002TDMQ RabbitMQ \u7248\u662f\u4e00\u6b3e\u817e\u8baf\u7814\u53d1\u7684\u6d88\u606f\u961f\u5217\u670d\u52a1\uff0c\u652f\u6301 AMQP 0-9-1 \u534f\u8bae\uff0c\u5b8c\u5168\u517c\u5bb9\u5f00\u6e90 RabbitMQ \u7684\u5404\u4e2a\u7ec4\u4ef6\u4e0e\u6982\u5ff5\u3002\u56e0\u6b64\uff0c\u672c\u6559\u7a0b\u4e5f\u9002\u7528\u539f\u751f\u5f00\u6e90 RabbitMQ \u4e2d\u95f4\u4ef6\u548c\u517c\u5bb9\u5f00\u6e90 RabbitMQ \u7684\u5176\u5b83\u4e91\u7aef\u6d88\u606f\u670d\u52a1\u3002"),(0,r.kt)("p",null,"\u5728\u63a7\u5236\u53f0\u521b\u5efa\u961f\u5217\u53ca\u76f8\u5173\u7ec4\u4ef6\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,r.kt)(l.Z,{defaultValue:"Vhost",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Vhost",label:"\u865a\u62df\u4e3b\u673a",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u865a\u62df\u4e3b\u673a",src:a(6664).Z,width:"2406",height:"576"}))),(0,r.kt)(i.Z,{value:"Exchange",label:"\u4ea4\u6362\u673a",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u4ea4\u6362\u673a",src:a(6361).Z,width:"2410",height:"702"}))),(0,r.kt)(i.Z,{value:"Queue",label:"\u961f\u5217",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u961f\u5217",src:a(9504).Z,width:"2398",height:"1016"}))),(0,r.kt)(i.Z,{value:"Routing",label:"\u8def\u7531\u5173\u7cfb",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u8def\u7531\u5173\u7cfb",src:a(5449).Z,width:"2404",height:"946"})))),(0,r.kt)("h2",{id:"\u6d88\u606f\u751f\u4ea7\u8005"},"\u6d88\u606f\u751f\u4ea7\u8005"),(0,r.kt)("h3",{id:"\u672c\u5730\u914d\u7f6e"},"\u672c\u5730\u914d\u7f6e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e3a\u4fbf\u4e8e\u7406\u89e3\uff0c\u672c\u6587\u57fa\u4e8e\u672c\u5730\u914d\u7f6e\u7684\u65b9\u5f0f\u7f16\u5199\u3002\u82e5\u6539\u4e3a\u6807\u51c6\u7684 Nacos \u914d\u7f6e\u4e2d\u5fc3\u6a21\u5f0f\uff0c\u8bf7\u53c2\u9605\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://pulanos.gitee.io/pangu-framework/docs/advanced-guide/nacos-config-center"},"\u914d\u7f6e\u4e2d\u5fc3")," \u7ae0\u8282\u3002")),(0,r.kt)(l.Z,{defaultValue:"application-dev",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"application",label:"application.properties",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"spring.profiles.active=${spring.profiles.active:dev}\n"))),(0,r.kt)(i.Z,{value:"application-dev",label:"application-dev.properties",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"spring.application.name=pangu-examples-mq-rabbitmq-sender\n\nspring.rabbitmq.host=jzaep3orxb2b.public.tencenttdmq.com\nspring.rabbitmq.port=5672\nspring.rabbitmq.username=admin\nspring.rabbitmq.password=123456\nspring.rabbitmq.virtual-host=vhost-pangu\n\nlogging.level.root=INFO\nlogging.level.com.gitee.pulanos.pangu=INFO\n")))),(0,r.kt)("h3",{id:"\u6d88\u606f\u53d1\u9001\u4ee3\u7801"},"\u6d88\u606f\u53d1\u9001\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'@Slf4j\n@Component\npublic class SendService {\n    @Autowired\n    private RabbitTemplate rabbitTemplate;\n\n    /**\n     * \u53d1\u9001\u6d88\u606f\u5230Fanout\u4ea4\u6362\u673a\n     * @return\n     */\n    public void sendMsg1FanoutBased(){\n        String msg = "\u6211\u662f\u4e91\u5357\u5927\u718a(Fanout), " + DateUtil.now();\n        // \u53c2\u6570\u8bf4\u660e\uff1a\u53c2\u65701\uff1a\u4ea4\u6362\u673a\u540d\u79f0\u3002  \u53c2\u65702\uff1arouting key  \u53c2\u65703\uff1a\u6d88\u606f\u5185\u5bb9\n        rabbitTemplate.convertAndSend("exchange-fanout", "", msg);\n        log.info("\u6d88\u606f\u53d1\u9001\u6210\u529f\u3002{}", msg);\n    }\n\n    /**\n     * \u53d1\u9001\u6d88\u606f\u5230Direct\u4ea4\u6362\u673a\n     * @return\n     */\n    public void sendMsg1DirectBased(String routingKey){\n        String msg = "\u6211\u662f\u4e91\u5357\u5927\u718a(Direct), " + DateUtil.now();\n        // \u53c2\u6570\u8bf4\u660e\uff1a\u53c2\u65701\uff1a\u4ea4\u6362\u673a\u540d\u79f0\u3002  \u53c2\u65702\uff1arouting key  \u53c2\u65703\uff1a\u6d88\u606f\u5185\u5bb9\n        rabbitTemplate.convertAndSend("exchange-direct", routingKey, msg);\n        log.info("\u6d88\u606f\u53d1\u9001\u6210\u529f\u3002{}", msg);\n    }\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u53d1\u9001\u6d88\u606f\u5230 Fanout \u4ea4\u6362\u673a\u65f6\uff0c\u8def\u7531\u952e\u53c2\u6570\u4e3a\u7a7a\uff1b\u53d1\u9001\u6d88\u606f\u5230 Direct \u4ea4\u6362\u673a\u65f6\u5019\u8def\u7531\u952e\u6839\u636e\u4e0a\u56fe\uff08\u961f\u5217\u89c4\u5212\uff09\u4f20\u53c2\u3002\uff08\u5982\uff1aKey-1\u3001Key-2\uff09\u3002")),(0,r.kt)("h2",{id:"\u6d88\u606f\u6d88\u8d39\u8005"},"\u6d88\u606f\u6d88\u8d39\u8005"),(0,r.kt)("h3",{id:"\u672c\u5730\u914d\u7f6e-1"},"\u672c\u5730\u914d\u7f6e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e3a\u4fbf\u4e8e\u7406\u89e3\uff0c\u672c\u6587\u57fa\u4e8e\u672c\u5730\u914d\u7f6e\u7684\u65b9\u5f0f\u7f16\u5199\u3002\u82e5\u6539\u4e3a\u6807\u51c6\u7684 Nacos \u914d\u7f6e\u4e2d\u5fc3\u6a21\u5f0f\uff0c\u8bf7\u53c2\u9605\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://pulanos.gitee.io/pangu-framework/docs/advanced-guide/nacos-config-center"},"\u914d\u7f6e\u4e2d\u5fc3")," \u7ae0\u8282\u3002")),(0,r.kt)(l.Z,{defaultValue:"application-dev-2",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"application-2",label:"application.properties",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"spring.profiles.active=${spring.profiles.active:dev}\n"))),(0,r.kt)(i.Z,{value:"application-dev-2",label:"application-dev.properties",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"spring.application.name=pangu-examples-mq-rabbitmq-receiver\n\nspring.rabbitmq.host=jzaep3orxb2b.public.tencenttdmq.com\nspring.rabbitmq.port=5672\nspring.rabbitmq.username=admin\nspring.rabbitmq.password=123456\nspring.rabbitmq.virtual-host=vhost-pangu\n# \u5f00\u542fACK NONE|MANUAL|AUTO(default)\nspring.rabbitmq.listener.simple.acknowledge-mode=manual\n\nlogging.level.root=INFO\nlogging.level.com.gitee.pulanos.pangu=INFO\n")))),(0,r.kt)("h4",{id:"\u5173\u952e\u914d\u7f6e\u9879\u8bf4\u660e"},"\u5173\u952e\u914d\u7f6e\u9879\u8bf4\u660e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6d88\u606f\u786e\u8ba4\u6a21\u5f0f\u914d\u7f6e\u9879\uff08",(0,r.kt)("inlineCode",{parentName:"li"},"spring.rabbitmq.listener.simple.acknowledge-mode"),"\uff09  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"NONE\uff1a\u65e0\u6d88\u606f\u786e\u8ba4\u652f\u6301\u3002\u6d88\u606f\u4e00\u65e6\u4ece\u961f\u5217\u53d6\u51fa\u5373\u88ab\u6c38\u4e45\u5220\u9664\u3002"),(0,r.kt)("li",{parentName:"ul"},"AUTO\uff1a\u81ea\u52a8\u786e\u8ba4\uff08\u7f3a\u7701\u914d\u7f6e\uff09\u3002\u6d88\u8d39\u4ee3\u7801\u629b\u51fa\u5f02\u5e38\u5219\u91cd\u65b0\u5c06\u6d88\u606f\u653e\u5165\u961f\u5217\uff0c\u65e0\u5f02\u5e38\u5219\u629b\u51fa\u5219\u786e\u8ba4\u6d88\u8d39\u3002"),(0,r.kt)("li",{parentName:"ul"},"MANUAL\uff1a\u624b\u5de5\u786e\u8ba4\u3002\u5982\u4e0b\u4ee3\u7801\u6839\u636e\u4e1a\u52a1\u903b\u8f91\u8fdb\u884c\u624b\u5de5\u786e\u8ba4\u6d88\u606f\u3002")))),(0,r.kt)("h3",{id:"\u6d88\u606f\u76d1\u542c\u4ee3\u7801"},"\u6d88\u606f\u76d1\u542c\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'@Component\npublic class Queue1Listener {\n\n    @RabbitHandler\n    @RabbitListener(queues = "queue-1")\n    public void receiveMsg(Message message, Channel channel) throws IOException {\n        long deliveryTag = message.getMessageProperties().getDeliveryTag();\n        try {\n            log.info("\u63a5\u6536\u6d88\u606f(queue-1)\uff1a{}", new String(message.getBody()));\n            // do business...\n            channel.basicAck(deliveryTag, false);\n        } catch (Exception e) {\n            log.error("\u6d88\u8d39\u51fa\u9519\u4e86", e);\n            channel.basicNack(deliveryTag, true, true);\n        }\n    }\n}\n')),(0,r.kt)("p",null,"\u5982\u4e0a\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"queue-1")," \u7684\u76d1\u542c\u4ee3\u7801\uff0c\u5176\u4f59\u7c7b\u4f3c\u3002\u5982\u679c ACK \u6d88\u606f\u786e\u8ba4\u6a21\u5f0f\u4e3a\u81ea\u52a8\u6a21\u5f0f\u5219\u6d88\u8d39\u4ee3\u7801\u4e0d\u9700\u8981 ",(0,r.kt)("inlineCode",{parentName:"p"},"try")," \u7ed3\u6784\u3002"),(0,r.kt)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,r.kt)("h3",{id:"\u6d88\u8d39\u8005\u542f\u52a8\u6d88\u8d39\u76d1\u542c\u7a0b\u5e8f"},"\u6d88\u8d39\u8005\uff1a\u542f\u52a8\u6d88\u8d39\u76d1\u542c\u7a0b\u5e8f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"@SpringBootApplication\npublic class RabbitmqReceiverApplication {\n    public static void main(String[] args) {\n        PanGuApplicationBuilder.init(RabbitmqReceiverApplication.class).run(args);\n    }\n}\n")),(0,r.kt)("h3",{id:"\u751f\u4ea7\u8005\u6267\u884c\u6d4b\u8bd5\u7528\u4f8b\u53d1\u9001\u6d88\u606f"},"\u751f\u4ea7\u8005\uff1a\u6267\u884c\u6d4b\u8bd5\u7528\u4f8b\u53d1\u9001\u6d88\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'/**\n * \u53d1\u9001\u6d88\u606f\u4ea4\u6362\u673a\n */\n@Test\npublic void sendMsg() {\n    //\u53d1\u9001\u6d88\u606f\u5230Fanout\u4ea4\u6362\u673a\n    sendService.sendMsg1FanoutBased();\n    //\u53d1\u9001\u6d88\u606f\u5230Direct\u4ea4\u6362\u673a\n    sendService.sendMsg1DirectBased("key-1");\n    //\u53d1\u9001\u6d88\u606f\u5230Direct\u4ea4\u6362\u673a\n    sendService.sendMsg1DirectBased("key-2");\n}\n')),(0,r.kt)("h3",{id:"\u6d4b\u8bd5\u7ed3\u679c\u622a\u56fe"},"\u6d4b\u8bd5\u7ed3\u679c\u622a\u56fe"),(0,r.kt)("h4",{id:"\u751f\u4ea7\u8005"},"\u751f\u4ea7\u8005"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u751f\u4ea7\u8005",src:a(6142).Z,width:"2366",height:"496"})),(0,r.kt)("h4",{id:"\u6d88\u8d39\u8005"},"\u6d88\u8d39\u8005"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u6d88\u8d39\u8005",src:a(5968).Z,width:"2116",height:"376"})),(0,r.kt)("h2",{id:"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801"},"\u672c\u6587\u76f8\u5173\u8303\u4f8b\u6e90\u7801"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-mq-rabbitmq-sender"},"pangu-examples-mq-rabbitmq-sender"),"\uff1a\u6d88\u606f\u961f\u5217\u8303\u4f8b\uff08\u751f\u4ea7\u8005\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-mq-rabbitmq-receiver"},"pangu-examples-mq-rabbitmq-receiver"),"\uff1a\u6d88\u606f\u961f\u5217\u8303\u4f8b\uff08\u6d88\u8d39\u8005\uff09")))}d.isMDXComponent=!0},5901:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/14-pangu-framework-queue-5a69054a213557c7a93c4653ff7df4ad.png"},6142:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/15-pangu-framework-queue-a46980fa9e9eee4f987202887fac4ade.png"},5968:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/16-pangu-framework-queue-17feb39cb253ed67c5e972b875193524.png"},6664:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/17-pangu-framework-queue-3f644ee310a66a137d590f70b0ac0990.png"},6361:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/18-pangu-framework-queue-757b4770b7e2729e710c4c7778b286b4.png"},9504:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/19-pangu-framework-queue-ffeb4363d1c2353b582a1e740dc2d737.png"},5449:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/20-pangu-framework-queue-e6103b0b9b4b0e481013e283b84c45f6.png"}}]);