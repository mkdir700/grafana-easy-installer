"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[8696],{"../../node_modules/@mdx-js/react/lib/index.js":function(O,_,r){r.d(_,{BN:function(){return a},RP:function(){return f},gz:function(){return l},xA:function(){return P}});var d=r("../../node_modules/react/index.js");const a=d.createContext({});function l(i){return e;function e(o){const u=f(o.components);return d.createElement(i,{...o,allComponents:u})}}function f(i){const e=d.useContext(a);return d.useMemo(()=>typeof i=="function"?i(e):{...e,...i},[e,i])}const v={};function P({components:i,children:e,disableParentContext:o}){let u;return o?u=typeof i=="function"?i({}):i||v:u=f(i),d.createElement(a.Provider,{value:u},e)}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(O,_,r){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=r("../../node_modules/react/index.js"),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,v=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P={key:!0,ref:!0,__self:!0,__source:!0};function i(e,o,u){var m,g={},y=null,p=null;u!==void 0&&(y=""+u),o.key!==void 0&&(y=""+o.key),o.ref!==void 0&&(p=o.ref);for(m in o)f.call(o,m)&&!P.hasOwnProperty(m)&&(g[m]=o[m]);if(e&&e.defaultProps)for(m in o=e.defaultProps,o)g[m]===void 0&&(g[m]=o[m]);return{$$typeof:a,type:e,key:y,ref:p,props:g,_owner:v.current}}_.Fragment=l,_.jsx=i,_.jsxs=i},"../../node_modules/react/jsx-runtime.js":function(O,_,r){O.exports=r("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/Pagination/Pagination.story.tsx":function(O,_,r){r.r(_),r.d(_,{WithPages:function(){return s},default:function(){return S}});var d=r("../../node_modules/react/index.js"),a=r("./src/components/Pagination/Pagination.tsx"),l=r("../../node_modules/react/jsx-runtime.js"),f=r("../../node_modules/@mdx-js/react/lib/index.js"),v=r("../../node_modules/@storybook/blocks/dist/index.mjs");function P(t){const n=Object.assign({h1:"h1",p:"p",h3:"h3",pre:"pre",code:"code"},(0,f.RP)(),t.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v.W8,{title:"MDX|Pagination",component:a.d}),`
`,(0,l.jsx)(n.h1,{id:"pagination",children:"Pagination"}),`
`,(0,l.jsx)(n.p,{children:"Component used for rendering a page selector below paginated content."}),`
`,(0,l.jsx)(n.h3,{id:"usage",children:"Usage"}),`
`,(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:`<div>
  <div>Page 1 content</div>
  <Pagination currentPage={1} numberOfPages={5} onNavigate={() => fetchPage(2)} />
