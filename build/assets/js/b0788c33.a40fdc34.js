"use strict";(self.webpackChunkdaxiong=self.webpackChunkdaxiong||[]).push([[5238],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(7462),a=r(7294),o=r(6010),l=r(2389),i=r(7392),s=r(7094),u=r(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){const{lazy:t,block:r,defaultValue:l,values:m,groupId:d,className:h}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??g.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),b=(0,i.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===l?l:l??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,s.U)(),[w,O]=(0,a.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=d){const e=y[d];null!=e&&e!==w&&f.some((t=>t.value===e))&&O(e)}const x=e=>{const t=e.currentTarget,r=T.indexOf(t),n=f[r].value;n!==w&&(E(t),O(n),null!=d&&k(d,String(n)))},S=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=T.indexOf(e.currentTarget)+1;t=T[r]??T[0];break}case"ArrowLeft":{const r=T.indexOf(e.currentTarget)-1;t=T[r]??T[T.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},h)},f.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:S,onClick:x},l,{className:(0,o.Z)("tabs__item",p,l?.className,{"tabs__item--active":w===t})}),r??t)}))),t?(0,a.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},6610:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));r(5488),r(5162);const o={title:"\u57fa\u4e8e ShardingSphere \u7684\u6570\u636e\u5206\u7247\u6570\u636e\u6cbb\u7406",authors:["xiongchun"],tags:["\u670d\u52a1\u7aef\u5f00\u53d1","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"],date:new Date("2019-10-11T00:00:00.000Z"),hide_table_of_contents:!1,slug:"pangu-dev-framework-data-sharding"},l=void 0,i={permalink:"/home/blog/pangu-dev-framework-data-sharding",source:"@site/blog/\u57fa\u4e8e ShardingSphere \u7684\u6570\u636e\u5206\u7247\u6570\u636e\u6cbb\u7406.md",title:"\u57fa\u4e8e ShardingSphere \u7684\u6570\u636e\u5206\u7247\u6570\u636e\u6cbb\u7406",description:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 \u96c6\u6210\u4e86\u6570\u636e\u5e93\u4e2d\u95f4\u4ef6 ShardingSphere \u6765\u63d0\u4f9b\u6570\u636e\u6cbb\u7406\u76f8\u5173\u529f\u80fd\u3002\u5982\uff1a\u6570\u636e\u5206\u7247\u3001\u8bfb\u5199\u5206\u79bb\u3001\u6570\u636e\u52a0\u5bc6\u7b49\u3002",date:"2019-10-11T00:00:00.000Z",formattedDate:"2019\u5e7410\u670811\u65e5",tags:[{label:"\u670d\u52a1\u7aef\u5f00\u53d1",permalink:"/home/blog/tags/\u670d\u52a1\u7aef\u5f00\u53d1"},{label:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6",permalink:"/home/blog/tags/\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"}],readingTime:19.03,hasTruncateMarker:!0,authors:[{name:"\u7a0b\u5e8f\u5458\u5927\u718a",title:"Pangu Framework maintainer",url:"https://gitee.com/xiong-chun",imageURL:"https://xiong-chun.gitee.io/home/img/xiongchun.jpg",key:"xiongchun"}],frontMatter:{title:"\u57fa\u4e8e ShardingSphere \u7684\u6570\u636e\u5206\u7247\u6570\u636e\u6cbb\u7406",authors:["xiongchun"],tags:["\u670d\u52a1\u7aef\u5f00\u53d1","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"],date:"2019-10-11T00:00:00.000Z",hide_table_of_contents:!1,slug:"pangu-dev-framework-data-sharding"},prevItem:{title:"\u57fa\u4e8e Laying Cache \u7684\u5206\u5e03\u5f0f\u591a\u7ea7\u7f13\u5b58\u65b9\u6848",permalink:"/home/blog/pangu-dev-framework-laying-cache"},nextItem:{title:"\u57fa\u4e8e ShardingSphere \u7684\u8bfb\u5199\u5206\u79bb\u6570\u636e\u6cbb\u7406",permalink:"/home/blog/pangu-dev-framework-readwrite-splitting"}},s={authorsImageUrls:[void 0]},u=[],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://pulanos.gitee.io/pangu-framework"},"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6")," \u96c6\u6210\u4e86\u6570\u636e\u5e93\u4e2d\u95f4\u4ef6 ",(0,a.kt)("a",{parentName:"p",href:"https://shardingsphere.apache.org/index.html"},"ShardingSphere")," \u6765\u63d0\u4f9b\u6570\u636e\u6cbb\u7406\u76f8\u5173\u529f\u80fd\u3002\u5982\uff1a\u6570\u636e\u5206\u7247\u3001\u8bfb\u5199\u5206\u79bb\u3001\u6570\u636e\u52a0\u5bc6\u7b49\u3002"),(0,a.kt)("p",null,"\u968f\u7740\u4e1a\u52a1\u89c4\u6a21\u4e0d\u65ad\u7684\u6269\u5927\uff0c\u5c06\u6570\u636e\u96c6\u4e2d\u5b58\u50a8\u5230\u5355\u4e00\u8282\u70b9\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u5728",(0,a.kt)("strong",{parentName:"p"},"\u6027\u80fd"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"\u53ef\u7528\u6027"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"\u8fd0\u7ef4\u6210\u672c"),"\u7b49\u65b9\u9762\u5df2\u7ecf\u96be\u4e8e\u6ee1\u8db3\u9ad8\u5e76\u53d1\u548c\u6d77\u91cf\u6570\u636e\u7cfb\u7edf\u7684\u573a\u666f\u3002\u4ece\u6027\u80fd\u65b9\u9762\u6765\u8bf4\uff0c\u9ad8\u5e76\u53d1\u8bbf\u95ee\u8bf7\u6c42\u4f7f\u5f97\u96c6\u4e2d\u5f0f\u6570\u636e\u5e93\u6210\u4e3a\u7cfb\u7edf\u7684\u6700\u5927\u74f6\u9888\uff1b\u4ece\u53ef\u7528\u6027\u7684\u65b9\u9762\u6765\u8bb2\uff0c\u5355\u4e00\u6570\u636e\u8282\u70b9\u6216\u7b80\u5355\u4e3b\u4ece\u67b6\u6784\uff0c\u5df2\u7ecf\u8d8a\u6765\u8d8a\u96be\u4ee5\u6ee1\u8db3\u4e92\u8054\u7f51 To C \u4e1a\u52a1\u5bf9\u9ad8\u53ef\u7528\u7684\u8feb\u5207\u8bc9\u6c42\uff0c\u6570\u636e\u5e93\u7684\u53ef\u7528\u6027\u4fe8\u7136\u5df2\u6210\u4e3a\u6574\u4e2a\u7cfb\u7edf\u7684\u5173\u952e\uff1b\u4ece\u8fd0\u7ef4\u6210\u672c\u548c\u7cfb\u7edf\u98ce\u9669\u65b9\u9762\u8003\u8651\uff0c\u5f53\u4e00\u4e2a\u6570\u636e\u5e93\u5b9e\u4f8b\u4e2d\u7684\u6570\u636e\u8fbe\u5230\u4e34\u754c\u9608\u503c\u4ee5\u4e0a\uff0c\u6570\u636e\u5907\u4efd\u548c\u6062\u590d\u7684\u65f6\u95f4\u6210\u672c\u548c\u98ce\u9669\u90fd\u5c06\u968f\u7740\u6570\u636e\u91cf\u7684\u5927\u5c0f\u800c\u6108\u53d1\u4e0d\u53ef\u63a7\u3002\u6570\u636e\u5206\u7247\u5c06\u5b58\u653e\u5728\u5355\u4e00\u5e93\u4e2d\u7684\u6570\u636e\u5206\u6563\u81f3\u591a\u4e2a\u5e93\u6216\u8868\u4e2d\u4ee5\u8fbe\u5230\u63d0\u5347\u6027\u80fd\u3001\u63d0\u9ad8\u53ef\u7528\u6027\u548c\u964d\u4f4e\u8fd0\u7ef4\u6210\u672c\u7684\u6548\u679c\uff0c\u662f\u5e94\u5bf9\u9ad8\u5e76\u53d1\u548c\u6d77\u91cf\u6570\u636e\u7cfb\u7edf\u7684\u6709\u6548\u624b\u6bb5\u3002"))}p.isMDXComponent=!0}}]);