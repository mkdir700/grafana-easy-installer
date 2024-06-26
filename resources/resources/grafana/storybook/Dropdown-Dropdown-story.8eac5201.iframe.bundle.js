"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[1690],{"../../node_modules/@mdx-js/react/lib/index.js":function(M,g,a){a.d(g,{BN:function(){return m},RP:function(){return d},gz:function(){return h},xA:function(){return p}});var l=a("../../node_modules/react/index.js");const m=l.createContext({});function h(v){return c;function c(y){const w=d(y.components);return l.createElement(v,{...y,allComponents:w})}}function d(v){const c=l.useContext(m);return l.useMemo(()=>typeof v=="function"?v(c):{...c,...v},[c,v])}const i={};function p({components:v,children:c,disableParentContext:y}){let w;return y?w=typeof v=="function"?v({}):v||i:w=d(v),l.createElement(m.Provider,{value:w},c)}},"../../node_modules/react-use/esm/useEffectOnce.js":function(M,g,a){var l=a("../../node_modules/react/index.js"),m=function(h){(0,l.useEffect)(h,[])};g.A=m},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(M,g,a){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=a("../../node_modules/react/index.js"),m=Symbol.for("react.element"),h=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function v(c,y,w){var b,S={},I=null,D=null;w!==void 0&&(I=""+w),y.key!==void 0&&(I=""+y.key),y.ref!==void 0&&(D=y.ref);for(b in y)d.call(y,b)&&!p.hasOwnProperty(b)&&(S[b]=y[b]);if(c&&c.defaultProps)for(b in y=c.defaultProps,y)S[b]===void 0&&(S[b]=y[b]);return{$$typeof:m,type:c,key:I,ref:D,props:S,_owner:i.current}}g.Fragment=h,g.jsx=v,g.jsxs=v},"../../node_modules/react/jsx-runtime.js":function(M,g,a){M.exports=a("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/Dropdown/Dropdown.story.tsx":function(M,g,a){a.r(g),a.d(g,{Examples:function(){return P},default:function(){return B}});var l=a("../../node_modules/react/index.js"),m=a("./src/utils/storybook/StoryExample.tsx"),h=a("./src/components/Button/Button.tsx"),d=a("./src/components/IconButton/IconButton.tsx"),i=a("./src/components/Layout/Layout.tsx"),p=a("./src/components/Menu/Menu.tsx"),v=a("./src/components/Dropdown/Dropdown.tsx"),c=a("../../node_modules/react/jsx-runtime.js"),y=a("../../node_modules/@mdx-js/react/lib/index.js"),w=a("../../node_modules/@storybook/blocks/dist/index.mjs");function b(_){const r=Object.assign({h1:"h1",p:"p",h3:"h3",pre:"pre",code:"code"},(0,y.RP)(),_.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(w.W8,{title:"MDX|Dropdown",component:v.m}),`
`,(0,c.jsx)(r.h1,{id:"dropdown",children:"Dropdown"}),`
`,(0,c.jsx)(r.p,{children:"Hook up a menu or other overlay to any trigger."}),`
`,(0,c.jsx)(r.h3,{id:"when-to-use",children:"When to use"}),`
`,(0,c.jsx)(r.p,{children:`When you want a button, link or icon button to open a Menu or Popover. By default the trigger is click but it can be changed to show on hover using the
trigger property.`}),`
`,(0,c.jsx)(r.h3,{id:"usage",children:"Usage"}),`
`,(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-tsx",children:`import { Dropdown, Menu, Button } from '@grafana/ui';

const menu = (
  <Menu>
    <Menu.Item label="Google" />
    <Menu.Item label="Filter" />
  </Menu>
);