</div>
`})}),`
`,(0,l.jsx)(v.ov,{of:a.d})]})}function i(t={}){const{wrapper:n}=Object.assign({},(0,f.RP)(),t.components);return n?(0,l.jsx)(n,Object.assign({},t,{children:(0,l.jsx)(P,t)})):P(t)}var e=i,o=Object.defineProperty,u=Object.defineProperties,m=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,x=(t,n,c)=>n in t?o(t,n,{enumerable:!0,configurable:!0,writable:!0,value:c}):t[n]=c,E=(t,n)=>{for(var c in n||(n={}))y.call(n,c)&&x(t,c,n[c]);if(g)for(var c of g(n))p.call(n,c)&&x(t,c,n[c]);return t},b=(t,n)=>u(t,m(n)),I,j,h;const C={title:"Buttons/Pagination",component:a.d,parameters:{docs:{page:e},controls:{exclude:["currentPage","onNavigate"]}},argTypes:{numberOfPages:{control:{type:"number",min:1}}}},s=({numberOfPages:t,hideWhenSinglePage:n})=>{const[c,D]=(0,d.useState)(1);return d.createElement(a.d,{numberOfPages:t,currentPage:c,onNavigate:D,hideWhenSinglePage:n})};s.args={numberOfPages:5,hideWhenSinglePage:!1};var S=C;s.parameters=b(E({},s.parameters),{docs:b(E({},(I=s.parameters)==null?void 0:I.docs),{source:E({originalSource:`({
  numberOfPages,
  hideWhenSinglePage
}) => {
  const [page, setPage] = useState(1);
  return <Pagination numberOfPages={numberOfPages} currentPage={page} onNavigate={setPage} hideWhenSinglePage={hideWhenSinglePage} />;
}`},(h=(j=s.parameters)==null?void 0:j.docs)==null?void 0:h.source)})})},"./src/components/Pagination/Pagination.tsx":function(O,_,r){r.d(_,{d:function(){return P}});var d=r("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),a=r("../../node_modules/react/index.js"),l=r("./src/themes/ThemeContext.tsx"),f=r("./src/components/Button/Button.tsx"),v=r("./src/components/Icon/Icon.tsx");const P=({currentPage:e,numberOfPages:o,onNavigate:u,hideWhenSinglePage:m,showSmallVersion:g,className:y})=>{const p=(0,l.of)(i),x=g?1:8,E=(0,a.useMemo)(()=>{const b=[...new Array(o).keys()],I=o>x,j=(h,C)=>a.createElement("li",{key:h,className:p.item},a.createElement(f.$n,{size:"sm",variant:C,onClick:()=>u(h)},h));return b.reduce((h,C)=>{const s=C+1,S=s===e?"primary":"secondary",t=x,n=o-x+1,c=n-t,D=s===1||s===o,M=c>-1&&e>=t&&e<=n,B=g?1:3,N=g?0:2;return I?D||e<t&&s<t||c>=0&&e>n&&s>n||c<0&&e>=t&&s>n||M&&s>=e-N&&s<=e+N?h.push(j(s,S)):(s===t&&e<t||s===n&&e>n||M&&(s===e-B||s===e+B))&&h.push(a.createElement("li",{key:s,className:p.item},a.createElement(v.I,{className:p.ellipsis,name:"ellipsis-v"}))):h.push(j(s,S)),h},[])},[e,o,u,x,g,p.ellipsis,p.item]);return m&&o<=1?null:a.createElement("div",{className:(0,d.cx)(p.container,y)},a.createElement("ol",null,a.createElement("li",{className:p.item},a.createElement(f.$n,{"aria-label":"previous page",size:"sm",variant:"secondary",onClick:()=>u(e-1),disabled:e===1},a.createElement(v.I,{name:"angle-left"}))),E,a.createElement("li",{className:p.item},a.createElement(f.$n,{"aria-label":"next page",size:"sm",variant:"secondary",onClick:()=>u(e+1),disabled:e===o},a.createElement(v.I,{name:"angle-right"})))))},i=()=>({container:(0,d.AH)({float:"right"}),item:(0,d.AH)({display:"inline-block",paddingLeft:"10px",marginBottom:"5px"}),ellipsis:(0,d.AH)({transform:"rotate(90deg)"})});try{P.displayName="Pagination",P.__docgenInfo={description:"",displayName:"Pagination",props:{currentPage:{defaultValue:null,description:"The current page index being shown.",name:"currentPage",required:!0,type:{name:"number"}},numberOfPages:{defaultValue:null,description:"Number of total pages.",name:"numberOfPages",required:!0,type:{name:"number"}},onNavigate:{defaultValue:null,description:"Callback function for fetching the selected page.",name:"onNavigate",required:!0,type:{name:"(toPage: number) => void"}},hideWhenSinglePage:{defaultValue:null,description:"When set to true and the pagination result is only one page it will not render the pagination at all.",name:"hideWhenSinglePage",required:!1,type:{name:"boolean"}},showSmallVersion:{defaultValue:null,description:"Small version only shows the current page and the navigation buttons.",name:"showSmallVersion",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"]={docgenInfo:P.__docgenInfo,name:"Pagination",path:"src/components/Pagination/Pagination.tsx#Pagination"})}catch{}}}]);
