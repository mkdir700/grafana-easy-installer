"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5594],{89598:(Ue,te,d)=>{d.r(te),d.d(te,{plugin:()=>wt});var ge=d(65158),le=d(89654),ne=d(22680),V=d(32196),t=d(96540),A=d(28240),D=d(40845),X=d(88575),pe=d(88323),ze=d(29158),xe=d(11261),Ze=(e=>(e[e.NoData=0]="NoData",e[e.BadFrameSelection=1]="BadFrameSelection",e[e.XNotFound=2]="XNotFound",e))(Ze||{});function ie(e){return e.type===xe.PU.number}function Je(e,n){if(!n||!n.length)return{error:0};e||(e={frame:0});let i=n[e.frame??0];if(!i)return{error:1};let m=-1;for(let l=0;l<i.fields.length;l++){const a=i.fields[l];if(e.x&&e.x===(0,A.Ct)(a,i,n)){m=l;break}if(ie(a)&&!e.x){m=l;break}}let u=!1;const s=i.fields[m],g=[s];for(const l of i.fields)if(l.type===xe.PU.time&&(u=!0),!(l===s||!ie(l))){if(e.exclude){const a=(0,A.Ct)(l,i,n);if(e.exclude.includes(a))continue}g.push(l)}return{x:s,fields:{x:Ne(s),y:Ge(s)},frame:{...i,fields:g},hasData:i.fields.length>0,hasTime:u}}function Ne(e){return e?n=>e===n||!!(e.state&&e.state===n.state):()=>!1}function Ge(e){if(!e)return()=>!1;const n=Ne(e);return i=>!n(i,{fields:[],length:0},[])}const je=({value:e,onChange:n,context:i})=>{const m=(0,t.useMemo)(()=>i?.data?.length?i.data.map((l,a)=>({value:a,label:`${(0,A.Ri)(l,a)} (index: ${a}, rows: ${l.length})`})):[{value:0,label:"First result"}],[i.data]),u=(0,t.useMemo)(()=>Je(e,i.data),[i.data,e]),s=(0,t.useMemo)(()=>{const l={numberFields:[],yFields:[],xAxis:e?.x?{label:`${e.x} (Not found)`,value:e.x}:void 0},a=i.data?i.data[e?.frame??0]:void 0;if(a){const c="x"in u?(0,A.Ct)(u.x,u.frame,i.data):void 0;for(let p of a.fields)if(ie(p)){const r=(0,A.Ct)(p,a,i.data),h={label:r,value:r};l.numberFields.push(h),e?.x&&r===e.x&&(l.xAxis=h),c!==r&&l.yFields.push({label:r,value:e?.exclude?.includes(r)})}l.xAxis||(l.xAxis={label:c,value:c})}return l},[u,i.data,e]),g=(0,D.of)(ke);return i.data?.length?t.createElement("div",null,t.createElement(X.D,{label:"Data"},t.createElement(pe.l6,{isClearable:!0,options:m,placeholder:"Change filter",value:m.find(l=>l.value===e?.frame),onChange:l=>{n({...e,frame:l?.value,x:void 0})}})),t.createElement(X.D,{label:"X Field"},t.createElement(pe.l6,{isClearable:!0,options:s.numberFields,value:s.xAxis,placeholder:`${s.numberFields?.[0].label} (First numeric)`,onChange:l=>{n({...e,x:l?.value})}})),t.createElement(X.D,{label:"Y Fields"},t.createElement("div",null,s.yFields.map(l=>t.createElement("div",{key:l.label,className:g.row},t.createElement(ze.K,{name:l.value?"eye-slash":"eye",onClick:()=>{const a=e?.exclude?[...e.exclude]:[];let c=a.indexOf(l.label);c<0?a.push(l.label):a.splice(c,1),n({...e,exclude:a})},tooltip:l.value?"Disable":"Enable"}),l.label))))):t.createElement("div",null,"No data...")},ke=e=>({sorter:(0,V.css)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    cursor: pointer;
  `,row:(0,V.css)`
    padding: ${e.spacing(.5,1)};
    border-radius: ${e.shape.radius.default};
    background: ${e.colors.background.secondary};
    min-height: ${e.spacing(4)};
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    margin-bottom: 3px;
    border: 1px solid ${e.components.input.borderColor};
  `});var Me=d(27310),we=d(55852),qe=d(54391),$e=d(76218),Te=d(78437);const _e=({value:e,onChange:n,context:i,baseNameMode:m,frameFilter:u=-1})=>{const s=(l,a)=>{n({...e,[a]:l})},g=i.data&&u>-1?i.data[u]:void 0;return t.createElement("div",null,t.createElement(X.D,{label:"X Field"},t.createElement($e.O,{value:e.x??"",context:i,onChange:l=>s(l,"x"),item:{id:"x",name:"x",settings:{filter:l=>g?.fields.some(a=>a.state?.displayName===l.state?.displayName)??!0,baseNameMode:m,placeholderText:"select X field"}}})),t.createElement(X.D,{label:"Y Field"},t.createElement($e.O,{value:e.y??"",context:i,onChange:l=>s(l,"y"),item:{id:"y",name:"y",settings:{filter:l=>g?.fields.some(a=>a.state?.displayName===l.state?.displayName)??!0,baseNameMode:m,placeholderText:"select Y field"}}})),t.createElement(X.D,{label:"Point color"},t.createElement(Te.NO,{value:e.pointColor,context:i,onChange:l=>s(l,"pointColor"),item:{id:"x",name:"x",settings:{baseNameMode:m,isClearable:!0,placeholder:"Use standard color scheme"}}})),t.createElement(X.D,{label:"Point size"},t.createElement(Te.gm,{value:e.pointSize,context:i,onChange:l=>s(l,"pointSize"),item:{id:"x",name:"x",settings:{min:1,max:100}}})))};var B=d(735);const et=({value:e,onChange:n,context:i})=>{const m=(0,t.useMemo)(()=>i?.data?.length?i.data.map((r,h)=>({value:h,label:`${(0,A.Ri)(r,h)} (index: ${h}, rows: ${r.length})`})):[{value:0,label:"First result"}],[i.data]),[u,s]=(0,t.useState)(0),g=(0,D.of)(tt),l=(r,h,x)=>{n(e.map((C,F)=>F===h?{...C,[x]:r}:C))},a=()=>{n([...e,{pointColor:void 0,pointSize:B.QB.pointSize}]),s(e.length)};(0,t.useEffect)(()=>{e?.length||a()},[]);const c=r=>{n(e.filter((h,x)=>x!==r))},p=r=>r===u?`${g.row} ${g.sel}`:g.row;return t.createElement(t.Fragment,null,t.createElement(we.$n,{icon:"plus",size:"sm",variant:"secondary",onClick:a,className:g.marginBot},"Add series"),t.createElement("div",{className:g.marginBot},e.map((r,h)=>t.createElement("div",{key:`series/${h}`,className:p(h),onClick:()=>s(h),role:"button","aria-label":`Select series ${h+1}`,tabIndex:0,onKeyPress:x=>{x.key==="Enter"&&s(h)}},t.createElement(qe.R,{name:r.name??`Series ${h+1}`,onChange:x=>l(x,h,"name")}),t.createElement(ze.K,{name:"trash-alt",title:"remove",className:(0,V.cx)(g.actionIcon),onClick:()=>c(h),tooltip:"Delete series"})))),u>=0&&e[u]&&t.createElement(t.Fragment,null,m.length>1&&t.createElement(X.D,{label:"Data"},t.createElement(pe.l6,{isClearable:!1,options:m,placeholder:"Change filter",value:m.find(r=>r.value===e[u].frame)??0,onChange:r=>{n(e.map((h,x)=>x===u?r===null?{...e[x],frame:void 0}:{...e[x],frame:r?.value,x:void 0,y:void 0}:h))}})),t.createElement(_e,{key:`series/${u}`,baseNameMode:Me.X4.ExcludeBaseNames,item:{},context:i,value:e[u],onChange:r=>{n(e.map((h,x)=>x===u?r:h))},frameFilter:e[u].frame??void 0})))},tt=e=>({marginBot:(0,V.css)({marginBottom:"20px"}),row:(0,V.css)({padding:`${e.spacing(.5,1)}`,borderRadius:`${e.shape.radius.default}`,background:`${e.colors.background.secondary}`,minHeight:`${e.spacing(4)}`,display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"3px",cursor:"pointer",border:`1px solid ${e.components.input.borderColor}`,"&:hover":{border:`1px solid ${e.components.input.borderHover}`}}),sel:(0,V.css)({border:`1px solid ${e.colors.primary.border}`,"&:hover":{border:`1px solid ${e.colors.primary.border}`}}),actionIcon:(0,V.css)({color:`${e.colors.text.secondary}`,"&:hover":{color:`${e.colors.text}`}})});var Ae=d(84596),J=d(75059),ye=d(57875),j=d(23596),Y=d(32264),Le=d(67266),lt=d(55726),nt=d(81297),w=d(52622),Pe=d(77455),it=d(17464),ot=d(69503),at=d(25469),oe=d(83195),st=d(66864),K=d(63577),rt=d(96192);const dt=({allSeries:e,data:n,manualSeriesConfigs:i,seriesMapping:m,rowIndex:u,hoveredPointIndex:s,options:g})=>{const l=(0,D.of)(ct);if(!e||u==null)return null;const a=e[s],c=a.frame(n),p=a.x(c),r=a.y(c);let h;if(r.getLinks){const v=r.values[u],y=r.display?r.display(v):{text:`${v}`,numeric:+v};h=r.getLinks({calculatedValue:y,valueRowIndex:u}).map(N=>(N.title||(N.title=(0,rt.eT)(N.href)),N))}let x=c.fields.filter(v=>v!==p&&v!==r),C=null,F=null;if(m===B.it.Manual&&i){const v=i[s]?.pointColor?.field??"",y=i[s]?.pointSize?.field??"",N=v?(0,K.findField)(c,v):void 0,T=y?(0,K.findField)(c,y):void 0;F={colorFacetFieldName:v,sizeFacetFieldName:y,colorFacetValue:N?.values[u],sizeFacetValue:T?.values[u]},x=x.filter(o=>o!==N&&o!==T)}return C={name:(0,A.Ct)(r,c),val:r.values[u],field:r,color:a.pointColor(c)},t.createElement(t.Fragment,null,t.createElement("table",{className:l.infoWrap},t.createElement("tr",null,t.createElement("th",{colSpan:2,style:{backgroundColor:C.color}})),t.createElement("tbody",null,t.createElement("tr",null,t.createElement("th",null,(0,A.Ct)(p,c)),t.createElement("td",null,ve(p,p.values[u]))),t.createElement("tr",null,t.createElement("th",null,C.name,":"),t.createElement("td",null,ve(C.field,C.val))),F!==null&&F.colorFacetFieldName&&t.createElement("tr",null,t.createElement("th",null,F.colorFacetFieldName,":"),t.createElement("td",null,F.colorFacetValue)),F!==null&&F.sizeFacetFieldName&&t.createElement("tr",null,t.createElement("th",null,F.sizeFacetFieldName,":"),t.createElement("td",null,F.sizeFacetValue)),x.map((v,y)=>t.createElement("tr",{key:y},t.createElement("th",null,(0,A.Ct)(v,c),":"),t.createElement("td",null,ve(v,v.values[u])))),h&&h.length>0&&t.createElement("tr",null,t.createElement("td",{colSpan:2},t.createElement(st.gW,null,h.map((v,y)=>t.createElement(we.z9,{key:y,icon:"external-link-alt",target:v.target,href:v.href,onClick:v.onClick,fill:"text",style:{width:"100%"}},v.title))))))))};function ve(e,n){return e.display?(0,oe.cN)(e.display(n)):`${n}`}const ct=e=>({infoWrap:(0,V.css)({padding:"8px",width:"100%",th:{fontWeight:e.typography.fontWeightMedium,padding:e.spacing(.25,2)}}),highlight:(0,V.css)({background:e.colors.action.hover}),xVal:(0,V.css)({fontWeight:e.typography.fontWeightBold}),icon:(0,V.css)({marginRight:e.spacing(1),verticalAlign:"middle"})});var ft=d(11389),ut=d(58749),mt=d(52415),ht=d(79871),gt=d(21164),pt=d(22731);function Ce(e,n){return e.display?(0,oe.cN)(e.display(n)):`${n}`}const xt=({dataIdxs:e,seriesIdx:n,data:i,allSeries:m,dismiss:u,options:s,isPinned:g})=>{const l=(0,D.of)(pt.$),a=e.find(o=>o!==null),c=n-1;if(!m||a==null)return null;const p=m[c],r=p.frame(i),h=p.x(r),x=p.y(r);let C=p.name;s.seriesMapping==="manual"&&(C=s.series?.[c]?.name??`Series ${c+1}`);let F=p.pointColor(r);Array.isArray(F)&&(F=F[a]);const v={label:C,value:"",color:(0,j.alpha)(F,.5),colorIndicator:ht.fX.marker_md},y=[{label:(0,A.Ct)(h,r),value:Ce(h,h.values[a])},{label:(0,A.Ct)(x,r),value:Ce(x,x.values[a])}],N=r.fields.filter(o=>o!==h&&o!==x);N&&N.forEach(o=>{y.push({label:o.name,value:Ce(o,o.values[a])})});let T;if(g&&n!=null){const o=(0,gt.u)(x,a);T=t.createElement(ut.S,{dataLinks:o})}return t.createElement("div",{className:l.wrapper},t.createElement(mt.A,{item:v,isPinned:g}),t.createElement(ft.o,{items:y,isPinned:g}),T)};var ae=d(36613),Se=d(8066),Ve=d(24293),yt=d(51336),De=d(4134),O=d(37055),vt=d(38248),Ct=d(11404),Be=d(43228);const Ie=5;function St(e){return{standardOptions:{[O.uo.Min]:{hideFromDefaults:!0},[O.uo.Max]:{hideFromDefaults:!0},[O.uo.Unit]:{hideFromDefaults:!0},[O.uo.Decimals]:{hideFromDefaults:!0},[O.uo.NoValue]:{hideFromDefaults:!0},[O.uo.DisplayName]:{hideFromDefaults:!0},[O.uo.Thresholds]:{hideFromDefaults:!0},[O.uo.Mappings]:{hideFromDefaults:!0},[O.uo.Color]:{settings:{byValueSupport:!0,bySeriesSupport:!0,preferThresholdsMode:!1},defaultValue:{mode:Ve.Y.PaletteClassic}}},useCustomConfig:n=>{n.addRadio({path:"show",name:"Show",defaultValue:e.show,settings:{options:[{label:"Points",value:B.Q9.Points},{label:"Lines",value:B.Q9.Lines},{label:"Both",value:B.Q9.PointsAndLines}]}}).addSliderInput({path:"pointSize.fixed",name:"Point size",defaultValue:e.pointSize?.fixed??Ie,settings:{min:1,max:100,step:1},showIf:i=>i.show!==B.Q9.Lines}).addCustomEditor({id:"lineStyle",path:"lineStyle",name:"Line style",showIf:i=>i.show!==B.Q9.Points,editor:Be.F,override:Be.F,process:Me.hS,shouldApply:i=>i.type===xe.PU.number}).addSliderInput({path:"lineWidth",name:"Line width",defaultValue:e.lineWidth,settings:{min:0,max:10,step:1},showIf:i=>i.show!==B.Q9.Points}),vt.r(n,e),Ct.e(n)}}}function Et(e,n,i,m,u,s){let g,l;try{g=Ft(e,n()),l=bt(n,g,i,m,u,s)}catch(a){let c="Unknown error in prepScatter";return typeof a=="string"?c=a:a instanceof Error&&(c=a.message),{error:c,series:[]}}return{series:g,builder:l}}function Re(e,n,i,m,u,s){const g=n[i],l=g.fields[u];let a=l.state??{};a.seriesIndex=e,l.state=a;let c=s.pointColorFixed?Y.$.theme2.visualization.getColorByName(s.pointColorFixed):(0,Se.lz)(l,Y.$.theme2).color,p=()=>c;const r={...B.QB,...l.config.custom};let h=Se.uf.get(Ve.Y.PaletteClassic);if(s.pointColorIndex){const y=n[i].fields[s.pointColorIndex];if(y)if(h=(0,Se.Qi)(l),h.isByValue){const N=s.pointColorIndex;p=T=>{const o=T.fields[N];return o.state?.range&&(o.state.range=void 0),o.display=(0,ye.J)({field:o,theme:Y.$.theme2}),o.values.map(S=>o.display(S).color)}}else c=h.getCalculator(y,Y.$.theme2)(y.values[0],1),p=()=>c}let x=s.pointSizeConfig,C=s.pointSizeConfig?.fixed??l.config.custom?.pointSize?.fixed??Ie,F=()=>C;s.pointSizeIndex?F=y=>{const N=(0,K.getScaledDimensionForField)(y.fields[s.pointSizeIndex],s.pointSizeConfig,w.QH.Quad),T=Array(y.length);for(let o=0;o<y.length;o++)T[o]=N.get(o);return T}:x={fixed:C,min:C,max:C};const v=(0,A.Ct)(l,g,n);return{name:v,frame:y=>y[i],x:y=>y.fields[m],y:y=>y.fields[u],legend:()=>[{label:v,color:c,getItemKey:()=>v,yAxis:u}],showLine:r.show!==B.Q9.Points,lineWidth:r.lineWidth??2,lineStyle:r.lineStyle,lineColor:()=>c,showPoints:r.show!==B.Q9.Lines?w.yL.Always:w.yL.Never,pointSize:F,pointColor:p,pointSymbol:(y,N)=>"circle",label:w.yL.Never,labelValue:()=>"",show:!g.fields[u].config.custom.hideFrom?.viz,hints:{pointSize:x,pointColor:{mode:h}}}}function Ft(e,n){let i=0;if(!n.length)throw"Missing data";if(e.seriesMapping==="manual"){if(!e.series?.length)throw"Missing series config";const a=[];for(const c of e.series){if(!c?.x)throw"Select X dimension";if(!c?.y)throw"Select Y dimension";for(let p=0;p<n.length;p++){if(c.frame!==void 0&&c.frame!==p)continue;const r=n[p],h=(0,K.findFieldIndex)(c.x,r,n);if(h!=null){const x=(0,K.findFieldIndex)(c.y,r,n);if(x==null)throw"Y must be in the same frame as X";const C={pointColorFixed:c.pointColor?.fixed,pointColorIndex:(0,K.findFieldIndex)(c.pointColor?.field,r,n),pointSizeConfig:c.pointSize,pointSizeIndex:(0,K.findFieldIndex)(c.pointSize?.field,r,n)};a.push(Re(i++,n,p,h,x,C))}}}return a}const m=e.dims??{},u=m.frame??0,s=n[u],g=[];let l=(0,K.findFieldIndex)(m.x,s,n);for(let a=0;a<s.fields.length;a++)if(ie(s.fields[a])){if(l==null||a===l){l=a;continue}if(m.exclude&&m.exclude.includes((0,A.Ct)(s.fields[a],s,n)))continue;g.push(a)}if(l==null)throw"Missing X dimension";if(!g.length)throw"No Y values";return g.map(a=>Re(i++,n,u,l,a,{}))}const bt=(e,n,i,m,u,s)=>{let g,l;function a(o){return(f,E,M,I)=>(ae.A.orient(f,E,(b,$,z,L,P,R,H,Ee,k,Fe,se,Z,re,It,Rt)=>{const q=ae.A.pxRatio,Q=n[E-1];let de=f.data[E],_=Q.showLine,ce=Q.showPoints===w.yL.Always;!ce&&Q.showPoints===w.yL.Auto&&(ce=de[0].length<1e3),!ce&&!_&&(_=!0);let ee=1;f.ctx.save(),f.ctx.rect(f.bbox.left,f.bbox.top,f.bbox.width,f.bbox.height),f.ctx.clip(),f.ctx.fillStyle=b.fill(),f.ctx.strokeStyle=b.stroke(),f.ctx.lineWidth=ee;let $t=2*Math.PI,Oe=L.key,Qe=P.key,Xe=Q.hints.pointSize;const Tt=Q.hints.pointColor.mode.isByValue;let fe=(Xe.max??Xe.fixed)*q,At=f.posToVal(-fe/2,Oe),Lt=f.posToVal(f.bbox.width/q+fe/2,Oe),Pt=f.posToVal(f.bbox.height/q+fe/2,Qe),Vt=f.posToVal(-fe/2,Qe),Dt=o.disp.size.values(f,E),Ye=o.disp.color.values(f,E),Bt=o.disp.color.alpha,Ke=_?new Path2D:null,ue=null;for(let W=0;W<de[0].length;W++){let U=de[0][W],be=de[1][W],G=Dt[W]*q;if(U>=At&&U<=Lt&&be>=Pt&&be<=Vt){let me=R(U,L,Fe,Ee),he=H(be,P,se,k);_&&Ke.lineTo(me,he),ce&&(f.ctx.moveTo(me+G/2,he),f.ctx.beginPath(),f.ctx.arc(me,he,G/2,0,$t),Tt&&Ye[W]!==ue&&(ue=Ye[W],f.ctx.fillStyle=(0,j.alpha)(ue,Bt),f.ctx.strokeStyle=ue),f.ctx.fill(),f.ctx.stroke(),o.each(f,E,W,me-G/2-ee/2,he-G/2-ee/2,G+ee,G+ee))}}if(_){let W=Q.frame(e());f.ctx.strokeStyle=Q.lineColor(W),f.ctx.lineWidth=Q.lineWidth*q;const{lineStyle:U}=Q;U&&U.fill!=="solid"&&(U.fill==="dot"&&(f.ctx.lineCap="round"),f.ctx.setLineDash(U.dash??[10,10])),f.ctx.stroke(Ke)}f.ctx.restore()}),null)}let c=a({disp:{size:{values:(o,S)=>o.data[S][2]},color:{values:(o,S)=>o.data[S][3],alpha:.5}},each:(o,S,f,E,M,I,b)=>{E-=o.bbox.left,M-=o.bbox.top,g.add({x:E,y:M,w:I,h:b,sidx:S,didx:f})}});const p=new yt.e;p.setCursor({drag:{setScale:!0},dataIdx:(o,S)=>{if(S===1){const f=ae.A.pxRatio;l=null;let E=1/0,M=o.cursor.left*f,I=o.cursor.top*f;g.get(M,I,1,1,b=>{if((0,De.ur)(M,I,b.x,b.y,b.x+b.w,b.y+b.h)){let $=b.x+b.w/2,z=b.y+b.h/2,L=$-M,P=z-I,R=Math.sqrt(L**2+P**2);R<=b.w/2&&R<=E&&(E=R,l=b)}})}return l&&S===l.sidx?l.didx:null},points:{size:(o,S)=>l&&S===l.sidx?l.w/ae.A.pxRatio:0,fill:(o,S)=>"rgba(255,255,255,0.4)"}});const r=()=>{s?.current&&(m&&m(void 0),u&&u())};let h=null;p.addHook("init",(o,S)=>{!!Y.$.featureToggles.newVizTooltips||(o.over.style.overflow="hidden"),h=o.root.parentElement,u&&h?.addEventListener("click",u)}),p.addHook("destroy",o=>{u&&(h?.removeEventListener("click",u),r())});let x;p.addHook("syncRect",(o,S)=>{x=S}),m&&p.addHook("setLegend",o=>{if(o.cursor.idxs!=null)for(let S=0;S<o.cursor.idxs.length;S++){const f=o.cursor.idxs[S];if(f!=null&&!s?.current){m({scatterIndex:S-1,xIndex:f,pageX:x.left+o.cursor.left,pageY:x.top+o.cursor.top});return}}s?.current||m(void 0)}),p.addHook("drawClear",o=>{r(),g=g||new De.C$(0,0,o.bbox.width,o.bbox.height),g.clear(),o.series.forEach((S,f)=>{f>0&&(S._paths=null)})}),p.setMode(2);const C=e();let F=n[0].x(n[0].frame(C)),v=F.config,y=v.custom,N=y?.scaleDistribution;p.addScale({scaleKey:"x",isTime:!1,orientation:w.Lt.Horizontal,direction:w.ON.Right,distribution:N?.type,log:N?.log,linearThreshold:N?.linearThreshold,min:v.min,max:v.max,softMin:y?.axisSoftMin,softMax:y?.axisSoftMax,centeredZero:y?.axisCenteredZero,decimals:v.decimals});let T=y.axisLabel;return p.addAxis({scaleKey:"x",placement:y?.axisPlacement!==w.vM.Hidden?w.vM.Bottom:w.vM.Hidden,show:y?.axisPlacement!==w.vM.Hidden,grid:{show:y?.axisGridShow},border:{show:y?.axisBorderShow},theme:i,label:T==null||T===""?(0,A.Ct)(F,n[0].frame(C),C):T,formatValue:(o,S)=>(0,oe.cN)(F.display(o,S))}),n.forEach((o,S)=>{let f=o.frame(C),E=o.y(f);const M=o.lineColor(f),I=Nt(f,o.pointColor);let b=E.config.unit??"y",$=E.config,z=$.custom,L=z?.scaleDistribution;p.addScale({scaleKey:b,orientation:w.Lt.Vertical,direction:w.ON.Up,distribution:L?.type,log:L?.log,linearThreshold:L?.linearThreshold,min:$.min,max:$.max,softMin:z?.axisSoftMin,softMax:z?.axisSoftMax,centeredZero:z?.axisCenteredZero,decimals:$.decimals});let P=z?.axisLabel;p.addAxis({scaleKey:b,theme:i,placement:z?.axisPlacement===w.vM.Auto?w.vM.Left:z?.axisPlacement,show:z?.axisPlacement!==w.vM.Hidden,grid:{show:z?.axisGridShow},border:{show:z?.axisBorderShow},size:z?.axisWidth,label:P==null||P===""?(0,A.Ct)(E,n[S].frame(C),C):P,formatValue:(R,H)=>(0,oe.cN)(E.display(R,H))}),p.addSeries({facets:[{scale:"x",auto:!0},{scale:b,auto:!0}],pathBuilder:c,theme:i,scaleKey:"",lineColor:(0,j.alpha)(""+M,1),fillColor:(0,j.alpha)(I,.5),show:!z.hideFrom?.viz})}),p};function He(e,n,i){return e.error||!n.length?[null]:[null,...e.series.map((m,u)=>{const s=m.frame(n);let g;const l=m.pointColor(s);return Array.isArray(l)?g=l:g=Array(s.length).fill(l),[m.x(s).values,m.y(s).values,zt(s,m.pointSize),g]})]}function zt(e,n){const i=n(e);return Array.isArray(i)?i:Array(e.length).fill(i)}function Nt(e,n){const i=n(e);return Array.isArray(i)?i[0]:i}const We=10,Mt=e=>{const[n,i]=(0,t.useState)(),[m,u]=(0,t.useState)([]),[s,g]=(0,t.useState)(),[l,a]=(0,t.useState)(),[c,p]=(0,t.useState)(),[r,h]=(0,t.useState)(!1),x=!!Y.$.featureToggles.newVizTooltips,C=(0,t.useRef)(!1),F=(0,Ae.A)(e.options),v=(0,Ae.A)(e.data),y=()=>{C.current=!1,h(!1),T(void 0)},N=()=>{C.current=!C.current,h(C.current)},T=E=>{p(E)},o=(0,t.useCallback)(()=>{const E=()=>e.data.series,M=Et(e.options,E,Y.$.theme2,x?null:T,x?null:N,x?null:C);M.error?i(M.error):M.series.length&&e.data.series&&(g(M.builder),u(M.series),a(()=>He(M,e.data.series)),i(void 0))},[e.data.series,e.options,x]),S=(0,t.useCallback)(()=>{a(()=>He({error:n,series:m},e.data.series))},[e.data.series,n,m]);(0,t.useEffect)(()=>{F!==e.options||v?.structureRev!==e.data.structureRev?o():v?.series!==e.data.series&&S()},[e]);const f=()=>{const E=[],M=$=>$==null?"-":$.toFixed(1),I=Y.$.theme2;for(let $=0;$<m.length;$++){const z=m[$],L=z.frame(e.data.series);if(L)for(const P of z.legend())P.getDisplayValues=()=>{const R=e.options.legend.calcs;if(!R?.length)return[];const H=z.y(L),Ee=H.display??M;let k=null;const Fe=(0,J.Nw)({field:H,reducers:R});return R.map(se=>{const Z=J.AS.get(se);let re=Ee;return Z.id===J.gy.diffperc&&(re=(0,ye.J)({field:{...H,config:{...H.config,unit:"percent"}},theme:I})),(Z.id===J.gy.count||Z.id===J.gy.changeCount||Z.id===J.gy.distinctCount)&&(k||(k=(0,ye.J)({field:{...H,config:{...H.config,unit:"none"}},theme:I})),re=k),{...re(Fe[se]),title:Z.name,description:Z.description}})},P.disabled=!(z.show??!0),e.options.seriesMapping===B.it.Manual&&(P.label=e.options.series?.[$]?.name??`Series ${$+1}`),P.color=(0,j.alpha)(z.lineColor(L),1),E.push(P)}if(!e.options.legend.showLegend)return null;const b={flexStart:(0,V.css)({div:{justifyContent:"flex-start"}})};return t.createElement(Le.KU.Legend,{placement:e.options.legend.placement,width:e.options.legend.width},t.createElement(lt.t,{className:b.flexStart,placement:e.options.legend.placement,items:E,displayMode:e.options.legend.displayMode}))};return n||!s||!l?t.createElement("div",{className:"panel-empty"},t.createElement("p",null,n)):t.createElement(t.Fragment,null,t.createElement(Le.KU,{width:e.width,height:e.height,legend:f()},(E,M)=>t.createElement(nt.Z,{config:s,data:l,width:E,height:M},x&&e.options.tooltip.mode!==w.$N.None&&t.createElement(Pe.xl,{config:s,hoverMode:Pe.b3.xyOne,render:(I,b,$,z,L)=>t.createElement(xt,{data:e.data.series,dataIdxs:b,allSeries:m,dismiss:L,isPinned:z,options:e.options,seriesIdx:$}),maxWidth:e.options.tooltip.maxWidth,maxHeight:e.options.tooltip.maxHeight}))),!x&&t.createElement(it.ZL,null,c&&e.options.tooltip.mode!==w.$N.None&&t.createElement(ot.o,{position:{x:c.pageX,y:c.pageY},offset:{x:We,y:We},allowPointerEvents:C.current},r&&t.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end"}},t.createElement(at.J,{onClick:y,style:{position:"relative",top:"auto",right:"auto",marginRight:0}})),t.createElement(dt,{options:e.options.tooltip,allSeries:m,manualSeriesConfigs:e.options.series,seriesMapping:e.options.seriesMapping,rowIndex:c.xIndex,hoveredPointIndex:c.scatterIndex,data:e.data.series}))))},wt=new ge.m(Mt).useFieldConfig(St(B.QB)).setPanelOptions(e=>{e.addRadio({path:"seriesMapping",name:"Series mapping",defaultValue:"auto",settings:{options:[{value:"auto",label:"Table",description:"Plot values within a single table result"},{value:"manual",label:"Manual",description:"Construct values from any result"}]}}).addCustomEditor({id:"xyPlotConfig",path:"dims",name:"",editor:je,showIf:n=>n.seriesMapping==="auto"}).addCustomEditor({id:"series",path:"series",name:"",defaultValue:[],editor:et,showIf:n=>n.seriesMapping==="manual"}),le.D(e,!0),ne.H(e)})},735:(Ue,te,d)=>{d.d(te,{Q9:()=>ne,QB:()=>t,it:()=>le});var ge=d(52622),le=(D=>(D.Auto="auto",D.Manual="manual",D))(le||{}),ne=(D=>(D.Lines="lines",D.Points="points",D.PointsAndLines="points+lines",D))(ne||{});const V={exclude:[]},t={label:ge.yL.Auto,show:"points"},A={series:[]}}}]);

//# sourceMappingURL=xychart.4de639f7ac50ceaa2e10.js.map