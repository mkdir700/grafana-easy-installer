"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[4450],{"../../node_modules/monaco-editor/esm/vs/language/typescript/tsMode.js":function(ne,O,x){x.r(O),x.d(O,{Adapter:function(){return _},CodeActionAdaptor:function(){return U},DefinitionAdapter:function(){return H},DiagnosticsAdapter:function(){return M},FormatAdapter:function(){return j},FormatHelper:function(){return y},FormatOnTypeAdapter:function(){return B},InlayHintsAdapter:function(){return z},Kind:function(){return c},LibFiles:function(){return N},OccurrencesAdapter:function(){return E},OutlineAdapter:function(){return V},QuickInfoAdapter:function(){return R},ReferenceAdapter:function(){return W},RenameAdapter:function(){return $},SignatureHelpAdapter:function(){return D},SuggestAdapter:function(){return k},WorkerManager:function(){return I},flattenDiagnosticMessageText:function(){return C},getJavaScriptWorker:function(){return se},getTypeScriptWorker:function(){return ie},setupJavaScript:function(){return re},setupTypeScript:function(){return te}});var G=x("../../node_modules/monaco-editor/esm/vs/editor/editor.api.js"),Q=x("../../node_modules/monaco-editor/esm/vs/language/typescript/monaco.contribution.js");/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.0(9d278685b078158491964f8fd7ac9628fffa0f30)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var L=Object.defineProperty,X=Object.getOwnPropertyDescriptor,Y=Object.getOwnPropertyNames,Z=Object.prototype.hasOwnProperty,q=(e,t,n)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,P=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Y(t))!Z.call(e,a)&&a!==n&&L(e,a,{get:()=>t[a],enumerable:!(i=X(t,a))||i.enumerable});return e},ee=(e,t,n)=>(P(e,t,"default"),n&&P(n,t,"default")),f=(e,t,n)=>(q(e,typeof t!="symbol"?t+"":t,n),n),s={};ee(s,G);var I=class{constructor(e,t){this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker()),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange(()=>this._updateExtraLibs())}_configChangeListener;_updateExtraLibsToken;_extraLibsChangeListener;_worker;_client;dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}async _updateExtraLibs(){if(!this._worker)return;const e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){return this._client||(this._client=(async()=>(this._worker=s.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}}),this._defaults.getEagerModelSync()?await this._worker.withSyncedResources(s.editor.getModels().filter(e=>e.getLanguageId()===this._modeId).map(e=>e.uri)):await this._worker.getProxy()))()),this._client}async getLanguageServiceWorker(...e){const t=await this._getClient();return this._worker&&await this._worker.withSyncedResources(e),t}},o={};o["lib.d.ts"]=!0,o["lib.dom.d.ts"]=!0,o["lib.dom.iterable.d.ts"]=!0,o["lib.es2015.collection.d.ts"]=!0,o["lib.es2015.core.d.ts"]=!0,o["lib.es2015.d.ts"]=!0,o["lib.es2015.generator.d.ts"]=!0,o["lib.es2015.iterable.d.ts"]=!0,o["lib.es2015.promise.d.ts"]=!0,o["lib.es2015.proxy.d.ts"]=!0,o["lib.es2015.reflect.d.ts"]=!0,o["lib.es2015.symbol.d.ts"]=!0,o["lib.es2015.symbol.wellknown.d.ts"]=!0,o["lib.es2016.array.include.d.ts"]=!0,o["lib.es2016.d.ts"]=!0,o["lib.es2016.full.d.ts"]=!0,o["lib.es2017.d.ts"]=!0,o["lib.es2017.full.d.ts"]=!0,o["lib.es2017.intl.d.ts"]=!0,o["lib.es2017.object.d.ts"]=!0,o["lib.es2017.sharedmemory.d.ts"]=!0,o["lib.es2017.string.d.ts"]=!0,o["lib.es2017.typedarrays.d.ts"]=!0,o["lib.es2018.asyncgenerator.d.ts"]=!0,o["lib.es2018.asynciterable.d.ts"]=!0,o["lib.es2018.d.ts"]=!0,o["lib.es2018.full.d.ts"]=!0,o["lib.es2018.intl.d.ts"]=!0,o["lib.es2018.promise.d.ts"]=!0,o["lib.es2018.regexp.d.ts"]=!0,o["lib.es2019.array.d.ts"]=!0,o["lib.es2019.d.ts"]=!0,o["lib.es2019.full.d.ts"]=!0,o["lib.es2019.object.d.ts"]=!0,o["lib.es2019.string.d.ts"]=!0,o["lib.es2019.symbol.d.ts"]=!0,o["lib.es2020.bigint.d.ts"]=!0,o["lib.es2020.d.ts"]=!0,o["lib.es2020.full.d.ts"]=!0,o["lib.es2020.intl.d.ts"]=!0,o["lib.es2020.promise.d.ts"]=!0,o["lib.es2020.sharedmemory.d.ts"]=!0,o["lib.es2020.string.d.ts"]=!0,o["lib.es2020.symbol.wellknown.d.ts"]=!0,o["lib.es2021.d.ts"]=!0,o["lib.es2021.full.d.ts"]=!0,o["lib.es2021.intl.d.ts"]=!0,o["lib.es2021.promise.d.ts"]=!0,o["lib.es2021.string.d.ts"]=!0,o["lib.es2021.weakref.d.ts"]=!0,o["lib.es5.d.ts"]=!0,o["lib.es6.d.ts"]=!0,o["lib.esnext.d.ts"]=!0,o["lib.esnext.full.d.ts"]=!0,o["lib.esnext.intl.d.ts"]=!0,o["lib.esnext.promise.d.ts"]=!0,o["lib.esnext.string.d.ts"]=!0,o["lib.esnext.weakref.d.ts"]=!0,o["lib.scripthost.d.ts"]=!0,o["lib.webworker.d.ts"]=!0,o["lib.webworker.importscripts.d.ts"]=!0,o["lib.webworker.iterable.d.ts"]=!0;function C(e,t,n=0){if(typeof e=="string")return e;if(e===void 0)return"";let i="";if(n){i+=t;for(let a=0;a<n;a++)i+="  "}if(i+=e.messageText,n++,e.next)for(const a of e.next)i+=C(a,t,n);return i}function w(e){return e?e.map(t=>t.text).join(""):""}var _=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let n=e.getPositionAt(t.start),i=e.getPositionAt(t.start+t.length),{lineNumber:a,column:d}=n,{lineNumber:l,column:r}=i;return{startLineNumber:a,startColumn:d,endLineNumber:l,endColumn:r}}},N=class{constructor(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}_libFiles;_hasFetchedLibFiles;_fetchLibFilesPromise;isLibFile(e){return e&&e.path.indexOf("/lib.")===0?!!o[e.path.slice(1)]:!1}getOrCreateModel(e){const t=s.Uri.parse(e),n=s.editor.getModel(t);if(n)return n;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return s.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);const i=Q.IF.getExtraLibs()[e];return i?s.editor.createModel(i.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){this._containsLibFile(e)&&await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then(e=>e.getLibFiles()).then(e=>{this._hasFetchedLibFiles=!0,this._libFiles=e})),this._fetchLibFilesPromise}},M=class extends _{constructor(e,t,n,i){super(i),this._libFiles=e,this._defaults=t,this._selector=n;const a=r=>{if(r.getLanguageId()!==n)return;const u=()=>{const{onlyVisible:h}=this._defaults.getDiagnosticsOptions();h?r.isAttachedToEditor()&&this._doValidate(r):this._doValidate(r)};let g;const p=r.onDidChangeContent(()=>{clearTimeout(g),g=window.setTimeout(u,500)}),b=r.onDidChangeAttached(()=>{const{onlyVisible:h}=this._defaults.getDiagnosticsOptions();h&&(r.isAttachedToEditor()?u():s.editor.setModelMarkers(r,this._selector,[]))});this._listener[r.uri.toString()]={dispose(){p.dispose(),b.dispose(),clearTimeout(g)}},u()},d=r=>{s.editor.setModelMarkers(r,this._selector,[]);const u=r.uri.toString();this._listener[u]&&(this._listener[u].dispose(),delete this._listener[u])};this._disposables.push(s.editor.onDidCreateModel(r=>a(r))),this._disposables.push(s.editor.onWillDisposeModel(d)),this._disposables.push(s.editor.onDidChangeModelLanguage(r=>{d(r.model),a(r.model)})),this._disposables.push({dispose(){for(const r of s.editor.getModels())d(r)}});const l=()=>{for(const r of s.editor.getModels())d(r),a(r)};this._disposables.push(this._defaults.onDidChange(l)),this._disposables.push(this._defaults.onDidExtraLibsChange(l)),s.editor.getModels().forEach(r=>a(r))}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables=[]}async _doValidate(e){const t=await this._worker(e.uri);if(e.isDisposed())return;const n=[],{noSyntaxValidation:i,noSemanticValidation:a,noSuggestionDiagnostics:d}=this._defaults.getDiagnosticsOptions();i||n.push(t.getSyntacticDiagnostics(e.uri.toString())),a||n.push(t.getSemanticDiagnostics(e.uri.toString())),d||n.push(t.getSuggestionDiagnostics(e.uri.toString()));const l=await Promise.all(n);if(!l||e.isDisposed())return;const r=l.reduce((g,p)=>p.concat(g),[]).filter(g=>(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(g.code)===-1),u=r.map(g=>g.relatedInformation||[]).reduce((g,p)=>p.concat(g),[]).map(g=>g.file?s.Uri.parse(g.file.fileName):null);await this._libFiles.fetchLibFilesIfNecessary(u),!e.isDisposed()&&s.editor.setModelMarkers(e,this._selector,r.map(g=>this._convertDiagnostics(e,g)))}_convertDiagnostics(e,t){const n=t.start||0,i=t.length||1,{lineNumber:a,column:d}=e.getPositionAt(n),{lineNumber:l,column:r}=e.getPositionAt(n+i),u=[];return t.reportsUnnecessary&&u.push(s.MarkerTag.Unnecessary),t.reportsDeprecated&&u.push(s.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:a,startColumn:d,endLineNumber:l,endColumn:r,message:C(t.messageText,`
`),code:t.code.toString(),tags:u,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];const n=[];return t.forEach(i=>{let a=e;if(i.file&&(a=this._libFiles.getOrCreateModel(i.file.fileName)),!a)return;const d=i.start||0,l=i.length||1,{lineNumber:r,column:u}=a.getPositionAt(d),{lineNumber:g,column:p}=a.getPositionAt(d+l);n.push({resource:a.uri,startLineNumber:r,startColumn:u,endLineNumber:g,endColumn:p,message:C(i.messageText,`
`)})}),n}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return s.MarkerSeverity.Error;case 3:return s.MarkerSeverity.Info;case 0:return s.MarkerSeverity.Warning;case 2:return s.MarkerSeverity.Hint}return s.MarkerSeverity.Info}},k=class extends _{get triggerCharacters(){return["."]}async provideCompletionItems(e,t,n,i){const a=e.getWordUntilPosition(t),d=new s.Range(t.lineNumber,a.startColumn,t.lineNumber,a.endColumn),l=e.uri,r=e.getOffsetAt(t),u=await this._worker(l);if(e.isDisposed())return;const g=await u.getCompletionsAtPosition(l.toString(),r);return!g||e.isDisposed()?void 0:{suggestions:g.entries.map(b=>{let h=d;if(b.replacementSpan){const v=e.getPositionAt(b.replacementSpan.start),A=e.getPositionAt(b.replacementSpan.start+b.replacementSpan.length);h=new s.Range(v.lineNumber,v.column,A.lineNumber,A.column)}const S=[];return b.kindModifiers?.indexOf("deprecated")!==-1&&S.push(s.languages.CompletionItemTag.Deprecated),{uri:l,position:t,offset:r,range:h,label:b.name,insertText:b.name,sortText:b.sortText,kind:k.convertKind(b.kind),tags:S}})}}async resolveCompletionItem(e,t){const n=e,i=n.uri,a=n.position,d=n.offset,r=await(await this._worker(i)).getCompletionEntryDetails(i.toString(),d,n.label);return r?{uri:i,position:a,label:r.name,kind:k.convertKind(r.kind),detail:w(r.displayParts),documentation:{value:k.createDocumentationString(r)}}:n}static convertKind(e){switch(e){case c.primitiveType:case c.keyword:return s.languages.CompletionItemKind.Keyword;case c.variable:case c.localVariable:return s.languages.CompletionItemKind.Variable;case c.memberVariable:case c.memberGetAccessor:case c.memberSetAccessor:return s.languages.CompletionItemKind.Field;case c.function:case c.memberFunction:case c.constructSignature:case c.callSignature:case c.indexSignature:return s.languages.CompletionItemKind.Function;case c.enum:return s.languages.CompletionItemKind.Enum;case c.module:return s.languages.CompletionItemKind.Module;case c.class:return s.languages.CompletionItemKind.Class;case c.interface:return s.languages.CompletionItemKind.Interface;case c.warning:return s.languages.CompletionItemKind.File}return s.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=w(e.documentation);if(e.tags)for(const n of e.tags)t+=`

