"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[9196],{"../../node_modules/@mdx-js/react/lib/index.js":function(R,b,l){l.d(b,{BN:function(){return f},RP:function(){return r},gz:function(){return s},xA:function(){return m}});var u=l("../../node_modules/react/index.js");const f=u.createContext({});function s(i){return d;function d(g){const y=r(g.components);return u.createElement(i,{...g,allComponents:y})}}function r(i){const d=u.useContext(f);return u.useMemo(()=>typeof i=="function"?i(d):{...d,...i},[d,i])}const c={};function m({components:i,children:d,disableParentContext:g}){let y;return g?y=typeof i=="function"?i({}):i||c:y=r(i),u.createElement(f.Provider,{value:y},d)}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(R,b,l){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=l("../../node_modules/react/index.js"),f=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function i(d,g,y){var O,I={},x=null,T=null;y!==void 0&&(x=""+y),g.key!==void 0&&(x=""+g.key),g.ref!==void 0&&(T=g.ref);for(O in g)r.call(g,O)&&!m.hasOwnProperty(O)&&(I[O]=g[O]);if(d&&d.defaultProps)for(O in g=d.defaultProps,g)I[O]===void 0&&(I[O]=g[O]);return{$$typeof:f,type:d,key:x,ref:T,props:I,_owner:c.current}}b.Fragment=s,b.jsx=i,b.jsxs=i},"../../node_modules/react/jsx-runtime.js":function(R,b,l){R.exports=l("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/Forms/InlineLabel.story.tsx":function(R,b,l){l.r(b),l.d(b,{Basic:function(){return E},WithTooltip:function(){return S},default:function(){return j}});var u=l("../../node_modules/react/index.js"),f=l("./src/components/Forms/InlineLabel.tsx"),s=l("../../node_modules/react/jsx-runtime.js"),r=l("../../node_modules/@mdx-js/react/lib/index.js"),c=l("../../node_modules/@storybook/blocks/dist/index.mjs");function m(v){const p=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},(0,r.RP)(),v.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p.h1,{id:"inlinelabel",children:"InlineLabel"}),`
`,(0,s.jsxs)(p.p,{children:["A horizontal variant of ",(0,s.jsx)(p.code,{children:"Label"}),", primarily used in query editors. Can be combined with form components that expect a label, eg. ",(0,s.jsx)(p.code,{children:"Input"}),", ",(0,s.jsx)(p.code,{children:"Select"}),", ",(0,s.jsx)(p.code,{children:"Checkbox"}),`.
If you need to add additional explanation, use the tooltip prop, which will render an info icon with tooltip inside the label.
For query editor readability, the label text should be as short as possible (4 words or fewer).`]}),`
`,(0,s.jsx)(p.h1,{id:"usage",children:"Usage"}),`
`,(0,s.jsx)(p.pre,{children:(0,s.jsx)(p.code,{className:"language-jsx",children:`<InlineLabel width="auto" tooltip="Tooltip content">
  Simple label
