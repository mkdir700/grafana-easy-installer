"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[7850],{"../../node_modules/@mdx-js/react/lib/index.js":function(v,u,e){e.d(u,{BN:function(){return l},RP:function(){return i},gz:function(){return m},xA:function(){return t}});var c=e("../../node_modules/react/index.js");const l=c.createContext({});function m(o){return s;function s(a){const d=i(a.components);return c.createElement(o,{...a,allComponents:d})}}function i(o){const s=c.useContext(l);return c.useMemo(()=>typeof o=="function"?o(s):{...s,...o},[s,o])}const f={};function t({components:o,children:s,disableParentContext:a}){let d;return a?d=typeof o=="function"?o({}):o||f:d=i(o),c.createElement(l.Provider,{value:d},s)}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(v,u,e){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=e("../../node_modules/react/index.js"),l=Symbol.for("react.element"),m=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,f=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function o(s,a,d){var _,p={},g=null,y=null;d!==void 0&&(g=""+d),a.key!==void 0&&(g=""+a.key),a.ref!==void 0&&(y=a.ref);for(_ in a)i.call(a,_)&&!t.hasOwnProperty(_)&&(p[_]=a[_]);if(s&&s.defaultProps)for(_ in a=s.defaultProps,a)p[_]===void 0&&(p[_]=a[_]);return{$$typeof:l,type:s,key:g,ref:y,props:p,_owner:f.current}}u.Fragment=m,u.jsx=o,u.jsxs=o},"../../node_modules/react/jsx-runtime.js":function(v,u,e){v.exports=e("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/LoadingBar/LoadingBar.story.tsx":function(v,u,e){e.r(u),e.d(u,{Basic:function(){return O},default:function(){return A}});var c=e("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),l=e("../../node_modules/react/index.js"),m=e("./src/components/LoadingBar/LoadingBar.tsx"),i=e("./src/themes/ThemeContext.tsx"),f=e("./src/utils/storybook/DashboardStoryCanvas.tsx"),t=e("../../node_modules/react/jsx-runtime.js"),o=e("../../node_modules/@mdx-js/react/lib/index.js"),s=e("../../node_modules/@storybook/blocks/dist/index.mjs");function a(r){const n=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code"},(0,o.RP)(),r.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.W8,{title:"MDX|LoadingBar",component:m.G}),`
`,(0,t.jsx)(n.h1,{id:"loadingbar",children:"LoadingBar"}),`
`,(0,t.jsx)(n.p,{children:"The LoadingBar is used as a simple loading slider animation in the top of its container."}),`
`,(0,t.jsx)(s.lN,{children:(0,t.jsx)("div",{style:{height:"200px",width:"400px"},children:(0,t.jsx)(m.G,{containerWidth:400,height:2,width:128})})}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:`<div style={{ height: '200px', width: '400px' }}>
  <LoadingBar containerWidth={400} height={2} width={128} />
</div>
`})}),`
`,(0,t.jsx)(s.ov,{of:m.G})]})}function d(r={}){const{wrapper:n}=Object.assign({},(0,o.RP)(),r.components);return n?(0,t.jsx)(n,Object.assign({},r,{children:(0,t.jsx)(a,r)})):a(r)}var _=d,p=Object.defineProperty,g=Object.defineProperties,y=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,j=(r,n,h)=>n in r?p(r,n,{enumerable:!0,configurable:!0,writable:!0,value:h}):r[n]=h,C=(r,n)=>{for(var h in n||(n={}))E.call(n,h)&&j(r,h,n[h]);if(x)for(var h of x(n))L.call(n,h)&&j(r,h,n[h]);return r},D=(r,n)=>g(r,y(n)),S,b,B;const P={title:"General/LoadingBar",component:m.G,parameters:{controls:{},docs:{page:_}}},M=r=>{const{borderColor:n}=r.components.panel;return{container:(0,c.AH)({label:"placeholder-container",width:"400px",height:"200px",border:`1px solid ${n}`,borderRadius:r.shape.radius.default})}},O=r=>{const n=(0,i.of)(M);return l.createElement(f.s,null,l.createElement("div",{className:n.container},l.createElement(m.G,C({},r))))};O.args={width:400};var A=P;O.parameters=D(C({},O.parameters),{docs:D(C({},(S=O.parameters)==null?void 0:S.docs),{source:C({originalSource:`(args: LoadingBarProps) => {
  const styles = useStyles2(getStyles);
  return <DashboardStoryCanvas>
      <div className={styles.container}>
        <LoadingBar {...args} />
      </div>
    </DashboardStoryCanvas>;
}`},(B=(b=O.parameters)==null?void 0:b.docs)==null?void 0:B.source)})})},"./src/components/LoadingBar/LoadingBar.tsx":function(v,u,e){e.d(u,{G:function(){return d}});var c=e("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),l=e("../../node_modules/react/index.js"),m=e("./src/themes/ThemeContext.tsx");const i=28,f=2.4,t=500,o=4e3,s=300,a=100/i*100;function d({width:p,delay:g=s,ariaLabel:y="Loading bar"}){const x=Math.min(Math.max(Math.round(p*f),t),o),E=(0,m.of)(_,g,x),L={overflow:"hidden"};return l.createElement("div",{style:L},l.createElement("div",{"aria-label":y,className:E.bar}))}const _=(p,g,y)=>{const x=(0,c.i7)({"0%":{transform:"translateX(-100%)"},"85%, 100%":{transform:`translateX(${a}%)`}});return{bar:(0,c.AH)({width:i+"%",height:1,background:"linear-gradient(90deg, rgba(110, 159, 255, 0) 0%, #6E9FFF 80.75%, rgba(110, 159, 255, 0) 100%)",transform:"translateX(-100%)",animationName:x,animationDelay:`${g}ms`,animationDuration:`${y}ms`,animationTimingFunction:"linear",animationIterationCount:"infinite",willChange:"transform"})}};try{d.displayName="LoadingBar",d.__docgenInfo={description:"",displayName:"LoadingBar",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},delay:{defaultValue:{value:"300"},description:"",name:"delay",required:!1,type:{name:"number"}},ariaLabel:{defaultValue:{value:"Loading bar"},description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/LoadingBar/LoadingBar.tsx#LoadingBar"]={docgenInfo:d.__docgenInfo,name:"LoadingBar",path:"src/components/LoadingBar/LoadingBar.tsx#LoadingBar"})}catch{}},"./src/utils/storybook/DashboardStoryCanvas.tsx":function(v,u,e){e.d(u,{s:function(){return i}});var c=e("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),l=e("../../node_modules/react/index.js"),m=e("./src/themes/ThemeContext.tsx");const i=({children:f})=>{const t=(0,m.$j)(),o=(0,c.AH)({width:"100%",height:"100%",padding:"32px",background:t.colors.background.canvas,overflow:"auto"});return l.createElement("div",{className:o},f)};i.displayName="DashboardStoryCanvas";try{i.displayName="DashboardStoryCanvas",i.__docgenInfo={description:"",displayName:"DashboardStoryCanvas",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/utils/storybook/DashboardStoryCanvas.tsx#DashboardStoryCanvas"]={docgenInfo:i.__docgenInfo,name:"DashboardStoryCanvas",path:"src/utils/storybook/DashboardStoryCanvas.tsx#DashboardStoryCanvas"})}catch{}}}]);