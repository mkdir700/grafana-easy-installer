"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[1348],{"../../node_modules/@mdx-js/react/lib/index.js":function(A,y,n){n.d(y,{BN:function(){return b},RP:function(){return o},gz:function(){return x},xA:function(){return g}});var c=n("../../node_modules/react/index.js");const b=c.createContext({});function x(p){return f;function f(u){const S=o(u.components);return c.createElement(p,{...u,allComponents:S})}}function o(p){const f=c.useContext(b);return c.useMemo(()=>typeof p=="function"?p(f):{...f,...p},[f,p])}const i={};function g({components:p,children:f,disableParentContext:u}){let S;return u?S=typeof p=="function"?p({}):p||i:S=o(p),c.createElement(b.Provider,{value:S},f)}},"../../node_modules/@storybook/addon-actions/dist/index.mjs":function(A,y,n){n.d(y,{XI:function(){return c.XI}});var c=n("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs"),b=(...x)=>{let o=config,i=x;i.length===1&&Array.isArray(i[0])&&([i]=i),i.length!==1&&typeof i[i.length-1]!="string"&&(o={...config,...i.pop()});let g=i[0];(i.length!==1||typeof g=="string")&&(g={},i.forEach(f=>{g[f]=f}));let p={};return Object.keys(g).forEach(f=>{p[f]=action(g[f],o)}),p}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(A,y,n){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=n("../../node_modules/react/index.js"),b=Symbol.for("react.element"),x=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function p(f,u,S){var P,M={},j=null,V=null;S!==void 0&&(j=""+S),u.key!==void 0&&(j=""+u.key),u.ref!==void 0&&(V=u.ref);for(P in u)o.call(u,P)&&!g.hasOwnProperty(P)&&(M[P]=u[P]);if(f&&f.defaultProps)for(P in u=f.defaultProps,u)M[P]===void 0&&(M[P]=u[P]);return{$$typeof:b,type:f,key:j,ref:V,props:M,_owner:i.current}}y.Fragment=x,y.jsx=p,y.jsxs=p},"../../node_modules/react/jsx-runtime.js":function(A,y,n){A.exports=n("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/Select/Select.story.tsx":function(A,y,n){n.r(y),n.d(y,{AutoMenuPlacement:function(){return J},Basic:function(){return ne},BasicSelectAsync:function(){return oe},BasicSelectPlainValue:function(){return L},BasicVirtualizedList:function(){return ae},CustomValueCreation:function(){return q},MultiPlainValue:function(){return U},MultiSelectAsync:function(){return Z},MultiSelectBasic:function(){return G},MultiSelectWithOptionGroups:function(){return re},SelectWithOptionDescriptions:function(){return W},WidthAuto:function(){return le},default:function(){return ot}});var c="top",b="bottom",x="right",o="left",i="auto",g=[c,b,x,o],p="start",f="end",u="clippingParents",S="viewport",P="popper",M="reference",j=null,V=null,R="beforeRead",_="read",v="afterRead",r="beforeMain",d="main",E="afterMain",T="beforeWrite",z="write",w="afterWrite",k=[R,_,v,r,d,E,T,z,w],I=n("../../node_modules/@storybook/addon-actions/dist/index.mjs"),l=n("../../node_modules/react/index.js"),F=n("../grafana-data/src/types/icon.ts"),C=n("./src/components/Select/Select.tsx"),H=n("./src/components/Icon/Icon.tsx"),N=n("./src/types/icon.ts"),t=n("../../node_modules/react/jsx-runtime.js"),X=n("../../node_modules/@mdx-js/react/lib/index.js"),Y=n("../../node_modules/@storybook/blocks/dist/index.mjs");function $(a){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",ul:"ul",li:"li",h3:"h3",strong:"strong",pre:"pre"},(0,X.RP)(),a.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"select",children:"Select"}),`
`,(0,t.jsxs)(e.p,{children:["Select is the base for every component on this page. The approaches mentioned here are also applicable to ",(0,t.jsx)(e.code,{children:"AsyncSelect"}),", ",(0,t.jsx)(e.code,{children:"MultiSelect"}),", ",(0,t.jsx)(e.code,{children:"AsyncMultiSelect"}),"."]}),`
`,(0,t.jsx)(e.h2,{id:"select-variants",children:"Select variants"}),`
`,(0,t.jsxs)(e.p,{children:["Select is an input with the ability to search and create new values. It should be used when you have a list of options. If the data has a tree structure, consider using ",(0,t.jsx)(e.code,{children:"Cascader"}),` instead.
Select has some features:`]}),`
`,(0,t.jsxs)(e.ul,{children:[`
`,(0,t.jsx)(e.li,{children:"Search a list of values"}),`
`,(0,t.jsx)(e.li,{children:"Select multiple values"}),`
`,(0,t.jsx)(e.li,{children:"Select from async data"}),`
`,(0,t.jsx)(e.li,{children:"Create custom values that aren't in the list"}),`
`]}),`
`,(0,t.jsx)(e.h3,{id:"options-format",children:"Options format"}),`
`,(0,t.jsx)(e.p,{children:"There are four properties for each option:"}),`
`,(0,t.jsxs)(e.ul,{children:[`
`,(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"label"})," - Text that is visible in the menu."]}),`
`,(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"value"})," - Could be anything, but is usually a string. Used to identify what is ",(0,t.jsx)(e.strong,{children:"actually"})," selected."]}),`
`,(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"description"})," - Longer description that describes the choice. Use this sparingly."]}),`
`,(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"imgUrl"})," - URL to an image. Use this when an image or icon provides more context for the option."]}),`
`]}),`
`,(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:`const options = [
  { label: 'Basic option', value: 0 },
  { label: 'Option with description', value: 1, description: 'this is a description' },
  {
    label: 'Option with description and image',
    value: 2,
    description: 'This is a very elaborate description, describing all the wonders in the world.',
    imgUrl: 'https://placekitten.com/40/40',
  },
];
`})}),`
`,(0,t.jsx)(e.h3,{id:"creatable-option",children:"Creatable option"}),`
`,(0,t.jsxs)(e.p,{children:["Creatable option is used when you want to be able to add a custom value to the list of options. ",(0,t.jsx)(e.code,{children:"allowCustomValue"})," needs to be true and you must handle the value creation with ",(0,t.jsx)(e.code,{children:"onCreateOption"}),"."]}),`
`,(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:`import { Select } from "@grafana/ui";

const SelectComponent = () => {
  const [value, setValue] = useState<SelectableValue<number>>();

  return (
    <Select
      options={option}
      value={value}
      allowCustomValue
      onCreateOption={customValue => {
        setValue(customValue);
      }}
    />
  );
};
`})}),`
`,(0,t.jsx)(e.h3,{id:"resetting-selected-value-from-outside-the-component",children:"Resetting selected value from outside the component"}),`
`,(0,t.jsxs)(e.p,{children:["If you want to reset the selected value from outside the component, e.g. if there are two Select components that should be in sync, you can set the dependent Select value to ",(0,t.jsx)(e.code,{children:"null"})," in the ",(0,t.jsx)(e.code,{children:"onChange"})," handler of the first Select component."]}),`
`,(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:`import React, { useState } from 'react';
import { Select } from '@grafana/ui';

const SelectComponent = () => {
  const [person, setPerson] = useState<string | undefined>('');
  const [team, setTeam] = useState<string | undefined | null>('');

  return (
    <form>
      <Select
        onChange={({ value }) => {
          setPerson(value);
          setTeam(null); // Setting the team to null will reset the selected value in the team Select
        }}
        options={[
          {
            value: 'option1',
            label: 'Option 1',
          },
          {
            value: 'option2',
            label: 'Option 2',
          },
        ]}
        value={person}
        backspaceRemovesValue
      />
      <Select
        onChange={({ value }) => setTeam(value)}
        options={[
          {
            value: 'team1',
            label: 'Team 1',
          },
          {
            value: 'team',
            label: 'Team 2',
          },
        ]}
        value={team}
      />
    </form>
  );
};
`})}),`
`,(0,t.jsx)(e.h2,{id:"asyncselect",children:"AsyncSelect"}),`
`,(0,t.jsxs)(e.p,{children:["Like regular Select, but handles fetching options asynchronously. Use the ",(0,t.jsx)(e.code,{children:"loadOptions"})," prop for the async function that loads the options. If ",(0,t.jsx)(e.code,{children:"defaultOptions"})," is set to ",(0,t.jsx)(e.code,{children:"true"}),", ",(0,t.jsx)(e.code,{children:"loadOptions"})," will be called when the component is mounted."]}),`
`,(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:`
import { AsyncSelect } from '@grafana/ui';

const basicSelectAsync = () => {
  const [value, setValue] = useState<SelectableValue<string>>();

  return (
    <AsyncSelect
      loadOptions={loadAsyncOptions}
      defaultOptions
      value={value}
      onChange={v => {
        setValue(v);
      }}
    />
  );
};
`})}),`
`,(0,t.jsx)(e.p,{children:"Where the async function could look like this:"}),`
`,(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:`const loadAsyncOptions = () => {
  return new Promise<Array<SelectableValue<string>>>((resolve) => {
    setTimeout(() => {
      resolve(options);
    }, 2000);
  });
};
`})}),`
`,(0,t.jsx)(e.h2,{id:"multiselect",children:"MultiSelect"}),`
`,(0,t.jsx)(e.p,{children:"Possible to Select multiple values at the same time."}),`
`,(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:`import { MultiSelect } from '@grafana/ui';

const multiSelect = () => {
  const [value, setValue] = useState<Array<SelectableValue<string>>>([]);

  return (
    <>
      <MultiSelect
        options={options}
        value={value}
        onChange={(v) => {
          setValue(v);
        }}
      />
    </>
  );
};
`})}),`
`,(0,t.jsx)(e.h2,{id:"asyncmultiselect",children:"AsyncMultiSelect"}),`
`,(0,t.jsxs)(e.p,{children:["Like MultiSelect but handles data asynchronously with the ",(0,t.jsx)(e.code,{children:"loadOptions"})," prop."]}),`
`,(0,t.jsx)(e.h2,{id:"testing",children:"Testing"}),`
`,(0,t.jsxs)(e.p,{children:["Using React Testing Library, you can select the ",(0,t.jsx)(e.code,{children:"<Select />"})," using its matching label, such as the label assigned with the ",(0,t.jsx)(e.code,{children:"inputId"})," prop. Use the ",(0,t.jsx)(e.code,{children:"react-select-event"})," package to select values from the options."]}),`
`,(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:`import { render, screen } from '@testing-library/react';
import selectEvent from 'react-select-event';
import { Select } from '@grafana/ui';

it('should call onChange', () => {
  const onChange = jest.fn();

  render(
    <>
      <label htmlFor="my-select">My select</label>
      <Select onChange={onChange} options={options} inputId="my-select" />
    </>
  );

  const selectEl = screen.getByLabelText('My select');
  expect(selectEl).toBeInTheDocument();

  await selectEvent.select(selectEl, 'Option 2', { container: document.body });
  expect(onChange).toHaveBeenCalledWith({
    label: 'Option 2',
    value: 2,
  });
});
`})}),`
`,(0,t.jsx)(e.h2,{id:"props",children:"Props"}),`
`,(0,t.jsx)(Y.ov,{of:C.l6})]})}function se(a={}){const{wrapper:e}=Object.assign({},(0,X.RP)(),a.components);return e?(0,t.jsx)(e,Object.assign({},a,{children:(0,t.jsx)($,a)})):$(a)}var ie=se,D=n("./src/components/Select/mockOptions.tsx"),ue=Object.defineProperty,ce=Object.defineProperties,ve=Object.getOwnPropertyDescriptors,te=Object.getOwnPropertySymbols,de=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,Q=(a,e,m)=>e in a?ue(a,e,{enumerable:!0,configurable:!0,writable:!0,value:m}):a[e]=m,s=(a,e)=>{for(var m in e||(e={}))de.call(e,m)&&Q(a,m,e[m]);if(te)for(var m of te(e))pe.call(e,m)&&Q(a,m,e[m]);return a},O=(a,e)=>ce(a,ve(e)),me,fe,ge,he,_e,ye,be,Se,xe,Oe,Ce,Ee,we,Pe,je,Ie,Ve,Te,Ae,Me,Re,ke,De,Be,Le,We,Ue,Ne,Ke,ze,Fe,He,Xe,Ye,$e,Qe,Ge,Ze,Je,qe,et,tt;const rt={title:"Forms/Select",component:C.l6,subcomponents:{AsyncSelect:C.DW,MultiSelect:C.KF,AsyncMultiSelect:C.Iv},parameters:{docs:{page:ie},controls:{exclude:["getOptionValue","getOptionLabel","formatCreateLabel","filterOption","className","components","defaultValue","id","inputId","onBlur","onChange","onCloseMenu","onCreateOption","onInputChange","onKeyDown","onOpenMenu","prefix","renderControl","options","isOptionDisabled","aria-label","noOptionsMessage","menuPosition","isValidNewOption","value"]}},args:{width:0,disabled:!1,isLoading:!1,invalid:!1,icon:"arrow-down"},argTypes:{width:{control:{type:"range",min:1,max:100}},icon:{control:{type:"select",options:(0,N.GO)()}}}},nt=()=>new Promise(a=>{setTimeout(()=>{a((0,D.Q)())},2e3)}),B=a=>{var e;return l.createElement(H.I,{name:(e=(0,F.Uo)(a))!=null?e:"question-circle"})},ne=a=>{const[e,m]=(0,l.useState)();return l.createElement(l.Fragment,null,l.createElement(C.l6,s({options:(0,D.Q)(),value:e,onChange:h=>{m(h),(0,I.XI)("onChange")(h)}},a)))},ae=a=>{const[e,m]=(0,l.useState)();return l.createElement(l.Fragment,null,l.createElement(C.l6,s({options:(0,D.W)(),virtualized:!0,value:e,onChange:h=>{m(h),(0,I.XI)("onChange")(h)}},a)))},L=a=>{const[e,m]=(0,l.useState)();return l.createElement(l.Fragment,null,l.createElement(C.l6,s({options:(0,D.Q)(),value:e,onChange:h=>{m(h.value),(0,I.XI)("onChange")(h)},prefix:B(a.icon)},a)))},W=a=>{const[e,m]=(0,l.useState)(),h=[{label:"Basic option",value:0},{label:"Option with description",value:1,description:"this is a description"},{label:"Option with description and image",value:2,description:"This is a very elaborate description, describing all the wonders in the world.",imgUrl:"https://placekitten.com/40/40"}];return l.createElement(l.Fragment,null,l.createElement(C.l6,s({options:h,value:e,onChange:K=>{m(K.value),(0,I.XI)("onChange")(K)},prefix:B(a.icon)},a)))},U=a=>{const[e,m]=(0,l.useState)();return l.createElement(l.Fragment,null,l.createElement(C.KF,s({options:(0,D.Q)(),value:e,onChange:h=>{m(h.map(K=>K.value))},prefix:B(a.icon)},a)))},re=a=>{const[e,m]=(0,l.useState)();return l.createElement(l.Fragment,null,l.createElement(C.KF,s({options:[{label:"1",value:"1"},{label:"2",value:"2",options:[{label:"5",value:"5"}]}],value:e,onChange:h=>{m(h.map(K=>K.value)),(0,I.XI)("onChange")(h)},prefix:B(a.icon)},a)))},G=a=>{const[e,m]=(0,l.useState)([]);return l.createElement("div",{style:{maxWidth:"450px"}},l.createElement(C.KF,s({options:(0,D.Q)(),value:e,onChange:h=>{m(h),(0,I.XI)("onChange")(h)},prefix:B(a.icon)},a)))};G.args={isClearable:!1,closeMenuOnSelect:!1,maxVisibleValues:5,noMultiValueWrap:!1};const Z=a=>{const[e,m]=(0,l.useState)();return l.createElement(C.Iv,s({loadOptions:nt,defaultOptions:!0,value:e,onChange:h=>{m(h),(0,I.XI)("onChange")(h)},prefix:B(a.icon)},a))};Z.args={allowCustomValue:!1};const oe=a=>{const[e,m]=(0,l.useState)();return l.createElement(C.DW,s({loadOptions:nt,defaultOptions:!0,value:e,onChange:h=>{m(h),(0,I.XI)("onChange")(h)},prefix:B(a.icon)},a))},J=a=>{const[e,m]=(0,l.useState)();return l.createElement(l.Fragment,null,l.createElement("div",{style:{width:"100%",height:"95vh",display:"flex",alignItems:"flex-end"}},l.createElement(C.l6,s({options:(0,D.Q)(),value:e,onChange:h=>{m(h),(0,I.XI)("onChange")(h)},prefix:B(a.icon)},a))))};J.args={menuPlacement:i};const le=a=>{const[e,m]=(0,l.useState)();return l.createElement(l.Fragment,null,l.createElement("div",{style:{width:"100%"}},l.createElement(C.l6,O(s({options:(0,D.Q)(),value:e,onChange:h=>{m(h),(0,I.XI)("onChange")(h)},prefix:B(a.icon)},a),{width:"auto"}))))},q=a=>{const[e,m]=(0,l.useState)(),[h,K]=(0,l.useState)([]),lt=(0,D.Q)();return l.createElement(l.Fragment,null,l.createElement(C.l6,s({options:[...lt,...h],value:e,onChange:ee=>{m(ee),(0,I.XI)("onChange")(ee)},allowCustomValue:a.allowCustomValue,onCreateOption:ee=>{const at={value:ee,label:ee};K([...h,at]),m(at),(0,I.XI)("onCreateOption")(ee)},prefix:B(a.icon)},a)))};q.args={allowCustomValue:!0};var ot=rt;ne.parameters=O(s({},ne.parameters),{docs:O(s({},(me=ne.parameters)==null?void 0:me.docs),{source:s({originalSource:`args => {
  const [value, setValue] = useState<SelectableValue<string>>();
  return <>
      <Select options={generateOptions()} value={value} onChange={v => {
      setValue(v);
      action('onChange')(v);
    }} {...args} />
    </>;
}`},(ge=(fe=ne.parameters)==null?void 0:fe.docs)==null?void 0:ge.source)})}),ae.parameters=O(s({},ae.parameters),{docs:O(s({},(he=ae.parameters)==null?void 0:he.docs),{source:s({originalSource:`args => {
  const [value, setValue] = useState<SelectableValue<string>>();
  return <>
      <Select options={generateThousandsOfOptions()} virtualized value={value} onChange={v => {
      setValue(v);
      action('onChange')(v);
    }} {...args} />
    </>;
}`},(ye=(_e=ae.parameters)==null?void 0:_e.docs)==null?void 0:ye.source)})}),L.parameters=O(s({},L.parameters),{docs:O(s({},(be=L.parameters)==null?void 0:be.docs),{source:s({originalSource:`args => {
  const [value, setValue] = useState<string>();
  return <>
      <Select options={generateOptions()} value={value} onChange={v => {
      setValue(v.value);
      action('onChange')(v);
    }} prefix={getPrefix(args.icon)} {...args} />
    </>;
}`},(xe=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:xe.source),description:s({story:"Uses plain values instead of SelectableValue<T>"},(Ce=(Oe=L.parameters)==null?void 0:Oe.docs)==null?void 0:Ce.description)})}),W.parameters=O(s({},W.parameters),{docs:O(s({},(Ee=W.parameters)==null?void 0:Ee.docs),{source:s({originalSource:`args => {
  // TODO this is not working with new Select

  const [value, setValue] = useState<number>();
  const options = [{
    label: 'Basic option',
    value: 0
  }, {
    label: 'Option with description',
    value: 1,
    description: 'this is a description'
  }, {
    label: 'Option with description and image',
    value: 2,
    description: 'This is a very elaborate description, describing all the wonders in the world.',
    imgUrl: 'https://placekitten.com/40/40'
  }];
  return <>
      <Select options={options} value={value} onChange={v => {
      setValue(v.value);
      action('onChange')(v);
    }} prefix={getPrefix(args.icon)} {...args} />
    </>;
}`},(Pe=(we=W.parameters)==null?void 0:we.docs)==null?void 0:Pe.source),description:s({story:"Uses plain values instead of SelectableValue<T>"},(Ie=(je=W.parameters)==null?void 0:je.docs)==null?void 0:Ie.description)})}),U.parameters=O(s({},U.parameters),{docs:O(s({},(Ve=U.parameters)==null?void 0:Ve.docs),{source:s({originalSource:`args => {
  const [value, setValue] = useState<string[]>();
  return <>
      <MultiSelect options={generateOptions()} value={value} onChange={v => {
      setValue(v.map(v => v.value!));
    }} prefix={getPrefix(args.icon)} {...args} />
    </>;
}`},(Ae=(Te=U.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source),description:s({story:"Uses plain values instead of SelectableValue<T>"},(Re=(Me=U.parameters)==null?void 0:Me.docs)==null?void 0:Re.description)})}),re.parameters=O(s({},re.parameters),{docs:O(s({},(ke=re.parameters)==null?void 0:ke.docs),{source:s({originalSource:`args => {
  const [value, setValue] = useState<string[]>();
  return <>
      <MultiSelect options={[{
      label: '1',
      value: '1'
    }, {
      label: '2',
      value: '2',
      options: [{
        label: '5',
        value: '5'
      }]
    }]} value={value} onChange={v => {
      setValue(v.map(v => v.value!));
      action('onChange')(v);
    }} prefix={getPrefix(args.icon)} {...args} />
    </>;
}`},(Be=(De=re.parameters)==null?void 0:De.docs)==null?void 0:Be.source)})}),G.parameters=O(s({},G.parameters),{docs:O(s({},(Le=G.parameters)==null?void 0:Le.docs),{source:s({originalSource:`args => {
  const [value, setValue] = useState<Array<SelectableValue<string>>>([]);
  return <div style={{
    maxWidth: '450px'
  }}>
      <MultiSelect options={generateOptions()} value={value} onChange={v => {
      setValue(v);
      action('onChange')(v);
    }} prefix={getPrefix(args.icon)} {...args} />
    </div>;
}`},(Ue=(We=G.parameters)==null?void 0:We.docs)==null?void 0:Ue.source)})}),Z.parameters=O(s({},Z.parameters),{docs:O(s({},(Ne=Z.parameters)==null?void 0:Ne.docs),{source:s({originalSource:`args => {
  const [value, setValue] = useState<Array<SelectableValue<string>>>();
  return <AsyncMultiSelect loadOptions={loadAsyncOptions} defaultOptions value={value} onChange={v => {
    setValue(v);
    action('onChange')(v);
  }} prefix={getPrefix(args.icon)} {...args} />;
}`},(ze=(Ke=Z.parameters)==null?void 0:Ke.docs)==null?void 0:ze.source)})}),oe.parameters=O(s({},oe.parameters),{docs:O(s({},(Fe=oe.parameters)==null?void 0:Fe.docs),{source:s({originalSource:`args => {
  const [value, setValue] = useState<SelectableValue<string>>();
  return <AsyncSelect loadOptions={loadAsyncOptions} defaultOptions value={value} onChange={v => {
    setValue(v);
    action('onChange')(v);
  }} prefix={getPrefix(args.icon)} {...args} />;
}`},(Xe=(He=oe.parameters)==null?void 0:He.docs)==null?void 0:Xe.source)})}),J.parameters=O(s({},J.parameters),{docs:O(s({},(Ye=J.parameters)==null?void 0:Ye.docs),{source:s({originalSource:`args => {
  const [value, setValue] = useState<SelectableValue<string>>();
  return <>
      <div style={{
      width: '100%',
      height: '95vh',
      display: 'flex',
      alignItems: 'flex-end'
    }}>
        <Select options={generateOptions()} value={value} onChange={v => {
        setValue(v);
        action('onChange')(v);
      }} prefix={getPrefix(args.icon)} {...args} />
      </div>
    </>;
}`},(Qe=($e=J.parameters)==null?void 0:$e.docs)==null?void 0:Qe.source)})}),le.parameters=O(s({},le.parameters),{docs:O(s({},(Ge=le.parameters)==null?void 0:Ge.docs),{source:s({originalSource:`args => {
  const [value, setValue] = useState<SelectableValue<string>>();
  return <>
      <div style={{
      width: '100%'
    }}>
        <Select options={generateOptions()} value={value} onChange={v => {
        setValue(v);
        action('onChange')(v);
      }} prefix={getPrefix(args.icon)} {...args} width="auto" />
      </div>
    </>;
}`},(Je=(Ze=le.parameters)==null?void 0:Ze.docs)==null?void 0:Je.source)})}),q.parameters=O(s({},q.parameters),{docs:O(s({},(qe=q.parameters)==null?void 0:qe.docs),{source:s({originalSource:`args => {
  const [value, setValue] = useState<SelectableValue<string>>();
  const [customOptions, setCustomOptions] = useState<Array<SelectableValue<string>>>([]);
  const options = generateOptions();
  return <>
      <Select options={[...options, ...customOptions]} value={value} onChange={v => {
      setValue(v);
      action('onChange')(v);
    }} allowCustomValue={args.allowCustomValue} onCreateOption={v => {
      const customValue: SelectableValue<string> = {
        value: v,
        label: v
      };
      setCustomOptions([...customOptions, customValue]);
      setValue(customValue);
      action('onCreateOption')(v);
    }} prefix={getPrefix(args.icon)} {...args} />
    </>;
}`},(tt=(et=q.parameters)==null?void 0:et.docs)==null?void 0:tt.source)})});try{L.displayName="BasicSelectPlainValue",L.__docgenInfo={description:"Uses plain values instead of SelectableValue<T>",displayName:"BasicSelectPlainValue",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.story.tsx#BasicSelectPlainValue"]={docgenInfo:L.__docgenInfo,name:"BasicSelectPlainValue",path:"src/components/Select/Select.story.tsx#BasicSelectPlainValue"})}catch{}try{W.displayName="SelectWithOptionDescriptions",W.__docgenInfo={description:"Uses plain values instead of SelectableValue<T>",displayName:"SelectWithOptionDescriptions",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.story.tsx#SelectWithOptionDescriptions"]={docgenInfo:W.__docgenInfo,name:"SelectWithOptionDescriptions",path:"src/components/Select/Select.story.tsx#SelectWithOptionDescriptions"})}catch{}try{U.displayName="MultiPlainValue",U.__docgenInfo={description:"Uses plain values instead of SelectableValue<T>",displayName:"MultiPlainValue",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Select/Select.story.tsx#MultiPlainValue"]={docgenInfo:U.__docgenInfo,name:"MultiPlainValue",path:"src/components/Select/Select.story.tsx#MultiPlainValue"})}catch{}},"../grafana-data/src/types/icon.ts":function(A,y,n){n.d(y,{Uo:function(){return x},az:function(){return c},n6:function(){return b}});const c={google:!0,microsoft:!0,github:!0,gitlab:!0,okta:!0,discord:!0,hipchat:!0,amazon:!0,"google-hangouts-alt":!0,pagerduty:!0,line:!0,anchor:!0,"adjust-circle":!0,"angle-double-down":!0,"angle-double-right":!0,"angle-double-up":!0,"angle-down":!0,"angle-left":!0,"angle-right":!0,"angle-up":!0,"align-left":!0,"align-right":!0,"application-observability":!0,apps:!0,"archive-alt":!0,arrow:!0,"arrow-down":!0,"arrow-from-right":!0,"arrow-left":!0,"arrow-random":!0,"arrow-right":!0,"arrow-to-right":!0,"arrow-up":!0,"arrows-h":!0,"arrows-v":!0,asserts:!0,"expand-arrows":!0,at:!0,ai:!0,backward:!0,bars:!0,bell:!0,"bell-slash":!0,bolt:!0,book:!0,bookmark:!0,"book-open":!0,"brackets-curly":!0,bug:!0,building:!0,"calculator-alt":!0,"calendar-alt":!0,"calendar-slash":!0,camera:!0,capture:!0,"channel-add":!0,"chart-line":!0,check:!0,"check-circle":!0,"check-square":!0,circle:!0,"circle-mono":!0,"clipboard-alt":!0,"clock-nine":!0,cloud:!0,"cloud-download":!0,"cloud-upload":!0,"code-branch":!0,cog:!0,columns:!0,"comment-alt":!0,"comment-alt-message":!0,"comment-alt-share":!0,"comments-alt":!0,compass:!0,copy:!0,"corner-down-right-alt":!0,"create-dashboard":!0,"credit-card":!0,crosshair:!0,cube:!0,dashboard:!0,database:!0,"dice-three":!0,docker:!0,"document-info":!0,"document-layout-left":!0,"download-alt":!0,draggabledots:!0,edit:!0,"ellipsis-v":!0,enter:!0,envelope:!0,"exchange-alt":!0,"exclamation-triangle":!0,"exclamation-circle":!0,"external-link-alt":!0,eye:!0,"eye-slash":!0,"ellipsis-h":!0,"fa fa-spinner":!0,favorite:!0,"file-alt":!0,"file-blank":!0,"file-copy-alt":!0,"file-download":!0,"file-edit-alt":!0,"file-landscape-alt":!0,filter:!0,flip:!0,folder:!0,font:!0,fire:!0,"folder-open":!0,"folder-plus":!0,"folder-upload":!0,forward:!0,"frontend-observability":!0,"gf-bar-alignment-after":!0,"gf-bar-alignment-before":!0,"gf-bar-alignment-center":!0,"gf-glue":!0,"gf-grid":!0,"gf-interpolation-linear":!0,"gf-interpolation-smooth":!0,"gf-interpolation-step-after":!0,"gf-interpolation-step-before":!0,"gf-landscape":!0,"gf-layout-simple":!0,"gf-logs":!0,"gf-ml":!0,"gf-movepane-left":!0,"gf-movepane-right":!0,"gf-portrait":!0,"gf-service-account":!0,"gf-show-context":!0,"gf-pin":!0,"gf-prometheus":!0,"gf-traces":!0,globe:!0,grafana:!0,"graph-bar":!0,heart:!0,"heart-rate":!0,"heart-break":!0,history:!0,"history-alt":!0,home:!0,"home-alt":!0,"horizontal-align-center":!0,"horizontal-align-left":!0,"horizontal-align-right":!0,hourglass:!0,import:!0,info:!0,"info-circle":!0,k6:!0,"key-skeleton-alt":!0,keyboard:!0,"layer-group":!0,"layers-alt":!0,"library-panel":!0,"line-alt":!0,link:!0,"list-ui-alt":!0,"list-ul":!0,"list-ol":!0,lock:!0,"map-marker":!0,"map-marker-plus":!0,"map-marker-minus":!0,message:!0,minus:!0,"minus-circle":!0,"mobile-android":!0,monitor:!0,palette:!0,"panel-add":!0,paragraph:!0,"pathfinder-unite":!0,pause:!0,pen:!0,percentage:!0,play:!0,plug:!0,plus:!0,"plus-circle":!0,"plus-square":!0,power:!0,"presentation-play":!0,process:!0,"question-circle":!0,"record-audio":!0,repeat:!0,rocket:!0,"ruler-combined":!0,save:!0,search:!0,"search-minus":!0,"search-plus":!0,"share-alt":!0,shield:!0,"shield-exclamation":!0,signal:!0,signin:!0,signout:!0,sitemap:!0,slack:!0,"sliders-v-alt":!0,spinner:!0,"sort-amount-down":!0,"sort-amount-up":!0,"square-shape":!0,star:!0,"step-backward":!0,stopwatch:!0,"stopwatch-slash":!0,sync:!0,"sync-slash":!0,table:!0,"table-collapse-all":!0,"table-expand-all":!0,"tag-alt":!0,"telegram-alt":!0,"text-fields":!0,"thumbs-up":!0,times:!0,"times-circle":!0,"toggle-on":!0,"toggle-off":!0,"trash-alt":!0,unarchive:!0,unlock:!0,upload:!0,user:!0,"users-alt":!0,"user-arrows":!0,"vertical-align-bottom":!0,"vertical-align-center":!0,"vertical-align-top":!0,"web-section-alt":!0,"wrap-text":!0,rss:!0,x:!0};function b(o){return!o||typeof o!="string"?!1:o in c}function x(o){if(b(o))return o}},"./src/components/Forms/commonStyles.ts":function(A,y,n){n.d(y,{SM:function(){return f},Xb:function(){return o},g$:function(){return i},gm:function(){return x},lH:function(){return g}});var c=n("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),b=n("./src/themes/mixins.ts");const x=u=>(0,c.AH)({"&:focus":(0,b.Hi)(u)}),o=(u,S=!1)=>{const P=S?u.colors.error.border:u.components.input.borderColor,M=S?u.colors.error.shade:u.components.input.borderHover,j=u.components.input.background,V=u.components.input.text,R=u.isDark?"#2e2f35":"#bab4ca";return(0,c.cx)(i(u),(0,c.AH)({background:j,lineHeight:u.typography.body.lineHeight,fontSize:u.typography.size.md,color:V,border:`1px solid ${P}`,"&:-webkit-autofill, &:-webkit-autofill:hover":{boxShadow:`inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px ${j}!important`,WebkitTextFillColor:`${V} !important`,borderColor:R},"&:-webkit-autofill:focus":{boxShadow:`0 0 0 2px ${u.colors.background.primary}, 0 0 0px 4px ${u.colors.primary.main}, inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px ${j}!important`,WebkitTextFillColor:`${V} !important`},"&:hover":{borderColor:M},"&:focus":{outline:"none"},"&:disabled":{backgroundColor:u.colors.action.disabledBackground,color:u.colors.action.disabledText,border:`1px solid ${u.colors.action.disabledBackground}`,"&:hover":{borderColor:P}},"&::placeholder":{color:u.colors.text.disabled,opacity:1}}))},i=u=>(0,c.AH)({padding:u.spacing(0,1,0,1)}),g=()=>({sm:(0,c.AH)({width:p("sm")}),md:(0,c.AH)({width:p("md")}),lg:(0,c.AH)({width:p("lg")}),auto:(0,c.AH)({width:p("auto")})}),p=u=>{switch(u){case"sm":return"200px";case"md":return"320px";case"lg":return"580px";case"auto":default:return"auto"}};function f(u,S){switch(u){case"sm":return{padding:1,fontSize:S.typography.size.sm,height:S.components.height.sm};case"lg":return{padding:3,fontSize:S.typography.size.lg,height:S.components.height.lg};case"md":default:return{padding:2,fontSize:S.typography.size.md,height:S.components.height.md}}}},"./src/components/Icon/Icon.tsx":function(A,y,n){n.d(y,{I:function(){return R}});var c=n("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),b=n("../../node_modules/react/index.js"),x=n("../../node_modules/react-inlinesvg/esm/index.js"),o=n("../grafana-data/src/types/icon.ts"),i=n("./src/themes/ThemeContext.tsx"),g=n("./src/components/Icon/utils.ts"),p=Object.defineProperty,f=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,P=(_,v,r)=>v in _?p(_,v,{enumerable:!0,configurable:!0,writable:!0,value:r}):_[v]=r,M=(_,v)=>{for(var r in v||(v={}))u.call(v,r)&&P(_,r,v[r]);if(f)for(var r of f(v))S.call(v,r)&&P(_,r,v[r]);return _},j=(_,v)=>{var r={};for(var d in _)u.call(_,d)&&v.indexOf(d)<0&&(r[d]=_[d]);if(_!=null&&f)for(var d of f(_))v.indexOf(d)<0&&S.call(_,d)&&(r[d]=_[d]);return r};const V=_=>({icon:(0,c.AH)({display:"inline-block",fill:"currentColor",flexShrink:0,label:"Icon",lineHeight:0,verticalAlign:"middle"}),orange:(0,c.AH)({fill:_.v1.palette.orange})}),R=b.forwardRef((_,v)=>{var r=_,{size:d="md",type:E="default",name:T,className:z,style:w,title:k=""}=r,I=j(r,["size","type","name","className","style","title"]);const l=(0,i.of)(V);(0,o.n6)(T)||console.warn("Icon component passed an invalid icon name",T);const F=T==="fa fa-spinner"?"spinner":T,C=(0,g.Wj)(),H=(0,g.cs)(d),N=H,t=T.startsWith("gf-bar-align")?16:T.startsWith("gf-interp")?30:H,X=(0,g.Xi)(F,E),Y=`${C}${X}/${F}.svg`,$=(0,c.cx)(l.icon,z,E==="mono"?{[l.orange]:T==="favorite"}:"",F==="spinner"&&"fa-spin");return b.createElement(x.A,M({innerRef:v,src:Y,width:t,height:N,title:k,className:$,style:w},I))});R.displayName="Icon";try{R.displayName="Icon",R.__docgenInfo={description:"",displayName:"Icon",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"play"'},{value:'"google"'},{value:'"microsoft"'},{value:'"github"'},{value:'"gitlab"'},{value:'"okta"'},{value:'"discord"'},{value:'"hipchat"'},{value:'"amazon"'},{value:'"google-hangouts-alt"'},{value:'"pagerduty"'},{value:'"line"'},{value:'"anchor"'},{value:'"adjust-circle"'},{value:'"angle-double-down"'},{value:'"angle-double-right"'},{value:'"angle-double-up"'},{value:'"angle-down"'},{value:'"angle-left"'},{value:'"angle-right"'},{value:'"angle-up"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"application-observability"'},{value:'"apps"'},{value:'"archive-alt"'},{value:'"arrow"'},{value:'"arrow-down"'},{value:'"arrow-from-right"'},{value:'"arrow-left"'},{value:'"arrow-random"'},{value:'"arrow-right"'},{value:'"arrow-to-right"'},{value:'"arrow-up"'},{value:'"arrows-h"'},{value:'"arrows-v"'},{value:'"asserts"'},{value:'"expand-arrows"'},{value:'"at"'},{value:'"ai"'},{value:'"backward"'},{value:'"bars"'},{value:'"bell"'},{value:'"bell-slash"'},{value:'"bolt"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"brackets-curly"'},{value:'"bug"'},{value:'"building"'},{value:'"calculator-alt"'},{value:'"calendar-alt"'},{value:'"calendar-slash"'},{value:'"camera"'},{value:'"capture"'},{value:'"channel-add"'},{value:'"chart-line"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"circle"'},{value:'"circle-mono"'},{value:'"clipboard-alt"'},{value:'"clock-nine"'},{value:'"cloud"'},{value:'"cloud-download"'},{value:'"cloud-upload"'},{value:'"code-branch"'},{value:'"cog"'},{value:'"columns"'},{value:'"comment-alt"'},{value:'"comment-alt-message"'},{value:'"comment-alt-share"'},{value:'"comments-alt"'},{value:'"compass"'},{value:'"copy"'},{value:'"corner-down-right-alt"'},{value:'"create-dashboard"'},{value:'"credit-card"'},{value:'"crosshair"'},{value:'"cube"'},{value:'"dashboard"'},{value:'"database"'},{value:'"dice-three"'},{value:'"docker"'},{value:'"document-info"'},{value:'"document-layout-left"'},{value:'"download-alt"'},{value:'"draggabledots"'},{value:'"edit"'},{value:'"ellipsis-v"'},{value:'"enter"'},{value:'"envelope"'},{value:'"exchange-alt"'},{value:'"exclamation-triangle"'},{value:'"exclamation-circle"'},{value:'"external-link-alt"'},{value:'"eye"'},{value:'"eye-slash"'},{value:'"ellipsis-h"'},{value:'"fa fa-spinner"'},{value:'"favorite"'},{value:'"file-alt"'},{value:'"file-blank"'},{value:'"file-copy-alt"'},{value:'"file-download"'},{value:'"file-edit-alt"'},{value:'"file-landscape-alt"'},{value:'"filter"'},{value:'"flip"'},{value:'"folder"'},{value:'"font"'},{value:'"fire"'},{value:'"folder-open"'},{value:'"folder-plus"'},{value:'"folder-upload"'},{value:'"forward"'},{value:'"frontend-observability"'},{value:'"gf-bar-alignment-after"'},{value:'"gf-bar-alignment-before"'},{value:'"gf-bar-alignment-center"'},{value:'"gf-glue"'},{value:'"gf-grid"'},{value:'"gf-interpolation-linear"'},{value:'"gf-interpolation-smooth"'},{value:'"gf-interpolation-step-after"'},{value:'"gf-interpolation-step-before"'},{value:'"gf-landscape"'},{value:'"gf-layout-simple"'},{value:'"gf-logs"'},{value:'"gf-ml"'},{value:'"gf-movepane-left"'},{value:'"gf-movepane-right"'},{value:'"gf-portrait"'},{value:'"gf-service-account"'},{value:'"gf-show-context"'},{value:'"gf-pin"'},{value:'"gf-prometheus"'},{value:'"gf-traces"'},{value:'"globe"'},{value:'"grafana"'},{value:'"graph-bar"'},{value:'"heart"'},{value:'"heart-rate"'},{value:'"heart-break"'},{value:'"history"'},{value:'"history-alt"'},{value:'"home"'},{value:'"home-alt"'},{value:'"horizontal-align-center"'},{value:'"horizontal-align-left"'},{value:'"horizontal-align-right"'},{value:'"hourglass"'},{value:'"import"'},{value:'"info"'},{value:'"info-circle"'},{value:'"k6"'},{value:'"key-skeleton-alt"'},{value:'"keyboard"'},{value:'"layer-group"'},{value:'"layers-alt"'},{value:'"library-panel"'},{value:'"line-alt"'},{value:'"link"'},{value:'"list-ui-alt"'},{value:'"list-ul"'},{value:'"list-ol"'},{value:'"lock"'},{value:'"map-marker"'},{value:'"map-marker-plus"'},{value:'"map-marker-minus"'},{value:'"message"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"mobile-android"'},{value:'"monitor"'},{value:'"palette"'},{value:'"panel-add"'},{value:'"paragraph"'},{value:'"pathfinder-unite"'},{value:'"pause"'},{value:'"pen"'},{value:'"percentage"'},{value:'"plug"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-square"'},{value:'"power"'},{value:'"presentation-play"'},{value:'"process"'},{value:'"question-circle"'},{value:'"record-audio"'},{value:'"repeat"'},{value:'"rocket"'},{value:'"ruler-combined"'},{value:'"save"'},{value:'"search"'},{value:'"search-minus"'},{value:'"search-plus"'},{value:'"share-alt"'},{value:'"shield"'},{value:'"shield-exclamation"'},{value:'"signal"'},{value:'"signin"'},{value:'"signout"'},{value:'"sitemap"'},{value:'"slack"'},{value:'"sliders-v-alt"'},{value:'"spinner"'},{value:'"sort-amount-down"'},{value:'"sort-amount-up"'},{value:'"square-shape"'},{value:'"star"'},{value:'"step-backward"'},{value:'"stopwatch"'},{value:'"stopwatch-slash"'},{value:'"sync"'},{value:'"sync-slash"'},{value:'"table"'},{value:'"table-collapse-all"'},{value:'"table-expand-all"'},{value:'"tag-alt"'},{value:'"telegram-alt"'},{value:'"text-fields"'},{value:'"thumbs-up"'},{value:'"times"'},{value:'"times-circle"'},{value:'"toggle-on"'},{value:'"toggle-off"'},{value:'"trash-alt"'},{value:'"unarchive"'},{value:'"unlock"'},{value:'"upload"'},{value:'"user"'},{value:'"users-alt"'},{value:'"user-arrows"'},{value:'"vertical-align-bottom"'},{value:'"vertical-align-center"'},{value:'"vertical-align-top"'},{value:'"web-section-alt"'},{value:'"wrap-text"'},{value:'"rss"'},{value:'"x"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"default"'},{value:'"mono"'}]}},title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:R.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch{}},"./src/components/Icon/utils.ts":function(A,y,n){n.d(y,{Wj:function(){return i},Xi:function(){return b},cs:function(){return x}});const c=["grafana","favorite","heart-break","heart","panel-add","library-panel","circle-mono"];function b(g,p){return g?.startsWith("gf-")?"custom":c.includes(g)?"mono":p==="default"?"unicons":p==="solid"?"solid":"mono"}function x(g){switch(g){case"xs":return 12;case"sm":return 14;case"md":return 16;case"lg":return 18;case"xl":return 24;case"xxl":return 36;case"xxxl":return 48}}let o;function i(){if(o)return o;const g=typeof window<"u"&&window.__grafana_public_path__;return g?o=g+"img/icons/":o="public/img/icons/",o}},"./src/components/Portal/Portal.tsx":function(A,y,n){n.d(y,{ZL:function(){return j},gF:function(){return V}});var c=n("../../node_modules/react/index.js"),b=n("../../node_modules/react-dom/index.js"),x=n("./src/themes/ThemeContext.tsx"),o=Object.defineProperty,i=Object.defineProperties,g=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,S=(v,r,d)=>r in v?o(v,r,{enumerable:!0,configurable:!0,writable:!0,value:d}):v[r]=d,P=(v,r)=>{for(var d in r||(r={}))f.call(r,d)&&S(v,d,r[d]);if(p)for(var d of p(r))u.call(r,d)&&S(v,d,r[d]);return v},M=(v,r)=>i(v,g(r));function j(v){const{children:r,className:d,root:E,forwardedRef:T}=v,z=(0,x.$j)(),w=(0,c.useRef)(null),k=E??V();return w.current||(w.current=document.createElement("div"),d&&(w.current.className=d),w.current.style.position="relative",w.current.style.zIndex=`${z.zIndex.portal}`),(0,c.useLayoutEffect)(()=>(w.current&&k.appendChild(w.current),()=>{w.current&&k.removeChild(w.current)}),[k]),b.createPortal(c.createElement("div",{ref:T},r),w.current)}function V(){var v;return(v=window.document.getElementById("grafana-portal-container"))!=null?v:document.body}function R(){return React.createElement("div",{id:"grafana-portal-container"})}const _=c.forwardRef((v,r)=>c.createElement(j,M(P({},v),{forwardedRef:r})));_.displayName="RefForwardingPortal";try{j.displayName="RefForwardingPortal",j.__docgenInfo={description:"",displayName:"RefForwardingPortal",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},root:{defaultValue:null,description:"",name:"root",required:!1,type:{name:"HTMLElement"}},forwardedRef:{defaultValue:null,description:"",name:"forwardedRef",required:!1,type:{name:"ForwardedRef<HTMLDivElement>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Portal/Portal.tsx#RefForwardingPortal"]={docgenInfo:_.__docgenInfo,name:"RefForwardingPortal",path:"src/components/Portal/Portal.tsx#RefForwardingPortal"})}catch{}},"./src/components/Select/mockOptions.tsx":function(A,y,n){n.d(y,{Q:function(){return x},W:function(){return o}});var c=n("../../node_modules/lodash/lodash.js"),b=n.n(c);const x=(i=!1)=>["Sharilyn Markowitz","Naomi Striplin","Beau Bevel","Garrett Starkes","Hildegarde Pedro","Gudrun Seyler","Eboni Raines","Hye Felix","Chau Brito","Heidy Zook","Karima Husain","Virgil Mckinny","Kaley Dodrill","Sharan Ruf","Edgar Loveland","Judie Sanger","Season Bundrick","Ok Vicente","Garry Spitz","Han Harnish","A very long value that is very long and takes up a lot of space and should be truncated preferrably if it does not fit"].map(p=>({value:(0,c.kebabCase)(p),label:p,description:i?`This is a description of ${p}`:void 0})),o=()=>new Array(1e4).fill(null).map((g,p)=>({value:String(p),label:"Option "+p,description:"This is option number "+p}));try{x.displayName="generateOptions",x.__docgenInfo={description:"",displayName:"generateOptions",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Select/mockOptions.tsx#generateOptions"]={docgenInfo:x.__docgenInfo,name:"generateOptions",path:"src/components/Select/mockOptions.tsx#generateOptions"})}catch{}},"./src/components/Tooltip/Tooltip.tsx":function(A,y,n){n.d(y,{m:function(){return _}});var c=n("../../node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),b=n("../../node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),x=n("../../node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),o=n("../../node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),i=n("../../node_modules/react/index.js"),g=n("../grafana-e2e-selectors/src/selectors/index.ts"),p=n("./src/themes/ThemeContext.tsx"),f=n("./src/utils/tooltipUtils.ts"),u=n("./src/components/Portal/Portal.tsx"),S=Object.defineProperty,P=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,V=(r,d,E)=>d in r?S(r,d,{enumerable:!0,configurable:!0,writable:!0,value:E}):r[d]=E,R=(r,d)=>{for(var E in d||(d={}))M.call(d,E)&&V(r,E,d[E]);if(P)for(var E of P(d))j.call(d,E)&&V(r,E,d[E]);return r};const _=i.forwardRef(({children:r,theme:d,interactive:E,show:T,placement:z,content:w},k)=>{const I=(0,i.useRef)(null),[l,F]=(0,i.useState)(T),C=T??l,H=[(0,c.cY)(8),(0,b.UU)({fallbackAxisSideDirection:"end",crossAxis:!1,boundary:document.body}),(0,b.BN)(),(0,x.UE)({element:I})],{context:N,refs:t,floatingStyles:X}=(0,o.we)({open:C,placement:(0,f.O)(z),onOpenChange:F,middleware:H,whileElementsMounted:b.ll}),Y=(0,i.useId)(),$=(0,o.Mk)(N,{delay:{close:E?100:0},move:!1}),se=(0,o.iQ)(N),ie=(0,o.s9)(N),{getReferenceProps:D,getFloatingProps:ue}=(0,o.bv)([ie,$,se]),ce=typeof w=="function",te=(0,p.of)(v)[d??"info"],de=(0,i.useCallback)(Q=>{t.setReference(Q),typeof k=="function"?k(Q):k&&(k.current=Q)},[k,t]),pe="aria-label"in r.props&&r.props["aria-label"]===w;return i.createElement(i.Fragment,null,i.cloneElement(r,R({ref:de,tabIndex:0,"aria-describedby":!pe&&C?Y:void 0},D())),C&&i.createElement(u.ZL,null,i.createElement("div",R({ref:t.setFloating,style:X},ue()),i.createElement(o.ie,{className:te.arrow,ref:I,context:N}),i.createElement("div",{"data-testid":g.Tp.components.Tooltip.container,id:Y,role:"tooltip",className:te.container},typeof w=="string"&&w,i.isValidElement(w)&&i.cloneElement(w),ce&&w({})))))});_.displayName="Tooltip";const v=r=>{const d=(0,f.f)(r,r.components.tooltip.background,r.components.tooltip.background,r.components.tooltip.text,{topBottom:.5,rightLeft:1}),E=(0,f.f)(r,r.colors.error.main,r.colors.error.main,r.colors.error.contrastText,{topBottom:.5,rightLeft:1});return{info:d,["info-alt"]:d,error:E}};try{_.displayName="Tooltip",_.__docgenInfo={description:"",displayName:"Tooltip",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"error"'},{value:'"info-alt"'}]}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"bottom"'},{value:'"top"'},{value:'"right"'},{value:'"left"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"auto-start"'},{value:'"auto-end"'}]}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"PopoverContent"}},interactive:{defaultValue:null,description:"Set to true if you want the tooltip to stay long enough so the user can move mouse over content to select text or click a link",name:"interactive",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:_.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip/Tooltip.tsx#Tooltip"})}catch{}},"./src/utils/tooltipUtils.ts":function(A,y,n){n.d(y,{O:function(){return b},f:function(){return x}});var c=n("../../node_modules/@emotion/css/dist/emotion-css.esm.js");function b(o){switch(o){case"auto":return"bottom";case"auto-start":return"bottom-start";case"auto-end":return"bottom-end";default:return o??"bottom"}}function x(o,i,g,p,f){return{arrow:(0,c.AH)({fill:i}),container:(0,c.AH)({backgroundColor:i,borderRadius:o.shape.radius.default,border:`1px solid ${g}`,boxShadow:o.shadows.z2,color:p,fontSize:o.typography.bodySmall.fontSize,padding:o.spacing(f.topBottom,f.rightLeft),transition:"opacity 0.3s",zIndex:o.zIndex.tooltip,maxWidth:"400px",overflowWrap:"break-word","&[data-popper-interactive='false']":{pointerEvents:"none"}}),headerClose:(0,c.AH)({color:o.colors.text.secondary,position:"absolute",right:o.spacing(1),top:o.spacing(1.5),backgroundColor:"transparent",border:0}),header:(0,c.AH)({paddingTop:o.spacing(1),paddingBottom:o.spacing(2)}),body:(0,c.AH)({paddingTop:o.spacing(1),paddingBottom:o.spacing(1)}),footer:(0,c.AH)({paddingTop:o.spacing(2),paddingBottom:o.spacing(1)})}}}}]);
