"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[1039],{"./src/components/Slider/RangeSlider.story.tsx":function(le,T,i){i.r(T),i.d(T,{Basic:function(){return R},Vertical:function(){return E},default:function(){return Ee}});var n=i("../../node_modules/react/index.js"),V=i("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),$=i("../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),a=i("../../node_modules/rc-slider/es/index.js"),S=i("./src/themes/ThemeContext.tsx"),D=i("../../node_modules/classnames/index.js"),N=i.n(D);function H(t){var e=t.children,r=t.prefixCls,o=t.id,l=t.overlayInnerStyle,s=t.className,u=t.style;return n.createElement("div",{className:N()("".concat(r,"-content"),s),style:u},n.createElement("div",{className:"".concat(r,"-inner"),id:o,role:"tooltip",style:l},typeof e=="function"?e():e))}function P(){return P=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},P.apply(this,arguments)}function v(t){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(t)}function B(t,e){if(v(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var o=r.call(t,e||"default");if(v(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function L(t){var e=B(t,"string");return v(e)=="symbol"?e:e+""}function ae(t,e,r){return e=L(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function F(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),r.push.apply(r,o)}return r}function ie(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?F(Object(r),!0).forEach(function(o){ae(t,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(r,o))})}return t}function se(t,e){if(t==null)return{};var r={},o=Object.keys(t),l,s;for(s=0;s<o.length;s++)l=o[s],!(e.indexOf(l)>=0)&&(r[l]=t[l]);return r}function ce(t,e){if(t==null)return{};var r=se(t,e),o,l;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(l=0;l<s.length;l++)o=s[l],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var de=i("../../node_modules/@rc-component/trigger/es/index.js"),w={shiftX:64,adjustY:1},_={adjustX:1,shiftY:!0},d=[0,0],ue={left:{points:["cr","cl"],overflow:_,offset:[-4,0],targetOffset:d},right:{points:["cl","cr"],overflow:_,offset:[4,0],targetOffset:d},top:{points:["bc","tc"],overflow:w,offset:[0,-4],targetOffset:d},bottom:{points:["tc","bc"],overflow:w,offset:[0,4],targetOffset:d},topLeft:{points:["bl","tl"],overflow:w,offset:[0,-4],targetOffset:d},leftTop:{points:["tr","tl"],overflow:_,offset:[-4,0],targetOffset:d},topRight:{points:["br","tr"],overflow:w,offset:[0,-4],targetOffset:d},rightTop:{points:["tl","tr"],overflow:_,offset:[4,0],targetOffset:d},bottomRight:{points:["tr","br"],overflow:w,offset:[0,4],targetOffset:d},rightBottom:{points:["bl","br"],overflow:_,offset:[4,0],targetOffset:d},bottomLeft:{points:["tl","bl"],overflow:w,offset:[0,4],targetOffset:d},leftBottom:{points:["br","bl"],overflow:_,offset:[-4,0],targetOffset:d}},ke=null,pe=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"],fe=function(e,r){var o=e.overlayClassName,l=e.trigger,s=l===void 0?["hover"]:l,u=e.mouseEnterDelay,C=u===void 0?0:u,g=e.mouseLeaveDelay,b=g===void 0?.1:g,j=e.overlayStyle,h=e.prefixCls,f=h===void 0?"rc-tooltip":h,m=e.children,z=e.onVisibleChange,c=e.afterVisibleChange,O=e.transitionName,je=e.animation,Te=e.motion,Z=e.placement,Ve=Z===void 0?"right":Z,ee=e.align,Ae=ee===void 0?{}:ee,te=e.destroyTooltipOnHide,Ie=te===void 0?!1:te,$e=e.defaultVisible,De=e.getTooltipContainer,Ne=e.overlayInnerStyle,Ke=e.arrowContent,He=e.overlay,Le=e.id,re=e.showArrow,ze=re===void 0?!0:re,Be=ce(e,pe),oe=(0,n.useRef)(null);(0,n.useImperativeHandle)(r,function(){return oe.current});var ne=ie({},Be);"visible"in e&&(ne.popupVisible=e.visible);var Fe=function(){return n.createElement(H,{key:"content",prefixCls:f,id:Le,overlayInnerStyle:Ne},He)};return n.createElement(de.A,P({popupClassName:o,prefixCls:f,popup:Fe,action:s,builtinPlacements:ue,popupPlacement:Ve,ref:oe,popupAlign:Ae,getPopupContainer:De,onPopupVisibleChange:z,afterPopupVisibleChange:c,popupTransitionName:O,popupAnimation:je,popupMotion:Te,defaultPopupVisible:$e,autoDestroy:Ie,mouseLeaveDelay:b,popupStyle:j,mouseEnterDelay:C,arrow:ze},ne),m)},me=(0,n.forwardRef)(fe),ve=me,ye=Object.defineProperty,A=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,M=(t,e,r)=>e in t?ye(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ge=(t,e)=>{for(var r in e||(e={}))k.call(e,r)&&M(t,r,e[r]);if(A)for(var r of A(e))K.call(e,r)&&M(t,r,e[r]);return t},be=(t,e)=>{var r={};for(var o in t)k.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&A)for(var o of A(t))e.indexOf(o)<0&&K.call(t,o)&&(r[o]=t[o]);return r};const I=t=>{const e=t,{value:r,children:o,visible:l,placement:s,tipFormatter:u}=e,C=be(e,["value","children","visible","placement","tipFormatter"]),g=(0,n.useRef)(null),b=(0,n.useRef)(null),j=(0,S.of)(he);function h(){b.current!==null&&cancelAnimationFrame(b.current)}function f(){b.current=requestAnimationFrame(()=>{var m;(m=g.current)==null||m.forceAlign()})}return(0,n.useEffect)(()=>(l?f():h(),h),[r,l]),n.createElement(ve,ge({overlayClassName:j.tooltip,placement:s,overlay:u??r,overlayInnerStyle:{minHeight:"auto"},ref:g,visible:l},C),o)},he=t=>({tooltip:(0,V.AH)({position:"absolute",display:"block",visibility:"visible",fontSize:t.typography.bodySmall.fontSize,opacity:.9,padding:3,zIndex:t.zIndex.tooltip})});var Oe=I;try{I.displayName="HandleTooltip",I.__docgenInfo={description:"",displayName:"HandleTooltip",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},placement:{defaultValue:null,description:"",name:"placement",required:!0,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'}]}},tipFormatter:{defaultValue:null,description:"",name:"tipFormatter",required:!1,type:{name:"(() => ReactNode)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Slider/HandleTooltip.tsx#HandleTooltip"]={docgenInfo:I.__docgenInfo,name:"HandleTooltip",path:"src/components/Slider/HandleTooltip.tsx#HandleTooltip"})}catch{}var Se=i("./src/components/Slider/styles.ts");const y=({min:t,max:e,onChange:r,onAfterChange:o,orientation:l="horizontal",reverse:s,step:u,formatTooltipResult:C,value:g,tooltipAlwaysVisible:b=!0})=>{const j=(0,n.useCallback)(c=>{r?.(typeof c=="number"?[c,c]:c)},[r]),h=(0,n.useCallback)(c=>{o?.(typeof c=="number"?[c,c]:c)},[o]),f=l==="horizontal",m=(0,S.of)(Se.$,f),z=(c,O)=>n.createElement(Oe,{value:O.value,visible:b||O.dragging,tipFormatter:C?()=>C(O.value):void 0,placement:f?"top":"right"},c);return n.createElement("div",{className:(0,V.cx)(m.container,m.slider)},n.createElement($.mL,{styles:m.tooltip}),n.createElement(a.A,{min:t,max:e,step:u,defaultValue:g,range:!0,onChange:j,onChangeComplete:h,vertical:!f,reverse:s,handleRender:z}))};y.displayName="RangeSlider";try{y.displayName="RangeSlider",y.__docgenInfo={description:"",displayName:"RangeSlider",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: number[]) => void)"}},onAfterChange:{defaultValue:null,description:"",name:"onAfterChange",required:!1,type:{name:"((value?: number[]) => void)"}},formatTooltipResult:{defaultValue:null,description:"",name:"formatTooltipResult",required:!1,type:{name:"((value: number) => string | number)"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},reverse:{defaultValue:null,description:"Set current positions of handle(s). If only 1 value supplied, only 1 handle displayed.",name:"reverse",required:!1,type:{name:"boolean"}},step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"number"}},tooltipAlwaysVisible:{defaultValue:{value:"true"},description:"",name:"tooltipAlwaysVisible",required:!1,type:{name:"boolean"}},marks:{defaultValue:null,description:"Marks on the slider. The key determines the position, and the value determines what will show. If you want to set the style of a specific mark point, the value should be an object which contains style and label properties.",name:"marks",required:!1,type:{name:"SliderMarks"}},included:{defaultValue:null,description:"If the value is true, it means a continuous value interval, otherwise, it is a independent value.",name:"included",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Slider/RangeSlider.tsx#RangeSlider"]={docgenInfo:y.__docgenInfo,name:"RangeSlider",path:"src/components/Slider/RangeSlider.tsx#RangeSlider"})}catch{}var we=Object.defineProperty,_e=Object.defineProperties,xe=Object.getOwnPropertyDescriptors,Y=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable,q=(t,e,r)=>e in t?we(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,p=(t,e)=>{for(var r in e||(e={}))Ce.call(e,r)&&q(t,r,e[r]);if(Y)for(var r of Y(e))Pe.call(e,r)&&q(t,r,e[r]);return t},x=(t,e)=>_e(t,xe(e)),W,U,X,G,J,Q;const Re={title:"Forms/Slider/Range",component:y,parameters:{controls:{exclude:["tooltipAlwaysVisible"]}},argTypes:{orientation:{control:{type:"select",options:["horizontal","vertical"]}},step:{control:{type:"number",min:1}}},args:{min:0,max:100,orientation:"horizontal",reverse:!1,step:void 0}},R=t=>n.createElement("div",{style:{width:"200px",height:"200px"}},n.createElement(y,x(p({},t),{value:[10,62]}))),E=t=>n.createElement("div",{style:{width:"200px",height:"200px"}},n.createElement(y,x(p({},t),{value:[10,62],orientation:"vertical"})));var Ee=Re;R.parameters=x(p({},R.parameters),{docs:x(p({},(W=R.parameters)==null?void 0:W.docs),{source:p({originalSource:`args => {
  return <div style={{
    width: '200px',
    height: '200px'
  }}>
      <RangeSlider {...args} value={[10, 62]} />
    </div>;
}`},(X=(U=R.parameters)==null?void 0:U.docs)==null?void 0:X.source)})}),E.parameters=x(p({},E.parameters),{docs:x(p({},(G=E.parameters)==null?void 0:G.docs),{source:p({originalSource:`args => {
  return <div style={{
    width: '200px',
    height: '200px'
  }}>
      <RangeSlider {...args} value={[10, 62]} orientation="vertical" />
    </div>;
}`},(Q=(J=E.parameters)==null?void 0:J.docs)==null?void 0:Q.source)})})},"./src/components/Slider/styles.ts":function(le,T,i){i.d(T,{$:function(){return $}});var n=i("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),V=i("../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const $=(a,S,D=!1)=>{const{spacing:N}=a,H=a.colors.border.strong,P=a.colors.primary.main,v=a.colors.primary.main,L=`box-shadow: 0px 0px 0px 6px ${a.colors.primary.transparent}`;return{container:(0,n.AH)({width:"100%",margin:S?"inherit":N(1,3,1,1),paddingBottom:S&&D?a.spacing(1):"inherit",height:S?"auto":"100%"}),slider:(0,n.AH)`
      .rc-slider {
        display: flex;
        flex-grow: 1;
        margin-left: 7px; // half the size of the handle to align handle to the left on 0 value
      }
      .rc-slider-mark {
        top: ${a.spacing(1.75)};
      }
      .rc-slider-mark-text {
        color: ${a.colors.text.disabled};
        font-size: ${a.typography.bodySmall.fontSize};
      }
      .rc-slider-mark-text-active {
        color: ${a.colors.text.primary};
      }
      .rc-slider-handle {
        border: none;
        background-color: ${v};
        box-shadow: ${a.shadows.z1};
        cursor: pointer;
        opacity: 1;
      }

      .rc-slider-handle:hover,
      .rc-slider-handle:active,
      .rc-slider-handle-click-focused:focus {
        ${L};
      }

      // The triple class names is needed because that's the specificity used in the source css :(
      .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging,
      .rc-slider-handle:focus-visible {
        box-shadow: 0 0 0 5px ${a.colors.text.primary};
      }

      .rc-slider-dot,
      .rc-slider-dot-active {
        background-color: ${a.colors.text.primary};
        border-color: ${a.colors.text.primary};
      }

      .rc-slider-track {
        background-color: ${P};
      }
      .rc-slider-rail {
        background-color: ${H};
        cursor: pointer;
      }
    `,tooltip:(0,V.AH)`
      body {
        .rc-slider-tooltip {
          cursor: grab;
          user-select: none;
          z-index: ${a.zIndex.tooltip};
        }

        .rc-slider-tooltip-inner {
          color: ${a.colors.text.primary};
          background-color: transparent !important;
          border-radius: 0;
          box-shadow: none;
        }

        .rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
          display: none;
        }

        .rc-slider-tooltip-placement-top {
          padding: 0;
        }
      }
    `,sliderInput:(0,n.AH)({display:"flex",flexDirection:"row",alignItems:"center",width:"100%"}),sliderInputVertical:(0,n.AH)({flexDirection:"column",height:"100%",".rc-slider":{margin:0,order:2}}),sliderInputField:(0,n.AH)({marginLeft:a.spacing(3),width:"60px",input:{textAlign:"center"}}),sliderInputFieldVertical:(0,n.AH)({margin:`0 0 ${a.spacing(3)} 0`,order:1})}}}}]);
