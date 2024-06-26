"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[1664],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":function(U,d,r){r.d(d,{XI:function(){return f.XI}});var f=r("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs"),u=(...v)=>{let m=config,n=v;n.length===1&&Array.isArray(n[0])&&([n]=n),n.length!==1&&typeof n[n.length-1]!="string"&&(m={...config,...n.pop()});let o=n[0];(n.length!==1||typeof o=="string")&&(o={},n.forEach(i=>{o[i]=i}));let a={};return Object.keys(o).forEach(i=>{a[i]=action(o[i],m)}),a}},"./src/components/UnitPicker/UnitPicker.story.tsx":function(U,d,r){r.r(d),r.d(d,{Basic:function(){return c},default:function(){return X}});var f=r("../../node_modules/@storybook/addon-actions/dist/index.mjs"),u=r("../../node_modules/react/index.js"),v=r("../grafana-data/src/valueFormats/valueFormats.ts"),m=r("./src/components/Cascader/Cascader.tsx");function n(t){return`Custom unit: ${t}`}class o extends u.PureComponent{constructor(){super(...arguments),this.onChange=e=>{this.props.onChange(e.value)}}render(){const{value:e,width:s}=this.props;let l;const B=(0,v.Ke)().map(h=>{const D=h.submenu.map(g=>{const b={label:g.text,value:g.value};return g.value===e&&(l=b),b});return{label:h.text,value:h.text,items:D}});return e&&!l&&(l={value:e,label:e}),u.createElement(m.v,{width:s,initialValue:l&&l.label,allowCustomValue:!0,changeOnSelect:!1,formatCreateLabel:n,options:B,placeholder:"Choose",isClearable:!0,onSelect:this.props.onChange})}}try{o.displayName="UnitPicker",o.__docgenInfo={description:"",displayName:"UnitPicker",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(item?: string | undefined) => void"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/UnitPicker/UnitPicker.tsx#UnitPicker"]={docgenInfo:o.__docgenInfo,name:"UnitPicker",path:"src/components/UnitPicker/UnitPicker.tsx#UnitPicker"})}catch{}var a=r("../../node_modules/react/jsx-runtime.js"),i=r("../../node_modules/@mdx-js/react/lib/index.js"),S=r("../../node_modules/@storybook/blocks/dist/index.mjs");function P(t){const e=Object.assign({h1:"h1"},(0,i.RP)(),t.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"unitpicker",children:"UnitPicker"}),`
`,(0,a.jsx)(S.ov,{of:o})]})}function E(t={}){const{wrapper:e}=Object.assign({},(0,i.RP)(),t.components);return e?(0,a.jsx)(e,Object.assign({},t,{children:(0,a.jsx)(P,t)})):P(t)}var _=E,I=Object.defineProperty,A=Object.defineProperties,w=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,R=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,O=(t,e,s)=>e in t?I(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,p=(t,e)=>{for(var s in e||(e={}))R.call(e,s)&&O(t,s,e[s]);if(y)for(var s of y(e))V.call(e,s)&&O(t,s,e[s]);return t},j=(t,e)=>A(t,w(e)),C,k,x;const M={title:"Pickers and Editors/UnitPicker",component:o,parameters:{controls:{exclude:["onChange","value"]},docs:_}},c=t=>u.createElement(o,p({},t));c.args={onChange:(0,f.XI)("onChange fired"),width:30};var X=M;c.parameters=j(p({},c.parameters),{docs:j(p({},(C=c.parameters)==null?void 0:C.docs),{source:p({originalSource:"(args: UnitPickerProps) => <UnitPicker {...args} />"},(x=(k=c.parameters)==null?void 0:k.docs)==null?void 0:x.source)})})}}]);