${K(n)}`;return t}};function K(e){let t=`*@${e.name}*`;if(e.name==="param"&&e.text){const[n,...i]=e.text;t+=`\`${n.text}\``,i.length>0&&(t+=` \u2014 ${i.map(a=>a.text).join(" ")}`)}else Array.isArray(e.text)?t+=` \u2014 ${e.text.map(n=>n.text).join(" ")}`:e.text&&(t+=` \u2014 ${e.text}`);return t}var D=class extends _{signatureHelpTriggerCharacters=["(",","];static _toSignatureHelpTriggerReason(e){switch(e.triggerKind){case s.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case s.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case s.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(e,t,n,i){const a=e.uri,d=e.getOffsetAt(t),l=await this._worker(a);if(e.isDisposed())return;const r=await l.getSignatureHelpItems(a.toString(),d,{triggerReason:D._toSignatureHelpTriggerReason(i)});if(!r||e.isDisposed())return;const u={activeSignature:r.selectedItemIndex,activeParameter:r.argumentIndex,signatures:[]};return r.items.forEach(g=>{const p={label:"",parameters:[]};p.documentation={value:w(g.documentation)},p.label+=w(g.prefixDisplayParts),g.parameters.forEach((b,h,S)=>{const v=w(b.displayParts),A={label:v,documentation:{value:w(b.documentation)}};p.label+=v,p.parameters.push(A),h<S.length-1&&(p.label+=w(g.separatorDisplayParts))}),p.label+=w(g.suffixDisplayParts),u.signatures.push(p)}),{value:u,dispose(){}}}},R=class extends _{async provideHover(e,t,n){const i=e.uri,a=e.getOffsetAt(t),d=await this._worker(i);if(e.isDisposed())return;const l=await d.getQuickInfoAtPosition(i.toString(),a);if(!l||e.isDisposed())return;const r=w(l.documentation),u=l.tags?l.tags.map(p=>K(p)).join(`  

`):"",g=w(l.displayParts);return{range:this._textSpanToRange(e,l.textSpan),contents:[{value:"```typescript\n"+g+"\n```\n"},{value:r+(u?`

`+u:"")}]}}},E=class extends _{async provideDocumentHighlights(e,t,n){const i=e.uri,a=e.getOffsetAt(t),d=await this._worker(i);if(e.isDisposed())return;const l=await d.getOccurrencesAtPosition(i.toString(),a);if(!(!l||e.isDisposed()))return l.map(r=>({range:this._textSpanToRange(e,r.textSpan),kind:r.isWriteAccess?s.languages.DocumentHighlightKind.Write:s.languages.DocumentHighlightKind.Text}))}},H=class extends _{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,n){const i=e.uri,a=e.getOffsetAt(t),d=await this._worker(i);if(e.isDisposed())return;const l=await d.getDefinitionAtPosition(i.toString(),a);if(!l||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(l.map(u=>s.Uri.parse(u.fileName))),e.isDisposed()))return;const r=[];for(let u of l){const g=this._libFiles.getOrCreateModel(u.fileName);g&&r.push({uri:g.uri,range:this._textSpanToRange(g,u.textSpan)})}return r}},W=class extends _{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,n,i){const a=e.uri,d=e.getOffsetAt(t),l=await this._worker(a);if(e.isDisposed())return;const r=await l.getReferencesAtPosition(a.toString(),d);if(!r||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(r.map(g=>s.Uri.parse(g.fileName))),e.isDisposed()))return;const u=[];for(let g of r){const p=this._libFiles.getOrCreateModel(g.fileName);p&&u.push({uri:p.uri,range:this._textSpanToRange(p,g.textSpan)})}return u}},V=class extends _{async provideDocumentSymbols(e,t){const n=e.uri,i=await this._worker(n);if(e.isDisposed())return;const a=await i.getNavigationBarItems(n.toString());if(!a||e.isDisposed())return;const d=(r,u,g)=>{let p={name:u.text,detail:"",kind:m[u.kind]||s.languages.SymbolKind.Variable,range:this._textSpanToRange(e,u.spans[0]),selectionRange:this._textSpanToRange(e,u.spans[0]),tags:[]};if(g&&(p.containerName=g),u.childItems&&u.childItems.length>0)for(let b of u.childItems)d(r,b,p.name);r.push(p)};let l=[];return a.forEach(r=>d(l,r)),l}},c=class{};f(c,"unknown",""),f(c,"keyword","keyword"),f(c,"script","script"),f(c,"module","module"),f(c,"class","class"),f(c,"interface","interface"),f(c,"type","type"),f(c,"enum","enum"),f(c,"variable","var"),f(c,"localVariable","local var"),f(c,"function","function"),f(c,"localFunction","local function"),f(c,"memberFunction","method"),f(c,"memberGetAccessor","getter"),f(c,"memberSetAccessor","setter"),f(c,"memberVariable","property"),f(c,"constructorImplementation","constructor"),f(c,"callSignature","call"),f(c,"indexSignature","index"),f(c,"constructSignature","construct"),f(c,"parameter","parameter"),f(c,"typeParameter","type parameter"),f(c,"primitiveType","primitive type"),f(c,"label","label"),f(c,"alias","alias"),f(c,"const","const"),f(c,"let","let"),f(c,"warning","warning");var m=Object.create(null);m[c.module]=s.languages.SymbolKind.Module,m[c.class]=s.languages.SymbolKind.Class,m[c.enum]=s.languages.SymbolKind.Enum,m[c.interface]=s.languages.SymbolKind.Interface,m[c.memberFunction]=s.languages.SymbolKind.Method,m[c.memberVariable]=s.languages.SymbolKind.Property,m[c.memberGetAccessor]=s.languages.SymbolKind.Property,m[c.memberSetAccessor]=s.languages.SymbolKind.Property,m[c.variable]=s.languages.SymbolKind.Variable,m[c.const]=s.languages.SymbolKind.Variable,m[c.localVariable]=s.languages.SymbolKind.Variable,m[c.variable]=s.languages.SymbolKind.Variable,m[c.function]=s.languages.SymbolKind.Function,m[c.localFunction]=s.languages.SymbolKind.Function;var y=class extends _{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:`
`,InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},j=class extends y{async provideDocumentRangeFormattingEdits(e,t,n,i){const a=e.uri,d=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),l=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),r=await this._worker(a);if(e.isDisposed())return;const u=await r.getFormattingEditsForRange(a.toString(),d,l,y._convertOptions(n));if(!(!u||e.isDisposed()))return u.map(g=>this._convertTextChanges(e,g))}},B=class extends y{get autoFormatTriggerCharacters(){return[";","}",`
`]}async provideOnTypeFormattingEdits(e,t,n,i,a){const d=e.uri,l=e.getOffsetAt(t),r=await this._worker(d);if(e.isDisposed())return;const u=await r.getFormattingEditsAfterKeystroke(d.toString(),l,n,y._convertOptions(i));if(!(!u||e.isDisposed()))return u.map(g=>this._convertTextChanges(e,g))}},U=class extends y{async provideCodeActions(e,t,n,i){const a=e.uri,d=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),l=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),r=y._convertOptions(e.getOptions()),u=n.markers.filter(h=>h.code).map(h=>h.code).map(Number),g=await this._worker(a);if(e.isDisposed())return;const p=await g.getCodeFixesAtPosition(a.toString(),d,l,u,r);return!p||e.isDisposed()?{actions:[],dispose:()=>{}}:{actions:p.filter(h=>h.changes.filter(S=>S.isNewFile).length===0).map(h=>this._tsCodeFixActionToMonacoCodeAction(e,n,h)),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,n){const i=[];for(const d of n.changes)for(const l of d.textChanges)i.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,l.span),text:l.newText}});return{title:n.description,edit:{edits:i},diagnostics:t.markers,kind:"quickfix"}}},$=class extends _{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,n,i){const a=e.uri,d=a.toString(),l=e.getOffsetAt(t),r=await this._worker(a);if(e.isDisposed())return;const u=await r.getRenameInfo(d,l,{allowRenameOfImportPath:!1});if(u.canRename===!1)return{edits:[],rejectReason:u.localizedErrorMessage};if(u.fileToRename!==void 0)throw new Error("Renaming files is not supported.");const g=await r.findRenameLocations(d,l,!1,!1,!1);if(!g||e.isDisposed())return;const p=[];for(const b of g){const h=this._libFiles.getOrCreateModel(b.fileName);if(h)p.push({resource:h.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(h,b.textSpan),text:n}});else throw new Error(`Unknown file ${b.fileName}.`)}return{edits:p}}},z=class extends _{async provideInlayHints(e,t,n){const i=e.uri,a=i.toString(),d=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),l=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),r=await this._worker(i);return e.isDisposed()?null:{hints:(await r.provideInlayHints(a,d,l)).map(p=>({...p,label:p.text,position:e.getPositionAt(p.position),kind:this._convertHintKind(p.kind)})),dispose:()=>{}}}_convertHintKind(e){switch(e){case"Parameter":return s.languages.InlayHintKind.Parameter;case"Type":return s.languages.InlayHintKind.Type;default:return s.languages.InlayHintKind.Type}}},F,T;function te(e){T=J(e,"typescript")}function re(e){F=J(e,"javascript")}function se(){return new Promise((e,t)=>{if(!F)return t("JavaScript not registered!");e(F)})}function ie(){return new Promise((e,t)=>{if(!T)return t("TypeScript not registered!");e(T)})}function J(e,t){const n=new I(t,e),i=(...d)=>n.getLanguageServiceWorker(...d),a=new N(i);return s.languages.registerCompletionItemProvider(t,new k(i)),s.languages.registerSignatureHelpProvider(t,new D(i)),s.languages.registerHoverProvider(t,new R(i)),s.languages.registerDocumentHighlightProvider(t,new E(i)),s.languages.registerDefinitionProvider(t,new H(a,i)),s.languages.registerReferenceProvider(t,new W(a,i)),s.languages.registerDocumentSymbolProvider(t,new V(i)),s.languages.registerDocumentRangeFormattingEditProvider(t,new j(i)),s.languages.registerOnTypeFormattingEditProvider(t,new B(i)),s.languages.registerCodeActionProvider(t,new U(i)),s.languages.registerRenameProvider(t,new $(a,i)),s.languages.registerInlayHintsProvider(t,new z(i)),new M(a,e,t,i),i}}}]);
