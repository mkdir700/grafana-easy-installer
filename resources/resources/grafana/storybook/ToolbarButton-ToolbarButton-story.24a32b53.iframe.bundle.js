"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[4166],{"../../node_modules/@mdx-js/react/lib/index.js":function(H,P,a){a.d(P,{BN:function(){return v},RP:function(){return T},gz:function(){return w},xA:function(){return f}});var o=a("../../node_modules/react/index.js");const v=o.createContext({});function w(_){return h;function h(O){const R=T(O.components);return o.createElement(_,{...O,allComponents:R})}}function T(_){const h=o.useContext(v);return o.useMemo(()=>typeof _=="function"?_(h):{...h,..._},[h,_])}const r={};function f({components:_,children:h,disableParentContext:O}){let R;return O?R=typeof _=="function"?_({}):_||r:R=T(_),o.createElement(v.Provider,{value:R},h)}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(H,P,a){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=a("../../node_modules/react/index.js"),v=Symbol.for("react.element"),w=Symbol.for("react.fragment"),T=Object.prototype.hasOwnProperty,r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function _(h,O,R){var B,S={},c=null,p=null;R!==void 0&&(c=""+R),O.key!==void 0&&(c=""+O.key),O.ref!==void 0&&(p=O.ref);for(B in O)T.call(O,B)&&!f.hasOwnProperty(B)&&(S[B]=O[B]);if(h&&h.defaultProps)for(B in O=h.defaultProps,O)S[B]===void 0&&(S[B]=O[B]);return{$$typeof:v,type:h,key:c,ref:p,props:S,_owner:r.current}}P.Fragment=w,P.jsx=_,P.jsxs=_},"../../node_modules/react/jsx-runtime.js":function(H,P,a){H.exports=a("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/ToolbarButton/ToolbarButton.story.tsx":function(H,P,a){a.r(P),a.d(P,{BasicWithIcon:function(){return W},BasicWithText:function(){return A},Examples:function(){return G},default:function(){return U}});var o=a("../../node_modules/react/index.js"),v=a("./src/utils/storybook/DashboardStoryCanvas.tsx"),w=a("./src/components/Button/ButtonGroup.tsx"),T=a("./src/components/Layout/Layout.tsx"),r=a("./src/components/ToolbarButton/ToolbarButton.tsx"),f=a("../../node_modules/react/jsx-runtime.js"),_=a("../../node_modules/@mdx-js/react/lib/index.js"),h=a("../../node_modules/@storybook/blocks/dist/index.mjs");function O(i){const d=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},(0,_.RP)(),i.components);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d.h1,{id:"toolbarbutton",children:"ToolbarButton"}),`
`,(0,f.jsxs)(d.p,{children:[`Multiple buttons that form a toolbar. Each button can contain an icon, image and text.
There are three variants of the `,(0,f.jsx)(d.code,{children:"ToolbarButton"}),": default, primary and destructive."]}),`
`,(0,f.jsx)(d.h2,{id:"usage",children:"Usage"}),`
`,(0,f.jsxs)(d.p,{children:["This example shows how to use several buttons in a ",(0,f.jsx)(d.code,{children:"ToolbarButtonRow"}),"."]}),`
`,(0,f.jsx)(d.pre,{children:(0,f.jsx)(d.code,{className:"language-jsx",children:`<ToolbarButtonRow>
  <ToolbarButton variant="default" iconOnly={false} isOpen={false}>
    Last 6 hours
  </ToolbarButton>
  <ButtonGroup>
    <ToolbarButton icon="search-minus" variant="default" />
    <ToolbarButton icon="search-plus" variant="default" />
  </ButtonGroup>
  <ToolbarButton icon="sync" isOpen={false} variant="primary" />
