"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[3661],{"../../node_modules/@mdx-js/react/lib/index.js":function(N,S,s){s.d(S,{BN:function(){return y},RP:function(){return r},gz:function(){return u},xA:function(){return x}});var t=s("../../node_modules/react/index.js");const y=t.createContext({});function u(d){return h;function h(f){const _=r(f.components);return t.createElement(d,{...f,allComponents:_})}}function r(d){const h=t.useContext(y);return t.useMemo(()=>typeof d=="function"?d(h):{...h,...d},[h,d])}const p={};function x({components:d,children:h,disableParentContext:f}){let _;return f?_=typeof d=="function"?d({}):d||p:_=r(d),t.createElement(y.Provider,{value:_},h)}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(N,S,s){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=s("../../node_modules/react/index.js"),y=Symbol.for("react.element"),u=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,p=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function d(h,f,_){var m,P={},k=null,A=null;_!==void 0&&(k=""+_),f.key!==void 0&&(k=""+f.key),f.ref!==void 0&&(A=f.ref);for(m in f)r.call(f,m)&&!x.hasOwnProperty(m)&&(P[m]=f[m]);if(h&&h.defaultProps)for(m in f=h.defaultProps,f)P[m]===void 0&&(P[m]=f[m]);return{$$typeof:y,type:h,key:k,ref:A,props:P,_owner:p.current}}S.Fragment=u,S.jsx=d,S.jsxs=d},"../../node_modules/react/jsx-runtime.js":function(N,S,s){N.exports=s("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/Splitter/useSplitter.story.tsx":function(N,S,s){s.r(S),s.d(S,{Basic:function(){return z},default:function(){return ie}});var t=s("../../node_modules/react/index.js"),y=s("./src/components/Layout/Box/Box.tsx"),u=s("./src/utils/storybook/DashboardStoryCanvas.tsx"),r=s("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),p=s("../../node_modules/lodash/lodash.js"),x=s("./src/themes/ThemeContext.tsx"),d=s("./src/components/DragHandle/DragHandle.tsx");const h=.3,f=new Set(["ArrowUp","ArrowDown"]),_=new Set(["ArrowLeft","ArrowRight"]),m={row:{dim:"width",axis:"clientX",min:"minWidth",max:"maxWidth"},column:{dim:"height",axis:"clientY",min:"minHeight",max:"maxHeight"}};function P(a){const{direction:o,initialSize:c=.5,dragPosition:H="middle",onResizing:b,onSizeChanged:v}=a,O=16,R=(0,t.useRef)(null),e=(0,t.useRef)(null),j=(0,t.useRef)(null),V=(0,t.useRef)(null),M=(0,t.useRef)(null),C=(0,t.useRef)("1fr"),I=(0,t.useRef)(void 0),G=(0,t.useRef)(void 0),T=m[o].dim,ce=m[o].axis,E=m[o].min,Y=m[o].max;pe(V.current,l=>{for(const X of l){if(!X.target.isSameNode(V.current)||!e.current)return;const B=e.current.getBoundingClientRect()[T],F=A(e.current);R.current.ariaValueNow=k(B,F[E],F[Y])}},500,[Y,E,o,T]);const le=(0,t.useRef)(null),ve=(0,t.useCallback)(l=>{e.current&&(C.current=e.current.getBoundingClientRect()[T],M.current=V.current.getBoundingClientRect()[T],le.current=l[ce],R.current.setPointerCapture(l.pointerId),I.current=A(e.current),G.current=void 0)},[T,ce]),Se=(0,t.useCallback)(l=>{if(le.current!==null&&C.current!=="1fr"){const X=l[ce]-le.current,B=I.current,F=(0,p.clamp)(C.current+X,B[E],B[Y]),K=F/(M.current-O);e.current.style.flexGrow=`${K}`,j.current.style.flexGrow=`${1-K}`,R.current.ariaValueNow=k(F,B[E],B[Y]),b?.(K,F)}},[O,ce,E,Y,b]),Pe=(0,t.useCallback)(l=>{l.preventDefault(),l.stopPropagation(),R.current.releasePointerCapture(l.pointerId),le.current=null,typeof C.current=="number"&&v?.(parseFloat(e.current.style.flexGrow),C.current)},[v]),L=(0,t.useRef)(new Set),fe=(0,t.useRef)(null),ge=(0,t.useCallback)(l=>{var X;if(L.current.size===0){fe.current=null;return}else if(C.current==="1fr")return;const K=(l-((X=fe.current)!=null?X:l))*h;let de=0;o==="row"?(L.current.has("ArrowLeft")&&(de-=K),L.current.has("ArrowRight")&&(de+=K)):(L.current.has("ArrowUp")&&(de-=K),L.current.has("ArrowDown")&&(de+=K));const ue=I.current,Be=e.current.getBoundingClientRect()[T],ye=(0,p.clamp)(Be+de,ue[E],ue[Y]),he=ye/(M.current-O);e.current.style.flexGrow=`${he}`,j.current.style.flexGrow=`${1-he}`,R.current.ariaValueNow=k(ye,ue[E],ue[Y]),b?.(he,ye),fe.current=l,window.requestAnimationFrame(ge)},[o,O,E,Y,T,b]),_e=(0,t.useCallback)(l=>{if(!e.current||!j.current||!R.current||!V.current)return;if(l.key==="Enter"){G.current===void 0?(G.current=e.current.style.flexGrow,e.current.style.flexGrow="0",j.current.style.flexGrow="1"):(e.current.style.flexGrow=G.current,j.current.style.flexGrow=`${1-parseFloat(G.current)}`,G.current=void 0);return}else if(l.key==="Home"){I.current=A(e.current),M.current=V.current.getBoundingClientRect()[T];const B=I.current[E]/(M.current-O);e.current.style.flexGrow=`${B}`,j.current.style.flexGrow=`${1-B}`,R.current.ariaValueNow="0";return}else if(l.key==="End"){I.current=A(e.current),M.current=V.current.getBoundingClientRect()[T];const B=I.current[Y]/(M.current-O);e.current.style.flexGrow=`${B}`,j.current.style.flexGrow=`${1-B}`,R.current.ariaValueNow="100";return}if(!(o==="column"&&f.has(l.key)||o==="row"&&_.has(l.key))||L.current.has(l.key))return;if(G.current=void 0,l.preventDefault(),l.stopPropagation(),C.current=e.current.getBoundingClientRect()[T],M.current=V.current.getBoundingClientRect()[T],I.current=A(e.current),!L.current.has(l.key)){const B=L.current.size===0;L.current.add(l.key),B&&window.requestAnimationFrame(ge)}},[o,ge,O,Y,T,E]),we=(0,t.useCallback)(l=>{o==="row"&&!_.has(l.key)||o==="column"&&!f.has(l.key)||(L.current.delete(l.key),typeof C.current=="number"&&v?.(parseFloat(e.current.style.flexGrow),C.current))},[o,v]),be=(0,t.useCallback)(()=>{if(!e.current||!j.current)return;e.current.style.flexGrow="0.5",j.current.style.flexGrow="0.5";const l=A(e.current);I.current=l,C.current=e.current.getBoundingClientRect()[T],R.current.ariaValueNow=`${k(C.current,l[E],l[Y])}`},[Y,T,E]),Re=(0,t.useCallback)(()=>{L.current.size>0&&(L.current.clear(),le.current=null,typeof C.current=="number"&&v?.(parseFloat(e.current.style.flexGrow),C.current))},[v]),me=(0,x.of)(n,o),xe=(0,x.of)(d.l,H),Ce=o==="column"?xe.dragHandleHorizontal:xe.dragHandleVertical,Te=(0,t.useId)();return{containerProps:{ref:V,className:me.container},primaryProps:{ref:e,className:me.panel,style:{[E]:"min-content",flexGrow:(0,p.clamp)(c??.5,0,1)}},secondaryProps:{ref:j,className:me.panel,style:{flexGrow:(0,p.clamp)(1-c,0,1),[E]:"min-content"}},splitterProps:{onPointerUp:Pe,onPointerDown:ve,onPointerMove:Se,onKeyDown:_e,onKeyUp:we,onDoubleClick:be,onBlur:Re,ref:R,style:{[T]:`${O}px`},role:"separator","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":c*100,"aria-controls":`start-panel-${Te}`,"aria-label":"Pane resize widget",tabIndex:0,className:Ce}}}function k(a,o,c){return`${(0,p.clamp)((a-o)/(c-o)*100,0,100)}`}function A(a){const o=document.body.style.overflow,c=a.style.width,H=a.style.height,b=a.style.flexGrow;document.body.style.overflow="hidden",a.style.flexGrow="0";const{width:v,height:O}=a.getBoundingClientRect();a.style.flexGrow="100";const{width:R,height:e}=a.getBoundingClientRect();return document.body.style.overflow=o,a.style.width=c,a.style.height=H,a.style.flexGrow=b,{minWidth:v,maxWidth:R,minHeight:O,maxHeight:e}}function pe(a,o,c=0,H){const b=(0,p.throttle)(o,c);(0,t.useLayoutEffect)(()=>{if(!a)return;const v=new ResizeObserver(b);return v.observe(a,{box:"device-pixel-content-box"}),()=>v.disconnect()},H)}function n(a,o){return{container:(0,r.AH)({display:"flex",flexDirection:o==="row"?"row":"column",width:"100%",flexGrow:1,overflow:"hidden"}),panel:(0,r.AH)({display:"flex",position:"relative",flexBasis:0})}}var i=s("../../node_modules/react/jsx-runtime.js"),g=s("../../node_modules/@mdx-js/react/lib/index.js");function w(a){const o=Object.assign({h1:"h1",p:"p",h3:"h3",pre:"pre",code:"code"},(0,g.RP)(),a.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h1,{id:"usesplitter",children:"useSplitter"}),`
`,(0,i.jsx)(o.p,{children:"The splitter creates two resizable panes, either horizontally or vertically."}),`
`,(0,i.jsx)(o.h3,{id:"usage",children:"Usage"}),`
`,(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-tsx",children:`import { useSplitter } from '@grafana/ui';

const { containerProps, primaryProps, secondaryProps, splitterProps } = useSplitter({
  direction: 'row',
  initialSize: 0.5,
  dragPosition: 'end',
});

return (
  <div {...containerProps}>
    <div {...primaryProps}>
      <Box display="flex" grow={1} backgroundColor="primary" padding={2}>
        Primary
      </Box>
    </div>
    <div {...splitterProps} />
    <div {...secondaryProps}>
      <Box display="flex" grow={1} backgroundColor="primary" padding={2}>
        Secondary
      </Box>
    </div>
  </div>
);
`})})]})}function Q(a={}){const{wrapper:o}=Object.assign({},(0,g.RP)(),a.components);return o?(0,i.jsx)(o,Object.assign({},a,{children:(0,i.jsx)(w,a)})):w(a)}var ee=Q,ne=Object.defineProperty,re=Object.defineProperties,te=Object.getOwnPropertyDescriptors,W=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,U=(a,o,c)=>o in a?ne(a,o,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[o]=c,D=(a,o)=>{for(var c in o||(o={}))oe.call(o,c)&&U(a,c,o[c]);if(W)for(var c of W(o))ae.call(o,c)&&U(a,c,o[c]);return a},$=(a,o)=>re(a,te(o)),q,J,Z;const se={title:"General/Layout/useSplitter",parameters:{docs:{page:ee},controls:{exclude:[]}},argTypes:{initialSize:{control:{type:"number",min:.1,max:1}},direction:{control:{type:"radio"},options:["row","column"]},dragPosition:{control:{type:"radio"},options:["start","middle","end"]},hasSecondPane:{type:"boolean",options:[!0,!1]}}},z=a=>{const{containerProps:o,primaryProps:c,secondaryProps:H,splitterProps:b}=P(D({},a));return a.hasSecondPane||(c.style.flexGrow=1),t.createElement(u.s,null,t.createElement("div",{style:{display:"flex",width:"700px",height:"500px"}},t.createElement("div",D({},o),t.createElement("div",D({},c),t.createElement(y.a,{display:"flex",grow:1,backgroundColor:"primary",padding:2},"Primary")),a.hasSecondPane&&t.createElement(t.Fragment,null,t.createElement("div",D({},b)),t.createElement("div",D({},H),t.createElement(y.a,{display:"flex",grow:1,backgroundColor:"primary",padding:2},"Secondary"))))))};z.args={direction:"row",dragPosition:"middle",hasSecondPane:!0};var ie=se;z.parameters=$(D({},z.parameters),{docs:$(D({},(q=z.parameters)==null?void 0:q.docs),{source:D({originalSource:`options => {
  const {
    containerProps,
    primaryProps,
    secondaryProps,
    splitterProps
  } = useSplitter({
    ...options
  });
  if (!options.hasSecondPane) {
    primaryProps.style.flexGrow = 1;
  }
  return <DashboardStoryCanvas>
      <div style={{
      display: 'flex',
      width: '700px',
      height: '500px'
    }}>
        <div {...containerProps}>
          <div {...primaryProps}>
            <Box display="flex" grow={1} backgroundColor="primary" padding={2}>
              Primary
            </Box>
          </div>
          {options.hasSecondPane && <>
              <div {...splitterProps} />
              <div {...secondaryProps}>
                <Box display="flex" grow={1} backgroundColor="primary" padding={2}>
                  Secondary
                </Box>
              </div>
            </>}
        </div>
      </div>
    </DashboardStoryCanvas>;
}`},(Z=(J=z.parameters)==null?void 0:J.docs)==null?void 0:Z.source)})})},"./src/components/DragHandle/DragHandle.tsx":function(N,S,s){s.d(S,{l:function(){return y}});var t=s("../../node_modules/@emotion/css/dist/emotion-css.esm.js");const y=(u,r)=>{const p=r||"middle",x=u.colors.emphasize(u.colors.background.secondary,.15),d=u.colors.primary.border,h=u.spacing(2),f=4,_=200;let m="50%",P="50%";switch(p){case"start":{m="0%",P="0%";break}case"end":{m="100%",P="100%";break}}const k=(0,t.AH)({position:"relative","&:before":{content:'""',position:"absolute",transition:u.transitions.create("border-color"),zIndex:1},"&:after":{background:x,content:'""',position:"absolute",transition:u.transitions.create("background"),transform:"translate(-50%, -50%)",borderRadius:u.shape.radius.pill,zIndex:1},"&:hover":{"&:before":{borderColor:d},"&:after":{background:d}}});return{dragHandleVertical:(0,t.cx)(k,(0,t.AH)({cursor:"col-resize",width:h,"&:before":{borderRight:"1px solid transparent",height:"100%",left:m,transform:"translateX(-50%)"},"&:after":{left:m,top:"50%",height:_,width:f}})),dragHandleHorizontal:(0,t.cx)(k,(0,t.AH)({height:h,cursor:"row-resize","&:before":{borderTop:"1px solid transparent",top:P,transform:"translateY(-50%)",width:"100%"},"&:after":{left:"50%",top:P,height:f,width:_}}))}}},"./src/components/Layout/Box/Box.tsx":function(N,S,s){s.d(S,{a:function(){return P}});var t=s("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),y=s("../../node_modules/react/index.js"),u=s("./src/themes/ThemeContext.tsx"),r=s("./src/components/Layout/utils/responsiveness.tsx"),p=Object.defineProperty,x=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(n,i,g)=>i in n?p(n,i,{enumerable:!0,configurable:!0,writable:!0,value:g}):n[i]=g,_=(n,i)=>{for(var g in i||(i={}))d.call(i,g)&&f(n,g,i[g]);if(x)for(var g of x(i))h.call(i,g)&&f(n,g,i[g]);return n},m=(n,i)=>{var g={};for(var w in n)d.call(n,w)&&i.indexOf(w)<0&&(g[w]=n[w]);if(n!=null&&x)for(var w of x(n))i.indexOf(w)<0&&h.call(n,w)&&(g[w]=n[w]);return g};const P=(0,y.forwardRef)((n,i)=>{const g=n,{children:w,margin:Q,marginX:ee,marginY:ne,marginTop:re,marginBottom:te,marginLeft:W,marginRight:oe,padding:ae,paddingX:U,paddingY:D,paddingTop:$,paddingBottom:q,paddingLeft:J,paddingRight:Z,display:se,backgroundColor:z,grow:ie,shrink:a,basis:o,flex:c,borderColor:H,borderStyle:b,borderRadius:v,direction:O,justifyContent:R,alignItems:e,boxShadow:j,element:V,gap:M}=g,C=m(g,["children","margin","marginX","marginY","marginTop","marginBottom","marginLeft","marginRight","padding","paddingX","paddingY","paddingTop","paddingBottom","paddingLeft","paddingRight","display","backgroundColor","grow","shrink","basis","flex","borderColor","borderStyle","borderRadius","direction","justifyContent","alignItems","boxShadow","element","gap"]),I=(0,u.of)(pe,Q,ee,ne,re,te,W,oe,ae,U,D,$,q,J,Z,se,z,ie,a,o,c,H,b,v,O,R,e,j,M),G=V??"div";return y.createElement(G,_({ref:i,className:I.root},C),w)});P.displayName="Box";const k=(n,i)=>{switch(n){case"error":case"success":case"info":case"warning":return i.colors[n].borderTransparent;default:return n?i.colors.border[n]:void 0}},A=(n,i)=>{switch(n){case"error":case"success":case"info":case"warning":return i.colors[n].transparent;default:return n?i.colors.background[n]:void 0}},pe=(n,i,g,w,Q,ee,ne,re,te,W,oe,ae,U,D,$,q,J,Z,se,z,ie,a,o,c,H,b,v,O,R)=>({root:(0,t.AH)([(0,r.Y)(n,i,e=>({margin:n.spacing(e)})),(0,r.Y)(n,g,e=>({marginLeft:n.spacing(e),marginRight:n.spacing(e)})),(0,r.Y)(n,w,e=>({marginTop:n.spacing(e),marginBottom:n.spacing(e)})),(0,r.Y)(n,Q,e=>({marginTop:n.spacing(e)})),(0,r.Y)(n,ee,e=>({marginBottom:n.spacing(e)})),(0,r.Y)(n,ne,e=>({marginLeft:n.spacing(e)})),(0,r.Y)(n,re,e=>({marginRight:n.spacing(e)})),(0,r.Y)(n,te,e=>({padding:n.spacing(e)})),(0,r.Y)(n,W,e=>({paddingLeft:n.spacing(e),paddingRight:n.spacing(e)})),(0,r.Y)(n,oe,e=>({paddingTop:n.spacing(e),paddingBottom:n.spacing(e)})),(0,r.Y)(n,ae,e=>({paddingTop:n.spacing(e)})),(0,r.Y)(n,U,e=>({paddingBottom:n.spacing(e)})),(0,r.Y)(n,D,e=>({paddingLeft:n.spacing(e)})),(0,r.Y)(n,$,e=>({paddingRight:n.spacing(e)})),(0,r.Y)(n,q,e=>({display:e})),(0,r.Y)(n,J,e=>({backgroundColor:A(e,n)})),(0,r.Y)(n,H,e=>({flexDirection:e})),(0,r.Y)(n,Z,e=>({flexGrow:e})),(0,r.Y)(n,se,e=>({flexShrink:e})),(0,r.Y)(n,z,e=>({flexBasis:e})),(0,r.Y)(n,ie,e=>({flex:e})),(0,r.Y)(n,o,e=>({borderStyle:e})),(0,r.Y)(n,a,e=>({borderColor:k(e,n)})),(o||a)&&{borderWidth:"1px"},(0,r.Y)(n,b,e=>({justifyContent:e})),(0,r.Y)(n,v,e=>({alignItems:e})),(0,r.Y)(n,c,e=>({borderRadius:n.shape.radius[e]})),(0,r.Y)(n,O,e=>({boxShadow:n.shadows[e]})),(0,r.Y)(n,R,e=>({gap:n.spacing(e)}))])});try{P.displayName="Box",P.__docgenInfo={description:"",displayName:"Box",props:{margin:{defaultValue:null,description:"Sets the property `margin`",name:"margin",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},marginX:{defaultValue:null,description:"Sets the properties `margin-top` and `margin-bottom`. Higher priority than margin.",name:"marginX",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},marginY:{defaultValue:null,description:"Sets the properties `margin-left` and `margin-right`. Higher priority than margin.",name:"marginY",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},marginTop:{defaultValue:null,description:"Sets the property `margin-top`. Higher priority than margin and marginY.",name:"marginTop",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},marginBottom:{defaultValue:null,description:"Sets the property `margin-bottom`. Higher priority than margin and marginXY",name:"marginBottom",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},marginLeft:{defaultValue:null,description:"Sets the property `margin-left`. Higher priority than margin and marginX.",name:"marginLeft",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},marginRight:{defaultValue:null,description:"Sets the property `margin-right`. Higher priority than margin and marginX.",name:"marginRight",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},padding:{defaultValue:null,description:"Sets the property `padding`",name:"padding",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},paddingX:{defaultValue:null,description:"Sets the properties `padding-top` and `padding-bottom`. Higher priority than padding.",name:"paddingX",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},paddingY:{defaultValue:null,description:"Sets the properties `padding-left` and `padding-right`. Higher priority than padding.",name:"paddingY",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},paddingTop:{defaultValue:null,description:"Sets the property `padding-top`. Higher priority than padding and paddingY.",name:"paddingTop",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},paddingBottom:{defaultValue:null,description:"Sets the property `padding-bottom`. Higher priority than padding and paddingY.",name:"paddingBottom",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},paddingLeft:{defaultValue:null,description:"Sets the property `padding-left`. Higher priority than padding and paddingX.",name:"paddingLeft",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},paddingRight:{defaultValue:null,description:"Sets the property `padding-right`. Higher priority than padding and paddingX.",name:"paddingRight",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},borderStyle:{defaultValue:null,description:"",name:"borderStyle",required:!1,type:{name:"ResponsiveProp<BorderStyle>"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"ResponsiveProp<BorderColor>"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"ResponsiveProp<keyof Radii>"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"ResponsiveProp<AlignItems>"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"ResponsiveProp<Direction>"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"ResponsiveProp<JustifyContent>"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"ResponsiveProp<BackgroundColor>"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"ResponsiveProp<Display>"}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"ResponsiveProp<keyof ThemeShadows>"}},element:{defaultValue:null,description:"Sets the HTML element that will be rendered as a Box. Defaults to 'div'",name:"element",required:!1,type:{name:"ElementType"}},grow:{defaultValue:null,description:"Sets the property `flex-grow`",name:"grow",required:!1,type:{name:"ResponsiveProp<number>"}},shrink:{defaultValue:null,description:"Sets the property `flex-shrink`",name:"shrink",required:!1,type:{name:"ResponsiveProp<number>"}},basis:{defaultValue:null,description:"Sets the property `flex-basis`",name:"basis",required:!1,type:{name:"ResponsiveProp<FlexBasis>"}},flex:{defaultValue:null,description:"Sets the property `flex`",name:"flex",required:!1,type:{name:"ResponsiveProp<Flex>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Box/Box.tsx#Box"]={docgenInfo:P.__docgenInfo,name:"Box",path:"src/components/Layout/Box/Box.tsx#Box"})}catch{}},"./src/components/Layout/utils/responsiveness.tsx":function(N,S,s){s.d(S,{Y:function(){return y}});function t(u,r,p,x){const d=r[x];if(d!=null)return{[u.breakpoints.up(x)]:p(d)}}function y(u,r,p){return r==null?null:typeof r!="object"||!("xs"in r)?p(r):[t(u,r,p,"xs"),t(u,r,p,"sm"),t(u,r,p,"md"),t(u,r,p,"lg"),t(u,r,p,"xl"),t(u,r,p,"xxl")]}try{y.displayName="getResponsiveStyle",y.__docgenInfo={description:"Function that converts a ResponsiveProp object into CSS",displayName:"getResponsiveStyle",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/utils/responsiveness.tsx#getResponsiveStyle"]={docgenInfo:y.__docgenInfo,name:"getResponsiveStyle",path:"src/components/Layout/utils/responsiveness.tsx#getResponsiveStyle"})}catch{}},"./src/utils/storybook/DashboardStoryCanvas.tsx":function(N,S,s){s.d(S,{s:function(){return r}});var t=s("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),y=s("../../node_modules/react/index.js"),u=s("./src/themes/ThemeContext.tsx");const r=({children:p})=>{const x=(0,u.$j)(),d=(0,t.AH)({width:"100%",height:"100%",padding:"32px",background:x.colors.background.canvas,overflow:"auto"});return y.createElement("div",{className:d},p)};r.displayName="DashboardStoryCanvas";try{r.displayName="DashboardStoryCanvas",r.__docgenInfo={description:"",displayName:"DashboardStoryCanvas",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/utils/storybook/DashboardStoryCanvas.tsx#DashboardStoryCanvas"]={docgenInfo:r.__docgenInfo,name:"DashboardStoryCanvas",path:"src/utils/storybook/DashboardStoryCanvas.tsx#DashboardStoryCanvas"})}catch{}}}]);
