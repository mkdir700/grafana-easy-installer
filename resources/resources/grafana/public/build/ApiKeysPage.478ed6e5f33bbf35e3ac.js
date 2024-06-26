"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4196],{9699:(se,p,a)=>{a.r(p),a.d(p,{ApiKeysPageUnconnected:()=>P,MigrationSummary:()=>M,default:()=>le});var e=a(96540),D=a(63329),h=a(14186),k=a(15292),T=a(69529),E=a(37390),g=a(55852),f=a(17205),A=a(10096),w=a(44836),F=a(32901),v=a(31678),N=a(67647);const R=({searchQuery:t,disabled:n,onSearchChange:l})=>e.createElement("div",{className:"page-action-bar"},e.createElement(h.I,{grow:!0},e.createElement(N.Z,{placeholder:"Search keys",value:t,onChange:l})));var m=a(32196),I=a(72724),x=a(40845),b=a(56034),B=a(14578),$=a(66864),Q=a(91605);const L=({apiKeys:t,timeZone:n,onDelete:l,onMigrate:i})=>{const o=(0,x.$j)(),s=z(o);return e.createElement("table",{className:"filter-table"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"Name"),e.createElement("th",null,"Role"),e.createElement("th",null,"Expires"),e.createElement("th",null,"Last used at"),e.createElement("th",{style:{width:"34px"}}))),t.length>0?e.createElement("tbody",null,t.map(r=>{const c=!!(r.expiration&&Date.now()>new Date(r.expiration).getTime());return e.createElement("tr",{key:r.id,className:s.tableRow(c)},e.createElement("td",null,r.name),e.createElement("td",null,r.role),e.createElement("td",null,j(r.expiration,n),c&&e.createElement("span",{className:s.tooltipContainer},e.createElement(b.m,{content:"This API key has expired."},e.createElement(B.I,{name:"exclamation-triangle"})))),e.createElement("td",null,O(n,r.lastUsedAt)),e.createElement("td",null,e.createElement($.Gy,{justify:"flex-end"},e.createElement(g.$n,{size:"sm",onClick:()=>i(r)},"Migrate to service account"),e.createElement(Q.e,{"aria-label":"Delete API key",size:"sm",onConfirm:()=>l(r),disabled:!A.TP.hasPermissionInMetadata(v.AccessControlAction.ActionAPIKeysDelete,r)}))))})):null)};function O(t,n){return n?(0,I.LE)(n,{timeZone:t}):"Never"}function j(t,n){return t?(0,I.LE)(t,{timeZone:n}):"No expiration date"}const z=t=>({tableRow:n=>(0,m.css)`
    color: ${n?t.colors.text.secondary:t.colors.text.primary};
  `,tooltipContainer:(0,m.css)`
    margin-left: ${t.spacing(1)};
  `});var K=a(42418),U=a(96374);const V=({onMigrate:t,apikeysCount:n,disabled:l})=>{const[i,o]=(0,e.useState)(!1),s=(0,x.of)(Y),r=e.createElement("a",{className:"external-link",href:"https://grafana.com/docs/grafana/latest/administration/api-keys/#migrate-api-keys-to-grafana-service-accounts",target:"_blank",rel:"noopener noreferrer"},"Find out more about the migration here."),c=e.createElement("span",null,"Migrating all API keys will hide the API keys tab.",e.createElement("br",null),e.createElement("br",null),"The API keys API will remain available for you to create new API keys, but we strongly encourage you to use Service accounts instead.");return e.createElement(e.Fragment,null,n>0&&e.createElement(K.F,{title:"Switch from API keys to service accounts",severity:"warning"},e.createElement("div",{className:s.text},"We will soon deprecate API keys. Each API key will be migrated into a service account with a token and will continue to work as they were. We encourage you to migrate your API keys to service accounts now. ",r),e.createElement("div",{className:s.actionRow},e.createElement(g.$n,{className:s.actionButton,onClick:()=>o(!0)},"Migrate all service accounts"),e.createElement(U.u,{title:"Migrate API keys to Service accounts",isOpen:i,body:c,confirmText:"Yes, migrate now",onConfirm:t,onDismiss:()=>o(!1),confirmVariant:"primary",confirmButtonVariant:"primary"}))),n===0&&e.createElement(e.Fragment,null,e.createElement(K.F,{title:"No API keys found",severity:"warning"},e.createElement("div",{className:s.text},"No API keys were found. If you reload the browser, this tab will be not available. If any API keys are created, this tab will appear again."))))},Y=t=>({text:(0,m.css)`
    margin-bottom: ${t.spacing(2)};
  `,actionRow:(0,m.css)`
    display: flex;
    align-items: center;
  `,actionButton:(0,m.css)`
    margin-right: ${t.spacing(2)};
  `});var u=a(27677),d=a(93584);function y(){return async t=>{t((0,d.h8)());const[n,l]=await Promise.all([(0,u.AI)().get("/api/auth/keys?includeExpired=false&accesscontrol=true"),(0,u.AI)().get("/api/auth/keys?includeExpired=true&accesscontrol=true")]);t((0,d.Sf)({keys:n,keysIncludingExpired:l}))}}function W(t){return async n=>{(0,u.AI)().delete(`/api/auth/keys/${t}`).then(()=>n(y()))}}function Z(t){return async n=>{try{await(0,u.AI)().post(`/api/serviceaccounts/migrate/${t}`)}finally{n(y())}}}function G(){return async t=>{try{const n=await(0,u.AI)().post("/api/serviceaccounts/migrate");t((0,d.QB)(n))}finally{t(y())}}}function H(){return t=>{t((0,d.cV)())}}const J=t=>t.includeExpired?t.keysIncludingExpired.length:t.keys.length,X=t=>{const n=RegExp(t.searchQuery,"i");return(t.includeExpired?t.keysIncludingExpired:t.keys).filter(i=>n.test(i.name)||n.test(i.role))},q=t=>t.includeExpired,_=t=>t.keys.length===0&&t.keysIncludingExpired.length>0;function ee(t){const n=A.TP.hasPermission(v.AccessControlAction.ActionAPIKeysCreate);return{apiKeys:X(t.apiKeys),searchQuery:t.apiKeys.searchQuery,apiKeysCount:J(t.apiKeys),hasFetched:t.apiKeys.hasFetched,timeZone:(0,F.O)(t.user),includeExpired:q(t.apiKeys),includeExpiredDisabled:_(t.apiKeys),canCreate:n,migrationResult:t.apiKeys.migrationResult}}const te={navId:"apikeys"},ne={loadApiKeys:y,deleteApiKey:W,migrateApiKey:Z,migrateAll:G,setSearchQuery:d.Ri,toggleIncludeExpired:H},ae=(0,D.connect)(ee,ne);class P extends e.PureComponent{constructor(n){super(n),this.onDeleteApiKey=l=>{this.props.deleteApiKey(l.id)},this.onMigrateApiKey=l=>{this.props.migrateApiKey(l.id)},this.onSearchQueryChange=l=>{this.props.setSearchQuery(l)},this.onIncludeExpiredChange=l=>{this.props.toggleIncludeExpired()},this.onMigrateApiKeys=async()=>{try{await this.props.migrateAll(),this.setState({showMigrationResult:!0})}catch(l){console.error(l)}},this.dismissModal=async()=>{this.setState({showMigrationResult:!1})},this.state={showMigrationResult:!1}}componentDidMount(){this.fetchApiKeys()}async fetchApiKeys(){await this.props.loadApiKeys()}render(){const{hasFetched:n,apiKeysCount:l,apiKeys:i,searchQuery:o,timeZone:s,includeExpired:r,includeExpiredDisabled:c,canCreate:re,migrationResult:S}=this.props,ie=l>0;return e.createElement(f.Y,{...te},e.createElement(f.Y.Contents,{isLoading:!n},e.createElement(V,{onMigrate:this.onMigrateApiKeys,apikeysCount:l}),ie?e.createElement(R,{searchQuery:o,disabled:!re,onSearchChange:this.onSearchQueryChange}):null,e.createElement(h.I,{disabled:c,label:"Include expired keys"},e.createElement(k.K,{id:"showExpired",value:r,onChange:this.onIncludeExpiredChange})),i.length>0?e.createElement(L,{apiKeys:i,timeZone:s,onMigrate:this.onMigrateApiKey,onDelete:this.onDeleteApiKey}):e.createElement(T.p,{variant:"not-found",message:(0,w.t)("api-keys.empty-state.message","No API keys found")})),S&&e.createElement(M,{visible:this.state.showMigrationResult,data:S,onDismiss:this.dismissModal}))}}const C={migrationSummary:{padding:"20px"},infoText:{color:"#007bff"},summaryDetails:{marginTop:"20px"},summaryParagraph:{margin:"10px 0"}},M=({visible:t,data:n,onDismiss:l})=>e.createElement(E.a,{title:"Migration summary",isOpen:t,closeOnBackdropClick:!0,onDismiss:l},n.failedApikeyIDs.length===0&&e.createElement("div",{style:C.migrationSummary},e.createElement("p",null,"Migration Successful!"),e.createElement("p",null,e.createElement("strong",null,"Total: "),n.total),e.createElement("p",null,e.createElement("strong",null,"Migrated: "),n.migrated)),n.failedApikeyIDs.length!==0&&e.createElement("div",{style:C.migrationSummary},e.createElement("p",null,"Migration Complete! Please note, while there might be a few API keys flagged as `failed migrations`, rest assured, all of your API keys are fully functional and operational. Please try again or contact support."),e.createElement("hr",null),e.createElement("p",null,e.createElement("strong",null,"Total: "),n.total),e.createElement("p",null,e.createElement("strong",null,"Migrated: "),n.migrated),e.createElement("p",null,e.createElement("strong",null,"Failed: "),n.failed),e.createElement("p",null,e.createElement("strong",null,"Failed Api Key IDs: "),n.failedApikeyIDs.join(", ")),e.createElement("p",null,e.createElement("strong",null,"Failed Details: "),n.failedDetails.join(", "))),e.createElement(E.a.ButtonRow,null,e.createElement(g.$n,{variant:"secondary",onClick:l},"Close"))),le=ae(P)}}]);

//# sourceMappingURL=ApiKeysPage.478ed6e5f33bbf35e3ac.js.map