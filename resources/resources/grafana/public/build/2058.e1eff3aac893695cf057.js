"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2058],{92058:(p,d,e)=>{e.r(d),e.d(d,{plugin:()=>C});var u=e(40187),c=e(36666),r=e(62467),v=e(72316),h=e(81160),m=e(69850),g=e(86849),f=e(74730);class D extends u.mA{constructor(t){super(t)}getCollapsedText(t){return`Dashboard Reference: ${t.panelId}`}query(t){const s=t.scopedVars?.__sceneObject?.value;if(t.requestId.indexOf("mixed")>-1)throw new Error("Dashboard data source cannot be used with Mixed data source.");if(!s)throw new Error("Can only be called from a scene");const o=t.targets[0];if(!o)return(0,r.of)({data:[]});const i=o.panelId;if(!i)return(0,r.of)({data:[]});let l=this.findSourcePanel(s,i);if(!l)return(0,r.of)({data:[],error:{message:"Could not find source panel"}});let a=l.state.$data;return!o.withTransforms&&a instanceof g.Es&&(a=a.state.$data),!a||!a.getResultsStream?(0,r.of)({data:[]}):(0,v.v)(()=>{!a.isActive&&a?.setContainerWidth&&a?.setContainerWidth(500);const y=a.activate();return a.getResultsStream().pipe((0,h.T)(n=>({data:n.data.series,state:n.data.state,errors:n.data.errors,error:n.data.error,key:"source-ds-provider"})),(0,m.j)(y))})}findSourcePanel(t,s){return(0,f.vL)(t,(0,f.XA)(s))}testDatasource(){return Promise.resolve({message:"",status:""})}}const C=new u.tD(D).setQueryEditor(c.A)}}]);

//# sourceMappingURL=2058.e1eff3aac893695cf057.js.map