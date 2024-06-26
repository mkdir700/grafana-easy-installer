"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[9916],{"./src/components/InteractiveTable/InteractiveTable.story.tsx":function(L,E,l){l.r(E),l.d(E,{Basic:function(){return ae},WithControlledSort:function(){return le},WithCustomCell:function(){return ne},WithHeaderTooltips:function(){return re},WithPagination:function(){return Z},WithRowExpansion:function(){return te},default:function(){return fa}});var t=l("../../node_modules/react/index.js"),i=l("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),N=l("../../node_modules/lodash/lodash.js"),m=l("../../node_modules/react-table/index.js"),s=l("../grafana-data/src/types/data.ts"),v=l("./src/themes/ThemeContext.tsx"),o=l("./src/components/Icon/Icon.tsx"),I=l("./src/components/Pagination/Pagination.tsx"),F=l("./src/components/Tooltip/Tooltip.tsx"),T=l("./src/components/IconButton/IconButton.tsx"),M=Object.defineProperty,q=Object.defineProperties,U=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,c=(a,e,n)=>e in a?M(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,f=(a,e)=>{for(var n in e||(e={}))ee.call(e,n)&&c(a,n,e[n]);if(C)for(var n of C(e))G.call(e,n)&&c(a,n,e[n]);return a},g=(a,e)=>q(a,U(e));const x=(0,i.AH)({display:"flex",alignItems:"center",height:"100%"});function d({row:a,__rowID:e}){return t.createElement("div",{className:x},t.createElement(T.K,g(f({tooltip:"toggle row expanded","aria-controls":e,name:a.isExpanded?"angle-down":"angle-right","aria-expanded":a.isExpanded},a.getToggleRowExpandedProps()),{size:"lg"})))}function u({isAllRowsExpanded:a,toggleAllRowsExpanded:e}){return t.createElement("div",{className:x},t.createElement(T.K,{"aria-label":a?"Collapse all rows":"Expand all rows",name:a?"table-collapse-all":"table-expand-all",onClick:()=>e(),size:"lg",tooltip:a?"Collapse all rows":"Expand all rows",variant:"secondary"}))}try{d.displayName="ExpanderCell",d.__docgenInfo={description:"",displayName:"ExpanderCell",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"readonly K[]"}},getRowId:{defaultValue:null,description:"",name:"getRowId",required:!1,type:{name:"((originalRow: K, relativeIndex: number, parent?: Row<K>) => string)"}},initialState:{defaultValue:null,description:"",name:"initialState",required:!1,type:{name:"Partial<TableState<K>>"}},stateReducer:{defaultValue:null,description:"",name:"stateReducer",required:!1,type:{name:"((newState: TableState<K>, action: ActionType, previousState: TableState<K>, instance?: TableInstance<K>) => TableState<...>)"}},useControlledState:{defaultValue:null,description:"",name:"useControlledState",required:!1,type:{name:"((state: TableState<K>, meta: MetaBase<K>) => TableState<K>)"}},defaultColumn:{defaultValue:null,description:"",name:"defaultColumn",required:!1,type:{name:"Partial<Column<K>>"}},getSubRows:{defaultValue:null,description:"",name:"getSubRows",required:!1,type:{name:"((originalRow: K, relativeIndex: number) => K[])"}},autoResetHiddenColumns:{defaultValue:null,description:"",name:"autoResetHiddenColumns",required:!1,type:{name:"boolean"}},column:{defaultValue:null,description:"",name:"column",required:!0,type:{name:"ColumnInstance<K>"}},row:{defaultValue:null,description:"",name:"row",required:!0,type:{name:"Row<K>"}},cell:{defaultValue:null,description:"",name:"cell",required:!0,type:{name:"Cell<K, void>"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/InteractiveTable/Expander/index.tsx#ExpanderCell"]={docgenInfo:d.__docgenInfo,name:"ExpanderCell",path:"src/components/InteractiveTable/Expander/index.tsx#ExpanderCell"})}catch{}try{u.displayName="ExpanderHeader",u.__docgenInfo={description:"",displayName:"ExpanderHeader",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"readonly K[]"}},getRowId:{defaultValue:null,description:"",name:"getRowId",required:!1,type:{name:"((originalRow: K, relativeIndex: number, parent?: Row<K>) => string)"}},initialState:{defaultValue:null,description:"",name:"initialState",required:!1,type:{name:"Partial<TableState<K>>"}},stateReducer:{defaultValue:null,description:"",name:"stateReducer",required:!1,type:{name:"((newState: TableState<K>, action: ActionType, previousState: TableState<K>, instance?: TableInstance<K>) => TableState<...>)"}},useControlledState:{defaultValue:null,description:"",name:"useControlledState",required:!1,type:{name:"((state: TableState<K>, meta: MetaBase<K>) => TableState<K>)"}},defaultColumn:{defaultValue:null,description:"",name:"defaultColumn",required:!1,type:{name:"Partial<Column<K>>"}},getSubRows:{defaultValue:null,description:"",name:"getSubRows",required:!1,type:{name:"((originalRow: K, relativeIndex: number) => K[])"}},autoResetHiddenColumns:{defaultValue:null,description:"",name:"autoResetHiddenColumns",required:!1,type:{name:"boolean"}},column:{defaultValue:null,description:"",name:"column",required:!0,type:{name:"ColumnInstance<K>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/InteractiveTable/Expander/index.tsx#ExpanderHeader"]={docgenInfo:u.__docgenInfo,name:"ExpanderHeader",path:"src/components/InteractiveTable/Expander/index.tsx#ExpanderHeader"})}catch{}var p=Object.defineProperty,b=Object.defineProperties,V=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,$=(a,e,n)=>e in a?p(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,W=(a,e)=>{for(var n in e||(e={}))k.call(e,n)&&$(a,n,e[n]);if(O)for(var n of O(e))X.call(e,n)&&$(a,n,e[n]);return a},ce=(a,e)=>b(a,V(e));const ue="__expander";function B(a,e=!1){return[ce(W({id:ue,Cell:d},e&&{Header:u}),{disableSortBy:!0,width:0}),...a.map(n=>W({id:n.id,accessor:n.id,Header:n.header||(()=>null),sortType:n.sortType||"alphanumeric",disableSortBy:!n.sortType,width:n.disableGrow?0:void 0,visible:n.visible},n.cell&&{Cell:n.cell}))]}var ve=Object.defineProperty,be=Object.defineProperties,ye=Object.getOwnPropertyDescriptors,pe=Object.getOwnPropertySymbols,Ne=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable,we=(a,e,n)=>e in a?ve(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,H=(a,e)=>{for(var n in e||(e={}))Ne.call(e,n)&&we(a,n,e[n]);if(pe)for(var n of pe(e))Te.call(e,n)&&we(a,n,e[n]);return a},xe=(a,e)=>be(a,ye(e)),me=(a,e)=>{var n={};for(var _ in a)Ne.call(a,_)&&e.indexOf(_)<0&&(n[_]=a[_]);if(a!=null&&pe)for(var _ of pe(a))e.indexOf(_)<0&&Te.call(a,_)&&(n[_]=a[_]);return n};const Je=a=>{const e=a.colors.emphasize(a.colors.background.primary,.03);return{container:(0,i.AH)({display:"flex",gap:a.spacing(2),flexDirection:"column",width:"100%",overflowX:"auto"}),table:(0,i.AH)({borderRadius:a.shape.radius.default,width:"100%",td:{padding:a.spacing(1)},"td, th":{minWidth:a.spacing(3)}}),disableGrow:(0,i.AH)({width:0}),header:(0,i.AH)({borderBottom:`1px solid ${a.colors.border.weak}`,"&, & > button":{position:"relative",whiteSpace:"nowrap",padding:a.spacing(1)},"& > button":{"&:after":{content:'"\\00a0"'},width:"100%",height:"100%",background:"none",border:"none",paddingRight:a.spacing(2.5),textAlign:"left",fontWeight:a.typography.fontWeightMedium}}),row:(0,i.AH)({label:"row",borderBottom:`1px solid ${a.colors.border.weak}`,"&:hover":{backgroundColor:e},"&:last-child":{borderBottom:0}}),expandedRow:(0,i.AH)({label:"expanded-row-content",borderBottom:"none"}),expandedContentRow:(0,i.AH)({label:"expanded-row-content",td:{borderBottom:`1px solid ${a.colors.border.weak}`,position:"relative",padding:a.spacing(2,2,2,5),"&:before":{content:'""',position:"absolute",width:"1px",top:0,left:"16px",bottom:a.spacing(2),background:a.colors.border.medium}}}),sortableHeader:(0,i.AH)({"&&":{padding:0}})}};function K({className:a,columns:e,data:n,getRowId:_,headerTooltips:S,pageSize:D=0,renderExpandedRow:z,showExpandAll:Q=!1,fetchData:P}){const R=(0,v.of)(Je),oe=(0,t.useMemo)(()=>B(e,Q),[e,Q]),Xe=Ze(),ga=(0,t.useCallback)(y=>`${Xe}-${y.id}`.replace(/\s/g,""),[Xe]),$e=[m.useSortBy,m.useExpanded],ha=n.length>D,ie=D>0;ie&&$e.push(m.usePagination);const A=(0,m.useTable)({columns:oe,data:n,autoResetExpanded:!1,autoResetSortBy:!1,disableMultiSort:!0,manualSortBy:!!P,getRowId:_,initialState:{hiddenColumns:[!z&&ue,...oe.filter(y=>!(!y.visible||y.visible(n))).map(y=>y.id).filter(s.zz)].filter(s.zz)}},...$e),{getTableProps:va,getTableBodyProps:ba,headerGroups:ya,prepareRow:xa}=A,{sortBy:Ye}=A.state;return(0,t.useEffect)(()=>{P&&P({sortBy:Ye})},[Ye,P]),(0,t.useEffect)(()=>{ie&&A.setPageSize(D)},[ie,D,A.setPageSize,A]),t.createElement("div",{className:R.container},t.createElement("table",xe(H({},va()),{className:(0,i.cx)(R.table,a)}),t.createElement("thead",null,ya.map(y=>{const se=y.getHeaderGroupProps(),{key:_e}=se,fe=me(se,["key"]);return t.createElement("tr",H({key:_e},fe),y.headers.map(j=>{const de=j.getHeaderProps(),{key:ge}=de,he=me(de,["key"]),Ee=S?.[j.id];return t.createElement("th",H(H({key:ge,className:(0,i.cx)(R.header,{[R.disableGrow]:j.width===0,[R.sortableHeader]:j.canSort})},he),j.isSorted&&{"aria-sort":j.isSortedDesc?"descending":"ascending"}),t.createElement(ea,{column:j,headerTooltip:Ee}))}))})),t.createElement("tbody",H({},ba()),(ie?A.page:A.rows).map(y=>{xa(y);const se=y.getRowProps(),{key:_e}=se,fe=me(se,["key"]),j=ga(y),de=y.isExpanded;return t.createElement(t.Fragment,{key:_e},t.createElement("tr",xe(H({},fe),{className:(0,i.cx)(R.row,de&&R.expandedRow)}),y.cells.map(ge=>{const he=ge.getCellProps(),{key:Ee}=he,_a=me(he,["key"]);return t.createElement("td",H({key:Ee},_a),ge.render("Cell",{__rowID:j}))})),de&&z&&t.createElement("tr",xe(H({},fe),{id:j,className:R.expandedContentRow}),t.createElement("td",{colSpan:y.cells.length},z(y.original))))}))),ie&&ha&&t.createElement("span",null,t.createElement(I.d,{currentPage:A.state.pageIndex+1,numberOfPages:A.pageOptions.length,onNavigate:y=>A.gotoPage(y-1)})))}const Ze=()=>(0,t.useMemo)(()=>(0,N.uniqueId)("InteractiveTable"),[]),Qe=a=>({sortIcon:(0,i.AH)({position:"absolute",top:a.spacing(1)}),headerTooltipIcon:(0,i.AH)({marginLeft:a.spacing(.5)})});function ea({column:{canSort:a,render:e,isSorted:n,isSortedDesc:_,getSortByToggleProps:S},headerTooltip:D}){const z=(0,v.of)(Qe),{onClick:Q}=S(),P=t.createElement(t.Fragment,null,e("Header"),D&&t.createElement(F.m,{theme:"info-alt",content:D.content,placement:"top-end"},t.createElement(o.I,{className:z.headerTooltipIcon,name:D.iconName||"info-circle","data-testid":"header-tooltip-icon"})),n&&t.createElement("span",{"aria-hidden":"true",className:z.sortIcon},t.createElement(o.I,{name:_?"angle-down":"angle-up"})));return a?t.createElement("button",{type:"button",onClick:Q},P):P}try{K.displayName="InteractiveTable",K.__docgenInfo={description:"",displayName:"InteractiveTable",props:{renderExpandedRow:{defaultValue:null,description:"Render function for the expanded row. if not provided, the tables rows will not be expandable.",name:"renderExpandedRow",required:!1,type:{name:"((row: TableData) => ReactNode)"}},showExpandAll:{defaultValue:{value:"false"},description:'Whether to show the "Expand all" button. Depends on renderExpandedRow to be provided. Defaults to false.',name:"showExpandAll",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},columns:{defaultValue:null,description:"Table's columns definition. Must be memoized.",name:"columns",required:!0,type:{name:"Column<TableData>[]"}},data:{defaultValue:null,description:"The data to display in the table. Must be memoized.",name:"data",required:!0,type:{name:"TableData[]"}},getRowId:{defaultValue:null,description:"Must return a unique id for each row",name:"getRowId",required:!0,type:{name:"((originalRow: TableData, relativeIndex: number, parent?: Row<TableData> | undefined) => string) | undefined"}},headerTooltips:{defaultValue:null,description:"Optional tooltips for the table headers. The key must match the column id.",name:"headerTooltips",required:!1,type:{name:"Record<string, InteractiveTableHeaderTooltip>"}},pageSize:{defaultValue:{value:"0"},description:`Number of rows per page. A value of zero disables pagination. Defaults to 0.
A React hooks error will be thrown if pageSize goes from greater than 0 to 0 or vice versa. If enabling pagination,
make sure pageSize remains a non-zero value.`,name:"pageSize",required:!1,type:{name:"number"}},fetchData:{defaultValue:null,description:`A custom function to fetch data when the table is sorted. If not provided, the table will be sorted client-side.
It's important for this function to have a stable identity, e.g. being wrapped into useCallback to prevent unnecessary
re-renders of the table.`,name:"fetchData",required:!1,type:{name:"FetchDataFunc<TableData>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/InteractiveTable/InteractiveTable.tsx#InteractiveTable"]={docgenInfo:K.__docgenInfo,name:"InteractiveTable",path:"src/components/InteractiveTable/InteractiveTable.tsx#InteractiveTable"})}catch{}var aa=l("./src/components/Button/Button.tsx"),ta=l("./src/components/Forms/Field.tsx"),na=l("./src/components/Input/Input.tsx"),r=l("../../node_modules/react/jsx-runtime.js"),Ie=l("../../node_modules/@mdx-js/react/lib/index.js"),Y=l("../../node_modules/@storybook/blocks/dist/index.mjs"),ra=l("./src/components/Badge/Badge.tsx");function Se(a){const e=Object.assign({h1:"h1",p:"p",a:"a",h3:"h3",h4:"h4",code:"code",h5:"h5",pre:"pre",h2:"h2"},(0,Ie.RP)(),a.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Y.W8,{title:"MDX|InteractiveTable",component:K}),`
`,(0,r.jsx)(e.h1,{id:"interactivetable",children:"InteractiveTable"}),`
`,(0,r.jsx)(ra.E,{text:"Alpha",icon:"rocket",color:"blue",tooltip:"This component is still experimental."}),`
`,(0,r.jsx)(e.p,{children:`The InteractiveTable is used to display and select data efficiently.
It allows for the display and modification of detailed information.
With additional functionality it allows for batch editing, as needed by your feature's users.`}),`
`,(0,r.jsxs)(e.p,{children:["It is a wrapper around ",(0,r.jsx)(e.a,{href:"https://react-table-v7.tanstack.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"React Table"}),", for more information, refer to the ",(0,r.jsx)(e.a,{href:"https://react-table.tanstack.com/docs/overview",target:"_blank",rel:"nofollow noopener noreferrer",children:"official documentation"}),"."]}),`
`,(0,r.jsx)(e.h3,{id:"when-to-use",children:"When to use"}),`
`,(0,r.jsx)(e.p,{children:"The InteractiveTable can be used to allow users to perform administrative tasks workflows."}),`
`,(0,r.jsx)(e.h3,{id:"when-not-to-use",children:"When not to use"}),`
`,(0,r.jsx)(e.p,{children:`Avoid using the InteractiveTable where mobile or responsiveness may be a requirement.
Consider an alternative pattern where the user is presented with a summary list and can click/tap to an individual page for each row in that list.`}),`
`,(0,r.jsx)(e.h3,{id:"usage",children:"Usage"}),`
`,(0,r.jsx)(Y.ov,{of:K}),`
`,(0,r.jsxs)(e.h4,{id:"about-columns-and-data-props",children:["About ",(0,r.jsx)(e.code,{children:"columns"})," and ",(0,r.jsx)(e.code,{children:"data"})," Props"]}),`
`,(0,r.jsxs)(e.p,{children:["To avoid unnecessary rerenders, ",(0,r.jsx)(e.code,{children:"columns"})," and ",(0,r.jsx)(e.code,{children:"data"})," must be memoized."]}),`
`,(0,r.jsxs)(e.p,{children:["Columns are rendered in the same order defined in the ",(0,r.jsx)(e.code,{children:"columns"}),` prop.
Each Cell's content is automatically rendered by matching the `,(0,r.jsx)(e.code,{children:"id"})," of the column to the key of each object in the ",(0,r.jsx)(e.code,{children:"data"})," array prop."]}),`
`,(0,r.jsx)(e.h5,{id:"example",children:"Example"}),`
`,(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:`interface TableData {
  projectName: string;
  repository: string;
}

const columns = useMemo<Array<Column<TableData>>>(
  () => [
    id: 'projectName'
    header: "Project Name"
  ],
  [
    id: 'repository',
    header: "Repository"
  ],
  []
);

const data = useMemo<Array<TableData>>(
  () => [
    {
      projectName: 'Grafana',
      repository: 'https://github.com/grafana/grafana',
   }
  ],
  [
    {
      projectName: 'Loki';
      repository: 'https://github.com/grafana/loki';
    }
  ],
  []
);
`})}),`
`,(0,r.jsx)(e.h2,{id:"examples",children:"Examples"}),`
`,(0,r.jsx)(e.h3,{id:"with-row-expansion",children:"With row expansion"}),`
`,(0,r.jsx)(e.p,{children:`Individual rows can be expanded to display additional details or reconfigure properties previously defined when the row was created.
The expanded row area should be used to unclutter the primary presentation of data, carefully consider what the user needs to know at first glance and what can be hidden behind the Row Expander button.`}),`
`,(0,r.jsx)(e.p,{children:"In general, data-types that are consistent across all dataset are in the primary table, variances are pushed to the expanded section for each individual row."}),`
`,(0,r.jsx)(Y.gG,{id:"experimental-interactivetable--with-row-expansion"}),`
`,(0,r.jsxs)(e.p,{children:["Row expansion is enabled whenever the ",(0,r.jsx)(e.code,{children:"renderExpanded"})," prop is provided. The ",(0,r.jsx)(e.code,{children:"renderExpanded"})," function is called with the row's data and should return a ReactNode."]}),`
`,(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:`interface TableData {
  datasource: string;
  repo: string;
  description: string;
}

const tableData: TableData[] = [
  //...
];

const columns: Array<Column<TableData>> = [
  //...
];

const ExpandedCell = ({ description }: TableData) => {
  return <p>{description}</p>;
};

export const MyComponent = () => {
  return (
    <InteractiveTable
      columns={columns}
      data={tableData}
      getRowId={(r) => r.datasource}
      renderExpandedRow={ExpandedCell}
      showExpandAll
    />
  );
};
`})}),`
`,(0,r.jsx)(e.h3,{id:"custom-cell-rendering",children:"Custom Cell Rendering"}),`
`,(0,r.jsxs)(e.p,{children:["Individual cells can be rendered using custom content dy defining a ",(0,r.jsx)(e.code,{children:"cell"})," property on the column definition."]}),`
`,(0,r.jsx)(Y.gG,{id:"experimental-interactivetable--with-custom-cell"}),`
`,(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:`interface TableData {
  datasource: string;
  repo: string;
}

const RepoCell = ({
  row: {
    original: { repo },
  },
}: CellProps<WithCustomCellData, void>) => {
  return (
    <LinkButton href={repo} size="sm" icon="external-link-alt">
      Open on GitHub
    </LinkButton>
  );
};

const tableData: WithCustomCellData[] = [
  {
    datasource: 'Prometheus',
    repo: 'https://github.com/prometheus/prometheus',
  },
  {
    datasource: 'Loki',
    repo: 'https://github.com/grafana/loki',
  },
  {
    datasource: 'Tempo',
    repo: 'https://github.com/grafana/tempo',
  },
];

const columns: Array<Column<WithCustomCellData>> = [
  { id: 'datasource', header: 'Data Source' },
  { id: 'repo', header: 'Repo', cell: RepoCell },
];

export const MyComponent = () => {
  return <InteractiveTable columns={columns} data={tableData} getRowId={(r) => r.datasource} />;
};
`})}),`
`,(0,r.jsx)(e.h3,{id:"with-pagination",children:"With pagination"}),`
`,(0,r.jsxs)(e.p,{children:["The table can be rendered with pagination controls by passing in the ",(0,r.jsx)(e.code,{children:"pageSize"}),` property. All data must be provided as
only client side pagination is supported.`]}),`
`,(0,r.jsx)(Y.gG,{id:"experimental-interactivetable--with-pagination"}),`
`,(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:`interface WithPaginationData {
  id: string;
  firstName: string;
  lastName: string;
  car: string;
  age: number;
}

export const MyComponent = () => {
  const pageableData: WithPaginationData[] = [
    { id: '48a3926a-e82c-4c26-b959-3a5f473e186e', firstName: 'Brynne', lastName: 'Denisevich', car: 'Cougar', age: 47 },
    {
      id: 'cf281390-adbf-4407-8cf3-a52e012f63e6',
      firstName: 'Aldridge',
      lastName: 'Shirer',
      car: 'Viper RT/10',
      age: 74,
    },
    // ...
    {
      id: 'b9b0b559-acc1-4bd8-b052-160ecf3e4f68',
      firstName: 'Ermanno',
      lastName: 'Sinott',
      car: 'Thunderbird',
      age: 26,
    },
  ];
  const columns: Array<Column<WithPaginationData>> = [
    { id: 'firstName', header: 'First name' },
    { id: 'lastName', header: 'Last name' },
    { id: 'car', header: 'Car', sortType: 'string' },
    { id: 'age', header: 'Age', sortType: 'number' },
  ];
  return <InteractiveTable columns={columns} data={pageableData} getRowId={(r) => r.id} pageSize={15} />;
};
`})}),`
`,(0,r.jsx)(e.h3,{id:"with-header-tooltips",children:"With header tooltips"}),`
`,(0,r.jsx)(e.p,{children:"It may be useful to render a tooltip on the header of a column to provide additional information about the data in that column."}),`
`,(0,r.jsx)(Y.gG,{id:"experimental-interactivetable--with-header-tooltips"}),`
`,(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:`interface WithPaginationData {
  id: string;
  firstName: string;
  lastName: string;
  car: string;
  age: number;
}

export const MyComponent = () => {
  const pageableData: WithPaginationData[] = [
    { id: '48a3926a-e82c-4c26-b959-3a5f473e186e', firstName: 'Brynne', lastName: 'Denisevich', car: 'Cougar', age: 47 },
    {
      id: 'cf281390-adbf-4407-8cf3-a52e012f63e6',
      firstName: 'Aldridge',
      lastName: 'Shirer',
      car: 'Viper RT/10',
      age: 74,
    },
    // ...
    {
      id: 'b9b0b559-acc1-4bd8-b052-160ecf3e4f68',
      firstName: 'Ermanno',
      lastName: 'Sinott',
      car: 'Thunderbird',
      age: 26,
    },
  ];
  const columns: Array<Column<WithPaginationData>> = [
    { id: 'firstName', header: 'First name' },
    { id: 'lastName', header: 'Last name' },
    { id: 'car', header: 'Car', sortType: 'string' },
    { id: 'age', header: 'Age', sortType: 'number' },
  ];

  const headerToolTips = {
    age: { content: 'The number of years since the person was born' },
    lastName: {
      content: () => {
        return (
          <>
            <h4>Here is an h4</h4>
            <div>Some content</div>
            <div>Some more content</div>
          </>
        );
      },
      iconName: 'plus-square',
    },
  };
  return (
    <InteractiveTable columns={columns} data={pageableData} getRowId={(r) => r.id} headerToolTips={headerToolTips} />
  );
};
`})}),`
`,(0,r.jsx)(e.h3,{id:"with-controlled-sorting",children:"With controlled sorting"}),`
`,(0,r.jsxs)(e.p,{children:["The default sorting can be changed to controlled sorting by passing in the ",(0,r.jsx)(e.code,{children:"fetchData"})," function, which is called whenever the sorting changes and should return the sorted data. This is useful when the sorting is done server side. It is important to memoize the ",(0,r.jsx)(e.code,{children:"fetchData"})," function to prevent unnecessary rerenders and the possibility of an infinite render loop."]}),`
`,(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:`interface WithPaginationData {
  id: string;
  firstName: string;
  lastName: string;
  car: string;
  age: number;
}

export const WithControlledSort: StoryFn<typeof InteractiveTable> = (args) => {
  const columns: Array<Column<WithPaginationData>> = [
    { id: 'firstName', header: 'First name', sortType: 'string' },
    { id: 'lastName', header: 'Last name', sortType: 'string' },
    { id: 'car', header: 'Car', sortType: 'string' },
    { id: 'age', header: 'Age' },
  ];
  const [data, setData] = useState(pageableData);

  // In production the function will most likely make an API call to fetch the sorted data
  const fetchData = useCallback(({ sortBy }: FetchDataArgs<WithPaginationData>) => {
    if (!sortBy?.length) {
      return setData(pageableData);
    }

    setTimeout(() => {
      const newData = [...pageableData];
      newData.sort((a, b) => {
        const sort = sortBy[0];
        const aData = a[sort.id as keyof Omit<WithPaginationData, 'age'>];
        const bData = b[sort.id as keyof Omit<WithPaginationData, 'age'>];
        if (sort.desc) {
          return bData.localeCompare(aData);
        }
        return aData.localeCompare(bData);
      });
      setData(newData);
    }, 300);
  }, []);

  return <InteractiveTable columns={columns} data={data} getRowId={(r) => r.id} pageSize={15} fetchData={fetchData} />;
};
`})})]})}function la(a={}){const{wrapper:e}=Object.assign({},(0,Ie.RP)(),a.components);return e?(0,r.jsx)(e,Object.assign({},a,{children:(0,r.jsx)(Se,a)})):Se(a)}var oa=la,ia=Object.defineProperty,sa=Object.defineProperties,da=Object.getOwnPropertyDescriptors,Ce=Object.getOwnPropertySymbols,ca=Object.prototype.hasOwnProperty,ua=Object.prototype.propertyIsEnumerable,Oe=(a,e,n)=>e in a?ia(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n,h=(a,e)=>{for(var n in e||(e={}))ca.call(e,n)&&Oe(a,n,e[n]);if(Ce)for(var n of Ce(e))ua.call(e,n)&&Oe(a,n,e[n]);return a},w=(a,e)=>sa(a,da(e)),De,Pe,Re,Ae,je,Me,Ve,Be,Fe,ke,We,He,Ke,ze,Le,qe,Ue,Ge;const pa=["className","renderExpandedRow","getRowId","fetchData"],J=[{id:"48a3926a-e82c-4c26-b959-3a5f473e186e",firstName:"Brynne",lastName:"Denisevich",car:"Cougar",age:47},{id:"cf281390-adbf-4407-8cf3-a52e012f63e6",firstName:"Aldridge",lastName:"Shirer",car:"Viper RT/10",age:74},{id:"be5736f5-7015-4668-a03d-44b56f2b012c",firstName:"Sonni",lastName:"Hinrich",car:"Ramcharger",age:75},{id:"fdbe3559-c68a-4f2f-b579-48ef02642628",firstName:"Hanson",lastName:"Giraudeau",car:"X5",age:67},{id:"7d0ee01a-7ac5-4e0a-9c73-e864d10c0152",firstName:"Whitman",lastName:"Seabridge",car:"TSX",age:99},{id:"177c2287-b7cb-4b5f-8976-56ee993bed61",firstName:"Aleda",lastName:"Friman",car:"X5",age:44},{id:"87c21e60-c2f4-4a01-b2af-a6d22c196e25",firstName:"Cullen",lastName:"Kobpac",car:"Montero",age:28},{id:"dd89f32d-2ef4-4c35-8e23-a8b2219e3a69",firstName:"Fitz",lastName:"Butterwick",car:"Fox",age:70},{id:"cc1b4de7-8ec5-49bd-93bc-bee9fa1ccf37",firstName:"Jordon",lastName:"Harrington",car:"Elantra",age:39},{id:"34badca2-895f-4dff-bd34-74c1edd5f309",firstName:"Ad",lastName:"Beare",car:"Freestyle",age:58},{id:"8676e97d-b19f-4a98-bbb4-a48c3673c216",firstName:"Tally",lastName:"Prestie",car:"Montero Sport",age:91},{id:"12ea99c6-ccd9-4313-af92-df9141b3d4bd",firstName:"Wendel",lastName:"Chasles",car:"Corvette",age:89},{id:"a153ad38-d9b7-4437-a8ac-c1198f0060ef",firstName:"Lester",lastName:"Klewer",car:"Xterra",age:21},{id:"ead42cd5-dcd9-4886-879a-fce2eacb4c2b",firstName:"Ferd",lastName:"Pasterfield",car:"Tiburon",age:1},{id:"97410315-a0a5-4488-8c91-ba7ff640dd9b",firstName:"Alphonse",lastName:"Espinola",car:"Laser",age:30},{id:"e4d93eab-ca85-47cc-9867-06aeb29951e3",firstName:"Dorry",lastName:"Attew",car:"Tahoe",age:90},{id:"f0047d6f-f517-4f9d-99c2-ce15dcd6a78a",firstName:"Zed",lastName:"McMinn",car:"745",age:96},{id:"5ac3fac4-7caa-4f8e-8fde-115c4a0eca85",firstName:"Fredericka",lastName:"Hains",car:"A6",age:39},{id:"03ffcc41-4a03-46f5-a161-431d331293dd",firstName:"Syd",lastName:"Brixey",car:"Camry Hybrid",age:70},{id:"7086f360-f19d-4b0c-9bce-48b2784f200a",firstName:"Casey",lastName:"Margerrison",car:"NV3500",age:38},{id:"8375ab44-0c61-4987-8154-02d1b2fd12a7",firstName:"Sallyann",lastName:"Northleigh",car:"Tiburon",age:51},{id:"3af1e7cc-92c9-4356-85eb-bdcecbdffcda",firstName:"Yance",lastName:"Nani",car:"F350",age:21},{id:"46cf82f7-d9be-4a1d-b7cc-fc15133353dc",firstName:"Judas",lastName:"Riach",car:"RSX",age:31},{id:"0d10f9cd-78b9-4584-bc01-a35bcae0a14a",firstName:"Mikkel",lastName:"Dellenbrok",car:"VUE",age:53},{id:"1a78e628-6b8b-4d6a-b391-bbfa650b8024",firstName:"Son",lastName:"Vaudin",car:"Sunbird",age:47},{id:"d1349bf6-6dd1-4aed-9788-84e8b642ad63",firstName:"Emilio",lastName:"Liddington",car:"F250",age:2},{id:"14a3a8e8-15d7-469e-87c6-85181e22b3b8",firstName:"Devin",lastName:"Meadley",car:"XT",age:61},{id:"47cccba7-9f9b-44f5-985c-c2e226b2c9e4",firstName:"Harriott",lastName:"Seres",car:"LeSabre",age:11},{id:"e668a9b1-1dcd-4b5d-9d4e-479dc08695d6",firstName:"Elvin",lastName:"Diable",car:"90",age:69},{id:"addf8ee9-934c-4e81-83e8-20f50bbff028",firstName:"Rey",lastName:"Scotford",car:"H1",age:71},{id:"f22dbd3f-8419-4a1c-b542-23c3842cb59b",firstName:"King",lastName:"Catonne",car:"Suburban 2500",age:91},{id:"c85b7547-3654-41f0-94d6-becc832b81fa",firstName:"Barbabas",lastName:"Romeril",car:"Sorento",age:5},{id:"8d83b0eb-635d-452e-9f85-f19216207ad1",firstName:"Hadley",lastName:"Bartoletti",car:"Seville",age:37},{id:"9bdb532a-c747-4288-b2e9-e3f2dc7e0a15",firstName:"Willie",lastName:"Dunkerley",car:"Envoy",age:34},{id:"6b4413dd-1f77-4504-86ee-1ea5b90c6279",firstName:"Annamarie",lastName:"Burras",car:"Elantra",age:12},{id:"f17a5f2a-92a9-48a9-a05c-a3c44c66adb7",firstName:"Rebecca",lastName:"Thomason",car:"Elantra",age:6},{id:"85f7d4d2-3ae6-42ab-88dd-d4e810ebb76c",firstName:"Tatum",lastName:"Monte",car:"Achieva",age:53},{id:"3d374982-6cd9-4e6e-abf1-7de38eee4b68",firstName:"Tallie",lastName:"Goodlet",car:"Integra",age:81},{id:"ccded1ef-f648-4970-ae6e-882ba4d789fb",firstName:"Catrina",lastName:"Thunderman",car:"RX",age:91},{id:"3198513a-b05f-4d0d-8187-214f82f88531",firstName:"Aldric",lastName:"Awton",car:"Swift",age:78},{id:"35c3d0ce-52ea-4f30-8c17-b1e6b9878aa3",firstName:"Garry",lastName:"Ineson",car:"Discovery",age:25},{id:"c5ae799a-983f-4933-8a4d-cda754acedc0",firstName:"Alica",lastName:"Rubinfeld",car:"FX",age:20},{id:"cd9e5476-1ebb-46f0-926e-cee522e8d332",firstName:"Wenonah",lastName:"Blakey",car:"Cooper",age:96},{id:"17449829-4a8f-433c-8cb0-a869f153ea34",firstName:"Bevon",lastName:"Cushe",car:"GTI",age:23},{id:"d20d41a3-d9fe-492d-91df-51a962c515b9",firstName:"Marybeth",lastName:"Gauson",car:"MR2",age:53},{id:"cd046551-5df7-44b5-88b3-d1654a838214",firstName:"Kimball",lastName:"Bellhanger",car:"Ram 1500",age:56},{id:"a8114bdf-911d-410f-b90b-4c8a9c302743",firstName:"Cindelyn",lastName:"Beamont",car:"Monte Carlo",age:99},{id:"e31709ba-bf65-42d1-8c5c-60d461bc3e75",firstName:"Elfreda",lastName:"Riddles",car:"Montero",age:59},{id:"cd67179c-0c49-486d-baa9-8e956b362c2e",firstName:"Chickie",lastName:"Picheford",car:"Legend",age:56},{id:"b9b0b559-acc1-4bd8-b052-160ecf3e4f68",firstName:"Ermanno",lastName:"Sinott",car:"Thunderbird",age:26}],ma={title:"Experimental/InteractiveTable",component:K,parameters:{docs:{page:oa},controls:{exclude:pa}},args:{columns:[{id:"firstName",header:"First name",sortType:"string"},{id:"lastName",header:"Last name",sortType:"string"},{id:"car",header:"Car",sortType:"string"},{id:"age",header:"Age"}],data:J.slice(0,10),getRowId:a=>a.id,pageSize:0,showExpandAll:!1},argTypes:{}},ae={args:{columns:[{id:"firstName",header:"First name",sortType:"alphanumeric"},{id:"lastName",sortType:"alphanumeric"},{id:"car",header:"With missing values",sortType:"alphanumeric",disableGrow:!0}],data:[{id:"be5736f5-7015-4668-a03d-44b56f2b012c",firstName:"Sonni",lastName:"Still sortable!",car:"Legend",age:75},{id:"fdbe3559-c68a-4f2f-b579-48ef02642628",firstName:"Hanson",lastName:"Giraudeau",car:"X5",age:67},{id:"7d0ee01a-7ac5-4e0a-9c73-e864d10c0152",firstName:"Whitman",lastName:"Seabridge",age:99},{id:"177c2287-b7cb-4b5f-8976-56ee993bed61",firstName:"Aleda",lastName:"Friman",car:"X5",age:44},{id:"87c21e60-c2f4-4a01-b2af-a6d22c196e25",firstName:"Cullen",lastName:"Kobpac",car:"Montero",age:28},{id:"dd89f32d-2ef4-4c35-8e23-a8b2219e3a69",firstName:"Fitz",lastName:"Butterwick",car:"Fox",age:70},{id:"cc1b4de7-8ec5-49bd-93bc-bee9fa1ccf37",firstName:"Jordon",lastName:"Harrington",car:"Elantra",age:39}]}},te={args:{renderExpandedRow:({car:a})=>t.createElement("p",null,a)}},ne={args:{columns:[{id:"datasource",header:"Data Source"},{id:"repo",header:"Repo",cell:({row:{original:{repo:a}}})=>t.createElement(aa.z9,{href:a,size:"sm",icon:"external-link-alt"},"Open on GithHub")}],data:[{datasource:"Prometheus",repo:"https://github.com/prometheus/prometheus"},{datasource:"Loki",repo:"https://github.com/grafana/loki"},{datasource:"Tempo",repo:"https://github.com/grafana/tempo"}],getRowId:a=>a.datasource}},Z=a=>{const[e,n]=(0,t.useState)(""),_=(0,t.useMemo)(()=>e?J.filter(S=>S.firstName.toLowerCase().includes(e.toLowerCase())):J,[e]);return t.createElement(t.Fragment,null,t.createElement(ta.D,{label:"Filter data"},t.createElement(na.p,{placeholder:"Filter by first name",onChange:S=>{n(S.currentTarget.value)}})),t.createElement(K,w(h({},a),{data:_})))};Z.args={pageSize:15};const re={args:{headerTooltips:{age:{content:"The number of years since the person was born"},lastName:{content:()=>t.createElement(t.Fragment,null,t.createElement("h4",null,"Here is an h4"),t.createElement("div",null,"Some content"),t.createElement("div",null,"Some more content")),iconName:"plus-square"}}}},le=a=>{const[e,n]=(0,t.useState)(J),_=(0,t.useCallback)(({sortBy:S})=>{if(!S?.length)return n(J);setTimeout(()=>{const D=[...J];D.sort((z,Q)=>{const P=S[0],R=z[P.id],oe=Q[P.id];return P.desc?oe.localeCompare(R):R.localeCompare(oe)}),n(D)},300)},[]);return t.createElement(K,w(h({},a),{data:e,pageSize:15,fetchData:_}))};var fa=ma;ae.parameters=w(h({},ae.parameters),{docs:w(h({},(De=ae.parameters)==null?void 0:De.docs),{source:h({originalSource:`{
  args: {
    columns: [{
      id: 'firstName',
      header: 'First name',
      sortType: 'alphanumeric'
    }, {
      id: 'lastName',
      sortType: 'alphanumeric'
    }, {
      id: 'car',
      header: 'With missing values',
      sortType: 'alphanumeric',
      disableGrow: true
    }],
    data: [{
      id: 'be5736f5-7015-4668-a03d-44b56f2b012c',
      firstName: 'Sonni',
      lastName: 'Still sortable!',
      car: 'Legend',
      age: 75
    }, {
      id: 'fdbe3559-c68a-4f2f-b579-48ef02642628',
      firstName: 'Hanson',
      lastName: 'Giraudeau',
      car: 'X5',
      age: 67
    }, {
      id: '7d0ee01a-7ac5-4e0a-9c73-e864d10c0152',
      firstName: 'Whitman',
      lastName: 'Seabridge',
      age: 99
    }, {
      id: '177c2287-b7cb-4b5f-8976-56ee993bed61',
      firstName: 'Aleda',
      lastName: 'Friman',
      car: 'X5',
      age: 44
    }, {
      id: '87c21e60-c2f4-4a01-b2af-a6d22c196e25',
      firstName: 'Cullen',
      lastName: 'Kobpac',
      car: 'Montero',
      age: 28
    }, {
      id: 'dd89f32d-2ef4-4c35-8e23-a8b2219e3a69',
      firstName: 'Fitz',
      lastName: 'Butterwick',
      car: 'Fox',
      age: 70
    }, {
      id: 'cc1b4de7-8ec5-49bd-93bc-bee9fa1ccf37',
      firstName: 'Jordon',
      lastName: 'Harrington',
      car: 'Elantra',
      age: 39
    }]
  }
}`},(Re=(Pe=ae.parameters)==null?void 0:Pe.docs)==null?void 0:Re.source)})}),te.parameters=w(h({},te.parameters),{docs:w(h({},(Ae=te.parameters)==null?void 0:Ae.docs),{source:h({originalSource:`{
  args: {
    renderExpandedRow: ExpandedCell
  }
}`},(Me=(je=te.parameters)==null?void 0:je.docs)==null?void 0:Me.source)})}),ne.parameters=w(h({},ne.parameters),{docs:w(h({},(Ve=ne.parameters)==null?void 0:Ve.docs),{source:h({originalSource:`{
  args: {
    columns: [{
      id: 'datasource',
      header: 'Data Source'
    }, {
      id: 'repo',
      header: 'Repo',
      cell: RepoCell
    }],
    data: [{
      datasource: 'Prometheus',
      repo: 'https://github.com/prometheus/prometheus'
    }, {
      datasource: 'Loki',
      repo: 'https://github.com/grafana/loki'
    }, {
      datasource: 'Tempo',
      repo: 'https://github.com/grafana/tempo'
    }],
    getRowId: r => r.datasource
  }
}`},(Fe=(Be=ne.parameters)==null?void 0:Be.docs)==null?void 0:Fe.source)})}),Z.parameters=w(h({},Z.parameters),{docs:w(h({},(ke=Z.parameters)==null?void 0:ke.docs),{source:h({originalSource:`args => {
  const [filter, setFilter] = useState('');
  const data = useMemo(() => {
    if (filter) {
      return pageableData.filter(d => d.firstName.toLowerCase().includes(filter.toLowerCase()));
    }
    return pageableData;
  }, [filter]);
  return <>
      <Field label={'Filter data'}>
        <Input placeholder={'Filter by first name'} onChange={event => {
        setFilter(event.currentTarget.value);
      }} />
      </Field>
      <InteractiveTable {...args} data={data} />
    </>;
}`},(He=(We=Z.parameters)==null?void 0:We.docs)==null?void 0:He.source)})}),re.parameters=w(h({},re.parameters),{docs:w(h({},(Ke=re.parameters)==null?void 0:Ke.docs),{source:h({originalSource:`{
  args: {
    headerTooltips
  }
}`},(Le=(ze=re.parameters)==null?void 0:ze.docs)==null?void 0:Le.source)})}),le.parameters=w(h({},le.parameters),{docs:w(h({},(qe=le.parameters)==null?void 0:qe.docs),{source:h({originalSource:`args => {
  const [data, setData] = useState(pageableData);
  const fetchData = useCallback(({
    sortBy
  }: FetchDataArgs<CarData>) => {
    if (!sortBy?.length) {
      return setData(pageableData);
    }
    setTimeout(() => {
      const newData = [...pageableData];
      newData.sort((a, b) => {
        const sort = sortBy[0];
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        const aData = a[(sort.id as keyof Omit<CarData, 'age' | 'car'>)];
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        const bData = b[(sort.id as keyof Omit<CarData, 'age' | 'car'>)];
        if (sort.desc) {
          return bData.localeCompare(aData);
        }
        return aData.localeCompare(bData);
      });
      setData(newData);
    }, 300);
  }, []);
  return <InteractiveTable {...args} data={data} pageSize={15} fetchData={fetchData} />;
}`},(Ge=(Ue=le.parameters)==null?void 0:Ue.docs)==null?void 0:Ge.source)})})},"../grafana-data/src/types/data.ts":function(L,E,l){l.d(E,{Gu:function(){return t},UW:function(){return N},zz:function(){return m}});var t=(o=>(o.NotStarted="NotStarted",o.Loading="Loading",o.Streaming="Streaming",o.Done="Done",o.Error="Error",o))(t||{});const i=null;var N=(o=>(o.Null="null",o.Ignore="connected",o.AsZero="null as zero",o))(N||{});const m=o=>!!o;function s(o){return o}function v(o){return typeof o=="object"&&o!==null?!0:!1}},"../grafana-data/src/types/dataFrame.ts":function(L,E,l){l.d(E,{Bc:function(){return i},LE:function(){return N},PU:function(){return t}});var t=(s=>(s.time="time",s.number="number",s.string="string",s.boolean="boolean",s.trace="trace",s.geo="geo",s.enum="enum",s.other="other",s.frame="frame",s.nestedFrames="nestedFrames",s))(t||{});const i="Value",N="Time",m="Metric"},"./src/components/Badge/Badge.tsx":function(L,E,l){l.d(E,{E:function(){return f}});var t=l("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),i=l("../../node_modules/react/index.js"),N=l("../../node_modules/react-loading-skeleton/dist/index.js"),m=l("../../node_modules/tinycolor2/esm/tinycolor.js"),s=l("./src/themes/ThemeContext.tsx"),v=l("./src/utils/skeleton.tsx"),o=l("./src/components/Icon/Icon.tsx"),I=l("./src/components/Tooltip/Tooltip.tsx"),F=Object.defineProperty,T=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,U=(d,u,p)=>u in d?F(d,u,{enumerable:!0,configurable:!0,writable:!0,value:p}):d[u]=p,C=(d,u)=>{for(var p in u||(u={}))M.call(u,p)&&U(d,p,u[p]);if(T)for(var p of T(u))q.call(u,p)&&U(d,p,u[p]);return d},ee=(d,u)=>{var p={};for(var b in d)M.call(d,b)&&u.indexOf(b)<0&&(p[b]=d[b]);if(d!=null&&T)for(var b of T(d))u.indexOf(b)<0&&q.call(d,b)&&(p[b]=d[b]);return p};const G=i.memo(d=>{var u=d,{icon:p,color:b,text:V,tooltip:O,className:k}=u,X=ee(u,["icon","color","text","tooltip","className"]);const $=(0,s.of)(x,b),W=i.createElement("div",C({className:(0,t.cx)($.wrapper,k)},X),p&&i.createElement(o.I,{name:p,size:"sm"}),V);return O?i.createElement(I.m,{content:O,placement:"auto"},W):W});G.displayName="Badge";const c=({rootProps:d})=>{const u=(0,s.of)(g);return i.createElement(N.A,C({width:60,height:22,containerClassName:u.container},d))},f=(0,v.j)(G,c),g=()=>({container:(0,t.AH)({lineHeight:1})}),x=(d,u)=>{let p=d.visualization.getColorByName(u),b="",V="",O="";return d.isDark?(V=(0,m.A)(p).setAlpha(.15).toString(),b=(0,m.A)(p).setAlpha(.25).toString(),O=(0,m.A)(p).lighten(15).toString()):(V=(0,m.A)(p).setAlpha(.15).toString(),b=(0,m.A)(p).setAlpha(.25).toString(),O=(0,m.A)(p).darken(20).toString()),{wrapper:(0,t.AH)({display:"inline-flex",padding:"1px 4px",borderRadius:d.shape.radius.default,background:V,border:`1px solid ${b}`,color:O,fontWeight:d.typography.fontWeightRegular,gap:"2px",fontSize:d.typography.bodySmall.fontSize,lineHeight:d.typography.bodySmall.lineHeight,alignItems:"center"})}};try{f.displayName="Badge",f.__docgenInfo={description:"",displayName:"Badge",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"ReactNode"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"blue"'},{value:'"red"'},{value:'"green"'},{value:'"orange"'},{value:'"purple"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"play"'},{value:'"google"'},{value:'"microsoft"'},{value:'"github"'},{value:'"gitlab"'},{value:'"okta"'},{value:'"discord"'},{value:'"hipchat"'},{value:'"amazon"'},{value:'"google-hangouts-alt"'},{value:'"pagerduty"'},{value:'"line"'},{value:'"anchor"'},{value:'"adjust-circle"'},{value:'"angle-double-down"'},{value:'"angle-double-right"'},{value:'"angle-double-up"'},{value:'"angle-down"'},{value:'"angle-left"'},{value:'"angle-right"'},{value:'"angle-up"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"application-observability"'},{value:'"apps"'},{value:'"archive-alt"'},{value:'"arrow"'},{value:'"arrow-down"'},{value:'"arrow-from-right"'},{value:'"arrow-left"'},{value:'"arrow-random"'},{value:'"arrow-right"'},{value:'"arrow-to-right"'},{value:'"arrow-up"'},{value:'"arrows-h"'},{value:'"arrows-v"'},{value:'"asserts"'},{value:'"expand-arrows"'},{value:'"at"'},{value:'"ai"'},{value:'"backward"'},{value:'"bars"'},{value:'"bell"'},{value:'"bell-slash"'},{value:'"bolt"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"brackets-curly"'},{value:'"bug"'},{value:'"building"'},{value:'"calculator-alt"'},{value:'"calendar-alt"'},{value:'"calendar-slash"'},{value:'"camera"'},{value:'"capture"'},{value:'"channel-add"'},{value:'"chart-line"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"circle"'},{value:'"circle-mono"'},{value:'"clipboard-alt"'},{value:'"clock-nine"'},{value:'"cloud"'},{value:'"cloud-download"'},{value:'"cloud-upload"'},{value:'"code-branch"'},{value:'"cog"'},{value:'"columns"'},{value:'"comment-alt"'},{value:'"comment-alt-message"'},{value:'"comment-alt-share"'},{value:'"comments-alt"'},{value:'"compass"'},{value:'"copy"'},{value:'"corner-down-right-alt"'},{value:'"create-dashboard"'},{value:'"credit-card"'},{value:'"crosshair"'},{value:'"cube"'},{value:'"dashboard"'},{value:'"database"'},{value:'"dice-three"'},{value:'"docker"'},{value:'"document-info"'},{value:'"document-layout-left"'},{value:'"download-alt"'},{value:'"draggabledots"'},{value:'"edit"'},{value:'"ellipsis-v"'},{value:'"enter"'},{value:'"envelope"'},{value:'"exchange-alt"'},{value:'"exclamation-triangle"'},{value:'"exclamation-circle"'},{value:'"external-link-alt"'},{value:'"eye"'},{value:'"eye-slash"'},{value:'"ellipsis-h"'},{value:'"fa fa-spinner"'},{value:'"favorite"'},{value:'"file-alt"'},{value:'"file-blank"'},{value:'"file-copy-alt"'},{value:'"file-download"'},{value:'"file-edit-alt"'},{value:'"file-landscape-alt"'},{value:'"filter"'},{value:'"flip"'},{value:'"folder"'},{value:'"font"'},{value:'"fire"'},{value:'"folder-open"'},{value:'"folder-plus"'},{value:'"folder-upload"'},{value:'"forward"'},{value:'"frontend-observability"'},{value:'"gf-bar-alignment-after"'},{value:'"gf-bar-alignment-before"'},{value:'"gf-bar-alignment-center"'},{value:'"gf-glue"'},{value:'"gf-grid"'},{value:'"gf-interpolation-linear"'},{value:'"gf-interpolation-smooth"'},{value:'"gf-interpolation-step-after"'},{value:'"gf-interpolation-step-before"'},{value:'"gf-landscape"'},{value:'"gf-layout-simple"'},{value:'"gf-logs"'},{value:'"gf-ml"'},{value:'"gf-movepane-left"'},{value:'"gf-movepane-right"'},{value:'"gf-portrait"'},{value:'"gf-service-account"'},{value:'"gf-show-context"'},{value:'"gf-pin"'},{value:'"gf-prometheus"'},{value:'"gf-traces"'},{value:'"globe"'},{value:'"grafana"'},{value:'"graph-bar"'},{value:'"heart"'},{value:'"heart-rate"'},{value:'"heart-break"'},{value:'"history"'},{value:'"history-alt"'},{value:'"home"'},{value:'"home-alt"'},{value:'"horizontal-align-center"'},{value:'"horizontal-align-left"'},{value:'"horizontal-align-right"'},{value:'"hourglass"'},{value:'"import"'},{value:'"info"'},{value:'"info-circle"'},{value:'"k6"'},{value:'"key-skeleton-alt"'},{value:'"keyboard"'},{value:'"layer-group"'},{value:'"layers-alt"'},{value:'"library-panel"'},{value:'"line-alt"'},{value:'"link"'},{value:'"list-ui-alt"'},{value:'"list-ul"'},{value:'"list-ol"'},{value:'"lock"'},{value:'"map-marker"'},{value:'"map-marker-plus"'},{value:'"map-marker-minus"'},{value:'"message"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"mobile-android"'},{value:'"monitor"'},{value:'"palette"'},{value:'"panel-add"'},{value:'"paragraph"'},{value:'"pathfinder-unite"'},{value:'"pause"'},{value:'"pen"'},{value:'"percentage"'},{value:'"plug"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-square"'},{value:'"power"'},{value:'"presentation-play"'},{value:'"process"'},{value:'"question-circle"'},{value:'"record-audio"'},{value:'"repeat"'},{value:'"rocket"'},{value:'"ruler-combined"'},{value:'"save"'},{value:'"search"'},{value:'"search-minus"'},{value:'"search-plus"'},{value:'"share-alt"'},{value:'"shield"'},{value:'"shield-exclamation"'},{value:'"signal"'},{value:'"signin"'},{value:'"signout"'},{value:'"sitemap"'},{value:'"slack"'},{value:'"sliders-v-alt"'},{value:'"spinner"'},{value:'"sort-amount-down"'},{value:'"sort-amount-up"'},{value:'"square-shape"'},{value:'"star"'},{value:'"step-backward"'},{value:'"stopwatch"'},{value:'"stopwatch-slash"'},{value:'"sync"'},{value:'"sync-slash"'},{value:'"table"'},{value:'"table-collapse-all"'},{value:'"table-expand-all"'},{value:'"tag-alt"'},{value:'"telegram-alt"'},{value:'"text-fields"'},{value:'"thumbs-up"'},{value:'"times"'},{value:'"times-circle"'},{value:'"toggle-on"'},{value:'"toggle-off"'},{value:'"trash-alt"'},{value:'"unarchive"'},{value:'"unlock"'},{value:'"upload"'},{value:'"user"'},{value:'"users-alt"'},{value:'"user-arrows"'},{value:'"vertical-align-bottom"'},{value:'"vertical-align-center"'},{value:'"vertical-align-top"'},{value:'"web-section-alt"'},{value:'"wrap-text"'},{value:'"rss"'},{value:'"x"'}]}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#Badge"]={docgenInfo:f.__docgenInfo,name:"Badge",path:"src/components/Badge/Badge.tsx#Badge"})}catch{}},"./src/components/Forms/Field.tsx":function(L,E,l){l.d(E,{D:function(){return C}});var t=l("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),i=l("../../node_modules/react/index.js"),N=l("./src/themes/ThemeContext.tsx"),m=l("./src/utils/reactUtils.ts"),s=l("./src/components/Forms/FieldValidationMessage.tsx"),v=l("./src/components/Forms/Label.tsx"),o=Object.defineProperty,I=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,M=(c,f,g)=>f in c?o(c,f,{enumerable:!0,configurable:!0,writable:!0,value:g}):c[f]=g,q=(c,f)=>{for(var g in f||(f={}))F.call(f,g)&&M(c,g,f[g]);if(I)for(var g of I(f))T.call(f,g)&&M(c,g,f[g]);return c},U=(c,f)=>{var g={};for(var x in c)F.call(c,x)&&f.indexOf(x)<0&&(g[x]=c[x]);if(c!=null&&I)for(var x of I(c))f.indexOf(x)<0&&T.call(c,x)&&(g[x]=c[x]);return g};const C=i.forwardRef((c,f)=>{var g=c,{label:x,description:d,horizontal:u,invalid:p,loading:b,disabled:V,required:O,error:k,children:X,className:$,validationMessageHorizontalOverflow:W,htmlFor:ce}=g,ue=U(g,["label","description","horizontal","invalid","loading","disabled","required","error","children","className","validationMessageHorizontalOverflow","htmlFor"]);const B=(0,N.of)(G),ve=ce??(0,m.e)(X),be=typeof x=="string"?i.createElement(v.J,{htmlFor:ve,description:d},`${x}${O?" *":""}`):x,ye=ee({invalid:p,disabled:V,loading:b});return i.createElement("div",q({className:(0,t.cx)(B.field,u&&B.fieldHorizontal,$)},ue),be,i.createElement("div",null,i.createElement("div",{ref:f},i.cloneElement(X,ye)),p&&k&&!u&&i.createElement("div",{className:(0,t.cx)(B.fieldValidationWrapper,{[B.validationMessageHorizontalOverflow]:!!W})},i.createElement(s.P,null,k))),p&&k&&u&&i.createElement("div",{className:(0,t.cx)(B.fieldValidationWrapper,B.fieldValidationWrapperHorizontal,{[B.validationMessageHorizontalOverflow]:!!W})},i.createElement(s.P,null,k)))});C.displayName="Field";function ee(c){for(const f in c)c[f]===void 0&&delete c[f];return c}const G=c=>({field:(0,t.AH)({display:"flex",flexDirection:"column",marginBottom:c.spacing(2)}),fieldHorizontal:(0,t.AH)({flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap"}),fieldValidationWrapper:(0,t.AH)({marginTop:c.spacing(.5)}),fieldValidationWrapperHorizontal:(0,t.AH)({flex:"1 1 100%"}),validationMessageHorizontalOverflow:(0,t.AH)({width:0,overflowX:"visible","& > *":{whiteSpace:"nowrap"}})});try{C.displayName="Field",C.__docgenInfo={description:"",displayName:"Field",props:{children:{defaultValue:null,description:"Form input element, i.e Input or Switch",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},label:{defaultValue:null,description:"Label for the field",name:"label",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Description of the field",name:"description",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:null,description:"Indicates if field is in invalid state",name:"invalid",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"Indicates if field is in loading state",name:"loading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Indicates if field is disabled",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Indicates if field is required",name:"required",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Error message to display",name:"error",required:!1,type:{name:"ReactNode"}},horizontal:{defaultValue:null,description:"Indicates horizontal layout of the field",name:"horizontal",required:!1,type:{name:"boolean"}},validationMessageHorizontalOverflow:{defaultValue:null,description:"make validation message overflow horizontally. Prevents pushing out adjacent inline components",name:"validationMessageHorizontalOverflow",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},htmlFor:{defaultValue:null,description:"A unique id that associates the label of the Field component with the control with the unique id.\nIf the `htmlFor` property is missing the `htmlFor` will be inferred from the `id` or `inputId` property of the first child.\nhttps://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attr-for",name:"htmlFor",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Forms/Field.tsx#Field"]={docgenInfo:C.__docgenInfo,name:"Field",path:"src/components/Forms/Field.tsx#Field"})}catch{}},"./src/components/Forms/FieldValidationMessage.tsx":function(L,E,l){l.d(E,{P:function(){return s}});var t=l("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),i=l("../../node_modules/react/index.js"),N=l("./src/themes/ThemeContext.tsx"),m=l("./src/components/Icon/Icon.tsx");const s=({children:o,horizontal:I,className:F})=>{const T=(0,N.of)(v),M=(0,t.cx)(I?T.horizontal:T.vertical,F);return i.createElement("div",{role:"alert",className:M},i.createElement(m.I,{className:T.fieldValidationMessageIcon,name:"exclamation-triangle"}),o)},v=o=>{const I=`
      font-size: ${o.typography.size.sm};
      font-weight: ${o.typography.fontWeightMedium};
      padding: ${o.spacing(.5,1)};
      color: ${o.colors.error.contrastText};
      background: ${o.colors.error.main};
      border-radius: ${o.shape.radius.default};
      position: relative;
      display: inline-block;
      align-self: flex-start;

      a {
        color: ${o.colors.error.contrastText};
        text-decoration: underline;
      }

      a:hover {
        text-decoration: none;
      }
    `;return{vertical:(0,t.AH)(I,{margin:o.spacing(.5,0,0,0),"&:before":{content:'""',position:"absolute",left:"9px",top:"-5px",width:0,height:0,borderWidth:"0 4px 5px 4px",borderColor:`transparent transparent ${o.colors.error.main} transparent`,borderStyle:"solid"}}),horizontal:(0,t.AH)(I,{marginLeft:"10px","&:before":{content:'""',position:"absolute",left:"-5px",top:"9px",width:0,height:0,borderWidth:"4px 5px 4px 0",borderColor:"transparent #e02f44 transparent transparent",borderStyle:"solid"}}),fieldValidationMessageIcon:(0,t.AH)({marginRight:o.spacing()})}};try{s.displayName="FieldValidationMessage",s.__docgenInfo={description:"",displayName:"FieldValidationMessage",props:{className:{defaultValue:null,description:"Override component style",name:"className",required:!1,type:{name:"string"}},horizontal:{defaultValue:null,description:"",name:"horizontal",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Forms/FieldValidationMessage.tsx#FieldValidationMessage"]={docgenInfo:s.__docgenInfo,name:"FieldValidationMessage",path:"src/components/Forms/FieldValidationMessage.tsx#FieldValidationMessage"})}catch{}try{v.displayName="getFieldValidationMessageStyles",v.__docgenInfo={description:"",displayName:"getFieldValidationMessageStyles",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},isDark:{defaultValue:null,description:"",name:"isDark",required:!0,type:{name:"boolean"}},isLight:{defaultValue:null,description:"",name:"isLight",required:!0,type:{name:"boolean"}},colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"ThemeColors"}},breakpoints:{defaultValue:null,description:"",name:"breakpoints",required:!0,type:{name:"ThemeBreakpoints"}},spacing:{defaultValue:null,description:"",name:"spacing",required:!0,type:{name:"ThemeSpacing"}},shape:{defaultValue:null,description:"",name:"shape",required:!0,type:{name:"ThemeShape"}},components:{defaultValue:null,description:"",name:"components",required:!0,type:{name:"ThemeComponents"}},typography:{defaultValue:null,description:"",name:"typography",required:!0,type:{name:"ThemeTypography"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!0,type:{name:"{ activePanel: number; navbarFixed: number; sidemenu: number; dropdown: number; typeahead: number; tooltip: number; modalBackdrop: number; modal: number; portal: number; }"}},shadows:{defaultValue:null,description:"",name:"shadows",required:!0,type:{name:"ThemeShadows"}},visualization:{defaultValue:null,description:"",name:"visualization",required:!0,type:{name:"ThemeVisualizationColors"}},transitions:{defaultValue:null,description:"",name:"transitions",required:!0,type:{name:"ThemeTransitions"}},v1:{defaultValue:null,description:"@deprecated Will be removed in a future version",name:"v1",required:!0,type:{name:"GrafanaTheme"}},flags:{defaultValue:null,description:"feature flags that might impact component looks",name:"flags",required:!0,type:{name:"{}"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Forms/FieldValidationMessage.tsx#getFieldValidationMessageStyles"]={docgenInfo:v.__docgenInfo,name:"getFieldValidationMessageStyles",path:"src/components/Forms/FieldValidationMessage.tsx#getFieldValidationMessageStyles"})}catch{}},"./src/utils/reactUtils.ts":function(L,E,l){l.d(E,{b:function(){return N},e:function(){return i}});var t=l("../../node_modules/react/index.js");function i(m){let s;const v=t.Children.only(m);return"id"in v?.props?s=v.props.id:"inputId"in v.props&&(s=v?.props.inputId),typeof s=="string"?s:void 0}function N(m,s){if(t.isValidElement(m)||typeof m=="string"||typeof m=="number")return m;if(typeof m=="function"&&s)return m(s);throw new Error(`${m} is not a React element nor a function that returns React element`)}}}]);
