"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[5971],{"../grafana-e2e-selectors/src/selectors/components.ts":function(r,o,i){i.d(o,{X:function(){return a}});const a={RadioButton:{container:"data-testid radio-button"},Breadcrumbs:{breadcrumb:t=>`data-testid ${t} breadcrumb`},TimePicker:{openButton:"data-testid TimePicker Open Button",overlayContent:"data-testid TimePicker Overlay Content",fromField:"data-testid Time Range from field",toField:"data-testid Time Range to field",applyTimeRange:"data-testid TimePicker submit button",copyTimeRange:"data-testid TimePicker copy button",pasteTimeRange:"data-testid TimePicker paste button",calendar:{label:"data-testid Time Range calendar",openButton:"data-testid Open time range calendar",closeButton:"data-testid Close time range Calendar"},absoluteTimeRangeTitle:"data-testid-absolute-time-range-narrow"},DataSourcePermissions:{form:()=>'form[name="addPermission"]',roleType:"Role to add new permission to",rolePicker:"Built-in role picker",permissionLevel:"Permission Level"},DateTimePicker:{input:"data-testid date-time-input"},DataSource:{TestData:{QueryTab:{scenarioSelectContainer:"Test Data Query scenario select container",scenarioSelect:"Test Data Query scenario select",max:"TestData max",min:"TestData min",noise:"TestData noise",seriesCount:"TestData series count",spread:"TestData spread",startValue:"TestData start value",drop:"TestData drop values"}},DataSourceHttpSettings:{urlInput:"data-testid Datasource HTTP settings url"},Jaeger:{traceIDInput:"Trace ID"},Prometheus:{configPage:{connectionSettings:"Data source connection URL",manageAlerts:"prometheus-alerts-manager",scrapeInterval:"data-testid scrape interval",queryTimeout:"data-testid query timeout",defaultEditor:"data-testid default editor",disableMetricLookup:"disable-metric-lookup",prometheusType:"data-testid prometheus type",prometheusVersion:"data-testid prometheus version",cacheLevel:"data-testid cache level",incrementalQuerying:"prometheus-incremental-querying",queryOverlapWindow:"data-testid query overlap window",disableRecordingRules:"disable-recording-rules",customQueryParameters:"data-testid custom query parameters",httpMethod:"data-testid http method",exemplarsAddButton:"data-testid Add exemplar config button",internalLinkSwitch:"data-testid Internal link switch"},queryEditor:{explain:"data-testid prometheus explain switch wrapper",editorToggle:"data-testid QueryEditorModeToggle",options:"data-testid prometheus options",legend:"data-testid prometheus legend wrapper",format:"data-testid prometheus format",step:"prometheus-step",type:"data-testid prometheus type",exemplars:"prometheus-exemplars",builder:{metricSelect:"data-testid metric select",hints:"data-testid prometheus hints",metricsExplorer:"data-testid metrics explorer",queryAdvisor:"data-testid query advisor"},code:{queryField:"data-testid prometheus query field",metricsBrowser:{openButton:"data-testid open metrics browser",selectMetric:"data-testid select a metric",metricList:"data-testid metric list",labelNamesFilter:"data-testid label names filter",labelValuesFilter:"data-testid label values filter",useQuery:"data-testid use query",useAsRateQuery:"data-testid use as rate query",validateSelector:"data-testid validate selector",clear:"data-testid clear"}}},exemplarMarker:"data-testid Exemplar marker",variableQueryEditor:{queryType:"data-testid query type",labelnames:{metricRegex:"data-testid label names metric regex"},labelValues:{labelSelect:"data-testid label values label select"},metricNames:{metricRegex:"data-testid metric names metric regex"},varQueryResult:"data-testid variable query result",seriesQuery:"data-testid prometheus series query",classicQuery:"data-testid prometheus classic query"},annotations:{minStep:"prometheus-annotation-min-step",title:"data-testid prometheus annotation title",tags:"data-testid prometheus annotation tags",text:"data-testid prometheus annotation text",seriesValueAsTimestamp:"data-testid prometheus annotation series value as timestamp"}}},Menu:{MenuComponent:t=>`${t} menu`,MenuGroup:t=>`${t} menu group`,MenuItem:t=>`${t} menu item`,SubMenu:{container:"data-testid SubMenu container",icon:"data-testid SubMenu icon"}},Panels:{Panel:{title:t=>`data-testid Panel header ${t}`,headerItems:t=>`data-testid Panel header item ${t}`,menuItems:t=>`data-testid Panel menu item ${t}`,menu:t=>`data-testid Panel menu ${t}`,containerByTitle:t=>`${t} panel`,headerCornerInfo:t=>`Panel header ${t}`,status:t=>`data-testid Panel status ${t}`,loadingBar:()=>"Panel loading bar",HoverWidget:{container:"data-testid hover-header-container",dragIcon:"data-testid drag-icon"},PanelDataErrorMessage:"data-testid Panel data error message"},Visualization:{Graph:{container:"Graph container",VisualizationTab:{legendSection:"Legend section"},Legend:{legendItemAlias:t=>`gpl alias ${t}`,showLegendSwitch:"gpl show legend"},xAxis:{labels:()=>"div.flot-x-axis > div.flot-tick-label"}},BarGauge:{value:"Bar gauge value",valueV2:"data-testid Bar gauge value"},PieChart:{svgSlice:"data testid Pie Chart Slice"},Text:{container:()=>".markdown-html"},Table:{header:"table header",footer:"table-footer",body:"data-testid table body"}}},VizLegend:{seriesName:t=>`data-testid VizLegend series ${t}`},Drawer:{General:{title:t=>`Drawer title ${t}`,expand:"Drawer expand",contract:"Drawer contract",close:"data-testid Drawer close",rcContentWrapper:()=>".rc-drawer-content-wrapper",subtitle:"data-testid drawer subtitle"},DashboardSaveDrawer:{saveButton:"data-testid Save dashboard drawer button",saveAsButton:"data-testid Save as dashboard drawer button",saveAsTitleInput:"Save dashboard title field"}},PanelEditor:{General:{content:"Panel editor content"},OptionsPane:{content:"Panel editor option pane content",select:"Panel editor option pane select",fieldLabel:t=>`${t} field property editor`,fieldInput:t=>`data-testid Panel editor option pane field input ${t}`},DataPane:{content:"Panel editor data pane content"},applyButton:"data-testid Apply changes and go back to dashboard",toggleVizPicker:"data-testid toggle-viz-picker",toggleVizOptions:"data-testid toggle-viz-options",toggleTableView:"toggle-table-view",showZoomField:"Map controls Show zoom control field property editor",showAttributionField:"Map controls Show attribution field property editor",showScaleField:"Map controls Show scale field property editor",showMeasureField:"Map controls Show measure tools field property editor",showDebugField:"Map controls Show debug field property editor",measureButton:"show measure tools"},PanelInspector:{Data:{content:"Panel inspector Data content"},Stats:{content:"Panel inspector Stats content"},Json:{content:"Panel inspector Json content"},Query:{content:"Panel inspector Query content",refreshButton:"Panel inspector Query refresh button",jsonObjectKeys:()=>".json-formatter-key"}},Tab:{title:t=>`Tab ${t}`,active:()=>'[class*="-activeTabStyle"]'},RefreshPicker:{runButton:"RefreshPicker run button",intervalButton:"RefreshPicker interval button",runButtonV2:"data-testid RefreshPicker run button",intervalButtonV2:"data-testid RefreshPicker interval button"},QueryTab:{content:"Query editor tab content",queryInspectorButton:"Query inspector button",queryHistoryButton:"data-testid query-history-button",addQuery:"data-testid query-tab-add-query",queryGroupTopSection:"data-testid query group top section",addExpression:"data-testid query-tab-add-expression"},QueryHistory:{queryText:"Query text"},QueryEditorRows:{rows:"Query editor row"},QueryEditorRow:{actionButton:t=>`data-testid ${t}`,title:t=>`Query editor row title ${t}`,container:t=>`Query editor row ${t}`},AlertTab:{content:"data-testid Alert editor tab content"},AlertRules:{groupToggle:"data-testid group-collapse-toggle",toggle:"data-testid collapse-toggle",expandedContent:"data-testid expanded-content"},Alert:{alert:t=>`Alert ${t}`,alertV2:t=>`data-testid Alert ${t}`},TransformTab:{content:"data-testid Transform editor tab content",newTransform:t=>`data-testid New transform ${t}`,transformationEditor:t=>`data-testid Transformation editor ${t}`,transformationEditorDebugger:t=>`data-testid Transformation editor debugger ${t}`},Transforms:{card:t=>`data-testid New transform ${t}`,disableTransformationButton:"data-testid Disable transformation button",Reduce:{modeLabel:"data-testid Transform mode label",calculationsLabel:"data-testid Transform calculations label"},SpatialOperations:{actionLabel:"root Action field property editor",locationLabel:"root Location Mode field property editor",location:{autoOption:"Auto location option",coords:{option:"Coords location option",latitudeFieldLabel:"root Latitude field field property editor",longitudeFieldLabel:"root Longitude field field property editor"},geohash:{option:"Geohash location option",geohashFieldLabel:"root Geohash field field property editor"},lookup:{option:"Lookup location option",lookupFieldLabel:"root Lookup field field property editor",gazetteerFieldLabel:"root Gazetteer field property editor"}}},searchInput:"data-testid search transformations",noTransformationsMessage:"data-testid no transformations message",addTransformationButton:"data-testid add transformation button",removeAllTransformationsButton:"data-testid remove all transformations button"},NavBar:{Configuration:{button:"Configuration"},Toggle:{button:"data-testid Toggle menu"},Reporting:{button:"Reporting"}},NavMenu:{Menu:"data-testid navigation mega-menu",item:"data-testid Nav menu item"},NavToolbar:{container:"data-testid Nav toolbar",shareDashboard:"data-testid Share dashboard",markAsFavorite:"data-testid Mark as favorite",editDashboard:{editButton:"data-testid Edit dashboard button",saveButton:"data-testid Save dashboard button",exitButton:"data-testid Exit edit mode button",settingsButton:"data-testid Dashboard settings",addRowButton:"data-testid Add row button",addLibraryPanelButton:"data-testid Add a panel from the panel library button",addVisualizationButton:"data-testid Add new visualization menu item",pastePanelButton:"data-testid Paste panel button",discardChangesButton:"data-testid Discard changes button",discardLibraryPanelButton:"data-testid Discard library panel button",unlinkLibraryPanelButton:"data-testid Unlink library panel button",saveLibraryPanelButton:"data-testid Save library panel button",backToDashboardButton:"data-testid Back to dashboard button"}},PageToolbar:{container:()=>".page-toolbar",item:t=>`${t}`,itemButton:t=>`data-testid ${t}`},QueryEditorToolbarItem:{button:t=>`QueryEditor toolbar item button ${t}`},BackButton:{backArrow:"data-testid Go Back"},OptionsGroup:{group:t=>t?`Options group ${t}`:"Options group",toggle:t=>t?`Options group ${t} toggle`:"Options group toggle"},PluginVisualization:{item:t=>`Plugin visualization item ${t}`,current:()=>'[class*="-currentVisualizationItem"]'},Select:{option:"Select option",input:()=>'input[id*="time-options-input"]',singleValue:()=>'div[class*="-singleValue"]'},FieldConfigEditor:{content:"Field config editor content"},OverridesConfigEditor:{content:"Field overrides editor content"},FolderPicker:{container:"Folder picker select container",containerV2:"data-testid Folder picker select container",input:"data-testid folder-picker-input"},ReadonlyFolderPicker:{container:"data-testid Readonly folder picker select container"},DataSourcePicker:{container:"data-testid Data source picker select container",input:()=>'input[id="data-source-picker"]',inputV2:"data-testid Select a data source",dataSourceList:"data-testid Data source list dropdown",advancedModal:{dataSourceList:"data-testid Data source list",builtInDataSourceList:"data-testid Built in data source list"}},TimeZonePicker:{container:"Time zone picker select container",containerV2:"data-testid Time zone picker select container",changeTimeSettingsButton:"data-testid Time zone picker Change time settings button"},WeekStartPicker:{container:"Choose starting day of the week",containerV2:"data-testid Choose starting day of the week",placeholder:"Choose starting day of the week"},TraceViewer:{spanBar:"data-testid SpanBar--wrapper"},QueryField:{container:"data-testid Query field"},QueryBuilder:{queryPatterns:"data-testid Query patterns",labelSelect:"data-testid Select label",valueSelect:"data-testid Select value",matchOperatorSelect:"data-testid Select match operator"},ValuePicker:{button:t=>`data-testid Value picker button ${t}`,select:t=>`data-testid Value picker select ${t}`},Search:{section:"Search section",sectionV2:"data-testid Search section",items:"Search items",itemsV2:"data-testid Search items",cards:"data-testid Search cards",collapseFolder:t=>`data-testid Collapse folder ${t}`,expandFolder:t=>`data-testid Expand folder ${t}`,dashboardItem:t=>`${a.Search.dashboardItems} ${t}`,dashboardCard:t=>`data-testid Search card ${t}`,folderHeader:t=>`data-testid Folder header ${t}`,folderContent:t=>`data-testid Folder content ${t}`,dashboardItems:"data-testid Dashboard search item"},DashboardLinks:{container:"data-testid Dashboard link container",dropDown:"data-testid Dashboard link dropdown",link:"data-testid Dashboard link"},LoadingIndicator:{icon:"data-testid Loading indicator"},CallToActionCard:{button:t=>`Call to action button ${t}`,buttonV2:t=>`data-testid Call to action button ${t}`},DataLinksContextMenu:{singleLink:"data-testid Data link"},CodeEditor:{container:"data-testid Code editor container"},DashboardImportPage:{textarea:"data-testid-import-dashboard-textarea",submit:"data-testid-load-dashboard"},ImportDashboardForm:{name:"data-testid-import-dashboard-title",submit:"data-testid-import-dashboard-submit"},PanelAlertTabContent:{content:"data-testid Unified alert editor tab content"},VisualizationPreview:{card:t=>`data-testid suggestion-${t}`},ColorSwatch:{name:"data-testid-colorswatch"},DashboardRow:{title:t=>`data-testid dashboard-row-title-${t}`},UserProfile:{profileSaveButton:"data-testid-user-profile-save",preferencesSaveButton:"data-testid-shared-prefs-save",orgsTable:"data-testid-user-orgs-table",sessionsTable:"data-testid-user-sessions-table",extensionPointTabs:"data-testid-extension-point-tabs",extensionPointTab:t=>`data-testid-extension-point-tab-${t}`},FileUpload:{inputField:"data-testid-file-upload-input-field",fileNameSpan:"data-testid-file-upload-file-name"},DebugOverlay:{wrapper:"debug-overlay"},OrgRolePicker:{input:"Role"},AnalyticsToolbarButton:{button:"Dashboard insights"},Variables:{variableOption:"data-testid variable-option"},Annotations:{annotationsTypeInput:"annotations-type-input",annotationsChoosePanelInput:"choose-panels-input",editor:{testButton:"data-testid annotations-test-button",resultContainer:"data-testid annotations-query-result-container"}},Tooltip:{container:"data-testid tooltip"},ReturnToPrevious:{buttonGroup:"data-testid dismissable button group",backButton:"data-testid back",dismissButton:"data-testid dismiss"},SQLQueryEditor:{selectColumn:"data-testid select-column",selectAggregation:"data-testid select-aggregation",selectAlias:"data-testid select-alias",filterConjunction:"data-testid filter-conjunction",filterField:"data-testid filter-field",filterOperator:"data-testid filter-operator",headerTableSelector:"data-testid header-table-selector",headerFilterSwitch:"data-testid header-filter-switch",headerGroupSwitch:"data-testid header-group-switch",headerOrderSwitch:"data-testid header-order-switch",headerPreviewSwitch:"data-testid header-preview-switch"}}},"../grafana-e2e-selectors/src/selectors/index.ts":function(r,o,i){i.d(o,{Tp:function(){return s}});var a=i("../grafana-e2e-selectors/src/selectors/components.ts");const s={pages:{Login:{url:"/login",username:"data-testid Username input field",password:"data-testid Password input field",submit:"data-testid Login button",skip:"data-testid Skip change password button"},Home:{url:"/"},DataSource:{name:"data-testid Data source settings page name input field",delete:"Data source settings page Delete button",readOnly:"data-testid Data source settings page read only message",saveAndTest:"data-testid Data source settings page Save and Test button",alert:"data-testid Data source settings page Alert"},DataSources:{url:"/datasources",dataSources:e=>`Data source list item ${e}`},EditDataSource:{url:e=>`/datasources/edit/${e}`,settings:"Datasource settings page basic settings"},AddDataSource:{url:"/datasources/new",dataSourcePlugins:e=>`Data source plugin item ${e}`,dataSourcePluginsV2:e=>`Add new data source ${e}`},ConfirmModal:{delete:"data-testid Confirm Modal Danger Button"},AddDashboard:{url:"/dashboard/new",itemButton:e=>`data-testid ${e}`,addNewPanel:"Add new panel",addNewRow:"Add new row",addNewPanelLibrary:"Add new panel from panel library"},Dashboard:{url:e=>`/d/${e}`,DashNav:{nav:"Dashboard navigation",navV2:"data-testid Dashboard navigation",publicDashboardTag:"data-testid public dashboard tag",shareButton:"data-testid share-button",scrollContainer:"data-testid Dashboard canvas scroll container",playlistControls:{prev:"data-testid playlist previous dashboard button",stop:"data-testid playlist stop dashboard button",next:"data-testid playlist next dashboard button"}},SubMenu:{submenu:"Dashboard submenu",submenuItem:"data-testid template variable",submenuItemLabels:e=>`data-testid Dashboard template variables submenu Label ${e}`,submenuItemValueDropDownValueLinkTexts:e=>`data-testid Dashboard template variables Variable Value DropDown value link text ${e}`,submenuItemValueDropDownDropDown:"Variable options",submenuItemValueDropDownOptionTexts:e=>`data-testid Dashboard template variables Variable Value DropDown option text ${e}`,Annotations:{annotationsWrapper:"data-testid annotation-wrapper",annotationLabel:e=>`data-testid Dashboard annotations submenu Label ${e}`,annotationToggle:e=>`data-testid Dashboard annotations submenu Toggle ${e}`}},Settings:{Actions:{close:"data-testid dashboard-settings-close"},General:{deleteDashBoard:"Dashboard settings page delete dashboard button",sectionItems:e=>`Dashboard settings section item ${e}`,saveDashBoard:"Dashboard settings aside actions Save button",saveAsDashBoard:"Dashboard settings aside actions Save As button",timezone:"Time zone picker select container",title:"Tab General"},Annotations:{List:{addAnnotationCTA:a.X.CallToActionCard.button("Add annotation query"),addAnnotationCTAV2:a.X.CallToActionCard.buttonV2("Add annotation query"),annotations:"data-testid list-annotations"},Settings:{name:"Annotations settings name input"},NewAnnotation:{panelFilterSelect:"data-testid annotations-panel-filter",showInLabel:"show-in-label",previewInDashboard:"data-testid annotations-preview",delete:"data-testid annotations-delete",apply:"data-testid annotations-apply",enable:"data-testid annotation-enable",hide:"data-testid annotation-hide"}},Variables:{List:{addVariableCTA:a.X.CallToActionCard.button("Add variable"),addVariableCTAV2:a.X.CallToActionCard.buttonV2("Add variable"),newButton:"Variable editor New variable button",table:"Variable editor Table",tableRowNameFields:e=>`Variable editor Table Name field ${e}`,tableRowDefinitionFields:e=>`Variable editor Table Definition field ${e}`,tableRowArrowUpButtons:e=>`Variable editor Table ArrowUp button ${e}`,tableRowArrowDownButtons:e=>`Variable editor Table ArrowDown button ${e}`,tableRowDuplicateButtons:e=>`Variable editor Table Duplicate button ${e}`,tableRowRemoveButtons:e=>`Variable editor Table Remove button ${e}`},Edit:{General:{headerLink:"Variable editor Header link",modeLabelNew:"Variable editor Header mode New",modeLabelEdit:"Variable editor Header mode Edit",generalNameInput:"Variable editor Form Name field",generalNameInputV2:"data-testid Variable editor Form Name field",generalTypeSelect:"Variable editor Form Type select",generalTypeSelectV2:"data-testid Variable editor Form Type select",generalLabelInput:"Variable editor Form Label field",generalLabelInputV2:"data-testid Variable editor Form Label field",generalHideSelect:"Variable editor Form Hide select",generalHideSelectV2:"data-testid Variable editor Form Hide select",selectionOptionsMultiSwitch:"data-testid Variable editor Form Multi switch",selectionOptionsIncludeAllSwitch:"data-testid Variable editor Form IncludeAll switch",selectionOptionsCustomAllInput:"data-testid Variable editor Form IncludeAll field",previewOfValuesOption:"data-testid Variable editor Preview of Values option",submitButton:"data-testid Variable editor Run Query button",applyButton:"data-testid Variable editor Apply button"},QueryVariable:{queryOptionsDataSourceSelect:a.X.DataSourcePicker.inputV2,queryOptionsRefreshSelect:"Variable editor Form Query Refresh select",queryOptionsRefreshSelectV2:"data-testid Variable editor Form Query Refresh select",queryOptionsRegExInput:"Variable editor Form Query RegEx field",queryOptionsRegExInputV2:"data-testid Variable editor Form Query RegEx field",queryOptionsSortSelect:"Variable editor Form Query Sort select",queryOptionsSortSelectV2:"data-testid Variable editor Form Query Sort select",queryOptionsQueryInput:"data-testid Variable editor Form Default Variable Query Editor textarea",valueGroupsTagsEnabledSwitch:"Variable editor Form Query UseTags switch",valueGroupsTagsTagsQueryInput:"Variable editor Form Query TagsQuery field",valueGroupsTagsTagsValuesQueryInput:"Variable editor Form Query TagsValuesQuery field"},ConstantVariable:{constantOptionsQueryInput:"Variable editor Form Constant Query field",constantOptionsQueryInputV2:"data-testid Variable editor Form Constant Query field"},DatasourceVariable:{datasourceSelect:"data-testid datasource variable datasource type"},TextBoxVariable:{textBoxOptionsQueryInput:"Variable editor Form TextBox Query field",textBoxOptionsQueryInputV2:"data-testid Variable editor Form TextBox Query field"},CustomVariable:{customValueInput:"data-testid custom-variable-input"},IntervalVariable:{intervalsValueInput:"data-testid interval variable intervals input",autoEnabledCheckbox:"data-testid interval variable auto value checkbox",stepCountIntervalSelect:"data-testid interval variable step count input",minIntervalInput:"data-testid interval variable mininum interval input"},GroupByVariable:{dataSourceSelect:a.X.DataSourcePicker.inputV2,infoText:"data-testid group by variable info text",modeToggle:"data-testid group by variable mode toggle"},AdHocFiltersVariable:{datasourceSelect:a.X.DataSourcePicker.inputV2,infoText:"data-testid ad-hoc filters variable info text",modeToggle:"data-testid ad-hoc filters variable mode toggle"}}}},Annotations:{marker:"data-testid annotation-marker"},Rows:{Repeated:{ConfigSection:{warningMessage:"data-testid Repeated rows warning message"}}}},Dashboards:{url:"/dashboards",dashboards:e=>`Dashboard search item ${e}`},SaveDashboardAsModal:{newName:"Save dashboard title field",save:"Save dashboard button"},SaveDashboardModal:{save:"Dashboard settings Save Dashboard Modal Save button",saveVariables:"Dashboard settings Save Dashboard Modal Save variables checkbox",saveTimerange:"Dashboard settings Save Dashboard Modal Save timerange checkbox",saveRefresh:"Dashboard settings Save Dashboard Modal Save refresh checkbox"},SharePanelModal:{linkToRenderedImage:"Link to rendered image"},ShareDashboardModal:{PublicDashboard:{Tab:"Tab Public dashboard",WillBePublicCheckbox:"data-testid public dashboard will be public checkbox",LimitedDSCheckbox:"data-testid public dashboard limited datasources checkbox",CostIncreaseCheckbox:"data-testid public dashboard cost may increase checkbox",PauseSwitch:"data-testid public dashboard pause switch",EnableAnnotationsSwitch:"data-testid public dashboard on off switch for annotations",CreateButton:"data-testid public dashboard create button",DeleteButton:"data-testid public dashboard delete button",CopyUrlInput:"data-testid public dashboard copy url input",CopyUrlButton:"data-testid public dashboard copy url button",SettingsDropdown:"data-testid public dashboard settings dropdown",TemplateVariablesWarningAlert:"data-testid public dashboard disabled template variables alert",UnsupportedDataSourcesWarningAlert:"data-testid public dashboard unsupported data sources alert",NoUpsertPermissionsWarningAlert:"data-testid public dashboard no upsert permissions alert",EnableTimeRangeSwitch:"data-testid public dashboard on off switch for time range",EmailSharingConfiguration:{Container:"data-testid email sharing config container",ShareType:"data-testid public dashboard share type",EmailSharingInput:"data-testid public dashboard email sharing input",EmailSharingInviteButton:"data-testid public dashboard email sharing invite button",EmailSharingList:"data-testid public dashboard email sharing list",DeleteEmail:"data-testid public dashboard delete email button",ReshareLink:"data-testid public dashboard reshare link button"}},PublicDashboardScene:{Tab:"Tab Public Dashboard"}},PublicDashboard:{page:"public-dashboard-page",NotAvailable:{container:"public-dashboard-not-available",title:"public-dashboard-title",pausedDescription:"public-dashboard-paused-description"},footer:"public-dashboard-footer"},PublicDashboardScene:{loadingPage:"public-dashboard-scene-loading-page",page:"public-dashboard-scene-page",controls:"public-dashboard-controls"},RequestViewAccess:{form:"request-view-access-form",recipientInput:"request-view-access-recipient-input",submitButton:"request-view-access-submit-button"},PublicDashboardConfirmAccess:{submitButton:"data-testid confirm-access-submit-button"},Explore:{url:"/explore",General:{container:"data-testid Explore",graph:"Explore Graph",table:"Explore Table",scrollView:"data-testid explorer scroll view"}},SoloPanel:{url:e=>`/d-solo/${e}`},PluginsList:{page:"Plugins list page",list:"Plugins list",listItem:"Plugins list item",signatureErrorNotice:"data-testid Unsigned plugins notice"},PluginPage:{page:"Plugin page",signatureInfo:"data-testid Plugin signature info",disabledInfo:"data-testid Plugin disabled info"},PlaylistForm:{name:"Playlist name",interval:"Playlist interval",itemDelete:"data-testid playlist-form-delete-item"},BrowseDashboards:{table:{body:"data-testid browse-dashboards-table",row:e=>`data-testid browse dashboards row ${e}`,checkbox:e=>`data-testid ${e} checkbox`},NewFolderForm:{form:"data-testid new folder form",nameInput:"data-testid new-folder-name-input",createButton:"data-testid new-folder-create-button"}},Search:{url:"/?search=openn",FolderView:{url:"/?search=open&layout=folders"}},PublicDashboards:{ListItem:{linkButton:"public-dashboard-link-button",configButton:"public-dashboard-configuration-button",trashcanButton:"public-dashboard-remove-button",pauseSwitch:"data-testid public dashboard pause switch"}},UserListPage:{tabs:{allUsers:"data-testid all-users-tab",orgUsers:"data-testid org-users-tab",anonUserDevices:"data-testid anon-user-devices-tab",publicDashboardsUsers:"data-testid public-dashboards-users-tab",users:"data-testid users-tab"},org:{url:"/org/users"},admin:{url:"/admin/users"},publicDashboards:{container:"data-testid public-dashboards-users-list"},UserListAdminPage:{container:"data-testid user-list-admin-page"},UsersListPage:{container:"data-testid users-list-page"},UserAnonListPage:{container:"data-testid user-anon-list-page"},UsersListPublicDashboardsPage:{container:"data-testid users-list-public-dashboards-page",DashboardsListModal:{listItem:e=>`data-testid dashboards-list-item-${e}`}}},ProfilePage:{url:"/profile"}},components:a.X}}}]);
