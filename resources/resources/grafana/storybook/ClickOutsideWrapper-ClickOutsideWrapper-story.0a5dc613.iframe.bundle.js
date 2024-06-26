"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[5866],{"../../node_modules/@mdx-js/react/lib/index.js":function(h,a,n){n.d(a,{BN:function(){return u},RP:function(){return e},gz:function(){return l},xA:function(){return p}});var c=n("../../node_modules/react/index.js");const u=c.createContext({});function l(o){return s;function s(i){const m=e(i.components);return c.createElement(o,{...i,allComponents:m})}}function e(o){const s=c.useContext(u);return c.useMemo(()=>typeof o=="function"?o(s):{...s,...o},[s,o])}const r={};function p({components:o,children:s,disableParentContext:i}){let m;return i?m=typeof o=="function"?o({}):o||r:m=e(o),c.createElement(u.Provider,{value:m},s)}},"../../node_modules/@storybook/addon-actions/dist/index.mjs":function(h,a,n){n.d(a,{XI:function(){return c.XI}});var c=n("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs"),u=(...l)=>{let e=config,r=l;r.length===1&&Array.isArray(r[0])&&([r]=r),r.length!==1&&typeof r[r.length-1]!="string"&&(e={...config,...r.pop()});let p=r[0];(r.length!==1||typeof p=="string")&&(p={},r.forEach(s=>{p[s]=s}));let o={};return Object.keys(p).forEach(s=>{o[s]=action(p[s],e)}),o}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(h,a,n){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=n("../../node_modules/react/index.js"),u=Symbol.for("react.element"),l=Symbol.for("react.fragment"),e=Object.prototype.hasOwnProperty,r=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function o(s,i,m){var f,O={},k=null,_=null;m!==void 0&&(k=""+m),i.key!==void 0&&(k=""+i.key),i.ref!==void 0&&(_=i.ref);for(f in i)e.call(i,f)&&!p.hasOwnProperty(f)&&(O[f]=i[f]);if(s&&s.defaultProps)for(f in i=s.defaultProps,i)O[f]===void 0&&(O[f]=i[f]);return{$$typeof:u,type:s,key:k,ref:_,props:O,_owner:r.current}}a.Fragment=l,a.jsx=o,a.jsxs=o},"../../node_modules/react/jsx-runtime.js":function(h,a,n){h.exports=n("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/ClickOutsideWrapper/ClickOutsideWrapper.story.tsx":function(h,a,n){n.r(a),n.d(a,{basic:function(){return v},default:function(){return P}});var c=n("../../node_modules/@storybook/addon-actions/dist/index.mjs"),u=n("../../node_modules/react/index.js"),l=n("./src/components/ClickOutsideWrapper/ClickOutsideWrapper.tsx"),e=n("../../node_modules/react/jsx-runtime.js"),r=n("../../node_modules/@mdx-js/react/lib/index.js"),p=n("../../node_modules/@storybook/blocks/dist/index.mjs");function o(d){const t=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},(0,r.RP)(),d.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(p.W8,{title:"MDX|ClickOutsideWrapper",component:l.N}),`
`,(0,e.jsx)(t.h1,{id:"clickoutsidewrapper",children:"ClickOutsideWrapper"}),`
`,(0,e.jsxs)(t.p,{children:["A wrapper component that detects clicks outside of the elements by attaching event listener to ",(0,e.jsx)(t.code,{children:"window"})," or ",(0,e.jsx)(t.code,{children:"document"}),` objects.
Useful for components that require an action being triggered when a click outside has occurred, for example closing an overlay or popup.`]}),`
`,(0,e.jsx)(t.h1,{id:"usage",children:"Usage"}),`
`,(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-jsx",children:`<ClickOutsideWrapper onClick={() => console.log('Clicked outside')}>
  <div style={{ width: '300px' }}>Container</div>
