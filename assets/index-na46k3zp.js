(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function L0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var wd={exports:{}},Al={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv;function nA(){if(kv)return Al;kv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return Al.Fragment=e,Al.jsx=n,Al.jsxs=n,Al}var xv;function iA(){return xv||(xv=1,wd.exports=nA()),wd.exports}var V=iA(),Cd={exports:{}},Ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv;function rA(){if(Lv)return Ie;Lv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),b=Symbol.iterator;function A(I){return I===null||typeof I!="object"?null:(I=b&&I[b]||I["@@iterator"],typeof I=="function"?I:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,G={};function X(I,Z,se){this.props=I,this.context=Z,this.refs=G,this.updater=se||x}X.prototype.isReactComponent={},X.prototype.setState=function(I,Z){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,Z,"setState")},X.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function oe(){}oe.prototype=X.prototype;function ae(I,Z,se){this.props=I,this.context=Z,this.refs=G,this.updater=se||x}var ne=ae.prototype=new oe;ne.constructor=ae,z(ne,X.prototype),ne.isPureReactComponent=!0;var _e=Array.isArray,ce={H:null,A:null,T:null,S:null,V:null},we=Object.prototype.hasOwnProperty;function M(I,Z,se,te,$,pe){return se=pe.ref,{$$typeof:r,type:I,key:Z,ref:se!==void 0?se:null,props:pe}}function w(I,Z){return M(I.type,Z,void 0,void 0,void 0,I.props)}function C(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function D(I){var Z={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(se){return Z[se]})}var P=/\/+/g;function k(I,Z){return typeof I=="object"&&I!==null&&I.key!=null?D(""+I.key):Z.toString(36)}function N(){}function st(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(N,N):(I.status="pending",I.then(function(Z){I.status==="pending"&&(I.status="fulfilled",I.value=Z)},function(Z){I.status==="pending"&&(I.status="rejected",I.reason=Z)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function Le(I,Z,se,te,$){var pe=typeof I;(pe==="undefined"||pe==="boolean")&&(I=null);var fe=!1;if(I===null)fe=!0;else switch(pe){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(I.$$typeof){case r:case e:fe=!0;break;case T:return fe=I._init,Le(fe(I._payload),Z,se,te,$)}}if(fe)return $=$(I),fe=te===""?"."+k(I,0):te,_e($)?(se="",fe!=null&&(se=fe.replace(P,"$&/")+"/"),Le($,Z,se,"",function(ot){return ot})):$!=null&&(C($)&&($=w($,se+($.key==null||I&&I.key===$.key?"":(""+$.key).replace(P,"$&/")+"/")+fe)),Z.push($)),1;fe=0;var Se=te===""?".":te+":";if(_e(I))for(var Ne=0;Ne<I.length;Ne++)te=I[Ne],pe=Se+k(te,Ne),fe+=Le(te,Z,se,pe,$);else if(Ne=A(I),typeof Ne=="function")for(I=Ne.call(I),Ne=0;!(te=I.next()).done;)te=te.value,pe=Se+k(te,Ne++),fe+=Le(te,Z,se,pe,$);else if(pe==="object"){if(typeof I.then=="function")return Le(st(I),Z,se,te,$);throw Z=String(I),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return fe}function Y(I,Z,se){if(I==null)return I;var te=[],$=0;return Le(I,te,"","",function(pe){return Z.call(se,pe,$++)}),te}function ee(I){if(I._status===-1){var Z=I._result;Z=Z(),Z.then(function(se){(I._status===0||I._status===-1)&&(I._status=1,I._result=se)},function(se){(I._status===0||I._status===-1)&&(I._status=2,I._result=se)}),I._status===-1&&(I._status=0,I._result=Z)}if(I._status===1)return I._result.default;throw I._result}var le=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function De(){}return Ie.Children={map:Y,forEach:function(I,Z,se){Y(I,function(){Z.apply(this,arguments)},se)},count:function(I){var Z=0;return Y(I,function(){Z++}),Z},toArray:function(I){return Y(I,function(Z){return Z})||[]},only:function(I){if(!C(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Ie.Component=X,Ie.Fragment=n,Ie.Profiler=o,Ie.PureComponent=ae,Ie.StrictMode=s,Ie.Suspense=y,Ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ce,Ie.__COMPILER_RUNTIME={__proto__:null,c:function(I){return ce.H.useMemoCache(I)}},Ie.cache=function(I){return function(){return I.apply(null,arguments)}},Ie.cloneElement=function(I,Z,se){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var te=z({},I.props),$=I.key,pe=void 0;if(Z!=null)for(fe in Z.ref!==void 0&&(pe=void 0),Z.key!==void 0&&($=""+Z.key),Z)!we.call(Z,fe)||fe==="key"||fe==="__self"||fe==="__source"||fe==="ref"&&Z.ref===void 0||(te[fe]=Z[fe]);var fe=arguments.length-2;if(fe===1)te.children=se;else if(1<fe){for(var Se=Array(fe),Ne=0;Ne<fe;Ne++)Se[Ne]=arguments[Ne+2];te.children=Se}return M(I.type,$,void 0,void 0,pe,te)},Ie.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:u,_context:I},I},Ie.createElement=function(I,Z,se){var te,$={},pe=null;if(Z!=null)for(te in Z.key!==void 0&&(pe=""+Z.key),Z)we.call(Z,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&($[te]=Z[te]);var fe=arguments.length-2;if(fe===1)$.children=se;else if(1<fe){for(var Se=Array(fe),Ne=0;Ne<fe;Ne++)Se[Ne]=arguments[Ne+2];$.children=Se}if(I&&I.defaultProps)for(te in fe=I.defaultProps,fe)$[te]===void 0&&($[te]=fe[te]);return M(I,pe,void 0,void 0,null,$)},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(I){return{$$typeof:m,render:I}},Ie.isValidElement=C,Ie.lazy=function(I){return{$$typeof:T,_payload:{_status:-1,_result:I},_init:ee}},Ie.memo=function(I,Z){return{$$typeof:g,type:I,compare:Z===void 0?null:Z}},Ie.startTransition=function(I){var Z=ce.T,se={};ce.T=se;try{var te=I(),$=ce.S;$!==null&&$(se,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(De,le)}catch(pe){le(pe)}finally{ce.T=Z}},Ie.unstable_useCacheRefresh=function(){return ce.H.useCacheRefresh()},Ie.use=function(I){return ce.H.use(I)},Ie.useActionState=function(I,Z,se){return ce.H.useActionState(I,Z,se)},Ie.useCallback=function(I,Z){return ce.H.useCallback(I,Z)},Ie.useContext=function(I){return ce.H.useContext(I)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(I,Z){return ce.H.useDeferredValue(I,Z)},Ie.useEffect=function(I,Z,se){var te=ce.H;if(typeof se=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return te.useEffect(I,Z)},Ie.useId=function(){return ce.H.useId()},Ie.useImperativeHandle=function(I,Z,se){return ce.H.useImperativeHandle(I,Z,se)},Ie.useInsertionEffect=function(I,Z){return ce.H.useInsertionEffect(I,Z)},Ie.useLayoutEffect=function(I,Z){return ce.H.useLayoutEffect(I,Z)},Ie.useMemo=function(I,Z){return ce.H.useMemo(I,Z)},Ie.useOptimistic=function(I,Z){return ce.H.useOptimistic(I,Z)},Ie.useReducer=function(I,Z,se){return ce.H.useReducer(I,Z,se)},Ie.useRef=function(I){return ce.H.useRef(I)},Ie.useState=function(I){return ce.H.useState(I)},Ie.useSyncExternalStore=function(I,Z,se){return ce.H.useSyncExternalStore(I,Z,se)},Ie.useTransition=function(){return ce.H.useTransition()},Ie.version="19.1.0",Ie}var Uv;function Dm(){return Uv||(Uv=1,Cd.exports=rA()),Cd.exports}var de=Dm();const nn=L0(de);var Rd={exports:{}},wl={},Nd={exports:{}},Id={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv;function sA(){return zv||(zv=1,function(r){function e(Y,ee){var le=Y.length;Y.push(ee);e:for(;0<le;){var De=le-1>>>1,I=Y[De];if(0<o(I,ee))Y[De]=ee,Y[le]=I,le=De;else break e}}function n(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var ee=Y[0],le=Y.pop();if(le!==ee){Y[0]=le;e:for(var De=0,I=Y.length,Z=I>>>1;De<Z;){var se=2*(De+1)-1,te=Y[se],$=se+1,pe=Y[$];if(0>o(te,le))$<I&&0>o(pe,te)?(Y[De]=pe,Y[$]=le,De=$):(Y[De]=te,Y[se]=le,De=se);else if($<I&&0>o(pe,le))Y[De]=pe,Y[$]=le,De=$;else break e}}return ee}function o(Y,ee){var le=Y.sortIndex-ee.sortIndex;return le!==0?le:Y.id-ee.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var y=[],g=[],T=1,b=null,A=3,x=!1,z=!1,G=!1,X=!1,oe=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;function _e(Y){for(var ee=n(g);ee!==null;){if(ee.callback===null)s(g);else if(ee.startTime<=Y)s(g),ee.sortIndex=ee.expirationTime,e(y,ee);else break;ee=n(g)}}function ce(Y){if(G=!1,_e(Y),!z)if(n(y)!==null)z=!0,we||(we=!0,k());else{var ee=n(g);ee!==null&&Le(ce,ee.startTime-Y)}}var we=!1,M=-1,w=5,C=-1;function D(){return X?!0:!(r.unstable_now()-C<w)}function P(){if(X=!1,we){var Y=r.unstable_now();C=Y;var ee=!0;try{e:{z=!1,G&&(G=!1,ae(M),M=-1),x=!0;var le=A;try{t:{for(_e(Y),b=n(y);b!==null&&!(b.expirationTime>Y&&D());){var De=b.callback;if(typeof De=="function"){b.callback=null,A=b.priorityLevel;var I=De(b.expirationTime<=Y);if(Y=r.unstable_now(),typeof I=="function"){b.callback=I,_e(Y),ee=!0;break t}b===n(y)&&s(y),_e(Y)}else s(y);b=n(y)}if(b!==null)ee=!0;else{var Z=n(g);Z!==null&&Le(ce,Z.startTime-Y),ee=!1}}break e}finally{b=null,A=le,x=!1}ee=void 0}}finally{ee?k():we=!1}}}var k;if(typeof ne=="function")k=function(){ne(P)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,st=N.port2;N.port1.onmessage=P,k=function(){st.postMessage(null)}}else k=function(){oe(P,0)};function Le(Y,ee){M=oe(function(){Y(r.unstable_now())},ee)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Y){Y.callback=null},r.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<Y?Math.floor(1e3/Y):5},r.unstable_getCurrentPriorityLevel=function(){return A},r.unstable_next=function(Y){switch(A){case 1:case 2:case 3:var ee=3;break;default:ee=A}var le=A;A=ee;try{return Y()}finally{A=le}},r.unstable_requestPaint=function(){X=!0},r.unstable_runWithPriority=function(Y,ee){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var le=A;A=Y;try{return ee()}finally{A=le}},r.unstable_scheduleCallback=function(Y,ee,le){var De=r.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?De+le:De):le=De,Y){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=le+I,Y={id:T++,callback:ee,priorityLevel:Y,startTime:le,expirationTime:I,sortIndex:-1},le>De?(Y.sortIndex=le,e(g,Y),n(y)===null&&Y===n(g)&&(G?(ae(M),M=-1):G=!0,Le(ce,le-De))):(Y.sortIndex=I,e(y,Y),z||x||(z=!0,we||(we=!0,k()))),Y},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(Y){var ee=A;return function(){var le=A;A=ee;try{return Y.apply(this,arguments)}finally{A=le}}}}(Id)),Id}var jv;function aA(){return jv||(jv=1,Nd.exports=sA()),Nd.exports}var Dd={exports:{}},Wt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv;function oA(){if(Bv)return Wt;Bv=1;var r=Dm();function e(y){var g="https://react.dev/errors/"+y;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)g+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+y+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(y,g,T){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:y,containerInfo:g,implementation:T}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(y,g){if(y==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Wt.createPortal=function(y,g){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return u(y,g,null,T)},Wt.flushSync=function(y){var g=f.T,T=s.p;try{if(f.T=null,s.p=2,y)return y()}finally{f.T=g,s.p=T,s.d.f()}},Wt.preconnect=function(y,g){typeof y=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(y,g))},Wt.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},Wt.preinit=function(y,g){if(typeof y=="string"&&g&&typeof g.as=="string"){var T=g.as,b=m(T,g.crossOrigin),A=typeof g.integrity=="string"?g.integrity:void 0,x=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;T==="style"?s.d.S(y,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:A,fetchPriority:x}):T==="script"&&s.d.X(y,{crossOrigin:b,integrity:A,fetchPriority:x,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Wt.preinitModule=function(y,g){if(typeof y=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var T=m(g.as,g.crossOrigin);s.d.M(y,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(y)},Wt.preload=function(y,g){if(typeof y=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var T=g.as,b=m(T,g.crossOrigin);s.d.L(y,T,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Wt.preloadModule=function(y,g){if(typeof y=="string")if(g){var T=m(g.as,g.crossOrigin);s.d.m(y,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(y)},Wt.requestFormReset=function(y){s.d.r(y)},Wt.unstable_batchedUpdates=function(y,g){return y(g)},Wt.useFormState=function(y,g,T){return f.H.useFormState(y,g,T)},Wt.useFormStatus=function(){return f.H.useHostTransitionStatus()},Wt.version="19.1.0",Wt}var qv;function lA(){if(qv)return Dd.exports;qv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Dd.exports=oA(),Dd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv;function uA(){if(Hv)return wl;Hv=1;var r=aA(),e=Dm(),n=lA();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function y(t){var i=t.alternate;if(!i){if(i=u(t),i===null)throw Error(s(188));return i!==t?null:t}for(var a=t,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return m(h),t;if(d===l)return m(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var _=!1,E=h.child;E;){if(E===a){_=!0,a=h,l=d;break}if(E===l){_=!0,l=h,a=d;break}E=E.sibling}if(!_){for(E=d.child;E;){if(E===a){_=!0,a=d,l=h;break}if(E===l){_=!0,l=d,a=h;break}E=E.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var T=Object.assign,b=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),oe=Symbol.for("react.provider"),ae=Symbol.for("react.consumer"),ne=Symbol.for("react.context"),_e=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),we=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function k(t){return t===null||typeof t!="object"?null:(t=P&&t[P]||t["@@iterator"],typeof t=="function"?t:null)}var N=Symbol.for("react.client.reference");function st(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===N?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case z:return"Fragment";case X:return"Profiler";case G:return"StrictMode";case ce:return"Suspense";case we:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case x:return"Portal";case ne:return(t.displayName||"Context")+".Provider";case ae:return(t._context.displayName||"Context")+".Consumer";case _e:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case M:return i=t.displayName||null,i!==null?i:st(t.type)||"Memo";case w:i=t._payload,t=t._init;try{return st(t(i))}catch{}}return null}var Le=Array.isArray,Y=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},De=[],I=-1;function Z(t){return{current:t}}function se(t){0>I||(t.current=De[I],De[I]=null,I--)}function te(t,i){I++,De[I]=t.current,t.current=i}var $=Z(null),pe=Z(null),fe=Z(null),Se=Z(null);function Ne(t,i){switch(te(fe,i),te(pe,t),te($,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?uv(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=uv(i),t=cv(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}se($),te($,t)}function ot(){se($),se(pe),se(fe)}function Nt(t){t.memoizedState!==null&&te(Se,t);var i=$.current,a=cv(i,t.type);i!==a&&(te(pe,t),te($,a))}function Qt(t){pe.current===t&&(se($),se(pe)),Se.current===t&&(se(Se),_l._currentValue=le)}var Gn=Object.prototype.hasOwnProperty,In=r.unstable_scheduleCallback,Dn=r.unstable_cancelCallback,Di=r.unstable_shouldYield,ta=r.unstable_requestPaint,an=r.unstable_now,ye=r.unstable_getCurrentPriorityLevel,He=r.unstable_ImmediatePriority,on=r.unstable_UserBlockingPriority,vn=r.unstable_NormalPriority,Xn=r.unstable_LowPriority,_n=r.unstable_IdlePriority,On=r.log,dt=r.unstable_setDisableYieldValue,Ye=null,Qe=null;function Tn(t){if(typeof On=="function"&&dt(t),Qe&&typeof Qe.setStrictMode=="function")try{Qe.setStrictMode(Ye,t)}catch{}}var $t=Math.clz32?Math.clz32:ls,iu=Math.log,Ch=Math.LN2;function ls(t){return t>>>=0,t===0?32:31-(iu(t)/Ch|0)|0}var us=256,cs=4194304;function Kn(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function na(t,i,a){var l=t.pendingLanes;if(l===0)return 0;var h=0,d=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=l&134217727;return E!==0?(l=E&~d,l!==0?h=Kn(l):(_&=E,_!==0?h=Kn(_):a||(a=E&~t,a!==0&&(h=Kn(a))))):(E=l&~d,E!==0?h=Kn(E):_!==0?h=Kn(_):a||(a=l&~t,a!==0&&(h=Kn(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function hs(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function _o(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function To(){var t=us;return us<<=1,(us&4194048)===0&&(us=256),t}function Eo(){var t=cs;return cs<<=1,(cs&62914560)===0&&(cs=4194304),t}function Oi(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Mi(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function So(t,i,a,l,h,d){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,R=t.expirationTimes,B=t.hiddenUpdates;for(a=_&~a;0<a;){var K=31-$t(a),W=1<<K;E[K]=0,R[K]=-1;var q=B[K];if(q!==null)for(B[K]=null,K=0;K<q.length;K++){var H=q[K];H!==null&&(H.lane&=-536870913)}a&=~W}l!==0&&ii(t,l,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(_&~i))}function ii(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-$t(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function bo(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-$t(a),h=1<<l;h&i|t[l]&i&&(t[l]|=i),a&=~h}}function hr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ia(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function fr(){var t=ee.p;return t!==0?t:(t=window.event,t===void 0?32:Iv(t.type))}function ru(t,i){var a=ee.p;try{return ee.p=t,i()}finally{ee.p=a}}var lt=Math.random().toString(36).slice(2),It="__reactFiber$"+lt,Et="__reactProps$"+lt,Mn="__reactContainer$"+lt,Ao="__reactEvents$"+lt,Rh="__reactListeners$"+lt,dr="__reactHandles$"+lt,su="__reactResources$"+lt,fs="__reactMarker$"+lt;function mr(t){delete t[It],delete t[Et],delete t[Ao],delete t[Rh],delete t[dr]}function Pi(t){var i=t[It];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Mn]||a[It]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=mv(t);t!==null;){if(a=t[It])return a;t=mv(t)}return i}t=a,a=t.parentNode}return null}function ri(t){if(t=t[It]||t[Mn]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function si(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function ln(t){var i=t[su];return i||(i=t[su]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function gt(t){t[fs]=!0}var wo=new Set,ra={};function Qn(t,i){Vi(t,i),Vi(t+"Capture",i)}function Vi(t,i){for(ra[t]=i,t=0;t<i.length;t++)wo.add(i[t])}var au=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ou={},ds={};function lu(t){return Gn.call(ds,t)?!0:Gn.call(ou,t)?!1:au.test(t)?ds[t]=!0:(ou[t]=!0,!1)}function pr(t,i,a){if(lu(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function ai(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function qt(t,i,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+l)}}var ms,uu;function ki(t){if(ms===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);ms=i&&i[1]||"",uu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ms+t+uu}var sa=!1;function aa(t,i){if(!t||sa)return"";sa=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(H){var q=H}Reflect.construct(t,[],W)}else{try{W.call()}catch(H){q=H}t.call(W.prototype)}}else{try{throw Error()}catch(H){q=H}(W=t())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(H){if(H&&q&&typeof H.stack=="string")return[H.stack,q.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),_=d[0],E=d[1];if(_&&E){var R=_.split(`
`),B=E.split(`
`);for(h=l=0;l<R.length&&!R[l].includes("DetermineComponentFrameRoot");)l++;for(;h<B.length&&!B[h].includes("DetermineComponentFrameRoot");)h++;if(l===R.length||h===B.length)for(l=R.length-1,h=B.length-1;1<=l&&0<=h&&R[l]!==B[h];)h--;for(;1<=l&&0<=h;l--,h--)if(R[l]!==B[h]){if(l!==1||h!==1)do if(l--,h--,0>h||R[l]!==B[h]){var K=`
`+R[l].replace(" at new "," at ");return t.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",t.displayName)),K}while(1<=l&&0<=h);break}}}finally{sa=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ki(a):""}function Co(t){switch(t.tag){case 26:case 27:case 5:return ki(t.type);case 16:return ki("Lazy");case 13:return ki("Suspense");case 19:return ki("SuspenseList");case 0:case 15:return aa(t.type,!1);case 11:return aa(t.type.render,!1);case 1:return aa(t.type,!0);case 31:return ki("Activity");default:return""}}function oa(t){try{var i="";do i+=Co(t),t=t.return;while(t);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function un(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ro(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Nh(t){var i=Ro(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(_){l=""+_,d.call(this,_)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(_){l=""+_},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function la(t){t._valueTracker||(t._valueTracker=Nh(t))}function No(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Ro(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function ps(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ih=/[\n"\\]/g;function St(t){return t.replace(Ih,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function En(t,i,a,l,h,d,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),i!=null?_==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+un(i)):t.value!==""+un(i)&&(t.value=""+un(i)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),i!=null?gr(t,_,un(i)):a!=null?gr(t,_,un(a)):l!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+un(E):t.removeAttribute("name")}function gs(t,i,a,l,h,d,_,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+un(a):"",i=i!=null?""+un(i):a,E||i===t.value||(t.value=i),t.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=E?t.checked:!!l,t.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_)}function gr(t,i,a){i==="number"&&ps(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function xi(t,i,a,l){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+un(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function We(t,i,a){if(i!=null&&(i=""+un(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+un(a):""}function ys(t,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(Le(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=un(i),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function Pn(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var vs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cu(t,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,a):typeof a!="number"||a===0||vs.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function Io(t,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&cu(t,h,l)}else for(var d in i)i.hasOwnProperty(d)&&cu(t,d,i[d])}function Do(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Oh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ua(t){return Oh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Li=null;function Vn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ui=null,zi=null;function Oo(t){var i=ri(t);if(i&&(t=i.stateNode)){var a=t[Et]||null;e:switch(t=i.stateNode,i.type){case"input":if(En(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+St(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var h=l[Et]||null;if(!h)throw Error(s(90));En(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===t.form&&No(l)}break e;case"textarea":We(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&xi(t,!!a.multiple,i,!1)}}}var oi=!1;function hu(t,i,a){if(oi)return t(i,a);oi=!0;try{var l=t(i);return l}finally{if(oi=!1,(Ui!==null||zi!==null)&&(rc(),Ui&&(i=Ui,t=zi,zi=Ui=null,Oo(i),t)))for(i=0;i<t.length;i++)Oo(t[i])}}function _s(t,i){var a=t.stateNode;if(a===null)return null;var l=a[Et]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kn=!1;if($n)try{var Ts={};Object.defineProperty(Ts,"passive",{get:function(){kn=!0}}),window.addEventListener("test",Ts,Ts),window.removeEventListener("test",Ts,Ts)}catch{kn=!1}var li=null,yr=null,ji=null;function Mo(){if(ji)return ji;var t,i=yr,a=i.length,l,h="value"in li?li.value:li.textContent,d=h.length;for(t=0;t<a&&i[t]===h[t];t++);var _=a-t;for(l=1;l<=_&&i[a-l]===h[d-l];l++);return ji=h.slice(t,1<l?1-l:void 0)}function ui(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ci(){return!0}function Po(){return!1}function xt(t){function i(a,l,h,d,_){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ci:Po,this.isPropagationStopped=Po,this}return T(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ci)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ci)},persist:function(){},isPersistent:ci}),i}var Ke={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ca=xt(Ke),Es=T({},Ke,{view:0,detail:0}),fu=xt(Es),ha,fa,hi,Ss=T({},Es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ws,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==hi&&(hi&&t.type==="mousemove"?(ha=t.screenX-hi.screenX,fa=t.screenY-hi.screenY):fa=ha=0,hi=t),ha)},movementY:function(t){return"movementY"in t?t.movementY:fa}}),xn=xt(Ss),du=T({},Ss,{dataTransfer:0}),Mh=xt(du),bs=T({},Es,{relatedTarget:0}),da=xt(bs),Vo=T({},Ke,{animationName:0,elapsedTime:0,pseudoElement:0}),ma=xt(Vo),mu=T({},Ke,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pa=xt(mu),Ph=T({},Ke,{data:0}),ko=xt(Ph),As={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xo(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=gu[t])?!!i[t]:!1}function ws(){return xo}var yu=T({},Es,{key:function(t){if(t.key){var i=As[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ui(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?pu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ws,charCode:function(t){return t.type==="keypress"?ui(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ui(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ga=xt(yu),vu=T({},Ss,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lo=xt(vu),Bi=T({},Es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ws}),_u=xt(Bi),Tu=T({},Ke,{propertyName:0,elapsedTime:0,pseudoElement:0}),Eu=xt(Tu),Su=T({},Ss,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ya=xt(Su),cn=T({},Ke,{newState:0,oldState:0}),bu=xt(cn),Au=[9,13,27,32],fi=$n&&"CompositionEvent"in window,c=null;$n&&"documentMode"in document&&(c=document.documentMode);var p=$n&&"TextEvent"in window&&!c,v=$n&&(!fi||c&&8<c&&11>=c),S=" ",U=!1;function F(t,i){switch(t){case"keyup":return Au.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function re(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ue=!1;function Dt(t,i){switch(t){case"compositionend":return re(i);case"keypress":return i.which!==32?null:(U=!0,S);case"textInput":return t=i.data,t===S&&U?null:t;default:return null}}function ze(t,i){if(Ue)return t==="compositionend"||!fi&&F(t,i)?(t=Mo(),ji=yr=li=null,Ue=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return v&&i.locale!=="ko"?null:i.data;default:return null}}var Lt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ot(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Lt[t.type]:i==="textarea"}function qi(t,i,a,l){Ui?zi?zi.push(l):zi=[l]:Ui=l,i=cc(i,"onChange"),0<i.length&&(a=new ca("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var Ht=null,di=null;function Uo(t){rv(t,0)}function wu(t){var i=si(t);if(No(i))return t}function wp(t,i){if(t==="change")return i}var Cp=!1;if($n){var Vh;if($n){var kh="oninput"in document;if(!kh){var Rp=document.createElement("div");Rp.setAttribute("oninput","return;"),kh=typeof Rp.oninput=="function"}Vh=kh}else Vh=!1;Cp=Vh&&(!document.documentMode||9<document.documentMode)}function Np(){Ht&&(Ht.detachEvent("onpropertychange",Ip),di=Ht=null)}function Ip(t){if(t.propertyName==="value"&&wu(di)){var i=[];qi(i,di,t,Vn(t)),hu(Uo,i)}}function MS(t,i,a){t==="focusin"?(Np(),Ht=i,di=a,Ht.attachEvent("onpropertychange",Ip)):t==="focusout"&&Np()}function PS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wu(di)}function VS(t,i){if(t==="click")return wu(i)}function kS(t,i){if(t==="input"||t==="change")return wu(i)}function xS(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Sn=typeof Object.is=="function"?Object.is:xS;function zo(t,i){if(Sn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Gn.call(i,h)||!Sn(t[h],i[h]))return!1}return!0}function Dp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Op(t,i){var a=Dp(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Dp(a)}}function Mp(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Mp(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Pp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=ps(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=ps(t.document)}return i}function xh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var LS=$n&&"documentMode"in document&&11>=document.documentMode,va=null,Lh=null,jo=null,Uh=!1;function Vp(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uh||va==null||va!==ps(l)||(l=va,"selectionStart"in l&&xh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),jo&&zo(jo,l)||(jo=l,l=cc(Lh,"onSelect"),0<l.length&&(i=new ca("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=va)))}function Cs(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var _a={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionrun:Cs("Transition","TransitionRun"),transitionstart:Cs("Transition","TransitionStart"),transitioncancel:Cs("Transition","TransitionCancel"),transitionend:Cs("Transition","TransitionEnd")},zh={},kp={};$n&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete _a.animationend.animation,delete _a.animationiteration.animation,delete _a.animationstart.animation),"TransitionEvent"in window||delete _a.transitionend.transition);function Rs(t){if(zh[t])return zh[t];if(!_a[t])return t;var i=_a[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in kp)return zh[t]=i[a];return t}var xp=Rs("animationend"),Lp=Rs("animationiteration"),Up=Rs("animationstart"),US=Rs("transitionrun"),zS=Rs("transitionstart"),jS=Rs("transitioncancel"),zp=Rs("transitionend"),jp=new Map,jh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jh.push("scrollEnd");function Zn(t,i){jp.set(t,i),Qn(i,[t])}var Bp=new WeakMap;function Ln(t,i){if(typeof t=="object"&&t!==null){var a=Bp.get(t);return a!==void 0?a:(i={value:t,source:i,stack:oa(i)},Bp.set(t,i),i)}return{value:t,source:i,stack:oa(i)}}var Un=[],Ta=0,Bh=0;function Cu(){for(var t=Ta,i=Bh=Ta=0;i<t;){var a=Un[i];Un[i++]=null;var l=Un[i];Un[i++]=null;var h=Un[i];Un[i++]=null;var d=Un[i];if(Un[i++]=null,l!==null&&h!==null){var _=l.pending;_===null?h.next=h:(h.next=_.next,_.next=h),l.pending=h}d!==0&&qp(a,h,d)}}function Ru(t,i,a,l){Un[Ta++]=t,Un[Ta++]=i,Un[Ta++]=a,Un[Ta++]=l,Bh|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function qh(t,i,a,l){return Ru(t,i,a,l),Nu(t)}function Ea(t,i){return Ru(t,null,null,i),Nu(t)}function qp(t,i,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,h&&i!==null&&(h=31-$t(a),t=d.hiddenUpdates,l=t[h],l===null?t[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function Nu(t){if(50<hl)throw hl=0,Qf=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Sa={};function BS(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,i,a,l){return new BS(t,i,a,l)}function Hh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hi(t,i){var a=t.alternate;return a===null?(a=bn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Hp(t,i){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Iu(t,i,a,l,h,d){var _=0;if(l=t,typeof t=="function")Hh(t)&&(_=1);else if(typeof t=="string")_=Hb(t,a,$.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=bn(31,a,i,h),t.elementType=C,t.lanes=d,t;case z:return Ns(a.children,h,d,i);case G:_=8,h|=24;break;case X:return t=bn(12,a,i,h|2),t.elementType=X,t.lanes=d,t;case ce:return t=bn(13,a,i,h),t.elementType=ce,t.lanes=d,t;case we:return t=bn(19,a,i,h),t.elementType=we,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case oe:case ne:_=10;break e;case ae:_=9;break e;case _e:_=11;break e;case M:_=14;break e;case w:_=16,l=null;break e}_=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return i=bn(_,a,i,h),i.elementType=t,i.type=l,i.lanes=d,i}function Ns(t,i,a,l){return t=bn(7,t,l,i),t.lanes=a,t}function Fh(t,i,a){return t=bn(6,t,null,i),t.lanes=a,t}function Yh(t,i,a){return i=bn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var ba=[],Aa=0,Du=null,Ou=0,zn=[],jn=0,Is=null,Fi=1,Yi="";function Ds(t,i){ba[Aa++]=Ou,ba[Aa++]=Du,Du=t,Ou=i}function Fp(t,i,a){zn[jn++]=Fi,zn[jn++]=Yi,zn[jn++]=Is,Is=t;var l=Fi;t=Yi;var h=32-$t(l)-1;l&=~(1<<h),a+=1;var d=32-$t(i)+h;if(30<d){var _=h-h%5;d=(l&(1<<_)-1).toString(32),l>>=_,h-=_,Fi=1<<32-$t(i)+h|a<<h|l,Yi=d+t}else Fi=1<<d|a<<h|l,Yi=t}function Gh(t){t.return!==null&&(Ds(t,1),Fp(t,1,0))}function Xh(t){for(;t===Du;)Du=ba[--Aa],ba[Aa]=null,Ou=ba[--Aa],ba[Aa]=null;for(;t===Is;)Is=zn[--jn],zn[jn]=null,Yi=zn[--jn],zn[jn]=null,Fi=zn[--jn],zn[jn]=null}var hn=null,mt=null,Xe=!1,Os=null,mi=!1,Kh=Error(s(519));function Ms(t){var i=Error(s(418,""));throw Ho(Ln(i,t)),Kh}function Yp(t){var i=t.stateNode,a=t.type,l=t.memoizedProps;switch(i[It]=t,i[Et]=l,a){case"dialog":Ve("cancel",i),Ve("close",i);break;case"iframe":case"object":case"embed":Ve("load",i);break;case"video":case"audio":for(a=0;a<dl.length;a++)Ve(dl[a],i);break;case"source":Ve("error",i);break;case"img":case"image":case"link":Ve("error",i),Ve("load",i);break;case"details":Ve("toggle",i);break;case"input":Ve("invalid",i),gs(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),la(i);break;case"select":Ve("invalid",i);break;case"textarea":Ve("invalid",i),ys(i,l.value,l.defaultValue,l.children),la(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||lv(i.textContent,a)?(l.popover!=null&&(Ve("beforetoggle",i),Ve("toggle",i)),l.onScroll!=null&&Ve("scroll",i),l.onScrollEnd!=null&&Ve("scrollend",i),l.onClick!=null&&(i.onclick=hc),i=!0):i=!1,i||Ms(t)}function Gp(t){for(hn=t.return;hn;)switch(hn.tag){case 5:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:hn=hn.return}}function Bo(t){if(t!==hn)return!1;if(!Xe)return Gp(t),Xe=!0,!1;var i=t.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||hd(t.type,t.memoizedProps)),a=!a),a&&mt&&Ms(t),Gp(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(i===0){mt=Jn(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;t=t.nextSibling}mt=null}}else i===27?(i=mt,Pr(t.type)?(t=pd,pd=null,mt=t):mt=i):mt=hn?Jn(t.stateNode.nextSibling):null;return!0}function qo(){mt=hn=null,Xe=!1}function Xp(){var t=Os;return t!==null&&(gn===null?gn=t:gn.push.apply(gn,t),Os=null),t}function Ho(t){Os===null?Os=[t]:Os.push(t)}var Qh=Z(null),Ps=null,Gi=null;function vr(t,i,a){te(Qh,i._currentValue),i._currentValue=a}function Xi(t){t._currentValue=Qh.current,se(Qh)}function $h(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function Zh(t,i,a,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var _=h.child;d=d.firstContext;e:for(;d!==null;){var E=d;d=h;for(var R=0;R<i.length;R++)if(E.context===i[R]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),$h(d.return,a,t),l||(_=null);break e}d=E.next}}else if(h.tag===18){if(_=h.return,_===null)throw Error(s(341));_.lanes|=a,d=_.alternate,d!==null&&(d.lanes|=a),$h(_,a,t),_=null}else _=h.child;if(_!==null)_.return=h;else for(_=h;_!==null;){if(_===t){_=null;break}if(h=_.sibling,h!==null){h.return=_.return,_=h;break}_=_.return}h=_}}function Fo(t,i,a,l){t=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var _=h.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var E=h.type;Sn(h.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(h===Se.current){if(_=h.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(_l):t=[_l])}h=h.return}t!==null&&Zh(i,t,a,l),i.flags|=262144}function Mu(t){for(t=t.firstContext;t!==null;){if(!Sn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Vs(t){Ps=t,Gi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Zt(t){return Kp(Ps,t)}function Pu(t,i){return Ps===null&&Vs(t),Kp(t,i)}function Kp(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Gi===null){if(t===null)throw Error(s(308));Gi=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Gi=Gi.next=i;return a}var qS=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},HS=r.unstable_scheduleCallback,FS=r.unstable_NormalPriority,Mt={$$typeof:ne,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wh(){return{controller:new qS,data:new Map,refCount:0}}function Yo(t){t.refCount--,t.refCount===0&&HS(FS,function(){t.controller.abort()})}var Go=null,Jh=0,wa=0,Ca=null;function YS(t,i){if(Go===null){var a=Go=[];Jh=0,wa=nd(),Ca={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Jh++,i.then(Qp,Qp),i}function Qp(){if(--Jh===0&&Go!==null){Ca!==null&&(Ca.status="fulfilled");var t=Go;Go=null,wa=0,Ca=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function GS(t,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var $p=Y.S;Y.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&YS(t,i),$p!==null&&$p(t,i)};var ks=Z(null);function ef(){var t=ks.current;return t!==null?t:it.pooledCache}function Vu(t,i){i===null?te(ks,ks.current):te(ks,i.pool)}function Zp(){var t=ef();return t===null?null:{parent:Mt._currentValue,pool:t}}var Xo=Error(s(460)),Wp=Error(s(474)),ku=Error(s(542)),tf={then:function(){}};function Jp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function xu(){}function eg(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(xu,xu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,ng(t),t;default:if(typeof i.status=="string")i.then(xu,xu);else{if(t=it,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,ng(t),t}throw Ko=i,Xo}}var Ko=null;function tg(){if(Ko===null)throw Error(s(459));var t=Ko;return Ko=null,t}function ng(t){if(t===Xo||t===ku)throw Error(s(483))}var _r=!1;function nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Tr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Er(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,($e&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Nu(t),qp(t,null,a),i}return Ru(t,l,i,a),Nu(t)}function Qo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,bo(t,a)}}function sf(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=_:d=d.next=_,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var af=!1;function $o(){if(af){var t=Ca;if(t!==null)throw t}}function Zo(t,i,a,l){af=!1;var h=t.updateQueue;_r=!1;var d=h.firstBaseUpdate,_=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var R=E,B=R.next;R.next=null,_===null?d=B:_.next=B,_=R;var K=t.alternate;K!==null&&(K=K.updateQueue,E=K.lastBaseUpdate,E!==_&&(E===null?K.firstBaseUpdate=B:E.next=B,K.lastBaseUpdate=R))}if(d!==null){var W=h.baseState;_=0,K=B=R=null,E=d;do{var q=E.lane&-536870913,H=q!==E.lane;if(H?(je&q)===q:(l&q)===q){q!==0&&q===wa&&(af=!0),K!==null&&(K=K.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var be=t,Te=E;q=i;var tt=a;switch(Te.tag){case 1:if(be=Te.payload,typeof be=="function"){W=be.call(tt,W,q);break e}W=be;break e;case 3:be.flags=be.flags&-65537|128;case 0:if(be=Te.payload,q=typeof be=="function"?be.call(tt,W,q):be,q==null)break e;W=T({},W,q);break e;case 2:_r=!0}}q=E.callback,q!==null&&(t.flags|=64,H&&(t.flags|=8192),H=h.callbacks,H===null?h.callbacks=[q]:H.push(q))}else H={lane:q,tag:E.tag,payload:E.payload,callback:E.callback,next:null},K===null?(B=K=H,R=W):K=K.next=H,_|=q;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;H=E,E=H.next,H.next=null,h.lastBaseUpdate=H,h.shared.pending=null}}while(!0);K===null&&(R=W),h.baseState=R,h.firstBaseUpdate=B,h.lastBaseUpdate=K,d===null&&(h.shared.lanes=0),Ir|=_,t.lanes=_,t.memoizedState=W}}function ig(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function rg(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)ig(a[t],i)}var Ra=Z(null),Lu=Z(0);function sg(t,i){t=er,te(Lu,t),te(Ra,i),er=t|i.baseLanes}function of(){te(Lu,er),te(Ra,Ra.current)}function lf(){er=Lu.current,se(Ra),se(Lu)}var Sr=0,Oe=null,Je=null,bt=null,Uu=!1,Na=!1,xs=!1,zu=0,Wo=0,Ia=null,XS=0;function yt(){throw Error(s(321))}function uf(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!Sn(t[a],i[a]))return!1;return!0}function cf(t,i,a,l,h,d){return Sr=d,Oe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Y.H=t===null||t.memoizedState===null?qg:Hg,xs=!1,d=a(l,h),xs=!1,Na&&(d=og(i,a,l,h)),ag(t),d}function ag(t){Y.H=Yu;var i=Je!==null&&Je.next!==null;if(Sr=0,bt=Je=Oe=null,Uu=!1,Wo=0,Ia=null,i)throw Error(s(300));t===null||Ut||(t=t.dependencies,t!==null&&Mu(t)&&(Ut=!0))}function og(t,i,a,l){Oe=t;var h=0;do{if(Na&&(Ia=null),Wo=0,Na=!1,25<=h)throw Error(s(301));if(h+=1,bt=Je=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}Y.H=eb,d=i(a,l)}while(Na);return d}function KS(){var t=Y.H,i=t.useState()[0];return i=typeof i.then=="function"?Jo(i):i,t=t.useState()[0],(Je!==null?Je.memoizedState:null)!==t&&(Oe.flags|=1024),i}function hf(){var t=zu!==0;return zu=0,t}function ff(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function df(t){if(Uu){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Uu=!1}Sr=0,bt=Je=Oe=null,Na=!1,Wo=zu=0,Ia=null}function mn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?Oe.memoizedState=bt=t:bt=bt.next=t,bt}function At(){if(Je===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=Je.next;var i=bt===null?Oe.memoizedState:bt.next;if(i!==null)bt=i,Je=t;else{if(t===null)throw Oe.alternate===null?Error(s(467)):Error(s(310));Je=t,t={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},bt===null?Oe.memoizedState=bt=t:bt=bt.next=t}return bt}function mf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jo(t){var i=Wo;return Wo+=1,Ia===null&&(Ia=[]),t=eg(Ia,t,i),i=Oe,(bt===null?i.memoizedState:bt.next)===null&&(i=i.alternate,Y.H=i===null||i.memoizedState===null?qg:Hg),t}function ju(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Jo(t);if(t.$$typeof===ne)return Zt(t)}throw Error(s(438,String(t)))}function pf(t){var i=null,a=Oe.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Oe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=mf(),Oe.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),l=0;l<t;l++)a[l]=D;return i.index++,a}function Ki(t,i){return typeof i=="function"?i(t):i}function Bu(t){var i=At();return gf(i,Je,t)}function gf(t,i,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=t.baseQueue,d=l.pending;if(d!==null){if(h!==null){var _=h.next;h.next=d.next,d.next=_}i.baseQueue=h=d,l.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{i=h.next;var E=_=null,R=null,B=i,K=!1;do{var W=B.lane&-536870913;if(W!==B.lane?(je&W)===W:(Sr&W)===W){var q=B.revertLane;if(q===0)R!==null&&(R=R.next={lane:0,revertLane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),W===wa&&(K=!0);else if((Sr&q)===q){B=B.next,q===wa&&(K=!0);continue}else W={lane:0,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},R===null?(E=R=W,_=d):R=R.next=W,Oe.lanes|=q,Ir|=q;W=B.action,xs&&a(d,W),d=B.hasEagerState?B.eagerState:a(d,W)}else q={lane:W,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},R===null?(E=R=q,_=d):R=R.next=q,Oe.lanes|=W,Ir|=W;B=B.next}while(B!==null&&B!==i);if(R===null?_=d:R.next=E,!Sn(d,t.memoizedState)&&(Ut=!0,K&&(a=Ca,a!==null)))throw a;t.memoizedState=d,t.baseState=_,t.baseQueue=R,l.lastRenderedState=d}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function yf(t){var i=At(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var _=h=h.next;do d=t(d,_.action),_=_.next;while(_!==h);Sn(d,i.memoizedState)||(Ut=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function lg(t,i,a){var l=Oe,h=At(),d=Xe;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var _=!Sn((Je||h).memoizedState,a);_&&(h.memoizedState=a,Ut=!0),h=h.queue;var E=hg.bind(null,l,h,t);if(el(2048,8,E,[t]),h.getSnapshot!==i||_||bt!==null&&bt.memoizedState.tag&1){if(l.flags|=2048,Da(9,qu(),cg.bind(null,l,h,a,i),null),it===null)throw Error(s(349));d||(Sr&124)!==0||ug(l,i,a)}return a}function ug(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Oe.updateQueue,i===null?(i=mf(),Oe.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function cg(t,i,a,l){i.value=a,i.getSnapshot=l,fg(i)&&dg(t)}function hg(t,i,a){return a(function(){fg(i)&&dg(t)})}function fg(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!Sn(t,a)}catch{return!0}}function dg(t){var i=Ea(t,2);i!==null&&Nn(i,t,2)}function vf(t){var i=mn();if(typeof t=="function"){var a=t;if(t=a(),xs){Tn(!0);try{a()}finally{Tn(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:t},i}function mg(t,i,a,l){return t.baseState=a,gf(t,Je,typeof l=="function"?l:Ki)}function QS(t,i,a,l,h){if(Fu(t))throw Error(s(485));if(t=i.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};Y.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,pg(i,d)):(d.next=a.next,i.pending=a.next=d)}}function pg(t,i){var a=i.action,l=i.payload,h=t.state;if(i.isTransition){var d=Y.T,_={};Y.T=_;try{var E=a(h,l),R=Y.S;R!==null&&R(_,E),gg(t,i,E)}catch(B){_f(t,i,B)}finally{Y.T=d}}else try{d=a(h,l),gg(t,i,d)}catch(B){_f(t,i,B)}}function gg(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){yg(t,i,l)},function(l){return _f(t,i,l)}):yg(t,i,a)}function yg(t,i,a){i.status="fulfilled",i.value=a,vg(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,pg(t,a)))}function _f(t,i,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,vg(i),i=i.next;while(i!==l)}t.action=null}function vg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function _g(t,i){return i}function Tg(t,i){if(Xe){var a=it.formState;if(a!==null){e:{var l=Oe;if(Xe){if(mt){t:{for(var h=mt,d=mi;h.nodeType!==8;){if(!d){h=null;break t}if(h=Jn(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){mt=Jn(h.nextSibling),l=h.data==="F!";break e}}Ms(l)}l=!1}l&&(i=a[0])}}return a=mn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_g,lastRenderedState:i},a.queue=l,a=zg.bind(null,Oe,l),l.dispatch=a,l=vf(!1),d=Af.bind(null,Oe,!1,l.queue),l=mn(),h={state:i,dispatch:null,action:t,pending:null},l.queue=h,a=QS.bind(null,Oe,h,d,a),h.dispatch=a,l.memoizedState=t,[i,a,!1]}function Eg(t){var i=At();return Sg(i,Je,t)}function Sg(t,i,a){if(i=gf(t,i,_g)[0],t=Bu(Ki)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Jo(i)}catch(_){throw _===Xo?ku:_}else l=i;i=At();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Oe.flags|=2048,Da(9,qu(),$S.bind(null,h,a),null)),[l,d,t]}function $S(t,i){t.action=i}function bg(t){var i=At(),a=Je;if(a!==null)return Sg(i,a,t);At(),i=i.memoizedState,a=At();var l=a.queue.dispatch;return a.memoizedState=t,[i,l,!1]}function Da(t,i,a,l){return t={tag:t,create:a,deps:l,inst:i,next:null},i=Oe.updateQueue,i===null&&(i=mf(),Oe.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t),t}function qu(){return{destroy:void 0,resource:void 0}}function Ag(){return At().memoizedState}function Hu(t,i,a,l){var h=mn();l=l===void 0?null:l,Oe.flags|=t,h.memoizedState=Da(1|i,qu(),a,l)}function el(t,i,a,l){var h=At();l=l===void 0?null:l;var d=h.memoizedState.inst;Je!==null&&l!==null&&uf(l,Je.memoizedState.deps)?h.memoizedState=Da(i,d,a,l):(Oe.flags|=t,h.memoizedState=Da(1|i,d,a,l))}function wg(t,i){Hu(8390656,8,t,i)}function Cg(t,i){el(2048,8,t,i)}function Rg(t,i){return el(4,2,t,i)}function Ng(t,i){return el(4,4,t,i)}function Ig(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Dg(t,i,a){a=a!=null?a.concat([t]):null,el(4,4,Ig.bind(null,i,t),a)}function Tf(){}function Og(t,i){var a=At();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&uf(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Mg(t,i){var a=At();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&uf(i,l[1]))return l[0];if(l=t(),xs){Tn(!0);try{t()}finally{Tn(!1)}}return a.memoizedState=[l,i],l}function Ef(t,i,a){return a===void 0||(Sr&1073741824)!==0?t.memoizedState=i:(t.memoizedState=a,t=ky(),Oe.lanes|=t,Ir|=t,a)}function Pg(t,i,a,l){return Sn(a,i)?a:Ra.current!==null?(t=Ef(t,a,l),Sn(t,i)||(Ut=!0),t):(Sr&42)===0?(Ut=!0,t.memoizedState=a):(t=ky(),Oe.lanes|=t,Ir|=t,i)}function Vg(t,i,a,l,h){var d=ee.p;ee.p=d!==0&&8>d?d:8;var _=Y.T,E={};Y.T=E,Af(t,!1,i,a);try{var R=h(),B=Y.S;if(B!==null&&B(E,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var K=GS(R,l);tl(t,i,K,Rn(t))}else tl(t,i,l,Rn(t))}catch(W){tl(t,i,{then:function(){},status:"rejected",reason:W},Rn())}finally{ee.p=d,Y.T=_}}function ZS(){}function Sf(t,i,a,l){if(t.tag!==5)throw Error(s(476));var h=kg(t).queue;Vg(t,h,i,le,a===null?ZS:function(){return xg(t),a(l)})}function kg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:le},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function xg(t){var i=kg(t).next.queue;tl(t,i,{},Rn())}function bf(){return Zt(_l)}function Lg(){return At().memoizedState}function Ug(){return At().memoizedState}function WS(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=Rn();t=Tr(a);var l=Er(i,t,a);l!==null&&(Nn(l,i,a),Qo(l,i,a)),i={cache:Wh()},t.payload=i;return}i=i.return}}function JS(t,i,a){var l=Rn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Fu(t)?jg(i,a):(a=qh(t,i,a,l),a!==null&&(Nn(a,t,l),Bg(a,i,l)))}function zg(t,i,a){var l=Rn();tl(t,i,a,l)}function tl(t,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fu(t))jg(i,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var _=i.lastRenderedState,E=d(_,a);if(h.hasEagerState=!0,h.eagerState=E,Sn(E,_))return Ru(t,i,h,0),it===null&&Cu(),!1}catch{}finally{}if(a=qh(t,i,h,l),a!==null)return Nn(a,t,l),Bg(a,i,l),!0}return!1}function Af(t,i,a,l){if(l={lane:2,revertLane:nd(),action:l,hasEagerState:!1,eagerState:null,next:null},Fu(t)){if(i)throw Error(s(479))}else i=qh(t,a,l,2),i!==null&&Nn(i,t,2)}function Fu(t){var i=t.alternate;return t===Oe||i!==null&&i===Oe}function jg(t,i){Na=Uu=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Bg(t,i,a){if((a&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,bo(t,a)}}var Yu={readContext:Zt,use:ju,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useLayoutEffect:yt,useInsertionEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useSyncExternalStore:yt,useId:yt,useHostTransitionStatus:yt,useFormState:yt,useActionState:yt,useOptimistic:yt,useMemoCache:yt,useCacheRefresh:yt},qg={readContext:Zt,use:ju,useCallback:function(t,i){return mn().memoizedState=[t,i===void 0?null:i],t},useContext:Zt,useEffect:wg,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,Hu(4194308,4,Ig.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Hu(4194308,4,t,i)},useInsertionEffect:function(t,i){Hu(4,2,t,i)},useMemo:function(t,i){var a=mn();i=i===void 0?null:i;var l=t();if(xs){Tn(!0);try{t()}finally{Tn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(t,i,a){var l=mn();if(a!==void 0){var h=a(i);if(xs){Tn(!0);try{a(i)}finally{Tn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=JS.bind(null,Oe,t),[l.memoizedState,t]},useRef:function(t){var i=mn();return t={current:t},i.memoizedState=t},useState:function(t){t=vf(t);var i=t.queue,a=zg.bind(null,Oe,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:Tf,useDeferredValue:function(t,i){var a=mn();return Ef(a,t,i)},useTransition:function(){var t=vf(!1);return t=Vg.bind(null,Oe,t.queue,!0,!1),mn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var l=Oe,h=mn();if(Xe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),it===null)throw Error(s(349));(je&124)!==0||ug(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,wg(hg.bind(null,l,d,t),[t]),l.flags|=2048,Da(9,qu(),cg.bind(null,l,d,a,i),null),a},useId:function(){var t=mn(),i=it.identifierPrefix;if(Xe){var a=Yi,l=Fi;a=(l&~(1<<32-$t(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=zu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=XS++,i="«"+i+"r"+a.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:bf,useFormState:Tg,useActionState:Tg,useOptimistic:function(t){var i=mn();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Af.bind(null,Oe,!0,a),a.dispatch=i,[t,i]},useMemoCache:pf,useCacheRefresh:function(){return mn().memoizedState=WS.bind(null,Oe)}},Hg={readContext:Zt,use:ju,useCallback:Og,useContext:Zt,useEffect:Cg,useImperativeHandle:Dg,useInsertionEffect:Rg,useLayoutEffect:Ng,useMemo:Mg,useReducer:Bu,useRef:Ag,useState:function(){return Bu(Ki)},useDebugValue:Tf,useDeferredValue:function(t,i){var a=At();return Pg(a,Je.memoizedState,t,i)},useTransition:function(){var t=Bu(Ki)[0],i=At().memoizedState;return[typeof t=="boolean"?t:Jo(t),i]},useSyncExternalStore:lg,useId:Lg,useHostTransitionStatus:bf,useFormState:Eg,useActionState:Eg,useOptimistic:function(t,i){var a=At();return mg(a,Je,t,i)},useMemoCache:pf,useCacheRefresh:Ug},eb={readContext:Zt,use:ju,useCallback:Og,useContext:Zt,useEffect:Cg,useImperativeHandle:Dg,useInsertionEffect:Rg,useLayoutEffect:Ng,useMemo:Mg,useReducer:yf,useRef:Ag,useState:function(){return yf(Ki)},useDebugValue:Tf,useDeferredValue:function(t,i){var a=At();return Je===null?Ef(a,t,i):Pg(a,Je.memoizedState,t,i)},useTransition:function(){var t=yf(Ki)[0],i=At().memoizedState;return[typeof t=="boolean"?t:Jo(t),i]},useSyncExternalStore:lg,useId:Lg,useHostTransitionStatus:bf,useFormState:bg,useActionState:bg,useOptimistic:function(t,i){var a=At();return Je!==null?mg(a,Je,t,i):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:pf,useCacheRefresh:Ug},Oa=null,nl=0;function Gu(t){var i=nl;return nl+=1,Oa===null&&(Oa=[]),eg(Oa,t,i)}function il(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Xu(t,i){throw i.$$typeof===b?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Fg(t){var i=t._init;return i(t._payload)}function Yg(t){function i(L,O){if(t){var j=L.deletions;j===null?(L.deletions=[O],L.flags|=16):j.push(O)}}function a(L,O){if(!t)return null;for(;O!==null;)i(L,O),O=O.sibling;return null}function l(L){for(var O=new Map;L!==null;)L.key!==null?O.set(L.key,L):O.set(L.index,L),L=L.sibling;return O}function h(L,O){return L=Hi(L,O),L.index=0,L.sibling=null,L}function d(L,O,j){return L.index=j,t?(j=L.alternate,j!==null?(j=j.index,j<O?(L.flags|=67108866,O):j):(L.flags|=67108866,O)):(L.flags|=1048576,O)}function _(L){return t&&L.alternate===null&&(L.flags|=67108866),L}function E(L,O,j,Q){return O===null||O.tag!==6?(O=Fh(j,L.mode,Q),O.return=L,O):(O=h(O,j),O.return=L,O)}function R(L,O,j,Q){var he=j.type;return he===z?K(L,O,j.props.children,Q,j.key):O!==null&&(O.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===w&&Fg(he)===O.type)?(O=h(O,j.props),il(O,j),O.return=L,O):(O=Iu(j.type,j.key,j.props,null,L.mode,Q),il(O,j),O.return=L,O)}function B(L,O,j,Q){return O===null||O.tag!==4||O.stateNode.containerInfo!==j.containerInfo||O.stateNode.implementation!==j.implementation?(O=Yh(j,L.mode,Q),O.return=L,O):(O=h(O,j.children||[]),O.return=L,O)}function K(L,O,j,Q,he){return O===null||O.tag!==7?(O=Ns(j,L.mode,Q,he),O.return=L,O):(O=h(O,j),O.return=L,O)}function W(L,O,j){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Fh(""+O,L.mode,j),O.return=L,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case A:return j=Iu(O.type,O.key,O.props,null,L.mode,j),il(j,O),j.return=L,j;case x:return O=Yh(O,L.mode,j),O.return=L,O;case w:var Q=O._init;return O=Q(O._payload),W(L,O,j)}if(Le(O)||k(O))return O=Ns(O,L.mode,j,null),O.return=L,O;if(typeof O.then=="function")return W(L,Gu(O),j);if(O.$$typeof===ne)return W(L,Pu(L,O),j);Xu(L,O)}return null}function q(L,O,j,Q){var he=O!==null?O.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return he!==null?null:E(L,O,""+j,Q);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case A:return j.key===he?R(L,O,j,Q):null;case x:return j.key===he?B(L,O,j,Q):null;case w:return he=j._init,j=he(j._payload),q(L,O,j,Q)}if(Le(j)||k(j))return he!==null?null:K(L,O,j,Q,null);if(typeof j.then=="function")return q(L,O,Gu(j),Q);if(j.$$typeof===ne)return q(L,O,Pu(L,j),Q);Xu(L,j)}return null}function H(L,O,j,Q,he){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return L=L.get(j)||null,E(O,L,""+Q,he);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case A:return L=L.get(Q.key===null?j:Q.key)||null,R(O,L,Q,he);case x:return L=L.get(Q.key===null?j:Q.key)||null,B(O,L,Q,he);case w:var Me=Q._init;return Q=Me(Q._payload),H(L,O,j,Q,he)}if(Le(Q)||k(Q))return L=L.get(j)||null,K(O,L,Q,he,null);if(typeof Q.then=="function")return H(L,O,j,Gu(Q),he);if(Q.$$typeof===ne)return H(L,O,j,Pu(O,Q),he);Xu(O,Q)}return null}function be(L,O,j,Q){for(var he=null,Me=null,ge=O,Ee=O=0,jt=null;ge!==null&&Ee<j.length;Ee++){ge.index>Ee?(jt=ge,ge=null):jt=ge.sibling;var Ge=q(L,ge,j[Ee],Q);if(Ge===null){ge===null&&(ge=jt);break}t&&ge&&Ge.alternate===null&&i(L,ge),O=d(Ge,O,Ee),Me===null?he=Ge:Me.sibling=Ge,Me=Ge,ge=jt}if(Ee===j.length)return a(L,ge),Xe&&Ds(L,Ee),he;if(ge===null){for(;Ee<j.length;Ee++)ge=W(L,j[Ee],Q),ge!==null&&(O=d(ge,O,Ee),Me===null?he=ge:Me.sibling=ge,Me=ge);return Xe&&Ds(L,Ee),he}for(ge=l(ge);Ee<j.length;Ee++)jt=H(ge,L,Ee,j[Ee],Q),jt!==null&&(t&&jt.alternate!==null&&ge.delete(jt.key===null?Ee:jt.key),O=d(jt,O,Ee),Me===null?he=jt:Me.sibling=jt,Me=jt);return t&&ge.forEach(function(Ur){return i(L,Ur)}),Xe&&Ds(L,Ee),he}function Te(L,O,j,Q){if(j==null)throw Error(s(151));for(var he=null,Me=null,ge=O,Ee=O=0,jt=null,Ge=j.next();ge!==null&&!Ge.done;Ee++,Ge=j.next()){ge.index>Ee?(jt=ge,ge=null):jt=ge.sibling;var Ur=q(L,ge,Ge.value,Q);if(Ur===null){ge===null&&(ge=jt);break}t&&ge&&Ur.alternate===null&&i(L,ge),O=d(Ur,O,Ee),Me===null?he=Ur:Me.sibling=Ur,Me=Ur,ge=jt}if(Ge.done)return a(L,ge),Xe&&Ds(L,Ee),he;if(ge===null){for(;!Ge.done;Ee++,Ge=j.next())Ge=W(L,Ge.value,Q),Ge!==null&&(O=d(Ge,O,Ee),Me===null?he=Ge:Me.sibling=Ge,Me=Ge);return Xe&&Ds(L,Ee),he}for(ge=l(ge);!Ge.done;Ee++,Ge=j.next())Ge=H(ge,L,Ee,Ge.value,Q),Ge!==null&&(t&&Ge.alternate!==null&&ge.delete(Ge.key===null?Ee:Ge.key),O=d(Ge,O,Ee),Me===null?he=Ge:Me.sibling=Ge,Me=Ge);return t&&ge.forEach(function(tA){return i(L,tA)}),Xe&&Ds(L,Ee),he}function tt(L,O,j,Q){if(typeof j=="object"&&j!==null&&j.type===z&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case A:e:{for(var he=j.key;O!==null;){if(O.key===he){if(he=j.type,he===z){if(O.tag===7){a(L,O.sibling),Q=h(O,j.props.children),Q.return=L,L=Q;break e}}else if(O.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===w&&Fg(he)===O.type){a(L,O.sibling),Q=h(O,j.props),il(Q,j),Q.return=L,L=Q;break e}a(L,O);break}else i(L,O);O=O.sibling}j.type===z?(Q=Ns(j.props.children,L.mode,Q,j.key),Q.return=L,L=Q):(Q=Iu(j.type,j.key,j.props,null,L.mode,Q),il(Q,j),Q.return=L,L=Q)}return _(L);case x:e:{for(he=j.key;O!==null;){if(O.key===he)if(O.tag===4&&O.stateNode.containerInfo===j.containerInfo&&O.stateNode.implementation===j.implementation){a(L,O.sibling),Q=h(O,j.children||[]),Q.return=L,L=Q;break e}else{a(L,O);break}else i(L,O);O=O.sibling}Q=Yh(j,L.mode,Q),Q.return=L,L=Q}return _(L);case w:return he=j._init,j=he(j._payload),tt(L,O,j,Q)}if(Le(j))return be(L,O,j,Q);if(k(j)){if(he=k(j),typeof he!="function")throw Error(s(150));return j=he.call(j),Te(L,O,j,Q)}if(typeof j.then=="function")return tt(L,O,Gu(j),Q);if(j.$$typeof===ne)return tt(L,O,Pu(L,j),Q);Xu(L,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,O!==null&&O.tag===6?(a(L,O.sibling),Q=h(O,j),Q.return=L,L=Q):(a(L,O),Q=Fh(j,L.mode,Q),Q.return=L,L=Q),_(L)):a(L,O)}return function(L,O,j,Q){try{nl=0;var he=tt(L,O,j,Q);return Oa=null,he}catch(ge){if(ge===Xo||ge===ku)throw ge;var Me=bn(29,ge,null,L.mode);return Me.lanes=Q,Me.return=L,Me}finally{}}}var Ma=Yg(!0),Gg=Yg(!1),Bn=Z(null),pi=null;function br(t){var i=t.alternate;te(Pt,Pt.current&1),te(Bn,t),pi===null&&(i===null||Ra.current!==null||i.memoizedState!==null)&&(pi=t)}function Xg(t){if(t.tag===22){if(te(Pt,Pt.current),te(Bn,t),pi===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(pi=t)}}else Ar()}function Ar(){te(Pt,Pt.current),te(Bn,Bn.current)}function Qi(t){se(Bn),pi===t&&(pi=null),se(Pt)}var Pt=Z(0);function Ku(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||md(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function wf(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:T({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Cf={enqueueSetState:function(t,i,a){t=t._reactInternals;var l=Rn(),h=Tr(l);h.payload=i,a!=null&&(h.callback=a),i=Er(t,h,l),i!==null&&(Nn(i,t,l),Qo(i,t,l))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=Rn(),h=Tr(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Er(t,h,l),i!==null&&(Nn(i,t,l),Qo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Rn(),l=Tr(a);l.tag=2,i!=null&&(l.callback=i),i=Er(t,l,a),i!==null&&(Nn(i,t,a),Qo(i,t,a))}};function Kg(t,i,a,l,h,d,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,_):i.prototype&&i.prototype.isPureReactComponent?!zo(a,l)||!zo(h,d):!0}function Qg(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Cf.enqueueReplaceState(i,i.state,null)}function Ls(t,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(t=t.defaultProps){a===i&&(a=T({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}var Qu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function $g(t){Qu(t)}function Zg(t){console.error(t)}function Wg(t){Qu(t)}function $u(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Jg(t,i,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Rf(t,i,a){return a=Tr(a),a.tag=3,a.payload={element:null},a.callback=function(){$u(t,i)},a}function ey(t){return t=Tr(t),t.tag=3,t}function ty(t,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;t.payload=function(){return h(d)},t.callback=function(){Jg(i,a,l)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Jg(i,a,l),typeof h!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function tb(t,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Fo(i,a,h,!0),a=Bn.current,a!==null){switch(a.tag){case 13:return pi===null?Zf():a.alternate===null&&pt===0&&(pt=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===tf?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Jf(t,l,h)),!1;case 22:return a.flags|=65536,l===tf?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Jf(t,l,h)),!1}throw Error(s(435,a.tag))}return Jf(t,l,h),Zf(),!1}if(Xe)return i=Bn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Kh&&(t=Error(s(422),{cause:l}),Ho(Ln(t,a)))):(l!==Kh&&(i=Error(s(423),{cause:l}),Ho(Ln(i,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=Ln(l,a),h=Rf(t.stateNode,l,h),sf(t,h),pt!==4&&(pt=2)),!1;var d=Error(s(520),{cause:l});if(d=Ln(d,a),cl===null?cl=[d]:cl.push(d),pt!==4&&(pt=2),i===null)return!0;l=Ln(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=Rf(a.stateNode,l,t),sf(a,t),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Dr===null||!Dr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=ey(h),ty(h,t,a,l),sf(a,h),!1}a=a.return}while(a!==null);return!1}var ny=Error(s(461)),Ut=!1;function Ft(t,i,a,l){i.child=t===null?Gg(i,null,a,l):Ma(i,t.child,a,l)}function iy(t,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var _={};for(var E in l)E!=="ref"&&(_[E]=l[E])}else _=l;return Vs(i),l=cf(t,i,a,_,d,h),E=hf(),t!==null&&!Ut?(ff(t,i,h),$i(t,i,h)):(Xe&&E&&Gh(i),i.flags|=1,Ft(t,i,l,h),i.child)}function ry(t,i,a,l,h){if(t===null){var d=a.type;return typeof d=="function"&&!Hh(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,sy(t,i,d,l,h)):(t=Iu(a.type,null,l,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!kf(t,h)){var _=d.memoizedProps;if(a=a.compare,a=a!==null?a:zo,a(_,l)&&t.ref===i.ref)return $i(t,i,h)}return i.flags|=1,t=Hi(d,l),t.ref=i.ref,t.return=i,i.child=t}function sy(t,i,a,l,h){if(t!==null){var d=t.memoizedProps;if(zo(d,l)&&t.ref===i.ref)if(Ut=!1,i.pendingProps=l=d,kf(t,h))(t.flags&131072)!==0&&(Ut=!0);else return i.lanes=t.lanes,$i(t,i,h)}return Nf(t,i,a,l,h)}function ay(t,i,a){var l=i.pendingProps,h=l.children,d=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,t!==null){for(h=i.child=t.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return oy(t,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Vu(i,d!==null?d.cachePool:null),d!==null?sg(i,d):of(),Xg(i);else return i.lanes=i.childLanes=536870912,oy(t,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(Vu(i,d.cachePool),sg(i,d),Ar(),i.memoizedState=null):(t!==null&&Vu(i,null),of(),Ar());return Ft(t,i,h,a),i.child}function oy(t,i,a,l){var h=ef();return h=h===null?null:{parent:Mt._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},t!==null&&Vu(i,null),of(),Xg(i),t!==null&&Fo(t,i,l,!0),null}function Zu(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(i.flags|=4194816)}}function Nf(t,i,a,l,h){return Vs(i),a=cf(t,i,a,l,void 0,h),l=hf(),t!==null&&!Ut?(ff(t,i,h),$i(t,i,h)):(Xe&&l&&Gh(i),i.flags|=1,Ft(t,i,a,h),i.child)}function ly(t,i,a,l,h,d){return Vs(i),i.updateQueue=null,a=og(i,l,a,h),ag(t),l=hf(),t!==null&&!Ut?(ff(t,i,d),$i(t,i,d)):(Xe&&l&&Gh(i),i.flags|=1,Ft(t,i,a,d),i.child)}function uy(t,i,a,l,h){if(Vs(i),i.stateNode===null){var d=Sa,_=a.contextType;typeof _=="object"&&_!==null&&(d=Zt(_)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Cf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},nf(i),_=a.contextType,d.context=typeof _=="object"&&_!==null?Zt(_):Sa,d.state=i.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(wf(i,a,_,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&Cf.enqueueReplaceState(d,d.state,null),Zo(i,l,d,h),$o(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var E=i.memoizedProps,R=Ls(a,E);d.props=R;var B=d.context,K=a.contextType;_=Sa,typeof K=="object"&&K!==null&&(_=Zt(K));var W=a.getDerivedStateFromProps;K=typeof W=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,K||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||B!==_)&&Qg(i,d,l,_),_r=!1;var q=i.memoizedState;d.state=q,Zo(i,l,d,h),$o(),B=i.memoizedState,E||q!==B||_r?(typeof W=="function"&&(wf(i,a,W,l),B=i.memoizedState),(R=_r||Kg(i,a,R,l,q,B,_))?(K||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=B),d.props=l,d.state=B,d.context=_,l=R):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,rf(t,i),_=i.memoizedProps,K=Ls(a,_),d.props=K,W=i.pendingProps,q=d.context,B=a.contextType,R=Sa,typeof B=="object"&&B!==null&&(R=Zt(B)),E=a.getDerivedStateFromProps,(B=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==W||q!==R)&&Qg(i,d,l,R),_r=!1,q=i.memoizedState,d.state=q,Zo(i,l,d,h),$o();var H=i.memoizedState;_!==W||q!==H||_r||t!==null&&t.dependencies!==null&&Mu(t.dependencies)?(typeof E=="function"&&(wf(i,a,E,l),H=i.memoizedState),(K=_r||Kg(i,a,K,l,q,H,R)||t!==null&&t.dependencies!==null&&Mu(t.dependencies))?(B||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,H,R),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,H,R)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=H),d.props=l,d.state=H,d.context=R,l=K):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,Zu(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Ma(i,t.child,null,h),i.child=Ma(i,null,a,h)):Ft(t,i,a,h),i.memoizedState=d.state,t=i.child):t=$i(t,i,h),t}function cy(t,i,a,l){return qo(),i.flags|=256,Ft(t,i,a,l),i.child}var If={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Df(t){return{baseLanes:t,cachePool:Zp()}}function Of(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=qn),t}function hy(t,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,_;if((_=d)||(_=t!==null&&t.memoizedState===null?!1:(Pt.current&2)!==0),_&&(h=!0,i.flags&=-129),_=(i.flags&32)!==0,i.flags&=-33,t===null){if(Xe){if(h?br(i):Ar(),Xe){var E=mt,R;if(R=E){e:{for(R=E,E=mi;R.nodeType!==8;){if(!E){E=null;break e}if(R=Jn(R.nextSibling),R===null){E=null;break e}}E=R}E!==null?(i.memoizedState={dehydrated:E,treeContext:Is!==null?{id:Fi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},R=bn(18,null,null,0),R.stateNode=E,R.return=i,i.child=R,hn=i,mt=null,R=!0):R=!1}R||Ms(i)}if(E=i.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return md(E)?i.lanes=32:i.lanes=536870912,null;Qi(i)}return E=l.children,l=l.fallback,h?(Ar(),h=i.mode,E=Wu({mode:"hidden",children:E},h),l=Ns(l,h,a,null),E.return=i,l.return=i,E.sibling=l,i.child=E,h=i.child,h.memoizedState=Df(a),h.childLanes=Of(t,_,a),i.memoizedState=If,l):(br(i),Mf(i,E))}if(R=t.memoizedState,R!==null&&(E=R.dehydrated,E!==null)){if(d)i.flags&256?(br(i),i.flags&=-257,i=Pf(t,i,a)):i.memoizedState!==null?(Ar(),i.child=t.child,i.flags|=128,i=null):(Ar(),h=l.fallback,E=i.mode,l=Wu({mode:"visible",children:l.children},E),h=Ns(h,E,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Ma(i,t.child,null,a),l=i.child,l.memoizedState=Df(a),l.childLanes=Of(t,_,a),i.memoizedState=If,i=h);else if(br(i),md(E)){if(_=E.nextSibling&&E.nextSibling.dataset,_)var B=_.dgst;_=B,l=Error(s(419)),l.stack="",l.digest=_,Ho({value:l,source:null,stack:null}),i=Pf(t,i,a)}else if(Ut||Fo(t,i,a,!1),_=(a&t.childLanes)!==0,Ut||_){if(_=it,_!==null&&(l=a&-a,l=(l&42)!==0?1:hr(l),l=(l&(_.suspendedLanes|a))!==0?0:l,l!==0&&l!==R.retryLane))throw R.retryLane=l,Ea(t,l),Nn(_,t,l),ny;E.data==="$?"||Zf(),i=Pf(t,i,a)}else E.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=R.treeContext,mt=Jn(E.nextSibling),hn=i,Xe=!0,Os=null,mi=!1,t!==null&&(zn[jn++]=Fi,zn[jn++]=Yi,zn[jn++]=Is,Fi=t.id,Yi=t.overflow,Is=i),i=Mf(i,l.children),i.flags|=4096);return i}return h?(Ar(),h=l.fallback,E=i.mode,R=t.child,B=R.sibling,l=Hi(R,{mode:"hidden",children:l.children}),l.subtreeFlags=R.subtreeFlags&65011712,B!==null?h=Hi(B,h):(h=Ns(h,E,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=t.child.memoizedState,E===null?E=Df(a):(R=E.cachePool,R!==null?(B=Mt._currentValue,R=R.parent!==B?{parent:B,pool:B}:R):R=Zp(),E={baseLanes:E.baseLanes|a,cachePool:R}),h.memoizedState=E,h.childLanes=Of(t,_,a),i.memoizedState=If,l):(br(i),a=t.child,t=a.sibling,a=Hi(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,t!==null&&(_=i.deletions,_===null?(i.deletions=[t],i.flags|=16):_.push(t)),i.child=a,i.memoizedState=null,a)}function Mf(t,i){return i=Wu({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Wu(t,i){return t=bn(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Pf(t,i,a){return Ma(i,t.child,null,a),t=Mf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function fy(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),$h(t.return,i,a)}function Vf(t,i,a,l,h){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function dy(t,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Ft(t,i,l.children,a),l=Pt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fy(t,a,i);else if(t.tag===19)fy(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(te(Pt,l),h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&Ku(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Vf(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&Ku(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}Vf(i,!0,a,null,d);break;case"together":Vf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function $i(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Ir|=i.lanes,(a&i.childLanes)===0)if(t!==null){if(Fo(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,a=Hi(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Hi(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function kf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Mu(t)))}function nb(t,i,a){switch(i.tag){case 3:Ne(i,i.stateNode.containerInfo),vr(i,Mt,t.memoizedState.cache),qo();break;case 27:case 5:Nt(i);break;case 4:Ne(i,i.stateNode.containerInfo);break;case 10:vr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(br(i),i.flags|=128,null):(a&i.child.childLanes)!==0?hy(t,i,a):(br(i),t=$i(t,i,a),t!==null?t.sibling:null);br(i);break;case 19:var h=(t.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Fo(t,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return dy(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),te(Pt,Pt.current),l)break;return null;case 22:case 23:return i.lanes=0,ay(t,i,a);case 24:vr(i,Mt,t.memoizedState.cache)}return $i(t,i,a)}function my(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)Ut=!0;else{if(!kf(t,a)&&(i.flags&128)===0)return Ut=!1,nb(t,i,a);Ut=(t.flags&131072)!==0}else Ut=!1,Xe&&(i.flags&1048576)!==0&&Fp(i,Ou,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")Hh(l)?(t=Ls(l,t),i.tag=1,i=uy(null,i,l,t,a)):(i.tag=0,i=Nf(null,i,l,t,a));else{if(l!=null){if(h=l.$$typeof,h===_e){i.tag=11,i=iy(null,i,l,t,a);break e}else if(h===M){i.tag=14,i=ry(null,i,l,t,a);break e}}throw i=st(l)||l,Error(s(306,i,""))}}return i;case 0:return Nf(t,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Ls(l,i.pendingProps),uy(t,i,l,h,a);case 3:e:{if(Ne(i,i.stateNode.containerInfo),t===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,rf(t,i),Zo(i,l,null,a);var _=i.memoizedState;if(l=_.cache,vr(i,Mt,l),l!==d.cache&&Zh(i,[Mt],a,!0),$o(),l=_.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:_.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=cy(t,i,l,a);break e}else if(l!==h){h=Ln(Error(s(424)),i),Ho(h),i=cy(t,i,l,a);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(mt=Jn(t.firstChild),hn=i,Xe=!0,Os=null,mi=!0,a=Gg(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(qo(),l===h){i=$i(t,i,a);break e}Ft(t,i,l,a)}i=i.child}return i;case 26:return Zu(t,i),t===null?(a=vv(i.type,null,i.pendingProps,null))?i.memoizedState=a:Xe||(a=i.type,t=i.pendingProps,l=fc(fe.current).createElement(a),l[It]=i,l[Et]=t,Gt(l,a,t),gt(l),i.stateNode=l):i.memoizedState=vv(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Nt(i),t===null&&Xe&&(l=i.stateNode=pv(i.type,i.pendingProps,fe.current),hn=i,mi=!0,h=mt,Pr(i.type)?(pd=h,mt=Jn(l.firstChild)):mt=h),Ft(t,i,i.pendingProps.children,a),Zu(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Xe&&((h=l=mt)&&(l=Db(l,i.type,i.pendingProps,mi),l!==null?(i.stateNode=l,hn=i,mt=Jn(l.firstChild),mi=!1,h=!0):h=!1),h||Ms(i)),Nt(i),h=i.type,d=i.pendingProps,_=t!==null?t.memoizedProps:null,l=d.children,hd(h,d)?l=null:_!==null&&hd(h,_)&&(i.flags|=32),i.memoizedState!==null&&(h=cf(t,i,KS,null,null,a),_l._currentValue=h),Zu(t,i),Ft(t,i,l,a),i.child;case 6:return t===null&&Xe&&((t=a=mt)&&(a=Ob(a,i.pendingProps,mi),a!==null?(i.stateNode=a,hn=i,mt=null,t=!0):t=!1),t||Ms(i)),null;case 13:return hy(t,i,a);case 4:return Ne(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Ma(i,null,l,a):Ft(t,i,l,a),i.child;case 11:return iy(t,i,i.type,i.pendingProps,a);case 7:return Ft(t,i,i.pendingProps,a),i.child;case 8:return Ft(t,i,i.pendingProps.children,a),i.child;case 12:return Ft(t,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,vr(i,i.type,l.value),Ft(t,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Vs(i),h=Zt(h),l=l(h),i.flags|=1,Ft(t,i,l,a),i.child;case 14:return ry(t,i,i.type,i.pendingProps,a);case 15:return sy(t,i,i.type,i.pendingProps,a);case 19:return dy(t,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},t===null?(a=Wu(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Hi(t.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return ay(t,i,a);case 24:return Vs(i),l=Zt(Mt),t===null?(h=ef(),h===null&&(h=it,d=Wh(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},nf(i),vr(i,Mt,h)):((t.lanes&a)!==0&&(rf(t,i),Zo(i,null,null,a),$o()),h=t.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),vr(i,Mt,l)):(l=d.cache,vr(i,Mt,l),l!==h.cache&&Zh(i,[Mt],a,!0))),Ft(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Zi(t){t.flags|=4}function py(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!bv(i)){if(i=Bn.current,i!==null&&((je&4194048)===je?pi!==null:(je&62914560)!==je&&(je&536870912)===0||i!==pi))throw Ko=tf,Wp;t.flags|=8192}}function Ju(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Eo():536870912,t.lanes|=i,xa|=i)}function rl(t,i){if(!Xe)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function ht(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function ib(t,i,a){var l=i.pendingProps;switch(Xh(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(i),null;case 1:return ht(i),null;case 3:return a=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Xi(Mt),ot(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Bo(i)?Zi(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Xp())),ht(i),null;case 26:return a=i.memoizedState,t===null?(Zi(i),a!==null?(ht(i),py(i,a)):(ht(i),i.flags&=-16777217)):a?a!==t.memoizedState?(Zi(i),ht(i),py(i,a)):(ht(i),i.flags&=-16777217):(t.memoizedProps!==l&&Zi(i),ht(i),i.flags&=-16777217),null;case 27:Qt(i),a=fe.current;var h=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Zi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ht(i),null}t=$.current,Bo(i)?Yp(i):(t=pv(h,l,a),i.stateNode=t,Zi(i))}return ht(i),null;case 5:if(Qt(i),a=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Zi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ht(i),null}if(t=$.current,Bo(i))Yp(i);else{switch(h=fc(fe.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}t[It]=i,t[Et]=l;e:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break e;for(;h.sibling===null;){if(h.return===null||h.return===i)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=t;e:switch(Gt(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Zi(i)}}return ht(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Zi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(t=fe.current,Bo(i)){if(t=i.stateNode,a=i.memoizedProps,l=null,h=hn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[It]=i,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||lv(t.nodeValue,a)),t||Ms(i)}else t=fc(t).createTextNode(l),t[It]=i,i.stateNode=t}return ht(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=Bo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[It]=i}else qo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ht(i),h=!1}else h=Xp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Qi(i),i):(Qi(i),null)}if(Qi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==t&&a&&(i.child.flags|=8192),Ju(i,i.updateQueue),ht(i),null;case 4:return ot(),t===null&&ad(i.stateNode.containerInfo),ht(i),null;case 10:return Xi(i.type),ht(i),null;case 19:if(se(Pt),h=i.memoizedState,h===null)return ht(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)rl(h,!1);else{if(pt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=Ku(t),d!==null){for(i.flags|=128,rl(h,!1),t=d.updateQueue,i.updateQueue=t,Ju(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)Hp(a,t),a=a.sibling;return te(Pt,Pt.current&1|2),i.child}t=t.sibling}h.tail!==null&&an()>nc&&(i.flags|=128,l=!0,rl(h,!1),i.lanes=4194304)}else{if(!l)if(t=Ku(d),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,Ju(i,t),rl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Xe)return ht(i),null}else 2*an()-h.renderingStartTime>nc&&a!==536870912&&(i.flags|=128,l=!0,rl(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(t=h.last,t!==null?t.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=an(),i.sibling=null,t=Pt.current,te(Pt,l?t&1|2:t&1),i):(ht(i),null);case 22:case 23:return Qi(i),lf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ht(i),i.subtreeFlags&6&&(i.flags|=8192)):ht(i),a=i.updateQueue,a!==null&&Ju(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),t!==null&&se(ks),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Xi(Mt),ht(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function rb(t,i){switch(Xh(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Xi(Mt),ot(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return Qt(i),null;case 13:if(Qi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));qo()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return se(Pt),null;case 4:return ot(),null;case 10:return Xi(i.type),null;case 22:case 23:return Qi(i),lf(),t!==null&&se(ks),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Xi(Mt),null;case 25:return null;default:return null}}function gy(t,i){switch(Xh(i),i.tag){case 3:Xi(Mt),ot();break;case 26:case 27:case 5:Qt(i);break;case 4:ot();break;case 13:Qi(i);break;case 19:se(Pt);break;case 10:Xi(i.type);break;case 22:case 23:Qi(i),lf(),t!==null&&se(ks);break;case 24:Xi(Mt)}}function sl(t,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&t)===t){l=void 0;var d=a.create,_=a.inst;l=d(),_.destroy=l}a=a.next}while(a!==h)}}catch(E){nt(i,i.return,E)}}function wr(t,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&t)===t){var _=l.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,h=i;var R=a,B=E;try{B()}catch(K){nt(h,R,K)}}}l=l.next}while(l!==d)}}catch(K){nt(i,i.return,K)}}function yy(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{rg(i,a)}catch(l){nt(t,t.return,l)}}}function vy(t,i,a){a.props=Ls(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){nt(t,i,l)}}function al(t,i){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(h){nt(t,i,h)}}function gi(t,i){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){nt(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){nt(t,i,h)}else a.current=null}function _y(t){var i=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){nt(t,t.return,h)}}function xf(t,i,a){try{var l=t.stateNode;wb(l,t.type,a,i),l[Et]=i}catch(h){nt(t,t.return,h)}}function Ty(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Pr(t.type)||t.tag===4}function Lf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ty(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Pr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uf(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(t),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=hc));else if(l!==4&&(l===27&&Pr(t.type)&&(a=t.stateNode,i=null),t=t.child,t!==null))for(Uf(t,i,a),t=t.sibling;t!==null;)Uf(t,i,a),t=t.sibling}function ec(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(l===27&&Pr(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(ec(t,i,a),t=t.sibling;t!==null;)ec(t,i,a),t=t.sibling}function Ey(t){var i=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Gt(i,l,a),i[It]=t,i[Et]=a}catch(d){nt(t,t.return,d)}}var Wi=!1,vt=!1,zf=!1,Sy=typeof WeakSet=="function"?WeakSet:Set,zt=null;function sb(t,i){if(t=t.containerInfo,ud=vc,t=Pp(t),xh(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var _=0,E=-1,R=-1,B=0,K=0,W=t,q=null;t:for(;;){for(var H;W!==a||h!==0&&W.nodeType!==3||(E=_+h),W!==d||l!==0&&W.nodeType!==3||(R=_+l),W.nodeType===3&&(_+=W.nodeValue.length),(H=W.firstChild)!==null;)q=W,W=H;for(;;){if(W===t)break t;if(q===a&&++B===h&&(E=_),q===d&&++K===l&&(R=_),(H=W.nextSibling)!==null)break;W=q,q=W.parentNode}W=H}a=E===-1||R===-1?null:{start:E,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(cd={focusedElem:t,selectionRange:a},vc=!1,zt=i;zt!==null;)if(i=zt,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,zt=t;else for(;zt!==null;){switch(i=zt,d=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var be=Ls(a.type,h,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(be,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(Te){nt(a,a.return,Te)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)dd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":dd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,zt=t;break}zt=i.return}}function by(t,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Cr(t,a),l&4&&sl(5,a);break;case 1:if(Cr(t,a),l&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(_){nt(a,a.return,_)}else{var h=Ls(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(_){nt(a,a.return,_)}}l&64&&yy(a),l&512&&al(a,a.return);break;case 3:if(Cr(t,a),l&64&&(t=a.updateQueue,t!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{rg(t,i)}catch(_){nt(a,a.return,_)}}break;case 27:i===null&&l&4&&Ey(a);case 26:case 5:Cr(t,a),i===null&&l&4&&_y(a),l&512&&al(a,a.return);break;case 12:Cr(t,a);break;case 13:Cr(t,a),l&4&&Cy(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=mb.bind(null,a),Mb(t,a))));break;case 22:if(l=a.memoizedState!==null||Wi,!l){i=i!==null&&i.memoizedState!==null||vt,h=Wi;var d=vt;Wi=l,(vt=i)&&!d?Rr(t,a,(a.subtreeFlags&8772)!==0):Cr(t,a),Wi=h,vt=d}break;case 30:break;default:Cr(t,a)}}function Ay(t){var i=t.alternate;i!==null&&(t.alternate=null,Ay(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&mr(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ut=null,pn=!1;function Ji(t,i,a){for(a=a.child;a!==null;)wy(t,i,a),a=a.sibling}function wy(t,i,a){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(Ye,a)}catch{}switch(a.tag){case 26:vt||gi(a,i),Ji(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vt||gi(a,i);var l=ut,h=pn;Pr(a.type)&&(ut=a.stateNode,pn=!1),Ji(t,i,a),pl(a.stateNode),ut=l,pn=h;break;case 5:vt||gi(a,i);case 6:if(l=ut,h=pn,ut=null,Ji(t,i,a),ut=l,pn=h,ut!==null)if(pn)try{(ut.nodeType===9?ut.body:ut.nodeName==="HTML"?ut.ownerDocument.body:ut).removeChild(a.stateNode)}catch(d){nt(a,i,d)}else try{ut.removeChild(a.stateNode)}catch(d){nt(a,i,d)}break;case 18:ut!==null&&(pn?(t=ut,dv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),bl(t)):dv(ut,a.stateNode));break;case 4:l=ut,h=pn,ut=a.stateNode.containerInfo,pn=!0,Ji(t,i,a),ut=l,pn=h;break;case 0:case 11:case 14:case 15:vt||wr(2,a,i),vt||wr(4,a,i),Ji(t,i,a);break;case 1:vt||(gi(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&vy(a,i,l)),Ji(t,i,a);break;case 21:Ji(t,i,a);break;case 22:vt=(l=vt)||a.memoizedState!==null,Ji(t,i,a),vt=l;break;default:Ji(t,i,a)}}function Cy(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{bl(t)}catch(a){nt(i,i.return,a)}}function ab(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Sy),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Sy),i;default:throw Error(s(435,t.tag))}}function jf(t,i){var a=ab(t);i.forEach(function(l){var h=pb.bind(null,t,l);a.has(l)||(a.add(l),l.then(h,h))})}function An(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=t,_=i,E=_;e:for(;E!==null;){switch(E.tag){case 27:if(Pr(E.type)){ut=E.stateNode,pn=!1;break e}break;case 5:ut=E.stateNode,pn=!1;break e;case 3:case 4:ut=E.stateNode.containerInfo,pn=!0;break e}E=E.return}if(ut===null)throw Error(s(160));wy(d,_,h),ut=null,pn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Ry(i,t),i=i.sibling}var Wn=null;function Ry(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:An(i,t),wn(t),l&4&&(wr(3,t,t.return),sl(3,t),wr(5,t,t.return));break;case 1:An(i,t),wn(t),l&512&&(vt||a===null||gi(a,a.return)),l&64&&Wi&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Wn;if(An(i,t),wn(t),l&512&&(vt||a===null||gi(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[fs]||d[It]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Gt(d,l,a),d[It]=t,gt(d),l=d;break e;case"link":var _=Ev("link","href",h).get(l+(a.href||""));if(_){for(var E=0;E<_.length;E++)if(d=_[E],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(E,1);break t}}d=h.createElement(l),Gt(d,l,a),h.head.appendChild(d);break;case"meta":if(_=Ev("meta","content",h).get(l+(a.content||""))){for(E=0;E<_.length;E++)if(d=_[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(E,1);break t}}d=h.createElement(l),Gt(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[It]=t,gt(d),l=d}t.stateNode=l}else Sv(h,t.type,t.stateNode);else t.stateNode=Tv(h,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?Sv(h,t.type,t.stateNode):Tv(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&xf(t,t.memoizedProps,a.memoizedProps)}break;case 27:An(i,t),wn(t),l&512&&(vt||a===null||gi(a,a.return)),a!==null&&l&4&&xf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(An(i,t),wn(t),l&512&&(vt||a===null||gi(a,a.return)),t.flags&32){h=t.stateNode;try{Pn(h,"")}catch(H){nt(t,t.return,H)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,xf(t,h,a!==null?a.memoizedProps:h)),l&1024&&(zf=!0);break;case 6:if(An(i,t),wn(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(H){nt(t,t.return,H)}}break;case 3:if(pc=null,h=Wn,Wn=dc(i.containerInfo),An(i,t),Wn=h,wn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{bl(i.containerInfo)}catch(H){nt(t,t.return,H)}zf&&(zf=!1,Ny(t));break;case 4:l=Wn,Wn=dc(t.stateNode.containerInfo),An(i,t),wn(t),Wn=l;break;case 12:An(i,t),wn(t);break;case 13:An(i,t),wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Gf=an()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,jf(t,l)));break;case 22:h=t.memoizedState!==null;var R=a!==null&&a.memoizedState!==null,B=Wi,K=vt;if(Wi=B||h,vt=K||R,An(i,t),vt=K,Wi=B,wn(t),l&8192)e:for(i=t.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||R||Wi||vt||Us(t)),a=null,i=t;;){if(i.tag===5||i.tag===26){if(a===null){R=a=i;try{if(d=R.stateNode,h)_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{E=R.stateNode;var W=R.memoizedProps.style,q=W!=null&&W.hasOwnProperty("display")?W.display:null;E.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(H){nt(R,R.return,H)}}}else if(i.tag===6){if(a===null){R=i;try{R.stateNode.nodeValue=h?"":R.memoizedProps}catch(H){nt(R,R.return,H)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,jf(t,a))));break;case 19:An(i,t),wn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,jf(t,l)));break;case 30:break;case 21:break;default:An(i,t),wn(t)}}function wn(t){var i=t.flags;if(i&2){try{for(var a,l=t.return;l!==null;){if(Ty(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Lf(t);ec(t,d,h);break;case 5:var _=a.stateNode;a.flags&32&&(Pn(_,""),a.flags&=-33);var E=Lf(t);ec(t,E,_);break;case 3:case 4:var R=a.stateNode.containerInfo,B=Lf(t);Uf(t,B,R);break;default:throw Error(s(161))}}catch(K){nt(t,t.return,K)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Ny(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Ny(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Cr(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)by(t,i.alternate,i),i=i.sibling}function Us(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:wr(4,i,i.return),Us(i);break;case 1:gi(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&vy(i,i.return,a),Us(i);break;case 27:pl(i.stateNode);case 26:case 5:gi(i,i.return),Us(i);break;case 22:i.memoizedState===null&&Us(i);break;case 30:Us(i);break;default:Us(i)}t=t.sibling}}function Rr(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=t,d=i,_=d.flags;switch(d.tag){case 0:case 11:case 15:Rr(h,d,a),sl(4,d);break;case 1:if(Rr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(B){nt(l,l.return,B)}if(l=d,h=l.updateQueue,h!==null){var E=l.stateNode;try{var R=h.shared.hiddenCallbacks;if(R!==null)for(h.shared.hiddenCallbacks=null,h=0;h<R.length;h++)ig(R[h],E)}catch(B){nt(l,l.return,B)}}a&&_&64&&yy(d),al(d,d.return);break;case 27:Ey(d);case 26:case 5:Rr(h,d,a),a&&l===null&&_&4&&_y(d),al(d,d.return);break;case 12:Rr(h,d,a);break;case 13:Rr(h,d,a),a&&_&4&&Cy(h,d);break;case 22:d.memoizedState===null&&Rr(h,d,a),al(d,d.return);break;case 30:break;default:Rr(h,d,a)}i=i.sibling}}function Bf(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Yo(a))}function qf(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Yo(t))}function yi(t,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Iy(t,i,a,l),i=i.sibling}function Iy(t,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:yi(t,i,a,l),h&2048&&sl(9,i);break;case 1:yi(t,i,a,l);break;case 3:yi(t,i,a,l),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Yo(t)));break;case 12:if(h&2048){yi(t,i,a,l),t=i.stateNode;try{var d=i.memoizedProps,_=d.id,E=d.onPostCommit;typeof E=="function"&&E(_,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(R){nt(i,i.return,R)}}else yi(t,i,a,l);break;case 13:yi(t,i,a,l);break;case 23:break;case 22:d=i.stateNode,_=i.alternate,i.memoizedState!==null?d._visibility&2?yi(t,i,a,l):ol(t,i):d._visibility&2?yi(t,i,a,l):(d._visibility|=2,Pa(t,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&Bf(_,i);break;case 24:yi(t,i,a,l),h&2048&&qf(i.alternate,i);break;default:yi(t,i,a,l)}}function Pa(t,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=t,_=i,E=a,R=l,B=_.flags;switch(_.tag){case 0:case 11:case 15:Pa(d,_,E,R,h),sl(8,_);break;case 23:break;case 22:var K=_.stateNode;_.memoizedState!==null?K._visibility&2?Pa(d,_,E,R,h):ol(d,_):(K._visibility|=2,Pa(d,_,E,R,h)),h&&B&2048&&Bf(_.alternate,_);break;case 24:Pa(d,_,E,R,h),h&&B&2048&&qf(_.alternate,_);break;default:Pa(d,_,E,R,h)}i=i.sibling}}function ol(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,l=i,h=l.flags;switch(l.tag){case 22:ol(a,l),h&2048&&Bf(l.alternate,l);break;case 24:ol(a,l),h&2048&&qf(l.alternate,l);break;default:ol(a,l)}i=i.sibling}}var ll=8192;function Va(t){if(t.subtreeFlags&ll)for(t=t.child;t!==null;)Dy(t),t=t.sibling}function Dy(t){switch(t.tag){case 26:Va(t),t.flags&ll&&t.memoizedState!==null&&Yb(Wn,t.memoizedState,t.memoizedProps);break;case 5:Va(t);break;case 3:case 4:var i=Wn;Wn=dc(t.stateNode.containerInfo),Va(t),Wn=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=ll,ll=16777216,Va(t),ll=i):Va(t));break;default:Va(t)}}function Oy(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function ul(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];zt=l,Py(l,t)}Oy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)My(t),t=t.sibling}function My(t){switch(t.tag){case 0:case 11:case 15:ul(t),t.flags&2048&&wr(9,t,t.return);break;case 3:ul(t);break;case 12:ul(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,tc(t)):ul(t);break;default:ul(t)}}function tc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];zt=l,Py(l,t)}Oy(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:wr(8,i,i.return),tc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,tc(i));break;default:tc(i)}t=t.sibling}}function Py(t,i){for(;zt!==null;){var a=zt;switch(a.tag){case 0:case 11:case 15:wr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Yo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,zt=l;else e:for(a=t;zt!==null;){l=zt;var h=l.sibling,d=l.return;if(Ay(l),l===a){zt=null;break e}if(h!==null){h.return=d,zt=h;break e}zt=d}}}var ob={getCacheForType:function(t){var i=Zt(Mt),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a}},lb=typeof WeakMap=="function"?WeakMap:Map,$e=0,it=null,Pe=null,je=0,Ze=0,Cn=null,Nr=!1,ka=!1,Hf=!1,er=0,pt=0,Ir=0,zs=0,Ff=0,qn=0,xa=0,cl=null,gn=null,Yf=!1,Gf=0,nc=1/0,ic=null,Dr=null,Yt=0,Or=null,La=null,Ua=0,Xf=0,Kf=null,Vy=null,hl=0,Qf=null;function Rn(){if(($e&2)!==0&&je!==0)return je&-je;if(Y.T!==null){var t=wa;return t!==0?t:nd()}return fr()}function ky(){qn===0&&(qn=(je&536870912)===0||Xe?To():536870912);var t=Bn.current;return t!==null&&(t.flags|=32),qn}function Nn(t,i,a){(t===it&&(Ze===2||Ze===9)||t.cancelPendingCommit!==null)&&(za(t,0),Mr(t,je,qn,!1)),Mi(t,a),(($e&2)===0||t!==it)&&(t===it&&(($e&2)===0&&(zs|=a),pt===4&&Mr(t,je,qn,!1)),vi(t))}function xy(t,i,a){if(($e&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&t.expiredLanes)===0||hs(t,i),h=l?hb(t,i):Wf(t,i,!0),d=l;do{if(h===0){ka&&!l&&Mr(t,i,0,!1);break}else{if(a=t.current.alternate,d&&!ub(a)){h=Wf(t,i,!1),d=!1;continue}if(h===2){if(d=i,t.errorRecoveryDisabledLanes&d)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){i=_;e:{var E=t;h=cl;var R=E.current.memoizedState.isDehydrated;if(R&&(za(E,_).flags|=256),_=Wf(E,_,!1),_!==2){if(Hf&&!R){E.errorRecoveryDisabledLanes|=d,zs|=d,h=4;break e}d=gn,gn=h,d!==null&&(gn===null?gn=d:gn.push.apply(gn,d))}h=_}if(d=!1,h!==2)continue}}if(h===1){za(t,0),Mr(t,i,0,!0);break}e:{switch(l=t,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Mr(l,i,qn,!Nr);break e;case 2:gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=Gf+300-an(),10<h)){if(Mr(l,i,qn,!Nr),na(l,0,!0)!==0)break e;l.timeoutHandle=hv(Ly.bind(null,l,a,gn,ic,Yf,i,qn,zs,xa,Nr,d,2,-0,0),h);break e}Ly(l,a,gn,ic,Yf,i,qn,zs,xa,Nr,d,0,-0,0)}}break}while(!0);vi(t)}function Ly(t,i,a,l,h,d,_,E,R,B,K,W,q,H){if(t.timeoutHandle=-1,W=i.subtreeFlags,(W&8192||(W&16785408)===16785408)&&(vl={stylesheets:null,count:0,unsuspend:Fb},Dy(i),W=Gb(),W!==null)){t.cancelPendingCommit=W(Fy.bind(null,t,i,d,a,l,h,_,E,R,K,1,q,H)),Mr(t,d,_,!B);return}Fy(t,i,d,a,l,h,_,E,R)}function ub(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!Sn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Mr(t,i,a,l){i&=~Ff,i&=~zs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var h=i;0<h;){var d=31-$t(h),_=1<<d;l[d]=-1,h&=~_}a!==0&&ii(t,a,i)}function rc(){return($e&6)===0?(fl(0),!1):!0}function $f(){if(Pe!==null){if(Ze===0)var t=Pe.return;else t=Pe,Gi=Ps=null,df(t),Oa=null,nl=0,t=Pe;for(;t!==null;)gy(t.alternate,t),t=t.return;Pe=null}}function za(t,i){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Rb(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),$f(),it=t,Pe=a=Hi(t.current,null),je=i,Ze=0,Cn=null,Nr=!1,ka=hs(t,i),Hf=!1,xa=qn=Ff=zs=Ir=pt=0,gn=cl=null,Yf=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var h=31-$t(l),d=1<<h;i|=t[h],l&=~d}return er=i,Cu(),a}function Uy(t,i){Oe=null,Y.H=Yu,i===Xo||i===ku?(i=tg(),Ze=3):i===Wp?(i=tg(),Ze=4):Ze=i===ny?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Cn=i,Pe===null&&(pt=1,$u(t,Ln(i,t.current)))}function zy(){var t=Y.H;return Y.H=Yu,t===null?Yu:t}function jy(){var t=Y.A;return Y.A=ob,t}function Zf(){pt=4,Nr||(je&4194048)!==je&&Bn.current!==null||(ka=!0),(Ir&134217727)===0&&(zs&134217727)===0||it===null||Mr(it,je,qn,!1)}function Wf(t,i,a){var l=$e;$e|=2;var h=zy(),d=jy();(it!==t||je!==i)&&(ic=null,za(t,i)),i=!1;var _=pt;e:do try{if(Ze!==0&&Pe!==null){var E=Pe,R=Cn;switch(Ze){case 8:$f(),_=6;break e;case 3:case 2:case 9:case 6:Bn.current===null&&(i=!0);var B=Ze;if(Ze=0,Cn=null,ja(t,E,R,B),a&&ka){_=0;break e}break;default:B=Ze,Ze=0,Cn=null,ja(t,E,R,B)}}cb(),_=pt;break}catch(K){Uy(t,K)}while(!0);return i&&t.shellSuspendCounter++,Gi=Ps=null,$e=l,Y.H=h,Y.A=d,Pe===null&&(it=null,je=0,Cu()),_}function cb(){for(;Pe!==null;)By(Pe)}function hb(t,i){var a=$e;$e|=2;var l=zy(),h=jy();it!==t||je!==i?(ic=null,nc=an()+500,za(t,i)):ka=hs(t,i);e:do try{if(Ze!==0&&Pe!==null){i=Pe;var d=Cn;t:switch(Ze){case 1:Ze=0,Cn=null,ja(t,i,d,1);break;case 2:case 9:if(Jp(d)){Ze=0,Cn=null,qy(i);break}i=function(){Ze!==2&&Ze!==9||it!==t||(Ze=7),vi(t)},d.then(i,i);break e;case 3:Ze=7;break e;case 4:Ze=5;break e;case 7:Jp(d)?(Ze=0,Cn=null,qy(i)):(Ze=0,Cn=null,ja(t,i,d,7));break;case 5:var _=null;switch(Pe.tag){case 26:_=Pe.memoizedState;case 5:case 27:var E=Pe;if(!_||bv(_)){Ze=0,Cn=null;var R=E.sibling;if(R!==null)Pe=R;else{var B=E.return;B!==null?(Pe=B,sc(B)):Pe=null}break t}}Ze=0,Cn=null,ja(t,i,d,5);break;case 6:Ze=0,Cn=null,ja(t,i,d,6);break;case 8:$f(),pt=6;break e;default:throw Error(s(462))}}fb();break}catch(K){Uy(t,K)}while(!0);return Gi=Ps=null,Y.H=l,Y.A=h,$e=a,Pe!==null?0:(it=null,je=0,Cu(),pt)}function fb(){for(;Pe!==null&&!Di();)By(Pe)}function By(t){var i=my(t.alternate,t,er);t.memoizedProps=t.pendingProps,i===null?sc(t):Pe=i}function qy(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=ly(a,i,i.pendingProps,i.type,void 0,je);break;case 11:i=ly(a,i,i.pendingProps,i.type.render,i.ref,je);break;case 5:df(i);default:gy(a,i),i=Pe=Hp(i,er),i=my(a,i,er)}t.memoizedProps=t.pendingProps,i===null?sc(t):Pe=i}function ja(t,i,a,l){Gi=Ps=null,df(i),Oa=null,nl=0;var h=i.return;try{if(tb(t,h,i,a,je)){pt=1,$u(t,Ln(a,t.current)),Pe=null;return}}catch(d){if(h!==null)throw Pe=h,d;pt=1,$u(t,Ln(a,t.current)),Pe=null;return}i.flags&32768?(Xe||l===1?t=!0:ka||(je&536870912)!==0?t=!1:(Nr=t=!0,(l===2||l===9||l===3||l===6)&&(l=Bn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Hy(i,t)):sc(i)}function sc(t){var i=t;do{if((i.flags&32768)!==0){Hy(i,Nr);return}t=i.return;var a=ib(i.alternate,i,er);if(a!==null){Pe=a;return}if(i=i.sibling,i!==null){Pe=i;return}Pe=i=t}while(i!==null);pt===0&&(pt=5)}function Hy(t,i){do{var a=rb(t.alternate,t);if(a!==null){a.flags&=32767,Pe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){Pe=t;return}Pe=t=a}while(t!==null);pt=6,Pe=null}function Fy(t,i,a,l,h,d,_,E,R){t.cancelPendingCommit=null;do ac();while(Yt!==0);if(($e&6)!==0)throw Error(s(327));if(i!==null){if(i===t.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Bh,So(t,a,d,_,E,R),t===it&&(Pe=it=null,je=0),La=i,Or=t,Ua=a,Xf=d,Kf=h,Vy=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,gb(vn,function(){return Qy(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=Y.T,Y.T=null,h=ee.p,ee.p=2,_=$e,$e|=4;try{sb(t,i,a)}finally{$e=_,ee.p=h,Y.T=l}}Yt=1,Yy(),Gy(),Xy()}}function Yy(){if(Yt===1){Yt=0;var t=Or,i=La,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=Y.T,Y.T=null;var l=ee.p;ee.p=2;var h=$e;$e|=4;try{Ry(i,t);var d=cd,_=Pp(t.containerInfo),E=d.focusedElem,R=d.selectionRange;if(_!==E&&E&&E.ownerDocument&&Mp(E.ownerDocument.documentElement,E)){if(R!==null&&xh(E)){var B=R.start,K=R.end;if(K===void 0&&(K=B),"selectionStart"in E)E.selectionStart=B,E.selectionEnd=Math.min(K,E.value.length);else{var W=E.ownerDocument||document,q=W&&W.defaultView||window;if(q.getSelection){var H=q.getSelection(),be=E.textContent.length,Te=Math.min(R.start,be),tt=R.end===void 0?Te:Math.min(R.end,be);!H.extend&&Te>tt&&(_=tt,tt=Te,Te=_);var L=Op(E,Te),O=Op(E,tt);if(L&&O&&(H.rangeCount!==1||H.anchorNode!==L.node||H.anchorOffset!==L.offset||H.focusNode!==O.node||H.focusOffset!==O.offset)){var j=W.createRange();j.setStart(L.node,L.offset),H.removeAllRanges(),Te>tt?(H.addRange(j),H.extend(O.node,O.offset)):(j.setEnd(O.node,O.offset),H.addRange(j))}}}}for(W=[],H=E;H=H.parentNode;)H.nodeType===1&&W.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<W.length;E++){var Q=W[E];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}vc=!!ud,cd=ud=null}finally{$e=h,ee.p=l,Y.T=a}}t.current=i,Yt=2}}function Gy(){if(Yt===2){Yt=0;var t=Or,i=La,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=Y.T,Y.T=null;var l=ee.p;ee.p=2;var h=$e;$e|=4;try{by(t,i.alternate,i)}finally{$e=h,ee.p=l,Y.T=a}}Yt=3}}function Xy(){if(Yt===4||Yt===3){Yt=0,ta();var t=Or,i=La,a=Ua,l=Vy;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Yt=5:(Yt=0,La=Or=null,Ky(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(Dr=null),ia(a),i=i.stateNode,Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(Ye,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Y.T,h=ee.p,ee.p=2,Y.T=null;try{for(var d=t.onRecoverableError,_=0;_<l.length;_++){var E=l[_];d(E.value,{componentStack:E.stack})}}finally{Y.T=i,ee.p=h}}(Ua&3)!==0&&ac(),vi(t),h=t.pendingLanes,(a&4194090)!==0&&(h&42)!==0?t===Qf?hl++:(hl=0,Qf=t):hl=0,fl(0)}}function Ky(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Yo(i)))}function ac(t){return Yy(),Gy(),Xy(),Qy()}function Qy(){if(Yt!==5)return!1;var t=Or,i=Xf;Xf=0;var a=ia(Ua),l=Y.T,h=ee.p;try{ee.p=32>a?32:a,Y.T=null,a=Kf,Kf=null;var d=Or,_=Ua;if(Yt=0,La=Or=null,Ua=0,($e&6)!==0)throw Error(s(331));var E=$e;if($e|=4,My(d.current),Iy(d,d.current,_,a),$e=E,fl(0,!1),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(Ye,d)}catch{}return!0}finally{ee.p=h,Y.T=l,Ky(t,i)}}function $y(t,i,a){i=Ln(a,i),i=Rf(t.stateNode,i,2),t=Er(t,i,2),t!==null&&(Mi(t,2),vi(t))}function nt(t,i,a){if(t.tag===3)$y(t,t,a);else for(;i!==null;){if(i.tag===3){$y(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Dr===null||!Dr.has(l))){t=Ln(a,t),a=ey(2),l=Er(i,a,2),l!==null&&(ty(a,l,i,t),Mi(l,2),vi(l));break}}i=i.return}}function Jf(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new lb;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(Hf=!0,h.add(a),t=db.bind(null,t,i,a),i.then(t,t))}function db(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,it===t&&(je&a)===a&&(pt===4||pt===3&&(je&62914560)===je&&300>an()-Gf?($e&2)===0&&za(t,0):Ff|=a,xa===je&&(xa=0)),vi(t)}function Zy(t,i){i===0&&(i=Eo()),t=Ea(t,i),t!==null&&(Mi(t,i),vi(t))}function mb(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Zy(t,a)}function pb(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),Zy(t,a)}function gb(t,i){return In(t,i)}var oc=null,Ba=null,ed=!1,lc=!1,td=!1,js=0;function vi(t){t!==Ba&&t.next===null&&(Ba===null?oc=Ba=t:Ba=Ba.next=t),lc=!0,ed||(ed=!0,vb())}function fl(t,i){if(!td&&lc){td=!0;do for(var a=!1,l=oc;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var _=l.suspendedLanes,E=l.pingedLanes;d=(1<<31-$t(42|t)+1)-1,d&=h&~(_&~E),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,tv(l,d))}else d=je,d=na(l,l===it?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||hs(l,d)||(a=!0,tv(l,d));l=l.next}while(a);td=!1}}function yb(){Wy()}function Wy(){lc=ed=!1;var t=0;js!==0&&(Cb()&&(t=js),js=0);for(var i=an(),a=null,l=oc;l!==null;){var h=l.next,d=Jy(l,i);d===0?(l.next=null,a===null?oc=h:a.next=h,h===null&&(Ba=a)):(a=l,(t!==0||(d&3)!==0)&&(lc=!0)),l=h}fl(t)}function Jy(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var _=31-$t(d),E=1<<_,R=h[_];R===-1?((E&a)===0||(E&l)!==0)&&(h[_]=_o(E,i)):R<=i&&(t.expiredLanes|=E),d&=~E}if(i=it,a=je,a=na(t,t===i?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===i&&(Ze===2||Ze===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Dn(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||hs(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(l!==null&&Dn(l),ia(a)){case 2:case 8:a=on;break;case 32:a=vn;break;case 268435456:a=_n;break;default:a=vn}return l=ev.bind(null,t),a=In(a,l),t.callbackPriority=i,t.callbackNode=a,i}return l!==null&&l!==null&&Dn(l),t.callbackPriority=2,t.callbackNode=null,2}function ev(t,i){if(Yt!==0&&Yt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ac()&&t.callbackNode!==a)return null;var l=je;return l=na(t,t===it?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(xy(t,l,i),Jy(t,an()),t.callbackNode!=null&&t.callbackNode===a?ev.bind(null,t):null)}function tv(t,i){if(ac())return null;xy(t,i,!0)}function vb(){Nb(function(){($e&6)!==0?In(He,yb):Wy()})}function nd(){return js===0&&(js=To()),js}function nv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ua(""+t)}function iv(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function _b(t,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=nv((h[Et]||null).action),_=l.submitter;_&&(i=(i=_[Et]||null)?nv(i.formAction):_.getAttribute("formAction"),i!==null&&(d=i,_=null));var E=new ca("action","action",null,l,h);t.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(js!==0){var R=_?iv(h,_):new FormData(h);Sf(a,{pending:!0,data:R,method:h.method,action:d},null,R)}}else typeof d=="function"&&(E.preventDefault(),R=_?iv(h,_):new FormData(h),Sf(a,{pending:!0,data:R,method:h.method,action:d},d,R))},currentTarget:h}]})}}for(var id=0;id<jh.length;id++){var rd=jh[id],Tb=rd.toLowerCase(),Eb=rd[0].toUpperCase()+rd.slice(1);Zn(Tb,"on"+Eb)}Zn(xp,"onAnimationEnd"),Zn(Lp,"onAnimationIteration"),Zn(Up,"onAnimationStart"),Zn("dblclick","onDoubleClick"),Zn("focusin","onFocus"),Zn("focusout","onBlur"),Zn(US,"onTransitionRun"),Zn(zS,"onTransitionStart"),Zn(jS,"onTransitionCancel"),Zn(zp,"onTransitionEnd"),Vi("onMouseEnter",["mouseout","mouseover"]),Vi("onMouseLeave",["mouseout","mouseover"]),Vi("onPointerEnter",["pointerout","pointerover"]),Vi("onPointerLeave",["pointerout","pointerover"]),Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dl));function rv(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var _=l.length-1;0<=_;_--){var E=l[_],R=E.instance,B=E.currentTarget;if(E=E.listener,R!==d&&h.isPropagationStopped())break e;d=E,h.currentTarget=B;try{d(h)}catch(K){Qu(K)}h.currentTarget=null,d=R}else for(_=0;_<l.length;_++){if(E=l[_],R=E.instance,B=E.currentTarget,E=E.listener,R!==d&&h.isPropagationStopped())break e;d=E,h.currentTarget=B;try{d(h)}catch(K){Qu(K)}h.currentTarget=null,d=R}}}}function Ve(t,i){var a=i[Ao];a===void 0&&(a=i[Ao]=new Set);var l=t+"__bubble";a.has(l)||(sv(i,t,2,!1),a.add(l))}function sd(t,i,a){var l=0;i&&(l|=4),sv(a,t,l,i)}var uc="_reactListening"+Math.random().toString(36).slice(2);function ad(t){if(!t[uc]){t[uc]=!0,wo.forEach(function(a){a!=="selectionchange"&&(Sb.has(a)||sd(a,!1,t),sd(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[uc]||(i[uc]=!0,sd("selectionchange",!1,i))}}function sv(t,i,a,l){switch(Iv(i)){case 2:var h=Qb;break;case 8:h=$b;break;default:h=Td}a=h.bind(null,i,a,t),h=void 0,!kn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function od(t,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var E=l.stateNode.containerInfo;if(E===h)break;if(_===4)for(_=l.return;_!==null;){var R=_.tag;if((R===3||R===4)&&_.stateNode.containerInfo===h)return;_=_.return}for(;E!==null;){if(_=Pi(E),_===null)return;if(R=_.tag,R===5||R===6||R===26||R===27){l=d=_;continue e}E=E.parentNode}}l=l.return}hu(function(){var B=d,K=Vn(a),W=[];e:{var q=jp.get(t);if(q!==void 0){var H=ca,be=t;switch(t){case"keypress":if(ui(a)===0)break e;case"keydown":case"keyup":H=ga;break;case"focusin":be="focus",H=da;break;case"focusout":be="blur",H=da;break;case"beforeblur":case"afterblur":H=da;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=xn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Mh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=_u;break;case xp:case Lp:case Up:H=ma;break;case zp:H=Eu;break;case"scroll":case"scrollend":H=fu;break;case"wheel":H=ya;break;case"copy":case"cut":case"paste":H=pa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Lo;break;case"toggle":case"beforetoggle":H=bu}var Te=(i&4)!==0,tt=!Te&&(t==="scroll"||t==="scrollend"),L=Te?q!==null?q+"Capture":null:q;Te=[];for(var O=B,j;O!==null;){var Q=O;if(j=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||j===null||L===null||(Q=_s(O,L),Q!=null&&Te.push(ml(O,Q,j))),tt)break;O=O.return}0<Te.length&&(q=new H(q,be,null,a,K),W.push({event:q,listeners:Te}))}}if((i&7)===0){e:{if(q=t==="mouseover"||t==="pointerover",H=t==="mouseout"||t==="pointerout",q&&a!==Li&&(be=a.relatedTarget||a.fromElement)&&(Pi(be)||be[Mn]))break e;if((H||q)&&(q=K.window===K?K:(q=K.ownerDocument)?q.defaultView||q.parentWindow:window,H?(be=a.relatedTarget||a.toElement,H=B,be=be?Pi(be):null,be!==null&&(tt=u(be),Te=be.tag,be!==tt||Te!==5&&Te!==27&&Te!==6)&&(be=null)):(H=null,be=B),H!==be)){if(Te=xn,Q="onMouseLeave",L="onMouseEnter",O="mouse",(t==="pointerout"||t==="pointerover")&&(Te=Lo,Q="onPointerLeave",L="onPointerEnter",O="pointer"),tt=H==null?q:si(H),j=be==null?q:si(be),q=new Te(Q,O+"leave",H,a,K),q.target=tt,q.relatedTarget=j,Q=null,Pi(K)===B&&(Te=new Te(L,O+"enter",be,a,K),Te.target=j,Te.relatedTarget=tt,Q=Te),tt=Q,H&&be)t:{for(Te=H,L=be,O=0,j=Te;j;j=qa(j))O++;for(j=0,Q=L;Q;Q=qa(Q))j++;for(;0<O-j;)Te=qa(Te),O--;for(;0<j-O;)L=qa(L),j--;for(;O--;){if(Te===L||L!==null&&Te===L.alternate)break t;Te=qa(Te),L=qa(L)}Te=null}else Te=null;H!==null&&av(W,q,H,Te,!1),be!==null&&tt!==null&&av(W,tt,be,Te,!0)}}e:{if(q=B?si(B):window,H=q.nodeName&&q.nodeName.toLowerCase(),H==="select"||H==="input"&&q.type==="file")var he=wp;else if(Ot(q))if(Cp)he=kS;else{he=PS;var Me=MS}else H=q.nodeName,!H||H.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?B&&Do(B.elementType)&&(he=wp):he=VS;if(he&&(he=he(t,B))){qi(W,he,a,K);break e}Me&&Me(t,q,B),t==="focusout"&&B&&q.type==="number"&&B.memoizedProps.value!=null&&gr(q,"number",q.value)}switch(Me=B?si(B):window,t){case"focusin":(Ot(Me)||Me.contentEditable==="true")&&(va=Me,Lh=B,jo=null);break;case"focusout":jo=Lh=va=null;break;case"mousedown":Uh=!0;break;case"contextmenu":case"mouseup":case"dragend":Uh=!1,Vp(W,a,K);break;case"selectionchange":if(LS)break;case"keydown":case"keyup":Vp(W,a,K)}var ge;if(fi)e:{switch(t){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Ue?F(t,a)&&(Ee="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(v&&a.locale!=="ko"&&(Ue||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Ue&&(ge=Mo()):(li=K,yr="value"in li?li.value:li.textContent,Ue=!0)),Me=cc(B,Ee),0<Me.length&&(Ee=new ko(Ee,t,null,a,K),W.push({event:Ee,listeners:Me}),ge?Ee.data=ge:(ge=re(a),ge!==null&&(Ee.data=ge)))),(ge=p?Dt(t,a):ze(t,a))&&(Ee=cc(B,"onBeforeInput"),0<Ee.length&&(Me=new ko("onBeforeInput","beforeinput",null,a,K),W.push({event:Me,listeners:Ee}),Me.data=ge)),_b(W,t,B,a,K)}rv(W,i)})}function ml(t,i,a){return{instance:t,listener:i,currentTarget:a}}function cc(t,i){for(var a=i+"Capture",l=[];t!==null;){var h=t,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=_s(t,a),h!=null&&l.unshift(ml(t,h,d)),h=_s(t,i),h!=null&&l.push(ml(t,h,d))),t.tag===3)return l;t=t.return}return[]}function qa(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function av(t,i,a,l,h){for(var d=i._reactName,_=[];a!==null&&a!==l;){var E=a,R=E.alternate,B=E.stateNode;if(E=E.tag,R!==null&&R===l)break;E!==5&&E!==26&&E!==27||B===null||(R=B,h?(B=_s(a,d),B!=null&&_.unshift(ml(a,B,R))):h||(B=_s(a,d),B!=null&&_.push(ml(a,B,R)))),a=a.return}_.length!==0&&t.push({event:i,listeners:_})}var bb=/\r\n?/g,Ab=/\u0000|\uFFFD/g;function ov(t){return(typeof t=="string"?t:""+t).replace(bb,`
`).replace(Ab,"")}function lv(t,i){return i=ov(i),ov(t)===i}function hc(){}function et(t,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Pn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Pn(t,""+l);break;case"className":ai(t,"class",l);break;case"tabIndex":ai(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ai(t,a,l);break;case"style":Io(t,l,d);break;case"data":if(i!=="object"){ai(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=ua(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&et(t,i,"name",h.name,h,null),et(t,i,"formEncType",h.formEncType,h,null),et(t,i,"formMethod",h.formMethod,h,null),et(t,i,"formTarget",h.formTarget,h,null)):(et(t,i,"encType",h.encType,h,null),et(t,i,"method",h.method,h,null),et(t,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=ua(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=hc);break;case"onScroll":l!=null&&Ve("scroll",t);break;case"onScrollEnd":l!=null&&Ve("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=ua(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":Ve("beforetoggle",t),Ve("toggle",t),pr(t,"popover",l);break;case"xlinkActuate":qt(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":qt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":qt(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":qt(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":qt(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":qt(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":qt(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":qt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":qt(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":pr(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Dh.get(a)||a,pr(t,a,l))}}function ld(t,i,a,l,h,d){switch(a){case"style":Io(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?Pn(t,l):(typeof l=="number"||typeof l=="bigint")&&Pn(t,""+l);break;case"onScroll":l!=null&&Ve("scroll",t);break;case"onScrollEnd":l!=null&&Ve("scrollend",t);break;case"onClick":l!=null&&(t.onclick=hc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ra.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=t[Et]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,l,h);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):pr(t,a,l)}}}function Gt(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",t),Ve("load",t);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var _=a[d];if(_!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:et(t,i,d,_,a,null)}}h&&et(t,i,"srcSet",a.srcSet,a,null),l&&et(t,i,"src",a.src,a,null);return;case"input":Ve("invalid",t);var E=d=_=h=null,R=null,B=null;for(l in a)if(a.hasOwnProperty(l)){var K=a[l];if(K!=null)switch(l){case"name":h=K;break;case"type":_=K;break;case"checked":R=K;break;case"defaultChecked":B=K;break;case"value":d=K;break;case"defaultValue":E=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,i));break;default:et(t,i,l,K,a,null)}}gs(t,d,E,R,B,_,h,!1),la(t);return;case"select":Ve("invalid",t),l=_=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":_=E;break;case"multiple":l=E;default:et(t,i,h,E,a,null)}i=d,a=_,t.multiple=!!l,i!=null?xi(t,!!l,i,!1):a!=null&&xi(t,!!l,a,!0);return;case"textarea":Ve("invalid",t),d=h=l=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":l=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:et(t,i,_,E,a,null)}ys(t,l,h,d),la(t);return;case"option":for(R in a)if(a.hasOwnProperty(R)&&(l=a[R],l!=null))switch(R){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:et(t,i,R,l,a,null)}return;case"dialog":Ve("beforetoggle",t),Ve("toggle",t),Ve("cancel",t),Ve("close",t);break;case"iframe":case"object":Ve("load",t);break;case"video":case"audio":for(l=0;l<dl.length;l++)Ve(dl[l],t);break;case"image":Ve("error",t),Ve("load",t);break;case"details":Ve("toggle",t);break;case"embed":case"source":case"link":Ve("error",t),Ve("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in a)if(a.hasOwnProperty(B)&&(l=a[B],l!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:et(t,i,B,l,a,null)}return;default:if(Do(i)){for(K in a)a.hasOwnProperty(K)&&(l=a[K],l!==void 0&&ld(t,i,K,l,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!=null&&et(t,i,E,l,a,null))}function wb(t,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,_=null,E=null,R=null,B=null,K=null;for(H in a){var W=a[H];if(a.hasOwnProperty(H)&&W!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":R=W;default:l.hasOwnProperty(H)||et(t,i,H,null,l,W)}}for(var q in l){var H=l[q];if(W=a[q],l.hasOwnProperty(q)&&(H!=null||W!=null))switch(q){case"type":d=H;break;case"name":h=H;break;case"checked":B=H;break;case"defaultChecked":K=H;break;case"value":_=H;break;case"defaultValue":E=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,i));break;default:H!==W&&et(t,i,q,H,l,W)}}En(t,_,E,R,B,K,d,h);return;case"select":H=_=E=q=null;for(d in a)if(R=a[d],a.hasOwnProperty(d)&&R!=null)switch(d){case"value":break;case"multiple":H=R;default:l.hasOwnProperty(d)||et(t,i,d,null,l,R)}for(h in l)if(d=l[h],R=a[h],l.hasOwnProperty(h)&&(d!=null||R!=null))switch(h){case"value":q=d;break;case"defaultValue":E=d;break;case"multiple":_=d;default:d!==R&&et(t,i,h,d,l,R)}i=E,a=_,l=H,q!=null?xi(t,!!a,q,!1):!!l!=!!a&&(i!=null?xi(t,!!a,i,!0):xi(t,!!a,a?[]:"",!1));return;case"textarea":H=q=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:et(t,i,E,null,l,h)}for(_ in l)if(h=l[_],d=a[_],l.hasOwnProperty(_)&&(h!=null||d!=null))switch(_){case"value":q=h;break;case"defaultValue":H=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&et(t,i,_,h,l,d)}We(t,q,H);return;case"option":for(var be in a)if(q=a[be],a.hasOwnProperty(be)&&q!=null&&!l.hasOwnProperty(be))switch(be){case"selected":t.selected=!1;break;default:et(t,i,be,null,l,q)}for(R in l)if(q=l[R],H=a[R],l.hasOwnProperty(R)&&q!==H&&(q!=null||H!=null))switch(R){case"selected":t.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:et(t,i,R,q,l,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Te in a)q=a[Te],a.hasOwnProperty(Te)&&q!=null&&!l.hasOwnProperty(Te)&&et(t,i,Te,null,l,q);for(B in l)if(q=l[B],H=a[B],l.hasOwnProperty(B)&&q!==H&&(q!=null||H!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,i));break;default:et(t,i,B,q,l,H)}return;default:if(Do(i)){for(var tt in a)q=a[tt],a.hasOwnProperty(tt)&&q!==void 0&&!l.hasOwnProperty(tt)&&ld(t,i,tt,void 0,l,q);for(K in l)q=l[K],H=a[K],!l.hasOwnProperty(K)||q===H||q===void 0&&H===void 0||ld(t,i,K,q,l,H);return}}for(var L in a)q=a[L],a.hasOwnProperty(L)&&q!=null&&!l.hasOwnProperty(L)&&et(t,i,L,null,l,q);for(W in l)q=l[W],H=a[W],!l.hasOwnProperty(W)||q===H||q==null&&H==null||et(t,i,W,q,l,H)}var ud=null,cd=null;function fc(t){return t.nodeType===9?t:t.ownerDocument}function uv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cv(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function hd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var fd=null;function Cb(){var t=window.event;return t&&t.type==="popstate"?t===fd?!1:(fd=t,!0):(fd=null,!1)}var hv=typeof setTimeout=="function"?setTimeout:void 0,Rb=typeof clearTimeout=="function"?clearTimeout:void 0,fv=typeof Promise=="function"?Promise:void 0,Nb=typeof queueMicrotask=="function"?queueMicrotask:typeof fv<"u"?function(t){return fv.resolve(null).then(t).catch(Ib)}:hv;function Ib(t){setTimeout(function(){throw t})}function Pr(t){return t==="head"}function dv(t,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var _=t.ownerDocument;if(a&1&&pl(_.documentElement),a&2&&pl(_.body),a&4)for(a=_.head,pl(a),_=a.firstChild;_;){var E=_.nextSibling,R=_.nodeName;_[fs]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&_.rel.toLowerCase()==="stylesheet"||a.removeChild(_),_=E}}if(h===0){t.removeChild(d),bl(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);bl(i)}function dd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":dd(a),mr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Db(t,i,a,l){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[fs])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Jn(t.nextSibling),t===null)break}return null}function Ob(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Jn(t.nextSibling),t===null))return null;return t}function md(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Mb(t,i){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Jn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var pd=null;function mv(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}function pv(t,i,a){switch(i=fc(a),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function pl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);mr(t)}var Hn=new Map,gv=new Set;function dc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var tr=ee.d;ee.d={f:Pb,r:Vb,D:kb,C:xb,L:Lb,m:Ub,X:jb,S:zb,M:Bb};function Pb(){var t=tr.f(),i=rc();return t||i}function Vb(t){var i=ri(t);i!==null&&i.tag===5&&i.type==="form"?xg(i):tr.r(t)}var Ha=typeof document>"u"?null:document;function yv(t,i,a){var l=Ha;if(l&&typeof i=="string"&&i){var h=St(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),gv.has(h)||(gv.add(h),t={rel:t,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Gt(i,"link",t),gt(i),l.head.appendChild(i)))}}function kb(t){tr.D(t),yv("dns-prefetch",t,null)}function xb(t,i){tr.C(t,i),yv("preconnect",t,i)}function Lb(t,i,a){tr.L(t,i,a);var l=Ha;if(l&&t&&i){var h='link[rel="preload"][as="'+St(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+St(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+St(a.imageSizes)+'"]')):h+='[href="'+St(t)+'"]';var d=h;switch(i){case"style":d=Fa(t);break;case"script":d=Ya(t)}Hn.has(d)||(t=T({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),Hn.set(d,t),l.querySelector(h)!==null||i==="style"&&l.querySelector(gl(d))||i==="script"&&l.querySelector(yl(d))||(i=l.createElement("link"),Gt(i,"link",t),gt(i),l.head.appendChild(i)))}}function Ub(t,i){tr.m(t,i);var a=Ha;if(a&&t){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+St(l)+'"][href="'+St(t)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ya(t)}if(!Hn.has(d)&&(t=T({rel:"modulepreload",href:t},i),Hn.set(d,t),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yl(d)))return}l=a.createElement("link"),Gt(l,"link",t),gt(l),a.head.appendChild(l)}}}function zb(t,i,a){tr.S(t,i,a);var l=Ha;if(l&&t){var h=ln(l).hoistableStyles,d=Fa(t);i=i||"default";var _=h.get(d);if(!_){var E={loading:0,preload:null};if(_=l.querySelector(gl(d)))E.loading=5;else{t=T({rel:"stylesheet",href:t,"data-precedence":i},a),(a=Hn.get(d))&&gd(t,a);var R=_=l.createElement("link");gt(R),Gt(R,"link",t),R._p=new Promise(function(B,K){R.onload=B,R.onerror=K}),R.addEventListener("load",function(){E.loading|=1}),R.addEventListener("error",function(){E.loading|=2}),E.loading|=4,mc(_,i,l)}_={type:"stylesheet",instance:_,count:1,state:E},h.set(d,_)}}}function jb(t,i){tr.X(t,i);var a=Ha;if(a&&t){var l=ln(a).hoistableScripts,h=Ya(t),d=l.get(h);d||(d=a.querySelector(yl(h)),d||(t=T({src:t,async:!0},i),(i=Hn.get(h))&&yd(t,i),d=a.createElement("script"),gt(d),Gt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function Bb(t,i){tr.M(t,i);var a=Ha;if(a&&t){var l=ln(a).hoistableScripts,h=Ya(t),d=l.get(h);d||(d=a.querySelector(yl(h)),d||(t=T({src:t,async:!0,type:"module"},i),(i=Hn.get(h))&&yd(t,i),d=a.createElement("script"),gt(d),Gt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function vv(t,i,a,l){var h=(h=fe.current)?dc(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Fa(a.href),a=ln(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Fa(a.href);var d=ln(h).hoistableStyles,_=d.get(t);if(_||(h=h.ownerDocument||h,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,_),(d=h.querySelector(gl(t)))&&!d._p&&(_.instance=d,_.state.loading=5),Hn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Hn.set(t,a),d||qb(h,t,a,_.state))),i&&l===null)throw Error(s(528,""));return _}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ya(a),a=ln(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Fa(t){return'href="'+St(t)+'"'}function gl(t){return'link[rel="stylesheet"]['+t+"]"}function _v(t){return T({},t,{"data-precedence":t.precedence,precedence:null})}function qb(t,i,a,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Gt(i,"link",a),gt(i),t.head.appendChild(i))}function Ya(t){return'[src="'+St(t)+'"]'}function yl(t){return"script[async]"+t}function Tv(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+St(a.href)+'"]');if(l)return i.instance=l,gt(l),l;var h=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),gt(l),Gt(l,"style",h),mc(l,a.precedence,t),i.instance=l;case"stylesheet":h=Fa(a.href);var d=t.querySelector(gl(h));if(d)return i.state.loading|=4,i.instance=d,gt(d),d;l=_v(a),(h=Hn.get(h))&&gd(l,h),d=(t.ownerDocument||t).createElement("link"),gt(d);var _=d;return _._p=new Promise(function(E,R){_.onload=E,_.onerror=R}),Gt(d,"link",l),i.state.loading|=4,mc(d,a.precedence,t),i.instance=d;case"script":return d=Ya(a.src),(h=t.querySelector(yl(d)))?(i.instance=h,gt(h),h):(l=a,(h=Hn.get(d))&&(l=T({},a),yd(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),gt(h),Gt(h,"link",l),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,mc(l,a.precedence,t));return i.instance}function mc(t,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,_=0;_<l.length;_++){var E=l[_];if(E.dataset.precedence===i)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function gd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function yd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var pc=null;function Ev(t,i,a){if(pc===null){var l=new Map,h=pc=new Map;h.set(a,l)}else h=pc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var d=a[h];if(!(d[fs]||d[It]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(i)||"";_=t+_;var E=l.get(_);E?E.push(d):l.set(_,[d])}}return l}function Sv(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function Hb(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function bv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var vl=null;function Fb(){}function Yb(t,i,a){if(vl===null)throw Error(s(475));var l=vl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Fa(a.href),d=t.querySelector(gl(h));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=gc.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=d,gt(d);return}d=t.ownerDocument||t,a=_v(a),(h=Hn.get(h))&&gd(a,h),d=d.createElement("link"),gt(d);var _=d;_._p=new Promise(function(E,R){_.onload=E,_.onerror=R}),Gt(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=gc.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function Gb(){if(vl===null)throw Error(s(475));var t=vl;return t.stylesheets&&t.count===0&&vd(t,t.stylesheets),0<t.count?function(i){var a=setTimeout(function(){if(t.stylesheets&&vd(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(a)}}:null}function gc(){if(this.count--,this.count===0){if(this.stylesheets)vd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var yc=null;function vd(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,yc=new Map,i.forEach(Xb,t),yc=null,gc.call(t))}function Xb(t,i){if(!(i.state.loading&4)){var a=yc.get(t);if(a)var l=a.get(null);else{a=new Map,yc.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var _=h[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),l=_)}l&&a.set(null,l)}h=i.instance,_=h.getAttribute("data-precedence"),d=a.get(_)||l,d===l&&a.set(null,h),a.set(_,h),this.count++,l=gc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var _l={$$typeof:ne,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function Kb(t,i,a,l,h,d,_,E){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Oi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oi(0),this.hiddenUpdates=Oi(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Av(t,i,a,l,h,d,_,E,R,B,K,W){return t=new Kb(t,i,a,_,E,R,B,W),i=1,d===!0&&(i|=24),d=bn(3,null,null,i),t.current=d,d.stateNode=t,i=Wh(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},nf(d),t}function wv(t){return t?(t=Sa,t):Sa}function Cv(t,i,a,l,h,d){h=wv(h),l.context===null?l.context=h:l.pendingContext=h,l=Tr(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Er(t,l,i),a!==null&&(Nn(a,t,i),Qo(a,t,i))}function Rv(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function _d(t,i){Rv(t,i),(t=t.alternate)&&Rv(t,i)}function Nv(t){if(t.tag===13){var i=Ea(t,67108864);i!==null&&Nn(i,t,67108864),_d(t,67108864)}}var vc=!0;function Qb(t,i,a,l){var h=Y.T;Y.T=null;var d=ee.p;try{ee.p=2,Td(t,i,a,l)}finally{ee.p=d,Y.T=h}}function $b(t,i,a,l){var h=Y.T;Y.T=null;var d=ee.p;try{ee.p=8,Td(t,i,a,l)}finally{ee.p=d,Y.T=h}}function Td(t,i,a,l){if(vc){var h=Ed(l);if(h===null)od(t,i,l,_c,a),Dv(t,l);else if(Wb(h,t,i,a,l))l.stopPropagation();else if(Dv(t,l),i&4&&-1<Zb.indexOf(t)){for(;h!==null;){var d=ri(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=Kn(d.pendingLanes);if(_!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var R=1<<31-$t(_);E.entanglements[1]|=R,_&=~R}vi(d),($e&6)===0&&(nc=an()+500,fl(0))}}break;case 13:E=Ea(d,2),E!==null&&Nn(E,d,2),rc(),_d(d,2)}if(d=Ed(l),d===null&&od(t,i,l,_c,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else od(t,i,l,null,a)}}function Ed(t){return t=Vn(t),Sd(t)}var _c=null;function Sd(t){if(_c=null,t=Pi(t),t!==null){var i=u(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=f(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return _c=t,null}function Iv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ye()){case He:return 2;case on:return 8;case vn:case Xn:return 32;case _n:return 268435456;default:return 32}default:return 32}}var bd=!1,Vr=null,kr=null,xr=null,Tl=new Map,El=new Map,Lr=[],Zb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dv(t,i){switch(t){case"focusin":case"focusout":Vr=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":Tl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":El.delete(i.pointerId)}}function Sl(t,i,a,l,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=ri(i),i!==null&&Nv(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function Wb(t,i,a,l,h){switch(i){case"focusin":return Vr=Sl(Vr,t,i,a,l,h),!0;case"dragenter":return kr=Sl(kr,t,i,a,l,h),!0;case"mouseover":return xr=Sl(xr,t,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return Tl.set(d,Sl(Tl.get(d)||null,t,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,El.set(d,Sl(El.get(d)||null,t,i,a,l,h)),!0}return!1}function Ov(t){var i=Pi(t.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){t.blockedOn=i,ru(t.priority,function(){if(a.tag===13){var l=Rn();l=hr(l);var h=Ea(a,l);h!==null&&Nn(h,a,l),_d(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Ed(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Li=l,a.target.dispatchEvent(l),Li=null}else return i=ri(a),i!==null&&Nv(i),t.blockedOn=a,!1;i.shift()}return!0}function Mv(t,i,a){Tc(t)&&a.delete(i)}function Jb(){bd=!1,Vr!==null&&Tc(Vr)&&(Vr=null),kr!==null&&Tc(kr)&&(kr=null),xr!==null&&Tc(xr)&&(xr=null),Tl.forEach(Mv),El.forEach(Mv)}function Ec(t,i){t.blockedOn===i&&(t.blockedOn=null,bd||(bd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Jb)))}var Sc=null;function Pv(t){Sc!==t&&(Sc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Sc===t&&(Sc=null);for(var i=0;i<t.length;i+=3){var a=t[i],l=t[i+1],h=t[i+2];if(typeof l!="function"){if(Sd(l||a)===null)continue;break}var d=ri(a);d!==null&&(t.splice(i,3),i-=3,Sf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function bl(t){function i(R){return Ec(R,t)}Vr!==null&&Ec(Vr,t),kr!==null&&Ec(kr,t),xr!==null&&Ec(xr,t),Tl.forEach(i),El.forEach(i);for(var a=0;a<Lr.length;a++){var l=Lr[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Lr.length&&(a=Lr[0],a.blockedOn===null);)Ov(a),a.blockedOn===null&&Lr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],_=h[Et]||null;if(typeof d=="function")_||Pv(a);else if(_){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,_=d[Et]||null)E=_.formAction;else if(Sd(h)!==null)continue}else E=_.action;typeof E=="function"?a[l+1]=E:(a.splice(l,3),l-=3),Pv(a)}}}function Ad(t){this._internalRoot=t}bc.prototype.render=Ad.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=Rn();Cv(a,l,t,i,null,null)},bc.prototype.unmount=Ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Cv(t.current,2,null,t,null,null),rc(),i[Mn]=null}};function bc(t){this._internalRoot=t}bc.prototype.unstable_scheduleHydration=function(t){if(t){var i=fr();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Lr.length&&i!==0&&i<Lr[a].priority;a++);Lr.splice(a,0,t),a===0&&Ov(t)}};var Vv=e.version;if(Vv!=="19.1.0")throw Error(s(527,Vv,"19.1.0"));ee.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=y(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var eA={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ac.isDisabled&&Ac.supportsFiber)try{Ye=Ac.inject(eA),Qe=Ac}catch{}}return wl.createRoot=function(t,i){if(!o(t))throw Error(s(299));var a=!1,l="",h=$g,d=Zg,_=Wg,E=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(_=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(E=i.unstable_transitionCallbacks)),i=Av(t,1,!1,null,null,a,l,h,d,_,E,null),t[Mn]=i.current,ad(t),new Ad(i)},wl.hydrateRoot=function(t,i,a){if(!o(t))throw Error(s(299));var l=!1,h="",d=$g,_=Zg,E=Wg,R=null,B=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(R=a.unstable_transitionCallbacks),a.formState!==void 0&&(B=a.formState)),i=Av(t,1,!0,i,a??null,l,h,d,_,E,R,B),i.context=wv(null),a=i.current,l=Rn(),l=hr(l),h=Tr(l),h.callback=null,Er(a,h,l),a=l,i.current.lanes=a,Mi(i,a),vi(i),t[Mn]=i.current,ad(t),new bc(i)},wl.version="19.1.0",wl}var Fv;function cA(){if(Fv)return Rd.exports;Fv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Rd.exports=uA(),Rd.exports}var hA=cA();const fA=L0(hA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),mA=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,s)=>s?s.toUpperCase():n.toLowerCase()),Yv=r=>{const e=mA(r);return e.charAt(0).toUpperCase()+e.slice(1)},U0=(...r)=>r.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim(),pA=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=de.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:f,...m},y)=>de.createElement("svg",{ref:y,...gA,width:e,height:e,stroke:r,strokeWidth:s?Number(n)*24/Number(e):n,className:U0("lucide",o),...!u&&!pA(m)&&{"aria-hidden":"true"},...m},[...f.map(([g,T])=>de.createElement(g,T)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=(r,e)=>{const n=de.forwardRef(({className:s,...o},u)=>de.createElement(yA,{ref:u,iconNode:e,className:U0(`lucide-${dA(Yv(r))}`,`lucide-${r}`,s),...o}));return n.displayName=Yv(r),n};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],_A=as("building-2",vA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Gv=as("map-pin",TA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],SA=as("navigation",EA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],AA=as("rotate-ccw",bA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]],CA=as("route",wA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],z0=as("search",RA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],IA=as("users",NA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Pc=as("x",DA);var Fn=function(r,e){return Number(r.toFixed(e))},OA=function(r,e){return e},ct=function(r,e,n){n&&typeof n=="function"&&n(r,e)},MA=function(r){return-Math.cos(r*Math.PI)/2+.5},PA=function(r){return r},VA=function(r){return r*r},kA=function(r){return r*(2-r)},xA=function(r){return r<.5?2*r*r:-1+(4-2*r)*r},LA=function(r){return r*r*r},UA=function(r){return--r*r*r+1},zA=function(r){return r<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1},jA=function(r){return r*r*r*r},BA=function(r){return 1- --r*r*r*r},qA=function(r){return r<.5?8*r*r*r*r:1-8*--r*r*r*r},HA=function(r){return r*r*r*r*r},FA=function(r){return 1+--r*r*r*r*r},YA=function(r){return r<.5?16*r*r*r*r*r:1+16*--r*r*r*r*r},j0={easeOut:MA,linear:PA,easeInQuad:VA,easeOutQuad:kA,easeInOutQuad:xA,easeInCubic:LA,easeOutCubic:UA,easeInOutCubic:zA,easeInQuart:jA,easeOutQuart:BA,easeInOutQuart:qA,easeInQuint:HA,easeOutQuint:FA,easeInOutQuint:YA},B0=function(r){typeof r=="number"&&cancelAnimationFrame(r)},ei=function(r){r.mounted&&(B0(r.animation),r.animate=!1,r.animation=null,r.velocity=null)};function q0(r,e,n,s){if(r.mounted){var o=new Date().getTime(),u=1;ei(r),r.animation=function(){if(!r.mounted)return B0(r.animation);var f=new Date().getTime()-o,m=f/n,y=j0[e],g=y(m);f>=n?(s(u),r.animation=null):r.animation&&(s(g),requestAnimationFrame(r.animation))},requestAnimationFrame(r.animation)}}function GA(r){var e=r.scale,n=r.positionX,s=r.positionY;return!(Number.isNaN(e)||Number.isNaN(n)||Number.isNaN(s))}function os(r,e,n,s){var o=GA(e);if(!(!r.mounted||!o)){var u=r.setTransformState,f=r.transformState,m=f.scale,y=f.positionX,g=f.positionY,T=e.scale-m,b=e.positionX-y,A=e.positionY-g;n===0?u(e.scale,e.positionX,e.positionY):q0(r,s,n,function(x){var z=m+T*x,G=y+b*x,X=g+A*x;u(z,G,X)})}}function XA(r,e,n){var s=r.offsetWidth,o=r.offsetHeight,u=e.offsetWidth,f=e.offsetHeight,m=u*n,y=f*n,g=s-m,T=o-y;return{wrapperWidth:s,wrapperHeight:o,newContentWidth:m,newDiffWidth:g,newContentHeight:y,newDiffHeight:T}}var KA=function(r,e,n,s,o,u,f){var m=r>e?n*(f?1:.5):0,y=s>o?u*(f?1:.5):0,g=r-e-m,T=m,b=s-o-y,A=y;return{minPositionX:g,maxPositionX:T,minPositionY:b,maxPositionY:A}},Om=function(r,e){var n=r.wrapperComponent,s=r.contentComponent,o=r.setup.centerZoomedOut;if(!n||!s)throw new Error("Components are not mounted");var u=XA(n,s,e),f=u.wrapperWidth,m=u.wrapperHeight,y=u.newContentWidth,g=u.newDiffWidth,T=u.newContentHeight,b=u.newDiffHeight,A=KA(f,y,g,m,T,b,!!o);return A},Wd=function(r,e,n,s){return s?r<e?Fn(e,2):r>n?Fn(n,2):Fn(r,2):Fn(r,2)},Fs=function(r,e){var n=Om(r,e);return r.bounds=n,n};function Gl(r,e,n,s,o,u,f){var m=n.minPositionX,y=n.minPositionY,g=n.maxPositionX,T=n.maxPositionY,b=0,A=0;f&&(b=o,A=u);var x=Wd(r,m-b,g+b,s),z=Wd(e,y-A,T+A,s);return{x,y:z}}function sh(r,e,n,s,o,u){var f=r.transformState,m=f.scale,y=f.positionX,g=f.positionY,T=s-m;if(typeof e!="number"||typeof n!="number")return console.error("Mouse X and Y position were not provided!"),{x:y,y:g};var b=y-e*T,A=g-n*T,x=Gl(b,A,o,u,0,0,null);return x}function Xl(r,e,n,s,o){var u=o?s:0,f=e-u;return!Number.isNaN(n)&&r>=n?n:!Number.isNaN(e)&&r<=f?f:r}var Xv=function(r,e){var n=r.setup.panning.excluded,s=r.isInitialized,o=r.wrapperComponent,u=e.target,f="shadowRoot"in u&&"composedPath"in e,m=f?e.composedPath().some(function(T){return T instanceof Element?o==null?void 0:o.contains(T):!1}):o==null?void 0:o.contains(u),y=s&&u&&m;if(!y)return!1;var g=ah(u,n);return!g},Kv=function(r){var e=r.isInitialized,n=r.isPanning,s=r.setup,o=s.panning.disabled,u=e&&n&&!o;return!!u},QA=function(r,e){var n=r.transformState,s=n.positionX,o=n.positionY;r.isPanning=!0;var u=e.clientX,f=e.clientY;r.startCoords={x:u-s,y:f-o}},$A=function(r,e){var n=e.touches,s=r.transformState,o=s.positionX,u=s.positionY;r.isPanning=!0;var f=n.length===1;if(f){var m=n[0].clientX,y=n[0].clientY;r.startCoords={x:m-o,y:y-u}}};function ZA(r){var e=r.transformState,n=e.positionX,s=e.positionY,o=e.scale,u=r.setup,f=u.disabled,m=u.limitToBounds,y=u.centerZoomedOut,g=r.wrapperComponent;if(!(f||!g||!r.bounds)){var T=r.bounds,b=T.maxPositionX,A=T.minPositionX,x=T.maxPositionY,z=T.minPositionY,G=n>b||n<A,X=s>x||s<z,oe=n>b?g.offsetWidth:r.setup.minPositionX||0,ae=s>x?g.offsetHeight:r.setup.minPositionY||0,ne=sh(r,oe,ae,o,r.bounds,m||y),_e=ne.x,ce=ne.y;return{scale:o,positionX:G?_e:n,positionY:X?ce:s}}}function H0(r,e,n,s,o){var u=r.setup.limitToBounds,f=r.wrapperComponent,m=r.bounds,y=r.transformState,g=y.scale,T=y.positionX,b=y.positionY;if(!(f===null||m===null||e===T&&n===b)){var A=Gl(e,n,m,u,s,o,f),x=A.x,z=A.y;r.setTransformState(g,x,z)}}var WA=function(r,e,n){var s=r.startCoords,o=r.transformState,u=r.setup.panning,f=u.lockAxisX,m=u.lockAxisY,y=o.positionX,g=o.positionY;if(!s)return{x:y,y:g};var T=e-s.x,b=n-s.y,A=f?y:T,x=m?g:b;return{x:A,y:x}},Jr=function(r,e){var n=r.setup,s=r.transformState,o=s.scale,u=n.minScale,f=n.disablePadding;return e>0&&o>=u&&!f?e:0},JA=function(r){var e=r.mounted,n=r.setup,s=n.disabled,o=n.velocityAnimation,u=r.transformState.scale,f=o.disabled,m=!f||u>1||!s||e;return!!m},ew=function(r){var e=r.mounted,n=r.velocity,s=r.bounds,o=r.setup,u=o.disabled,f=o.velocityAnimation,m=r.transformState.scale,y=f.disabled,g=!y||m>1||!u||e;return!(!g||!n||!s)};function tw(r,e){var n=r.setup.velocityAnimation,s=n.equalToMove,o=n.animationTime,u=n.sensitivity;return s?o*e*u:o}function Qv(r,e,n,s,o,u,f,m,y,g){if(o){if(e>f&&n>f){var T=f+(r-f)*g;return T>y?y:T<f?f:T}if(e<u&&n<u){var T=u+(r-u)*g;return T<m?m:T>u?u:T}}return s?e:Wd(r,u,f,o)}function nw(r,e){var n=1;return e?Math.min(n,r.offsetWidth/window.innerWidth):n}function iw(r,e){var n=JA(r);if(n){var s=r.lastMousePosition,o=r.velocityTime,u=r.setup,f=r.wrapperComponent,m=u.velocityAnimation.equalToMove,y=Date.now();if(s&&o&&f){var g=nw(f,m),T=e.x-s.x,b=e.y-s.y,A=T/g,x=b/g,z=y-o,G=T*T+b*b,X=Math.sqrt(G)/z;r.velocity={velocityX:A,velocityY:x,total:X}}r.lastMousePosition=e,r.velocityTime=y}}function rw(r){var e=r.velocity,n=r.bounds,s=r.setup,o=r.wrapperComponent,u=ew(r);if(!(!u||!e||!n||!o)){var f=e.velocityX,m=e.velocityY,y=e.total,g=n.maxPositionX,T=n.minPositionX,b=n.maxPositionY,A=n.minPositionY,x=s.limitToBounds,z=s.alignmentAnimation,G=s.zoomAnimation,X=s.panning,oe=X.lockAxisY,ae=X.lockAxisX,ne=G.animationType,_e=z.sizeX,ce=z.sizeY,we=z.velocityAlignmentTime,M=we,w=tw(r,y),C=Math.max(w,M),D=Jr(r,_e),P=Jr(r,ce),k=D*o.offsetWidth/100,N=P*o.offsetHeight/100,st=g+k,Le=T-k,Y=b+N,ee=A-N,le=r.transformState,De=new Date().getTime();q0(r,ne,C,function(I){var Z=r.transformState,se=Z.scale,te=Z.positionX,$=Z.positionY,pe=new Date().getTime()-De,fe=pe/M,Se=j0[z.animationType],Ne=1-Se(Math.min(1,fe)),ot=1-I,Nt=te+f*ot,Qt=$+m*ot,Gn=Qv(Nt,le.positionX,te,ae,x,T,g,Le,st,Ne),In=Qv(Qt,le.positionY,$,oe,x,A,b,ee,Y,Ne);(te!==Nt||$!==Qt)&&r.setTransformState(se,Gn,In)})}}function $v(r,e){var n=r.transformState.scale;ei(r),Fs(r,n),window.TouchEvent!==void 0&&e instanceof TouchEvent?$A(r,e):QA(r,e)}function Mm(r,e){var n=r.transformState.scale,s=r.setup,o=s.minScale,u=s.alignmentAnimation,f=u.disabled,m=u.sizeX,y=u.sizeY,g=u.animationTime,T=u.animationType,b=f||n<o||!m&&!y;if(!b){var A=ZA(r);A&&os(r,A,e??g,T)}}function Zv(r,e,n){var s=r.startCoords,o=r.setup,u=o.alignmentAnimation,f=u.sizeX,m=u.sizeY;if(s){var y=WA(r,e,n),g=y.x,T=y.y,b=Jr(r,f),A=Jr(r,m);iw(r,{x:g,y:T}),H0(r,g,T,b,A)}}function sw(r){if(r.isPanning){var e=r.setup.panning.velocityDisabled,n=r.velocity,s=r.wrapperComponent,o=r.contentComponent;r.isPanning=!1,r.animate=!1,r.animation=null;var u=s==null?void 0:s.getBoundingClientRect(),f=o==null?void 0:o.getBoundingClientRect(),m=(u==null?void 0:u.width)||0,y=(u==null?void 0:u.height)||0,g=(f==null?void 0:f.width)||0,T=(f==null?void 0:f.height)||0,b=m<g||y<T,A=!e&&n&&(n==null?void 0:n.total)>.1&&b;A?rw(r):Mm(r)}}function Pm(r,e,n,s){var o=r.setup,u=o.minScale,f=o.maxScale,m=o.limitToBounds,y=Xl(Fn(e,2),u,f,0,!1),g=Fs(r,y),T=sh(r,n,s,y,g,m),b=T.x,A=T.y;return{scale:y,positionX:b,positionY:A}}function F0(r,e,n){var s=r.transformState.scale,o=r.wrapperComponent,u=r.setup,f=u.minScale,m=u.limitToBounds,y=u.zoomAnimation,g=y.disabled,T=y.animationTime,b=y.animationType,A=g||s>=f;if((s>=1||m)&&Mm(r),!(A||!o||!r.mounted)){var x=e||o.offsetWidth/2,z=n||o.offsetHeight/2,G=Pm(r,f,x,z);G&&os(r,G,T,b)}}var Gr=function(){return Gr=Object.assign||function(e){for(var n,s=1,o=arguments.length;s<o;s++){n=arguments[s];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},Gr.apply(this,arguments)};function Wv(r,e,n){for(var s=0,o=e.length,u;s<o;s++)(u||!(s in e))&&(u||(u=Array.prototype.slice.call(e,0,s)),u[s]=e[s]);return r.concat(u||Array.prototype.slice.call(e))}var wc={scale:1,positionX:0,positionY:0},Cl={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},Jd={wrapperClass:"react-transform-wrapper",contentClass:"react-transform-component"},Y0=function(r){var e,n,s,o;return{previousScale:(e=r.initialScale)!==null&&e!==void 0?e:wc.scale,scale:(n=r.initialScale)!==null&&n!==void 0?n:wc.scale,positionX:(s=r.initialPositionX)!==null&&s!==void 0?s:wc.positionX,positionY:(o=r.initialPositionY)!==null&&o!==void 0?o:wc.positionY}},Jv=function(r){var e=Gr({},Cl);return Object.keys(r).forEach(function(n){var s=typeof r[n]<"u",o=typeof Cl[n]<"u";if(o&&s){var u=Object.prototype.toString.call(Cl[n]),f=u==="[object Object]",m=u==="[object Array]";f?e[n]=Gr(Gr({},Cl[n]),r[n]):m?e[n]=Wv(Wv([],Cl[n],!0),r[n]):e[n]=r[n]}}),e},G0=function(r,e,n){var s=r.transformState.scale,o=r.wrapperComponent,u=r.setup,f=u.maxScale,m=u.minScale,y=u.zoomAnimation,g=u.smooth,T=y.size;if(!o)throw new Error("Wrapper is not mounted");var b=g?s*Math.exp(e*n):s+e*n,A=Xl(Fn(b,3),m,f,T,!1);return A};function X0(r,e,n,s,o){var u=r.wrapperComponent,f=r.transformState,m=f.scale,y=f.positionX,g=f.positionY;if(!u)return console.error("No WrapperComponent found");var T=u.offsetWidth,b=u.offsetHeight,A=(T/2-y)/m,x=(b/2-g)/m,z=G0(r,e,n),G=Pm(r,z,A,x);if(!G)return console.error("Error during zoom event. New transformation state was not calculated.");os(r,G,s,o)}function K0(r,e,n,s){var o=r.setup,u=r.wrapperComponent,f=o.limitToBounds,m=Y0(r.props),y=r.transformState,g=y.scale,T=y.positionX,b=y.positionY;if(u){var A=Om(r,m.scale),x=Gl(m.positionX,m.positionY,A,f,0,0,u),z={scale:m.scale,positionX:x.x,positionY:x.y};g===m.scale&&T===m.positionX&&b===m.positionY||(s==null||s(),os(r,z,e,n))}}function aw(r,e,n,s){var o=r.getBoundingClientRect(),u=e.getBoundingClientRect(),f=n.getBoundingClientRect(),m=u.x*s.scale,y=u.y*s.scale;return{x:(o.x-f.x+m)/s.scale,y:(o.y-f.y+y)/s.scale}}function ow(r,e,n){var s=r.wrapperComponent,o=r.contentComponent,u=r.transformState,f=r.setup,m=f.limitToBounds,y=f.minScale,g=f.maxScale;if(!s||!o)return u;var T=s.getBoundingClientRect(),b=e.getBoundingClientRect(),A=aw(e,s,o,u),x=A.x,z=A.y,G=b.width/u.scale,X=b.height/u.scale,oe=s.offsetWidth/G,ae=s.offsetHeight/X,ne=Xl(n||Math.min(oe,ae),y,g,0,!1),_e=(T.width-G*ne)/2,ce=(T.height-X*ne)/2,we=(T.left-x)*ne+_e,M=(T.top-z)*ne+ce,w=Om(r,ne),C=Gl(we,M,w,m,0,0,s),D=C.x,P=C.y;return{positionX:D,positionY:P,scale:ne}}var lw=function(r){return function(e,n,s){e===void 0&&(e=.5),n===void 0&&(n=300),s===void 0&&(s="easeOut"),X0(r,1,e,n,s)}},uw=function(r){return function(e,n,s){e===void 0&&(e=.5),n===void 0&&(n=300),s===void 0&&(s="easeOut"),X0(r,-1,e,n,s)}},cw=function(r){return function(e,n,s,o,u){o===void 0&&(o=300),u===void 0&&(u="easeOut");var f=r.transformState,m=f.positionX,y=f.positionY,g=f.scale,T=r.wrapperComponent,b=r.contentComponent,A=r.setup.disabled;if(!(A||!T||!b)){var x={positionX:Number.isNaN(e)?m:e,positionY:Number.isNaN(n)?y:n,scale:Number.isNaN(s)?g:s};os(r,x,o,u)}}},hw=function(r){return function(e,n){e===void 0&&(e=200),n===void 0&&(n="easeOut"),K0(r,e,n)}},fw=function(r){return function(e,n,s){n===void 0&&(n=200),s===void 0&&(s="easeOut");var o=r.transformState,u=r.wrapperComponent,f=r.contentComponent;if(u&&f){var m=Q0(e||o.scale,u,f);os(r,m,n,s)}}},dw=function(r){return function(e,n,s,o){s===void 0&&(s=600),o===void 0&&(o="easeOut"),ei(r);var u=r.wrapperComponent,f=typeof e=="string"?document.getElementById(e):e;if(u&&f&&u.contains(f)){var m=ow(r,f,n);os(r,m,s,o)}}},em=function(r){return{instance:r,zoomIn:lw(r),zoomOut:uw(r),setTransform:cw(r),resetTransform:hw(r),centerView:fw(r),zoomToElement:dw(r)}},mw=function(r){return{instance:r,state:r.transformState}},rt=function(r){var e={};return Object.assign(e,mw(r)),Object.assign(e,em(r)),e},Od=!1;function Md(){try{var r={get passive(){return Od=!0,!1}};return r}catch{return Od=!1,Od}}var Cc=".".concat(Jd.wrapperClass),ah=function(r,e){return e.some(function(n){return r.matches("".concat(Cc," ").concat(n,", ").concat(Cc," .").concat(n,", ").concat(Cc," ").concat(n," *, ").concat(Cc," .").concat(n," *"))})},tm=function(r){r&&clearTimeout(r)},pw=function(r,e,n){return"translate(".concat(r,"px, ").concat(e,"px) scale(").concat(n,")")},Q0=function(r,e,n){var s=n.offsetWidth*r,o=n.offsetHeight*r,u=(e.offsetWidth-s)/2,f=(e.offsetHeight-o)/2;return{scale:r,positionX:u,positionY:f}};function gw(r){return function(e){r.forEach(function(n){typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var yw=function(r,e){var n=r.setup.wheel,s=n.disabled,o=n.wheelDisabled,u=n.touchPadDisabled,f=n.excluded,m=r.isInitialized,y=r.isPanning,g=e.target,T=m&&!y&&!s&&g;if(!T||o&&!e.ctrlKey||u&&e.ctrlKey)return!1;var b=ah(g,f);return!b},vw=function(r){return r?r.deltaY<0?1:-1:0};function _w(r,e){var n=vw(r),s=OA(e,n);return s}function $0(r,e,n){var s=e.getBoundingClientRect(),o=0,u=0;if("clientX"in r)o=(r.clientX-s.left)/n,u=(r.clientY-s.top)/n;else{var f=r.touches[0];o=(f.clientX-s.left)/n,u=(f.clientY-s.top)/n}return(Number.isNaN(o)||Number.isNaN(u))&&console.error("No mouse or touch offset found"),{x:o,y:u}}var Tw=function(r,e,n,s,o){var u=r.transformState.scale,f=r.wrapperComponent,m=r.setup,y=m.maxScale,g=m.minScale,T=m.zoomAnimation,b=m.disablePadding,A=T.size,x=T.disabled;if(!f)throw new Error("Wrapper is not mounted");var z=u+e*n,G=s?!1:!x,X=Xl(Fn(z,3),g,y,A,G&&!b);return X},Ew=function(r,e){var n=r.previousWheelEvent,s=r.transformState.scale,o=r.setup,u=o.maxScale,f=o.minScale;return n?s<u||s>f||Math.sign(n.deltaY)!==Math.sign(e.deltaY)||n.deltaY>0&&n.deltaY<e.deltaY||n.deltaY<0&&n.deltaY>e.deltaY||Math.sign(n.deltaY)!==Math.sign(e.deltaY):!1},Sw=function(r,e){var n=r.setup.pinch,s=n.disabled,o=n.excluded,u=r.isInitialized,f=e.target,m=u&&!s&&f;if(!m)return!1;var y=ah(f,o);return!y},bw=function(r){var e=r.setup.pinch.disabled,n=r.isInitialized,s=r.pinchStartDistance,o=n&&!e&&s;return!!o},Aw=function(r,e,n){var s=n.getBoundingClientRect(),o=r.touches,u=Fn(o[0].clientX-s.left,5),f=Fn(o[0].clientY-s.top,5),m=Fn(o[1].clientX-s.left,5),y=Fn(o[1].clientY-s.top,5);return{x:(u+m)/2/e,y:(f+y)/2/e}},Z0=function(r){return Math.sqrt(Math.pow(r.touches[0].pageX-r.touches[1].pageX,2)+Math.pow(r.touches[0].pageY-r.touches[1].pageY,2))},ww=function(r,e){var n=r.pinchStartScale,s=r.pinchStartDistance,o=r.setup,u=o.maxScale,f=o.minScale,m=o.zoomAnimation,y=o.disablePadding,g=m.size,T=m.disabled;if(!n||s===null||!e)throw new Error("Pinch touches distance was not provided");if(e<0)return r.transformState.scale;var b=e/s,A=b*n;return Xl(Fn(A,2),f,u,g,!T&&!y)},Cw=160,Rw=100,Nw=function(r,e){var n=r.props,s=n.onWheelStart,o=n.onZoomStart;r.wheelStopEventTimer||(ei(r),ct(rt(r),e,s),ct(rt(r),e,o))},Iw=function(r,e){var n=r.props,s=n.onWheel,o=n.onZoom,u=r.contentComponent,f=r.setup,m=r.transformState,y=m.scale,g=f.limitToBounds,T=f.centerZoomedOut,b=f.zoomAnimation,A=f.wheel,x=f.disablePadding,z=f.smooth,G=b.size,X=b.disabled,oe=A.step,ae=A.smoothStep;if(!u)throw new Error("Component not mounted");e.preventDefault(),e.stopPropagation();var ne=_w(e,null),_e=z?ae*Math.abs(e.deltaY):oe,ce=Tw(r,ne,_e,!e.ctrlKey);if(y!==ce){var we=Fs(r,ce),M=$0(e,u,y),w=X||G===0||T||x,C=g&&w,D=sh(r,M.x,M.y,ce,we,C),P=D.x,k=D.y;r.previousWheelEvent=e,r.setTransformState(ce,P,k),ct(rt(r),e,s),ct(rt(r),e,o)}},Dw=function(r,e){var n=r.props,s=n.onWheelStop,o=n.onZoomStop;tm(r.wheelAnimationTimer),r.wheelAnimationTimer=setTimeout(function(){r.mounted&&(F0(r,e.x,e.y),r.wheelAnimationTimer=null)},Rw);var u=Ew(r,e);u&&(tm(r.wheelStopEventTimer),r.wheelStopEventTimer=setTimeout(function(){r.mounted&&(r.wheelStopEventTimer=null,ct(rt(r),e,s),ct(rt(r),e,o))},Cw))},W0=function(r){for(var e=0,n=0,s=0;s<2;s+=1)e+=r.touches[s].clientX,n+=r.touches[s].clientY;var o=e/2,u=n/2;return{x:o,y:u}},Ow=function(r,e){var n=Z0(e);r.pinchStartDistance=n,r.lastDistance=n,r.pinchStartScale=r.transformState.scale,r.isPanning=!1;var s=W0(e);r.pinchLastCenterX=s.x,r.pinchLastCenterY=s.y,ei(r)},Mw=function(r,e){var n=r.contentComponent,s=r.pinchStartDistance,o=r.wrapperComponent,u=r.transformState.scale,f=r.setup,m=f.limitToBounds,y=f.centerZoomedOut,g=f.zoomAnimation,T=f.alignmentAnimation,b=g.disabled,A=g.size;if(!(s===null||!n)){var x=Aw(e,u,n);if(!(!Number.isFinite(x.x)||!Number.isFinite(x.y))){var z=Z0(e),G=ww(r,z),X=W0(e),oe=X.x-(r.pinchLastCenterX||0),ae=X.y-(r.pinchLastCenterY||0);if(!(G===u&&oe===0&&ae===0)){r.pinchLastCenterX=X.x,r.pinchLastCenterY=X.y;var ne=Fs(r,G),_e=b||A===0||y,ce=m&&_e,we=sh(r,x.x,x.y,G,ne,ce),M=we.x,w=we.y;r.pinchMidpoint=x,r.lastDistance=z;var C=T.sizeX,D=T.sizeY,P=Jr(r,C),k=Jr(r,D),N=M+oe,st=w+ae,Le=Gl(N,st,ne,m,P,k,o),Y=Le.x,ee=Le.y;r.setTransformState(G,Y,ee)}}}},Pw=function(r){var e=r.pinchMidpoint;r.velocity=null,r.lastDistance=null,r.pinchMidpoint=null,r.pinchStartScale=null,r.pinchStartDistance=null,F0(r,e==null?void 0:e.x,e==null?void 0:e.y)},J0=function(r,e){var n=r.props.onZoomStop,s=r.setup.doubleClick.animationTime;tm(r.doubleClickStopEventTimer),r.doubleClickStopEventTimer=setTimeout(function(){r.doubleClickStopEventTimer=null,ct(rt(r),e,n)},s)},Vw=function(r,e){var n=r.props,s=n.onZoomStart,o=n.onZoom,u=r.setup.doubleClick,f=u.animationTime,m=u.animationType;ct(rt(r),e,s),K0(r,f,m,function(){return ct(rt(r),e,o)}),J0(r,e)};function kw(r,e){return r==="toggle"?e===1?1:-1:r==="zoomOut"?-1:1}function xw(r,e){var n=r.setup,s=r.doubleClickStopEventTimer,o=r.transformState,u=r.contentComponent,f=o.scale,m=r.props,y=m.onZoomStart,g=m.onZoom,T=n.doubleClick,b=T.disabled,A=T.mode,x=T.step,z=T.animationTime,G=T.animationType;if(!b&&!s){if(A==="reset")return Vw(r,e);if(!u)return console.error("No ContentComponent found");var X=kw(A,r.transformState.scale),oe=G0(r,X,x);if(f!==oe){ct(rt(r),e,y);var ae=$0(e,u,f),ne=Pm(r,oe,ae.x,ae.y);if(!ne)return console.error("Error during zoom event. New transformation state was not calculated.");ct(rt(r),e,g),os(r,ne,z,G),J0(r,e)}}}var Lw=function(r,e){var n=r.isInitialized,s=r.setup,o=r.wrapperComponent,u=s.doubleClick,f=u.disabled,m=u.excluded,y=e.target,g=o==null?void 0:o.contains(y),T=n&&y&&g&&!f;if(!T)return!1;var b=ah(y,m);return!b},Uw=function(){function r(e){var n=this;this.mounted=!0,this.pinchLastCenterX=null,this.pinchLastCenterY=null,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){n.initializeWindowEvents()},this.unmount=function(){n.cleanupWindowEvents()},this.update=function(s){n.props=s,Fs(n,n.transformState.scale),n.setup=Jv(s)},this.initializeWindowEvents=function(){var s,o,u=Md(),f=(s=n.wrapperComponent)===null||s===void 0?void 0:s.ownerDocument,m=f==null?void 0:f.defaultView;(o=n.wrapperComponent)===null||o===void 0||o.addEventListener("wheel",n.onWheelPanning,u),m==null||m.addEventListener("mousedown",n.onPanningStart,u),m==null||m.addEventListener("mousemove",n.onPanning,u),m==null||m.addEventListener("mouseup",n.onPanningStop,u),f==null||f.addEventListener("mouseleave",n.clearPanning,u),m==null||m.addEventListener("keyup",n.setKeyUnPressed,u),m==null||m.addEventListener("keydown",n.setKeyPressed,u)},this.cleanupWindowEvents=function(){var s,o,u=Md(),f=(s=n.wrapperComponent)===null||s===void 0?void 0:s.ownerDocument,m=f==null?void 0:f.defaultView;m==null||m.removeEventListener("mousedown",n.onPanningStart,u),m==null||m.removeEventListener("mousemove",n.onPanning,u),m==null||m.removeEventListener("mouseup",n.onPanningStop,u),f==null||f.removeEventListener("mouseleave",n.clearPanning,u),m==null||m.removeEventListener("keyup",n.setKeyUnPressed,u),m==null||m.removeEventListener("keydown",n.setKeyPressed,u),document.removeEventListener("mouseleave",n.clearPanning,u),ei(n),(o=n.observer)===null||o===void 0||o.disconnect()},this.handleInitializeWrapperEvents=function(s){var o=Md();s.addEventListener("wheel",n.onWheelZoom,o),s.addEventListener("dblclick",n.onDoubleClick,o),s.addEventListener("touchstart",n.onTouchPanningStart,o),s.addEventListener("touchmove",n.onTouchPanning,o),s.addEventListener("touchend",n.onTouchPanningStop,o)},this.handleInitialize=function(s,o){var u=!1,f=n.setup.centerOnInit,m=function(y,g){for(var T=0,b=y;T<b.length;T++){var A=b[T];if(A.target===g)return!0}return!1};n.applyTransformation(),n.onInitCallbacks.forEach(function(y){y(rt(n))}),n.observer=new ResizeObserver(function(y){if(m(y,s)||m(y,o))if(f&&!u){var g=o.offsetWidth,T=o.offsetHeight;(g>0||T>0)&&(u=!0,n.setCenter())}else ei(n),Fs(n,n.transformState.scale),Mm(n,0)}),n.observer.observe(s),n.observer.observe(o)},this.onWheelZoom=function(s){var o=n.setup.disabled;if(!o){var u=yw(n,s);if(u){var f=n.isPressingKeys(n.setup.wheel.activationKeys);f&&(Nw(n,s),Iw(n,s),Dw(n,s))}}},this.onWheelPanning=function(s){var o=n.setup,u=o.disabled,f=o.wheel,m=o.panning;if(!(!n.wrapperComponent||!n.contentComponent||u||!f.wheelDisabled||m.disabled||!m.wheelPanning||s.ctrlKey)){s.preventDefault(),s.stopPropagation();var y=n.transformState,g=y.positionX,T=y.positionY,b=g-s.deltaX,A=T-s.deltaY,x=m.lockAxisX?g:b,z=m.lockAxisY?T:A,G=n.setup.alignmentAnimation,X=G.sizeX,oe=G.sizeY,ae=Jr(n,X),ne=Jr(n,oe);x===g&&z===T||H0(n,x,z,ae,ne)}},this.onPanningStart=function(s){var o=n.setup.disabled,u=n.props.onPanningStart;if(!o){var f=Xv(n,s);if(f){var m=n.isPressingKeys(n.setup.panning.activationKeys);m&&(s.button===0&&!n.setup.panning.allowLeftClickPan||s.button===1&&!n.setup.panning.allowMiddleClickPan||s.button===2&&!n.setup.panning.allowRightClickPan||(s.preventDefault(),s.stopPropagation(),ei(n),$v(n,s),ct(rt(n),s,u)))}}},this.onPanning=function(s){var o=n.setup.disabled,u=n.props.onPanning;if(!o){var f=Kv(n);if(f){var m=n.isPressingKeys(n.setup.panning.activationKeys);m&&(s.preventDefault(),s.stopPropagation(),Zv(n,s.clientX,s.clientY),ct(rt(n),s,u))}}},this.onPanningStop=function(s){var o=n.props.onPanningStop;n.isPanning&&(sw(n),ct(rt(n),s,o))},this.onPinchStart=function(s){var o=n.setup.disabled,u=n.props,f=u.onPinchingStart,m=u.onZoomStart;if(!o){var y=Sw(n,s);y&&(Ow(n,s),ei(n),ct(rt(n),s,f),ct(rt(n),s,m))}},this.onPinch=function(s){var o=n.setup.disabled,u=n.props,f=u.onPinching,m=u.onZoom;if(!o){var y=bw(n);y&&(s.preventDefault(),s.stopPropagation(),Mw(n,s),ct(rt(n),s,f),ct(rt(n),s,m))}},this.onPinchStop=function(s){var o=n.props,u=o.onPinchingStop,f=o.onZoomStop;n.pinchStartScale&&(Pw(n),ct(rt(n),s,u),ct(rt(n),s,f))},this.onTouchPanningStart=function(s){var o=n.setup.disabled,u=n.props.onPanningStart;if(!o){var f=Xv(n,s);if(f){var m=n.lastTouch&&+new Date-n.lastTouch<200&&s.touches.length===1;if(!m){n.lastTouch=+new Date,ei(n);var y=s.touches,g=y.length===1,T=y.length===2;g&&(ei(n),$v(n,s),ct(rt(n),s,u)),T&&n.onPinchStart(s)}}}},this.onTouchPanning=function(s){var o=n.setup.disabled,u=n.props.onPanning;if(n.isPanning&&s.touches.length===1){if(o)return;var f=Kv(n);if(!f)return;s.preventDefault(),s.stopPropagation();var m=s.touches[0];Zv(n,m.clientX,m.clientY),ct(rt(n),s,u)}else s.touches.length>1&&n.onPinch(s)},this.onTouchPanningStop=function(s){n.onPanningStop(s),n.onPinchStop(s)},this.onDoubleClick=function(s){var o=n.setup.disabled;if(!o){var u=Lw(n,s);u&&xw(n,s)}},this.clearPanning=function(s){n.isPanning&&n.onPanningStop(s)},this.setKeyPressed=function(s){n.pressedKeys[s.key]=!0},this.setKeyUnPressed=function(s){n.pressedKeys[s.key]=!1},this.isPressingKeys=function(s){return s.length?!!s.find(function(o){return n.pressedKeys[o]}):!0},this.setTransformState=function(s,o,u){var f=n.props.onTransformed;if(!Number.isNaN(s)&&!Number.isNaN(o)&&!Number.isNaN(u)){s!==n.transformState.scale&&(n.transformState.previousScale=n.transformState.scale,n.transformState.scale=s),n.transformState.positionX=o,n.transformState.positionY=u,n.applyTransformation();var m=rt(n);n.onChangeCallbacks.forEach(function(y){return y(m)}),ct(m,{scale:s,positionX:o,positionY:u},f)}else console.error("Detected NaN set state values")},this.setCenter=function(){if(n.wrapperComponent&&n.contentComponent){var s=Q0(n.transformState.scale,n.wrapperComponent,n.contentComponent);n.setTransformState(s.scale,s.positionX,s.positionY)}},this.handleTransformStyles=function(s,o,u){return n.props.customTransform?n.props.customTransform(s,o,u):pw(s,o,u)},this.applyTransformation=function(){if(!(!n.mounted||!n.contentComponent)){var s=n.transformState,o=s.scale,u=s.positionX,f=s.positionY,m=n.handleTransformStyles(u,f,o);n.contentComponent.style.transform=m}},this.getContext=function(){return rt(n)},this.onChange=function(s){return n.onChangeCallbacks.has(s)||n.onChangeCallbacks.add(s),function(){n.onChangeCallbacks.delete(s)}},this.onInit=function(s){return n.onInitCallbacks.has(s)||n.onInitCallbacks.add(s),function(){n.onInitCallbacks.delete(s)}},this.init=function(s,o){n.cleanupWindowEvents(),n.wrapperComponent=s,n.contentComponent=o,Fs(n,n.transformState.scale),n.handleInitializeWrapperEvents(s),n.handleInitialize(s,o),n.initializeWindowEvents(),n.isInitialized=!0;var u=rt(n);ct(u,void 0,n.props.onInit)},this.props=e,this.setup=Jv(this.props),this.transformState=Y0(this.props)}return r}(),Vm=nn.createContext(null),zw=function(r,e){return typeof r=="function"?r(e):r},jw=nn.forwardRef(function(r,e){var n=de.useRef(new Uw(r)).current,s=zw(r.children,em(n));return de.useImperativeHandle(e,function(){return em(n)},[n]),de.useEffect(function(){n.update(r)},[n,r]),nn.createElement(Vm.Provider,{value:n},s)});nn.forwardRef(function(r,e){var n=de.useRef(null),s=de.useContext(Vm);return de.useEffect(function(){return s.onChange(function(o){if(n.current){var u=0,f=0;n.current.style.transform=s.handleTransformStyles(u,f,1/o.instance.transformState.scale)}})},[s]),nn.createElement("div",Gr({},r,{ref:gw([n,e])}))});function Bw(r,e){e===void 0&&(e={});var n=e.insertAt;if(!(typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&s.firstChild?s.insertBefore(o,s.firstChild):s.appendChild(o),o.styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r))}}var qw=`.transform-component-module_wrapper__SPB86 {
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
`,e_={wrapper:"transform-component-module_wrapper__SPB86",content:"transform-component-module_content__FBWxo"};Bw(qw);var Hw=function(r){var e=r.children,n=r.wrapperClass,s=n===void 0?"":n,o=r.contentClass,u=o===void 0?"":o,f=r.wrapperStyle,m=r.contentStyle,y=r.wrapperProps,g=y===void 0?{}:y,T=r.contentProps,b=T===void 0?{}:T,A=de.useContext(Vm),x=A.init,z=A.cleanupWindowEvents,G=de.useRef(null),X=de.useRef(null);return de.useEffect(function(){var oe=G.current,ae=X.current;return oe!==null&&ae!==null&&x&&(x==null||x(oe,ae)),function(){z==null||z()}},[]),nn.createElement("div",Gr({},g,{ref:G,className:"".concat(Jd.wrapperClass," ").concat(e_.wrapper," ").concat(s),style:f}),nn.createElement("div",Gr({},b,{ref:X,className:"".concat(Jd.contentClass," ").concat(e_.content," ").concat(u),style:m}),e))};const Fw=()=>{};var t_={};/**
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
 */const eT=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},Yw=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],y=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=r[n++],f=r[n++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},tT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,y=o+2<r.length,g=y?r[o+2]:0,T=u>>2,b=(u&3)<<4|m>>4;let A=(m&15)<<2|g>>6,x=g&63;y||(x=64,f||(A=64)),s.push(n[T],n[b],n[A],n[x])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(eT(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Yw(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const g=o<r.length?n[r.charAt(o)]:64;++o;const b=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||g==null||b==null)throw new Gw;const A=u<<2|m>>4;if(s.push(A),g!==64){const x=m<<4&240|g>>2;if(s.push(x),b!==64){const z=g<<6&192|b;s.push(z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Gw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xw=function(r){const e=eT(r);return tT.encodeByteArray(e,!0)},Hc=function(r){return Xw(r).replace(/\./g,"")},nT=function(r){try{return tT.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Kw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Qw=()=>Kw().__FIREBASE_DEFAULTS__,$w=()=>{if(typeof process>"u"||typeof t_>"u")return;const r=t_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Zw=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&nT(r[1]);return e&&JSON.parse(e)},oh=()=>{try{return Fw()||Qw()||$w()||Zw()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},iT=r=>{var e,n;return(n=(e=oh())==null?void 0:e.emulatorHosts)==null?void 0:n[r]},Ww=r=>{const e=iT(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},rT=()=>{var r;return(r=oh())==null?void 0:r.config},sT=r=>{var e;return(e=oh())==null?void 0:e[`_${r}`]};/**
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
 */class Jw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function ho(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function aT(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function e1(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Hc(JSON.stringify(n)),Hc(JSON.stringify(f)),""].join(".")}const Ol={};function t1(){const r={prod:[],emulator:[]};for(const e of Object.keys(Ol))Ol[e]?r.emulator.push(e):r.prod.push(e);return r}function n1(r){let e=document.getElementById(r),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),n=!0),{created:n,element:e}}let n_=!1;function oT(r,e){if(typeof window>"u"||typeof document>"u"||!ho(window.location.host)||Ol[r]===e||Ol[r]||n_)return;Ol[r]=e;function n(A){return`__firebase__banner__${A}`}const s="__firebase__banner",u=t1().prod.length>0;function f(){const A=document.getElementById(s);A&&A.remove()}function m(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function y(A,x){A.setAttribute("width","24"),A.setAttribute("id",x),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function g(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{n_=!0,f()},A}function T(A,x){A.setAttribute("id",x),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function b(){const A=n1(s),x=n("text"),z=document.getElementById(x)||document.createElement("span"),G=n("learnmore"),X=document.getElementById(G)||document.createElement("a"),oe=n("preprendIcon"),ae=document.getElementById(oe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const ne=A.element;m(ne),T(X,G);const _e=g();y(ae,oe),ne.append(ae,z,X,_e),document.body.appendChild(ne)}u?(z.innerText="Preview backend disconnected.",ae.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,z.innerText="Preview backend running in this workspace."),z.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
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
 */function sn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function i1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(sn())}function r1(){var e;const r=(e=oh())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function s1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function a1(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function o1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function l1(){const r=sn();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function u1(){return!r1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lT(){try{return typeof indexedDB=="object"}catch{return!1}}function uT(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(n){e(n)}})}function c1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const h1="FirebaseError";class Ii extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=h1,Object.setPrototypeOf(this,Ii.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Js.prototype.create)}}class Js{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?f1(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new Ii(o,m,s)}}function f1(r,e){return r.replace(d1,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const d1=/\{\$([^}]+)}/g;function m1(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Ks(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=e[o];if(i_(u)&&i_(f)){if(!Ks(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function i_(r){return r!==null&&typeof r=="object"}/**
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
 */function Kl(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function p1(r,e){const n=new g1(r,e);return n.subscribe.bind(n)}class g1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");y1(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=Pd),o.error===void 0&&(o.error=Pd),o.complete===void 0&&(o.complete=Pd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function y1(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function Pd(){}/**
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
 */function cr(r){return r&&r._delegate?r._delegate:r}class ni{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Bs="[DEFAULT]";/**
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
 */class v1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Jw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(T1(e))try{this.getOrInitializeService({instanceIdentifier:Bs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Bs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bs){return this.instances.has(e)}getOptions(e=Bs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_1(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Bs){return this.component?this.component.multipleInstances?e:Bs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _1(r){return r===Bs?void 0:r}function T1(r){return r.instantiationMode==="EAGER"}/**
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
 */class E1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new v1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ke;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ke||(ke={}));const S1={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},b1=ke.INFO,A1={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},w1=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=A1[e];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class km{constructor(e){this.name=e,this._logLevel=b1,this._logHandler=w1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?S1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const C1=(r,e)=>e.some(n=>r instanceof n);let r_,s_;function R1(){return r_||(r_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function N1(){return s_||(s_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cT=new WeakMap,nm=new WeakMap,hT=new WeakMap,Vd=new WeakMap,xm=new WeakMap;function I1(r){const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(sr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&cT.set(n,r)}).catch(()=>{}),xm.set(e,r),e}function D1(r){if(nm.has(r))return;const e=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});nm.set(r,e)}let im={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return nm.get(r);if(e==="objectStoreNames")return r.objectStoreNames||hT.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function O1(r){im=r(im)}function M1(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(kd(this),e,...n);return hT.set(s,e.sort?e.sort():[e]),sr(s)}:N1().includes(r)?function(...e){return r.apply(kd(this),e),sr(cT.get(this))}:function(...e){return sr(r.apply(kd(this),e))}}function P1(r){return typeof r=="function"?M1(r):(r instanceof IDBTransaction&&D1(r),C1(r,R1())?new Proxy(r,im):r)}function sr(r){if(r instanceof IDBRequest)return I1(r);if(Vd.has(r))return Vd.get(r);const e=P1(r);return e!==r&&(Vd.set(r,e),xm.set(e,r)),e}const kd=r=>xm.get(r);function lh(r,e,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,e),m=sr(f);return s&&f.addEventListener("upgradeneeded",y=>{s(sr(f.result),y.oldVersion,y.newVersion,sr(f.transaction),y)}),n&&f.addEventListener("blocked",y=>n(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),m}function xd(r,{blocked:e}={}){const n=indexedDB.deleteDatabase(r);return e&&n.addEventListener("blocked",s=>e(s.oldVersion,s)),sr(n).then(()=>{})}const V1=["get","getKey","getAll","getAllKeys","count"],k1=["put","add","delete","clear"],Ld=new Map;function a_(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Ld.get(e))return Ld.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=k1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||V1.includes(n)))return;const u=async function(f,...m){const y=this.transaction(f,o?"readwrite":"readonly");let g=y.store;return s&&(g=g.index(m.shift())),(await Promise.all([g[n](...m),o&&y.done]))[0]};return Ld.set(e,u),u}O1(r=>({...r,get:(e,n,s)=>a_(e,n)||r.get(e,n,s),has:(e,n)=>!!a_(e,n)||r.has(e,n)}));/**
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
 */class x1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(L1(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function L1(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rm="@firebase/app",o_="0.14.1";/**
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
 */const ar=new km("@firebase/app"),U1="@firebase/app-compat",z1="@firebase/analytics-compat",j1="@firebase/analytics",B1="@firebase/app-check-compat",q1="@firebase/app-check",H1="@firebase/auth",F1="@firebase/auth-compat",Y1="@firebase/database",G1="@firebase/data-connect",X1="@firebase/database-compat",K1="@firebase/functions",Q1="@firebase/functions-compat",$1="@firebase/installations",Z1="@firebase/installations-compat",W1="@firebase/messaging",J1="@firebase/messaging-compat",eC="@firebase/performance",tC="@firebase/performance-compat",nC="@firebase/remote-config",iC="@firebase/remote-config-compat",rC="@firebase/storage",sC="@firebase/storage-compat",aC="@firebase/firestore",oC="@firebase/ai",lC="@firebase/firestore-compat",uC="firebase",cC="12.1.0";/**
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
 */const sm="[DEFAULT]",hC={[rm]:"fire-core",[U1]:"fire-core-compat",[j1]:"fire-analytics",[z1]:"fire-analytics-compat",[q1]:"fire-app-check",[B1]:"fire-app-check-compat",[H1]:"fire-auth",[F1]:"fire-auth-compat",[Y1]:"fire-rtdb",[G1]:"fire-data-connect",[X1]:"fire-rtdb-compat",[K1]:"fire-fn",[Q1]:"fire-fn-compat",[$1]:"fire-iid",[Z1]:"fire-iid-compat",[W1]:"fire-fcm",[J1]:"fire-fcm-compat",[eC]:"fire-perf",[tC]:"fire-perf-compat",[nC]:"fire-rc",[iC]:"fire-rc-compat",[rC]:"fire-gcs",[sC]:"fire-gcs-compat",[aC]:"fire-fst",[lC]:"fire-fst-compat",[oC]:"fire-vertex","fire-js":"fire-js",[uC]:"fire-js-all"};/**
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
 */const Fc=new Map,fC=new Map,am=new Map;function l_(r,e){try{r.container.addComponent(e)}catch(n){ar.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function Ci(r){const e=r.name;if(am.has(e))return ar.debug(`There were multiple attempts to register component ${e}.`),!1;am.set(e,r);for(const n of Fc.values())l_(n,r);for(const n of fC.values())l_(n,r);return!0}function fo(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function Ti(r){return r==null?!1:r.settings!==void 0}/**
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
 */const dC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xr=new Js("app","Firebase",dC);/**
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
 */class mC{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ni("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xr.create("app-deleted",{appName:this._name})}}/**
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
 */const mo=cC;function fT(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s={name:sm,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw Xr.create("bad-app-name",{appName:String(o)});if(n||(n=rT()),!n)throw Xr.create("no-options");const u=Fc.get(o);if(u){if(Ks(n,u.options)&&Ks(s,u.config))return u;throw Xr.create("duplicate-app",{appName:o})}const f=new E1(o);for(const y of am.values())f.addComponent(y);const m=new mC(n,s,f);return Fc.set(o,m),m}function Lm(r=sm){const e=Fc.get(r);if(!e&&r===sm&&rT())return fT();if(!e)throw Xr.create("no-app",{appName:r});return e}function Yn(r,e,n){let s=hC[r]??r;n&&(s+=`-${n}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const f=[`Unable to register library "${s}" with version "${e}":`];o&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ar.warn(f.join(" "));return}Ci(new ni(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const pC="firebase-heartbeat-database",gC=1,Ll="firebase-heartbeat-store";let Ud=null;function dT(){return Ud||(Ud=lh(pC,gC,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ll)}catch(n){console.warn(n)}}}}).catch(r=>{throw Xr.create("idb-open",{originalErrorMessage:r.message})})),Ud}async function yC(r){try{const n=(await dT()).transaction(Ll),s=await n.objectStore(Ll).get(mT(r));return await n.done,s}catch(e){if(e instanceof Ii)ar.warn(e.message);else{const n=Xr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ar.warn(n.message)}}}async function u_(r,e){try{const s=(await dT()).transaction(Ll,"readwrite");await s.objectStore(Ll).put(e,mT(r)),await s.done}catch(n){if(n instanceof Ii)ar.warn(n.message);else{const s=Xr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ar.warn(s.message)}}}function mT(r){return`${r.name}!${r.options.appId}`}/**
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
 */const vC=1024,_C=30;class TC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=c_();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>_C){const f=bC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ar.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=c_(),{heartbeatsToSend:s,unsentEntries:o}=EC(this._heartbeatsCache.heartbeats),u=Hc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return ar.warn(n),""}}}function c_(){return new Date().toISOString().substring(0,10)}function EC(r,e=vC){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),h_(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),h_(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class SC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lT()?uT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return u_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return u_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function h_(r){return Hc(JSON.stringify({version:2,heartbeats:r})).length}function bC(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
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
 */function AC(r){Ci(new ni("platform-logger",e=>new x1(e),"PRIVATE")),Ci(new ni("heartbeat",e=>new TC(e),"PRIVATE")),Yn(rm,o_,r),Yn(rm,o_,"esm2020"),Yn("fire-js","")}AC("");var f_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kr,pT;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(M,w){function C(){}C.prototype=w.prototype,M.D=w.prototype,M.prototype=new C,M.prototype.constructor=M,M.C=function(D,P,k){for(var N=Array(arguments.length-2),st=2;st<arguments.length;st++)N[st-2]=arguments[st];return w.prototype[P].apply(D,N)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(M,w,C){C||(C=0);var D=Array(16);if(typeof w=="string")for(var P=0;16>P;++P)D[P]=w.charCodeAt(C++)|w.charCodeAt(C++)<<8|w.charCodeAt(C++)<<16|w.charCodeAt(C++)<<24;else for(P=0;16>P;++P)D[P]=w[C++]|w[C++]<<8|w[C++]<<16|w[C++]<<24;w=M.g[0],C=M.g[1],P=M.g[2];var k=M.g[3],N=w+(k^C&(P^k))+D[0]+3614090360&4294967295;w=C+(N<<7&4294967295|N>>>25),N=k+(P^w&(C^P))+D[1]+3905402710&4294967295,k=w+(N<<12&4294967295|N>>>20),N=P+(C^k&(w^C))+D[2]+606105819&4294967295,P=k+(N<<17&4294967295|N>>>15),N=C+(w^P&(k^w))+D[3]+3250441966&4294967295,C=P+(N<<22&4294967295|N>>>10),N=w+(k^C&(P^k))+D[4]+4118548399&4294967295,w=C+(N<<7&4294967295|N>>>25),N=k+(P^w&(C^P))+D[5]+1200080426&4294967295,k=w+(N<<12&4294967295|N>>>20),N=P+(C^k&(w^C))+D[6]+2821735955&4294967295,P=k+(N<<17&4294967295|N>>>15),N=C+(w^P&(k^w))+D[7]+4249261313&4294967295,C=P+(N<<22&4294967295|N>>>10),N=w+(k^C&(P^k))+D[8]+1770035416&4294967295,w=C+(N<<7&4294967295|N>>>25),N=k+(P^w&(C^P))+D[9]+2336552879&4294967295,k=w+(N<<12&4294967295|N>>>20),N=P+(C^k&(w^C))+D[10]+4294925233&4294967295,P=k+(N<<17&4294967295|N>>>15),N=C+(w^P&(k^w))+D[11]+2304563134&4294967295,C=P+(N<<22&4294967295|N>>>10),N=w+(k^C&(P^k))+D[12]+1804603682&4294967295,w=C+(N<<7&4294967295|N>>>25),N=k+(P^w&(C^P))+D[13]+4254626195&4294967295,k=w+(N<<12&4294967295|N>>>20),N=P+(C^k&(w^C))+D[14]+2792965006&4294967295,P=k+(N<<17&4294967295|N>>>15),N=C+(w^P&(k^w))+D[15]+1236535329&4294967295,C=P+(N<<22&4294967295|N>>>10),N=w+(P^k&(C^P))+D[1]+4129170786&4294967295,w=C+(N<<5&4294967295|N>>>27),N=k+(C^P&(w^C))+D[6]+3225465664&4294967295,k=w+(N<<9&4294967295|N>>>23),N=P+(w^C&(k^w))+D[11]+643717713&4294967295,P=k+(N<<14&4294967295|N>>>18),N=C+(k^w&(P^k))+D[0]+3921069994&4294967295,C=P+(N<<20&4294967295|N>>>12),N=w+(P^k&(C^P))+D[5]+3593408605&4294967295,w=C+(N<<5&4294967295|N>>>27),N=k+(C^P&(w^C))+D[10]+38016083&4294967295,k=w+(N<<9&4294967295|N>>>23),N=P+(w^C&(k^w))+D[15]+3634488961&4294967295,P=k+(N<<14&4294967295|N>>>18),N=C+(k^w&(P^k))+D[4]+3889429448&4294967295,C=P+(N<<20&4294967295|N>>>12),N=w+(P^k&(C^P))+D[9]+568446438&4294967295,w=C+(N<<5&4294967295|N>>>27),N=k+(C^P&(w^C))+D[14]+3275163606&4294967295,k=w+(N<<9&4294967295|N>>>23),N=P+(w^C&(k^w))+D[3]+4107603335&4294967295,P=k+(N<<14&4294967295|N>>>18),N=C+(k^w&(P^k))+D[8]+1163531501&4294967295,C=P+(N<<20&4294967295|N>>>12),N=w+(P^k&(C^P))+D[13]+2850285829&4294967295,w=C+(N<<5&4294967295|N>>>27),N=k+(C^P&(w^C))+D[2]+4243563512&4294967295,k=w+(N<<9&4294967295|N>>>23),N=P+(w^C&(k^w))+D[7]+1735328473&4294967295,P=k+(N<<14&4294967295|N>>>18),N=C+(k^w&(P^k))+D[12]+2368359562&4294967295,C=P+(N<<20&4294967295|N>>>12),N=w+(C^P^k)+D[5]+4294588738&4294967295,w=C+(N<<4&4294967295|N>>>28),N=k+(w^C^P)+D[8]+2272392833&4294967295,k=w+(N<<11&4294967295|N>>>21),N=P+(k^w^C)+D[11]+1839030562&4294967295,P=k+(N<<16&4294967295|N>>>16),N=C+(P^k^w)+D[14]+4259657740&4294967295,C=P+(N<<23&4294967295|N>>>9),N=w+(C^P^k)+D[1]+2763975236&4294967295,w=C+(N<<4&4294967295|N>>>28),N=k+(w^C^P)+D[4]+1272893353&4294967295,k=w+(N<<11&4294967295|N>>>21),N=P+(k^w^C)+D[7]+4139469664&4294967295,P=k+(N<<16&4294967295|N>>>16),N=C+(P^k^w)+D[10]+3200236656&4294967295,C=P+(N<<23&4294967295|N>>>9),N=w+(C^P^k)+D[13]+681279174&4294967295,w=C+(N<<4&4294967295|N>>>28),N=k+(w^C^P)+D[0]+3936430074&4294967295,k=w+(N<<11&4294967295|N>>>21),N=P+(k^w^C)+D[3]+3572445317&4294967295,P=k+(N<<16&4294967295|N>>>16),N=C+(P^k^w)+D[6]+76029189&4294967295,C=P+(N<<23&4294967295|N>>>9),N=w+(C^P^k)+D[9]+3654602809&4294967295,w=C+(N<<4&4294967295|N>>>28),N=k+(w^C^P)+D[12]+3873151461&4294967295,k=w+(N<<11&4294967295|N>>>21),N=P+(k^w^C)+D[15]+530742520&4294967295,P=k+(N<<16&4294967295|N>>>16),N=C+(P^k^w)+D[2]+3299628645&4294967295,C=P+(N<<23&4294967295|N>>>9),N=w+(P^(C|~k))+D[0]+4096336452&4294967295,w=C+(N<<6&4294967295|N>>>26),N=k+(C^(w|~P))+D[7]+1126891415&4294967295,k=w+(N<<10&4294967295|N>>>22),N=P+(w^(k|~C))+D[14]+2878612391&4294967295,P=k+(N<<15&4294967295|N>>>17),N=C+(k^(P|~w))+D[5]+4237533241&4294967295,C=P+(N<<21&4294967295|N>>>11),N=w+(P^(C|~k))+D[12]+1700485571&4294967295,w=C+(N<<6&4294967295|N>>>26),N=k+(C^(w|~P))+D[3]+2399980690&4294967295,k=w+(N<<10&4294967295|N>>>22),N=P+(w^(k|~C))+D[10]+4293915773&4294967295,P=k+(N<<15&4294967295|N>>>17),N=C+(k^(P|~w))+D[1]+2240044497&4294967295,C=P+(N<<21&4294967295|N>>>11),N=w+(P^(C|~k))+D[8]+1873313359&4294967295,w=C+(N<<6&4294967295|N>>>26),N=k+(C^(w|~P))+D[15]+4264355552&4294967295,k=w+(N<<10&4294967295|N>>>22),N=P+(w^(k|~C))+D[6]+2734768916&4294967295,P=k+(N<<15&4294967295|N>>>17),N=C+(k^(P|~w))+D[13]+1309151649&4294967295,C=P+(N<<21&4294967295|N>>>11),N=w+(P^(C|~k))+D[4]+4149444226&4294967295,w=C+(N<<6&4294967295|N>>>26),N=k+(C^(w|~P))+D[11]+3174756917&4294967295,k=w+(N<<10&4294967295|N>>>22),N=P+(w^(k|~C))+D[2]+718787259&4294967295,P=k+(N<<15&4294967295|N>>>17),N=C+(k^(P|~w))+D[9]+3951481745&4294967295,M.g[0]=M.g[0]+w&4294967295,M.g[1]=M.g[1]+(P+(N<<21&4294967295|N>>>11))&4294967295,M.g[2]=M.g[2]+P&4294967295,M.g[3]=M.g[3]+k&4294967295}s.prototype.u=function(M,w){w===void 0&&(w=M.length);for(var C=w-this.blockSize,D=this.B,P=this.h,k=0;k<w;){if(P==0)for(;k<=C;)o(this,M,k),k+=this.blockSize;if(typeof M=="string"){for(;k<w;)if(D[P++]=M.charCodeAt(k++),P==this.blockSize){o(this,D),P=0;break}}else for(;k<w;)if(D[P++]=M[k++],P==this.blockSize){o(this,D),P=0;break}}this.h=P,this.o+=w},s.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var w=1;w<M.length-8;++w)M[w]=0;var C=8*this.o;for(w=M.length-8;w<M.length;++w)M[w]=C&255,C/=256;for(this.u(M),M=Array(16),w=C=0;4>w;++w)for(var D=0;32>D;D+=8)M[C++]=this.g[w]>>>D&255;return M};function u(M,w){var C=m;return Object.prototype.hasOwnProperty.call(C,M)?C[M]:C[M]=w(M)}function f(M,w){this.h=w;for(var C=[],D=!0,P=M.length-1;0<=P;P--){var k=M[P]|0;D&&k==w||(C[P]=k,D=!1)}this.g=C}var m={};function y(M){return-128<=M&&128>M?u(M,function(w){return new f([w|0],0>w?-1:0)}):new f([M|0],0>M?-1:0)}function g(M){if(isNaN(M)||!isFinite(M))return b;if(0>M)return X(g(-M));for(var w=[],C=1,D=0;M>=C;D++)w[D]=M/C|0,C*=4294967296;return new f(w,0)}function T(M,w){if(M.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(M.charAt(0)=="-")return X(T(M.substring(1),w));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=g(Math.pow(w,8)),D=b,P=0;P<M.length;P+=8){var k=Math.min(8,M.length-P),N=parseInt(M.substring(P,P+k),w);8>k?(k=g(Math.pow(w,k)),D=D.j(k).add(g(N))):(D=D.j(C),D=D.add(g(N)))}return D}var b=y(0),A=y(1),x=y(16777216);r=f.prototype,r.m=function(){if(G(this))return-X(this).m();for(var M=0,w=1,C=0;C<this.g.length;C++){var D=this.i(C);M+=(0<=D?D:4294967296+D)*w,w*=4294967296}return M},r.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(z(this))return"0";if(G(this))return"-"+X(this).toString(M);for(var w=g(Math.pow(M,6)),C=this,D="";;){var P=_e(C,w).g;C=oe(C,P.j(w));var k=((0<C.g.length?C.g[0]:C.h)>>>0).toString(M);if(C=P,z(C))return k+D;for(;6>k.length;)k="0"+k;D=k+D}},r.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function z(M){if(M.h!=0)return!1;for(var w=0;w<M.g.length;w++)if(M.g[w]!=0)return!1;return!0}function G(M){return M.h==-1}r.l=function(M){return M=oe(this,M),G(M)?-1:z(M)?0:1};function X(M){for(var w=M.g.length,C=[],D=0;D<w;D++)C[D]=~M.g[D];return new f(C,~M.h).add(A)}r.abs=function(){return G(this)?X(this):this},r.add=function(M){for(var w=Math.max(this.g.length,M.g.length),C=[],D=0,P=0;P<=w;P++){var k=D+(this.i(P)&65535)+(M.i(P)&65535),N=(k>>>16)+(this.i(P)>>>16)+(M.i(P)>>>16);D=N>>>16,k&=65535,N&=65535,C[P]=N<<16|k}return new f(C,C[C.length-1]&-2147483648?-1:0)};function oe(M,w){return M.add(X(w))}r.j=function(M){if(z(this)||z(M))return b;if(G(this))return G(M)?X(this).j(X(M)):X(X(this).j(M));if(G(M))return X(this.j(X(M)));if(0>this.l(x)&&0>M.l(x))return g(this.m()*M.m());for(var w=this.g.length+M.g.length,C=[],D=0;D<2*w;D++)C[D]=0;for(D=0;D<this.g.length;D++)for(var P=0;P<M.g.length;P++){var k=this.i(D)>>>16,N=this.i(D)&65535,st=M.i(P)>>>16,Le=M.i(P)&65535;C[2*D+2*P]+=N*Le,ae(C,2*D+2*P),C[2*D+2*P+1]+=k*Le,ae(C,2*D+2*P+1),C[2*D+2*P+1]+=N*st,ae(C,2*D+2*P+1),C[2*D+2*P+2]+=k*st,ae(C,2*D+2*P+2)}for(D=0;D<w;D++)C[D]=C[2*D+1]<<16|C[2*D];for(D=w;D<2*w;D++)C[D]=0;return new f(C,0)};function ae(M,w){for(;(M[w]&65535)!=M[w];)M[w+1]+=M[w]>>>16,M[w]&=65535,w++}function ne(M,w){this.g=M,this.h=w}function _e(M,w){if(z(w))throw Error("division by zero");if(z(M))return new ne(b,b);if(G(M))return w=_e(X(M),w),new ne(X(w.g),X(w.h));if(G(w))return w=_e(M,X(w)),new ne(X(w.g),w.h);if(30<M.g.length){if(G(M)||G(w))throw Error("slowDivide_ only works with positive integers.");for(var C=A,D=w;0>=D.l(M);)C=ce(C),D=ce(D);var P=we(C,1),k=we(D,1);for(D=we(D,2),C=we(C,2);!z(D);){var N=k.add(D);0>=N.l(M)&&(P=P.add(C),k=N),D=we(D,1),C=we(C,1)}return w=oe(M,P.j(w)),new ne(P,w)}for(P=b;0<=M.l(w);){for(C=Math.max(1,Math.floor(M.m()/w.m())),D=Math.ceil(Math.log(C)/Math.LN2),D=48>=D?1:Math.pow(2,D-48),k=g(C),N=k.j(w);G(N)||0<N.l(M);)C-=D,k=g(C),N=k.j(w);z(k)&&(k=A),P=P.add(k),M=oe(M,N)}return new ne(P,M)}r.A=function(M){return _e(this,M).h},r.and=function(M){for(var w=Math.max(this.g.length,M.g.length),C=[],D=0;D<w;D++)C[D]=this.i(D)&M.i(D);return new f(C,this.h&M.h)},r.or=function(M){for(var w=Math.max(this.g.length,M.g.length),C=[],D=0;D<w;D++)C[D]=this.i(D)|M.i(D);return new f(C,this.h|M.h)},r.xor=function(M){for(var w=Math.max(this.g.length,M.g.length),C=[],D=0;D<w;D++)C[D]=this.i(D)^M.i(D);return new f(C,this.h^M.h)};function ce(M){for(var w=M.g.length+1,C=[],D=0;D<w;D++)C[D]=M.i(D)<<1|M.i(D-1)>>>31;return new f(C,M.h)}function we(M,w){var C=w>>5;w%=32;for(var D=M.g.length-C,P=[],k=0;k<D;k++)P[k]=0<w?M.i(k+C)>>>w|M.i(k+C+1)<<32-w:M.i(k+C);return new f(P,M.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,pT=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=g,f.fromString=T,Kr=f}).apply(typeof f_<"u"?f_:typeof self<"u"?self:typeof window<"u"?window:{});var Rc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gT,Rl,yT,Vc,om,vT,_T,TT;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,p,v){return c==Array.prototype||c==Object.prototype||(c[p]=v.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Rc=="object"&&Rc];for(var p=0;p<c.length;++p){var v=c[p];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=n(this);function o(c,p){if(p)e:{var v=s;c=c.split(".");for(var S=0;S<c.length-1;S++){var U=c[S];if(!(U in v))break e;v=v[U]}c=c[c.length-1],S=v[c],p=p(S),p!=S&&p!=null&&e(v,c,{configurable:!0,writable:!0,value:p})}}function u(c,p){c instanceof String&&(c+="");var v=0,S=!1,U={next:function(){if(!S&&v<c.length){var F=v++;return{value:p(F,c[F]),done:!1}}return S=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(c){return c||function(){return u(this,function(p,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function y(c){var p=typeof c;return p=p!="object"?p:c?Array.isArray(c)?"array":p:"null",p=="array"||p=="object"&&typeof c.length=="number"}function g(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function T(c,p,v){return c.call.apply(c.bind,arguments)}function b(c,p,v){if(!c)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,S),c.apply(p,U)}}return function(){return c.apply(p,arguments)}}function A(c,p,v){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:b,A.apply(null,arguments)}function x(c,p){var v=Array.prototype.slice.call(arguments,1);return function(){var S=v.slice();return S.push.apply(S,arguments),c.apply(this,S)}}function z(c,p){function v(){}v.prototype=p.prototype,c.aa=p.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(S,U,F){for(var re=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)re[Ue-2]=arguments[Ue];return p.prototype[U].apply(S,re)}}function G(c){const p=c.length;if(0<p){const v=Array(p);for(let S=0;S<p;S++)v[S]=c[S];return v}return[]}function X(c,p){for(let v=1;v<arguments.length;v++){const S=arguments[v];if(y(S)){const U=c.length||0,F=S.length||0;c.length=U+F;for(let re=0;re<F;re++)c[U+re]=S[re]}else c.push(S)}}class oe{constructor(p,v){this.i=p,this.j=v,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function ae(c){return/^[\s\xa0]*$/.test(c)}function ne(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function _e(c){return _e[" "](c),c}_e[" "]=function(){};var ce=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function we(c,p,v){for(const S in c)p.call(v,c[S],S,c)}function M(c,p){for(const v in c)p.call(void 0,c[v],v,c)}function w(c){const p={};for(const v in c)p[v]=c[v];return p}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function D(c,p){let v,S;for(let U=1;U<arguments.length;U++){S=arguments[U];for(v in S)c[v]=S[v];for(let F=0;F<C.length;F++)v=C[F],Object.prototype.hasOwnProperty.call(S,v)&&(c[v]=S[v])}}function P(c){var p=1;c=c.split(":");const v=[];for(;0<p&&c.length;)v.push(c.shift()),p--;return c.length&&v.push(c.join(":")),v}function k(c){m.setTimeout(()=>{throw c},0)}function N(){var c=De;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class st{constructor(){this.h=this.g=null}add(p,v){const S=Le.get();S.set(p,v),this.h?this.h.next=S:this.g=S,this.h=S}}var Le=new oe(()=>new Y,c=>c.reset());class Y{constructor(){this.next=this.g=this.h=null}set(p,v){this.h=p,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,le=!1,De=new st,I=()=>{const c=m.Promise.resolve(void 0);ee=()=>{c.then(Z)}};var Z=()=>{for(var c;c=N();){try{c.h.call(c.g)}catch(v){k(v)}var p=Le;p.j(c),100>p.h&&(p.h++,c.next=p.g,p.g=c)}le=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var $=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};m.addEventListener("test",v,p),m.removeEventListener("test",v,p)}catch{}return c}();function pe(c,p){if(te.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,S=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget){if(ce){e:{try{_e(p.nodeName);var U=!0;break e}catch{}U=!1}U||(p=null)}}else v=="mouseover"?p=c.fromElement:v=="mouseout"&&(p=c.toElement);this.relatedTarget=p,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:fe[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&pe.aa.h.call(this)}}z(pe,te);var fe={2:"touch",3:"pen",4:"mouse"};pe.prototype.h=function(){pe.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Se="closure_listenable_"+(1e6*Math.random()|0),Ne=0;function ot(c,p,v,S,U){this.listener=c,this.proxy=null,this.src=p,this.type=v,this.capture=!!S,this.ha=U,this.key=++Ne,this.da=this.fa=!1}function Nt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Qt(c){this.src=c,this.g={},this.h=0}Qt.prototype.add=function(c,p,v,S,U){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var re=In(c,p,S,U);return-1<re?(p=c[re],v||(p.fa=!1)):(p=new ot(p,this.src,F,!!S,U),p.fa=v,c.push(p)),p};function Gn(c,p){var v=p.type;if(v in c.g){var S=c.g[v],U=Array.prototype.indexOf.call(S,p,void 0),F;(F=0<=U)&&Array.prototype.splice.call(S,U,1),F&&(Nt(p),c.g[v].length==0&&(delete c.g[v],c.h--))}}function In(c,p,v,S){for(var U=0;U<c.length;++U){var F=c[U];if(!F.da&&F.listener==p&&F.capture==!!v&&F.ha==S)return U}return-1}var Dn="closure_lm_"+(1e6*Math.random()|0),Di={};function ta(c,p,v,S,U){if(Array.isArray(p)){for(var F=0;F<p.length;F++)ta(c,p[F],v,S,U);return null}return v=dt(v),c&&c[Se]?c.K(p,v,g(S)?!!S.capture:!1,U):an(c,p,v,!1,S,U)}function an(c,p,v,S,U,F){if(!p)throw Error("Invalid event type");var re=g(U)?!!U.capture:!!U,Ue=_n(c);if(Ue||(c[Dn]=Ue=new Qt(c)),v=Ue.add(p,v,S,re,F),v.proxy)return v;if(S=ye(),v.proxy=S,S.src=c,S.listener=v,c.addEventListener)$||(U=re),U===void 0&&(U=!1),c.addEventListener(p.toString(),S,U);else if(c.attachEvent)c.attachEvent(vn(p.toString()),S);else if(c.addListener&&c.removeListener)c.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return v}function ye(){function c(v){return p.call(c.src,c.listener,v)}const p=Xn;return c}function He(c,p,v,S,U){if(Array.isArray(p))for(var F=0;F<p.length;F++)He(c,p[F],v,S,U);else S=g(S)?!!S.capture:!!S,v=dt(v),c&&c[Se]?(c=c.i,p=String(p).toString(),p in c.g&&(F=c.g[p],v=In(F,v,S,U),-1<v&&(Nt(F[v]),Array.prototype.splice.call(F,v,1),F.length==0&&(delete c.g[p],c.h--)))):c&&(c=_n(c))&&(p=c.g[p.toString()],c=-1,p&&(c=In(p,v,S,U)),(v=-1<c?p[c]:null)&&on(v))}function on(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[Se])Gn(p.i,c);else{var v=c.type,S=c.proxy;p.removeEventListener?p.removeEventListener(v,S,c.capture):p.detachEvent?p.detachEvent(vn(v),S):p.addListener&&p.removeListener&&p.removeListener(S),(v=_n(p))?(Gn(v,c),v.h==0&&(v.src=null,p[Dn]=null)):Nt(c)}}}function vn(c){return c in Di?Di[c]:Di[c]="on"+c}function Xn(c,p){if(c.da)c=!0;else{p=new pe(p,this);var v=c.listener,S=c.ha||c.src;c.fa&&on(c),c=v.call(S,p)}return c}function _n(c){return c=c[Dn],c instanceof Qt?c:null}var On="__closure_events_fn_"+(1e9*Math.random()>>>0);function dt(c){return typeof c=="function"?c:(c[On]||(c[On]=function(p){return c.handleEvent(p)}),c[On])}function Ye(){se.call(this),this.i=new Qt(this),this.M=this,this.F=null}z(Ye,se),Ye.prototype[Se]=!0,Ye.prototype.removeEventListener=function(c,p,v,S){He(this,c,p,v,S)};function Qe(c,p){var v,S=c.F;if(S)for(v=[];S;S=S.F)v.push(S);if(c=c.M,S=p.type||p,typeof p=="string")p=new te(p,c);else if(p instanceof te)p.target=p.target||c;else{var U=p;p=new te(S,c),D(p,U)}if(U=!0,v)for(var F=v.length-1;0<=F;F--){var re=p.g=v[F];U=Tn(re,S,!0,p)&&U}if(re=p.g=c,U=Tn(re,S,!0,p)&&U,U=Tn(re,S,!1,p)&&U,v)for(F=0;F<v.length;F++)re=p.g=v[F],U=Tn(re,S,!1,p)&&U}Ye.prototype.N=function(){if(Ye.aa.N.call(this),this.i){var c=this.i,p;for(p in c.g){for(var v=c.g[p],S=0;S<v.length;S++)Nt(v[S]);delete c.g[p],c.h--}}this.F=null},Ye.prototype.K=function(c,p,v,S){return this.i.add(String(c),p,!1,v,S)},Ye.prototype.L=function(c,p,v,S){return this.i.add(String(c),p,!0,v,S)};function Tn(c,p,v,S){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();for(var U=!0,F=0;F<p.length;++F){var re=p[F];if(re&&!re.da&&re.capture==v){var Ue=re.listener,Dt=re.ha||re.src;re.fa&&Gn(c.i,re),U=Ue.call(Dt,S)!==!1&&U}}return U&&!S.defaultPrevented}function $t(c,p,v){if(typeof c=="function")v&&(c=A(c,v));else if(c&&typeof c.handleEvent=="function")c=A(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:m.setTimeout(c,p||0)}function iu(c){c.g=$t(()=>{c.g=null,c.i&&(c.i=!1,iu(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class Ch extends se{constructor(p,v){super(),this.m=p,this.l=v,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:iu(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ls(c){se.call(this),this.h=c,this.g={}}z(ls,se);var us=[];function cs(c){we(c.g,function(p,v){this.g.hasOwnProperty(v)&&on(p)},c),c.g={}}ls.prototype.N=function(){ls.aa.N.call(this),cs(this)},ls.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Kn=m.JSON.stringify,na=m.JSON.parse,hs=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function _o(){}_o.prototype.h=null;function To(c){return c.h||(c.h=c.i())}function Eo(){}var Oi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mi(){te.call(this,"d")}z(Mi,te);function So(){te.call(this,"c")}z(So,te);var ii={},bo=null;function hr(){return bo=bo||new Ye}ii.La="serverreachability";function ia(c){te.call(this,ii.La,c)}z(ia,te);function fr(c){const p=hr();Qe(p,new ia(p))}ii.STAT_EVENT="statevent";function ru(c,p){te.call(this,ii.STAT_EVENT,c),this.stat=p}z(ru,te);function lt(c){const p=hr();Qe(p,new ru(p,c))}ii.Ma="timingevent";function It(c,p){te.call(this,ii.Ma,c),this.size=p}z(It,te);function Et(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},p)}function Mn(){this.g=!0}Mn.prototype.xa=function(){this.g=!1};function Ao(c,p,v,S,U,F){c.info(function(){if(c.g)if(F)for(var re="",Ue=F.split("&"),Dt=0;Dt<Ue.length;Dt++){var ze=Ue[Dt].split("=");if(1<ze.length){var Lt=ze[0];ze=ze[1];var Ot=Lt.split("_");re=2<=Ot.length&&Ot[1]=="type"?re+(Lt+"="+ze+"&"):re+(Lt+"=redacted&")}}else re=null;else re=F;return"XMLHTTP REQ ("+S+") [attempt "+U+"]: "+p+`
`+v+`
`+re})}function Rh(c,p,v,S,U,F,re){c.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+U+"]: "+p+`
`+v+`
`+F+" "+re})}function dr(c,p,v,S){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+fs(c,v)+(S?" "+S:"")})}function su(c,p){c.info(function(){return"TIMEOUT: "+p})}Mn.prototype.info=function(){};function fs(c,p){if(!c.g)return p;if(!p)return null;try{var v=JSON.parse(p);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var S=v[c];if(!(2>S.length)){var U=S[1];if(Array.isArray(U)&&!(1>U.length)){var F=U[0];if(F!="noop"&&F!="stop"&&F!="close")for(var re=1;re<U.length;re++)U[re]=""}}}}return Kn(v)}catch{return p}}var mr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Pi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ri;function si(){}z(si,_o),si.prototype.g=function(){return new XMLHttpRequest},si.prototype.i=function(){return{}},ri=new si;function ln(c,p,v,S){this.j=c,this.i=p,this.l=v,this.R=S||1,this.U=new ls(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new gt}function gt(){this.i=null,this.g="",this.h=!1}var wo={},ra={};function Qn(c,p,v){c.L=1,c.v=ys(En(p)),c.m=v,c.P=!0,Vi(c,null)}function Vi(c,p){c.F=Date.now(),ds(c),c.A=En(c.v);var v=c.A,S=c.R;Array.isArray(S)||(S=[String(S)]),Oo(v.i,"t",S),c.C=0,v=c.j.J,c.h=new gt,c.g=Eu(c.j,v?p:null,!c.m),0<c.O&&(c.M=new Ch(A(c.Y,c,c.g),c.O)),p=c.U,v=c.g,S=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(us[0]=U.toString()),U=us);for(var F=0;F<U.length;F++){var re=ta(v,U[F],S||p.handleEvent,!1,p.h||p);if(!re)break;p.g[re.key]=re}p=c.H?w(c.H):{},c.m?(c.u||(c.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,p)):(c.u="GET",c.g.ea(c.A,c.u,null,p)),fr(),Ao(c.i,c.u,c.A,c.l,c.R,c.m)}ln.prototype.ca=function(c){c=c.target;const p=this.M;p&&xn(c)==3?p.j():this.Y(c)},ln.prototype.Y=function(c){try{if(c==this.g)e:{const Ot=xn(this.g);var p=this.g.Ba();const qi=this.g.Z();if(!(3>Ot)&&(Ot!=3||this.g&&(this.h.h||this.g.oa()||du(this.g)))){this.J||Ot!=4||p==7||(p==8||0>=qi?fr(3):fr(2)),pr(this);var v=this.g.Z();this.X=v;t:if(au(this)){var S=du(this.g);c="";var U=S.length,F=xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qt(this),ai(this);var re="";break t}this.h.i=new m.TextDecoder}for(p=0;p<U;p++)this.h.h=!0,c+=this.h.i.decode(S[p],{stream:!(F&&p==U-1)});S.length=0,this.h.g+=c,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=v==200,Rh(this.i,this.u,this.A,this.l,this.R,Ot,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,Dt=this.g;if((Ue=Dt.g?Dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ae(Ue)){var ze=Ue;break t}}ze=null}if(v=ze)dr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ms(this,v);else{this.o=!1,this.s=3,lt(12),qt(this),ai(this);break e}}if(this.P){v=!0;let Ht;for(;!this.J&&this.C<re.length;)if(Ht=ou(this,re),Ht==ra){Ot==4&&(this.s=4,lt(14),v=!1),dr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==wo){this.s=4,lt(15),dr(this.i,this.l,re,"[Invalid Chunk]"),v=!1;break}else dr(this.i,this.l,Ht,null),ms(this,Ht);if(au(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ot!=4||re.length!=0||this.h.h||(this.s=1,lt(16),v=!1),this.o=this.o&&v,!v)dr(this.i,this.l,re,"[Invalid Chunked Response]"),qt(this),ai(this);else if(0<re.length&&!this.W){this.W=!0;var Lt=this.j;Lt.g==this&&Lt.ba&&!Lt.M&&(Lt.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),ws(Lt),Lt.M=!0,lt(11))}}else dr(this.i,this.l,re,null),ms(this,re);Ot==4&&qt(this),this.o&&!this.J&&(Ot==4?vu(this.j,this):(this.o=!1,ds(this)))}else Mh(this.g),v==400&&0<re.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),qt(this),ai(this)}}}catch{}finally{}};function au(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function ou(c,p){var v=c.C,S=p.indexOf(`
`,v);return S==-1?ra:(v=Number(p.substring(v,S)),isNaN(v)?wo:(S+=1,S+v>p.length?ra:(p=p.slice(S,S+v),c.C=S+v,p)))}ln.prototype.cancel=function(){this.J=!0,qt(this)};function ds(c){c.S=Date.now()+c.I,lu(c,c.I)}function lu(c,p){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Et(A(c.ba,c),p)}function pr(c){c.B&&(m.clearTimeout(c.B),c.B=null)}ln.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(su(this.i,this.A),this.L!=2&&(fr(),lt(17)),qt(this),this.s=2,ai(this)):lu(this,this.S-c)};function ai(c){c.j.G==0||c.J||vu(c.j,c)}function qt(c){pr(c);var p=c.M;p&&typeof p.ma=="function"&&p.ma(),c.M=null,cs(c.U),c.g&&(p=c.g,c.g=null,p.abort(),p.ma())}function ms(c,p){try{var v=c.j;if(v.G!=0&&(v.g==c||Co(v.h,c))){if(!c.K&&Co(v.h,c)&&v.G==3){try{var S=v.Da.g.parse(p)}catch{S=null}if(Array.isArray(S)&&S.length==3){var U=S;if(U[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)ga(v),ma(v);else break e;xo(v),lt(18)}}else v.za=U[1],0<v.za-v.T&&37500>U[2]&&v.F&&v.v==0&&!v.C&&(v.C=Et(A(v.Za,v),6e3));if(1>=aa(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Bi(v,11)}else if((c.K||v.g==c)&&ga(v),!ae(p))for(U=v.Da.g.parse(p),p=0;p<U.length;p++){let ze=U[p];if(v.T=ze[0],ze=ze[1],v.G==2)if(ze[0]=="c"){v.K=ze[1],v.ia=ze[2];const Lt=ze[3];Lt!=null&&(v.la=Lt,v.j.info("VER="+v.la));const Ot=ze[4];Ot!=null&&(v.Aa=Ot,v.j.info("SVER="+v.Aa));const qi=ze[5];qi!=null&&typeof qi=="number"&&0<qi&&(S=1.5*qi,v.L=S,v.j.info("backChannelRequestTimeoutMs_="+S)),S=v;const Ht=c.g;if(Ht){const di=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(di){var F=S.h;F.g||di.indexOf("spdy")==-1&&di.indexOf("quic")==-1&&di.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(oa(F,F.h),F.h=null))}if(S.D){const Uo=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;Uo&&(S.ya=Uo,We(S.I,S.D,Uo))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),S=v;var re=c;if(S.qa=Tu(S,S.J?S.ia:null,S.W),re.K){un(S.h,re);var Ue=re,Dt=S.L;Dt&&(Ue.I=Dt),Ue.B&&(pr(Ue),ds(Ue)),S.g=re}else gu(S);0<v.i.length&&pa(v)}else ze[0]!="stop"&&ze[0]!="close"||Bi(v,7);else v.G==3&&(ze[0]=="stop"||ze[0]=="close"?ze[0]=="stop"?Bi(v,7):Vo(v):ze[0]!="noop"&&v.l&&v.l.ta(ze),v.v=0)}}fr(4)}catch{}}var uu=class{constructor(c,p){this.g=c,this.map=p}};function ki(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sa(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function aa(c){return c.h?1:c.g?c.g.size:0}function Co(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function oa(c,p){c.g?c.g.add(p):c.h=p}function un(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}ki.prototype.cancel=function(){if(this.i=Ro(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Ro(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const v of c.g.values())p=p.concat(v.D);return p}return G(c.i)}function Nh(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(y(c)){for(var p=[],v=c.length,S=0;S<v;S++)p.push(c[S]);return p}p=[],v=0;for(S in c)p[v++]=c[S];return p}function la(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(y(c)||typeof c=="string"){var p=[];c=c.length;for(var v=0;v<c;v++)p.push(v);return p}p=[],v=0;for(const S in c)p[v++]=S;return p}}}function No(c,p){if(c.forEach&&typeof c.forEach=="function")c.forEach(p,void 0);else if(y(c)||typeof c=="string")Array.prototype.forEach.call(c,p,void 0);else for(var v=la(c),S=Nh(c),U=S.length,F=0;F<U;F++)p.call(void 0,S[F],v&&v[F],c)}var ps=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ih(c,p){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var S=c[v].indexOf("="),U=null;if(0<=S){var F=c[v].substring(0,S);U=c[v].substring(S+1)}else F=c[v];p(F,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function St(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof St){this.h=c.h,gs(this,c.j),this.o=c.o,this.g=c.g,gr(this,c.s),this.l=c.l;var p=c.i,v=new Li;v.i=p.i,p.g&&(v.g=new Map(p.g),v.h=p.h),xi(this,v),this.m=c.m}else c&&(p=String(c).match(ps))?(this.h=!1,gs(this,p[1]||"",!0),this.o=Pn(p[2]||""),this.g=Pn(p[3]||"",!0),gr(this,p[4]),this.l=Pn(p[5]||"",!0),xi(this,p[6]||"",!0),this.m=Pn(p[7]||"")):(this.h=!1,this.i=new Li(null,this.h))}St.prototype.toString=function(){var c=[],p=this.j;p&&c.push(vs(p,Io,!0),":");var v=this.g;return(v||p=="file")&&(c.push("//"),(p=this.o)&&c.push(vs(p,Io,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(vs(v,v.charAt(0)=="/"?Dh:Do,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",vs(v,ua)),c.join("")};function En(c){return new St(c)}function gs(c,p,v){c.j=v?Pn(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function gr(c,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);c.s=p}else c.s=null}function xi(c,p,v){p instanceof Li?(c.i=p,hu(c.i,c.h)):(v||(p=vs(p,Oh)),c.i=new Li(p,c.h))}function We(c,p,v){c.i.set(p,v)}function ys(c){return We(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Pn(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function vs(c,p,v){return typeof c=="string"?(c=encodeURI(c).replace(p,cu),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function cu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Io=/[#\/\?@]/g,Do=/[#\?:]/g,Dh=/[#\?]/g,Oh=/[#\?@]/g,ua=/#/g;function Li(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function Vn(c){c.g||(c.g=new Map,c.h=0,c.i&&Ih(c.i,function(p,v){c.add(decodeURIComponent(p.replace(/\+/g," ")),v)}))}r=Li.prototype,r.add=function(c,p){Vn(this),this.i=null,c=oi(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(p),this.h+=1,this};function Ui(c,p){Vn(c),p=oi(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function zi(c,p){return Vn(c),p=oi(c,p),c.g.has(p)}r.forEach=function(c,p){Vn(this),this.g.forEach(function(v,S){v.forEach(function(U){c.call(p,U,S,this)},this)},this)},r.na=function(){Vn(this);const c=Array.from(this.g.values()),p=Array.from(this.g.keys()),v=[];for(let S=0;S<p.length;S++){const U=c[S];for(let F=0;F<U.length;F++)v.push(p[S])}return v},r.V=function(c){Vn(this);let p=[];if(typeof c=="string")zi(this,c)&&(p=p.concat(this.g.get(oi(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)p=p.concat(c[v])}return p},r.set=function(c,p){return Vn(this),this.i=null,c=oi(this,c),zi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},r.get=function(c,p){return c?(c=this.V(c),0<c.length?String(c[0]):p):p};function Oo(c,p,v){Ui(c,p),0<v.length&&(c.i=null,c.g.set(oi(c,p),G(v)),c.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(var v=0;v<p.length;v++){var S=p[v];const F=encodeURIComponent(String(S)),re=this.V(S);for(S=0;S<re.length;S++){var U=F;re[S]!==""&&(U+="="+encodeURIComponent(String(re[S]))),c.push(U)}}return this.i=c.join("&")};function oi(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function hu(c,p){p&&!c.j&&(Vn(c),c.i=null,c.g.forEach(function(v,S){var U=S.toLowerCase();S!=U&&(Ui(this,S),Oo(this,U,v))},c)),c.j=p}function _s(c,p){const v=new Mn;if(m.Image){const S=new Image;S.onload=x(kn,v,"TestLoadImage: loaded",!0,p,S),S.onerror=x(kn,v,"TestLoadImage: error",!1,p,S),S.onabort=x(kn,v,"TestLoadImage: abort",!1,p,S),S.ontimeout=x(kn,v,"TestLoadImage: timeout",!1,p,S),m.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=c}else p(!1)}function $n(c,p){const v=new Mn,S=new AbortController,U=setTimeout(()=>{S.abort(),kn(v,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:S.signal}).then(F=>{clearTimeout(U),F.ok?kn(v,"TestPingServer: ok",!0,p):kn(v,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(U),kn(v,"TestPingServer: error",!1,p)})}function kn(c,p,v,S,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),S(v)}catch{}}function Ts(){this.g=new hs}function li(c,p,v){const S=v||"";try{No(c,function(U,F){let re=U;g(U)&&(re=Kn(U)),p.push(S+F+"="+encodeURIComponent(re))})}catch(U){throw p.push(S+"type="+encodeURIComponent("_badmap")),U}}function yr(c){this.l=c.Ub||null,this.j=c.eb||!1}z(yr,_o),yr.prototype.g=function(){return new ji(this.l,this.j)},yr.prototype.i=function(c){return function(){return c}}({});function ji(c,p){Ye.call(this),this.D=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}z(ji,Ye),r=ji.prototype,r.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=p,this.readyState=1,ci(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(p.body=c),(this.D||m).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ui(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ci(this)),this.g&&(this.readyState=3,ci(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Mo(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Mo(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?ui(this):ci(this),this.readyState==3&&Mo(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,ui(this))},r.Qa=function(c){this.g&&(this.response=c,ui(this))},r.ga=function(){this.g&&ui(this)};function ui(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ci(c)}r.setRequestHeader=function(c,p){this.u.append(c,p)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var v=p.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=p.next();return c.join(`\r
`)};function ci(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Po(c){let p="";return we(c,function(v,S){p+=S,p+=":",p+=v,p+=`\r
`}),p}function xt(c,p,v){e:{for(S in v){var S=!1;break e}S=!0}S||(v=Po(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):We(c,p,v))}function Ke(c){Ye.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}z(Ke,Ye);var ca=/^https?$/i,Es=["POST","PUT"];r=Ke.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,p,v,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ri.g(),this.v=this.o?To(this.o):To(ri),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(F){fu(this,F);return}if(c=v||"",v=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var U in S)v.set(U,S[U]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const F of S.keys())v.set(F,S.get(F));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(v.keys()).find(F=>F.toLowerCase()=="content-type"),U=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Es,p,void 0))||S||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,re]of v)this.g.setRequestHeader(F,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ss(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){fu(this,F)}};function fu(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.m=5,ha(c),hi(c)}function ha(c){c.A||(c.A=!0,Qe(c,"complete"),Qe(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Qe(this,"complete"),Qe(this,"abort"),hi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hi(this,!0)),Ke.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?fa(this):this.bb())},r.bb=function(){fa(this)};function fa(c){if(c.h&&typeof f<"u"&&(!c.v[1]||xn(c)!=4||c.Z()!=2)){if(c.u&&xn(c)==4)$t(c.Ea,0,c);else if(Qe(c,"readystatechange"),xn(c)==4){c.h=!1;try{const re=c.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var v;if(!(v=p)){var S;if(S=re===0){var U=String(c.D).match(ps)[1]||null;!U&&m.self&&m.self.location&&(U=m.self.location.protocol.slice(0,-1)),S=!ca.test(U?U.toLowerCase():"")}v=S}if(v)Qe(c,"complete"),Qe(c,"success");else{c.m=6;try{var F=2<xn(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",ha(c)}}finally{hi(c)}}}}function hi(c,p){if(c.g){Ss(c);const v=c.g,S=c.v[0]?()=>{}:null;c.g=null,c.v=null,p||Qe(c,"ready");try{v.onreadystatechange=S}catch{}}}function Ss(c){c.I&&(m.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function xn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<xn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),na(p)}};function du(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Mh(c){const p={};c=(c.g&&2<=xn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<c.length;S++){if(ae(c[S]))continue;var v=P(c[S]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const F=p[U]||[];p[U]=F,F.push(v)}M(p,function(S){return S.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function bs(c,p,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||p}function da(c){this.Aa=0,this.i=[],this.j=new Mn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=bs("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=bs("baseRetryDelayMs",5e3,c),this.cb=bs("retryDelaySeedMs",1e4,c),this.Wa=bs("forwardChannelMaxRetries",2,c),this.wa=bs("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new ki(c&&c.concurrentRequestLimit),this.Da=new Ts,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=da.prototype,r.la=8,r.G=1,r.connect=function(c,p,v,S){lt(0),this.W=c,this.H=p||{},v&&S!==void 0&&(this.H.OSID=v,this.H.OAID=S),this.F=this.X,this.I=Tu(this,null,this.W),pa(this)};function Vo(c){if(mu(c),c.G==3){var p=c.U++,v=En(c.I);if(We(v,"SID",c.K),We(v,"RID",p),We(v,"TYPE","terminate"),As(c,v),p=new ln(c,c.j,p),p.L=2,p.v=ys(En(v)),v=!1,m.navigator&&m.navigator.sendBeacon)try{v=m.navigator.sendBeacon(p.v.toString(),"")}catch{}!v&&m.Image&&(new Image().src=p.v,v=!0),v||(p.g=Eu(p.j,null),p.g.ea(p.v)),p.F=Date.now(),ds(p)}_u(c)}function ma(c){c.g&&(ws(c),c.g.cancel(),c.g=null)}function mu(c){ma(c),c.u&&(m.clearTimeout(c.u),c.u=null),ga(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function pa(c){if(!sa(c.h)&&!c.s){c.s=!0;var p=c.Ga;ee||I(),le||(ee(),le=!0),De.add(p,c),c.B=0}}function Ph(c,p){return aa(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=p.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Et(A(c.Ga,c,p),Lo(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new ln(this,this.j,c);let F=this.o;if(this.S&&(F?(F=w(F),D(F,this.S)):F=this.S),this.m!==null||this.O||(U.H=F,F=null),this.P)e:{for(var p=0,v=0;v<this.i.length;v++){t:{var S=this.i[v];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(p+=S,4096<p){p=v;break e}if(p===4096||v===this.i.length-1){p=v+1;break e}}p=1e3}else p=1e3;p=pu(this,U,p),v=En(this.I),We(v,"RID",c),We(v,"CVER",22),this.D&&We(v,"X-HTTP-Session-Id",this.D),As(this,v),F&&(this.O?p="headers="+encodeURIComponent(String(Po(F)))+"&"+p:this.m&&xt(v,this.m,F)),oa(this.h,U),this.Ua&&We(v,"TYPE","init"),this.P?(We(v,"$req",p),We(v,"SID","null"),U.T=!0,Qn(U,v,null)):Qn(U,v,p),this.G=2}}else this.G==3&&(c?ko(this,c):this.i.length==0||sa(this.h)||ko(this))};function ko(c,p){var v;p?v=p.l:v=c.U++;const S=En(c.I);We(S,"SID",c.K),We(S,"RID",v),We(S,"AID",c.T),As(c,S),c.m&&c.o&&xt(S,c.m,c.o),v=new ln(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),p&&(c.i=p.D.concat(c.i)),p=pu(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),oa(c.h,v),Qn(v,S,p)}function As(c,p){c.H&&we(c.H,function(v,S){We(p,S,v)}),c.l&&No({},function(v,S){We(p,S,v)})}function pu(c,p,v){v=Math.min(c.i.length,v);var S=c.l?A(c.l.Na,c.l,c):null;e:{var U=c.i;let F=-1;for(;;){const re=["count="+v];F==-1?0<v?(F=U[0].g,re.push("ofs="+F)):F=0:re.push("ofs="+F);let Ue=!0;for(let Dt=0;Dt<v;Dt++){let ze=U[Dt].g;const Lt=U[Dt].map;if(ze-=F,0>ze)F=Math.max(0,U[Dt].g-100),Ue=!1;else try{li(Lt,re,"req"+ze+"_")}catch{S&&S(Lt)}}if(Ue){S=re.join("&");break e}}}return c=c.i.splice(0,v),p.D=c,S}function gu(c){if(!c.g&&!c.u){c.Y=1;var p=c.Fa;ee||I(),le||(ee(),le=!0),De.add(p,c),c.v=0}}function xo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Et(A(c.Fa,c),Lo(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,yu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Et(A(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),ma(this),yu(this))};function ws(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function yu(c){c.g=new ln(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var p=En(c.qa);We(p,"RID","rpc"),We(p,"SID",c.K),We(p,"AID",c.T),We(p,"CI",c.F?"0":"1"),!c.F&&c.ja&&We(p,"TO",c.ja),We(p,"TYPE","xmlhttp"),As(c,p),c.m&&c.o&&xt(p,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=ys(En(p)),v.m=null,v.P=!0,Vi(v,c)}r.Za=function(){this.C!=null&&(this.C=null,ma(this),xo(this),lt(19))};function ga(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function vu(c,p){var v=null;if(c.g==p){ga(c),ws(c),c.g=null;var S=2}else if(Co(c.h,p))v=p.D,un(c.h,p),S=1;else return;if(c.G!=0){if(p.o)if(S==1){v=p.m?p.m.length:0,p=Date.now()-p.F;var U=c.B;S=hr(),Qe(S,new It(S,v)),pa(c)}else gu(c);else if(U=p.s,U==3||U==0&&0<p.X||!(S==1&&Ph(c,p)||S==2&&xo(c)))switch(v&&0<v.length&&(p=c.h,p.i=p.i.concat(v)),U){case 1:Bi(c,5);break;case 4:Bi(c,10);break;case 3:Bi(c,6);break;default:Bi(c,2)}}}function Lo(c,p){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*p}function Bi(c,p){if(c.j.info("Error code "+p),p==2){var v=A(c.fb,c),S=c.Xa;const U=!S;S=new St(S||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||gs(S,"https"),ys(S),U?_s(S.toString(),v):$n(S.toString(),v)}else lt(2);c.G=0,c.l&&c.l.sa(p),_u(c),mu(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function _u(c){if(c.G=0,c.ka=[],c.l){const p=Ro(c.h);(p.length!=0||c.i.length!=0)&&(X(c.ka,p),X(c.ka,c.i),c.h.i.length=0,G(c.i),c.i.length=0),c.l.ra()}}function Tu(c,p,v){var S=v instanceof St?En(v):new St(v);if(S.g!="")p&&(S.g=p+"."+S.g),gr(S,S.s);else{var U=m.location;S=U.protocol,p=p?p+"."+U.hostname:U.hostname,U=+U.port;var F=new St(null);S&&gs(F,S),p&&(F.g=p),U&&gr(F,U),v&&(F.l=v),S=F}return v=c.D,p=c.ya,v&&p&&We(S,v,p),We(S,"VER",c.la),As(c,S),S}function Eu(c,p,v){if(p&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Ca&&!c.pa?new Ke(new yr({eb:v})):new Ke(c.pa),p.Ha(c.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Su(){}r=Su.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ya(){}ya.prototype.g=function(c,p){return new cn(c,p)};function cn(c,p){Ye.call(this),this.g=new da(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(c?c["X-WebChannel-Client-Profile"]=p.va:c={"X-WebChannel-Client-Profile":p.va}),this.g.S=c,(c=p&&p.Sb)&&!ae(c)&&(this.g.m=c),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!ae(p)&&(this.g.D=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new fi(this)}z(cn,Ye),cn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},cn.prototype.close=function(){Vo(this.g)},cn.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=Kn(c),c=v);p.i.push(new uu(p.Ya++,c)),p.G==3&&pa(p)},cn.prototype.N=function(){this.g.l=null,delete this.j,Vo(this.g),delete this.g,cn.aa.N.call(this)};function bu(c){Mi.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){e:{for(const v in p){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}z(bu,Mi);function Au(){So.call(this),this.status=1}z(Au,So);function fi(c){this.g=c}z(fi,Su),fi.prototype.ua=function(){Qe(this.g,"a")},fi.prototype.ta=function(c){Qe(this.g,new bu(c))},fi.prototype.sa=function(c){Qe(this.g,new Au)},fi.prototype.ra=function(){Qe(this.g,"b")},ya.prototype.createWebChannel=ya.prototype.g,cn.prototype.send=cn.prototype.o,cn.prototype.open=cn.prototype.m,cn.prototype.close=cn.prototype.close,TT=function(){return new ya},_T=function(){return hr()},vT=ii,om={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},mr.NO_ERROR=0,mr.TIMEOUT=8,mr.HTTP_ERROR=6,Vc=mr,Pi.COMPLETE="complete",yT=Pi,Eo.EventType=Oi,Oi.OPEN="a",Oi.CLOSE="b",Oi.ERROR="c",Oi.MESSAGE="d",Ye.prototype.listen=Ye.prototype.K,Rl=Eo,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,gT=Ke}).apply(typeof Rc<"u"?Rc:typeof self<"u"?self:typeof window<"u"?window:{});const d_="@firebase/firestore",m_="4.9.0";/**
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
 */class en{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}en.UNAUTHENTICATED=new en(null),en.GOOGLE_CREDENTIALS=new en("google-credentials-uid"),en.FIRST_PARTY=new en("first-party-uid"),en.MOCK_USER=new en("mock-user");/**
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
 */let po="12.0.0";/**
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
 */const Qs=new km("@firebase/firestore");function Ga(){return Qs.logLevel}function ue(r,...e){if(Qs.logLevel<=ke.DEBUG){const n=e.map(Um);Qs.debug(`Firestore (${po}): ${r}`,...n)}}function or(r,...e){if(Qs.logLevel<=ke.ERROR){const n=e.map(Um);Qs.error(`Firestore (${po}): ${r}`,...n)}}function io(r,...e){if(Qs.logLevel<=ke.WARN){const n=e.map(Um);Qs.warn(`Firestore (${po}): ${r}`,...n)}}function Um(r){if(typeof r=="string")return r;try{/**
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
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
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
 */function Re(r,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,ET(r,s,n)}function ET(r,e,n){let s=`FIRESTORE (${po}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw or(s),new Error(s)}function ft(r,e,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||ET(e,o,s)}function qe(r,e){return r}/**
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
 */const ie={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class me extends Ii{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Qr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class ST{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(en.UNAUTHENTICATED))}shutdown(){}}class CC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class RC{constructor(e){this.t=e,this.currentUser=en.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ft(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,n(y)):Promise.resolve();let u=new Qr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Qr,e.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const y=u;e.enqueueRetryable(async()=>{await y.promise,await o(this.currentUser)})},m=y=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(y=>m(y)),setTimeout(()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Qr)}},0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ft(typeof s.accessToken=="string",31837,{l:s}),new ST(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ft(e===null||typeof e=="string",2055,{h:e}),new en(e)}}class NC{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=en.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class IC{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new NC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(en.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class p_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class DC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ti(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ft(this.o===void 0,3512);const s=u=>{u.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,ue("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new p_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ft(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new p_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function OC(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class zm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=OC(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=e.charAt(o[u]%62))}return s}}function xe(r,e){return r<e?-1:r>e?1:0}function lm(r,e){const n=Math.min(r.length,e.length);for(let s=0;s<n;s++){const o=r.charAt(s),u=e.charAt(s);if(o!==u)return zd(o)===zd(u)?xe(o,u):zd(o)?1:-1}return xe(r.length,e.length)}const MC=55296,PC=57343;function zd(r){const e=r.charCodeAt(0);return e>=MC&&e<=PC}function ro(r,e,n){return r.length===e.length&&r.every((s,o)=>n(s,e[o]))}/**
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
 */const g_="__name__";class _i{constructor(e,n,s){n===void 0?n=0:n>e.length&&Re(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&Re(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return _i.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _i?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const u=_i.compareSegments(e.get(o),n.get(o));if(u!==0)return u}return xe(e.length,n.length)}static compareSegments(e,n){const s=_i.isNumericId(e),o=_i.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?_i.extractNumericId(e).compare(_i.extractNumericId(n)):lm(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Kr.fromString(e.substring(4,e.length-2))}}class at extends _i{construct(e,n,s){return new at(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new me(ie.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new at(n)}static emptyPath(){return new at([])}}const VC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class fn extends _i{construct(e,n,s){return new fn(e,n,s)}static isValidIdentifier(e){return VC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),fn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===g_}static keyField(){return new fn([g_])}static fromServerFormat(e){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new me(ie.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new me(ie.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new me(ie.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new me(ie.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new fn(n)}static emptyPath(){return new fn([])}}/**
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
 */class ve{constructor(e){this.path=e}static fromPath(e){return new ve(at.fromString(e))}static fromName(e){return new ve(at.fromString(e).popFirst(5))}static empty(){return new ve(at.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&at.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return at.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ve(new at(e.slice()))}}/**
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
 */function bT(r,e,n){if(!n)throw new me(ie.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function kC(r,e,n,s){if(e===!0&&s===!0)throw new me(ie.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function y_(r){if(!ve.isDocumentKey(r))throw new me(ie.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function v_(r){if(ve.isDocumentKey(r))throw new me(ie.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function xC(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function LC(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Re(12329,{type:typeof r})}function Ul(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new me(ie.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=LC(r);throw new me(ie.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
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
 */function Rt(r,e){const n={typeString:r};return e&&(n.value=e),n}function Ql(r,e){if(!xC(r))throw new me(ie.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const f=r[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new me(ie.INVALID_ARGUMENT,n);return!0}/**
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
 */const __=-62135596800,T_=1e6;class Ct{static now(){return Ct.fromMillis(Date.now())}static fromDate(e){return Ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*T_);return new Ct(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new me(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new me(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<__)throw new me(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new me(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/T_}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ct._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ql(e,Ct._jsonSchema))return new Ct(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-__;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ct._jsonSchemaVersion="firestore/timestamp/1.0",Ct._jsonSchema={type:Rt("string",Ct._jsonSchemaVersion),seconds:Rt("number"),nanoseconds:Rt("number")};/**
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
 */class Ce{static fromTimestamp(e){return new Ce(e)}static min(){return new Ce(new Ct(0,0))}static max(){return new Ce(new Ct(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const zl=-1;function UC(r,e){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Ce.fromTimestamp(s===1e9?new Ct(n+1,0):new Ct(n,s));return new es(o,ve.empty(),e)}function zC(r){return new es(r.readTime,r.key,zl)}class es{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new es(Ce.min(),ve.empty(),zl)}static max(){return new es(Ce.max(),ve.empty(),zl)}}function jC(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=ve.comparator(r.documentKey,e.documentKey),n!==0?n:xe(r.largestBatchId,e.largestBatchId))}/**
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
 */const BC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function uh(r){if(r.code!==ie.FAILED_PRECONDITION||r.message!==BC)throw r;ue("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Re(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new J((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof J?n:J.resolve(n)}catch(n){return J.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):J.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):J.reject(n)}static resolve(e){return new J((n,s)=>{n(e)})}static reject(e){return new J((n,s)=>{s(e)})}static waitFor(e){return new J((n,s)=>{let o=0,u=0,f=!1;e.forEach(m=>{++o,m.next(()=>{++u,f&&u===o&&n()},y=>s(y))}),f=!0,u===o&&n()})}static or(e){let n=J.resolve(!1);for(const s of e)n=n.next(o=>o?J.resolve(o):s());return n}static forEach(e,n){const s=[];return e.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(e,n){return new J((s,o)=>{const u=e.length,f=new Array(u);let m=0;for(let y=0;y<u;y++){const g=y;n(e[g]).next(T=>{f[g]=T,++m,m===u&&s(f)},T=>o(T))}})}static doWhile(e,n){return new J((s,o)=>{const u=()=>{e()===!0?n().next(()=>{u()},o):s()};u()})}}function HC(r){const e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function go(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class ch{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ch.ce=-1;/**
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
 */const FC=-1;function hh(r){return r==null}function um(r){return r===0&&1/r==-1/0}/**
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
 */const AT="";function YC(r){let e="";for(let n=0;n<r.length;n++)e.length>0&&(e=E_(e)),e=GC(r.get(n),e);return E_(e)}function GC(r,e){let n=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case AT:n+="";break;default:n+=u}}return n}function E_(r){return r+AT+""}/**
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
 */function S_(r){let e=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function $l(r,e){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function XC(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class Tt{constructor(e,n){this.comparator=e,this.root=n||Xt.EMPTY}insert(e,n){return new Tt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xt.BLACK,null,null))}remove(e){return new Tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Nc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Nc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Nc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Nc(this.root,e,this.comparator,!0)}}class Nc{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?s(e.key,n):1,n&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xt{constructor(e,n,s,o,u){this.key=e,this.value=n,this.color=s??Xt.RED,this.left=o??Xt.EMPTY,this.right=u??Xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,u){return new Xt(e??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return Xt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Re(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Re(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Re(27949);return e+(this.isRed()?0:1)}}Xt.EMPTY=null,Xt.RED=!0,Xt.BLACK=!1;Xt.EMPTY=new class{constructor(){this.size=0}get key(){throw Re(57766)}get value(){throw Re(16141)}get color(){throw Re(16727)}get left(){throw Re(29726)}get right(){throw Re(36894)}copy(e,n,s,o,u){return this}insert(e,n,s){return new Xt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class kt{constructor(e){this.comparator=e,this.data=new Tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new b_(this.data.getIterator())}getIteratorFrom(e){return new b_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof kt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new kt(this.comparator);return n.data=e,n}}class b_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Fr{constructor(e){this.fields=e,e.sort(fn.comparator)}static empty(){return new Fr([])}unionWith(e){let n=new kt(fn.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Fr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ro(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class wT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new wT("Invalid base64 string: "+u):u}}(e);return new Kt(n)}static fromUint8Array(e){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(e);return new Kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Kt.EMPTY_BYTE_STRING=new Kt("");const KC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ts(r){if(ft(!!r,39018),typeof r=="string"){let e=0;const n=KC.exec(r);if(ft(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:_t(r.seconds),nanos:_t(r.nanos)}}function _t(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ns(r){return typeof r=="string"?Kt.fromBase64String(r):Kt.fromUint8Array(r)}/**
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
 */const CT="server_timestamp",RT="__type__",NT="__previous_value__",IT="__local_write_time__";function jm(r){var n,s;return((s=(((n=r==null?void 0:r.mapValue)==null?void 0:n.fields)||{})[RT])==null?void 0:s.stringValue)===CT}function fh(r){const e=r.mapValue.fields[NT];return jm(e)?fh(e):e}function jl(r){const e=ts(r.mapValue.fields[IT].timestampValue);return new Ct(e.seconds,e.nanos)}/**
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
 */class QC{constructor(e,n,s,o,u,f,m,y,g,T){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=g,this.isUsingEmulator=T}}const Yc="(default)";class Bl{constructor(e,n){this.projectId=e,this.database=n||Yc}static empty(){return new Bl("","")}get isDefaultDatabase(){return this.database===Yc}isEqual(e){return e instanceof Bl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const $C="__type__",ZC="__max__",Ic={mapValue:{}},WC="__vector__",cm="value";function is(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?jm(r)?4:eR(r)?9007199254740991:JC(r)?10:11:Re(28295,{value:r})}function Ri(r,e){if(r===e)return!0;const n=is(r);if(n!==is(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return jl(r).isEqual(jl(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=ts(o.timestampValue),m=ts(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return ns(o.bytesValue).isEqual(ns(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return _t(o.geoPointValue.latitude)===_t(u.geoPointValue.latitude)&&_t(o.geoPointValue.longitude)===_t(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return _t(o.integerValue)===_t(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=_t(o.doubleValue),m=_t(u.doubleValue);return f===m?um(f)===um(m):isNaN(f)&&isNaN(m)}return!1}(r,e);case 9:return ro(r.arrayValue.values||[],e.arrayValue.values||[],Ri);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(S_(f)!==S_(m))return!1;for(const y in f)if(f.hasOwnProperty(y)&&(m[y]===void 0||!Ri(f[y],m[y])))return!1;return!0}(r,e);default:return Re(52216,{left:r})}}function ql(r,e){return(r.values||[]).find(n=>Ri(n,e))!==void 0}function so(r,e){if(r===e)return 0;const n=is(r),s=is(e);if(n!==s)return xe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return xe(r.booleanValue,e.booleanValue);case 2:return function(u,f){const m=_t(u.integerValue||u.doubleValue),y=_t(f.integerValue||f.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1}(r,e);case 3:return A_(r.timestampValue,e.timestampValue);case 4:return A_(jl(r),jl(e));case 5:return lm(r.stringValue,e.stringValue);case 6:return function(u,f){const m=ns(u),y=ns(f);return m.compareTo(y)}(r.bytesValue,e.bytesValue);case 7:return function(u,f){const m=u.split("/"),y=f.split("/");for(let g=0;g<m.length&&g<y.length;g++){const T=xe(m[g],y[g]);if(T!==0)return T}return xe(m.length,y.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,f){const m=xe(_t(u.latitude),_t(f.latitude));return m!==0?m:xe(_t(u.longitude),_t(f.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return w_(r.arrayValue,e.arrayValue);case 10:return function(u,f){var A,x,z,G;const m=u.fields||{},y=f.fields||{},g=(A=m[cm])==null?void 0:A.arrayValue,T=(x=y[cm])==null?void 0:x.arrayValue,b=xe(((z=g==null?void 0:g.values)==null?void 0:z.length)||0,((G=T==null?void 0:T.values)==null?void 0:G.length)||0);return b!==0?b:w_(g,T)}(r.mapValue,e.mapValue);case 11:return function(u,f){if(u===Ic.mapValue&&f===Ic.mapValue)return 0;if(u===Ic.mapValue)return 1;if(f===Ic.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),g=f.fields||{},T=Object.keys(g);y.sort(),T.sort();for(let b=0;b<y.length&&b<T.length;++b){const A=lm(y[b],T[b]);if(A!==0)return A;const x=so(m[y[b]],g[T[b]]);if(x!==0)return x}return xe(y.length,T.length)}(r.mapValue,e.mapValue);default:throw Re(23264,{he:n})}}function A_(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return xe(r,e);const n=ts(r),s=ts(e),o=xe(n.seconds,s.seconds);return o!==0?o:xe(n.nanos,s.nanos)}function w_(r,e){const n=r.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=so(n[o],s[o]);if(u)return u}return xe(n.length,s.length)}function ao(r){return hm(r)}function hm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=ts(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return ns(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return ve.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=hm(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${hm(n.fields[f])}`;return o+"}"}(r.mapValue):Re(61005,{value:r})}function kc(r){switch(is(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=fh(r);return e?16+kc(e):16;case 5:return 2*r.stringValue.length;case 6:return ns(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+kc(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return $l(s.fields,(u,f)=>{o+=u.length+kc(f)}),o}(r.mapValue);default:throw Re(13486,{value:r})}}function fm(r){return!!r&&"integerValue"in r}function Bm(r){return!!r&&"arrayValue"in r}function C_(r){return!!r&&"nullValue"in r}function R_(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function jd(r){return!!r&&"mapValue"in r}function JC(r){var n,s;return((s=(((n=r==null?void 0:r.mapValue)==null?void 0:n.fields)||{})[$C])==null?void 0:s.stringValue)===WC}function Ml(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return $l(r.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ml(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ml(r.arrayValue.values[n]);return e}return{...r}}function eR(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===ZC}/**
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
 */class Ei{constructor(e){this.value=e}static empty(){return new Ei({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!jd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ml(n)}setAll(e){let n=fn.emptyPath(),s={},o=[];e.forEach((f,m)=>{if(!n.isImmediateParentOf(m)){const y=this.getFieldsMap(n);this.applyChanges(y,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=Ml(f):o.push(m.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(e){const n=this.field(e.popLast());jd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ri(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];jd(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){$l(n,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new Ei(Ml(this.value))}}/**
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
 */class tn{constructor(e,n,s,o,u,f,m){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(e){return new tn(e,0,Ce.min(),Ce.min(),Ce.min(),Ei.empty(),0)}static newFoundDocument(e,n,s,o){return new tn(e,1,n,Ce.min(),s,o,0)}static newNoDocument(e,n){return new tn(e,2,n,Ce.min(),Ce.min(),Ei.empty(),0)}static newUnknownDocument(e,n){return new tn(e,3,n,Ce.min(),Ce.min(),Ei.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ei.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ei.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gc{constructor(e,n){this.position=e,this.inclusive=n}}function N_(r,e,n){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],f=r.position[o];if(u.field.isKeyField()?s=ve.comparator(ve.fromName(f.referenceValue),n.key):s=so(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function I_(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!Ri(r.position[n],e.position[n]))return!1;return!0}/**
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
 */class Xc{constructor(e,n="asc"){this.field=e,this.dir=n}}function tR(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class DT{}class Vt extends DT{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new iR(e,n,s):n==="array-contains"?new aR(e,s):n==="in"?new oR(e,s):n==="not-in"?new lR(e,s):n==="array-contains-any"?new uR(e,s):new Vt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new rR(e,s):new sR(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(so(n,this.value)):n!==null&&is(this.value)===is(n)&&this.matchesComparison(so(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Re(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ni extends DT{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Ni(e,n)}matches(e){return OT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function OT(r){return r.op==="and"}function MT(r){return nR(r)&&OT(r)}function nR(r){for(const e of r.filters)if(e instanceof Ni)return!1;return!0}function dm(r){if(r instanceof Vt)return r.field.canonicalString()+r.op.toString()+ao(r.value);if(MT(r))return r.filters.map(e=>dm(e)).join(",");{const e=r.filters.map(n=>dm(n)).join(",");return`${r.op}(${e})`}}function PT(r,e){return r instanceof Vt?function(s,o){return o instanceof Vt&&s.op===o.op&&s.field.isEqual(o.field)&&Ri(s.value,o.value)}(r,e):r instanceof Ni?function(s,o){return o instanceof Ni&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,m)=>u&&PT(f,o.filters[m]),!0):!1}(r,e):void Re(19439)}function VT(r){return r instanceof Vt?function(n){return`${n.field.canonicalString()} ${n.op} ${ao(n.value)}`}(r):r instanceof Ni?function(n){return n.op.toString()+" {"+n.getFilters().map(VT).join(" ,")+"}"}(r):"Filter"}class iR extends Vt{constructor(e,n,s){super(e,n,s),this.key=ve.fromName(s.referenceValue)}matches(e){const n=ve.comparator(e.key,this.key);return this.matchesComparison(n)}}class rR extends Vt{constructor(e,n){super(e,"in",n),this.keys=kT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class sR extends Vt{constructor(e,n){super(e,"not-in",n),this.keys=kT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kT(r,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(s=>ve.fromName(s.referenceValue))}class aR extends Vt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bm(n)&&ql(n.arrayValue,this.value)}}class oR extends Vt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ql(this.value.arrayValue,n)}}class lR extends Vt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ql(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ql(this.value.arrayValue,n)}}class uR extends Vt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ql(this.value.arrayValue,s))}}/**
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
 */class cR{constructor(e,n=null,s=[],o=[],u=null,f=null,m=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Te=null}}function D_(r,e=null,n=[],s=[],o=null,u=null,f=null){return new cR(r,e,n,s,o,u,f)}function qm(r){const e=qe(r);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>dm(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),hh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ao(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ao(s)).join(",")),e.Te=n}return e.Te}function Hm(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!tR(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!PT(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!I_(r.startAt,e.startAt)&&I_(r.endAt,e.endAt)}function mm(r){return ve.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class dh{constructor(e,n=null,s=[],o=[],u=null,f="F",m=null,y=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function hR(r,e,n,s,o,u,f,m){return new dh(r,e,n,s,o,u,f,m)}function Fm(r){return new dh(r)}function O_(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function fR(r){return r.collectionGroup!==null}function Pl(r){const e=qe(r);if(e.Ie===null){e.Ie=[];const n=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),n.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new kt(fn.comparator);return f.filters.forEach(y=>{y.getFlattenedFilters().forEach(g=>{g.isInequality()&&(m=m.add(g.field))})}),m})(e).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Xc(u,s))}),n.has(fn.keyField().canonicalString())||e.Ie.push(new Xc(fn.keyField(),s))}return e.Ie}function bi(r){const e=qe(r);return e.Ee||(e.Ee=dR(e,Pl(r))),e.Ee}function dR(r,e){if(r.limitType==="F")return D_(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Xc(o.field,u)});const n=r.endAt?new Gc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Gc(r.startAt.position,r.startAt.inclusive):null;return D_(r.path,r.collectionGroup,e,r.filters,r.limit,n,s)}}function pm(r,e,n){return new dh(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function mh(r,e){return Hm(bi(r),bi(e))&&r.limitType===e.limitType}function xT(r){return`${qm(bi(r))}|lt:${r.limitType}`}function Xa(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>VT(o)).join(", ")}]`),hh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>ao(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>ao(o)).join(",")),`Target(${s})`}(bi(r))}; limitType=${r.limitType})`}function ph(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ve.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of Pl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(f,m,y){const g=N_(f,m,y);return f.inclusive?g<=0:g<0}(s.startAt,Pl(s),o)||s.endAt&&!function(f,m,y){const g=N_(f,m,y);return f.inclusive?g>=0:g>0}(s.endAt,Pl(s),o))}(r,e)}function mR(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function LT(r){return(e,n)=>{let s=!1;for(const o of Pl(r)){const u=pR(o,e,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function pR(r,e,n){const s=r.field.isKeyField()?ve.comparator(e.key,n.key):function(u,f,m){const y=f.data.field(u),g=m.data.field(u);return y!==null&&g!==null?so(y,g):Re(42886)}(r.field,e,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Re(19790,{direction:r.dir})}}/**
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
 */class ea{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){$l(this.inner,(n,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return XC(this.inner)}size(){return this.innerSize}}/**
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
 */const gR=new Tt(ve.comparator);function rs(){return gR}const UT=new Tt(ve.comparator);function Nl(...r){let e=UT;for(const n of r)e=e.insert(n.key,n);return e}function yR(r){let e=UT;return r.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function qs(){return Vl()}function zT(){return Vl()}function Vl(){return new ea(r=>r.toString(),(r,e)=>r.isEqual(e))}const vR=new kt(ve.comparator);function Fe(...r){let e=vR;for(const n of r)e=e.add(n);return e}const _R=new kt(xe);function TR(){return _R}/**
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
 */function ER(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:um(e)?"-0":e}}function SR(r){return{integerValue:""+r}}/**
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
 */class gh{constructor(){this._=void 0}}function bR(r,e,n){return r instanceof gm?function(o,u){const f={fields:{[RT]:{stringValue:CT},[IT]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&jm(u)&&(u=fh(u)),u&&(f.fields[NT]=u),{mapValue:f}}(n,e):r instanceof Kc?jT(r,e):r instanceof Qc?BT(r,e):function(o,u){const f=wR(o,u),m=M_(f)+M_(o.Ae);return fm(f)&&fm(o.Ae)?SR(m):ER(o.serializer,m)}(r,e)}function AR(r,e,n){return r instanceof Kc?jT(r,e):r instanceof Qc?BT(r,e):n}function wR(r,e){return r instanceof ym?function(s){return fm(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class gm extends gh{}class Kc extends gh{constructor(e){super(),this.elements=e}}function jT(r,e){const n=qT(e);for(const s of r.elements)n.some(o=>Ri(o,s))||n.push(s);return{arrayValue:{values:n}}}class Qc extends gh{constructor(e){super(),this.elements=e}}function BT(r,e){let n=qT(e);for(const s of r.elements)n=n.filter(o=>!Ri(o,s));return{arrayValue:{values:n}}}class ym extends gh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function M_(r){return _t(r.integerValue||r.doubleValue)}function qT(r){return Bm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function CR(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof Kc&&o instanceof Kc||s instanceof Qc&&o instanceof Qc?ro(s.elements,o.elements,Ri):s instanceof ym&&o instanceof ym?Ri(s.Ae,o.Ae):s instanceof gm&&o instanceof gm}(r.transform,e.transform)}class Ys{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ys}static exists(e){return new Ys(void 0,e)}static updateTime(e){return new Ys(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xc(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Ym{}function HT(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new NR(r.key,Ys.none()):new Gm(r.key,r.data,Ys.none());{const n=r.data,s=Ei.empty();let o=new kt(fn.comparator);for(let u of e.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new yh(r.key,s,new Fr(o.toArray()),Ys.none())}}function RR(r,e,n){r instanceof Gm?function(o,u,f){const m=o.value.clone(),y=V_(o.fieldTransforms,u,f.transformResults);m.setAll(y),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(r,e,n):r instanceof yh?function(o,u,f){if(!xc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=V_(o.fieldTransforms,u,f.transformResults),y=u.data;y.setAll(FT(o)),y.setAll(m),u.convertToFoundDocument(f.version,y).setHasCommittedMutations()}(r,e,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,e,n)}function kl(r,e,n,s){return r instanceof Gm?function(u,f,m,y){if(!xc(u.precondition,f))return m;const g=u.value.clone(),T=k_(u.fieldTransforms,y,f);return g.setAll(T),f.convertToFoundDocument(f.version,g).setHasLocalMutations(),null}(r,e,n,s):r instanceof yh?function(u,f,m,y){if(!xc(u.precondition,f))return m;const g=k_(u.fieldTransforms,y,f),T=f.data;return T.setAll(FT(u)),T.setAll(g),f.convertToFoundDocument(f.version,T).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(b=>b.field))}(r,e,n,s):function(u,f,m){return xc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(r,e,n)}function P_(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&ro(s,o,(u,f)=>CR(u,f))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Gm extends Ym{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class yh extends Ym{constructor(e,n,s,o,u=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function FT(r){const e=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);e.set(n,s)}}),e}function V_(r,e,n){const s=new Map;ft(r.length===n.length,32656,{Re:n.length,Ve:r.length});for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=e.data.field(u.field);s.set(u.field,AR(f,m,n[o]))}return s}function k_(r,e,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,bR(u,f,e))}return s}class NR extends Ym{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class IR{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&RR(u,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=kl(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=kl(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=zT();return this.mutations.forEach(o=>{const u=e.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const y=HT(f,m);y!==null&&s.set(o.key,y),f.isValidDocument()||f.convertToNoDocument(Ce.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Fe())}isEqual(e){return this.batchId===e.batchId&&ro(this.mutations,e.mutations,(n,s)=>P_(n,s))&&ro(this.baseMutations,e.baseMutations,(n,s)=>P_(n,s))}}/**
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
 */class DR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class OR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var wt,Be;function YT(r){if(r===void 0)return or("GRPC error has no .code"),ie.UNKNOWN;switch(r){case wt.OK:return ie.OK;case wt.CANCELLED:return ie.CANCELLED;case wt.UNKNOWN:return ie.UNKNOWN;case wt.DEADLINE_EXCEEDED:return ie.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return ie.RESOURCE_EXHAUSTED;case wt.INTERNAL:return ie.INTERNAL;case wt.UNAVAILABLE:return ie.UNAVAILABLE;case wt.UNAUTHENTICATED:return ie.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return ie.INVALID_ARGUMENT;case wt.NOT_FOUND:return ie.NOT_FOUND;case wt.ALREADY_EXISTS:return ie.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return ie.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return ie.FAILED_PRECONDITION;case wt.ABORTED:return ie.ABORTED;case wt.OUT_OF_RANGE:return ie.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return ie.UNIMPLEMENTED;case wt.DATA_LOSS:return ie.DATA_LOSS;default:return Re(39323,{code:r})}}(Be=wt||(wt={}))[Be.OK=0]="OK",Be[Be.CANCELLED=1]="CANCELLED",Be[Be.UNKNOWN=2]="UNKNOWN",Be[Be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Be[Be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Be[Be.NOT_FOUND=5]="NOT_FOUND",Be[Be.ALREADY_EXISTS=6]="ALREADY_EXISTS",Be[Be.PERMISSION_DENIED=7]="PERMISSION_DENIED",Be[Be.UNAUTHENTICATED=16]="UNAUTHENTICATED",Be[Be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Be[Be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Be[Be.ABORTED=10]="ABORTED",Be[Be.OUT_OF_RANGE=11]="OUT_OF_RANGE",Be[Be.UNIMPLEMENTED=12]="UNIMPLEMENTED",Be[Be.INTERNAL=13]="INTERNAL",Be[Be.UNAVAILABLE=14]="UNAVAILABLE",Be[Be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function MR(){return new TextEncoder}/**
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
 */const PR=new Kr([4294967295,4294967295],0);function x_(r){const e=MR().encode(r),n=new pT;return n.update(e),new Uint8Array(n.digest())}function L_(r){const e=new DataView(r.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Kr([n,s],0),new Kr([o,u],0)]}class Xm{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Il(`Invalid padding: ${n}`);if(s<0)throw new Il(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Il(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Il(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Kr.fromNumber(this.ge)}ye(e,n,s){let o=e.add(n.multiply(Kr.fromNumber(s)));return o.compare(PR)===1&&(o=new Kr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=x_(e),[s,o]=L_(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);if(!this.we(f))return!1}return!0}static create(e,n,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),f=new Xm(u,o,n);return s.forEach(m=>f.insert(m)),f}insert(e){if(this.ge===0)return;const n=x_(e),[s,o]=L_(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);this.Se(f)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Il extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class vh{constructor(e,n,s,o,u){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const o=new Map;return o.set(e,Zl.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new vh(Ce.min(),o,new Tt(xe),rs(),Fe())}}class Zl{constructor(e,n,s,o,u){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Zl(s,n,Fe(),Fe(),Fe())}}/**
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
 */class Lc{constructor(e,n,s,o){this.be=e,this.removedTargetIds=n,this.key=s,this.De=o}}class GT{constructor(e,n){this.targetId=e,this.Ce=n}}class XT{constructor(e,n,s=Kt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=o}}class U_{constructor(){this.ve=0,this.Fe=z_(),this.Me=Kt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Fe(),n=Fe(),s=Fe();return this.Fe.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:Re(38017,{changeType:u})}}),new Zl(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=z_()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ft(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class VR{constructor(e){this.Ge=e,this.ze=new Map,this.je=rs(),this.Je=Dc(),this.He=Dc(),this.Ye=new Tt(xe)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:Re(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((s,o)=>{this.rt(o)&&n(o)})}st(e){const n=e.targetId,s=e.Ce.count,o=this.ot(n);if(o){const u=o.target;if(mm(u))if(s===0){const f=new ve(u.path);this.et(n,f,tn.newNoDocument(f,Ce.min()))}else ft(s===1,20013,{expectedCount:s});else{const f=this._t(n);if(f!==s){const m=this.ut(e),y=m?this.ct(m,e,f):1;if(y!==0){this.it(n);const g=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,g)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=ns(s).toUint8Array()}catch(y){if(y instanceof wT)return io("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new Xm(f,o,u)}catch(y){return io(y instanceof Il?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.ge===0?null:m}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const f=this.Ge.ht(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(n,u,null),o++)}),o}Tt(e){const n=new Map;this.ze.forEach((u,f)=>{const m=this.ot(f);if(m){if(u.current&&mm(m.target)){const y=new ve(m.target.path);this.It(y).has(f)||this.Et(f,y)||this.et(f,y,tn.newNoDocument(y,e))}u.Be&&(n.set(f,u.ke()),u.qe())}});let s=Fe();this.He.forEach((u,f)=>{let m=!0;f.forEachWhile(y=>{const g=this.ot(y);return!g||g.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.je.forEach((u,f)=>f.setReadTime(e));const o=new vh(e,n,this.Ye,this.je,s);return this.je=rs(),this.Je=Dc(),this.He=Dc(),this.Ye=new Tt(xe),o}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,n)?o.Qe(n,1):o.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new U_,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new kt(xe),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new kt(xe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||ue("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new U_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Dc(){return new Tt(ve.comparator)}function z_(){return new Tt(ve.comparator)}const kR={asc:"ASCENDING",desc:"DESCENDING"},xR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},LR={and:"AND",or:"OR"};class UR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function vm(r,e){return r.useProto3Json||hh(e)?e:{value:e}}function zR(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jR(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Za(r){return ft(!!r,49232),Ce.fromTimestamp(function(n){const s=ts(n);return new Ct(s.seconds,s.nanos)}(r))}function BR(r,e){return _m(r,e).canonicalString()}function _m(r,e){const n=function(o){return new at(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?n:n.child(e)}function KT(r){const e=at.fromString(r);return ft(JT(e),10190,{key:e.toString()}),e}function Bd(r,e){const n=KT(e);if(n.get(1)!==r.databaseId.projectId)throw new me(ie.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new me(ie.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ve($T(n))}function QT(r,e){return BR(r.databaseId,e)}function qR(r){const e=KT(r);return e.length===4?at.emptyPath():$T(e)}function j_(r){return new at(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function $T(r){return ft(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function HR(r,e){let n;if("targetChange"in e){e.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Re(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(g,T){return g.useProto3Json?(ft(T===void 0||typeof T=="string",58123),Kt.fromBase64String(T||"")):(ft(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),Kt.fromUint8Array(T||new Uint8Array))}(r,e.targetChange.resumeToken),f=e.targetChange.cause,m=f&&function(g){const T=g.code===void 0?ie.UNKNOWN:YT(g.code);return new me(T,g.message||"")}(f);n=new XT(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Bd(r,s.document.name),u=Za(s.document.updateTime),f=s.document.createTime?Za(s.document.createTime):Ce.min(),m=new Ei({mapValue:{fields:s.document.fields}}),y=tn.newFoundDocument(o,u,f,m),g=s.targetIds||[],T=s.removedTargetIds||[];n=new Lc(g,T,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Bd(r,s.document),u=s.readTime?Za(s.readTime):Ce.min(),f=tn.newNoDocument(o,u),m=s.removedTargetIds||[];n=new Lc([],m,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Bd(r,s.document),u=s.removedTargetIds||[];n=new Lc([],u,o,null)}else{if(!("filter"in e))return Re(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new OR(o,u),m=s.targetId;n=new GT(m,f)}}return n}function FR(r,e){return{documents:[QT(r,e.path)]}}function YR(r,e){const n={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=QT(r,o);const u=function(g){if(g.length!==0)return WT(Ni.create(g,"and"))}(e.filters);u&&(n.structuredQuery.where=u);const f=function(g){if(g.length!==0)return g.map(T=>function(A){return{field:Ka(A.field),direction:KR(A.dir)}}(T))}(e.orderBy);f&&(n.structuredQuery.orderBy=f);const m=vm(r,e.limit);return m!==null&&(n.structuredQuery.limit=m),e.startAt&&(n.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ft:n,parent:o}}function GR(r){let e=qR(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){ft(s===1,65062);const T=n.from[0];T.allDescendants?o=T.collectionId:e=e.child(T.collectionId)}let u=[];n.where&&(u=function(b){const A=ZT(b);return A instanceof Ni&&MT(A)?A.getFilters():[A]}(n.where));let f=[];n.orderBy&&(f=function(b){return b.map(A=>function(z){return new Xc(Qa(z.field),function(X){switch(X){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(z.direction))}(A))}(n.orderBy));let m=null;n.limit&&(m=function(b){let A;return A=typeof b=="object"?b.value:b,hh(A)?null:A}(n.limit));let y=null;n.startAt&&(y=function(b){const A=!!b.before,x=b.values||[];return new Gc(x,A)}(n.startAt));let g=null;return n.endAt&&(g=function(b){const A=!b.before,x=b.values||[];return new Gc(x,A)}(n.endAt)),hR(e,o,f,u,m,"F",y,g)}function XR(r,e){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Re(28987,{purpose:o})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ZT(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Qa(n.unaryFilter.field);return Vt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Qa(n.unaryFilter.field);return Vt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Qa(n.unaryFilter.field);return Vt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Qa(n.unaryFilter.field);return Vt.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Re(61313);default:return Re(60726)}}(r):r.fieldFilter!==void 0?function(n){return Vt.create(Qa(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Re(58110);default:return Re(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return Ni.create(n.compositeFilter.filters.map(s=>ZT(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Re(1026)}}(n.compositeFilter.op))}(r):Re(30097,{filter:r})}function KR(r){return kR[r]}function QR(r){return xR[r]}function $R(r){return LR[r]}function Ka(r){return{fieldPath:r.canonicalString()}}function Qa(r){return fn.fromServerFormat(r.fieldPath)}function WT(r){return r instanceof Vt?function(n){if(n.op==="=="){if(R_(n.value))return{unaryFilter:{field:Ka(n.field),op:"IS_NAN"}};if(C_(n.value))return{unaryFilter:{field:Ka(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(R_(n.value))return{unaryFilter:{field:Ka(n.field),op:"IS_NOT_NAN"}};if(C_(n.value))return{unaryFilter:{field:Ka(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ka(n.field),op:QR(n.op),value:n.value}}}(r):r instanceof Ni?function(n){const s=n.getFilters().map(o=>WT(o));return s.length===1?s[0]:{compositeFilter:{op:$R(n.op),filters:s}}}(r):Re(54877,{filter:r})}function JT(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Yr{constructor(e,n,s,o,u=Ce.min(),f=Ce.min(),m=Kt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new Yr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class ZR{constructor(e){this.yt=e}}function WR(r){const e=GR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?pm(e,e.limit,"L"):e}/**
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
 */class JR{constructor(){this.Cn=new e2}addToCollectionParentIndex(e,n){return this.Cn.add(n),J.resolve()}getCollectionParents(e,n){return J.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return J.resolve()}deleteFieldIndex(e,n){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,n){return J.resolve()}getDocumentsMatchingTarget(e,n){return J.resolve(null)}getIndexType(e,n){return J.resolve(0)}getFieldIndexes(e,n){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,n){return J.resolve(es.min())}getMinOffsetFromCollectionGroup(e,n){return J.resolve(es.min())}updateCollectionGroup(e,n,s){return J.resolve()}updateIndexEntries(e,n){return J.resolve()}}class e2{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new kt(at.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new kt(at.comparator)).toArray()}}/**
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
 */const B_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},eE=41943040;class yn{static withCacheSize(e){return new yn(e,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */yn.DEFAULT_COLLECTION_PERCENTILE=10,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yn.DEFAULT=new yn(eE,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yn.DISABLED=new yn(-1,0,0);/**
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
 */class oo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new oo(0)}static cr(){return new oo(-1)}}/**
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
 */const q_="LruGarbageCollector",t2=1048576;function H_([r,e],[n,s]){const o=xe(r,n);return o===0?xe(e,s):o}class n2{constructor(e){this.Ir=e,this.buffer=new kt(H_),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();H_(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class i2{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ue(q_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){go(n)?ue(q_,"Ignoring IndexedDB error during garbage collection: ",n):await uh(n)}await this.Vr(3e5)})}}class r2{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return J.resolve(ch.ce);const s=new n2(n);return this.mr.forEachTarget(e,o=>s.Ar(o.sequenceNumber)).next(()=>this.mr.pr(e,o=>s.Ar(o))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(B_)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),B_):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,o,u,f,m,y,g;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),o=this.params.maximumSequenceNumbersToCollect):o=b,f=Date.now(),this.nthSequenceNumber(e,o))).next(b=>(s=b,m=Date.now(),this.removeTargets(e,s,n))).next(b=>(u=b,y=Date.now(),this.removeOrphanedDocuments(e,s))).next(b=>(g=Date.now(),Ga()<=ke.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-T}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${b} documents in `+(g-y)+`ms
Total Duration: ${g-T}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:b})))}}function s2(r,e){return new r2(r,e)}/**
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
 */class a2{constructor(){this.changes=new ea(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?J.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class o2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class l2{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,n))).next(o=>(s!==null&&kl(s.mutation,o,Fr.empty(),Ct.now()),o))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Fe()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Fe()){const o=qs();return this.populateOverlays(e,o,n).next(()=>this.computeViews(e,n,o,s).next(u=>{let f=Nl();return u.forEach((m,y)=>{f=f.insert(m,y.overlayedDocument)}),f}))}getOverlayedDocuments(e,n){const s=qs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Fe()))}populateOverlays(e,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((f,m)=>{n.set(f,m)})})}computeViews(e,n,s,o){let u=rs();const f=Vl(),m=function(){return Vl()}();return n.forEach((y,g)=>{const T=s.get(g.key);o.has(g.key)&&(T===void 0||T.mutation instanceof yh)?u=u.insert(g.key,g):T!==void 0?(f.set(g.key,T.mutation.getFieldMask()),kl(T.mutation,g,T.mutation.getFieldMask(),Ct.now())):f.set(g.key,Fr.empty())}),this.recalculateAndSaveOverlays(e,u).next(y=>(y.forEach((g,T)=>f.set(g,T)),n.forEach((g,T)=>m.set(g,new o2(T,f.get(g)??null))),m))}recalculateAndSaveOverlays(e,n){const s=Vl();let o=new Tt((f,m)=>f-m),u=Fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(f=>{for(const m of f)m.keys().forEach(y=>{const g=n.get(y);if(g===null)return;let T=s.get(y)||Fr.empty();T=m.applyToLocalView(g,T),s.set(y,T);const b=(o.get(m.batchId)||Fe()).add(y);o=o.insert(m.batchId,b)})}).next(()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),g=y.key,T=y.value,b=zT();T.forEach(A=>{if(!u.has(A)){const x=HT(n.get(A),s.get(A));x!==null&&b.set(A,x),u=u.add(A)}}),f.push(this.documentOverlayCache.saveOverlays(e,g,b))}return J.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,o){return function(f){return ve.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):fR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-u.size):J.resolve(qs());let m=zl,y=u;return f.next(g=>J.forEach(g,(T,b)=>(m<b.largestBatchId&&(m=b.largestBatchId),u.get(T)?J.resolve():this.remoteDocumentCache.getEntry(e,T).next(A=>{y=y.insert(T,A)}))).next(()=>this.populateOverlays(e,g,u)).next(()=>this.computeViews(e,y,g,Fe())).next(T=>({batchId:m,changes:yR(T)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ve(n)).next(s=>{let o=Nl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const u=n.collectionGroup;let f=Nl();return this.indexManager.getCollectionParents(e,u).next(m=>J.forEach(m,y=>{const g=function(b,A){return new dh(A,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(n,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,g,s,o).next(T=>{T.forEach((b,A)=>{f=f.insert(b,A)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(e,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,u,o))).next(f=>{u.forEach((y,g)=>{const T=g.getKey();f.get(T)===null&&(f=f.insert(T,tn.newInvalidDocument(T)))});let m=Nl();return f.forEach((y,g)=>{const T=u.get(y);T!==void 0&&kl(T.mutation,g,Fr.empty(),Ct.now()),ph(n,g)&&(m=m.insert(y,g))}),m})}}/**
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
 */class u2{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return J.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:Za(o.createTime)}}(n)),J.resolve()}getNamedQuery(e,n){return J.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(o){return{name:o.name,query:WR(o.bundledQuery),readTime:Za(o.readTime)}}(n)),J.resolve()}}/**
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
 */class c2{constructor(){this.overlays=new Tt(ve.comparator),this.qr=new Map}getOverlay(e,n){return J.resolve(this.overlays.get(n))}getOverlays(e,n){const s=qs();return J.forEach(n,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((o,u)=>{this.St(e,n,u)}),J.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.qr.delete(s)),J.resolve()}getOverlaysForCollection(e,n,s){const o=qs(),u=n.length+1,f=new ve(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const y=m.getNext().value,g=y.getKey();if(!n.isPrefixOf(g.path))break;g.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return J.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let u=new Tt((g,T)=>g-T);const f=this.overlays.getIterator();for(;f.hasNext();){const g=f.getNext().value;if(g.getKey().getCollectionGroup()===n&&g.largestBatchId>s){let T=u.get(g.largestBatchId);T===null&&(T=qs(),u=u.insert(g.largestBatchId,T)),T.set(g.getKey(),g)}}const m=qs(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach((g,T)=>m.set(g,T)),!(m.size()>=o)););return J.resolve(m)}St(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new DR(n,s));let u=this.qr.get(n);u===void 0&&(u=Fe(),this.qr.set(n,u)),this.qr.set(n,u.add(s.key))}}/**
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
 */class h2{constructor(){this.sessionToken=Kt.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,J.resolve()}}/**
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
 */class Km{constructor(){this.Qr=new kt(Bt.$r),this.Ur=new kt(Bt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new Bt(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Gr(new Bt(e,n))}zr(e,n){e.forEach(s=>this.removeReference(s,n))}jr(e){const n=new ve(new at([])),s=new Bt(n,e),o=new Bt(n,e+1),u=[];return this.Ur.forEachInRange([s,o],f=>{this.Gr(f),u.push(f.key)}),u}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ve(new at([])),s=new Bt(n,e),o=new Bt(n,e+1);let u=Fe();return this.Ur.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(e){const n=new Bt(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Bt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ve.comparator(e.key,n.key)||xe(e.Yr,n.Yr)}static Kr(e,n){return xe(e.Yr,n.Yr)||ve.comparator(e.key,n.key)}}/**
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
 */class f2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new kt(Bt.$r)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new IR(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Zr=this.Zr.add(new Bt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return J.resolve(f)}lookupMutationBatch(e,n){return J.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.ei(s),u=o<0?0:o;return J.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?FC:this.tr-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Bt(n,0),o=new Bt(n,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],f=>{const m=this.Xr(f.Yr);u.push(m)}),J.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new kt(xe);return n.forEach(o=>{const u=new Bt(o,0),f=new Bt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,f],m=>{s=s.add(m.Yr)})}),J.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let u=s;ve.isDocumentKey(u)||(u=u.child(""));const f=new Bt(new ve(u),0);let m=new kt(xe);return this.Zr.forEachWhile(y=>{const g=y.key.path;return!!s.isPrefixOf(g)&&(g.length===o&&(m=m.add(y.Yr)),!0)},f),J.resolve(this.ti(m))}ti(e){const n=[];return e.forEach(s=>{const o=this.Xr(s);o!==null&&n.push(o)}),n}removeMutationBatch(e,n){ft(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return J.forEach(n.mutations,o=>{const u=new Bt(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Zr=s})}ir(e){}containsKey(e,n){const s=new Bt(n,0),o=this.Zr.firstAfterOrEqual(s);return J.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class d2{constructor(e){this.ri=e,this.docs=function(){return new Tt(ve.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return J.resolve(s?s.document.mutableCopy():tn.newInvalidDocument(n))}getEntries(e,n){let s=rs();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():tn.newInvalidDocument(o))}),J.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let u=rs();const f=n.path,m=new ve(f.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:g,value:{document:T}}=y.getNext();if(!f.isPrefixOf(g.path))break;g.path.length>f.length+1||jC(zC(T),s)<=0||(o.has(T.key)||ph(n,T))&&(u=u.insert(T.key,T.mutableCopy()))}return J.resolve(u)}getAllFromCollectionGroup(e,n,s,o){Re(9500)}ii(e,n){return J.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new m2(this)}getSize(e){return J.resolve(this.size)}}class m2 extends a2{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)}),J.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class p2{constructor(e){this.persistence=e,this.si=new ea(n=>qm(n),Hm),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.oi=0,this._i=new Km,this.targetCount=0,this.ai=oo.ur()}forEachTarget(e,n){return this.si.forEach((s,o)=>n(o)),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),J.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new oo(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,J.resolve()}updateTargetData(e,n){return this.Pr(n),J.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,n,s){let o=0;const u=[];return this.si.forEach((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.si.delete(f),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),J.waitFor(u).next(()=>o)}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return J.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),J.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(e,f))}),J.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),J.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return J.resolve(s)}containsKey(e,n){return J.resolve(this._i.containsKey(n))}}/**
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
 */class tE{constructor(e,n){this.ui={},this.overlays={},this.ci=new ch(0),this.li=!1,this.li=!0,this.hi=new h2,this.referenceDelegate=e(this),this.Pi=new p2(this),this.indexManager=new JR,this.remoteDocumentCache=function(o){return new d2(o)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new ZR(n),this.Ii=new u2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new c2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new f2(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){ue("MemoryPersistence","Starting transaction:",e);const o=new g2(this.ci.next());return this.referenceDelegate.Ei(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ai(e,n){return J.or(Object.values(this.ui).map(s=>()=>s.containsKey(e,n)))}}class g2 extends qC{constructor(e){super(),this.currentSequenceNumber=e}}class Qm{constructor(e){this.persistence=e,this.Ri=new Km,this.Vi=null}static mi(e){return new Qm(e)}get fi(){if(this.Vi)return this.Vi;throw Re(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),J.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),J.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),J.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(o=>this.fi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(o=>{o.forEach(u=>this.fi.add(u.toString()))}).next(()=>s.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.fi,s=>{const o=ve.fromPath(s);return this.gi(e,o).next(u=>{u||n.removeEntry(o,Ce.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return J.or([()=>J.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class $c{constructor(e,n){this.persistence=e,this.pi=new ea(s=>YC(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=s2(this,n)}static mi(e,n){return new $c(e,n)}Ei(){}di(e){return J.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(o=>s+o))}wr(e){let n=0;return this.pr(e,s=>{n++}).next(()=>n)}pr(e,n){return J.forEach(this.pi,(s,o)=>this.br(e,s,o).next(u=>u?J.resolve():n(o)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,f=>this.br(e,f,n).next(m=>{m||(s++,u.removeEntry(f,Ce.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),J.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),J.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),J.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),J.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=kc(e.data.value)),n}br(e,n,s){return J.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.pi.get(n);return J.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class $m{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=o}static As(e,n){let s=Fe(),o=Fe();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new $m(e,n.fromCache,s,o)}}/**
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
 */class y2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class v2{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return u1()?8:HC(sn())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,o){const u={result:null};return this.ys(e,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.ws(e,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new y2;return this.Ss(e,n,f).next(m=>{if(u.result=m,this.Vs)return this.bs(e,n,f,m.size)})}).next(()=>u.result)}bs(e,n,s,o){return s.documentReadCount<this.fs?(Ga()<=ke.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",Xa(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),J.resolve()):(Ga()<=ke.DEBUG&&ue("QueryEngine","Query:",Xa(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(Ga()<=ke.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",Xa(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,bi(n))):J.resolve())}ys(e,n){if(O_(n))return J.resolve(null);let s=bi(n);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=pm(n,null,"F"),s=bi(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const f=Fe(...u);return this.ps.getDocuments(e,f).next(m=>this.indexManager.getMinOffset(e,s).next(y=>{const g=this.Ds(n,m);return this.Cs(n,g,f,y.readTime)?this.ys(e,pm(n,null,"F")):this.vs(e,g,n,y)}))})))}ws(e,n,s,o){return O_(n)||o.isEqual(Ce.min())?J.resolve(null):this.ps.getDocuments(e,s).next(u=>{const f=this.Ds(n,u);return this.Cs(n,f,s,o)?J.resolve(null):(Ga()<=ke.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Xa(n)),this.vs(e,f,n,UC(o,zl)).next(m=>m))})}Ds(e,n){let s=new kt(LT(e));return n.forEach((o,u)=>{ph(e,u)&&(s=s.add(u))}),s}Cs(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,n,s){return Ga()<=ke.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",Xa(n)),this.ps.getDocumentsMatchingQuery(e,n,es.min(),s)}vs(e,n,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
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
 */const Zm="LocalStore",_2=3e8;class T2{constructor(e,n,s,o){this.persistence=e,this.Fs=n,this.serializer=o,this.Ms=new Tt(xe),this.xs=new ea(u=>qm(u),Hm),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new l2(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function E2(r,e,n,s){return new T2(r,e,n,s)}async function nE(r,e){const n=qe(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.Bs(e),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],m=[];let y=Fe();for(const g of o){f.push(g.batchId);for(const T of g.mutations)y=y.add(T.key)}for(const g of u){m.push(g.batchId);for(const T of g.mutations)y=y.add(T.key)}return n.localDocuments.getDocuments(s,y).next(g=>({Ls:g,removedBatchIds:f,addedBatchIds:m}))})})}function iE(r){const e=qe(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function S2(r,e){const n=qe(r),s=e.snapshotVersion;let o=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=n.Ns.newChangeBuffer({trackRemovals:!0});o=n.Ms;const m=[];e.targetChanges.forEach((T,b)=>{const A=o.get(b);if(!A)return;m.push(n.Pi.removeMatchingKeys(u,T.removedDocuments,b).next(()=>n.Pi.addMatchingKeys(u,T.addedDocuments,b)));let x=A.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(b)!==null?x=x.withResumeToken(Kt.EMPTY_BYTE_STRING,Ce.min()).withLastLimboFreeSnapshotVersion(Ce.min()):T.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(T.resumeToken,s)),o=o.insert(b,x),function(G,X,oe){return G.resumeToken.approximateByteSize()===0||X.snapshotVersion.toMicroseconds()-G.snapshotVersion.toMicroseconds()>=_2?!0:oe.addedDocuments.size+oe.modifiedDocuments.size+oe.removedDocuments.size>0}(A,x,T)&&m.push(n.Pi.updateTargetData(u,x))});let y=rs(),g=Fe();if(e.documentUpdates.forEach(T=>{e.resolvedLimboDocuments.has(T)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,T))}),m.push(b2(u,f,e.documentUpdates).next(T=>{y=T.ks,g=T.qs})),!s.isEqual(Ce.min())){const T=n.Pi.getLastRemoteSnapshotVersion(u).next(b=>n.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(T)}return J.waitFor(m).next(()=>f.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,y,g)).next(()=>y)}).then(u=>(n.Ms=o,u))}function b2(r,e,n){let s=Fe(),o=Fe();return n.forEach(u=>s=s.add(u)),e.getEntries(r,s).next(u=>{let f=rs();return n.forEach((m,y)=>{const g=u.get(m);y.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(Ce.min())?(e.removeEntry(m,y.readTime),f=f.insert(m,y)):!g.isValidDocument()||y.version.compareTo(g.version)>0||y.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(y),f=f.insert(m,y)):ue(Zm,"Ignoring outdated watch update for ",m,". Current version:",g.version," Watch version:",y.version)}),{ks:f,qs:o}})}function A2(r,e){const n=qe(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.Pi.getTargetData(s,e).next(u=>u?(o=u,J.resolve(o)):n.Pi.allocateTargetId(s).next(f=>(o=new Yr(e,f,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s})}async function Tm(r,e,n){const s=qe(r),o=s.Ms.get(e),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!go(f))throw f;ue(Zm,`Failed to update sequence numbers for target ${e}: ${f}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function F_(r,e,n){const s=qe(r);let o=Ce.min(),u=Fe();return s.persistence.runTransaction("Execute query","readwrite",f=>function(y,g,T){const b=qe(y),A=b.xs.get(T);return A!==void 0?J.resolve(b.Ms.get(A)):b.Pi.getTargetData(g,T)}(s,f,bi(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(f,m.targetId).next(y=>{u=y})}).next(()=>s.Fs.getDocumentsMatchingQuery(f,e,n?o:Ce.min(),n?u:Fe())).next(m=>(w2(s,mR(e),m),{documents:m,Qs:u})))}function w2(r,e,n){let s=r.Os.get(e)||Ce.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.Os.set(e,s)}class Y_{constructor(){this.activeTargetIds=TR()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class C2{constructor(){this.Mo=new Y_,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Y_,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class R2{Oo(e){}shutdown(){}}/**
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
 */const G_="ConnectivityMonitor";class X_{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ue(G_,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ue(G_,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Oc=null;function Em(){return Oc===null?Oc=function(){return 268435456+Math.round(2147483648*Math.random())}():Oc++,"0x"+Oc.toString(16)}/**
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
 */const qd="RestConnection",N2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class I2{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Yc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,n,s,o,u){const f=Em(),m=this.zo(e,n.toUriEncodedString());ue(qd,`Sending RPC '${e}' ${f}:`,m,s);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,o,u);const{host:g}=new URL(m),T=ho(g);return this.Jo(e,m,y,s,T).then(b=>(ue(qd,`Received RPC '${e}' ${f}: `,b),b),b=>{throw io(qd,`RPC '${e}' ${f} failed with error: `,b,"url: ",m,"request:",s),b})}Ho(e,n,s,o,u,f){return this.Go(e,n,s,o,u)}jo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+po}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}zo(e,n){const s=N2[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
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
 */class D2{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Jt="WebChannelConnection";class O2 extends I2{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,o,u){const f=Em();return new Promise((m,y)=>{const g=new gT;g.setWithCredentials(!0),g.listenOnce(yT.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Vc.NO_ERROR:const b=g.getResponseJson();ue(Jt,`XHR for RPC '${e}' ${f} received:`,JSON.stringify(b)),m(b);break;case Vc.TIMEOUT:ue(Jt,`RPC '${e}' ${f} timed out`),y(new me(ie.DEADLINE_EXCEEDED,"Request time out"));break;case Vc.HTTP_ERROR:const A=g.getStatus();if(ue(Jt,`RPC '${e}' ${f} failed with status:`,A,"response text:",g.getResponseText()),A>0){let x=g.getResponseJson();Array.isArray(x)&&(x=x[0]);const z=x==null?void 0:x.error;if(z&&z.status&&z.message){const G=function(oe){const ae=oe.toLowerCase().replace(/_/g,"-");return Object.values(ie).indexOf(ae)>=0?ae:ie.UNKNOWN}(z.status);y(new me(G,z.message))}else y(new me(ie.UNKNOWN,"Server responded with status "+g.getStatus()))}else y(new me(ie.UNAVAILABLE,"Connection failed."));break;default:Re(9055,{l_:e,streamId:f,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{ue(Jt,`RPC '${e}' ${f} completed.`)}});const T=JSON.stringify(o);ue(Jt,`RPC '${e}' ${f} sending request:`,o),g.send(n,"POST",T,s,15)})}T_(e,n,s){const o=Em(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=TT(),m=_T(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(y.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,n,s),y.encodeInitMessageHeaders=!0;const T=u.join("");ue(Jt,`Creating RPC '${e}' stream ${o}: ${T}`,y);const b=f.createWebChannel(T,y);this.I_(b);let A=!1,x=!1;const z=new D2({Yo:X=>{x?ue(Jt,`Not sending because RPC '${e}' stream ${o} is closed:`,X):(A||(ue(Jt,`Opening RPC '${e}' stream ${o} transport.`),b.open(),A=!0),ue(Jt,`RPC '${e}' stream ${o} sending:`,X),b.send(X))},Zo:()=>b.close()}),G=(X,oe,ae)=>{X.listen(oe,ne=>{try{ae(ne)}catch(_e){setTimeout(()=>{throw _e},0)}})};return G(b,Rl.EventType.OPEN,()=>{x||(ue(Jt,`RPC '${e}' stream ${o} transport opened.`),z.o_())}),G(b,Rl.EventType.CLOSE,()=>{x||(x=!0,ue(Jt,`RPC '${e}' stream ${o} transport closed`),z.a_(),this.E_(b))}),G(b,Rl.EventType.ERROR,X=>{x||(x=!0,io(Jt,`RPC '${e}' stream ${o} transport errored. Name:`,X.name,"Message:",X.message),z.a_(new me(ie.UNAVAILABLE,"The operation could not be completed")))}),G(b,Rl.EventType.MESSAGE,X=>{var oe;if(!x){const ae=X.data[0];ft(!!ae,16349);const ne=ae,_e=(ne==null?void 0:ne.error)||((oe=ne[0])==null?void 0:oe.error);if(_e){ue(Jt,`RPC '${e}' stream ${o} received error:`,_e);const ce=_e.status;let we=function(C){const D=wt[C];if(D!==void 0)return YT(D)}(ce),M=_e.message;we===void 0&&(we=ie.INTERNAL,M="Unknown error status: "+ce+" with message "+_e.message),x=!0,z.a_(new me(we,M)),b.close()}else ue(Jt,`RPC '${e}' stream ${o} received:`,ae),z.u_(ae)}}),G(m,vT.STAT_EVENT,X=>{X.stat===om.PROXY?ue(Jt,`RPC '${e}' stream ${o} detected buffering proxy`):X.stat===om.NOPROXY&&ue(Jt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{z.__()},0),z}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Hd(){return typeof document<"u"?document:null}/**
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
 */function rE(r){return new UR(r,!0)}/**
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
 */class sE{constructor(e,n,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&ue("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const K_="PersistentStream";class M2{constructor(e,n,s,o,u,f,m,y){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new sE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===ie.RESOURCE_EXHAUSTED?(or(n.toString()),or("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===ie.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.D_===n&&this.G_(s,o)},s=>{e(()=>{const o=new me(ie.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)})})}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(o=>{s(()=>this.z_(o))}),this.stream.onMessage(o=>{s(()=>++this.F_==1?this.J_(o):this.onNext(o))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return ue(K_,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(ue(K_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class P2 extends M2{constructor(e,n,s,o,u,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=HR(this.serializer,e),s=function(u){if(!("targetChange"in u))return Ce.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?Ce.min():f.readTime?Za(f.readTime):Ce.min()}(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=j_(this.serializer),n.addTarget=function(u,f){let m;const y=f.target;if(m=mm(y)?{documents:FR(u,y)}:{query:YR(u,y).ft},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=jR(u,f.resumeToken);const g=vm(u,f.expectedCount);g!==null&&(m.expectedCount=g)}else if(f.snapshotVersion.compareTo(Ce.min())>0){m.readTime=zR(u,f.snapshotVersion.toTimestamp());const g=vm(u,f.expectedCount);g!==null&&(m.expectedCount=g)}return m}(this.serializer,e);const s=XR(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=j_(this.serializer),n.removeTarget=e,this.q_(n)}}/**
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
 */class V2{}class k2 extends V2{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new me(ie.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.Go(e,_m(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new me(ie.UNKNOWN,u.toString())})}Ho(e,n,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Ho(e,_m(n,s),o,f,m,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new me(ie.UNKNOWN,f.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class x2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(or(n),this.aa=!1):ue("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const lo="RemoteStore";class L2{constructor(e,n,s,o,u){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo(f=>{s.enqueueAndForget(async()=>{Jl(this)&&(ue(lo,"Restarting streams for network reachability change."),await async function(y){const g=qe(y);g.Ea.add(4),await Wl(g),g.Ra.set("Unknown"),g.Ea.delete(4),await _h(g)}(this))})}),this.Ra=new x2(s,o)}}async function _h(r){if(Jl(r))for(const e of r.da)await e(!0)}async function Wl(r){for(const e of r.da)await e(!1)}function aE(r,e){const n=qe(r);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),tp(n)?ep(n):yo(n).O_()&&Jm(n,e))}function Wm(r,e){const n=qe(r),s=yo(n);n.Ia.delete(e),s.O_()&&oE(n,e),n.Ia.size===0&&(s.O_()?s.L_():Jl(n)&&n.Ra.set("Unknown"))}function Jm(r,e){if(r.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ce.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}yo(r).Y_(e)}function oE(r,e){r.Va.Ue(e),yo(r).Z_(e)}function ep(r){r.Va=new VR({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),yo(r).start(),r.Ra.ua()}function tp(r){return Jl(r)&&!yo(r).x_()&&r.Ia.size>0}function Jl(r){return qe(r).Ea.size===0}function lE(r){r.Va=void 0}async function U2(r){r.Ra.set("Online")}async function z2(r){r.Ia.forEach((e,n)=>{Jm(r,e)})}async function j2(r,e){lE(r),tp(r)?(r.Ra.ha(e),ep(r)):r.Ra.set("Unknown")}async function B2(r,e,n){if(r.Ra.set("Online"),e instanceof XT&&e.state===2&&e.cause)try{await async function(o,u){const f=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.Ia.delete(m),o.Va.removeTarget(m))}(r,e)}catch(s){ue(lo,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Q_(r,s)}else if(e instanceof Lc?r.Va.Ze(e):e instanceof GT?r.Va.st(e):r.Va.tt(e),!n.isEqual(Ce.min()))try{const s=await iE(r.localStore);n.compareTo(s)>=0&&await function(u,f){const m=u.Va.Tt(f);return m.targetChanges.forEach((y,g)=>{if(y.resumeToken.approximateByteSize()>0){const T=u.Ia.get(g);T&&u.Ia.set(g,T.withResumeToken(y.resumeToken,f))}}),m.targetMismatches.forEach((y,g)=>{const T=u.Ia.get(y);if(!T)return;u.Ia.set(y,T.withResumeToken(Kt.EMPTY_BYTE_STRING,T.snapshotVersion)),oE(u,y);const b=new Yr(T.target,y,g,T.sequenceNumber);Jm(u,b)}),u.remoteSyncer.applyRemoteEvent(m)}(r,n)}catch(s){ue(lo,"Failed to raise snapshot:",s),await Q_(r,s)}}async function Q_(r,e,n){if(!go(e))throw e;r.Ea.add(1),await Wl(r),r.Ra.set("Offline"),n||(n=()=>iE(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ue(lo,"Retrying IndexedDB access"),await n(),r.Ea.delete(1),await _h(r)})}async function $_(r,e){const n=qe(r);n.asyncQueue.verifyOperationInProgress(),ue(lo,"RemoteStore received new credentials");const s=Jl(n);n.Ea.add(3),await Wl(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await _h(n)}async function q2(r,e){const n=qe(r);e?(n.Ea.delete(2),await _h(n)):e||(n.Ea.add(2),await Wl(n),n.Ra.set("Unknown"))}function yo(r){return r.ma||(r.ma=function(n,s,o){const u=qe(n);return u.sa(),new P2(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Xo:U2.bind(null,r),t_:z2.bind(null,r),r_:j2.bind(null,r),H_:B2.bind(null,r)}),r.da.push(async e=>{e?(r.ma.B_(),tp(r)?ep(r):r.Ra.set("Unknown")):(await r.ma.stop(),lE(r))})),r.ma}/**
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
 */class np{constructor(e,n,s,o,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,u){const f=Date.now()+s,m=new np(e,n,f,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new me(ie.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uE(r,e){if(or("AsyncQueue",`${e}: ${r}`),go(r))return new me(ie.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Wa{static emptySet(e){return new Wa(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||ve.comparator(n.key,s.key):(n,s)=>ve.comparator(n.key,s.key),this.keyedMap=Nl(),this.sortedSet=new Tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Wa)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Wa;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Z_{constructor(){this.ga=new Tt(ve.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Re(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,s)=>{e.push(s)}),e}}class uo{constructor(e,n,s,o,u,f,m,y,g){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=g}static fromInitialDocuments(e,n,s,o,u){const f=[];return n.forEach(m=>{f.push({type:0,doc:m})}),new uo(e,n,Wa.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class H2{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class F2{constructor(){this.queries=W_(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=qe(n),u=o.queries;o.queries=W_(),u.forEach((f,m)=>{for(const y of m.Sa)y.onError(s)})})(this,new me(ie.ABORTED,"Firestore shutting down"))}}function W_(){return new ea(r=>xT(r),mh)}async function cE(r,e){const n=qe(r);let s=3;const o=e.query;let u=n.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new H2,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await n.onListen(o,!0);break;case 1:u.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=uE(f,`Initialization of query '${Xa(e.query)}' failed`);return void e.onError(m)}n.queries.set(o,u),u.Sa.push(e),e.va(n.onlineState),u.wa&&e.Fa(u.wa)&&ip(n)}async function hE(r,e){const n=qe(r),s=e.query;let o=3;const u=n.queries.get(s);if(u){const f=u.Sa.indexOf(e);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function Y2(r,e){const n=qe(r);let s=!1;for(const o of e){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.Sa)m.Fa(o)&&(s=!0);f.wa=o}}s&&ip(n)}function G2(r,e,n){const s=qe(r),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(n);s.queries.delete(e)}function ip(r){r.Ca.forEach(e=>{e.next()})}var Sm,J_;(J_=Sm||(Sm={})).Ma="default",J_.Cache="cache";class fE{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new uo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=uo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Sm.Cache}}/**
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
 */class dE{constructor(e){this.key=e}}class mE{constructor(e){this.key=e}}class X2{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Fe(),this.mutatedKeys=Fe(),this.eu=LT(e),this.tu=new Wa(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new Z_,o=n?n.tu:this.tu;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((T,b)=>{const A=o.get(T),x=ph(this.query,b)?b:null,z=!!A&&this.mutatedKeys.has(A.key),G=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let X=!1;A&&x?A.data.isEqual(x.data)?z!==G&&(s.track({type:3,doc:x}),X=!0):this.su(A,x)||(s.track({type:2,doc:x}),X=!0,(y&&this.eu(x,y)>0||g&&this.eu(x,g)<0)&&(m=!0)):!A&&x?(s.track({type:0,doc:x}),X=!0):A&&!x&&(s.track({type:1,doc:A}),X=!0,(y||g)&&(m=!0)),X&&(x?(f=f.add(x),u=G?u.add(T):u.delete(T)):(f=f.delete(T),u=u.delete(T)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const T=this.query.limitType==="F"?f.last():f.first();f=f.delete(T.key),u=u.delete(T.key),s.track({type:1,doc:T})}return{tu:f,iu:s,Cs:m,mutatedKeys:u}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const f=e.iu.ya();f.sort((T,b)=>function(x,z){const G=X=>{switch(X){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Re(20277,{Rt:X})}};return G(x)-G(z)}(T.type,b.type)||this.eu(T.doc,b.doc)),this.ou(s),o=o??!1;const m=n&&!o?this._u():[],y=this.Xa.size===0&&this.current&&!o?1:0,g=y!==this.Za;return this.Za=y,f.length!==0||g?{snapshot:new uo(this.query,e.tu,u,f,e.mutatedKeys,y===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Z_,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Fe(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const n=[];return e.forEach(s=>{this.Xa.has(s)||n.push(new mE(s))}),this.Xa.forEach(s=>{e.has(s)||n.push(new dE(s))}),n}cu(e){this.Ya=e.Qs,this.Xa=Fe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return uo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const rp="SyncEngine";class K2{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Q2{constructor(e){this.key=e,this.hu=!1}}class $2{constructor(e,n,s,o,u,f){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new ea(m=>xT(m),mh),this.Iu=new Map,this.Eu=new Set,this.du=new Tt(ve.comparator),this.Au=new Map,this.Ru=new Km,this.Vu={},this.mu=new Map,this.fu=oo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Z2(r,e,n=!0){const s=_E(r);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await pE(s,e,n,!0),o}async function W2(r,e){const n=_E(r);await pE(n,e,!0,!1)}async function pE(r,e,n,s){const o=await A2(r.localStore,bi(e)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await J2(r,e,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&aE(r.remoteStore,o),m}async function J2(r,e,n,s,o){r.pu=(b,A,x)=>async function(G,X,oe,ae){let ne=X.view.ru(oe);ne.Cs&&(ne=await F_(G.localStore,X.query,!1).then(({documents:M})=>X.view.ru(M,ne)));const _e=ae&&ae.targetChanges.get(X.targetId),ce=ae&&ae.targetMismatches.get(X.targetId)!=null,we=X.view.applyChanges(ne,G.isPrimaryClient,_e,ce);return t0(G,X.targetId,we.au),we.snapshot}(r,b,A,x);const u=await F_(r.localStore,e,!0),f=new X2(e,u.Qs),m=f.ru(u.documents),y=Zl.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),g=f.applyChanges(m,r.isPrimaryClient,y);t0(r,n,g.au);const T=new K2(e,n,f);return r.Tu.set(e,T),r.Iu.has(n)?r.Iu.get(n).push(e):r.Iu.set(n,[e]),g.snapshot}async function eN(r,e,n){const s=qe(r),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter(f=>!mh(f,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Tm(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Wm(s.remoteStore,o.targetId),bm(s,o.targetId)}).catch(uh)):(bm(s,o.targetId),await Tm(s.localStore,o.targetId,!0))}async function tN(r,e){const n=qe(r),s=n.Tu.get(e),o=n.Iu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Wm(n.remoteStore,s.targetId))}async function gE(r,e){const n=qe(r);try{const s=await S2(n.localStore,e);e.targetChanges.forEach((o,u)=>{const f=n.Au.get(u);f&&(ft(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?ft(f.hu,14607):o.removedDocuments.size>0&&(ft(f.hu,42227),f.hu=!1))}),await vE(n,s,e)}catch(s){await uh(s)}}function e0(r,e,n){const s=qe(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Tu.forEach((u,f)=>{const m=f.view.va(e);m.snapshot&&o.push(m.snapshot)}),function(f,m){const y=qe(f);y.onlineState=m;let g=!1;y.queries.forEach((T,b)=>{for(const A of b.Sa)A.va(m)&&(g=!0)}),g&&ip(y)}(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function nN(r,e,n){const s=qe(r);s.sharedClientState.updateQueryState(e,"rejected",n);const o=s.Au.get(e),u=o&&o.key;if(u){let f=new Tt(ve.comparator);f=f.insert(u,tn.newNoDocument(u,Ce.min()));const m=Fe().add(u),y=new vh(Ce.min(),new Map,new Tt(xe),f,m);await gE(s,y),s.du=s.du.remove(u),s.Au.delete(e),sp(s)}else await Tm(s.localStore,e,!1).then(()=>bm(s,e,n)).catch(uh)}function bm(r,e,n=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),n&&r.Pu.yu(s,n);r.Iu.delete(e),r.isPrimaryClient&&r.Ru.jr(e).forEach(s=>{r.Ru.containsKey(s)||yE(r,s)})}function yE(r,e){r.Eu.delete(e.path.canonicalString());const n=r.du.get(e);n!==null&&(Wm(r.remoteStore,n),r.du=r.du.remove(e),r.Au.delete(n),sp(r))}function t0(r,e,n){for(const s of n)s instanceof dE?(r.Ru.addReference(s.key,e),iN(r,s)):s instanceof mE?(ue(rp,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,e),r.Ru.containsKey(s.key)||yE(r,s.key)):Re(19791,{wu:s})}function iN(r,e){const n=e.key,s=n.path.canonicalString();r.du.get(n)||r.Eu.has(s)||(ue(rp,"New document in limbo: "+n),r.Eu.add(s),sp(r))}function sp(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const n=new ve(at.fromString(e)),s=r.fu.next();r.Au.set(s,new Q2(n)),r.du=r.du.insert(n,s),aE(r.remoteStore,new Yr(bi(Fm(n.path)),s,"TargetPurposeLimboResolution",ch.ce))}}async function vE(r,e,n){const s=qe(r),o=[],u=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach((m,y)=>{f.push(s.pu(y,e,n).then(g=>{var T;if((g||n)&&s.isPrimaryClient){const b=g?!g.fromCache:(T=n==null?void 0:n.targetChanges.get(y.targetId))==null?void 0:T.current;s.sharedClientState.updateQueryState(y.targetId,b?"current":"not-current")}if(g){o.push(g);const b=$m.As(y.targetId,g);u.push(b)}}))}),await Promise.all(f),s.Pu.H_(o),await async function(y,g){const T=qe(y);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>J.forEach(g,A=>J.forEach(A.Es,x=>T.persistence.referenceDelegate.addReference(b,A.targetId,x)).next(()=>J.forEach(A.ds,x=>T.persistence.referenceDelegate.removeReference(b,A.targetId,x)))))}catch(b){if(!go(b))throw b;ue(Zm,"Failed to update sequence numbers: "+b)}for(const b of g){const A=b.targetId;if(!b.fromCache){const x=T.Ms.get(A),z=x.snapshotVersion,G=x.withLastLimboFreeSnapshotVersion(z);T.Ms=T.Ms.insert(A,G)}}}(s.localStore,u))}async function rN(r,e){const n=qe(r);if(!n.currentUser.isEqual(e)){ue(rp,"User change. New user:",e.toKey());const s=await nE(n.localStore,e);n.currentUser=e,function(u,f){u.mu.forEach(m=>{m.forEach(y=>{y.reject(new me(ie.CANCELLED,f))})}),u.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await vE(n,s.Ls)}}function sN(r,e){const n=qe(r),s=n.Au.get(e);if(s&&s.hu)return Fe().add(s.key);{let o=Fe();const u=n.Iu.get(e);if(!u)return o;for(const f of u){const m=n.Tu.get(f);o=o.unionWith(m.view.nu)}return o}}function _E(r){const e=qe(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=gE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nN.bind(null,e),e.Pu.H_=Y2.bind(null,e.eventManager),e.Pu.yu=G2.bind(null,e.eventManager),e}class Zc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rE(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return E2(this.persistence,new v2,e.initialUser,this.serializer)}Cu(e){return new tE(Qm.mi,this.serializer)}Du(e){return new C2}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zc.provider={build:()=>new Zc};class aN extends Zc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ft(this.persistence.referenceDelegate instanceof $c,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new i2(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?yn.withCacheSize(this.cacheSizeBytes):yn.DEFAULT;return new tE(s=>$c.mi(s,n),this.serializer)}}class Am{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>e0(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=rN.bind(null,this.syncEngine),await q2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new F2}()}createDatastore(e){const n=rE(e.databaseInfo.databaseId),s=function(u){return new O2(u)}(e.databaseInfo);return function(u,f,m,y){return new k2(u,f,m,y)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,o,u,f,m){return new L2(s,o,u,f,m)}(this.localStore,this.datastore,e.asyncQueue,n=>e0(this.syncEngine,n,0),function(){return X_.v()?new X_:new R2}())}createSyncEngine(e,n){return function(o,u,f,m,y,g,T){const b=new $2(o,u,f,m,y,g);return T&&(b.gu=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(o){const u=qe(o);ue(lo,"RemoteStore shutting down."),u.Ea.add(5),await Wl(u),u.Aa.shutdown(),u.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Am.provider={build:()=>new Am};/**
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
 */class TE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):or("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const ss="FirestoreClient";class oN{constructor(e,n,s,o,u){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=en.UNAUTHENTICATED,this.clientId=zm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{ue(ss,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(ue(ss,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=uE(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Fd(r,e){r.asyncQueue.verifyOperationInProgress(),ue(ss,"Initializing OfflineComponentProvider");const n=r.configuration;await e.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await nE(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function n0(r,e){r.asyncQueue.verifyOperationInProgress();const n=await lN(r);ue(ss,"Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener(s=>$_(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>$_(e.remoteStore,o)),r._onlineComponents=e}async function lN(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ue(ss,"Using user provided OfflineComponentProvider");try{await Fd(r,r._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(o){return o.name==="FirebaseError"?o.code===ie.FAILED_PRECONDITION||o.code===ie.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;io("Error using user provided cache. Falling back to memory cache: "+n),await Fd(r,new Zc)}}else ue(ss,"Using default OfflineComponentProvider"),await Fd(r,new aN(void 0));return r._offlineComponents}async function uN(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ue(ss,"Using user provided OnlineComponentProvider"),await n0(r,r._uninitializedComponentsProvider._online)):(ue(ss,"Using default OnlineComponentProvider"),await n0(r,new Am))),r._onlineComponents}async function EE(r){const e=await uN(r),n=e.eventManager;return n.onListen=Z2.bind(null,e.syncEngine),n.onUnlisten=eN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=W2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=tN.bind(null,e.syncEngine),n}function cN(r,e,n={}){const s=new Qr;return r.asyncQueue.enqueueAndForget(async()=>function(u,f,m,y,g){const T=new TE({next:A=>{T.Nu(),f.enqueueAndForget(()=>hE(u,b));const x=A.docs.has(m);!x&&A.fromCache?g.reject(new me(ie.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&A.fromCache&&y&&y.source==="server"?g.reject(new me(ie.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(A)},error:A=>g.reject(A)}),b=new fE(Fm(m.path),T,{includeMetadataChanges:!0,qa:!0});return cE(u,b)}(await EE(r),r.asyncQueue,e,n,s)),s.promise}function hN(r,e,n={}){const s=new Qr;return r.asyncQueue.enqueueAndForget(async()=>function(u,f,m,y,g){const T=new TE({next:A=>{T.Nu(),f.enqueueAndForget(()=>hE(u,b)),A.fromCache&&y.source==="server"?g.reject(new me(ie.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(A)},error:A=>g.reject(A)}),b=new fE(m,T,{includeMetadataChanges:!0,qa:!0});return cE(u,b)}(await EE(r),r.asyncQueue,e,n,s)),s.promise}/**
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
 */function SE(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const i0=new Map;/**
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
 */const bE="firestore.googleapis.com",r0=!0;class s0{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new me(ie.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=bE,this.ssl=r0}else this.host=e.host,this.ssl=e.ssl??r0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=eE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<t2)throw new me(ie.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=SE(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new me(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new me(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new me(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Th{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new s0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new me(ie.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new me(ie.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new s0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new wC;switch(s.type){case"firstParty":return new IC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new me(ie.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=i0.get(n);s&&(ue("ComponentProvider","Removing Datastore"),i0.delete(n),s.terminate())}(this),Promise.resolve()}}function fN(r,e,n,s={}){var g;r=Ul(r,Th);const o=ho(e),u=r._getSettings(),f={...u,emulatorOptions:r._getEmulatorOptions()},m=`${e}:${n}`;o&&(aT(`https://${m}`),oT("Firestore",!0)),u.host!==bE&&u.host!==m&&io("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:m,ssl:o,emulatorOptions:s};if(!Ks(y,f)&&(r._setSettings(y),s.mockUserToken)){let T,b;if(typeof s.mockUserToken=="string")T=s.mockUserToken,b=en.MOCK_USER;else{T=e1(s.mockUserToken,(g=r._app)==null?void 0:g.options.projectId);const A=s.mockUserToken.sub||s.mockUserToken.user_id;if(!A)throw new me(ie.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new en(A)}r._authCredentials=new CC(new ST(T,b))}}/**
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
 */class Eh{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Eh(this.firestore,e,this._query)}}class rn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rn(this.firestore,e,this._key)}toJSON(){return{type:rn._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(Ql(n,rn._jsonSchema))return new rn(e,s||null,new ve(at.fromString(n.referencePath)))}}rn._jsonSchemaVersion="firestore/documentReference/1.0",rn._jsonSchema={type:Rt("string",rn._jsonSchemaVersion),referencePath:Rt("string")};class $r extends Eh{constructor(e,n,s){super(e,n,Fm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rn(this.firestore,null,new ve(e))}withConverter(e){return new $r(this.firestore,e,this._path)}}function dN(r,e,...n){if(r=cr(r),bT("collection","path",e),r instanceof Th){const s=at.fromString(e,...n);return v_(s),new $r(r,null,s)}{if(!(r instanceof rn||r instanceof $r))throw new me(ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(at.fromString(e,...n));return v_(s),new $r(r.firestore,null,s)}}function AE(r,e,...n){if(r=cr(r),arguments.length===1&&(e=zm.newId()),bT("doc","path",e),r instanceof Th){const s=at.fromString(e,...n);return y_(s),new rn(r,null,new ve(s))}{if(!(r instanceof rn||r instanceof $r))throw new me(ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(at.fromString(e,...n));return y_(s),new rn(r.firestore,r instanceof $r?r.converter:null,new ve(s))}}/**
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
 */const a0="AsyncQueue";class o0{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new sE(this,"async_queue_retry"),this._c=()=>{const s=Hd();s&&ue(a0,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=Hd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Hd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Qr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!go(e))throw e;ue(a0,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,or("INTERNAL UNHANDLED ERROR: ",l0(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const o=np.createAndSchedule(this,e,n,s,u=>this.hc(u));return this.tc.push(o),o}uc(){this.nc&&Re(47125,{Pc:l0(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function l0(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class ap extends Th{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new o0,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new o0(e),this._firestoreClient=void 0,await e}}}function mN(r,e){const n=typeof r=="object"?r:Lm(),s=typeof r=="string"?r:Yc,o=fo(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=Ww("firestore");u&&fN(o,...u)}return o}function wE(r){if(r._terminated)throw new me(ie.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||pN(r),r._firestoreClient}function pN(r){var s,o,u;const e=r._freezeSettings(),n=function(m,y,g,T){return new QC(m,y,g,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,SE(T.experimentalLongPollingOptions),T.useFetchStreams,T.isUsingEmulator)}(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,e);r._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new oN(r._authCredentials,r._appCheckCredentials,r._queue,n,r._componentsProvider&&function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}}(r._componentsProvider))}/**
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
 */class Si{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Si(Kt.fromBase64String(e))}catch(n){throw new me(ie.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Si(Kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Si._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ql(e,Si._jsonSchema))return Si.fromBase64String(e.bytes)}}Si._jsonSchemaVersion="firestore/bytes/1.0",Si._jsonSchema={type:Rt("string",Si._jsonSchemaVersion),bytes:Rt("string")};/**
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
 */class CE{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new me(ie.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new fn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Zr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new me(ie.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new me(ie.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Zr._jsonSchemaVersion}}static fromJSON(e){if(Ql(e,Zr._jsonSchema))return new Zr(e.latitude,e.longitude)}}Zr._jsonSchemaVersion="firestore/geoPoint/1.0",Zr._jsonSchema={type:Rt("string",Zr._jsonSchemaVersion),latitude:Rt("number"),longitude:Rt("number")};/**
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
 */class Wr{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Wr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ql(e,Wr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Wr(e.vectorValues);throw new me(ie.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Wr._jsonSchemaVersion="firestore/vectorValue/1.0",Wr._jsonSchema={type:Rt("string",Wr._jsonSchemaVersion),vectorValues:Rt("object")};const gN=new RegExp("[~\\*/\\[\\]]");function yN(r,e,n){if(e.search(gN)>=0)throw u0(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new CE(...e.split("."))._internalPath}catch{throw u0(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function u0(r,e,n,s,o){let u=`Function ${e}() called with invalid data`;u+=". ";let f="";return new me(ie.INVALID_ARGUMENT,u+r+f)}/**
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
 */class RE{constructor(e,n,s,o,u){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new rn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(NE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class vN extends RE{data(){return super.data()}}function NE(r,e){return typeof e=="string"?yN(r,e):e instanceof CE?e._internalPath:e._delegate._internalPath}/**
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
 */function _N(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new me(ie.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class TN{convertValue(e,n="none"){switch(is(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _t(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ns(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Re(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return $l(e,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(e){var s,o,u;const n=(u=(o=(s=e.fields)==null?void 0:s[cm].arrayValue)==null?void 0:o.values)==null?void 0:u.map(f=>_t(f.doubleValue));return new Wr(n)}convertGeoPoint(e){return new Zr(_t(e.latitude),_t(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=fh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(jl(e));default:return null}}convertTimestamp(e){const n=ts(e);return new Ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=at.fromString(e);ft(JT(s),9688,{name:e});const o=new Bl(s.get(1),s.get(3)),u=new ve(s.popFirst(5));return o.isEqual(n)||or(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}class Dl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gs extends RE{constructor(e,n,s,o,u,f){super(e,n,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Uc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(NE("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new me(ie.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Gs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Gs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Gs._jsonSchema={type:Rt("string",Gs._jsonSchemaVersion),bundleSource:Rt("string","DocumentSnapshot"),bundleName:Rt("string"),bundle:Rt("string")};class Uc extends Gs{data(e={}){return super.data(e)}}class Ja{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Dl(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Uc(this._firestore,this._userDataWriter,s.key,s,new Dl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new me(ie.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(m=>{const y=new Uc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Dl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const y=new Uc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Dl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,T=-1;return m.type!==0&&(g=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),T=f.indexOf(m.doc.key)),{type:EN(m.type),doc:y,oldIndex:g,newIndex:T}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new me(ie.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ja._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=zm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function EN(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Re(61501,{type:r})}}/**
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
 */function IE(r){r=Ul(r,rn);const e=Ul(r.firestore,ap);return cN(wE(e),r._key).then(n=>bN(e,r,n))}Ja._jsonSchemaVersion="firestore/querySnapshot/1.0",Ja._jsonSchema={type:Rt("string",Ja._jsonSchemaVersion),bundleSource:Rt("string","QuerySnapshot"),bundleName:Rt("string"),bundle:Rt("string")};class DE extends TN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Si(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new rn(this.firestore,null,n)}}function SN(r){r=Ul(r,Eh);const e=Ul(r.firestore,ap),n=wE(e),s=new DE(e);return _N(r._query),hN(n,r._query).then(o=>new Ja(e,s,r,o))}function bN(r,e,n){const s=n.docs.get(e._key),o=new DE(r);return new Gs(r,o,e._key,s,new Dl(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(o){po=o})(mo),Ci(new ni("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new ap(new RC(s.getProvider("auth-internal")),new DC(f,s.getProvider("app-check-internal")),function(g,T){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new me(ie.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bl(g.options.projectId,T)}(f,o),f);return u={useFetchStreams:n,...u},m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),Yn(d_,m_,e),Yn(d_,m_,"esm2020")})();var AN="firebase",wN="12.1.0";/**
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
 */Yn(AN,wN,"app");function OE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CN=OE,ME=new Js("auth","Firebase",OE());/**
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
 */const Wc=new km("@firebase/auth");function RN(r,...e){Wc.logLevel<=ke.WARN&&Wc.warn(`Auth (${mo}): ${r}`,...e)}function zc(r,...e){Wc.logLevel<=ke.ERROR&&Wc.error(`Auth (${mo}): ${r}`,...e)}/**
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
 */function lr(r,...e){throw op(r,...e)}function Ai(r,...e){return op(r,...e)}function PE(r,e,n){const s={...CN(),[e]:n};return new Js("auth","Firebase",s).create(e,{appName:r.name})}function Xs(r){return PE(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function op(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return ME.create(r,...e)}function Ae(r,e,...n){if(!r)throw op(e,...n)}function ir(r){const e="INTERNAL ASSERTION FAILED: "+r;throw zc(e),new Error(e)}function ur(r,e){r||ir(e)}/**
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
 */function wm(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function NN(){return c0()==="http:"||c0()==="https:"}function c0(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function IN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(NN()||a1()||"connection"in navigator)?navigator.onLine:!0}function DN(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class eu{constructor(e,n){this.shortDelay=e,this.longDelay=n,ur(n>e,"Short delay should be less than long delay!"),this.isMobile=i1()||o1()}get(){return IN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function lp(r,e){ur(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class VE{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ON={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const MN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],PN=new eu(3e4,6e4);function up(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function vo(r,e,n,s,o={}){return kE(r,o,async()=>{let u={},f={};s&&(e==="GET"?f=s:u={body:JSON.stringify(s)});const m=Kl({key:r.config.apiKey,...f}).slice(1),y=await r._getAdditionalHeaders();y["Content-Type"]="application/json",r.languageCode&&(y["X-Firebase-Locale"]=r.languageCode);const g={method:e,headers:y,...u};return s1()||(g.referrerPolicy="no-referrer"),r.emulatorConfig&&ho(r.emulatorConfig.host)&&(g.credentials="include"),VE.fetch()(await xE(r,r.config.apiHost,n,m),g)})}async function kE(r,e,n){r._canInitEmulator=!1;const s={...ON,...e};try{const o=new kN(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Mc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[y,g]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mc(r,"credential-already-in-use",f);if(y==="EMAIL_EXISTS")throw Mc(r,"email-already-in-use",f);if(y==="USER_DISABLED")throw Mc(r,"user-disabled",f);const T=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw PE(r,T,g);lr(r,T)}}catch(o){if(o instanceof Ii)throw o;lr(r,"network-request-failed",{message:String(o)})}}async function VN(r,e,n,s,o={}){const u=await vo(r,e,n,s,o);return"mfaPendingCredential"in u&&lr(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function xE(r,e,n,s){const o=`${e}${n}?${s}`,u=r,f=u.config.emulator?lp(r.config,o):`${r.config.apiScheme}://${o}`;return MN.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}class kN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ai(this.auth,"network-request-failed")),PN.get())})}}function Mc(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Ai(r,e,s);return o.customData._tokenResponse=n,o}/**
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
 */async function xN(r,e){return vo(r,"POST","/v1/accounts:delete",e)}async function Jc(r,e){return vo(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function xl(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LN(r,e=!1){const n=cr(r),s=await n.getIdToken(e),o=cp(s);Ae(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:xl(Yd(o.auth_time)),issuedAtTime:xl(Yd(o.iat)),expirationTime:xl(Yd(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Yd(r){return Number(r)*1e3}function cp(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return zc("JWT malformed, contained fewer than 3 sections"),null;try{const o=nT(n);return o?JSON.parse(o):(zc("Failed to decode base64 JWT payload"),null)}catch(o){return zc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function h0(r){const e=cp(r);return Ae(e,"internal-error"),Ae(typeof e.exp<"u","internal-error"),Ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Hl(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ii&&UN(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function UN({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class zN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Cm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xl(this.lastLoginAt),this.creationTime=xl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function eh(r){var b;const e=r.auth,n=await r.getIdToken(),s=await Hl(r,Jc(e,{idToken:n}));Ae(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];r._notifyReloadListener(o);const u=(b=o.providerUserInfo)!=null&&b.length?LE(o.providerUserInfo):[],f=BN(r.providerData,u),m=r.isAnonymous,y=!(r.email&&o.passwordHash)&&!(f!=null&&f.length),g=m?y:!1,T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new Cm(o.createdAt,o.lastLoginAt),isAnonymous:g};Object.assign(r,T)}async function jN(r){const e=cr(r);await eh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BN(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function LE(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function qN(r,e){const n=await kE(r,{},async()=>{const s=Kl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await xE(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return r.emulatorConfig&&ho(r.emulatorConfig.host)&&(y.credentials="include"),VE.fetch()(f,y)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function HN(r,e){return vo(r,"POST","/v2/accounts:revokeToken",up(r,e))}/**
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
 */class eo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ae(e.idToken,"internal-error"),Ae(typeof e.idToken<"u","internal-error"),Ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):h0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ae(e.length!==0,"internal-error");const n=h0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await qN(e,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new eo;return s&&(Ae(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(Ae(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(Ae(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new eo,this.toJSON())}_performRefresh(){return ir("not implemented")}}/**
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
 */function zr(r,e){Ae(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class ti{constructor({uid:e,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new zN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Cm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Hl(this,this.stsTokenManager.getToken(this.auth,e));return Ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LN(this,e)}reload(){return jN(this)}_assign(e){this!==e&&(Ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ti({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await eh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ti(this.auth.app))return Promise.reject(Xs(this.auth));const e=await this.getIdToken();return await Hl(this,xN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,o=n.email??void 0,u=n.phoneNumber??void 0,f=n.photoURL??void 0,m=n.tenantId??void 0,y=n._redirectEventId??void 0,g=n.createdAt??void 0,T=n.lastLoginAt??void 0,{uid:b,emailVerified:A,isAnonymous:x,providerData:z,stsTokenManager:G}=n;Ae(b&&G,e,"internal-error");const X=eo.fromJSON(this.name,G);Ae(typeof b=="string",e,"internal-error"),zr(s,e.name),zr(o,e.name),Ae(typeof A=="boolean",e,"internal-error"),Ae(typeof x=="boolean",e,"internal-error"),zr(u,e.name),zr(f,e.name),zr(m,e.name),zr(y,e.name),zr(g,e.name),zr(T,e.name);const oe=new ti({uid:b,auth:e,email:o,emailVerified:A,displayName:s,isAnonymous:x,photoURL:f,phoneNumber:u,tenantId:m,stsTokenManager:X,createdAt:g,lastLoginAt:T});return z&&Array.isArray(z)&&(oe.providerData=z.map(ae=>({...ae}))),y&&(oe._redirectEventId=y),oe}static async _fromIdTokenResponse(e,n,s=!1){const o=new eo;o.updateFromServerResponse(n);const u=new ti({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await eh(u),u}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];Ae(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?LE(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new eo;m.updateFromIdToken(s);const y=new ti({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:f}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Cm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,g),y}}/**
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
 */const f0=new Map;function rr(r){ur(r instanceof Function,"Expected a class definition");let e=f0.get(r);return e?(ur(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,f0.set(r,e),e)}/**
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
 */class UE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}UE.type="NONE";const d0=UE;/**
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
 */function jc(r,e,n){return`firebase:${r}:${e}:${n}`}class to{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=jc(this.userKey,o.apiKey,u),this.fullPersistenceKey=jc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Jc(this.auth,{idToken:e}).catch(()=>{});return n?ti._fromGetAccountInfoResponse(this.auth,n,e):null}return ti._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new to(rr(d0),e,s);const o=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=o[0]||rr(d0);const f=jc(s,e.config.apiKey,e.name);let m=null;for(const g of n)try{const T=await g._get(f);if(T){let b;if(typeof T=="string"){const A=await Jc(e,{idToken:T}).catch(()=>{});if(!A)break;b=await ti._fromGetAccountInfoResponse(e,A,T)}else b=ti._fromJSON(e,T);g!==u&&(m=b),u=g;break}}catch{}const y=o.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new to(u,e,s):(u=y[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(f)}catch{}})),new to(u,e,s))}}/**
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
 */function m0(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(FE(e))return"Blackberry";if(YE(e))return"Webos";if(jE(e))return"Safari";if((e.includes("chrome/")||BE(e))&&!e.includes("edge/"))return"Chrome";if(HE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function zE(r=sn()){return/firefox\//i.test(r)}function jE(r=sn()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function BE(r=sn()){return/crios\//i.test(r)}function qE(r=sn()){return/iemobile/i.test(r)}function HE(r=sn()){return/android/i.test(r)}function FE(r=sn()){return/blackberry/i.test(r)}function YE(r=sn()){return/webos/i.test(r)}function hp(r=sn()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function FN(r=sn()){var e;return hp(r)&&!!((e=window.navigator)!=null&&e.standalone)}function YN(){return l1()&&document.documentMode===10}function GE(r=sn()){return hp(r)||HE(r)||YE(r)||FE(r)||/windows phone/i.test(r)||qE(r)}/**
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
 */function XE(r,e=[]){let n;switch(r){case"Browser":n=m0(sn());break;case"Worker":n=`${m0(sn())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${mo}/${s}`}/**
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
 */class GN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((f,m)=>{try{const y=e(u);f(y)}catch(y){m(y)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function XN(r,e={}){return vo(r,"GET","/v2/passwordPolicy",up(r,e))}/**
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
 */const KN=6;class QN{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??KN,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class $N{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new p0(this),this.idTokenSubscription=new p0(this),this.beforeStateQueue=new GN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ME,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rr(n)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await to.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Jc(this,{idToken:e}),s=await ti._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(Ti(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,y=await this.tryRedirectSignIn(e);(!f||f===m)&&(y!=null&&y.user)&&(s=y.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(f){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await eh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ti(this.app))return Promise.reject(Xs(this));const n=e?cr(e):null;return n&&Ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ti(this.app)?Promise.reject(Xs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ti(this.app)?Promise.reject(Xs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await XN(this),n=new QN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Js("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await HN(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rr(e)||this._popupRedirectResolver;Ae(n,this,"argument-error"),this.redirectPersistenceManager=await to.create(this,[rr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ae(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const y=e.addObserver(n,s,o);return()=>{f=!0,y()}}else{const y=e.addObserver(n);return()=>{f=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=XE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(Ti(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&RN(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function fp(r){return cr(r)}class p0{constructor(e){this.auth=e,this.observer=null,this.addObserver=p1(n=>this.observer=n)}get next(){return Ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let dp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ZN(r){dp=r}function WN(r){return dp.loadJS(r)}function JN(){return dp.gapiScript}function eI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function tI(r,e){const n=fo(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(Ks(u,e??{}))return o;lr(o,"already-initialized")}return n.initialize({options:e})}function nI(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(rr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function iI(r,e,n){const s=fp(r);Ae(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=KE(e),{host:f,port:m}=rI(e),y=m===null?"":`:${m}`,g={url:`${u}//${f}${y}/`},T=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Ae(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ae(Ks(g,s.config.emulator)&&Ks(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,ho(f)?(aT(`${u}//${f}${y}`),oT("Auth",!0)):sI()}function KE(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function rI(r){const e=KE(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:g0(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:g0(f)}}}function g0(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function sI(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class QE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ir("not implemented")}_getIdTokenResponse(e){return ir("not implemented")}_linkToIdToken(e,n){return ir("not implemented")}_getReauthenticationResolver(e){return ir("not implemented")}}/**
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
 */async function no(r,e){return VN(r,"POST","/v1/accounts:signInWithIdp",up(r,e))}/**
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
 */const aI="http://localhost";class $s extends QE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $s(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):lr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=n;if(!s||!o)return null;const f=new $s(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return no(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,no(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,no(e,n)}buildRequest(){const e={requestUri:aI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Kl(n)}return e}}/**
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
 */class $E{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class tu extends $E{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class jr extends tu{constructor(){super("facebook.com")}static credential(e){return $s._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jr.credential(e.oauthAccessToken)}catch{return null}}}jr.FACEBOOK_SIGN_IN_METHOD="facebook.com";jr.PROVIDER_ID="facebook.com";/**
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
 */class Br extends tu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $s._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Br.credential(n,s)}catch{return null}}}Br.GOOGLE_SIGN_IN_METHOD="google.com";Br.PROVIDER_ID="google.com";/**
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
 */class qr extends tu{constructor(){super("github.com")}static credential(e){return $s._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qr.credential(e.oauthAccessToken)}catch{return null}}}qr.GITHUB_SIGN_IN_METHOD="github.com";qr.PROVIDER_ID="github.com";/**
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
 */class Hr extends tu{constructor(){super("twitter.com")}static credential(e,n){return $s._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Hr.credential(n,s)}catch{return null}}}Hr.TWITTER_SIGN_IN_METHOD="twitter.com";Hr.PROVIDER_ID="twitter.com";/**
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
 */class co{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const u=await ti._fromIdTokenResponse(e,s,o),f=y0(s);return new co({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=y0(s);return new co({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function y0(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class th extends Ii{constructor(e,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,th.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new th(e,n,s,o)}}function ZE(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?th._fromErrorAndOperation(r,u,e,s):u})}async function oI(r,e,n=!1){const s=await Hl(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return co._forOperation(r,"link",s)}/**
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
 */async function lI(r,e,n=!1){const{auth:s}=r;if(Ti(s.app))return Promise.reject(Xs(s));const o="reauthenticate";try{const u=await Hl(r,ZE(s,o,e,r),n);Ae(u.idToken,s,"internal-error");const f=cp(u.idToken);Ae(f,s,"internal-error");const{sub:m}=f;return Ae(r.uid===m,s,"user-mismatch"),co._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&lr(s,"user-mismatch"),u}}/**
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
 */async function uI(r,e,n=!1){if(Ti(r.app))return Promise.reject(Xs(r));const s="signIn",o=await ZE(r,s,e),u=await co._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}function cI(r,e,n,s){return cr(r).onIdTokenChanged(e,n,s)}function hI(r,e,n){return cr(r).beforeAuthStateChanged(e,n)}const nh="__sak";/**
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
 */class WE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nh,"1"),this.storage.removeItem(nh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const fI=1e3,dI=10;class JE extends WE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=GE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,m,y)=>{this.notifyListeners(f,y)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);YN()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,dI):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},fI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}JE.type="LOCAL";const mI=JE;/**
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
 */class eS extends WE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}eS.type="SESSION";const tS=eS;/**
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
 */function pI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Sh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new Sh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async g=>g(n.origin,u)),y=await pI(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sh.receivers=[];/**
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
 */function mp(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class gI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,y)=>{const g=mp("",20);o.port1.start();const T=setTimeout(()=>{y(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(b){const A=b;if(A.data.eventId===g)switch(A.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(A.data.response);break;default:clearTimeout(T),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function wi(){return window}function yI(r){wi().location.href=r}/**
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
 */function nS(){return typeof wi().WorkerGlobalScope<"u"&&typeof wi().importScripts=="function"}async function vI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _I(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function TI(){return nS()?self:null}/**
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
 */const iS="firebaseLocalStorageDb",EI=1,ih="firebaseLocalStorage",rS="fbase_key";class nu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bh(r,e){return r.transaction([ih],e?"readwrite":"readonly").objectStore(ih)}function SI(){const r=indexedDB.deleteDatabase(iS);return new nu(r).toPromise()}function Rm(){const r=indexedDB.open(iS,EI);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(ih,{keyPath:rS})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(ih)?e(s):(s.close(),await SI(),e(await Rm()))})})}async function v0(r,e,n){const s=bh(r,!0).put({[rS]:e,value:n});return new nu(s).toPromise()}async function bI(r,e){const n=bh(r,!1).get(e),s=await new nu(n).toPromise();return s===void 0?null:s.value}function _0(r,e){const n=bh(r,!0).delete(e);return new nu(n).toPromise()}const AI=800,wI=3;class sS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>wI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sh._getInstance(TI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await vI(),!this.activeServiceWorker)return;this.sender=new gI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_I()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rm();return await v0(e,nh,"1"),await _0(e,nh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>v0(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>bI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=bh(o,!1).getAll();return new nu(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sS.type="LOCAL";const CI=sS;new eu(3e4,6e4);/**
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
 */function RI(r,e){return e?rr(e):(Ae(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class pp extends QE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return no(e,this._buildIdpRequest())}_linkToIdToken(e,n){return no(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return no(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function NI(r){return uI(r.auth,new pp(r),r.bypassAuthState)}function II(r){const{auth:e,user:n}=r;return Ae(n,e,"internal-error"),lI(n,new pp(r),r.bypassAuthState)}async function DI(r){const{auth:e,user:n}=r;return Ae(n,e,"internal-error"),oI(n,new pp(r),r.bypassAuthState)}/**
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
 */class aS{constructor(e,n,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=e;if(f){this.reject(f);return}const y={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return NI;case"linkViaPopup":case"linkViaRedirect":return DI;case"reauthViaPopup":case"reauthViaRedirect":return II;default:lr(this.auth,"internal-error")}}resolve(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const OI=new eu(2e3,1e4);class $a extends aS{constructor(e,n,s,o,u){super(e,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,$a.currentPopupAction&&$a.currentPopupAction.cancel(),$a.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ae(e,this.auth,"internal-error"),e}async onExecution(){ur(this.filter.length===1,"Popup operations only handle one event");const e=mp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ai(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ai(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$a.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ai(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OI.get())};e()}}$a.currentPopupAction=null;/**
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
 */const MI="pendingRedirect",Bc=new Map;class PI extends aS{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Bc.get(this.auth._key());if(!e){try{const s=await VI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Bc.set(this.auth._key(),e)}return this.bypassAuthState||Bc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VI(r,e){const n=LI(e),s=xI(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function kI(r,e){Bc.set(r._key(),e)}function xI(r){return rr(r._redirectPersistence)}function LI(r){return jc(MI,r.config.apiKey,r.name)}async function UI(r,e,n=!1){if(Ti(r.app))return Promise.reject(Xs(r));const s=fp(r),o=RI(s,e),f=await new PI(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
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
 */const zI=10*60*1e3;class jI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!oS(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ai(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zI&&this.cachedEventUids.clear(),this.cachedEventUids.has(T0(e))}saveEventToCache(e){this.cachedEventUids.add(T0(e)),this.lastProcessedEventTime=Date.now()}}function T0(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function oS({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oS(r);default:return!1}}/**
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
 */async function qI(r,e={}){return vo(r,"GET","/v1/projects",e)}/**
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
 */const HI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FI=/^https?/;async function YI(r){if(r.config.emulator)return;const{authorizedDomains:e}=await qI(r);for(const n of e)try{if(GI(n))return}catch{}lr(r,"unauthorized-domain")}function GI(r){const e=wm(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!FI.test(n))return!1;if(HI.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const XI=new eu(3e4,6e4);function E0(){const r=wi().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function KI(r){return new Promise((e,n)=>{var o,u,f;function s(){E0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{E0(),n(Ai(r,"network-request-failed"))},timeout:XI.get()})}if((u=(o=wi().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((f=wi().gapi)!=null&&f.load)s();else{const m=eI("iframefcb");return wi()[m]=()=>{gapi.load?s():n(Ai(r,"network-request-failed"))},WN(`${JN()}?onload=${m}`).catch(y=>n(y))}}).catch(e=>{throw qc=null,e})}let qc=null;function QI(r){return qc=qc||KI(r),qc}/**
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
 */const $I=new eu(5e3,15e3),ZI="__/auth/iframe",WI="emulator/auth/iframe",JI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tD(r){const e=r.config;Ae(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?lp(e,WI):`https://${r.config.authDomain}/${ZI}`,s={apiKey:e.apiKey,appName:r.name,v:mo},o=eD.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Kl(s).slice(1)}`}async function nD(r){const e=await QI(r),n=wi().gapi;return Ae(n,r,"internal-error"),e.open({where:document.body,url:tD(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JI,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=Ai(r,"network-request-failed"),m=wi().setTimeout(()=>{u(f)},$I.get());function y(){wi().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(f)})}))}/**
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
 */const iD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rD=500,sD=600,aD="_blank",oD="http://localhost";class S0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lD(r,e,n,s=rD,o=sD){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y={...iD,width:s.toString(),height:o.toString(),top:u,left:f},g=sn().toLowerCase();n&&(m=BE(g)?aD:n),zE(g)&&(e=e||oD,y.scrollbars="yes");const T=Object.entries(y).reduce((A,[x,z])=>`${A}${x}=${z},`,"");if(FN(g)&&m!=="_self")return uD(e||"",m),new S0(null);const b=window.open(e||"",m,T);Ae(b,r,"popup-blocked");try{b.focus()}catch{}return new S0(b)}function uD(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const cD="__/auth/handler",hD="emulator/auth/handler",fD=encodeURIComponent("fac");async function b0(r,e,n,s,o,u){Ae(r.config.authDomain,r,"auth-domain-config-required"),Ae(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:mo,eventId:o};if(e instanceof $E){e.setDefaultLanguage(r.languageCode),f.providerId=e.providerId||"",m1(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,b]of Object.entries({}))f[T]=b}if(e instanceof tu){const T=e.getScopes().filter(b=>b!=="");T.length>0&&(f.scopes=T.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const T of Object.keys(m))m[T]===void 0&&delete m[T];const y=await r._getAppCheckToken(),g=y?`#${fD}=${encodeURIComponent(y)}`:"";return`${dD(r)}?${Kl(m).slice(1)}${g}`}function dD({config:r}){return r.emulator?lp(r,hD):`https://${r.authDomain}/${cD}`}/**
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
 */const Gd="webStorageSupport";class mD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tS,this._completeRedirectFn=UI,this._overrideRedirectResult=kI}async _openPopup(e,n,s,o){var f;ur((f=this.eventManagers[e._key()])==null?void 0:f.manager,"_initialize() not called before _openPopup()");const u=await b0(e,n,s,wm(),o);return lD(e,u,mp())}async _openRedirect(e,n,s,o){await this._originValidation(e);const u=await b0(e,n,s,wm(),o);return yI(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(ur(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await nD(e),s=new jI(e);return n.register("authEvent",o=>(Ae(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gd,{type:Gd},o=>{var f;const u=(f=o==null?void 0:o[0])==null?void 0:f[Gd];u!==void 0&&n(!!u),lr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return GE()||jE()||hp()}}const pD=mD;var A0="@firebase/auth",w0="1.11.0";/**
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
 */class gD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yD(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vD(r){Ci(new ni("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;Ae(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:XE(r)},g=new $N(s,o,u,y);return nI(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ci(new ni("auth-internal",e=>{const n=fp(e.getProvider("auth").getImmediate());return(s=>new gD(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yn(A0,w0,yD(r)),Yn(A0,w0,"esm2020")}/**
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
 */const _D=5*60,TD=sT("authIdTokenMaxAge")||_D;let C0=null;const ED=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>TD)return;const o=n==null?void 0:n.token;C0!==o&&(C0=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function SD(r=Lm()){const e=fo(r,"auth");if(e.isInitialized())return e.getImmediate();const n=tI(r,{popupRedirectResolver:pD,persistence:[CI,mI,tS]}),s=sT("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=ED(u.toString());hI(n,f,()=>f(n.currentUser)),cI(n,m=>f(m))}}const o=iT("auth");return o&&iI(n,`http://${o}`),n}function bD(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}ZN({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=Ai("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",bD().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vD("Browser");const lS="@firebase/installations",gp="0.6.19";/**
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
 */const uS=1e4,cS=`w:${gp}`,hS="FIS_v2",AD="https://firebaseinstallations.googleapis.com/v1",wD=60*60*1e3,CD="installations",RD="Installations";/**
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
 */const ND={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Zs=new Js(CD,RD,ND);function fS(r){return r instanceof Ii&&r.code.includes("request-failed")}/**
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
 */function dS({projectId:r}){return`${AD}/projects/${r}/installations`}function mS(r){return{token:r.token,requestStatus:2,expiresIn:DD(r.expiresIn),creationTime:Date.now()}}async function pS(r,e){const s=(await e.json()).error;return Zs.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function gS({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function ID(r,{refreshToken:e}){const n=gS(r);return n.append("Authorization",OD(e)),n}async function yS(r){const e=await r();return e.status>=500&&e.status<600?r():e}function DD(r){return Number(r.replace("s","000"))}function OD(r){return`${hS} ${r}`}/**
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
 */async function MD({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=dS(r),o=gS(r),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const f={fid:n,authVersion:hS,appId:r.appId,sdkVersion:cS},m={method:"POST",headers:o,body:JSON.stringify(f)},y=await yS(()=>fetch(s,m));if(y.ok){const g=await y.json();return{fid:g.fid||n,registrationStatus:2,refreshToken:g.refreshToken,authToken:mS(g.authToken)}}else throw await pS("Create Installation",y)}/**
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
 */function vS(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */function PD(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const VD=/^[cdef][\w-]{21}$/,Nm="";function kD(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=xD(r);return VD.test(n)?n:Nm}catch{return Nm}}function xD(r){return PD(r).substr(0,22)}/**
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
 */function Ah(r){return`${r.appName}!${r.appId}`}/**
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
 */const _S=new Map;function TS(r,e){const n=Ah(r);ES(n,e),LD(n,e)}function ES(r,e){const n=_S.get(r);if(n)for(const s of n)s(e)}function LD(r,e){const n=UD();n&&n.postMessage({key:r,fid:e}),zD()}let Hs=null;function UD(){return!Hs&&"BroadcastChannel"in self&&(Hs=new BroadcastChannel("[Firebase] FID Change"),Hs.onmessage=r=>{ES(r.data.key,r.data.fid)}),Hs}function zD(){_S.size===0&&Hs&&(Hs.close(),Hs=null)}/**
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
 */const jD="firebase-installations-database",BD=1,Ws="firebase-installations-store";let Xd=null;function yp(){return Xd||(Xd=lh(jD,BD,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Ws)}}})),Xd}async function rh(r,e){const n=Ah(r),o=(await yp()).transaction(Ws,"readwrite"),u=o.objectStore(Ws),f=await u.get(n);return await u.put(e,n),await o.done,(!f||f.fid!==e.fid)&&TS(r,e.fid),e}async function SS(r){const e=Ah(r),s=(await yp()).transaction(Ws,"readwrite");await s.objectStore(Ws).delete(e),await s.done}async function wh(r,e){const n=Ah(r),o=(await yp()).transaction(Ws,"readwrite"),u=o.objectStore(Ws),f=await u.get(n),m=e(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&TS(r,m.fid),m}/**
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
 */async function vp(r){let e;const n=await wh(r.appConfig,s=>{const o=qD(s),u=HD(r,o);return e=u.registrationPromise,u.installationEntry});return n.fid===Nm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function qD(r){const e=r||{fid:kD(),registrationStatus:0};return bS(e)}function HD(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Zs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=FD(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:YD(r)}:{installationEntry:e}}async function FD(r,e){try{const n=await MD(r,e);return rh(r.appConfig,n)}catch(n){throw fS(n)&&n.customData.serverCode===409?await SS(r.appConfig):await rh(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function YD(r){let e=await R0(r.appConfig);for(;e.registrationStatus===1;)await vS(100),e=await R0(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await vp(r);return s||n}return e}function R0(r){return wh(r,e=>{if(!e)throw Zs.create("installation-not-found");return bS(e)})}function bS(r){return GD(r)?{fid:r.fid,registrationStatus:0}:r}function GD(r){return r.registrationStatus===1&&r.registrationTime+uS<Date.now()}/**
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
 */async function XD({appConfig:r,heartbeatServiceProvider:e},n){const s=KD(r,n),o=ID(r,n),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const f={installation:{sdkVersion:cS,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},y=await yS(()=>fetch(s,m));if(y.ok){const g=await y.json();return mS(g)}else throw await pS("Generate Auth Token",y)}function KD(r,{fid:e}){return`${dS(r)}/${e}/authTokens:generate`}/**
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
 */async function _p(r,e=!1){let n;const s=await wh(r.appConfig,u=>{if(!AS(u))throw Zs.create("not-registered");const f=u.authToken;if(!e&&ZD(f))return u;if(f.requestStatus===1)return n=QD(r,e),u;{if(!navigator.onLine)throw Zs.create("app-offline");const m=JD(u);return n=$D(r,m),m}});return n?await n:s.authToken}async function QD(r,e){let n=await N0(r.appConfig);for(;n.authToken.requestStatus===1;)await vS(100),n=await N0(r.appConfig);const s=n.authToken;return s.requestStatus===0?_p(r,e):s}function N0(r){return wh(r,e=>{if(!AS(e))throw Zs.create("not-registered");const n=e.authToken;return eO(n)?{...e,authToken:{requestStatus:0}}:e})}async function $D(r,e){try{const n=await XD(r,e),s={...e,authToken:n};return await rh(r.appConfig,s),n}catch(n){if(fS(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await SS(r.appConfig);else{const s={...e,authToken:{requestStatus:0}};await rh(r.appConfig,s)}throw n}}function AS(r){return r!==void 0&&r.registrationStatus===2}function ZD(r){return r.requestStatus===2&&!WD(r)}function WD(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+wD}function JD(r){const e={requestStatus:1,requestTime:Date.now()};return{...r,authToken:e}}function eO(r){return r.requestStatus===1&&r.requestTime+uS<Date.now()}/**
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
 */async function tO(r){const e=r,{installationEntry:n,registrationPromise:s}=await vp(e);return s?s.catch(console.error):_p(e).catch(console.error),n.fid}/**
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
 */async function nO(r,e=!1){const n=r;return await iO(n),(await _p(n,e)).token}async function iO(r){const{registrationPromise:e}=await vp(r);e&&await e}/**
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
 */function rO(r){if(!r||!r.options)throw Kd("App Configuration");if(!r.name)throw Kd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw Kd(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Kd(r){return Zs.create("missing-app-config-values",{valueName:r})}/**
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
 */const wS="installations",sO="installations-internal",aO=r=>{const e=r.getProvider("app").getImmediate(),n=rO(e),s=fo(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},oO=r=>{const e=r.getProvider("app").getImmediate(),n=fo(e,wS).getImmediate();return{getId:()=>tO(n),getToken:o=>nO(n,o)}};function lO(){Ci(new ni(wS,aO,"PUBLIC")),Ci(new ni(sO,oO,"PRIVATE"))}lO();Yn(lS,gp);Yn(lS,gp,"esm2020");/**
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
 */const uO="/firebase-messaging-sw.js",cO="/firebase-cloud-messaging-push-scope",CS="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",hO="https://fcmregistrations.googleapis.com/v1",RS="google.c.a.c_id",fO="google.c.a.c_l",dO="google.c.a.ts",mO="google.c.a.e",I0=1e4;var D0;(function(r){r[r.DATA_MESSAGE=1]="DATA_MESSAGE",r[r.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(D0||(D0={}));/**
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
 */var Fl;(function(r){r.PUSH_RECEIVED="push-received",r.NOTIFICATION_CLICKED="notification-clicked"})(Fl||(Fl={}));/**
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
 */function nr(r){const e=new Uint8Array(r);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function pO(r){const e="=".repeat((4-r.length%4)%4),n=(r+e).replace(/\-/g,"+").replace(/_/g,"/"),s=atob(n),o=new Uint8Array(s.length);for(let u=0;u<s.length;++u)o[u]=s.charCodeAt(u);return o}/**
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
 */const Qd="fcm_token_details_db",gO=5,O0="fcm_token_object_Store";async function yO(r){if("databases"in indexedDB&&!(await indexedDB.databases()).map(u=>u.name).includes(Qd))return null;let e=null;return(await lh(Qd,gO,{upgrade:async(s,o,u,f)=>{if(o<2||!s.objectStoreNames.contains(O0))return;const m=f.objectStore(O0),y=await m.index("fcmSenderId").get(r);if(await m.clear(),!!y){if(o===2){const g=y;if(!g.auth||!g.p256dh||!g.endpoint)return;e={token:g.fcmToken,createTime:g.createTime??Date.now(),subscriptionOptions:{auth:g.auth,p256dh:g.p256dh,endpoint:g.endpoint,swScope:g.swScope,vapidKey:typeof g.vapidKey=="string"?g.vapidKey:nr(g.vapidKey)}}}else if(o===3){const g=y;e={token:g.fcmToken,createTime:g.createTime,subscriptionOptions:{auth:nr(g.auth),p256dh:nr(g.p256dh),endpoint:g.endpoint,swScope:g.swScope,vapidKey:nr(g.vapidKey)}}}else if(o===4){const g=y;e={token:g.fcmToken,createTime:g.createTime,subscriptionOptions:{auth:nr(g.auth),p256dh:nr(g.p256dh),endpoint:g.endpoint,swScope:g.swScope,vapidKey:nr(g.vapidKey)}}}}}})).close(),await xd(Qd),await xd("fcm_vapid_details_db"),await xd("undefined"),vO(e)?e:null}function vO(r){if(!r||!r.subscriptionOptions)return!1;const{subscriptionOptions:e}=r;return typeof r.createTime=="number"&&r.createTime>0&&typeof r.token=="string"&&r.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const _O="firebase-messaging-database",TO=1,Yl="firebase-messaging-store";let $d=null;function NS(){return $d||($d=lh(_O,TO,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(Yl)}}})),$d}async function EO(r){const e=IS(r),s=await(await NS()).transaction(Yl).objectStore(Yl).get(e);if(s)return s;{const o=await yO(r.appConfig.senderId);if(o)return await Tp(r,o),o}}async function Tp(r,e){const n=IS(r),o=(await NS()).transaction(Yl,"readwrite");return await o.objectStore(Yl).put(e,n),await o.done,e}function IS({appConfig:r}){return r.appId}/**
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
 */const SO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},dn=new Js("messaging","Messaging",SO);/**
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
 */async function bO(r,e){const n=await Sp(r),s=DS(e),o={method:"POST",headers:n,body:JSON.stringify(s)};let u;try{u=await(await fetch(Ep(r.appConfig),o)).json()}catch(f){throw dn.create("token-subscribe-failed",{errorInfo:f==null?void 0:f.toString()})}if(u.error){const f=u.error.message;throw dn.create("token-subscribe-failed",{errorInfo:f})}if(!u.token)throw dn.create("token-subscribe-no-token");return u.token}async function AO(r,e){const n=await Sp(r),s=DS(e.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(s)};let u;try{u=await(await fetch(`${Ep(r.appConfig)}/${e.token}`,o)).json()}catch(f){throw dn.create("token-update-failed",{errorInfo:f==null?void 0:f.toString()})}if(u.error){const f=u.error.message;throw dn.create("token-update-failed",{errorInfo:f})}if(!u.token)throw dn.create("token-update-no-token");return u.token}async function wO(r,e){const s={method:"DELETE",headers:await Sp(r)};try{const u=await(await fetch(`${Ep(r.appConfig)}/${e}`,s)).json();if(u.error){const f=u.error.message;throw dn.create("token-unsubscribe-failed",{errorInfo:f})}}catch(o){throw dn.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function Ep({projectId:r}){return`${hO}/projects/${r}/registrations`}async function Sp({appConfig:r,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function DS({p256dh:r,auth:e,endpoint:n,vapidKey:s}){const o={web:{endpoint:n,auth:e,p256dh:r}};return s!==CS&&(o.web.applicationPubKey=s),o}/**
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
 */const CO=7*24*60*60*1e3;async function RO(r){const e=await IO(r.swRegistration,r.vapidKey),n={vapidKey:r.vapidKey,swScope:r.swRegistration.scope,endpoint:e.endpoint,auth:nr(e.getKey("auth")),p256dh:nr(e.getKey("p256dh"))},s=await EO(r.firebaseDependencies);if(s){if(DO(s.subscriptionOptions,n))return Date.now()>=s.createTime+CO?NO(r,{token:s.token,createTime:Date.now(),subscriptionOptions:n}):s.token;try{await wO(r.firebaseDependencies,s.token)}catch(o){console.warn(o)}return M0(r.firebaseDependencies,n)}else return M0(r.firebaseDependencies,n)}async function NO(r,e){try{const n=await AO(r.firebaseDependencies,e),s={...e,token:n,createTime:Date.now()};return await Tp(r.firebaseDependencies,s),n}catch(n){throw n}}async function M0(r,e){const s={token:await bO(r,e),createTime:Date.now(),subscriptionOptions:e};return await Tp(r,s),s.token}async function IO(r,e){const n=await r.pushManager.getSubscription();return n||r.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:pO(e)})}function DO(r,e){const n=e.vapidKey===r.vapidKey,s=e.endpoint===r.endpoint,o=e.auth===r.auth,u=e.p256dh===r.p256dh;return n&&s&&o&&u}/**
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
 */function P0(r){const e={from:r.from,collapseKey:r.collapse_key,messageId:r.fcmMessageId};return OO(e,r),MO(e,r),PO(e,r),e}function OO(r,e){if(!e.notification)return;r.notification={};const n=e.notification.title;n&&(r.notification.title=n);const s=e.notification.body;s&&(r.notification.body=s);const o=e.notification.image;o&&(r.notification.image=o);const u=e.notification.icon;u&&(r.notification.icon=u)}function MO(r,e){e.data&&(r.data=e.data)}function PO(r,e){var o,u,f,m;if(!e.fcmOptions&&!((o=e.notification)!=null&&o.click_action))return;r.fcmOptions={};const n=((u=e.fcmOptions)==null?void 0:u.link)??((f=e.notification)==null?void 0:f.click_action);n&&(r.fcmOptions.link=n);const s=(m=e.fcmOptions)==null?void 0:m.analytics_label;s&&(r.fcmOptions.analyticsLabel=s)}/**
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
 */function VO(r){return typeof r=="object"&&!!r&&RS in r}/**
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
 */function kO(r){if(!r||!r.options)throw Zd("App Configuration Object");if(!r.name)throw Zd("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=r;for(const s of e)if(!n[s])throw Zd(s);return{appName:r.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Zd(r){return dn.create("missing-app-config-values",{valueName:r})}/**
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
 */class xO{constructor(e,n,s){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=kO(e);this.firebaseDependencies={app:e,appConfig:o,installations:n,analyticsProvider:s}}_delete(){return Promise.resolve()}}/**
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
 */async function LO(r){try{r.swRegistration=await navigator.serviceWorker.register(uO,{scope:cO}),r.swRegistration.update().catch(()=>{}),await UO(r.swRegistration)}catch(e){throw dn.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function UO(r){return new Promise((e,n)=>{const s=setTimeout(()=>n(new Error(`Service worker not registered after ${I0} ms`)),I0),o=r.installing||r.waiting;r.active?(clearTimeout(s),e()):o?o.onstatechange=u=>{var f;((f=u.target)==null?void 0:f.state)==="activated"&&(o.onstatechange=null,clearTimeout(s),e())}:(clearTimeout(s),n(new Error("No incoming service worker found.")))})}/**
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
 */async function zO(r,e){if(!e&&!r.swRegistration&&await LO(r),!(!e&&r.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw dn.create("invalid-sw-registration");r.swRegistration=e}}/**
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
 */async function jO(r,e){e?r.vapidKey=e:r.vapidKey||(r.vapidKey=CS)}/**
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
 */async function BO(r,e){if(!navigator)throw dn.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw dn.create("permission-blocked");return await jO(r,e==null?void 0:e.vapidKey),await zO(r,e==null?void 0:e.serviceWorkerRegistration),RO(r)}/**
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
 */async function qO(r,e,n){const s=HO(e);(await r.firebaseDependencies.analyticsProvider.get()).logEvent(s,{message_id:n[RS],message_name:n[fO],message_time:n[dO],message_device_time:Math.floor(Date.now()/1e3)})}function HO(r){switch(r){case Fl.NOTIFICATION_CLICKED:return"notification_open";case Fl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function FO(r,e){const n=e.data;if(!n.isFirebaseMessaging)return;r.onMessageHandler&&n.messageType===Fl.PUSH_RECEIVED&&(typeof r.onMessageHandler=="function"?r.onMessageHandler(P0(n)):r.onMessageHandler.next(P0(n)));const s=n.data;VO(s)&&s[mO]==="1"&&await qO(r,n.messageType,s)}const V0="@firebase/messaging",k0="0.12.23";/**
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
 */const YO=r=>{const e=new xO(r.getProvider("app").getImmediate(),r.getProvider("installations-internal").getImmediate(),r.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>FO(e,n)),e},GO=r=>{const e=r.getProvider("messaging").getImmediate();return{getToken:s=>BO(e,s)}};function XO(){Ci(new ni("messaging",YO,"PUBLIC")),Ci(new ni("messaging-internal",GO,"PRIVATE")),Yn(V0,k0),Yn(V0,k0,"esm2020")}/**
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
 */async function KO(){try{await uT()}catch{return!1}return typeof window<"u"&&lT()&&c1()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function QO(r=Lm()){return KO().then(e=>{if(!e)throw dn.create("unsupported-browser")},e=>{throw dn.create("indexed-db-unsupported")}),fo(cr(r),"messaging").getImmediate()}XO();const $O={apiKey:"AIzaSyCcq7F0omw0ZAwR_Ft5_fR3MBqzbui7Ghw",authDomain:"ribbon-hope-town.firebaseapp.com",projectId:"ribbon-hope-town",storageBucket:"ribbon-hope-town.firebasestorage.app",messagingSenderId:"886523116849",appId:"1:886523116849:web:1bfa88a130bc7b33d7c410",measurementId:"G-41SN0VSCZQ"},bp=fT($O),Ap=mN(bp);SD(bp);QO(bp);const ZO="employees",WO="meetingRooms",JO="points",eM="allPoints",tM="junctions",nM="allJunctions",OS=async r=>{try{console.log("getCollection",r);const e=await SN(dN(Ap,r)),n=[];return e.forEach(s=>{n.push({id:s.id,...s.data()})}),n}catch(e){throw console.error(`Error getting ${r} collection:`,e),e}},iM=async()=>OS(ZO),rM=async()=>OS(WO),sM=async()=>oM(JO,eM),aM=async()=>lM(tM,nM),oM=async(r,e)=>{const n=AE(Ap,r,e),s={};try{const o=await IE(n);if(!o.exists())return{};const u=o.data();return Object.keys(u).forEach(f=>{const m=u[f];m&&Array.isArray(m.default)?s[f]=m.default:s[f]=[]}),s}catch(o){return console.error("Error getting document:",o),{}}},lM=async(r,e)=>{const n=AE(Ap,r,e),s={};try{const o=await IE(n);if(!o.exists())return{};const u=o.data();return Object.keys(u).forEach(f=>{const m=u[f];m&&typeof m.default=="object"?s[f]=m.default:s[f]={}}),s}catch(o){return console.error("Error getting document:",o),{}}return s};function Im(r,e,n,s,o){const u=new Map;if(n.forEach(z=>{u.set(z.label,z)}),!u.has(r)||!u.has(e))return null;if(r===e)return{path:[r],segments:[],totalDistance:0};const f=new Map,m=new Map,y=new Set,g=new Set;for(Object.entries(s).forEach(([z,G])=>{g.add(z),G.forEach(X=>g.add(X))}),g.forEach(z=>{f.set(z,z===r?0:1/0),m.set(z,null),y.add(z)});y.size>0;){let z=null,G=1/0;for(const ae of y){const ne=f.has(ae)?f.get(ae):1/0;ne<G&&(G=ne,z=ae)}if(!z||G===1/0||(z!==null&&y.delete(z),z===e))break;const X=s[z]||[],oe=u.get(z);oe&&X.forEach(ae=>{if(!y.has(ae))return;const ne=u.get(ae);if(!ne)return;const _e=Math.sqrt(Math.pow(ne.x-oe.x,2)+Math.pow(ne.y-oe.y,2)),ce=(f.get(z)||0)+_e;ce<(f.get(ae)||1/0)&&(f.set(ae,ce),m.set(ae,z))})}const T=[];let b=e;for(;b;)T.unshift(b),b=m.get(b)||null;if(r[0]===e[0]&&(T.length===0||T[0]!==r||T[T.length-1]!==e))return console.warn("Invalid path constructed:",T.length,T[0],r,T[T.length-1],e),null;const A=[];let x=0;for(let z=0;z<T.length-1;z++){const G=u.get(T[z]),X=u.get(T[z+1]);if(G&&X){const oe=Math.atan2(X.y-G.y,X.x-G.x),ae=Math.sqrt(Math.pow(X.x-G.x,2)+Math.pow(X.y-G.y,2));A.push({from:G,to:X,angle:oe,floor:o}),x+=ae}}return{path:T,segments:A,totalDistance:x}}function uM(r,e,n,s,o,u,f,m){const y=[];f&&y.push("B1-2","B2-2"),m&&y.push("B3");let g=null;for(const T of y){const b=u[n],A=u[s];if(!b||!A)continue;const x=Im(r,T,o,b,n),z=Im(T,e,o,A,s);if(x&&z){const G=x.totalDistance+z.totalDistance;(!g||G<g.totalDistance)&&(g={path:[...x.path,...z.path.slice(1)],segments:[...x.segments,...z.segments],totalDistance:G})}}return g}const cM=({segments:r,pathColor:e="#ff0000",pathWidth:n=2,showArrows:s=!0,arrowColor:o="#ff0000",showLine:u=!1,displayedFloor:f})=>V.jsx(V.Fragment,{children:r.filter(m=>m.floor===f).map((m,y)=>{const{from:g,to:T,angle:b}=m,A=Math.sqrt(Math.pow(T.x-g.x,2)+Math.pow(T.y-g.y,2)),x=(g.x+T.x)/2,z=(g.y+T.y)/2;return V.jsxs("div",{children:[u&&V.jsx("div",{style:{position:"absolute",left:`${g.x}%`,top:`${g.y}%`,width:`${A}%`,height:`${n}px`,backgroundColor:e,transformOrigin:"0 50%",transform:`translateY(-2px) rotate(${b}rad)`,pointerEvents:"none",zIndex:1e3}}),s&&V.jsx("div",{style:{position:"absolute",left:`${x}%`,top:`${z}%`,transform:`translate(-50%, -70%) rotate(${b}rad)`,pointerEvents:"none",zIndex:1001},children:V.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",children:V.jsx("polygon",{points:"0,10 15,5 10,10 15,15",fill:o,stroke:o,strokeWidth:"1"})})})]},y)})});function hM(r){const[e,n]=nn.useState(null),[s,o]=nn.useState(!1),[u,f]=nn.useState({});de.useEffect(()=>{(async()=>{try{const T=await aM();f(T)}catch(T){console.error("Error loading data:",T)}})()},[]);const m=nn.useCallback((g,T,b,A,x,z)=>{o(!0);try{let G=null;if(console.log("Debug - start and end",{startFloor:b,targetFloor:A}),b===A){const X=u[b];X&&(G=Im(g,T,r,X,b),console.log("Debug - same floor"))}else console.log("Debug - between floors"),G=uM(g,T,b,A,r,u,x,z);n(G)}catch(G){console.error("Pathfinding error:",G),n(null)}finally{o(!1)}},[r]),y=nn.useCallback(()=>{n(null)},[]);return{currentPath:e,isPathfinding:s,findAndSetPath:m,clearPath:y}}const fM=({showNavigation:r,isDevModeEnabled:e,targetRoom:n,setTargetRoom:s,myLocation:o,setMyLocation:u,startColor:f,setStartColor:m,targetColor:y,setTargetColor:g,onClose:T})=>{const[b,A]=de.useState(!1),[x,z]=de.useState(!1),[G,X]=de.useState(8),[oe,ae]=de.useState(8),[ne,_e]=de.useState(!1),[ce,we]=de.useState("#ff0000"),[M,w]=de.useState(2),[C,D]=de.useState(!1),[P,k]=de.useState(null),[N,st]=de.useState(!0),[Le,Y]=de.useState(!0),ee=n?n.charAt(0):null,le=o?o.charAt(0):null,[De,I]=de.useState({});de.useEffect(()=>{(async()=>{try{const He=await sM();I(He)}catch(He){console.error("Error loading data:",He)}})()},[]),de.useEffect(()=>{k(ee)},[ee]);const Z=()=>{k(ye=>ye===ee?le:ee)};de.useEffect(()=>{an()},[n,o]),de.useEffect(()=>{localStorage.setItem("floorplan-start-color",f)},[f]),de.useEffect(()=>{localStorage.setItem("floorplan-target-color",y)},[y]);const se=P?De[P]??[]:[],te=se.filter(ye=>!ye.label.startsWith("J")&&!ye.label.startsWith("B")),$=se.filter(ye=>ye.label.startsWith("J")||ye.label.startsWith("B")),fe=Object.values(De).flat().filter(ye=>ye.label.startsWith("J")||ye.label.startsWith("B")),{currentPath:Se,isPathfinding:Ne,findAndSetPath:ot,clearPath:Nt}=hM(fe),Qt=(()=>{switch(P){case"1":return"/floor-plan-app/FloorPlan_1_clear.png";case"2":return"/floor-plan-app/FloorPlan_2_clear.png";case"3":return"/floor-plan-app/FloorPlan_3_clear.png";case"4":return"/floor-plan-app/FloorPlan_4.png";default:return"/floor-plan-app/FloorPlan_4.png"}})(),Gn=ye=>b||ye===o||ye===n,In=ye=>ye===o?f:ye===n?y:"red",Dn=ye=>ye===o?G:ye===n?oe:8,Di=nn.useCallback((ye,He)=>{if(!He)return null;const on=De[He]??[],vn=on.filter(dt=>dt.label.startsWith("J")||dt.label.startsWith("B")),Xn=on.find(dt=>dt.label===ye);if(!Xn)return null;let _n=null,On=1/0;return vn.forEach(dt=>{const Ye=Math.sqrt(Math.pow(dt.x-Xn.x,2)+Math.pow(dt.y-Xn.y,2));Ye<On&&(On=Ye,_n=dt.label)}),_n},[De]),ta=nn.useCallback(()=>{if(console.log("Debug - handleFindPath called"),!o||!n)return;const ye=Di(o,le),He=Di(n,ee);console.log("Debug - Found junctions:",{startJunction:ye,targetJunction:He}),!(!ye||!He||!ee||!le)&&ye!==He&&(ot(He,ye,ee,le,N,Le),k(le),_e(!0))},[o,n,Di,ot,le,ee,N,Le]),an=nn.useCallback(()=>{Nt(),_e(!1)},[Nt]);return V.jsx("div",{className:"floor-plan-container",children:V.jsxs("div",{className:"floor-plan-content",children:[V.jsxs("div",{className:"floor-plan-header",children:[V.jsx("div",{className:"floor-plan-header-icon-wrapper",children:V.jsx(SA,{className:"floor-plan-header-icon"})}),V.jsx("h2",{className:"floor-plan-title",children:"Floor Map"}),T&&V.jsx("button",{onClick:T,className:"floor-plan-close-button","aria-label":"Close floor plan",children:V.jsx(Pc,{size:20})})]}),V.jsxs("div",{className:"floor-plan-controls",children:[V.jsxs("div",{className:"floor-plan-room-input",children:[V.jsx("label",{className:"floor-plan-label",children:"Target Room"}),V.jsxs("div",{className:"floor-plan-input-wrapper",children:[V.jsx(z0,{className:"floor-plan-search-icon"}),V.jsx("input",{type:"text",placeholder:"Search rooms...",value:n,onChange:ye=>s(ye.target.value.toUpperCase().replace(/\s+/g,"")),className:"floor-plan-input"})]})]}),V.jsxs("div",{className:"floor-plan-room-input",children:[V.jsx("label",{className:"floor-plan-label",children:"My Location"}),V.jsx("div",{className:"floor-plan-input-wrapper",children:V.jsx("input",{type:"text",placeholder:"e.g., 4N05A",value:o,onChange:ye=>u(ye.target.value.toUpperCase().replace(/\s+/g,"")),className:"floor-plan-input"})})]}),r&&V.jsxs("div",{className:"floor-plan-pathfinding-controls",children:[V.jsxs("button",{onClick:ta,disabled:Ne||!o||!n,className:"floor-plan-path-button",children:[V.jsx(CA,{size:16}),Ne?"Finding Path...":"Find Path"]}),Se&&V.jsxs("button",{onClick:an,className:"floor-plan-clear-button",children:[V.jsx(AA,{size:16}),"Clear Path"]}),le&&ee&&le!==ee&&V.jsxs("div",{className:"floor-plan-checkbox-group",children:[V.jsxs("label",{className:"floor-plan-checkbox",children:[V.jsx("input",{type:"checkbox",checked:N,onChange:ye=>st(ye.target.checked)}),"Use Stairs"]}),V.jsxs("label",{className:"floor-plan-checkbox",children:[V.jsx("input",{type:"checkbox",checked:Le,onChange:ye=>Y(ye.target.checked)}),"Use Elevator"]})]})]})]}),V.jsx("div",{className:"floor-plan-legend",children:V.jsxs("div",{className:"floor-plan-legend-list",children:[V.jsxs("div",{className:"floor-plan-legend-item",children:[V.jsx("label",{children:"Target"}),V.jsxs("div",{className:"floor-plan-legend-controls",children:[V.jsx("input",{type:"range",min:3,max:20,value:oe,onChange:ye=>ae(Number(ye.target.value))}),V.jsx("input",{type:"color",value:y,onChange:ye=>g(ye.target.value),className:"floor-plan-color-picker"})]})]}),V.jsxs("div",{className:"floor-plan-legend-item",children:[V.jsx("label",{children:"My location"}),V.jsxs("div",{className:"floor-plan-legend-controls",children:[V.jsx("input",{type:"range",min:3,max:20,value:G,onChange:ye=>X(Number(ye.target.value))}),V.jsx("input",{type:"color",value:f,onChange:ye=>m(ye.target.value),className:"floor-plan-color-picker"})]})]}),r&&ne&&Se&&V.jsxs("div",{className:"floor-plan-legend-item",children:[V.jsx("label",{children:"Path"}),V.jsxs("div",{className:"floor-plan-legend-controls",children:[V.jsx("input",{type:"range",min:1,max:8,value:M,onChange:ye=>w(Number(ye.target.value))}),V.jsx("input",{type:"color",value:ce,onChange:ye=>we(ye.target.value),className:"floor-plan-color-picker"}),V.jsxs("label",{className:"floor-plan-checkbox",children:[V.jsx("input",{type:"checkbox",checked:C,onChange:ye=>D(ye.target.checked)}),"Path"]})]})]})]})}),r&&Se&&e&&V.jsxs("div",{className:"floor-plan-path-info",children:[V.jsxs("p",{children:["Path found: ",Se.path.length," junctions"]}),V.jsxs("p",{children:["Route: ",Se.path.join(" → ")]})]}),V.jsx("div",{className:"floor-plan-frame",children:V.jsx(jw,{initialScale:1,centerOnInit:!0,limitToBounds:!1,minScale:.2,maxScale:10,wheel:{step:50},doubleClick:{disabled:!0},children:({resetTransform:ye})=>V.jsxs(V.Fragment,{children:[V.jsx("button",{className:"fit-to-view-button",onClick:()=>ye(),children:"Fit to view"}),le&&ee&&le!==ee&&V.jsxs("button",{onClick:Z,className:"fit-to-view-button",children:["Switch to Floor ",P===ee?le:ee]}),e&&V.jsxs(V.Fragment,{children:[V.jsx("button",{onClick:()=>A(!b),children:b?"Hide Points":"Show Points"}),V.jsx("button",{onClick:()=>z(!x),children:x?"Hide Junctions":"Show Junctions"})]}),V.jsx(Hw,{children:V.jsxs("div",{className:"floor-plan-image-zommable-content",children:[V.jsx("img",{src:Qt,alt:"Floor Plan",className:"floor-plan-image",style:{width:"100%",height:"auto",objectFit:"contain"}}),r&&ne&&Se&&V.jsx(cM,{segments:Se.segments,pathColor:ce,pathWidth:M,showArrows:!0,showLine:C,arrowColor:ce,displayedFloor:P}),r&&ne&&Se&&Se.path.length>0&&(()=>{const He=Se.path[0],on=Se.path[Se.path.length-1],vn=$.find(dt=>dt.label===He),Xn=$.find(dt=>dt.label===on);let _n=Se.path.find((dt,Ye)=>!!(dt.startsWith("B")&&Ye>0&&Ye<Se.path.length-1&&Se.path[Ye-1][1]!==Se.path[Ye+1][1]));_n||(_n=Se.path.filter(Ye=>Ye.startsWith("B"))[0]);const On=$.find(dt=>dt.label===_n);return V.jsxs(V.Fragment,{children:[vn&&V.jsx("div",{style:{position:"absolute",left:`${vn.x}%`,top:`${vn.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:"blue",borderRadius:"5%",width:"6px",height:"6px",pointerEvents:"none",zIndex:999}}),Xn&&V.jsx("div",{style:{position:"absolute",left:`${Xn.x}%`,top:`${Xn.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:"blue",borderRadius:"5%",width:"6px",height:"6px",pointerEvents:"none",zIndex:999}}),On&&V.jsx("div",{style:{position:"absolute",left:`${On.x}%`,top:`${On.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:"green",borderRadius:"5%",width:"6px",height:"6px",pointerEvents:"none",zIndex:999}})]})})(),te.map((He,on)=>Gn(He.label)?V.jsx("div",{style:{position:"absolute",left:`${He.x}%`,top:`${He.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:In(He.label),borderRadius:"50%",width:`${Dn(He.label)}px`,height:`${Dn(He.label)}px`,pointerEvents:"none",zIndex:1002}},on):null),$.map((He,on)=>x?V.jsx("div",{style:{position:"absolute",left:`${He.x}%`,top:`${He.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:In(He.label),borderRadius:"50%",width:`${Dn(He.label)}px`,height:`${Dn(He.label)}px`,pointerEvents:"none",zIndex:1002,display:"flex",alignItems:"center",justifyContent:"center",color:"black",fontSize:"10px",textAlign:"center",whiteSpace:"nowrap"},children:He.label},on):null)]})})]})})})]})})},dM=({onShowOnMap:r})=>{const[e,n]=de.useState(""),[s,o]=de.useState(null),[u,f]=de.useState(null),[m,y]=de.useState("firstName"),[g,T]=de.useState("asc"),[b,A]=de.useState(()=>localStorage.getItem("myLocation")||""),[x,z]=de.useState(!1),[G,X]=de.useState(!1),[oe,ae]=de.useState(!1),[ne,_e]=de.useState(b),[ce,we]=de.useState([]),[M,w]=de.useState([]);de.useEffect(()=>{(async()=>{try{const pe=await iM(),fe=await rM();we(pe),w(fe)}catch(pe){console.error("Error loading data:",pe)}})()},[]);const C=de.useMemo(()=>{s&&o(null);const $=e.trim().toLowerCase();return $?ce.filter(fe=>{const Se=fe.firstName.toLowerCase(),Ne=fe.lastName.toLowerCase(),ot=fe.seatNumber.toLowerCase(),Nt=`${Se} ${Ne}`,Qt=`${Ne} ${Se}`;return Se.includes($)||Ne.includes($)||ot.includes($)||Nt.includes($)||Qt.includes($)}).sort((fe,Se)=>{let Ne,ot;switch(m){case"firstName":Ne=fe.firstName.toLowerCase(),ot=Se.firstName.toLowerCase();break;case"lastName":Ne=fe.lastName.toLowerCase(),ot=Se.lastName.toLowerCase();break;case"seat":Ne=fe.seatNumber.toLowerCase(),ot=Se.seatNumber.toLowerCase();break;default:Ne=fe.firstName.toLowerCase(),ot=Se.firstName.toLowerCase()}const Nt=Ne.localeCompare(ot);return g==="asc"?Nt:-Nt}):[]},[e,ce,m,g]),D=de.useMemo(()=>{u&&f(null);const $=e.trim().toLowerCase();return $?M.filter(pe=>{const fe=pe.Name.toLowerCase(),Se=pe.roomNumber.toLowerCase();return fe.includes($)||Se.includes($)}):[]},[e]),P=$=>{n($.target.value)},k=()=>n(""),N=$=>{o($),f(null)},st=$=>{f($),o(null)},Le=()=>{o(null),f(null)},Y=$=>{y($.target.value)},ee=$=>{T($.target.value)},le=e.trim()&&(oe&&D.length>0||!oe&&(C.length>0||D.length>0))&&!s&&!u,De=()=>{_e(b),X(!0)},I=()=>{A(ne),localStorage.setItem("myLocation",ne),X(!1),x&&(s!==null?r(s.seatNumber,ne):u!=null&&u.roomNumber?r(u.roomNumber,ne):r("",ne))},Z=$=>{const pe=$.target.checked;z(pe),pe&&b!==""?s!==null?r(s.seatNumber,b):u!=null&&u.roomNumber?r(u.roomNumber,b):r("",b):pe||_e("")},se=$=>{const pe=$.target.checked;ae(pe)},te=()=>{console.log("debug - show on map",{searchValue:e,myLocation:b},u==null?void 0:u.roomNumber);let $="";x&&($=b),s!==null?r(s.seatNumber,$):u!=null&&u.roomNumber?r(u.roomNumber,$):r("",$)};return V.jsx("div",{className:"seat-finder-container",children:V.jsxs("div",{className:"seat-finder-content",children:[V.jsxs("div",{className:"seat-finder-header",children:[V.jsx("h2",{className:"seat-finder-title",children:"Seat Finder"}),V.jsx("p",{className:"seat-finder-subtitle",children:"Find colleagues and meeting rooms"})]}),V.jsxs("div",{className:"search-section",children:[V.jsxs("div",{className:"search-input-wrapper",children:[V.jsx("div",{className:"search-icon-container",children:V.jsx(z0,{className:"search-icon"})}),V.jsx("input",{type:"text",placeholder:"Search by name, seat, or room...",value:e,onChange:P,className:"search-input"}),e&&V.jsx("button",{className:"clear-search-button",onClick:k,"aria-label":"Clear search",children:V.jsx(Pc,{className:"search-icon"})})]}),s&&V.jsxs("div",{className:"selected-employee-container",children:[V.jsxs("div",{className:"selected-employee-info-wrapper",children:[V.jsxs("div",{className:"selected-employee-details",children:[V.jsx("div",{className:"selected-employee-icon-wrapper",children:V.jsx(IA,{className:"selected-employee-icon"})}),V.jsxs("div",{children:[V.jsxs("div",{className:"selected-employee-name",children:[s.firstName," ",s.lastName]}),V.jsxs("div",{className:"selected-employee-department",children:[s.department," • Seat ",s.seatNumber]})]})]}),V.jsx("button",{onClick:Le,className:"selected-employee-close-button",children:V.jsx(Pc,{className:"selected-employee-close-icon"})})]}),(s.floor===4||s.floor===3||s.floor===2||s.floor===1)&&V.jsx("button",{className:"map-toggle-button",onClick:te,children:"Show on Map"})]}),u&&V.jsxs("div",{className:"selected-employee-container",children:[V.jsxs("div",{className:"selected-employee-info-wrapper",children:[V.jsxs("div",{className:"selected-employee-details",children:[V.jsx("div",{className:"selected-employee-icon-wrapper",children:V.jsx(_A,{className:"selected-employee-icon"})}),V.jsxs("div",{children:[V.jsx("div",{className:"selected-employee-name",children:u.Name}),V.jsxs("div",{className:"selected-employee-department",children:["Room ",u.roomNumber," • Floor ",u.floor," • Wing ",u.wing," • Capacity ",u.capacity," • ",u.Type," Room"]})]})]}),V.jsx("button",{onClick:Le,className:"selected-employee-close-button",children:V.jsx(Pc,{className:"selected-employee-close-icon"})})]}),(u.floor===4||u.floor===3||u.floor===2||u.floor===1)&&V.jsx("button",{className:"map-toggle-button",onClick:te,children:"Show on Map"})]}),le&&V.jsxs("div",{className:"search-results-container",children:[V.jsxs("div",{className:"search-results-header",children:[V.jsxs("div",{children:[V.jsxs("h4",{className:"search-results-title",children:["Search Results (",C.length+D.length,")"]}),C.length>0&&D.length>0&&V.jsx("div",{className:"sort-control",children:V.jsxs("label",{children:[V.jsx("input",{type:"checkbox",checked:oe,onChange:se}),"Only meeting rooms"]})})]}),V.jsxs("div",{className:"sorting-controls",children:[V.jsxs("div",{className:"sort-control",children:[V.jsx("label",{htmlFor:"sort-by",className:"sort-label",children:"Sort by:"}),V.jsxs("select",{id:"sort-by",value:m,onChange:Y,className:"sort-select",children:[V.jsx("option",{value:"firstName",children:"First Name"}),V.jsx("option",{value:"lastName",children:"Last Name"}),V.jsx("option",{value:"seat",children:"Seat"})]})]}),V.jsxs("div",{className:"sort-control",children:[V.jsx("label",{htmlFor:"order-by",className:"sort-label",children:"Order by:"}),V.jsxs("select",{id:"order-by",value:g,onChange:ee,className:"sort-select",children:[V.jsx("option",{value:"asc",children:"A to Z"}),V.jsx("option",{value:"desc",children:"Z to A"})]})]})]})]}),V.jsxs("div",{className:"search-results-list",children:[!oe&&C.map(($,pe)=>V.jsx("div",{onClick:()=>{N($)},className:"search-result-item group",children:V.jsxs("div",{className:"search-result-content",children:[V.jsxs("div",{className:"search-result-employee-info",children:[V.jsx("div",{className:"search-result-avatar-wrapper",children:V.jsxs("span",{className:"search-result-avatar-text",children:[$.firstName[0],$.lastName[0]]})}),V.jsxs("div",{children:[V.jsxs("div",{className:"search-result-name",children:[$.firstName," ",$.lastName]}),V.jsx("div",{className:"search-result-department",children:$.department})]})]}),V.jsxs("div",{className:"search-result-location",children:[V.jsxs("div",{className:"search-result-seat",children:[V.jsx(Gv,{className:"search-result-map-pin-icon"}),$.seatNumber]}),V.jsxs("div",{className:"search-result-floor-wing",children:["Floor ",$.floor," • Wing ",$.wing]})]})]})},pe)),D.map(($,pe)=>V.jsx("div",{onClick:()=>st($),className:"search-result-item group",children:V.jsxs("div",{className:"search-result-content",children:[V.jsxs("div",{className:"search-result-employee-info",children:[V.jsx("div",{className:"search-result-avatar-wrapper",children:V.jsx("span",{className:"search-result-avatar-text",children:$.Name[0]})}),V.jsxs("div",{children:[V.jsx("div",{className:"search-result-name",children:$.Name}),V.jsxs("div",{className:"search-result-department",children:[$.Type," Room • Capacity ",$.capacity]})]})]}),V.jsxs("div",{className:"search-result-location",children:[V.jsxs("div",{className:"search-result-seat",children:[V.jsx(Gv,{className:"search-result-map-pin-icon"}),$.roomNumber]}),V.jsxs("div",{className:"search-result-floor-wing",children:["Floor ",$.floor," • Wing ",$.wing]})]})]})},pe))]})]}),V.jsxs("div",{className:"my-location-controls",style:{display:"flex",alignItems:"center",gap:"1rem",marginTop:"0.5rem"},children:[b!==""&&V.jsxs("label",{children:[V.jsx("input",{type:"checkbox",checked:x,onChange:Z})," ","show my location (",b,")"]}),V.jsx("button",{className:"set-location-button",onClick:De,disabled:G,children:b===""?"set my location":"edit my location"})]}),G&&V.jsxs("div",{className:"my-location-input",style:{marginTop:"0.5rem",display:"flex",gap:"0.5rem"},children:[V.jsx("input",{type:"text",value:ne,onChange:$=>_e($.target.value.toUpperCase().replace(/\s+/g,"")),placeholder:"Location not defined",style:{flex:1,padding:"0.5rem",borderRadius:"0.5rem",border:"1px solid #ccc"}}),V.jsx("button",{onClick:I,children:"Save"})]}),e.trim()&&C.length===0&&D.length===0&&!s&&!u&&V.jsxs("div",{className:"no-employees-found-container",children:[V.jsx("div",{className:"no-employees-found-message",children:"No employees found matching your search"}),V.jsx("div",{className:"no-employees-found-tip",children:"Try searching by name, seat number, or department"})]})]})]})})},mM="1.0.3",pM="26/08/2025",x0={version:mM,date:pM},gM=({setStartColor:r,setTargetColor:e,showNavigation:n,setShowNavigation:s,isDevModeEnabled:o,setDevModeEnabled:u})=>{const[f,m]=de.useState(!1),[y,g]=de.useState(!1),[T,b]=de.useState(!1),A=de.useRef(null),x=()=>m(!f),z=()=>{b(oe=>!oe)},G=oe=>{A.current&&!A.current.contains(oe.target)&&m(!1)},X=()=>{localStorage.removeItem("floorplan-start-color"),localStorage.removeItem("floorplan-target-color"),r&&r("#0000ff"),e&&e("#000000"),m(!1)};return de.useEffect(()=>(document.addEventListener("mousedown",G),()=>document.removeEventListener("mousedown",G)),[]),V.jsxs("header",{className:"header",children:[V.jsxs("div",{className:"header-left",dir:"ltr",ref:A,children:[V.jsx("button",{className:"menu-button",onClick:x,"aria-label":"Menu",children:V.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[V.jsx("line",{x1:"4",x2:"20",y1:"12",y2:"12"}),V.jsx("line",{x1:"4",x2:"20",y1:"6",y2:"6"}),V.jsx("line",{x1:"4",x2:"20",y1:"18",y2:"18"})]})}),f&&V.jsxs("div",{className:"menu-dropdown",children:[V.jsx("div",{onClick:X,children:"Restore Default Colors"}),V.jsx("div",{onClick:()=>{g(!0),m(!1)},children:"About"}),V.jsx("div",{onClick:z,children:"Settings ▸"}),T&&V.jsxs(V.Fragment,{children:[V.jsx("div",{className:"submenu",onClick:()=>{s(!n),m(!1),b(!1)},children:n?"Hide Navigation":"Show Navigation"}),V.jsx("div",{className:"submenu",onClick:()=>{u(!o),m(!1),b(!1)},children:o?"Close Dev Mode":"Enable Dev Mode"})]})]})]}),y&&V.jsx("div",{className:"modal-overlay",onClick:()=>g(!1),children:V.jsxs("div",{className:"about-modal-content",onClick:oe=>oe.stopPropagation(),children:[V.jsx("h2",{children:"Seat Finder"}),V.jsxs("p",{children:["Version: ",x0.version]}),V.jsxs("p",{children:["Date: ",x0.date]}),V.jsx("button",{onClick:()=>g(!1),className:"about-close-button",children:"Close"})]})})]})},yM=()=>{const[r,e]=de.useState(!1),[n,s]=de.useState(!1),[o,u]=de.useState(!1),[f,m]=de.useState(""),[y,g]=de.useState(""),[T,b]=de.useState(()=>localStorage.getItem("floorplan-target-color")||"#000000"),[A,x]=de.useState(()=>localStorage.getItem("floorplan-start-color")||"#0000ff"),z=de.useRef(null);return de.useEffect(()=>{r&&z.current&&z.current.scrollIntoView({behavior:"smooth"})},[r]),V.jsxs(V.Fragment,{children:[V.jsx(gM,{setStartColor:x,setTargetColor:b,showNavigation:n,setShowNavigation:s,isDevModeEnabled:o,setDevModeEnabled:u}),V.jsx(dM,{searchValue:f,setSearchValue:m,onShowOnMap:(G,X)=>{m(G),g(X),e(!0)}}),r&&V.jsx("div",{ref:z,children:V.jsx(fM,{showNavigation:n,isDevModeEnabled:o,targetRoom:f.trim(),setTargetRoom:m,myLocation:y.trim(),setMyLocation:g,startColor:A,setStartColor:x,targetColor:T,setTargetColor:b,onClose:()=>{console.log("Floor plan closed"),e(!1)}})})]})},vM=fA.createRoot(document.getElementById("root"));vM.render(V.jsx(nn.StrictMode,{children:V.jsx(yM,{})}));