</ToolbarButtonRow>
`})}),`
`,(0,f.jsx)(h.ov,{of:r.I})]})}function R(i={}){const{wrapper:d}=Object.assign({},(0,_.RP)(),i.components);return d?(0,f.jsx)(d,Object.assign({},i,{children:(0,f.jsx)(O,i)})):O(i)}var B=R,S=a("./src/components/ToolbarButton/ToolbarButtonRow.tsx"),c=Object.defineProperty,p=Object.defineProperties,y=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,n=(i,d,b)=>d in i?c(i,d,{enumerable:!0,configurable:!0,writable:!0,value:b}):i[d]=b,t=(i,d)=>{for(var b in d||(d={}))D.call(d,b)&&n(i,b,d[b]);if(E)for(var b of E(d))u.call(d,b)&&n(i,b,d[b]);return i},l=(i,d)=>p(i,y(d)),g,I,e,s,m,x,j,L,N;const V={title:"Buttons/ToolbarButton",component:r.I,parameters:{docs:{page:B},controls:{exclude:["imgSrc","imgAlt","narrow"]}},args:{variant:"default",fullWidth:!1,disabled:!1,children:"Just text",icon:"cloud",isOpen:!1,tooltip:"This is a tooltip",isHighlighted:!1,imgSrc:"",imgAlt:""},argTypes:{variant:{control:{type:"select"},options:["default","primary","active","destructive"]},icon:{control:{type:"select",options:["sync","cloud"]}}}},A=i=>o.createElement(r.I,{variant:i.variant,disabled:i.disabled,fullWidth:i.fullWidth,icon:i.icon,tooltip:i.tooltip,isOpen:i.isOpen,isHighlighted:i.isHighlighted,imgSrc:i.imgSrc,imgAlt:i.imgAlt},i.children);A.args={icon:void 0,iconOnly:!1};const W=i=>o.createElement(r.I,{variant:i.variant,icon:i.icon,isOpen:i.isOpen,tooltip:i.tooltip,disabled:i.disabled,fullWidth:i.fullWidth,isHighlighted:i.isHighlighted,imgSrc:i.imgSrc,imgAlt:i.imgAlt});W.args={iconOnly:!0};const G=i=>{const d=["default","canvas","active","primary","destructive"];return o.createElement(v.s,null,o.createElement(T.gW,null,"Button states",o.createElement(S.U,null,o.createElement(r.I,{variant:"canvas"},"Just text"),o.createElement(r.I,{variant:"canvas",icon:"sync",tooltip:"Sync"}),o.createElement(r.I,{variant:"canvas",imgSrc:"./grafana_icon.svg"},"With imgSrc"),o.createElement(r.I,{variant:"canvas",icon:"cloud",isOpen:!0},"isOpen"),o.createElement(r.I,{variant:"canvas",icon:"cloud",isOpen:!1},"isOpen = false")),o.createElement("br",null),"disabled",o.createElement(S.U,null,o.createElement(r.I,{variant:"canvas",icon:"sync",disabled:!0},"Disabled")),o.createElement("br",null),"Variants",o.createElement(S.U,null,d.map(b=>o.createElement(r.I,{icon:"sync",tooltip:"Sync",variant:b,key:b},b))),o.createElement("br",null),"Wrapped in noSpacing ButtonGroup",o.createElement(w.e,null,o.createElement(r.I,{variant:"active",icon:"clock-nine",tooltip:"Time picker"},"2020-10-02"),o.createElement(r.I,{variant:"active",icon:"search-minus"})),o.createElement("br",null),o.createElement(w.e,null,o.createElement(r.I,{variant:"canvas",icon:"sync"}),o.createElement(r.I,{variant:"canvas",isOpen:!1,narrow:!0})),o.createElement("br",null),"Inside button group",o.createElement(T.Gy,null,o.createElement(w.e,null,o.createElement(r.I,{variant:"primary",icon:"sync"},"Run query"),o.createElement(r.I,{isOpen:!1,narrow:!0,variant:"primary"})),o.createElement(w.e,null,o.createElement(r.I,{variant:"destructive",icon:"sync"},"Run query"),o.createElement(r.I,{isOpen:!1,narrow:!0,variant:"destructive"})))))};var U=V;A.parameters=l(t({},A.parameters),{docs:l(t({},(g=A.parameters)==null?void 0:g.docs),{source:t({originalSource:`args => {
  return <ToolbarButton variant={args.variant} disabled={args.disabled} fullWidth={args.fullWidth} icon={args.icon} tooltip={args.tooltip} isOpen={args.isOpen} isHighlighted={args.isHighlighted} imgSrc={args.imgSrc} imgAlt={args.imgAlt}>
      {args.children}
    </ToolbarButton>;
}`},(e=(I=A.parameters)==null?void 0:I.docs)==null?void 0:e.source)})}),W.parameters=l(t({},W.parameters),{docs:l(t({},(s=W.parameters)==null?void 0:s.docs),{source:t({originalSource:`args => {
  return <ToolbarButton variant={args.variant} icon={args.icon} isOpen={args.isOpen} tooltip={args.tooltip} disabled={args.disabled} fullWidth={args.fullWidth} isHighlighted={args.isHighlighted} imgSrc={args.imgSrc} imgAlt={args.imgAlt} />;
}`},(x=(m=W.parameters)==null?void 0:m.docs)==null?void 0:x.source)})}),G.parameters=l(t({},G.parameters),{docs:l(t({},(j=G.parameters)==null?void 0:j.docs),{source:t({originalSource:`args => {
  const variants: ToolbarButtonVariant[] = ['default', 'canvas', 'active', 'primary', 'destructive'];
  return <DashboardStoryCanvas>
      <VerticalGroup>
        Button states
        <ToolbarButtonRow>
          <ToolbarButton variant="canvas">Just text</ToolbarButton>
          <ToolbarButton variant="canvas" icon="sync" tooltip="Sync" />
          <ToolbarButton variant="canvas" imgSrc="./grafana_icon.svg">
            With imgSrc
          </ToolbarButton>
          <ToolbarButton variant="canvas" icon="cloud" isOpen={true}>
            isOpen
          </ToolbarButton>
          <ToolbarButton variant="canvas" icon="cloud" isOpen={false}>
            isOpen = false
          </ToolbarButton>
        </ToolbarButtonRow>
        <br />
        disabled
        <ToolbarButtonRow>
          <ToolbarButton variant="canvas" icon="sync" disabled>
            Disabled
          </ToolbarButton>
        </ToolbarButtonRow>
        <br />
        Variants
        <ToolbarButtonRow>
          {variants.map(variant => <ToolbarButton icon="sync" tooltip="Sync" variant={variant} key={variant}>
              {variant}
            </ToolbarButton>)}
        </ToolbarButtonRow>
        <br />
        Wrapped in noSpacing ButtonGroup
        <ButtonGroup>
          <ToolbarButton variant="active" icon="clock-nine" tooltip="Time picker">
            2020-10-02
          </ToolbarButton>
          <ToolbarButton variant="active" icon="search-minus" />
        </ButtonGroup>
        <br />
        <ButtonGroup>
          <ToolbarButton variant="canvas" icon="sync" />
          <ToolbarButton variant="canvas" isOpen={false} narrow />
        </ButtonGroup>
        <br />
        Inside button group
        <HorizontalGroup>
          <ButtonGroup>
            <ToolbarButton variant="primary" icon="sync">
              Run query
            </ToolbarButton>
            <ToolbarButton isOpen={false} narrow variant="primary" />
          </ButtonGroup>
          <ButtonGroup>
            <ToolbarButton variant="destructive" icon="sync">
              Run query
            </ToolbarButton>
            <ToolbarButton isOpen={false} narrow variant="destructive" />
          </ButtonGroup>
        </HorizontalGroup>
      </VerticalGroup>
    </DashboardStoryCanvas>;
}`},(N=(L=G.parameters)==null?void 0:L.docs)==null?void 0:N.source)})})},"./src/components/Button/ButtonGroup.tsx":function(H,P,a){a.d(P,{e:function(){return B}});var o=a("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),v=a("../../node_modules/react/index.js"),w=a("./src/themes/ThemeContext.tsx"),T=Object.defineProperty,r=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,h=(c,p,y)=>p in c?T(c,p,{enumerable:!0,configurable:!0,writable:!0,value:y}):c[p]=y,O=(c,p)=>{for(var y in p||(p={}))f.call(p,y)&&h(c,y,p[y]);if(r)for(var y of r(p))_.call(p,y)&&h(c,y,p[y]);return c},R=(c,p)=>{var y={};for(var E in c)f.call(c,E)&&p.indexOf(E)<0&&(y[E]=c[E]);if(c!=null&&r)for(var E of r(c))p.indexOf(E)<0&&_.call(c,E)&&(y[E]=c[E]);return y};const B=(0,v.forwardRef)((c,p)=>{var y=c,{className:E,children:D}=y,u=R(y,["className","children"]);const n=(0,w.of)(S);return v.createElement("div",O({ref:p,className:(0,o.cx)("button-group",n.wrapper,E)},u),D)});B.displayName="ButtonGroup";const S=c=>({wrapper:(0,o.AH)({display:"flex","> .button-group:not(:first-child) > button, > button:not(:first-child)":{borderTopLeftRadius:0,borderBottomLeftRadius:0},"> .button-group:not(:last-child) > button, > button:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0,borderRightWidth:0}})});try{B.displayName="ButtonGroup",B.__docgenInfo={description:"",displayName:"ButtonGroup",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Button/ButtonGroup.tsx#ButtonGroup"]={docgenInfo:B.__docgenInfo,name:"ButtonGroup",path:"src/components/Button/ButtonGroup.tsx#ButtonGroup"})}catch{}},"./src/components/Layout/Layout.tsx":function(H,P,a){a.d(P,{Gy:function(){return c},PE:function(){return S},gW:function(){return p}});var o=a("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),v=a("../../node_modules/react/index.js"),w=a("./src/themes/ThemeContext.tsx"),T=Object.defineProperty,r=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,h=(n,t,l)=>t in n?T(n,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[t]=l,O=(n,t)=>{for(var l in t||(t={}))f.call(t,l)&&h(n,l,t[l]);if(r)for(var l of r(t))_.call(t,l)&&h(n,l,t[l]);return n},R=(n,t)=>{var l={};for(var g in n)f.call(n,g)&&t.indexOf(g)<0&&(l[g]=n[g]);if(n!=null&&r)for(var g of r(n))t.indexOf(g)<0&&_.call(n,g)&&(l[g]=n[g]);return l},B=(n=>(n[n.Horizontal=0]="Horizontal",n[n.Vertical=1]="Vertical",n))(B||{});const S=n=>{var t=n,{children:l,orientation:g=0,spacing:I="sm",justify:e="flex-start",align:s="normal",wrap:m=!1,width:x="100%",height:j="100%"}=t,L=R(t,["children","orientation","spacing","justify","align","wrap","width","height"]);const N=(0,w.of)(E,g,I,e,s,m);return v.createElement("div",O({className:N.layout,style:{width:x,height:j}},L),v.Children.toArray(l).filter(Boolean).map((V,A)=>v.createElement("div",{className:N.childWrapper,key:A},V)))},c=({children:n,spacing:t,justify:l,align:g="center",wrap:I,width:e,height:s})=>v.createElement(S,{spacing:t,justify:l,orientation:0,align:g,width:e,height:s,wrap:I},n),p=({children:n,spacing:t,justify:l,align:g,width:I,height:e})=>v.createElement(S,{spacing:t,justify:l,orientation:1,align:g,width:I,height:e},n),y=({children:n,padding:t,margin:l,grow:g,shrink:I})=>{const e=useStyles2(u,t,l);return React.createElement("div",{className:cx(e.wrapper,g!==void 0&&css({flexGrow:g}),I!==void 0&&css({flexShrink:I}))},n)},E=(n,t,l,g,I,e)=>{const s=l!=="none"?n.spacing(D[l]):0,m=t===0&&!e||t===1?0:`-${s}`,x=t===1?"vertical-group":"horizontal-group";return{layout:(0,o.AH)({label:x,display:"flex",flexDirection:t===1?"column":"row",flexWrap:e?"wrap":"nowrap",justifyContent:g,alignItems:I,height:"100%",maxWidth:"100%",marginBottom:m}),childWrapper:(0,o.AH)({label:"layoutChildrenWrapper",marginBottom:t===0&&!e?0:s,marginRight:t===0?s:0,display:"flex",alignItems:I,"&:last-child":{marginBottom:t===1?0:void 0,marginRight:t===0?0:void 0}})}},D={none:0,xs:.5,sm:1,md:2,lg:3},u=(n,t,l)=>{const g=t&&t!=="none"&&n.spacing(D[t])||0,I=l&&l!=="none"&&n.spacing(D[l])||0;return{wrapper:css({label:"container",margin:I,padding:g})}};try{S.displayName="Layout",S.__docgenInfo={description:"",displayName:"Layout",props:{orientation:{defaultValue:{value:"Orientation.Horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"}]}},spacing:{defaultValue:{value:"sm"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},justify:{defaultValue:{value:"flex-start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"space-between"'}]}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"normal"'}]}},width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string"}},wrap:{defaultValue:{value:"false"},description:"",name:"wrap",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Layout.tsx#Layout"]={docgenInfo:S.__docgenInfo,name:"Layout",path:"src/components/Layout/Layout.tsx#Layout"})}catch{}try{c.displayName="HorizontalGroup",c.__docgenInfo={description:"",displayName:"HorizontalGroup",props:{width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string"}},wrap:{defaultValue:{value:"false"},description:"",name:"wrap",required:!1,type:{name:"boolean"}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"normal"'}]}},spacing:{defaultValue:{value:"sm"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},justify:{defaultValue:{value:"flex-start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"space-between"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Layout.tsx#HorizontalGroup"]={docgenInfo:c.__docgenInfo,name:"HorizontalGroup",path:"src/components/Layout/Layout.tsx#HorizontalGroup"})}catch{}try{p.displayName="VerticalGroup",p.__docgenInfo={description:"",displayName:"VerticalGroup",props:{width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string"}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"normal"'}]}},spacing:{defaultValue:{value:"sm"},description:"",name:"spacing",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},justify:{defaultValue:{value:"flex-start"},description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"space-between"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Layout.tsx#VerticalGroup"]={docgenInfo:p.__docgenInfo,name:"VerticalGroup",path:"src/components/Layout/Layout.tsx#VerticalGroup"})}catch{}try{y.displayName="Container",y.__docgenInfo={description:"",displayName:"Container",props:{padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'}]}},grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"number"}},shrink:{defaultValue:null,description:"",name:"shrink",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Layout.tsx#Container"]={docgenInfo:y.__docgenInfo,name:"Container",path:"src/components/Layout/Layout.tsx#Container"})}catch{}},"./src/components/ToolbarButton/ToolbarButton.tsx":function(H,P,a){a.d(P,{I:function(){return t}});var o=a("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),v=a("../../node_modules/react/index.js"),w=a("../grafana-data/src/types/icon.ts"),T=a("../grafana-e2e-selectors/src/selectors/index.ts"),r=a("./src/themes/ThemeContext.tsx"),f=a("./src/themes/mixins.ts"),_=a("./src/components/Button/Button.tsx"),h=a("./src/components/Icon/Icon.tsx"),O=a("./src/components/Tooltip/Tooltip.tsx"),R=Object.defineProperty,B=Object.defineProperties,S=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,E=(e,s,m)=>s in e?R(e,s,{enumerable:!0,configurable:!0,writable:!0,value:m}):e[s]=m,D=(e,s)=>{for(var m in s||(s={}))p.call(s,m)&&E(e,m,s[m]);if(c)for(var m of c(s))y.call(s,m)&&E(e,m,s[m]);return e},u=(e,s)=>B(e,S(s)),n=(e,s)=>{var m={};for(var x in e)p.call(e,x)&&s.indexOf(x)<0&&(m[x]=e[x]);if(e!=null&&c)for(var x of c(e))s.indexOf(x)<0&&y.call(e,x)&&(m[x]=e[x]);return m};const t=(0,v.forwardRef)((e,s)=>{var m=e,{tooltip:x,icon:j,iconSize:L,className:N,children:V,imgSrc:A,imgAlt:W,fullWidth:G,isOpen:U,narrow:i,variant:d="default",iconOnly:b,"aria-label":C,isHighlighted:K}=m,Y=n(m,["tooltip","icon","iconSize","className","children","imgSrc","imgAlt","fullWidth","isOpen","narrow","variant","iconOnly","aria-label","isHighlighted"]);const M=(0,r.of)(I),z=(0,o.cx)({[M.button]:!0,[M.buttonFullWidth]:G,[M.narrow]:i},M[d],N),F=(0,o.cx)({[M.content]:!0,[M.contentWithIcon]:!!j,[M.contentWithRightIcon]:U!==void 0}),$=v.createElement("button",D({ref:s,className:z,"aria-label":l(C,x),"aria-expanded":U},Y),g(j,L),A&&v.createElement("img",{className:M.img,src:A,alt:W??""}),V&&!b&&v.createElement("div",{className:F},V),U===!1&&v.createElement(h.I,{name:"angle-down"}),U===!0&&v.createElement(h.I,{name:"angle-up"}),K&&v.createElement("div",{className:M.highlight}));return x?v.createElement(O.m,{ref:s,content:x,placement:"bottom"},$):$});t.displayName="ToolbarButton";function l(e,s){return e||(s?T.Tp.components.PageToolbar.item(s):void 0)}function g(e,s){return e?(0,w.n6)(e)?v.createElement(h.I,{name:e,size:`${s||"lg"}`}):e:null}const I=e=>{const s=(0,_.U_)(e,"primary","solid"),m=(0,_.U_)(e,"destructive","solid"),x=(0,o.AH)({color:e.colors.text.primary,background:e.colors.secondary.main,"&:hover":{color:e.colors.text.primary,background:e.colors.secondary.shade,border:`1px solid ${e.colors.border.medium}`}});return{button:(0,o.AH)({label:"toolbar-button",position:"relative",display:"flex",alignItems:"center",height:e.spacing(e.components.height.md),padding:e.spacing(0,1),borderRadius:e.shape.radius.default,lineHeight:`${e.components.height.md*e.spacing.gridSize-2}px`,fontWeight:e.typography.fontWeightMedium,border:`1px solid ${e.colors.secondary.border}`,whiteSpace:"nowrap",transition:e.transitions.create(["background","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:focus, &:focus-visible":u(D({},(0,f.Hi)(e)),{zIndex:1}),"&:focus:not(:focus-visible)":(0,f.cr)(e),"&:hover":{boxShadow:e.shadows.z1},"&[disabled], &:disabled":{cursor:"not-allowed",opacity:e.colors.action.disabledOpacity,background:e.colors.action.disabledBackground,boxShadow:"none","&:hover":{color:e.colors.text.disabled,background:e.colors.action.disabledBackground,boxShadow:"none"}}}),default:(0,o.AH)({color:e.colors.text.secondary,background:"transparent",border:"1px solid transparent","&:hover":{color:e.colors.text.primary,background:e.colors.background.secondary}}),canvas:x,active:(0,o.cx)(x,(0,o.AH)({"&::before":{display:"block",content:'" "',position:"absolute",left:0,right:0,height:"2px",bottom:0,borderRadius:e.shape.radius.default,backgroundImage:e.colors.gradients.brandHorizontal}})),primary:(0,o.AH)(s),destructive:(0,o.AH)(m),narrow:(0,o.AH)({padding:e.spacing(0,.5)}),img:(0,o.AH)({width:"16px",height:"16px",marginRight:e.spacing(1)}),buttonFullWidth:(0,o.AH)({flexGrow:1}),content:(0,o.AH)({flexGrow:1}),contentWithIcon:(0,o.AH)({display:"none",paddingLeft:e.spacing(1),[`@media ${f.uT(e.v1.breakpoints.md)}`]:{display:"block"}}),contentWithRightIcon:(0,o.AH)({paddingRight:e.spacing(.5)}),highlight:(0,o.AH)({backgroundColor:e.colors.success.main,borderRadius:e.shape.radius.circle,width:"6px",height:"6px",position:"absolute",top:"-3px",right:"-3px",zIndex:1})}};try{t.displayName="ToolbarButton",t.__docgenInfo={description:"",displayName:"ToolbarButton",props:{icon:{defaultValue:null,description:"Icon name",name:"icon",required:!1,type:{name:"ReactNode"}},iconSize:{defaultValue:null,description:"Icon size",name:"iconSize",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},tooltip:{defaultValue:null,description:"Tooltip",name:"tooltip",required:!1,type:{name:"string"}},imgSrc:{defaultValue:null,description:"For image icons",name:"imgSrc",required:!1,type:{name:"string"}},imgAlt:{defaultValue:null,description:"Alt text for imgSrc",name:"imgAlt",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"if true or false will show angle-down/up",name:"isOpen",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:null,description:"Controls flex-grow: 1",name:"fullWidth",required:!1,type:{name:"boolean"}},narrow:{defaultValue:null,description:"reduces padding to xs",name:"narrow",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"default"},description:"variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"destructive"'},{value:'"canvas"'},{value:'"default"'},{value:'"active"'}]}},iconOnly:{defaultValue:null,description:"Hide any children and only show icon",name:"iconOnly",required:!1,type:{name:"boolean"}},isHighlighted:{defaultValue:null,description:"Show highlight dot",name:"isHighlighted",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/ToolbarButton/ToolbarButton.tsx#ToolbarButton"]={docgenInfo:t.__docgenInfo,name:"ToolbarButton",path:"src/components/ToolbarButton/ToolbarButton.tsx#ToolbarButton"})}catch{}},"./src/components/ToolbarButton/ToolbarButtonRow.tsx":function(H,P,a){a.d(P,{U:function(){return E}});var o=a("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),v=a("../../node_modules/@react-aria/dialog/dist/import.mjs"),w=a("../../node_modules/@react-aria/focus/dist/import.mjs"),T=a("../../node_modules/@react-aria/overlays/dist/import.mjs"),r=a("../../node_modules/react/index.js"),f=a("./src/themes/ThemeContext.tsx"),_=a("./src/components/Portal/Portal.tsx"),h=a("./src/components/ToolbarButton/ToolbarButton.tsx"),O=Object.defineProperty,R=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,c=(u,n,t)=>n in u?O(u,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[n]=t,p=(u,n)=>{for(var t in n||(n={}))B.call(n,t)&&c(u,t,n[t]);if(R)for(var t of R(n))S.call(n,t)&&c(u,t,n[t]);return u},y=(u,n)=>{var t={};for(var l in u)B.call(u,l)&&n.indexOf(l)<0&&(t[l]=u[l]);if(u!=null&&R)for(var l of R(u))n.indexOf(l)<0&&S.call(u,l)&&(t[l]=u[l]);return t};const E=(0,r.forwardRef)((u,n)=>{var t=u,{alignment:l="left",className:g,children:I}=t,e=y(t,["alignment","className","children"]);const s=r.Children.toArray(I).filter(b=>b!=null),[m,x]=(0,r.useState)(Array(s.length).fill(!1)),j=(0,r.useRef)(null),[L,N]=(0,r.useState)(!1),V=(0,r.useRef)(null),A=(0,r.createRef)(),{overlayProps:W}=(0,T.e)({onClose:()=>N(!1),isDismissable:!0,isOpen:L,shouldCloseOnInteractOutside:b=>{var C;const K=(0,_.gF)();return!((C=V.current)!=null&&C.contains(b))&&!K.contains(b)}},A),{dialogProps:G}=(0,v.s)({},A),U=(0,f.$j)(),i=l==="left"?m.indexOf(!1)-1:m.length,d=D(U,i,l);return(0,r.useLayoutEffect)(()=>{const b=new IntersectionObserver(C=>{C.forEach(K=>{if(K.target instanceof HTMLElement&&K.target.parentNode){const Y=Array.prototype.indexOf.call(K.target.parentNode.children,K.target);x(M=>{const z=[...M];return z[Y]=K.isIntersecting,z})}})},{threshold:1,root:j.current});return j.current&&Array.from(j.current.children).forEach(C=>{C instanceof HTMLElement&&C!==V.current&&b.observe(C)}),()=>b.disconnect()},[I]),r.createElement("div",p({ref:j,className:(0,o.cx)(d.container,g)},e),s.map((b,C)=>r.createElement("div",{key:C,style:{order:C,visibility:m[C]?"visible":"hidden"},className:d.childWrapper},b)),m.includes(!1)&&r.createElement("div",{ref:V,className:d.overflowButton},r.createElement(h.I,{variant:L?"active":"default",tooltip:"Show more items",onClick:()=>N(!L),icon:"ellipsis-v",iconOnly:!0,narrow:!0}),L&&r.createElement(w.n1,{contain:!0,autoFocus:!0},r.createElement("div",p(p({className:d.overflowItems,ref:A},W),G),s.map((b,C)=>!m[C]&&b)))))});E.displayName="ToolbarButtonRow";const D=(u,n,t)=>({overflowButton:(0,o.AH)({order:n}),overflowItems:(0,o.AH)({alignItems:"center",backgroundColor:u.colors.background.primary,borderRadius:u.shape.radius.default,boxShadow:u.shadows.z2,display:"flex",flexWrap:"wrap",gap:u.spacing(1),marginTop:u.spacing(1),maxWidth:"80vw",padding:u.spacing(.5,1),position:"absolute",right:0,top:"100%",width:"max-content",zIndex:u.zIndex.dropdown}),container:(0,o.AH)({alignItems:"center",display:"flex",gap:u.spacing(1),justifyContent:t==="left"?"flex-start":"flex-end",minWidth:0,position:"relative"}),childWrapper:(0,o.AH)({alignItems:"center",display:"flex",gap:u.spacing(1)})});try{E.displayName="ToolbarButtonRow",E.__docgenInfo={description:"",displayName:"ToolbarButtonRow",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},alignment:{defaultValue:{value:"left"},description:"Determine flex-alignment of child buttons. Needed for overflow behaviour.",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/ToolbarButton/ToolbarButtonRow.tsx#ToolbarButtonRow"]={docgenInfo:E.__docgenInfo,name:"ToolbarButtonRow",path:"src/components/ToolbarButton/ToolbarButtonRow.tsx#ToolbarButtonRow"})}catch{}},"./src/utils/storybook/DashboardStoryCanvas.tsx":function(H,P,a){a.d(P,{s:function(){return T}});var o=a("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),v=a("../../node_modules/react/index.js"),w=a("./src/themes/ThemeContext.tsx");const T=({children:r})=>{const f=(0,w.$j)(),_=(0,o.AH)({width:"100%",height:"100%",padding:"32px",background:f.colors.background.canvas,overflow:"auto"});return v.createElement("div",{className:_},r)};T.displayName="DashboardStoryCanvas";try{T.displayName="DashboardStoryCanvas",T.__docgenInfo={description:"",displayName:"DashboardStoryCanvas",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/utils/storybook/DashboardStoryCanvas.tsx#DashboardStoryCanvas"]={docgenInfo:T.__docgenInfo,name:"DashboardStoryCanvas",path:"src/utils/storybook/DashboardStoryCanvas.tsx#DashboardStoryCanvas"})}catch{}}}]);