</ClickOutsideWrapper>
`})}),`
`,(0,e.jsx)(p.ov,{of:l.N})]})}function s(d={}){const{wrapper:t}=Object.assign({},(0,r.RP)(),d.components);return t?(0,e.jsx)(t,Object.assign({},d,{children:(0,e.jsx)(o,d)})):o(d)}var i=s,m=Object.defineProperty,f=Object.defineProperties,O=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,j=(d,t,C)=>t in d?m(d,t,{enumerable:!0,configurable:!0,writable:!0,value:C}):d[t]=C,y=(d,t)=>{for(var C in t||(t={}))_.call(t,C)&&j(d,C,t[C]);if(k)for(var C of k(t))W.call(t,C)&&j(d,C,t[C]);return d},x=(d,t)=>f(d,O(t)),g,b,E;const w={title:"Layout/ClickOutsideWrapper",component:l.N,parameters:{docs:{page:i}}},v=()=>u.createElement(l.N,{onClick:()=>{(0,c.XI)("Clicked outside!")(),window.alert("Clicked outside!")}},u.createElement("div",{style:{width:"300px",border:"1px solid grey",padding:"20px"}},"Click outside this box!"));var P=w;v.parameters=x(y({},v.parameters),{docs:x(y({},(g=v.parameters)==null?void 0:g.docs),{source:y({originalSource:`() => {
  return <ClickOutsideWrapper onClick={() => {
    action('Clicked outside!')();
    window.alert('Clicked outside!');
  }}>
      <div style={{
      width: '300px',
      border: '1px solid grey',
      padding: '20px'
    }}>Click outside this box!</div>
    </ClickOutsideWrapper>;
}`},(E=(b=v.parameters)==null?void 0:b.docs)==null?void 0:E.source)})})},"./src/components/ClickOutsideWrapper/ClickOutsideWrapper.tsx":function(h,a,n){n.d(a,{N:function(){return u}});var c=n("../../node_modules/react/index.js");class u extends c.PureComponent{constructor(){super(...arguments),this.myRef=(0,c.createRef)(),this.state={hasEventListener:!1},this.onOutsideClick=e=>{const r=this.myRef.current;(!r||e.target instanceof Node&&!r.contains(e.target))&&this.props.onClick()}}componentDidMount(){this.props.parent.addEventListener("click",this.onOutsideClick,this.props.useCapture),this.props.includeButtonPress&&this.props.parent.addEventListener("keyup",this.onOutsideClick,this.props.useCapture)}componentWillUnmount(){this.props.parent.removeEventListener("click",this.onOutsideClick,this.props.useCapture),this.props.includeButtonPress&&this.props.parent.removeEventListener("keyup",this.onOutsideClick,this.props.useCapture)}render(){return c.createElement("div",{ref:this.myRef},this.props.children)}}u.defaultProps={includeButtonPress:!0,parent:typeof window<"u"?window:void 0,useCapture:!1};try{u.displayName="ClickOutsideWrapper",u.__docgenInfo={description:"",displayName:"ClickOutsideWrapper",props:{onClick:{defaultValue:null,description:"Callback to trigger when clicking outside of current element occurs.",name:"onClick",required:!0,type:{name:"() => void"}},includeButtonPress:{defaultValue:{value:"true"},description:"Runs the 'onClick' function when pressing a key outside of the current element. Defaults to true.",name:"includeButtonPress",required:!1,type:{name:"boolean"}},parent:{defaultValue:{value:"typeof window !== 'undefined' ? window : undefined"},description:"Object to attach the click event listener to.",name:"parent",required:!1,type:{name:"Document | Window"}},useCapture:{defaultValue:{value:"false"},description:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener. Defaults to false.",name:"useCapture",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/ClickOutsideWrapper/ClickOutsideWrapper.tsx#ClickOutsideWrapper"]={docgenInfo:u.__docgenInfo,name:"ClickOutsideWrapper",path:"src/components/ClickOutsideWrapper/ClickOutsideWrapper.tsx#ClickOutsideWrapper"})}catch{}}}]);
