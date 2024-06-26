"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[3648],{62391:(q,E,l)=>{l.r(E),l.d(E,{plugin:()=>K});var R=l(40187),I=l(32196),L=l(55127),j=l.n(L),t=l(96540),S=l(65879),A=l(89667),F=l(83195),D=l(14110),y=l(32264),V=l(19347),p=l(14186),g=l(88323),$=l(67061),b=l(10354),T=l(42418),v=l(39268),z=l(76892),Q=l(37270),M=l(40845),B=l(2913),C=l(40489),N=l(39408),h=l(68706),O=l(32372);function x({value:f,onChange:r}){const[e,a]=(0,t.useState)(""),[n,s]=(0,t.useState)(f.query??"");(0,t.useEffect)(()=>{a(JSON.stringify({...{query:"*",location:"",ds_uid:"",sort:"",tags:[],kind:[],explain:!1,facet:[{field:"kind"},{field:"tags"}],from:0,limit:20},...f},null,2))},[f]);const o=()=>{n!==f.query&&r({...f,query:n})},i=d=>{d.key==="Enter"&&o()},c=d=>{try{const u=JSON.parse(d);r(u),s(u.query??"")}catch(u){console.log("UNABLE TO parse search",d,u)}};return t.createElement(t.Fragment,null,t.createElement(v.C,null,t.createElement(p.I,{label:"Query",grow:!0,labelWidth:12},t.createElement(b.p,{placeholder:"Everything",value:n,onChange:d=>s(d.currentTarget.value),onKeyDown:i,onBlur:o,spellCheck:!1}))),t.createElement(O.B,{height:300,language:"json",value:e,onBlur:c,onSave:c,showMiniMap:!1,showLineNumbers:!0}))}const m=12;class P extends t.PureComponent{constructor(r){super(r),this.state={channels:[],channelFields:{}},this.queryTypes=[{label:"Random Walk",value:h.nj.RandomWalk,description:"Random signal within the selected time range"},{label:"Live Measurements",value:h.nj.LiveMeasurements,description:"Stream real-time measurements from Grafana"},{label:"List public files",value:h.nj.List,description:"Show directory listings for public resources"}],this.onQueryTypeChange=e=>{const{onChange:a,query:n,onRunQuery:s}=this.props;a({...n,queryType:e.value}),s(),this.loadChannelInfo()},this.onChannelChange=e=>{const{onChange:a,query:n,onRunQuery:s}=this.props;a({...n,channel:e?.value}),s()},this.onFieldNamesChange=e=>{const{onChange:a,query:n,onRunQuery:s}=this.props;let o=[];if(Array.isArray(e)?o=e.map(i=>i.value):e.value&&(o=[e.value]),o.length===1&&!n.filter?.fields?.length&&n.channel){const c=(this.state.channelFields[n.channel]??[]).find(d=>d.value==="time"||d.value==="Time");c&&c.value&&c.value!==o[0]&&(o=[c.value,...o])}a({...n,filter:{...n.filter,fields:o}}),s()},this.checkAndUpdateValue=(e,a)=>{const{onChange:n,query:s,onRunQuery:o}=this.props;if(e==="buffer"){let i;if(a)try{i=S.intervalToSeconds(a)*1e3}catch(c){console.warn("ERROR",c)}n({...s,buffer:i})}else n({...s,[e]:a});o()},this.handleEnterKey=e=>{e.key==="Enter"&&this.checkAndUpdateValue("buffer",e.currentTarget.value)},this.handleBlur=e=>{this.checkAndUpdateValue("buffer",e.currentTarget.value)},this.onFolderChanged=e=>{const{onChange:a,query:n,onRunQuery:s}=this.props;a({...n,path:e?.value}),s()},this.fileListRenderer=(e,a)=>null,this.onFileDrop=(e,a,n)=>{C.vI(e).subscribe(s=>{const o=[];s.dataFrames.forEach(i=>{const c=(0,A.Nw)(i);o.push(c)}),this.props.onChange({...this.props.query,file:{name:s.file.name,size:s.file.size},queryType:h.nj.Snapshot,snapshot:o}),this.props.onRunQuery(),(0,D.rR)("grafana_datasource_drop_files",{number_of_files:a.length+e.length,accepted_files:e.map(i=>({type:i.type,size:i.size})),rejected_files:a.map(i=>({type:i.file.type,size:i.file.size}))})})},this.onSearchChange=e=>{const{query:a,onChange:n,onRunQuery:s}=this.props;n({...a,search:e}),s()},y.$.featureToggles.panelTitleSearch&&B.yn&&this.queryTypes.push({label:"Search",value:h.nj.Search,description:"Search for grafana resources"}),y.$.featureToggles.editPanelCSVDragAndDrop&&this.queryTypes.push({label:"Spreadsheet or snapshot",value:h.nj.Snapshot,description:"Query an uploaded spreadsheet or a snapshot"})}loadChannelInfo(){(0,N.l)().then(r=>{this.setState(r)})}loadFolderInfo(){const r={targets:[{queryType:h.nj.List,refId:"A"}]};(0,V.l)().get("-- Grafana --").then(e=>{e.query(r).subscribe({next:n=>{if(n.data.length){const o=n.data[0].fields[0].values.map(i=>({value:i,label:i}));this.setState({folders:o})}}})})}componentDidMount(){this.loadChannelInfo()}renderMeasurementsQuery(){let{channel:r,filter:e,buffer:a}=this.props.query,{channels:n,channelFields:s}=this.state,o=n.find(u=>u.value===r);r&&!o&&(o={value:r,label:r,description:`Connected to ${r}`},n=[o,...n]);const i=new Set,c=r?s[r]??[]:[];if(e?.fields)for(const u of e.fields)i.has(u)||(c.push({value:u,label:`${u} (not loaded)`,description:"Configured, but not found in the query results"}),i.add(u));let d="";return a&&(d=S.secondsToHms(a/1e3)),t.createElement(t.Fragment,null,t.createElement(p.I,{label:"Channel",grow:!0,labelWidth:m},t.createElement(g.l6,{options:n,value:o||"",onChange:this.onChannelChange,allowCustomValue:!0,backspaceRemovesValue:!0,placeholder:"Select measurements channel",isClearable:!0,noOptionsMessage:"Enter channel name",formatCreateLabel:u=>`Connect to: ${u}`})),r&&t.createElement($.B,{direction:"row",gap:0},t.createElement(p.I,{label:"Fields",grow:!0,labelWidth:m},t.createElement(g.l6,{options:c,value:e?.fields||[],onChange:this.onFieldNamesChange,allowCustomValue:!0,backspaceRemovesValue:!0,placeholder:"All fields",isClearable:!0,noOptionsMessage:"Unable to list all fields",formatCreateLabel:u=>`Field: ${u}`,isSearchable:!0,isMulti:!0})),t.createElement(p.I,{label:"Buffer"},t.createElement(b.p,{placeholder:"Auto",width:12,defaultValue:d,onKeyDown:this.handleEnterKey,onBlur:this.handleBlur,spellCheck:!1}))),t.createElement(T.F,{title:"Grafana Live - Measurements",severity:"info"},"This supports real-time event streams in Grafana core. This feature is under heavy development. Expect the interfaces and structures to change as this becomes more production ready."))}renderListPublicFiles(){let{path:r}=this.props.query,{folders:e}=this.state;e||(e=[],this.loadFolderInfo());const a=e.find(n=>n.value===r);return r&&!a&&(e=[...e,{value:r,label:r}]),t.createElement(v.C,null,t.createElement(p.I,{label:"Path",grow:!0,labelWidth:m},t.createElement(g.l6,{options:e,value:a||"",onChange:this.onFolderChanged,allowCustomValue:!0,backspaceRemovesValue:!0,placeholder:"Select folder",isClearable:!0,formatCreateLabel:n=>`Folder: ${n}`})))}renderSnapshotQuery(){const{query:r,theme:e}=this.props,a=r.file,n=J(e),s=(0,F.j_)("decbytes")(a?a.size:0);return t.createElement(t.Fragment,null,t.createElement(v.C,null,t.createElement(p.I,{label:"Snapshot",grow:!0,labelWidth:m},t.createElement(z.c,null,j()("frame",r.snapshot?.length??0,!0)))),y.$.featureToggles.editPanelCSVDragAndDrop&&t.createElement(t.Fragment,null,t.createElement(Q.gH,{readAs:"readAsArrayBuffer",fileListRenderer:this.fileListRenderer,options:{onDrop:this.onFileDrop,maxSize:C.o2,multiple:!1,accept:C.ZF}},t.createElement(Q.wI,{primaryText:this.props?.query?.file?"Replace file":"Drop file here or click to upload"})),a&&t.createElement("div",{className:n.file},t.createElement("span",null,a?.name),t.createElement("span",null,t.createElement("span",null,(0,F.cN)(s))))))}render(){const r={...h.uJ,...this.props.query},{queryType:e}=r;let a=this.queryTypes;return e===h.nj.Snapshot&&!y.$.featureToggles.editPanelCSVDragAndDrop&&(a=[...this.queryTypes,{label:"Snapshot",value:e}]),t.createElement(t.Fragment,null,e===h.nj.Search&&t.createElement(T.F,{title:"Grafana Search",severity:"info"},"Using this datasource to call the new search system is experimental, and subject to change at any time without notice."),t.createElement(v.C,null,t.createElement(p.I,{label:"Query type",grow:!0,labelWidth:m},t.createElement(g.l6,{options:a,value:a.find(n=>n.value===e)||a[0],onChange:this.onQueryTypeChange}))),e===h.nj.LiveMeasurements&&this.renderMeasurementsQuery(),e===h.nj.List&&this.renderListPublicFiles(),e===h.nj.Snapshot&&this.renderSnapshotQuery(),e===h.nj.Search&&t.createElement(x,{value:r.search??{},onChange:this.onSearchChange}))}}const U=(0,M.cV)(P);function J(f){return{file:(0,I.css)`
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: ${f.spacing(2)};
      border: 1px dashed ${f.colors.border.medium};
      background-color: ${f.colors.background.secondary};
      margin-top: ${f.spacing(1)};
    `}}var G=l(90183);const K=new R.tD(G.i).setQueryEditor(U)}}]);

//# sourceMappingURL=grafanaPlugin.af6c8773ac5c80bb785c.js.map