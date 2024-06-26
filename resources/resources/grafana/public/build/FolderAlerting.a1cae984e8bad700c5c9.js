"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4333],{30027:(y,h,e)=>{e.r(h),e.d(h,{BrowseFolderAlertingPage:()=>Y,default:()=>H});var a=e(96540),D=e(17205),r=e(71101),i=e(31678),v=e(32196),n=e(2543),l=e(40996),F=e(40845),c=e(67061),f=e(67647),T=e(88323),M=e(14578),o=e(10860),O=e(64149),C=e(19384),A=e(15054),L=e(21969),I=e(9518),b=e(98439),g=e(39964),W=e(23770),K=e(98164),U=e(57220),S=e(56361),z=(t=>(t.Ascending="alpha-asc",t.Descending="alpha-desc",t))(z||{});const J=[{label:"Alphabetically [A-Z]",value:"alpha-asc"},{label:"Alphabetically [Z-A]",value:"alpha-desc"}],V=({folder:t})=>{const m=(0,F.of)($),s=(0,i.useDispatch)(),R=u=>{const Q=(0,K.EU)(P,u);p(Q)};(0,a.useEffect)(()=>{s((0,W.mB)({rulesSourceName:U.hY})),s((0,W.eB)({rulesSourceName:U.hY}))},[s]);const d=(0,I.dy)(U.hY),{nameFilter:B,labelFilter:P,sortOrder:E,setNameFilter:_,setLabelFilter:p,setSortOrder:w}=x(),X=d.find(u=>u.uid===t.uid)?.groups.flatMap(u=>u.rules)??[],k=j(X,B,P,E??"alpha-asc"),q=X.length===0||k.length===0,{page:ee,numberOfPages:ae,onPageChange:te,pageItems:ne}=(0,b.W)(k,1,A.FG);return a.createElement("div",{className:m.container},a.createElement(c.B,{direction:"column",gap:3},a.createElement(f.Z,{value:B,onChange:_,placeholder:"Search alert rules by name","data-testid":"name-filter"}),a.createElement(c.B,{direction:"row"},a.createElement(T.l6,{value:E,onChange:({value:u})=>u&&w(u),options:J,width:25,"aria-label":"Sort",placeholder:"Sort (Default A-Z)",prefix:a.createElement(M.I,{name:E==="alpha-asc"?"sort-amount-up":"sort-amount-down"})}),a.createElement(f.Z,{value:P,onChange:p,placeholder:"Search alerts by labels",className:m.filterLabelsInput,"data-testid":"label-filter"})),a.createElement(c.B,{direction:"column",gap:1},ne.map(u=>a.createElement(o.Z,{key:u.name,href:(0,S.w$)("grafana",u,""),className:m.card,"data-testid":"alert-card-row"},a.createElement(o.Z.Heading,null,u.name),a.createElement(o.Z.Tags,null,a.createElement(O.L,{onClick:R,tags:Object.entries(u.labels).map(([Q,se])=>`${Q}=${se}`)})),a.createElement(o.Z.Meta,null,a.createElement("div",null,a.createElement(M.I,{name:"folder"})," ",t.title))))),q&&a.createElement("div",{className:m.noResults},"No alert rules found"),a.createElement("div",{className:m.pagination},a.createElement(C.d,{currentPage:ee,numberOfPages:ae,onNavigate:te,hideWhenSinglePage:!0}))))};var N=(t=>(t.nameFilter="nameFilter",t.labelFilter="labelFilter",t.sortOrder="sort",t))(N||{});function x(){const[t,m]=(0,g.l)(),[s,R]=(0,a.useState)(t.get("nameFilter")??""),[d,B]=(0,a.useState)(t.get("labelFilter")??""),P=t.get("sort"),[E,_]=(0,a.useState)(P==="alpha-asc"?"alpha-asc":P==="alpha-desc"?"alpha-desc":void 0);return(0,l.A)(()=>m({nameFilter:(0,L.fE)(s),labelFilter:(0,L.fE)(d),sort:(0,L.fE)(E)},!0),400,[s,d,E]),{nameFilter:s,labelFilter:d,sortOrder:E,setNameFilter:R,setLabelFilter:B,setSortOrder:_}}function j(t,m,s,R){const d=(0,K.J$)(s);let B=t.filter(P=>P.name.toLowerCase().includes(m.toLowerCase())&&(0,K.Av)(P.labels,d));return(0,n.orderBy)(B,P=>P.name.toLowerCase(),[R==="alpha-asc"?"asc":"desc"])}const $=t=>({container:(0,v.css)`
    padding: ${t.spacing(1)};
  `,card:(0,v.css)`
    grid-template-columns: auto 1fr 2fr;
    margin: 0;
  `,pagination:(0,v.css)`
    align-self: center;
  `,filterLabelsInput:(0,v.css)`
    flex: 1;
    width: auto;
    min-width: 240px;
  `,noResults:(0,v.css)`
    padding: ${t.spacing(2)};
    background-color: ${t.colors.background.secondary};
    font-style: italic;
  `});var Z=e(55314),G=e(9134);function Y({match:t}){const{uid:m}=t.params,{data:s}=(0,Z.kH)(m),R=(0,i.useSelector)(E=>E.folder),[d]=(0,Z.iB)(),B=(0,a.useMemo)(()=>{if(!s)return;const E=(0,r.R4)(s),_=(0,r.Fk)(s.uid),p=E.children?.find(w=>w.id===_);return p&&(p.active=!0),E},[s]),P=m?async E=>{if(s){const _=await d({...s,title:E});if("error"in _)throw _.error}}:void 0;return a.createElement(D.Y,{navId:"dashboards/browse",pageNav:B,onEditTitle:P,actions:a.createElement(a.Fragment,null,s&&a.createElement(G.m,{folder:s}))},a.createElement(D.Y.Contents,null,a.createElement(V,{folder:R})))}const H=Y},18241:(y,h,e)=>{e.d(h,{T:()=>f});var a=e(96540),D=e(32264),r=e(96374),i=e(94753),v=e(68402),n=e(42418),l=e(44836),F=e(55314),c=e(43907);const f=({onConfirm:T,onDismiss:M,selectedItems:o,...O})=>{const{data:C}=(0,F.G2)(o),A=!D.$.featureToggles.nestedFolders&&C&&(C.alertRule||C.libraryPanel),[L,I]=(0,a.useState)(!1),b=async()=>{I(!0);try{await T(),I(!1),M()}catch{I(!1)}};return a.createElement(r.u,{body:a.createElement(a.Fragment,null,a.createElement(i.E,{element:"p"},a.createElement(l.x6,{i18nKey:"browse-dashboards.action.delete-modal-text"},"This action will delete the following content:")),a.createElement(c.x,{selectedItems:o}),a.createElement(v.$,{v:2})),description:a.createElement(a.Fragment,null,A?a.createElement(n.F,{severity:"warning",title:(0,l.t)("browse-dashboards.action.delete-modal-invalid-title","Cannot delete folder")},a.createElement(l.x6,{i18nKey:"browse-dashboards.action.delete-modal-invalid-text"},"One or more folders contain library panels or alert rules. Delete these first in order to proceed.")):null),confirmationText:"Delete",confirmText:L?(0,l.t)("browse-dashboards.action.deleting","Deleting..."):(0,l.t)("browse-dashboards.action.delete-button","Delete"),onDismiss:M,onConfirm:b,title:(0,l.t)("browse-dashboards.action.delete-modal-title","Delete"),...O})}},51887:(y,h,e)=>{e.d(h,{J:()=>T});var a=e(96540),D=e(37390),r=e(42418),i=e(94753),v=e(68402),n=e(88575),l=e(55852),F=e(36607),c=e(44836),f=e(43907);const T=({onConfirm:M,onDismiss:o,selectedItems:O,...C})=>{const[A,L]=(0,a.useState)(),[I,b]=(0,a.useState)(!1),g=Object.keys(O.folder).filter(K=>O.folder[K]),W=async()=>{if(A!==void 0){b(!0);try{await M(A),b(!1),o()}catch{b(!1)}}};return a.createElement(D.a,{title:(0,c.t)("browse-dashboards.action.move-modal-title","Move"),onDismiss:o,...C},g.length>0&&a.createElement(r.F,{severity:"info",title:(0,c.t)("browse-dashboards.action.move-modal-alert","Moving this item may change its permissions.")}),a.createElement(i.E,{element:"p"},a.createElement(c.x6,{i18nKey:"browse-dashboards.action.move-modal-text"},"This action will move the following content:")),a.createElement(f.x,{selectedItems:O}),a.createElement(v.$,{v:3}),a.createElement(n.D,{label:(0,c.t)("browse-dashboards.action.move-modal-field-label","Folder name")},a.createElement(F.d,{value:A,excludeUIDs:g,onChange:L})),a.createElement(D.a.ButtonRow,null,a.createElement(l.$n,{onClick:o,variant:"secondary",fill:"outline"},a.createElement(c.x6,{i18nKey:"browse-dashboards.action.cancel-button"},"Cancel")),a.createElement(l.$n,{disabled:A===void 0||I,onClick:W,variant:"primary"},I?(0,c.t)("browse-dashboards.action.moving","Moving..."):(0,c.t)("browse-dashboards.action.move-button","Move"))))}},9134:(y,h,e)=>{e.d(h,{m:()=>b});var a=e(96540),D=e(32264),r=e(14110),i=e(12131),v=e(38138),n=e(64539),l=e(83122),F=e(55852),c=e(14578),f=e(87978),T=e(5108),M=e(10096),o=e(44836),O=e(28444),C=e(55314),A=e(49904),L=e(18241),I=e(51887);function b({folder:g}){const[W,K]=(0,a.useState)(!1),[U,S]=(0,a.useState)(!1),[z]=(0,C.aF)(),[J]=(0,C.Ko)(),{canEditFolders:V,canDeleteFolders:N,canViewPermissions:x,canSetPermissions:j}=(0,A.N)(g),$=D.$.featureToggles.nestedFolders&&V,Z=async d=>{await z({folder:g,destinationUID:d}),(0,r.rR)("grafana_manage_dashboards_item_moved",{item_counts:{folder:1,dashboard:0},source:"folder_actions"})},G=async()=>{await J(g),(0,r.rR)("grafana_manage_dashboards_item_deleted",{item_counts:{folder:1,dashboard:0},source:"folder_actions"});const{parents:d}=g,B=d&&d.length?d[d.length-1].url:"/dashboards";i.Ny.push(B)},Y=()=>{M.lE.publish(new O.S8({component:I.J,props:{selectedItems:{folder:{[g.uid]:!0},dashboard:{},panel:{},$all:!1},onConfirm:Z}}))},H=()=>{M.lE.publish(new O.S8({component:L.T,props:{selectedItems:{folder:{[g.uid]:!0},dashboard:{},panel:{},$all:!1},onConfirm:G}}))},t=(0,o.t)("browse-dashboards.folder-actions-button.manage-permissions","Manage permissions"),m=(0,o.t)("browse-dashboards.folder-actions-button.move","Move"),s=(0,o.t)("browse-dashboards.folder-actions-button.delete","Delete"),R=a.createElement(v.W,null,x&&a.createElement(n.D,{onClick:()=>S(!0),label:t}),$&&a.createElement(n.D,{onClick:Y,label:m}),N&&a.createElement(n.D,{destructive:!0,onClick:H,label:s}));return!x&&!$&&!N?null:a.createElement(a.Fragment,null,a.createElement(l.m,{overlay:R,onVisibleChange:K},a.createElement(F.$n,{variant:"secondary"},a.createElement(o.x6,{i18nKey:"browse-dashboards.folder-actions-button.folder-actions"},"Folder actions"),a.createElement(c.I,{name:W?"angle-up":"angle-down"}))),U&&a.createElement(f._,{title:(0,o.t)("browse-dashboards.action.manage-permissions-button","Manage permissions"),subtitle:g.title,onClose:()=>S(!1),size:"md"},a.createElement(T.x,{resource:"folders",resourceId:g.uid,canSetPermissions:j})))}},49904:(y,h,e)=>{e.d(h,{N:()=>v});var a=e(32264),D=e(10096),r=e(31678);function i(n,l){return l?D.TP.hasPermissionInMetadata(n,l):D.TP.hasPermission(n)}function v(n){const l=i(r.AccessControlAction.DashboardsCreate,n),F=!!((!n||a.$.featureToggles.nestedFolders)&&i(r.AccessControlAction.FoldersCreate)),c=i(r.AccessControlAction.FoldersDelete,n),f=i(r.AccessControlAction.DashboardsWrite,n),T=i(r.AccessControlAction.FoldersWrite,n),M=i(r.AccessControlAction.FoldersPermissionsWrite,n),o=i(r.AccessControlAction.FoldersPermissionsRead,n);return{canCreateDashboards:l,canCreateFolders:F,canDeleteFolders:c,canEditDashboards:f,canEditFolders:T,canSetPermissions:M,canViewPermissions:o}}}}]);

//# sourceMappingURL=FolderAlerting.a1cae984e8bad700c5c9.js.map