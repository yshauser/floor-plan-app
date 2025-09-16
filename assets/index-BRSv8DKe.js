(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function cT(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Hd={exports:{}},Ml={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function Qw(){if(a_)return Ml;a_=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:i,type:s,key:f,ref:o!==void 0?o:null,props:u}}return Ml.Fragment=e,Ml.jsx=t,Ml.jsxs=t,Ml}var o_;function $w(){return o_||(o_=1,Hd.exports=Qw()),Hd.exports}var C=$w(),Fd={exports:{}},Oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function Ww(){if(l_)return Oe;l_=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.iterator;function w(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,G={};function X(D,Z,re){this.props=D,this.context=Z,this.refs=G,this.updater=re||x}X.prototype.isReactComponent={},X.prototype.setState=function(D,Z){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Z,"setState")},X.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function ce(){}ce.prototype=X.prototype;function ae(D,Z,re){this.props=D,this.context=Z,this.refs=G,this.updater=re||x}var ie=ae.prototype=new ce;ie.constructor=ae,U(ie,X.prototype),ie.isPureReactComponent=!0;var _e=Array.isArray,he={H:null,A:null,T:null,S:null,V:null},we=Object.prototype.hasOwnProperty;function M(D,Z,re,te,K,ye){return re=ye.ref,{$$typeof:i,type:D,key:Z,ref:re!==void 0?re:null,props:ye}}function A(D,Z){return M(D.type,Z,void 0,void 0,void 0,D.props)}function N(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function O(D){var Z={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(re){return Z[re]})}var V=/\/+/g;function k(D,Z){return typeof D=="object"&&D!==null&&D.key!=null?O(""+D.key):Z.toString(36)}function R(){}function $e(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(R,R):(D.status="pending",D.then(function(Z){D.status==="pending"&&(D.status="fulfilled",D.value=Z)},function(Z){D.status==="pending"&&(D.status="rejected",D.reason=Z)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function Ke(D,Z,re,te,K){var ye=typeof D;(ye==="undefined"||ye==="boolean")&&(D=null);var le=!1;if(D===null)le=!0;else switch(ye){case"bigint":case"string":case"number":le=!0;break;case"object":switch(D.$$typeof){case i:case e:le=!0;break;case E:return le=D._init,Ke(le(D._payload),Z,re,te,K)}}if(le)return K=K(D),le=te===""?"."+k(D,0):te,_e(K)?(re="",le!=null&&(re=le.replace(V,"$&/")+"/"),Ke(K,Z,re,"",function(gt){return gt})):K!=null&&(N(K)&&(K=A(K,re+(K.key==null||D&&D.key===K.key?"":(""+K.key).replace(V,"$&/")+"/")+le)),Z.push(K)),1;le=0;var Ie=te===""?".":te+":";if(_e(D))for(var Ce=0;Ce<D.length;Ce++)te=D[Ce],ye=Ie+k(te,Ce),le+=Ke(te,Z,re,ye,K);else if(Ce=w(D),typeof Ce=="function")for(D=Ce.call(D),Ce=0;!(te=D.next()).done;)te=te.value,ye=Ie+k(te,Ce++),le+=Ke(te,Z,re,ye,K);else if(ye==="object"){if(typeof D.then=="function")return Ke($e(D),Z,re,te,K);throw Z=String(D),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return le}function F(D,Z,re){if(D==null)return D;var te=[],K=0;return Ke(D,te,"","",function(ye){return Z.call(re,ye,K++)}),te}function se(D){if(D._status===-1){var Z=D._result;Z=Z(),Z.then(function(re){(D._status===0||D._status===-1)&&(D._status=1,D._result=re)},function(re){(D._status===0||D._status===-1)&&(D._status=2,D._result=re)}),D._status===-1&&(D._status=0,D._result=Z)}if(D._status===1)return D._result.default;throw D._result}var me=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Ve(){}return Oe.Children={map:F,forEach:function(D,Z,re){F(D,function(){Z.apply(this,arguments)},re)},count:function(D){var Z=0;return F(D,function(){Z++}),Z},toArray:function(D){return F(D,function(Z){return Z})||[]},only:function(D){if(!N(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Oe.Component=X,Oe.Fragment=t,Oe.Profiler=o,Oe.PureComponent=ae,Oe.StrictMode=s,Oe.Suspense=g,Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=he,Oe.__COMPILER_RUNTIME={__proto__:null,c:function(D){return he.H.useMemoCache(D)}},Oe.cache=function(D){return function(){return D.apply(null,arguments)}},Oe.cloneElement=function(D,Z,re){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var te=U({},D.props),K=D.key,ye=void 0;if(Z!=null)for(le in Z.ref!==void 0&&(ye=void 0),Z.key!==void 0&&(K=""+Z.key),Z)!we.call(Z,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&Z.ref===void 0||(te[le]=Z[le]);var le=arguments.length-2;if(le===1)te.children=re;else if(1<le){for(var Ie=Array(le),Ce=0;Ce<le;Ce++)Ie[Ce]=arguments[Ce+2];te.children=Ie}return M(D.type,K,void 0,void 0,ye,te)},Oe.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},Oe.createElement=function(D,Z,re){var te,K={},ye=null;if(Z!=null)for(te in Z.key!==void 0&&(ye=""+Z.key),Z)we.call(Z,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(K[te]=Z[te]);var le=arguments.length-2;if(le===1)K.children=re;else if(1<le){for(var Ie=Array(le),Ce=0;Ce<le;Ce++)Ie[Ce]=arguments[Ce+2];K.children=Ie}if(D&&D.defaultProps)for(te in le=D.defaultProps,le)K[te]===void 0&&(K[te]=le[te]);return M(D,ye,void 0,void 0,null,K)},Oe.createRef=function(){return{current:null}},Oe.forwardRef=function(D){return{$$typeof:m,render:D}},Oe.isValidElement=N,Oe.lazy=function(D){return{$$typeof:E,_payload:{_status:-1,_result:D},_init:se}},Oe.memo=function(D,Z){return{$$typeof:p,type:D,compare:Z===void 0?null:Z}},Oe.startTransition=function(D){var Z=he.T,re={};he.T=re;try{var te=D(),K=he.S;K!==null&&K(re,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(Ve,me)}catch(ye){me(ye)}finally{he.T=Z}},Oe.unstable_useCacheRefresh=function(){return he.H.useCacheRefresh()},Oe.use=function(D){return he.H.use(D)},Oe.useActionState=function(D,Z,re){return he.H.useActionState(D,Z,re)},Oe.useCallback=function(D,Z){return he.H.useCallback(D,Z)},Oe.useContext=function(D){return he.H.useContext(D)},Oe.useDebugValue=function(){},Oe.useDeferredValue=function(D,Z){return he.H.useDeferredValue(D,Z)},Oe.useEffect=function(D,Z,re){var te=he.H;if(typeof re=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return te.useEffect(D,Z)},Oe.useId=function(){return he.H.useId()},Oe.useImperativeHandle=function(D,Z,re){return he.H.useImperativeHandle(D,Z,re)},Oe.useInsertionEffect=function(D,Z){return he.H.useInsertionEffect(D,Z)},Oe.useLayoutEffect=function(D,Z){return he.H.useLayoutEffect(D,Z)},Oe.useMemo=function(D,Z){return he.H.useMemo(D,Z)},Oe.useOptimistic=function(D,Z){return he.H.useOptimistic(D,Z)},Oe.useReducer=function(D,Z,re){return he.H.useReducer(D,Z,re)},Oe.useRef=function(D){return he.H.useRef(D)},Oe.useState=function(D){return he.H.useState(D)},Oe.useSyncExternalStore=function(D,Z,re){return he.H.useSyncExternalStore(D,Z,re)},Oe.useTransition=function(){return he.H.useTransition()},Oe.version="19.1.0",Oe}var u_;function Wm(){return u_||(u_=1,Fd.exports=Ww()),Fd.exports}var ue=Wm();const kt=cT(ue);var Yd={exports:{}},Pl={},Gd={exports:{}},Xd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function Zw(){return c_||(c_=1,function(i){function e(F,se){var me=F.length;F.push(se);e:for(;0<me;){var Ve=me-1>>>1,D=F[Ve];if(0<o(D,se))F[Ve]=se,F[me]=D,me=Ve;else break e}}function t(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var se=F[0],me=F.pop();if(me!==se){F[0]=me;e:for(var Ve=0,D=F.length,Z=D>>>1;Ve<Z;){var re=2*(Ve+1)-1,te=F[re],K=re+1,ye=F[K];if(0>o(te,me))K<D&&0>o(ye,te)?(F[Ve]=ye,F[K]=me,Ve=K):(F[Ve]=te,F[re]=me,Ve=re);else if(K<D&&0>o(ye,me))F[Ve]=ye,F[K]=me,Ve=K;else break e}}return se}function o(F,se){var me=F.sortIndex-se.sortIndex;return me!==0?me:F.id-se.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();i.unstable_now=function(){return f.now()-m}}var g=[],p=[],E=1,S=null,w=3,x=!1,U=!1,G=!1,X=!1,ce=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;function _e(F){for(var se=t(p);se!==null;){if(se.callback===null)s(p);else if(se.startTime<=F)s(p),se.sortIndex=se.expirationTime,e(g,se);else break;se=t(p)}}function he(F){if(G=!1,_e(F),!U)if(t(g)!==null)U=!0,we||(we=!0,k());else{var se=t(p);se!==null&&Ke(he,se.startTime-F)}}var we=!1,M=-1,A=5,N=-1;function O(){return X?!0:!(i.unstable_now()-N<A)}function V(){if(X=!1,we){var F=i.unstable_now();N=F;var se=!0;try{e:{U=!1,G&&(G=!1,ae(M),M=-1),x=!0;var me=w;try{t:{for(_e(F),S=t(g);S!==null&&!(S.expirationTime>F&&O());){var Ve=S.callback;if(typeof Ve=="function"){S.callback=null,w=S.priorityLevel;var D=Ve(S.expirationTime<=F);if(F=i.unstable_now(),typeof D=="function"){S.callback=D,_e(F),se=!0;break t}S===t(g)&&s(g),_e(F)}else s(g);S=t(g)}if(S!==null)se=!0;else{var Z=t(p);Z!==null&&Ke(he,Z.startTime-F),se=!1}}break e}finally{S=null,w=me,x=!1}se=void 0}}finally{se?k():we=!1}}}var k;if(typeof ie=="function")k=function(){ie(V)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,$e=R.port2;R.port1.onmessage=V,k=function(){$e.postMessage(null)}}else k=function(){ce(V,0)};function Ke(F,se){M=ce(function(){F(i.unstable_now())},se)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(F){F.callback=null},i.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<F?Math.floor(1e3/F):5},i.unstable_getCurrentPriorityLevel=function(){return w},i.unstable_next=function(F){switch(w){case 1:case 2:case 3:var se=3;break;default:se=w}var me=w;w=se;try{return F()}finally{w=me}},i.unstable_requestPaint=function(){X=!0},i.unstable_runWithPriority=function(F,se){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var me=w;w=F;try{return se()}finally{w=me}},i.unstable_scheduleCallback=function(F,se,me){var Ve=i.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?Ve+me:Ve):me=Ve,F){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=me+D,F={id:E++,callback:se,priorityLevel:F,startTime:me,expirationTime:D,sortIndex:-1},me>Ve?(F.sortIndex=me,e(p,F),t(g)===null&&F===t(p)&&(G?(ae(M),M=-1):G=!0,Ke(he,me-Ve))):(F.sortIndex=D,e(g,F),U||x||(U=!0,we||(we=!0,k()))),F},i.unstable_shouldYield=O,i.unstable_wrapCallback=function(F){var se=w;return function(){var me=w;w=se;try{return F.apply(this,arguments)}finally{w=me}}}}(Xd)),Xd}var h_;function Jw(){return h_||(h_=1,Gd.exports=Zw()),Gd.exports}var Kd={exports:{}},un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function eA(){if(f_)return un;f_=1;var i=Wm();function e(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)p+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(g,p,E){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:S==null?null:""+S,children:g,containerInfo:p,implementation:E}}var f=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,un.createPortal=function(g,p){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(g,p,null,E)},un.flushSync=function(g){var p=f.T,E=s.p;try{if(f.T=null,s.p=2,g)return g()}finally{f.T=p,s.p=E,s.d.f()}},un.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(g,p))},un.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},un.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var E=p.as,S=m(E,p.crossOrigin),w=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;E==="style"?s.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:w,fetchPriority:x}):E==="script"&&s.d.X(g,{crossOrigin:S,integrity:w,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},un.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var E=m(p.as,p.crossOrigin);s.d.M(g,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(g)},un.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var E=p.as,S=m(E,p.crossOrigin);s.d.L(g,E,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},un.preloadModule=function(g,p){if(typeof g=="string")if(p){var E=m(p.as,p.crossOrigin);s.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(g)},un.requestFormReset=function(g){s.d.r(g)},un.unstable_batchedUpdates=function(g,p){return g(p)},un.useFormState=function(g,p,E){return f.H.useFormState(g,p,E)},un.useFormStatus=function(){return f.H.useHostTransitionStatus()},un.version="19.1.0",un}var d_;function tA(){if(d_)return Kd.exports;d_=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Kd.exports=eA(),Kd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function nA(){if(m_)return Pl;m_=1;var i=Jw(),e=Wm(),t=tA();function s(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function u(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function f(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function m(n){if(u(n)!==n)throw Error(s(188))}function g(n){var r=n.alternate;if(!r){if(r=u(n),r===null)throw Error(s(188));return r!==n?null:n}for(var a=n,l=r;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return m(h),n;if(d===l)return m(h),r;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var _=!1,T=h.child;T;){if(T===a){_=!0,a=h,l=d;break}if(T===l){_=!0,l=h,a=d;break}T=T.sibling}if(!_){for(T=d.child;T;){if(T===a){_=!0,a=d,l=h;break}if(T===l){_=!0,l=d,a=h;break}T=T.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?n:r}function p(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=p(n),r!==null)return r;n=n.sibling}return null}var E=Object.assign,S=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),ce=Symbol.for("react.provider"),ae=Symbol.for("react.consumer"),ie=Symbol.for("react.context"),_e=Symbol.for("react.forward_ref"),he=Symbol.for("react.suspense"),we=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function k(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var R=Symbol.for("react.client.reference");function $e(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===R?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case X:return"Profiler";case G:return"StrictMode";case he:return"Suspense";case we:return"SuspenseList";case N:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case x:return"Portal";case ie:return(n.displayName||"Context")+".Provider";case ae:return(n._context.displayName||"Context")+".Consumer";case _e:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case M:return r=n.displayName||null,r!==null?r:$e(n.type)||"Memo";case A:r=n._payload,n=n._init;try{return $e(n(r))}catch{}}return null}var Ke=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},Ve=[],D=-1;function Z(n){return{current:n}}function re(n){0>D||(n.current=Ve[D],Ve[D]=null,D--)}function te(n,r){D++,Ve[D]=n.current,n.current=r}var K=Z(null),ye=Z(null),le=Z(null),Ie=Z(null);function Ce(n,r){switch(te(le,r),te(ye,n),te(K,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?Vv(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=Vv(r),n=kv(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}re(K),te(K,n)}function gt(){re(K),re(ye),re(le)}function Ct(n){n.memoizedState!==null&&te(Ie,n);var r=K.current,a=kv(r,n.type);r!==a&&(te(ye,n),te(K,a))}function on(n){ye.current===n&&(re(K),re(ye)),Ie.current===n&&(re(Ie),Rl._currentValue=me)}var kn=Object.prototype.hasOwnProperty,xn=i.unstable_scheduleCallback,Zn=i.unstable_cancelCallback,gs=i.unstable_shouldYield,ki=i.unstable_requestPaint,En=i.unstable_now,Do=i.unstable_getCurrentPriorityLevel,sa=i.unstable_ImmediatePriority,yr=i.unstable_UserBlockingPriority,ut=i.unstable_NormalPriority,aa=i.unstable_LowPriority,xi=i.unstable_IdlePriority,vr=i.log,oa=i.unstable_setDisableYieldValue,ct=null,Ye=null;function Rt(n){if(typeof vr=="function"&&oa(n),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(ct,n)}catch{}}var Nt=Math.clz32?Math.clz32:Li,la=Math.log,ua=Math.LN2;function Li(n){return n>>>=0,n===0?32:31-(la(n)/ua|0)|0}var Ui=256,zi=4194304;function Cn(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function $(n,r,a){var l=n.pendingLanes;if(l===0)return 0;var h=0,d=n.suspendedLanes,_=n.pingedLanes;n=n.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=Cn(l):(_&=T,_!==0?h=Cn(_):a||(a=T&~n,a!==0&&(h=Cn(a))))):(T=l&~d,T!==0?h=Cn(T):_!==0?h=Cn(_):a||(a=l&~n,a!==0&&(h=Cn(a)))),h===0?0:r!==0&&r!==h&&(r&d)===0&&(d=h&-h,a=r&-r,d>=a||d===32&&(a&4194048)!==0)?r:h}function fe(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function Le(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ht(){var n=Ui;return Ui<<=1,(Ui&4194048)===0&&(Ui=256),n}function De(){var n=zi;return zi<<=1,(zi&62914560)===0&&(zi=4194304),n}function Yt(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Gt(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function lt(n,r,a,l,h,d){var _=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var T=n.entanglements,I=n.expirationTimes,B=n.hiddenUpdates;for(a=_&~a;0<a;){var Q=31-Nt(a),J=1<<Q;T[Q]=0,I[Q]=-1;var q=B[Q];if(q!==null)for(B[Q]=null,Q=0;Q<q.length;Q++){var H=q[Q];H!==null&&(H.lane&=-536870913)}a&=~J}l!==0&&It(n,l,0),d!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=d&~(_&~r))}function It(n,r,a){n.pendingLanes|=r,n.suspendedLanes&=~r;var l=31-Nt(r);n.entangledLanes|=r,n.entanglements[l]=n.entanglements[l]|1073741824|a&4194090}function Oo(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var l=31-Nt(a),h=1<<l;h&r|n[l]&r&&(n[l]|=r),a&=~h}}function _r(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function ca(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Er(){var n=se.p;return n!==0?n:(n=window.event,n===void 0?32:e_(n.type))}function mu(n,r){var a=se.p;try{return se.p=n,r()}finally{se.p=a}}var ft=Math.random().toString(36).slice(2),Ut="__reactFiber$"+ft,Dt="__reactProps$"+ft,Ln="__reactContainer$"+ft,Mo="__reactEvents$"+ft,Yh="__reactListeners$"+ft,Tr="__reactHandles$"+ft,pu="__reactResources$"+ft,ys="__reactMarker$"+ft;function Sr(n){delete n[Ut],delete n[Dt],delete n[Mo],delete n[Yh],delete n[Tr]}function ji(n){var r=n[Ut];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Ln]||a[Ut]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=zv(n);n!==null;){if(a=n[Ut])return a;n=zv(n)}return r}n=a,a=n.parentNode}return null}function ci(n){if(n=n[Ut]||n[Ln]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function hi(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(s(33))}function pn(n){var r=n[pu];return r||(r=n[pu]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Tt(n){n[ys]=!0}var Po=new Set,ha={};function Jn(n,r){Bi(n,r),Bi(n+"Capture",r)}function Bi(n,r){for(ha[n]=r,n=0;n<r.length;n++)Po.add(r[n])}var gu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yu={},vs={};function vu(n){return kn.call(vs,n)?!0:kn.call(yu,n)?!1:gu.test(n)?vs[n]=!0:(yu[n]=!0,!1)}function br(n,r,a){if(vu(r))if(a===null)n.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+a)}}function fi(n,r,a){if(a===null)n.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+a)}}function Jt(n,r,a,l){if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(r,a,""+l)}}var _s,_u;function qi(n){if(_s===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);_s=r&&r[1]||"",_u=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_s+n+_u}var fa=!1;function da(n,r){if(!n||fa)return"";fa=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(H){var q=H}Reflect.construct(n,[],J)}else{try{J.call()}catch(H){q=H}n.call(J.prototype)}}else{try{throw Error()}catch(H){q=H}(J=n())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(H){if(H&&q&&typeof H.stack=="string")return[H.stack,q.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),_=d[0],T=d[1];if(_&&T){var I=_.split(`
`),B=T.split(`
`);for(h=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;h<B.length&&!B[h].includes("DetermineComponentFrameRoot");)h++;if(l===I.length||h===B.length)for(l=I.length-1,h=B.length-1;1<=l&&0<=h&&I[l]!==B[h];)h--;for(;1<=l&&0<=h;l--,h--)if(I[l]!==B[h]){if(l!==1||h!==1)do if(l--,h--,0>h||I[l]!==B[h]){var Q=`
`+I[l].replace(" at new "," at ");return n.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",n.displayName)),Q}while(1<=l&&0<=h);break}}}finally{fa=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?qi(a):""}function Vo(n){switch(n.tag){case 26:case 27:case 5:return qi(n.type);case 16:return qi("Lazy");case 13:return qi("Suspense");case 19:return qi("SuspenseList");case 0:case 15:return da(n.type,!1);case 11:return da(n.type.render,!1);case 1:return da(n.type,!0);case 31:return qi("Activity");default:return""}}function ma(n){try{var r="";do r+=Vo(n),n=n.return;while(n);return r}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function gn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ko(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Gh(n){var r=ko(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),l=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return h.call(this)},set:function(_){l=""+_,d.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(_){l=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function pa(n){n._valueTracker||(n._valueTracker=Gh(n))}function xo(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),l="";return n&&(l=ko(n)?n.checked?"true":"false":n.value),n=l,n!==a?(r.setValue(n),!0):!1}function Es(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Xh=/[\n"\\]/g;function Ot(n){return n.replace(Xh,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Rn(n,r,a,l,h,d,_,T){n.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?n.type=_:n.removeAttribute("type"),r!=null?_==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+gn(r)):n.value!==""+gn(r)&&(n.value=""+gn(r)):_!=="submit"&&_!=="reset"||n.removeAttribute("value"),r!=null?wr(n,_,gn(r)):a!=null?wr(n,_,gn(a)):l!=null&&n.removeAttribute("value"),h==null&&d!=null&&(n.defaultChecked=!!d),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.name=""+gn(T):n.removeAttribute("name")}function Ts(n,r,a,l,h,d,_,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(n.type=d),r!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||r!=null))return;a=a!=null?""+gn(a):"",r=r!=null?""+gn(r):a,T||r===n.value||(n.value=r),n.defaultValue=r}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=T?n.checked:!!l,n.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(n.name=_)}function wr(n,r,a){r==="number"&&Es(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function Hi(n,r,a,l){if(n=n.options,r){r={};for(var h=0;h<a.length;h++)r["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=r.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&l&&(n[a].defaultSelected=!0)}else{for(a=""+gn(a),r=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,l&&(n[h].defaultSelected=!0);return}r!==null||n[h].disabled||(r=n[h])}r!==null&&(r.selected=!0)}}function et(n,r,a){if(r!=null&&(r=""+gn(r),r!==n.value&&(n.value=r),a==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=a!=null?""+gn(a):""}function Ss(n,r,a,l){if(r==null){if(l!=null){if(a!=null)throw Error(s(92));if(Ke(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),r=a}a=gn(r),n.defaultValue=a,l=n.textContent,l===a&&l!==""&&l!==null&&(n.value=l)}function Un(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var bs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Eu(n,r,a){var l=r.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":l?n.setProperty(r,a):typeof a!="number"||a===0||bs.has(r)?r==="float"?n.cssFloat=a:n[r]=(""+a).trim():n[r]=a+"px"}function Lo(n,r,a){if(r!=null&&typeof r!="object")throw Error(s(62));if(n=n.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var h in r)l=r[h],r.hasOwnProperty(h)&&a[h]!==l&&Eu(n,h,l)}else for(var d in r)r.hasOwnProperty(d)&&Eu(n,d,r[d])}function Uo(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ga(n){return Qh.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Fi=null;function zn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Yi=null,Gi=null;function zo(n){var r=ci(n);if(r&&(n=r.stateNode)){var a=n[Dt]||null;e:switch(n=r.stateNode,r.type){case"input":if(Rn(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ot(""+r)+'"][type="radio"]'),r=0;r<a.length;r++){var l=a[r];if(l!==n&&l.form===n.form){var h=l[Dt]||null;if(!h)throw Error(s(90));Rn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<a.length;r++)l=a[r],l.form===n.form&&xo(l)}break e;case"textarea":et(n,a.value,a.defaultValue);break e;case"select":r=a.value,r!=null&&Hi(n,!!a.multiple,r,!1)}}}var di=!1;function Tu(n,r,a){if(di)return n(r,a);di=!0;try{var l=n(r);return l}finally{if(di=!1,(Yi!==null||Gi!==null)&&(mc(),Yi&&(r=Yi,n=Gi,Gi=Yi=null,zo(r),n)))for(r=0;r<n.length;r++)zo(n[r])}}function ws(n,r){var a=n.stateNode;if(a===null)return null;var l=a[Dt]||null;if(l===null)return null;a=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(s(231,r,typeof a));return a}var ei=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jn=!1;if(ei)try{var As={};Object.defineProperty(As,"passive",{get:function(){jn=!0}}),window.addEventListener("test",As,As),window.removeEventListener("test",As,As)}catch{jn=!1}var mi=null,Ar=null,Xi=null;function jo(){if(Xi)return Xi;var n,r=Ar,a=r.length,l,h="value"in mi?mi.value:mi.textContent,d=h.length;for(n=0;n<a&&r[n]===h[n];n++);var _=a-n;for(l=1;l<=_&&r[a-l]===h[d-l];l++);return Xi=h.slice(n,1<l?1-l:void 0)}function pi(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function gi(){return!0}function Bo(){return!1}function Xt(n){function r(a,l,h,d,_){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?gi:Bo,this.isPropagationStopped=Bo,this}return E(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gi)},persist:function(){},isPersistent:gi}),r}var We={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ya=Xt(We),Cs=E({},We,{view:0,detail:0}),Su=Xt(Cs),va,_a,yi,Rs=E({},Cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ds,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==yi&&(yi&&n.type==="mousemove"?(va=n.screenX-yi.screenX,_a=n.screenY-yi.screenY):_a=va=0,yi=n),va)},movementY:function(n){return"movementY"in n?n.movementY:_a}}),Bn=Xt(Rs),bu=E({},Rs,{dataTransfer:0}),$h=Xt(bu),Ns=E({},Cs,{relatedTarget:0}),Ea=Xt(Ns),qo=E({},We,{animationName:0,elapsedTime:0,pseudoElement:0}),Ta=Xt(qo),wu=E({},We,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Sa=Xt(wu),Wh=E({},We,{data:0}),Ho=Xt(Wh),Is={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Au={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fo(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Cu[n])?!!r[n]:!1}function Ds(){return Fo}var Ru=E({},Cs,{key:function(n){if(n.key){var r=Is[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=pi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Au[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ds,charCode:function(n){return n.type==="keypress"?pi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?pi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ba=Xt(Ru),Nu=E({},Rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yo=Xt(Nu),Ki=E({},Cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ds}),Iu=Xt(Ki),Du=E({},We,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ou=Xt(Du),Mu=E({},Rs,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),wa=Xt(Mu),yn=E({},We,{newState:0,oldState:0}),Pu=Xt(yn),Vu=[9,13,27,32],vi=ei&&"CompositionEvent"in window,c=null;ei&&"documentMode"in document&&(c=document.documentMode);var y=ei&&"TextEvent"in window&&!c,v=ei&&(!vi||c&&8<c&&11>=c),b=" ",z=!1;function Y(n,r){switch(n){case"keyup":return Vu.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oe(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var je=!1;function zt(n,r){switch(n){case"compositionend":return oe(r);case"keypress":return r.which!==32?null:(z=!0,b);case"textInput":return n=r.data,n===b&&z?null:n;default:return null}}function Be(n,r){if(je)return n==="compositionend"||!vi&&Y(n,r)?(n=jo(),Xi=Ar=mi=null,je=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return v&&r.locale!=="ko"?null:r.data;default:return null}}var Kt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jt(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Kt[n.type]:r==="textarea"}function Qi(n,r,a,l){Yi?Gi?Gi.push(l):Gi=[l]:Yi=l,r=Ec(r,"onChange"),0<r.length&&(a=new ya("onChange","change",null,a,l),n.push({event:a,listeners:r}))}var en=null,_i=null;function Go(n){Iv(n,0)}function ku(n){var r=hi(n);if(xo(r))return n}function $p(n,r){if(n==="change")return r}var Wp=!1;if(ei){var Zh;if(ei){var Jh="oninput"in document;if(!Jh){var Zp=document.createElement("div");Zp.setAttribute("oninput","return;"),Jh=typeof Zp.oninput=="function"}Zh=Jh}else Zh=!1;Wp=Zh&&(!document.documentMode||9<document.documentMode)}function Jp(){en&&(en.detachEvent("onpropertychange",eg),_i=en=null)}function eg(n){if(n.propertyName==="value"&&ku(_i)){var r=[];Qi(r,_i,n,zn(n)),Tu(Go,r)}}function Ab(n,r,a){n==="focusin"?(Jp(),en=r,_i=a,en.attachEvent("onpropertychange",eg)):n==="focusout"&&Jp()}function Cb(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ku(_i)}function Rb(n,r){if(n==="click")return ku(r)}function Nb(n,r){if(n==="input"||n==="change")return ku(r)}function Ib(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Nn=typeof Object.is=="function"?Object.is:Ib;function Xo(n,r){if(Nn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),l=Object.keys(r);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!kn.call(r,h)||!Nn(n[h],r[h]))return!1}return!0}function tg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ng(n,r){var a=tg(n);n=0;for(var l;a;){if(a.nodeType===3){if(l=n+a.textContent.length,n<=r&&l>=r)return{node:a,offset:r-n};n=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=tg(a)}}function ig(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?ig(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function rg(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=Es(n.document);r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Es(n.document)}return r}function ef(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var Db=ei&&"documentMode"in document&&11>=document.documentMode,Aa=null,tf=null,Ko=null,nf=!1;function sg(n,r,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nf||Aa==null||Aa!==Es(l)||(l=Aa,"selectionStart"in l&&ef(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ko&&Xo(Ko,l)||(Ko=l,l=Ec(tf,"onSelect"),0<l.length&&(r=new ya("onSelect","select",null,r,a),n.push({event:r,listeners:l}),r.target=Aa)))}function Os(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Ca={animationend:Os("Animation","AnimationEnd"),animationiteration:Os("Animation","AnimationIteration"),animationstart:Os("Animation","AnimationStart"),transitionrun:Os("Transition","TransitionRun"),transitionstart:Os("Transition","TransitionStart"),transitioncancel:Os("Transition","TransitionCancel"),transitionend:Os("Transition","TransitionEnd")},rf={},ag={};ei&&(ag=document.createElement("div").style,"AnimationEvent"in window||(delete Ca.animationend.animation,delete Ca.animationiteration.animation,delete Ca.animationstart.animation),"TransitionEvent"in window||delete Ca.transitionend.transition);function Ms(n){if(rf[n])return rf[n];if(!Ca[n])return n;var r=Ca[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in ag)return rf[n]=r[a];return n}var og=Ms("animationend"),lg=Ms("animationiteration"),ug=Ms("animationstart"),Ob=Ms("transitionrun"),Mb=Ms("transitionstart"),Pb=Ms("transitioncancel"),cg=Ms("transitionend"),hg=new Map,sf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");sf.push("scrollEnd");function ti(n,r){hg.set(n,r),Jn(r,[n])}var fg=new WeakMap;function qn(n,r){if(typeof n=="object"&&n!==null){var a=fg.get(n);return a!==void 0?a:(r={value:n,source:r,stack:ma(r)},fg.set(n,r),r)}return{value:n,source:r,stack:ma(r)}}var Hn=[],Ra=0,af=0;function xu(){for(var n=Ra,r=af=Ra=0;r<n;){var a=Hn[r];Hn[r++]=null;var l=Hn[r];Hn[r++]=null;var h=Hn[r];Hn[r++]=null;var d=Hn[r];if(Hn[r++]=null,l!==null&&h!==null){var _=l.pending;_===null?h.next=h:(h.next=_.next,_.next=h),l.pending=h}d!==0&&dg(a,h,d)}}function Lu(n,r,a,l){Hn[Ra++]=n,Hn[Ra++]=r,Hn[Ra++]=a,Hn[Ra++]=l,af|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function of(n,r,a,l){return Lu(n,r,a,l),Uu(n)}function Na(n,r){return Lu(n,null,null,r),Uu(n)}function dg(n,r,a){n.lanes|=a;var l=n.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=n.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(n=d.stateNode,n===null||n._visibility&1||(h=!0)),n=d,d=d.return;return n.tag===3?(d=n.stateNode,h&&r!==null&&(h=31-Nt(a),n=d.hiddenUpdates,l=n[h],l===null?n[h]=[r]:l.push(r),r.lane=a|536870912),d):null}function Uu(n){if(50<_l)throw _l=0,dd=null,Error(s(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var Ia={};function Vb(n,r,a,l){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(n,r,a,l){return new Vb(n,r,a,l)}function lf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function $i(n,r){var a=n.alternate;return a===null?(a=In(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&65011712,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function mg(n,r){n.flags&=65011714;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,r=a.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function zu(n,r,a,l,h,d){var _=0;if(l=n,typeof n=="function")lf(n)&&(_=1);else if(typeof n=="string")_=xw(n,a,K.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case N:return n=In(31,a,r,h),n.elementType=N,n.lanes=d,n;case U:return Ps(a.children,h,d,r);case G:_=8,h|=24;break;case X:return n=In(12,a,r,h|2),n.elementType=X,n.lanes=d,n;case he:return n=In(13,a,r,h),n.elementType=he,n.lanes=d,n;case we:return n=In(19,a,r,h),n.elementType=we,n.lanes=d,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ce:case ie:_=10;break e;case ae:_=9;break e;case _e:_=11;break e;case M:_=14;break e;case A:_=16,l=null;break e}_=29,a=Error(s(130,n===null?"null":typeof n,"")),l=null}return r=In(_,a,r,h),r.elementType=n,r.type=l,r.lanes=d,r}function Ps(n,r,a,l){return n=In(7,n,l,r),n.lanes=a,n}function uf(n,r,a){return n=In(6,n,null,r),n.lanes=a,n}function cf(n,r,a){return r=In(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var Da=[],Oa=0,ju=null,Bu=0,Fn=[],Yn=0,Vs=null,Wi=1,Zi="";function ks(n,r){Da[Oa++]=Bu,Da[Oa++]=ju,ju=n,Bu=r}function pg(n,r,a){Fn[Yn++]=Wi,Fn[Yn++]=Zi,Fn[Yn++]=Vs,Vs=n;var l=Wi;n=Zi;var h=32-Nt(l)-1;l&=~(1<<h),a+=1;var d=32-Nt(r)+h;if(30<d){var _=h-h%5;d=(l&(1<<_)-1).toString(32),l>>=_,h-=_,Wi=1<<32-Nt(r)+h|a<<h|l,Zi=d+n}else Wi=1<<d|a<<h|l,Zi=n}function hf(n){n.return!==null&&(ks(n,1),pg(n,1,0))}function ff(n){for(;n===ju;)ju=Da[--Oa],Da[Oa]=null,Bu=Da[--Oa],Da[Oa]=null;for(;n===Vs;)Vs=Fn[--Yn],Fn[Yn]=null,Zi=Fn[--Yn],Fn[Yn]=null,Wi=Fn[--Yn],Fn[Yn]=null}var vn=null,_t=null,Qe=!1,xs=null,Ei=!1,df=Error(s(519));function Ls(n){var r=Error(s(418,""));throw Wo(qn(r,n)),df}function gg(n){var r=n.stateNode,a=n.type,l=n.memoizedProps;switch(r[Ut]=n,r[Dt]=l,a){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(a=0;a<Tl.length;a++)xe(Tl[a],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":xe("invalid",r),Ts(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),pa(r);break;case"select":xe("invalid",r);break;case"textarea":xe("invalid",r),Ss(r,l.value,l.defaultValue,l.children),pa(r)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||r.textContent===""+a||l.suppressHydrationWarning===!0||Pv(r.textContent,a)?(l.popover!=null&&(xe("beforetoggle",r),xe("toggle",r)),l.onScroll!=null&&xe("scroll",r),l.onScrollEnd!=null&&xe("scrollend",r),l.onClick!=null&&(r.onclick=Tc),r=!0):r=!1,r||Ls(n)}function yg(n){for(vn=n.return;vn;)switch(vn.tag){case 5:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:vn=vn.return}}function Qo(n){if(n!==vn)return!1;if(!Qe)return yg(n),Qe=!0,!1;var r=n.tag,a;if((a=r!==3&&r!==27)&&((a=r===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||Id(n.type,n.memoizedProps)),a=!a),a&&_t&&Ls(n),yg(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(a=n.data,a==="/$"){if(r===0){_t=ii(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++;n=n.nextSibling}_t=null}}else r===27?(r=_t,Br(n.type)?(n=Pd,Pd=null,_t=n):_t=r):_t=vn?ii(n.stateNode.nextSibling):null;return!0}function $o(){_t=vn=null,Qe=!1}function vg(){var n=xs;return n!==null&&(bn===null?bn=n:bn.push.apply(bn,n),xs=null),n}function Wo(n){xs===null?xs=[n]:xs.push(n)}var mf=Z(null),Us=null,Ji=null;function Cr(n,r,a){te(mf,r._currentValue),r._currentValue=a}function er(n){n._currentValue=mf.current,re(mf)}function pf(n,r,a){for(;n!==null;){var l=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),n===a)break;n=n.return}}function gf(n,r,a,l){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var d=h.dependencies;if(d!==null){var _=h.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=h;for(var I=0;I<r.length;I++)if(T.context===r[I]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),pf(d.return,a,n),l||(_=null);break e}d=T.next}}else if(h.tag===18){if(_=h.return,_===null)throw Error(s(341));_.lanes|=a,d=_.alternate,d!==null&&(d.lanes|=a),pf(_,a,n),_=null}else _=h.child;if(_!==null)_.return=h;else for(_=h;_!==null;){if(_===n){_=null;break}if(h=_.sibling,h!==null){h.return=_.return,_=h;break}_=_.return}h=_}}function Zo(n,r,a,l){n=null;for(var h=r,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var _=h.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var T=h.type;Nn(h.pendingProps.value,_.value)||(n!==null?n.push(T):n=[T])}}else if(h===Ie.current){if(_=h.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push(Rl):n=[Rl])}h=h.return}n!==null&&gf(r,n,a,l),r.flags|=262144}function qu(n){for(n=n.firstContext;n!==null;){if(!Nn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function zs(n){Us=n,Ji=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function ln(n){return _g(Us,n)}function Hu(n,r){return Us===null&&zs(n),_g(n,r)}function _g(n,r){var a=r._currentValue;if(r={context:r,memoizedValue:a,next:null},Ji===null){if(n===null)throw Error(s(308));Ji=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else Ji=Ji.next=r;return a}var kb=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(a,l){n.push(l)}};this.abort=function(){r.aborted=!0,n.forEach(function(a){return a()})}},xb=i.unstable_scheduleCallback,Lb=i.unstable_NormalPriority,Bt={$$typeof:ie,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yf(){return{controller:new kb,data:new Map,refCount:0}}function Jo(n){n.refCount--,n.refCount===0&&xb(Lb,function(){n.controller.abort()})}var el=null,vf=0,Ma=0,Pa=null;function Ub(n,r){if(el===null){var a=el=[];vf=0,Ma=Ed(),Pa={status:"pending",value:void 0,then:function(l){a.push(l)}}}return vf++,r.then(Eg,Eg),r}function Eg(){if(--vf===0&&el!==null){Pa!==null&&(Pa.status="fulfilled");var n=el;el=null,Ma=0,Pa=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function zb(n,r){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return n.then(function(){l.status="fulfilled",l.value=r;for(var h=0;h<a.length;h++)(0,a[h])(r)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Tg=F.S;F.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&Ub(n,r),Tg!==null&&Tg(n,r)};var js=Z(null);function _f(){var n=js.current;return n!==null?n:st.pooledCache}function Fu(n,r){r===null?te(js,js.current):te(js,r.pool)}function Sg(){var n=_f();return n===null?null:{parent:Bt._currentValue,pool:n}}var tl=Error(s(460)),bg=Error(s(474)),Yu=Error(s(542)),Ef={then:function(){}};function wg(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Gu(){}function Ag(n,r,a){switch(a=n[a],a===void 0?n.push(r):a!==r&&(r.then(Gu,Gu),r=a),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,Rg(n),n;default:if(typeof r.status=="string")r.then(Gu,Gu);else{if(n=st,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=r,n.status="pending",n.then(function(l){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=l}},function(l){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,Rg(n),n}throw nl=r,tl}}var nl=null;function Cg(){if(nl===null)throw Error(s(459));var n=nl;return nl=null,n}function Rg(n){if(n===tl||n===Yu)throw Error(s(483))}var Rr=!1;function Tf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Sf(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Nr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Ir(n,r,a){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Ze&2)!==0){var h=l.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),l.pending=r,r=Uu(n),dg(n,null,a),r}return Lu(n,l,r,a),Uu(n)}function il(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194048)!==0)){var l=r.lanes;l&=n.pendingLanes,a|=l,r.lanes=a,Oo(n,a)}}function bf(n,r){var a=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=_:d=d.next=_,a=a.next}while(a!==null);d===null?h=d=r:d=d.next=r}else h=d=r;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}var wf=!1;function rl(){if(wf){var n=Pa;if(n!==null)throw n}}function sl(n,r,a,l){wf=!1;var h=n.updateQueue;Rr=!1;var d=h.firstBaseUpdate,_=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var I=T,B=I.next;I.next=null,_===null?d=B:_.next=B,_=I;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,T=Q.lastBaseUpdate,T!==_&&(T===null?Q.firstBaseUpdate=B:T.next=B,Q.lastBaseUpdate=I))}if(d!==null){var J=h.baseState;_=0,Q=B=I=null,T=d;do{var q=T.lane&-536870913,H=q!==T.lane;if(H?(qe&q)===q:(l&q)===q){q!==0&&q===Ma&&(wf=!0),Q!==null&&(Q=Q.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ae=n,Se=T;q=r;var it=a;switch(Se.tag){case 1:if(Ae=Se.payload,typeof Ae=="function"){J=Ae.call(it,J,q);break e}J=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=Se.payload,q=typeof Ae=="function"?Ae.call(it,J,q):Ae,q==null)break e;J=E({},J,q);break e;case 2:Rr=!0}}q=T.callback,q!==null&&(n.flags|=64,H&&(n.flags|=8192),H=h.callbacks,H===null?h.callbacks=[q]:H.push(q))}else H={lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Q===null?(B=Q=H,I=J):Q=Q.next=H,_|=q;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;H=T,T=H.next,H.next=null,h.lastBaseUpdate=H,h.shared.pending=null}}while(!0);Q===null&&(I=J),h.baseState=I,h.firstBaseUpdate=B,h.lastBaseUpdate=Q,d===null&&(h.shared.lanes=0),Lr|=_,n.lanes=_,n.memoizedState=J}}function Ng(n,r){if(typeof n!="function")throw Error(s(191,n));n.call(r)}function Ig(n,r){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)Ng(a[n],r)}var Va=Z(null),Xu=Z(0);function Dg(n,r){n=or,te(Xu,n),te(Va,r),or=n|r.baseLanes}function Af(){te(Xu,or),te(Va,Va.current)}function Cf(){or=Xu.current,re(Va),re(Xu)}var Dr=0,Me=null,tt=null,Mt=null,Ku=!1,ka=!1,Bs=!1,Qu=0,al=0,xa=null,jb=0;function St(){throw Error(s(321))}function Rf(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Nn(n[a],r[a]))return!1;return!0}function Nf(n,r,a,l,h,d){return Dr=d,Me=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,F.H=n===null||n.memoizedState===null?dy:my,Bs=!1,d=a(l,h),Bs=!1,ka&&(d=Mg(r,a,l,h)),Og(n),d}function Og(n){F.H=tc;var r=tt!==null&&tt.next!==null;if(Dr=0,Mt=tt=Me=null,Ku=!1,al=0,xa=null,r)throw Error(s(300));n===null||Qt||(n=n.dependencies,n!==null&&qu(n)&&(Qt=!0))}function Mg(n,r,a,l){Me=n;var h=0;do{if(ka&&(xa=null),al=0,ka=!1,25<=h)throw Error(s(301));if(h+=1,Mt=tt=null,n.updateQueue!=null){var d=n.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=Xb,d=r(a,l)}while(ka);return d}function Bb(){var n=F.H,r=n.useState()[0];return r=typeof r.then=="function"?ol(r):r,n=n.useState()[0],(tt!==null?tt.memoizedState:null)!==n&&(Me.flags|=1024),r}function If(){var n=Qu!==0;return Qu=0,n}function Df(n,r,a){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~a}function Of(n){if(Ku){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Ku=!1}Dr=0,Mt=tt=Me=null,ka=!1,al=Qu=0,xa=null}function Tn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mt===null?Me.memoizedState=Mt=n:Mt=Mt.next=n,Mt}function Pt(){if(tt===null){var n=Me.alternate;n=n!==null?n.memoizedState:null}else n=tt.next;var r=Mt===null?Me.memoizedState:Mt.next;if(r!==null)Mt=r,tt=n;else{if(n===null)throw Me.alternate===null?Error(s(467)):Error(s(310));tt=n,n={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},Mt===null?Me.memoizedState=Mt=n:Mt=Mt.next=n}return Mt}function Mf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ol(n){var r=al;return al+=1,xa===null&&(xa=[]),n=Ag(xa,n,r),r=Me,(Mt===null?r.memoizedState:Mt.next)===null&&(r=r.alternate,F.H=r===null||r.memoizedState===null?dy:my),n}function $u(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return ol(n);if(n.$$typeof===ie)return ln(n)}throw Error(s(438,String(n)))}function Pf(n){var r=null,a=Me.updateQueue;if(a!==null&&(r=a.memoCache),r==null){var l=Me.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),a===null&&(a=Mf(),Me.updateQueue=a),a.memoCache=r,a=r.data[r.index],a===void 0)for(a=r.data[r.index]=Array(n),l=0;l<n;l++)a[l]=O;return r.index++,a}function tr(n,r){return typeof r=="function"?r(n):r}function Wu(n){var r=Pt();return Vf(r,tt,n)}function Vf(n,r,a){var l=n.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=n.baseQueue,d=l.pending;if(d!==null){if(h!==null){var _=h.next;h.next=d.next,d.next=_}r.baseQueue=h=d,l.pending=null}if(d=n.baseState,h===null)n.memoizedState=d;else{r=h.next;var T=_=null,I=null,B=r,Q=!1;do{var J=B.lane&-536870913;if(J!==B.lane?(qe&J)===J:(Dr&J)===J){var q=B.revertLane;if(q===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),J===Ma&&(Q=!0);else if((Dr&q)===q){B=B.next,q===Ma&&(Q=!0);continue}else J={lane:0,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},I===null?(T=I=J,_=d):I=I.next=J,Me.lanes|=q,Lr|=q;J=B.action,Bs&&a(d,J),d=B.hasEagerState?B.eagerState:a(d,J)}else q={lane:J,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},I===null?(T=I=q,_=d):I=I.next=q,Me.lanes|=J,Lr|=J;B=B.next}while(B!==null&&B!==r);if(I===null?_=d:I.next=T,!Nn(d,n.memoizedState)&&(Qt=!0,Q&&(a=Pa,a!==null)))throw a;n.memoizedState=d,n.baseState=_,n.baseQueue=I,l.lastRenderedState=d}return h===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function kf(n){var r=Pt(),a=r.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var l=a.dispatch,h=a.pending,d=r.memoizedState;if(h!==null){a.pending=null;var _=h=h.next;do d=n(d,_.action),_=_.next;while(_!==h);Nn(d,r.memoizedState)||(Qt=!0),r.memoizedState=d,r.baseQueue===null&&(r.baseState=d),a.lastRenderedState=d}return[d,l]}function Pg(n,r,a){var l=Me,h=Pt(),d=Qe;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=r();var _=!Nn((tt||h).memoizedState,a);_&&(h.memoizedState=a,Qt=!0),h=h.queue;var T=xg.bind(null,l,h,n);if(ll(2048,8,T,[n]),h.getSnapshot!==r||_||Mt!==null&&Mt.memoizedState.tag&1){if(l.flags|=2048,La(9,Zu(),kg.bind(null,l,h,a,r),null),st===null)throw Error(s(349));d||(Dr&124)!==0||Vg(l,r,a)}return a}function Vg(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Me.updateQueue,r===null?(r=Mf(),Me.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function kg(n,r,a,l){r.value=a,r.getSnapshot=l,Lg(r)&&Ug(n)}function xg(n,r,a){return a(function(){Lg(r)&&Ug(n)})}function Lg(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Nn(n,a)}catch{return!0}}function Ug(n){var r=Na(n,2);r!==null&&Vn(r,n,2)}function xf(n){var r=Tn();if(typeof n=="function"){var a=n;if(n=a(),Bs){Rt(!0);try{a()}finally{Rt(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:n},r}function zg(n,r,a,l){return n.baseState=a,Vf(n,tt,typeof l=="function"?l:tr)}function qb(n,r,a,l,h){if(ec(n))throw Error(s(485));if(n=r.action,n!==null){var d={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};F.T!==null?a(!0):d.isTransition=!1,l(d),a=r.pending,a===null?(d.next=r.pending=d,jg(r,d)):(d.next=a.next,r.pending=a.next=d)}}function jg(n,r){var a=r.action,l=r.payload,h=n.state;if(r.isTransition){var d=F.T,_={};F.T=_;try{var T=a(h,l),I=F.S;I!==null&&I(_,T),Bg(n,r,T)}catch(B){Lf(n,r,B)}finally{F.T=d}}else try{d=a(h,l),Bg(n,r,d)}catch(B){Lf(n,r,B)}}function Bg(n,r,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){qg(n,r,l)},function(l){return Lf(n,r,l)}):qg(n,r,a)}function qg(n,r,a){r.status="fulfilled",r.value=a,Hg(r),n.state=a,r=n.pending,r!==null&&(a=r.next,a===r?n.pending=null:(a=a.next,r.next=a,jg(n,a)))}function Lf(n,r,a){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=a,Hg(r),r=r.next;while(r!==l)}n.action=null}function Hg(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function Fg(n,r){return r}function Yg(n,r){if(Qe){var a=st.formState;if(a!==null){e:{var l=Me;if(Qe){if(_t){t:{for(var h=_t,d=Ei;h.nodeType!==8;){if(!d){h=null;break t}if(h=ii(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){_t=ii(h.nextSibling),l=h.data==="F!";break e}}Ls(l)}l=!1}l&&(r=a[0])}}return a=Tn(),a.memoizedState=a.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fg,lastRenderedState:r},a.queue=l,a=cy.bind(null,Me,l),l.dispatch=a,l=xf(!1),d=qf.bind(null,Me,!1,l.queue),l=Tn(),h={state:r,dispatch:null,action:n,pending:null},l.queue=h,a=qb.bind(null,Me,h,d,a),h.dispatch=a,l.memoizedState=n,[r,a,!1]}function Gg(n){var r=Pt();return Xg(r,tt,n)}function Xg(n,r,a){if(r=Vf(n,r,Fg)[0],n=Wu(tr)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var l=ol(r)}catch(_){throw _===tl?Yu:_}else l=r;r=Pt();var h=r.queue,d=h.dispatch;return a!==r.memoizedState&&(Me.flags|=2048,La(9,Zu(),Hb.bind(null,h,a),null)),[l,d,n]}function Hb(n,r){n.action=r}function Kg(n){var r=Pt(),a=tt;if(a!==null)return Xg(r,a,n);Pt(),r=r.memoizedState,a=Pt();var l=a.queue.dispatch;return a.memoizedState=n,[r,l,!1]}function La(n,r,a,l){return n={tag:n,create:a,deps:l,inst:r,next:null},r=Me.updateQueue,r===null&&(r=Mf(),Me.updateQueue=r),a=r.lastEffect,a===null?r.lastEffect=n.next=n:(l=a.next,a.next=n,n.next=l,r.lastEffect=n),n}function Zu(){return{destroy:void 0,resource:void 0}}function Qg(){return Pt().memoizedState}function Ju(n,r,a,l){var h=Tn();l=l===void 0?null:l,Me.flags|=n,h.memoizedState=La(1|r,Zu(),a,l)}function ll(n,r,a,l){var h=Pt();l=l===void 0?null:l;var d=h.memoizedState.inst;tt!==null&&l!==null&&Rf(l,tt.memoizedState.deps)?h.memoizedState=La(r,d,a,l):(Me.flags|=n,h.memoizedState=La(1|r,d,a,l))}function $g(n,r){Ju(8390656,8,n,r)}function Wg(n,r){ll(2048,8,n,r)}function Zg(n,r){return ll(4,2,n,r)}function Jg(n,r){return ll(4,4,n,r)}function ey(n,r){if(typeof r=="function"){n=n();var a=r(n);return function(){typeof a=="function"?a():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function ty(n,r,a){a=a!=null?a.concat([n]):null,ll(4,4,ey.bind(null,r,n),a)}function Uf(){}function ny(n,r){var a=Pt();r=r===void 0?null:r;var l=a.memoizedState;return r!==null&&Rf(r,l[1])?l[0]:(a.memoizedState=[n,r],n)}function iy(n,r){var a=Pt();r=r===void 0?null:r;var l=a.memoizedState;if(r!==null&&Rf(r,l[1]))return l[0];if(l=n(),Bs){Rt(!0);try{n()}finally{Rt(!1)}}return a.memoizedState=[l,r],l}function zf(n,r,a){return a===void 0||(Dr&1073741824)!==0?n.memoizedState=r:(n.memoizedState=a,n=av(),Me.lanes|=n,Lr|=n,a)}function ry(n,r,a,l){return Nn(a,r)?a:Va.current!==null?(n=zf(n,a,l),Nn(n,r)||(Qt=!0),n):(Dr&42)===0?(Qt=!0,n.memoizedState=a):(n=av(),Me.lanes|=n,Lr|=n,r)}function sy(n,r,a,l,h){var d=se.p;se.p=d!==0&&8>d?d:8;var _=F.T,T={};F.T=T,qf(n,!1,r,a);try{var I=h(),B=F.S;if(B!==null&&B(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var Q=zb(I,l);ul(n,r,Q,Pn(n))}else ul(n,r,l,Pn(n))}catch(J){ul(n,r,{then:function(){},status:"rejected",reason:J},Pn())}finally{se.p=d,F.T=_}}function Fb(){}function jf(n,r,a,l){if(n.tag!==5)throw Error(s(476));var h=ay(n).queue;sy(n,h,r,me,a===null?Fb:function(){return oy(n),a(l)})}function ay(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:me},next:null};var a={};return r.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:a},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function oy(n){var r=ay(n).next.queue;ul(n,r,{},Pn())}function Bf(){return ln(Rl)}function ly(){return Pt().memoizedState}function uy(){return Pt().memoizedState}function Yb(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var a=Pn();n=Nr(a);var l=Ir(r,n,a);l!==null&&(Vn(l,r,a),il(l,r,a)),r={cache:yf()},n.payload=r;return}r=r.return}}function Gb(n,r,a){var l=Pn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ec(n)?hy(r,a):(a=of(n,r,a,l),a!==null&&(Vn(a,n,l),fy(a,r,l)))}function cy(n,r,a){var l=Pn();ul(n,r,a,l)}function ul(n,r,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ec(n))hy(r,h);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=r.lastRenderedReducer,d!==null))try{var _=r.lastRenderedState,T=d(_,a);if(h.hasEagerState=!0,h.eagerState=T,Nn(T,_))return Lu(n,r,h,0),st===null&&xu(),!1}catch{}finally{}if(a=of(n,r,h,l),a!==null)return Vn(a,n,l),fy(a,r,l),!0}return!1}function qf(n,r,a,l){if(l={lane:2,revertLane:Ed(),action:l,hasEagerState:!1,eagerState:null,next:null},ec(n)){if(r)throw Error(s(479))}else r=of(n,a,l,2),r!==null&&Vn(r,n,2)}function ec(n){var r=n.alternate;return n===Me||r!==null&&r===Me}function hy(n,r){ka=Ku=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function fy(n,r,a){if((a&4194048)!==0){var l=r.lanes;l&=n.pendingLanes,a|=l,r.lanes=a,Oo(n,a)}}var tc={readContext:ln,use:$u,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useLayoutEffect:St,useInsertionEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useSyncExternalStore:St,useId:St,useHostTransitionStatus:St,useFormState:St,useActionState:St,useOptimistic:St,useMemoCache:St,useCacheRefresh:St},dy={readContext:ln,use:$u,useCallback:function(n,r){return Tn().memoizedState=[n,r===void 0?null:r],n},useContext:ln,useEffect:$g,useImperativeHandle:function(n,r,a){a=a!=null?a.concat([n]):null,Ju(4194308,4,ey.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Ju(4194308,4,n,r)},useInsertionEffect:function(n,r){Ju(4,2,n,r)},useMemo:function(n,r){var a=Tn();r=r===void 0?null:r;var l=n();if(Bs){Rt(!0);try{n()}finally{Rt(!1)}}return a.memoizedState=[l,r],l},useReducer:function(n,r,a){var l=Tn();if(a!==void 0){var h=a(r);if(Bs){Rt(!0);try{a(r)}finally{Rt(!1)}}}else h=r;return l.memoizedState=l.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},l.queue=n,n=n.dispatch=Gb.bind(null,Me,n),[l.memoizedState,n]},useRef:function(n){var r=Tn();return n={current:n},r.memoizedState=n},useState:function(n){n=xf(n);var r=n.queue,a=cy.bind(null,Me,r);return r.dispatch=a,[n.memoizedState,a]},useDebugValue:Uf,useDeferredValue:function(n,r){var a=Tn();return zf(a,n,r)},useTransition:function(){var n=xf(!1);return n=sy.bind(null,Me,n.queue,!0,!1),Tn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,a){var l=Me,h=Tn();if(Qe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=r(),st===null)throw Error(s(349));(qe&124)!==0||Vg(l,r,a)}h.memoizedState=a;var d={value:a,getSnapshot:r};return h.queue=d,$g(xg.bind(null,l,d,n),[n]),l.flags|=2048,La(9,Zu(),kg.bind(null,l,d,a,r),null),a},useId:function(){var n=Tn(),r=st.identifierPrefix;if(Qe){var a=Zi,l=Wi;a=(l&~(1<<32-Nt(l)-1)).toString(32)+a,r="«"+r+"R"+a,a=Qu++,0<a&&(r+="H"+a.toString(32)),r+="»"}else a=jb++,r="«"+r+"r"+a.toString(32)+"»";return n.memoizedState=r},useHostTransitionStatus:Bf,useFormState:Yg,useActionState:Yg,useOptimistic:function(n){var r=Tn();r.memoizedState=r.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=a,r=qf.bind(null,Me,!0,a),a.dispatch=r,[n,r]},useMemoCache:Pf,useCacheRefresh:function(){return Tn().memoizedState=Yb.bind(null,Me)}},my={readContext:ln,use:$u,useCallback:ny,useContext:ln,useEffect:Wg,useImperativeHandle:ty,useInsertionEffect:Zg,useLayoutEffect:Jg,useMemo:iy,useReducer:Wu,useRef:Qg,useState:function(){return Wu(tr)},useDebugValue:Uf,useDeferredValue:function(n,r){var a=Pt();return ry(a,tt.memoizedState,n,r)},useTransition:function(){var n=Wu(tr)[0],r=Pt().memoizedState;return[typeof n=="boolean"?n:ol(n),r]},useSyncExternalStore:Pg,useId:ly,useHostTransitionStatus:Bf,useFormState:Gg,useActionState:Gg,useOptimistic:function(n,r){var a=Pt();return zg(a,tt,n,r)},useMemoCache:Pf,useCacheRefresh:uy},Xb={readContext:ln,use:$u,useCallback:ny,useContext:ln,useEffect:Wg,useImperativeHandle:ty,useInsertionEffect:Zg,useLayoutEffect:Jg,useMemo:iy,useReducer:kf,useRef:Qg,useState:function(){return kf(tr)},useDebugValue:Uf,useDeferredValue:function(n,r){var a=Pt();return tt===null?zf(a,n,r):ry(a,tt.memoizedState,n,r)},useTransition:function(){var n=kf(tr)[0],r=Pt().memoizedState;return[typeof n=="boolean"?n:ol(n),r]},useSyncExternalStore:Pg,useId:ly,useHostTransitionStatus:Bf,useFormState:Kg,useActionState:Kg,useOptimistic:function(n,r){var a=Pt();return tt!==null?zg(a,tt,n,r):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:Pf,useCacheRefresh:uy},Ua=null,cl=0;function nc(n){var r=cl;return cl+=1,Ua===null&&(Ua=[]),Ag(Ua,n,r)}function hl(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function ic(n,r){throw r.$$typeof===S?Error(s(525)):(n=Object.prototype.toString.call(r),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function py(n){var r=n._init;return r(n._payload)}function gy(n){function r(L,P){if(n){var j=L.deletions;j===null?(L.deletions=[P],L.flags|=16):j.push(P)}}function a(L,P){if(!n)return null;for(;P!==null;)r(L,P),P=P.sibling;return null}function l(L){for(var P=new Map;L!==null;)L.key!==null?P.set(L.key,L):P.set(L.index,L),L=L.sibling;return P}function h(L,P){return L=$i(L,P),L.index=0,L.sibling=null,L}function d(L,P,j){return L.index=j,n?(j=L.alternate,j!==null?(j=j.index,j<P?(L.flags|=67108866,P):j):(L.flags|=67108866,P)):(L.flags|=1048576,P)}function _(L){return n&&L.alternate===null&&(L.flags|=67108866),L}function T(L,P,j,W){return P===null||P.tag!==6?(P=uf(j,L.mode,W),P.return=L,P):(P=h(P,j),P.return=L,P)}function I(L,P,j,W){var ge=j.type;return ge===U?Q(L,P,j.props.children,W,j.key):P!==null&&(P.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===A&&py(ge)===P.type)?(P=h(P,j.props),hl(P,j),P.return=L,P):(P=zu(j.type,j.key,j.props,null,L.mode,W),hl(P,j),P.return=L,P)}function B(L,P,j,W){return P===null||P.tag!==4||P.stateNode.containerInfo!==j.containerInfo||P.stateNode.implementation!==j.implementation?(P=cf(j,L.mode,W),P.return=L,P):(P=h(P,j.children||[]),P.return=L,P)}function Q(L,P,j,W,ge){return P===null||P.tag!==7?(P=Ps(j,L.mode,W,ge),P.return=L,P):(P=h(P,j),P.return=L,P)}function J(L,P,j){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=uf(""+P,L.mode,j),P.return=L,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case w:return j=zu(P.type,P.key,P.props,null,L.mode,j),hl(j,P),j.return=L,j;case x:return P=cf(P,L.mode,j),P.return=L,P;case A:var W=P._init;return P=W(P._payload),J(L,P,j)}if(Ke(P)||k(P))return P=Ps(P,L.mode,j,null),P.return=L,P;if(typeof P.then=="function")return J(L,nc(P),j);if(P.$$typeof===ie)return J(L,Hu(L,P),j);ic(L,P)}return null}function q(L,P,j,W){var ge=P!==null?P.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return ge!==null?null:T(L,P,""+j,W);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case w:return j.key===ge?I(L,P,j,W):null;case x:return j.key===ge?B(L,P,j,W):null;case A:return ge=j._init,j=ge(j._payload),q(L,P,j,W)}if(Ke(j)||k(j))return ge!==null?null:Q(L,P,j,W,null);if(typeof j.then=="function")return q(L,P,nc(j),W);if(j.$$typeof===ie)return q(L,P,Hu(L,j),W);ic(L,j)}return null}function H(L,P,j,W,ge){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return L=L.get(j)||null,T(P,L,""+W,ge);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case w:return L=L.get(W.key===null?j:W.key)||null,I(P,L,W,ge);case x:return L=L.get(W.key===null?j:W.key)||null,B(P,L,W,ge);case A:var Pe=W._init;return W=Pe(W._payload),H(L,P,j,W,ge)}if(Ke(W)||k(W))return L=L.get(j)||null,Q(P,L,W,ge,null);if(typeof W.then=="function")return H(L,P,j,nc(W),ge);if(W.$$typeof===ie)return H(L,P,j,Hu(P,W),ge);ic(P,W)}return null}function Ae(L,P,j,W){for(var ge=null,Pe=null,ve=P,be=P=0,Wt=null;ve!==null&&be<j.length;be++){ve.index>be?(Wt=ve,ve=null):Wt=ve.sibling;var Xe=q(L,ve,j[be],W);if(Xe===null){ve===null&&(ve=Wt);break}n&&ve&&Xe.alternate===null&&r(L,ve),P=d(Xe,P,be),Pe===null?ge=Xe:Pe.sibling=Xe,Pe=Xe,ve=Wt}if(be===j.length)return a(L,ve),Qe&&ks(L,be),ge;if(ve===null){for(;be<j.length;be++)ve=J(L,j[be],W),ve!==null&&(P=d(ve,P,be),Pe===null?ge=ve:Pe.sibling=ve,Pe=ve);return Qe&&ks(L,be),ge}for(ve=l(ve);be<j.length;be++)Wt=H(ve,L,be,j[be],W),Wt!==null&&(n&&Wt.alternate!==null&&ve.delete(Wt.key===null?be:Wt.key),P=d(Wt,P,be),Pe===null?ge=Wt:Pe.sibling=Wt,Pe=Wt);return n&&ve.forEach(function(Gr){return r(L,Gr)}),Qe&&ks(L,be),ge}function Se(L,P,j,W){if(j==null)throw Error(s(151));for(var ge=null,Pe=null,ve=P,be=P=0,Wt=null,Xe=j.next();ve!==null&&!Xe.done;be++,Xe=j.next()){ve.index>be?(Wt=ve,ve=null):Wt=ve.sibling;var Gr=q(L,ve,Xe.value,W);if(Gr===null){ve===null&&(ve=Wt);break}n&&ve&&Gr.alternate===null&&r(L,ve),P=d(Gr,P,be),Pe===null?ge=Gr:Pe.sibling=Gr,Pe=Gr,ve=Wt}if(Xe.done)return a(L,ve),Qe&&ks(L,be),ge;if(ve===null){for(;!Xe.done;be++,Xe=j.next())Xe=J(L,Xe.value,W),Xe!==null&&(P=d(Xe,P,be),Pe===null?ge=Xe:Pe.sibling=Xe,Pe=Xe);return Qe&&ks(L,be),ge}for(ve=l(ve);!Xe.done;be++,Xe=j.next())Xe=H(ve,L,be,Xe.value,W),Xe!==null&&(n&&Xe.alternate!==null&&ve.delete(Xe.key===null?be:Xe.key),P=d(Xe,P,be),Pe===null?ge=Xe:Pe.sibling=Xe,Pe=Xe);return n&&ve.forEach(function(Kw){return r(L,Kw)}),Qe&&ks(L,be),ge}function it(L,P,j,W){if(typeof j=="object"&&j!==null&&j.type===U&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case w:e:{for(var ge=j.key;P!==null;){if(P.key===ge){if(ge=j.type,ge===U){if(P.tag===7){a(L,P.sibling),W=h(P,j.props.children),W.return=L,L=W;break e}}else if(P.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===A&&py(ge)===P.type){a(L,P.sibling),W=h(P,j.props),hl(W,j),W.return=L,L=W;break e}a(L,P);break}else r(L,P);P=P.sibling}j.type===U?(W=Ps(j.props.children,L.mode,W,j.key),W.return=L,L=W):(W=zu(j.type,j.key,j.props,null,L.mode,W),hl(W,j),W.return=L,L=W)}return _(L);case x:e:{for(ge=j.key;P!==null;){if(P.key===ge)if(P.tag===4&&P.stateNode.containerInfo===j.containerInfo&&P.stateNode.implementation===j.implementation){a(L,P.sibling),W=h(P,j.children||[]),W.return=L,L=W;break e}else{a(L,P);break}else r(L,P);P=P.sibling}W=cf(j,L.mode,W),W.return=L,L=W}return _(L);case A:return ge=j._init,j=ge(j._payload),it(L,P,j,W)}if(Ke(j))return Ae(L,P,j,W);if(k(j)){if(ge=k(j),typeof ge!="function")throw Error(s(150));return j=ge.call(j),Se(L,P,j,W)}if(typeof j.then=="function")return it(L,P,nc(j),W);if(j.$$typeof===ie)return it(L,P,Hu(L,j),W);ic(L,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,P!==null&&P.tag===6?(a(L,P.sibling),W=h(P,j),W.return=L,L=W):(a(L,P),W=uf(j,L.mode,W),W.return=L,L=W),_(L)):a(L,P)}return function(L,P,j,W){try{cl=0;var ge=it(L,P,j,W);return Ua=null,ge}catch(ve){if(ve===tl||ve===Yu)throw ve;var Pe=In(29,ve,null,L.mode);return Pe.lanes=W,Pe.return=L,Pe}finally{}}}var za=gy(!0),yy=gy(!1),Gn=Z(null),Ti=null;function Or(n){var r=n.alternate;te(qt,qt.current&1),te(Gn,n),Ti===null&&(r===null||Va.current!==null||r.memoizedState!==null)&&(Ti=n)}function vy(n){if(n.tag===22){if(te(qt,qt.current),te(Gn,n),Ti===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(Ti=n)}}else Mr()}function Mr(){te(qt,qt.current),te(Gn,Gn.current)}function nr(n){re(Gn),Ti===n&&(Ti=null),re(qt)}var qt=Z(0);function rc(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Md(a)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Hf(n,r,a,l){r=n.memoizedState,a=a(l,r),a=a==null?r:E({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ff={enqueueSetState:function(n,r,a){n=n._reactInternals;var l=Pn(),h=Nr(l);h.payload=r,a!=null&&(h.callback=a),r=Ir(n,h,l),r!==null&&(Vn(r,n,l),il(r,n,l))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var l=Pn(),h=Nr(l);h.tag=1,h.payload=r,a!=null&&(h.callback=a),r=Ir(n,h,l),r!==null&&(Vn(r,n,l),il(r,n,l))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Pn(),l=Nr(a);l.tag=2,r!=null&&(l.callback=r),r=Ir(n,l,a),r!==null&&(Vn(r,n,a),il(r,n,a))}};function _y(n,r,a,l,h,d,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,d,_):r.prototype&&r.prototype.isPureReactComponent?!Xo(a,l)||!Xo(h,d):!0}function Ey(n,r,a,l){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,l),r.state!==n&&Ff.enqueueReplaceState(r,r.state,null)}function qs(n,r){var a=r;if("ref"in r){a={};for(var l in r)l!=="ref"&&(a[l]=r[l])}if(n=n.defaultProps){a===r&&(a=E({},a));for(var h in n)a[h]===void 0&&(a[h]=n[h])}return a}var sc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Ty(n){sc(n)}function Sy(n){console.error(n)}function by(n){sc(n)}function ac(n,r){try{var a=n.onUncaughtError;a(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function wy(n,r,a){try{var l=n.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Yf(n,r,a){return a=Nr(a),a.tag=3,a.payload={element:null},a.callback=function(){ac(n,r)},a}function Ay(n){return n=Nr(n),n.tag=3,n}function Cy(n,r,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;n.payload=function(){return h(d)},n.callback=function(){wy(r,a,l)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(n.callback=function(){wy(r,a,l),typeof h!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function Kb(n,r,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=a.alternate,r!==null&&Zo(r,a,h,!0),a=Gn.current,a!==null){switch(a.tag){case 13:return Ti===null?pd():a.alternate===null&&Et===0&&(Et=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===Ef?a.flags|=16384:(r=a.updateQueue,r===null?a.updateQueue=new Set([l]):r.add(l),yd(n,l,h)),!1;case 22:return a.flags|=65536,l===Ef?a.flags|=16384:(r=a.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=r):(a=r.retryQueue,a===null?r.retryQueue=new Set([l]):a.add(l)),yd(n,l,h)),!1}throw Error(s(435,a.tag))}return yd(n,l,h),pd(),!1}if(Qe)return r=Gn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,l!==df&&(n=Error(s(422),{cause:l}),Wo(qn(n,a)))):(l!==df&&(r=Error(s(423),{cause:l}),Wo(qn(r,a))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,l=qn(l,a),h=Yf(n.stateNode,l,h),bf(n,h),Et!==4&&(Et=2)),!1;var d=Error(s(520),{cause:l});if(d=qn(d,a),vl===null?vl=[d]:vl.push(d),Et!==4&&(Et=2),r===null)return!0;l=qn(l,a),a=r;do{switch(a.tag){case 3:return a.flags|=65536,n=h&-h,a.lanes|=n,n=Yf(a.stateNode,l,n),bf(a,n),!1;case 1:if(r=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ur===null||!Ur.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Ay(h),Cy(h,n,a,l),bf(a,h),!1}a=a.return}while(a!==null);return!1}var Ry=Error(s(461)),Qt=!1;function tn(n,r,a,l){r.child=n===null?yy(r,null,a,l):za(r,n.child,a,l)}function Ny(n,r,a,l,h){a=a.render;var d=r.ref;if("ref"in l){var _={};for(var T in l)T!=="ref"&&(_[T]=l[T])}else _=l;return zs(r),l=Nf(n,r,a,_,d,h),T=If(),n!==null&&!Qt?(Df(n,r,h),ir(n,r,h)):(Qe&&T&&hf(r),r.flags|=1,tn(n,r,l,h),r.child)}function Iy(n,r,a,l,h){if(n===null){var d=a.type;return typeof d=="function"&&!lf(d)&&d.defaultProps===void 0&&a.compare===null?(r.tag=15,r.type=d,Dy(n,r,d,l,h)):(n=zu(a.type,null,l,r,r.mode,h),n.ref=r.ref,n.return=r,r.child=n)}if(d=n.child,!Jf(n,h)){var _=d.memoizedProps;if(a=a.compare,a=a!==null?a:Xo,a(_,l)&&n.ref===r.ref)return ir(n,r,h)}return r.flags|=1,n=$i(d,l),n.ref=r.ref,n.return=r,r.child=n}function Dy(n,r,a,l,h){if(n!==null){var d=n.memoizedProps;if(Xo(d,l)&&n.ref===r.ref)if(Qt=!1,r.pendingProps=l=d,Jf(n,h))(n.flags&131072)!==0&&(Qt=!0);else return r.lanes=n.lanes,ir(n,r,h)}return Gf(n,r,a,l,h)}function Oy(n,r,a){var l=r.pendingProps,h=l.children,d=n!==null?n.memoizedState:null;if(l.mode==="hidden"){if((r.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,n!==null){for(h=r.child=n.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;r.childLanes=d&~l}else r.childLanes=0,r.child=null;return My(n,r,l,a)}if((a&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&Fu(r,d!==null?d.cachePool:null),d!==null?Dg(r,d):Af(),vy(r);else return r.lanes=r.childLanes=536870912,My(n,r,d!==null?d.baseLanes|a:a,a)}else d!==null?(Fu(r,d.cachePool),Dg(r,d),Mr(),r.memoizedState=null):(n!==null&&Fu(r,null),Af(),Mr());return tn(n,r,h,a),r.child}function My(n,r,a,l){var h=_f();return h=h===null?null:{parent:Bt._currentValue,pool:h},r.memoizedState={baseLanes:a,cachePool:h},n!==null&&Fu(r,null),Af(),vy(r),n!==null&&Zo(n,r,l,!0),null}function oc(n,r){var a=r.ref;if(a===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(n===null||n.ref!==a)&&(r.flags|=4194816)}}function Gf(n,r,a,l,h){return zs(r),a=Nf(n,r,a,l,void 0,h),l=If(),n!==null&&!Qt?(Df(n,r,h),ir(n,r,h)):(Qe&&l&&hf(r),r.flags|=1,tn(n,r,a,h),r.child)}function Py(n,r,a,l,h,d){return zs(r),r.updateQueue=null,a=Mg(r,l,a,h),Og(n),l=If(),n!==null&&!Qt?(Df(n,r,d),ir(n,r,d)):(Qe&&l&&hf(r),r.flags|=1,tn(n,r,a,d),r.child)}function Vy(n,r,a,l,h){if(zs(r),r.stateNode===null){var d=Ia,_=a.contextType;typeof _=="object"&&_!==null&&(d=ln(_)),d=new a(l,d),r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ff,r.stateNode=d,d._reactInternals=r,d=r.stateNode,d.props=l,d.state=r.memoizedState,d.refs={},Tf(r),_=a.contextType,d.context=typeof _=="object"&&_!==null?ln(_):Ia,d.state=r.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Hf(r,a,_,l),d.state=r.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&Ff.enqueueReplaceState(d,d.state,null),sl(r,l,d,h),rl(),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(n===null){d=r.stateNode;var T=r.memoizedProps,I=qs(a,T);d.props=I;var B=d.context,Q=a.contextType;_=Ia,typeof Q=="object"&&Q!==null&&(_=ln(Q));var J=a.getDerivedStateFromProps;Q=typeof J=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=r.pendingProps!==T,Q||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||B!==_)&&Ey(r,d,l,_),Rr=!1;var q=r.memoizedState;d.state=q,sl(r,l,d,h),rl(),B=r.memoizedState,T||q!==B||Rr?(typeof J=="function"&&(Hf(r,a,J,l),B=r.memoizedState),(I=Rr||_y(r,a,I,l,q,B,_))?(Q||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=B),d.props=l,d.state=B,d.context=_,l=I):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{d=r.stateNode,Sf(n,r),_=r.memoizedProps,Q=qs(a,_),d.props=Q,J=r.pendingProps,q=d.context,B=a.contextType,I=Ia,typeof B=="object"&&B!==null&&(I=ln(B)),T=a.getDerivedStateFromProps,(B=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==J||q!==I)&&Ey(r,d,l,I),Rr=!1,q=r.memoizedState,d.state=q,sl(r,l,d,h),rl();var H=r.memoizedState;_!==J||q!==H||Rr||n!==null&&n.dependencies!==null&&qu(n.dependencies)?(typeof T=="function"&&(Hf(r,a,T,l),H=r.memoizedState),(Q=Rr||_y(r,a,Q,l,q,H,I)||n!==null&&n.dependencies!==null&&qu(n.dependencies))?(B||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,H,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,H,I)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=H),d.props=l,d.state=H,d.context=I,l=Q):(typeof d.componentDidUpdate!="function"||_===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),l=!1)}return d=l,oc(n,r),l=(r.flags&128)!==0,d||l?(d=r.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),r.flags|=1,n!==null&&l?(r.child=za(r,n.child,null,h),r.child=za(r,null,a,h)):tn(n,r,a,h),r.memoizedState=d.state,n=r.child):n=ir(n,r,h),n}function ky(n,r,a,l){return $o(),r.flags|=256,tn(n,r,a,l),r.child}var Xf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kf(n){return{baseLanes:n,cachePool:Sg()}}function Qf(n,r,a){return n=n!==null?n.childLanes&~a:0,r&&(n|=Xn),n}function xy(n,r,a){var l=r.pendingProps,h=!1,d=(r.flags&128)!==0,_;if((_=d)||(_=n!==null&&n.memoizedState===null?!1:(qt.current&2)!==0),_&&(h=!0,r.flags&=-129),_=(r.flags&32)!==0,r.flags&=-33,n===null){if(Qe){if(h?Or(r):Mr(),Qe){var T=_t,I;if(I=T){e:{for(I=T,T=Ei;I.nodeType!==8;){if(!T){T=null;break e}if(I=ii(I.nextSibling),I===null){T=null;break e}}T=I}T!==null?(r.memoizedState={dehydrated:T,treeContext:Vs!==null?{id:Wi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},I=In(18,null,null,0),I.stateNode=T,I.return=r,r.child=I,vn=r,_t=null,I=!0):I=!1}I||Ls(r)}if(T=r.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Md(T)?r.lanes=32:r.lanes=536870912,null;nr(r)}return T=l.children,l=l.fallback,h?(Mr(),h=r.mode,T=lc({mode:"hidden",children:T},h),l=Ps(l,h,a,null),T.return=r,l.return=r,T.sibling=l,r.child=T,h=r.child,h.memoizedState=Kf(a),h.childLanes=Qf(n,_,a),r.memoizedState=Xf,l):(Or(r),$f(r,T))}if(I=n.memoizedState,I!==null&&(T=I.dehydrated,T!==null)){if(d)r.flags&256?(Or(r),r.flags&=-257,r=Wf(n,r,a)):r.memoizedState!==null?(Mr(),r.child=n.child,r.flags|=128,r=null):(Mr(),h=l.fallback,T=r.mode,l=lc({mode:"visible",children:l.children},T),h=Ps(h,T,a,null),h.flags|=2,l.return=r,h.return=r,l.sibling=h,r.child=l,za(r,n.child,null,a),l=r.child,l.memoizedState=Kf(a),l.childLanes=Qf(n,_,a),r.memoizedState=Xf,r=h);else if(Or(r),Md(T)){if(_=T.nextSibling&&T.nextSibling.dataset,_)var B=_.dgst;_=B,l=Error(s(419)),l.stack="",l.digest=_,Wo({value:l,source:null,stack:null}),r=Wf(n,r,a)}else if(Qt||Zo(n,r,a,!1),_=(a&n.childLanes)!==0,Qt||_){if(_=st,_!==null&&(l=a&-a,l=(l&42)!==0?1:_r(l),l=(l&(_.suspendedLanes|a))!==0?0:l,l!==0&&l!==I.retryLane))throw I.retryLane=l,Na(n,l),Vn(_,n,l),Ry;T.data==="$?"||pd(),r=Wf(n,r,a)}else T.data==="$?"?(r.flags|=192,r.child=n.child,r=null):(n=I.treeContext,_t=ii(T.nextSibling),vn=r,Qe=!0,xs=null,Ei=!1,n!==null&&(Fn[Yn++]=Wi,Fn[Yn++]=Zi,Fn[Yn++]=Vs,Wi=n.id,Zi=n.overflow,Vs=r),r=$f(r,l.children),r.flags|=4096);return r}return h?(Mr(),h=l.fallback,T=r.mode,I=n.child,B=I.sibling,l=$i(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,B!==null?h=$i(B,h):(h=Ps(h,T,a,null),h.flags|=2),h.return=r,l.return=r,l.sibling=h,r.child=l,l=h,h=r.child,T=n.child.memoizedState,T===null?T=Kf(a):(I=T.cachePool,I!==null?(B=Bt._currentValue,I=I.parent!==B?{parent:B,pool:B}:I):I=Sg(),T={baseLanes:T.baseLanes|a,cachePool:I}),h.memoizedState=T,h.childLanes=Qf(n,_,a),r.memoizedState=Xf,l):(Or(r),a=n.child,n=a.sibling,a=$i(a,{mode:"visible",children:l.children}),a.return=r,a.sibling=null,n!==null&&(_=r.deletions,_===null?(r.deletions=[n],r.flags|=16):_.push(n)),r.child=a,r.memoizedState=null,a)}function $f(n,r){return r=lc({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function lc(n,r){return n=In(22,n,null,r),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Wf(n,r,a){return za(r,n.child,null,a),n=$f(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Ly(n,r,a){n.lanes|=r;var l=n.alternate;l!==null&&(l.lanes|=r),pf(n.return,r,a)}function Zf(n,r,a,l,h){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=r,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function Uy(n,r,a){var l=r.pendingProps,h=l.revealOrder,d=l.tail;if(tn(n,r,l.children,a),l=qt.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ly(n,a,r);else if(n.tag===19)Ly(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}switch(te(qt,l),h){case"forwards":for(a=r.child,h=null;a!==null;)n=a.alternate,n!==null&&rc(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=r.child,r.child=null):(h=a.sibling,a.sibling=null),Zf(r,!1,h,a,d);break;case"backwards":for(a=null,h=r.child,r.child=null;h!==null;){if(n=h.alternate,n!==null&&rc(n)===null){r.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Zf(r,!0,a,null,d);break;case"together":Zf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ir(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Lr|=r.lanes,(a&r.childLanes)===0)if(n!==null){if(Zo(n,r,a,!1),(a&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(s(153));if(r.child!==null){for(n=r.child,a=$i(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=$i(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function Jf(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&qu(n)))}function Qb(n,r,a){switch(r.tag){case 3:Ce(r,r.stateNode.containerInfo),Cr(r,Bt,n.memoizedState.cache),$o();break;case 27:case 5:Ct(r);break;case 4:Ce(r,r.stateNode.containerInfo);break;case 10:Cr(r,r.type,r.memoizedProps.value);break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(Or(r),r.flags|=128,null):(a&r.child.childLanes)!==0?xy(n,r,a):(Or(r),n=ir(n,r,a),n!==null?n.sibling:null);Or(r);break;case 19:var h=(n.flags&128)!==0;if(l=(a&r.childLanes)!==0,l||(Zo(n,r,a,!1),l=(a&r.childLanes)!==0),h){if(l)return Uy(n,r,a);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),te(qt,qt.current),l)break;return null;case 22:case 23:return r.lanes=0,Oy(n,r,a);case 24:Cr(r,Bt,n.memoizedState.cache)}return ir(n,r,a)}function zy(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps)Qt=!0;else{if(!Jf(n,a)&&(r.flags&128)===0)return Qt=!1,Qb(n,r,a);Qt=(n.flags&131072)!==0}else Qt=!1,Qe&&(r.flags&1048576)!==0&&pg(r,Bu,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var l=r.elementType,h=l._init;if(l=h(l._payload),r.type=l,typeof l=="function")lf(l)?(n=qs(l,n),r.tag=1,r=Vy(null,r,l,n,a)):(r.tag=0,r=Gf(null,r,l,n,a));else{if(l!=null){if(h=l.$$typeof,h===_e){r.tag=11,r=Ny(null,r,l,n,a);break e}else if(h===M){r.tag=14,r=Iy(null,r,l,n,a);break e}}throw r=$e(l)||l,Error(s(306,r,""))}}return r;case 0:return Gf(n,r,r.type,r.pendingProps,a);case 1:return l=r.type,h=qs(l,r.pendingProps),Vy(n,r,l,h,a);case 3:e:{if(Ce(r,r.stateNode.containerInfo),n===null)throw Error(s(387));l=r.pendingProps;var d=r.memoizedState;h=d.element,Sf(n,r),sl(r,l,null,a);var _=r.memoizedState;if(l=_.cache,Cr(r,Bt,l),l!==d.cache&&gf(r,[Bt],a,!0),rl(),l=_.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:_.cache},r.updateQueue.baseState=d,r.memoizedState=d,r.flags&256){r=ky(n,r,l,a);break e}else if(l!==h){h=qn(Error(s(424)),r),Wo(h),r=ky(n,r,l,a);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(_t=ii(n.firstChild),vn=r,Qe=!0,xs=null,Ei=!0,a=yy(r,null,l,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if($o(),l===h){r=ir(n,r,a);break e}tn(n,r,l,a)}r=r.child}return r;case 26:return oc(n,r),n===null?(a=Hv(r.type,null,r.pendingProps,null))?r.memoizedState=a:Qe||(a=r.type,n=r.pendingProps,l=Sc(le.current).createElement(a),l[Ut]=r,l[Dt]=n,rn(l,a,n),Tt(l),r.stateNode=l):r.memoizedState=Hv(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return Ct(r),n===null&&Qe&&(l=r.stateNode=jv(r.type,r.pendingProps,le.current),vn=r,Ei=!0,h=_t,Br(r.type)?(Pd=h,_t=ii(l.firstChild)):_t=h),tn(n,r,r.pendingProps.children,a),oc(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&Qe&&((h=l=_t)&&(l=bw(l,r.type,r.pendingProps,Ei),l!==null?(r.stateNode=l,vn=r,_t=ii(l.firstChild),Ei=!1,h=!0):h=!1),h||Ls(r)),Ct(r),h=r.type,d=r.pendingProps,_=n!==null?n.memoizedProps:null,l=d.children,Id(h,d)?l=null:_!==null&&Id(h,_)&&(r.flags|=32),r.memoizedState!==null&&(h=Nf(n,r,Bb,null,null,a),Rl._currentValue=h),oc(n,r),tn(n,r,l,a),r.child;case 6:return n===null&&Qe&&((n=a=_t)&&(a=ww(a,r.pendingProps,Ei),a!==null?(r.stateNode=a,vn=r,_t=null,n=!0):n=!1),n||Ls(r)),null;case 13:return xy(n,r,a);case 4:return Ce(r,r.stateNode.containerInfo),l=r.pendingProps,n===null?r.child=za(r,null,l,a):tn(n,r,l,a),r.child;case 11:return Ny(n,r,r.type,r.pendingProps,a);case 7:return tn(n,r,r.pendingProps,a),r.child;case 8:return tn(n,r,r.pendingProps.children,a),r.child;case 12:return tn(n,r,r.pendingProps.children,a),r.child;case 10:return l=r.pendingProps,Cr(r,r.type,l.value),tn(n,r,l.children,a),r.child;case 9:return h=r.type._context,l=r.pendingProps.children,zs(r),h=ln(h),l=l(h),r.flags|=1,tn(n,r,l,a),r.child;case 14:return Iy(n,r,r.type,r.pendingProps,a);case 15:return Dy(n,r,r.type,r.pendingProps,a);case 19:return Uy(n,r,a);case 31:return l=r.pendingProps,a=r.mode,l={mode:l.mode,children:l.children},n===null?(a=lc(l,a),a.ref=r.ref,r.child=a,a.return=r,r=a):(a=$i(n.child,l),a.ref=r.ref,r.child=a,a.return=r,r=a),r;case 22:return Oy(n,r,a);case 24:return zs(r),l=ln(Bt),n===null?(h=_f(),h===null&&(h=st,d=yf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),r.memoizedState={parent:l,cache:h},Tf(r),Cr(r,Bt,h)):((n.lanes&a)!==0&&(Sf(n,r),sl(r,null,null,a),rl()),h=n.memoizedState,d=r.memoizedState,h.parent!==l?(h={parent:l,cache:l},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),Cr(r,Bt,l)):(l=d.cache,Cr(r,Bt,l),l!==h.cache&&gf(r,[Bt],a,!0))),tn(n,r,r.pendingProps.children,a),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function rr(n){n.flags|=4}function jy(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Kv(r)){if(r=Gn.current,r!==null&&((qe&4194048)===qe?Ti!==null:(qe&62914560)!==qe&&(qe&536870912)===0||r!==Ti))throw nl=Ef,bg;n.flags|=8192}}function uc(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?De():536870912,n.lanes|=r,Ha|=r)}function fl(n,r){if(!Qe)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function yt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,l=0;if(r)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=l,n.childLanes=a,r}function $b(n,r,a){var l=r.pendingProps;switch(ff(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(r),null;case 1:return yt(r),null;case 3:return a=r.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),er(Bt),gt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(Qo(r)?rr(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,vg())),yt(r),null;case 26:return a=r.memoizedState,n===null?(rr(r),a!==null?(yt(r),jy(r,a)):(yt(r),r.flags&=-16777217)):a?a!==n.memoizedState?(rr(r),yt(r),jy(r,a)):(yt(r),r.flags&=-16777217):(n.memoizedProps!==l&&rr(r),yt(r),r.flags&=-16777217),null;case 27:on(r),a=le.current;var h=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==l&&rr(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return yt(r),null}n=K.current,Qo(r)?gg(r):(n=jv(h,l,a),r.stateNode=n,rr(r))}return yt(r),null;case 5:if(on(r),a=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==l&&rr(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return yt(r),null}if(n=K.current,Qo(r))gg(r);else{switch(h=Sc(le.current),n){case 1:n=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:n=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":n=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":n=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":n=h.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}n[Ut]=r,n[Dt]=l;e:for(h=r.child;h!==null;){if(h.tag===5||h.tag===6)n.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===r)break e;for(;h.sibling===null;){if(h.return===null||h.return===r)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}r.stateNode=n;e:switch(rn(n,a,l),a){case"button":case"input":case"select":case"textarea":n=!!l.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&rr(r)}}return yt(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==l&&rr(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(s(166));if(n=le.current,Qo(r)){if(n=r.stateNode,a=r.memoizedProps,l=null,h=vn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}n[Ut]=r,n=!!(n.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Pv(n.nodeValue,a)),n||Ls(r)}else n=Sc(n).createTextNode(l),n[Ut]=r,r.stateNode=n}return yt(r),null;case 13:if(l=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=Qo(r),l!==null&&l.dehydrated!==null){if(n===null){if(!h)throw Error(s(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Ut]=r}else $o(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;yt(r),h=!1}else h=vg(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(nr(r),r):(nr(r),null)}if(nr(r),(r.flags&128)!==0)return r.lanes=a,r;if(a=l!==null,n=n!==null&&n.memoizedState!==null,a){l=r.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==n&&a&&(r.child.flags|=8192),uc(r,r.updateQueue),yt(r),null;case 4:return gt(),n===null&&wd(r.stateNode.containerInfo),yt(r),null;case 10:return er(r.type),yt(r),null;case 19:if(re(qt),h=r.memoizedState,h===null)return yt(r),null;if(l=(r.flags&128)!==0,d=h.rendering,d===null)if(l)fl(h,!1);else{if(Et!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(d=rc(n),d!==null){for(r.flags|=128,fl(h,!1),n=d.updateQueue,r.updateQueue=n,uc(r,n),r.subtreeFlags=0,n=a,a=r.child;a!==null;)mg(a,n),a=a.sibling;return te(qt,qt.current&1|2),r.child}n=n.sibling}h.tail!==null&&En()>fc&&(r.flags|=128,l=!0,fl(h,!1),r.lanes=4194304)}else{if(!l)if(n=rc(d),n!==null){if(r.flags|=128,l=!0,n=n.updateQueue,r.updateQueue=n,uc(r,n),fl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Qe)return yt(r),null}else 2*En()-h.renderingStartTime>fc&&a!==536870912&&(r.flags|=128,l=!0,fl(h,!1),r.lanes=4194304);h.isBackwards?(d.sibling=r.child,r.child=d):(n=h.last,n!==null?n.sibling=d:r.child=d,h.last=d)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=En(),r.sibling=null,n=qt.current,te(qt,l?n&1|2:n&1),r):(yt(r),null);case 22:case 23:return nr(r),Cf(),l=r.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(a&536870912)!==0&&(r.flags&128)===0&&(yt(r),r.subtreeFlags&6&&(r.flags|=8192)):yt(r),a=r.updateQueue,a!==null&&uc(r,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==a&&(r.flags|=2048),n!==null&&re(js),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),r.memoizedState.cache!==a&&(r.flags|=2048),er(Bt),yt(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function Wb(n,r){switch(ff(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return er(Bt),gt(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return on(r),null;case 13:if(nr(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(s(340));$o()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return re(qt),null;case 4:return gt(),null;case 10:return er(r.type),null;case 22:case 23:return nr(r),Cf(),n!==null&&re(js),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return er(Bt),null;case 25:return null;default:return null}}function By(n,r){switch(ff(r),r.tag){case 3:er(Bt),gt();break;case 26:case 27:case 5:on(r);break;case 4:gt();break;case 13:nr(r);break;case 19:re(qt);break;case 10:er(r.type);break;case 22:case 23:nr(r),Cf(),n!==null&&re(js);break;case 24:er(Bt)}}function dl(n,r){try{var a=r.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&n)===n){l=void 0;var d=a.create,_=a.inst;l=d(),_.destroy=l}a=a.next}while(a!==h)}}catch(T){rt(r,r.return,T)}}function Pr(n,r,a){try{var l=r.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&n)===n){var _=l.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,h=r;var I=a,B=T;try{B()}catch(Q){rt(h,I,Q)}}}l=l.next}while(l!==d)}}catch(Q){rt(r,r.return,Q)}}function qy(n){var r=n.updateQueue;if(r!==null){var a=n.stateNode;try{Ig(r,a)}catch(l){rt(n,n.return,l)}}}function Hy(n,r,a){a.props=qs(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(l){rt(n,r,l)}}function ml(n,r){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof a=="function"?n.refCleanup=a(l):a.current=l}}catch(h){rt(n,r,h)}}function Si(n,r){var a=n.ref,l=n.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){rt(n,r,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){rt(n,r,h)}else a.current=null}function Fy(n){var r=n.type,a=n.memoizedProps,l=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){rt(n,n.return,h)}}function ed(n,r,a){try{var l=n.stateNode;vw(l,n.type,a,r),l[Dt]=r}catch(h){rt(n,n.return,h)}}function Yy(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Br(n.type)||n.tag===4}function td(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Yy(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Br(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function nd(n,r,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,r?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,r):(r=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,r.appendChild(n),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Tc));else if(l!==4&&(l===27&&Br(n.type)&&(a=n.stateNode,r=null),n=n.child,n!==null))for(nd(n,r,a),n=n.sibling;n!==null;)nd(n,r,a),n=n.sibling}function cc(n,r,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(l!==4&&(l===27&&Br(n.type)&&(a=n.stateNode),n=n.child,n!==null))for(cc(n,r,a),n=n.sibling;n!==null;)cc(n,r,a),n=n.sibling}function Gy(n){var r=n.stateNode,a=n.memoizedProps;try{for(var l=n.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);rn(r,l,a),r[Ut]=n,r[Dt]=a}catch(d){rt(n,n.return,d)}}var sr=!1,bt=!1,id=!1,Xy=typeof WeakSet=="function"?WeakSet:Set,$t=null;function Zb(n,r){if(n=n.containerInfo,Rd=Nc,n=rg(n),ef(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var _=0,T=-1,I=-1,B=0,Q=0,J=n,q=null;t:for(;;){for(var H;J!==a||h!==0&&J.nodeType!==3||(T=_+h),J!==d||l!==0&&J.nodeType!==3||(I=_+l),J.nodeType===3&&(_+=J.nodeValue.length),(H=J.firstChild)!==null;)q=J,J=H;for(;;){if(J===n)break t;if(q===a&&++B===h&&(T=_),q===d&&++Q===l&&(I=_),(H=J.nextSibling)!==null)break;J=q,q=J.parentNode}J=H}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nd={focusedElem:n,selectionRange:a},Nc=!1,$t=r;$t!==null;)if(r=$t,n=r.child,(r.subtreeFlags&1024)!==0&&n!==null)n.return=r,$t=n;else for(;$t!==null;){switch(r=$t,d=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&d!==null){n=void 0,a=r,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Ae=qs(a.type,h,a.elementType===a.type);n=l.getSnapshotBeforeUpdate(Ae,d),l.__reactInternalSnapshotBeforeUpdate=n}catch(Se){rt(a,a.return,Se)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,a=n.nodeType,a===9)Od(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Od(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=r.sibling,n!==null){n.return=r.return,$t=n;break}$t=r.return}}function Ky(n,r,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Vr(n,a),l&4&&dl(5,a);break;case 1:if(Vr(n,a),l&4)if(n=a.stateNode,r===null)try{n.componentDidMount()}catch(_){rt(a,a.return,_)}else{var h=qs(a.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(h,r,n.__reactInternalSnapshotBeforeUpdate)}catch(_){rt(a,a.return,_)}}l&64&&qy(a),l&512&&ml(a,a.return);break;case 3:if(Vr(n,a),l&64&&(n=a.updateQueue,n!==null)){if(r=null,a.child!==null)switch(a.child.tag){case 27:case 5:r=a.child.stateNode;break;case 1:r=a.child.stateNode}try{Ig(n,r)}catch(_){rt(a,a.return,_)}}break;case 27:r===null&&l&4&&Gy(a);case 26:case 5:Vr(n,a),r===null&&l&4&&Fy(a),l&512&&ml(a,a.return);break;case 12:Vr(n,a);break;case 13:Vr(n,a),l&4&&Wy(n,a),l&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=ow.bind(null,a),Aw(n,a))));break;case 22:if(l=a.memoizedState!==null||sr,!l){r=r!==null&&r.memoizedState!==null||bt,h=sr;var d=bt;sr=l,(bt=r)&&!d?kr(n,a,(a.subtreeFlags&8772)!==0):Vr(n,a),sr=h,bt=d}break;case 30:break;default:Vr(n,a)}}function Qy(n){var r=n.alternate;r!==null&&(n.alternate=null,Qy(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&Sr(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var dt=null,Sn=!1;function ar(n,r,a){for(a=a.child;a!==null;)$y(n,r,a),a=a.sibling}function $y(n,r,a){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(ct,a)}catch{}switch(a.tag){case 26:bt||Si(a,r),ar(n,r,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:bt||Si(a,r);var l=dt,h=Sn;Br(a.type)&&(dt=a.stateNode,Sn=!1),ar(n,r,a),bl(a.stateNode),dt=l,Sn=h;break;case 5:bt||Si(a,r);case 6:if(l=dt,h=Sn,dt=null,ar(n,r,a),dt=l,Sn=h,dt!==null)if(Sn)try{(dt.nodeType===9?dt.body:dt.nodeName==="HTML"?dt.ownerDocument.body:dt).removeChild(a.stateNode)}catch(d){rt(a,r,d)}else try{dt.removeChild(a.stateNode)}catch(d){rt(a,r,d)}break;case 18:dt!==null&&(Sn?(n=dt,Uv(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),Ol(n)):Uv(dt,a.stateNode));break;case 4:l=dt,h=Sn,dt=a.stateNode.containerInfo,Sn=!0,ar(n,r,a),dt=l,Sn=h;break;case 0:case 11:case 14:case 15:bt||Pr(2,a,r),bt||Pr(4,a,r),ar(n,r,a);break;case 1:bt||(Si(a,r),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Hy(a,r,l)),ar(n,r,a);break;case 21:ar(n,r,a);break;case 22:bt=(l=bt)||a.memoizedState!==null,ar(n,r,a),bt=l;break;default:ar(n,r,a)}}function Wy(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Ol(n)}catch(a){rt(r,r.return,a)}}function Jb(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new Xy),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new Xy),r;default:throw Error(s(435,n.tag))}}function rd(n,r){var a=Jb(n);r.forEach(function(l){var h=lw.bind(null,n,l);a.has(l)||(a.add(l),l.then(h,h))})}function Dn(n,r){var a=r.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=n,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 27:if(Br(T.type)){dt=T.stateNode,Sn=!1;break e}break;case 5:dt=T.stateNode,Sn=!1;break e;case 3:case 4:dt=T.stateNode.containerInfo,Sn=!0;break e}T=T.return}if(dt===null)throw Error(s(160));$y(d,_,h),dt=null,Sn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Zy(r,n),r=r.sibling}var ni=null;function Zy(n,r){var a=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Dn(r,n),On(n),l&4&&(Pr(3,n,n.return),dl(3,n),Pr(5,n,n.return));break;case 1:Dn(r,n),On(n),l&512&&(bt||a===null||Si(a,a.return)),l&64&&sr&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=ni;if(Dn(r,n),On(n),l&512&&(bt||a===null||Si(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=n.memoizedState,a===null)if(l===null)if(n.stateNode===null){e:{l=n.type,a=n.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[ys]||d[Ut]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),rn(d,l,a),d[Ut]=n,Tt(d),l=d;break e;case"link":var _=Gv("link","href",h).get(l+(a.href||""));if(_){for(var T=0;T<_.length;T++)if(d=_[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(T,1);break t}}d=h.createElement(l),rn(d,l,a),h.head.appendChild(d);break;case"meta":if(_=Gv("meta","content",h).get(l+(a.content||""))){for(T=0;T<_.length;T++)if(d=_[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(T,1);break t}}d=h.createElement(l),rn(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[Ut]=n,Tt(d),l=d}n.stateNode=l}else Xv(h,n.type,n.stateNode);else n.stateNode=Yv(h,l,n.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?Xv(h,n.type,n.stateNode):Yv(h,l,n.memoizedProps)):l===null&&n.stateNode!==null&&ed(n,n.memoizedProps,a.memoizedProps)}break;case 27:Dn(r,n),On(n),l&512&&(bt||a===null||Si(a,a.return)),a!==null&&l&4&&ed(n,n.memoizedProps,a.memoizedProps);break;case 5:if(Dn(r,n),On(n),l&512&&(bt||a===null||Si(a,a.return)),n.flags&32){h=n.stateNode;try{Un(h,"")}catch(H){rt(n,n.return,H)}}l&4&&n.stateNode!=null&&(h=n.memoizedProps,ed(n,h,a!==null?a.memoizedProps:h)),l&1024&&(id=!0);break;case 6:if(Dn(r,n),On(n),l&4){if(n.stateNode===null)throw Error(s(162));l=n.memoizedProps,a=n.stateNode;try{a.nodeValue=l}catch(H){rt(n,n.return,H)}}break;case 3:if(Ac=null,h=ni,ni=bc(r.containerInfo),Dn(r,n),ni=h,On(n),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ol(r.containerInfo)}catch(H){rt(n,n.return,H)}id&&(id=!1,Jy(n));break;case 4:l=ni,ni=bc(n.stateNode.containerInfo),Dn(r,n),On(n),ni=l;break;case 12:Dn(r,n),On(n);break;case 13:Dn(r,n),On(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(cd=En()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,rd(n,l)));break;case 22:h=n.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,B=sr,Q=bt;if(sr=B||h,bt=Q||I,Dn(r,n),bt=Q,sr=B,On(n),l&8192)e:for(r=n.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(a===null||I||sr||bt||Hs(n)),a=null,r=n;;){if(r.tag===5||r.tag===26){if(a===null){I=a=r;try{if(d=I.stateNode,h)_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{T=I.stateNode;var J=I.memoizedProps.style,q=J!=null&&J.hasOwnProperty("display")?J.display:null;T.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(H){rt(I,I.return,H)}}}else if(r.tag===6){if(a===null){I=r;try{I.stateNode.nodeValue=h?"":I.memoizedProps}catch(H){rt(I,I.return,H)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;a===r&&(a=null),r=r.return}a===r&&(a=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=n.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,rd(n,a))));break;case 19:Dn(r,n),On(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,rd(n,l)));break;case 30:break;case 21:break;default:Dn(r,n),On(n)}}function On(n){var r=n.flags;if(r&2){try{for(var a,l=n.return;l!==null;){if(Yy(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=td(n);cc(n,d,h);break;case 5:var _=a.stateNode;a.flags&32&&(Un(_,""),a.flags&=-33);var T=td(n);cc(n,T,_);break;case 3:case 4:var I=a.stateNode.containerInfo,B=td(n);nd(n,B,I);break;default:throw Error(s(161))}}catch(Q){rt(n,n.return,Q)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Jy(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;Jy(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function Vr(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Ky(n,r.alternate,r),r=r.sibling}function Hs(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:Pr(4,r,r.return),Hs(r);break;case 1:Si(r,r.return);var a=r.stateNode;typeof a.componentWillUnmount=="function"&&Hy(r,r.return,a),Hs(r);break;case 27:bl(r.stateNode);case 26:case 5:Si(r,r.return),Hs(r);break;case 22:r.memoizedState===null&&Hs(r);break;case 30:Hs(r);break;default:Hs(r)}n=n.sibling}}function kr(n,r,a){for(a=a&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,h=n,d=r,_=d.flags;switch(d.tag){case 0:case 11:case 15:kr(h,d,a),dl(4,d);break;case 1:if(kr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(B){rt(l,l.return,B)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var I=h.shared.hiddenCallbacks;if(I!==null)for(h.shared.hiddenCallbacks=null,h=0;h<I.length;h++)Ng(I[h],T)}catch(B){rt(l,l.return,B)}}a&&_&64&&qy(d),ml(d,d.return);break;case 27:Gy(d);case 26:case 5:kr(h,d,a),a&&l===null&&_&4&&Fy(d),ml(d,d.return);break;case 12:kr(h,d,a);break;case 13:kr(h,d,a),a&&_&4&&Wy(h,d);break;case 22:d.memoizedState===null&&kr(h,d,a),ml(d,d.return);break;case 30:break;default:kr(h,d,a)}r=r.sibling}}function sd(n,r){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&Jo(a))}function ad(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Jo(n))}function bi(n,r,a,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)ev(n,r,a,l),r=r.sibling}function ev(n,r,a,l){var h=r.flags;switch(r.tag){case 0:case 11:case 15:bi(n,r,a,l),h&2048&&dl(9,r);break;case 1:bi(n,r,a,l);break;case 3:bi(n,r,a,l),h&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Jo(n)));break;case 12:if(h&2048){bi(n,r,a,l),n=r.stateNode;try{var d=r.memoizedProps,_=d.id,T=d.onPostCommit;typeof T=="function"&&T(_,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(I){rt(r,r.return,I)}}else bi(n,r,a,l);break;case 13:bi(n,r,a,l);break;case 23:break;case 22:d=r.stateNode,_=r.alternate,r.memoizedState!==null?d._visibility&2?bi(n,r,a,l):pl(n,r):d._visibility&2?bi(n,r,a,l):(d._visibility|=2,ja(n,r,a,l,(r.subtreeFlags&10256)!==0)),h&2048&&sd(_,r);break;case 24:bi(n,r,a,l),h&2048&&ad(r.alternate,r);break;default:bi(n,r,a,l)}}function ja(n,r,a,l,h){for(h=h&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var d=n,_=r,T=a,I=l,B=_.flags;switch(_.tag){case 0:case 11:case 15:ja(d,_,T,I,h),dl(8,_);break;case 23:break;case 22:var Q=_.stateNode;_.memoizedState!==null?Q._visibility&2?ja(d,_,T,I,h):pl(d,_):(Q._visibility|=2,ja(d,_,T,I,h)),h&&B&2048&&sd(_.alternate,_);break;case 24:ja(d,_,T,I,h),h&&B&2048&&ad(_.alternate,_);break;default:ja(d,_,T,I,h)}r=r.sibling}}function pl(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var a=n,l=r,h=l.flags;switch(l.tag){case 22:pl(a,l),h&2048&&sd(l.alternate,l);break;case 24:pl(a,l),h&2048&&ad(l.alternate,l);break;default:pl(a,l)}r=r.sibling}}var gl=8192;function Ba(n){if(n.subtreeFlags&gl)for(n=n.child;n!==null;)tv(n),n=n.sibling}function tv(n){switch(n.tag){case 26:Ba(n),n.flags&gl&&n.memoizedState!==null&&Uw(ni,n.memoizedState,n.memoizedProps);break;case 5:Ba(n);break;case 3:case 4:var r=ni;ni=bc(n.stateNode.containerInfo),Ba(n),ni=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=gl,gl=16777216,Ba(n),gl=r):Ba(n));break;default:Ba(n)}}function nv(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function yl(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];$t=l,rv(l,n)}nv(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)iv(n),n=n.sibling}function iv(n){switch(n.tag){case 0:case 11:case 15:yl(n),n.flags&2048&&Pr(9,n,n.return);break;case 3:yl(n);break;case 12:yl(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,hc(n)):yl(n);break;default:yl(n)}}function hc(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];$t=l,rv(l,n)}nv(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:Pr(8,r,r.return),hc(r);break;case 22:a=r.stateNode,a._visibility&2&&(a._visibility&=-3,hc(r));break;default:hc(r)}n=n.sibling}}function rv(n,r){for(;$t!==null;){var a=$t;switch(a.tag){case 0:case 11:case 15:Pr(8,a,r);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Jo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,$t=l;else e:for(a=n;$t!==null;){l=$t;var h=l.sibling,d=l.return;if(Qy(l),l===a){$t=null;break e}if(h!==null){h.return=d,$t=h;break e}$t=d}}}var ew={getCacheForType:function(n){var r=ln(Bt),a=r.data.get(n);return a===void 0&&(a=n(),r.data.set(n,a)),a}},tw=typeof WeakMap=="function"?WeakMap:Map,Ze=0,st=null,ke=null,qe=0,Je=0,Mn=null,xr=!1,qa=!1,od=!1,or=0,Et=0,Lr=0,Fs=0,ld=0,Xn=0,Ha=0,vl=null,bn=null,ud=!1,cd=0,fc=1/0,dc=null,Ur=null,nn=0,zr=null,Fa=null,Ya=0,hd=0,fd=null,sv=null,_l=0,dd=null;function Pn(){if((Ze&2)!==0&&qe!==0)return qe&-qe;if(F.T!==null){var n=Ma;return n!==0?n:Ed()}return Er()}function av(){Xn===0&&(Xn=(qe&536870912)===0||Qe?ht():536870912);var n=Gn.current;return n!==null&&(n.flags|=32),Xn}function Vn(n,r,a){(n===st&&(Je===2||Je===9)||n.cancelPendingCommit!==null)&&(Ga(n,0),jr(n,qe,Xn,!1)),Gt(n,a),((Ze&2)===0||n!==st)&&(n===st&&((Ze&2)===0&&(Fs|=a),Et===4&&jr(n,qe,Xn,!1)),wi(n))}function ov(n,r,a){if((Ze&6)!==0)throw Error(s(327));var l=!a&&(r&124)===0&&(r&n.expiredLanes)===0||fe(n,r),h=l?rw(n,r):gd(n,r,!0),d=l;do{if(h===0){qa&&!l&&jr(n,r,0,!1);break}else{if(a=n.current.alternate,d&&!nw(a)){h=gd(n,r,!1),d=!1;continue}if(h===2){if(d=r,n.errorRecoveryDisabledLanes&d)var _=0;else _=n.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){r=_;e:{var T=n;h=vl;var I=T.current.memoizedState.isDehydrated;if(I&&(Ga(T,_).flags|=256),_=gd(T,_,!1),_!==2){if(od&&!I){T.errorRecoveryDisabledLanes|=d,Fs|=d,h=4;break e}d=bn,bn=h,d!==null&&(bn===null?bn=d:bn.push.apply(bn,d))}h=_}if(d=!1,h!==2)continue}}if(h===1){Ga(n,0),jr(n,r,0,!0);break}e:{switch(l=n,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:jr(l,r,Xn,!xr);break e;case 2:bn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(h=cd+300-En(),10<h)){if(jr(l,r,Xn,!xr),$(l,0,!0)!==0)break e;l.timeoutHandle=xv(lv.bind(null,l,a,bn,dc,ud,r,Xn,Fs,Ha,xr,d,2,-0,0),h);break e}lv(l,a,bn,dc,ud,r,Xn,Fs,Ha,xr,d,0,-0,0)}}break}while(!0);wi(n)}function lv(n,r,a,l,h,d,_,T,I,B,Q,J,q,H){if(n.timeoutHandle=-1,J=r.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(Cl={stylesheets:null,count:0,unsuspend:Lw},tv(r),J=zw(),J!==null)){n.cancelPendingCommit=J(pv.bind(null,n,r,d,a,l,h,_,T,I,Q,1,q,H)),jr(n,d,_,!B);return}pv(n,r,d,a,l,h,_,T,I)}function nw(n){for(var r=n;;){var a=r.tag;if((a===0||a===11||a===15)&&r.flags&16384&&(a=r.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!Nn(d(),h))return!1}catch{return!1}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function jr(n,r,a,l){r&=~ld,r&=~Fs,n.suspendedLanes|=r,n.pingedLanes&=~r,l&&(n.warmLanes|=r),l=n.expirationTimes;for(var h=r;0<h;){var d=31-Nt(h),_=1<<d;l[d]=-1,h&=~_}a!==0&&It(n,a,r)}function mc(){return(Ze&6)===0?(El(0),!1):!0}function md(){if(ke!==null){if(Je===0)var n=ke.return;else n=ke,Ji=Us=null,Of(n),Ua=null,cl=0,n=ke;for(;n!==null;)By(n.alternate,n),n=n.return;ke=null}}function Ga(n,r){var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,Ew(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),md(),st=n,ke=a=$i(n.current,null),qe=r,Je=0,Mn=null,xr=!1,qa=fe(n,r),od=!1,Ha=Xn=ld=Fs=Lr=Et=0,bn=vl=null,ud=!1,(r&8)!==0&&(r|=r&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=r;0<l;){var h=31-Nt(l),d=1<<h;r|=n[h],l&=~d}return or=r,xu(),a}function uv(n,r){Me=null,F.H=tc,r===tl||r===Yu?(r=Cg(),Je=3):r===bg?(r=Cg(),Je=4):Je=r===Ry?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Mn=r,ke===null&&(Et=1,ac(n,qn(r,n.current)))}function cv(){var n=F.H;return F.H=tc,n===null?tc:n}function hv(){var n=F.A;return F.A=ew,n}function pd(){Et=4,xr||(qe&4194048)!==qe&&Gn.current!==null||(qa=!0),(Lr&134217727)===0&&(Fs&134217727)===0||st===null||jr(st,qe,Xn,!1)}function gd(n,r,a){var l=Ze;Ze|=2;var h=cv(),d=hv();(st!==n||qe!==r)&&(dc=null,Ga(n,r)),r=!1;var _=Et;e:do try{if(Je!==0&&ke!==null){var T=ke,I=Mn;switch(Je){case 8:md(),_=6;break e;case 3:case 2:case 9:case 6:Gn.current===null&&(r=!0);var B=Je;if(Je=0,Mn=null,Xa(n,T,I,B),a&&qa){_=0;break e}break;default:B=Je,Je=0,Mn=null,Xa(n,T,I,B)}}iw(),_=Et;break}catch(Q){uv(n,Q)}while(!0);return r&&n.shellSuspendCounter++,Ji=Us=null,Ze=l,F.H=h,F.A=d,ke===null&&(st=null,qe=0,xu()),_}function iw(){for(;ke!==null;)fv(ke)}function rw(n,r){var a=Ze;Ze|=2;var l=cv(),h=hv();st!==n||qe!==r?(dc=null,fc=En()+500,Ga(n,r)):qa=fe(n,r);e:do try{if(Je!==0&&ke!==null){r=ke;var d=Mn;t:switch(Je){case 1:Je=0,Mn=null,Xa(n,r,d,1);break;case 2:case 9:if(wg(d)){Je=0,Mn=null,dv(r);break}r=function(){Je!==2&&Je!==9||st!==n||(Je=7),wi(n)},d.then(r,r);break e;case 3:Je=7;break e;case 4:Je=5;break e;case 7:wg(d)?(Je=0,Mn=null,dv(r)):(Je=0,Mn=null,Xa(n,r,d,7));break;case 5:var _=null;switch(ke.tag){case 26:_=ke.memoizedState;case 5:case 27:var T=ke;if(!_||Kv(_)){Je=0,Mn=null;var I=T.sibling;if(I!==null)ke=I;else{var B=T.return;B!==null?(ke=B,pc(B)):ke=null}break t}}Je=0,Mn=null,Xa(n,r,d,5);break;case 6:Je=0,Mn=null,Xa(n,r,d,6);break;case 8:md(),Et=6;break e;default:throw Error(s(462))}}sw();break}catch(Q){uv(n,Q)}while(!0);return Ji=Us=null,F.H=l,F.A=h,Ze=a,ke!==null?0:(st=null,qe=0,xu(),Et)}function sw(){for(;ke!==null&&!gs();)fv(ke)}function fv(n){var r=zy(n.alternate,n,or);n.memoizedProps=n.pendingProps,r===null?pc(n):ke=r}function dv(n){var r=n,a=r.alternate;switch(r.tag){case 15:case 0:r=Py(a,r,r.pendingProps,r.type,void 0,qe);break;case 11:r=Py(a,r,r.pendingProps,r.type.render,r.ref,qe);break;case 5:Of(r);default:By(a,r),r=ke=mg(r,or),r=zy(a,r,or)}n.memoizedProps=n.pendingProps,r===null?pc(n):ke=r}function Xa(n,r,a,l){Ji=Us=null,Of(r),Ua=null,cl=0;var h=r.return;try{if(Kb(n,h,r,a,qe)){Et=1,ac(n,qn(a,n.current)),ke=null;return}}catch(d){if(h!==null)throw ke=h,d;Et=1,ac(n,qn(a,n.current)),ke=null;return}r.flags&32768?(Qe||l===1?n=!0:qa||(qe&536870912)!==0?n=!1:(xr=n=!0,(l===2||l===9||l===3||l===6)&&(l=Gn.current,l!==null&&l.tag===13&&(l.flags|=16384))),mv(r,n)):pc(r)}function pc(n){var r=n;do{if((r.flags&32768)!==0){mv(r,xr);return}n=r.return;var a=$b(r.alternate,r,or);if(a!==null){ke=a;return}if(r=r.sibling,r!==null){ke=r;return}ke=r=n}while(r!==null);Et===0&&(Et=5)}function mv(n,r){do{var a=Wb(n.alternate,n);if(a!==null){a.flags&=32767,ke=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!r&&(n=n.sibling,n!==null)){ke=n;return}ke=n=a}while(n!==null);Et=6,ke=null}function pv(n,r,a,l,h,d,_,T,I){n.cancelPendingCommit=null;do gc();while(nn!==0);if((Ze&6)!==0)throw Error(s(327));if(r!==null){if(r===n.current)throw Error(s(177));if(d=r.lanes|r.childLanes,d|=af,lt(n,a,d,_,T,I),n===st&&(ke=st=null,qe=0),Fa=r,zr=n,Ya=a,hd=d,fd=h,sv=l,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,uw(ut,function(){return Ev(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,h=se.p,se.p=2,_=Ze,Ze|=4;try{Zb(n,r,a)}finally{Ze=_,se.p=h,F.T=l}}nn=1,gv(),yv(),vv()}}function gv(){if(nn===1){nn=0;var n=zr,r=Fa,a=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var l=se.p;se.p=2;var h=Ze;Ze|=4;try{Zy(r,n);var d=Nd,_=rg(n.containerInfo),T=d.focusedElem,I=d.selectionRange;if(_!==T&&T&&T.ownerDocument&&ig(T.ownerDocument.documentElement,T)){if(I!==null&&ef(T)){var B=I.start,Q=I.end;if(Q===void 0&&(Q=B),"selectionStart"in T)T.selectionStart=B,T.selectionEnd=Math.min(Q,T.value.length);else{var J=T.ownerDocument||document,q=J&&J.defaultView||window;if(q.getSelection){var H=q.getSelection(),Ae=T.textContent.length,Se=Math.min(I.start,Ae),it=I.end===void 0?Se:Math.min(I.end,Ae);!H.extend&&Se>it&&(_=it,it=Se,Se=_);var L=ng(T,Se),P=ng(T,it);if(L&&P&&(H.rangeCount!==1||H.anchorNode!==L.node||H.anchorOffset!==L.offset||H.focusNode!==P.node||H.focusOffset!==P.offset)){var j=J.createRange();j.setStart(L.node,L.offset),H.removeAllRanges(),Se>it?(H.addRange(j),H.extend(P.node,P.offset)):(j.setEnd(P.node,P.offset),H.addRange(j))}}}}for(J=[],H=T;H=H.parentNode;)H.nodeType===1&&J.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<J.length;T++){var W=J[T];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}Nc=!!Rd,Nd=Rd=null}finally{Ze=h,se.p=l,F.T=a}}n.current=r,nn=2}}function yv(){if(nn===2){nn=0;var n=zr,r=Fa,a=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var l=se.p;se.p=2;var h=Ze;Ze|=4;try{Ky(n,r.alternate,r)}finally{Ze=h,se.p=l,F.T=a}}nn=3}}function vv(){if(nn===4||nn===3){nn=0,ki();var n=zr,r=Fa,a=Ya,l=sv;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?nn=5:(nn=0,Fa=zr=null,_v(n,n.pendingLanes));var h=n.pendingLanes;if(h===0&&(Ur=null),ca(a),r=r.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(ct,r,void 0,(r.current.flags&128)===128)}catch{}if(l!==null){r=F.T,h=se.p,se.p=2,F.T=null;try{for(var d=n.onRecoverableError,_=0;_<l.length;_++){var T=l[_];d(T.value,{componentStack:T.stack})}}finally{F.T=r,se.p=h}}(Ya&3)!==0&&gc(),wi(n),h=n.pendingLanes,(a&4194090)!==0&&(h&42)!==0?n===dd?_l++:(_l=0,dd=n):_l=0,El(0)}}function _v(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,Jo(r)))}function gc(n){return gv(),yv(),vv(),Ev()}function Ev(){if(nn!==5)return!1;var n=zr,r=hd;hd=0;var a=ca(Ya),l=F.T,h=se.p;try{se.p=32>a?32:a,F.T=null,a=fd,fd=null;var d=zr,_=Ya;if(nn=0,Fa=zr=null,Ya=0,(Ze&6)!==0)throw Error(s(331));var T=Ze;if(Ze|=4,iv(d.current),ev(d,d.current,_,a),Ze=T,El(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(ct,d)}catch{}return!0}finally{se.p=h,F.T=l,_v(n,r)}}function Tv(n,r,a){r=qn(a,r),r=Yf(n.stateNode,r,2),n=Ir(n,r,2),n!==null&&(Gt(n,2),wi(n))}function rt(n,r,a){if(n.tag===3)Tv(n,n,a);else for(;r!==null;){if(r.tag===3){Tv(r,n,a);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ur===null||!Ur.has(l))){n=qn(a,n),a=Ay(2),l=Ir(r,a,2),l!==null&&(Cy(a,l,r,n),Gt(l,2),wi(l));break}}r=r.return}}function yd(n,r,a){var l=n.pingCache;if(l===null){l=n.pingCache=new tw;var h=new Set;l.set(r,h)}else h=l.get(r),h===void 0&&(h=new Set,l.set(r,h));h.has(a)||(od=!0,h.add(a),n=aw.bind(null,n,r,a),r.then(n,n))}function aw(n,r,a){var l=n.pingCache;l!==null&&l.delete(r),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,st===n&&(qe&a)===a&&(Et===4||Et===3&&(qe&62914560)===qe&&300>En()-cd?(Ze&2)===0&&Ga(n,0):ld|=a,Ha===qe&&(Ha=0)),wi(n)}function Sv(n,r){r===0&&(r=De()),n=Na(n,r),n!==null&&(Gt(n,r),wi(n))}function ow(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Sv(n,a)}function lw(n,r){var a=0;switch(n.tag){case 13:var l=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(r),Sv(n,a)}function uw(n,r){return xn(n,r)}var yc=null,Ka=null,vd=!1,vc=!1,_d=!1,Ys=0;function wi(n){n!==Ka&&n.next===null&&(Ka===null?yc=Ka=n:Ka=Ka.next=n),vc=!0,vd||(vd=!0,hw())}function El(n,r){if(!_d&&vc){_d=!0;do for(var a=!1,l=yc;l!==null;){if(n!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var _=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-Nt(42|n)+1)-1,d&=h&~(_&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Cv(l,d))}else d=qe,d=$(l,l===st?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||fe(l,d)||(a=!0,Cv(l,d));l=l.next}while(a);_d=!1}}function cw(){bv()}function bv(){vc=vd=!1;var n=0;Ys!==0&&(_w()&&(n=Ys),Ys=0);for(var r=En(),a=null,l=yc;l!==null;){var h=l.next,d=wv(l,r);d===0?(l.next=null,a===null?yc=h:a.next=h,h===null&&(Ka=a)):(a=l,(n!==0||(d&3)!==0)&&(vc=!0)),l=h}El(n)}function wv(n,r){for(var a=n.suspendedLanes,l=n.pingedLanes,h=n.expirationTimes,d=n.pendingLanes&-62914561;0<d;){var _=31-Nt(d),T=1<<_,I=h[_];I===-1?((T&a)===0||(T&l)!==0)&&(h[_]=Le(T,r)):I<=r&&(n.expiredLanes|=T),d&=~T}if(r=st,a=qe,a=$(n,n===r?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,a===0||n===r&&(Je===2||Je===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&Zn(l),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||fe(n,a)){if(r=a&-a,r===n.callbackPriority)return r;switch(l!==null&&Zn(l),ca(a)){case 2:case 8:a=yr;break;case 32:a=ut;break;case 268435456:a=xi;break;default:a=ut}return l=Av.bind(null,n),a=xn(a,l),n.callbackPriority=r,n.callbackNode=a,r}return l!==null&&l!==null&&Zn(l),n.callbackPriority=2,n.callbackNode=null,2}function Av(n,r){if(nn!==0&&nn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(gc()&&n.callbackNode!==a)return null;var l=qe;return l=$(n,n===st?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(ov(n,l,r),wv(n,En()),n.callbackNode!=null&&n.callbackNode===a?Av.bind(null,n):null)}function Cv(n,r){if(gc())return null;ov(n,r,!0)}function hw(){Tw(function(){(Ze&6)!==0?xn(sa,cw):bv()})}function Ed(){return Ys===0&&(Ys=ht()),Ys}function Rv(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:ga(""+n)}function Nv(n,r){var a=r.ownerDocument.createElement("input");return a.name=r.name,a.value=r.value,n.id&&a.setAttribute("form",n.id),r.parentNode.insertBefore(a,r),n=new FormData(n),a.parentNode.removeChild(a),n}function fw(n,r,a,l,h){if(r==="submit"&&a&&a.stateNode===h){var d=Rv((h[Dt]||null).action),_=l.submitter;_&&(r=(r=_[Dt]||null)?Rv(r.formAction):_.getAttribute("formAction"),r!==null&&(d=r,_=null));var T=new ya("action","action",null,l,h);n.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ys!==0){var I=_?Nv(h,_):new FormData(h);jf(a,{pending:!0,data:I,method:h.method,action:d},null,I)}}else typeof d=="function"&&(T.preventDefault(),I=_?Nv(h,_):new FormData(h),jf(a,{pending:!0,data:I,method:h.method,action:d},d,I))},currentTarget:h}]})}}for(var Td=0;Td<sf.length;Td++){var Sd=sf[Td],dw=Sd.toLowerCase(),mw=Sd[0].toUpperCase()+Sd.slice(1);ti(dw,"on"+mw)}ti(og,"onAnimationEnd"),ti(lg,"onAnimationIteration"),ti(ug,"onAnimationStart"),ti("dblclick","onDoubleClick"),ti("focusin","onFocus"),ti("focusout","onBlur"),ti(Ob,"onTransitionRun"),ti(Mb,"onTransitionStart"),ti(Pb,"onTransitionCancel"),ti(cg,"onTransitionEnd"),Bi("onMouseEnter",["mouseout","mouseover"]),Bi("onMouseLeave",["mouseout","mouseover"]),Bi("onPointerEnter",["pointerout","pointerover"]),Bi("onPointerLeave",["pointerout","pointerover"]),Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tl));function Iv(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var l=n[a],h=l.event;l=l.listeners;e:{var d=void 0;if(r)for(var _=l.length-1;0<=_;_--){var T=l[_],I=T.instance,B=T.currentTarget;if(T=T.listener,I!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=B;try{d(h)}catch(Q){sc(Q)}h.currentTarget=null,d=I}else for(_=0;_<l.length;_++){if(T=l[_],I=T.instance,B=T.currentTarget,T=T.listener,I!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=B;try{d(h)}catch(Q){sc(Q)}h.currentTarget=null,d=I}}}}function xe(n,r){var a=r[Mo];a===void 0&&(a=r[Mo]=new Set);var l=n+"__bubble";a.has(l)||(Dv(r,n,2,!1),a.add(l))}function bd(n,r,a){var l=0;r&&(l|=4),Dv(a,n,l,r)}var _c="_reactListening"+Math.random().toString(36).slice(2);function wd(n){if(!n[_c]){n[_c]=!0,Po.forEach(function(a){a!=="selectionchange"&&(pw.has(a)||bd(a,!1,n),bd(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[_c]||(r[_c]=!0,bd("selectionchange",!1,r))}}function Dv(n,r,a,l){switch(e_(r)){case 2:var h=qw;break;case 8:h=Hw;break;default:h=Ud}a=h.bind(null,r,a,n),h=void 0,!jn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),l?h!==void 0?n.addEventListener(r,a,{capture:!0,passive:h}):n.addEventListener(r,a,!0):h!==void 0?n.addEventListener(r,a,{passive:h}):n.addEventListener(r,a,!1)}function Ad(n,r,a,l,h){var d=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var T=l.stateNode.containerInfo;if(T===h)break;if(_===4)for(_=l.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===h)return;_=_.return}for(;T!==null;){if(_=ji(T),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){l=d=_;continue e}T=T.parentNode}}l=l.return}Tu(function(){var B=d,Q=zn(a),J=[];e:{var q=hg.get(n);if(q!==void 0){var H=ya,Ae=n;switch(n){case"keypress":if(pi(a)===0)break e;case"keydown":case"keyup":H=ba;break;case"focusin":Ae="focus",H=Ea;break;case"focusout":Ae="blur",H=Ea;break;case"beforeblur":case"afterblur":H=Ea;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Bn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=$h;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=Iu;break;case og:case lg:case ug:H=Ta;break;case cg:H=Ou;break;case"scroll":case"scrollend":H=Su;break;case"wheel":H=wa;break;case"copy":case"cut":case"paste":H=Sa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Yo;break;case"toggle":case"beforetoggle":H=Pu}var Se=(r&4)!==0,it=!Se&&(n==="scroll"||n==="scrollend"),L=Se?q!==null?q+"Capture":null:q;Se=[];for(var P=B,j;P!==null;){var W=P;if(j=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||j===null||L===null||(W=ws(P,L),W!=null&&Se.push(Sl(P,W,j))),it)break;P=P.return}0<Se.length&&(q=new H(q,Ae,null,a,Q),J.push({event:q,listeners:Se}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",H=n==="mouseout"||n==="pointerout",q&&a!==Fi&&(Ae=a.relatedTarget||a.fromElement)&&(ji(Ae)||Ae[Ln]))break e;if((H||q)&&(q=Q.window===Q?Q:(q=Q.ownerDocument)?q.defaultView||q.parentWindow:window,H?(Ae=a.relatedTarget||a.toElement,H=B,Ae=Ae?ji(Ae):null,Ae!==null&&(it=u(Ae),Se=Ae.tag,Ae!==it||Se!==5&&Se!==27&&Se!==6)&&(Ae=null)):(H=null,Ae=B),H!==Ae)){if(Se=Bn,W="onMouseLeave",L="onMouseEnter",P="mouse",(n==="pointerout"||n==="pointerover")&&(Se=Yo,W="onPointerLeave",L="onPointerEnter",P="pointer"),it=H==null?q:hi(H),j=Ae==null?q:hi(Ae),q=new Se(W,P+"leave",H,a,Q),q.target=it,q.relatedTarget=j,W=null,ji(Q)===B&&(Se=new Se(L,P+"enter",Ae,a,Q),Se.target=j,Se.relatedTarget=it,W=Se),it=W,H&&Ae)t:{for(Se=H,L=Ae,P=0,j=Se;j;j=Qa(j))P++;for(j=0,W=L;W;W=Qa(W))j++;for(;0<P-j;)Se=Qa(Se),P--;for(;0<j-P;)L=Qa(L),j--;for(;P--;){if(Se===L||L!==null&&Se===L.alternate)break t;Se=Qa(Se),L=Qa(L)}Se=null}else Se=null;H!==null&&Ov(J,q,H,Se,!1),Ae!==null&&it!==null&&Ov(J,it,Ae,Se,!0)}}e:{if(q=B?hi(B):window,H=q.nodeName&&q.nodeName.toLowerCase(),H==="select"||H==="input"&&q.type==="file")var ge=$p;else if(jt(q))if(Wp)ge=Nb;else{ge=Cb;var Pe=Ab}else H=q.nodeName,!H||H.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?B&&Uo(B.elementType)&&(ge=$p):ge=Rb;if(ge&&(ge=ge(n,B))){Qi(J,ge,a,Q);break e}Pe&&Pe(n,q,B),n==="focusout"&&B&&q.type==="number"&&B.memoizedProps.value!=null&&wr(q,"number",q.value)}switch(Pe=B?hi(B):window,n){case"focusin":(jt(Pe)||Pe.contentEditable==="true")&&(Aa=Pe,tf=B,Ko=null);break;case"focusout":Ko=tf=Aa=null;break;case"mousedown":nf=!0;break;case"contextmenu":case"mouseup":case"dragend":nf=!1,sg(J,a,Q);break;case"selectionchange":if(Db)break;case"keydown":case"keyup":sg(J,a,Q)}var ve;if(vi)e:{switch(n){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else je?Y(n,a)&&(be="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(be="onCompositionStart");be&&(v&&a.locale!=="ko"&&(je||be!=="onCompositionStart"?be==="onCompositionEnd"&&je&&(ve=jo()):(mi=Q,Ar="value"in mi?mi.value:mi.textContent,je=!0)),Pe=Ec(B,be),0<Pe.length&&(be=new Ho(be,n,null,a,Q),J.push({event:be,listeners:Pe}),ve?be.data=ve:(ve=oe(a),ve!==null&&(be.data=ve)))),(ve=y?zt(n,a):Be(n,a))&&(be=Ec(B,"onBeforeInput"),0<be.length&&(Pe=new Ho("onBeforeInput","beforeinput",null,a,Q),J.push({event:Pe,listeners:be}),Pe.data=ve)),fw(J,n,B,a,Q)}Iv(J,r)})}function Sl(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Ec(n,r){for(var a=r+"Capture",l=[];n!==null;){var h=n,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=ws(n,a),h!=null&&l.unshift(Sl(n,h,d)),h=ws(n,r),h!=null&&l.push(Sl(n,h,d))),n.tag===3)return l;n=n.return}return[]}function Qa(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Ov(n,r,a,l,h){for(var d=r._reactName,_=[];a!==null&&a!==l;){var T=a,I=T.alternate,B=T.stateNode;if(T=T.tag,I!==null&&I===l)break;T!==5&&T!==26&&T!==27||B===null||(I=B,h?(B=ws(a,d),B!=null&&_.unshift(Sl(a,B,I))):h||(B=ws(a,d),B!=null&&_.push(Sl(a,B,I)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var gw=/\r\n?/g,yw=/\u0000|\uFFFD/g;function Mv(n){return(typeof n=="string"?n:""+n).replace(gw,`
`).replace(yw,"")}function Pv(n,r){return r=Mv(r),Mv(n)===r}function Tc(){}function nt(n,r,a,l,h,d){switch(a){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||Un(n,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&Un(n,""+l);break;case"className":fi(n,"class",l);break;case"tabIndex":fi(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":fi(n,a,l);break;case"style":Lo(n,l,d);break;case"data":if(r!=="object"){fi(n,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||a!=="href")){n.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=ga(""+l),n.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(r!=="input"&&nt(n,r,"name",h.name,h,null),nt(n,r,"formEncType",h.formEncType,h,null),nt(n,r,"formMethod",h.formMethod,h,null),nt(n,r,"formTarget",h.formTarget,h,null)):(nt(n,r,"encType",h.encType,h,null),nt(n,r,"method",h.method,h,null),nt(n,r,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=ga(""+l),n.setAttribute(a,l);break;case"onClick":l!=null&&(n.onclick=Tc);break;case"onScroll":l!=null&&xe("scroll",n);break;case"onScrollEnd":l!=null&&xe("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}a=ga(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""+l):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":l===!0?n.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,l):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(a,l):n.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(a):n.setAttribute(a,l);break;case"popover":xe("beforetoggle",n),xe("toggle",n),br(n,"popover",l);break;case"xlinkActuate":Jt(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Jt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Jt(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Jt(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Jt(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Jt(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Jt(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Jt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Jt(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":br(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Kh.get(a)||a,br(n,a,l))}}function Cd(n,r,a,l,h,d){switch(a){case"style":Lo(n,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"children":typeof l=="string"?Un(n,l):(typeof l=="number"||typeof l=="bigint")&&Un(n,""+l);break;case"onScroll":l!=null&&xe("scroll",n);break;case"onScrollEnd":l!=null&&xe("scrollend",n);break;case"onClick":l!=null&&(n.onclick=Tc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ha.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),r=a.slice(2,h?a.length-7:void 0),d=n[Dt]||null,d=d!=null?d[a]:null,typeof d=="function"&&n.removeEventListener(r,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(r,l,h);break e}a in n?n[a]=l:l===!0?n.setAttribute(a,""):br(n,a,l)}}}function rn(n,r,a){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",n),xe("load",n);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var _=a[d];if(_!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:nt(n,r,d,_,a,null)}}h&&nt(n,r,"srcSet",a.srcSet,a,null),l&&nt(n,r,"src",a.src,a,null);return;case"input":xe("invalid",n);var T=d=_=h=null,I=null,B=null;for(l in a)if(a.hasOwnProperty(l)){var Q=a[l];if(Q!=null)switch(l){case"name":h=Q;break;case"type":_=Q;break;case"checked":I=Q;break;case"defaultChecked":B=Q;break;case"value":d=Q;break;case"defaultValue":T=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,r));break;default:nt(n,r,l,Q,a,null)}}Ts(n,d,T,I,B,_,h,!1),pa(n);return;case"select":xe("invalid",n),l=_=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":_=T;break;case"multiple":l=T;default:nt(n,r,h,T,a,null)}r=d,a=_,n.multiple=!!l,r!=null?Hi(n,!!l,r,!1):a!=null&&Hi(n,!!l,a,!0);return;case"textarea":xe("invalid",n),d=h=l=null;for(_ in a)if(a.hasOwnProperty(_)&&(T=a[_],T!=null))switch(_){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:nt(n,r,_,T,a,null)}Ss(n,l,h,d),pa(n);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(l=a[I],l!=null))switch(I){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:nt(n,r,I,l,a,null)}return;case"dialog":xe("beforetoggle",n),xe("toggle",n),xe("cancel",n),xe("close",n);break;case"iframe":case"object":xe("load",n);break;case"video":case"audio":for(l=0;l<Tl.length;l++)xe(Tl[l],n);break;case"image":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"embed":case"source":case"link":xe("error",n),xe("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in a)if(a.hasOwnProperty(B)&&(l=a[B],l!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:nt(n,r,B,l,a,null)}return;default:if(Uo(r)){for(Q in a)a.hasOwnProperty(Q)&&(l=a[Q],l!==void 0&&Cd(n,r,Q,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&nt(n,r,T,l,a,null))}function vw(n,r,a,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,_=null,T=null,I=null,B=null,Q=null;for(H in a){var J=a[H];if(a.hasOwnProperty(H)&&J!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":I=J;default:l.hasOwnProperty(H)||nt(n,r,H,null,l,J)}}for(var q in l){var H=l[q];if(J=a[q],l.hasOwnProperty(q)&&(H!=null||J!=null))switch(q){case"type":d=H;break;case"name":h=H;break;case"checked":B=H;break;case"defaultChecked":Q=H;break;case"value":_=H;break;case"defaultValue":T=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,r));break;default:H!==J&&nt(n,r,q,H,l,J)}}Rn(n,_,T,I,B,Q,d,h);return;case"select":H=_=T=q=null;for(d in a)if(I=a[d],a.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":H=I;default:l.hasOwnProperty(d)||nt(n,r,d,null,l,I)}for(h in l)if(d=l[h],I=a[h],l.hasOwnProperty(h)&&(d!=null||I!=null))switch(h){case"value":q=d;break;case"defaultValue":T=d;break;case"multiple":_=d;default:d!==I&&nt(n,r,h,d,l,I)}r=T,a=_,l=H,q!=null?Hi(n,!!a,q,!1):!!l!=!!a&&(r!=null?Hi(n,!!a,r,!0):Hi(n,!!a,a?[]:"",!1));return;case"textarea":H=q=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:nt(n,r,T,null,l,h)}for(_ in l)if(h=l[_],d=a[_],l.hasOwnProperty(_)&&(h!=null||d!=null))switch(_){case"value":q=h;break;case"defaultValue":H=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&nt(n,r,_,h,l,d)}et(n,q,H);return;case"option":for(var Ae in a)if(q=a[Ae],a.hasOwnProperty(Ae)&&q!=null&&!l.hasOwnProperty(Ae))switch(Ae){case"selected":n.selected=!1;break;default:nt(n,r,Ae,null,l,q)}for(I in l)if(q=l[I],H=a[I],l.hasOwnProperty(I)&&q!==H&&(q!=null||H!=null))switch(I){case"selected":n.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:nt(n,r,I,q,l,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Se in a)q=a[Se],a.hasOwnProperty(Se)&&q!=null&&!l.hasOwnProperty(Se)&&nt(n,r,Se,null,l,q);for(B in l)if(q=l[B],H=a[B],l.hasOwnProperty(B)&&q!==H&&(q!=null||H!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,r));break;default:nt(n,r,B,q,l,H)}return;default:if(Uo(r)){for(var it in a)q=a[it],a.hasOwnProperty(it)&&q!==void 0&&!l.hasOwnProperty(it)&&Cd(n,r,it,void 0,l,q);for(Q in l)q=l[Q],H=a[Q],!l.hasOwnProperty(Q)||q===H||q===void 0&&H===void 0||Cd(n,r,Q,q,l,H);return}}for(var L in a)q=a[L],a.hasOwnProperty(L)&&q!=null&&!l.hasOwnProperty(L)&&nt(n,r,L,null,l,q);for(J in l)q=l[J],H=a[J],!l.hasOwnProperty(J)||q===H||q==null&&H==null||nt(n,r,J,q,l,H)}var Rd=null,Nd=null;function Sc(n){return n.nodeType===9?n:n.ownerDocument}function Vv(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kv(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function Id(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Dd=null;function _w(){var n=window.event;return n&&n.type==="popstate"?n===Dd?!1:(Dd=n,!0):(Dd=null,!1)}var xv=typeof setTimeout=="function"?setTimeout:void 0,Ew=typeof clearTimeout=="function"?clearTimeout:void 0,Lv=typeof Promise=="function"?Promise:void 0,Tw=typeof queueMicrotask=="function"?queueMicrotask:typeof Lv<"u"?function(n){return Lv.resolve(null).then(n).catch(Sw)}:xv;function Sw(n){setTimeout(function(){throw n})}function Br(n){return n==="head"}function Uv(n,r){var a=r,l=0,h=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var _=n.ownerDocument;if(a&1&&bl(_.documentElement),a&2&&bl(_.body),a&4)for(a=_.head,bl(a),_=a.firstChild;_;){var T=_.nextSibling,I=_.nodeName;_[ys]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&_.rel.toLowerCase()==="stylesheet"||a.removeChild(_),_=T}}if(h===0){n.removeChild(d),Ol(r);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);Ol(r)}function Od(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var a=r;switch(r=r.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Od(a),Sr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function bw(n,r,a,l){for(;n.nodeType===1;){var h=a;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[ys])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(d=n.getAttribute("rel"),d==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(d!==h.rel||n.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(d=n.getAttribute("src"),(d!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===d)return n}else return n;if(n=ii(n.nextSibling),n===null)break}return null}function ww(n,r,a){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=ii(n.nextSibling),n===null))return null;return n}function Md(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function Aw(n,r){var a=n.ownerDocument;if(n.data!=="$?"||a.readyState==="complete")r();else{var l=function(){r(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function ii(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}var Pd=null;function zv(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}function jv(n,r,a){switch(r=Sc(a),n){case"html":if(n=r.documentElement,!n)throw Error(s(452));return n;case"head":if(n=r.head,!n)throw Error(s(453));return n;case"body":if(n=r.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function bl(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Sr(n)}var Kn=new Map,Bv=new Set;function bc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var lr=se.d;se.d={f:Cw,r:Rw,D:Nw,C:Iw,L:Dw,m:Ow,X:Pw,S:Mw,M:Vw};function Cw(){var n=lr.f(),r=mc();return n||r}function Rw(n){var r=ci(n);r!==null&&r.tag===5&&r.type==="form"?oy(r):lr.r(n)}var $a=typeof document>"u"?null:document;function qv(n,r,a){var l=$a;if(l&&typeof r=="string"&&r){var h=Ot(r);h='link[rel="'+n+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),Bv.has(h)||(Bv.add(h),n={rel:n,crossOrigin:a,href:r},l.querySelector(h)===null&&(r=l.createElement("link"),rn(r,"link",n),Tt(r),l.head.appendChild(r)))}}function Nw(n){lr.D(n),qv("dns-prefetch",n,null)}function Iw(n,r){lr.C(n,r),qv("preconnect",n,r)}function Dw(n,r,a){lr.L(n,r,a);var l=$a;if(l&&n&&r){var h='link[rel="preload"][as="'+Ot(r)+'"]';r==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+Ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+Ot(a.imageSizes)+'"]')):h+='[href="'+Ot(n)+'"]';var d=h;switch(r){case"style":d=Wa(n);break;case"script":d=Za(n)}Kn.has(d)||(n=E({rel:"preload",href:r==="image"&&a&&a.imageSrcSet?void 0:n,as:r},a),Kn.set(d,n),l.querySelector(h)!==null||r==="style"&&l.querySelector(wl(d))||r==="script"&&l.querySelector(Al(d))||(r=l.createElement("link"),rn(r,"link",n),Tt(r),l.head.appendChild(r)))}}function Ow(n,r){lr.m(n,r);var a=$a;if(a&&n){var l=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+Ot(l)+'"][href="'+Ot(n)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Za(n)}if(!Kn.has(d)&&(n=E({rel:"modulepreload",href:n},r),Kn.set(d,n),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Al(d)))return}l=a.createElement("link"),rn(l,"link",n),Tt(l),a.head.appendChild(l)}}}function Mw(n,r,a){lr.S(n,r,a);var l=$a;if(l&&n){var h=pn(l).hoistableStyles,d=Wa(n);r=r||"default";var _=h.get(d);if(!_){var T={loading:0,preload:null};if(_=l.querySelector(wl(d)))T.loading=5;else{n=E({rel:"stylesheet",href:n,"data-precedence":r},a),(a=Kn.get(d))&&Vd(n,a);var I=_=l.createElement("link");Tt(I),rn(I,"link",n),I._p=new Promise(function(B,Q){I.onload=B,I.onerror=Q}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,wc(_,r,l)}_={type:"stylesheet",instance:_,count:1,state:T},h.set(d,_)}}}function Pw(n,r){lr.X(n,r);var a=$a;if(a&&n){var l=pn(a).hoistableScripts,h=Za(n),d=l.get(h);d||(d=a.querySelector(Al(h)),d||(n=E({src:n,async:!0},r),(r=Kn.get(h))&&kd(n,r),d=a.createElement("script"),Tt(d),rn(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function Vw(n,r){lr.M(n,r);var a=$a;if(a&&n){var l=pn(a).hoistableScripts,h=Za(n),d=l.get(h);d||(d=a.querySelector(Al(h)),d||(n=E({src:n,async:!0,type:"module"},r),(r=Kn.get(h))&&kd(n,r),d=a.createElement("script"),Tt(d),rn(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function Hv(n,r,a,l){var h=(h=le.current)?bc(h):null;if(!h)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(r=Wa(a.href),a=pn(h).hoistableStyles,l=a.get(r),l||(l={type:"style",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=Wa(a.href);var d=pn(h).hoistableStyles,_=d.get(n);if(_||(h=h.ownerDocument||h,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(n,_),(d=h.querySelector(wl(n)))&&!d._p&&(_.instance=d,_.state.loading=5),Kn.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Kn.set(n,a),d||kw(h,n,a,_.state))),r&&l===null)throw Error(s(528,""));return _}if(r&&l!==null)throw Error(s(529,""));return null;case"script":return r=a.async,a=a.src,typeof a=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Za(a),a=pn(h).hoistableScripts,l=a.get(r),l||(l={type:"script",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function Wa(n){return'href="'+Ot(n)+'"'}function wl(n){return'link[rel="stylesheet"]['+n+"]"}function Fv(n){return E({},n,{"data-precedence":n.precedence,precedence:null})}function kw(n,r,a,l){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=n.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),rn(r,"link",a),Tt(r),n.head.appendChild(r))}function Za(n){return'[src="'+Ot(n)+'"]'}function Al(n){return"script[async]"+n}function Yv(n,r,a){if(r.count++,r.instance===null)switch(r.type){case"style":var l=n.querySelector('style[data-href~="'+Ot(a.href)+'"]');if(l)return r.instance=l,Tt(l),l;var h=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),Tt(l),rn(l,"style",h),wc(l,a.precedence,n),r.instance=l;case"stylesheet":h=Wa(a.href);var d=n.querySelector(wl(h));if(d)return r.state.loading|=4,r.instance=d,Tt(d),d;l=Fv(a),(h=Kn.get(h))&&Vd(l,h),d=(n.ownerDocument||n).createElement("link"),Tt(d);var _=d;return _._p=new Promise(function(T,I){_.onload=T,_.onerror=I}),rn(d,"link",l),r.state.loading|=4,wc(d,a.precedence,n),r.instance=d;case"script":return d=Za(a.src),(h=n.querySelector(Al(d)))?(r.instance=h,Tt(h),h):(l=a,(h=Kn.get(d))&&(l=E({},a),kd(l,h)),n=n.ownerDocument||n,h=n.createElement("script"),Tt(h),rn(h,"link",l),n.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,wc(l,a.precedence,n));return r.instance}function wc(n,r,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,_=0;_<l.length;_++){var T=l[_];if(T.dataset.precedence===r)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(n,d.nextSibling):(r=a.nodeType===9?a.head:a,r.insertBefore(n,r.firstChild))}function Vd(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function kd(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var Ac=null;function Gv(n,r,a){if(Ac===null){var l=new Map,h=Ac=new Map;h.set(a,l)}else h=Ac,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(n))return l;for(l.set(n,null),a=a.getElementsByTagName(n),h=0;h<a.length;h++){var d=a[h];if(!(d[ys]||d[Ut]||n==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(r)||"";_=n+_;var T=l.get(_);T?T.push(d):l.set(_,[d])}}return l}function Xv(n,r,a){n=n.ownerDocument||n,n.head.insertBefore(a,r==="title"?n.querySelector("head > title"):null)}function xw(n,r,a){if(a===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function Kv(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var Cl=null;function Lw(){}function Uw(n,r,a){if(Cl===null)throw Error(s(475));var l=Cl;if(r.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=Wa(a.href),d=n.querySelector(wl(h));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(l.count++,l=Cc.bind(l),n.then(l,l)),r.state.loading|=4,r.instance=d,Tt(d);return}d=n.ownerDocument||n,a=Fv(a),(h=Kn.get(h))&&Vd(a,h),d=d.createElement("link"),Tt(d);var _=d;_._p=new Promise(function(T,I){_.onload=T,_.onerror=I}),rn(d,"link",a),r.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(l.count++,r=Cc.bind(l),n.addEventListener("load",r),n.addEventListener("error",r))}}function zw(){if(Cl===null)throw Error(s(475));var n=Cl;return n.stylesheets&&n.count===0&&xd(n,n.stylesheets),0<n.count?function(r){var a=setTimeout(function(){if(n.stylesheets&&xd(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(a)}}:null}function Cc(){if(this.count--,this.count===0){if(this.stylesheets)xd(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Rc=null;function xd(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Rc=new Map,r.forEach(jw,n),Rc=null,Cc.call(n))}function jw(n,r){if(!(r.state.loading&4)){var a=Rc.get(n);if(a)var l=a.get(null);else{a=new Map,Rc.set(n,a);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var _=h[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),l=_)}l&&a.set(null,l)}h=r.instance,_=h.getAttribute("data-precedence"),d=a.get(_)||l,d===l&&a.set(null,h),a.set(_,h),this.count++,l=Cc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),r.state.loading|=4}}var Rl={$$typeof:ie,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function Bw(n,r,a,l,h,d,_,T){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Yt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yt(0),this.hiddenUpdates=Yt(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Qv(n,r,a,l,h,d,_,T,I,B,Q,J){return n=new Bw(n,r,a,_,T,I,B,J),r=1,d===!0&&(r|=24),d=In(3,null,null,r),n.current=d,d.stateNode=n,r=yf(),r.refCount++,n.pooledCache=r,r.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:r},Tf(d),n}function $v(n){return n?(n=Ia,n):Ia}function Wv(n,r,a,l,h,d){h=$v(h),l.context===null?l.context=h:l.pendingContext=h,l=Nr(r),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Ir(n,l,r),a!==null&&(Vn(a,n,r),il(a,n,r))}function Zv(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Ld(n,r){Zv(n,r),(n=n.alternate)&&Zv(n,r)}function Jv(n){if(n.tag===13){var r=Na(n,67108864);r!==null&&Vn(r,n,67108864),Ld(n,67108864)}}var Nc=!0;function qw(n,r,a,l){var h=F.T;F.T=null;var d=se.p;try{se.p=2,Ud(n,r,a,l)}finally{se.p=d,F.T=h}}function Hw(n,r,a,l){var h=F.T;F.T=null;var d=se.p;try{se.p=8,Ud(n,r,a,l)}finally{se.p=d,F.T=h}}function Ud(n,r,a,l){if(Nc){var h=zd(l);if(h===null)Ad(n,r,l,Ic,a),t_(n,l);else if(Yw(h,n,r,a,l))l.stopPropagation();else if(t_(n,l),r&4&&-1<Fw.indexOf(n)){for(;h!==null;){var d=ci(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=Cn(d.pendingLanes);if(_!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var I=1<<31-Nt(_);T.entanglements[1]|=I,_&=~I}wi(d),(Ze&6)===0&&(fc=En()+500,El(0))}}break;case 13:T=Na(d,2),T!==null&&Vn(T,d,2),mc(),Ld(d,2)}if(d=zd(l),d===null&&Ad(n,r,l,Ic,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else Ad(n,r,l,null,a)}}function zd(n){return n=zn(n),jd(n)}var Ic=null;function jd(n){if(Ic=null,n=ji(n),n!==null){var r=u(n);if(r===null)n=null;else{var a=r.tag;if(a===13){if(n=f(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return Ic=n,null}function e_(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Do()){case sa:return 2;case yr:return 8;case ut:case aa:return 32;case xi:return 268435456;default:return 32}default:return 32}}var Bd=!1,qr=null,Hr=null,Fr=null,Nl=new Map,Il=new Map,Yr=[],Fw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function t_(n,r){switch(n){case"focusin":case"focusout":qr=null;break;case"dragenter":case"dragleave":Hr=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":Nl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Il.delete(r.pointerId)}}function Dl(n,r,a,l,h,d){return n===null||n.nativeEvent!==d?(n={blockedOn:r,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},r!==null&&(r=ci(r),r!==null&&Jv(r)),n):(n.eventSystemFlags|=l,r=n.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),n)}function Yw(n,r,a,l,h){switch(r){case"focusin":return qr=Dl(qr,n,r,a,l,h),!0;case"dragenter":return Hr=Dl(Hr,n,r,a,l,h),!0;case"mouseover":return Fr=Dl(Fr,n,r,a,l,h),!0;case"pointerover":var d=h.pointerId;return Nl.set(d,Dl(Nl.get(d)||null,n,r,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,Il.set(d,Dl(Il.get(d)||null,n,r,a,l,h)),!0}return!1}function n_(n){var r=ji(n.target);if(r!==null){var a=u(r);if(a!==null){if(r=a.tag,r===13){if(r=f(a),r!==null){n.blockedOn=r,mu(n.priority,function(){if(a.tag===13){var l=Pn();l=_r(l);var h=Na(a,l);h!==null&&Vn(h,a,l),Ld(a,l)}});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Dc(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=zd(n.nativeEvent);if(a===null){a=n.nativeEvent;var l=new a.constructor(a.type,a);Fi=l,a.target.dispatchEvent(l),Fi=null}else return r=ci(a),r!==null&&Jv(r),n.blockedOn=a,!1;r.shift()}return!0}function i_(n,r,a){Dc(n)&&a.delete(r)}function Gw(){Bd=!1,qr!==null&&Dc(qr)&&(qr=null),Hr!==null&&Dc(Hr)&&(Hr=null),Fr!==null&&Dc(Fr)&&(Fr=null),Nl.forEach(i_),Il.forEach(i_)}function Oc(n,r){n.blockedOn===r&&(n.blockedOn=null,Bd||(Bd=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Gw)))}var Mc=null;function r_(n){Mc!==n&&(Mc=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Mc===n&&(Mc=null);for(var r=0;r<n.length;r+=3){var a=n[r],l=n[r+1],h=n[r+2];if(typeof l!="function"){if(jd(l||a)===null)continue;break}var d=ci(a);d!==null&&(n.splice(r,3),r-=3,jf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function Ol(n){function r(I){return Oc(I,n)}qr!==null&&Oc(qr,n),Hr!==null&&Oc(Hr,n),Fr!==null&&Oc(Fr,n),Nl.forEach(r),Il.forEach(r);for(var a=0;a<Yr.length;a++){var l=Yr[a];l.blockedOn===n&&(l.blockedOn=null)}for(;0<Yr.length&&(a=Yr[0],a.blockedOn===null);)n_(a),a.blockedOn===null&&Yr.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],_=h[Dt]||null;if(typeof d=="function")_||r_(a);else if(_){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,_=d[Dt]||null)T=_.formAction;else if(jd(h)!==null)continue}else T=_.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),r_(a)}}}function qd(n){this._internalRoot=n}Pc.prototype.render=qd.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(s(409));var a=r.current,l=Pn();Wv(a,l,n,r,null,null)},Pc.prototype.unmount=qd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Wv(n.current,2,null,n,null,null),mc(),r[Ln]=null}};function Pc(n){this._internalRoot=n}Pc.prototype.unstable_scheduleHydration=function(n){if(n){var r=Er();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Yr.length&&r!==0&&r<Yr[a].priority;a++);Yr.splice(a,0,n),a===0&&n_(n)}};var s_=e.version;if(s_!=="19.1.0")throw Error(s(527,s_,"19.1.0"));se.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=g(r),n=n!==null?p(n):null,n=n===null?null:n.stateNode,n};var Xw={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vc.isDisabled&&Vc.supportsFiber)try{ct=Vc.inject(Xw),Ye=Vc}catch{}}return Pl.createRoot=function(n,r){if(!o(n))throw Error(s(299));var a=!1,l="",h=Ty,d=Sy,_=by,T=null;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(d=r.onCaughtError),r.onRecoverableError!==void 0&&(_=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(T=r.unstable_transitionCallbacks)),r=Qv(n,1,!1,null,null,a,l,h,d,_,T,null),n[Ln]=r.current,wd(n),new qd(r)},Pl.hydrateRoot=function(n,r,a){if(!o(n))throw Error(s(299));var l=!1,h="",d=Ty,_=Sy,T=by,I=null,B=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&(B=a.formState)),r=Qv(n,1,!0,r,a??null,l,h,d,_,T,I,B),r.context=$v(null),a=r.current,l=Pn(),l=_r(l),h=Nr(l),h.callback=null,Ir(a,h,l),a=l,r.current.lanes=a,Gt(r,a),wi(r),n[Ln]=r.current,wd(n),new Pc(r)},Pl.version="19.1.0",Pl}var p_;function iA(){if(p_)return Yd.exports;p_=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Yd.exports=nA(),Yd.exports}var rA=iA();const sA=cT(rA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),oA=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),g_=i=>{const e=oA(i);return e.charAt(0).toUpperCase()+e.slice(1)},hT=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),lA=i=>{for(const e in i)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cA=ue.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:f,...m},g)=>ue.createElement("svg",{ref:g,...uA,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:hT("lucide",o),...!u&&!lA(m)&&{"aria-hidden":"true"},...m},[...f.map(([p,E])=>ue.createElement(p,E)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=(i,e)=>{const t=ue.forwardRef(({className:s,...o},u)=>ue.createElement(cA,{ref:u,iconNode:e,className:hT(`lucide-${aA(g_(i))}`,`lucide-${i}`,s),...o}));return t.displayName=g_(i),t};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hA=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],Zc=ds("building-2",hA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Qd=ds("map-pin",fA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],mA=ds("navigation",dA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pA=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],gA=ds("rotate-ccw",pA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]],vA=ds("route",yA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _A=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],fT=ds("search",_A);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],dT=ds("users",EA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],io=ds("x",TA);var $n=function(i,e){return Number(i.toFixed(e))},SA=function(i,e){return e},mt=function(i,e,t){t&&typeof t=="function"&&t(i,e)},bA=function(i){return-Math.cos(i*Math.PI)/2+.5},wA=function(i){return i},AA=function(i){return i*i},CA=function(i){return i*(2-i)},RA=function(i){return i<.5?2*i*i:-1+(4-2*i)*i},NA=function(i){return i*i*i},IA=function(i){return--i*i*i+1},DA=function(i){return i<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1},OA=function(i){return i*i*i*i},MA=function(i){return 1- --i*i*i*i},PA=function(i){return i<.5?8*i*i*i*i:1-8*--i*i*i*i},VA=function(i){return i*i*i*i*i},kA=function(i){return 1+--i*i*i*i*i},xA=function(i){return i<.5?16*i*i*i*i*i:1+16*--i*i*i*i*i},mT={easeOut:bA,linear:wA,easeInQuad:AA,easeOutQuad:CA,easeInOutQuad:RA,easeInCubic:NA,easeOutCubic:IA,easeInOutCubic:DA,easeInQuart:OA,easeOutQuart:MA,easeInOutQuart:PA,easeInQuint:VA,easeOutQuint:kA,easeInOutQuint:xA},pT=function(i){typeof i=="number"&&cancelAnimationFrame(i)},ri=function(i){i.mounted&&(pT(i.animation),i.animate=!1,i.animation=null,i.velocity=null)};function gT(i,e,t,s){if(i.mounted){var o=new Date().getTime(),u=1;ri(i),i.animation=function(){if(!i.mounted)return pT(i.animation);var f=new Date().getTime()-o,m=f/t,g=mT[e],p=g(m);f>=t?(s(u),i.animation=null):i.animation&&(s(p),requestAnimationFrame(i.animation))},requestAnimationFrame(i.animation)}}function LA(i){var e=i.scale,t=i.positionX,s=i.positionY;return!(Number.isNaN(e)||Number.isNaN(t)||Number.isNaN(s))}function ms(i,e,t,s){var o=LA(e);if(!(!i.mounted||!o)){var u=i.setTransformState,f=i.transformState,m=f.scale,g=f.positionX,p=f.positionY,E=e.scale-m,S=e.positionX-g,w=e.positionY-p;t===0?u(e.scale,e.positionX,e.positionY):gT(i,s,t,function(x){var U=m+E*x,G=g+S*x,X=p+w*x;u(U,G,X)})}}function UA(i,e,t){var s=i.offsetWidth,o=i.offsetHeight,u=e.offsetWidth,f=e.offsetHeight,m=u*t,g=f*t,p=s-m,E=o-g;return{wrapperWidth:s,wrapperHeight:o,newContentWidth:m,newDiffWidth:p,newContentHeight:g,newDiffHeight:E}}var zA=function(i,e,t,s,o,u,f){var m=i>e?t*(f?1:.5):0,g=s>o?u*(f?1:.5):0,p=i-e-m,E=m,S=s-o-g,w=g;return{minPositionX:p,maxPositionX:E,minPositionY:S,maxPositionY:w}},Zm=function(i,e){var t=i.wrapperComponent,s=i.contentComponent,o=i.setup.centerZoomedOut;if(!t||!s)throw new Error("Components are not mounted");var u=UA(t,s,e),f=u.wrapperWidth,m=u.wrapperHeight,g=u.newContentWidth,p=u.newDiffWidth,E=u.newContentHeight,S=u.newDiffHeight,w=zA(f,g,p,m,E,S,!!o);return w},ym=function(i,e,t,s){return s?i<e?$n(e,2):i>t?$n(t,2):$n(i,2):$n(i,2)},Qs=function(i,e){var t=Zm(i,e);return i.bounds=t,t};function iu(i,e,t,s,o,u,f){var m=t.minPositionX,g=t.minPositionY,p=t.maxPositionX,E=t.maxPositionY,S=0,w=0;f&&(S=o,w=u);var x=ym(i,m-S,p+S,s),U=ym(e,g-w,E+w,s);return{x,y:U}}function vh(i,e,t,s,o,u){var f=i.transformState,m=f.scale,g=f.positionX,p=f.positionY,E=s-m;if(typeof e!="number"||typeof t!="number")return console.error("Mouse X and Y position were not provided!"),{x:g,y:p};var S=g-e*E,w=p-t*E,x=iu(S,w,o,u,0,0,null);return x}function ru(i,e,t,s,o){var u=o?s:0,f=e-u;return!Number.isNaN(t)&&i>=t?t:!Number.isNaN(e)&&i<=f?f:i}var y_=function(i,e){var t=i.setup.panning.excluded,s=i.isInitialized,o=i.wrapperComponent,u=e.target,f="shadowRoot"in u&&"composedPath"in e,m=f?e.composedPath().some(function(E){return E instanceof Element?o==null?void 0:o.contains(E):!1}):o==null?void 0:o.contains(u),g=s&&u&&m;if(!g)return!1;var p=_h(u,t);return!p},v_=function(i){var e=i.isInitialized,t=i.isPanning,s=i.setup,o=s.panning.disabled,u=e&&t&&!o;return!!u},jA=function(i,e){var t=i.transformState,s=t.positionX,o=t.positionY;i.isPanning=!0;var u=e.clientX,f=e.clientY;i.startCoords={x:u-s,y:f-o}},BA=function(i,e){var t=e.touches,s=i.transformState,o=s.positionX,u=s.positionY;i.isPanning=!0;var f=t.length===1;if(f){var m=t[0].clientX,g=t[0].clientY;i.startCoords={x:m-o,y:g-u}}};function qA(i){var e=i.transformState,t=e.positionX,s=e.positionY,o=e.scale,u=i.setup,f=u.disabled,m=u.limitToBounds,g=u.centerZoomedOut,p=i.wrapperComponent;if(!(f||!p||!i.bounds)){var E=i.bounds,S=E.maxPositionX,w=E.minPositionX,x=E.maxPositionY,U=E.minPositionY,G=t>S||t<w,X=s>x||s<U,ce=t>S?p.offsetWidth:i.setup.minPositionX||0,ae=s>x?p.offsetHeight:i.setup.minPositionY||0,ie=vh(i,ce,ae,o,i.bounds,m||g),_e=ie.x,he=ie.y;return{scale:o,positionX:G?_e:t,positionY:X?he:s}}}function yT(i,e,t,s,o){var u=i.setup.limitToBounds,f=i.wrapperComponent,m=i.bounds,g=i.transformState,p=g.scale,E=g.positionX,S=g.positionY;if(!(f===null||m===null||e===E&&t===S)){var w=iu(e,t,m,u,s,o,f),x=w.x,U=w.y;i.setTransformState(p,x,U)}}var HA=function(i,e,t){var s=i.startCoords,o=i.transformState,u=i.setup.panning,f=u.lockAxisX,m=u.lockAxisY,g=o.positionX,p=o.positionY;if(!s)return{x:g,y:p};var E=e-s.x,S=t-s.y,w=f?g:E,x=m?p:S;return{x:w,y:x}},as=function(i,e){var t=i.setup,s=i.transformState,o=s.scale,u=t.minScale,f=t.disablePadding;return e>0&&o>=u&&!f?e:0},FA=function(i){var e=i.mounted,t=i.setup,s=t.disabled,o=t.velocityAnimation,u=i.transformState.scale,f=o.disabled,m=!f||u>1||!s||e;return!!m},YA=function(i){var e=i.mounted,t=i.velocity,s=i.bounds,o=i.setup,u=o.disabled,f=o.velocityAnimation,m=i.transformState.scale,g=f.disabled,p=!g||m>1||!u||e;return!(!p||!t||!s)};function GA(i,e){var t=i.setup.velocityAnimation,s=t.equalToMove,o=t.animationTime,u=t.sensitivity;return s?o*e*u:o}function __(i,e,t,s,o,u,f,m,g,p){if(o){if(e>f&&t>f){var E=f+(i-f)*p;return E>g?g:E<f?f:E}if(e<u&&t<u){var E=u+(i-u)*p;return E<m?m:E>u?u:E}}return s?e:ym(i,u,f,o)}function XA(i,e){var t=1;return e?Math.min(t,i.offsetWidth/window.innerWidth):t}function KA(i,e){var t=FA(i);if(t){var s=i.lastMousePosition,o=i.velocityTime,u=i.setup,f=i.wrapperComponent,m=u.velocityAnimation.equalToMove,g=Date.now();if(s&&o&&f){var p=XA(f,m),E=e.x-s.x,S=e.y-s.y,w=E/p,x=S/p,U=g-o,G=E*E+S*S,X=Math.sqrt(G)/U;i.velocity={velocityX:w,velocityY:x,total:X}}i.lastMousePosition=e,i.velocityTime=g}}function QA(i){var e=i.velocity,t=i.bounds,s=i.setup,o=i.wrapperComponent,u=YA(i);if(!(!u||!e||!t||!o)){var f=e.velocityX,m=e.velocityY,g=e.total,p=t.maxPositionX,E=t.minPositionX,S=t.maxPositionY,w=t.minPositionY,x=s.limitToBounds,U=s.alignmentAnimation,G=s.zoomAnimation,X=s.panning,ce=X.lockAxisY,ae=X.lockAxisX,ie=G.animationType,_e=U.sizeX,he=U.sizeY,we=U.velocityAlignmentTime,M=we,A=GA(i,g),N=Math.max(A,M),O=as(i,_e),V=as(i,he),k=O*o.offsetWidth/100,R=V*o.offsetHeight/100,$e=p+k,Ke=E-k,F=S+R,se=w-R,me=i.transformState,Ve=new Date().getTime();gT(i,ie,N,function(D){var Z=i.transformState,re=Z.scale,te=Z.positionX,K=Z.positionY,ye=new Date().getTime()-Ve,le=ye/M,Ie=mT[U.animationType],Ce=1-Ie(Math.min(1,le)),gt=1-D,Ct=te+f*gt,on=K+m*gt,kn=__(Ct,me.positionX,te,ae,x,E,p,Ke,$e,Ce),xn=__(on,me.positionY,K,ce,x,w,S,se,F,Ce);(te!==Ct||K!==on)&&i.setTransformState(re,kn,xn)})}}function E_(i,e){var t=i.transformState.scale;ri(i),Qs(i,t),window.TouchEvent!==void 0&&e instanceof TouchEvent?BA(i,e):jA(i,e)}function Jm(i,e){var t=i.transformState.scale,s=i.setup,o=s.minScale,u=s.alignmentAnimation,f=u.disabled,m=u.sizeX,g=u.sizeY,p=u.animationTime,E=u.animationType,S=f||t<o||!m&&!g;if(!S){var w=qA(i);w&&ms(i,w,e??p,E)}}function T_(i,e,t){var s=i.startCoords,o=i.setup,u=o.alignmentAnimation,f=u.sizeX,m=u.sizeY;if(s){var g=HA(i,e,t),p=g.x,E=g.y,S=as(i,f),w=as(i,m);KA(i,{x:p,y:E}),yT(i,p,E,S,w)}}function $A(i){if(i.isPanning){var e=i.setup.panning.velocityDisabled,t=i.velocity,s=i.wrapperComponent,o=i.contentComponent;i.isPanning=!1,i.animate=!1,i.animation=null;var u=s==null?void 0:s.getBoundingClientRect(),f=o==null?void 0:o.getBoundingClientRect(),m=(u==null?void 0:u.width)||0,g=(u==null?void 0:u.height)||0,p=(f==null?void 0:f.width)||0,E=(f==null?void 0:f.height)||0,S=m<p||g<E,w=!e&&t&&(t==null?void 0:t.total)>.1&&S;w?QA(i):Jm(i)}}function ep(i,e,t,s){var o=i.setup,u=o.minScale,f=o.maxScale,m=o.limitToBounds,g=ru($n(e,2),u,f,0,!1),p=Qs(i,g),E=vh(i,t,s,g,p,m),S=E.x,w=E.y;return{scale:g,positionX:S,positionY:w}}function vT(i,e,t){var s=i.transformState.scale,o=i.wrapperComponent,u=i.setup,f=u.minScale,m=u.limitToBounds,g=u.zoomAnimation,p=g.disabled,E=g.animationTime,S=g.animationType,w=p||s>=f;if((s>=1||m)&&Jm(i),!(w||!o||!i.mounted)){var x=e||o.offsetWidth/2,U=t||o.offsetHeight/2,G=ep(i,f,x,U);G&&ms(i,G,E,S)}}var es=function(){return es=Object.assign||function(e){for(var t,s=1,o=arguments.length;s<o;s++){t=arguments[s];for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u])}return e},es.apply(this,arguments)};function S_(i,e,t){for(var s=0,o=e.length,u;s<o;s++)(u||!(s in e))&&(u||(u=Array.prototype.slice.call(e,0,s)),u[s]=e[s]);return i.concat(u||Array.prototype.slice.call(e))}var kc={scale:1,positionX:0,positionY:0},Vl={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},vm={wrapperClass:"react-transform-wrapper",contentClass:"react-transform-component"},_T=function(i){var e,t,s,o;return{previousScale:(e=i.initialScale)!==null&&e!==void 0?e:kc.scale,scale:(t=i.initialScale)!==null&&t!==void 0?t:kc.scale,positionX:(s=i.initialPositionX)!==null&&s!==void 0?s:kc.positionX,positionY:(o=i.initialPositionY)!==null&&o!==void 0?o:kc.positionY}},b_=function(i){var e=es({},Vl);return Object.keys(i).forEach(function(t){var s=typeof i[t]<"u",o=typeof Vl[t]<"u";if(o&&s){var u=Object.prototype.toString.call(Vl[t]),f=u==="[object Object]",m=u==="[object Array]";f?e[t]=es(es({},Vl[t]),i[t]):m?e[t]=S_(S_([],Vl[t],!0),i[t]):e[t]=i[t]}}),e},ET=function(i,e,t){var s=i.transformState.scale,o=i.wrapperComponent,u=i.setup,f=u.maxScale,m=u.minScale,g=u.zoomAnimation,p=u.smooth,E=g.size;if(!o)throw new Error("Wrapper is not mounted");var S=p?s*Math.exp(e*t):s+e*t,w=ru($n(S,3),m,f,E,!1);return w};function TT(i,e,t,s,o){var u=i.wrapperComponent,f=i.transformState,m=f.scale,g=f.positionX,p=f.positionY;if(!u)return console.error("No WrapperComponent found");var E=u.offsetWidth,S=u.offsetHeight,w=(E/2-g)/m,x=(S/2-p)/m,U=ET(i,e,t),G=ep(i,U,w,x);if(!G)return console.error("Error during zoom event. New transformation state was not calculated.");ms(i,G,s,o)}function ST(i,e,t,s){var o=i.setup,u=i.wrapperComponent,f=o.limitToBounds,m=_T(i.props),g=i.transformState,p=g.scale,E=g.positionX,S=g.positionY;if(u){var w=Zm(i,m.scale),x=iu(m.positionX,m.positionY,w,f,0,0,u),U={scale:m.scale,positionX:x.x,positionY:x.y};p===m.scale&&E===m.positionX&&S===m.positionY||(s==null||s(),ms(i,U,e,t))}}function WA(i,e,t,s){var o=i.getBoundingClientRect(),u=e.getBoundingClientRect(),f=t.getBoundingClientRect(),m=u.x*s.scale,g=u.y*s.scale;return{x:(o.x-f.x+m)/s.scale,y:(o.y-f.y+g)/s.scale}}function ZA(i,e,t){var s=i.wrapperComponent,o=i.contentComponent,u=i.transformState,f=i.setup,m=f.limitToBounds,g=f.minScale,p=f.maxScale;if(!s||!o)return u;var E=s.getBoundingClientRect(),S=e.getBoundingClientRect(),w=WA(e,s,o,u),x=w.x,U=w.y,G=S.width/u.scale,X=S.height/u.scale,ce=s.offsetWidth/G,ae=s.offsetHeight/X,ie=ru(t||Math.min(ce,ae),g,p,0,!1),_e=(E.width-G*ie)/2,he=(E.height-X*ie)/2,we=(E.left-x)*ie+_e,M=(E.top-U)*ie+he,A=Zm(i,ie),N=iu(we,M,A,m,0,0,s),O=N.x,V=N.y;return{positionX:O,positionY:V,scale:ie}}var JA=function(i){return function(e,t,s){e===void 0&&(e=.5),t===void 0&&(t=300),s===void 0&&(s="easeOut"),TT(i,1,e,t,s)}},e1=function(i){return function(e,t,s){e===void 0&&(e=.5),t===void 0&&(t=300),s===void 0&&(s="easeOut"),TT(i,-1,e,t,s)}},t1=function(i){return function(e,t,s,o,u){o===void 0&&(o=300),u===void 0&&(u="easeOut");var f=i.transformState,m=f.positionX,g=f.positionY,p=f.scale,E=i.wrapperComponent,S=i.contentComponent,w=i.setup.disabled;if(!(w||!E||!S)){var x={positionX:Number.isNaN(e)?m:e,positionY:Number.isNaN(t)?g:t,scale:Number.isNaN(s)?p:s};ms(i,x,o,u)}}},n1=function(i){return function(e,t){e===void 0&&(e=200),t===void 0&&(t="easeOut"),ST(i,e,t)}},i1=function(i){return function(e,t,s){t===void 0&&(t=200),s===void 0&&(s="easeOut");var o=i.transformState,u=i.wrapperComponent,f=i.contentComponent;if(u&&f){var m=bT(e||o.scale,u,f);ms(i,m,t,s)}}},r1=function(i){return function(e,t,s,o){s===void 0&&(s=600),o===void 0&&(o="easeOut"),ri(i);var u=i.wrapperComponent,f=typeof e=="string"?document.getElementById(e):e;if(u&&f&&u.contains(f)){var m=ZA(i,f,t);ms(i,m,s,o)}}},_m=function(i){return{instance:i,zoomIn:JA(i),zoomOut:e1(i),setTransform:t1(i),resetTransform:n1(i),centerView:i1(i),zoomToElement:r1(i)}},s1=function(i){return{instance:i,state:i.transformState}},at=function(i){var e={};return Object.assign(e,s1(i)),Object.assign(e,_m(i)),e},$d=!1;function Wd(){try{var i={get passive(){return $d=!0,!1}};return i}catch{return $d=!1,$d}}var xc=".".concat(vm.wrapperClass),_h=function(i,e){return e.some(function(t){return i.matches("".concat(xc," ").concat(t,", ").concat(xc," .").concat(t,", ").concat(xc," ").concat(t," *, ").concat(xc," .").concat(t," *"))})},Em=function(i){i&&clearTimeout(i)},a1=function(i,e,t){return"translate(".concat(i,"px, ").concat(e,"px) scale(").concat(t,")")},bT=function(i,e,t){var s=t.offsetWidth*i,o=t.offsetHeight*i,u=(e.offsetWidth-s)/2,f=(e.offsetHeight-o)/2;return{scale:i,positionX:u,positionY:f}};function o1(i){return function(e){i.forEach(function(t){typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var l1=function(i,e){var t=i.setup.wheel,s=t.disabled,o=t.wheelDisabled,u=t.touchPadDisabled,f=t.excluded,m=i.isInitialized,g=i.isPanning,p=e.target,E=m&&!g&&!s&&p;if(!E||o&&!e.ctrlKey||u&&e.ctrlKey)return!1;var S=_h(p,f);return!S},u1=function(i){return i?i.deltaY<0?1:-1:0};function c1(i,e){var t=u1(i),s=SA(e,t);return s}function wT(i,e,t){var s=e.getBoundingClientRect(),o=0,u=0;if("clientX"in i)o=(i.clientX-s.left)/t,u=(i.clientY-s.top)/t;else{var f=i.touches[0];o=(f.clientX-s.left)/t,u=(f.clientY-s.top)/t}return(Number.isNaN(o)||Number.isNaN(u))&&console.error("No mouse or touch offset found"),{x:o,y:u}}var h1=function(i,e,t,s,o){var u=i.transformState.scale,f=i.wrapperComponent,m=i.setup,g=m.maxScale,p=m.minScale,E=m.zoomAnimation,S=m.disablePadding,w=E.size,x=E.disabled;if(!f)throw new Error("Wrapper is not mounted");var U=u+e*t,G=s?!1:!x,X=ru($n(U,3),p,g,w,G&&!S);return X},f1=function(i,e){var t=i.previousWheelEvent,s=i.transformState.scale,o=i.setup,u=o.maxScale,f=o.minScale;return t?s<u||s>f||Math.sign(t.deltaY)!==Math.sign(e.deltaY)||t.deltaY>0&&t.deltaY<e.deltaY||t.deltaY<0&&t.deltaY>e.deltaY||Math.sign(t.deltaY)!==Math.sign(e.deltaY):!1},d1=function(i,e){var t=i.setup.pinch,s=t.disabled,o=t.excluded,u=i.isInitialized,f=e.target,m=u&&!s&&f;if(!m)return!1;var g=_h(f,o);return!g},m1=function(i){var e=i.setup.pinch.disabled,t=i.isInitialized,s=i.pinchStartDistance,o=t&&!e&&s;return!!o},p1=function(i,e,t){var s=t.getBoundingClientRect(),o=i.touches,u=$n(o[0].clientX-s.left,5),f=$n(o[0].clientY-s.top,5),m=$n(o[1].clientX-s.left,5),g=$n(o[1].clientY-s.top,5);return{x:(u+m)/2/e,y:(f+g)/2/e}},AT=function(i){return Math.sqrt(Math.pow(i.touches[0].pageX-i.touches[1].pageX,2)+Math.pow(i.touches[0].pageY-i.touches[1].pageY,2))},g1=function(i,e){var t=i.pinchStartScale,s=i.pinchStartDistance,o=i.setup,u=o.maxScale,f=o.minScale,m=o.zoomAnimation,g=o.disablePadding,p=m.size,E=m.disabled;if(!t||s===null||!e)throw new Error("Pinch touches distance was not provided");if(e<0)return i.transformState.scale;var S=e/s,w=S*t;return ru($n(w,2),f,u,p,!E&&!g)},y1=160,v1=100,_1=function(i,e){var t=i.props,s=t.onWheelStart,o=t.onZoomStart;i.wheelStopEventTimer||(ri(i),mt(at(i),e,s),mt(at(i),e,o))},E1=function(i,e){var t=i.props,s=t.onWheel,o=t.onZoom,u=i.contentComponent,f=i.setup,m=i.transformState,g=m.scale,p=f.limitToBounds,E=f.centerZoomedOut,S=f.zoomAnimation,w=f.wheel,x=f.disablePadding,U=f.smooth,G=S.size,X=S.disabled,ce=w.step,ae=w.smoothStep;if(!u)throw new Error("Component not mounted");e.preventDefault(),e.stopPropagation();var ie=c1(e,null),_e=U?ae*Math.abs(e.deltaY):ce,he=h1(i,ie,_e,!e.ctrlKey);if(g!==he){var we=Qs(i,he),M=wT(e,u,g),A=X||G===0||E||x,N=p&&A,O=vh(i,M.x,M.y,he,we,N),V=O.x,k=O.y;i.previousWheelEvent=e,i.setTransformState(he,V,k),mt(at(i),e,s),mt(at(i),e,o)}},T1=function(i,e){var t=i.props,s=t.onWheelStop,o=t.onZoomStop;Em(i.wheelAnimationTimer),i.wheelAnimationTimer=setTimeout(function(){i.mounted&&(vT(i,e.x,e.y),i.wheelAnimationTimer=null)},v1);var u=f1(i,e);u&&(Em(i.wheelStopEventTimer),i.wheelStopEventTimer=setTimeout(function(){i.mounted&&(i.wheelStopEventTimer=null,mt(at(i),e,s),mt(at(i),e,o))},y1))},CT=function(i){for(var e=0,t=0,s=0;s<2;s+=1)e+=i.touches[s].clientX,t+=i.touches[s].clientY;var o=e/2,u=t/2;return{x:o,y:u}},S1=function(i,e){var t=AT(e);i.pinchStartDistance=t,i.lastDistance=t,i.pinchStartScale=i.transformState.scale,i.isPanning=!1;var s=CT(e);i.pinchLastCenterX=s.x,i.pinchLastCenterY=s.y,ri(i)},b1=function(i,e){var t=i.contentComponent,s=i.pinchStartDistance,o=i.wrapperComponent,u=i.transformState.scale,f=i.setup,m=f.limitToBounds,g=f.centerZoomedOut,p=f.zoomAnimation,E=f.alignmentAnimation,S=p.disabled,w=p.size;if(!(s===null||!t)){var x=p1(e,u,t);if(!(!Number.isFinite(x.x)||!Number.isFinite(x.y))){var U=AT(e),G=g1(i,U),X=CT(e),ce=X.x-(i.pinchLastCenterX||0),ae=X.y-(i.pinchLastCenterY||0);if(!(G===u&&ce===0&&ae===0)){i.pinchLastCenterX=X.x,i.pinchLastCenterY=X.y;var ie=Qs(i,G),_e=S||w===0||g,he=m&&_e,we=vh(i,x.x,x.y,G,ie,he),M=we.x,A=we.y;i.pinchMidpoint=x,i.lastDistance=U;var N=E.sizeX,O=E.sizeY,V=as(i,N),k=as(i,O),R=M+ce,$e=A+ae,Ke=iu(R,$e,ie,m,V,k,o),F=Ke.x,se=Ke.y;i.setTransformState(G,F,se)}}}},w1=function(i){var e=i.pinchMidpoint;i.velocity=null,i.lastDistance=null,i.pinchMidpoint=null,i.pinchStartScale=null,i.pinchStartDistance=null,vT(i,e==null?void 0:e.x,e==null?void 0:e.y)},RT=function(i,e){var t=i.props.onZoomStop,s=i.setup.doubleClick.animationTime;Em(i.doubleClickStopEventTimer),i.doubleClickStopEventTimer=setTimeout(function(){i.doubleClickStopEventTimer=null,mt(at(i),e,t)},s)},A1=function(i,e){var t=i.props,s=t.onZoomStart,o=t.onZoom,u=i.setup.doubleClick,f=u.animationTime,m=u.animationType;mt(at(i),e,s),ST(i,f,m,function(){return mt(at(i),e,o)}),RT(i,e)};function C1(i,e){return i==="toggle"?e===1?1:-1:i==="zoomOut"?-1:1}function R1(i,e){var t=i.setup,s=i.doubleClickStopEventTimer,o=i.transformState,u=i.contentComponent,f=o.scale,m=i.props,g=m.onZoomStart,p=m.onZoom,E=t.doubleClick,S=E.disabled,w=E.mode,x=E.step,U=E.animationTime,G=E.animationType;if(!S&&!s){if(w==="reset")return A1(i,e);if(!u)return console.error("No ContentComponent found");var X=C1(w,i.transformState.scale),ce=ET(i,X,x);if(f!==ce){mt(at(i),e,g);var ae=wT(e,u,f),ie=ep(i,ce,ae.x,ae.y);if(!ie)return console.error("Error during zoom event. New transformation state was not calculated.");mt(at(i),e,p),ms(i,ie,U,G),RT(i,e)}}}var N1=function(i,e){var t=i.isInitialized,s=i.setup,o=i.wrapperComponent,u=s.doubleClick,f=u.disabled,m=u.excluded,g=e.target,p=o==null?void 0:o.contains(g),E=t&&g&&p&&!f;if(!E)return!1;var S=_h(g,m);return!S},I1=function(){function i(e){var t=this;this.mounted=!0,this.pinchLastCenterX=null,this.pinchLastCenterY=null,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){t.initializeWindowEvents()},this.unmount=function(){t.cleanupWindowEvents()},this.update=function(s){t.props=s,Qs(t,t.transformState.scale),t.setup=b_(s)},this.initializeWindowEvents=function(){var s,o,u=Wd(),f=(s=t.wrapperComponent)===null||s===void 0?void 0:s.ownerDocument,m=f==null?void 0:f.defaultView;(o=t.wrapperComponent)===null||o===void 0||o.addEventListener("wheel",t.onWheelPanning,u),m==null||m.addEventListener("mousedown",t.onPanningStart,u),m==null||m.addEventListener("mousemove",t.onPanning,u),m==null||m.addEventListener("mouseup",t.onPanningStop,u),f==null||f.addEventListener("mouseleave",t.clearPanning,u),m==null||m.addEventListener("keyup",t.setKeyUnPressed,u),m==null||m.addEventListener("keydown",t.setKeyPressed,u)},this.cleanupWindowEvents=function(){var s,o,u=Wd(),f=(s=t.wrapperComponent)===null||s===void 0?void 0:s.ownerDocument,m=f==null?void 0:f.defaultView;m==null||m.removeEventListener("mousedown",t.onPanningStart,u),m==null||m.removeEventListener("mousemove",t.onPanning,u),m==null||m.removeEventListener("mouseup",t.onPanningStop,u),f==null||f.removeEventListener("mouseleave",t.clearPanning,u),m==null||m.removeEventListener("keyup",t.setKeyUnPressed,u),m==null||m.removeEventListener("keydown",t.setKeyPressed,u),document.removeEventListener("mouseleave",t.clearPanning,u),ri(t),(o=t.observer)===null||o===void 0||o.disconnect()},this.handleInitializeWrapperEvents=function(s){var o=Wd();s.addEventListener("wheel",t.onWheelZoom,o),s.addEventListener("dblclick",t.onDoubleClick,o),s.addEventListener("touchstart",t.onTouchPanningStart,o),s.addEventListener("touchmove",t.onTouchPanning,o),s.addEventListener("touchend",t.onTouchPanningStop,o)},this.handleInitialize=function(s,o){var u=!1,f=t.setup.centerOnInit,m=function(g,p){for(var E=0,S=g;E<S.length;E++){var w=S[E];if(w.target===p)return!0}return!1};t.applyTransformation(),t.onInitCallbacks.forEach(function(g){g(at(t))}),t.observer=new ResizeObserver(function(g){if(m(g,s)||m(g,o))if(f&&!u){var p=o.offsetWidth,E=o.offsetHeight;(p>0||E>0)&&(u=!0,t.setCenter())}else ri(t),Qs(t,t.transformState.scale),Jm(t,0)}),t.observer.observe(s),t.observer.observe(o)},this.onWheelZoom=function(s){var o=t.setup.disabled;if(!o){var u=l1(t,s);if(u){var f=t.isPressingKeys(t.setup.wheel.activationKeys);f&&(_1(t,s),E1(t,s),T1(t,s))}}},this.onWheelPanning=function(s){var o=t.setup,u=o.disabled,f=o.wheel,m=o.panning;if(!(!t.wrapperComponent||!t.contentComponent||u||!f.wheelDisabled||m.disabled||!m.wheelPanning||s.ctrlKey)){s.preventDefault(),s.stopPropagation();var g=t.transformState,p=g.positionX,E=g.positionY,S=p-s.deltaX,w=E-s.deltaY,x=m.lockAxisX?p:S,U=m.lockAxisY?E:w,G=t.setup.alignmentAnimation,X=G.sizeX,ce=G.sizeY,ae=as(t,X),ie=as(t,ce);x===p&&U===E||yT(t,x,U,ae,ie)}},this.onPanningStart=function(s){var o=t.setup.disabled,u=t.props.onPanningStart;if(!o){var f=y_(t,s);if(f){var m=t.isPressingKeys(t.setup.panning.activationKeys);m&&(s.button===0&&!t.setup.panning.allowLeftClickPan||s.button===1&&!t.setup.panning.allowMiddleClickPan||s.button===2&&!t.setup.panning.allowRightClickPan||(s.preventDefault(),s.stopPropagation(),ri(t),E_(t,s),mt(at(t),s,u)))}}},this.onPanning=function(s){var o=t.setup.disabled,u=t.props.onPanning;if(!o){var f=v_(t);if(f){var m=t.isPressingKeys(t.setup.panning.activationKeys);m&&(s.preventDefault(),s.stopPropagation(),T_(t,s.clientX,s.clientY),mt(at(t),s,u))}}},this.onPanningStop=function(s){var o=t.props.onPanningStop;t.isPanning&&($A(t),mt(at(t),s,o))},this.onPinchStart=function(s){var o=t.setup.disabled,u=t.props,f=u.onPinchingStart,m=u.onZoomStart;if(!o){var g=d1(t,s);g&&(S1(t,s),ri(t),mt(at(t),s,f),mt(at(t),s,m))}},this.onPinch=function(s){var o=t.setup.disabled,u=t.props,f=u.onPinching,m=u.onZoom;if(!o){var g=m1(t);g&&(s.preventDefault(),s.stopPropagation(),b1(t,s),mt(at(t),s,f),mt(at(t),s,m))}},this.onPinchStop=function(s){var o=t.props,u=o.onPinchingStop,f=o.onZoomStop;t.pinchStartScale&&(w1(t),mt(at(t),s,u),mt(at(t),s,f))},this.onTouchPanningStart=function(s){var o=t.setup.disabled,u=t.props.onPanningStart;if(!o){var f=y_(t,s);if(f){var m=t.lastTouch&&+new Date-t.lastTouch<200&&s.touches.length===1;if(!m){t.lastTouch=+new Date,ri(t);var g=s.touches,p=g.length===1,E=g.length===2;p&&(ri(t),E_(t,s),mt(at(t),s,u)),E&&t.onPinchStart(s)}}}},this.onTouchPanning=function(s){var o=t.setup.disabled,u=t.props.onPanning;if(t.isPanning&&s.touches.length===1){if(o)return;var f=v_(t);if(!f)return;s.preventDefault(),s.stopPropagation();var m=s.touches[0];T_(t,m.clientX,m.clientY),mt(at(t),s,u)}else s.touches.length>1&&t.onPinch(s)},this.onTouchPanningStop=function(s){t.onPanningStop(s),t.onPinchStop(s)},this.onDoubleClick=function(s){var o=t.setup.disabled;if(!o){var u=N1(t,s);u&&R1(t,s)}},this.clearPanning=function(s){t.isPanning&&t.onPanningStop(s)},this.setKeyPressed=function(s){t.pressedKeys[s.key]=!0},this.setKeyUnPressed=function(s){t.pressedKeys[s.key]=!1},this.isPressingKeys=function(s){return s.length?!!s.find(function(o){return t.pressedKeys[o]}):!0},this.setTransformState=function(s,o,u){var f=t.props.onTransformed;if(!Number.isNaN(s)&&!Number.isNaN(o)&&!Number.isNaN(u)){s!==t.transformState.scale&&(t.transformState.previousScale=t.transformState.scale,t.transformState.scale=s),t.transformState.positionX=o,t.transformState.positionY=u,t.applyTransformation();var m=at(t);t.onChangeCallbacks.forEach(function(g){return g(m)}),mt(m,{scale:s,positionX:o,positionY:u},f)}else console.error("Detected NaN set state values")},this.setCenter=function(){if(t.wrapperComponent&&t.contentComponent){var s=bT(t.transformState.scale,t.wrapperComponent,t.contentComponent);t.setTransformState(s.scale,s.positionX,s.positionY)}},this.handleTransformStyles=function(s,o,u){return t.props.customTransform?t.props.customTransform(s,o,u):a1(s,o,u)},this.applyTransformation=function(){if(!(!t.mounted||!t.contentComponent)){var s=t.transformState,o=s.scale,u=s.positionX,f=s.positionY,m=t.handleTransformStyles(u,f,o);t.contentComponent.style.transform=m}},this.getContext=function(){return at(t)},this.onChange=function(s){return t.onChangeCallbacks.has(s)||t.onChangeCallbacks.add(s),function(){t.onChangeCallbacks.delete(s)}},this.onInit=function(s){return t.onInitCallbacks.has(s)||t.onInitCallbacks.add(s),function(){t.onInitCallbacks.delete(s)}},this.init=function(s,o){t.cleanupWindowEvents(),t.wrapperComponent=s,t.contentComponent=o,Qs(t,t.transformState.scale),t.handleInitializeWrapperEvents(s),t.handleInitialize(s,o),t.initializeWindowEvents(),t.isInitialized=!0;var u=at(t);mt(u,void 0,t.props.onInit)},this.props=e,this.setup=b_(this.props),this.transformState=_T(this.props)}return i}(),tp=kt.createContext(null),D1=function(i,e){return typeof i=="function"?i(e):i},O1=kt.forwardRef(function(i,e){var t=ue.useRef(new I1(i)).current,s=D1(i.children,_m(t));return ue.useImperativeHandle(e,function(){return _m(t)},[t]),ue.useEffect(function(){t.update(i)},[t,i]),kt.createElement(tp.Provider,{value:t},s)});kt.forwardRef(function(i,e){var t=ue.useRef(null),s=ue.useContext(tp);return ue.useEffect(function(){return s.onChange(function(o){if(t.current){var u=0,f=0;t.current.style.transform=s.handleTransformStyles(u,f,1/o.instance.transformState.scale)}})},[s]),kt.createElement("div",es({},i,{ref:o1([t,e])}))});function M1(i,e){e===void 0&&(e={});var t=e.insertAt;if(!(typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",t==="top"&&s.firstChild?s.insertBefore(o,s.firstChild):s.appendChild(o),o.styleSheet?o.styleSheet.cssText=i:o.appendChild(document.createTextNode(i))}}var P1=`.transform-component-module_wrapper__SPB86 {
  position: relative;
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  overflow: hidden;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  margin: 0;
  padding: 0;
  transform: translate3d(0, 0, 0);
}
.transform-component-module_content__FBWxo {
  display: flex;
  flex-wrap: wrap;
  width: -moz-fit-content;
  width: fit-content;
  height: -moz-fit-content;
  height: fit-content;
  margin: 0;
  padding: 0;
  transform-origin: 0% 0%;
}
.transform-component-module_content__FBWxo img {
  pointer-events: none;
}
`,w_={wrapper:"transform-component-module_wrapper__SPB86",content:"transform-component-module_content__FBWxo"};M1(P1);var V1=function(i){var e=i.children,t=i.wrapperClass,s=t===void 0?"":t,o=i.contentClass,u=o===void 0?"":o,f=i.wrapperStyle,m=i.contentStyle,g=i.wrapperProps,p=g===void 0?{}:g,E=i.contentProps,S=E===void 0?{}:E,w=ue.useContext(tp),x=w.init,U=w.cleanupWindowEvents,G=ue.useRef(null),X=ue.useRef(null);return ue.useEffect(function(){var ce=G.current,ae=X.current;return ce!==null&&ae!==null&&x&&(x==null||x(ce,ae)),function(){U==null||U()}},[]),kt.createElement("div",es({},p,{ref:G,className:"".concat(vm.wrapperClass," ").concat(w_.wrapper," ").concat(s),style:f}),kt.createElement("div",es({},S,{ref:X,className:"".concat(vm.contentClass," ").concat(w_.content," ").concat(u),style:m}),e))};const k1=()=>{};var A_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},x1=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],f=i[t++],m=i[t++],g=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=i[t++],f=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},IT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],f=o+1<i.length,m=f?i[o+1]:0,g=o+2<i.length,p=g?i[o+2]:0,E=u>>2,S=(u&3)<<4|m>>4;let w=(m&15)<<2|p>>6,x=p&63;g||(x=64,f||(w=64)),s.push(t[E],t[S],t[w],t[x])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(NT(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):x1(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const p=o<i.length?t[i.charAt(o)]:64;++o;const S=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||p==null||S==null)throw new L1;const w=u<<2|m>>4;if(s.push(w),p!==64){const x=m<<4&240|p>>2;if(s.push(x),S!==64){const U=p<<6&192|S;s.push(U)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class L1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const U1=function(i){const e=NT(i);return IT.encodeByteArray(e,!0)},Jc=function(i){return U1(i).replace(/\./g,"")},DT=function(i){try{return IT.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1=()=>z1().__FIREBASE_DEFAULTS__,B1=()=>{if(typeof process>"u"||typeof A_>"u")return;const i=A_.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},q1=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&DT(i[1]);return e&&JSON.parse(e)},Eh=()=>{try{return k1()||j1()||B1()||q1()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},OT=i=>{var e,t;return(t=(e=Eh())==null?void 0:e.emulatorHosts)==null?void 0:t[i]},H1=i=>{const e=OT(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},MT=()=>{var i;return(i=Eh())==null?void 0:i.config},PT=i=>{var e;return(e=Eh())==null?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function VT(i){return(await fetch(i,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Jc(JSON.stringify(t)),Jc(JSON.stringify(f)),""].join(".")}const Bl={};function G1(){const i={prod:[],emulator:[]};for(const e of Object.keys(Bl))Bl[e]?i.emulator.push(e):i.prod.push(e);return i}function X1(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let C_=!1;function kT(i,e){if(typeof window>"u"||typeof document>"u"||!Eo(window.location.host)||Bl[i]===e||Bl[i]||C_)return;Bl[i]=e;function t(w){return`__firebase__banner__${w}`}const s="__firebase__banner",u=G1().prod.length>0;function f(){const w=document.getElementById(s);w&&w.remove()}function m(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function g(w,x){w.setAttribute("width","24"),w.setAttribute("id",x),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function p(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{C_=!0,f()},w}function E(w,x){w.setAttribute("id",x),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function S(){const w=X1(s),x=t("text"),U=document.getElementById(x)||document.createElement("span"),G=t("learnmore"),X=document.getElementById(G)||document.createElement("a"),ce=t("preprendIcon"),ae=document.getElementById(ce)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const ie=w.element;m(ie),E(X,G);const _e=p();g(ae,ce),ie.append(ae,U,X,_e),document.body.appendChild(ie)}u?(U.innerText="Preview backend disconnected.",ae.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ae.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,U.innerText="Preview backend running in this workspace."),U.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function K1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mn())}function Q1(){var e;const i=(e=Eh())==null?void 0:e.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function W1(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Z1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function J1(){const i=mn();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function eC(){return!Q1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xT(){try{return typeof indexedDB=="object"}catch{return!1}}function LT(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(t){e(t)}})}function tC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC="FirebaseError";class Vi extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=nC,Object.setPrototypeOf(this,Vi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ia.prototype.create)}}class ia{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?iC(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new Vi(o,m,s)}}function iC(i,e){return i.replace(rC,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const rC=/\{\$([^}]+)}/g;function sC(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Zs(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],f=e[o];if(R_(u)&&R_(f)){if(!Zs(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function R_(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function kl(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function xl(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function aC(i,e){const t=new oC(i,e);return t.subscribe.bind(t)}class oC{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");lC(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Zd),o.error===void 0&&(o.error=Zd),o.complete===void 0&&(o.complete=Zd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lC(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Zd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(i){return i&&i._delegate?i._delegate:i}class oi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new F1;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hC(e))try{this.getOrInitializeService({instanceIdentifier:Gs})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Gs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gs){return this.instances.has(e)}getOptions(e=Gs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:cC(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Gs){return this.component?this.component.multipleInstances?e:Gs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cC(i){return i===Gs?void 0:i}function hC(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new uC(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ue||(Ue={}));const dC={debug:Ue.DEBUG,verbose:Ue.VERBOSE,info:Ue.INFO,warn:Ue.WARN,error:Ue.ERROR,silent:Ue.SILENT},mC=Ue.INFO,pC={[Ue.DEBUG]:"log",[Ue.VERBOSE]:"log",[Ue.INFO]:"info",[Ue.WARN]:"warn",[Ue.ERROR]:"error"},gC=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=pC[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class np{constructor(e){this.name=e,this._logLevel=mC,this._logHandler=gC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ue.DEBUG,...e),this._logHandler(this,Ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ue.VERBOSE,...e),this._logHandler(this,Ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ue.INFO,...e),this._logHandler(this,Ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ue.WARN,...e),this._logHandler(this,Ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ue.ERROR,...e),this._logHandler(this,Ue.ERROR,...e)}}const yC=(i,e)=>e.some(t=>i instanceof t);let N_,I_;function vC(){return N_||(N_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _C(){return I_||(I_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const UT=new WeakMap,Tm=new WeakMap,zT=new WeakMap,Jd=new WeakMap,ip=new WeakMap;function EC(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",f)},u=()=>{t(fr(i.result)),o()},f=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",f)});return e.then(t=>{t instanceof IDBCursor&&UT.set(t,i)}).catch(()=>{}),ip.set(e,i),e}function TC(i){if(Tm.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",f),i.removeEventListener("abort",f)},u=()=>{t(),o()},f=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",f),i.addEventListener("abort",f)});Tm.set(i,e)}let Sm={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Tm.get(i);if(e==="objectStoreNames")return i.objectStoreNames||zT.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return fr(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function SC(i){Sm=i(Sm)}function bC(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(em(this),e,...t);return zT.set(s,e.sort?e.sort():[e]),fr(s)}:_C().includes(i)?function(...e){return i.apply(em(this),e),fr(UT.get(this))}:function(...e){return fr(i.apply(em(this),e))}}function wC(i){return typeof i=="function"?bC(i):(i instanceof IDBTransaction&&TC(i),yC(i,vC())?new Proxy(i,Sm):i)}function fr(i){if(i instanceof IDBRequest)return EC(i);if(Jd.has(i))return Jd.get(i);const e=wC(i);return e!==i&&(Jd.set(i,e),ip.set(e,i)),e}const em=i=>ip.get(i);function Th(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(i,e),m=fr(f);return s&&f.addEventListener("upgradeneeded",g=>{s(fr(f.result),g.oldVersion,g.newVersion,fr(f.transaction),g)}),t&&f.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",p=>o(p.oldVersion,p.newVersion,p))}).catch(()=>{}),m}function tm(i,{blocked:e}={}){const t=indexedDB.deleteDatabase(i);return e&&t.addEventListener("blocked",s=>e(s.oldVersion,s)),fr(t).then(()=>{})}const AC=["get","getKey","getAll","getAllKeys","count"],CC=["put","add","delete","clear"],nm=new Map;function D_(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(nm.get(e))return nm.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=CC.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||AC.includes(t)))return;const u=async function(f,...m){const g=this.transaction(f,o?"readwrite":"readonly");let p=g.store;return s&&(p=p.index(m.shift())),(await Promise.all([p[t](...m),o&&g.done]))[0]};return nm.set(e,u),u}SC(i=>({...i,get:(e,t,s)=>D_(e,t)||i.get(e,t,s),has:(e,t)=>!!D_(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(NC(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function NC(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bm="@firebase/app",O_="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new np("@firebase/app"),IC="@firebase/app-compat",DC="@firebase/analytics-compat",OC="@firebase/analytics",MC="@firebase/app-check-compat",PC="@firebase/app-check",VC="@firebase/auth",kC="@firebase/auth-compat",xC="@firebase/database",LC="@firebase/data-connect",UC="@firebase/database-compat",zC="@firebase/functions",jC="@firebase/functions-compat",BC="@firebase/installations",qC="@firebase/installations-compat",HC="@firebase/messaging",FC="@firebase/messaging-compat",YC="@firebase/performance",GC="@firebase/performance-compat",XC="@firebase/remote-config",KC="@firebase/remote-config-compat",QC="@firebase/storage",$C="@firebase/storage-compat",WC="@firebase/firestore",ZC="@firebase/ai",JC="@firebase/firestore-compat",eR="firebase",tR="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm="[DEFAULT]",nR={[bm]:"fire-core",[IC]:"fire-core-compat",[OC]:"fire-analytics",[DC]:"fire-analytics-compat",[PC]:"fire-app-check",[MC]:"fire-app-check-compat",[VC]:"fire-auth",[kC]:"fire-auth-compat",[xC]:"fire-rtdb",[LC]:"fire-data-connect",[UC]:"fire-rtdb-compat",[zC]:"fire-fn",[jC]:"fire-fn-compat",[BC]:"fire-iid",[qC]:"fire-iid-compat",[HC]:"fire-fcm",[FC]:"fire-fcm-compat",[YC]:"fire-perf",[GC]:"fire-perf-compat",[XC]:"fire-rc",[KC]:"fire-rc-compat",[QC]:"fire-gcs",[$C]:"fire-gcs-compat",[WC]:"fire-fst",[JC]:"fire-fst-compat",[ZC]:"fire-vertex","fire-js":"fire-js",[eR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=new Map,iR=new Map,Am=new Map;function M_(i,e){try{i.container.addComponent(e)}catch(t){dr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Mi(i){const e=i.name;if(Am.has(e))return dr.debug(`There were multiple attempts to register component ${e}.`),!1;Am.set(e,i);for(const t of eh.values())M_(t,i);for(const t of iR.values())M_(t,i);return!0}function To(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function si(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ts=new ia("app","Firebase",rR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new oi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ts.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=tR;function jT(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:wm,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw ts.create("bad-app-name",{appName:String(o)});if(t||(t=MT()),!t)throw ts.create("no-options");const u=eh.get(o);if(u){if(Zs(t,u.options)&&Zs(s,u.config))return u;throw ts.create("duplicate-app",{appName:o})}const f=new fC(o);for(const g of Am.values())f.addComponent(g);const m=new sR(t,s,f);return eh.set(o,m),m}function rp(i=wm){const e=eh.get(i);if(!e&&i===wm&&MT())return jT();if(!e)throw ts.create("no-app",{appName:i});return e}function Wn(i,e,t){let s=nR[i]??i;t&&(s+=`-${t}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const f=[`Unable to register library "${s}" with version "${e}":`];o&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dr.warn(f.join(" "));return}Mi(new oi(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR="firebase-heartbeat-database",oR=1,Xl="firebase-heartbeat-store";let im=null;function BT(){return im||(im=Th(aR,oR,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Xl)}catch(t){console.warn(t)}}}}).catch(i=>{throw ts.create("idb-open",{originalErrorMessage:i.message})})),im}async function lR(i){try{const t=(await BT()).transaction(Xl),s=await t.objectStore(Xl).get(qT(i));return await t.done,s}catch(e){if(e instanceof Vi)dr.warn(e.message);else{const t=ts.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dr.warn(t.message)}}}async function P_(i,e){try{const s=(await BT()).transaction(Xl,"readwrite");await s.objectStore(Xl).put(e,qT(i)),await s.done}catch(t){if(t instanceof Vi)dr.warn(t.message);else{const s=ts.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});dr.warn(s.message)}}}function qT(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR=1024,cR=30;class hR{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dR(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=V_();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>cR){const f=mR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){dr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=V_(),{heartbeatsToSend:s,unsentEntries:o}=fR(this._heartbeatsCache.heartbeats),u=Jc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return dr.warn(t),""}}}function V_(){return new Date().toISOString().substring(0,10)}function fR(i,e=uR){const t=[];let s=i.slice();for(const o of i){const u=t.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),k_(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),k_(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class dR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xT()?LT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await lR(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return P_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return P_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function k_(i){return Jc(JSON.stringify({version:2,heartbeats:i})).length}function mR(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pR(i){Mi(new oi("platform-logger",e=>new RC(e),"PRIVATE")),Mi(new oi("heartbeat",e=>new hR(e),"PRIVATE")),Wn(bm,O_,i),Wn(bm,O_,"esm2020"),Wn("fire-js","")}pR("");var x_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ns,HT;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(M,A){function N(){}N.prototype=A.prototype,M.D=A.prototype,M.prototype=new N,M.prototype.constructor=M,M.C=function(O,V,k){for(var R=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)R[$e-2]=arguments[$e];return A.prototype[V].apply(O,R)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(M,A,N){N||(N=0);var O=Array(16);if(typeof A=="string")for(var V=0;16>V;++V)O[V]=A.charCodeAt(N++)|A.charCodeAt(N++)<<8|A.charCodeAt(N++)<<16|A.charCodeAt(N++)<<24;else for(V=0;16>V;++V)O[V]=A[N++]|A[N++]<<8|A[N++]<<16|A[N++]<<24;A=M.g[0],N=M.g[1],V=M.g[2];var k=M.g[3],R=A+(k^N&(V^k))+O[0]+3614090360&4294967295;A=N+(R<<7&4294967295|R>>>25),R=k+(V^A&(N^V))+O[1]+3905402710&4294967295,k=A+(R<<12&4294967295|R>>>20),R=V+(N^k&(A^N))+O[2]+606105819&4294967295,V=k+(R<<17&4294967295|R>>>15),R=N+(A^V&(k^A))+O[3]+3250441966&4294967295,N=V+(R<<22&4294967295|R>>>10),R=A+(k^N&(V^k))+O[4]+4118548399&4294967295,A=N+(R<<7&4294967295|R>>>25),R=k+(V^A&(N^V))+O[5]+1200080426&4294967295,k=A+(R<<12&4294967295|R>>>20),R=V+(N^k&(A^N))+O[6]+2821735955&4294967295,V=k+(R<<17&4294967295|R>>>15),R=N+(A^V&(k^A))+O[7]+4249261313&4294967295,N=V+(R<<22&4294967295|R>>>10),R=A+(k^N&(V^k))+O[8]+1770035416&4294967295,A=N+(R<<7&4294967295|R>>>25),R=k+(V^A&(N^V))+O[9]+2336552879&4294967295,k=A+(R<<12&4294967295|R>>>20),R=V+(N^k&(A^N))+O[10]+4294925233&4294967295,V=k+(R<<17&4294967295|R>>>15),R=N+(A^V&(k^A))+O[11]+2304563134&4294967295,N=V+(R<<22&4294967295|R>>>10),R=A+(k^N&(V^k))+O[12]+1804603682&4294967295,A=N+(R<<7&4294967295|R>>>25),R=k+(V^A&(N^V))+O[13]+4254626195&4294967295,k=A+(R<<12&4294967295|R>>>20),R=V+(N^k&(A^N))+O[14]+2792965006&4294967295,V=k+(R<<17&4294967295|R>>>15),R=N+(A^V&(k^A))+O[15]+1236535329&4294967295,N=V+(R<<22&4294967295|R>>>10),R=A+(V^k&(N^V))+O[1]+4129170786&4294967295,A=N+(R<<5&4294967295|R>>>27),R=k+(N^V&(A^N))+O[6]+3225465664&4294967295,k=A+(R<<9&4294967295|R>>>23),R=V+(A^N&(k^A))+O[11]+643717713&4294967295,V=k+(R<<14&4294967295|R>>>18),R=N+(k^A&(V^k))+O[0]+3921069994&4294967295,N=V+(R<<20&4294967295|R>>>12),R=A+(V^k&(N^V))+O[5]+3593408605&4294967295,A=N+(R<<5&4294967295|R>>>27),R=k+(N^V&(A^N))+O[10]+38016083&4294967295,k=A+(R<<9&4294967295|R>>>23),R=V+(A^N&(k^A))+O[15]+3634488961&4294967295,V=k+(R<<14&4294967295|R>>>18),R=N+(k^A&(V^k))+O[4]+3889429448&4294967295,N=V+(R<<20&4294967295|R>>>12),R=A+(V^k&(N^V))+O[9]+568446438&4294967295,A=N+(R<<5&4294967295|R>>>27),R=k+(N^V&(A^N))+O[14]+3275163606&4294967295,k=A+(R<<9&4294967295|R>>>23),R=V+(A^N&(k^A))+O[3]+4107603335&4294967295,V=k+(R<<14&4294967295|R>>>18),R=N+(k^A&(V^k))+O[8]+1163531501&4294967295,N=V+(R<<20&4294967295|R>>>12),R=A+(V^k&(N^V))+O[13]+2850285829&4294967295,A=N+(R<<5&4294967295|R>>>27),R=k+(N^V&(A^N))+O[2]+4243563512&4294967295,k=A+(R<<9&4294967295|R>>>23),R=V+(A^N&(k^A))+O[7]+1735328473&4294967295,V=k+(R<<14&4294967295|R>>>18),R=N+(k^A&(V^k))+O[12]+2368359562&4294967295,N=V+(R<<20&4294967295|R>>>12),R=A+(N^V^k)+O[5]+4294588738&4294967295,A=N+(R<<4&4294967295|R>>>28),R=k+(A^N^V)+O[8]+2272392833&4294967295,k=A+(R<<11&4294967295|R>>>21),R=V+(k^A^N)+O[11]+1839030562&4294967295,V=k+(R<<16&4294967295|R>>>16),R=N+(V^k^A)+O[14]+4259657740&4294967295,N=V+(R<<23&4294967295|R>>>9),R=A+(N^V^k)+O[1]+2763975236&4294967295,A=N+(R<<4&4294967295|R>>>28),R=k+(A^N^V)+O[4]+1272893353&4294967295,k=A+(R<<11&4294967295|R>>>21),R=V+(k^A^N)+O[7]+4139469664&4294967295,V=k+(R<<16&4294967295|R>>>16),R=N+(V^k^A)+O[10]+3200236656&4294967295,N=V+(R<<23&4294967295|R>>>9),R=A+(N^V^k)+O[13]+681279174&4294967295,A=N+(R<<4&4294967295|R>>>28),R=k+(A^N^V)+O[0]+3936430074&4294967295,k=A+(R<<11&4294967295|R>>>21),R=V+(k^A^N)+O[3]+3572445317&4294967295,V=k+(R<<16&4294967295|R>>>16),R=N+(V^k^A)+O[6]+76029189&4294967295,N=V+(R<<23&4294967295|R>>>9),R=A+(N^V^k)+O[9]+3654602809&4294967295,A=N+(R<<4&4294967295|R>>>28),R=k+(A^N^V)+O[12]+3873151461&4294967295,k=A+(R<<11&4294967295|R>>>21),R=V+(k^A^N)+O[15]+530742520&4294967295,V=k+(R<<16&4294967295|R>>>16),R=N+(V^k^A)+O[2]+3299628645&4294967295,N=V+(R<<23&4294967295|R>>>9),R=A+(V^(N|~k))+O[0]+4096336452&4294967295,A=N+(R<<6&4294967295|R>>>26),R=k+(N^(A|~V))+O[7]+1126891415&4294967295,k=A+(R<<10&4294967295|R>>>22),R=V+(A^(k|~N))+O[14]+2878612391&4294967295,V=k+(R<<15&4294967295|R>>>17),R=N+(k^(V|~A))+O[5]+4237533241&4294967295,N=V+(R<<21&4294967295|R>>>11),R=A+(V^(N|~k))+O[12]+1700485571&4294967295,A=N+(R<<6&4294967295|R>>>26),R=k+(N^(A|~V))+O[3]+2399980690&4294967295,k=A+(R<<10&4294967295|R>>>22),R=V+(A^(k|~N))+O[10]+4293915773&4294967295,V=k+(R<<15&4294967295|R>>>17),R=N+(k^(V|~A))+O[1]+2240044497&4294967295,N=V+(R<<21&4294967295|R>>>11),R=A+(V^(N|~k))+O[8]+1873313359&4294967295,A=N+(R<<6&4294967295|R>>>26),R=k+(N^(A|~V))+O[15]+4264355552&4294967295,k=A+(R<<10&4294967295|R>>>22),R=V+(A^(k|~N))+O[6]+2734768916&4294967295,V=k+(R<<15&4294967295|R>>>17),R=N+(k^(V|~A))+O[13]+1309151649&4294967295,N=V+(R<<21&4294967295|R>>>11),R=A+(V^(N|~k))+O[4]+4149444226&4294967295,A=N+(R<<6&4294967295|R>>>26),R=k+(N^(A|~V))+O[11]+3174756917&4294967295,k=A+(R<<10&4294967295|R>>>22),R=V+(A^(k|~N))+O[2]+718787259&4294967295,V=k+(R<<15&4294967295|R>>>17),R=N+(k^(V|~A))+O[9]+3951481745&4294967295,M.g[0]=M.g[0]+A&4294967295,M.g[1]=M.g[1]+(V+(R<<21&4294967295|R>>>11))&4294967295,M.g[2]=M.g[2]+V&4294967295,M.g[3]=M.g[3]+k&4294967295}s.prototype.u=function(M,A){A===void 0&&(A=M.length);for(var N=A-this.blockSize,O=this.B,V=this.h,k=0;k<A;){if(V==0)for(;k<=N;)o(this,M,k),k+=this.blockSize;if(typeof M=="string"){for(;k<A;)if(O[V++]=M.charCodeAt(k++),V==this.blockSize){o(this,O),V=0;break}}else for(;k<A;)if(O[V++]=M[k++],V==this.blockSize){o(this,O),V=0;break}}this.h=V,this.o+=A},s.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var A=1;A<M.length-8;++A)M[A]=0;var N=8*this.o;for(A=M.length-8;A<M.length;++A)M[A]=N&255,N/=256;for(this.u(M),M=Array(16),A=N=0;4>A;++A)for(var O=0;32>O;O+=8)M[N++]=this.g[A]>>>O&255;return M};function u(M,A){var N=m;return Object.prototype.hasOwnProperty.call(N,M)?N[M]:N[M]=A(M)}function f(M,A){this.h=A;for(var N=[],O=!0,V=M.length-1;0<=V;V--){var k=M[V]|0;O&&k==A||(N[V]=k,O=!1)}this.g=N}var m={};function g(M){return-128<=M&&128>M?u(M,function(A){return new f([A|0],0>A?-1:0)}):new f([M|0],0>M?-1:0)}function p(M){if(isNaN(M)||!isFinite(M))return S;if(0>M)return X(p(-M));for(var A=[],N=1,O=0;M>=N;O++)A[O]=M/N|0,N*=4294967296;return new f(A,0)}function E(M,A){if(M.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(M.charAt(0)=="-")return X(E(M.substring(1),A));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var N=p(Math.pow(A,8)),O=S,V=0;V<M.length;V+=8){var k=Math.min(8,M.length-V),R=parseInt(M.substring(V,V+k),A);8>k?(k=p(Math.pow(A,k)),O=O.j(k).add(p(R))):(O=O.j(N),O=O.add(p(R)))}return O}var S=g(0),w=g(1),x=g(16777216);i=f.prototype,i.m=function(){if(G(this))return-X(this).m();for(var M=0,A=1,N=0;N<this.g.length;N++){var O=this.i(N);M+=(0<=O?O:4294967296+O)*A,A*=4294967296}return M},i.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(U(this))return"0";if(G(this))return"-"+X(this).toString(M);for(var A=p(Math.pow(M,6)),N=this,O="";;){var V=_e(N,A).g;N=ce(N,V.j(A));var k=((0<N.g.length?N.g[0]:N.h)>>>0).toString(M);if(N=V,U(N))return k+O;for(;6>k.length;)k="0"+k;O=k+O}},i.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function U(M){if(M.h!=0)return!1;for(var A=0;A<M.g.length;A++)if(M.g[A]!=0)return!1;return!0}function G(M){return M.h==-1}i.l=function(M){return M=ce(this,M),G(M)?-1:U(M)?0:1};function X(M){for(var A=M.g.length,N=[],O=0;O<A;O++)N[O]=~M.g[O];return new f(N,~M.h).add(w)}i.abs=function(){return G(this)?X(this):this},i.add=function(M){for(var A=Math.max(this.g.length,M.g.length),N=[],O=0,V=0;V<=A;V++){var k=O+(this.i(V)&65535)+(M.i(V)&65535),R=(k>>>16)+(this.i(V)>>>16)+(M.i(V)>>>16);O=R>>>16,k&=65535,R&=65535,N[V]=R<<16|k}return new f(N,N[N.length-1]&-2147483648?-1:0)};function ce(M,A){return M.add(X(A))}i.j=function(M){if(U(this)||U(M))return S;if(G(this))return G(M)?X(this).j(X(M)):X(X(this).j(M));if(G(M))return X(this.j(X(M)));if(0>this.l(x)&&0>M.l(x))return p(this.m()*M.m());for(var A=this.g.length+M.g.length,N=[],O=0;O<2*A;O++)N[O]=0;for(O=0;O<this.g.length;O++)for(var V=0;V<M.g.length;V++){var k=this.i(O)>>>16,R=this.i(O)&65535,$e=M.i(V)>>>16,Ke=M.i(V)&65535;N[2*O+2*V]+=R*Ke,ae(N,2*O+2*V),N[2*O+2*V+1]+=k*Ke,ae(N,2*O+2*V+1),N[2*O+2*V+1]+=R*$e,ae(N,2*O+2*V+1),N[2*O+2*V+2]+=k*$e,ae(N,2*O+2*V+2)}for(O=0;O<A;O++)N[O]=N[2*O+1]<<16|N[2*O];for(O=A;O<2*A;O++)N[O]=0;return new f(N,0)};function ae(M,A){for(;(M[A]&65535)!=M[A];)M[A+1]+=M[A]>>>16,M[A]&=65535,A++}function ie(M,A){this.g=M,this.h=A}function _e(M,A){if(U(A))throw Error("division by zero");if(U(M))return new ie(S,S);if(G(M))return A=_e(X(M),A),new ie(X(A.g),X(A.h));if(G(A))return A=_e(M,X(A)),new ie(X(A.g),A.h);if(30<M.g.length){if(G(M)||G(A))throw Error("slowDivide_ only works with positive integers.");for(var N=w,O=A;0>=O.l(M);)N=he(N),O=he(O);var V=we(N,1),k=we(O,1);for(O=we(O,2),N=we(N,2);!U(O);){var R=k.add(O);0>=R.l(M)&&(V=V.add(N),k=R),O=we(O,1),N=we(N,1)}return A=ce(M,V.j(A)),new ie(V,A)}for(V=S;0<=M.l(A);){for(N=Math.max(1,Math.floor(M.m()/A.m())),O=Math.ceil(Math.log(N)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),k=p(N),R=k.j(A);G(R)||0<R.l(M);)N-=O,k=p(N),R=k.j(A);U(k)&&(k=w),V=V.add(k),M=ce(M,R)}return new ie(V,M)}i.A=function(M){return _e(this,M).h},i.and=function(M){for(var A=Math.max(this.g.length,M.g.length),N=[],O=0;O<A;O++)N[O]=this.i(O)&M.i(O);return new f(N,this.h&M.h)},i.or=function(M){for(var A=Math.max(this.g.length,M.g.length),N=[],O=0;O<A;O++)N[O]=this.i(O)|M.i(O);return new f(N,this.h|M.h)},i.xor=function(M){for(var A=Math.max(this.g.length,M.g.length),N=[],O=0;O<A;O++)N[O]=this.i(O)^M.i(O);return new f(N,this.h^M.h)};function he(M){for(var A=M.g.length+1,N=[],O=0;O<A;O++)N[O]=M.i(O)<<1|M.i(O-1)>>>31;return new f(N,M.h)}function we(M,A){var N=A>>5;A%=32;for(var O=M.g.length-N,V=[],k=0;k<O;k++)V[k]=0<A?M.i(k+N)>>>A|M.i(k+N+1)<<32-A:M.i(k+N);return new f(V,M.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,HT=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=p,f.fromString=E,ns=f}).apply(typeof x_<"u"?x_:typeof self<"u"?self:typeof window<"u"?window:{});var Lc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var FT,Ll,YT,Hc,Cm,GT,XT,KT;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,y,v){return c==Array.prototype||c==Object.prototype||(c[y]=v.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Lc=="object"&&Lc];for(var y=0;y<c.length;++y){var v=c[y];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function o(c,y){if(y)e:{var v=s;c=c.split(".");for(var b=0;b<c.length-1;b++){var z=c[b];if(!(z in v))break e;v=v[z]}c=c[c.length-1],b=v[c],y=y(b),y!=b&&y!=null&&e(v,c,{configurable:!0,writable:!0,value:y})}}function u(c,y){c instanceof String&&(c+="");var v=0,b=!1,z={next:function(){if(!b&&v<c.length){var Y=v++;return{value:y(Y,c[Y]),done:!1}}return b=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}o("Array.prototype.values",function(c){return c||function(){return u(this,function(y,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function g(c){var y=typeof c;return y=y!="object"?y:c?Array.isArray(c)?"array":y:"null",y=="array"||y=="object"&&typeof c.length=="number"}function p(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function E(c,y,v){return c.call.apply(c.bind,arguments)}function S(c,y,v){if(!c)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var z=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(z,b),c.apply(y,z)}}return function(){return c.apply(y,arguments)}}function w(c,y,v){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:S,w.apply(null,arguments)}function x(c,y){var v=Array.prototype.slice.call(arguments,1);return function(){var b=v.slice();return b.push.apply(b,arguments),c.apply(this,b)}}function U(c,y){function v(){}v.prototype=y.prototype,c.aa=y.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(b,z,Y){for(var oe=Array(arguments.length-2),je=2;je<arguments.length;je++)oe[je-2]=arguments[je];return y.prototype[z].apply(b,oe)}}function G(c){const y=c.length;if(0<y){const v=Array(y);for(let b=0;b<y;b++)v[b]=c[b];return v}return[]}function X(c,y){for(let v=1;v<arguments.length;v++){const b=arguments[v];if(g(b)){const z=c.length||0,Y=b.length||0;c.length=z+Y;for(let oe=0;oe<Y;oe++)c[z+oe]=b[oe]}else c.push(b)}}class ce{constructor(y,v){this.i=y,this.j=v,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function ae(c){return/^[\s\xa0]*$/.test(c)}function ie(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function _e(c){return _e[" "](c),c}_e[" "]=function(){};var he=ie().indexOf("Gecko")!=-1&&!(ie().toLowerCase().indexOf("webkit")!=-1&&ie().indexOf("Edge")==-1)&&!(ie().indexOf("Trident")!=-1||ie().indexOf("MSIE")!=-1)&&ie().indexOf("Edge")==-1;function we(c,y,v){for(const b in c)y.call(v,c[b],b,c)}function M(c,y){for(const v in c)y.call(void 0,c[v],v,c)}function A(c){const y={};for(const v in c)y[v]=c[v];return y}const N="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(c,y){let v,b;for(let z=1;z<arguments.length;z++){b=arguments[z];for(v in b)c[v]=b[v];for(let Y=0;Y<N.length;Y++)v=N[Y],Object.prototype.hasOwnProperty.call(b,v)&&(c[v]=b[v])}}function V(c){var y=1;c=c.split(":");const v=[];for(;0<y&&c.length;)v.push(c.shift()),y--;return c.length&&v.push(c.join(":")),v}function k(c){m.setTimeout(()=>{throw c},0)}function R(){var c=Ve;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class $e{constructor(){this.h=this.g=null}add(y,v){const b=Ke.get();b.set(y,v),this.h?this.h.next=b:this.g=b,this.h=b}}var Ke=new ce(()=>new F,c=>c.reset());class F{constructor(){this.next=this.g=this.h=null}set(y,v){this.h=y,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let se,me=!1,Ve=new $e,D=()=>{const c=m.Promise.resolve(void 0);se=()=>{c.then(Z)}};var Z=()=>{for(var c;c=R();){try{c.h.call(c.g)}catch(v){k(v)}var y=Ke;y.j(c),100>y.h&&(y.h++,c.next=y.g,y.g=c)}me=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var K=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};m.addEventListener("test",v,y),m.removeEventListener("test",v,y)}catch{}return c}();function ye(c,y){if(te.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,b=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget){if(he){e:{try{_e(y.nodeName);var z=!0;break e}catch{}z=!1}z||(y=null)}}else v=="mouseover"?y=c.fromElement:v=="mouseout"&&(y=c.toElement);this.relatedTarget=y,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:le[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&ye.aa.h.call(this)}}U(ye,te);var le={2:"touch",3:"pen",4:"mouse"};ye.prototype.h=function(){ye.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Ie="closure_listenable_"+(1e6*Math.random()|0),Ce=0;function gt(c,y,v,b,z){this.listener=c,this.proxy=null,this.src=y,this.type=v,this.capture=!!b,this.ha=z,this.key=++Ce,this.da=this.fa=!1}function Ct(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function on(c){this.src=c,this.g={},this.h=0}on.prototype.add=function(c,y,v,b,z){var Y=c.toString();c=this.g[Y],c||(c=this.g[Y]=[],this.h++);var oe=xn(c,y,b,z);return-1<oe?(y=c[oe],v||(y.fa=!1)):(y=new gt(y,this.src,Y,!!b,z),y.fa=v,c.push(y)),y};function kn(c,y){var v=y.type;if(v in c.g){var b=c.g[v],z=Array.prototype.indexOf.call(b,y,void 0),Y;(Y=0<=z)&&Array.prototype.splice.call(b,z,1),Y&&(Ct(y),c.g[v].length==0&&(delete c.g[v],c.h--))}}function xn(c,y,v,b){for(var z=0;z<c.length;++z){var Y=c[z];if(!Y.da&&Y.listener==y&&Y.capture==!!v&&Y.ha==b)return z}return-1}var Zn="closure_lm_"+(1e6*Math.random()|0),gs={};function ki(c,y,v,b,z){if(Array.isArray(y)){for(var Y=0;Y<y.length;Y++)ki(c,y[Y],v,b,z);return null}return v=oa(v),c&&c[Ie]?c.K(y,v,p(b)?!!b.capture:!1,z):En(c,y,v,!1,b,z)}function En(c,y,v,b,z,Y){if(!y)throw Error("Invalid event type");var oe=p(z)?!!z.capture:!!z,je=xi(c);if(je||(c[Zn]=je=new on(c)),v=je.add(y,v,b,oe,Y),v.proxy)return v;if(b=Do(),v.proxy=b,b.src=c,b.listener=v,c.addEventListener)K||(z=oe),z===void 0&&(z=!1),c.addEventListener(y.toString(),b,z);else if(c.attachEvent)c.attachEvent(ut(y.toString()),b);else if(c.addListener&&c.removeListener)c.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Do(){function c(v){return y.call(c.src,c.listener,v)}const y=aa;return c}function sa(c,y,v,b,z){if(Array.isArray(y))for(var Y=0;Y<y.length;Y++)sa(c,y[Y],v,b,z);else b=p(b)?!!b.capture:!!b,v=oa(v),c&&c[Ie]?(c=c.i,y=String(y).toString(),y in c.g&&(Y=c.g[y],v=xn(Y,v,b,z),-1<v&&(Ct(Y[v]),Array.prototype.splice.call(Y,v,1),Y.length==0&&(delete c.g[y],c.h--)))):c&&(c=xi(c))&&(y=c.g[y.toString()],c=-1,y&&(c=xn(y,v,b,z)),(v=-1<c?y[c]:null)&&yr(v))}function yr(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[Ie])kn(y.i,c);else{var v=c.type,b=c.proxy;y.removeEventListener?y.removeEventListener(v,b,c.capture):y.detachEvent?y.detachEvent(ut(v),b):y.addListener&&y.removeListener&&y.removeListener(b),(v=xi(y))?(kn(v,c),v.h==0&&(v.src=null,y[Zn]=null)):Ct(c)}}}function ut(c){return c in gs?gs[c]:gs[c]="on"+c}function aa(c,y){if(c.da)c=!0;else{y=new ye(y,this);var v=c.listener,b=c.ha||c.src;c.fa&&yr(c),c=v.call(b,y)}return c}function xi(c){return c=c[Zn],c instanceof on?c:null}var vr="__closure_events_fn_"+(1e9*Math.random()>>>0);function oa(c){return typeof c=="function"?c:(c[vr]||(c[vr]=function(y){return c.handleEvent(y)}),c[vr])}function ct(){re.call(this),this.i=new on(this),this.M=this,this.F=null}U(ct,re),ct.prototype[Ie]=!0,ct.prototype.removeEventListener=function(c,y,v,b){sa(this,c,y,v,b)};function Ye(c,y){var v,b=c.F;if(b)for(v=[];b;b=b.F)v.push(b);if(c=c.M,b=y.type||y,typeof y=="string")y=new te(y,c);else if(y instanceof te)y.target=y.target||c;else{var z=y;y=new te(b,c),O(y,z)}if(z=!0,v)for(var Y=v.length-1;0<=Y;Y--){var oe=y.g=v[Y];z=Rt(oe,b,!0,y)&&z}if(oe=y.g=c,z=Rt(oe,b,!0,y)&&z,z=Rt(oe,b,!1,y)&&z,v)for(Y=0;Y<v.length;Y++)oe=y.g=v[Y],z=Rt(oe,b,!1,y)&&z}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var c=this.i,y;for(y in c.g){for(var v=c.g[y],b=0;b<v.length;b++)Ct(v[b]);delete c.g[y],c.h--}}this.F=null},ct.prototype.K=function(c,y,v,b){return this.i.add(String(c),y,!1,v,b)},ct.prototype.L=function(c,y,v,b){return this.i.add(String(c),y,!0,v,b)};function Rt(c,y,v,b){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();for(var z=!0,Y=0;Y<y.length;++Y){var oe=y[Y];if(oe&&!oe.da&&oe.capture==v){var je=oe.listener,zt=oe.ha||oe.src;oe.fa&&kn(c.i,oe),z=je.call(zt,b)!==!1&&z}}return z&&!b.defaultPrevented}function Nt(c,y,v){if(typeof c=="function")v&&(c=w(c,v));else if(c&&typeof c.handleEvent=="function")c=w(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:m.setTimeout(c,y||0)}function la(c){c.g=Nt(()=>{c.g=null,c.i&&(c.i=!1,la(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class ua extends re{constructor(y,v){super(),this.m=y,this.l=v,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:la(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Li(c){re.call(this),this.h=c,this.g={}}U(Li,re);var Ui=[];function zi(c){we(c.g,function(y,v){this.g.hasOwnProperty(v)&&yr(y)},c),c.g={}}Li.prototype.N=function(){Li.aa.N.call(this),zi(this)},Li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Cn=m.JSON.stringify,$=m.JSON.parse,fe=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function Le(){}Le.prototype.h=null;function ht(c){return c.h||(c.h=c.i())}function De(){}var Yt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gt(){te.call(this,"d")}U(Gt,te);function lt(){te.call(this,"c")}U(lt,te);var It={},Oo=null;function _r(){return Oo=Oo||new ct}It.La="serverreachability";function ca(c){te.call(this,It.La,c)}U(ca,te);function Er(c){const y=_r();Ye(y,new ca(y))}It.STAT_EVENT="statevent";function mu(c,y){te.call(this,It.STAT_EVENT,c),this.stat=y}U(mu,te);function ft(c){const y=_r();Ye(y,new mu(y,c))}It.Ma="timingevent";function Ut(c,y){te.call(this,It.Ma,c),this.size=y}U(Ut,te);function Dt(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},y)}function Ln(){this.g=!0}Ln.prototype.xa=function(){this.g=!1};function Mo(c,y,v,b,z,Y){c.info(function(){if(c.g)if(Y)for(var oe="",je=Y.split("&"),zt=0;zt<je.length;zt++){var Be=je[zt].split("=");if(1<Be.length){var Kt=Be[0];Be=Be[1];var jt=Kt.split("_");oe=2<=jt.length&&jt[1]=="type"?oe+(Kt+"="+Be+"&"):oe+(Kt+"=redacted&")}}else oe=null;else oe=Y;return"XMLHTTP REQ ("+b+") [attempt "+z+"]: "+y+`
`+v+`
`+oe})}function Yh(c,y,v,b,z,Y,oe){c.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+z+"]: "+y+`
`+v+`
`+Y+" "+oe})}function Tr(c,y,v,b){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+ys(c,v)+(b?" "+b:"")})}function pu(c,y){c.info(function(){return"TIMEOUT: "+y})}Ln.prototype.info=function(){};function ys(c,y){if(!c.g)return y;if(!y)return null;try{var v=JSON.parse(y);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var b=v[c];if(!(2>b.length)){var z=b[1];if(Array.isArray(z)&&!(1>z.length)){var Y=z[0];if(Y!="noop"&&Y!="stop"&&Y!="close")for(var oe=1;oe<z.length;oe++)z[oe]=""}}}}return Cn(v)}catch{return y}}var Sr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ji={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ci;function hi(){}U(hi,Le),hi.prototype.g=function(){return new XMLHttpRequest},hi.prototype.i=function(){return{}},ci=new hi;function pn(c,y,v,b){this.j=c,this.i=y,this.l=v,this.R=b||1,this.U=new Li(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tt}function Tt(){this.i=null,this.g="",this.h=!1}var Po={},ha={};function Jn(c,y,v){c.L=1,c.v=Ss(Rn(y)),c.m=v,c.P=!0,Bi(c,null)}function Bi(c,y){c.F=Date.now(),vs(c),c.A=Rn(c.v);var v=c.A,b=c.R;Array.isArray(b)||(b=[String(b)]),zo(v.i,"t",b),c.C=0,v=c.j.J,c.h=new Tt,c.g=Ou(c.j,v?y:null,!c.m),0<c.O&&(c.M=new ua(w(c.Y,c,c.g),c.O)),y=c.U,v=c.g,b=c.ca;var z="readystatechange";Array.isArray(z)||(z&&(Ui[0]=z.toString()),z=Ui);for(var Y=0;Y<z.length;Y++){var oe=ki(v,z[Y],b||y.handleEvent,!1,y.h||y);if(!oe)break;y.g[oe.key]=oe}y=c.H?A(c.H):{},c.m?(c.u||(c.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,y)):(c.u="GET",c.g.ea(c.A,c.u,null,y)),Er(),Mo(c.i,c.u,c.A,c.l,c.R,c.m)}pn.prototype.ca=function(c){c=c.target;const y=this.M;y&&Bn(c)==3?y.j():this.Y(c)},pn.prototype.Y=function(c){try{if(c==this.g)e:{const jt=Bn(this.g);var y=this.g.Ba();const Qi=this.g.Z();if(!(3>jt)&&(jt!=3||this.g&&(this.h.h||this.g.oa()||bu(this.g)))){this.J||jt!=4||y==7||(y==8||0>=Qi?Er(3):Er(2)),br(this);var v=this.g.Z();this.X=v;t:if(gu(this)){var b=bu(this.g);c="";var z=b.length,Y=Bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jt(this),fi(this);var oe="";break t}this.h.i=new m.TextDecoder}for(y=0;y<z;y++)this.h.h=!0,c+=this.h.i.decode(b[y],{stream:!(Y&&y==z-1)});b.length=0,this.h.g+=c,this.C=0,oe=this.h.g}else oe=this.g.oa();if(this.o=v==200,Yh(this.i,this.u,this.A,this.l,this.R,jt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var je,zt=this.g;if((je=zt.g?zt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ae(je)){var Be=je;break t}}Be=null}if(v=Be)Tr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_s(this,v);else{this.o=!1,this.s=3,ft(12),Jt(this),fi(this);break e}}if(this.P){v=!0;let en;for(;!this.J&&this.C<oe.length;)if(en=yu(this,oe),en==ha){jt==4&&(this.s=4,ft(14),v=!1),Tr(this.i,this.l,null,"[Incomplete Response]");break}else if(en==Po){this.s=4,ft(15),Tr(this.i,this.l,oe,"[Invalid Chunk]"),v=!1;break}else Tr(this.i,this.l,en,null),_s(this,en);if(gu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),jt!=4||oe.length!=0||this.h.h||(this.s=1,ft(16),v=!1),this.o=this.o&&v,!v)Tr(this.i,this.l,oe,"[Invalid Chunked Response]"),Jt(this),fi(this);else if(0<oe.length&&!this.W){this.W=!0;var Kt=this.j;Kt.g==this&&Kt.ba&&!Kt.M&&(Kt.j.info("Great, no buffering proxy detected. Bytes received: "+oe.length),Ds(Kt),Kt.M=!0,ft(11))}}else Tr(this.i,this.l,oe,null),_s(this,oe);jt==4&&Jt(this),this.o&&!this.J&&(jt==4?Nu(this.j,this):(this.o=!1,vs(this)))}else $h(this.g),v==400&&0<oe.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),Jt(this),fi(this)}}}catch{}finally{}};function gu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function yu(c,y){var v=c.C,b=y.indexOf(`
`,v);return b==-1?ha:(v=Number(y.substring(v,b)),isNaN(v)?Po:(b+=1,b+v>y.length?ha:(y=y.slice(b,b+v),c.C=b+v,y)))}pn.prototype.cancel=function(){this.J=!0,Jt(this)};function vs(c){c.S=Date.now()+c.I,vu(c,c.I)}function vu(c,y){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Dt(w(c.ba,c),y)}function br(c){c.B&&(m.clearTimeout(c.B),c.B=null)}pn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(pu(this.i,this.A),this.L!=2&&(Er(),ft(17)),Jt(this),this.s=2,fi(this)):vu(this,this.S-c)};function fi(c){c.j.G==0||c.J||Nu(c.j,c)}function Jt(c){br(c);var y=c.M;y&&typeof y.ma=="function"&&y.ma(),c.M=null,zi(c.U),c.g&&(y=c.g,c.g=null,y.abort(),y.ma())}function _s(c,y){try{var v=c.j;if(v.G!=0&&(v.g==c||Vo(v.h,c))){if(!c.K&&Vo(v.h,c)&&v.G==3){try{var b=v.Da.g.parse(y)}catch{b=null}if(Array.isArray(b)&&b.length==3){var z=b;if(z[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)ba(v),Ta(v);else break e;Fo(v),ft(18)}}else v.za=z[1],0<v.za-v.T&&37500>z[2]&&v.F&&v.v==0&&!v.C&&(v.C=Dt(w(v.Za,v),6e3));if(1>=da(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Ki(v,11)}else if((c.K||v.g==c)&&ba(v),!ae(y))for(z=v.Da.g.parse(y),y=0;y<z.length;y++){let Be=z[y];if(v.T=Be[0],Be=Be[1],v.G==2)if(Be[0]=="c"){v.K=Be[1],v.ia=Be[2];const Kt=Be[3];Kt!=null&&(v.la=Kt,v.j.info("VER="+v.la));const jt=Be[4];jt!=null&&(v.Aa=jt,v.j.info("SVER="+v.Aa));const Qi=Be[5];Qi!=null&&typeof Qi=="number"&&0<Qi&&(b=1.5*Qi,v.L=b,v.j.info("backChannelRequestTimeoutMs_="+b)),b=v;const en=c.g;if(en){const _i=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_i){var Y=b.h;Y.g||_i.indexOf("spdy")==-1&&_i.indexOf("quic")==-1&&_i.indexOf("h2")==-1||(Y.j=Y.l,Y.g=new Set,Y.h&&(ma(Y,Y.h),Y.h=null))}if(b.D){const Go=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;Go&&(b.ya=Go,et(b.I,b.D,Go))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),b=v;var oe=c;if(b.qa=Du(b,b.J?b.ia:null,b.W),oe.K){gn(b.h,oe);var je=oe,zt=b.L;zt&&(je.I=zt),je.B&&(br(je),vs(je)),b.g=oe}else Cu(b);0<v.i.length&&Sa(v)}else Be[0]!="stop"&&Be[0]!="close"||Ki(v,7);else v.G==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?Ki(v,7):qo(v):Be[0]!="noop"&&v.l&&v.l.ta(Be),v.v=0)}}Er(4)}catch{}}var _u=class{constructor(c,y){this.g=c,this.map=y}};function qi(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fa(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function da(c){return c.h?1:c.g?c.g.size:0}function Vo(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function ma(c,y){c.g?c.g.add(y):c.h=y}function gn(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}qi.prototype.cancel=function(){if(this.i=ko(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function ko(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const v of c.g.values())y=y.concat(v.D);return y}return G(c.i)}function Gh(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(g(c)){for(var y=[],v=c.length,b=0;b<v;b++)y.push(c[b]);return y}y=[],v=0;for(b in c)y[v++]=c[b];return y}function pa(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(g(c)||typeof c=="string"){var y=[];c=c.length;for(var v=0;v<c;v++)y.push(v);return y}y=[],v=0;for(const b in c)y[v++]=b;return y}}}function xo(c,y){if(c.forEach&&typeof c.forEach=="function")c.forEach(y,void 0);else if(g(c)||typeof c=="string")Array.prototype.forEach.call(c,y,void 0);else for(var v=pa(c),b=Gh(c),z=b.length,Y=0;Y<z;Y++)y.call(void 0,b[Y],v&&v[Y],c)}var Es=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xh(c,y){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var b=c[v].indexOf("="),z=null;if(0<=b){var Y=c[v].substring(0,b);z=c[v].substring(b+1)}else Y=c[v];y(Y,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function Ot(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Ot){this.h=c.h,Ts(this,c.j),this.o=c.o,this.g=c.g,wr(this,c.s),this.l=c.l;var y=c.i,v=new Fi;v.i=y.i,y.g&&(v.g=new Map(y.g),v.h=y.h),Hi(this,v),this.m=c.m}else c&&(y=String(c).match(Es))?(this.h=!1,Ts(this,y[1]||"",!0),this.o=Un(y[2]||""),this.g=Un(y[3]||"",!0),wr(this,y[4]),this.l=Un(y[5]||"",!0),Hi(this,y[6]||"",!0),this.m=Un(y[7]||"")):(this.h=!1,this.i=new Fi(null,this.h))}Ot.prototype.toString=function(){var c=[],y=this.j;y&&c.push(bs(y,Lo,!0),":");var v=this.g;return(v||y=="file")&&(c.push("//"),(y=this.o)&&c.push(bs(y,Lo,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(bs(v,v.charAt(0)=="/"?Kh:Uo,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",bs(v,ga)),c.join("")};function Rn(c){return new Ot(c)}function Ts(c,y,v){c.j=v?Un(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function wr(c,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);c.s=y}else c.s=null}function Hi(c,y,v){y instanceof Fi?(c.i=y,Tu(c.i,c.h)):(v||(y=bs(y,Qh)),c.i=new Fi(y,c.h))}function et(c,y,v){c.i.set(y,v)}function Ss(c){return et(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Un(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function bs(c,y,v){return typeof c=="string"?(c=encodeURI(c).replace(y,Eu),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Eu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Lo=/[#\/\?@]/g,Uo=/[#\?:]/g,Kh=/[#\?]/g,Qh=/[#\?@]/g,ga=/#/g;function Fi(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function zn(c){c.g||(c.g=new Map,c.h=0,c.i&&Xh(c.i,function(y,v){c.add(decodeURIComponent(y.replace(/\+/g," ")),v)}))}i=Fi.prototype,i.add=function(c,y){zn(this),this.i=null,c=di(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(y),this.h+=1,this};function Yi(c,y){zn(c),y=di(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function Gi(c,y){return zn(c),y=di(c,y),c.g.has(y)}i.forEach=function(c,y){zn(this),this.g.forEach(function(v,b){v.forEach(function(z){c.call(y,z,b,this)},this)},this)},i.na=function(){zn(this);const c=Array.from(this.g.values()),y=Array.from(this.g.keys()),v=[];for(let b=0;b<y.length;b++){const z=c[b];for(let Y=0;Y<z.length;Y++)v.push(y[b])}return v},i.V=function(c){zn(this);let y=[];if(typeof c=="string")Gi(this,c)&&(y=y.concat(this.g.get(di(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)y=y.concat(c[v])}return y},i.set=function(c,y){return zn(this),this.i=null,c=di(this,c),Gi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},i.get=function(c,y){return c?(c=this.V(c),0<c.length?String(c[0]):y):y};function zo(c,y,v){Yi(c,y),0<v.length&&(c.i=null,c.g.set(di(c,y),G(v)),c.h+=v.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(var v=0;v<y.length;v++){var b=y[v];const Y=encodeURIComponent(String(b)),oe=this.V(b);for(b=0;b<oe.length;b++){var z=Y;oe[b]!==""&&(z+="="+encodeURIComponent(String(oe[b]))),c.push(z)}}return this.i=c.join("&")};function di(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function Tu(c,y){y&&!c.j&&(zn(c),c.i=null,c.g.forEach(function(v,b){var z=b.toLowerCase();b!=z&&(Yi(this,b),zo(this,z,v))},c)),c.j=y}function ws(c,y){const v=new Ln;if(m.Image){const b=new Image;b.onload=x(jn,v,"TestLoadImage: loaded",!0,y,b),b.onerror=x(jn,v,"TestLoadImage: error",!1,y,b),b.onabort=x(jn,v,"TestLoadImage: abort",!1,y,b),b.ontimeout=x(jn,v,"TestLoadImage: timeout",!1,y,b),m.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=c}else y(!1)}function ei(c,y){const v=new Ln,b=new AbortController,z=setTimeout(()=>{b.abort(),jn(v,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:b.signal}).then(Y=>{clearTimeout(z),Y.ok?jn(v,"TestPingServer: ok",!0,y):jn(v,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(z),jn(v,"TestPingServer: error",!1,y)})}function jn(c,y,v,b,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),b(v)}catch{}}function As(){this.g=new fe}function mi(c,y,v){const b=v||"";try{xo(c,function(z,Y){let oe=z;p(z)&&(oe=Cn(z)),y.push(b+Y+"="+encodeURIComponent(oe))})}catch(z){throw y.push(b+"type="+encodeURIComponent("_badmap")),z}}function Ar(c){this.l=c.Ub||null,this.j=c.eb||!1}U(Ar,Le),Ar.prototype.g=function(){return new Xi(this.l,this.j)},Ar.prototype.i=function(c){return function(){return c}}({});function Xi(c,y){ct.call(this),this.D=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(Xi,ct),i=Xi.prototype,i.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=y,this.readyState=1,gi(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(y.body=c),(this.D||m).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pi(this)),this.readyState=0},i.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,gi(this)),this.g&&(this.readyState=3,gi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;jo(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function jo(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}i.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?pi(this):gi(this),this.readyState==3&&jo(this)}},i.Ra=function(c){this.g&&(this.response=this.responseText=c,pi(this))},i.Qa=function(c){this.g&&(this.response=c,pi(this))},i.ga=function(){this.g&&pi(this)};function pi(c){c.readyState=4,c.l=null,c.j=null,c.v=null,gi(c)}i.setRequestHeader=function(c,y){this.u.append(c,y)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var v=y.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=y.next();return c.join(`\r
`)};function gi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Bo(c){let y="";return we(c,function(v,b){y+=b,y+=":",y+=v,y+=`\r
`}),y}function Xt(c,y,v){e:{for(b in v){var b=!1;break e}b=!0}b||(v=Bo(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):et(c,y,v))}function We(c){ct.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(We,ct);var ya=/^https?$/i,Cs=["POST","PUT"];i=We.prototype,i.Ha=function(c){this.J=c},i.ea=function(c,y,v,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ci.g(),this.v=this.o?ht(this.o):ht(ci),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(Y){Su(this,Y);return}if(c=v||"",v=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var z in b)v.set(z,b[z]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const Y of b.keys())v.set(Y,b.get(Y));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(v.keys()).find(Y=>Y.toLowerCase()=="content-type"),z=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Cs,y,void 0))||b||z||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Y,oe]of v)this.g.setRequestHeader(Y,oe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Rs(this),this.u=!0,this.g.send(c),this.u=!1}catch(Y){Su(this,Y)}};function Su(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.m=5,va(c),yi(c)}function va(c){c.A||(c.A=!0,Ye(c,"complete"),Ye(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ye(this,"complete"),Ye(this,"abort"),yi(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yi(this,!0)),We.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?_a(this):this.bb())},i.bb=function(){_a(this)};function _a(c){if(c.h&&typeof f<"u"&&(!c.v[1]||Bn(c)!=4||c.Z()!=2)){if(c.u&&Bn(c)==4)Nt(c.Ea,0,c);else if(Ye(c,"readystatechange"),Bn(c)==4){c.h=!1;try{const oe=c.Z();e:switch(oe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var v;if(!(v=y)){var b;if(b=oe===0){var z=String(c.D).match(Es)[1]||null;!z&&m.self&&m.self.location&&(z=m.self.location.protocol.slice(0,-1)),b=!ya.test(z?z.toLowerCase():"")}v=b}if(v)Ye(c,"complete"),Ye(c,"success");else{c.m=6;try{var Y=2<Bn(c)?c.g.statusText:""}catch{Y=""}c.l=Y+" ["+c.Z()+"]",va(c)}}finally{yi(c)}}}}function yi(c,y){if(c.g){Rs(c);const v=c.g,b=c.v[0]?()=>{}:null;c.g=null,c.v=null,y||Ye(c,"ready");try{v.onreadystatechange=b}catch{}}}function Rs(c){c.I&&(m.clearTimeout(c.I),c.I=null)}i.isActive=function(){return!!this.g};function Bn(c){return c.g?c.g.readyState:0}i.Z=function(){try{return 2<Bn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),$(y)}};function bu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function $h(c){const y={};c=(c.g&&2<=Bn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<c.length;b++){if(ae(c[b]))continue;var v=V(c[b]);const z=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const Y=y[z]||[];y[z]=Y,Y.push(v)}M(y,function(b){return b.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ns(c,y,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||y}function Ea(c){this.Aa=0,this.i=[],this.j=new Ln,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ns("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ns("baseRetryDelayMs",5e3,c),this.cb=Ns("retryDelaySeedMs",1e4,c),this.Wa=Ns("forwardChannelMaxRetries",2,c),this.wa=Ns("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new qi(c&&c.concurrentRequestLimit),this.Da=new As,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Ea.prototype,i.la=8,i.G=1,i.connect=function(c,y,v,b){ft(0),this.W=c,this.H=y||{},v&&b!==void 0&&(this.H.OSID=v,this.H.OAID=b),this.F=this.X,this.I=Du(this,null,this.W),Sa(this)};function qo(c){if(wu(c),c.G==3){var y=c.U++,v=Rn(c.I);if(et(v,"SID",c.K),et(v,"RID",y),et(v,"TYPE","terminate"),Is(c,v),y=new pn(c,c.j,y),y.L=2,y.v=Ss(Rn(v)),v=!1,m.navigator&&m.navigator.sendBeacon)try{v=m.navigator.sendBeacon(y.v.toString(),"")}catch{}!v&&m.Image&&(new Image().src=y.v,v=!0),v||(y.g=Ou(y.j,null),y.g.ea(y.v)),y.F=Date.now(),vs(y)}Iu(c)}function Ta(c){c.g&&(Ds(c),c.g.cancel(),c.g=null)}function wu(c){Ta(c),c.u&&(m.clearTimeout(c.u),c.u=null),ba(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function Sa(c){if(!fa(c.h)&&!c.s){c.s=!0;var y=c.Ga;se||D(),me||(se(),me=!0),Ve.add(y,c),c.B=0}}function Wh(c,y){return da(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=y.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Dt(w(c.Ga,c,y),Yo(c,c.B)),c.B++,!0)}i.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const z=new pn(this,this.j,c);let Y=this.o;if(this.S&&(Y?(Y=A(Y),O(Y,this.S)):Y=this.S),this.m!==null||this.O||(z.H=Y,Y=null),this.P)e:{for(var y=0,v=0;v<this.i.length;v++){t:{var b=this.i[v];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(y+=b,4096<y){y=v;break e}if(y===4096||v===this.i.length-1){y=v+1;break e}}y=1e3}else y=1e3;y=Au(this,z,y),v=Rn(this.I),et(v,"RID",c),et(v,"CVER",22),this.D&&et(v,"X-HTTP-Session-Id",this.D),Is(this,v),Y&&(this.O?y="headers="+encodeURIComponent(String(Bo(Y)))+"&"+y:this.m&&Xt(v,this.m,Y)),ma(this.h,z),this.Ua&&et(v,"TYPE","init"),this.P?(et(v,"$req",y),et(v,"SID","null"),z.T=!0,Jn(z,v,null)):Jn(z,v,y),this.G=2}}else this.G==3&&(c?Ho(this,c):this.i.length==0||fa(this.h)||Ho(this))};function Ho(c,y){var v;y?v=y.l:v=c.U++;const b=Rn(c.I);et(b,"SID",c.K),et(b,"RID",v),et(b,"AID",c.T),Is(c,b),c.m&&c.o&&Xt(b,c.m,c.o),v=new pn(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),y&&(c.i=y.D.concat(c.i)),y=Au(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ma(c.h,v),Jn(v,b,y)}function Is(c,y){c.H&&we(c.H,function(v,b){et(y,b,v)}),c.l&&xo({},function(v,b){et(y,b,v)})}function Au(c,y,v){v=Math.min(c.i.length,v);var b=c.l?w(c.l.Na,c.l,c):null;e:{var z=c.i;let Y=-1;for(;;){const oe=["count="+v];Y==-1?0<v?(Y=z[0].g,oe.push("ofs="+Y)):Y=0:oe.push("ofs="+Y);let je=!0;for(let zt=0;zt<v;zt++){let Be=z[zt].g;const Kt=z[zt].map;if(Be-=Y,0>Be)Y=Math.max(0,z[zt].g-100),je=!1;else try{mi(Kt,oe,"req"+Be+"_")}catch{b&&b(Kt)}}if(je){b=oe.join("&");break e}}}return c=c.i.splice(0,v),y.D=c,b}function Cu(c){if(!c.g&&!c.u){c.Y=1;var y=c.Fa;se||D(),me||(se(),me=!0),Ve.add(y,c),c.v=0}}function Fo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Dt(w(c.Fa,c),Yo(c,c.v)),c.v++,!0)}i.Fa=function(){if(this.u=null,Ru(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Dt(w(this.ab,this),c)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),Ta(this),Ru(this))};function Ds(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function Ru(c){c.g=new pn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var y=Rn(c.qa);et(y,"RID","rpc"),et(y,"SID",c.K),et(y,"AID",c.T),et(y,"CI",c.F?"0":"1"),!c.F&&c.ja&&et(y,"TO",c.ja),et(y,"TYPE","xmlhttp"),Is(c,y),c.m&&c.o&&Xt(y,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=Ss(Rn(y)),v.m=null,v.P=!0,Bi(v,c)}i.Za=function(){this.C!=null&&(this.C=null,Ta(this),Fo(this),ft(19))};function ba(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function Nu(c,y){var v=null;if(c.g==y){ba(c),Ds(c),c.g=null;var b=2}else if(Vo(c.h,y))v=y.D,gn(c.h,y),b=1;else return;if(c.G!=0){if(y.o)if(b==1){v=y.m?y.m.length:0,y=Date.now()-y.F;var z=c.B;b=_r(),Ye(b,new Ut(b,v)),Sa(c)}else Cu(c);else if(z=y.s,z==3||z==0&&0<y.X||!(b==1&&Wh(c,y)||b==2&&Fo(c)))switch(v&&0<v.length&&(y=c.h,y.i=y.i.concat(v)),z){case 1:Ki(c,5);break;case 4:Ki(c,10);break;case 3:Ki(c,6);break;default:Ki(c,2)}}}function Yo(c,y){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*y}function Ki(c,y){if(c.j.info("Error code "+y),y==2){var v=w(c.fb,c),b=c.Xa;const z=!b;b=new Ot(b||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Ts(b,"https"),Ss(b),z?ws(b.toString(),v):ei(b.toString(),v)}else ft(2);c.G=0,c.l&&c.l.sa(y),Iu(c),wu(c)}i.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function Iu(c){if(c.G=0,c.ka=[],c.l){const y=ko(c.h);(y.length!=0||c.i.length!=0)&&(X(c.ka,y),X(c.ka,c.i),c.h.i.length=0,G(c.i),c.i.length=0),c.l.ra()}}function Du(c,y,v){var b=v instanceof Ot?Rn(v):new Ot(v);if(b.g!="")y&&(b.g=y+"."+b.g),wr(b,b.s);else{var z=m.location;b=z.protocol,y=y?y+"."+z.hostname:z.hostname,z=+z.port;var Y=new Ot(null);b&&Ts(Y,b),y&&(Y.g=y),z&&wr(Y,z),v&&(Y.l=v),b=Y}return v=c.D,y=c.ya,v&&y&&et(b,v,y),et(b,"VER",c.la),Is(c,b),b}function Ou(c,y,v){if(y&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Ca&&!c.pa?new We(new Ar({eb:v})):new We(c.pa),y.Ha(c.J),y}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mu(){}i=Mu.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function wa(){}wa.prototype.g=function(c,y){return new yn(c,y)};function yn(c,y){ct.call(this),this.g=new Ea(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(c?c["X-WebChannel-Client-Profile"]=y.va:c={"X-WebChannel-Client-Profile":y.va}),this.g.S=c,(c=y&&y.Sb)&&!ae(c)&&(this.g.m=c),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!ae(y)&&(this.g.D=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new vi(this)}U(yn,ct),yn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},yn.prototype.close=function(){qo(this.g)},yn.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=Cn(c),c=v);y.i.push(new _u(y.Ya++,c)),y.G==3&&Sa(y)},yn.prototype.N=function(){this.g.l=null,delete this.j,qo(this.g),delete this.g,yn.aa.N.call(this)};function Pu(c){Gt.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){e:{for(const v in y){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}U(Pu,Gt);function Vu(){lt.call(this),this.status=1}U(Vu,lt);function vi(c){this.g=c}U(vi,Mu),vi.prototype.ua=function(){Ye(this.g,"a")},vi.prototype.ta=function(c){Ye(this.g,new Pu(c))},vi.prototype.sa=function(c){Ye(this.g,new Vu)},vi.prototype.ra=function(){Ye(this.g,"b")},wa.prototype.createWebChannel=wa.prototype.g,yn.prototype.send=yn.prototype.o,yn.prototype.open=yn.prototype.m,yn.prototype.close=yn.prototype.close,KT=function(){return new wa},XT=function(){return _r()},GT=It,Cm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Sr.NO_ERROR=0,Sr.TIMEOUT=8,Sr.HTTP_ERROR=6,Hc=Sr,ji.COMPLETE="complete",YT=ji,De.EventType=Yt,Yt.OPEN="a",Yt.CLOSE="b",Yt.ERROR="c",Yt.MESSAGE="d",ct.prototype.listen=ct.prototype.K,Ll=De,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,FT=We}).apply(typeof Lc<"u"?Lc:typeof self<"u"?self:typeof window<"u"?window:{});const L_="@firebase/firestore",U_="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}hn.UNAUTHENTICATED=new hn(null),hn.GOOGLE_CREDENTIALS=new hn("google-credentials-uid"),hn.FIRST_PARTY=new hn("first-party-uid"),hn.MOCK_USER=new hn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bo="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new np("@firebase/firestore");function Ja(){return Js.logLevel}function pe(i,...e){if(Js.logLevel<=Ue.DEBUG){const t=e.map(sp);Js.debug(`Firestore (${bo}): ${i}`,...t)}}function mr(i,...e){if(Js.logLevel<=Ue.ERROR){const t=e.map(sp);Js.error(`Firestore (${bo}): ${i}`,...t)}}function ho(i,...e){if(Js.logLevel<=Ue.WARN){const t=e.map(sp);Js.warn(`Firestore (${bo}): ${i}`,...t)}}function sp(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,QT(i,s,t)}function QT(i,e,t){let s=`FIRESTORE (${bo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw mr(s),new Error(s)}function vt(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||QT(e,o,s)}function Fe(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends Vi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(hn.UNAUTHENTICATED))}shutdown(){}}class yR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class vR{constructor(e){this.t=e,this.currentUser=hn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){vt(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new is;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new is,e.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{pe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(pe("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new is)}},0),f()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(pe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(vt(typeof s.accessToken=="string",31837,{l:s}),new $T(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return vt(e===null||typeof e=="string",2055,{h:e}),new hn(e)}}class _R{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=hn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ER{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new _R(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(hn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class z_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TR{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,si(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){vt(this.o===void 0,3512);const s=u=>{u.error!=null&&pe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,pe("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{pe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):pe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new z_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(vt(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new z_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=SR(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function ze(i,e){return i<e?-1:i>e?1:0}function Rm(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const o=i.charAt(s),u=e.charAt(s);if(o!==u)return rm(o)===rm(u)?ze(o,u):rm(o)?1:-1}return ze(i.length,e.length)}const bR=55296,wR=57343;function rm(i){const e=i.charCodeAt(0);return e>=bR&&e<=wR}function fo(i,e,t){return i.length===e.length&&i.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_="__name__";class Ai{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ne(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Ne(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ai.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ai?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Ai.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return ze(e.length,t.length)}static compareSegments(e,t){const s=Ai.isNumericId(e),o=Ai.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Ai.extractNumericId(e).compare(Ai.extractNumericId(t)):Rm(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ns.fromString(e.substring(4,e.length-2))}}class ot extends Ai{construct(e,t,s){return new ot(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new de(ne.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new ot(t)}static emptyPath(){return new ot([])}}const AR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dn extends Ai{construct(e,t,s){return new dn(e,t,s)}static isValidIdentifier(e){return AR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===j_}static keyField(){return new dn([j_])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new de(ne.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let f=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new de(ne.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new de(ne.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new de(ne.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dn(t)}static emptyPath(){return new dn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.path=e}static fromPath(e){return new Te(ot.fromString(e))}static fromName(e){return new Te(ot.fromString(e).popFirst(5))}static empty(){return new Te(ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ot.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ot.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Te(new ot(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(i,e,t){if(!t)throw new de(ne.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function CR(i,e,t,s){if(e===!0&&s===!0)throw new de(ne.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function B_(i){if(!Te.isDocumentKey(i))throw new de(ne.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function q_(i){if(Te.isDocumentKey(i))throw new de(ne.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function ZT(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Sh(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Ne(12329,{type:typeof i})}function Kl(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new de(ne.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Sh(i);throw new de(ne.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(i,e){const t={typeString:i};return e&&(t.value=e),t}function au(i,e){if(!ZT(i))throw new de(ne.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const f=i[s];if(o&&typeof f!==o){t=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new de(ne.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=-62135596800,F_=1e6;class pt{static now(){return pt.fromMillis(Date.now())}static fromDate(e){return pt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*F_);return new pt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new de(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new de(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<H_)throw new de(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/F_}_compareTo(e){return this.seconds===e.seconds?ze(this.nanoseconds,e.nanoseconds):ze(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(au(e,pt._jsonSchema))return new pt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-H_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pt._jsonSchemaVersion="firestore/timestamp/1.0",pt._jsonSchema={type:Lt("string",pt._jsonSchemaVersion),seconds:Lt("number"),nanoseconds:Lt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{static fromTimestamp(e){return new Re(e)}static min(){return new Re(new pt(0,0))}static max(){return new Re(new pt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=-1;function RR(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Re.fromTimestamp(s===1e9?new pt(t+1,0):new pt(t,s));return new os(o,Te.empty(),e)}function NR(i){return new os(i.readTime,i.key,Ql)}class os{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new os(Re.min(),Te.empty(),Ql)}static max(){return new os(Re.max(),Te.empty(),Ql)}}function IR(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=Te.comparator(i.documentKey,e.documentKey),t!==0?t:ze(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class OR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bh(i){if(i.code!==ne.FAILED_PRECONDITION||i.message!==DR)throw i;pe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ne(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ee((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof ee?t:ee.resolve(t)}catch(t){return ee.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ee.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ee.reject(t)}static resolve(e){return new ee((t,s)=>{t(e)})}static reject(e){return new ee((t,s)=>{s(e)})}static waitFor(e){return new ee((t,s)=>{let o=0,u=0,f=!1;e.forEach(m=>{++o,m.next(()=>{++u,f&&u===o&&t()},g=>s(g))}),f=!0,u===o&&t()})}static or(e){let t=ee.resolve(!1);for(const s of e)t=t.next(o=>o?ee.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new ee((s,o)=>{const u=e.length,f=new Array(u);let m=0;for(let g=0;g<u;g++){const p=g;t(e[p]).next(E=>{f[p]=E,++m,m===u&&s(f)},E=>o(E))}})}static doWhile(e,t){return new ee((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function MR(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function wo(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}wh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=-1;function Ah(i){return i==null}function th(i){return i===0&&1/i==-1/0}function VR(i){return typeof i=="number"&&Number.isInteger(i)&&!th(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT="";function kR(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Y_(e)),e=xR(i.get(t),e);return Y_(e)}function xR(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case JT:t+="";break;default:t+=u}}return t}function Y_(i){return i+JT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Ao(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function e0(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,t){this.comparator=e,this.root=t||sn.EMPTY}insert(e,t){return new At(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,sn.BLACK,null,null))}remove(e){return new At(this.comparator,this.root.remove(e,this.comparator).copy(null,null,sn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Uc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Uc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Uc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Uc(this.root,e,this.comparator,!0)}}class Uc{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class sn{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??sn.RED,this.left=o??sn.EMPTY,this.right=u??sn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new sn(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return sn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return sn.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,sn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,sn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ne(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ne(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ne(27949);return e+(this.isRed()?0:1)}}sn.EMPTY=null,sn.RED=!0,sn.BLACK=!1;sn.EMPTY=new class{constructor(){this.size=0}get key(){throw Ne(57766)}get value(){throw Ne(16141)}get color(){throw Ne(16727)}get left(){throw Ne(29726)}get right(){throw Ne(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new sn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.comparator=e,this.data=new At(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new X_(this.data.getIterator())}getIteratorFrom(e){return new X_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Ft)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ft(this.comparator);return t.data=e,t}}class X_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.fields=e,e.sort(dn.comparator)}static empty(){return new Zr([])}unionWith(e){let t=new Ft(dn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Zr(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return fo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new t0("Invalid base64 string: "+u):u}}(e);return new an(t)}static fromUint8Array(e){const t=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(e);return new an(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ze(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}an.EMPTY_BYTE_STRING=new an("");const LR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ls(i){if(vt(!!i,39018),typeof i=="string"){let e=0;const t=LR.exec(i);if(vt(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:wt(i.seconds),nanos:wt(i.nanos)}}function wt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function us(i){return typeof i=="string"?an.fromBase64String(i):an.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0="server_timestamp",i0="__type__",r0="__previous_value__",s0="__local_write_time__";function op(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[i0])==null?void 0:s.stringValue)===n0}function Ch(i){const e=i.mapValue.fields[r0];return op(e)?Ch(e):e}function $l(i){const e=ls(i.mapValue.fields[s0].timestampValue);return new pt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,t,s,o,u,f,m,g,p,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=p,this.isUsingEmulator=E}}const nh="(default)";class Wl{constructor(e,t){this.projectId=e,this.database=t||nh}static empty(){return new Wl("","")}get isDefaultDatabase(){return this.database===nh}isEqual(e){return e instanceof Wl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0="__type__",zR="__max__",zc={mapValue:{}},o0="__vector__",ih="value";function cs(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?op(i)?4:BR(i)?9007199254740991:jR(i)?10:11:Ne(28295,{value:i})}function Pi(i,e){if(i===e)return!0;const t=cs(i);if(t!==cs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return $l(i).isEqual($l(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=ls(o.timestampValue),m=ls(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return us(o.bytesValue).isEqual(us(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return wt(o.geoPointValue.latitude)===wt(u.geoPointValue.latitude)&&wt(o.geoPointValue.longitude)===wt(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return wt(o.integerValue)===wt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=wt(o.doubleValue),m=wt(u.doubleValue);return f===m?th(f)===th(m):isNaN(f)&&isNaN(m)}return!1}(i,e);case 9:return fo(i.arrayValue.values||[],e.arrayValue.values||[],Pi);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(G_(f)!==G_(m))return!1;for(const g in f)if(f.hasOwnProperty(g)&&(m[g]===void 0||!Pi(f[g],m[g])))return!1;return!0}(i,e);default:return Ne(52216,{left:i})}}function Zl(i,e){return(i.values||[]).find(t=>Pi(t,e))!==void 0}function mo(i,e){if(i===e)return 0;const t=cs(i),s=cs(e);if(t!==s)return ze(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ze(i.booleanValue,e.booleanValue);case 2:return function(u,f){const m=wt(u.integerValue||u.doubleValue),g=wt(f.integerValue||f.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(i,e);case 3:return K_(i.timestampValue,e.timestampValue);case 4:return K_($l(i),$l(e));case 5:return Rm(i.stringValue,e.stringValue);case 6:return function(u,f){const m=us(u),g=us(f);return m.compareTo(g)}(i.bytesValue,e.bytesValue);case 7:return function(u,f){const m=u.split("/"),g=f.split("/");for(let p=0;p<m.length&&p<g.length;p++){const E=ze(m[p],g[p]);if(E!==0)return E}return ze(m.length,g.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,f){const m=ze(wt(u.latitude),wt(f.latitude));return m!==0?m:ze(wt(u.longitude),wt(f.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return Q_(i.arrayValue,e.arrayValue);case 10:return function(u,f){var w,x,U,G;const m=u.fields||{},g=f.fields||{},p=(w=m[ih])==null?void 0:w.arrayValue,E=(x=g[ih])==null?void 0:x.arrayValue,S=ze(((U=p==null?void 0:p.values)==null?void 0:U.length)||0,((G=E==null?void 0:E.values)==null?void 0:G.length)||0);return S!==0?S:Q_(p,E)}(i.mapValue,e.mapValue);case 11:return function(u,f){if(u===zc.mapValue&&f===zc.mapValue)return 0;if(u===zc.mapValue)return 1;if(f===zc.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),p=f.fields||{},E=Object.keys(p);g.sort(),E.sort();for(let S=0;S<g.length&&S<E.length;++S){const w=Rm(g[S],E[S]);if(w!==0)return w;const x=mo(m[g[S]],p[E[S]]);if(x!==0)return x}return ze(g.length,E.length)}(i.mapValue,e.mapValue);default:throw Ne(23264,{he:t})}}function K_(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return ze(i,e);const t=ls(i),s=ls(e),o=ze(t.seconds,s.seconds);return o!==0?o:ze(t.nanos,s.nanos)}function Q_(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=mo(t[o],s[o]);if(u)return u}return ze(t.length,s.length)}function po(i){return Nm(i)}function Nm(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=ls(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return us(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return Te.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Nm(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${Nm(t.fields[f])}`;return o+"}"}(i.mapValue):Ne(61005,{value:i})}function Fc(i){switch(cs(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ch(i);return e?16+Fc(e):16;case 5:return 2*i.stringValue.length;case 6:return us(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Fc(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return Ao(s.fields,(u,f)=>{o+=u.length+Fc(f)}),o}(i.mapValue);default:throw Ne(13486,{value:i})}}function $_(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function Im(i){return!!i&&"integerValue"in i}function lp(i){return!!i&&"arrayValue"in i}function W_(i){return!!i&&"nullValue"in i}function Z_(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function sm(i){return!!i&&"mapValue"in i}function jR(i){var t,s;return((s=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[a0])==null?void 0:s.stringValue)===o0}function ql(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return Ao(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=ql(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ql(i.arrayValue.values[t]);return e}return{...i}}function BR(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===zR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.value=e}static empty(){return new Ci({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!sm(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ql(t)}setAll(e){let t=dn.emptyPath(),s={},o=[];e.forEach((f,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}f?s[m.lastSegment()]=ql(f):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());sm(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Pi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];sm(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Ao(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new Ci(ql(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t,s,o,u,f,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(e){return new fn(e,0,Re.min(),Re.min(),Re.min(),Ci.empty(),0)}static newFoundDocument(e,t,s,o){return new fn(e,1,t,Re.min(),s,o,0)}static newNoDocument(e,t){return new fn(e,2,t,Re.min(),Re.min(),Ci.empty(),0)}static newUnknownDocument(e,t){return new fn(e,3,t,Re.min(),Re.min(),Ci.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ci.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ci.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof fn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new fn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,t){this.position=e,this.inclusive=t}}function J_(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],f=i.position[o];if(u.field.isKeyField()?s=Te.comparator(Te.fromName(f.referenceValue),t.key):s=mo(f,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function eE(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Pi(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,t="asc"){this.field=e,this.dir=t}}function qR(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{}class xt extends l0{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new FR(e,t,s):t==="array-contains"?new XR(e,s):t==="in"?new KR(e,s):t==="not-in"?new QR(e,s):t==="array-contains-any"?new $R(e,s):new xt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new YR(e,s):new GR(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(mo(t,this.value)):t!==null&&cs(this.value)===cs(t)&&this.matchesComparison(mo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ne(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class li extends l0{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new li(e,t)}matches(e){return u0(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function u0(i){return i.op==="and"}function c0(i){return HR(i)&&u0(i)}function HR(i){for(const e of i.filters)if(e instanceof li)return!1;return!0}function Dm(i){if(i instanceof xt)return i.field.canonicalString()+i.op.toString()+po(i.value);if(c0(i))return i.filters.map(e=>Dm(e)).join(",");{const e=i.filters.map(t=>Dm(t)).join(",");return`${i.op}(${e})`}}function h0(i,e){return i instanceof xt?function(s,o){return o instanceof xt&&s.op===o.op&&s.field.isEqual(o.field)&&Pi(s.value,o.value)}(i,e):i instanceof li?function(s,o){return o instanceof li&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,m)=>u&&h0(f,o.filters[m]),!0):!1}(i,e):void Ne(19439)}function f0(i){return i instanceof xt?function(t){return`${t.field.canonicalString()} ${t.op} ${po(t.value)}`}(i):i instanceof li?function(t){return t.op.toString()+" {"+t.getFilters().map(f0).join(" ,")+"}"}(i):"Filter"}class FR extends xt{constructor(e,t,s){super(e,t,s),this.key=Te.fromName(s.referenceValue)}matches(e){const t=Te.comparator(e.key,this.key);return this.matchesComparison(t)}}class YR extends xt{constructor(e,t){super(e,"in",t),this.keys=d0("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class GR extends xt{constructor(e,t){super(e,"not-in",t),this.keys=d0("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function d0(i,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(s=>Te.fromName(s.referenceValue))}class XR extends xt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return lp(t)&&Zl(t.arrayValue,this.value)}}class KR extends xt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Zl(this.value.arrayValue,t)}}class QR extends xt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Zl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Zl(this.value.arrayValue,t)}}class $R extends xt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!lp(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Zl(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,t=null,s=[],o=[],u=null,f=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Te=null}}function tE(i,e=null,t=[],s=[],o=null,u=null,f=null){return new WR(i,e,t,s,o,u,f)}function up(i){const e=Fe(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Dm(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Ah(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>po(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>po(s)).join(",")),e.Te=t}return e.Te}function cp(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!qR(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!h0(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!eE(i.startAt,e.startAt)&&eE(i.endAt,e.endAt)}function Om(i){return Te.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,t=null,s=[],o=[],u=null,f="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function ZR(i,e,t,s,o,u,f,m){return new ou(i,e,t,s,o,u,f,m)}function hp(i){return new ou(i)}function nE(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function m0(i){return i.collectionGroup!==null}function Hl(i){const e=Fe(i);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Ft(dn.comparator);return f.filters.forEach(g=>{g.getFlattenedFilters().forEach(p=>{p.isInequality()&&(m=m.add(p.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new sh(u,s))}),t.has(dn.keyField().canonicalString())||e.Ie.push(new sh(dn.keyField(),s))}return e.Ie}function Ri(i){const e=Fe(i);return e.Ee||(e.Ee=JR(e,Hl(i))),e.Ee}function JR(i,e){if(i.limitType==="F")return tE(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new sh(o.field,u)});const t=i.endAt?new rh(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new rh(i.startAt.position,i.startAt.inclusive):null;return tE(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function Mm(i,e){const t=i.filters.concat([e]);return new ou(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function Pm(i,e,t){return new ou(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Rh(i,e){return cp(Ri(i),Ri(e))&&i.limitType===e.limitType}function p0(i){return`${up(Ri(i))}|lt:${i.limitType}`}function eo(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>f0(o)).join(", ")}]`),Ah(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>po(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>po(o)).join(",")),`Target(${s})`}(Ri(i))}; limitType=${i.limitType})`}function Nh(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):Te.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of Hl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(f,m,g){const p=J_(f,m,g);return f.inclusive?p<=0:p<0}(s.startAt,Hl(s),o)||s.endAt&&!function(f,m,g){const p=J_(f,m,g);return f.inclusive?p>=0:p>0}(s.endAt,Hl(s),o))}(i,e)}function eN(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function g0(i){return(e,t)=>{let s=!1;for(const o of Hl(i)){const u=tN(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function tN(i,e,t){const s=i.field.isKeyField()?Te.comparator(e.key,t.key):function(u,f,m){const g=f.data.field(u),p=m.data.field(u);return g!==null&&p!==null?mo(g,p):Ne(42886)}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Ne(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ao(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return e0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN=new At(Te.comparator);function hs(){return nN}const y0=new At(Te.comparator);function Ul(...i){let e=y0;for(const t of i)e=e.insert(t.key,t);return e}function iN(i){let e=y0;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Xs(){return Fl()}function v0(){return Fl()}function Fl(){return new ra(i=>i.toString(),(i,e)=>i.isEqual(e))}const rN=new Ft(Te.comparator);function Ge(...i){let e=rN;for(const t of i)e=e.add(t);return e}const sN=new Ft(ze);function aN(){return sN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:th(e)?"-0":e}}function _0(i){return{integerValue:""+i}}function oN(i,e){return VR(e)?_0(e):fp(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(){this._=void 0}}function lN(i,e,t){return i instanceof Vm?function(o,u){const f={fields:{[i0]:{stringValue:n0},[s0]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&op(u)&&(u=Ch(u)),u&&(f.fields[r0]=u),{mapValue:f}}(t,e):i instanceof ah?E0(i,e):i instanceof oh?T0(i,e):function(o,u){const f=cN(o,u),m=iE(f)+iE(o.Ae);return Im(f)&&Im(o.Ae)?_0(m):fp(o.serializer,m)}(i,e)}function uN(i,e,t){return i instanceof ah?E0(i,e):i instanceof oh?T0(i,e):t}function cN(i,e){return i instanceof km?function(s){return Im(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Vm extends Ih{}class ah extends Ih{constructor(e){super(),this.elements=e}}function E0(i,e){const t=S0(e);for(const s of i.elements)t.some(o=>Pi(o,s))||t.push(s);return{arrayValue:{values:t}}}class oh extends Ih{constructor(e){super(),this.elements=e}}function T0(i,e){let t=S0(e);for(const s of i.elements)t=t.filter(o=>!Pi(o,s));return{arrayValue:{values:t}}}class km extends Ih{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function iE(i){return wt(i.integerValue||i.doubleValue)}function S0(i){return lp(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function hN(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof ah&&o instanceof ah||s instanceof oh&&o instanceof oh?fo(s.elements,o.elements,Pi):s instanceof km&&o instanceof km?Pi(s.Ae,o.Ae):s instanceof Vm&&o instanceof Vm}(i.transform,e.transform)}class $s{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new $s}static exists(e){return new $s(void 0,e)}static updateTime(e){return new $s(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yc(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class dp{}function b0(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new dN(i.key,$s.none()):new mp(i.key,i.data,$s.none());{const t=i.data,s=Ci.empty();let o=new Ft(dn.comparator);for(let u of e.fields)if(!o.has(u)){let f=t.field(u);f===null&&u.length>1&&(u=u.popLast(),f=t.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new Dh(i.key,s,new Zr(o.toArray()),$s.none())}}function fN(i,e,t){i instanceof mp?function(o,u,f){const m=o.value.clone(),g=sE(o.fieldTransforms,u,f.transformResults);m.setAll(g),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(i,e,t):i instanceof Dh?function(o,u,f){if(!Yc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=sE(o.fieldTransforms,u,f.transformResults),g=u.data;g.setAll(w0(o)),g.setAll(m),u.convertToFoundDocument(f.version,g).setHasCommittedMutations()}(i,e,t):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,e,t)}function Yl(i,e,t,s){return i instanceof mp?function(u,f,m,g){if(!Yc(u.precondition,f))return m;const p=u.value.clone(),E=aE(u.fieldTransforms,g,f);return p.setAll(E),f.convertToFoundDocument(f.version,p).setHasLocalMutations(),null}(i,e,t,s):i instanceof Dh?function(u,f,m,g){if(!Yc(u.precondition,f))return m;const p=aE(u.fieldTransforms,g,f),E=f.data;return E.setAll(w0(u)),E.setAll(p),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(S=>S.field))}(i,e,t,s):function(u,f,m){return Yc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(i,e,t)}function rE(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&fo(s,o,(u,f)=>hN(u,f))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class mp extends dp{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Dh extends dp{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function w0(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function sE(i,e,t){const s=new Map;vt(i.length===t.length,32656,{Re:t.length,Ve:i.length});for(let o=0;o<t.length;o++){const u=i[o],f=u.transform,m=e.data.field(u.field);s.set(u.field,uN(f,m,t[o]))}return s}function aE(i,e,t){const s=new Map;for(const o of i){const u=o.transform,f=t.data.field(o.field);s.set(o.field,lN(u,f,e))}return s}class dN extends dp{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&fN(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Yl(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Yl(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=v0();return this.mutations.forEach(o=>{const u=e.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=t.has(o.key)?null:m;const g=b0(f,m);g!==null&&s.set(o.key,g),f.isValidDocument()||f.convertToNoDocument(Re.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ge())}isEqual(e){return this.batchId===e.batchId&&fo(this.mutations,e.mutations,(t,s)=>rE(t,s))&&fo(this.baseMutations,e.baseMutations,(t,s)=>rE(t,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vt,He;function A0(i){if(i===void 0)return mr("GRPC error has no .code"),ne.UNKNOWN;switch(i){case Vt.OK:return ne.OK;case Vt.CANCELLED:return ne.CANCELLED;case Vt.UNKNOWN:return ne.UNKNOWN;case Vt.DEADLINE_EXCEEDED:return ne.DEADLINE_EXCEEDED;case Vt.RESOURCE_EXHAUSTED:return ne.RESOURCE_EXHAUSTED;case Vt.INTERNAL:return ne.INTERNAL;case Vt.UNAVAILABLE:return ne.UNAVAILABLE;case Vt.UNAUTHENTICATED:return ne.UNAUTHENTICATED;case Vt.INVALID_ARGUMENT:return ne.INVALID_ARGUMENT;case Vt.NOT_FOUND:return ne.NOT_FOUND;case Vt.ALREADY_EXISTS:return ne.ALREADY_EXISTS;case Vt.PERMISSION_DENIED:return ne.PERMISSION_DENIED;case Vt.FAILED_PRECONDITION:return ne.FAILED_PRECONDITION;case Vt.ABORTED:return ne.ABORTED;case Vt.OUT_OF_RANGE:return ne.OUT_OF_RANGE;case Vt.UNIMPLEMENTED:return ne.UNIMPLEMENTED;case Vt.DATA_LOSS:return ne.DATA_LOSS;default:return Ne(39323,{code:i})}}(He=Vt||(Vt={}))[He.OK=0]="OK",He[He.CANCELLED=1]="CANCELLED",He[He.UNKNOWN=2]="UNKNOWN",He[He.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",He[He.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",He[He.NOT_FOUND=5]="NOT_FOUND",He[He.ALREADY_EXISTS=6]="ALREADY_EXISTS",He[He.PERMISSION_DENIED=7]="PERMISSION_DENIED",He[He.UNAUTHENTICATED=16]="UNAUTHENTICATED",He[He.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",He[He.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",He[He.ABORTED=10]="ABORTED",He[He.OUT_OF_RANGE=11]="OUT_OF_RANGE",He[He.UNIMPLEMENTED=12]="UNIMPLEMENTED",He[He.INTERNAL=13]="INTERNAL",He[He.UNAVAILABLE=14]="UNAVAILABLE",He[He.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN=new ns([4294967295,4294967295],0);function oE(i){const e=yN().encode(i),t=new HT;return t.update(e),new Uint8Array(t.digest())}function lE(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ns([t,s],0),new ns([o,u],0)]}class pp{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new zl(`Invalid padding: ${t}`);if(s<0)throw new zl(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new zl(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new zl(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=ns.fromNumber(this.ge)}ye(e,t,s){let o=e.add(t.multiply(ns.fromNumber(s)));return o.compare(vN)===1&&(o=new ns([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=oE(e),[s,o]=lE(t);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);if(!this.we(f))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),f=new pp(u,o,t);return s.forEach(m=>f.insert(m)),f}insert(e){if(this.ge===0)return;const t=oE(e),[s,o]=lE(t);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);this.Se(f)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class zl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,lu.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Oh(Re.min(),o,new At(ze),hs(),Ge())}}class lu{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new lu(s,t,Ge(),Ge(),Ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,t,s,o){this.be=e,this.removedTargetIds=t,this.key=s,this.De=o}}class C0{constructor(e,t){this.targetId=e,this.Ce=t}}class R0{constructor(e,t,s=an.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class uE{constructor(){this.ve=0,this.Fe=cE(),this.Me=an.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ge(),t=Ge(),s=Ge();return this.Fe.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:Ne(38017,{changeType:u})}}),new lu(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=cE()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,vt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class _N{constructor(e){this.Ge=e,this.ze=new Map,this.je=hs(),this.Je=jc(),this.He=jc(),this.Ye=new At(ze)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:Ne(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((s,o)=>{this.rt(o)&&t(o)})}st(e){const t=e.targetId,s=e.Ce.count,o=this.ot(t);if(o){const u=o.target;if(Om(u))if(s===0){const f=new Te(u.path);this.et(t,f,fn.newNoDocument(f,Re.min()))}else vt(s===1,20013,{expectedCount:s});else{const f=this._t(t);if(f!==s){const m=this.ut(e),g=m?this.ct(m,e,f):1;if(g!==0){this.it(t);const p=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,p)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let f,m;try{f=us(s).toUint8Array()}catch(g){if(g instanceof t0)return ho("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new pp(f,o,u)}catch(g){return ho(g instanceof zl?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const f=this.Ge.ht(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),o++)}),o}Tt(e){const t=new Map;this.ze.forEach((u,f)=>{const m=this.ot(f);if(m){if(u.current&&Om(m.target)){const g=new Te(m.target.path);this.It(g).has(f)||this.Et(f,g)||this.et(f,g,fn.newNoDocument(g,e))}u.Be&&(t.set(f,u.ke()),u.qe())}});let s=Ge();this.He.forEach((u,f)=>{let m=!0;f.forEachWhile(g=>{const p=this.ot(g);return!p||p.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.je.forEach((u,f)=>f.setReadTime(e));const o=new Oh(e,t,this.Ye,this.je,s);return this.je=hs(),this.Je=jc(),this.He=jc(),this.Ye=new At(ze),o}Xe(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,t)?o.Qe(t,1):o.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new uE,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Ft(ze),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ft(ze),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||pe("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new uE),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function jc(){return new At(Te.comparator)}function cE(){return new At(Te.comparator)}const EN={asc:"ASCENDING",desc:"DESCENDING"},TN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SN={and:"AND",or:"OR"};class bN{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function xm(i,e){return i.useProto3Json||Ah(e)?e:{value:e}}function Lm(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function N0(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function so(i){return vt(!!i,49232),Re.fromTimestamp(function(t){const s=ls(t);return new pt(s.seconds,s.nanos)}(i))}function I0(i,e){return Um(i,e).canonicalString()}function Um(i,e){const t=function(o){return new ot(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function D0(i){const e=ot.fromString(i);return vt(k0(e),10190,{key:e.toString()}),e}function am(i,e){const t=D0(e);if(t.get(1)!==i.databaseId.projectId)throw new de(ne.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new de(ne.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new Te(M0(t))}function O0(i,e){return I0(i.databaseId,e)}function wN(i){const e=D0(i);return e.length===4?ot.emptyPath():M0(e)}function hE(i){return new ot(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function M0(i){return vt(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function AN(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:Ne(39313,{state:p})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(p,E){return p.useProto3Json?(vt(E===void 0||typeof E=="string",58123),an.fromBase64String(E||"")):(vt(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),an.fromUint8Array(E||new Uint8Array))}(i,e.targetChange.resumeToken),f=e.targetChange.cause,m=f&&function(p){const E=p.code===void 0?ne.UNKNOWN:A0(p.code);return new de(E,p.message||"")}(f);t=new R0(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=am(i,s.document.name),u=so(s.document.updateTime),f=s.document.createTime?so(s.document.createTime):Re.min(),m=new Ci({mapValue:{fields:s.document.fields}}),g=fn.newFoundDocument(o,u,f,m),p=s.targetIds||[],E=s.removedTargetIds||[];t=new Gc(p,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=am(i,s.document),u=s.readTime?so(s.readTime):Re.min(),f=fn.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Gc([],m,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=am(i,s.document),u=s.removedTargetIds||[];t=new Gc([],u,o,null)}else{if(!("filter"in e))return Ne(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new gN(o,u),m=s.targetId;t=new C0(m,f)}}return t}function CN(i,e){return{documents:[O0(i,e.path)]}}function RN(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=O0(i,o);const u=function(p){if(p.length!==0)return V0(li.create(p,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const f=function(p){if(p.length!==0)return p.map(E=>function(w){return{field:to(w.field),direction:DN(w.dir)}}(E))}(e.orderBy);f&&(t.structuredQuery.orderBy=f);const m=xm(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),{ft:t,parent:o}}function NN(i){let e=wN(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){vt(s===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=function(S){const w=P0(S);return w instanceof li&&c0(w)?w.getFilters():[w]}(t.where));let f=[];t.orderBy&&(f=function(S){return S.map(w=>function(U){return new sh(no(U.field),function(X){switch(X){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(U.direction))}(w))}(t.orderBy));let m=null;t.limit&&(m=function(S){let w;return w=typeof S=="object"?S.value:S,Ah(w)?null:w}(t.limit));let g=null;t.startAt&&(g=function(S){const w=!!S.before,x=S.values||[];return new rh(x,w)}(t.startAt));let p=null;return t.endAt&&(p=function(S){const w=!S.before,x=S.values||[];return new rh(x,w)}(t.endAt)),ZR(e,o,f,u,m,"F",g,p)}function IN(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ne(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function P0(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=no(t.unaryFilter.field);return xt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=no(t.unaryFilter.field);return xt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=no(t.unaryFilter.field);return xt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=no(t.unaryFilter.field);return xt.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ne(61313);default:return Ne(60726)}}(i):i.fieldFilter!==void 0?function(t){return xt.create(no(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ne(58110);default:return Ne(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return li.create(t.compositeFilter.filters.map(s=>P0(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ne(1026)}}(t.compositeFilter.op))}(i):Ne(30097,{filter:i})}function DN(i){return EN[i]}function ON(i){return TN[i]}function MN(i){return SN[i]}function to(i){return{fieldPath:i.canonicalString()}}function no(i){return dn.fromServerFormat(i.fieldPath)}function V0(i){return i instanceof xt?function(t){if(t.op==="=="){if(Z_(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NAN"}};if(W_(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Z_(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NOT_NAN"}};if(W_(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:to(t.field),op:ON(t.op),value:t.value}}}(i):i instanceof li?function(t){const s=t.getFilters().map(o=>V0(o));return s.length===1?s[0]:{compositeFilter:{op:MN(t.op),filters:s}}}(i):Ne(54877,{filter:i})}function k0(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,t,s,o,u=Re.min(),f=Re.min(),m=an.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new Jr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e){this.yt=e}}function VN(i){const e=NN({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Pm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(){this.Cn=new xN}addToCollectionParentIndex(e,t){return this.Cn.add(t),ee.resolve()}getCollectionParents(e,t){return ee.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return ee.resolve()}deleteFieldIndex(e,t){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,t){return ee.resolve()}getDocumentsMatchingTarget(e,t){return ee.resolve(null)}getIndexType(e,t){return ee.resolve(0)}getFieldIndexes(e,t){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,t){return ee.resolve(os.min())}getMinOffsetFromCollectionGroup(e,t){return ee.resolve(os.min())}updateCollectionGroup(e,t,s){return ee.resolve()}updateIndexEntries(e,t){return ee.resolve()}}class xN{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Ft(ot.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Ft(ot.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},x0=41943040;class wn{static withCacheSize(e){return new wn(e,wn.DEFAULT_COLLECTION_PERCENTILE,wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn.DEFAULT_COLLECTION_PERCENTILE=10,wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wn.DEFAULT=new wn(x0,wn.DEFAULT_COLLECTION_PERCENTILE,wn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wn.DISABLED=new wn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new go(0)}static cr(){return new go(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="LruGarbageCollector",LN=1048576;function mE([i,e],[t,s]){const o=ze(i,t);return o===0?ze(e,s):o}class UN{constructor(e){this.Ir=e,this.buffer=new Ft(mE),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();mE(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class zN{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){pe(dE,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){wo(t)?pe(dE,"Ignoring IndexedDB error during garbage collection: ",t):await bh(t)}await this.Vr(3e5)})}}class jN{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return ee.resolve(wh.ce);const s=new UN(t);return this.mr.forEachTarget(e,o=>s.Ar(o.sequenceNumber)).next(()=>this.mr.pr(e,o=>s.Ar(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.mr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(pe("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(fE)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(pe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fE):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let s,o,u,f,m,g,p;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(pe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,f=Date.now(),this.nthSequenceNumber(e,o))).next(S=>(s=S,m=Date.now(),this.removeTargets(e,s,t))).next(S=>(u=S,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(S=>(p=Date.now(),Ja()<=Ue.DEBUG&&pe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${S} documents in `+(p-g)+`ms
Total Duration: ${p-E}ms`),ee.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:S})))}}function BN(i,e){return new jN(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(){this.changes=new ra(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,fn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?ee.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Yl(s.mutation,o,Zr.empty(),pt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Ge()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Ge()){const o=Xs();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let f=Ul();return u.forEach((m,g)=>{f=f.insert(m,g.overlayedDocument)}),f}))}getOverlayedDocuments(e,t){const s=Xs();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Ge()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((f,m)=>{t.set(f,m)})})}computeViews(e,t,s,o){let u=hs();const f=Fl(),m=function(){return Fl()}();return t.forEach((g,p)=>{const E=s.get(p.key);o.has(p.key)&&(E===void 0||E.mutation instanceof Dh)?u=u.insert(p.key,p):E!==void 0?(f.set(p.key,E.mutation.getFieldMask()),Yl(E.mutation,p,E.mutation.getFieldMask(),pt.now())):f.set(p.key,Zr.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((p,E)=>f.set(p,E)),t.forEach((p,E)=>m.set(p,new HN(E,f.get(p)??null))),m))}recalculateAndSaveOverlays(e,t){const s=Fl();let o=new At((f,m)=>f-m),u=Ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(f=>{for(const m of f)m.keys().forEach(g=>{const p=t.get(g);if(p===null)return;let E=s.get(g)||Zr.empty();E=m.applyToLocalView(p,E),s.set(g,E);const S=(o.get(m.batchId)||Ge()).add(g);o=o.insert(m.batchId,S)})}).next(()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),p=g.key,E=g.value,S=v0();E.forEach(w=>{if(!u.has(w)){const x=b0(t.get(w),s.get(w));x!==null&&S.set(w,x),u=u.add(w)}}),f.push(this.documentOverlayCache.saveOverlays(e,p,S))}return ee.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(f){return Te.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):m0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):ee.resolve(Xs());let m=Ql,g=u;return f.next(p=>ee.forEach(p,(E,S)=>(m<S.largestBatchId&&(m=S.largestBatchId),u.get(E)?ee.resolve():this.remoteDocumentCache.getEntry(e,E).next(w=>{g=g.insert(E,w)}))).next(()=>this.populateOverlays(e,p,u)).next(()=>this.computeViews(e,g,p,Ge())).next(E=>({batchId:m,changes:iN(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Te(t)).next(s=>{let o=Ul();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let f=Ul();return this.indexManager.getCollectionParents(e,u).next(m=>ee.forEach(m,g=>{const p=function(S,w){return new ou(w,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,p,s,o).next(E=>{E.forEach((S,w)=>{f=f.insert(S,w)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(f=>{u.forEach((g,p)=>{const E=p.getKey();f.get(E)===null&&(f=f.insert(E,fn.newInvalidDocument(E)))});let m=Ul();return f.forEach((g,p)=>{const E=u.get(g);E!==void 0&&Yl(E.mutation,p,Zr.empty(),pt.now()),Nh(t,p)&&(m=m.insert(g,p))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return ee.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:so(o.createTime)}}(t)),ee.resolve()}getNamedQuery(e,t){return ee.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(o){return{name:o.name,query:VN(o.bundledQuery),readTime:so(o.readTime)}}(t)),ee.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(){this.overlays=new At(Te.comparator),this.qr=new Map}getOverlay(e,t){return ee.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Xs();return ee.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.St(e,t,u)}),ee.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.qr.delete(s)),ee.resolve()}getOverlaysForCollection(e,t,s){const o=Xs(),u=t.length+1,f=new Te(t.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const g=m.getNext().value,p=g.getKey();if(!t.isPrefixOf(p.path))break;p.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return ee.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new At((p,E)=>p-E);const f=this.overlays.getIterator();for(;f.hasNext();){const p=f.getNext().value;if(p.getKey().getCollectionGroup()===t&&p.largestBatchId>s){let E=u.get(p.largestBatchId);E===null&&(E=Xs(),u=u.insert(p.largestBatchId,E)),E.set(p.getKey(),p)}}const m=Xs(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((p,E)=>m.set(p,E)),!(m.size()>=o)););return ee.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new pN(t,s));let u=this.qr.get(t);u===void 0&&(u=Ge(),this.qr.set(t,u)),this.qr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(){this.sessionToken=an.EMPTY_BYTE_STRING}getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ee.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(){this.Qr=new Ft(Zt.$r),this.Ur=new Ft(Zt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const s=new Zt(e,t);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Gr(new Zt(e,t))}zr(e,t){e.forEach(s=>this.removeReference(s,t))}jr(e){const t=new Te(new ot([])),s=new Zt(t,e),o=new Zt(t,e+1),u=[];return this.Ur.forEachInRange([s,o],f=>{this.Gr(f),u.push(f.key)}),u}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new Te(new ot([])),s=new Zt(t,e),o=new Zt(t,e+1);let u=Ge();return this.Ur.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(e){const t=new Zt(e,0),s=this.Qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Zt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return Te.comparator(e.key,t.key)||ze(e.Yr,t.Yr)}static Kr(e,t){return ze(e.Yr,t.Yr)||Te.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Ft(Zt.$r)}checkEmpty(e){return ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new mN(u,t,s,o);this.mutationQueue.push(f);for(const m of o)this.Zr=this.Zr.add(new Zt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return ee.resolve(f)}lookupMutationBatch(e,t){return ee.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ei(s),u=o<0?0:o;return ee.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.mutationQueue.length===0?PR:this.tr-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Zt(t,0),o=new Zt(t,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],f=>{const m=this.Xr(f.Yr);u.push(m)}),ee.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Ft(ze);return t.forEach(o=>{const u=new Zt(o,0),f=new Zt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,f],m=>{s=s.add(m.Yr)})}),ee.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;Te.isDocumentKey(u)||(u=u.child(""));const f=new Zt(new Te(u),0);let m=new Ft(ze);return this.Zr.forEachWhile(g=>{const p=g.key.path;return!!s.isPrefixOf(p)&&(p.length===o&&(m=m.add(g.Yr)),!0)},f),ee.resolve(this.ti(m))}ti(e){const t=[];return e.forEach(s=>{const o=this.Xr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){vt(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return ee.forEach(t.mutations,o=>{const u=new Zt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Zr=s})}ir(e){}containsKey(e,t){const s=new Zt(t,0),o=this.Zr.firstAfterOrEqual(s);return ee.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e){this.ri=e,this.docs=function(){return new At(Te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,f=this.ri(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return ee.resolve(s?s.document.mutableCopy():fn.newInvalidDocument(t))}getEntries(e,t){let s=hs();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():fn.newInvalidDocument(o))}),ee.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=hs();const f=t.path,m=new Te(f.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:p,value:{document:E}}=g.getNext();if(!f.isPrefixOf(p.path))break;p.path.length>f.length+1||IR(NR(E),s)<=0||(o.has(E.key)||Nh(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return ee.resolve(u)}getAllFromCollectionGroup(e,t,s,o){Ne(9500)}ii(e,t){return ee.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new $N(this)}getSize(e){return ee.resolve(this.size)}}class $N extends qN{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)}),ee.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e){this.persistence=e,this.si=new ra(t=>up(t),cp),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.oi=0,this._i=new gp,this.targetCount=0,this.ai=go.ur()}forEachTarget(e,t){return this.si.forEach((s,o)=>t(o)),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.oi&&(this.oi=t),ee.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new go(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,ee.resolve()}updateTargetData(e,t){return this.Pr(t),ee.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.si.forEach((f,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.si.delete(f),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),ee.waitFor(u).next(()=>o)}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,t){const s=this.si.get(t)||null;return ee.resolve(s)}addMatchingKeys(e,t,s){return this._i.Wr(t,s),ee.resolve()}removeMatchingKeys(e,t,s){this._i.zr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(f=>{u.push(o.markPotentiallyOrphaned(e,f))}),ee.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),ee.resolve()}getMatchingKeysForTargetId(e,t){const s=this._i.Hr(t);return ee.resolve(s)}containsKey(e,t){return ee.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e,t){this.ui={},this.overlays={},this.ci=new wh(0),this.li=!1,this.li=!0,this.hi=new XN,this.referenceDelegate=e(this),this.Pi=new WN(this),this.indexManager=new kN,this.remoteDocumentCache=function(o){return new QN(o)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new PN(t),this.Ii=new YN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new GN,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ui[e.toKey()];return s||(s=new KN(t,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,s){pe("MemoryPersistence","Starting transaction:",e);const o=new ZN(this.ci.next());return this.referenceDelegate.Ei(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ai(e,t){return ee.or(Object.values(this.ui).map(s=>()=>s.containsKey(e,t)))}}class ZN extends OR{constructor(e){super(),this.currentSequenceNumber=e}}class yp{constructor(e){this.persistence=e,this.Ri=new gp,this.Vi=null}static mi(e){return new yp(e)}get fi(){if(this.Vi)return this.Vi;throw Ne(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.fi.delete(s.toString()),ee.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.fi.add(s.toString()),ee.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),ee.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(o=>this.fi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.fi.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.fi,s=>{const o=Te.fromPath(s);return this.gi(e,o).next(u=>{u||t.removeEntry(o,Re.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(s=>{s?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return ee.or([()=>ee.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class lh{constructor(e,t){this.persistence=e,this.pi=new ra(s=>kR(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=BN(this,t)}static mi(e,t){return new lh(e,t)}Ei(){}di(e){return ee.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}wr(e){let t=0;return this.pr(e,s=>{t++}).next(()=>t)}pr(e,t){return ee.forEach(this.pi,(s,o)=>this.br(e,s,o).next(u=>u?ee.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,f=>this.br(e,f,t).next(m=>{m||(s++,u.removeEntry(f,Re.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),ee.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}removeReference(e,t,s){return this.pi.set(s,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),ee.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Fc(e.data.value)),t}br(e,t,s){return ee.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.pi.get(t);return ee.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Es=s,this.ds=o}static As(e,t){let s=Ge(),o=Ge();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new vp(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return eC()?8:MR(mn())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ys(e,t).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.ws(e,t,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new JN;return this.Ss(e,t,f).next(m=>{if(u.result=m,this.Vs)return this.bs(e,t,f,m.size)})}).next(()=>u.result)}bs(e,t,s,o){return s.documentReadCount<this.fs?(Ja()<=Ue.DEBUG&&pe("QueryEngine","SDK will not create cache indexes for query:",eo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ee.resolve()):(Ja()<=Ue.DEBUG&&pe("QueryEngine","Query:",eo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(Ja()<=Ue.DEBUG&&pe("QueryEngine","The SDK decides to create cache indexes for query:",eo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ri(t))):ee.resolve())}ys(e,t){if(nE(t))return ee.resolve(null);let s=Ri(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Pm(t,null,"F"),s=Ri(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const f=Ge(...u);return this.ps.getDocuments(e,f).next(m=>this.indexManager.getMinOffset(e,s).next(g=>{const p=this.Ds(t,m);return this.Cs(t,p,f,g.readTime)?this.ys(e,Pm(t,null,"F")):this.vs(e,p,t,g)}))})))}ws(e,t,s,o){return nE(t)||o.isEqual(Re.min())?ee.resolve(null):this.ps.getDocuments(e,s).next(u=>{const f=this.Ds(t,u);return this.Cs(t,f,s,o)?ee.resolve(null):(Ja()<=Ue.DEBUG&&pe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),eo(t)),this.vs(e,f,t,RR(o,Ql)).next(m=>m))})}Ds(e,t){let s=new Ft(g0(e));return t.forEach((o,u)=>{Nh(e,u)&&(s=s.add(u))}),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return Ja()<=Ue.DEBUG&&pe("QueryEngine","Using full collection scan to execute query:",eo(t)),this.ps.getDocumentsMatchingQuery(e,t,os.min(),s)}vs(e,t,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="LocalStore",tI=3e8;class nI{constructor(e,t,s,o){this.persistence=e,this.Fs=t,this.serializer=o,this.Ms=new At(ze),this.xs=new ra(u=>up(u),cp),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new FN(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function iI(i,e,t,s){return new nI(i,e,t,s)}async function U0(i,e){const t=Fe(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Bs(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],m=[];let g=Ge();for(const p of o){f.push(p.batchId);for(const E of p.mutations)g=g.add(E.key)}for(const p of u){m.push(p.batchId);for(const E of p.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(s,g).next(p=>({Ls:p,removedBatchIds:f,addedBatchIds:m}))})})}function z0(i){const e=Fe(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function rI(i,e){const t=Fe(i),s=e.snapshotVersion;let o=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=t.Ns.newChangeBuffer({trackRemovals:!0});o=t.Ms;const m=[];e.targetChanges.forEach((E,S)=>{const w=o.get(S);if(!w)return;m.push(t.Pi.removeMatchingKeys(u,E.removedDocuments,S).next(()=>t.Pi.addMatchingKeys(u,E.addedDocuments,S)));let x=w.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(S)!==null?x=x.withResumeToken(an.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):E.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(E.resumeToken,s)),o=o.insert(S,x),function(G,X,ce){return G.resumeToken.approximateByteSize()===0||X.snapshotVersion.toMicroseconds()-G.snapshotVersion.toMicroseconds()>=tI?!0:ce.addedDocuments.size+ce.modifiedDocuments.size+ce.removedDocuments.size>0}(w,x,E)&&m.push(t.Pi.updateTargetData(u,x))});let g=hs(),p=Ge();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,E))}),m.push(sI(u,f,e.documentUpdates).next(E=>{g=E.ks,p=E.qs})),!s.isEqual(Re.min())){const E=t.Pi.getLastRemoteSnapshotVersion(u).next(S=>t.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(E)}return ee.waitFor(m).next(()=>f.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,g,p)).next(()=>g)}).then(u=>(t.Ms=o,u))}function sI(i,e,t){let s=Ge(),o=Ge();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let f=hs();return t.forEach((m,g)=>{const p=u.get(m);g.isFoundDocument()!==p.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(Re.min())?(e.removeEntry(m,g.readTime),f=f.insert(m,g)):!p.isValidDocument()||g.version.compareTo(p.version)>0||g.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(g),f=f.insert(m,g)):pe(_p,"Ignoring outdated watch update for ",m,". Current version:",p.version," Watch version:",g.version)}),{ks:f,qs:o}})}function aI(i,e){const t=Fe(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Pi.getTargetData(s,e).next(u=>u?(o=u,ee.resolve(o)):t.Pi.allocateTargetId(s).next(f=>(o=new Jr(e,f,"TargetPurposeListen",s.currentSequenceNumber),t.Pi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(s.targetId,s),t.xs.set(e,s.targetId)),s})}async function zm(i,e,t){const s=Fe(i),o=s.Ms.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!wo(f))throw f;pe(_p,`Failed to update sequence numbers for target ${e}: ${f}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function pE(i,e,t){const s=Fe(i);let o=Re.min(),u=Ge();return s.persistence.runTransaction("Execute query","readwrite",f=>function(g,p,E){const S=Fe(g),w=S.xs.get(E);return w!==void 0?ee.resolve(S.Ms.get(w)):S.Pi.getTargetData(p,E)}(s,f,Ri(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(f,m.targetId).next(g=>{u=g})}).next(()=>s.Fs.getDocumentsMatchingQuery(f,e,t?o:Re.min(),t?u:Ge())).next(m=>(oI(s,eN(e),m),{documents:m,Qs:u})))}function oI(i,e,t){let s=i.Os.get(e)||Re.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.Os.set(e,s)}class gE{constructor(){this.activeTargetIds=aN()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lI{constructor(){this.Mo=new gE,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,s){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new gE,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE="ConnectivityMonitor";class vE{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){pe(yE,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){pe(yE,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bc=null;function jm(){return Bc===null?Bc=function(){return 268435456+Math.round(2147483648*Math.random())}():Bc++,"0x"+Bc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="RestConnection",cI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class hI{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===nh?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,t,s,o,u){const f=jm(),m=this.zo(e,t.toUriEncodedString());pe(om,`Sending RPC '${e}' ${f}:`,m,s);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,o,u);const{host:p}=new URL(m),E=Eo(p);return this.Jo(e,m,g,s,E).then(S=>(pe(om,`Received RPC '${e}' ${f}: `,S),S),S=>{throw ho(om,`RPC '${e}' ${f} failed with error: `,S,"url: ",m,"request:",s),S})}Ho(e,t,s,o,u,f){return this.Go(e,t,s,o,u)}jo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}zo(e,t){const s=cI[e];return`${this.Uo}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="WebChannelConnection";class dI extends hI{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const f=jm();return new Promise((m,g)=>{const p=new FT;p.setWithCredentials(!0),p.listenOnce(YT.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Hc.NO_ERROR:const S=p.getResponseJson();pe(cn,`XHR for RPC '${e}' ${f} received:`,JSON.stringify(S)),m(S);break;case Hc.TIMEOUT:pe(cn,`RPC '${e}' ${f} timed out`),g(new de(ne.DEADLINE_EXCEEDED,"Request time out"));break;case Hc.HTTP_ERROR:const w=p.getStatus();if(pe(cn,`RPC '${e}' ${f} failed with status:`,w,"response text:",p.getResponseText()),w>0){let x=p.getResponseJson();Array.isArray(x)&&(x=x[0]);const U=x==null?void 0:x.error;if(U&&U.status&&U.message){const G=function(ce){const ae=ce.toLowerCase().replace(/_/g,"-");return Object.values(ne).indexOf(ae)>=0?ae:ne.UNKNOWN}(U.status);g(new de(G,U.message))}else g(new de(ne.UNKNOWN,"Server responded with status "+p.getStatus()))}else g(new de(ne.UNAVAILABLE,"Connection failed."));break;default:Ne(9055,{l_:e,streamId:f,h_:p.getLastErrorCode(),P_:p.getLastError()})}}finally{pe(cn,`RPC '${e}' ${f} completed.`)}});const E=JSON.stringify(o);pe(cn,`RPC '${e}' ${f} sending request:`,o),p.send(t,"POST",E,s,15)})}T_(e,t,s){const o=jm(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=KT(),m=XT(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(g.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const E=u.join("");pe(cn,`Creating RPC '${e}' stream ${o}: ${E}`,g);const S=f.createWebChannel(E,g);this.I_(S);let w=!1,x=!1;const U=new fI({Yo:X=>{x?pe(cn,`Not sending because RPC '${e}' stream ${o} is closed:`,X):(w||(pe(cn,`Opening RPC '${e}' stream ${o} transport.`),S.open(),w=!0),pe(cn,`RPC '${e}' stream ${o} sending:`,X),S.send(X))},Zo:()=>S.close()}),G=(X,ce,ae)=>{X.listen(ce,ie=>{try{ae(ie)}catch(_e){setTimeout(()=>{throw _e},0)}})};return G(S,Ll.EventType.OPEN,()=>{x||(pe(cn,`RPC '${e}' stream ${o} transport opened.`),U.o_())}),G(S,Ll.EventType.CLOSE,()=>{x||(x=!0,pe(cn,`RPC '${e}' stream ${o} transport closed`),U.a_(),this.E_(S))}),G(S,Ll.EventType.ERROR,X=>{x||(x=!0,ho(cn,`RPC '${e}' stream ${o} transport errored. Name:`,X.name,"Message:",X.message),U.a_(new de(ne.UNAVAILABLE,"The operation could not be completed")))}),G(S,Ll.EventType.MESSAGE,X=>{var ce;if(!x){const ae=X.data[0];vt(!!ae,16349);const ie=ae,_e=(ie==null?void 0:ie.error)||((ce=ie[0])==null?void 0:ce.error);if(_e){pe(cn,`RPC '${e}' stream ${o} received error:`,_e);const he=_e.status;let we=function(N){const O=Vt[N];if(O!==void 0)return A0(O)}(he),M=_e.message;we===void 0&&(we=ne.INTERNAL,M="Unknown error status: "+he+" with message "+_e.message),x=!0,U.a_(new de(we,M)),S.close()}else pe(cn,`RPC '${e}' stream ${o} received:`,ae),U.u_(ae)}}),G(m,GT.STAT_EVENT,X=>{X.stat===Cm.PROXY?pe(cn,`RPC '${e}' stream ${o} detected buffering proxy`):X.stat===Cm.NOPROXY&&pe(cn,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{U.__()},0),U}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function lm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(i){return new bN(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,t-s);o>0&&pe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E="PersistentStream";class mI{constructor(e,t,s,o,u,f,m,g){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new j0(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===ne.RESOURCE_EXHAUSTED?(mr(t.toString()),mr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===ne.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.D_===t&&this.G_(s,o)},s=>{e(()=>{const o=new de(ne.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)})})}G_(e,t){const s=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(o=>{s(()=>this.z_(o))}),this.stream.onMessage(o=>{s(()=>++this.F_==1?this.J_(o):this.onNext(o))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return pe(_E,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(pe(_E,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pI extends mI{constructor(e,t,s,o,u,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,f),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=AN(this.serializer,e),s=function(u){if(!("targetChange"in u))return Re.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?Re.min():f.readTime?so(f.readTime):Re.min()}(e);return this.listener.H_(t,s)}Y_(e){const t={};t.database=hE(this.serializer),t.addTarget=function(u,f){let m;const g=f.target;if(m=Om(g)?{documents:CN(u,g)}:{query:RN(u,g).ft},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=N0(u,f.resumeToken);const p=xm(u,f.expectedCount);p!==null&&(m.expectedCount=p)}else if(f.snapshotVersion.compareTo(Re.min())>0){m.readTime=Lm(u,f.snapshotVersion.toTimestamp());const p=xm(u,f.expectedCount);p!==null&&(m.expectedCount=p)}return m}(this.serializer,e);const s=IN(this.serializer,e);s&&(t.labels=s),this.q_(t)}Z_(e){const t={};t.database=hE(this.serializer),t.removeTarget=e,this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{}class yI extends gI{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new de(ne.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.Go(e,Um(t,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new de(ne.UNKNOWN,u.toString())})}Ho(e,t,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Ho(e,Um(t,s),o,f,m,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new de(ne.UNKNOWN,f.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class vI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(mr(t),this.aa=!1):pe("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo="RemoteStore";class _I{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo(f=>{s.enqueueAndForget(async()=>{cu(this)&&(pe(yo,"Restarting streams for network reachability change."),await async function(g){const p=Fe(g);p.Ea.add(4),await uu(p),p.Ra.set("Unknown"),p.Ea.delete(4),await Ph(p)}(this))})}),this.Ra=new vI(s,o)}}async function Ph(i){if(cu(i))for(const e of i.da)await e(!0)}async function uu(i){for(const e of i.da)await e(!1)}function B0(i,e){const t=Fe(i);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),bp(t)?Sp(t):Co(t).O_()&&Tp(t,e))}function Ep(i,e){const t=Fe(i),s=Co(t);t.Ia.delete(e),s.O_()&&q0(t,e),t.Ia.size===0&&(s.O_()?s.L_():cu(t)&&t.Ra.set("Unknown"))}function Tp(i,e){if(i.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Co(i).Y_(e)}function q0(i,e){i.Va.Ue(e),Co(i).Z_(e)}function Sp(i){i.Va=new _N({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),Co(i).start(),i.Ra.ua()}function bp(i){return cu(i)&&!Co(i).x_()&&i.Ia.size>0}function cu(i){return Fe(i).Ea.size===0}function H0(i){i.Va=void 0}async function EI(i){i.Ra.set("Online")}async function TI(i){i.Ia.forEach((e,t)=>{Tp(i,e)})}async function SI(i,e){H0(i),bp(i)?(i.Ra.ha(e),Sp(i)):i.Ra.set("Unknown")}async function bI(i,e,t){if(i.Ra.set("Online"),e instanceof R0&&e.state===2&&e.cause)try{await async function(o,u){const f=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.Ia.delete(m),o.Va.removeTarget(m))}(i,e)}catch(s){pe(yo,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await EE(i,s)}else if(e instanceof Gc?i.Va.Ze(e):e instanceof C0?i.Va.st(e):i.Va.tt(e),!t.isEqual(Re.min()))try{const s=await z0(i.localStore);t.compareTo(s)>=0&&await function(u,f){const m=u.Va.Tt(f);return m.targetChanges.forEach((g,p)=>{if(g.resumeToken.approximateByteSize()>0){const E=u.Ia.get(p);E&&u.Ia.set(p,E.withResumeToken(g.resumeToken,f))}}),m.targetMismatches.forEach((g,p)=>{const E=u.Ia.get(g);if(!E)return;u.Ia.set(g,E.withResumeToken(an.EMPTY_BYTE_STRING,E.snapshotVersion)),q0(u,g);const S=new Jr(E.target,g,p,E.sequenceNumber);Tp(u,S)}),u.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(s){pe(yo,"Failed to raise snapshot:",s),await EE(i,s)}}async function EE(i,e,t){if(!wo(e))throw e;i.Ea.add(1),await uu(i),i.Ra.set("Offline"),t||(t=()=>z0(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{pe(yo,"Retrying IndexedDB access"),await t(),i.Ea.delete(1),await Ph(i)})}async function TE(i,e){const t=Fe(i);t.asyncQueue.verifyOperationInProgress(),pe(yo,"RemoteStore received new credentials");const s=cu(t);t.Ea.add(3),await uu(t),s&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ph(t)}async function wI(i,e){const t=Fe(i);e?(t.Ea.delete(2),await Ph(t)):e||(t.Ea.add(2),await uu(t),t.Ra.set("Unknown"))}function Co(i){return i.ma||(i.ma=function(t,s,o){const u=Fe(t);return u.sa(),new pI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Xo:EI.bind(null,i),t_:TI.bind(null,i),r_:SI.bind(null,i),H_:bI.bind(null,i)}),i.da.push(async e=>{e?(i.ma.B_(),bp(i)?Sp(i):i.Ra.set("Unknown")):(await i.ma.stop(),H0(i))})),i.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new is,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const f=Date.now()+s,m=new wp(e,t,f,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(ne.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function F0(i,e){if(mr("AsyncQueue",`${e}: ${i}`),wo(i))return new de(ne.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{static emptySet(e){return new ao(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||Te.comparator(t.key,s.key):(t,s)=>Te.comparator(t.key,s.key),this.keyedMap=Ul(),this.sortedSet=new At(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ao)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new ao;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(){this.ga=new At(Te.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Ne(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,s)=>{e.push(s)}),e}}class vo{constructor(e,t,s,o,u,f,m,g,p){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=p}static fromInitialDocuments(e,t,s,o,u){const f=[];return t.forEach(m=>{f.push({type:0,doc:m})}),new vo(e,t,ao.emptySet(t),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Rh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class CI{constructor(){this.queries=bE(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Fe(t),u=o.queries;o.queries=bE(),u.forEach((f,m)=>{for(const g of m.Sa)g.onError(s)})})(this,new de(ne.ABORTED,"Firestore shutting down"))}}function bE(){return new ra(i=>p0(i),Rh)}async function Y0(i,e){const t=Fe(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new AI,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(o,!0);break;case 1:u.wa=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(f){const m=F0(f,`Initialization of query '${eo(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&Ap(t)}async function G0(i,e){const t=Fe(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const f=u.Sa.indexOf(e);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function RI(i,e){const t=Fe(i);let s=!1;for(const o of e){const u=o.query,f=t.queries.get(u);if(f){for(const m of f.Sa)m.Fa(o)&&(s=!0);f.wa=o}}s&&Ap(t)}function NI(i,e,t){const s=Fe(i),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function Ap(i){i.Ca.forEach(e=>{e.next()})}var Bm,wE;(wE=Bm||(Bm={})).Ma="default",wE.Cache="cache";class X0{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new vo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=vo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Bm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e){this.key=e}}class Q0{constructor(e){this.key=e}}class II{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ge(),this.mutatedKeys=Ge(),this.eu=g0(e),this.tu=new ao(this.eu)}get nu(){return this.Ya}ru(e,t){const s=t?t.iu:new SE,o=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,f=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,p=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,S)=>{const w=o.get(E),x=Nh(this.query,S)?S:null,U=!!w&&this.mutatedKeys.has(w.key),G=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let X=!1;w&&x?w.data.isEqual(x.data)?U!==G&&(s.track({type:3,doc:x}),X=!0):this.su(w,x)||(s.track({type:2,doc:x}),X=!0,(g&&this.eu(x,g)>0||p&&this.eu(x,p)<0)&&(m=!0)):!w&&x?(s.track({type:0,doc:x}),X=!0):w&&!x&&(s.track({type:1,doc:w}),X=!0,(g||p)&&(m=!0)),X&&(x?(f=f.add(x),u=G?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{tu:f,iu:s,Cs:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const f=e.iu.ya();f.sort((E,S)=>function(x,U){const G=X=>{switch(X){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ne(20277,{Rt:X})}};return G(x)-G(U)}(E.type,S.type)||this.eu(E.doc,S.doc)),this.ou(s),o=o??!1;const m=t&&!o?this._u():[],g=this.Xa.size===0&&this.current&&!o?1:0,p=g!==this.Za;return this.Za=g,f.length!==0||p?{snapshot:new vo(this.query,e.tu,u,f,e.mutatedKeys,g===0,p,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new SE,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ge(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const t=[];return e.forEach(s=>{this.Xa.has(s)||t.push(new Q0(s))}),this.Xa.forEach(s=>{e.has(s)||t.push(new K0(s))}),t}cu(e){this.Ya=e.Qs,this.Xa=Ge();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return vo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Cp="SyncEngine";class DI{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class OI{constructor(e){this.key=e,this.hu=!1}}class MI{constructor(e,t,s,o,u,f){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new ra(m=>p0(m),Rh),this.Iu=new Map,this.Eu=new Set,this.du=new At(Te.comparator),this.Au=new Map,this.Ru=new gp,this.Vu={},this.mu=new Map,this.fu=go.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function PI(i,e,t=!0){const s=eS(i);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await $0(s,e,t,!0),o}async function VI(i,e){const t=eS(i);await $0(t,e,!0,!1)}async function $0(i,e,t,s){const o=await aI(i.localStore,Ri(e)),u=o.targetId,f=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await kI(i,e,u,f==="current",o.resumeToken)),i.isPrimaryClient&&t&&B0(i.remoteStore,o),m}async function kI(i,e,t,s,o){i.pu=(S,w,x)=>async function(G,X,ce,ae){let ie=X.view.ru(ce);ie.Cs&&(ie=await pE(G.localStore,X.query,!1).then(({documents:M})=>X.view.ru(M,ie)));const _e=ae&&ae.targetChanges.get(X.targetId),he=ae&&ae.targetMismatches.get(X.targetId)!=null,we=X.view.applyChanges(ie,G.isPrimaryClient,_e,he);return CE(G,X.targetId,we.au),we.snapshot}(i,S,w,x);const u=await pE(i.localStore,e,!0),f=new II(e,u.Qs),m=f.ru(u.documents),g=lu.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),p=f.applyChanges(m,i.isPrimaryClient,g);CE(i,t,p.au);const E=new DI(e,t,f);return i.Tu.set(e,E),i.Iu.has(t)?i.Iu.get(t).push(e):i.Iu.set(t,[e]),p.snapshot}async function xI(i,e,t){const s=Fe(i),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter(f=>!Rh(f,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await zm(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Ep(s.remoteStore,o.targetId),qm(s,o.targetId)}).catch(bh)):(qm(s,o.targetId),await zm(s.localStore,o.targetId,!0))}async function LI(i,e){const t=Fe(i),s=t.Tu.get(e),o=t.Iu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Ep(t.remoteStore,s.targetId))}async function W0(i,e){const t=Fe(i);try{const s=await rI(t.localStore,e);e.targetChanges.forEach((o,u)=>{const f=t.Au.get(u);f&&(vt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?vt(f.hu,14607):o.removedDocuments.size>0&&(vt(f.hu,42227),f.hu=!1))}),await J0(t,s,e)}catch(s){await bh(s)}}function AE(i,e,t){const s=Fe(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Tu.forEach((u,f)=>{const m=f.view.va(e);m.snapshot&&o.push(m.snapshot)}),function(f,m){const g=Fe(f);g.onlineState=m;let p=!1;g.queries.forEach((E,S)=>{for(const w of S.Sa)w.va(m)&&(p=!0)}),p&&Ap(g)}(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function UI(i,e,t){const s=Fe(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Au.get(e),u=o&&o.key;if(u){let f=new At(Te.comparator);f=f.insert(u,fn.newNoDocument(u,Re.min()));const m=Ge().add(u),g=new Oh(Re.min(),new Map,new At(ze),f,m);await W0(s,g),s.du=s.du.remove(u),s.Au.delete(e),Rp(s)}else await zm(s.localStore,e,!1).then(()=>qm(s,e,t)).catch(bh)}function qm(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Iu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Iu.delete(e),i.isPrimaryClient&&i.Ru.jr(e).forEach(s=>{i.Ru.containsKey(s)||Z0(i,s)})}function Z0(i,e){i.Eu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(Ep(i.remoteStore,t),i.du=i.du.remove(e),i.Au.delete(t),Rp(i))}function CE(i,e,t){for(const s of t)s instanceof K0?(i.Ru.addReference(s.key,e),zI(i,s)):s instanceof Q0?(pe(Cp,"Document no longer in limbo: "+s.key),i.Ru.removeReference(s.key,e),i.Ru.containsKey(s.key)||Z0(i,s.key)):Ne(19791,{wu:s})}function zI(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Eu.has(s)||(pe(Cp,"New document in limbo: "+t),i.Eu.add(s),Rp(i))}function Rp(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const t=new Te(ot.fromString(e)),s=i.fu.next();i.Au.set(s,new OI(t)),i.du=i.du.insert(t,s),B0(i.remoteStore,new Jr(Ri(hp(t.path)),s,"TargetPurposeLimboResolution",wh.ce))}}async function J0(i,e,t){const s=Fe(i),o=[],u=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach((m,g)=>{f.push(s.pu(g,e,t).then(p=>{var E;if((p||t)&&s.isPrimaryClient){const S=p?!p.fromCache:(E=t==null?void 0:t.targetChanges.get(g.targetId))==null?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,S?"current":"not-current")}if(p){o.push(p);const S=vp.As(g.targetId,p);u.push(S)}}))}),await Promise.all(f),s.Pu.H_(o),await async function(g,p){const E=Fe(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>ee.forEach(p,w=>ee.forEach(w.Es,x=>E.persistence.referenceDelegate.addReference(S,w.targetId,x)).next(()=>ee.forEach(w.ds,x=>E.persistence.referenceDelegate.removeReference(S,w.targetId,x)))))}catch(S){if(!wo(S))throw S;pe(_p,"Failed to update sequence numbers: "+S)}for(const S of p){const w=S.targetId;if(!S.fromCache){const x=E.Ms.get(w),U=x.snapshotVersion,G=x.withLastLimboFreeSnapshotVersion(U);E.Ms=E.Ms.insert(w,G)}}}(s.localStore,u))}async function jI(i,e){const t=Fe(i);if(!t.currentUser.isEqual(e)){pe(Cp,"User change. New user:",e.toKey());const s=await U0(t.localStore,e);t.currentUser=e,function(u,f){u.mu.forEach(m=>{m.forEach(g=>{g.reject(new de(ne.CANCELLED,f))})}),u.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await J0(t,s.Ls)}}function BI(i,e){const t=Fe(i),s=t.Au.get(e);if(s&&s.hu)return Ge().add(s.key);{let o=Ge();const u=t.Iu.get(e);if(!u)return o;for(const f of u){const m=t.Tu.get(f);o=o.unionWith(m.view.nu)}return o}}function eS(i){const e=Fe(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=W0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=BI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UI.bind(null,e),e.Pu.H_=RI.bind(null,e.eventManager),e.Pu.yu=NI.bind(null,e.eventManager),e}class uh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Mh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return iI(this.persistence,new eI,e.initialUser,this.serializer)}Cu(e){return new L0(yp.mi,this.serializer)}Du(e){return new lI}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}uh.provider={build:()=>new uh};class qI extends uh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){vt(this.persistence.referenceDelegate instanceof lh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new zN(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?wn.withCacheSize(this.cacheSizeBytes):wn.DEFAULT;return new L0(s=>lh.mi(s,t),this.serializer)}}class Hm{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>AE(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=jI.bind(null,this.syncEngine),await wI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new CI}()}createDatastore(e){const t=Mh(e.databaseInfo.databaseId),s=function(u){return new dI(u)}(e.databaseInfo);return function(u,f,m,g){return new yI(u,f,m,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,f,m){return new _I(s,o,u,f,m)}(this.localStore,this.datastore,e.asyncQueue,t=>AE(this.syncEngine,t,0),function(){return vE.v()?new vE:new uI}())}createSyncEngine(e,t){return function(o,u,f,m,g,p,E){const S=new MI(o,u,f,m,g,p);return E&&(S.gu=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=Fe(o);pe(yo,"RemoteStore shutting down."),u.Ea.add(5),await uu(u),u.Aa.shutdown(),u.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Hm.provider={build:()=>new Hm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):mr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="FirestoreClient";class HI{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=hn.UNAUTHENTICATED,this.clientId=ap.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{pe(fs,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(pe(fs,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new is;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=F0(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function um(i,e){i.asyncQueue.verifyOperationInProgress(),pe(fs,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await U0(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function RE(i,e){i.asyncQueue.verifyOperationInProgress();const t=await FI(i);pe(fs,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>TE(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>TE(e.remoteStore,o)),i._onlineComponents=e}async function FI(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){pe(fs,"Using user provided OfflineComponentProvider");try{await um(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===ne.FAILED_PRECONDITION||o.code===ne.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;ho("Error using user provided cache. Falling back to memory cache: "+t),await um(i,new uh)}}else pe(fs,"Using default OfflineComponentProvider"),await um(i,new qI(void 0));return i._offlineComponents}async function YI(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(pe(fs,"Using user provided OnlineComponentProvider"),await RE(i,i._uninitializedComponentsProvider._online)):(pe(fs,"Using default OnlineComponentProvider"),await RE(i,new Hm))),i._onlineComponents}async function nS(i){const e=await YI(i),t=e.eventManager;return t.onListen=PI.bind(null,e.syncEngine),t.onUnlisten=xI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=VI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=LI.bind(null,e.syncEngine),t}function GI(i,e,t={}){const s=new is;return i.asyncQueue.enqueueAndForget(async()=>function(u,f,m,g,p){const E=new tS({next:w=>{E.Nu(),f.enqueueAndForget(()=>G0(u,S));const x=w.docs.has(m);!x&&w.fromCache?p.reject(new de(ne.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&w.fromCache&&g&&g.source==="server"?p.reject(new de(ne.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):p.resolve(w)},error:w=>p.reject(w)}),S=new X0(hp(m.path),E,{includeMetadataChanges:!0,qa:!0});return Y0(u,S)}(await nS(i),i.asyncQueue,e,t,s)),s.promise}function XI(i,e,t={}){const s=new is;return i.asyncQueue.enqueueAndForget(async()=>function(u,f,m,g,p){const E=new tS({next:w=>{E.Nu(),f.enqueueAndForget(()=>G0(u,S)),w.fromCache&&g.source==="server"?p.reject(new de(ne.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(w)},error:w=>p.reject(w)}),S=new X0(m,E,{includeMetadataChanges:!0,qa:!0});return Y0(u,S)}(await nS(i),i.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS="firestore.googleapis.com",IE=!0;class DE{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new de(ne.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=rS,this.ssl=IE}else this.host=e.host,this.ssl=e.ssl??IE;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=x0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<LN)throw new de(ne.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}CR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iS(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new de(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new de(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new de(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vh{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new DE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(ne.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(ne.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new DE(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new gR;switch(s.type){case"firstParty":return new ER(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new de(ne.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=NE.get(t);s&&(pe("ComponentProvider","Removing Datastore"),NE.delete(t),s.terminate())}(this),Promise.resolve()}}function KI(i,e,t,s={}){var p;i=Kl(i,Vh);const o=Eo(e),u=i._getSettings(),f={...u,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${t}`;o&&(VT(`https://${m}`),kT("Firestore",!0)),u.host!==rS&&u.host!==m&&ho("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...u,host:m,ssl:o,emulatorOptions:s};if(!Zs(g,f)&&(i._setSettings(g),s.mockUserToken)){let E,S;if(typeof s.mockUserToken=="string")E=s.mockUserToken,S=hn.MOCK_USER;else{E=Y1(s.mockUserToken,(p=i._app)==null?void 0:p.options.projectId);const w=s.mockUserToken.sub||s.mockUserToken.user_id;if(!w)throw new de(ne.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new hn(w)}i._authCredentials=new yR(new $T(E,S))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ro(this.firestore,e,this._query)}}class Ht{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ht(this.firestore,e,this._key)}toJSON(){return{type:Ht._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(au(t,Ht._jsonSchema))return new Ht(e,s||null,new Te(ot.fromString(t.referencePath)))}}Ht._jsonSchemaVersion="firestore/documentReference/1.0",Ht._jsonSchema={type:Lt("string",Ht._jsonSchemaVersion),referencePath:Lt("string")};class rs extends Ro{constructor(e,t,s){super(e,t,hp(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ht(this.firestore,null,new Te(e))}withConverter(e){return new rs(this.firestore,e,this._path)}}function sS(i,e,...t){if(i=An(i),WT("collection","path",e),i instanceof Vh){const s=ot.fromString(e,...t);return q_(s),new rs(i,null,s)}{if(!(i instanceof Ht||i instanceof rs))throw new de(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(ot.fromString(e,...t));return q_(s),new rs(i.firestore,null,s)}}function aS(i,e,...t){if(i=An(i),arguments.length===1&&(e=ap.newId()),WT("doc","path",e),i instanceof Vh){const s=ot.fromString(e,...t);return B_(s),new Ht(i,null,new Te(s))}{if(!(i instanceof Ht||i instanceof rs))throw new de(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(ot.fromString(e,...t));return B_(s),new Ht(i.firestore,i instanceof rs?i.converter:null,new Te(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE="AsyncQueue";class ME{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new j0(this,"async_queue_retry"),this._c=()=>{const s=lm();s&&pe(OE,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=lm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=lm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new is;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!wo(e))throw e;pe(OE,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,mr("INTERNAL UNHANDLED ERROR: ",PE(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const o=wp.createAndSchedule(this,e,t,s,u=>this.hc(u));return this.tc.push(o),o}uc(){this.nc&&Ne(47125,{Pc:PE(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function PE(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Np extends Vh{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new ME,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ME(e),this._firestoreClient=void 0,await e}}}function QI(i,e){const t=typeof i=="object"?i:rp(),s=typeof i=="string"?i:nh,o=To(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=H1("firestore");u&&KI(o,...u)}return o}function oS(i){if(i._terminated)throw new de(ne.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||$I(i),i._firestoreClient}function $I(i){var s,o,u;const e=i._freezeSettings(),t=function(m,g,p,E){return new UR(m,g,p,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,iS(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)}(i._databaseId,((s=i._app)==null?void 0:s.options.appId)||"",i._persistenceKey,e);i._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new HI(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qn(an.fromBase64String(e))}catch(t){throw new de(ne.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Qn(an.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Qn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(au(e,Qn._jsonSchema))return Qn.fromBase64String(e.bytes)}}Qn._jsonSchemaVersion="firestore/bytes/1.0",Qn._jsonSchema={type:Lt("string",Qn._jsonSchemaVersion),bytes:Lt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new de(ne.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new de(ne.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new de(ne.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ze(this._lat,e._lat)||ze(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ni._jsonSchemaVersion}}static fromJSON(e){if(au(e,Ni._jsonSchema))return new Ni(e.latitude,e.longitude)}}Ni._jsonSchemaVersion="firestore/geoPoint/1.0",Ni._jsonSchema={type:Lt("string",Ni._jsonSchemaVersion),latitude:Lt("number"),longitude:Lt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ii._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(au(e,Ii._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Ii(e.vectorValues);throw new de(ne.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ii._jsonSchemaVersion="firestore/vectorValue/1.0",Ii._jsonSchema={type:Lt("string",Ii._jsonSchemaVersion),vectorValues:Lt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=/^__.*__$/;function cS(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ne(40011,{Ac:i})}}class Ip{constructor(e,t,s,o,u,f){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Ip({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.gc(e),s}yc(e){var o;const t=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:t,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Fm(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(cS(this.Ac)&&WI.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class ZI{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Mh(e)}Cc(e,t,s,o=!1){return new Ip({Ac:e,methodName:t,Dc:s,path:dn.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function JI(i){const e=i._freezeSettings(),t=Mh(i._databaseId);return new ZI(i._databaseId,!!e.ignoreUndefinedProperties,t)}function e2(i,e,t,s=!1){return Dp(t,i.Cc(s?4:3,e))}function Dp(i,e){if(hS(i=An(i)))return n2("Unsupported field value:",e,i),t2(i,e);if(i instanceof uS)return function(s,o){if(!cS(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(s,o){const u=[];let f=0;for(const m of s){let g=Dp(m,o.wc(f));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),f++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=An(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return oN(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=pt.fromDate(s);return{timestampValue:Lm(o.serializer,u)}}if(s instanceof pt){const u=new pt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Lm(o.serializer,u)}}if(s instanceof Ni)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Qn)return{bytesValue:N0(o.serializer,s._byteString)};if(s instanceof Ht){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:I0(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Ii)return function(f,m){return{mapValue:{fields:{[a0]:{stringValue:o0},[ih]:{arrayValue:{values:f.toArray().map(p=>{if(typeof p!="number")throw m.Sc("VectorValues must only contain numeric values.");return fp(m.serializer,p)})}}}}}}(s,o);throw o.Sc(`Unsupported field value: ${Sh(s)}`)}(i,e)}function t2(i,e){const t={};return e0(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ao(i,(s,o)=>{const u=Dp(o,e.mc(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function hS(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof pt||i instanceof Ni||i instanceof Qn||i instanceof Ht||i instanceof uS||i instanceof Ii)}function n2(i,e,t){if(!hS(t)||!ZT(t)){const s=Sh(t);throw s==="an object"?e.Sc(i+" a custom object"):e.Sc(i+" "+s)}}const i2=new RegExp("[~\\*/\\[\\]]");function r2(i,e,t){if(e.search(i2)>=0)throw Fm(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new lS(...e.split("."))._internalPath}catch{throw Fm(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Fm(i,e,t,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||f)&&(g+=" (found",u&&(g+=` in field ${s}`),f&&(g+=` in document ${o}`),g+=")"),new de(ne.INVALID_ARGUMENT,m+i+g)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new s2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Op("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class s2 extends fS{data(){return super.data()}}function Op(i,e){return typeof e=="string"?r2(i,e):e instanceof lS?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a2(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new de(ne.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mp{}class o2 extends Mp{}function l2(i,e,...t){let s=[];e instanceof Mp&&s.push(e),s=s.concat(t),function(u){const f=u.filter(g=>g instanceof Pp).length,m=u.filter(g=>g instanceof kh).length;if(f>1||f>0&&m>0)throw new de(ne.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)i=o._apply(i);return i}class kh extends o2{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new kh(e,t,s)}_apply(e){const t=this._parse(e);return dS(e._query,t),new Ro(e.firestore,e.converter,Mm(e._query,t))}_parse(e){const t=JI(e.firestore);return function(u,f,m,g,p,E,S){let w;if(p.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new de(ne.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){kE(S,E);const U=[];for(const G of S)U.push(VE(g,u,G));w={arrayValue:{values:U}}}else w=VE(g,u,S)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||kE(S,E),w=e2(m,f,S,E==="in"||E==="not-in");return xt.create(p,E,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function u2(i,e,t){const s=e,o=Op("where",i);return kh._create(o,s,t)}class Pp extends Mp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Pp(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:li.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let f=o;const m=u.getFlattenedFilters();for(const g of m)dS(f,g),f=Mm(f,g)}(e._query,t),new Ro(e.firestore,e.converter,Mm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function VE(i,e,t){if(typeof(t=An(t))=="string"){if(t==="")throw new de(ne.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!m0(e)&&t.indexOf("/")!==-1)throw new de(ne.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(ot.fromString(t));if(!Te.isDocumentKey(s))throw new de(ne.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return $_(i,new Te(s))}if(t instanceof Ht)return $_(i,t._key);throw new de(ne.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Sh(t)}.`)}function kE(i,e){if(!Array.isArray(i)||i.length===0)throw new de(ne.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function dS(i,e){const t=function(o,u){for(const f of o)for(const m of f.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null}(i.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new de(ne.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new de(ne.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class c2{convertValue(e,t="none"){switch(cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return wt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(us(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ne(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ao(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var s,o,u;const t=(u=(o=(s=e.fields)==null?void 0:s[ih].arrayValue)==null?void 0:o.values)==null?void 0:u.map(f=>wt(f.doubleValue));return new Ii(t)}convertGeoPoint(e){return new Ni(wt(e.latitude),wt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ch(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp($l(e));default:return null}}convertTimestamp(e){const t=ls(e);return new pt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ot.fromString(e);vt(k0(s),9688,{name:e});const o=new Wl(s.get(1),s.get(3)),u=new Te(s.popFirst(5));return o.isEqual(t)||mr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}class jl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ws extends fS{constructor(e,t,s,o,u,f){super(e,t,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Xc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Op("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new de(ne.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ws._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ws._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ws._jsonSchema={type:Lt("string",Ws._jsonSchemaVersion),bundleSource:Lt("string","DocumentSnapshot"),bundleName:Lt("string"),bundle:Lt("string")};class Xc extends Ws{data(e={}){return super.data(e)}}class oo{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new jl(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Xc(this._firestore,this._userDataWriter,s.key,s,new jl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new de(ne.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(m=>{const g=new Xc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new jl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const g=new Xc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new jl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let p=-1,E=-1;return m.type!==0&&(p=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),E=f.indexOf(m.doc.key)),{type:h2(m.type),doc:g,oldIndex:p,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new de(ne.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=oo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ap.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function h2(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ne(61501,{type:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(i){i=Kl(i,Ht);const e=Kl(i.firestore,Np);return GI(oS(e),i._key).then(t=>f2(e,i,t))}oo._jsonSchemaVersion="firestore/querySnapshot/1.0",oo._jsonSchema={type:Lt("string",oo._jsonSchemaVersion),bundleSource:Lt("string","QuerySnapshot"),bundleName:Lt("string"),bundle:Lt("string")};class pS extends c2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ht(this.firestore,null,t)}}function gS(i){i=Kl(i,Ro);const e=Kl(i.firestore,Np),t=oS(e),s=new pS(e);return a2(i._query),XI(t,i._query).then(o=>new oo(e,s,i,o))}function f2(i,e,t){const s=t.docs.get(e._key),o=new pS(i);return new Ws(i,o,e._key,s,new jl(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){bo=o})(So),Mi(new oi("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new Np(new vR(s.getProvider("auth-internal")),new TR(f,s.getProvider("app-check-internal")),function(p,E){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new de(ne.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wl(p.options.projectId,E)}(f,o),f);return u={useFetchStreams:t,...u},m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),Wn(L_,U_,e),Wn(L_,U_,"esm2020")})();var d2="firebase",m2="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wn(d2,m2,"app");function yS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const p2=yS,vS=new ia("auth","Firebase",yS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch=new np("@firebase/auth");function g2(i,...e){ch.logLevel<=Ue.WARN&&ch.warn(`Auth (${So}): ${i}`,...e)}function Kc(i,...e){ch.logLevel<=Ue.ERROR&&ch.error(`Auth (${So}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(i,...e){throw Vp(i,...e)}function Di(i,...e){return Vp(i,...e)}function _S(i,e,t){const s={...p2(),[e]:t};return new ia("auth","Firebase",s).create(e,{appName:i.name})}function ss(i){return _S(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vp(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return vS.create(i,...e)}function Ee(i,e,...t){if(!i)throw Vp(e,...t)}function cr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Kc(e),new Error(e)}function pr(i,e){i||cr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function y2(){return xE()==="http:"||xE()==="https:"}function xE(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(y2()||W1()||"connection"in navigator)?navigator.onLine:!0}function _2(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,t){this.shortDelay=e,this.longDelay=t,pr(t>e,"Short delay should be less than long delay!"),this.isMobile=K1()||Z1()}get(){return v2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(i,e){pr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;cr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;cr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;cr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],S2=new hu(3e4,6e4);function ps(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function gr(i,e,t,s,o={}){return TS(i,o,async()=>{let u={},f={};s&&(e==="GET"?f=s:u={body:JSON.stringify(s)});const m=su({key:i.config.apiKey,...f}).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const p={method:e,headers:g,...u};return $1()||(p.referrerPolicy="no-referrer"),i.emulatorConfig&&Eo(i.emulatorConfig.host)&&(p.credentials="include"),ES.fetch()(await SS(i,i.config.apiHost,t,m),p)})}async function TS(i,e,t){i._canInitEmulator=!1;const s={...E2,...e};try{const o=new w2(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw qc(i,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[g,p]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw qc(i,"credential-already-in-use",f);if(g==="EMAIL_EXISTS")throw qc(i,"email-already-in-use",f);if(g==="USER_DISABLED")throw qc(i,"user-disabled",f);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw _S(i,E,p);ui(i,E)}}catch(o){if(o instanceof Vi)throw o;ui(i,"network-request-failed",{message:String(o)})}}async function xh(i,e,t,s,o={}){const u=await gr(i,e,t,s,o);return"mfaPendingCredential"in u&&ui(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function SS(i,e,t,s){const o=`${e}${t}?${s}`,u=i,f=u.config.emulator?kp(i.config,o):`${i.config.apiScheme}://${o}`;return T2.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function b2(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class w2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Di(this.auth,"network-request-failed")),S2.get())})}}function qc(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Di(i,e,s);return o.customData._tokenResponse=t,o}function LE(i){return i!==void 0&&i.enterprise!==void 0}class A2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return b2(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function C2(i,e){return gr(i,"GET","/v2/recaptchaConfig",ps(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R2(i,e){return gr(i,"POST","/v1/accounts:delete",e)}async function fh(i,e){return gr(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function N2(i,e=!1){const t=An(i),s=await t.getIdToken(e),o=xp(s);Ee(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Gl(cm(o.auth_time)),issuedAtTime:Gl(cm(o.iat)),expirationTime:Gl(cm(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function cm(i){return Number(i)*1e3}function xp(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Kc("JWT malformed, contained fewer than 3 sections"),null;try{const o=DT(t);return o?JSON.parse(o):(Kc("Failed to decode base64 JWT payload"),null)}catch(o){return Kc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function UE(i){const e=xp(i);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jl(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Vi&&I2(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function I2({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gl(this.lastLoginAt),this.creationTime=Gl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dh(i){var S;const e=i.auth,t=await i.getIdToken(),s=await Jl(i,fh(e,{idToken:t}));Ee(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const u=(S=o.providerUserInfo)!=null&&S.length?bS(o.providerUserInfo):[],f=M2(i.providerData,u),m=i.isAnonymous,g=!(i.email&&o.passwordHash)&&!(f!=null&&f.length),p=m?g:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new Ym(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(i,E)}async function O2(i){const e=An(i);await dh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function M2(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function bS(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P2(i,e){const t=await TS(i,{},async()=>{const s=su({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,f=await SS(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return i.emulatorConfig&&Eo(i.emulatorConfig.host)&&(g.credentials="include"),ES.fetch()(f,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function V2(i,e){return gr(i,"POST","/v2/accounts:revokeToken",ps(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):UE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=UE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await P2(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,f=new lo;return s&&(Ee(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(Ee(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(Ee(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new lo,this.toJSON())}_performRefresh(){return cr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(i,e){Ee(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class ai{constructor({uid:e,auth:t,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new D2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ym(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Jl(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return N2(this,e)}reload(){return O2(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ai({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await dh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(si(this.auth.app))return Promise.reject(ss(this.auth));const e=await this.getIdToken();return await Jl(this,R2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,o=t.email??void 0,u=t.phoneNumber??void 0,f=t.photoURL??void 0,m=t.tenantId??void 0,g=t._redirectEventId??void 0,p=t.createdAt??void 0,E=t.lastLoginAt??void 0,{uid:S,emailVerified:w,isAnonymous:x,providerData:U,stsTokenManager:G}=t;Ee(S&&G,e,"internal-error");const X=lo.fromJSON(this.name,G);Ee(typeof S=="string",e,"internal-error"),Xr(s,e.name),Xr(o,e.name),Ee(typeof w=="boolean",e,"internal-error"),Ee(typeof x=="boolean",e,"internal-error"),Xr(u,e.name),Xr(f,e.name),Xr(m,e.name),Xr(g,e.name),Xr(p,e.name),Xr(E,e.name);const ce=new ai({uid:S,auth:e,email:o,emailVerified:w,displayName:s,isAnonymous:x,photoURL:f,phoneNumber:u,tenantId:m,stsTokenManager:X,createdAt:p,lastLoginAt:E});return U&&Array.isArray(U)&&(ce.providerData=U.map(ae=>({...ae}))),g&&(ce._redirectEventId=g),ce}static async _fromIdTokenResponse(e,t,s=!1){const o=new lo;o.updateFromServerResponse(t);const u=new ai({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await dh(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];Ee(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?bS(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new lo;m.updateFromIdToken(s);const g=new ai({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:f}),p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Ym(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,p),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=new Map;function hr(i){pr(i instanceof Function,"Expected a class definition");let e=zE.get(i);return e?(pr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,zE.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}wS.type="NONE";const jE=wS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(i,e,t){return`firebase:${i}:${e}:${t}`}class uo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Qc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Qc("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await fh(this.auth,{idToken:e}).catch(()=>{});return t?ai._fromGetAccountInfoResponse(this.auth,t,e):null}return ai._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new uo(hr(jE),e,s);const o=(await Promise.all(t.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let u=o[0]||hr(jE);const f=Qc(s,e.config.apiKey,e.name);let m=null;for(const p of t)try{const E=await p._get(f);if(E){let S;if(typeof E=="string"){const w=await fh(e,{idToken:E}).catch(()=>{});if(!w)break;S=await ai._fromGetAccountInfoResponse(e,w,E)}else S=ai._fromJSON(e,E);p!==u&&(m=S),u=p;break}}catch{}const g=o.filter(p=>p._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new uo(u,e,s):(u=g[0],m&&await u._set(f,m.toJSON()),await Promise.all(t.map(async p=>{if(p!==u)try{await p._remove(f)}catch{}})),new uo(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(NS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(AS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(DS(e))return"Blackberry";if(OS(e))return"Webos";if(CS(e))return"Safari";if((e.includes("chrome/")||RS(e))&&!e.includes("edge/"))return"Chrome";if(IS(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function AS(i=mn()){return/firefox\//i.test(i)}function CS(i=mn()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function RS(i=mn()){return/crios\//i.test(i)}function NS(i=mn()){return/iemobile/i.test(i)}function IS(i=mn()){return/android/i.test(i)}function DS(i=mn()){return/blackberry/i.test(i)}function OS(i=mn()){return/webos/i.test(i)}function Lp(i=mn()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function k2(i=mn()){var e;return Lp(i)&&!!((e=window.navigator)!=null&&e.standalone)}function x2(){return J1()&&document.documentMode===10}function MS(i=mn()){return Lp(i)||IS(i)||OS(i)||DS(i)||/windows phone/i.test(i)||NS(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(i,e=[]){let t;switch(i){case"Browser":t=BE(mn());break;case"Worker":t=`${BE(mn())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${So}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((f,m)=>{try{const g=e(u);f(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U2(i,e={}){return gr(i,"GET","/v2/passwordPolicy",ps(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2=6;class j2{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??z2,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qE(this),this.idTokenSubscription=new qE(this),this.beforeStateQueue=new L2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=hr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await uo.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await fh(this,{idToken:e}),s=await ai._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(si(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,g=await this.tryRedirectSignIn(e);(!f||f===m)&&(g!=null&&g.user)&&(s=g.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(f){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await dh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(si(this.app))return Promise.reject(ss(this));const t=e?An(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return si(this.app)?Promise.reject(ss(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return si(this.app)?Promise.reject(ss(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await U2(this),t=new j2(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ia("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await V2(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&hr(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await uo.create(this,[hr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{f=!0,g()}}else{const g=e.addObserver(t);return()=>{f=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=PS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(si(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&g2(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function No(i){return An(i)}class qE{constructor(e){this.auth=e,this.observer=null,this.addObserver=aC(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function q2(i){Lh=i}function VS(i){return Lh.loadJS(i)}function H2(){return Lh.recaptchaEnterpriseScript}function F2(){return Lh.gapiScript}function Y2(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class G2{constructor(){this.enterprise=new X2}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class X2{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const K2="recaptcha-enterprise",kS="NO_RECAPTCHA";class Q2{constructor(e){this.type=K2,this.auth=No(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{C2(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const p=new A2(g);return u.tenantId==null?u._agentRecaptchaConfig=p:u._tenantRecaptchaConfigs[u.tenantId]=p,f(p.siteKey)}}).catch(g=>{m(g)})})}function o(u,f,m){const g=window.grecaptcha;LE(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(p=>{f(p)}).catch(()=>{f(kS)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new G2().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!t&&LE(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let g=H2();g.length!==0&&(g+=m),VS(g).then(()=>{o(m,u,f)}).catch(p=>{f(p)})}}).catch(m=>{f(m)})})}}async function HE(i,e,t,s=!1,o=!1){const u=new Q2(i);let f;if(o)f=kS;else try{f=await u.verify(t)}catch{f=await u.verify(t,!0)}const m={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,p=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Gm(i,e,t,s,o){var u;if((u=i._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await HE(i,e,t,t==="getOobCode");return s(i,f)}else return s(i,e).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await HE(i,e,t,t==="getOobCode");return s(i,m)}else return Promise.reject(f)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $2(i,e){const t=To(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Zs(u,e??{}))return o;ui(o,"already-initialized")}return t.initialize({options:e})}function W2(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(hr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Z2(i,e,t){const s=No(i);Ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=xS(e),{host:f,port:m}=J2(e),g=m===null?"":`:${m}`,p={url:`${u}//${f}${g}/`},E=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Ee(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ee(Zs(p,s.config.emulator)&&Zs(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=p,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,Eo(f)?(VT(`${u}//${f}${g}`),kT("Auth",!0)):eD()}function xS(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function J2(i){const e=xS(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:FE(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:FE(f)}}}function FE(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function eD(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return cr("not implemented")}_getIdTokenResponse(e){return cr("not implemented")}_linkToIdToken(e,t){return cr("not implemented")}_getReauthenticationResolver(e){return cr("not implemented")}}async function tD(i,e){return gr(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nD(i,e){return xh(i,"POST","/v1/accounts:signInWithPassword",ps(i,e))}async function iD(i,e){return gr(i,"POST","/v1/accounts:sendOobCode",ps(i,e))}async function rD(i,e){return iD(i,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sD(i,e){return xh(i,"POST","/v1/accounts:signInWithEmailLink",ps(i,e))}async function aD(i,e){return xh(i,"POST","/v1/accounts:signInWithEmailLink",ps(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu extends Up{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new eu(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new eu(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gm(e,t,"signInWithPassword",nD);case"emailLink":return sD(e,{email:this._email,oobCode:this._password});default:ui(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Gm(e,s,"signUpPassword",tD);case"emailLink":return aD(e,{idToken:t,email:this._email,oobCode:this._password});default:ui(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(i,e){return xh(i,"POST","/v1/accounts:signInWithIdp",ps(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oD="http://localhost";class ea extends Up{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ea(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ui("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=t;if(!s||!o)return null;const f=new ea(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const t=this.buildRequest();return co(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,co(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,co(e,t)}buildRequest(){const e={requestUri:oD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=su(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lD(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uD(i){const e=kl(xl(i)).link,t=e?kl(xl(e)).deep_link_id:null,s=kl(xl(i)).deep_link_id;return(s?kl(xl(s)).link:null)||s||t||e||i}class Uh{constructor(e){const t=kl(xl(e)),s=t.apiKey??null,o=t.oobCode??null,u=lD(t.mode??null);Ee(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=uD(e);try{return new Uh(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(){this.providerId=Io.PROVIDER_ID}static credential(e,t){return eu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Uh.parseLink(t);return Ee(s,"argument-error"),eu._fromEmailAndCode(e,s.code,s.tenantId)}}Io.PROVIDER_ID="password";Io.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Io.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu extends LS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends fu{constructor(){super("facebook.com")}static credential(e){return ea._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kr.credential(e.oauthAccessToken)}catch{return null}}}Kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends fu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ea._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Qr.credential(t,s)}catch{return null}}}Qr.GOOGLE_SIGN_IN_METHOD="google.com";Qr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends fu{constructor(){super("github.com")}static credential(e){return ea._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $r.credential(e.oauthAccessToken)}catch{return null}}}$r.GITHUB_SIGN_IN_METHOD="github.com";$r.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends fu{constructor(){super("twitter.com")}static credential(e,t){return ea._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Wr.credential(t,s)}catch{return null}}}Wr.TWITTER_SIGN_IN_METHOD="twitter.com";Wr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await ai._fromIdTokenResponse(e,s,o),f=YE(s);return new _o({user:u,providerId:f,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=YE(s);return new _o({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function YE(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh extends Vi{constructor(e,t,s,o){super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,mh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new mh(e,t,s,o)}}function US(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?mh._fromErrorAndOperation(i,u,e,s):u})}async function cD(i,e,t=!1){const s=await Jl(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return _o._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hD(i,e,t=!1){const{auth:s}=i;if(si(s.app))return Promise.reject(ss(s));const o="reauthenticate";try{const u=await Jl(i,US(s,o,e,i),t);Ee(u.idToken,s,"internal-error");const f=xp(u.idToken);Ee(f,s,"internal-error");const{sub:m}=f;return Ee(i.uid===m,s,"user-mismatch"),_o._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&ui(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zS(i,e,t=!1){if(si(i.app))return Promise.reject(ss(i));const s="signIn",o=await US(i,s,e),u=await _o._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function fD(i,e){return zS(No(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dD(i,e,t){var s;Ee(((s=t.url)==null?void 0:s.length)>0,i,"invalid-continue-uri"),Ee(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,i,"invalid-dynamic-link-domain"),Ee(typeof t.linkDomain>"u"||t.linkDomain.length>0,i,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(Ee(t.iOS.bundleId.length>0,i,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(Ee(t.android.packageName.length>0,i,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mD(i,e,t){const s=No(i),o={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function u(f,m){Ee(m.handleCodeInApp,s,"argument-error"),m&&dD(s,f,m)}u(o,t),await Gm(s,o,"getOobCode",rD)}function pD(i,e){const t=Uh.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function gD(i,e,t){if(si(i.app))return Promise.reject(ss(i));const s=An(i),o=Io.credentialWithLink(e,t||hh());return Ee(o._tenantId===(s.tenantId||null),s,"tenant-id-mismatch"),fD(s,o)}function yD(i,e,t,s){return An(i).onIdTokenChanged(e,t,s)}function vD(i,e,t){return An(i).beforeAuthStateChanged(e,t)}function _D(i,e,t,s){return An(i).onAuthStateChanged(e,t,s)}const ph="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ph,"1"),this.storage.removeItem(ph),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ED=1e3,TD=10;class BS extends jS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=MS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((f,m,g)=>{this.notifyListeners(f,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!t&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);x2()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,TD):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},ED)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}BS.type="LOCAL";const SD=BS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS extends jS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}qS.type="SESSION";const HS=qS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bD(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new zh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async p=>p(t.origin,u)),g=await bD(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,g)=>{const p=zp("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(S){const w=S;if(w.data.eventId===p)switch(w.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(w.data.response);break;default:clearTimeout(E),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:p,data:t},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(){return window}function AD(i){Oi().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(){return typeof Oi().WorkerGlobalScope<"u"&&typeof Oi().importScripts=="function"}async function CD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RD(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function ND(){return FS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS="firebaseLocalStorageDb",ID=1,gh="firebaseLocalStorage",GS="fbase_key";class du{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function jh(i,e){return i.transaction([gh],e?"readwrite":"readonly").objectStore(gh)}function DD(){const i=indexedDB.deleteDatabase(YS);return new du(i).toPromise()}function Xm(){const i=indexedDB.open(YS,ID);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(gh,{keyPath:GS})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(gh)?e(s):(s.close(),await DD(),e(await Xm()))})})}async function GE(i,e,t){const s=jh(i,!0).put({[GS]:e,value:t});return new du(s).toPromise()}async function OD(i,e){const t=jh(i,!1).get(e),s=await new du(t).toPromise();return s===void 0?null:s.value}function XE(i,e){const t=jh(i,!0).delete(e);return new du(t).toPromise()}const MD=800,PD=3;class XS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>PD)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return FS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zh._getInstance(ND()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await CD(),!this.activeServiceWorker)return;this.sender=new wD(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xm();return await GE(e,ph,"1"),await XE(e,ph),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>GE(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>OD(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>XE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=jh(o,!1).getAll();return new du(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}XS.type="LOCAL";const VD=XS;new hu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kD(i,e){return e?hr(e):(Ee(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp extends Up{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return co(e,this._buildIdpRequest())}_linkToIdToken(e,t){return co(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return co(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function xD(i){return zS(i.auth,new jp(i),i.bypassAuthState)}function LD(i){const{auth:e,user:t}=i;return Ee(t,e,"internal-error"),hD(t,new jp(i),i.bypassAuthState)}async function UD(i){const{auth:e,user:t}=i;return Ee(t,e,"internal-error"),cD(t,new jp(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=e;if(f){this.reject(f);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xD;case"linkViaPopup":case"linkViaRedirect":return UD;case"reauthViaPopup":case"reauthViaRedirect":return LD;default:ui(this.auth,"internal-error")}}resolve(e){pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zD=new hu(2e3,1e4);class ro extends KS{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,ro.currentPopupAction&&ro.currentPopupAction.cancel(),ro.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){pr(this.filter.length===1,"Popup operations only handle one event");const e=zp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Di(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Di(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ro.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Di(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zD.get())};e()}}ro.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jD="pendingRedirect",$c=new Map;class BD extends KS{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=$c.get(this.auth._key());if(!e){try{const s=await qD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}$c.set(this.auth._key(),e)}return this.bypassAuthState||$c.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qD(i,e){const t=YD(e),s=FD(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function HD(i,e){$c.set(i._key(),e)}function FD(i){return hr(i._redirectPersistence)}function YD(i){return Qc(jD,i.config.apiKey,i.name)}async function GD(i,e,t=!1){if(si(i.app))return Promise.reject(ss(i));const s=No(i),o=kD(s,e),f=await new BD(s,o,t).execute();return f&&!t&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD=10*60*1e3;class KD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QD(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!QS(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Di(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XD&&this.cachedEventUids.clear(),this.cachedEventUids.has(KE(e))}saveEventToCache(e){this.cachedEventUids.add(KE(e)),this.lastProcessedEventTime=Date.now()}}function KE(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function QS({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function QD(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return QS(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $D(i,e={}){return gr(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZD=/^https?/;async function JD(i){if(i.config.emulator)return;const{authorizedDomains:e}=await $D(i);for(const t of e)try{if(eO(t))return}catch{}ui(i,"unauthorized-domain")}function eO(i){const e=hh(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const f=new URL(i);return f.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&f.hostname===s}if(!ZD.test(t))return!1;if(WD.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO=new hu(3e4,6e4);function QE(){const i=Oi().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function nO(i){return new Promise((e,t)=>{var o,u,f;function s(){QE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{QE(),t(Di(i,"network-request-failed"))},timeout:tO.get()})}if((u=(o=Oi().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((f=Oi().gapi)!=null&&f.load)s();else{const m=Y2("iframefcb");return Oi()[m]=()=>{gapi.load?s():t(Di(i,"network-request-failed"))},VS(`${F2()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Wc=null,e})}let Wc=null;function iO(i){return Wc=Wc||nO(i),Wc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO=new hu(5e3,15e3),sO="__/auth/iframe",aO="emulator/auth/iframe",oO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uO(i){const e=i.config;Ee(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?kp(e,aO):`https://${i.config.authDomain}/${sO}`,s={apiKey:e.apiKey,appName:i.name,v:So},o=lO.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${su(s).slice(1)}`}async function cO(i){const e=await iO(i),t=Oi().gapi;return Ee(t,i,"internal-error"),e.open({where:document.body,url:uO(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oO,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=Di(i,"network-request-failed"),m=Oi().setTimeout(()=>{u(f)},rO.get());function g(){Oi().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fO=500,dO=600,mO="_blank",pO="http://localhost";class $E{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gO(i,e,t,s=fO,o=dO){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g={...hO,width:s.toString(),height:o.toString(),top:u,left:f},p=mn().toLowerCase();t&&(m=RS(p)?mO:t),AS(p)&&(e=e||pO,g.scrollbars="yes");const E=Object.entries(g).reduce((w,[x,U])=>`${w}${x}=${U},`,"");if(k2(p)&&m!=="_self")return yO(e||"",m),new $E(null);const S=window.open(e||"",m,E);Ee(S,i,"popup-blocked");try{S.focus()}catch{}return new $E(S)}function yO(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO="__/auth/handler",_O="emulator/auth/handler",EO=encodeURIComponent("fac");async function WE(i,e,t,s,o,u){Ee(i.config.authDomain,i,"auth-domain-config-required"),Ee(i.config.apiKey,i,"invalid-api-key");const f={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:So,eventId:o};if(e instanceof LS){e.setDefaultLanguage(i.languageCode),f.providerId=e.providerId||"",sC(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,S]of Object.entries({}))f[E]=S}if(e instanceof fu){const E=e.getScopes().filter(S=>S!=="");E.length>0&&(f.scopes=E.join(","))}i.tenantId&&(f.tid=i.tenantId);const m=f;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const g=await i._getAppCheckToken(),p=g?`#${EO}=${encodeURIComponent(g)}`:"";return`${TO(i)}?${su(m).slice(1)}${p}`}function TO({config:i}){return i.emulator?kp(i,_O):`https://${i.authDomain}/${vO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm="webStorageSupport";class SO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=HS,this._completeRedirectFn=GD,this._overrideRedirectResult=HD}async _openPopup(e,t,s,o){var f;pr((f=this.eventManagers[e._key()])==null?void 0:f.manager,"_initialize() not called before _openPopup()");const u=await WE(e,t,s,hh(),o);return gO(e,u,zp())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await WE(e,t,s,hh(),o);return AD(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(pr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await cO(e),s=new KD(e);return t.register("authEvent",o=>(Ee(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(hm,{type:hm},o=>{var f;const u=(f=o==null?void 0:o[0])==null?void 0:f[hm];u!==void 0&&t(!!u),ui(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=JD(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return MS()||CS()||Lp()}}const bO=SO;var ZE="@firebase/auth",JE="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AO(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function CO(i){Mi(new oi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;Ee(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:f,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:PS(i)},p=new B2(s,o,u,g);return W2(p,t),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Mi(new oi("auth-internal",e=>{const t=No(e.getProvider("auth").getImmediate());return(s=>new wO(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wn(ZE,JE,AO(i)),Wn(ZE,JE,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO=5*60,NO=PT("authIdTokenMaxAge")||RO;let eT=null;const IO=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>NO)return;const o=t==null?void 0:t.token;eT!==o&&(eT=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function $S(i=rp()){const e=To(i,"auth");if(e.isInitialized())return e.getImmediate();const t=$2(i,{popupRedirectResolver:bO,persistence:[VD,SD,HS]}),s=PT("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=IO(u.toString());vD(t,f,()=>f(t.currentUser)),yD(t,m=>f(m))}}const o=OT("auth");return o&&Z2(t,`http://${o}`),t}function DO(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}q2({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Di("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",DO().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});CO("Browser");const WS="@firebase/installations",Bp="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=1e4,JS=`w:${Bp}`,eb="FIS_v2",OO="https://firebaseinstallations.googleapis.com/v1",MO=60*60*1e3,PO="installations",VO="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ta=new ia(PO,VO,kO);function tb(i){return i instanceof Vi&&i.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb({projectId:i}){return`${OO}/projects/${i}/installations`}function ib(i){return{token:i.token,requestStatus:2,expiresIn:LO(i.expiresIn),creationTime:Date.now()}}async function rb(i,e){const s=(await e.json()).error;return ta.create("request-failed",{requestName:i,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function sb({apiKey:i}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i})}function xO(i,{refreshToken:e}){const t=sb(i);return t.append("Authorization",UO(e)),t}async function ab(i){const e=await i();return e.status>=500&&e.status<600?i():e}function LO(i){return Number(i.replace("s","000"))}function UO(i){return`${eb} ${i}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zO({appConfig:i,heartbeatServiceProvider:e},{fid:t}){const s=nb(i),o=sb(i),u=e.getImmediate({optional:!0});if(u){const p=await u.getHeartbeatsHeader();p&&o.append("x-firebase-client",p)}const f={fid:t,authVersion:eb,appId:i.appId,sdkVersion:JS},m={method:"POST",headers:o,body:JSON.stringify(f)},g=await ab(()=>fetch(s,m));if(g.ok){const p=await g.json();return{fid:p.fid||t,registrationStatus:2,refreshToken:p.refreshToken,authToken:ib(p.authToken)}}else throw await rb("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(i){return new Promise(e=>{setTimeout(e,i)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jO(i){return btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO=/^[cdef][\w-]{21}$/,Km="";function qO(){try{const i=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(i),i[0]=112+i[0]%16;const t=HO(i);return BO.test(t)?t:Km}catch{return Km}}function HO(i){return jO(i).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(i){return`${i.appName}!${i.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=new Map;function ub(i,e){const t=Bh(i);cb(t,e),FO(t,e)}function cb(i,e){const t=lb.get(i);if(t)for(const s of t)s(e)}function FO(i,e){const t=YO();t&&t.postMessage({key:i,fid:e}),GO()}let Ks=null;function YO(){return!Ks&&"BroadcastChannel"in self&&(Ks=new BroadcastChannel("[Firebase] FID Change"),Ks.onmessage=i=>{cb(i.data.key,i.data.fid)}),Ks}function GO(){lb.size===0&&Ks&&(Ks.close(),Ks=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XO="firebase-installations-database",KO=1,na="firebase-installations-store";let fm=null;function qp(){return fm||(fm=Th(XO,KO,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(na)}}})),fm}async function yh(i,e){const t=Bh(i),o=(await qp()).transaction(na,"readwrite"),u=o.objectStore(na),f=await u.get(t);return await u.put(e,t),await o.done,(!f||f.fid!==e.fid)&&ub(i,e.fid),e}async function hb(i){const e=Bh(i),s=(await qp()).transaction(na,"readwrite");await s.objectStore(na).delete(e),await s.done}async function qh(i,e){const t=Bh(i),o=(await qp()).transaction(na,"readwrite"),u=o.objectStore(na),f=await u.get(t),m=e(f);return m===void 0?await u.delete(t):await u.put(m,t),await o.done,m&&(!f||f.fid!==m.fid)&&ub(i,m.fid),m}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hp(i){let e;const t=await qh(i.appConfig,s=>{const o=QO(s),u=$O(i,o);return e=u.registrationPromise,u.installationEntry});return t.fid===Km?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function QO(i){const e=i||{fid:qO(),registrationStatus:0};return fb(e)}function $O(i,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ta.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=WO(i,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ZO(i)}:{installationEntry:e}}async function WO(i,e){try{const t=await zO(i,e);return yh(i.appConfig,t)}catch(t){throw tb(t)&&t.customData.serverCode===409?await hb(i.appConfig):await yh(i.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function ZO(i){let e=await tT(i.appConfig);for(;e.registrationStatus===1;)await ob(100),e=await tT(i.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await Hp(i);return s||t}return e}function tT(i){return qh(i,e=>{if(!e)throw ta.create("installation-not-found");return fb(e)})}function fb(i){return JO(i)?{fid:i.fid,registrationStatus:0}:i}function JO(i){return i.registrationStatus===1&&i.registrationTime+ZS<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eM({appConfig:i,heartbeatServiceProvider:e},t){const s=tM(i,t),o=xO(i,t),u=e.getImmediate({optional:!0});if(u){const p=await u.getHeartbeatsHeader();p&&o.append("x-firebase-client",p)}const f={installation:{sdkVersion:JS,appId:i.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},g=await ab(()=>fetch(s,m));if(g.ok){const p=await g.json();return ib(p)}else throw await rb("Generate Auth Token",g)}function tM(i,{fid:e}){return`${nb(i)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fp(i,e=!1){let t;const s=await qh(i.appConfig,u=>{if(!db(u))throw ta.create("not-registered");const f=u.authToken;if(!e&&rM(f))return u;if(f.requestStatus===1)return t=nM(i,e),u;{if(!navigator.onLine)throw ta.create("app-offline");const m=aM(u);return t=iM(i,m),m}});return t?await t:s.authToken}async function nM(i,e){let t=await nT(i.appConfig);for(;t.authToken.requestStatus===1;)await ob(100),t=await nT(i.appConfig);const s=t.authToken;return s.requestStatus===0?Fp(i,e):s}function nT(i){return qh(i,e=>{if(!db(e))throw ta.create("not-registered");const t=e.authToken;return oM(t)?{...e,authToken:{requestStatus:0}}:e})}async function iM(i,e){try{const t=await eM(i,e),s={...e,authToken:t};return await yh(i.appConfig,s),t}catch(t){if(tb(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await hb(i.appConfig);else{const s={...e,authToken:{requestStatus:0}};await yh(i.appConfig,s)}throw t}}function db(i){return i!==void 0&&i.registrationStatus===2}function rM(i){return i.requestStatus===2&&!sM(i)}function sM(i){const e=Date.now();return e<i.creationTime||i.creationTime+i.expiresIn<e+MO}function aM(i){const e={requestStatus:1,requestTime:Date.now()};return{...i,authToken:e}}function oM(i){return i.requestStatus===1&&i.requestTime+ZS<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lM(i){const e=i,{installationEntry:t,registrationPromise:s}=await Hp(e);return s?s.catch(console.error):Fp(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uM(i,e=!1){const t=i;return await cM(t),(await Fp(t,e)).token}async function cM(i){const{registrationPromise:e}=await Hp(i);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hM(i){if(!i||!i.options)throw dm("App Configuration");if(!i.name)throw dm("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!i.options[t])throw dm(t);return{appName:i.name,projectId:i.options.projectId,apiKey:i.options.apiKey,appId:i.options.appId}}function dm(i){return ta.create("missing-app-config-values",{valueName:i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb="installations",fM="installations-internal",dM=i=>{const e=i.getProvider("app").getImmediate(),t=hM(e),s=To(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},mM=i=>{const e=i.getProvider("app").getImmediate(),t=To(e,mb).getImmediate();return{getId:()=>lM(t),getToken:o=>uM(t,o)}};function pM(){Mi(new oi(mb,dM,"PUBLIC")),Mi(new oi(fM,mM,"PRIVATE"))}pM();Wn(WS,Bp);Wn(WS,Bp,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gM="/firebase-messaging-sw.js",yM="/firebase-cloud-messaging-push-scope",pb="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",vM="https://fcmregistrations.googleapis.com/v1",gb="google.c.a.c_id",_M="google.c.a.c_l",EM="google.c.a.ts",TM="google.c.a.e",iT=1e4;var rT;(function(i){i[i.DATA_MESSAGE=1]="DATA_MESSAGE",i[i.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(rT||(rT={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var tu;(function(i){i.PUSH_RECEIVED="push-received",i.NOTIFICATION_CLICKED="notification-clicked"})(tu||(tu={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(i){const e=new Uint8Array(i);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function SM(i){const e="=".repeat((4-i.length%4)%4),t=(i+e).replace(/\-/g,"+").replace(/_/g,"/"),s=atob(t),o=new Uint8Array(s.length);for(let u=0;u<s.length;++u)o[u]=s.charCodeAt(u);return o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm="fcm_token_details_db",bM=5,sT="fcm_token_object_Store";async function wM(i){if("databases"in indexedDB&&!(await indexedDB.databases()).map(u=>u.name).includes(mm))return null;let e=null;return(await Th(mm,bM,{upgrade:async(s,o,u,f)=>{if(o<2||!s.objectStoreNames.contains(sT))return;const m=f.objectStore(sT),g=await m.index("fcmSenderId").get(i);if(await m.clear(),!!g){if(o===2){const p=g;if(!p.auth||!p.p256dh||!p.endpoint)return;e={token:p.fcmToken,createTime:p.createTime??Date.now(),subscriptionOptions:{auth:p.auth,p256dh:p.p256dh,endpoint:p.endpoint,swScope:p.swScope,vapidKey:typeof p.vapidKey=="string"?p.vapidKey:ur(p.vapidKey)}}}else if(o===3){const p=g;e={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:ur(p.auth),p256dh:ur(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:ur(p.vapidKey)}}}else if(o===4){const p=g;e={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:ur(p.auth),p256dh:ur(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:ur(p.vapidKey)}}}}}})).close(),await tm(mm),await tm("fcm_vapid_details_db"),await tm("undefined"),AM(e)?e:null}function AM(i){if(!i||!i.subscriptionOptions)return!1;const{subscriptionOptions:e}=i;return typeof i.createTime=="number"&&i.createTime>0&&typeof i.token=="string"&&i.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CM="firebase-messaging-database",RM=1,nu="firebase-messaging-store";let pm=null;function yb(){return pm||(pm=Th(CM,RM,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(nu)}}})),pm}async function NM(i){const e=vb(i),s=await(await yb()).transaction(nu).objectStore(nu).get(e);if(s)return s;{const o=await wM(i.appConfig.senderId);if(o)return await Yp(i,o),o}}async function Yp(i,e){const t=vb(i),o=(await yb()).transaction(nu,"readwrite");return await o.objectStore(nu).put(e,t),await o.done,e}function vb({appConfig:i}){return i.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IM={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},_n=new ia("messaging","Messaging",IM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DM(i,e){const t=await Xp(i),s=_b(e),o={method:"POST",headers:t,body:JSON.stringify(s)};let u;try{u=await(await fetch(Gp(i.appConfig),o)).json()}catch(f){throw _n.create("token-subscribe-failed",{errorInfo:f==null?void 0:f.toString()})}if(u.error){const f=u.error.message;throw _n.create("token-subscribe-failed",{errorInfo:f})}if(!u.token)throw _n.create("token-subscribe-no-token");return u.token}async function OM(i,e){const t=await Xp(i),s=_b(e.subscriptionOptions),o={method:"PATCH",headers:t,body:JSON.stringify(s)};let u;try{u=await(await fetch(`${Gp(i.appConfig)}/${e.token}`,o)).json()}catch(f){throw _n.create("token-update-failed",{errorInfo:f==null?void 0:f.toString()})}if(u.error){const f=u.error.message;throw _n.create("token-update-failed",{errorInfo:f})}if(!u.token)throw _n.create("token-update-no-token");return u.token}async function MM(i,e){const s={method:"DELETE",headers:await Xp(i)};try{const u=await(await fetch(`${Gp(i.appConfig)}/${e}`,s)).json();if(u.error){const f=u.error.message;throw _n.create("token-unsubscribe-failed",{errorInfo:f})}}catch(o){throw _n.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function Gp({projectId:i}){return`${vM}/projects/${i}/registrations`}async function Xp({appConfig:i,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function _b({p256dh:i,auth:e,endpoint:t,vapidKey:s}){const o={web:{endpoint:t,auth:e,p256dh:i}};return s!==pb&&(o.web.applicationPubKey=s),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PM=7*24*60*60*1e3;async function VM(i){const e=await xM(i.swRegistration,i.vapidKey),t={vapidKey:i.vapidKey,swScope:i.swRegistration.scope,endpoint:e.endpoint,auth:ur(e.getKey("auth")),p256dh:ur(e.getKey("p256dh"))},s=await NM(i.firebaseDependencies);if(s){if(LM(s.subscriptionOptions,t))return Date.now()>=s.createTime+PM?kM(i,{token:s.token,createTime:Date.now(),subscriptionOptions:t}):s.token;try{await MM(i.firebaseDependencies,s.token)}catch(o){console.warn(o)}return aT(i.firebaseDependencies,t)}else return aT(i.firebaseDependencies,t)}async function kM(i,e){try{const t=await OM(i.firebaseDependencies,e),s={...e,token:t,createTime:Date.now()};return await Yp(i.firebaseDependencies,s),t}catch(t){throw t}}async function aT(i,e){const s={token:await DM(i,e),createTime:Date.now(),subscriptionOptions:e};return await Yp(i,s),s.token}async function xM(i,e){const t=await i.pushManager.getSubscription();return t||i.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:SM(e)})}function LM(i,e){const t=e.vapidKey===i.vapidKey,s=e.endpoint===i.endpoint,o=e.auth===i.auth,u=e.p256dh===i.p256dh;return t&&s&&o&&u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(i){const e={from:i.from,collapseKey:i.collapse_key,messageId:i.fcmMessageId};return UM(e,i),zM(e,i),jM(e,i),e}function UM(i,e){if(!e.notification)return;i.notification={};const t=e.notification.title;t&&(i.notification.title=t);const s=e.notification.body;s&&(i.notification.body=s);const o=e.notification.image;o&&(i.notification.image=o);const u=e.notification.icon;u&&(i.notification.icon=u)}function zM(i,e){e.data&&(i.data=e.data)}function jM(i,e){var o,u,f,m;if(!e.fcmOptions&&!((o=e.notification)!=null&&o.click_action))return;i.fcmOptions={};const t=((u=e.fcmOptions)==null?void 0:u.link)??((f=e.notification)==null?void 0:f.click_action);t&&(i.fcmOptions.link=t);const s=(m=e.fcmOptions)==null?void 0:m.analytics_label;s&&(i.fcmOptions.analyticsLabel=s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BM(i){return typeof i=="object"&&!!i&&gb in i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qM(i){if(!i||!i.options)throw gm("App Configuration Object");if(!i.name)throw gm("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=i;for(const s of e)if(!t[s])throw gm(s);return{appName:i.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function gm(i){return _n.create("missing-app-config-values",{valueName:i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(e,t,s){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=qM(e);this.firebaseDependencies={app:e,appConfig:o,installations:t,analyticsProvider:s}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FM(i){try{i.swRegistration=await navigator.serviceWorker.register(gM,{scope:yM}),i.swRegistration.update().catch(()=>{}),await YM(i.swRegistration)}catch(e){throw _n.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function YM(i){return new Promise((e,t)=>{const s=setTimeout(()=>t(new Error(`Service worker not registered after ${iT} ms`)),iT),o=i.installing||i.waiting;i.active?(clearTimeout(s),e()):o?o.onstatechange=u=>{var f;((f=u.target)==null?void 0:f.state)==="activated"&&(o.onstatechange=null,clearTimeout(s),e())}:(clearTimeout(s),t(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GM(i,e){if(!e&&!i.swRegistration&&await FM(i),!(!e&&i.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw _n.create("invalid-sw-registration");i.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XM(i,e){e?i.vapidKey=e:i.vapidKey||(i.vapidKey=pb)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KM(i,e){if(!navigator)throw _n.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw _n.create("permission-blocked");return await XM(i,e==null?void 0:e.vapidKey),await GM(i,e==null?void 0:e.serviceWorkerRegistration),VM(i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QM(i,e,t){const s=$M(e);(await i.firebaseDependencies.analyticsProvider.get()).logEvent(s,{message_id:t[gb],message_name:t[_M],message_time:t[EM],message_device_time:Math.floor(Date.now()/1e3)})}function $M(i){switch(i){case tu.NOTIFICATION_CLICKED:return"notification_open";case tu.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WM(i,e){const t=e.data;if(!t.isFirebaseMessaging)return;i.onMessageHandler&&t.messageType===tu.PUSH_RECEIVED&&(typeof i.onMessageHandler=="function"?i.onMessageHandler(oT(t)):i.onMessageHandler.next(oT(t)));const s=t.data;BM(s)&&s[TM]==="1"&&await QM(i,t.messageType,s)}const lT="@firebase/messaging",uT="0.12.23";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZM=i=>{const e=new HM(i.getProvider("app").getImmediate(),i.getProvider("installations-internal").getImmediate(),i.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>WM(e,t)),e},JM=i=>{const e=i.getProvider("messaging").getImmediate();return{getToken:s=>KM(e,s)}};function eP(){Mi(new oi("messaging",ZM,"PUBLIC")),Mi(new oi("messaging-internal",JM,"PRIVATE")),Wn(lT,uT),Wn(lT,uT,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tP(){try{await LT()}catch{return!1}return typeof window<"u"&&xT()&&tC()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nP(i=rp()){return tP().then(e=>{if(!e)throw _n.create("unsupported-browser")},e=>{throw _n.create("indexed-db-unsupported")}),To(An(i),"messaging").getImmediate()}eP();const iP={apiKey:"AIzaSyCcq7F0omw0ZAwR_Ft5_fR3MBqzbui7Ghw",authDomain:"ribbon-hope-town.firebaseapp.com",projectId:"ribbon-hope-town",storageBucket:"ribbon-hope-town.firebasestorage.app",messagingSenderId:"886523116849",appId:"1:886523116849:web:1bfa88a130bc7b33d7c410",measurementId:"G-41SN0VSCZQ"},Hh=jT(iP),Fh=QI(Hh);$S(Hh);nP(Hh);const Eb="employees",rP="meetingRooms",sP="facilityRooms",aP="points",oP="allPoints",lP="junctions",uP="allJunctions",Kp=async i=>{try{console.log("getCollection",i);const e=await gS(sS(Fh,i)),t=[];return e.forEach(s=>{t.push({id:s.id,...s.data()})}),t}catch(e){throw console.error(`Error getting ${i} collection:`,e),e}},Tb=async()=>Kp(Eb),cP=async i=>{try{const e=sS(Fh,Eb),t=l2(e,u2("email","==",i.toLowerCase())),s=await gS(t);return s.empty?null:{id:s.docs[0].id,...s.docs[0].data()}}catch(e){throw console.error("Error getting employee by email:",e),e}},Sb=async()=>Kp(rP),bb=async()=>Kp(sP),hP=async()=>dP(aP,oP),fP=async()=>mP(lP,uP),dP=async(i,e)=>{const t=aS(Fh,i,e),s={};try{const o=await mS(t);if(!o.exists())return{};const u=o.data();return Object.keys(u).forEach(f=>{const m=u[f];m&&Array.isArray(m.default)?s[f]=m.default:s[f]=[]}),s}catch(o){return console.error("Error getting document:",o),{}}},mP=async(i,e)=>{const t=aS(Fh,i,e),s={};try{const o=await mS(t);if(!o.exists())return{};const u=o.data();return Object.keys(u).forEach(f=>{const m=u[f];m&&typeof m.default=="object"?s[f]=m.default:s[f]={}}),s}catch(o){return console.error("Error getting document:",o),{}}return s};function Qm(i,e,t,s,o){const u=new Map;if(t.forEach(U=>{u.set(U.label,U)}),!u.has(i)||!u.has(e))return null;if(i===e)return{path:[i],segments:[],totalDistance:0};const f=new Map,m=new Map,g=new Set,p=new Set;for(Object.entries(s).forEach(([U,G])=>{p.add(U),G.forEach(X=>p.add(X))}),p.forEach(U=>{f.set(U,U===i?0:1/0),m.set(U,null),g.add(U)});g.size>0;){let U=null,G=1/0;for(const ae of g){const ie=f.has(ae)?f.get(ae):1/0;ie<G&&(G=ie,U=ae)}if(!U||G===1/0||(U!==null&&g.delete(U),U===e))break;const X=s[U]||[],ce=u.get(U);ce&&X.forEach(ae=>{if(!g.has(ae))return;const ie=u.get(ae);if(!ie)return;const _e=Math.sqrt(Math.pow(ie.x-ce.x,2)+Math.pow(ie.y-ce.y,2)),he=(f.get(U)||0)+_e;he<(f.get(ae)||1/0)&&(f.set(ae,he),m.set(ae,U))})}const E=[];let S=e;for(;S;)E.unshift(S),S=m.get(S)||null;if(i[0]===e[0]&&(E.length===0||E[0]!==i||E[E.length-1]!==e))return console.warn("Invalid path constructed:",E.length,E[0],i,E[E.length-1],e),null;const w=[];let x=0;for(let U=0;U<E.length-1;U++){const G=u.get(E[U]),X=u.get(E[U+1]);if(G&&X){const ce=Math.atan2(X.y-G.y,X.x-G.x),ae=Math.sqrt(Math.pow(X.x-G.x,2)+Math.pow(X.y-G.y,2));w.push({from:G,to:X,angle:ce,floor:o}),x+=ae}}return{path:E,segments:w,totalDistance:x}}function pP(i,e,t,s,o,u,f,m){const g=[];f&&g.push("B1-2","B2-2"),m&&g.push("B3");let p=null;for(const E of g){const S=u[t],w=u[s];if(!S||!w)continue;const x=Qm(i,E,o,S,t),U=Qm(E,e,o,w,s);if(x&&U){const G=x.totalDistance+U.totalDistance;(!p||G<p.totalDistance)&&(p={path:[...x.path,...U.path.slice(1)],segments:[...x.segments,...U.segments],totalDistance:G})}}return p}const gP=({segments:i,pathColor:e="#ff0000",pathWidth:t=2,showArrows:s=!0,arrowColor:o="#ff0000",showLine:u=!1,displayedFloor:f})=>C.jsx(C.Fragment,{children:i.filter(m=>m.floor===f).map((m,g)=>{const{from:p,to:E,angle:S}=m,w=Math.sqrt(Math.pow(E.x-p.x,2)+Math.pow(E.y-p.y,2)),x=(p.x+E.x)/2,U=(p.y+E.y)/2;return C.jsxs("div",{children:[u&&C.jsx("div",{style:{position:"absolute",left:`${p.x}%`,top:`${p.y}%`,width:`${w}%`,height:`${t}px`,backgroundColor:e,transformOrigin:"0 50%",transform:`translateY(-2px) rotate(${S}rad)`,pointerEvents:"none",zIndex:1e3}}),s&&C.jsx("div",{style:{position:"absolute",left:`${x}%`,top:`${U}%`,transform:`translate(-50%, -70%) rotate(${S}rad)`,pointerEvents:"none",zIndex:1001},children:C.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",children:C.jsx("polygon",{points:"0,10 15,5 10,10 15,15",fill:o,stroke:o,strokeWidth:"1"})})})]},g)})});function yP(i){const[e,t]=kt.useState(null),[s,o]=kt.useState(!1),[u,f]=kt.useState({});ue.useEffect(()=>{(async()=>{try{const E=await fP();f(E)}catch(E){console.error("Error loading data:",E)}})()},[]);const m=kt.useCallback((p,E,S,w,x,U)=>{o(!0);try{let G=null;if(console.log("Debug - start and end",{startFloor:S,targetFloor:w}),S===w){const X=u[S];X&&(G=Qm(p,E,i,X,S),console.log("Debug - same floor"))}else console.log("Debug - between floors"),G=pP(p,E,S,w,i,u,x,U);t(G)}catch(G){console.error("Pathfinding error:",G),t(null)}finally{o(!1)}},[i]),g=kt.useCallback(()=>{t(null)},[]);return{currentPath:e,isPathfinding:s,findAndSetPath:m,clearPath:g}}const vP=({showNavigation:i,isDevModeEnabled:e,targetRoom:t,setTargetRoom:s,myLocation:o,setMyLocation:u,startColor:f,targetColor:m,onClose:g})=>{const[p,E]=ue.useState(!1),[S,w]=ue.useState(!1),[x,U]=ue.useState(!1),G=18,X=18,[ce,ae]=ue.useState(!1),ie="#ff0000",_e=2,he=!1,[we,M]=ue.useState(null),[A,N]=ue.useState(!0),[O,V]=ue.useState(!0),k=t?t.charAt(0):null,R=o?o.charAt(0):null,[$e,Ke]=ue.useState({}),[F,se]=ue.useState([]),[me,Ve]=ue.useState([]),[D,Z]=ue.useState([]),[re,te]=ue.useState(""),[K,ye]=ue.useState([]),[le,Ie]=ue.useState(null),Ce=ue.useRef(null),[gt,Ct]=ue.useState(!1);ue.useEffect(()=>{(async()=>{try{const fe=await hP(),Le=await Sb(),ht=await bb(),De=await Tb();Ke(fe),se(Le),Ve(ht),Z(De)}catch(fe){console.error("Error loading data:",fe)}})(),console.log("fetch data for floorPlan functions")},[]),ue.useEffect(()=>{t?M(k):o&&M(R)},[t,o,k,R]);const on=()=>{M($=>$===k?R:k)};ue.useEffect(()=>{ua()},[t,o]),ue.useEffect(()=>{localStorage.setItem("floorplan-start-color",f)},[f]),ue.useEffect(()=>{localStorage.setItem("floorplan-target-color",m)},[m]),ue.useEffect(()=>{const $=fe=>{Ce.current&&!Ce.current.contains(fe.target)&&Ct(!1)};return document.addEventListener("mousedown",$),()=>{document.removeEventListener("mousedown",$)}},[Ce]),ue.useEffect(()=>{if(t){const $=D.find(fe=>fe.seatNumber===t)||F.find(fe=>fe.roomNumber===t)||me.find(fe=>fe.roomNumber===t);$?(Ie($),"firstName"in $?te(`${$.firstName} ${$.lastName} (${$.seatNumber})`):"Name"in $?te(`${$.Name} (${$.roomNumber})`):"Type"in $&&te(`${$.Type} (${$.roomNumber})`)):(Ie(null),te(t))}else Ie(null),te("")},[t,D,F,me]);const kn=kt.useMemo(()=>{const $=[],fe=new Set(D.map(De=>De.seatNumber)),Le=new Set(F.map(De=>De.roomNumber)),ht=new Set(me.map(De=>De.roomNumber));return Object.values($e).flat().forEach(De=>{!De.label.startsWith("J")&&!De.label.startsWith("B")&&!fe.has(De.label)&&!Le.has(De.label)&&!ht.has(De.label)&&$.push(De)}),F.forEach(De=>$.push(De)),me.forEach(De=>$.push(De)),D.forEach(De=>$.push(De)),$},[$e,F,me,D]);kt.useEffect(()=>{const $=re.trim().toLowerCase();if(!$){ye([]);return}const fe=kn.filter(Le=>{if("Name"in Le&&"roomNumber"in Le){const ht=Le.Name.toLowerCase(),De=Le.roomNumber.toLowerCase();return ht.includes($)||De.includes($)}else if("Type"in Le&&"roomNumber"in Le){const ht=Le.Type.toLowerCase(),De=Le.roomNumber.toLowerCase();return ht.includes($)||De.includes($)}else if("firstName"in Le&&"lastName"in Le){const ht=Le.firstName.toLowerCase(),De=Le.lastName.toLowerCase(),Yt=Le.seatNumber.toLowerCase(),Gt=`${ht} ${De}`,lt=`${De} ${ht}`;return ht.includes($)||De.includes($)||Yt.includes($)||Gt.includes($)||lt.includes($)}else if("label"in Le)return Le.label.toLowerCase().includes($);return!1});ye(fe)},[re,kn]);const xn=kt.useMemo(()=>{const $=new Map;return F.forEach(fe=>$.set(fe.roomNumber,fe.Name)),me.forEach(fe=>$.set(fe.roomNumber,fe.Type)),$},[F,me]),Zn=we?$e[we]??[]:[],gs=Zn.filter($=>!$.label.startsWith("J")&&!$.label.startsWith("B")),ki=Zn.filter($=>$.label.startsWith("J")||$.label.startsWith("B")),En=kt.useMemo(()=>F.filter($=>$.Type==="Meeting"||$.Type==="Meeting + VC").map($=>$.roomNumber),[F]),Do=Zn.filter($=>En.includes($.label)),yr=Object.values($e).flat().filter($=>$.label.startsWith("J")||$.label.startsWith("B")),{currentPath:ut,isPathfinding:aa,findAndSetPath:xi,clearPath:vr}=yP(yr),oa=(()=>{switch(we){case"1":return"/floor-plan-app/FloorPlan_1_clear.png";case"2":return"/floor-plan-app/FloorPlan_2_clear.png";case"3":return"/floor-plan-app/FloorPlan_3_clear.png";case"4":return"/floor-plan-app/FloorPlan_4 - Copy.png";default:return"/floor-plan-app/FloorPlan_4 - Copy.png"}})(),ct=$=>p||$===o||$===t,Ye=$=>$===o?f:$===t?m:"red",Rt=$=>$===o?G:$===t?X:8,Nt=kt.useCallback(($,fe)=>{if(!fe)return null;const Le=$e[fe]??[],ht=Le.filter(lt=>lt.label.startsWith("J")||lt.label.startsWith("B")),De=Le.find(lt=>lt.label===$);if(!De)return null;let Yt=null,Gt=1/0;return ht.forEach(lt=>{const It=Math.sqrt(Math.pow(lt.x-De.x,2)+Math.pow(lt.y-De.y,2));It<Gt&&(Gt=It,Yt=lt.label)}),Yt},[$e]),la=kt.useCallback(()=>{if(console.log("Debug - handleFindPath called"),!o||!t)return;const $=Nt(o,R),fe=Nt(t,k);console.log("Debug - Found junctions:",{startJunction:$,targetJunction:fe}),!(!$||!fe||!k||!R)&&$!==fe&&(xi(fe,$,k,R,A,O),M(R),ae(!0))},[o,t,Nt,xi,R,k,A,O]),ua=kt.useCallback(()=>{vr(),ae(!1)},[vr]),Li=$=>{te($.target.value),le&&Ie(null)},Ui=$=>{Ie($),"label"in $?(s($.label),te($.label)):"Name"in $?(s($.roomNumber),te($.Name)):"Type"in $?(s($.roomNumber),te($.Type)):"firstName"in $&&(s($.seatNumber),te(`${$.firstName} ${$.lastName}`)),ye([])},zi=()=>{Ie(null),s(""),te("")},Cn=re.trim()&&K.length>0&&!le&&gt;return C.jsx("div",{className:"floor-plan-container",children:C.jsxs("div",{className:"floor-plan-content",children:[C.jsxs("div",{className:"floor-plan-header",children:[C.jsx("div",{className:"floor-plan-header-icon-wrapper",children:C.jsx(mA,{className:"floor-plan-header-icon"})}),C.jsx("h2",{className:"floor-plan-title",children:"Floor Map"}),g&&C.jsx("button",{onClick:g,className:"floor-plan-close-button","aria-label":"Close floor plan",children:C.jsx(io,{size:20})})]}),C.jsxs("div",{className:"floor-plan-controls",children:[C.jsxs("div",{className:"floor-plan-room-input",ref:Ce,children:[C.jsx("label",{className:"floor-plan-label",children:"Target Room"}),C.jsxs("div",{className:"floor-plan-input-wrapper",children:[C.jsx(fT,{className:"floor-plan-search-icon"}),C.jsx("input",{type:"text",placeholder:"Search rooms...",value:le?"Name"in le?`${le.Name} (${le.roomNumber})`:"Type"in le?`${le.Type} (${le.roomNumber})`:"firstName"in le?`${le.firstName} ${le.lastName} (${le.seatNumber})`:le.label:re,onChange:Li,onFocus:()=>Ct(!0),onBlur:()=>setTimeout(()=>Ct(!1),100),className:"floor-plan-input"}),(le||re)&&C.jsx("button",{className:"clear-search-button2",onClick:zi,"aria-label":"Clear target room selection",children:C.jsx(io,{className:"floor-plan-search-icon"})})]}),Cn&&C.jsx("div",{className:"floor-plan-search-results-container",children:K.map(($,fe)=>C.jsx("div",{onClick:()=>Ui($),className:"floor-plan-search-result-item",children:"Name"in $?C.jsxs(C.Fragment,{children:[C.jsx(Zc,{size:16}),C.jsxs("span",{children:[$.Name," (",$.roomNumber,")"]})]}):"Type"in $?C.jsxs(C.Fragment,{children:[C.jsx(Zc,{size:16}),C.jsxs("span",{children:[$.Type," (",$.roomNumber,")"]})]}):"firstName"in $?C.jsxs(C.Fragment,{children:[C.jsx(dT,{size:16}),C.jsxs("span",{children:[$.firstName," ",$.lastName," (",$.seatNumber,")"]})]}):C.jsx("span",{children:$.label})},fe))})]}),C.jsxs("div",{className:"floor-plan-room-input",children:[C.jsx("label",{className:"floor-plan-label",children:"My Location"}),C.jsx("div",{className:"floor-plan-input-wrapper",children:C.jsx("input",{type:"text",placeholder:"e.g., 4N05A",value:o,onChange:$=>u($.target.value.toUpperCase().replace(/\s+/g,"")),className:"floor-plan-input"})})]}),i&&C.jsxs("div",{className:"floor-plan-pathfinding-controls",children:[C.jsxs("button",{onClick:la,disabled:aa||!o||!t,className:"floor-plan-path-button",children:[C.jsx(vA,{size:16}),aa?"Finding Path...":"Find Path"]}),ut&&C.jsxs("button",{onClick:ua,className:"floor-plan-clear-button",children:[C.jsx(gA,{size:16}),"Clear Path"]}),R&&k&&R!==k&&C.jsxs("div",{className:"floor-plan-checkbox-group",children:[C.jsxs("label",{className:"floor-plan-checkbox",children:[C.jsx("input",{type:"checkbox",checked:A,onChange:$=>N($.target.checked)}),"Use Stairs"]}),C.jsxs("label",{className:"floor-plan-checkbox",children:[C.jsx("input",{type:"checkbox",checked:O,onChange:$=>V($.target.checked)}),"Use Elevator"]})]})]})]}),C.jsx("div",{className:"floor-plan-legend",children:C.jsx("div",{className:"floor-plan-legend-list"})}),i&&ut&&e&&C.jsxs("div",{className:"floor-plan-path-info",children:[C.jsxs("p",{children:["Path found: ",ut.path.length," junctions"]}),C.jsxs("p",{children:["Route: ",ut.path.join(" → ")]})]}),C.jsx("div",{className:"floor-plan-frame",children:C.jsx(O1,{initialScale:1,centerOnInit:!0,limitToBounds:!1,minScale:.2,maxScale:10,wheel:{step:50},doubleClick:{disabled:!0},children:({resetTransform:$})=>C.jsxs(C.Fragment,{children:[C.jsx("button",{className:"fit-to-view-button",onClick:()=>$(),children:"Fit to view"}),R&&k&&R!==k&&C.jsxs("button",{onClick:on,className:"fit-to-view-button",children:["Switch to Floor ",we===k?R:k]}),C.jsx("button",{onClick:()=>U(!x),children:x?"Hide Meeting Rooms":"Show Meeting Rooms"}),e&&C.jsxs(C.Fragment,{children:[C.jsx("button",{onClick:()=>E(!p),children:p?"Hide Points":"Show Points"}),C.jsx("button",{onClick:()=>w(!S),children:S?"Hide Junctions":"Show Junctions"})]}),C.jsx(V1,{children:C.jsxs("div",{className:"floor-plan-image-zommable-content",children:[C.jsx("img",{src:oa,alt:"Floor Plan",className:"floor-plan-image",style:{width:"100%",height:"auto",objectFit:"contain"}}),i&&ce&&ut&&C.jsx(gP,{segments:ut.segments,pathColor:ie,pathWidth:_e,showArrows:!0,showLine:he,arrowColor:ie,displayedFloor:we}),i&&ce&&ut&&ut.path.length>0&&(()=>{const fe=ut.path[0],Le=ut.path[ut.path.length-1],ht=ki.find(lt=>lt.label===fe),De=ki.find(lt=>lt.label===Le);let Yt=ut.path.find((lt,It)=>!!(lt.startsWith("B")&&It>0&&It<ut.path.length-1&&ut.path[It-1][1]!==ut.path[It+1][1]));Yt||(Yt=ut.path.filter(It=>It.startsWith("B"))[0]);const Gt=ki.find(lt=>lt.label===Yt);return C.jsxs(C.Fragment,{children:[ht&&C.jsx("div",{style:{position:"absolute",left:`${ht.x}%`,top:`${ht.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:"blue",borderRadius:"5%",width:"6px",height:"6px",pointerEvents:"none",zIndex:999}}),De&&C.jsx("div",{style:{position:"absolute",left:`${De.x}%`,top:`${De.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:"blue",borderRadius:"5%",width:"6px",height:"6px",pointerEvents:"none",zIndex:999}}),Gt&&C.jsx("div",{style:{position:"absolute",left:`${Gt.x}%`,top:`${Gt.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:"green",borderRadius:"5%",width:"6px",height:"6px",pointerEvents:"none",zIndex:999}})]})})(),gs.map((fe,Le)=>ct(fe.label)?C.jsx("div",{className:"point",style:{position:"absolute",left:`${fe.x}%`,top:`${fe.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:Ye(fe.label),borderRadius:"50%",width:`${Rt(fe.label)}px`,height:`${Rt(fe.label)}px`,zIndex:1002},children:C.jsx("span",{className:"tooltip",children:C.jsx("span",{style:{marginTop:`${fe.y+100}%`},children:fe.label})})},Le):null),ki.map((fe,Le)=>S?C.jsx("div",{style:{position:"absolute",left:`${fe.x}%`,top:`${fe.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:Ye(fe.label),borderRadius:"50%",width:`${Rt(fe.label)}px`,height:`${Rt(fe.label)}px`,pointerEvents:"none",zIndex:1002,display:"flex",alignItems:"center",justifyContent:"center",color:"black",fontSize:"10px",textAlign:"center",whiteSpace:"nowrap"},children:C.jsx("span",{style:{marginTop:`${fe.y+100}%`},children:fe.label})},Le):null),Do.map((fe,Le)=>x?C.jsx("div",{style:{position:"absolute",left:`${fe.x}%`,top:`${fe.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:Ye(fe.label),borderRadius:"50%",width:`${Rt(fe.label)}px`,height:`${Rt(fe.label)}px`,pointerEvents:"none",zIndex:1002,display:"flex",alignItems:"center",justifyContent:"center",color:"black",fontSize:"10px",textAlign:"center",whiteSpace:"nowrap"},children:C.jsx("span",{style:{marginTop:`${fe.y+100}%`},children:C.jsx("strong",{children:xn.get(fe.label)?`${xn.get(fe.label)} (${fe.label})`:fe.label})})},Le):null)]})})]})})})]})})},_P=({onShowOnMap:i,myLocation:e,setMyLocation:t,onSetTargetLocation:s,userSeatNumber:o})=>{const[u,f]=ue.useState(""),[m,g]=ue.useState(null),[p,E]=ue.useState(null),[S,w]=ue.useState(null),[x,U]=ue.useState("firstName"),[G,X]=ue.useState("asc"),[ce,ae]=ue.useState(!1),[ie,_e]=ue.useState([]),[he,we]=ue.useState([]),[M,A]=ue.useState([]);console.log("for removing errors after removing saveLocation option",t,s),ue.useEffect(()=>{(async()=>{try{const ye=await Tb(),le=await Sb(),Ie=await bb();_e(ye),we(le),A(Ie)}catch(ye){console.error("Error loading data:",ye)}})()},[]);const N=ue.useMemo(()=>{m&&g(null);const K=u.trim().toLowerCase();return K?ie.filter(le=>{const Ie=le.firstName.toLowerCase(),Ce=le.lastName.toLowerCase(),gt=le.seatNumber.toLowerCase(),Ct=`${Ie} ${Ce}`,on=`${Ce} ${Ie}`;return Ie.includes(K)||Ce.includes(K)||gt.includes(K)||Ct.includes(K)||on.includes(K)}).sort((le,Ie)=>{let Ce,gt;switch(x){case"firstName":Ce=le.firstName.toLowerCase(),gt=Ie.firstName.toLowerCase();break;case"lastName":Ce=le.lastName.toLowerCase(),gt=Ie.lastName.toLowerCase();break;case"seat":Ce=le.seatNumber.toLowerCase(),gt=Ie.seatNumber.toLowerCase();break;default:Ce=le.firstName.toLowerCase(),gt=Ie.firstName.toLowerCase()}const Ct=Ce.localeCompare(gt);return G==="asc"?Ct:-Ct}):[]},[u,ie,x,G]),O=ue.useMemo(()=>{p&&E(null);const K=u.trim().toLowerCase();return K?he.filter(ye=>{const le=ye.Name.toLowerCase(),Ie=ye.roomNumber.toLowerCase();return le.includes(K)||Ie.includes(K)}):[]},[u]),V=ue.useMemo(()=>{S&&w(null);const K=u.trim().toLowerCase();return K?M.filter(ye=>{const le=ye.Type.toLowerCase(),Ie=ye.roomNumber.toLowerCase();return le.includes(K)||Ie.includes(K)}):[]},[u]),k=K=>{ce&&O.length===0&&ae(!1),f(K.target.value)},R=()=>f(""),$e=K=>{g(K),E(null),w(null)},Ke=K=>{E(K),w(null),g(null)},F=K=>{E(null),w(K),g(null)},se=()=>{g(null),w(null),E(null)},me=K=>{U(K.target.value)},Ve=K=>{X(K.target.value)},D=u.trim()&&(ce&&O.length>0||!ce&&(N.length>0||O.length>0||V.length>0))&&!m&&!p&&!S,Z=K=>{const ye=K.target.checked;ae(ye)},re=()=>{console.log("debug - show on map",{searchValue:u,myLocation:e},p==null?void 0:p.roomNumber,S==null?void 0:S.roomNumber);let K=e;m!==null?i(m.seatNumber,K):p!=null&&p.roomNumber?i(p.roomNumber,K):S!=null&&S.roomNumber?i(S.roomNumber,K):i("",K)},te=()=>{let K="";m!==null?K=m.seatNumber:p!=null&&p.roomNumber?K=p.roomNumber:S!=null&&S.roomNumber&&(K=S.roomNumber),i(K,o)};return C.jsx("div",{className:"seat-finder-container",children:C.jsxs("div",{className:"seat-finder-content",children:[C.jsxs("div",{className:"seat-finder-header",children:[C.jsx("h2",{className:"seat-finder-title",children:"Seat Finder"}),C.jsx("p",{className:"seat-finder-subtitle",children:"Find colleagues and meeting rooms"})]}),C.jsxs("div",{className:"search-section",children:[C.jsxs("div",{className:"search-input-wrapper",children:[C.jsx("div",{className:"search-icon-container",children:C.jsx(fT,{className:"search-icon"})}),C.jsx("input",{type:"text",placeholder:"Search by name, seat, or room...",value:u,onChange:k,className:"search-input"}),u&&C.jsx("button",{className:"clear-search-button",onClick:R,"aria-label":"Clear search",children:C.jsx(io,{className:"search-icon"})})]}),m&&C.jsxs("div",{className:"selected-employee-container",children:[C.jsxs("div",{className:"selected-employee-info-wrapper",children:[C.jsxs("div",{className:"selected-employee-details",children:[C.jsx("div",{className:"selected-employee-icon-wrapper",children:C.jsx(dT,{className:"selected-employee-icon"})}),C.jsxs("div",{children:[C.jsxs("div",{className:"selected-employee-name",children:[m.firstName," ",m.lastName]}),C.jsxs("div",{className:"selected-employee-department",children:[m.department," • Seat ",m.seatNumber]})]})]}),C.jsx("button",{onClick:se,className:"selected-employee-close-button",children:C.jsx(io,{className:"selected-employee-close-icon"})})]}),(m.floor===4||m.floor===3||m.floor===2||m.floor===1)&&C.jsx("div",{className:"selected-item-actions",children:C.jsx("button",{className:"map-toggle-button",onClick:re,children:"Show on Map"})})]}),p&&C.jsxs("div",{className:"selected-employee-container",children:[C.jsxs("div",{className:"selected-employee-info-wrapper",children:[C.jsxs("div",{className:"selected-employee-details",children:[C.jsx("div",{className:"selected-employee-icon-wrapper",children:C.jsx(Zc,{className:"selected-employee-icon"})}),C.jsxs("div",{children:[C.jsx("div",{className:"selected-employee-name",children:p.Name}),C.jsxs("div",{className:"selected-employee-department",children:["Room ",p.roomNumber," • Floor ",p.floor," • Wing ",p.wing," • Capacity ",p.capacity," • ",p.Type," Room"]})]})]}),C.jsx("button",{onClick:se,className:"selected-employee-close-button",children:C.jsx(io,{className:"selected-employee-close-icon"})})]}),(p.floor===4||p.floor===3||p.floor===2||p.floor===1)&&C.jsx("div",{className:"selected-item-actions",children:C.jsx("button",{className:"map-toggle-button",onClick:re,children:"Show on Map"})})]}),S&&C.jsxs("div",{className:"selected-employee-container",children:[C.jsxs("div",{className:"selected-employee-info-wrapper",children:[C.jsxs("div",{className:"selected-employee-details",children:[C.jsx("div",{className:"selected-employee-icon-wrapper",children:C.jsx(Zc,{className:"selected-employee-icon"})}),C.jsxs("div",{children:[C.jsx("div",{className:"selected-employee-name",children:S.Type}),C.jsxs("div",{className:"selected-employee-department",children:["Room ",C.jsx("strong",{children:S.roomNumber})," • Floor ",S.floor," • Wing ",S.wing]})]})]}),C.jsx("button",{onClick:se,className:"selected-employee-close-button",children:C.jsx(io,{className:"selected-employee-close-icon"})})]}),(S.floor===4||S.floor===3||S.floor===2||S.floor===1)&&C.jsx("div",{className:"selected-item-actions",children:C.jsx("button",{className:"map-toggle-button",onClick:re,children:"Show on Map"})})]}),D&&C.jsxs("div",{className:"search-results-container",children:[C.jsxs("div",{className:"search-results-header",children:[C.jsxs("div",{children:[C.jsxs("h4",{className:"search-results-title",children:["Search Results (",N.length+O.length+V.length,")"]}),(N.length>0||V.length>0)&&O.length>0&&C.jsx("div",{className:"sort-control",children:C.jsxs("label",{children:[C.jsx("input",{type:"checkbox",checked:ce,onChange:Z}),"Only meeting rooms"]})})]}),C.jsxs("div",{className:"sorting-controls",children:[C.jsxs("div",{className:"sort-control",children:[C.jsx("label",{htmlFor:"sort-by",className:"sort-label",children:"Sort by:"}),C.jsxs("select",{id:"sort-by",value:x,onChange:me,className:"sort-select",children:[C.jsx("option",{value:"firstName",children:"First Name"}),C.jsx("option",{value:"lastName",children:"Last Name"}),C.jsx("option",{value:"seat",children:"Seat"})]})]}),C.jsxs("div",{className:"sort-control",children:[C.jsx("label",{htmlFor:"order-by",className:"sort-label",children:"Order by:"}),C.jsxs("select",{id:"order-by",value:G,onChange:Ve,className:"sort-select",children:[C.jsx("option",{value:"asc",children:"A to Z"}),C.jsx("option",{value:"desc",children:"Z to A"})]})]})]})]}),C.jsxs("div",{className:"search-results-list",children:[!ce&&N.map((K,ye)=>C.jsx("div",{onClick:()=>{$e(K)},className:"search-result-item group",children:C.jsxs("div",{className:"search-result-content",children:[C.jsxs("div",{className:"search-result-employee-info",children:[C.jsx("div",{className:"search-result-avatar-wrapper",children:C.jsxs("span",{className:"search-result-avatar-text",children:[K.firstName[0],K.lastName[0]]})}),C.jsxs("div",{children:[C.jsxs("div",{className:"search-result-name",children:[K.firstName," ",K.lastName]}),C.jsx("div",{className:"search-result-department",children:K.department})]})]}),C.jsxs("div",{className:"search-result-location",children:[C.jsxs("div",{className:"search-result-seat",children:[C.jsx(Qd,{className:"search-result-map-pin-icon"}),K.seatNumber]}),C.jsxs("div",{className:"search-result-floor-wing",children:["Floor ",K.floor," • Wing ",K.wing]})]})]})},ye)),O.map((K,ye)=>C.jsx("div",{onClick:()=>Ke(K),className:"search-result-item group",children:C.jsxs("div",{className:"search-result-content",children:[C.jsxs("div",{className:"search-result-employee-info",children:[C.jsx("div",{className:"search-result-avatar-wrapper",children:C.jsx("span",{className:"search-result-avatar-text",children:K.Name[0]})}),C.jsxs("div",{children:[C.jsx("div",{className:"search-result-name",children:K.Name}),C.jsxs("div",{className:"search-result-department",children:[K.Type," Room • Capacity ",K.capacity]})]})]}),C.jsxs("div",{className:"search-result-location",children:[C.jsxs("div",{className:"search-result-seat",children:[C.jsx(Qd,{className:"search-result-map-pin-icon"}),K.roomNumber]}),C.jsxs("div",{className:"search-result-floor-wing",children:["Floor ",K.floor," • Wing ",K.wing]})]})]})},ye)),!ce&&V.map((K,ye)=>C.jsx("div",{onClick:()=>F(K),className:"search-result-item group",children:C.jsxs("div",{className:"search-result-content",children:[C.jsxs("div",{className:"search-result-employee-info",children:[C.jsx("div",{className:"search-result-avatar-wrapper",children:C.jsx("span",{className:"search-result-avatar-text",children:K.Type[0]})}),C.jsx("div",{children:C.jsx("div",{className:"search-result-name",children:K.Type})})]}),C.jsxs("div",{className:"search-result-location",children:[C.jsxs("div",{className:"search-result-seat",children:[C.jsx(Qd,{className:"search-result-map-pin-icon"}),K.roomNumber]}),C.jsxs("div",{className:"search-result-floor-wing",children:["Floor ",K.floor," • Wing ",K.wing]})]})]})},ye))]})]}),C.jsx("label",{children:C.jsx("button",{className:"map-toggle-button",onClick:te,children:"Find me on map"})}),u.trim()&&N.length===0&&O.length===0&&V.length===0&&!m&&!p&&!S&&C.jsxs("div",{className:"no-employees-found-container",children:[C.jsx("div",{className:"no-employees-found-message",children:"No results found matching your search"}),C.jsx("div",{className:"no-employees-found-tip",children:"Try searching by name or seat number"})]})]})]})})},EP="1.1.01",TP="16/09/2025",$m={version:EP,date:TP},wb=ue.createContext(void 0),SP=({children:i})=>{const[e,t]=ue.useState(null),[s,o]=ue.useState(!0),[u,f]=ue.useState(null),m=$S(Hh),g={url:"https://yshauser.github.io/floor-plan-app/",handleCodeInApp:!0};ue.useEffect(()=>{const S=_D(m,w=>{t(w),o(!1)});if(pD(m,window.location.href)){let w=localStorage.getItem("emailForSignIn");w||(w=window.prompt("Please provide your email for confirmation")),w?(o(!0),gD(m,w,window.location.href).then(x=>{t(x.user),localStorage.removeItem("emailForSignIn"),f(null)}).catch(x=>{console.error("Error signing in with email link:",x),f(x.message),t(null)}).finally(()=>{o(!1),window.history.replaceState({},document.title,window.location.pathname)})):(f("Email not provided for sign-in link."),o(!1))}else o(!1);return()=>S()},[m]);const p=async S=>{o(!0),f(null);try{await mD(m,S,g),localStorage.setItem("emailForSignIn",S),alert("A sign-in link has been sent to your email address. Please check your inbox.")}catch(w){console.error("Error sending sign-in link:",w),f(w.message)}finally{o(!1)}},E=async()=>{o(!0),f(null);try{await m.signOut(),t(null),localStorage.removeItem("emailForSignIn")}catch(S){console.error("Error logging out:",S),f(S.message)}finally{o(!1)}};return C.jsx(wb.Provider,{value:{user:e,login:p,logout:E,loading:s,error:u},children:i})},Qp=()=>{const i=ue.useContext(wb);if(i===void 0)throw new Error("useAuth must be used within an AuthProvider");return i},bP=({setStartColor:i,setTargetColor:e,showNavigation:t,setShowNavigation:s,isDevModeEnabled:o,setDevModeEnabled:u,userEmail:f})=>{const{logout:m}=Qp(),[g,p]=ue.useState(!1),[E,S]=ue.useState(!1),[w,x]=ue.useState(!1),[U,G]=ue.useState(!1),X=ue.useRef(null),ce=()=>p(!g),ae=()=>{x(he=>!he)},ie=he=>{X.current&&!X.current.contains(he.target)&&p(!1)},_e=()=>{localStorage.removeItem("floorplan-start-color"),localStorage.removeItem("floorplan-target-color"),i&&i("#0000ff"),e&&e("#000000"),p(!1)};return ue.useEffect(()=>(document.addEventListener("mousedown",ie),()=>document.removeEventListener("mousedown",ie)),[]),C.jsxs("header",{className:"header",children:[C.jsxs("div",{className:"header-left",dir:"ltr",ref:X,children:[C.jsx("button",{className:"menu-button",onClick:ce,"aria-label":"Menu",children:C.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[C.jsx("line",{x1:"4",x2:"20",y1:"12",y2:"12"}),C.jsx("line",{x1:"4",x2:"20",y1:"6",y2:"6"}),C.jsx("line",{x1:"4",x2:"20",y1:"18",y2:"18"})]})}),g&&C.jsxs("div",{className:"menu-dropdown",children:[C.jsx("div",{onClick:_e,children:"Restore Default Colors"}),C.jsx("div",{onClick:()=>{S(!0),p(!1)},children:"About"}),C.jsx("div",{onClick:ae,children:"Settings ▸"}),w&&C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"submenu",onClick:()=>{s(!t),p(!1),x(!1)},children:t?"Hide Navigation":"Show Navigation"}),C.jsx("div",{className:"submenu",onClick:()=>{u(!o),p(!1),x(!1)},children:o?"Close Dev Mode":"Enable Dev Mode"})]}),C.jsxs("div",{onClick:()=>{G(!0),p(!1)},children:["Logout (",f,")"]})]})]}),U&&C.jsx("div",{className:"modal-overlay",onClick:()=>G(!1),children:C.jsxs("div",{className:"about-modal-content",onClick:he=>he.stopPropagation(),children:[C.jsx("h2",{children:"Confirm Logout"}),C.jsx("p",{children:"Do you want to logout?"}),C.jsx("button",{onClick:()=>{m(),G(!1)},className:"confirm-button",children:"Yes"}),C.jsx("button",{onClick:()=>G(!1),className:"cancel-button",children:"No"})]})}),E&&C.jsx("div",{className:"modal-overlay",onClick:()=>S(!1),children:C.jsxs("div",{className:"about-modal-content",onClick:he=>he.stopPropagation(),children:[C.jsx("h2",{children:"Seat Finder"}),C.jsxs("p",{children:["Version: ",$m.version]}),C.jsxs("p",{children:["Date: ",$m.date]}),C.jsxs("p",{children:["Logged in as: ",f]}),C.jsx("button",{onClick:()=>S(!1),className:"about-close-button",children:"Close"})]})})]})},wP=()=>{const[i,e]=ue.useState(""),[t,s]=ue.useState(null),{login:o,loading:u,error:f}=Qp(),m=async g=>{if(g.preventDefault(),s(null),!i.endsWith("@rbbn.com")){s("App is available only for Ribbon employees");return}await o(i)};return C.jsxs("div",{className:"login-dialog-overlay",children:[C.jsx("header",{className:"login-header",children:C.jsx("h1",{children:"Welcome to the Seat Finder App"})}),C.jsxs("div",{className:"login-dialog",children:[C.jsx("h2",{children:"Login"}),C.jsxs("form",{onSubmit:m,children:[C.jsxs("div",{className:"form-group",children:[C.jsx("label",{htmlFor:"email",children:"Email:"}),C.jsx("input",{type:"email",id:"email",value:i,onChange:g=>e(g.target.value),required:!0,disabled:u})]}),(f||t)&&C.jsx("p",{className:"error-message",children:f||t}),u&&C.jsx("p",{className:"loading-message",children:"Sending sign-in link..."}),C.jsx("button",{type:"submit",disabled:u,children:"Send Sign-in Link"}),C.jsx("p",{className:"info-message",children:"A sign-in link will be sent to your email address. Click the link to log in."})]}),C.jsxs("div",{className:"version-info",children:["Ver: ",$m.version]})]})]})},AP=()=>{const{user:i,loading:e}=Qp(),[t,s]=ue.useState(!1),[o,u]=ue.useState(!0),[f,m]=ue.useState(!1),[g,p]=ue.useState(""),[E,S]=ue.useState(()=>localStorage.getItem("myLocation")||""),[w,x]=ue.useState(()=>localStorage.getItem("floorplan-target-color")||"#000000"),[U,G]=ue.useState(()=>localStorage.getItem("floorplan-start-color")||"#0000ff"),[X,ce]=ue.useState(null),ae=ue.useRef(null);return ue.useEffect(()=>{t&&ae.current&&ae.current.scrollIntoView({behavior:"smooth",block:"center"}),(async()=>{if(i!=null&&i.email)try{const _e=await cP(i.email);ce(_e)}catch(_e){console.error("Error fetching employee data:",_e)}})()},[t,i]),ue.useEffect(()=>{i&&X&&!E&&S(X.seatNumber)},[i,X]),e?C.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:C.jsx("p",{children:"Loading user session..."})}):i?C.jsxs(C.Fragment,{children:[C.jsx(bP,{setStartColor:G,setTargetColor:x,showNavigation:o,setShowNavigation:u,isDevModeEnabled:f,setDevModeEnabled:m,userEmail:i.email||"Guest"}),C.jsx(_P,{searchValue:g,setSearchValue:p,onShowOnMap:(ie,_e)=>{ie&&p(ie),S(_e),s(!0)},myLocation:E,setMyLocation:S,onSetTargetLocation:ie=>{p(ie)},userSeatNumber:(X==null?void 0:X.seatNumber)||"N/A"}),t&&C.jsx("div",{ref:ae,children:C.jsx(vP,{showNavigation:o,isDevModeEnabled:f,targetRoom:g.trim(),setTargetRoom:p,myLocation:E.trim(),setMyLocation:S,startColor:U,setStartColor:G,targetColor:w,setTargetColor:x,onClose:()=>{console.log("Floor plan closed"),s(!1)}})})]}):C.jsx(wP,{})},CP=()=>C.jsx(SP,{children:C.jsx(AP,{})}),RP=sA.createRoot(document.getElementById("root"));RP.render(C.jsx(kt.StrictMode,{children:C.jsx(CP,{})}));
