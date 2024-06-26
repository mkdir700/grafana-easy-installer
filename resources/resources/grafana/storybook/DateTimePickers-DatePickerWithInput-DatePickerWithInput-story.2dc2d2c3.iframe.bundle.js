"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[2037],{"./src/components/DateTimePickers/DatePickerWithInput/DatePickerWithInput.story.tsx":function(k,y,e){e.r(y),e.d(y,{Basic:function(){return z},default:function(){return ae}});var t=e("../../node_modules/@storybook/addon-actions/dist/index.mjs"),a=e("@storybook/client-api"),v=e("../../node_modules/react/index.js"),c=e("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),f=e("../../node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),g=e("../../node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),_=e("../grafana-data/src/datetime/moment_wrapper.ts"),I=e("./src/themes/ThemeContext.tsx"),d=e("./src/components/Input/Input.tsx"),D=e("./src/components/DateTimePickers/DatePicker/DatePicker.tsx"),x=Object.defineProperty,P=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,b=(i,s,p)=>s in i?x(i,s,{enumerable:!0,configurable:!0,writable:!0,value:p}):i[s]=p,m=(i,s)=>{for(var p in s||(s={}))S.call(s,p)&&b(i,p,s[p]);if(P)for(var p of P(s))O.call(s,p)&&b(i,p,s[p]);return i},l=(i,s)=>{var p={};for(var w in i)S.call(i,w)&&s.indexOf(w)<0&&(p[w]=i[w]);if(i!=null&&P)for(var w of P(i))s.indexOf(w)<0&&O.call(i,w)&&(p[w]=i[w]);return p};const n=i=>(0,_.KQ)(i).format("L"),u=i=>{var s=i,{value:p,minDate:w,maxDate:re,onChange:J,closeOnSelect:ne,placeholder:oe="Date"}=s,le=l(s,["value","minDate","maxDate","onChange","closeOnSelect","placeholder"]);const[Q,Y]=(0,v.useState)(!1),F=(0,I.of)(r),ie=[(0,f.UU)({crossAxis:!1,boundary:document.body}),(0,f.BN)()],{context:q,refs:Z,floatingStyles:se}=(0,g.we)({open:Q,placement:"bottom-start",onOpenChange:Y,middleware:ie,whileElementsMounted:f.ll,strategy:"fixed"}),ue=(0,g.kp)(q),ce=(0,g.s9)(q),{getReferenceProps:de,getFloatingProps:pe}=(0,g.bv)([ce,ue]);return v.createElement("div",{className:F.container},v.createElement(d.p,m(m({ref:Z.setReference,type:"text",autoComplete:"off",placeholder:oe,value:p&&n(p),onChange:X=>{X.target.value===""&&J("")},className:F.input},le),de())),v.createElement("div",m({className:F.popover,ref:Z.setFloating,style:se},pe()),v.createElement(D.l,{isOpen:Q,value:p&&typeof p!="string"?p:(0,_.KQ)().toDate(),minDate:w,maxDate:re,onChange:X=>{J(X),ne&&Y(!1)},onClose:()=>Y(!1)})))},r=i=>({container:(0,c.AH)({position:"relative"}),input:(0,c.AH)({"input[type='date']::-webkit-inner-spin-button, input[type='date']::-webkit-calendar-picker-indicator":{display:"none",WebkitAppearance:"none"}}),popover:(0,c.AH)({zIndex:i.zIndex.tooltip})});try{n.displayName="formatDate",n.__docgenInfo={description:"",displayName:"formatDate",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/DateTimePickers/DatePickerWithInput/DatePickerWithInput.tsx#formatDate"]={docgenInfo:n.__docgenInfo,name:"formatDate",path:"src/components/DateTimePickers/DatePickerWithInput/DatePickerWithInput.tsx#formatDate"})}catch{}try{u.displayName="DatePickerWithInput",u.__docgenInfo={description:"",displayName:"DatePickerWithInput",props:{value:{defaultValue:null,description:"Value selected by the DatePicker",name:"value",required:!1,type:{name:"string | Date"}},minDate:{defaultValue:null,description:"The minimum date the value can be set to",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"The maximum date the value can be set to",name:"maxDate",required:!1,type:{name:"Date"}},onChange:{defaultValue:null,description:"Handles changes when a new date is selected",name:"onChange",required:!0,type:{name:"(value: string | Date) => void"}},closeOnSelect:{defaultValue:null,description:"Hide the calendar when date is selected",name:"closeOnSelect",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"Date"},description:"Text that appears when the input has no text",name:"placeholder",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Sets the width to a multiple of 8px. Should only be used with inline forms. Setting width of the container is preferred in other cases.",name:"width",required:!1,type:{name:"number"}},prefix:{defaultValue:null,description:"Show an icon as a prefix in the input",name:"prefix",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:null,description:"Show an invalid state around the input",name:"invalid",required:!1,type:{name:"boolean"}},suffix:{defaultValue:null,description:"Show an icon as a suffix in the input",name:"suffix",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:null,description:"Show a loading indicator as a suffix in the input",name:"loading",required:!1,type:{name:"boolean"}},addonBefore:{defaultValue:null,description:"Add a component as an addon before the input",name:"addonBefore",required:!1,type:{name:"ReactNode"}},addonAfter:{defaultValue:null,description:"Add a component as an addon after the input",name:"addonAfter",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/DateTimePickers/DatePickerWithInput/DatePickerWithInput.tsx#DatePickerWithInput"]={docgenInfo:u.__docgenInfo,name:"DatePickerWithInput",path:"src/components/DateTimePickers/DatePickerWithInput/DatePickerWithInput.tsx#DatePickerWithInput"})}catch{}var o=e("../../node_modules/react/jsx-runtime.js"),h=e("../../node_modules/@mdx-js/react/lib/index.js"),E=e("../../node_modules/@storybook/blocks/dist/index.mjs");function R(i){const s=Object.assign({h1:"h1",p:"p",h3:"h3",pre:"pre",code:"code"},(0,h.RP)(),i.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"datepickerwithinput",children:"DatePickerWithInput"}),`
`,(0,o.jsx)(s.p,{children:"An input with a calendar view, used to select a date."}),`
`,(0,o.jsx)(s.h3,{id:"usage",children:"Usage"}),`
`,(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-tsx",children:`import React, { useState } from 'react';
import { DatePickerWithInput } from '@grafana/ui';

const [date, setDate] = useState<Date | string>(new Date());
return <DatePickerWithInput width={40} value={date} onChange={(newDate) => setDate(newDate)} />;
`})}),`
`,(0,o.jsx)(s.h3,{id:"props",children:"Props"}),`
`,(0,o.jsx)(E.ov,{of:u})]})}function B(i={}){const{wrapper:s}=Object.assign({},(0,h.RP)(),i.components);return s?(0,o.jsx)(s,Object.assign({},i,{children:(0,o.jsx)(R,i)})):R(i)}var T=B,A=Object.defineProperty,j=Object.defineProperties,W=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,N=(i,s,p)=>s in i?A(i,s,{enumerable:!0,configurable:!0,writable:!0,value:p}):i[s]=p,M=(i,s)=>{for(var p in s||(s={}))V.call(s,p)&&N(i,p,s[p]);if(L)for(var p of L(s))K.call(s,p)&&N(i,p,s[p]);return i},U=(i,s)=>j(i,W(s)),H,C,G;const ee=new Date,$=new Date;$.setMonth($.getMonth()-1);const te={title:"Pickers and Editors/TimePickers/DatePickerWithInput",component:u,parameters:{docs:{page:T},controls:{exclude:["value","onChange","prefix","suffix","width","invalid","loading","addonBefore","addonAfter"]}},args:{value:ee,minDate:$,closeOnSelect:!0,placeholder:"Date"},argTypes:{minDate:{control:"date"}}},z=i=>{const[,s]=(0,a.useArgs)(),p=typeof i.minDate=="number"?new Date(i.minDate):i.minDate;return v.createElement(u,U(M({},i),{width:40,minDate:p,onChange:w=>{(0,t.XI)("on selected")(w),s({value:w})}}))};var ae=te;z.parameters=U(M({},z.parameters),{docs:U(M({},(H=z.parameters)==null?void 0:H.docs),{source:M({originalSource:`args => {
  const [, updateArgs] = useArgs();

  // the minDate arg can change from Date object to number, we need to handle this
  // scenario to avoid a crash in the component's story.
  const minDateVal = typeof args.minDate === 'number' ? new Date(args.minDate) : args.minDate;
  return <DatePickerWithInput {...args} width={40} minDate={minDateVal} onChange={newValue => {
    action('on selected')(newValue);
    updateArgs({
      value: newValue
    });
  }} />;
}`},(G=(C=z.parameters)==null?void 0:C.docs)==null?void 0:G.source)})})},"../grafana-data/src/types/dataFrame.ts":function(k,y,e){e.d(y,{Bc:function(){return a},LE:function(){return v},PU:function(){return t}});var t=(f=>(f.time="time",f.number="number",f.string="string",f.boolean="boolean",f.trace="trace",f.geo="geo",f.enum="enum",f.other="other",f.frame="frame",f.nestedFrames="nestedFrames",f))(t||{});const a="Value",v="Time",c="Metric"},"../grafana-data/src/types/icon.ts":function(k,y,e){e.d(y,{Uo:function(){return v},az:function(){return t},n6:function(){return a}});const t={google:!0,microsoft:!0,github:!0,gitlab:!0,okta:!0,discord:!0,hipchat:!0,amazon:!0,"google-hangouts-alt":!0,pagerduty:!0,line:!0,anchor:!0,"adjust-circle":!0,"angle-double-down":!0,"angle-double-right":!0,"angle-double-up":!0,"angle-down":!0,"angle-left":!0,"angle-right":!0,"angle-up":!0,"align-left":!0,"align-right":!0,"application-observability":!0,apps:!0,"archive-alt":!0,arrow:!0,"arrow-down":!0,"arrow-from-right":!0,"arrow-left":!0,"arrow-random":!0,"arrow-right":!0,"arrow-to-right":!0,"arrow-up":!0,"arrows-h":!0,"arrows-v":!0,asserts:!0,"expand-arrows":!0,at:!0,ai:!0,backward:!0,bars:!0,bell:!0,"bell-slash":!0,bolt:!0,book:!0,bookmark:!0,"book-open":!0,"brackets-curly":!0,bug:!0,building:!0,"calculator-alt":!0,"calendar-alt":!0,"calendar-slash":!0,camera:!0,capture:!0,"channel-add":!0,"chart-line":!0,check:!0,"check-circle":!0,"check-square":!0,circle:!0,"circle-mono":!0,"clipboard-alt":!0,"clock-nine":!0,cloud:!0,"cloud-download":!0,"cloud-upload":!0,"code-branch":!0,cog:!0,columns:!0,"comment-alt":!0,"comment-alt-message":!0,"comment-alt-share":!0,"comments-alt":!0,compass:!0,copy:!0,"corner-down-right-alt":!0,"create-dashboard":!0,"credit-card":!0,crosshair:!0,cube:!0,dashboard:!0,database:!0,"dice-three":!0,docker:!0,"document-info":!0,"document-layout-left":!0,"download-alt":!0,draggabledots:!0,edit:!0,"ellipsis-v":!0,enter:!0,envelope:!0,"exchange-alt":!0,"exclamation-triangle":!0,"exclamation-circle":!0,"external-link-alt":!0,eye:!0,"eye-slash":!0,"ellipsis-h":!0,"fa fa-spinner":!0,favorite:!0,"file-alt":!0,"file-blank":!0,"file-copy-alt":!0,"file-download":!0,"file-edit-alt":!0,"file-landscape-alt":!0,filter:!0,flip:!0,folder:!0,font:!0,fire:!0,"folder-open":!0,"folder-plus":!0,"folder-upload":!0,forward:!0,"frontend-observability":!0,"gf-bar-alignment-after":!0,"gf-bar-alignment-before":!0,"gf-bar-alignment-center":!0,"gf-glue":!0,"gf-grid":!0,"gf-interpolation-linear":!0,"gf-interpolation-smooth":!0,"gf-interpolation-step-after":!0,"gf-interpolation-step-before":!0,"gf-landscape":!0,"gf-layout-simple":!0,"gf-logs":!0,"gf-ml":!0,"gf-movepane-left":!0,"gf-movepane-right":!0,"gf-portrait":!0,"gf-service-account":!0,"gf-show-context":!0,"gf-pin":!0,"gf-prometheus":!0,"gf-traces":!0,globe:!0,grafana:!0,"graph-bar":!0,heart:!0,"heart-rate":!0,"heart-break":!0,history:!0,"history-alt":!0,home:!0,"home-alt":!0,"horizontal-align-center":!0,"horizontal-align-left":!0,"horizontal-align-right":!0,hourglass:!0,import:!0,info:!0,"info-circle":!0,k6:!0,"key-skeleton-alt":!0,keyboard:!0,"layer-group":!0,"layers-alt":!0,"library-panel":!0,"line-alt":!0,link:!0,"list-ui-alt":!0,"list-ul":!0,"list-ol":!0,lock:!0,"map-marker":!0,"map-marker-plus":!0,"map-marker-minus":!0,message:!0,minus:!0,"minus-circle":!0,"mobile-android":!0,monitor:!0,palette:!0,"panel-add":!0,paragraph:!0,"pathfinder-unite":!0,pause:!0,pen:!0,percentage:!0,play:!0,plug:!0,plus:!0,"plus-circle":!0,"plus-square":!0,power:!0,"presentation-play":!0,process:!0,"question-circle":!0,"record-audio":!0,repeat:!0,rocket:!0,"ruler-combined":!0,save:!0,search:!0,"search-minus":!0,"search-plus":!0,"share-alt":!0,shield:!0,"shield-exclamation":!0,signal:!0,signin:!0,signout:!0,sitemap:!0,slack:!0,"sliders-v-alt":!0,spinner:!0,"sort-amount-down":!0,"sort-amount-up":!0,"square-shape":!0,star:!0,"step-backward":!0,stopwatch:!0,"stopwatch-slash":!0,sync:!0,"sync-slash":!0,table:!0,"table-collapse-all":!0,"table-expand-all":!0,"tag-alt":!0,"telegram-alt":!0,"text-fields":!0,"thumbs-up":!0,times:!0,"times-circle":!0,"toggle-on":!0,"toggle-off":!0,"trash-alt":!0,unarchive:!0,unlock:!0,upload:!0,user:!0,"users-alt":!0,"user-arrows":!0,"vertical-align-bottom":!0,"vertical-align-center":!0,"vertical-align-top":!0,"web-section-alt":!0,"wrap-text":!0,rss:!0,x:!0};function a(c){return!c||typeof c!="string"?!1:c in t}function v(c){if(a(c))return c}},"./src/components/ClickOutsideWrapper/ClickOutsideWrapper.tsx":function(k,y,e){e.d(y,{N:function(){return a}});var t=e("../../node_modules/react/index.js");class a extends t.PureComponent{constructor(){super(...arguments),this.myRef=(0,t.createRef)(),this.state={hasEventListener:!1},this.onOutsideClick=c=>{const f=this.myRef.current;(!f||c.target instanceof Node&&!f.contains(c.target))&&this.props.onClick()}}componentDidMount(){this.props.parent.addEventListener("click",this.onOutsideClick,this.props.useCapture),this.props.includeButtonPress&&this.props.parent.addEventListener("keyup",this.onOutsideClick,this.props.useCapture)}componentWillUnmount(){this.props.parent.removeEventListener("click",this.onOutsideClick,this.props.useCapture),this.props.includeButtonPress&&this.props.parent.removeEventListener("keyup",this.onOutsideClick,this.props.useCapture)}render(){return t.createElement("div",{ref:this.myRef},this.props.children)}}a.defaultProps={includeButtonPress:!0,parent:typeof window<"u"?window:void 0,useCapture:!1};try{a.displayName="ClickOutsideWrapper",a.__docgenInfo={description:"",displayName:"ClickOutsideWrapper",props:{onClick:{defaultValue:null,description:"Callback to trigger when clicking outside of current element occurs.",name:"onClick",required:!0,type:{name:"() => void"}},includeButtonPress:{defaultValue:{value:"true"},description:"Runs the 'onClick' function when pressing a key outside of the current element. Defaults to true.",name:"includeButtonPress",required:!1,type:{name:"boolean"}},parent:{defaultValue:{value:"typeof window !== 'undefined' ? window : undefined"},description:"Object to attach the click event listener to.",name:"parent",required:!1,type:{name:"Document | Window"}},useCapture:{defaultValue:{value:"false"},description:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener. Defaults to false.",name:"useCapture",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/ClickOutsideWrapper/ClickOutsideWrapper.tsx#ClickOutsideWrapper"]={docgenInfo:a.__docgenInfo,name:"ClickOutsideWrapper",path:"src/components/ClickOutsideWrapper/ClickOutsideWrapper.tsx#ClickOutsideWrapper"})}catch{}},"./src/components/DateTimePickers/DatePicker/DatePicker.tsx":function(k,y,e){e.d(y,{l:function(){return O}});var t=e("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),a=e("../../node_modules/react/index.js"),v=e("../../node_modules/react-calendar/dist/esm/index.js"),c=e("./src/themes/ThemeContext.tsx"),f=e("./src/components/ClickOutsideWrapper/ClickOutsideWrapper.tsx"),g=e("./src/components/Icon/Icon.tsx"),_=e("./src/components/DateTimePickers/TimeRangePicker/CalendarBody.tsx"),I=Object.defineProperty,d=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,P=(l,n,u)=>n in l?I(l,n,{enumerable:!0,configurable:!0,writable:!0,value:u}):l[n]=u,S=(l,n)=>{for(var u in n||(n={}))D.call(n,u)&&P(l,u,n[u]);if(d)for(var u of d(n))x.call(n,u)&&P(l,u,n[u]);return l};const O=(0,a.memo)(l=>{const n=(0,c.of)(m),{isOpen:u,onClose:r}=l;return u?a.createElement(f.N,{useCapture:!0,includeButtonPress:!1,onClick:r},a.createElement("div",{className:n.modal,"data-testid":"date-picker"},a.createElement(b,S({},l)))):null});O.displayName="DatePicker";const b=(0,a.memo)(({value:l,minDate:n,maxDate:u,onChange:r})=>{const o=(0,c.of)(_.h2);return a.createElement(v.Ay,{className:o.body,tileClassName:o.title,value:l||new Date,minDate:n,maxDate:u,nextLabel:a.createElement(g.I,{name:"angle-right"}),prevLabel:a.createElement(g.I,{name:"angle-left"}),onChange:h=>{h&&!Array.isArray(h)&&r(h)},locale:"en"})});b.displayName="Body";const m=l=>({modal:(0,t.AH)({zIndex:l.zIndex.modal,boxShadow:l.shadows.z3,backgroundColor:l.colors.background.primary,border:`1px solid ${l.colors.border.weak}`,borderTopLeftRadius:l.shape.radius.default,borderBottomLeftRadius:l.shape.radius.default,"button:disabled":{color:l.colors.text.disabled}})});try{O.displayName="DatePicker",O.__docgenInfo={description:"",displayName:"DatePicker",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: Date) => void"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"Date"}},minDate:{defaultValue:null,description:"",name:"minDate",required:!1,type:{name:"Date"}},maxDate:{defaultValue:null,description:"",name:"maxDate",required:!1,type:{name:"Date"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/DateTimePickers/DatePicker/DatePicker.tsx#DatePicker"]={docgenInfo:O.__docgenInfo,name:"DatePicker",path:"src/components/DateTimePickers/DatePicker/DatePicker.tsx#DatePicker"})}catch{}},"./src/components/Forms/commonStyles.ts":function(k,y,e){e.d(y,{SM:function(){return I},Xb:function(){return c},g$:function(){return f},gm:function(){return v},lH:function(){return g}});var t=e("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),a=e("./src/themes/mixins.ts");const v=d=>(0,t.AH)({"&:focus":(0,a.Hi)(d)}),c=(d,D=!1)=>{const x=D?d.colors.error.border:d.components.input.borderColor,P=D?d.colors.error.shade:d.components.input.borderHover,S=d.components.input.background,O=d.components.input.text,b=d.isDark?"#2e2f35":"#bab4ca";return(0,t.cx)(f(d),(0,t.AH)({background:S,lineHeight:d.typography.body.lineHeight,fontSize:d.typography.size.md,color:O,border:`1px solid ${x}`,"&:-webkit-autofill, &:-webkit-autofill:hover":{boxShadow:`inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px ${S}!important`,WebkitTextFillColor:`${O} !important`,borderColor:b},"&:-webkit-autofill:focus":{boxShadow:`0 0 0 2px ${d.colors.background.primary}, 0 0 0px 4px ${d.colors.primary.main}, inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px ${S}!important`,WebkitTextFillColor:`${O} !important`},"&:hover":{borderColor:P},"&:focus":{outline:"none"},"&:disabled":{backgroundColor:d.colors.action.disabledBackground,color:d.colors.action.disabledText,border:`1px solid ${d.colors.action.disabledBackground}`,"&:hover":{borderColor:x}},"&::placeholder":{color:d.colors.text.disabled,opacity:1}}))},f=d=>(0,t.AH)({padding:d.spacing(0,1,0,1)}),g=()=>({sm:(0,t.AH)({width:_("sm")}),md:(0,t.AH)({width:_("md")}),lg:(0,t.AH)({width:_("lg")}),auto:(0,t.AH)({width:_("auto")})}),_=d=>{switch(d){case"sm":return"200px";case"md":return"320px";case"lg":return"580px";case"auto":default:return"auto"}};function I(d,D){switch(d){case"sm":return{padding:1,fontSize:D.typography.size.sm,height:D.components.height.sm};case"lg":return{padding:3,fontSize:D.typography.size.lg,height:D.components.height.lg};case"md":default:return{padding:2,fontSize:D.typography.size.md,height:D.components.height.md}}}},"./src/components/Icon/Icon.tsx":function(k,y,e){e.d(y,{I:function(){return b}});var t=e("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),a=e("../../node_modules/react/index.js"),v=e("../../node_modules/react-inlinesvg/esm/index.js"),c=e("../grafana-data/src/types/icon.ts"),f=e("./src/themes/ThemeContext.tsx"),g=e("./src/components/Icon/utils.ts"),_=Object.defineProperty,I=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,x=(m,l,n)=>l in m?_(m,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):m[l]=n,P=(m,l)=>{for(var n in l||(l={}))d.call(l,n)&&x(m,n,l[n]);if(I)for(var n of I(l))D.call(l,n)&&x(m,n,l[n]);return m},S=(m,l)=>{var n={};for(var u in m)d.call(m,u)&&l.indexOf(u)<0&&(n[u]=m[u]);if(m!=null&&I)for(var u of I(m))l.indexOf(u)<0&&D.call(m,u)&&(n[u]=m[u]);return n};const O=m=>({icon:(0,t.AH)({display:"inline-block",fill:"currentColor",flexShrink:0,label:"Icon",lineHeight:0,verticalAlign:"middle"}),orange:(0,t.AH)({fill:m.v1.palette.orange})}),b=a.forwardRef((m,l)=>{var n=m,{size:u="md",type:r="default",name:o,className:h,style:E,title:R=""}=n,B=S(n,["size","type","name","className","style","title"]);const T=(0,f.of)(O);(0,c.n6)(o)||console.warn("Icon component passed an invalid icon name",o);const A=o==="fa fa-spinner"?"spinner":o,j=(0,g.Wj)(),W=(0,g.cs)(u),L=W,V=o.startsWith("gf-bar-align")?16:o.startsWith("gf-interp")?30:W,K=(0,g.Xi)(A,r),N=`${j}${K}/${A}.svg`,M=(0,t.cx)(T.icon,h,r==="mono"?{[T.orange]:o==="favorite"}:"",A==="spinner"&&"fa-spin");return a.createElement(v.A,P({innerRef:l,src:N,width:V,height:L,title:R,className:M,style:E},B))});b.displayName="Icon";try{b.displayName="Icon",b.__docgenInfo={description:"",displayName:"Icon",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"play"'},{value:'"google"'},{value:'"microsoft"'},{value:'"github"'},{value:'"gitlab"'},{value:'"okta"'},{value:'"discord"'},{value:'"hipchat"'},{value:'"amazon"'},{value:'"google-hangouts-alt"'},{value:'"pagerduty"'},{value:'"line"'},{value:'"anchor"'},{value:'"adjust-circle"'},{value:'"angle-double-down"'},{value:'"angle-double-right"'},{value:'"angle-double-up"'},{value:'"angle-down"'},{value:'"angle-left"'},{value:'"angle-right"'},{value:'"angle-up"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"application-observability"'},{value:'"apps"'},{value:'"archive-alt"'},{value:'"arrow"'},{value:'"arrow-down"'},{value:'"arrow-from-right"'},{value:'"arrow-left"'},{value:'"arrow-random"'},{value:'"arrow-right"'},{value:'"arrow-to-right"'},{value:'"arrow-up"'},{value:'"arrows-h"'},{value:'"arrows-v"'},{value:'"asserts"'},{value:'"expand-arrows"'},{value:'"at"'},{value:'"ai"'},{value:'"backward"'},{value:'"bars"'},{value:'"bell"'},{value:'"bell-slash"'},{value:'"bolt"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"brackets-curly"'},{value:'"bug"'},{value:'"building"'},{value:'"calculator-alt"'},{value:'"calendar-alt"'},{value:'"calendar-slash"'},{value:'"camera"'},{value:'"capture"'},{value:'"channel-add"'},{value:'"chart-line"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"circle"'},{value:'"circle-mono"'},{value:'"clipboard-alt"'},{value:'"clock-nine"'},{value:'"cloud"'},{value:'"cloud-download"'},{value:'"cloud-upload"'},{value:'"code-branch"'},{value:'"cog"'},{value:'"columns"'},{value:'"comment-alt"'},{value:'"comment-alt-message"'},{value:'"comment-alt-share"'},{value:'"comments-alt"'},{value:'"compass"'},{value:'"copy"'},{value:'"corner-down-right-alt"'},{value:'"create-dashboard"'},{value:'"credit-card"'},{value:'"crosshair"'},{value:'"cube"'},{value:'"dashboard"'},{value:'"database"'},{value:'"dice-three"'},{value:'"docker"'},{value:'"document-info"'},{value:'"document-layout-left"'},{value:'"download-alt"'},{value:'"draggabledots"'},{value:'"edit"'},{value:'"ellipsis-v"'},{value:'"enter"'},{value:'"envelope"'},{value:'"exchange-alt"'},{value:'"exclamation-triangle"'},{value:'"exclamation-circle"'},{value:'"external-link-alt"'},{value:'"eye"'},{value:'"eye-slash"'},{value:'"ellipsis-h"'},{value:'"fa fa-spinner"'},{value:'"favorite"'},{value:'"file-alt"'},{value:'"file-blank"'},{value:'"file-copy-alt"'},{value:'"file-download"'},{value:'"file-edit-alt"'},{value:'"file-landscape-alt"'},{value:'"filter"'},{value:'"flip"'},{value:'"folder"'},{value:'"font"'},{value:'"fire"'},{value:'"folder-open"'},{value:'"folder-plus"'},{value:'"folder-upload"'},{value:'"forward"'},{value:'"frontend-observability"'},{value:'"gf-bar-alignment-after"'},{value:'"gf-bar-alignment-before"'},{value:'"gf-bar-alignment-center"'},{value:'"gf-glue"'},{value:'"gf-grid"'},{value:'"gf-interpolation-linear"'},{value:'"gf-interpolation-smooth"'},{value:'"gf-interpolation-step-after"'},{value:'"gf-interpolation-step-before"'},{value:'"gf-landscape"'},{value:'"gf-layout-simple"'},{value:'"gf-logs"'},{value:'"gf-ml"'},{value:'"gf-movepane-left"'},{value:'"gf-movepane-right"'},{value:'"gf-portrait"'},{value:'"gf-service-account"'},{value:'"gf-show-context"'},{value:'"gf-pin"'},{value:'"gf-prometheus"'},{value:'"gf-traces"'},{value:'"globe"'},{value:'"grafana"'},{value:'"graph-bar"'},{value:'"heart"'},{value:'"heart-rate"'},{value:'"heart-break"'},{value:'"history"'},{value:'"history-alt"'},{value:'"home"'},{value:'"home-alt"'},{value:'"horizontal-align-center"'},{value:'"horizontal-align-left"'},{value:'"horizontal-align-right"'},{value:'"hourglass"'},{value:'"import"'},{value:'"info"'},{value:'"info-circle"'},{value:'"k6"'},{value:'"key-skeleton-alt"'},{value:'"keyboard"'},{value:'"layer-group"'},{value:'"layers-alt"'},{value:'"library-panel"'},{value:'"line-alt"'},{value:'"link"'},{value:'"list-ui-alt"'},{value:'"list-ul"'},{value:'"list-ol"'},{value:'"lock"'},{value:'"map-marker"'},{value:'"map-marker-plus"'},{value:'"map-marker-minus"'},{value:'"message"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"mobile-android"'},{value:'"monitor"'},{value:'"palette"'},{value:'"panel-add"'},{value:'"paragraph"'},{value:'"pathfinder-unite"'},{value:'"pause"'},{value:'"pen"'},{value:'"percentage"'},{value:'"plug"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-square"'},{value:'"power"'},{value:'"presentation-play"'},{value:'"process"'},{value:'"question-circle"'},{value:'"record-audio"'},{value:'"repeat"'},{value:'"rocket"'},{value:'"ruler-combined"'},{value:'"save"'},{value:'"search"'},{value:'"search-minus"'},{value:'"search-plus"'},{value:'"share-alt"'},{value:'"shield"'},{value:'"shield-exclamation"'},{value:'"signal"'},{value:'"signin"'},{value:'"signout"'},{value:'"sitemap"'},{value:'"slack"'},{value:'"sliders-v-alt"'},{value:'"spinner"'},{value:'"sort-amount-down"'},{value:'"sort-amount-up"'},{value:'"square-shape"'},{value:'"star"'},{value:'"step-backward"'},{value:'"stopwatch"'},{value:'"stopwatch-slash"'},{value:'"sync"'},{value:'"sync-slash"'},{value:'"table"'},{value:'"table-collapse-all"'},{value:'"table-expand-all"'},{value:'"tag-alt"'},{value:'"telegram-alt"'},{value:'"text-fields"'},{value:'"thumbs-up"'},{value:'"times"'},{value:'"times-circle"'},{value:'"toggle-on"'},{value:'"toggle-off"'},{value:'"trash-alt"'},{value:'"unarchive"'},{value:'"unlock"'},{value:'"upload"'},{value:'"user"'},{value:'"users-alt"'},{value:'"user-arrows"'},{value:'"vertical-align-bottom"'},{value:'"vertical-align-center"'},{value:'"vertical-align-top"'},{value:'"web-section-alt"'},{value:'"wrap-text"'},{value:'"rss"'},{value:'"x"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"default"'},{value:'"mono"'}]}},title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:b.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch{}},"./src/components/Icon/utils.ts":function(k,y,e){e.d(y,{Wj:function(){return f},Xi:function(){return a},cs:function(){return v}});const t=["grafana","favorite","heart-break","heart","panel-add","library-panel","circle-mono"];function a(g,_){return g?.startsWith("gf-")?"custom":t.includes(g)?"mono":_==="default"?"unicons":_==="solid"?"solid":"mono"}function v(g){switch(g){case"xs":return 12;case"sm":return 14;case"md":return 16;case"lg":return 18;case"xl":return 24;case"xxl":return 36;case"xxxl":return 48}}let c;function f(){if(c)return c;const g=typeof window<"u"&&window.__grafana_public_path__;return g?c=g+"img/icons/":c="public/img/icons/",c}},"./src/components/Input/Input.tsx":function(k,y,e){e.d(y,{n:function(){return u},p:function(){return n}});var t=e("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),a=e("../../node_modules/react/index.js"),v=e("../../node_modules/react-use/lib/useMeasure.js"),c=e("./src/themes/ThemeContext.tsx"),f=e("./src/themes/stylesFactory.ts"),g=e("./src/components/Forms/commonStyles.ts"),_=e("./src/components/Spinner/Spinner.tsx"),I=Object.defineProperty,d=Object.defineProperties,D=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,O=(r,o,h)=>o in r?I(r,o,{enumerable:!0,configurable:!0,writable:!0,value:h}):r[o]=h,b=(r,o)=>{for(var h in o||(o={}))P.call(o,h)&&O(r,h,o[h]);if(x)for(var h of x(o))S.call(o,h)&&O(r,h,o[h]);return r},m=(r,o)=>d(r,D(o)),l=(r,o)=>{var h={};for(var E in r)P.call(r,E)&&o.indexOf(E)<0&&(h[E]=r[E]);if(r!=null&&x)for(var E of x(r))o.indexOf(E)<0&&S.call(r,E)&&(h[E]=r[E]);return h};const n=a.forwardRef((r,o)=>{const h=r,{className:E,addonAfter:R,addonBefore:B,prefix:T,suffix:A,invalid:j,loading:W,width:L=0}=h,V=l(h,["className","addonAfter","addonBefore","prefix","suffix","invalid","loading","width"]),[K,N]=(0,v.A)(),[M,U]=(0,v.A)(),H=(0,c.$j)(),C=u({theme:H,invalid:!!j,width:L});return a.createElement("div",{className:(0,t.cx)(C.wrapper,E),"data-testid":"input-wrapper"},!!B&&a.createElement("div",{className:C.addon},B),a.createElement("div",{className:C.inputWrapper},T&&a.createElement("div",{className:C.prefix,ref:K},T),a.createElement("input",m(b({ref:o,className:C.input},V),{style:{paddingLeft:T?N.width+12:void 0,paddingRight:A||W?U.width+12:void 0}})),(A||W)&&a.createElement("div",{className:C.suffix,ref:M},W&&a.createElement(_.y,{className:C.loadingIndicator,inline:!0}),A)),!!R&&a.createElement("div",{className:C.addon},R))});n.displayName="Input";const u=(0,f.N)(({theme:r,invalid:o=!1,width:h})=>{const E="28px",R=(0,t.AH)({position:"absolute",top:0,zIndex:1,display:"flex",alignItems:"center",justifyContent:"center",flexGrow:0,flexShrink:0,fontSize:r.typography.size.md,height:"100%",minWidth:E,color:r.colors.text.secondary});return{wrapper:(0,t.cx)((0,t.AH)({label:"input-wrapper",display:"flex",width:h?r.spacing(h):"100%",height:r.spacing(r.components.height.md),borderRadius:r.shape.radius.default,"&:hover":{"> .prefix, .suffix, .input":{borderColor:o?r.colors.error.border:r.colors.primary.border},"input[type='number']":{appearance:"textfield"},"input[type='number']::-webkit-inner-spin-button, input[type='number']::-webkit-outer-spin-button":{WebkitAppearance:"inner-spin-button !important",opacity:1}}})),inputWrapper:(0,t.AH)({label:"input-inputWrapper",position:"relative",flexGrow:1,zIndex:1,"&:not(:first-child):last-child":{"> input":{borderLeft:"none",borderTopLeftRadius:0,borderBottomLeftRadius:0}},"&:first-child:not(:last-child)":{"> input":{borderRight:"none",borderTopRightRadius:0,borderBottomRightRadius:0}},"&:not(:first-child):not(:last-child)":{"> input":{borderRight:"none",borderTopRightRadius:0,borderBottomRightRadius:0,borderTopLeftRadius:0,borderBottomLeftRadius:0}},input:{"&:not(:first-child)":{paddingLeft:E},"&:not(:last-child)":{paddingRight:E},"&[readonly]":{cursor:"default"}}}),input:(0,t.cx)((0,g.gm)(r),(0,g.Xb)(r,o),(0,t.AH)({label:"input-input",position:"relative",zIndex:0,flexGrow:1,borderRadius:r.shape.radius.default,height:"100%",width:"100%"})),inputDisabled:(0,t.AH)({backgroundColor:r.colors.action.disabledBackground,color:r.colors.action.disabledText,border:`1px solid ${r.colors.action.disabledBackground}`,"&:focus":{boxShadow:"none"}}),addon:(0,t.AH)({label:"input-addon",display:"flex",justifyContent:"center",alignItems:"center",flexGrow:0,flexShrink:0,position:"relative","&:first-child":{borderTopRightRadius:0,borderBottomRightRadius:0,"> :last-child":{borderTopRightRadius:0,borderBottomRightRadius:0}},"&:last-child":{borderTopLeftRadius:0,borderBottomLeftRadius:0,"> :first-child":{borderTopLeftRadius:0,borderBottomLeftRadius:0}},"> *:focus":{zIndex:2}}),prefix:(0,t.cx)(R,(0,t.AH)({label:"input-prefix",paddingLeft:r.spacing(1),paddingRight:r.spacing(.5),borderRight:"none",borderTopRightRadius:0,borderBottomRightRadius:0})),suffix:(0,t.cx)(R,(0,t.AH)({label:"input-suffix",paddingLeft:r.spacing(1),paddingRight:r.spacing(1),marginBottom:"-2px",borderLeft:"none",borderTopLeftRadius:0,borderBottomLeftRadius:0,right:0})),loadingIndicator:(0,t.AH)({"& + *":{marginLeft:r.spacing(.5)}})}});try{n.displayName="Input",n.__docgenInfo={description:"",displayName:"Input",props:{width:{defaultValue:null,description:"Sets the width to a multiple of 8px. Should only be used with inline forms. Setting width of the container is preferred in other cases.",name:"width",required:!1,type:{name:"number"}},prefix:{defaultValue:null,description:"Show an icon as a prefix in the input",name:"prefix",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:null,description:"Show an invalid state around the input",name:"invalid",required:!1,type:{name:"boolean"}},suffix:{defaultValue:null,description:"Show an icon as a suffix in the input",name:"suffix",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:null,description:"Show a loading indicator as a suffix in the input",name:"loading",required:!1,type:{name:"boolean"}},addonBefore:{defaultValue:null,description:"Add a component as an addon before the input",name:"addonBefore",required:!1,type:{name:"ReactNode"}},addonAfter:{defaultValue:null,description:"Add a component as an addon after the input",name:"addonAfter",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:n.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch{}},"./src/components/Spinner/Spinner.tsx":function(k,y,e){e.d(y,{y:function(){return I}});var t=e("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),a=e("../../node_modules/react/index.js"),v=e("../../node_modules/react-inlinesvg/esm/index.js"),c=e("./src/themes/ThemeContext.tsx"),f=e("./src/types/icon.ts"),g=e("./src/components/Icon/Icon.tsx"),_=e("./src/components/Icon/utils.ts");const I=({className:x,inline:P=!1,iconClassName:S,style:O,size:b="md"})=>{const m=(0,c.of)(d),l=(0,c.of)(D,b);if(typeof b!="string"||!(0,f.rJ)(b)){const n=(0,_.Wj)(),u="spinner",r=(0,_.Xi)(u,"default"),o=`${n}${r}/${u}.svg`;return a.createElement("div",{"data-testid":"Spinner",style:O,className:(0,t.cx)({[m.inline]:P},l.wrapper,x)},a.createElement(v.A,{src:o,width:b,height:b,className:(0,t.cx)("fa-spin",l.icon,x),style:O}))}return a.createElement("div",{"data-testid":"Spinner",style:O,className:(0,t.cx)({[m.inline]:P},x)},a.createElement(g.I,{className:(0,t.cx)("fa-spin",S),name:"spinner",size:b,"aria-label":"loading spinner"}))},d=x=>({inline:(0,t.AH)({display:"inline-block"})}),D=(x,P)=>({wrapper:(0,t.AH)({fontSize:typeof P=="string"?P:`${P}px`}),icon:(0,t.AH)({display:"inline-block",fill:"currentColor",flexShrink:0,label:"Icon",lineHeight:0,verticalAlign:"middle"})});try{I.displayName="Spinner",I.__docgenInfo={description:"",displayName:"Spinner",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},iconClassName:{defaultValue:null,description:"",name:"iconClassName",required:!1,type:{name:"string"}},inline:{defaultValue:{value:"false"},description:"",name:"inline",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"string | number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Spinner/Spinner.tsx#Spinner"]={docgenInfo:I.__docgenInfo,name:"Spinner",path:"src/components/Spinner/Spinner.tsx#Spinner"})}catch{}},"./src/themes/stylesFactory.ts":function(k,y,e){e.d(y,{N:function(){return v}});var t=e("../../node_modules/micro-memoize/dist/micro-memoize.js"),a=e.n(t);function v(c){return a()(c)}},"./src/types/icon.ts":function(k,y,e){e.d(y,{GO:function(){return c},SS:function(){return f},rJ:function(){return v}});var t=e("../grafana-data/src/types/icon.ts"),a=e("../grafana-data/src/types/dataFrame.ts");const v=_=>["xs","sm","md","lg","xl","xxl","xxxl"].includes(_),c=()=>Object.keys(t.az);function f(_){return g(_?.type)}function g(_){if(_)switch(_){case a.PU.time:return"clock-nine";case a.PU.string:return"font";case a.PU.number:return"calculator-alt";case a.PU.boolean:return"toggle-on";case a.PU.trace:return"info-circle";case a.PU.enum:return"list-ol";case a.PU.geo:return"map-marker";case a.PU.other:return"brackets-curly"}return"question-circle"}}}]);