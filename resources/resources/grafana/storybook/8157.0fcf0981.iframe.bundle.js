"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[8157,4424,2043,9662,7281,4900,2519],{"../../node_modules/@mdx-js/react/lib/index.js":function(R,f,p){p.d(f,{BN:function(){return E},RP:function(){return w},gz:function(){return s},xA:function(){return y}});var h=p("../../node_modules/react/index.js");const E=h.createContext({});function s(d){return c;function c(m){const j=w(m.components);return h.createElement(d,{...m,allComponents:j})}}function w(d){const c=h.useContext(E);return h.useMemo(()=>typeof d=="function"?d(c):{...c,...d},[c,d])}const _={};function y({components:d,children:c,disableParentContext:m}){let j;return m?j=typeof d=="function"?d({}):d||_:j=w(d),h.createElement(E.Provider,{value:j},c)}},"../../node_modules/react-use/esm/misc/util.js":function(R,f,p){p.d(f,{AU:function(){return s},Bd:function(){return w},lQ:function(){return h},on:function(){return E}});var h=function(){};function E(y){for(var d=[],c=1;c<arguments.length;c++)d[c-1]=arguments[c];y&&y.addEventListener&&y.addEventListener.apply(y,d)}function s(y){for(var d=[],c=1;c<arguments.length;c++)d[c-1]=arguments[c];y&&y.removeEventListener&&y.removeEventListener.apply(y,d)}var w=typeof window<"u",_=typeof navigator<"u"},"../../node_modules/react-use/esm/useMedia.js":function(R,f,p){var h=p("../../node_modules/react/index.js"),E=p("../../node_modules/react-use/esm/misc/util.js"),s=function(_,y){return y!==void 0?y:E.Bd?window.matchMedia(_).matches:!1},w=function(_,y){var d=(0,h.useState)(s(_,y)),c=d[0],m=d[1];return(0,h.useEffect)(function(){var j=!0,b=window.matchMedia(_),P=function(){j&&m(!!b.matches)};return b.addEventListener("change",P),m(b.matches),function(){j=!1,b.removeEventListener("change",P)}},[_]),c};f.A=w},"../../node_modules/react-use/lib/misc/util.js":function(R,f){Object.defineProperty(f,"__esModule",{value:!0}),f.isNavigator=f.isBrowser=f.off=f.on=f.noop=void 0;var p=function(){};f.noop=p;function h(s){for(var w=[],_=1;_<arguments.length;_++)w[_-1]=arguments[_];s&&s.addEventListener&&s.addEventListener.apply(s,w)}f.on=h;function E(s){for(var w=[],_=1;_<arguments.length;_++)w[_-1]=arguments[_];s&&s.removeEventListener&&s.removeEventListener.apply(s,w)}f.off=E,f.isBrowser=typeof window<"u",f.isNavigator=typeof navigator<"u"},"../../node_modules/react-use/lib/useIsomorphicLayoutEffect.js":function(R,f,p){Object.defineProperty(f,"__esModule",{value:!0});var h=p("../../node_modules/react/index.js"),E=p("../../node_modules/react-use/lib/misc/util.js"),s=E.isBrowser?h.useLayoutEffect:h.useEffect;f.default=s},"../../node_modules/react-use/lib/useMeasure.js":function(R,f,p){var h;h={value:!0};var E=p("../../node_modules/tslib/tslib.es6.mjs"),s=p("../../node_modules/react/index.js"),w=E.__importDefault(p("../../node_modules/react-use/lib/useIsomorphicLayoutEffect.js")),_=p("../../node_modules/react-use/lib/misc/util.js"),y={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function d(){var c=s.useState(null),m=c[0],j=c[1],b=s.useState(y),P=b[0],C=b[1],T=s.useMemo(function(){return new window.ResizeObserver(function(B){if(B[0]){var S=B[0].contentRect,F=S.x,U=S.y,G=S.width,K=S.height,L=S.top,X=S.left,z=S.bottom,W=S.right;C({x:F,y:U,width:G,height:K,top:L,left:X,bottom:z,right:W})}})},[]);return w.default(function(){if(m)return T.observe(m),function(){T.disconnect()}},[m]),[j,P]}f.A=_.isBrowser&&typeof window.ResizeObserver<"u"?d:function(){return[_.noop,y]}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(R,f,p){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=p("../../node_modules/react/index.js"),E=Symbol.for("react.element"),s=Symbol.for("react.fragment"),w=Object.prototype.hasOwnProperty,_=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function d(c,m,j){var b,P={},C=null,T=null;j!==void 0&&(C=""+j),m.key!==void 0&&(C=""+m.key),m.ref!==void 0&&(T=m.ref);for(b in m)w.call(m,b)&&!y.hasOwnProperty(b)&&(P[b]=m[b]);if(c&&c.defaultProps)for(b in m=c.defaultProps,m)P[b]===void 0&&(P[b]=m[b]);return{$$typeof:E,type:c,key:C,ref:T,props:P,_owner:_.current}}f.Fragment=s,f.jsx=d,f.jsxs=d},"../../node_modules/react/jsx-runtime.js":function(R,f,p){R.exports=p("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"../../node_modules/tslib/tslib.es6.mjs":function(R,f,p){p.r(f),p.d(f,{__addDisposableResource:function(){return J},__assign:function(){return s},__asyncDelegator:function(){return z},__asyncGenerator:function(){return X},__asyncValues:function(){return W},__await:function(){return L},__awaiter:function(){return P},__classPrivateFieldGet:function(){return Q},__classPrivateFieldIn:function(){return H},__classPrivateFieldSet:function(){return Y},__createBinding:function(){return T},__decorate:function(){return _},__disposeResources:function(){return Z},__esDecorate:function(){return d},__exportStar:function(){return B},__extends:function(){return E},__generator:function(){return C},__importDefault:function(){return $},__importStar:function(){return V},__makeTemplateObject:function(){return k},__metadata:function(){return b},__param:function(){return y},__propKey:function(){return m},__read:function(){return F},__rest:function(){return w},__runInitializers:function(){return c},__setFunctionName:function(){return j},__spread:function(){return U},__spreadArray:function(){return K},__spreadArrays:function(){return G},__values:function(){return S}});var h=function(e,t){return h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(r[u]=n[u])},h(e,t)};function E(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");h(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var s=function(){return s=Object.assign||function(t){for(var r,n=1,u=arguments.length;n<u;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},s.apply(this,arguments)};function w(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,n=Object.getOwnPropertySymbols(e);u<n.length;u++)t.indexOf(n[u])<0&&Object.prototype.propertyIsEnumerable.call(e,n[u])&&(r[n[u]]=e[n[u]]);return r}function _(e,t,r,n){var u=arguments.length,o=u<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,r,n);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(u<3?i(o):u>3?i(t,r,o):i(t,r))||o);return u>3&&o&&Object.defineProperty(t,r,o),o}function y(e,t){return function(r,n){t(r,n,e)}}function d(e,t,r,n,u,o){function i(N){if(N!==void 0&&typeof N!="function")throw new TypeError("Function expected");return N}for(var l=n.kind,D=l==="getter"?"get":l==="setter"?"set":"value",a=!t&&e?n.static?e:e.prototype:null,v=t||(a?Object.getOwnPropertyDescriptor(a,n.name):{}),O,g=!1,M=r.length-1;M>=0;M--){var x={};for(var A in n)x[A]=A==="access"?{}:n[A];for(var A in n.access)x.access[A]=n.access[A];x.addInitializer=function(N){if(g)throw new TypeError("Cannot add initializers after decoration has completed");o.push(i(N||null))};var I=(0,r[M])(l==="accessor"?{get:v.get,set:v.set}:v[D],x);if(l==="accessor"){if(I===void 0)continue;if(I===null||typeof I!="object")throw new TypeError("Object expected");(O=i(I.get))&&(v.get=O),(O=i(I.set))&&(v.set=O),(O=i(I.init))&&u.unshift(O)}else(O=i(I))&&(l==="field"?u.unshift(O):v[D]=O)}a&&Object.defineProperty(a,n.name,v),g=!0}function c(e,t,r){for(var n=arguments.length>2,u=0;u<t.length;u++)r=n?t[u].call(e,r):t[u].call(e);return n?r:void 0}function m(e){return typeof e=="symbol"?e:"".concat(e)}function j(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})}function b(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function P(e,t,r,n){function u(o){return o instanceof r?o:new r(function(i){i(o)})}return new(r||(r=Promise))(function(o,i){function l(v){try{a(n.next(v))}catch(O){i(O)}}function D(v){try{a(n.throw(v))}catch(O){i(O)}}function a(v){v.done?o(v.value):u(v.value).then(l,D)}a((n=n.apply(e,t||[])).next())})}function C(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,u,o,i;return i={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function l(a){return function(v){return D([a,v])}}function D(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(r=0)),r;)try{if(n=1,u&&(o=a[0]&2?u.return:a[0]?u.throw||((o=u.return)&&o.call(u),0):u.next)&&!(o=o.call(u,a[1])).done)return o;switch(u=0,o&&(a=[a[0]&2,o.value]),a[0]){case 0:case 1:o=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,u=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(a[0]===6&&r.label<o[1]){r.label=o[1],o=a;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(a);break}o[2]&&r.ops.pop(),r.trys.pop();continue}a=t.call(e,r)}catch(v){a=[6,v],u=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}var T=Object.create?function(e,t,r,n){n===void 0&&(n=r);var u=Object.getOwnPropertyDescriptor(t,r);(!u||("get"in u?!t.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,u)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]};function B(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&T(t,e,r)}function S(e){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function F(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),u,o=[],i;try{for(;(t===void 0||t-- >0)&&!(u=n.next()).done;)o.push(u.value)}catch(l){i={error:l}}finally{try{u&&!u.done&&(r=n.return)&&r.call(n)}finally{if(i)throw i.error}}return o}function U(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(F(arguments[t]));return e}function G(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),u=0,t=0;t<r;t++)for(var o=arguments[t],i=0,l=o.length;i<l;i++,u++)n[u]=o[i];return n}function K(e,t,r){if(r||arguments.length===2)for(var n=0,u=t.length,o;n<u;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}function L(e){return this instanceof L?(this.v=e,this):new L(e)}function X(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=r.apply(e,t||[]),u,o=[];return u={},i("next"),i("throw"),i("return"),u[Symbol.asyncIterator]=function(){return this},u;function i(g){n[g]&&(u[g]=function(M){return new Promise(function(x,A){o.push([g,M,x,A])>1||l(g,M)})})}function l(g,M){try{D(n[g](M))}catch(x){O(o[0][3],x)}}function D(g){g.value instanceof L?Promise.resolve(g.value.v).then(a,v):O(o[0][2],g)}function a(g){l("next",g)}function v(g){l("throw",g)}function O(g,M){g(M),o.shift(),o.length&&l(o[0][0],o[0][1])}}function z(e){var t,r;return t={},n("next"),n("throw",function(u){throw u}),n("return"),t[Symbol.iterator]=function(){return this},t;function n(u,o){t[u]=e[u]?function(i){return(r=!r)?{value:L(e[u](i)),done:!1}:o?o(i):i}:o}}function W(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],r;return t?t.call(e):(e=typeof S=="function"?S(e):e[Symbol.iterator](),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(o){r[o]=e[o]&&function(i){return new Promise(function(l,D){i=e[o](i),u(l,D,i.done,i.value)})}}function u(o,i,l,D){Promise.resolve(D).then(function(a){o({value:a,done:l})},i)}}function k(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var q=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function V(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.hasOwnProperty.call(e,r)&&T(t,e,r);return q(t,e),t}function $(e){return e&&e.__esModule?e:{default:e}}function Q(e,t,r,n){if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}function Y(e,t,r,n,u){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!u)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!u:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?u.call(e,r):u?u.value=r:t.set(e,r),r}function H(e,t){if(t===null||typeof t!="object"&&typeof t!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof e=="function"?t===e:e.has(t)}function J(e,t,r){if(t!=null){if(typeof t!="object"&&typeof t!="function")throw new TypeError("Object expected.");var n;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");n=t[Symbol.asyncDispose]}if(n===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");n=t[Symbol.dispose]}if(typeof n!="function")throw new TypeError("Object not disposable.");e.stack.push({value:t,dispose:n,async:r})}else r&&e.stack.push({async:!0});return t}var ee=typeof SuppressedError=="function"?SuppressedError:function(e,t,r){var n=new Error(r);return n.name="SuppressedError",n.error=e,n.suppressed=t,n};function Z(e){function t(n){e.error=e.hasError?new ee(n,e.error,"An error was suppressed during disposal."):n,e.hasError=!0}function r(){for(;e.stack.length;){var n=e.stack.pop();try{var u=n.dispose&&n.dispose.call(n.value);if(n.async)return Promise.resolve(u).then(r,function(o){return t(o),r()})}catch(o){t(o)}}if(e.hasError)throw e.error}return r()}f.default={__extends:E,__assign:s,__rest:w,__decorate:_,__param:y,__metadata:b,__awaiter:P,__generator:C,__createBinding:T,__exportStar:B,__values:S,__read:F,__spread:U,__spreadArrays:G,__spreadArray:K,__await:L,__asyncGenerator:X,__asyncDelegator:z,__asyncValues:W,__makeTemplateObject:k,__importStar:V,__importDefault:$,__classPrivateFieldGet:Q,__classPrivateFieldSet:Y,__classPrivateFieldIn:H,__addDisposableResource:J,__disposeResources:Z}}}]);