</InlineLabel>
`})}),`
`,(0,s.jsx)(c.ov,{of:f.c})]})}function i(v={}){const{wrapper:p}=Object.assign({},(0,r.RP)(),v.components);return p?(0,s.jsx)(p,Object.assign({},v,{children:(0,s.jsx)(m,v)})):m(v)}var d=i,g=Object.defineProperty,y=Object.defineProperties,O=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,o=(v,p,w)=>p in v?g(v,p,{enumerable:!0,configurable:!0,writable:!0,value:w}):v[p]=w,a=(v,p)=>{for(var w in p||(p={}))x.call(p,w)&&o(v,w,p[w]);if(I)for(var w of I(p))T.call(p,w)&&o(v,w,p[w]);return v},t=(v,p)=>y(v,O(p)),e,n,_,P,L,h;const C={title:"Forms/InlineLabel",component:f.c,parameters:{docs:{page:d},controls:{exclude:["as"]}},argTypes:{children:{control:"text"},tooltip:{control:"text"},width:{control:"text"}}},E=v=>u.createElement(f.c,a({},v));E.args={children:"Simple text",width:"auto",tooltip:void 0,transparent:!1,interactive:!1},E.parameters={controls:{exclude:["as","tooltip","interactive"]}};const S=v=>u.createElement(f.c,a({},v));S.args=t(a({},E.args),{tooltip:"Info text"});var j=C;E.parameters=t(a({},E.parameters),{docs:t(a({},(e=E.parameters)==null?void 0:e.docs),{source:a({originalSource:"(args: Props) => <InlineLabel {...args} />"},(_=(n=E.parameters)==null?void 0:n.docs)==null?void 0:_.source)})}),S.parameters=t(a({},S.parameters),{docs:t(a({},(P=S.parameters)==null?void 0:P.docs),{source:a({originalSource:"(args: Props) => <InlineLabel {...args} />"},(h=(L=S.parameters)==null?void 0:L.docs)==null?void 0:h.source)})});try{E.displayName="Basic",E.__docgenInfo={description:"",displayName:"Basic",props:{tooltip:{defaultValue:null,description:`Content for the labels tooltip. If provided, an info icon with the tooltip content
will be displayed`,name:"tooltip",required:!1,type:{name:"PopoverContent"}},width:{defaultValue:null,description:"Custom width for the label",name:"width",required:!1,type:{name:'number | "auto"'}},transparent:{defaultValue:null,description:"Make labels's background transparent",name:"transparent",required:!1,type:{name:"boolean"}},interactive:{defaultValue:null,description:"Make tooltip interactive",name:"interactive",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"Controls which element the InlineLabel should be rendered into",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Forms/InlineLabel.story.tsx#Basic"]={docgenInfo:E.__docgenInfo,name:"Basic",path:"src/components/Forms/InlineLabel.story.tsx#Basic"})}catch{}try{S.displayName="WithTooltip",S.__docgenInfo={description:"",displayName:"WithTooltip",props:{tooltip:{defaultValue:null,description:`Content for the labels tooltip. If provided, an info icon with the tooltip content
will be displayed`,name:"tooltip",required:!1,type:{name:"PopoverContent"}},width:{defaultValue:null,description:"Custom width for the label",name:"width",required:!1,type:{name:'number | "auto"'}},transparent:{defaultValue:null,description:"Make labels's background transparent",name:"transparent",required:!1,type:{name:"boolean"}},interactive:{defaultValue:null,description:"Make tooltip interactive",name:"interactive",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"Controls which element the InlineLabel should be rendered into",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Forms/InlineLabel.story.tsx#WithTooltip"]={docgenInfo:S.__docgenInfo,name:"WithTooltip",path:"src/components/Forms/InlineLabel.story.tsx#WithTooltip"})}catch{}},"../grafana-data/src/types/icon.ts":function(R,b,l){l.d(b,{Uo:function(){return s},az:function(){return u},n6:function(){return f}});const u={google:!0,microsoft:!0,github:!0,gitlab:!0,okta:!0,discord:!0,hipchat:!0,amazon:!0,"google-hangouts-alt":!0,pagerduty:!0,line:!0,anchor:!0,"adjust-circle":!0,"angle-double-down":!0,"angle-double-right":!0,"angle-double-up":!0,"angle-down":!0,"angle-left":!0,"angle-right":!0,"angle-up":!0,"align-left":!0,"align-right":!0,"application-observability":!0,apps:!0,"archive-alt":!0,arrow:!0,"arrow-down":!0,"arrow-from-right":!0,"arrow-left":!0,"arrow-random":!0,"arrow-right":!0,"arrow-to-right":!0,"arrow-up":!0,"arrows-h":!0,"arrows-v":!0,asserts:!0,"expand-arrows":!0,at:!0,ai:!0,backward:!0,bars:!0,bell:!0,"bell-slash":!0,bolt:!0,book:!0,bookmark:!0,"book-open":!0,"brackets-curly":!0,bug:!0,building:!0,"calculator-alt":!0,"calendar-alt":!0,"calendar-slash":!0,camera:!0,capture:!0,"channel-add":!0,"chart-line":!0,check:!0,"check-circle":!0,"check-square":!0,circle:!0,"circle-mono":!0,"clipboard-alt":!0,"clock-nine":!0,cloud:!0,"cloud-download":!0,"cloud-upload":!0,"code-branch":!0,cog:!0,columns:!0,"comment-alt":!0,"comment-alt-message":!0,"comment-alt-share":!0,"comments-alt":!0,compass:!0,copy:!0,"corner-down-right-alt":!0,"create-dashboard":!0,"credit-card":!0,crosshair:!0,cube:!0,dashboard:!0,database:!0,"dice-three":!0,docker:!0,"document-info":!0,"document-layout-left":!0,"download-alt":!0,draggabledots:!0,edit:!0,"ellipsis-v":!0,enter:!0,envelope:!0,"exchange-alt":!0,"exclamation-triangle":!0,"exclamation-circle":!0,"external-link-alt":!0,eye:!0,"eye-slash":!0,"ellipsis-h":!0,"fa fa-spinner":!0,favorite:!0,"file-alt":!0,"file-blank":!0,"file-copy-alt":!0,"file-download":!0,"file-edit-alt":!0,"file-landscape-alt":!0,filter:!0,flip:!0,folder:!0,font:!0,fire:!0,"folder-open":!0,"folder-plus":!0,"folder-upload":!0,forward:!0,"frontend-observability":!0,"gf-bar-alignment-after":!0,"gf-bar-alignment-before":!0,"gf-bar-alignment-center":!0,"gf-glue":!0,"gf-grid":!0,"gf-interpolation-linear":!0,"gf-interpolation-smooth":!0,"gf-interpolation-step-after":!0,"gf-interpolation-step-before":!0,"gf-landscape":!0,"gf-layout-simple":!0,"gf-logs":!0,"gf-ml":!0,"gf-movepane-left":!0,"gf-movepane-right":!0,"gf-portrait":!0,"gf-service-account":!0,"gf-show-context":!0,"gf-pin":!0,"gf-prometheus":!0,"gf-traces":!0,globe:!0,grafana:!0,"graph-bar":!0,heart:!0,"heart-rate":!0,"heart-break":!0,history:!0,"history-alt":!0,home:!0,"home-alt":!0,"horizontal-align-center":!0,"horizontal-align-left":!0,"horizontal-align-right":!0,hourglass:!0,import:!0,info:!0,"info-circle":!0,k6:!0,"key-skeleton-alt":!0,keyboard:!0,"layer-group":!0,"layers-alt":!0,"library-panel":!0,"line-alt":!0,link:!0,"list-ui-alt":!0,"list-ul":!0,"list-ol":!0,lock:!0,"map-marker":!0,"map-marker-plus":!0,"map-marker-minus":!0,message:!0,minus:!0,"minus-circle":!0,"mobile-android":!0,monitor:!0,palette:!0,"panel-add":!0,paragraph:!0,"pathfinder-unite":!0,pause:!0,pen:!0,percentage:!0,play:!0,plug:!0,plus:!0,"plus-circle":!0,"plus-square":!0,power:!0,"presentation-play":!0,process:!0,"question-circle":!0,"record-audio":!0,repeat:!0,rocket:!0,"ruler-combined":!0,save:!0,search:!0,"search-minus":!0,"search-plus":!0,"share-alt":!0,shield:!0,"shield-exclamation":!0,signal:!0,signin:!0,signout:!0,sitemap:!0,slack:!0,"sliders-v-alt":!0,spinner:!0,"sort-amount-down":!0,"sort-amount-up":!0,"square-shape":!0,star:!0,"step-backward":!0,stopwatch:!0,"stopwatch-slash":!0,sync:!0,"sync-slash":!0,table:!0,"table-collapse-all":!0,"table-expand-all":!0,"tag-alt":!0,"telegram-alt":!0,"text-fields":!0,"thumbs-up":!0,times:!0,"times-circle":!0,"toggle-on":!0,"toggle-off":!0,"trash-alt":!0,unarchive:!0,unlock:!0,upload:!0,user:!0,"users-alt":!0,"user-arrows":!0,"vertical-align-bottom":!0,"vertical-align-center":!0,"vertical-align-top":!0,"web-section-alt":!0,"wrap-text":!0,rss:!0,x:!0};function f(r){return!r||typeof r!="string"?!1:r in u}function s(r){if(f(r))return r}},"./src/components/Forms/InlineLabel.tsx":function(R,b,l){l.d(b,{c:function(){return x}});var u=l("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),f=l("../../node_modules/react/index.js"),s=l("./src/themes/ThemeContext.tsx"),r=l("./src/components/Icon/Icon.tsx"),c=l("./src/components/Tooltip/Tooltip.tsx"),m=Object.defineProperty,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,y=(o,a,t)=>a in o?m(o,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[a]=t,O=(o,a)=>{for(var t in a||(a={}))d.call(a,t)&&y(o,t,a[t]);if(i)for(var t of i(a))g.call(a,t)&&y(o,t,a[t]);return o},I=(o,a)=>{var t={};for(var e in o)d.call(o,e)&&a.indexOf(e)<0&&(t[e]=o[e]);if(o!=null&&i)for(var e of i(o))a.indexOf(e)<0&&g.call(o,e)&&(t[e]=o[e]);return t};const x=o=>{var a=o,{children:t,className:e,tooltip:n,width:_,transparent:P,interactive:L,as:h="label"}=a,C=I(a,["children","className","tooltip","width","transparent","interactive","as"]);const E=(0,s.of)(T,P,_);return f.createElement(h,O({className:(0,u.cx)(E.label,e)},C),t,n&&f.createElement(c.m,{interactive:L,placement:"top",content:n,theme:"info"},f.createElement(r.I,{tabIndex:0,name:"info-circle",size:"sm",className:E.icon})))},T=(o,a=!1,t)=>({label:(0,u.AH)({display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0,padding:o.spacing(0,1),fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.size.sm,backgroundColor:a?"transparent":o.colors.background.secondary,height:o.spacing(o.components.height.md),lineHeight:o.spacing(o.components.height.md),marginRight:o.spacing(.5),borderRadius:o.shape.radius.default,border:"none",width:t?t!=="auto"?`${8*t}px`:t:"100%",color:o.colors.text.primary}),icon:(0,u.AH)({color:o.colors.text.secondary,marginLeft:"10px",":hover":{color:o.colors.text.primary}})});try{x.displayName="InlineLabel",x.__docgenInfo={description:"",displayName:"InlineLabel",props:{tooltip:{defaultValue:null,description:`Content for the labels tooltip. If provided, an info icon with the tooltip content
will be displayed`,name:"tooltip",required:!1,type:{name:"PopoverContent"}},width:{defaultValue:null,description:"Custom width for the label",name:"width",required:!1,type:{name:'number | "auto"'}},transparent:{defaultValue:null,description:"Make labels's background transparent",name:"transparent",required:!1,type:{name:"boolean"}},interactive:{defaultValue:null,description:"Make tooltip interactive",name:"interactive",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"Controls which element the InlineLabel should be rendered into",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Forms/InlineLabel.tsx#InlineLabel"]={docgenInfo:x.__docgenInfo,name:"InlineLabel",path:"src/components/Forms/InlineLabel.tsx#InlineLabel"})}catch{}},"./src/components/Icon/Icon.tsx":function(R,b,l){l.d(b,{I:function(){return o}});var u=l("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),f=l("../../node_modules/react/index.js"),s=l("../../node_modules/react-inlinesvg/esm/index.js"),r=l("../grafana-data/src/types/icon.ts"),c=l("./src/themes/ThemeContext.tsx"),m=l("./src/components/Icon/utils.ts"),i=Object.defineProperty,d=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,O=(a,t,e)=>t in a?i(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,I=(a,t)=>{for(var e in t||(t={}))g.call(t,e)&&O(a,e,t[e]);if(d)for(var e of d(t))y.call(t,e)&&O(a,e,t[e]);return a},x=(a,t)=>{var e={};for(var n in a)g.call(a,n)&&t.indexOf(n)<0&&(e[n]=a[n]);if(a!=null&&d)for(var n of d(a))t.indexOf(n)<0&&y.call(a,n)&&(e[n]=a[n]);return e};const T=a=>({icon:(0,u.AH)({display:"inline-block",fill:"currentColor",flexShrink:0,label:"Icon",lineHeight:0,verticalAlign:"middle"}),orange:(0,u.AH)({fill:a.v1.palette.orange})}),o=f.forwardRef((a,t)=>{var e=a,{size:n="md",type:_="default",name:P,className:L,style:h,title:C=""}=e,E=x(e,["size","type","name","className","style","title"]);const S=(0,c.of)(T);(0,r.n6)(P)||console.warn("Icon component passed an invalid icon name",P);const j=P==="fa fa-spinner"?"spinner":P,v=(0,m.Wj)(),p=(0,m.cs)(n),w=p,M=P.startsWith("gf-bar-align")?16:P.startsWith("gf-interp")?30:p,D=(0,m.Xi)(j,_),A=`${v}${D}/${j}.svg`,k=(0,u.cx)(S.icon,L,_==="mono"?{[S.orange]:P==="favorite"}:"",j==="spinner"&&"fa-spin");return f.createElement(s.A,I({innerRef:t,src:A,width:M,height:w,title:C,className:k,style:h},E))});o.displayName="Icon";try{o.displayName="Icon",o.__docgenInfo={description:"",displayName:"Icon",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"play"'},{value:'"google"'},{value:'"microsoft"'},{value:'"github"'},{value:'"gitlab"'},{value:'"okta"'},{value:'"discord"'},{value:'"hipchat"'},{value:'"amazon"'},{value:'"google-hangouts-alt"'},{value:'"pagerduty"'},{value:'"line"'},{value:'"anchor"'},{value:'"adjust-circle"'},{value:'"angle-double-down"'},{value:'"angle-double-right"'},{value:'"angle-double-up"'},{value:'"angle-down"'},{value:'"angle-left"'},{value:'"angle-right"'},{value:'"angle-up"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"application-observability"'},{value:'"apps"'},{value:'"archive-alt"'},{value:'"arrow"'},{value:'"arrow-down"'},{value:'"arrow-from-right"'},{value:'"arrow-left"'},{value:'"arrow-random"'},{value:'"arrow-right"'},{value:'"arrow-to-right"'},{value:'"arrow-up"'},{value:'"arrows-h"'},{value:'"arrows-v"'},{value:'"asserts"'},{value:'"expand-arrows"'},{value:'"at"'},{value:'"ai"'},{value:'"backward"'},{value:'"bars"'},{value:'"bell"'},{value:'"bell-slash"'},{value:'"bolt"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"brackets-curly"'},{value:'"bug"'},{value:'"building"'},{value:'"calculator-alt"'},{value:'"calendar-alt"'},{value:'"calendar-slash"'},{value:'"camera"'},{value:'"capture"'},{value:'"channel-add"'},{value:'"chart-line"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"circle"'},{value:'"circle-mono"'},{value:'"clipboard-alt"'},{value:'"clock-nine"'},{value:'"cloud"'},{value:'"cloud-download"'},{value:'"cloud-upload"'},{value:'"code-branch"'},{value:'"cog"'},{value:'"columns"'},{value:'"comment-alt"'},{value:'"comment-alt-message"'},{value:'"comment-alt-share"'},{value:'"comments-alt"'},{value:'"compass"'},{value:'"copy"'},{value:'"corner-down-right-alt"'},{value:'"create-dashboard"'},{value:'"credit-card"'},{value:'"crosshair"'},{value:'"cube"'},{value:'"dashboard"'},{value:'"database"'},{value:'"dice-three"'},{value:'"docker"'},{value:'"document-info"'},{value:'"document-layout-left"'},{value:'"download-alt"'},{value:'"draggabledots"'},{value:'"edit"'},{value:'"ellipsis-v"'},{value:'"enter"'},{value:'"envelope"'},{value:'"exchange-alt"'},{value:'"exclamation-triangle"'},{value:'"exclamation-circle"'},{value:'"external-link-alt"'},{value:'"eye"'},{value:'"eye-slash"'},{value:'"ellipsis-h"'},{value:'"fa fa-spinner"'},{value:'"favorite"'},{value:'"file-alt"'},{value:'"file-blank"'},{value:'"file-copy-alt"'},{value:'"file-download"'},{value:'"file-edit-alt"'},{value:'"file-landscape-alt"'},{value:'"filter"'},{value:'"flip"'},{value:'"folder"'},{value:'"font"'},{value:'"fire"'},{value:'"folder-open"'},{value:'"folder-plus"'},{value:'"folder-upload"'},{value:'"forward"'},{value:'"frontend-observability"'},{value:'"gf-bar-alignment-after"'},{value:'"gf-bar-alignment-before"'},{value:'"gf-bar-alignment-center"'},{value:'"gf-glue"'},{value:'"gf-grid"'},{value:'"gf-interpolation-linear"'},{value:'"gf-interpolation-smooth"'},{value:'"gf-interpolation-step-after"'},{value:'"gf-interpolation-step-before"'},{value:'"gf-landscape"'},{value:'"gf-layout-simple"'},{value:'"gf-logs"'},{value:'"gf-ml"'},{value:'"gf-movepane-left"'},{value:'"gf-movepane-right"'},{value:'"gf-portrait"'},{value:'"gf-service-account"'},{value:'"gf-show-context"'},{value:'"gf-pin"'},{value:'"gf-prometheus"'},{value:'"gf-traces"'},{value:'"globe"'},{value:'"grafana"'},{value:'"graph-bar"'},{value:'"heart"'},{value:'"heart-rate"'},{value:'"heart-break"'},{value:'"history"'},{value:'"history-alt"'},{value:'"home"'},{value:'"home-alt"'},{value:'"horizontal-align-center"'},{value:'"horizontal-align-left"'},{value:'"horizontal-align-right"'},{value:'"hourglass"'},{value:'"import"'},{value:'"info"'},{value:'"info-circle"'},{value:'"k6"'},{value:'"key-skeleton-alt"'},{value:'"keyboard"'},{value:'"layer-group"'},{value:'"layers-alt"'},{value:'"library-panel"'},{value:'"line-alt"'},{value:'"link"'},{value:'"list-ui-alt"'},{value:'"list-ul"'},{value:'"list-ol"'},{value:'"lock"'},{value:'"map-marker"'},{value:'"map-marker-plus"'},{value:'"map-marker-minus"'},{value:'"message"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"mobile-android"'},{value:'"monitor"'},{value:'"palette"'},{value:'"panel-add"'},{value:'"paragraph"'},{value:'"pathfinder-unite"'},{value:'"pause"'},{value:'"pen"'},{value:'"percentage"'},{value:'"plug"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-square"'},{value:'"power"'},{value:'"presentation-play"'},{value:'"process"'},{value:'"question-circle"'},{value:'"record-audio"'},{value:'"repeat"'},{value:'"rocket"'},{value:'"ruler-combined"'},{value:'"save"'},{value:'"search"'},{value:'"search-minus"'},{value:'"search-plus"'},{value:'"share-alt"'},{value:'"shield"'},{value:'"shield-exclamation"'},{value:'"signal"'},{value:'"signin"'},{value:'"signout"'},{value:'"sitemap"'},{value:'"slack"'},{value:'"sliders-v-alt"'},{value:'"spinner"'},{value:'"sort-amount-down"'},{value:'"sort-amount-up"'},{value:'"square-shape"'},{value:'"star"'},{value:'"step-backward"'},{value:'"stopwatch"'},{value:'"stopwatch-slash"'},{value:'"sync"'},{value:'"sync-slash"'},{value:'"table"'},{value:'"table-collapse-all"'},{value:'"table-expand-all"'},{value:'"tag-alt"'},{value:'"telegram-alt"'},{value:'"text-fields"'},{value:'"thumbs-up"'},{value:'"times"'},{value:'"times-circle"'},{value:'"toggle-on"'},{value:'"toggle-off"'},{value:'"trash-alt"'},{value:'"unarchive"'},{value:'"unlock"'},{value:'"upload"'},{value:'"user"'},{value:'"users-alt"'},{value:'"user-arrows"'},{value:'"vertical-align-bottom"'},{value:'"vertical-align-center"'},{value:'"vertical-align-top"'},{value:'"web-section-alt"'},{value:'"wrap-text"'},{value:'"rss"'},{value:'"x"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"default"'},{value:'"mono"'}]}},title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:o.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch{}},"./src/components/Icon/utils.ts":function(R,b,l){l.d(b,{Wj:function(){return c},Xi:function(){return f},cs:function(){return s}});const u=["grafana","favorite","heart-break","heart","panel-add","library-panel","circle-mono"];function f(m,i){return m?.startsWith("gf-")?"custom":u.includes(m)?"mono":i==="default"?"unicons":i==="solid"?"solid":"mono"}function s(m){switch(m){case"xs":return 12;case"sm":return 14;case"md":return 16;case"lg":return 18;case"xl":return 24;case"xxl":return 36;case"xxxl":return 48}}let r;function c(){if(r)return r;const m=typeof window<"u"&&window.__grafana_public_path__;return m?r=m+"img/icons/":r="public/img/icons/",r}},"./src/components/Portal/Portal.tsx":function(R,b,l){l.d(b,{ZL:function(){return x},gF:function(){return T}});var u=l("../../node_modules/react/index.js"),f=l("../../node_modules/react-dom/index.js"),s=l("./src/themes/ThemeContext.tsx"),r=Object.defineProperty,c=Object.defineProperties,m=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,y=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,O=(t,e)=>{for(var n in e||(e={}))d.call(e,n)&&y(t,n,e[n]);if(i)for(var n of i(e))g.call(e,n)&&y(t,n,e[n]);return t},I=(t,e)=>c(t,m(e));function x(t){const{children:e,className:n,root:_,forwardedRef:P}=t,L=(0,s.$j)(),h=(0,u.useRef)(null),C=_??T();return h.current||(h.current=document.createElement("div"),n&&(h.current.className=n),h.current.style.position="relative",h.current.style.zIndex=`${L.zIndex.portal}`),(0,u.useLayoutEffect)(()=>(h.current&&C.appendChild(h.current),()=>{h.current&&C.removeChild(h.current)}),[C]),f.createPortal(u.createElement("div",{ref:P},e),h.current)}function T(){var t;return(t=window.document.getElementById("grafana-portal-container"))!=null?t:document.body}function o(){return React.createElement("div",{id:"grafana-portal-container"})}const a=u.forwardRef((t,e)=>u.createElement(x,I(O({},t),{forwardedRef:e})));a.displayName="RefForwardingPortal";try{x.displayName="RefForwardingPortal",x.__docgenInfo={description:"",displayName:"RefForwardingPortal",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},root:{defaultValue:null,description:"",name:"root",required:!1,type:{name:"HTMLElement"}},forwardedRef:{defaultValue:null,description:"",name:"forwardedRef",required:!1,type:{name:"ForwardedRef<HTMLDivElement>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Portal/Portal.tsx#RefForwardingPortal"]={docgenInfo:a.__docgenInfo,name:"RefForwardingPortal",path:"src/components/Portal/Portal.tsx#RefForwardingPortal"})}catch{}},"./src/components/Tooltip/Tooltip.tsx":function(R,b,l){l.d(b,{m:function(){return a}});var u=l("../../node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),f=l("../../node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),s=l("../../node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),r=l("../../node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),c=l("../../node_modules/react/index.js"),m=l("../grafana-e2e-selectors/src/selectors/index.ts"),i=l("./src/themes/ThemeContext.tsx"),d=l("./src/utils/tooltipUtils.ts"),g=l("./src/components/Portal/Portal.tsx"),y=Object.defineProperty,O=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,T=(e,n,_)=>n in e?y(e,n,{enumerable:!0,configurable:!0,writable:!0,value:_}):e[n]=_,o=(e,n)=>{for(var _ in n||(n={}))I.call(n,_)&&T(e,_,n[_]);if(O)for(var _ of O(n))x.call(n,_)&&T(e,_,n[_]);return e};const a=c.forwardRef(({children:e,theme:n,interactive:_,show:P,placement:L,content:h},C)=>{const E=(0,c.useRef)(null),[S,j]=(0,c.useState)(P),v=P??S,p=[(0,u.cY)(8),(0,f.UU)({fallbackAxisSideDirection:"end",crossAxis:!1,boundary:document.body}),(0,f.BN)(),(0,s.UE)({element:E})],{context:w,refs:M,floatingStyles:D}=(0,r.we)({open:v,placement:(0,d.O)(L),onOpenChange:j,middleware:p,whileElementsMounted:f.ll}),A=(0,c.useId)(),k=(0,r.Mk)(w,{delay:{close:_?100:0},move:!1}),N=(0,r.iQ)(w),K=(0,r.s9)(w),{getReferenceProps:U,getFloatingProps:V}=(0,r.bv)([K,k,N]),F=typeof h=="function",W=(0,i.of)(t)[n??"info"],z=(0,c.useCallback)(B=>{M.setReference(B),typeof C=="function"?C(B):C&&(C.current=B)},[C,M]),H="aria-label"in e.props&&e.props["aria-label"]===h;return c.createElement(c.Fragment,null,c.cloneElement(e,o({ref:z,tabIndex:0,"aria-describedby":!H&&v?A:void 0},U())),v&&c.createElement(g.ZL,null,c.createElement("div",o({ref:M.setFloating,style:D},V()),c.createElement(r.ie,{className:W.arrow,ref:E,context:w}),c.createElement("div",{"data-testid":m.Tp.components.Tooltip.container,id:A,role:"tooltip",className:W.container},typeof h=="string"&&h,c.isValidElement(h)&&c.cloneElement(h),F&&h({})))))});a.displayName="Tooltip";const t=e=>{const n=(0,d.f)(e,e.components.tooltip.background,e.components.tooltip.background,e.components.tooltip.text,{topBottom:.5,rightLeft:1}),_=(0,d.f)(e,e.colors.error.main,e.colors.error.main,e.colors.error.contrastText,{topBottom:.5,rightLeft:1});return{info:n,["info-alt"]:n,error:_}};try{a.displayName="Tooltip",a.__docgenInfo={description:"",displayName:"Tooltip",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"error"'},{value:'"info-alt"'}]}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"bottom"'},{value:'"top"'},{value:'"right"'},{value:'"left"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"auto-start"'},{value:'"auto-end"'}]}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"PopoverContent"}},interactive:{defaultValue:null,description:"Set to true if you want the tooltip to stay long enough so the user can move mouse over content to select text or click a link",name:"interactive",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:a.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip/Tooltip.tsx#Tooltip"})}catch{}},"./src/utils/tooltipUtils.ts":function(R,b,l){l.d(b,{O:function(){return f},f:function(){return s}});var u=l("../../node_modules/@emotion/css/dist/emotion-css.esm.js");function f(r){switch(r){case"auto":return"bottom";case"auto-start":return"bottom-start";case"auto-end":return"bottom-end";default:return r??"bottom"}}function s(r,c,m,i,d){return{arrow:(0,u.AH)({fill:c}),container:(0,u.AH)({backgroundColor:c,borderRadius:r.shape.radius.default,border:`1px solid ${m}`,boxShadow:r.shadows.z2,color:i,fontSize:r.typography.bodySmall.fontSize,padding:r.spacing(d.topBottom,d.rightLeft),transition:"opacity 0.3s",zIndex:r.zIndex.tooltip,maxWidth:"400px",overflowWrap:"break-word","&[data-popper-interactive='false']":{pointerEvents:"none"}}),headerClose:(0,u.AH)({color:r.colors.text.secondary,position:"absolute",right:r.spacing(1),top:r.spacing(1.5),backgroundColor:"transparent",border:0}),header:(0,u.AH)({paddingTop:r.spacing(1),paddingBottom:r.spacing(2)}),body:(0,u.AH)({paddingTop:r.spacing(1),paddingBottom:r.spacing(1)}),footer:(0,u.AH)({paddingTop:r.spacing(2),paddingBottom:r.spacing(1)})}}}}]);