return (
  <Dropdown overlay={menu}>
    <Button icon="bars" />
  </Dropdown>
);
`})}),`
`,(0,c.jsx)(w.ov,{of:v.m})]})}function S(_={}){const{wrapper:r}=Object.assign({},(0,y.RP)(),_.components);return r?(0,c.jsx)(r,Object.assign({},_,{children:(0,c.jsx)(b,_)})):b(_)}var I=S,D=Object.defineProperty,L=Object.defineProperties,C=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,t=(_,r,O)=>r in _?D(_,r,{enumerable:!0,configurable:!0,writable:!0,value:O}):_[r]=O,u=(_,r)=>{for(var O in r||(r={}))E.call(r,O)&&t(_,O,r[O]);if(j)for(var O of j(r))n.call(r,O)&&t(_,O,r[O]);return _},e=(_,r)=>L(_,C(r)),o,s,f;const x={title:"Overlays/Dropdown",component:v.m,parameters:{docs:{page:I},controls:{exclude:["className"]}}};function P(){const _=l.createElement(p.W,null,l.createElement(p.W.Item,{label:"View settings"}),l.createElement(p.W.Item,{label:"Edit actions"}),l.createElement(p.W.Item,{label:"Share"}),l.createElement(p.W.Item,{label:"Delete"}));return l.createElement(i.gW,null,l.createElement(m.Q,{name:"Button + defaults"},l.createElement(v.m,{overlay:_},l.createElement(h.$n,{variant:"secondary"},"Button"))),l.createElement(m.Q,{name:"Icon button, placement=bottom-start"},l.createElement(v.m,{overlay:_,placement:"bottom-start"},l.createElement(d.K,{tooltip:"Open menu",variant:"secondary",name:"bars"}))))}P.parameters={controls:{hideNoControlsWarning:!0,include:[]}};var B=x;P.parameters=e(u({},P.parameters),{docs:e(u({},(o=P.parameters)==null?void 0:o.docs),{source:u({originalSource:`function Examples() {
  const menu = <Menu>
      <Menu.Item label="View settings" />
      <Menu.Item label="Edit actions" />
      <Menu.Item label="Share" />
      <Menu.Item label="Delete" />
    </Menu>;
  return <VerticalGroup>
      <StoryExample name="Button + defaults">
        <Dropdown overlay={menu}>
          <Button variant="secondary">Button</Button>
        </Dropdown>
      </StoryExample>

      <StoryExample name="Icon button, placement=bottom-start">
        <Dropdown overlay={menu} placement="bottom-start">
          <IconButton tooltip="Open menu" variant="secondary" name="bars" />
        </Dropdown>
      </StoryExample>
    </VerticalGroup>;
}`},(f=(s=P.parameters)==null?void 0:s.docs)==null?void 0:f.source)})})},"../grafana-data/src/utils/deprecationWarning.ts":function(M,g,a){a.d(g,{l:function(){return m}});const l={},m=(h,d,i)=>{let p=`[Deprecation warning] ${h}: ${d} is deprecated`;i&&(p+=`. Use ${i} instead`);const v=Date.now(),c=l[p];(!c||v-c>1e4)&&(console.warn(p),l[p]=v)}},"./src/components/Dropdown/Dropdown.tsx":function(M,g,a){a.d(g,{m:function(){return C}});var l=a("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),m=a("../../node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),h=a("../../node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),d=a("../../node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),i=a("../../node_modules/react/index.js"),p=a("../../node_modules/react-transition-group/esm/CSSTransition.js"),v=a("./src/utils/reactUtils.ts"),c=a("./src/utils/tooltipUtils.ts"),y=a("./src/components/Portal/Portal.tsx"),w=Object.defineProperty,b=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,D=(E,n,t)=>n in E?w(E,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):E[n]=t,L=(E,n)=>{for(var t in n||(n={}))S.call(n,t)&&D(E,t,n[t]);if(b)for(var t of b(n))I.call(n,t)&&D(E,t,n[t]);return E};const C=i.memo(({children:E,overlay:n,placement:t,offset:u,onVisibleChange:e})=>{var o,s;const[f,x]=(0,i.useState)(!1),P=(0,i.useRef)(null);(0,i.useEffect)(()=>{e?.(f)},[e,f]);const B=[(0,m.cY)({mainAxis:(o=u?.[0])!=null?o:8,crossAxis:(s=u?.[1])!=null?s:0}),(0,h.UU)({fallbackAxisSideDirection:"end",crossAxis:!1,boundary:document.body}),(0,h.BN)()],{context:_,refs:r,floatingStyles:O}=(0,d.we)({open:f,placement:(0,c.O)(t),onOpenChange:x,middleware:B,whileElementsMounted:h.ll}),A=(0,d.kp)(_),R=(0,d.s9)(_),{getReferenceProps:T,getFloatingProps:W}=(0,d.bv)([R,A]),V=150,K=j(V),N=()=>{x(!1)},U=z=>{z.key==="Tab"&&x(!1)};return i.createElement(i.Fragment,null,i.cloneElement(E,L({ref:r.setReference},T())),f&&i.createElement(y.ZL,null,i.createElement(d.s3,{context:_},i.createElement("div",{ref:r.setFloating,style:O,onClick:N,onKeyDown:U},i.createElement(p.A,{nodeRef:P,appear:!0,in:!0,timeout:{appear:V,exit:0,enter:0},classNames:K},i.createElement("div",{ref:P},v.b(n,L({},W()))))))))});C.displayName="Dropdown";const j=E=>({appear:(0,l.AH)({opacity:"0",position:"relative",transform:"scaleY(0.5)",transformOrigin:"top"}),appearActive:(0,l.AH)({opacity:"1",transform:"scaleY(1)",transition:`transform ${E}ms cubic-bezier(0.2, 0, 0.2, 1), opacity ${E}ms cubic-bezier(0.2, 0, 0.2, 1)`})});try{C.displayName="Dropdown",C.__docgenInfo={description:"",displayName:"Dropdown",props:{overlay:{defaultValue:null,description:"",name:"overlay",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | (() => ReactElement<any, string | JSXElementConstructor<any>>)"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"bottom"'},{value:'"top"'},{value:'"right"'},{value:'"left"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"auto-start"'},{value:'"auto-end"'}]}},offset:{defaultValue:null,description:"Amount in pixels to nudge the dropdown vertically and horizontally, respectively.",name:"offset",required:!1,type:{name:"[number, number]"}},onVisibleChange:{defaultValue:null,description:"",name:"onVisibleChange",required:!1,type:{name:"((state: boolean) => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Dropdown/Dropdown.tsx#Dropdown"]={docgenInfo:C.__docgenInfo,name:"Dropdown",path:"src/components/Dropdown/Dropdown.tsx#Dropdown"})}catch{}},"./src/components/IconButton/IconButton.tsx":function(M,g,a){a.d(g,{K:function(){return t}});var l=a("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),m=a("../../node_modules/react/index.js"),h=a("../grafana-data/src/utils/deprecationWarning.ts"),d=a("../grafana-data/src/themes/colorManipulator.ts"),i=a("./src/themes/ThemeContext.tsx"),p=a("./src/themes/mixins.ts"),v=a("./src/components/Icon/Icon.tsx"),c=a("./src/components/Icon/utils.ts"),y=a("./src/components/Tooltip/Tooltip.tsx"),w=Object.defineProperty,b=Object.defineProperties,S=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,C=(e,o,s)=>o in e?w(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,j=(e,o)=>{for(var s in o||(o={}))D.call(o,s)&&C(e,s,o[s]);if(I)for(var s of I(o))L.call(o,s)&&C(e,s,o[s]);return e},E=(e,o)=>b(e,S(o)),n=(e,o)=>{var s={};for(var f in e)D.call(e,f)&&o.indexOf(f)<0&&(s[f]=e[f]);if(e!=null&&I)for(var f of I(e))o.indexOf(f)<0&&L.call(e,f)&&(s[f]=e[f]);return s};const t=m.forwardRef((e,o)=>{const{size:s="md",variant:f="secondary"}=e;let x;s==="xxl"||s==="xxxl"?((0,h.l)("IconButton",'size="xxl" and size="xxxl"','size="xl"'),x="xl"):x=s;const P=(0,i.of)(u,x,f);let B,_;if("tooltip"in e){const{tooltip:r}=e;B=typeof r=="string"?r:void 0}else if("ariaLabel"in e||"aria-label"in e){const{ariaLabel:r,["aria-label"]:O}=e;B=O||r,_=o}if("tooltip"in e){const r=e,{name:O,iconType:A,className:R,tooltip:T,tooltipPlacement:W}=r,V=n(r,["name","iconType","className","tooltip","tooltipPlacement"]);return m.createElement(y.m,{ref:o,content:T,placement:W},m.createElement("button",E(j({},V),{ref:_,"aria-label":B,className:(0,l.cx)(P.button,R),type:"button"}),m.createElement(v.I,{name:O,size:x,className:P.icon,type:A})))}else{const r=e,{name:O,iconType:A,className:R}=r,T=n(r,["name","iconType","className"]);return m.createElement("button",E(j({},T),{ref:_,"aria-label":B,className:(0,l.cx)(P.button,R),type:"button"}),m.createElement(v.I,{name:O,size:x,className:P.icon,type:A}))}});t.displayName="IconButton";const u=(e,o,s)=>{const f=(0,c.cs)(o)+e.spacing.gridSize;let x=e.colors.text.primary;return s==="primary"?x=e.colors.primary.text:s==="destructive"&&(x=e.colors.error.text),{button:(0,l.AH)({zIndex:0,position:"relative",margin:`0 ${e.spacing.x0_5} 0 0`,boxShadow:"none",border:"none",display:"inline-flex",background:"transparent",justifyContent:"center",alignItems:"center",padding:0,color:x,"&[disabled], &:disabled":{cursor:"not-allowed",color:e.colors.action.disabledText,opacity:.65},"&:before":{zIndex:-1,position:"absolute",opacity:0,width:`${f}px`,height:`${f}px`,borderRadius:e.shape.radius.default,content:'""',transitionDuration:"0.2s",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionProperty:"opacity"},"&:focus, &:focus-visible":(0,p.Hi)(e),"&:focus:not(:focus-visible)":(0,p.cr)(e),"&:hover":{"&:before":{backgroundColor:s==="secondary"?e.colors.action.hover:d.X4(x,.12),opacity:1}}}),icon:(0,l.AH)({verticalAlign:"baseline"})}};try{t.displayName="IconButton",t.__docgenInfo={description:"",displayName:"IconButton",props:{tooltip:{defaultValue:null,description:"Tooltip content to display on hover and as the aria-label",name:"tooltip",required:!0,type:{name:"PopoverContent"}},tooltipPlacement:{defaultValue:null,description:"Position of the tooltip",name:"tooltipPlacement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"bottom"'},{value:'"top"'},{value:'"right"'},{value:'"left"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"auto-start"'},{value:'"auto-end"'}]}},name:{defaultValue:null,description:"Name of the icon *",name:"name",required:!0,type:{name:"enum",value:[{value:'"play"'},{value:'"google"'},{value:'"microsoft"'},{value:'"github"'},{value:'"gitlab"'},{value:'"okta"'},{value:'"discord"'},{value:'"hipchat"'},{value:'"amazon"'},{value:'"google-hangouts-alt"'},{value:'"pagerduty"'},{value:'"line"'},{value:'"anchor"'},{value:'"adjust-circle"'},{value:'"angle-double-down"'},{value:'"angle-double-right"'},{value:'"angle-double-up"'},{value:'"angle-down"'},{value:'"angle-left"'},{value:'"angle-right"'},{value:'"angle-up"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"application-observability"'},{value:'"apps"'},{value:'"archive-alt"'},{value:'"arrow"'},{value:'"arrow-down"'},{value:'"arrow-from-right"'},{value:'"arrow-left"'},{value:'"arrow-random"'},{value:'"arrow-right"'},{value:'"arrow-to-right"'},{value:'"arrow-up"'},{value:'"arrows-h"'},{value:'"arrows-v"'},{value:'"asserts"'},{value:'"expand-arrows"'},{value:'"at"'},{value:'"ai"'},{value:'"backward"'},{value:'"bars"'},{value:'"bell"'},{value:'"bell-slash"'},{value:'"bolt"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"brackets-curly"'},{value:'"bug"'},{value:'"building"'},{value:'"calculator-alt"'},{value:'"calendar-alt"'},{value:'"calendar-slash"'},{value:'"camera"'},{value:'"capture"'},{value:'"channel-add"'},{value:'"chart-line"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"circle"'},{value:'"circle-mono"'},{value:'"clipboard-alt"'},{value:'"clock-nine"'},{value:'"cloud"'},{value:'"cloud-download"'},{value:'"cloud-upload"'},{value:'"code-branch"'},{value:'"cog"'},{value:'"columns"'},{value:'"comment-alt"'},{value:'"comment-alt-message"'},{value:'"comment-alt-share"'},{value:'"comments-alt"'},{value:'"compass"'},{value:'"copy"'},{value:'"corner-down-right-alt"'},{value:'"create-dashboard"'},{value:'"credit-card"'},{value:'"crosshair"'},{value:'"cube"'},{value:'"dashboard"'},{value:'"database"'},{value:'"dice-three"'},{value:'"docker"'},{value:'"document-info"'},{value:'"document-layout-left"'},{value:'"download-alt"'},{value:'"draggabledots"'},{value:'"edit"'},{value:'"ellipsis-v"'},{value:'"enter"'},{value:'"envelope"'},{value:'"exchange-alt"'},{value:'"exclamation-triangle"'},{value:'"exclamation-circle"'},{value:'"external-link-alt"'},{value:'"eye"'},{value:'"eye-slash"'},{value:'"ellipsis-h"'},{value:'"fa fa-spinner"'},{value:'"favorite"'},{value:'"file-alt"'},{value:'"file-blank"'},{value:'"file-copy-alt"'},{value:'"file-download"'},{value:'"file-edit-alt"'},{value:'"file-landscape-alt"'},{value:'"filter"'},{value:'"flip"'},{value:'"folder"'},{value:'"font"'},{value:'"fire"'},{value:'"folder-open"'},{value:'"folder-plus"'},{value:'"folder-upload"'},{value:'"forward"'},{value:'"frontend-observability"'},{value:'"gf-bar-alignment-after"'},{value:'"gf-bar-alignment-before"'},{value:'"gf-bar-alignment-center"'},{value:'"gf-glue"'},{value:'"gf-grid"'},{value:'"gf-interpolation-linear"'},{value:'"gf-interpolation-smooth"'},{value:'"gf-interpolation-step-after"'},{value:'"gf-interpolation-step-before"'},{value:'"gf-landscape"'},{value:'"gf-layout-simple"'},{value:'"gf-logs"'},{value:'"gf-ml"'},{value:'"gf-movepane-left"'},{value:'"gf-movepane-right"'},{value:'"gf-portrait"'},{value:'"gf-service-account"'},{value:'"gf-show-context"'},{value:'"gf-pin"'},{value:'"gf-prometheus"'},{value:'"gf-traces"'},{value:'"globe"'},{value:'"grafana"'},{value:'"graph-bar"'},{value:'"heart"'},{value:'"heart-rate"'},{value:'"heart-break"'},{value:'"history"'},{value:'"history-alt"'},{value:'"home"'},{value:'"home-alt"'},{value:'"horizontal-align-center"'},{value:'"horizontal-align-left"'},{value:'"horizontal-align-right"'},{value:'"hourglass"'},{value:'"import"'},{value:'"info"'},{value:'"info-circle"'},{value:'"k6"'},{value:'"key-skeleton-alt"'},{value:'"keyboard"'},{value:'"layer-group"'},{value:'"layers-alt"'},{value:'"library-panel"'},{value:'"line-alt"'},{value:'"link"'},{value:'"list-ui-alt"'},{value:'"list-ul"'},{value:'"list-ol"'},{value:'"lock"'},{value:'"map-marker"'},{value:'"map-marker-plus"'},{value:'"map-marker-minus"'},{value:'"message"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"mobile-android"'},{value:'"monitor"'},{value:'"palette"'},{value:'"panel-add"'},{value:'"paragraph"'},{value:'"pathfinder-unite"'},{value:'"pause"'},{value:'"pen"'},{value:'"percentage"'},{value:'"plug"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-square"'},{value:'"power"'},{value:'"presentation-play"'},{value:'"process"'},{value:'"question-circle"'},{value:'"record-audio"'},{value:'"repeat"'},{value:'"rocket"'},{value:'"ruler-combined"'},{value:'"save"'},{value:'"search"'},{value:'"search-minus"'},{value:'"search-plus"'},{value:'"share-alt"'},{value:'"shield"'},{value:'"shield-exclamation"'},{value:'"signal"'},{value:'"signin"'},{value:'"signout"'},{value:'"sitemap"'},{value:'"slack"'},{value:'"sliders-v-alt"'},{value:'"spinner"'},{value:'"sort-amount-down"'},{value:'"sort-amount-up"'},{value:'"square-shape"'},{value:'"star"'},{value:'"step-backward"'},{value:'"stopwatch"'},{value:'"stopwatch-slash"'},{value:'"sync"'},{value:'"sync-slash"'},{value:'"table"'},{value:'"table-collapse-all"'},{value:'"table-expand-all"'},{value:'"tag-alt"'},{value:'"telegram-alt"'},{value:'"text-fields"'},{value:'"thumbs-up"'},{value:'"times"'},{value:'"times-circle"'},{value:'"toggle-on"'},{value:'"toggle-off"'},{value:'"trash-alt"'},{value:'"unarchive"'},{value:'"unlock"'},{value:'"upload"'},{value:'"user"'},{value:'"users-alt"'},{value:'"user-arrows"'},{value:'"vertical-align-bottom"'},{value:'"vertical-align-center"'},{value:'"vertical-align-top"'},{value:'"web-section-alt"'},{value:'"wrap-text"'},{value:'"rss"'},{value:'"x"'}]}},size:{defaultValue:null,description:"Icon size - sizes xxl and xxxl are deprecated and when used being decreased to xl",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},iconType:{defaultValue:null,description:"Type of the icon - mono or default",name:"iconType",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"default"'},{value:'"mono"'}]}},variant:{defaultValue:null,description:"Variant to change the color of the Icon",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"destructive"'}]}},ariaLabel:{defaultValue:null,description:"@deprecated use aria-label instead",name:"ariaLabel",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Text available only for screen readers. No tooltip will be set in this case.",name:"aria-label",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/IconButton/IconButton.tsx#IconButton"]={docgenInfo:t.__docgenInfo,name:"IconButton",path:"src/components/IconButton/IconButton.tsx#IconButton"})}catch{}},"./src/components/Layout/Layout.tsx":function(M,g,a){a.d(g,{Gy:function(){return I},PE:function(){return S},gW:function(){return D}});var l=a("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),m=a("../../node_modules/react/index.js"),h=a("./src/themes/ThemeContext.tsx"),d=Object.defineProperty,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,c=(n,t,u)=>t in n?d(n,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[t]=u,y=(n,t)=>{for(var u in t||(t={}))p.call(t,u)&&c(n,u,t[u]);if(i)for(var u of i(t))v.call(t,u)&&c(n,u,t[u]);return n},w=(n,t)=>{var u={};for(var e in n)p.call(n,e)&&t.indexOf(e)<0&&(u[e]=n[e]);if(n!=null&&i)for(var e of i(n))t.indexOf(e)<0&&v.call(n,e)&&(u[e]=n[e]);return u},b=(n=>(n[n.Horizontal=0]="Horizontal",n[n.Vertical=1]="Vertical",n))(b||{});const S=n=>{var t=n,{children:u,orientation:e=0,spacing:o="sm",justify:s="flex-start",align:f="normal",wrap:x=!1,width:P="100%",height:B="100%"}=t,_=w(t,["children","orientation","spacing","justify","align","wrap","width","height"]);const r=(0,h.of)(C,e,o,s,f,x);return m.createElement("div",y({className:r.layout,style:{width:P,height:B}},_),m.Children.toArray(u).filter(Boolean).map((O,A)=>m.createElement("div",{className:r.childWrapper,key:A},O)))},I=({children:n,spacing:t,justify:u,align:e="center",wrap:o,width:s,height:f})=>m.createElement(S,{spacing:t,justify:u,orientation:0,align:e,width:s,height:f,wrap:o},n),D=({children:n,spacing:t,justify:u,align:e,width:o,height:s})=>m.createElement(S,{spacing:t,justify:u,orientation:1,align:e,width:o,height:s},n),L=({children:n,padding:t,margin:u,grow:e,shrink:o})=>{const s=useStyles2(E,t,u);return React.createElement("div",{className:cx(s.wrapper,e!==void 0&&css({flexGrow:e}),o!==void 0&&css({flexShrink:o}))},n)},C=(n,t,u,e,o,s)=>{const f=u!=="none"?n.spacing(j[u]):0,x=t===0&&!s||t===1?0:`-${f}`,P=t===1?"vertical-group":"horizontal-group";return{layout:(0,l.AH)({label:P,display:"flex",flexDirection:t===1?"column":"row",flexWrap:s?"wrap":"nowrap",justifyContent:e,alignItems:o,height:"100%",maxWidth:"100%",marginBottom:x}),childWrapper:(0,l.AH)({label:"layoutChildrenWrapper",marginBottom:t===0&&!s?0:f,marginRight:t===0?f:0,display:"flex",alignItems:o,"&:last-child":{marginBottom:t===1?0:void 0,marginRight:t===0?0:void 0}})}},j={none:0,xs:.5,sm:1,md:2,lg:3},E=(n,t,u)=>{const e=t&&t!=="none"&&n.spacing(j[t])||0,o=u&&u!=="none"&&n.spacing(j[u])||0;return{wrapper:css({label:"container",margin:o,padding:e})}};try{S.displayName="Layout",S.__docgenInfo={description:"",displayName:"Layout",props:{orientation:{defaultValue:{value:"Orientation.Horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},spacing:{defaultValue:{value:"sm"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},justify:{defaultValue:{value:"flex-start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"space-between"'}]}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"normal"'}]}},width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string"}},wrap:{defaultValue:{value:"false"},description:"",name:"wrap",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Layout.tsx#Layout"]={docgenInfo:S.__docgenInfo,name:"Layout",path:"src/components/Layout/Layout.tsx#Layout"})}catch{}try{I.displayName="HorizontalGroup",I.__docgenInfo={description:"",displayName:"HorizontalGroup",props:{width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string"}},wrap:{defaultValue:{value:"false"},description:"",name:"wrap",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"normal"'}]}},spacing:{defaultValue:{value:"sm"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},justify:{defaultValue:{value:"flex-start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"space-between"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Layout.tsx#HorizontalGroup"]={docgenInfo:I.__docgenInfo,name:"HorizontalGroup",path:"src/components/Layout/Layout.tsx#HorizontalGroup"})}catch{}try{D.displayName="VerticalGroup",D.__docgenInfo={description:"",displayName:"VerticalGroup",props:{width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string"}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"normal"'}]}},spacing:{defaultValue:{value:"sm"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},justify:{defaultValue:{value:"flex-start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"space-between"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Layout.tsx#VerticalGroup"]={docgenInfo:D.__docgenInfo,name:"VerticalGroup",path:"src/components/Layout/Layout.tsx#VerticalGroup"})}catch{}try{L.displayName="Container",L.__docgenInfo={description:"",displayName:"Container",props:{padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"number"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Layout.tsx#Container"]={docgenInfo:L.__docgenInfo,name:"Container",path:"src/components/Layout/Layout.tsx#Container"})}catch{}},"./src/utils/reactUtils.ts":function(M,g,a){a.d(g,{b:function(){return h},e:function(){return m}});var l=a("../../node_modules/react/index.js");function m(d){let i;const p=l.Children.only(d);return"id"in p?.props?i=p.props.id:"inputId"in p.props&&(i=p?.props.inputId),typeof i=="string"?i:void 0}function h(d,i){if(l.isValidElement(d)||typeof d=="string"||typeof d=="number")return d;if(typeof d=="function"&&i)return d(i);throw new Error(`${d} is not a React element nor a function that returns React element`)}},"./src/utils/storybook/StoryExample.tsx":function(M,g,a){a.d(g,{Q:function(){return d}});var l=a("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),m=a("../../node_modules/react/index.js"),h=a("./src/themes/ThemeContext.tsx");const d=({name:i,children:p})=>{const v=(0,h.$j)(),c=(0,l.AH)({width:"100%",padding:"16px"}),y=(0,l.AH)({color:v.colors.text.secondary,marginBottom:"16px"});return m.createElement("div",{className:c},m.createElement("h5",{className:y},i),p)};d.displayName="StoryExample";try{d.displayName="StoryExample",d.__docgenInfo={description:"",displayName:"StoryExample",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/utils/storybook/StoryExample.tsx#StoryExample"]={docgenInfo:d.__docgenInfo,name:"StoryExample",path:"src/utils/storybook/StoryExample.tsx#StoryExample"})}catch{}}}]);
