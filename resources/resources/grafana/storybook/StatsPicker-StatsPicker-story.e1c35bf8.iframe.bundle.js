"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[4446],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":function(T,w,l){l.d(w,{XI:function(){return c.XI}});var c=l("../../node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs"),E=(...O)=>{let a=config,o=O;o.length===1&&Array.isArray(o[0])&&([o]=o),o.length!==1&&typeof o[o.length-1]!="string"&&(a={...config,...o.pop()});let d=o[0];(o.length!==1||typeof d=="string")&&(d={},o.forEach(r=>{d[r]=r}));let s={};return Object.keys(d).forEach(r=>{s[r]=action(d[r],a)}),s}},"./src/components/StatsPicker/StatsPicker.story.tsx":function(T,w,l){l.r(w),l.d(w,{Picker:function(){return S},default:function(){return L}});var c=l("../../node_modules/@storybook/addon-actions/dist/index.mjs"),E=l("../../node_modules/react/index.js"),O=l("../../node_modules/lodash/lodash.js"),a=l("../grafana-data/src/transformations/fieldReducer.ts"),o=l("./src/components/Select/Select.tsx");class d extends E.PureComponent{constructor(){super(...arguments),this.checkInput=()=>{const{stats:i,allowMultiple:t,defaultStat:g,onChange:u}=this.props,e=a.AS.list(i);if(e.length!==i.length){const h=e.map(P=>P.id),b=(0,O.difference)(i,h);console.warn("Unknown stats",b,i),u(e.map(P=>P.id))}!t&&i.length>1&&(console.warn("Removing extra stat",i),u([i[0]])),g&&i.length<1&&u([g])},this.onSelectionChange=i=>{const{onChange:t}=this.props;Array.isArray(i)?t(i.map(g=>g.value)):t(i&&i.value?[i.value]:[])}}componentDidMount(){this.checkInput()}componentDidUpdate(i){this.checkInput()}render(){const{stats:i,allowMultiple:t,defaultStat:g,placeholder:u,className:e,menuPlacement:h,width:b,inputId:P,filterOptions:p}=this.props,N=a.AS.selectOptions(i,p);return E.createElement(o.l6,{value:N.current,className:e,isClearable:!g,isMulti:t,width:b,isSearchable:!0,options:N.options,placeholder:u,onChange:this.onSelectionChange,menuPlacement:h,inputId:P})}}d.defaultProps={allowMultiple:!1};try{d.displayName="StatsPicker",d.__docgenInfo={description:"",displayName:"StatsPicker",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(stats: string[]) => void"}},stats:{defaultValue:null,description:"",name:"stats",required:!0,type:{name:"string[]"}},allowMultiple:{defaultValue:{value:"false"},description:"",name:"allowMultiple",required:!1,type:{name:"boolean"}},defaultStat:{defaultValue:null,description:"",name:"defaultStat",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},menuPlacement:{defaultValue:null,description:"",name:"menuPlacement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"bottom"'},{value:'"top"'}]}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},filterOptions:{defaultValue:null,description:"",name:"filterOptions",required:!1,type:{name:"((ext: FieldReducerInfo) => boolean)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/StatsPicker/StatsPicker.tsx#StatsPicker"]={docgenInfo:d.__docgenInfo,name:"StatsPicker",path:"src/components/StatsPicker/StatsPicker.tsx#StatsPicker"})}catch{}var s=Object.defineProperty,r=Object.defineProperties,v=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,k=(_,i,t)=>i in _?s(_,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):_[i]=t,A=(_,i)=>{for(var t in i||(i={}))C.call(i,t)&&k(_,t,i[t]);if(I)for(var t of I(i))D.call(i,t)&&k(_,t,i[t]);return _},M=(_,i)=>r(_,v(i)),y,m,n;class f extends E.PureComponent{constructor(i){super(i),this.toStatsArray=t=>t?t.split(",").map(g=>g.trim()):[],this.state={stats:this.toStatsArray(i.initialReducers)}}componentDidUpdate(i){const{initialReducers:t}=this.props;t!==i.initialReducers&&(console.log("Changing initial reducers"),this.setState({stats:this.toStatsArray(t)}))}render(){const{placeholder:i,allowMultiple:t,menuPlacement:g,width:u}=this.props,{stats:e}=this.state;return E.createElement(d,{placeholder:i,allowMultiple:t,stats:e,onChange:h=>{(0,c.XI)("Picked:")(h),this.setState({stats:h})},menuPlacement:g,width:u})}}const x={title:"Pickers and Editors/StatsPicker",component:d,parameters:{controls:{exclude:["onChange","stats","defaultStat","className"]}}},S=_=>E.createElement("div",null,E.createElement(f,A({},_)));S.args={placeholder:"placeholder",allowMultiple:!1,menuPlacement:"auto",width:10};var L=x;S.parameters=M(A({},S.parameters),{docs:M(A({},(y=S.parameters)==null?void 0:y.docs),{source:A({originalSource:`args => {
  return <div>
      <WrapperWithState {...args} />
    </div>;
}`},(n=(m=S.parameters)==null?void 0:m.docs)==null?void 0:n.source)})})},"../grafana-data/src/transformations/fieldReducer.ts":function(T,w,l){l.d(w,{AS:function(){return M},Nw:function(){return A},gy:function(){return D}});var c=l("../../node_modules/lodash/lodash.js"),E=l.n(c),O=l("../grafana-data/src/types/data.ts"),a=l("../grafana-data/src/types/dataFrame.ts"),o=l("../grafana-data/src/utils/Registry.ts"),d=Object.defineProperty,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,I=(t,g,u)=>g in t?d(t,g,{enumerable:!0,configurable:!0,writable:!0,value:u}):t[g]=u,C=(t,g)=>{for(var u in g||(g={}))r.call(g,u)&&I(t,u,g[u]);if(s)for(var u of s(g))v.call(g,u)&&I(t,u,g[u]);return t},D=(t=>(t.sum="sum",t.max="max",t.min="min",t.logmin="logmin",t.mean="mean",t.variance="variance",t.stdDev="stdDev",t.last="last",t.first="first",t.count="count",t.range="range",t.diff="diff",t.diffperc="diffperc",t.delta="delta",t.step="step",t.firstNotNull="firstNotNull",t.lastNotNull="lastNotNull",t.changeCount="changeCount",t.distinctCount="distinctCount",t.allIsZero="allIsZero",t.allIsNull="allIsNull",t.allValues="allValues",t.uniqueValues="uniqueValues",t))(D||{});function k(t){return Object.keys(D).includes(t)}function A(t){var g;const{field:u,reducers:e}=t;if(!u||!e||e.length<1)return{};if((g=u.state)!=null&&g.calcs){const R=[];for(const V of e)u.state.calcs.hasOwnProperty(V)||R.push(V);if(R.length<1)return C({},u.state.calcs)}u.state||(u.state={});const h=M.list(e),b=u.values;if(b&&b.length<1){const R=C({},u.state.calcs);for(const V of h)R[V.id]=V.emptyInputResult!==null?V.emptyInputResult:null;return u.state.calcs=R}const{nullValueMode:P=O.UW.Ignore}=u.config,p=P===O.UW.Ignore,N=P===O.UW.AsZero;if(h.length===1&&h[0].reduce){const R=h[0].reduce(u,p,N);return u.state.calcs=C(C({},u.state.calcs),R),R}let U=m(u,p,N);for(const R of h)!U.hasOwnProperty(R.id)&&R.reduce&&(U=C(C({},U),R.reduce(u,p,N)));return u.state.calcs=C(C({},u.state.calcs),U),U}const M=new o.O(()=>[{id:"lastNotNull",name:"Last *",description:"Last non-null value (also excludes NaNs)",standard:!0,aliasIds:["current"],reduce:S,preservesUnits:!0},{id:"last",name:"Last",description:"Last value",standard:!0,reduce:x,preservesUnits:!0},{id:"firstNotNull",name:"First *",description:"First non-null value (also excludes NaNs)",standard:!0,reduce:f,preservesUnits:!0},{id:"first",name:"First",description:"First Value",standard:!0,reduce:n,preservesUnits:!0},{id:"min",name:"Min",description:"Minimum Value",standard:!0,preservesUnits:!0},{id:"max",name:"Max",description:"Maximum Value",standard:!0,preservesUnits:!0},{id:"mean",name:"Mean",description:"Average Value",standard:!0,aliasIds:["avg"],preservesUnits:!0},{id:"variance",name:"Variance",description:"Variance of all values in a field",standard:!1,reduce:L,preservesUnits:!0},{id:"stdDev",name:"StdDev",description:"Standard deviation of all values in a field",standard:!1,reduce:L,preservesUnits:!0},{id:"sum",name:"Total",description:"The sum of all values",emptyInputResult:0,standard:!0,aliasIds:["total"],preservesUnits:!0},{id:"count",name:"Count",description:"Number of values in response",emptyInputResult:0,standard:!0,preservesUnits:!1},{id:"range",name:"Range",description:"Difference between minimum and maximum values",standard:!0,preservesUnits:!0},{id:"delta",name:"Delta",description:"Cumulative change in value",standard:!0,preservesUnits:!0},{id:"step",name:"Step",description:"Minimum interval between values",standard:!0,preservesUnits:!0},{id:"diff",name:"Difference",description:"Difference between first and last values",standard:!0,preservesUnits:!0},{id:"logmin",name:"Min (above zero)",description:"Used for log min scale",standard:!0,preservesUnits:!0},{id:"allIsZero",name:"All Zeros",description:"All values are zero",emptyInputResult:!1,standard:!0,preservesUnits:!0},{id:"allIsNull",name:"All Nulls",description:"All values are null",emptyInputResult:!0,standard:!0,preservesUnits:!1},{id:"changeCount",name:"Change Count",description:"Number of times the value changes",standard:!1,reduce:_,preservesUnits:!1},{id:"distinctCount",name:"Distinct Count",description:"Number of distinct values",standard:!1,reduce:i,preservesUnits:!1},{id:"diffperc",name:"Difference percent",description:"Percentage difference between first and last values",standard:!0,preservesUnits:!1},{id:"allValues",name:"All values",description:"Returns an array with all values",standard:!1,reduce:t=>({allValues:[...t.values]}),preservesUnits:!1},{id:"uniqueValues",name:"All unique values",description:"Returns an array with all unique values",standard:!1,reduce:t=>({uniqueValues:[...new Set(t.values)]}),preservesUnits:!1}]),y={sum:0,max:-Number.MAX_VALUE,min:Number.MAX_VALUE,logmin:Number.MAX_VALUE,mean:null,last:null,first:null,lastNotNull:null,firstNotNull:null,count:0,nonNullCount:0,allIsNull:!0,allIsZero:!0,range:null,diff:null,delta:0,step:Number.MAX_VALUE,diffperc:0,previousDeltaUp:!0};function m(t,g,u){const e=C({},y),h=t.values;if(!h)return e;const b=t.type===a.PU.number||t.type===a.PU.time;for(let P=0;P<h.length;P++){let p=h[P];if(P===0&&(e.first=p),e.last=p,p==null){if(g)continue;u&&(p=0)}if(e.count++,p!=null&&!Number.isNaN(p)){const N=e.firstNotNull===null;if(N&&(e.firstNotNull=p),b){if(e.sum+=p,e.allIsNull=!1,e.nonNullCount++,!N){const U=p-e.lastNotNull;e.step>U&&(e.step=U),e.lastNotNull>p?(e.previousDeltaUp=!1,P===h.length-1&&(e.delta+=p)):(e.previousDeltaUp?e.delta+=U:e.delta+=p,e.previousDeltaUp=!0)}p>e.max&&(e.max=p),p<e.min&&(e.min=p),p<e.logmin&&p>0&&(e.logmin=p)}p!==0&&(e.allIsZero=!1),e.lastNotNull=p}}return e.max===-Number.MAX_VALUE&&(e.max=null),e.min===Number.MAX_VALUE&&(e.min=null),e.step===Number.MAX_VALUE&&(e.step=null),e.nonNullCount>0&&(e.mean=e.sum/e.nonNullCount),e.allIsNull&&(e.allIsZero=!1),e.max!==null&&e.min!==null&&(e.range=e.max-e.min),(0,c.isNumber)(e.firstNotNull)&&(0,c.isNumber)(e.lastNotNull)&&(e.diff=e.lastNotNull-e.firstNotNull),(0,c.isNumber)(e.firstNotNull)&&(0,c.isNumber)(e.diff)&&(e.diffperc=e.diff/e.firstNotNull),e}function n(t,g,u){return{first:t.values[0]}}function f(t,g,u){const e=t.values;for(let h=0;h<e.length;h++){const b=e[h];if(b!=null&&!Number.isNaN(b))return{firstNotNull:b}}return{firstNotNull:null}}function x(t,g,u){const e=t.values;return{last:e[e.length-1]}}function S(t,g,u){const e=t.values;let h=e.length-1;for(;h>=0;){const b=e[h--];if(b!=null&&!Number.isNaN(b))return{lastNotNull:b}}return{lastNotNull:null}}function L(t,g,u){if(!(t.type===a.PU.number||t.type===a.PU.time))return{variance:0,stdDev:0};let e=0,h=0,b=0;const P=t.values;for(let p=0;p<P.length;p++){const N=P[p];if(N!=null){b++;let U=h;h+=(N-U)/b,e+=(N-U)*(N-h)}}if(b>0){const p=e/b;return{variance:p,stdDev:Math.sqrt(p)}}return{variance:0,stdDev:0}}function _(t,g,u){const e=t.values;let h=0,b=!0,P=null;for(let p=0;p<e.length;p++){let N=e[p];if(N===null){if(g)continue;u&&(N=0)}!b&&P!==N&&h++,b=!1,P=N}return{changeCount:h}}function i(t,g,u){const e=t.values,h=new Set;for(let b=0;b<e.length;b++){let P=e[b];if(P===null){if(g)continue;u&&(P=0)}h.add(P)}return{distinctCount:h.size}}},"../grafana-data/src/types/data.ts":function(T,w,l){l.d(w,{Gu:function(){return c},UW:function(){return O},zz:function(){return a}});var c=(s=>(s.NotStarted="NotStarted",s.Loading="Loading",s.Streaming="Streaming",s.Done="Done",s.Error="Error",s))(c||{});const E=null;var O=(s=>(s.Null="null",s.Ignore="connected",s.AsZero="null as zero",s))(O||{});const a=s=>!!s;function o(s){return s}function d(s){return typeof s=="object"&&s!==null?!0:!1}},"../grafana-data/src/types/icon.ts":function(T,w,l){l.d(w,{Uo:function(){return O},az:function(){return c},n6:function(){return E}});const c={google:!0,microsoft:!0,github:!0,gitlab:!0,okta:!0,discord:!0,hipchat:!0,amazon:!0,"google-hangouts-alt":!0,pagerduty:!0,line:!0,anchor:!0,"adjust-circle":!0,"angle-double-down":!0,"angle-double-right":!0,"angle-double-up":!0,"angle-down":!0,"angle-left":!0,"angle-right":!0,"angle-up":!0,"align-left":!0,"align-right":!0,"application-observability":!0,apps:!0,"archive-alt":!0,arrow:!0,"arrow-down":!0,"arrow-from-right":!0,"arrow-left":!0,"arrow-random":!0,"arrow-right":!0,"arrow-to-right":!0,"arrow-up":!0,"arrows-h":!0,"arrows-v":!0,asserts:!0,"expand-arrows":!0,at:!0,ai:!0,backward:!0,bars:!0,bell:!0,"bell-slash":!0,bolt:!0,book:!0,bookmark:!0,"book-open":!0,"brackets-curly":!0,bug:!0,building:!0,"calculator-alt":!0,"calendar-alt":!0,"calendar-slash":!0,camera:!0,capture:!0,"channel-add":!0,"chart-line":!0,check:!0,"check-circle":!0,"check-square":!0,circle:!0,"circle-mono":!0,"clipboard-alt":!0,"clock-nine":!0,cloud:!0,"cloud-download":!0,"cloud-upload":!0,"code-branch":!0,cog:!0,columns:!0,"comment-alt":!0,"comment-alt-message":!0,"comment-alt-share":!0,"comments-alt":!0,compass:!0,copy:!0,"corner-down-right-alt":!0,"create-dashboard":!0,"credit-card":!0,crosshair:!0,cube:!0,dashboard:!0,database:!0,"dice-three":!0,docker:!0,"document-info":!0,"document-layout-left":!0,"download-alt":!0,draggabledots:!0,edit:!0,"ellipsis-v":!0,enter:!0,envelope:!0,"exchange-alt":!0,"exclamation-triangle":!0,"exclamation-circle":!0,"external-link-alt":!0,eye:!0,"eye-slash":!0,"ellipsis-h":!0,"fa fa-spinner":!0,favorite:!0,"file-alt":!0,"file-blank":!0,"file-copy-alt":!0,"file-download":!0,"file-edit-alt":!0,"file-landscape-alt":!0,filter:!0,flip:!0,folder:!0,font:!0,fire:!0,"folder-open":!0,"folder-plus":!0,"folder-upload":!0,forward:!0,"frontend-observability":!0,"gf-bar-alignment-after":!0,"gf-bar-alignment-before":!0,"gf-bar-alignment-center":!0,"gf-glue":!0,"gf-grid":!0,"gf-interpolation-linear":!0,"gf-interpolation-smooth":!0,"gf-interpolation-step-after":!0,"gf-interpolation-step-before":!0,"gf-landscape":!0,"gf-layout-simple":!0,"gf-logs":!0,"gf-ml":!0,"gf-movepane-left":!0,"gf-movepane-right":!0,"gf-portrait":!0,"gf-service-account":!0,"gf-show-context":!0,"gf-pin":!0,"gf-prometheus":!0,"gf-traces":!0,globe:!0,grafana:!0,"graph-bar":!0,heart:!0,"heart-rate":!0,"heart-break":!0,history:!0,"history-alt":!0,home:!0,"home-alt":!0,"horizontal-align-center":!0,"horizontal-align-left":!0,"horizontal-align-right":!0,hourglass:!0,import:!0,info:!0,"info-circle":!0,k6:!0,"key-skeleton-alt":!0,keyboard:!0,"layer-group":!0,"layers-alt":!0,"library-panel":!0,"line-alt":!0,link:!0,"list-ui-alt":!0,"list-ul":!0,"list-ol":!0,lock:!0,"map-marker":!0,"map-marker-plus":!0,"map-marker-minus":!0,message:!0,minus:!0,"minus-circle":!0,"mobile-android":!0,monitor:!0,palette:!0,"panel-add":!0,paragraph:!0,"pathfinder-unite":!0,pause:!0,pen:!0,percentage:!0,play:!0,plug:!0,plus:!0,"plus-circle":!0,"plus-square":!0,power:!0,"presentation-play":!0,process:!0,"question-circle":!0,"record-audio":!0,repeat:!0,rocket:!0,"ruler-combined":!0,save:!0,search:!0,"search-minus":!0,"search-plus":!0,"share-alt":!0,shield:!0,"shield-exclamation":!0,signal:!0,signin:!0,signout:!0,sitemap:!0,slack:!0,"sliders-v-alt":!0,spinner:!0,"sort-amount-down":!0,"sort-amount-up":!0,"square-shape":!0,star:!0,"step-backward":!0,stopwatch:!0,"stopwatch-slash":!0,sync:!0,"sync-slash":!0,table:!0,"table-collapse-all":!0,"table-expand-all":!0,"tag-alt":!0,"telegram-alt":!0,"text-fields":!0,"thumbs-up":!0,times:!0,"times-circle":!0,"toggle-on":!0,"toggle-off":!0,"trash-alt":!0,unarchive:!0,unlock:!0,upload:!0,user:!0,"users-alt":!0,"user-arrows":!0,"vertical-align-bottom":!0,"vertical-align-center":!0,"vertical-align-top":!0,"web-section-alt":!0,"wrap-text":!0,rss:!0,x:!0};function E(a){return!a||typeof a!="string"?!1:a in c}function O(a){if(E(a))return a}},"../grafana-data/src/types/plugin.ts":function(T,w,l){l.d(w,{Ac:function(){return O},Ud:function(){return s},ib:function(){return d},pn:function(){return c}});var c=(r=>(r.alpha="alpha",r.beta="beta",r.stable="stable",r.deprecated="deprecated",r))(c||{}),E=(r=>(r.panel="panel",r.datasource="datasource",r.app="app",r.renderer="renderer",r.secretsmanager="secretsmanager",r))(E||{}),O=(r=>(r.internal="internal",r.valid="valid",r.invalid="invalid",r.modified="modified",r.missing="missing",r))(O||{}),a=(r=>(r.grafana="grafana",r.commercial="commercial",r.community="community",r.private="private",r.core="core",r))(a||{}),o=(r=>(r.missingSignature="signatureMissing",r.invalidSignature="signatureInvalid",r.modifiedSignature="signatureModified",r))(o||{}),d=(r=>(r.dashboard="dashboard",r.page="page",r.panel="panel",r.datasource="datasource",r))(d||{});class s{addConfigPage(v){return this.configPages||(this.configPages=[]),this.configPages.push(v),this}setChannelSupport(){return console.warn("[deprecation] plugin is using ignored option: setChannelSupport",this.meta),this}constructor(){this.meta={}}}},"../grafana-data/src/utils/Registry.ts":function(T,w,l){l.d(w,{O:function(){return E}});var c=l("../grafana-data/src/types/plugin.ts");class E{constructor(a){this.init=a,this.ordered=[],this.byId=new Map,this.initialized=!1,this.setInit=o=>{if(this.initialized)throw new Error("Registry already initialized");this.init=o},this.init=a}getIfExists(a){if(this.initialized||this.initialize(),a)return this.byId.get(a)}initialize(){if(this.init)for(const a of this.init())this.register(a);this.sort(),this.initialized=!0}get(a){const o=this.getIfExists(a);if(!o)throw new Error(`"${a}" not found in: ${this.list().map(d=>d.id)}`);return o}selectOptions(a,o){this.initialized||this.initialize();const d={options:[],current:[]},s={};if(a)for(const r of a)s[r]={};for(const r of this.ordered){if(r.excludeFromPicker||o&&!o(r))continue;const v={value:r.id,label:r.name,description:r.description};r.state===c.pn.alpha&&(v.label+=" (alpha)"),d.options.push(v),s[r.id]&&(s[r.id]=v)}return a&&(d.current=Object.values(s)),d}list(a){if(this.initialized||this.initialize(),a){const o=[];for(const d of a){const s=this.getIfExists(d);s&&o.push(s)}return o}return this.ordered}isEmpty(){return this.initialized||this.initialize(),this.ordered.length===0}register(a){if(this.byId.has(a.id))throw new Error("Duplicate Key:"+a.id);if(this.byId.set(a.id,a),this.ordered.push(a),a.aliasIds)for(const o of a.aliasIds)this.byId.has(o)||this.byId.set(o,a);this.initialized&&this.sort()}sort(){}}},"./src/components/Forms/commonStyles.ts":function(T,w,l){l.d(w,{SM:function(){return r},Xb:function(){return a},g$:function(){return o},gm:function(){return O},lH:function(){return d}});var c=l("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),E=l("./src/themes/mixins.ts");const O=v=>(0,c.AH)({"&:focus":(0,E.Hi)(v)}),a=(v,I=!1)=>{const C=I?v.colors.error.border:v.components.input.borderColor,D=I?v.colors.error.shade:v.components.input.borderHover,k=v.components.input.background,A=v.components.input.text,M=v.isDark?"#2e2f35":"#bab4ca";return(0,c.cx)(o(v),(0,c.AH)({background:k,lineHeight:v.typography.body.lineHeight,fontSize:v.typography.size.md,color:A,border:`1px solid ${C}`,"&:-webkit-autofill, &:-webkit-autofill:hover":{boxShadow:`inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px ${k}!important`,WebkitTextFillColor:`${A} !important`,borderColor:M},"&:-webkit-autofill:focus":{boxShadow:`0 0 0 2px ${v.colors.background.primary}, 0 0 0px 4px ${v.colors.primary.main}, inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px ${k}!important`,WebkitTextFillColor:`${A} !important`},"&:hover":{borderColor:D},"&:focus":{outline:"none"},"&:disabled":{backgroundColor:v.colors.action.disabledBackground,color:v.colors.action.disabledText,border:`1px solid ${v.colors.action.disabledBackground}`,"&:hover":{borderColor:C}},"&::placeholder":{color:v.colors.text.disabled,opacity:1}}))},o=v=>(0,c.AH)({padding:v.spacing(0,1,0,1)}),d=()=>({sm:(0,c.AH)({width:s("sm")}),md:(0,c.AH)({width:s("md")}),lg:(0,c.AH)({width:s("lg")}),auto:(0,c.AH)({width:s("auto")})}),s=v=>{switch(v){case"sm":return"200px";case"md":return"320px";case"lg":return"580px";case"auto":default:return"auto"}};function r(v,I){switch(v){case"sm":return{padding:1,fontSize:I.typography.size.sm,height:I.components.height.sm};case"lg":return{padding:3,fontSize:I.typography.size.lg,height:I.components.height.lg};case"md":default:return{padding:2,fontSize:I.typography.size.md,height:I.components.height.md}}}},"./src/components/Icon/Icon.tsx":function(T,w,l){l.d(w,{I:function(){return M}});var c=l("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),E=l("../../node_modules/react/index.js"),O=l("../../node_modules/react-inlinesvg/esm/index.js"),a=l("../grafana-data/src/types/icon.ts"),o=l("./src/themes/ThemeContext.tsx"),d=l("./src/components/Icon/utils.ts"),s=Object.defineProperty,r=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,C=(y,m,n)=>m in y?s(y,m,{enumerable:!0,configurable:!0,writable:!0,value:n}):y[m]=n,D=(y,m)=>{for(var n in m||(m={}))v.call(m,n)&&C(y,n,m[n]);if(r)for(var n of r(m))I.call(m,n)&&C(y,n,m[n]);return y},k=(y,m)=>{var n={};for(var f in y)v.call(y,f)&&m.indexOf(f)<0&&(n[f]=y[f]);if(y!=null&&r)for(var f of r(y))m.indexOf(f)<0&&I.call(y,f)&&(n[f]=y[f]);return n};const A=y=>({icon:(0,c.AH)({display:"inline-block",fill:"currentColor",flexShrink:0,label:"Icon",lineHeight:0,verticalAlign:"middle"}),orange:(0,c.AH)({fill:y.v1.palette.orange})}),M=E.forwardRef((y,m)=>{var n=y,{size:f="md",type:x="default",name:S,className:L,style:_,title:i=""}=n,t=k(n,["size","type","name","className","style","title"]);const g=(0,o.of)(A);(0,a.n6)(S)||console.warn("Icon component passed an invalid icon name",S);const u=S==="fa fa-spinner"?"spinner":S,e=(0,d.Wj)(),h=(0,d.cs)(f),b=h,P=S.startsWith("gf-bar-align")?16:S.startsWith("gf-interp")?30:h,p=(0,d.Xi)(u,x),N=`${e}${p}/${u}.svg`,U=(0,c.cx)(g.icon,L,x==="mono"?{[g.orange]:S==="favorite"}:"",u==="spinner"&&"fa-spin");return E.createElement(O.A,D({innerRef:m,src:N,width:P,height:b,title:i,className:U,style:_},t))});M.displayName="Icon";try{M.displayName="Icon",M.__docgenInfo={description:"",displayName:"Icon",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"enum",value:[{value:'"play"'},{value:'"google"'},{value:'"microsoft"'},{value:'"github"'},{value:'"gitlab"'},{value:'"okta"'},{value:'"discord"'},{value:'"hipchat"'},{value:'"amazon"'},{value:'"google-hangouts-alt"'},{value:'"pagerduty"'},{value:'"line"'},{value:'"anchor"'},{value:'"adjust-circle"'},{value:'"angle-double-down"'},{value:'"angle-double-right"'},{value:'"angle-double-up"'},{value:'"angle-down"'},{value:'"angle-left"'},{value:'"angle-right"'},{value:'"angle-up"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"application-observability"'},{value:'"apps"'},{value:'"archive-alt"'},{value:'"arrow"'},{value:'"arrow-down"'},{value:'"arrow-from-right"'},{value:'"arrow-left"'},{value:'"arrow-random"'},{value:'"arrow-right"'},{value:'"arrow-to-right"'},{value:'"arrow-up"'},{value:'"arrows-h"'},{value:'"arrows-v"'},{value:'"asserts"'},{value:'"expand-arrows"'},{value:'"at"'},{value:'"ai"'},{value:'"backward"'},{value:'"bars"'},{value:'"bell"'},{value:'"bell-slash"'},{value:'"bolt"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"brackets-curly"'},{value:'"bug"'},{value:'"building"'},{value:'"calculator-alt"'},{value:'"calendar-alt"'},{value:'"calendar-slash"'},{value:'"camera"'},{value:'"capture"'},{value:'"channel-add"'},{value:'"chart-line"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"circle"'},{value:'"circle-mono"'},{value:'"clipboard-alt"'},{value:'"clock-nine"'},{value:'"cloud"'},{value:'"cloud-download"'},{value:'"cloud-upload"'},{value:'"code-branch"'},{value:'"cog"'},{value:'"columns"'},{value:'"comment-alt"'},{value:'"comment-alt-message"'},{value:'"comment-alt-share"'},{value:'"comments-alt"'},{value:'"compass"'},{value:'"copy"'},{value:'"corner-down-right-alt"'},{value:'"create-dashboard"'},{value:'"credit-card"'},{value:'"crosshair"'},{value:'"cube"'},{value:'"dashboard"'},{value:'"database"'},{value:'"dice-three"'},{value:'"docker"'},{value:'"document-info"'},{value:'"document-layout-left"'},{value:'"download-alt"'},{value:'"draggabledots"'},{value:'"edit"'},{value:'"ellipsis-v"'},{value:'"enter"'},{value:'"envelope"'},{value:'"exchange-alt"'},{value:'"exclamation-triangle"'},{value:'"exclamation-circle"'},{value:'"external-link-alt"'},{value:'"eye"'},{value:'"eye-slash"'},{value:'"ellipsis-h"'},{value:'"fa fa-spinner"'},{value:'"favorite"'},{value:'"file-alt"'},{value:'"file-blank"'},{value:'"file-copy-alt"'},{value:'"file-download"'},{value:'"file-edit-alt"'},{value:'"file-landscape-alt"'},{value:'"filter"'},{value:'"flip"'},{value:'"folder"'},{value:'"font"'},{value:'"fire"'},{value:'"folder-open"'},{value:'"folder-plus"'},{value:'"folder-upload"'},{value:'"forward"'},{value:'"frontend-observability"'},{value:'"gf-bar-alignment-after"'},{value:'"gf-bar-alignment-before"'},{value:'"gf-bar-alignment-center"'},{value:'"gf-glue"'},{value:'"gf-grid"'},{value:'"gf-interpolation-linear"'},{value:'"gf-interpolation-smooth"'},{value:'"gf-interpolation-step-after"'},{value:'"gf-interpolation-step-before"'},{value:'"gf-landscape"'},{value:'"gf-layout-simple"'},{value:'"gf-logs"'},{value:'"gf-ml"'},{value:'"gf-movepane-left"'},{value:'"gf-movepane-right"'},{value:'"gf-portrait"'},{value:'"gf-service-account"'},{value:'"gf-show-context"'},{value:'"gf-pin"'},{value:'"gf-prometheus"'},{value:'"gf-traces"'},{value:'"globe"'},{value:'"grafana"'},{value:'"graph-bar"'},{value:'"heart"'},{value:'"heart-rate"'},{value:'"heart-break"'},{value:'"history"'},{value:'"history-alt"'},{value:'"home"'},{value:'"home-alt"'},{value:'"horizontal-align-center"'},{value:'"horizontal-align-left"'},{value:'"horizontal-align-right"'},{value:'"hourglass"'},{value:'"import"'},{value:'"info"'},{value:'"info-circle"'},{value:'"k6"'},{value:'"key-skeleton-alt"'},{value:'"keyboard"'},{value:'"layer-group"'},{value:'"layers-alt"'},{value:'"library-panel"'},{value:'"line-alt"'},{value:'"link"'},{value:'"list-ui-alt"'},{value:'"list-ul"'},{value:'"list-ol"'},{value:'"lock"'},{value:'"map-marker"'},{value:'"map-marker-plus"'},{value:'"map-marker-minus"'},{value:'"message"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"mobile-android"'},{value:'"monitor"'},{value:'"palette"'},{value:'"panel-add"'},{value:'"paragraph"'},{value:'"pathfinder-unite"'},{value:'"pause"'},{value:'"pen"'},{value:'"percentage"'},{value:'"plug"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-square"'},{value:'"power"'},{value:'"presentation-play"'},{value:'"process"'},{value:'"question-circle"'},{value:'"record-audio"'},{value:'"repeat"'},{value:'"rocket"'},{value:'"ruler-combined"'},{value:'"save"'},{value:'"search"'},{value:'"search-minus"'},{value:'"search-plus"'},{value:'"share-alt"'},{value:'"shield"'},{value:'"shield-exclamation"'},{value:'"signal"'},{value:'"signin"'},{value:'"signout"'},{value:'"sitemap"'},{value:'"slack"'},{value:'"sliders-v-alt"'},{value:'"spinner"'},{value:'"sort-amount-down"'},{value:'"sort-amount-up"'},{value:'"square-shape"'},{value:'"star"'},{value:'"step-backward"'},{value:'"stopwatch"'},{value:'"stopwatch-slash"'},{value:'"sync"'},{value:'"sync-slash"'},{value:'"table"'},{value:'"table-collapse-all"'},{value:'"table-expand-all"'},{value:'"tag-alt"'},{value:'"telegram-alt"'},{value:'"text-fields"'},{value:'"thumbs-up"'},{value:'"times"'},{value:'"times-circle"'},{value:'"toggle-on"'},{value:'"toggle-off"'},{value:'"trash-alt"'},{value:'"unarchive"'},{value:'"unlock"'},{value:'"upload"'},{value:'"user"'},{value:'"users-alt"'},{value:'"user-arrows"'},{value:'"vertical-align-bottom"'},{value:'"vertical-align-center"'},{value:'"vertical-align-top"'},{value:'"web-section-alt"'},{value:'"wrap-text"'},{value:'"rss"'},{value:'"x"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"default"'},{value:'"mono"'}]}},title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:M.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch{}},"./src/components/Icon/utils.ts":function(T,w,l){l.d(w,{Wj:function(){return o},Xi:function(){return E},cs:function(){return O}});const c=["grafana","favorite","heart-break","heart","panel-add","library-panel","circle-mono"];function E(d,s){return d?.startsWith("gf-")?"custom":c.includes(d)?"mono":s==="default"?"unicons":s==="solid"?"solid":"mono"}function O(d){switch(d){case"xs":return 12;case"sm":return 14;case"md":return 16;case"lg":return 18;case"xl":return 24;case"xxl":return 36;case"xxxl":return 48}}let a;function o(){if(a)return a;const d=typeof window<"u"&&window.__grafana_public_path__;return d?a=d+"img/icons/":a="public/img/icons/",a}},"./src/components/Portal/Portal.tsx":function(T,w,l){l.d(w,{ZL:function(){return k},gF:function(){return A}});var c=l("../../node_modules/react/index.js"),E=l("../../node_modules/react-dom/index.js"),O=l("./src/themes/ThemeContext.tsx"),a=Object.defineProperty,o=Object.defineProperties,d=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,I=(m,n,f)=>n in m?a(m,n,{enumerable:!0,configurable:!0,writable:!0,value:f}):m[n]=f,C=(m,n)=>{for(var f in n||(n={}))r.call(n,f)&&I(m,f,n[f]);if(s)for(var f of s(n))v.call(n,f)&&I(m,f,n[f]);return m},D=(m,n)=>o(m,d(n));function k(m){const{children:n,className:f,root:x,forwardedRef:S}=m,L=(0,O.$j)(),_=(0,c.useRef)(null),i=x??A();return _.current||(_.current=document.createElement("div"),f&&(_.current.className=f),_.current.style.position="relative",_.current.style.zIndex=`${L.zIndex.portal}`),(0,c.useLayoutEffect)(()=>(_.current&&i.appendChild(_.current),()=>{_.current&&i.removeChild(_.current)}),[i]),E.createPortal(c.createElement("div",{ref:S},n),_.current)}function A(){var m;return(m=window.document.getElementById("grafana-portal-container"))!=null?m:document.body}function M(){return React.createElement("div",{id:"grafana-portal-container"})}const y=c.forwardRef((m,n)=>c.createElement(k,D(C({},m),{forwardedRef:n})));y.displayName="RefForwardingPortal";try{k.displayName="RefForwardingPortal",k.__docgenInfo={description:"",displayName:"RefForwardingPortal",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},root:{defaultValue:null,description:"",name:"root",required:!1,type:{name:"HTMLElement"}},forwardedRef:{defaultValue:null,description:"",name:"forwardedRef",required:!1,type:{name:"ForwardedRef<HTMLDivElement>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Portal/Portal.tsx#RefForwardingPortal"]={docgenInfo:y.__docgenInfo,name:"RefForwardingPortal",path:"src/components/Portal/Portal.tsx#RefForwardingPortal"})}catch{}},"./src/components/Tooltip/Tooltip.tsx":function(T,w,l){l.d(w,{m:function(){return y}});var c=l("../../node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),E=l("../../node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),O=l("../../node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),a=l("../../node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),o=l("../../node_modules/react/index.js"),d=l("../grafana-e2e-selectors/src/selectors/index.ts"),s=l("./src/themes/ThemeContext.tsx"),r=l("./src/utils/tooltipUtils.ts"),v=l("./src/components/Portal/Portal.tsx"),I=Object.defineProperty,C=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,A=(n,f,x)=>f in n?I(n,f,{enumerable:!0,configurable:!0,writable:!0,value:x}):n[f]=x,M=(n,f)=>{for(var x in f||(f={}))D.call(f,x)&&A(n,x,f[x]);if(C)for(var x of C(f))k.call(f,x)&&A(n,x,f[x]);return n};const y=o.forwardRef(({children:n,theme:f,interactive:x,show:S,placement:L,content:_},i)=>{const t=(0,o.useRef)(null),[g,u]=(0,o.useState)(S),e=S??g,h=[(0,c.cY)(8),(0,E.UU)({fallbackAxisSideDirection:"end",crossAxis:!1,boundary:document.body}),(0,E.BN)(),(0,O.UE)({element:t})],{context:b,refs:P,floatingStyles:p}=(0,a.we)({open:e,placement:(0,r.O)(L),onOpenChange:u,middleware:h,whileElementsMounted:E.ll}),N=(0,o.useId)(),U=(0,a.Mk)(b,{delay:{close:x?100:0},move:!1}),R=(0,a.iQ)(b),V=(0,a.s9)(b),{getReferenceProps:j,getFloatingProps:W}=(0,a.bv)([V,U,R]),K=typeof _=="function",B=(0,s.of)(m)[f??"info"],F=(0,o.useCallback)(z=>{P.setReference(z),typeof i=="function"?i(z):i&&(i.current=z)},[i,P]),H="aria-label"in n.props&&n.props["aria-label"]===_;return o.createElement(o.Fragment,null,o.cloneElement(n,M({ref:F,tabIndex:0,"aria-describedby":!H&&e?N:void 0},j())),e&&o.createElement(v.ZL,null,o.createElement("div",M({ref:P.setFloating,style:p},W()),o.createElement(a.ie,{className:B.arrow,ref:t,context:b}),o.createElement("div",{"data-testid":d.Tp.components.Tooltip.container,id:N,role:"tooltip",className:B.container},typeof _=="string"&&_,o.isValidElement(_)&&o.cloneElement(_),K&&_({})))))});y.displayName="Tooltip";const m=n=>{const f=(0,r.f)(n,n.components.tooltip.background,n.components.tooltip.background,n.components.tooltip.text,{topBottom:.5,rightLeft:1}),x=(0,r.f)(n,n.colors.error.main,n.colors.error.main,n.colors.error.contrastText,{topBottom:.5,rightLeft:1});return{info:f,["info-alt"]:f,error:x}};try{y.displayName="Tooltip",y.__docgenInfo={description:"",displayName:"Tooltip",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"error"'},{value:'"info-alt"'}]}},show:{defaultValue:null,description:"",name:"show",required:!1,type:{name:"boolean"}},placement:{defaultValue:null,description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"bottom"'},{value:'"top"'},{value:'"right"'},{value:'"left"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"auto-start"'},{value:'"auto-end"'}]}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"PopoverContent"}},interactive:{defaultValue:null,description:"Set to true if you want the tooltip to stay long enough so the user can move mouse over content to select text or click a link",name:"interactive",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:y.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip/Tooltip.tsx#Tooltip"})}catch{}},"./src/utils/tooltipUtils.ts":function(T,w,l){l.d(w,{O:function(){return E},f:function(){return O}});var c=l("../../node_modules/@emotion/css/dist/emotion-css.esm.js");function E(a){switch(a){case"auto":return"bottom";case"auto-start":return"bottom-start";case"auto-end":return"bottom-end";default:return a??"bottom"}}function O(a,o,d,s,r){return{arrow:(0,c.AH)({fill:o}),container:(0,c.AH)({backgroundColor:o,borderRadius:a.shape.radius.default,border:`1px solid ${d}`,boxShadow:a.shadows.z2,color:s,fontSize:a.typography.bodySmall.fontSize,padding:a.spacing(r.topBottom,r.rightLeft),transition:"opacity 0.3s",zIndex:a.zIndex.tooltip,maxWidth:"400px",overflowWrap:"break-word","&[data-popper-interactive='false']":{pointerEvents:"none"}}),headerClose:(0,c.AH)({color:a.colors.text.secondary,position:"absolute",right:a.spacing(1),top:a.spacing(1.5),backgroundColor:"transparent",border:0}),header:(0,c.AH)({paddingTop:a.spacing(1),paddingBottom:a.spacing(2)}),body:(0,c.AH)({paddingTop:a.spacing(1),paddingBottom:a.spacing(1)}),footer:(0,c.AH)({paddingTop:a.spacing(2),paddingBottom:a.spacing(1)})}}}}]);
