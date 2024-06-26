"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4140],{78015:(V,I,n)=>{n.r(I),n.d(I,{NotificationsPage:()=>O,default:()=>U});var t=n(96540),T=n(17205),d=n(32196),R=n(94701),M=n(40845),A=n(14578),Y=n(42418),X=n(10880),z=n(55852),F=n(30284),Z=n(25733),p=n(2940),P=n(90397),$=n(43924),y=n(2642),j=n(96519),H=n(82695),C=n(40215);function W(s,c,r){const u=(0,H.q)(),o=r?.locale??u.locale??j.c,x=2520,l=(0,Z.z)(s,c);if(isNaN(l))throw new RangeError("Invalid time value");const a=Object.assign({},r,{addSuffix:r?.addSuffix,comparison:l});let f,m;l>0?(f=(0,y.a)(c),m=(0,y.a)(s)):(f=(0,y.a)(s),m=(0,y.a)(c));const e=(0,$.O)(m,f),h=((0,C.G)(m)-(0,C.G)(f))/1e3,i=Math.round((e-h)/60);let v;if(i<2)return r?.includeSeconds?e<5?o.formatDistance("lessThanXSeconds",5,a):e<10?o.formatDistance("lessThanXSeconds",10,a):e<20?o.formatDistance("lessThanXSeconds",20,a):e<40?o.formatDistance("halfAMinute",0,a):e<60?o.formatDistance("lessThanXMinutes",1,a):o.formatDistance("xMinutes",1,a):i===0?o.formatDistance("lessThanXMinutes",1,a):o.formatDistance("xMinutes",i,a);if(i<45)return o.formatDistance("xMinutes",i,a);if(i<90)return o.formatDistance("aboutXHours",1,a);if(i<p.F6){const g=Math.round(i/60);return o.formatDistance("aboutXHours",g,a)}else{if(i<x)return o.formatDistance("xDays",1,a);if(i<p.Nw){const g=Math.round(i/p.F6);return o.formatDistance("xDays",g,a)}else if(i<p.Nw*2)return v=Math.round(i/p.Nw),o.formatDistance("aboutXMonths",v,a)}if(v=(0,P.W)(m,f),v<12){const g=Math.round(i/p.Nw);return o.formatDistance("xMonths",g,a)}else{const g=v%12,E=Math.trunc(v/12);return g<3?o.formatDistance("aboutXYears",E,a):g<9?o.formatDistance("overXYears",E,a):o.formatDistance("almostXYears",E+1,a)}}const J=null;function G(s,c){return W(s,(0,F.A)(s),c)}const Q=null;var D=n(10860);const w=({children:s,className:c,isSelected:r,onClick:u,severity:o="error",title:x,traceId:l,timestamp:a})=>{const f=(0,M.$j)(),m=B(f);return t.createElement(D.Z,{className:c,onClick:u},t.createElement(D.Z.Heading,null,x),t.createElement(D.Z.Description,null,s),t.createElement(D.Z.Figure,null,t.createElement(X.S,{onChange:u,tabIndex:-1,value:r})),t.createElement(D.Z.Tags,{className:m.trace},l&&t.createElement("span",null,`Trace ID: ${l}`),a&&G(a,{addSuffix:!0})))},B=s=>({trace:(0,d.css)({alignItems:"flex-end",alignSelf:"flex-end",color:s.colors.text.secondary,display:"flex",flexDirection:"column",fontSize:s.typography.pxToRem(10),justifySelf:"flex-end"})});var N=n(16001),S=n(31678);function K(){const s=(0,S.useDispatch)(),c=(0,S.useSelector)(e=>(0,N.qN)(e.appNotifications)),[r,u]=(0,t.useState)([]),o=c.every(e=>r.includes(e.id)),x=(0,t.useRef)((0,S.useSelector)(e=>(0,N.$K)(e.appNotifications))),l=(0,M.of)(L);(0,R.A)(()=>{s((0,N.oF)(Date.now()))});const a=()=>{o?s((0,N.XC)()):r.forEach(e=>{s((0,N.XR)(e))}),u([])},f=e=>{u(e?c.map(h=>h.id):[])},m=e=>{u(h=>h.includes(e)?h.filter(i=>i!==e):[...h,e])};return c.length===0?t.createElement("div",{className:l.noNotifsWrapper},t.createElement(A.I,{name:"bell",size:"xxl"}),t.createElement("span",null,"Notifications you have received will appear here.")):t.createElement("div",{className:l.wrapper},t.createElement(Y.F,{severity:"info",title:"This page displays past errors and warnings. Once dismissed, they cannot be retrieved."}),t.createElement("div",{className:l.topRow},t.createElement(X.S,{value:o,onChange:e=>f(e.target.checked)}),t.createElement(z.$n,{disabled:r.length===0,onClick:a},"Dismiss notifications")),t.createElement("ul",{className:l.list},c.map(e=>t.createElement("li",{key:e.id,className:l.listItem},t.createElement(w,{className:(0,d.cx)({[l.newItem]:e.timestamp>x.current}),isSelected:r.includes(e.id),onClick:()=>m(e.id),severity:e.severity,title:e.title,timestamp:e.timestamp,traceId:e.traceId},t.createElement("span",null,e.text))))))}function L(s){return{topRow:(0,d.css)({alignItems:"center",display:"flex",gap:s.spacing(2)}),list:(0,d.css)({display:"flex",flexDirection:"column"}),listItem:(0,d.css)({alignItems:"center",display:"flex",gap:s.spacing(2),listStyle:"none",position:"relative"}),newItem:(0,d.css)({"&::before":{content:'""',height:"100%",position:"absolute",left:"-7px",top:0,background:s.colors.gradients.brandVertical,width:s.spacing(.5),borderRadius:s.shape.radius.default}}),noNotifsWrapper:(0,d.css)({display:"flex",flexDirection:"column",alignItems:"center",gap:s.spacing(1)}),wrapper:(0,d.css)({display:"flex",flexDirection:"column",gap:s.spacing(2)})}}const O=()=>t.createElement(T.Y,{navId:"profile/notifications"},t.createElement(T.Y.Contents,null,t.createElement(K,null))),U=O}}]);

//# sourceMappingURL=NotificationsPage.420335f6d15bc3059f9a.js.map