(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function $E(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ld={exports:{}},Dl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv;function Sw(){if(Xv)return Dl;Xv=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:i,type:s,key:f,ref:o!==void 0?o:null,props:u}}return Dl.Fragment=e,Dl.jsx=n,Dl.jsxs=n,Dl}var Kv;function bw(){return Kv||(Kv=1,Ld.exports=Sw()),Ld.exports}var C=bw(),Ud={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv;function ww(){if(Qv)return De;Qv=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),b=Symbol.iterator;function w(D){return D===null||typeof D!="object"?null:(D=b&&D[b]||D["@@iterator"],typeof D=="function"?D:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,G={};function X(D,Z,ne){this.props=D,this.context=Z,this.refs=G,this.updater=ne||x}X.prototype.isReactComponent={},X.prototype.setState=function(D,Z){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Z,"setState")},X.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function ue(){}ue.prototype=X.prototype;function re(D,Z,ne){this.props=D,this.context=Z,this.refs=G,this.updater=ne||x}var ae=re.prototype=new ue;ae.constructor=re,z(ae,X.prototype),ae.isPureReactComponent=!0;var Te=Array.isArray,ce={H:null,A:null,T:null,S:null,V:null},we=Object.prototype.hasOwnProperty;function O(D,Z,ne,ee,ge,Ce){return ne=Ce.ref,{$$typeof:i,type:D,key:Z,ref:ne!==void 0?ne:null,props:Ce}}function A(D,Z){return O(D.type,Z,void 0,void 0,void 0,D.props)}function N(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function M(D){var Z={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ne){return Z[ne]})}var V=/\/+/g;function k(D,Z){return typeof D=="object"&&D!==null&&D.key!=null?M(""+D.key):Z.toString(36)}function R(){}function Ze(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(R,R):(D.status="pending",D.then(function(Z){D.status==="pending"&&(D.status="fulfilled",D.value=Z)},function(Z){D.status==="pending"&&(D.status="rejected",D.reason=Z)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function Le(D,Z,ne,ee,ge){var Ce=typeof D;(Ce==="undefined"||Ce==="boolean")&&(D=null);var me=!1;if(D===null)me=!0;else switch(Ce){case"bigint":case"string":case"number":me=!0;break;case"object":switch(D.$$typeof){case i:case e:me=!0;break;case E:return me=D._init,Le(me(D._payload),Z,ne,ee,ge)}}if(me)return ge=ge(D),me=ee===""?"."+k(D,0):ee,Te(ge)?(ne="",me!=null&&(ne=me.replace(V,"$&/")+"/"),Le(ge,Z,ne,"",function(le){return le})):ge!=null&&(N(ge)&&(ge=A(ge,ne+(ge.key==null||D&&D.key===ge.key?"":(""+ge.key).replace(V,"$&/")+"/")+me)),Z.push(ge)),1;me=0;var Je=ee===""?".":ee+":";if(Te(D))for(var Me=0;Me<D.length;Me++)ee=D[Me],Ce=Je+k(ee,Me),me+=Le(ee,Z,ne,Ce,ge);else if(Me=w(D),typeof Me=="function")for(D=Me.call(D),Me=0;!(ee=D.next()).done;)ee=ee.value,Ce=Je+k(ee,Me++),me+=Le(ee,Z,ne,Ce,ge);else if(Ce==="object"){if(typeof D.then=="function")return Le(Ze(D),Z,ne,ee,ge);throw Z=String(D),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return me}function F(D,Z,ne){if(D==null)return D;var ee=[],ge=0;return Le(D,ee,"","",function(Ce){return Z.call(ne,Ce,ge++)}),ee}function te(D){if(D._status===-1){var Z=D._result;Z=Z(),Z.then(function(ne){(D._status===0||D._status===-1)&&(D._status=1,D._result=ne)},function(ne){(D._status===0||D._status===-1)&&(D._status=2,D._result=ne)}),D._status===-1&&(D._status=0,D._result=Z)}if(D._status===1)return D._result.default;throw D._result}var fe=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function ke(){}return De.Children={map:F,forEach:function(D,Z,ne){F(D,function(){Z.apply(this,arguments)},ne)},count:function(D){var Z=0;return F(D,function(){Z++}),Z},toArray:function(D){return F(D,function(Z){return Z})||[]},only:function(D){if(!N(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},De.Component=X,De.Fragment=n,De.Profiler=o,De.PureComponent=re,De.StrictMode=s,De.Suspense=y,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ce,De.__COMPILER_RUNTIME={__proto__:null,c:function(D){return ce.H.useMemoCache(D)}},De.cache=function(D){return function(){return D.apply(null,arguments)}},De.cloneElement=function(D,Z,ne){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var ee=z({},D.props),ge=D.key,Ce=void 0;if(Z!=null)for(me in Z.ref!==void 0&&(Ce=void 0),Z.key!==void 0&&(ge=""+Z.key),Z)!we.call(Z,me)||me==="key"||me==="__self"||me==="__source"||me==="ref"&&Z.ref===void 0||(ee[me]=Z[me]);var me=arguments.length-2;if(me===1)ee.children=ne;else if(1<me){for(var Je=Array(me),Me=0;Me<me;Me++)Je[Me]=arguments[Me+2];ee.children=Je}return O(D.type,ge,void 0,void 0,Ce,ee)},De.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},De.createElement=function(D,Z,ne){var ee,ge={},Ce=null;if(Z!=null)for(ee in Z.key!==void 0&&(Ce=""+Z.key),Z)we.call(Z,ee)&&ee!=="key"&&ee!=="__self"&&ee!=="__source"&&(ge[ee]=Z[ee]);var me=arguments.length-2;if(me===1)ge.children=ne;else if(1<me){for(var Je=Array(me),Me=0;Me<me;Me++)Je[Me]=arguments[Me+2];ge.children=Je}if(D&&D.defaultProps)for(ee in me=D.defaultProps,me)ge[ee]===void 0&&(ge[ee]=me[ee]);return O(D,Ce,void 0,void 0,null,ge)},De.createRef=function(){return{current:null}},De.forwardRef=function(D){return{$$typeof:m,render:D}},De.isValidElement=N,De.lazy=function(D){return{$$typeof:E,_payload:{_status:-1,_result:D},_init:te}},De.memo=function(D,Z){return{$$typeof:p,type:D,compare:Z===void 0?null:Z}},De.startTransition=function(D){var Z=ce.T,ne={};ce.T=ne;try{var ee=D(),ge=ce.S;ge!==null&&ge(ne,ee),typeof ee=="object"&&ee!==null&&typeof ee.then=="function"&&ee.then(ke,fe)}catch(Ce){fe(Ce)}finally{ce.T=Z}},De.unstable_useCacheRefresh=function(){return ce.H.useCacheRefresh()},De.use=function(D){return ce.H.use(D)},De.useActionState=function(D,Z,ne){return ce.H.useActionState(D,Z,ne)},De.useCallback=function(D,Z){return ce.H.useCallback(D,Z)},De.useContext=function(D){return ce.H.useContext(D)},De.useDebugValue=function(){},De.useDeferredValue=function(D,Z){return ce.H.useDeferredValue(D,Z)},De.useEffect=function(D,Z,ne){var ee=ce.H;if(typeof ne=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ee.useEffect(D,Z)},De.useId=function(){return ce.H.useId()},De.useImperativeHandle=function(D,Z,ne){return ce.H.useImperativeHandle(D,Z,ne)},De.useInsertionEffect=function(D,Z){return ce.H.useInsertionEffect(D,Z)},De.useLayoutEffect=function(D,Z){return ce.H.useLayoutEffect(D,Z)},De.useMemo=function(D,Z){return ce.H.useMemo(D,Z)},De.useOptimistic=function(D,Z){return ce.H.useOptimistic(D,Z)},De.useReducer=function(D,Z,ne){return ce.H.useReducer(D,Z,ne)},De.useRef=function(D){return ce.H.useRef(D)},De.useState=function(D){return ce.H.useState(D)},De.useSyncExternalStore=function(D,Z,ne){return ce.H.useSyncExternalStore(D,Z,ne)},De.useTransition=function(){return ce.H.useTransition()},De.version="19.1.0",De}var $v;function Hm(){return $v||($v=1,Ud.exports=ww()),Ud.exports}var oe=Hm();const Lt=$E(oe);var zd={exports:{}},Ol={},jd={exports:{}},Bd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zv;function Aw(){return Zv||(Zv=1,function(i){function e(F,te){var fe=F.length;F.push(te);e:for(;0<fe;){var ke=fe-1>>>1,D=F[ke];if(0<o(D,te))F[ke]=te,F[fe]=D,fe=ke;else break e}}function n(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var te=F[0],fe=F.pop();if(fe!==te){F[0]=fe;e:for(var ke=0,D=F.length,Z=D>>>1;ke<Z;){var ne=2*(ke+1)-1,ee=F[ne],ge=ne+1,Ce=F[ge];if(0>o(ee,fe))ge<D&&0>o(Ce,ee)?(F[ke]=Ce,F[ge]=fe,ke=ge):(F[ke]=ee,F[ne]=fe,ke=ne);else if(ge<D&&0>o(Ce,fe))F[ke]=Ce,F[ge]=fe,ke=ge;else break e}}return te}function o(F,te){var fe=F.sortIndex-te.sortIndex;return fe!==0?fe:F.id-te.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();i.unstable_now=function(){return f.now()-m}}var y=[],p=[],E=1,b=null,w=3,x=!1,z=!1,G=!1,X=!1,ue=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,ae=typeof setImmediate<"u"?setImmediate:null;function Te(F){for(var te=n(p);te!==null;){if(te.callback===null)s(p);else if(te.startTime<=F)s(p),te.sortIndex=te.expirationTime,e(y,te);else break;te=n(p)}}function ce(F){if(G=!1,Te(F),!z)if(n(y)!==null)z=!0,we||(we=!0,k());else{var te=n(p);te!==null&&Le(ce,te.startTime-F)}}var we=!1,O=-1,A=5,N=-1;function M(){return X?!0:!(i.unstable_now()-N<A)}function V(){if(X=!1,we){var F=i.unstable_now();N=F;var te=!0;try{e:{z=!1,G&&(G=!1,re(O),O=-1),x=!0;var fe=w;try{t:{for(Te(F),b=n(y);b!==null&&!(b.expirationTime>F&&M());){var ke=b.callback;if(typeof ke=="function"){b.callback=null,w=b.priorityLevel;var D=ke(b.expirationTime<=F);if(F=i.unstable_now(),typeof D=="function"){b.callback=D,Te(F),te=!0;break t}b===n(y)&&s(y),Te(F)}else s(y);b=n(y)}if(b!==null)te=!0;else{var Z=n(p);Z!==null&&Le(ce,Z.startTime-F),te=!1}}break e}finally{b=null,w=fe,x=!1}te=void 0}}finally{te?k():we=!1}}}var k;if(typeof ae=="function")k=function(){ae(V)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,Ze=R.port2;R.port1.onmessage=V,k=function(){Ze.postMessage(null)}}else k=function(){ue(V,0)};function Le(F,te){O=ue(function(){F(i.unstable_now())},te)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(F){F.callback=null},i.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<F?Math.floor(1e3/F):5},i.unstable_getCurrentPriorityLevel=function(){return w},i.unstable_next=function(F){switch(w){case 1:case 2:case 3:var te=3;break;default:te=w}var fe=w;w=te;try{return F()}finally{w=fe}},i.unstable_requestPaint=function(){X=!0},i.unstable_runWithPriority=function(F,te){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var fe=w;w=F;try{return te()}finally{w=fe}},i.unstable_scheduleCallback=function(F,te,fe){var ke=i.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?ke+fe:ke):fe=ke,F){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=fe+D,F={id:E++,callback:te,priorityLevel:F,startTime:fe,expirationTime:D,sortIndex:-1},fe>ke?(F.sortIndex=fe,e(p,F),n(y)===null&&F===n(p)&&(G?(re(O),O=-1):G=!0,Le(ce,fe-ke))):(F.sortIndex=D,e(y,F),z||x||(z=!0,we||(we=!0,k()))),F},i.unstable_shouldYield=M,i.unstable_wrapCallback=function(F){var te=w;return function(){var fe=w;w=te;try{return F.apply(this,arguments)}finally{w=fe}}}}(Bd)),Bd}var Wv;function Cw(){return Wv||(Wv=1,jd.exports=Aw()),jd.exports}var qd={exports:{}},hn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jv;function Rw(){if(Jv)return hn;Jv=1;var i=Hm();function e(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)p+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(y,p,E){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:y,containerInfo:p,implementation:E}}var f=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,hn.createPortal=function(y,p){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(y,p,null,E)},hn.flushSync=function(y){var p=f.T,E=s.p;try{if(f.T=null,s.p=2,y)return y()}finally{f.T=p,s.p=E,s.d.f()}},hn.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(y,p))},hn.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},hn.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var E=p.as,b=m(E,p.crossOrigin),w=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;E==="style"?s.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:b,integrity:w,fetchPriority:x}):E==="script"&&s.d.X(y,{crossOrigin:b,integrity:w,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},hn.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var E=m(p.as,p.crossOrigin);s.d.M(y,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(y)},hn.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var E=p.as,b=m(E,p.crossOrigin);s.d.L(y,E,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},hn.preloadModule=function(y,p){if(typeof y=="string")if(p){var E=m(p.as,p.crossOrigin);s.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(y)},hn.requestFormReset=function(y){s.d.r(y)},hn.unstable_batchedUpdates=function(y,p){return y(p)},hn.useFormState=function(y,p,E){return f.H.useFormState(y,p,E)},hn.useFormStatus=function(){return f.H.useHostTransitionStatus()},hn.version="19.1.0",hn}var e_;function Nw(){if(e_)return qd.exports;e_=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),qd.exports=Rw(),qd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function Iw(){if(t_)return Ol;t_=1;var i=Cw(),e=Hm(),n=Nw();function s(t){var r="https://react.dev/errors/"+t;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function f(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function y(t){var r=t.alternate;if(!r){if(r=u(t),r===null)throw Error(s(188));return r!==t?null:t}for(var a=t,l=r;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return m(h),t;if(d===l)return m(h),r;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var _=!1,T=h.child;T;){if(T===a){_=!0,a=h,l=d;break}if(T===l){_=!0,l=h,a=d;break}T=T.sibling}if(!_){for(T=d.child;T;){if(T===a){_=!0,a=d,l=h;break}if(T===l){_=!0,l=d,a=h;break}T=T.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:r}function p(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t;for(t=t.child;t!==null;){if(r=p(t),r!==null)return r;t=t.sibling}return null}var E=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),ue=Symbol.for("react.provider"),re=Symbol.for("react.consumer"),ae=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),we=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function k(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var R=Symbol.for("react.client.reference");function Ze(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===R?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case z:return"Fragment";case X:return"Profiler";case G:return"StrictMode";case ce:return"Suspense";case we:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case x:return"Portal";case ae:return(t.displayName||"Context")+".Provider";case re:return(t._context.displayName||"Context")+".Consumer";case Te:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return r=t.displayName||null,r!==null?r:Ze(t.type)||"Memo";case A:r=t._payload,t=t._init;try{return Ze(t(r))}catch{}}return null}var Le=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},ke=[],D=-1;function Z(t){return{current:t}}function ne(t){0>D||(t.current=ke[D],ke[D]=null,D--)}function ee(t,r){D++,ke[D]=t.current,t.current=r}var ge=Z(null),Ce=Z(null),me=Z(null),Je=Z(null);function Me(t,r){switch(ee(me,r),ee(Ce,t),ee(ge,null),r.nodeType){case 9:case 11:t=(t=r.documentElement)&&(t=t.namespaceURI)?Tv(t):0;break;default:if(t=r.tagName,r=r.namespaceURI)r=Tv(r),t=Sv(r,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ne(ge),ee(ge,t)}function le(){ne(ge),ne(Ce),ne(me)}function Be(t){t.memoizedState!==null&&ee(Je,t);var r=ge.current,a=Sv(r,t.type);r!==a&&(ee(Ce,t),ee(ge,a))}function et(t){Ce.current===t&&(ne(ge),ne(Ce)),Je.current===t&&(ne(Je),Al._currentValue=fe)}var ot=Object.prototype.hasOwnProperty,Tt=i.unstable_scheduleCallback,jt=i.unstable_cancelCallback,Ln=i.unstable_shouldYield,Wn=i.unstable_requestPaint,bn=i.unstable_now,No=i.unstable_getCurrentPriorityLevel,sa=i.unstable_ImmediatePriority,gr=i.unstable_UserBlockingPriority,dt=i.unstable_NormalPriority,aa=i.unstable_LowPriority,Vi=i.unstable_IdlePriority,yr=i.log,oa=i.unstable_setDisableYieldValue,mt=null,Xe=null;function It(t){if(typeof yr=="function"&&oa(t),Xe&&typeof Xe.setStrictMode=="function")try{Xe.setStrictMode(mt,t)}catch{}}var Dt=Math.clz32?Math.clz32:xi,la=Math.log,ua=Math.LN2;function xi(t){return t>>>=0,t===0?32:31-(la(t)/ua|0)|0}var Li=256,Ui=4194304;function Nn(t){var r=t&42;if(r!==0)return r;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Q(t,r,a){var l=t.pendingLanes;if(l===0)return 0;var h=0,d=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=Nn(l):(_&=T,_!==0?h=Nn(_):a||(a=T&~t,a!==0&&(h=Nn(a))))):(T=l&~d,T!==0?h=Nn(T):_!==0?h=Nn(_):a||(a=l&~t,a!==0&&(h=Nn(a)))),h===0?0:r!==0&&r!==h&&(r&d)===0&&(d=h&-h,a=r&-r,d>=a||d===32&&(a&4194048)!==0)?r:h}function he(t,r){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&r)===0}function Ue(t,r){switch(t){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pt(){var t=Li;return Li<<=1,(Li&4194048)===0&&(Li=256),t}function Ie(){var t=Ui;return Ui<<=1,(Ui&62914560)===0&&(Ui=4194304),t}function Kt(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function Qt(t,r){t.pendingLanes|=r,r!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ht(t,r,a,l,h,d){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,I=t.expirationTimes,B=t.hiddenUpdates;for(a=_&~a;0<a;){var K=31-Dt(a),W=1<<K;T[K]=0,I[K]=-1;var q=B[K];if(q!==null)for(B[K]=null,K=0;K<q.length;K++){var H=q[K];H!==null&&(H.lane&=-536870913)}a&=~W}l!==0&&Ot(t,l,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(_&~r))}function Ot(t,r,a){t.pendingLanes|=r,t.suspendedLanes&=~r;var l=31-Dt(r);t.entangledLanes|=r,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function Io(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var l=31-Dt(a),h=1<<l;h&r|t[l]&r&&(t[l]|=r),a&=~h}}function vr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ca(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function _r(){var t=te.p;return t!==0?t:(t=window.event,t===void 0?32:Bv(t.type))}function fu(t,r){var a=te.p;try{return te.p=t,r()}finally{te.p=a}}var gt=Math.random().toString(36).slice(2),Bt="__reactFiber$"+gt,Mt="__reactProps$"+gt,Un="__reactContainer$"+gt,Do="__reactEvents$"+gt,zh="__reactListeners$"+gt,Er="__reactHandles$"+gt,du="__reactResources$"+gt,ys="__reactMarker$"+gt;function Tr(t){delete t[Bt],delete t[Mt],delete t[Do],delete t[zh],delete t[Er]}function zi(t){var r=t[Bt];if(r)return r;for(var a=t.parentNode;a;){if(r=a[Un]||a[Bt]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=Cv(t);t!==null;){if(a=t[Bt])return a;t=Cv(t)}return r}t=a,a=t.parentNode}return null}function ci(t){if(t=t[Bt]||t[Un]){var r=t.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return t}return null}function hi(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t.stateNode;throw Error(s(33))}function yn(t){var r=t[du];return r||(r=t[du]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function wt(t){t[ys]=!0}var Oo=new Set,ha={};function Jn(t,r){ji(t,r),ji(t+"Capture",r)}function ji(t,r){for(ha[t]=r,t=0;t<r.length;t++)Oo.add(r[t])}var mu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pu={},vs={};function gu(t){return ot.call(vs,t)?!0:ot.call(pu,t)?!1:mu.test(t)?vs[t]=!0:(pu[t]=!0,!1)}function Sr(t,r,a){if(gu(r))if(a===null)t.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(r);return}}t.setAttribute(r,""+a)}}function fi(t,r,a){if(a===null)t.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttribute(r,""+a)}}function nn(t,r,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(r,a,""+l)}}var _s,yu;function Bi(t){if(_s===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);_s=r&&r[1]||"",yu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_s+t+yu}var fa=!1;function da(t,r){if(!t||fa)return"";fa=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(H){var q=H}Reflect.construct(t,[],W)}else{try{W.call()}catch(H){q=H}t.call(W.prototype)}}else{try{throw Error()}catch(H){q=H}(W=t())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(H){if(H&&q&&typeof H.stack=="string")return[H.stack,q.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),_=d[0],T=d[1];if(_&&T){var I=_.split(`
`),B=T.split(`
`);for(h=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;h<B.length&&!B[h].includes("DetermineComponentFrameRoot");)h++;if(l===I.length||h===B.length)for(l=I.length-1,h=B.length-1;1<=l&&0<=h&&I[l]!==B[h];)h--;for(;1<=l&&0<=h;l--,h--)if(I[l]!==B[h]){if(l!==1||h!==1)do if(l--,h--,0>h||I[l]!==B[h]){var K=`
`+I[l].replace(" at new "," at ");return t.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",t.displayName)),K}while(1<=l&&0<=h);break}}}finally{fa=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Bi(a):""}function Mo(t){switch(t.tag){case 26:case 27:case 5:return Bi(t.type);case 16:return Bi("Lazy");case 13:return Bi("Suspense");case 19:return Bi("SuspenseList");case 0:case 15:return da(t.type,!1);case 11:return da(t.type.render,!1);case 1:return da(t.type,!0);case 31:return Bi("Activity");default:return""}}function ma(t){try{var r="";do r+=Mo(t),t=t.return;while(t);return r}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function vn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Po(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function jh(t){var r=Po(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),l=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return h.call(this)},set:function(_){l=""+_,d.call(this,_)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(_){l=""+_},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function pa(t){t._valueTracker||(t._valueTracker=jh(t))}function ko(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),l="";return t&&(l=Po(t)?t.checked?"true":"false":t.value),t=l,t!==a?(r.setValue(t),!0):!1}function Es(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Bh=/[\n"\\]/g;function Pt(t){return t.replace(Bh,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function In(t,r,a,l,h,d,_,T){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),r!=null?_==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+vn(r)):t.value!==""+vn(r)&&(t.value=""+vn(r)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),r!=null?br(t,_,vn(r)):a!=null?br(t,_,vn(a)):l!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+vn(T):t.removeAttribute("name")}function Ts(t,r,a,l,h,d,_,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),r!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||r!=null))return;a=a!=null?""+vn(a):"",r=r!=null?""+vn(r):a,T||r===t.value||(t.value=r),t.defaultValue=r}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=T?t.checked:!!l,t.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_)}function br(t,r,a){r==="number"&&Es(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function qi(t,r,a,l){if(t=t.options,r){r={};for(var h=0;h<a.length;h++)r["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=r.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+vn(a),r=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}r!==null||t[h].disabled||(r=t[h])}r!==null&&(r.selected=!0)}}function it(t,r,a){if(r!=null&&(r=""+vn(r),r!==t.value&&(t.value=r),a==null)){t.defaultValue!==r&&(t.defaultValue=r);return}t.defaultValue=a!=null?""+vn(a):""}function Ss(t,r,a,l){if(r==null){if(l!=null){if(a!=null)throw Error(s(92));if(Le(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),r=a}a=vn(r),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function zn(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var bs=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vu(t,r,a){var l=r.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="":l?t.setProperty(r,a):typeof a!="number"||a===0||bs.has(r)?r==="float"?t.cssFloat=a:t[r]=(""+a).trim():t[r]=a+"px"}function Vo(t,r,a){if(r!=null&&typeof r!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in r)l=r[h],r.hasOwnProperty(h)&&a[h]!==l&&vu(t,h,l)}else for(var d in r)r.hasOwnProperty(d)&&vu(t,d,r[d])}function xo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ga(t){return Hh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Hi=null;function jn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fi=null,Yi=null;function Lo(t){var r=ci(t);if(r&&(t=r.stateNode)){var a=t[Mt]||null;e:switch(t=r.stateNode,r.type){case"input":if(In(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Pt(""+r)+'"][type="radio"]'),r=0;r<a.length;r++){var l=a[r];if(l!==t&&l.form===t.form){var h=l[Mt]||null;if(!h)throw Error(s(90));In(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<a.length;r++)l=a[r],l.form===t.form&&ko(l)}break e;case"textarea":it(t,a.value,a.defaultValue);break e;case"select":r=a.value,r!=null&&qi(t,!!a.multiple,r,!1)}}}var di=!1;function _u(t,r,a){if(di)return t(r,a);di=!0;try{var l=t(r);return l}finally{if(di=!1,(Fi!==null||Yi!==null)&&(fc(),Fi&&(r=Fi,t=Yi,Yi=Fi=null,Lo(r),t)))for(r=0;r<t.length;r++)Lo(t[r])}}function ws(t,r){var a=t.stateNode;if(a===null)return null;var l=a[Mt]||null;if(l===null)return null;a=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,r,typeof a));return a}var ei=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bn=!1;if(ei)try{var As={};Object.defineProperty(As,"passive",{get:function(){Bn=!0}}),window.addEventListener("test",As,As),window.removeEventListener("test",As,As)}catch{Bn=!1}var mi=null,wr=null,Gi=null;function Uo(){if(Gi)return Gi;var t,r=wr,a=r.length,l,h="value"in mi?mi.value:mi.textContent,d=h.length;for(t=0;t<a&&r[t]===h[t];t++);var _=a-t;for(l=1;l<=_&&r[a-l]===h[d-l];l++);return Gi=h.slice(t,1<l?1-l:void 0)}function pi(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function gi(){return!0}function zo(){return!1}function $t(t){function r(a,l,h,d,_){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?gi:zo,this.isPropagationStopped=zo,this}return E(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gi)},persist:function(){},isPersistent:gi}),r}var We={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ya=$t(We),Cs=E({},We,{view:0,detail:0}),Eu=$t(Cs),va,_a,yi,Rs=E({},Cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ds,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yi&&(yi&&t.type==="mousemove"?(va=t.screenX-yi.screenX,_a=t.screenY-yi.screenY):_a=va=0,yi=t),va)},movementY:function(t){return"movementY"in t?t.movementY:_a}}),qn=$t(Rs),Tu=E({},Rs,{dataTransfer:0}),Fh=$t(Tu),Ns=E({},Cs,{relatedTarget:0}),Ea=$t(Ns),jo=E({},We,{animationName:0,elapsedTime:0,pseudoElement:0}),Ta=$t(jo),Su=E({},We,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Sa=$t(Su),Yh=E({},We,{data:0}),Bo=$t(Yh),Is={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qo(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=wu[t])?!!r[t]:!1}function Ds(){return qo}var Au=E({},Cs,{key:function(t){if(t.key){var r=Is[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=pi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ds,charCode:function(t){return t.type==="keypress"?pi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ba=$t(Au),Cu=E({},Rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ho=$t(Cu),Xi=E({},Cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ds}),Ru=$t(Xi),Nu=E({},We,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iu=$t(Nu),Du=E({},Rs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wa=$t(Du),_n=E({},We,{newState:0,oldState:0}),Ou=$t(_n),Mu=[9,13,27,32],vi=ei&&"CompositionEvent"in window,c=null;ei&&"documentMode"in document&&(c=document.documentMode);var g=ei&&"TextEvent"in window&&!c,v=ei&&(!vi||c&&8<c&&11>=c),S=" ",U=!1;function Y(t,r){switch(t){case"keyup":return Mu.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function se(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qe=!1;function qt(t,r){switch(t){case"compositionend":return se(r);case"keypress":return r.which!==32?null:(U=!0,S);case"textInput":return t=r.data,t===S&&U?null:t;default:return null}}function He(t,r){if(qe)return t==="compositionend"||!vi&&Y(t,r)?(t=Uo(),Gi=wr=mi=null,qe=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return v&&r.locale!=="ko"?null:r.data;default:return null}}var Zt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ht(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Zt[t.type]:r==="textarea"}function Ki(t,r,a,l){Fi?Yi?Yi.push(l):Yi=[l]:Fi=l,r=vc(r,"onChange"),0<r.length&&(a=new ya("onChange","change",null,a,l),t.push({event:a,listeners:r}))}var rn=null,_i=null;function Fo(t){gv(t,0)}function Pu(t){var r=hi(t);if(ko(r))return t}function Lp(t,r){if(t==="change")return r}var Up=!1;if(ei){var Gh;if(ei){var Xh="oninput"in document;if(!Xh){var zp=document.createElement("div");zp.setAttribute("oninput","return;"),Xh=typeof zp.oninput=="function"}Gh=Xh}else Gh=!1;Up=Gh&&(!document.documentMode||9<document.documentMode)}function jp(){rn&&(rn.detachEvent("onpropertychange",Bp),_i=rn=null)}function Bp(t){if(t.propertyName==="value"&&Pu(_i)){var r=[];Ki(r,_i,t,jn(t)),_u(Fo,r)}}function WS(t,r,a){t==="focusin"?(jp(),rn=r,_i=a,rn.attachEvent("onpropertychange",Bp)):t==="focusout"&&jp()}function JS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pu(_i)}function eb(t,r){if(t==="click")return Pu(r)}function tb(t,r){if(t==="input"||t==="change")return Pu(r)}function nb(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Dn=typeof Object.is=="function"?Object.is:nb;function Yo(t,r){if(Dn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),l=Object.keys(r);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!ot.call(r,h)||!Dn(t[h],r[h]))return!1}return!0}function qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hp(t,r){var a=qp(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=r&&l>=r)return{node:a,offset:r-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qp(a)}}function Fp(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Fp(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Yp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var r=Es(t.document);r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=Es(t.document)}return r}function Kh(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}var ib=ei&&"documentMode"in document&&11>=document.documentMode,Aa=null,Qh=null,Go=null,$h=!1;function Gp(t,r,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;$h||Aa==null||Aa!==Es(l)||(l=Aa,"selectionStart"in l&&Kh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Go&&Yo(Go,l)||(Go=l,l=vc(Qh,"onSelect"),0<l.length&&(r=new ya("onSelect","select",null,r,a),t.push({event:r,listeners:l}),r.target=Aa)))}function Os(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var Ca={animationend:Os("Animation","AnimationEnd"),animationiteration:Os("Animation","AnimationIteration"),animationstart:Os("Animation","AnimationStart"),transitionrun:Os("Transition","TransitionRun"),transitionstart:Os("Transition","TransitionStart"),transitioncancel:Os("Transition","TransitionCancel"),transitionend:Os("Transition","TransitionEnd")},Zh={},Xp={};ei&&(Xp=document.createElement("div").style,"AnimationEvent"in window||(delete Ca.animationend.animation,delete Ca.animationiteration.animation,delete Ca.animationstart.animation),"TransitionEvent"in window||delete Ca.transitionend.transition);function Ms(t){if(Zh[t])return Zh[t];if(!Ca[t])return t;var r=Ca[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in Xp)return Zh[t]=r[a];return t}var Kp=Ms("animationend"),Qp=Ms("animationiteration"),$p=Ms("animationstart"),rb=Ms("transitionrun"),sb=Ms("transitionstart"),ab=Ms("transitioncancel"),Zp=Ms("transitionend"),Wp=new Map,Wh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wh.push("scrollEnd");function ti(t,r){Wp.set(t,r),Jn(r,[t])}var Jp=new WeakMap;function Hn(t,r){if(typeof t=="object"&&t!==null){var a=Jp.get(t);return a!==void 0?a:(r={value:t,source:r,stack:ma(r)},Jp.set(t,r),r)}return{value:t,source:r,stack:ma(r)}}var Fn=[],Ra=0,Jh=0;function ku(){for(var t=Ra,r=Jh=Ra=0;r<t;){var a=Fn[r];Fn[r++]=null;var l=Fn[r];Fn[r++]=null;var h=Fn[r];Fn[r++]=null;var d=Fn[r];if(Fn[r++]=null,l!==null&&h!==null){var _=l.pending;_===null?h.next=h:(h.next=_.next,_.next=h),l.pending=h}d!==0&&eg(a,h,d)}}function Vu(t,r,a,l){Fn[Ra++]=t,Fn[Ra++]=r,Fn[Ra++]=a,Fn[Ra++]=l,Jh|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function ef(t,r,a,l){return Vu(t,r,a,l),xu(t)}function Na(t,r){return Vu(t,null,null,r),xu(t)}function eg(t,r,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,h&&r!==null&&(h=31-Dt(a),t=d.hiddenUpdates,l=t[h],l===null?t[h]=[r]:l.push(r),r.lane=a|536870912),d):null}function xu(t){if(50<yl)throw yl=0,od=null,Error(s(185));for(var r=t.return;r!==null;)t=r,r=t.return;return t.tag===3?t.stateNode:null}var Ia={};function ob(t,r,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,r,a,l){return new ob(t,r,a,l)}function tf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qi(t,r){var a=t.alternate;return a===null?(a=On(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function tg(t,r){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=r,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,r=a.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),t}function Lu(t,r,a,l,h,d){var _=0;if(l=t,typeof t=="function")tf(t)&&(_=1);else if(typeof t=="string")_=uw(t,a,ge.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=On(31,a,r,h),t.elementType=N,t.lanes=d,t;case z:return Ps(a.children,h,d,r);case G:_=8,h|=24;break;case X:return t=On(12,a,r,h|2),t.elementType=X,t.lanes=d,t;case ce:return t=On(13,a,r,h),t.elementType=ce,t.lanes=d,t;case we:return t=On(19,a,r,h),t.elementType=we,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ue:case ae:_=10;break e;case re:_=9;break e;case Te:_=11;break e;case O:_=14;break e;case A:_=16,l=null;break e}_=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return r=On(_,a,r,h),r.elementType=t,r.type=l,r.lanes=d,r}function Ps(t,r,a,l){return t=On(7,t,l,r),t.lanes=a,t}function nf(t,r,a){return t=On(6,t,null,r),t.lanes=a,t}function rf(t,r,a){return r=On(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}var Da=[],Oa=0,Uu=null,zu=0,Yn=[],Gn=0,ks=null,$i=1,Zi="";function Vs(t,r){Da[Oa++]=zu,Da[Oa++]=Uu,Uu=t,zu=r}function ng(t,r,a){Yn[Gn++]=$i,Yn[Gn++]=Zi,Yn[Gn++]=ks,ks=t;var l=$i;t=Zi;var h=32-Dt(l)-1;l&=~(1<<h),a+=1;var d=32-Dt(r)+h;if(30<d){var _=h-h%5;d=(l&(1<<_)-1).toString(32),l>>=_,h-=_,$i=1<<32-Dt(r)+h|a<<h|l,Zi=d+t}else $i=1<<d|a<<h|l,Zi=t}function sf(t){t.return!==null&&(Vs(t,1),ng(t,1,0))}function af(t){for(;t===Uu;)Uu=Da[--Oa],Da[Oa]=null,zu=Da[--Oa],Da[Oa]=null;for(;t===ks;)ks=Yn[--Gn],Yn[Gn]=null,Zi=Yn[--Gn],Yn[Gn]=null,$i=Yn[--Gn],Yn[Gn]=null}var En=null,St=null,$e=!1,xs=null,Ei=!1,of=Error(s(519));function Ls(t){var r=Error(s(418,""));throw Qo(Hn(r,t)),of}function ig(t){var r=t.stateNode,a=t.type,l=t.memoizedProps;switch(r[Bt]=t,r[Mt]=l,a){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(a=0;a<_l.length;a++)xe(_l[a],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":xe("invalid",r),Ts(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),pa(r);break;case"select":xe("invalid",r);break;case"textarea":xe("invalid",r),Ss(r,l.value,l.defaultValue,l.children),pa(r)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||r.textContent===""+a||l.suppressHydrationWarning===!0||Ev(r.textContent,a)?(l.popover!=null&&(xe("beforetoggle",r),xe("toggle",r)),l.onScroll!=null&&xe("scroll",r),l.onScrollEnd!=null&&xe("scrollend",r),l.onClick!=null&&(r.onclick=_c),r=!0):r=!1,r||Ls(t)}function rg(t){for(En=t.return;En;)switch(En.tag){case 5:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:En=En.return}}function Xo(t){if(t!==En)return!1;if(!$e)return rg(t),$e=!0,!1;var r=t.tag,a;if((a=r!==3&&r!==27)&&((a=r===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||bd(t.type,t.memoizedProps)),a=!a),a&&St&&Ls(t),rg(t),r===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(r===0){St=ii(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++;t=t.nextSibling}St=null}}else r===27?(r=St,jr(t.type)?(t=Rd,Rd=null,St=t):St=r):St=En?ii(t.stateNode.nextSibling):null;return!0}function Ko(){St=En=null,$e=!1}function sg(){var t=xs;return t!==null&&(Cn===null?Cn=t:Cn.push.apply(Cn,t),xs=null),t}function Qo(t){xs===null?xs=[t]:xs.push(t)}var lf=Z(null),Us=null,Wi=null;function Ar(t,r,a){ee(lf,r._currentValue),r._currentValue=a}function Ji(t){t._currentValue=lf.current,ne(lf)}function uf(t,r,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),t===a)break;t=t.return}}function cf(t,r,a,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var _=h.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=h;for(var I=0;I<r.length;I++)if(T.context===r[I]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),uf(d.return,a,t),l||(_=null);break e}d=T.next}}else if(h.tag===18){if(_=h.return,_===null)throw Error(s(341));_.lanes|=a,d=_.alternate,d!==null&&(d.lanes|=a),uf(_,a,t),_=null}else _=h.child;if(_!==null)_.return=h;else for(_=h;_!==null;){if(_===t){_=null;break}if(h=_.sibling,h!==null){h.return=_.return,_=h;break}_=_.return}h=_}}function $o(t,r,a,l){t=null;for(var h=r,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var _=h.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var T=h.type;Dn(h.pendingProps.value,_.value)||(t!==null?t.push(T):t=[T])}}else if(h===Je.current){if(_=h.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(Al):t=[Al])}h=h.return}t!==null&&cf(r,t,a,l),r.flags|=262144}function ju(t){for(t=t.firstContext;t!==null;){if(!Dn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function zs(t){Us=t,Wi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function cn(t){return ag(Us,t)}function Bu(t,r){return Us===null&&zs(t),ag(t,r)}function ag(t,r){var a=r._currentValue;if(r={context:r,memoizedValue:a,next:null},Wi===null){if(t===null)throw Error(s(308));Wi=r,t.dependencies={lanes:0,firstContext:r},t.flags|=524288}else Wi=Wi.next=r;return a}var lb=typeof AbortController<"u"?AbortController:function(){var t=[],r=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){r.aborted=!0,t.forEach(function(a){return a()})}},ub=i.unstable_scheduleCallback,cb=i.unstable_NormalPriority,Ft={$$typeof:ae,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hf(){return{controller:new lb,data:new Map,refCount:0}}function Zo(t){t.refCount--,t.refCount===0&&ub(cb,function(){t.controller.abort()})}var Wo=null,ff=0,Ma=0,Pa=null;function hb(t,r){if(Wo===null){var a=Wo=[];ff=0,Ma=md(),Pa={status:"pending",value:void 0,then:function(l){a.push(l)}}}return ff++,r.then(og,og),r}function og(){if(--ff===0&&Wo!==null){Pa!==null&&(Pa.status="fulfilled");var t=Wo;Wo=null,Ma=0,Pa=null;for(var r=0;r<t.length;r++)(0,t[r])()}}function fb(t,r){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){l.status="fulfilled",l.value=r;for(var h=0;h<a.length;h++)(0,a[h])(r)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var lg=F.S;F.S=function(t,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&hb(t,r),lg!==null&&lg(t,r)};var js=Z(null);function df(){var t=js.current;return t!==null?t:ut.pooledCache}function qu(t,r){r===null?ee(js,js.current):ee(js,r.pool)}function ug(){var t=df();return t===null?null:{parent:Ft._currentValue,pool:t}}var Jo=Error(s(460)),cg=Error(s(474)),Hu=Error(s(542)),mf={then:function(){}};function hg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Fu(){}function fg(t,r,a){switch(a=t[a],a===void 0?t.push(r):a!==r&&(r.then(Fu,Fu),r=a),r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,mg(t),t;default:if(typeof r.status=="string")r.then(Fu,Fu);else{if(t=ut,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=r,t.status="pending",t.then(function(l){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=l}},function(l){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,mg(t),t}throw el=r,Jo}}var el=null;function dg(){if(el===null)throw Error(s(459));var t=el;return el=null,t}function mg(t){if(t===Jo||t===Hu)throw Error(s(483))}var Cr=!1;function pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gf(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Rr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Nr(t,r,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(tt&2)!==0){var h=l.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),l.pending=r,r=xu(t),eg(t,null,a),r}return Vu(t,l,r,a),xu(t)}function tl(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194048)!==0)){var l=r.lanes;l&=t.pendingLanes,a|=l,r.lanes=a,Io(t,a)}}function yf(t,r){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=_:d=d.next=_,a=a.next}while(a!==null);d===null?h=d=r:d=d.next=r}else h=d=r;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}var vf=!1;function nl(){if(vf){var t=Pa;if(t!==null)throw t}}function il(t,r,a,l){vf=!1;var h=t.updateQueue;Cr=!1;var d=h.firstBaseUpdate,_=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var I=T,B=I.next;I.next=null,_===null?d=B:_.next=B,_=I;var K=t.alternate;K!==null&&(K=K.updateQueue,T=K.lastBaseUpdate,T!==_&&(T===null?K.firstBaseUpdate=B:T.next=B,K.lastBaseUpdate=I))}if(d!==null){var W=h.baseState;_=0,K=B=I=null,T=d;do{var q=T.lane&-536870913,H=q!==T.lane;if(H?(Fe&q)===q:(l&q)===q){q!==0&&q===Ma&&(vf=!0),K!==null&&(K=K.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ae=t,Se=T;q=r;var at=a;switch(Se.tag){case 1:if(Ae=Se.payload,typeof Ae=="function"){W=Ae.call(at,W,q);break e}W=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=Se.payload,q=typeof Ae=="function"?Ae.call(at,W,q):Ae,q==null)break e;W=E({},W,q);break e;case 2:Cr=!0}}q=T.callback,q!==null&&(t.flags|=64,H&&(t.flags|=8192),H=h.callbacks,H===null?h.callbacks=[q]:H.push(q))}else H={lane:q,tag:T.tag,payload:T.payload,callback:T.callback,next:null},K===null?(B=K=H,I=W):K=K.next=H,_|=q;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;H=T,T=H.next,H.next=null,h.lastBaseUpdate=H,h.shared.pending=null}}while(!0);K===null&&(I=W),h.baseState=I,h.firstBaseUpdate=B,h.lastBaseUpdate=K,d===null&&(h.shared.lanes=0),xr|=_,t.lanes=_,t.memoizedState=W}}function pg(t,r){if(typeof t!="function")throw Error(s(191,t));t.call(r)}function gg(t,r){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)pg(a[t],r)}var ka=Z(null),Yu=Z(0);function yg(t,r){t=ar,ee(Yu,t),ee(ka,r),ar=t|r.baseLanes}function _f(){ee(Yu,ar),ee(ka,ka.current)}function Ef(){ar=Yu.current,ne(ka),ne(Yu)}var Ir=0,Oe=null,rt=null,kt=null,Gu=!1,Va=!1,Bs=!1,Xu=0,rl=0,xa=null,db=0;function At(){throw Error(s(321))}function Tf(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!Dn(t[a],r[a]))return!1;return!0}function Sf(t,r,a,l,h,d){return Ir=d,Oe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,F.H=t===null||t.memoizedState===null?ey:ty,Bs=!1,d=a(l,h),Bs=!1,Va&&(d=_g(r,a,l,h)),vg(t),d}function vg(t){F.H=Ju;var r=rt!==null&&rt.next!==null;if(Ir=0,kt=rt=Oe=null,Gu=!1,rl=0,xa=null,r)throw Error(s(300));t===null||Wt||(t=t.dependencies,t!==null&&ju(t)&&(Wt=!0))}function _g(t,r,a,l){Oe=t;var h=0;do{if(Va&&(xa=null),rl=0,Va=!1,25<=h)throw Error(s(301));if(h+=1,kt=rt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=Eb,d=r(a,l)}while(Va);return d}function mb(){var t=F.H,r=t.useState()[0];return r=typeof r.then=="function"?sl(r):r,t=t.useState()[0],(rt!==null?rt.memoizedState:null)!==t&&(Oe.flags|=1024),r}function bf(){var t=Xu!==0;return Xu=0,t}function wf(t,r,a){r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~a}function Af(t){if(Gu){for(t=t.memoizedState;t!==null;){var r=t.queue;r!==null&&(r.pending=null),t=t.next}Gu=!1}Ir=0,kt=rt=Oe=null,Va=!1,rl=Xu=0,xa=null}function wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?Oe.memoizedState=kt=t:kt=kt.next=t,kt}function Vt(){if(rt===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=rt.next;var r=kt===null?Oe.memoizedState:kt.next;if(r!==null)kt=r,rt=t;else{if(t===null)throw Oe.alternate===null?Error(s(467)):Error(s(310));rt=t,t={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},kt===null?Oe.memoizedState=kt=t:kt=kt.next=t}return kt}function Cf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sl(t){var r=rl;return rl+=1,xa===null&&(xa=[]),t=fg(xa,t,r),r=Oe,(kt===null?r.memoizedState:kt.next)===null&&(r=r.alternate,F.H=r===null||r.memoizedState===null?ey:ty),t}function Ku(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return sl(t);if(t.$$typeof===ae)return cn(t)}throw Error(s(438,String(t)))}function Rf(t){var r=null,a=Oe.updateQueue;if(a!==null&&(r=a.memoCache),r==null){var l=Oe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),a===null&&(a=Cf(),Oe.updateQueue=a),a.memoCache=r,a=r.data[r.index],a===void 0)for(a=r.data[r.index]=Array(t),l=0;l<t;l++)a[l]=M;return r.index++,a}function er(t,r){return typeof r=="function"?r(t):r}function Qu(t){var r=Vt();return Nf(r,rt,t)}function Nf(t,r,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=t.baseQueue,d=l.pending;if(d!==null){if(h!==null){var _=h.next;h.next=d.next,d.next=_}r.baseQueue=h=d,l.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{r=h.next;var T=_=null,I=null,B=r,K=!1;do{var W=B.lane&-536870913;if(W!==B.lane?(Fe&W)===W:(Ir&W)===W){var q=B.revertLane;if(q===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),W===Ma&&(K=!0);else if((Ir&q)===q){B=B.next,q===Ma&&(K=!0);continue}else W={lane:0,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},I===null?(T=I=W,_=d):I=I.next=W,Oe.lanes|=q,xr|=q;W=B.action,Bs&&a(d,W),d=B.hasEagerState?B.eagerState:a(d,W)}else q={lane:W,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},I===null?(T=I=q,_=d):I=I.next=q,Oe.lanes|=W,xr|=W;B=B.next}while(B!==null&&B!==r);if(I===null?_=d:I.next=T,!Dn(d,t.memoizedState)&&(Wt=!0,K&&(a=Pa,a!==null)))throw a;t.memoizedState=d,t.baseState=_,t.baseQueue=I,l.lastRenderedState=d}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function If(t){var r=Vt(),a=r.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,d=r.memoizedState;if(h!==null){a.pending=null;var _=h=h.next;do d=t(d,_.action),_=_.next;while(_!==h);Dn(d,r.memoizedState)||(Wt=!0),r.memoizedState=d,r.baseQueue===null&&(r.baseState=d),a.lastRenderedState=d}return[d,l]}function Eg(t,r,a){var l=Oe,h=Vt(),d=$e;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=r();var _=!Dn((rt||h).memoizedState,a);_&&(h.memoizedState=a,Wt=!0),h=h.queue;var T=bg.bind(null,l,h,t);if(al(2048,8,T,[t]),h.getSnapshot!==r||_||kt!==null&&kt.memoizedState.tag&1){if(l.flags|=2048,La(9,$u(),Sg.bind(null,l,h,a,r),null),ut===null)throw Error(s(349));d||(Ir&124)!==0||Tg(l,r,a)}return a}function Tg(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=Oe.updateQueue,r===null?(r=Cf(),Oe.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function Sg(t,r,a,l){r.value=a,r.getSnapshot=l,wg(r)&&Ag(t)}function bg(t,r,a){return a(function(){wg(r)&&Ag(t)})}function wg(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!Dn(t,a)}catch{return!0}}function Ag(t){var r=Na(t,2);r!==null&&xn(r,t,2)}function Df(t){var r=wn();if(typeof t=="function"){var a=t;if(t=a(),Bs){It(!0);try{a()}finally{It(!1)}}}return r.memoizedState=r.baseState=t,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:t},r}function Cg(t,r,a,l){return t.baseState=a,Nf(t,rt,typeof l=="function"?l:er)}function pb(t,r,a,l,h){if(Wu(t))throw Error(s(485));if(t=r.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};F.T!==null?a(!0):d.isTransition=!1,l(d),a=r.pending,a===null?(d.next=r.pending=d,Rg(r,d)):(d.next=a.next,r.pending=a.next=d)}}function Rg(t,r){var a=r.action,l=r.payload,h=t.state;if(r.isTransition){var d=F.T,_={};F.T=_;try{var T=a(h,l),I=F.S;I!==null&&I(_,T),Ng(t,r,T)}catch(B){Of(t,r,B)}finally{F.T=d}}else try{d=a(h,l),Ng(t,r,d)}catch(B){Of(t,r,B)}}function Ng(t,r,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Ig(t,r,l)},function(l){return Of(t,r,l)}):Ig(t,r,a)}function Ig(t,r,a){r.status="fulfilled",r.value=a,Dg(r),t.state=a,r=t.pending,r!==null&&(a=r.next,a===r?t.pending=null:(a=a.next,r.next=a,Rg(t,a)))}function Of(t,r,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=a,Dg(r),r=r.next;while(r!==l)}t.action=null}function Dg(t){t=t.listeners;for(var r=0;r<t.length;r++)(0,t[r])()}function Og(t,r){return r}function Mg(t,r){if($e){var a=ut.formState;if(a!==null){e:{var l=Oe;if($e){if(St){t:{for(var h=St,d=Ei;h.nodeType!==8;){if(!d){h=null;break t}if(h=ii(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){St=ii(h.nextSibling),l=h.data==="F!";break e}}Ls(l)}l=!1}l&&(r=a[0])}}return a=wn(),a.memoizedState=a.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Og,lastRenderedState:r},a.queue=l,a=Zg.bind(null,Oe,l),l.dispatch=a,l=Df(!1),d=xf.bind(null,Oe,!1,l.queue),l=wn(),h={state:r,dispatch:null,action:t,pending:null},l.queue=h,a=pb.bind(null,Oe,h,d,a),h.dispatch=a,l.memoizedState=t,[r,a,!1]}function Pg(t){var r=Vt();return kg(r,rt,t)}function kg(t,r,a){if(r=Nf(t,r,Og)[0],t=Qu(er)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var l=sl(r)}catch(_){throw _===Jo?Hu:_}else l=r;r=Vt();var h=r.queue,d=h.dispatch;return a!==r.memoizedState&&(Oe.flags|=2048,La(9,$u(),gb.bind(null,h,a),null)),[l,d,t]}function gb(t,r){t.action=r}function Vg(t){var r=Vt(),a=rt;if(a!==null)return kg(r,a,t);Vt(),r=r.memoizedState,a=Vt();var l=a.queue.dispatch;return a.memoizedState=t,[r,l,!1]}function La(t,r,a,l){return t={tag:t,create:a,deps:l,inst:r,next:null},r=Oe.updateQueue,r===null&&(r=Cf(),Oe.updateQueue=r),a=r.lastEffect,a===null?r.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,r.lastEffect=t),t}function $u(){return{destroy:void 0,resource:void 0}}function xg(){return Vt().memoizedState}function Zu(t,r,a,l){var h=wn();l=l===void 0?null:l,Oe.flags|=t,h.memoizedState=La(1|r,$u(),a,l)}function al(t,r,a,l){var h=Vt();l=l===void 0?null:l;var d=h.memoizedState.inst;rt!==null&&l!==null&&Tf(l,rt.memoizedState.deps)?h.memoizedState=La(r,d,a,l):(Oe.flags|=t,h.memoizedState=La(1|r,d,a,l))}function Lg(t,r){Zu(8390656,8,t,r)}function Ug(t,r){al(2048,8,t,r)}function zg(t,r){return al(4,2,t,r)}function jg(t,r){return al(4,4,t,r)}function Bg(t,r){if(typeof r=="function"){t=t();var a=r(t);return function(){typeof a=="function"?a():r(null)}}if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function qg(t,r,a){a=a!=null?a.concat([t]):null,al(4,4,Bg.bind(null,r,t),a)}function Mf(){}function Hg(t,r){var a=Vt();r=r===void 0?null:r;var l=a.memoizedState;return r!==null&&Tf(r,l[1])?l[0]:(a.memoizedState=[t,r],t)}function Fg(t,r){var a=Vt();r=r===void 0?null:r;var l=a.memoizedState;if(r!==null&&Tf(r,l[1]))return l[0];if(l=t(),Bs){It(!0);try{t()}finally{It(!1)}}return a.memoizedState=[l,r],l}function Pf(t,r,a){return a===void 0||(Ir&1073741824)!==0?t.memoizedState=r:(t.memoizedState=a,t=Xy(),Oe.lanes|=t,xr|=t,a)}function Yg(t,r,a,l){return Dn(a,r)?a:ka.current!==null?(t=Pf(t,a,l),Dn(t,r)||(Wt=!0),t):(Ir&42)===0?(Wt=!0,t.memoizedState=a):(t=Xy(),Oe.lanes|=t,xr|=t,r)}function Gg(t,r,a,l,h){var d=te.p;te.p=d!==0&&8>d?d:8;var _=F.T,T={};F.T=T,xf(t,!1,r,a);try{var I=h(),B=F.S;if(B!==null&&B(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var K=fb(I,l);ol(t,r,K,Vn(t))}else ol(t,r,l,Vn(t))}catch(W){ol(t,r,{then:function(){},status:"rejected",reason:W},Vn())}finally{te.p=d,F.T=_}}function yb(){}function kf(t,r,a,l){if(t.tag!==5)throw Error(s(476));var h=Xg(t).queue;Gg(t,h,r,fe,a===null?yb:function(){return Kg(t),a(l)})}function Xg(t){var r=t.memoizedState;if(r!==null)return r;r={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:fe},next:null};var a={};return r.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:a},next:null},t.memoizedState=r,t=t.alternate,t!==null&&(t.memoizedState=r),r}function Kg(t){var r=Xg(t).next.queue;ol(t,r,{},Vn())}function Vf(){return cn(Al)}function Qg(){return Vt().memoizedState}function $g(){return Vt().memoizedState}function vb(t){for(var r=t.return;r!==null;){switch(r.tag){case 24:case 3:var a=Vn();t=Rr(a);var l=Nr(r,t,a);l!==null&&(xn(l,r,a),tl(l,r,a)),r={cache:hf()},t.payload=r;return}r=r.return}}function _b(t,r,a){var l=Vn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Wu(t)?Wg(r,a):(a=ef(t,r,a,l),a!==null&&(xn(a,t,l),Jg(a,r,l)))}function Zg(t,r,a){var l=Vn();ol(t,r,a,l)}function ol(t,r,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Wu(t))Wg(r,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=r.lastRenderedReducer,d!==null))try{var _=r.lastRenderedState,T=d(_,a);if(h.hasEagerState=!0,h.eagerState=T,Dn(T,_))return Vu(t,r,h,0),ut===null&&ku(),!1}catch{}finally{}if(a=ef(t,r,h,l),a!==null)return xn(a,t,l),Jg(a,r,l),!0}return!1}function xf(t,r,a,l){if(l={lane:2,revertLane:md(),action:l,hasEagerState:!1,eagerState:null,next:null},Wu(t)){if(r)throw Error(s(479))}else r=ef(t,a,l,2),r!==null&&xn(r,t,2)}function Wu(t){var r=t.alternate;return t===Oe||r!==null&&r===Oe}function Wg(t,r){Va=Gu=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function Jg(t,r,a){if((a&4194048)!==0){var l=r.lanes;l&=t.pendingLanes,a|=l,r.lanes=a,Io(t,a)}}var Ju={readContext:cn,use:Ku,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useLayoutEffect:At,useInsertionEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useSyncExternalStore:At,useId:At,useHostTransitionStatus:At,useFormState:At,useActionState:At,useOptimistic:At,useMemoCache:At,useCacheRefresh:At},ey={readContext:cn,use:Ku,useCallback:function(t,r){return wn().memoizedState=[t,r===void 0?null:r],t},useContext:cn,useEffect:Lg,useImperativeHandle:function(t,r,a){a=a!=null?a.concat([t]):null,Zu(4194308,4,Bg.bind(null,r,t),a)},useLayoutEffect:function(t,r){return Zu(4194308,4,t,r)},useInsertionEffect:function(t,r){Zu(4,2,t,r)},useMemo:function(t,r){var a=wn();r=r===void 0?null:r;var l=t();if(Bs){It(!0);try{t()}finally{It(!1)}}return a.memoizedState=[l,r],l},useReducer:function(t,r,a){var l=wn();if(a!==void 0){var h=a(r);if(Bs){It(!0);try{a(r)}finally{It(!1)}}}else h=r;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=_b.bind(null,Oe,t),[l.memoizedState,t]},useRef:function(t){var r=wn();return t={current:t},r.memoizedState=t},useState:function(t){t=Df(t);var r=t.queue,a=Zg.bind(null,Oe,r);return r.dispatch=a,[t.memoizedState,a]},useDebugValue:Mf,useDeferredValue:function(t,r){var a=wn();return Pf(a,t,r)},useTransition:function(){var t=Df(!1);return t=Gg.bind(null,Oe,t.queue,!0,!1),wn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,r,a){var l=Oe,h=wn();if($e){if(a===void 0)throw Error(s(407));a=a()}else{if(a=r(),ut===null)throw Error(s(349));(Fe&124)!==0||Tg(l,r,a)}h.memoizedState=a;var d={value:a,getSnapshot:r};return h.queue=d,Lg(bg.bind(null,l,d,t),[t]),l.flags|=2048,La(9,$u(),Sg.bind(null,l,d,a,r),null),a},useId:function(){var t=wn(),r=ut.identifierPrefix;if($e){var a=Zi,l=$i;a=(l&~(1<<32-Dt(l)-1)).toString(32)+a,r="«"+r+"R"+a,a=Xu++,0<a&&(r+="H"+a.toString(32)),r+="»"}else a=db++,r="«"+r+"r"+a.toString(32)+"»";return t.memoizedState=r},useHostTransitionStatus:Vf,useFormState:Mg,useActionState:Mg,useOptimistic:function(t){var r=wn();r.memoizedState=r.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=a,r=xf.bind(null,Oe,!0,a),a.dispatch=r,[t,r]},useMemoCache:Rf,useCacheRefresh:function(){return wn().memoizedState=vb.bind(null,Oe)}},ty={readContext:cn,use:Ku,useCallback:Hg,useContext:cn,useEffect:Ug,useImperativeHandle:qg,useInsertionEffect:zg,useLayoutEffect:jg,useMemo:Fg,useReducer:Qu,useRef:xg,useState:function(){return Qu(er)},useDebugValue:Mf,useDeferredValue:function(t,r){var a=Vt();return Yg(a,rt.memoizedState,t,r)},useTransition:function(){var t=Qu(er)[0],r=Vt().memoizedState;return[typeof t=="boolean"?t:sl(t),r]},useSyncExternalStore:Eg,useId:Qg,useHostTransitionStatus:Vf,useFormState:Pg,useActionState:Pg,useOptimistic:function(t,r){var a=Vt();return Cg(a,rt,t,r)},useMemoCache:Rf,useCacheRefresh:$g},Eb={readContext:cn,use:Ku,useCallback:Hg,useContext:cn,useEffect:Ug,useImperativeHandle:qg,useInsertionEffect:zg,useLayoutEffect:jg,useMemo:Fg,useReducer:If,useRef:xg,useState:function(){return If(er)},useDebugValue:Mf,useDeferredValue:function(t,r){var a=Vt();return rt===null?Pf(a,t,r):Yg(a,rt.memoizedState,t,r)},useTransition:function(){var t=If(er)[0],r=Vt().memoizedState;return[typeof t=="boolean"?t:sl(t),r]},useSyncExternalStore:Eg,useId:Qg,useHostTransitionStatus:Vf,useFormState:Vg,useActionState:Vg,useOptimistic:function(t,r){var a=Vt();return rt!==null?Cg(a,rt,t,r):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Rf,useCacheRefresh:$g},Ua=null,ll=0;function ec(t){var r=ll;return ll+=1,Ua===null&&(Ua=[]),fg(Ua,t,r)}function ul(t,r){r=r.props.ref,t.ref=r!==void 0?r:null}function tc(t,r){throw r.$$typeof===b?Error(s(525)):(t=Object.prototype.toString.call(r),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t)))}function ny(t){var r=t._init;return r(t._payload)}function iy(t){function r(L,P){if(t){var j=L.deletions;j===null?(L.deletions=[P],L.flags|=16):j.push(P)}}function a(L,P){if(!t)return null;for(;P!==null;)r(L,P),P=P.sibling;return null}function l(L){for(var P=new Map;L!==null;)L.key!==null?P.set(L.key,L):P.set(L.index,L),L=L.sibling;return P}function h(L,P){return L=Qi(L,P),L.index=0,L.sibling=null,L}function d(L,P,j){return L.index=j,t?(j=L.alternate,j!==null?(j=j.index,j<P?(L.flags|=67108866,P):j):(L.flags|=67108866,P)):(L.flags|=1048576,P)}function _(L){return t&&L.alternate===null&&(L.flags|=67108866),L}function T(L,P,j,$){return P===null||P.tag!==6?(P=nf(j,L.mode,$),P.return=L,P):(P=h(P,j),P.return=L,P)}function I(L,P,j,$){var pe=j.type;return pe===z?K(L,P,j.props.children,$,j.key):P!==null&&(P.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===A&&ny(pe)===P.type)?(P=h(P,j.props),ul(P,j),P.return=L,P):(P=Lu(j.type,j.key,j.props,null,L.mode,$),ul(P,j),P.return=L,P)}function B(L,P,j,$){return P===null||P.tag!==4||P.stateNode.containerInfo!==j.containerInfo||P.stateNode.implementation!==j.implementation?(P=rf(j,L.mode,$),P.return=L,P):(P=h(P,j.children||[]),P.return=L,P)}function K(L,P,j,$,pe){return P===null||P.tag!==7?(P=Ps(j,L.mode,$,pe),P.return=L,P):(P=h(P,j),P.return=L,P)}function W(L,P,j){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=nf(""+P,L.mode,j),P.return=L,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case w:return j=Lu(P.type,P.key,P.props,null,L.mode,j),ul(j,P),j.return=L,j;case x:return P=rf(P,L.mode,j),P.return=L,P;case A:var $=P._init;return P=$(P._payload),W(L,P,j)}if(Le(P)||k(P))return P=Ps(P,L.mode,j,null),P.return=L,P;if(typeof P.then=="function")return W(L,ec(P),j);if(P.$$typeof===ae)return W(L,Bu(L,P),j);tc(L,P)}return null}function q(L,P,j,$){var pe=P!==null?P.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return pe!==null?null:T(L,P,""+j,$);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case w:return j.key===pe?I(L,P,j,$):null;case x:return j.key===pe?B(L,P,j,$):null;case A:return pe=j._init,j=pe(j._payload),q(L,P,j,$)}if(Le(j)||k(j))return pe!==null?null:K(L,P,j,$,null);if(typeof j.then=="function")return q(L,P,ec(j),$);if(j.$$typeof===ae)return q(L,P,Bu(L,j),$);tc(L,j)}return null}function H(L,P,j,$,pe){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return L=L.get(j)||null,T(P,L,""+$,pe);if(typeof $=="object"&&$!==null){switch($.$$typeof){case w:return L=L.get($.key===null?j:$.key)||null,I(P,L,$,pe);case x:return L=L.get($.key===null?j:$.key)||null,B(P,L,$,pe);case A:var Pe=$._init;return $=Pe($._payload),H(L,P,j,$,pe)}if(Le($)||k($))return L=L.get(j)||null,K(P,L,$,pe,null);if(typeof $.then=="function")return H(L,P,j,ec($),pe);if($.$$typeof===ae)return H(L,P,j,Bu(P,$),pe);tc(P,$)}return null}function Ae(L,P,j,$){for(var pe=null,Pe=null,ve=P,be=P=0,en=null;ve!==null&&be<j.length;be++){ve.index>be?(en=ve,ve=null):en=ve.sibling;var Qe=q(L,ve,j[be],$);if(Qe===null){ve===null&&(ve=en);break}t&&ve&&Qe.alternate===null&&r(L,ve),P=d(Qe,P,be),Pe===null?pe=Qe:Pe.sibling=Qe,Pe=Qe,ve=en}if(be===j.length)return a(L,ve),$e&&Vs(L,be),pe;if(ve===null){for(;be<j.length;be++)ve=W(L,j[be],$),ve!==null&&(P=d(ve,P,be),Pe===null?pe=ve:Pe.sibling=ve,Pe=ve);return $e&&Vs(L,be),pe}for(ve=l(ve);be<j.length;be++)en=H(ve,L,be,j[be],$),en!==null&&(t&&en.alternate!==null&&ve.delete(en.key===null?be:en.key),P=d(en,P,be),Pe===null?pe=en:Pe.sibling=en,Pe=en);return t&&ve.forEach(function(Yr){return r(L,Yr)}),$e&&Vs(L,be),pe}function Se(L,P,j,$){if(j==null)throw Error(s(151));for(var pe=null,Pe=null,ve=P,be=P=0,en=null,Qe=j.next();ve!==null&&!Qe.done;be++,Qe=j.next()){ve.index>be?(en=ve,ve=null):en=ve.sibling;var Yr=q(L,ve,Qe.value,$);if(Yr===null){ve===null&&(ve=en);break}t&&ve&&Yr.alternate===null&&r(L,ve),P=d(Yr,P,be),Pe===null?pe=Yr:Pe.sibling=Yr,Pe=Yr,ve=en}if(Qe.done)return a(L,ve),$e&&Vs(L,be),pe;if(ve===null){for(;!Qe.done;be++,Qe=j.next())Qe=W(L,Qe.value,$),Qe!==null&&(P=d(Qe,P,be),Pe===null?pe=Qe:Pe.sibling=Qe,Pe=Qe);return $e&&Vs(L,be),pe}for(ve=l(ve);!Qe.done;be++,Qe=j.next())Qe=H(ve,L,be,Qe.value,$),Qe!==null&&(t&&Qe.alternate!==null&&ve.delete(Qe.key===null?be:Qe.key),P=d(Qe,P,be),Pe===null?pe=Qe:Pe.sibling=Qe,Pe=Qe);return t&&ve.forEach(function(Tw){return r(L,Tw)}),$e&&Vs(L,be),pe}function at(L,P,j,$){if(typeof j=="object"&&j!==null&&j.type===z&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case w:e:{for(var pe=j.key;P!==null;){if(P.key===pe){if(pe=j.type,pe===z){if(P.tag===7){a(L,P.sibling),$=h(P,j.props.children),$.return=L,L=$;break e}}else if(P.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===A&&ny(pe)===P.type){a(L,P.sibling),$=h(P,j.props),ul($,j),$.return=L,L=$;break e}a(L,P);break}else r(L,P);P=P.sibling}j.type===z?($=Ps(j.props.children,L.mode,$,j.key),$.return=L,L=$):($=Lu(j.type,j.key,j.props,null,L.mode,$),ul($,j),$.return=L,L=$)}return _(L);case x:e:{for(pe=j.key;P!==null;){if(P.key===pe)if(P.tag===4&&P.stateNode.containerInfo===j.containerInfo&&P.stateNode.implementation===j.implementation){a(L,P.sibling),$=h(P,j.children||[]),$.return=L,L=$;break e}else{a(L,P);break}else r(L,P);P=P.sibling}$=rf(j,L.mode,$),$.return=L,L=$}return _(L);case A:return pe=j._init,j=pe(j._payload),at(L,P,j,$)}if(Le(j))return Ae(L,P,j,$);if(k(j)){if(pe=k(j),typeof pe!="function")throw Error(s(150));return j=pe.call(j),Se(L,P,j,$)}if(typeof j.then=="function")return at(L,P,ec(j),$);if(j.$$typeof===ae)return at(L,P,Bu(L,j),$);tc(L,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,P!==null&&P.tag===6?(a(L,P.sibling),$=h(P,j),$.return=L,L=$):(a(L,P),$=nf(j,L.mode,$),$.return=L,L=$),_(L)):a(L,P)}return function(L,P,j,$){try{ll=0;var pe=at(L,P,j,$);return Ua=null,pe}catch(ve){if(ve===Jo||ve===Hu)throw ve;var Pe=On(29,ve,null,L.mode);return Pe.lanes=$,Pe.return=L,Pe}finally{}}}var za=iy(!0),ry=iy(!1),Xn=Z(null),Ti=null;function Dr(t){var r=t.alternate;ee(Yt,Yt.current&1),ee(Xn,t),Ti===null&&(r===null||ka.current!==null||r.memoizedState!==null)&&(Ti=t)}function sy(t){if(t.tag===22){if(ee(Yt,Yt.current),ee(Xn,t),Ti===null){var r=t.alternate;r!==null&&r.memoizedState!==null&&(Ti=t)}}else Or()}function Or(){ee(Yt,Yt.current),ee(Xn,Xn.current)}function tr(t){ne(Xn),Ti===t&&(Ti=null),ne(Yt)}var Yt=Z(0);function nc(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Cd(a)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Lf(t,r,a,l){r=t.memoizedState,a=a(l,r),a=a==null?r:E({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Uf={enqueueSetState:function(t,r,a){t=t._reactInternals;var l=Vn(),h=Rr(l);h.payload=r,a!=null&&(h.callback=a),r=Nr(t,h,l),r!==null&&(xn(r,t,l),tl(r,t,l))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var l=Vn(),h=Rr(l);h.tag=1,h.payload=r,a!=null&&(h.callback=a),r=Nr(t,h,l),r!==null&&(xn(r,t,l),tl(r,t,l))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=Vn(),l=Rr(a);l.tag=2,r!=null&&(l.callback=r),r=Nr(t,l,a),r!==null&&(xn(r,t,a),tl(r,t,a))}};function ay(t,r,a,l,h,d,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,_):r.prototype&&r.prototype.isPureReactComponent?!Yo(a,l)||!Yo(h,d):!0}function oy(t,r,a,l){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,l),r.state!==t&&Uf.enqueueReplaceState(r,r.state,null)}function qs(t,r){var a=r;if("ref"in r){a={};for(var l in r)l!=="ref"&&(a[l]=r[l])}if(t=t.defaultProps){a===r&&(a=E({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}var ic=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function ly(t){ic(t)}function uy(t){console.error(t)}function cy(t){ic(t)}function rc(t,r){try{var a=t.onUncaughtError;a(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function hy(t,r,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function zf(t,r,a){return a=Rr(a),a.tag=3,a.payload={element:null},a.callback=function(){rc(t,r)},a}function fy(t){return t=Rr(t),t.tag=3,t}function dy(t,r,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;t.payload=function(){return h(d)},t.callback=function(){hy(r,a,l)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){hy(r,a,l),typeof h!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function Tb(t,r,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=a.alternate,r!==null&&$o(r,a,h,!0),a=Xn.current,a!==null){switch(a.tag){case 13:return Ti===null?ud():a.alternate===null&&bt===0&&(bt=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===mf?a.flags|=16384:(r=a.updateQueue,r===null?a.updateQueue=new Set([l]):r.add(l),hd(t,l,h)),!1;case 22:return a.flags|=65536,l===mf?a.flags|=16384:(r=a.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=r):(a=r.retryQueue,a===null?r.retryQueue=new Set([l]):a.add(l)),hd(t,l,h)),!1}throw Error(s(435,a.tag))}return hd(t,l,h),ud(),!1}if($e)return r=Xn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,l!==of&&(t=Error(s(422),{cause:l}),Qo(Hn(t,a)))):(l!==of&&(r=Error(s(423),{cause:l}),Qo(Hn(r,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=Hn(l,a),h=zf(t.stateNode,l,h),yf(t,h),bt!==4&&(bt=2)),!1;var d=Error(s(520),{cause:l});if(d=Hn(d,a),gl===null?gl=[d]:gl.push(d),bt!==4&&(bt=2),r===null)return!0;l=Hn(l,a),a=r;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=zf(a.stateNode,l,t),yf(a,t),!1;case 1:if(r=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Lr===null||!Lr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=fy(h),dy(h,t,a,l),yf(a,h),!1}a=a.return}while(a!==null);return!1}var my=Error(s(461)),Wt=!1;function sn(t,r,a,l){r.child=t===null?ry(r,null,a,l):za(r,t.child,a,l)}function py(t,r,a,l,h){a=a.render;var d=r.ref;if("ref"in l){var _={};for(var T in l)T!=="ref"&&(_[T]=l[T])}else _=l;return zs(r),l=Sf(t,r,a,_,d,h),T=bf(),t!==null&&!Wt?(wf(t,r,h),nr(t,r,h)):($e&&T&&sf(r),r.flags|=1,sn(t,r,l,h),r.child)}function gy(t,r,a,l,h){if(t===null){var d=a.type;return typeof d=="function"&&!tf(d)&&d.defaultProps===void 0&&a.compare===null?(r.tag=15,r.type=d,yy(t,r,d,l,h)):(t=Lu(a.type,null,l,r,r.mode,h),t.ref=r.ref,t.return=r,r.child=t)}if(d=t.child,!Xf(t,h)){var _=d.memoizedProps;if(a=a.compare,a=a!==null?a:Yo,a(_,l)&&t.ref===r.ref)return nr(t,r,h)}return r.flags|=1,t=Qi(d,l),t.ref=r.ref,t.return=r,r.child=t}function yy(t,r,a,l,h){if(t!==null){var d=t.memoizedProps;if(Yo(d,l)&&t.ref===r.ref)if(Wt=!1,r.pendingProps=l=d,Xf(t,h))(t.flags&131072)!==0&&(Wt=!0);else return r.lanes=t.lanes,nr(t,r,h)}return jf(t,r,a,l,h)}function vy(t,r,a){var l=r.pendingProps,h=l.children,d=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((r.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,t!==null){for(h=r.child=t.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;r.childLanes=d&~l}else r.childLanes=0,r.child=null;return _y(t,r,l,a)}if((a&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},t!==null&&qu(r,d!==null?d.cachePool:null),d!==null?yg(r,d):_f(),sy(r);else return r.lanes=r.childLanes=536870912,_y(t,r,d!==null?d.baseLanes|a:a,a)}else d!==null?(qu(r,d.cachePool),yg(r,d),Or(),r.memoizedState=null):(t!==null&&qu(r,null),_f(),Or());return sn(t,r,h,a),r.child}function _y(t,r,a,l){var h=df();return h=h===null?null:{parent:Ft._currentValue,pool:h},r.memoizedState={baseLanes:a,cachePool:h},t!==null&&qu(r,null),_f(),sy(r),t!==null&&$o(t,r,l,!0),null}function sc(t,r){var a=r.ref;if(a===null)t!==null&&t.ref!==null&&(r.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(r.flags|=4194816)}}function jf(t,r,a,l,h){return zs(r),a=Sf(t,r,a,l,void 0,h),l=bf(),t!==null&&!Wt?(wf(t,r,h),nr(t,r,h)):($e&&l&&sf(r),r.flags|=1,sn(t,r,a,h),r.child)}function Ey(t,r,a,l,h,d){return zs(r),r.updateQueue=null,a=_g(r,l,a,h),vg(t),l=bf(),t!==null&&!Wt?(wf(t,r,d),nr(t,r,d)):($e&&l&&sf(r),r.flags|=1,sn(t,r,a,d),r.child)}function Ty(t,r,a,l,h){if(zs(r),r.stateNode===null){var d=Ia,_=a.contextType;typeof _=="object"&&_!==null&&(d=cn(_)),d=new a(l,d),r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Uf,r.stateNode=d,d._reactInternals=r,d=r.stateNode,d.props=l,d.state=r.memoizedState,d.refs={},pf(r),_=a.contextType,d.context=typeof _=="object"&&_!==null?cn(_):Ia,d.state=r.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Lf(r,a,_,l),d.state=r.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&Uf.enqueueReplaceState(d,d.state,null),il(r,l,d,h),nl(),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(t===null){d=r.stateNode;var T=r.memoizedProps,I=qs(a,T);d.props=I;var B=d.context,K=a.contextType;_=Ia,typeof K=="object"&&K!==null&&(_=cn(K));var W=a.getDerivedStateFromProps;K=typeof W=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=r.pendingProps!==T,K||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||B!==_)&&oy(r,d,l,_),Cr=!1;var q=r.memoizedState;d.state=q,il(r,l,d,h),nl(),B=r.memoizedState,T||q!==B||Cr?(typeof W=="function"&&(Lf(r,a,W,l),B=r.memoizedState),(I=Cr||ay(r,a,I,l,q,B,_))?(K||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=B),d.props=l,d.state=B,d.context=_,l=I):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{d=r.stateNode,gf(t,r),_=r.memoizedProps,K=qs(a,_),d.props=K,W=r.pendingProps,q=d.context,B=a.contextType,I=Ia,typeof B=="object"&&B!==null&&(I=cn(B)),T=a.getDerivedStateFromProps,(B=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==W||q!==I)&&oy(r,d,l,I),Cr=!1,q=r.memoizedState,d.state=q,il(r,l,d,h),nl();var H=r.memoizedState;_!==W||q!==H||Cr||t!==null&&t.dependencies!==null&&ju(t.dependencies)?(typeof T=="function"&&(Lf(r,a,T,l),H=r.memoizedState),(K=Cr||ay(r,a,K,l,q,H,I)||t!==null&&t.dependencies!==null&&ju(t.dependencies))?(B||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,H,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,H,I)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=H),d.props=l,d.state=H,d.context=I,l=K):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(r.flags|=1024),l=!1)}return d=l,sc(t,r),l=(r.flags&128)!==0,d||l?(d=r.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),r.flags|=1,t!==null&&l?(r.child=za(r,t.child,null,h),r.child=za(r,null,a,h)):sn(t,r,a,h),r.memoizedState=d.state,t=r.child):t=nr(t,r,h),t}function Sy(t,r,a,l){return Ko(),r.flags|=256,sn(t,r,a,l),r.child}var Bf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qf(t){return{baseLanes:t,cachePool:ug()}}function Hf(t,r,a){return t=t!==null?t.childLanes&~a:0,r&&(t|=Kn),t}function by(t,r,a){var l=r.pendingProps,h=!1,d=(r.flags&128)!==0,_;if((_=d)||(_=t!==null&&t.memoizedState===null?!1:(Yt.current&2)!==0),_&&(h=!0,r.flags&=-129),_=(r.flags&32)!==0,r.flags&=-33,t===null){if($e){if(h?Dr(r):Or(),$e){var T=St,I;if(I=T){e:{for(I=T,T=Ei;I.nodeType!==8;){if(!T){T=null;break e}if(I=ii(I.nextSibling),I===null){T=null;break e}}T=I}T!==null?(r.memoizedState={dehydrated:T,treeContext:ks!==null?{id:$i,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},I=On(18,null,null,0),I.stateNode=T,I.return=r,r.child=I,En=r,St=null,I=!0):I=!1}I||Ls(r)}if(T=r.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Cd(T)?r.lanes=32:r.lanes=536870912,null;tr(r)}return T=l.children,l=l.fallback,h?(Or(),h=r.mode,T=ac({mode:"hidden",children:T},h),l=Ps(l,h,a,null),T.return=r,l.return=r,T.sibling=l,r.child=T,h=r.child,h.memoizedState=qf(a),h.childLanes=Hf(t,_,a),r.memoizedState=Bf,l):(Dr(r),Ff(r,T))}if(I=t.memoizedState,I!==null&&(T=I.dehydrated,T!==null)){if(d)r.flags&256?(Dr(r),r.flags&=-257,r=Yf(t,r,a)):r.memoizedState!==null?(Or(),r.child=t.child,r.flags|=128,r=null):(Or(),h=l.fallback,T=r.mode,l=ac({mode:"visible",children:l.children},T),h=Ps(h,T,a,null),h.flags|=2,l.return=r,h.return=r,l.sibling=h,r.child=l,za(r,t.child,null,a),l=r.child,l.memoizedState=qf(a),l.childLanes=Hf(t,_,a),r.memoizedState=Bf,r=h);else if(Dr(r),Cd(T)){if(_=T.nextSibling&&T.nextSibling.dataset,_)var B=_.dgst;_=B,l=Error(s(419)),l.stack="",l.digest=_,Qo({value:l,source:null,stack:null}),r=Yf(t,r,a)}else if(Wt||$o(t,r,a,!1),_=(a&t.childLanes)!==0,Wt||_){if(_=ut,_!==null&&(l=a&-a,l=(l&42)!==0?1:vr(l),l=(l&(_.suspendedLanes|a))!==0?0:l,l!==0&&l!==I.retryLane))throw I.retryLane=l,Na(t,l),xn(_,t,l),my;T.data==="$?"||ud(),r=Yf(t,r,a)}else T.data==="$?"?(r.flags|=192,r.child=t.child,r=null):(t=I.treeContext,St=ii(T.nextSibling),En=r,$e=!0,xs=null,Ei=!1,t!==null&&(Yn[Gn++]=$i,Yn[Gn++]=Zi,Yn[Gn++]=ks,$i=t.id,Zi=t.overflow,ks=r),r=Ff(r,l.children),r.flags|=4096);return r}return h?(Or(),h=l.fallback,T=r.mode,I=t.child,B=I.sibling,l=Qi(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,B!==null?h=Qi(B,h):(h=Ps(h,T,a,null),h.flags|=2),h.return=r,l.return=r,l.sibling=h,r.child=l,l=h,h=r.child,T=t.child.memoizedState,T===null?T=qf(a):(I=T.cachePool,I!==null?(B=Ft._currentValue,I=I.parent!==B?{parent:B,pool:B}:I):I=ug(),T={baseLanes:T.baseLanes|a,cachePool:I}),h.memoizedState=T,h.childLanes=Hf(t,_,a),r.memoizedState=Bf,l):(Dr(r),a=t.child,t=a.sibling,a=Qi(a,{mode:"visible",children:l.children}),a.return=r,a.sibling=null,t!==null&&(_=r.deletions,_===null?(r.deletions=[t],r.flags|=16):_.push(t)),r.child=a,r.memoizedState=null,a)}function Ff(t,r){return r=ac({mode:"visible",children:r},t.mode),r.return=t,t.child=r}function ac(t,r){return t=On(22,t,null,r),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Yf(t,r,a){return za(r,t.child,null,a),t=Ff(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function wy(t,r,a){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r),uf(t.return,r,a)}function Gf(t,r,a,l,h){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=r,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function Ay(t,r,a){var l=r.pendingProps,h=l.revealOrder,d=l.tail;if(sn(t,r,l.children,a),l=Yt.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wy(t,a,r);else if(t.tag===19)wy(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(ee(Yt,l),h){case"forwards":for(a=r.child,h=null;a!==null;)t=a.alternate,t!==null&&nc(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=r.child,r.child=null):(h=a.sibling,a.sibling=null),Gf(r,!1,h,a,d);break;case"backwards":for(a=null,h=r.child,r.child=null;h!==null;){if(t=h.alternate,t!==null&&nc(t)===null){r.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}Gf(r,!0,a,null,d);break;case"together":Gf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function nr(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),xr|=r.lanes,(a&r.childLanes)===0)if(t!==null){if($o(t,r,a,!1),(a&r.childLanes)===0)return null}else return null;if(t!==null&&r.child!==t.child)throw Error(s(153));if(r.child!==null){for(t=r.child,a=Qi(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=Qi(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function Xf(t,r){return(t.lanes&r)!==0?!0:(t=t.dependencies,!!(t!==null&&ju(t)))}function Sb(t,r,a){switch(r.tag){case 3:Me(r,r.stateNode.containerInfo),Ar(r,Ft,t.memoizedState.cache),Ko();break;case 27:case 5:Be(r);break;case 4:Me(r,r.stateNode.containerInfo);break;case 10:Ar(r,r.type,r.memoizedProps.value);break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(Dr(r),r.flags|=128,null):(a&r.child.childLanes)!==0?by(t,r,a):(Dr(r),t=nr(t,r,a),t!==null?t.sibling:null);Dr(r);break;case 19:var h=(t.flags&128)!==0;if(l=(a&r.childLanes)!==0,l||($o(t,r,a,!1),l=(a&r.childLanes)!==0),h){if(l)return Ay(t,r,a);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ee(Yt,Yt.current),l)break;return null;case 22:case 23:return r.lanes=0,vy(t,r,a);case 24:Ar(r,Ft,t.memoizedState.cache)}return nr(t,r,a)}function Cy(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps)Wt=!0;else{if(!Xf(t,a)&&(r.flags&128)===0)return Wt=!1,Sb(t,r,a);Wt=(t.flags&131072)!==0}else Wt=!1,$e&&(r.flags&1048576)!==0&&ng(r,zu,r.index);switch(r.lanes=0,r.tag){case 16:e:{t=r.pendingProps;var l=r.elementType,h=l._init;if(l=h(l._payload),r.type=l,typeof l=="function")tf(l)?(t=qs(l,t),r.tag=1,r=Ty(null,r,l,t,a)):(r.tag=0,r=jf(null,r,l,t,a));else{if(l!=null){if(h=l.$$typeof,h===Te){r.tag=11,r=py(null,r,l,t,a);break e}else if(h===O){r.tag=14,r=gy(null,r,l,t,a);break e}}throw r=Ze(l)||l,Error(s(306,r,""))}}return r;case 0:return jf(t,r,r.type,r.pendingProps,a);case 1:return l=r.type,h=qs(l,r.pendingProps),Ty(t,r,l,h,a);case 3:e:{if(Me(r,r.stateNode.containerInfo),t===null)throw Error(s(387));l=r.pendingProps;var d=r.memoizedState;h=d.element,gf(t,r),il(r,l,null,a);var _=r.memoizedState;if(l=_.cache,Ar(r,Ft,l),l!==d.cache&&cf(r,[Ft],a,!0),nl(),l=_.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:_.cache},r.updateQueue.baseState=d,r.memoizedState=d,r.flags&256){r=Sy(t,r,l,a);break e}else if(l!==h){h=Hn(Error(s(424)),r),Qo(h),r=Sy(t,r,l,a);break e}else{switch(t=r.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(St=ii(t.firstChild),En=r,$e=!0,xs=null,Ei=!0,a=ry(r,null,l,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ko(),l===h){r=nr(t,r,a);break e}sn(t,r,l,a)}r=r.child}return r;case 26:return sc(t,r),t===null?(a=Dv(r.type,null,r.pendingProps,null))?r.memoizedState=a:$e||(a=r.type,t=r.pendingProps,l=Ec(me.current).createElement(a),l[Bt]=r,l[Mt]=t,on(l,a,t),wt(l),r.stateNode=l):r.memoizedState=Dv(r.type,t.memoizedProps,r.pendingProps,t.memoizedState),null;case 27:return Be(r),t===null&&$e&&(l=r.stateNode=Rv(r.type,r.pendingProps,me.current),En=r,Ei=!0,h=St,jr(r.type)?(Rd=h,St=ii(l.firstChild)):St=h),sn(t,r,r.pendingProps.children,a),sc(t,r),t===null&&(r.flags|=4194304),r.child;case 5:return t===null&&$e&&((h=l=St)&&(l=$b(l,r.type,r.pendingProps,Ei),l!==null?(r.stateNode=l,En=r,St=ii(l.firstChild),Ei=!1,h=!0):h=!1),h||Ls(r)),Be(r),h=r.type,d=r.pendingProps,_=t!==null?t.memoizedProps:null,l=d.children,bd(h,d)?l=null:_!==null&&bd(h,_)&&(r.flags|=32),r.memoizedState!==null&&(h=Sf(t,r,mb,null,null,a),Al._currentValue=h),sc(t,r),sn(t,r,l,a),r.child;case 6:return t===null&&$e&&((t=a=St)&&(a=Zb(a,r.pendingProps,Ei),a!==null?(r.stateNode=a,En=r,St=null,t=!0):t=!1),t||Ls(r)),null;case 13:return by(t,r,a);case 4:return Me(r,r.stateNode.containerInfo),l=r.pendingProps,t===null?r.child=za(r,null,l,a):sn(t,r,l,a),r.child;case 11:return py(t,r,r.type,r.pendingProps,a);case 7:return sn(t,r,r.pendingProps,a),r.child;case 8:return sn(t,r,r.pendingProps.children,a),r.child;case 12:return sn(t,r,r.pendingProps.children,a),r.child;case 10:return l=r.pendingProps,Ar(r,r.type,l.value),sn(t,r,l.children,a),r.child;case 9:return h=r.type._context,l=r.pendingProps.children,zs(r),h=cn(h),l=l(h),r.flags|=1,sn(t,r,l,a),r.child;case 14:return gy(t,r,r.type,r.pendingProps,a);case 15:return yy(t,r,r.type,r.pendingProps,a);case 19:return Ay(t,r,a);case 31:return l=r.pendingProps,a=r.mode,l={mode:l.mode,children:l.children},t===null?(a=ac(l,a),a.ref=r.ref,r.child=a,a.return=r,r=a):(a=Qi(t.child,l),a.ref=r.ref,r.child=a,a.return=r,r=a),r;case 22:return vy(t,r,a);case 24:return zs(r),l=cn(Ft),t===null?(h=df(),h===null&&(h=ut,d=hf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),r.memoizedState={parent:l,cache:h},pf(r),Ar(r,Ft,h)):((t.lanes&a)!==0&&(gf(t,r),il(r,null,null,a),nl()),h=t.memoizedState,d=r.memoizedState,h.parent!==l?(h={parent:l,cache:l},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),Ar(r,Ft,l)):(l=d.cache,Ar(r,Ft,l),l!==h.cache&&cf(r,[Ft],a,!0))),sn(t,r,r.pendingProps.children,a),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function ir(t){t.flags|=4}function Ry(t,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Vv(r)){if(r=Xn.current,r!==null&&((Fe&4194048)===Fe?Ti!==null:(Fe&62914560)!==Fe&&(Fe&536870912)===0||r!==Ti))throw el=mf,cg;t.flags|=8192}}function oc(t,r){r!==null&&(t.flags|=4),t.flags&16384&&(r=t.tag!==22?Ie():536870912,t.lanes|=r,Ha|=r)}function cl(t,r){if(!$e)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function _t(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(r)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,r}function bb(t,r,a){var l=r.pendingProps;switch(af(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(r),null;case 1:return _t(r),null;case 3:return a=r.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),Ji(Ft),le(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Xo(r)?ir(r):t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,sg())),_t(r),null;case 26:return a=r.memoizedState,t===null?(ir(r),a!==null?(_t(r),Ry(r,a)):(_t(r),r.flags&=-16777217)):a?a!==t.memoizedState?(ir(r),_t(r),Ry(r,a)):(_t(r),r.flags&=-16777217):(t.memoizedProps!==l&&ir(r),_t(r),r.flags&=-16777217),null;case 27:et(r),a=me.current;var h=r.type;if(t!==null&&r.stateNode!=null)t.memoizedProps!==l&&ir(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return _t(r),null}t=ge.current,Xo(r)?ig(r):(t=Rv(h,l,a),r.stateNode=t,ir(r))}return _t(r),null;case 5:if(et(r),a=r.type,t!==null&&r.stateNode!=null)t.memoizedProps!==l&&ir(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return _t(r),null}if(t=ge.current,Xo(r))ig(r);else{switch(h=Ec(me.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}t[Bt]=r,t[Mt]=l;e:for(h=r.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===r)break e;for(;h.sibling===null;){if(h.return===null||h.return===r)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}r.stateNode=t;e:switch(on(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ir(r)}}return _t(r),r.flags&=-16777217,null;case 6:if(t&&r.stateNode!=null)t.memoizedProps!==l&&ir(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(s(166));if(t=me.current,Xo(r)){if(t=r.stateNode,a=r.memoizedProps,l=null,h=En,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[Bt]=r,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Ev(t.nodeValue,a)),t||Ls(r)}else t=Ec(t).createTextNode(l),t[Bt]=r,r.stateNode=t}return _t(r),null;case 13:if(l=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=Xo(r),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Bt]=r}else Ko(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;_t(r),h=!1}else h=sg(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(tr(r),r):(tr(r),null)}if(tr(r),(r.flags&128)!==0)return r.lanes=a,r;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=r.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==t&&a&&(r.child.flags|=8192),oc(r,r.updateQueue),_t(r),null;case 4:return le(),t===null&&vd(r.stateNode.containerInfo),_t(r),null;case 10:return Ji(r.type),_t(r),null;case 19:if(ne(Yt),h=r.memoizedState,h===null)return _t(r),null;if(l=(r.flags&128)!==0,d=h.rendering,d===null)if(l)cl(h,!1);else{if(bt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(d=nc(t),d!==null){for(r.flags|=128,cl(h,!1),t=d.updateQueue,r.updateQueue=t,oc(r,t),r.subtreeFlags=0,t=a,a=r.child;a!==null;)tg(a,t),a=a.sibling;return ee(Yt,Yt.current&1|2),r.child}t=t.sibling}h.tail!==null&&bn()>cc&&(r.flags|=128,l=!0,cl(h,!1),r.lanes=4194304)}else{if(!l)if(t=nc(d),t!==null){if(r.flags|=128,l=!0,t=t.updateQueue,r.updateQueue=t,oc(r,t),cl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!$e)return _t(r),null}else 2*bn()-h.renderingStartTime>cc&&a!==536870912&&(r.flags|=128,l=!0,cl(h,!1),r.lanes=4194304);h.isBackwards?(d.sibling=r.child,r.child=d):(t=h.last,t!==null?t.sibling=d:r.child=d,h.last=d)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=bn(),r.sibling=null,t=Yt.current,ee(Yt,l?t&1|2:t&1),r):(_t(r),null);case 22:case 23:return tr(r),Ef(),l=r.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(a&536870912)!==0&&(r.flags&128)===0&&(_t(r),r.subtreeFlags&6&&(r.flags|=8192)):_t(r),a=r.updateQueue,a!==null&&oc(r,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==a&&(r.flags|=2048),t!==null&&ne(js),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),r.memoizedState.cache!==a&&(r.flags|=2048),Ji(Ft),_t(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function wb(t,r){switch(af(r),r.tag){case 1:return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Ji(Ft),le(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 26:case 27:case 5:return et(r),null;case 13:if(tr(r),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(s(340));Ko()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return ne(Yt),null;case 4:return le(),null;case 10:return Ji(r.type),null;case 22:case 23:return tr(r),Ef(),t!==null&&ne(js),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 24:return Ji(Ft),null;case 25:return null;default:return null}}function Ny(t,r){switch(af(r),r.tag){case 3:Ji(Ft),le();break;case 26:case 27:case 5:et(r);break;case 4:le();break;case 13:tr(r);break;case 19:ne(Yt);break;case 10:Ji(r.type);break;case 22:case 23:tr(r),Ef(),t!==null&&ne(js);break;case 24:Ji(Ft)}}function hl(t,r){try{var a=r.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&t)===t){l=void 0;var d=a.create,_=a.inst;l=d(),_.destroy=l}a=a.next}while(a!==h)}}catch(T){lt(r,r.return,T)}}function Mr(t,r,a){try{var l=r.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&t)===t){var _=l.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,h=r;var I=a,B=T;try{B()}catch(K){lt(h,I,K)}}}l=l.next}while(l!==d)}}catch(K){lt(r,r.return,K)}}function Iy(t){var r=t.updateQueue;if(r!==null){var a=t.stateNode;try{gg(r,a)}catch(l){lt(t,t.return,l)}}}function Dy(t,r,a){a.props=qs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){lt(t,r,l)}}function fl(t,r){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(h){lt(t,r,h)}}function Si(t,r){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){lt(t,r,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){lt(t,r,h)}else a.current=null}function Oy(t){var r=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){lt(t,t.return,h)}}function Kf(t,r,a){try{var l=t.stateNode;Yb(l,t.type,a,r),l[Mt]=r}catch(h){lt(t,t.return,h)}}function My(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&jr(t.type)||t.tag===4}function Qf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||My(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&jr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $f(t,r,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,r):(r=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,r.appendChild(t),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=_c));else if(l!==4&&(l===27&&jr(t.type)&&(a=t.stateNode,r=null),t=t.child,t!==null))for($f(t,r,a),t=t.sibling;t!==null;)$f(t,r,a),t=t.sibling}function lc(t,r,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(l!==4&&(l===27&&jr(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(lc(t,r,a),t=t.sibling;t!==null;)lc(t,r,a),t=t.sibling}function Py(t){var r=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);on(r,l,a),r[Bt]=t,r[Mt]=a}catch(d){lt(t,t.return,d)}}var rr=!1,Ct=!1,Zf=!1,ky=typeof WeakSet=="function"?WeakSet:Set,Jt=null;function Ab(t,r){if(t=t.containerInfo,Td=Cc,t=Yp(t),Kh(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var _=0,T=-1,I=-1,B=0,K=0,W=t,q=null;t:for(;;){for(var H;W!==a||h!==0&&W.nodeType!==3||(T=_+h),W!==d||l!==0&&W.nodeType!==3||(I=_+l),W.nodeType===3&&(_+=W.nodeValue.length),(H=W.firstChild)!==null;)q=W,W=H;for(;;){if(W===t)break t;if(q===a&&++B===h&&(T=_),q===d&&++K===l&&(I=_),(H=W.nextSibling)!==null)break;W=q,q=W.parentNode}W=H}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Sd={focusedElem:t,selectionRange:a},Cc=!1,Jt=r;Jt!==null;)if(r=Jt,t=r.child,(r.subtreeFlags&1024)!==0&&t!==null)t.return=r,Jt=t;else for(;Jt!==null;){switch(r=Jt,d=r.alternate,t=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=r,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Ae=qs(a.type,h,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(Ae,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(Se){lt(a,a.return,Se)}}break;case 3:if((t&1024)!==0){if(t=r.stateNode.containerInfo,a=t.nodeType,a===9)Ad(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ad(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=r.sibling,t!==null){t.return=r.return,Jt=t;break}Jt=r.return}}function Vy(t,r,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Pr(t,a),l&4&&hl(5,a);break;case 1:if(Pr(t,a),l&4)if(t=a.stateNode,r===null)try{t.componentDidMount()}catch(_){lt(a,a.return,_)}else{var h=qs(a.type,r.memoizedProps);r=r.memoizedState;try{t.componentDidUpdate(h,r,t.__reactInternalSnapshotBeforeUpdate)}catch(_){lt(a,a.return,_)}}l&64&&Iy(a),l&512&&fl(a,a.return);break;case 3:if(Pr(t,a),l&64&&(t=a.updateQueue,t!==null)){if(r=null,a.child!==null)switch(a.child.tag){case 27:case 5:r=a.child.stateNode;break;case 1:r=a.child.stateNode}try{gg(t,r)}catch(_){lt(a,a.return,_)}}break;case 27:r===null&&l&4&&Py(a);case 26:case 5:Pr(t,a),r===null&&l&4&&Oy(a),l&512&&fl(a,a.return);break;case 12:Pr(t,a);break;case 13:Pr(t,a),l&4&&Uy(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=kb.bind(null,a),Wb(t,a))));break;case 22:if(l=a.memoizedState!==null||rr,!l){r=r!==null&&r.memoizedState!==null||Ct,h=rr;var d=Ct;rr=l,(Ct=r)&&!d?kr(t,a,(a.subtreeFlags&8772)!==0):Pr(t,a),rr=h,Ct=d}break;case 30:break;default:Pr(t,a)}}function xy(t){var r=t.alternate;r!==null&&(t.alternate=null,xy(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&Tr(r)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var yt=null,An=!1;function sr(t,r,a){for(a=a.child;a!==null;)Ly(t,r,a),a=a.sibling}function Ly(t,r,a){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(mt,a)}catch{}switch(a.tag){case 26:Ct||Si(a,r),sr(t,r,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ct||Si(a,r);var l=yt,h=An;jr(a.type)&&(yt=a.stateNode,An=!1),sr(t,r,a),Tl(a.stateNode),yt=l,An=h;break;case 5:Ct||Si(a,r);case 6:if(l=yt,h=An,yt=null,sr(t,r,a),yt=l,An=h,yt!==null)if(An)try{(yt.nodeType===9?yt.body:yt.nodeName==="HTML"?yt.ownerDocument.body:yt).removeChild(a.stateNode)}catch(d){lt(a,r,d)}else try{yt.removeChild(a.stateNode)}catch(d){lt(a,r,d)}break;case 18:yt!==null&&(An?(t=yt,Av(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Il(t)):Av(yt,a.stateNode));break;case 4:l=yt,h=An,yt=a.stateNode.containerInfo,An=!0,sr(t,r,a),yt=l,An=h;break;case 0:case 11:case 14:case 15:Ct||Mr(2,a,r),Ct||Mr(4,a,r),sr(t,r,a);break;case 1:Ct||(Si(a,r),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Dy(a,r,l)),sr(t,r,a);break;case 21:sr(t,r,a);break;case 22:Ct=(l=Ct)||a.memoizedState!==null,sr(t,r,a),Ct=l;break;default:sr(t,r,a)}}function Uy(t,r){if(r.memoizedState===null&&(t=r.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Il(t)}catch(a){lt(r,r.return,a)}}function Cb(t){switch(t.tag){case 13:case 19:var r=t.stateNode;return r===null&&(r=t.stateNode=new ky),r;case 22:return t=t.stateNode,r=t._retryCache,r===null&&(r=t._retryCache=new ky),r;default:throw Error(s(435,t.tag))}}function Wf(t,r){var a=Cb(t);r.forEach(function(l){var h=Vb.bind(null,t,l);a.has(l)||(a.add(l),l.then(h,h))})}function Mn(t,r){var a=r.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=t,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 27:if(jr(T.type)){yt=T.stateNode,An=!1;break e}break;case 5:yt=T.stateNode,An=!1;break e;case 3:case 4:yt=T.stateNode.containerInfo,An=!0;break e}T=T.return}if(yt===null)throw Error(s(160));Ly(d,_,h),yt=null,An=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)zy(r,t),r=r.sibling}var ni=null;function zy(t,r){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Mn(r,t),Pn(t),l&4&&(Mr(3,t,t.return),hl(3,t),Mr(5,t,t.return));break;case 1:Mn(r,t),Pn(t),l&512&&(Ct||a===null||Si(a,a.return)),l&64&&rr&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=ni;if(Mn(r,t),Pn(t),l&512&&(Ct||a===null||Si(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[ys]||d[Bt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),on(d,l,a),d[Bt]=t,wt(d),l=d;break e;case"link":var _=Pv("link","href",h).get(l+(a.href||""));if(_){for(var T=0;T<_.length;T++)if(d=_[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(T,1);break t}}d=h.createElement(l),on(d,l,a),h.head.appendChild(d);break;case"meta":if(_=Pv("meta","content",h).get(l+(a.content||""))){for(T=0;T<_.length;T++)if(d=_[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(T,1);break t}}d=h.createElement(l),on(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[Bt]=t,wt(d),l=d}t.stateNode=l}else kv(h,t.type,t.stateNode);else t.stateNode=Mv(h,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?kv(h,t.type,t.stateNode):Mv(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Kf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Mn(r,t),Pn(t),l&512&&(Ct||a===null||Si(a,a.return)),a!==null&&l&4&&Kf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Mn(r,t),Pn(t),l&512&&(Ct||a===null||Si(a,a.return)),t.flags&32){h=t.stateNode;try{zn(h,"")}catch(H){lt(t,t.return,H)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,Kf(t,h,a!==null?a.memoizedProps:h)),l&1024&&(Zf=!0);break;case 6:if(Mn(r,t),Pn(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(H){lt(t,t.return,H)}}break;case 3:if(bc=null,h=ni,ni=Tc(r.containerInfo),Mn(r,t),ni=h,Pn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Il(r.containerInfo)}catch(H){lt(t,t.return,H)}Zf&&(Zf=!1,jy(t));break;case 4:l=ni,ni=Tc(t.stateNode.containerInfo),Mn(r,t),Pn(t),ni=l;break;case 12:Mn(r,t),Pn(t);break;case 13:Mn(r,t),Pn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(rd=bn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Wf(t,l)));break;case 22:h=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,B=rr,K=Ct;if(rr=B||h,Ct=K||I,Mn(r,t),Ct=K,rr=B,Pn(t),l&8192)e:for(r=t.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(a===null||I||rr||Ct||Hs(t)),a=null,r=t;;){if(r.tag===5||r.tag===26){if(a===null){I=a=r;try{if(d=I.stateNode,h)_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{T=I.stateNode;var W=I.memoizedProps.style,q=W!=null&&W.hasOwnProperty("display")?W.display:null;T.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(H){lt(I,I.return,H)}}}else if(r.tag===6){if(a===null){I=r;try{I.stateNode.nodeValue=h?"":I.memoizedProps}catch(H){lt(I,I.return,H)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===t)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;a===r&&(a=null),r=r.return}a===r&&(a=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Wf(t,a))));break;case 19:Mn(r,t),Pn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Wf(t,l)));break;case 30:break;case 21:break;default:Mn(r,t),Pn(t)}}function Pn(t){var r=t.flags;if(r&2){try{for(var a,l=t.return;l!==null;){if(My(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Qf(t);lc(t,d,h);break;case 5:var _=a.stateNode;a.flags&32&&(zn(_,""),a.flags&=-33);var T=Qf(t);lc(t,T,_);break;case 3:case 4:var I=a.stateNode.containerInfo,B=Qf(t);$f(t,B,I);break;default:throw Error(s(161))}}catch(K){lt(t,t.return,K)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function jy(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var r=t;jy(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),t=t.sibling}}function Pr(t,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Vy(t,r.alternate,r),r=r.sibling}function Hs(t){for(t=t.child;t!==null;){var r=t;switch(r.tag){case 0:case 11:case 14:case 15:Mr(4,r,r.return),Hs(r);break;case 1:Si(r,r.return);var a=r.stateNode;typeof a.componentWillUnmount=="function"&&Dy(r,r.return,a),Hs(r);break;case 27:Tl(r.stateNode);case 26:case 5:Si(r,r.return),Hs(r);break;case 22:r.memoizedState===null&&Hs(r);break;case 30:Hs(r);break;default:Hs(r)}t=t.sibling}}function kr(t,r,a){for(a=a&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,h=t,d=r,_=d.flags;switch(d.tag){case 0:case 11:case 15:kr(h,d,a),hl(4,d);break;case 1:if(kr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(B){lt(l,l.return,B)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var I=h.shared.hiddenCallbacks;if(I!==null)for(h.shared.hiddenCallbacks=null,h=0;h<I.length;h++)pg(I[h],T)}catch(B){lt(l,l.return,B)}}a&&_&64&&Iy(d),fl(d,d.return);break;case 27:Py(d);case 26:case 5:kr(h,d,a),a&&l===null&&_&4&&Oy(d),fl(d,d.return);break;case 12:kr(h,d,a);break;case 13:kr(h,d,a),a&&_&4&&Uy(h,d);break;case 22:d.memoizedState===null&&kr(h,d,a),fl(d,d.return);break;case 30:break;default:kr(h,d,a)}r=r.sibling}}function Jf(t,r){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(t=r.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Zo(a))}function ed(t,r){t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&Zo(t))}function bi(t,r,a,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)By(t,r,a,l),r=r.sibling}function By(t,r,a,l){var h=r.flags;switch(r.tag){case 0:case 11:case 15:bi(t,r,a,l),h&2048&&hl(9,r);break;case 1:bi(t,r,a,l);break;case 3:bi(t,r,a,l),h&2048&&(t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&Zo(t)));break;case 12:if(h&2048){bi(t,r,a,l),t=r.stateNode;try{var d=r.memoizedProps,_=d.id,T=d.onPostCommit;typeof T=="function"&&T(_,r.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){lt(r,r.return,I)}}else bi(t,r,a,l);break;case 13:bi(t,r,a,l);break;case 23:break;case 22:d=r.stateNode,_=r.alternate,r.memoizedState!==null?d._visibility&2?bi(t,r,a,l):dl(t,r):d._visibility&2?bi(t,r,a,l):(d._visibility|=2,ja(t,r,a,l,(r.subtreeFlags&10256)!==0)),h&2048&&Jf(_,r);break;case 24:bi(t,r,a,l),h&2048&&ed(r.alternate,r);break;default:bi(t,r,a,l)}}function ja(t,r,a,l,h){for(h=h&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var d=t,_=r,T=a,I=l,B=_.flags;switch(_.tag){case 0:case 11:case 15:ja(d,_,T,I,h),hl(8,_);break;case 23:break;case 22:var K=_.stateNode;_.memoizedState!==null?K._visibility&2?ja(d,_,T,I,h):dl(d,_):(K._visibility|=2,ja(d,_,T,I,h)),h&&B&2048&&Jf(_.alternate,_);break;case 24:ja(d,_,T,I,h),h&&B&2048&&ed(_.alternate,_);break;default:ja(d,_,T,I,h)}r=r.sibling}}function dl(t,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var a=t,l=r,h=l.flags;switch(l.tag){case 22:dl(a,l),h&2048&&Jf(l.alternate,l);break;case 24:dl(a,l),h&2048&&ed(l.alternate,l);break;default:dl(a,l)}r=r.sibling}}var ml=8192;function Ba(t){if(t.subtreeFlags&ml)for(t=t.child;t!==null;)qy(t),t=t.sibling}function qy(t){switch(t.tag){case 26:Ba(t),t.flags&ml&&t.memoizedState!==null&&hw(ni,t.memoizedState,t.memoizedProps);break;case 5:Ba(t);break;case 3:case 4:var r=ni;ni=Tc(t.stateNode.containerInfo),Ba(t),ni=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=ml,ml=16777216,Ba(t),ml=r):Ba(t));break;default:Ba(t)}}function Hy(t){var r=t.alternate;if(r!==null&&(t=r.child,t!==null)){r.child=null;do r=t.sibling,t.sibling=null,t=r;while(t!==null)}}function pl(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];Jt=l,Yy(l,t)}Hy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fy(t),t=t.sibling}function Fy(t){switch(t.tag){case 0:case 11:case 15:pl(t),t.flags&2048&&Mr(9,t,t.return);break;case 3:pl(t);break;case 12:pl(t);break;case 22:var r=t.stateNode;t.memoizedState!==null&&r._visibility&2&&(t.return===null||t.return.tag!==13)?(r._visibility&=-3,uc(t)):pl(t);break;default:pl(t)}}function uc(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];Jt=l,Yy(l,t)}Hy(t)}for(t=t.child;t!==null;){switch(r=t,r.tag){case 0:case 11:case 15:Mr(8,r,r.return),uc(r);break;case 22:a=r.stateNode,a._visibility&2&&(a._visibility&=-3,uc(r));break;default:uc(r)}t=t.sibling}}function Yy(t,r){for(;Jt!==null;){var a=Jt;switch(a.tag){case 0:case 11:case 15:Mr(8,a,r);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Zo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Jt=l;else e:for(a=t;Jt!==null;){l=Jt;var h=l.sibling,d=l.return;if(xy(l),l===a){Jt=null;break e}if(h!==null){h.return=d,Jt=h;break e}Jt=d}}}var Rb={getCacheForType:function(t){var r=cn(Ft),a=r.data.get(t);return a===void 0&&(a=t(),r.data.set(t,a)),a}},Nb=typeof WeakMap=="function"?WeakMap:Map,tt=0,ut=null,Ve=null,Fe=0,nt=0,kn=null,Vr=!1,qa=!1,td=!1,ar=0,bt=0,xr=0,Fs=0,nd=0,Kn=0,Ha=0,gl=null,Cn=null,id=!1,rd=0,cc=1/0,hc=null,Lr=null,an=0,Ur=null,Fa=null,Ya=0,sd=0,ad=null,Gy=null,yl=0,od=null;function Vn(){if((tt&2)!==0&&Fe!==0)return Fe&-Fe;if(F.T!==null){var t=Ma;return t!==0?t:md()}return _r()}function Xy(){Kn===0&&(Kn=(Fe&536870912)===0||$e?pt():536870912);var t=Xn.current;return t!==null&&(t.flags|=32),Kn}function xn(t,r,a){(t===ut&&(nt===2||nt===9)||t.cancelPendingCommit!==null)&&(Ga(t,0),zr(t,Fe,Kn,!1)),Qt(t,a),((tt&2)===0||t!==ut)&&(t===ut&&((tt&2)===0&&(Fs|=a),bt===4&&zr(t,Fe,Kn,!1)),wi(t))}function Ky(t,r,a){if((tt&6)!==0)throw Error(s(327));var l=!a&&(r&124)===0&&(r&t.expiredLanes)===0||he(t,r),h=l?Ob(t,r):cd(t,r,!0),d=l;do{if(h===0){qa&&!l&&zr(t,r,0,!1);break}else{if(a=t.current.alternate,d&&!Ib(a)){h=cd(t,r,!1),d=!1;continue}if(h===2){if(d=r,t.errorRecoveryDisabledLanes&d)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){r=_;e:{var T=t;h=gl;var I=T.current.memoizedState.isDehydrated;if(I&&(Ga(T,_).flags|=256),_=cd(T,_,!1),_!==2){if(td&&!I){T.errorRecoveryDisabledLanes|=d,Fs|=d,h=4;break e}d=Cn,Cn=h,d!==null&&(Cn===null?Cn=d:Cn.push.apply(Cn,d))}h=_}if(d=!1,h!==2)continue}}if(h===1){Ga(t,0),zr(t,r,0,!0);break}e:{switch(l=t,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:zr(l,r,Kn,!Vr);break e;case 2:Cn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(h=rd+300-bn(),10<h)){if(zr(l,r,Kn,!Vr),Q(l,0,!0)!==0)break e;l.timeoutHandle=bv(Qy.bind(null,l,a,Cn,hc,id,r,Kn,Fs,Ha,Vr,d,2,-0,0),h);break e}Qy(l,a,Cn,hc,id,r,Kn,Fs,Ha,Vr,d,0,-0,0)}}break}while(!0);wi(t)}function Qy(t,r,a,l,h,d,_,T,I,B,K,W,q,H){if(t.timeoutHandle=-1,W=r.subtreeFlags,(W&8192||(W&16785408)===16785408)&&(wl={stylesheets:null,count:0,unsuspend:cw},qy(r),W=fw(),W!==null)){t.cancelPendingCommit=W(nv.bind(null,t,r,d,a,l,h,_,T,I,K,1,q,H)),zr(t,d,_,!B);return}nv(t,r,d,a,l,h,_,T,I)}function Ib(t){for(var r=t;;){var a=r.tag;if((a===0||a===11||a===15)&&r.flags&16384&&(a=r.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!Dn(d(),h))return!1}catch{return!1}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function zr(t,r,a,l){r&=~nd,r&=~Fs,t.suspendedLanes|=r,t.pingedLanes&=~r,l&&(t.warmLanes|=r),l=t.expirationTimes;for(var h=r;0<h;){var d=31-Dt(h),_=1<<d;l[d]=-1,h&=~_}a!==0&&Ot(t,a,r)}function fc(){return(tt&6)===0?(vl(0),!1):!0}function ld(){if(Ve!==null){if(nt===0)var t=Ve.return;else t=Ve,Wi=Us=null,Af(t),Ua=null,ll=0,t=Ve;for(;t!==null;)Ny(t.alternate,t),t=t.return;Ve=null}}function Ga(t,r){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Xb(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ld(),ut=t,Ve=a=Qi(t.current,null),Fe=r,nt=0,kn=null,Vr=!1,qa=he(t,r),td=!1,Ha=Kn=nd=Fs=xr=bt=0,Cn=gl=null,id=!1,(r&8)!==0&&(r|=r&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=r;0<l;){var h=31-Dt(l),d=1<<h;r|=t[h],l&=~d}return ar=r,ku(),a}function $y(t,r){Oe=null,F.H=Ju,r===Jo||r===Hu?(r=dg(),nt=3):r===cg?(r=dg(),nt=4):nt=r===my?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,kn=r,Ve===null&&(bt=1,rc(t,Hn(r,t.current)))}function Zy(){var t=F.H;return F.H=Ju,t===null?Ju:t}function Wy(){var t=F.A;return F.A=Rb,t}function ud(){bt=4,Vr||(Fe&4194048)!==Fe&&Xn.current!==null||(qa=!0),(xr&134217727)===0&&(Fs&134217727)===0||ut===null||zr(ut,Fe,Kn,!1)}function cd(t,r,a){var l=tt;tt|=2;var h=Zy(),d=Wy();(ut!==t||Fe!==r)&&(hc=null,Ga(t,r)),r=!1;var _=bt;e:do try{if(nt!==0&&Ve!==null){var T=Ve,I=kn;switch(nt){case 8:ld(),_=6;break e;case 3:case 2:case 9:case 6:Xn.current===null&&(r=!0);var B=nt;if(nt=0,kn=null,Xa(t,T,I,B),a&&qa){_=0;break e}break;default:B=nt,nt=0,kn=null,Xa(t,T,I,B)}}Db(),_=bt;break}catch(K){$y(t,K)}while(!0);return r&&t.shellSuspendCounter++,Wi=Us=null,tt=l,F.H=h,F.A=d,Ve===null&&(ut=null,Fe=0,ku()),_}function Db(){for(;Ve!==null;)Jy(Ve)}function Ob(t,r){var a=tt;tt|=2;var l=Zy(),h=Wy();ut!==t||Fe!==r?(hc=null,cc=bn()+500,Ga(t,r)):qa=he(t,r);e:do try{if(nt!==0&&Ve!==null){r=Ve;var d=kn;t:switch(nt){case 1:nt=0,kn=null,Xa(t,r,d,1);break;case 2:case 9:if(hg(d)){nt=0,kn=null,ev(r);break}r=function(){nt!==2&&nt!==9||ut!==t||(nt=7),wi(t)},d.then(r,r);break e;case 3:nt=7;break e;case 4:nt=5;break e;case 7:hg(d)?(nt=0,kn=null,ev(r)):(nt=0,kn=null,Xa(t,r,d,7));break;case 5:var _=null;switch(Ve.tag){case 26:_=Ve.memoizedState;case 5:case 27:var T=Ve;if(!_||Vv(_)){nt=0,kn=null;var I=T.sibling;if(I!==null)Ve=I;else{var B=T.return;B!==null?(Ve=B,dc(B)):Ve=null}break t}}nt=0,kn=null,Xa(t,r,d,5);break;case 6:nt=0,kn=null,Xa(t,r,d,6);break;case 8:ld(),bt=6;break e;default:throw Error(s(462))}}Mb();break}catch(K){$y(t,K)}while(!0);return Wi=Us=null,F.H=l,F.A=h,tt=a,Ve!==null?0:(ut=null,Fe=0,ku(),bt)}function Mb(){for(;Ve!==null&&!Ln();)Jy(Ve)}function Jy(t){var r=Cy(t.alternate,t,ar);t.memoizedProps=t.pendingProps,r===null?dc(t):Ve=r}function ev(t){var r=t,a=r.alternate;switch(r.tag){case 15:case 0:r=Ey(a,r,r.pendingProps,r.type,void 0,Fe);break;case 11:r=Ey(a,r,r.pendingProps,r.type.render,r.ref,Fe);break;case 5:Af(r);default:Ny(a,r),r=Ve=tg(r,ar),r=Cy(a,r,ar)}t.memoizedProps=t.pendingProps,r===null?dc(t):Ve=r}function Xa(t,r,a,l){Wi=Us=null,Af(r),Ua=null,ll=0;var h=r.return;try{if(Tb(t,h,r,a,Fe)){bt=1,rc(t,Hn(a,t.current)),Ve=null;return}}catch(d){if(h!==null)throw Ve=h,d;bt=1,rc(t,Hn(a,t.current)),Ve=null;return}r.flags&32768?($e||l===1?t=!0:qa||(Fe&536870912)!==0?t=!1:(Vr=t=!0,(l===2||l===9||l===3||l===6)&&(l=Xn.current,l!==null&&l.tag===13&&(l.flags|=16384))),tv(r,t)):dc(r)}function dc(t){var r=t;do{if((r.flags&32768)!==0){tv(r,Vr);return}t=r.return;var a=bb(r.alternate,r,ar);if(a!==null){Ve=a;return}if(r=r.sibling,r!==null){Ve=r;return}Ve=r=t}while(r!==null);bt===0&&(bt=5)}function tv(t,r){do{var a=wb(t.alternate,t);if(a!==null){a.flags&=32767,Ve=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!r&&(t=t.sibling,t!==null)){Ve=t;return}Ve=t=a}while(t!==null);bt=6,Ve=null}function nv(t,r,a,l,h,d,_,T,I){t.cancelPendingCommit=null;do mc();while(an!==0);if((tt&6)!==0)throw Error(s(327));if(r!==null){if(r===t.current)throw Error(s(177));if(d=r.lanes|r.childLanes,d|=Jh,ht(t,a,d,_,T,I),t===ut&&(Ve=ut=null,Fe=0),Fa=r,Ur=t,Ya=a,sd=d,ad=h,Gy=l,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,xb(dt,function(){return ov(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,h=te.p,te.p=2,_=tt,tt|=4;try{Ab(t,r,a)}finally{tt=_,te.p=h,F.T=l}}an=1,iv(),rv(),sv()}}function iv(){if(an===1){an=0;var t=Ur,r=Fa,a=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var l=te.p;te.p=2;var h=tt;tt|=4;try{zy(r,t);var d=Sd,_=Yp(t.containerInfo),T=d.focusedElem,I=d.selectionRange;if(_!==T&&T&&T.ownerDocument&&Fp(T.ownerDocument.documentElement,T)){if(I!==null&&Kh(T)){var B=I.start,K=I.end;if(K===void 0&&(K=B),"selectionStart"in T)T.selectionStart=B,T.selectionEnd=Math.min(K,T.value.length);else{var W=T.ownerDocument||document,q=W&&W.defaultView||window;if(q.getSelection){var H=q.getSelection(),Ae=T.textContent.length,Se=Math.min(I.start,Ae),at=I.end===void 0?Se:Math.min(I.end,Ae);!H.extend&&Se>at&&(_=at,at=Se,Se=_);var L=Hp(T,Se),P=Hp(T,at);if(L&&P&&(H.rangeCount!==1||H.anchorNode!==L.node||H.anchorOffset!==L.offset||H.focusNode!==P.node||H.focusOffset!==P.offset)){var j=W.createRange();j.setStart(L.node,L.offset),H.removeAllRanges(),Se>at?(H.addRange(j),H.extend(P.node,P.offset)):(j.setEnd(P.node,P.offset),H.addRange(j))}}}}for(W=[],H=T;H=H.parentNode;)H.nodeType===1&&W.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<W.length;T++){var $=W[T];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}Cc=!!Td,Sd=Td=null}finally{tt=h,te.p=l,F.T=a}}t.current=r,an=2}}function rv(){if(an===2){an=0;var t=Ur,r=Fa,a=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var l=te.p;te.p=2;var h=tt;tt|=4;try{Vy(t,r.alternate,r)}finally{tt=h,te.p=l,F.T=a}}an=3}}function sv(){if(an===4||an===3){an=0,Wn();var t=Ur,r=Fa,a=Ya,l=Gy;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?an=5:(an=0,Fa=Ur=null,av(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(Lr=null),ca(a),r=r.stateNode,Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(mt,r,void 0,(r.current.flags&128)===128)}catch{}if(l!==null){r=F.T,h=te.p,te.p=2,F.T=null;try{for(var d=t.onRecoverableError,_=0;_<l.length;_++){var T=l[_];d(T.value,{componentStack:T.stack})}}finally{F.T=r,te.p=h}}(Ya&3)!==0&&mc(),wi(t),h=t.pendingLanes,(a&4194090)!==0&&(h&42)!==0?t===od?yl++:(yl=0,od=t):yl=0,vl(0)}}function av(t,r){(t.pooledCacheLanes&=r)===0&&(r=t.pooledCache,r!=null&&(t.pooledCache=null,Zo(r)))}function mc(t){return iv(),rv(),sv(),ov()}function ov(){if(an!==5)return!1;var t=Ur,r=sd;sd=0;var a=ca(Ya),l=F.T,h=te.p;try{te.p=32>a?32:a,F.T=null,a=ad,ad=null;var d=Ur,_=Ya;if(an=0,Fa=Ur=null,Ya=0,(tt&6)!==0)throw Error(s(331));var T=tt;if(tt|=4,Fy(d.current),By(d,d.current,_,a),tt=T,vl(0,!1),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(mt,d)}catch{}return!0}finally{te.p=h,F.T=l,av(t,r)}}function lv(t,r,a){r=Hn(a,r),r=zf(t.stateNode,r,2),t=Nr(t,r,2),t!==null&&(Qt(t,2),wi(t))}function lt(t,r,a){if(t.tag===3)lv(t,t,a);else for(;r!==null;){if(r.tag===3){lv(r,t,a);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Lr===null||!Lr.has(l))){t=Hn(a,t),a=fy(2),l=Nr(r,a,2),l!==null&&(dy(a,l,r,t),Qt(l,2),wi(l));break}}r=r.return}}function hd(t,r,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Nb;var h=new Set;l.set(r,h)}else h=l.get(r),h===void 0&&(h=new Set,l.set(r,h));h.has(a)||(td=!0,h.add(a),t=Pb.bind(null,t,r,a),r.then(t,t))}function Pb(t,r,a){var l=t.pingCache;l!==null&&l.delete(r),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ut===t&&(Fe&a)===a&&(bt===4||bt===3&&(Fe&62914560)===Fe&&300>bn()-rd?(tt&2)===0&&Ga(t,0):nd|=a,Ha===Fe&&(Ha=0)),wi(t)}function uv(t,r){r===0&&(r=Ie()),t=Na(t,r),t!==null&&(Qt(t,r),wi(t))}function kb(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),uv(t,a)}function Vb(t,r){var a=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(r),uv(t,a)}function xb(t,r){return Tt(t,r)}var pc=null,Ka=null,fd=!1,gc=!1,dd=!1,Ys=0;function wi(t){t!==Ka&&t.next===null&&(Ka===null?pc=Ka=t:Ka=Ka.next=t),gc=!0,fd||(fd=!0,Ub())}function vl(t,r){if(!dd&&gc){dd=!0;do for(var a=!1,l=pc;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var _=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-Dt(42|t)+1)-1,d&=h&~(_&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,dv(l,d))}else d=Fe,d=Q(l,l===ut?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||he(l,d)||(a=!0,dv(l,d));l=l.next}while(a);dd=!1}}function Lb(){cv()}function cv(){gc=fd=!1;var t=0;Ys!==0&&(Gb()&&(t=Ys),Ys=0);for(var r=bn(),a=null,l=pc;l!==null;){var h=l.next,d=hv(l,r);d===0?(l.next=null,a===null?pc=h:a.next=h,h===null&&(Ka=a)):(a=l,(t!==0||(d&3)!==0)&&(gc=!0)),l=h}vl(t)}function hv(t,r){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var _=31-Dt(d),T=1<<_,I=h[_];I===-1?((T&a)===0||(T&l)!==0)&&(h[_]=Ue(T,r)):I<=r&&(t.expiredLanes|=T),d&=~T}if(r=ut,a=Fe,a=Q(t,t===r?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===r&&(nt===2||nt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&jt(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||he(t,a)){if(r=a&-a,r===t.callbackPriority)return r;switch(l!==null&&jt(l),ca(a)){case 2:case 8:a=gr;break;case 32:a=dt;break;case 268435456:a=Vi;break;default:a=dt}return l=fv.bind(null,t),a=Tt(a,l),t.callbackPriority=r,t.callbackNode=a,r}return l!==null&&l!==null&&jt(l),t.callbackPriority=2,t.callbackNode=null,2}function fv(t,r){if(an!==0&&an!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(mc()&&t.callbackNode!==a)return null;var l=Fe;return l=Q(t,t===ut?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Ky(t,l,r),hv(t,bn()),t.callbackNode!=null&&t.callbackNode===a?fv.bind(null,t):null)}function dv(t,r){if(mc())return null;Ky(t,r,!0)}function Ub(){Kb(function(){(tt&6)!==0?Tt(sa,Lb):cv()})}function md(){return Ys===0&&(Ys=pt()),Ys}function mv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ga(""+t)}function pv(t,r){var a=r.ownerDocument.createElement("input");return a.name=r.name,a.value=r.value,t.id&&a.setAttribute("form",t.id),r.parentNode.insertBefore(a,r),t=new FormData(t),a.parentNode.removeChild(a),t}function zb(t,r,a,l,h){if(r==="submit"&&a&&a.stateNode===h){var d=mv((h[Mt]||null).action),_=l.submitter;_&&(r=(r=_[Mt]||null)?mv(r.formAction):_.getAttribute("formAction"),r!==null&&(d=r,_=null));var T=new ya("action","action",null,l,h);t.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ys!==0){var I=_?pv(h,_):new FormData(h);kf(a,{pending:!0,data:I,method:h.method,action:d},null,I)}}else typeof d=="function"&&(T.preventDefault(),I=_?pv(h,_):new FormData(h),kf(a,{pending:!0,data:I,method:h.method,action:d},d,I))},currentTarget:h}]})}}for(var pd=0;pd<Wh.length;pd++){var gd=Wh[pd],jb=gd.toLowerCase(),Bb=gd[0].toUpperCase()+gd.slice(1);ti(jb,"on"+Bb)}ti(Kp,"onAnimationEnd"),ti(Qp,"onAnimationIteration"),ti($p,"onAnimationStart"),ti("dblclick","onDoubleClick"),ti("focusin","onFocus"),ti("focusout","onBlur"),ti(rb,"onTransitionRun"),ti(sb,"onTransitionStart"),ti(ab,"onTransitionCancel"),ti(Zp,"onTransitionEnd"),ji("onMouseEnter",["mouseout","mouseover"]),ji("onMouseLeave",["mouseout","mouseover"]),ji("onPointerEnter",["pointerout","pointerover"]),ji("onPointerLeave",["pointerout","pointerover"]),Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_l));function gv(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var d=void 0;if(r)for(var _=l.length-1;0<=_;_--){var T=l[_],I=T.instance,B=T.currentTarget;if(T=T.listener,I!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=B;try{d(h)}catch(K){ic(K)}h.currentTarget=null,d=I}else for(_=0;_<l.length;_++){if(T=l[_],I=T.instance,B=T.currentTarget,T=T.listener,I!==d&&h.isPropagationStopped())break e;d=T,h.currentTarget=B;try{d(h)}catch(K){ic(K)}h.currentTarget=null,d=I}}}}function xe(t,r){var a=r[Do];a===void 0&&(a=r[Do]=new Set);var l=t+"__bubble";a.has(l)||(yv(r,t,2,!1),a.add(l))}function yd(t,r,a){var l=0;r&&(l|=4),yv(a,t,l,r)}var yc="_reactListening"+Math.random().toString(36).slice(2);function vd(t){if(!t[yc]){t[yc]=!0,Oo.forEach(function(a){a!=="selectionchange"&&(qb.has(a)||yd(a,!1,t),yd(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[yc]||(r[yc]=!0,yd("selectionchange",!1,r))}}function yv(t,r,a,l){switch(Bv(r)){case 2:var h=pw;break;case 8:h=gw;break;default:h=Md}a=h.bind(null,r,a,t),h=void 0,!Bn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(r,a,{capture:!0,passive:h}):t.addEventListener(r,a,!0):h!==void 0?t.addEventListener(r,a,{passive:h}):t.addEventListener(r,a,!1)}function _d(t,r,a,l,h){var d=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var T=l.stateNode.containerInfo;if(T===h)break;if(_===4)for(_=l.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===h)return;_=_.return}for(;T!==null;){if(_=zi(T),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){l=d=_;continue e}T=T.parentNode}}l=l.return}_u(function(){var B=d,K=jn(a),W=[];e:{var q=Wp.get(t);if(q!==void 0){var H=ya,Ae=t;switch(t){case"keypress":if(pi(a)===0)break e;case"keydown":case"keyup":H=ba;break;case"focusin":Ae="focus",H=Ea;break;case"focusout":Ae="blur",H=Ea;break;case"beforeblur":case"afterblur":H=Ea;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=qn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Fh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=Ru;break;case Kp:case Qp:case $p:H=Ta;break;case Zp:H=Iu;break;case"scroll":case"scrollend":H=Eu;break;case"wheel":H=wa;break;case"copy":case"cut":case"paste":H=Sa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Ho;break;case"toggle":case"beforetoggle":H=Ou}var Se=(r&4)!==0,at=!Se&&(t==="scroll"||t==="scrollend"),L=Se?q!==null?q+"Capture":null:q;Se=[];for(var P=B,j;P!==null;){var $=P;if(j=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||j===null||L===null||($=ws(P,L),$!=null&&Se.push(El(P,$,j))),at)break;P=P.return}0<Se.length&&(q=new H(q,Ae,null,a,K),W.push({event:q,listeners:Se}))}}if((r&7)===0){e:{if(q=t==="mouseover"||t==="pointerover",H=t==="mouseout"||t==="pointerout",q&&a!==Hi&&(Ae=a.relatedTarget||a.fromElement)&&(zi(Ae)||Ae[Un]))break e;if((H||q)&&(q=K.window===K?K:(q=K.ownerDocument)?q.defaultView||q.parentWindow:window,H?(Ae=a.relatedTarget||a.toElement,H=B,Ae=Ae?zi(Ae):null,Ae!==null&&(at=u(Ae),Se=Ae.tag,Ae!==at||Se!==5&&Se!==27&&Se!==6)&&(Ae=null)):(H=null,Ae=B),H!==Ae)){if(Se=qn,$="onMouseLeave",L="onMouseEnter",P="mouse",(t==="pointerout"||t==="pointerover")&&(Se=Ho,$="onPointerLeave",L="onPointerEnter",P="pointer"),at=H==null?q:hi(H),j=Ae==null?q:hi(Ae),q=new Se($,P+"leave",H,a,K),q.target=at,q.relatedTarget=j,$=null,zi(K)===B&&(Se=new Se(L,P+"enter",Ae,a,K),Se.target=j,Se.relatedTarget=at,$=Se),at=$,H&&Ae)t:{for(Se=H,L=Ae,P=0,j=Se;j;j=Qa(j))P++;for(j=0,$=L;$;$=Qa($))j++;for(;0<P-j;)Se=Qa(Se),P--;for(;0<j-P;)L=Qa(L),j--;for(;P--;){if(Se===L||L!==null&&Se===L.alternate)break t;Se=Qa(Se),L=Qa(L)}Se=null}else Se=null;H!==null&&vv(W,q,H,Se,!1),Ae!==null&&at!==null&&vv(W,at,Ae,Se,!0)}}e:{if(q=B?hi(B):window,H=q.nodeName&&q.nodeName.toLowerCase(),H==="select"||H==="input"&&q.type==="file")var pe=Lp;else if(Ht(q))if(Up)pe=tb;else{pe=JS;var Pe=WS}else H=q.nodeName,!H||H.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?B&&xo(B.elementType)&&(pe=Lp):pe=eb;if(pe&&(pe=pe(t,B))){Ki(W,pe,a,K);break e}Pe&&Pe(t,q,B),t==="focusout"&&B&&q.type==="number"&&B.memoizedProps.value!=null&&br(q,"number",q.value)}switch(Pe=B?hi(B):window,t){case"focusin":(Ht(Pe)||Pe.contentEditable==="true")&&(Aa=Pe,Qh=B,Go=null);break;case"focusout":Go=Qh=Aa=null;break;case"mousedown":$h=!0;break;case"contextmenu":case"mouseup":case"dragend":$h=!1,Gp(W,a,K);break;case"selectionchange":if(ib)break;case"keydown":case"keyup":Gp(W,a,K)}var ve;if(vi)e:{switch(t){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else qe?Y(t,a)&&(be="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(be="onCompositionStart");be&&(v&&a.locale!=="ko"&&(qe||be!=="onCompositionStart"?be==="onCompositionEnd"&&qe&&(ve=Uo()):(mi=K,wr="value"in mi?mi.value:mi.textContent,qe=!0)),Pe=vc(B,be),0<Pe.length&&(be=new Bo(be,t,null,a,K),W.push({event:be,listeners:Pe}),ve?be.data=ve:(ve=se(a),ve!==null&&(be.data=ve)))),(ve=g?qt(t,a):He(t,a))&&(be=vc(B,"onBeforeInput"),0<be.length&&(Pe=new Bo("onBeforeInput","beforeinput",null,a,K),W.push({event:Pe,listeners:be}),Pe.data=ve)),zb(W,t,B,a,K)}gv(W,r)})}function El(t,r,a){return{instance:t,listener:r,currentTarget:a}}function vc(t,r){for(var a=r+"Capture",l=[];t!==null;){var h=t,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=ws(t,a),h!=null&&l.unshift(El(t,h,d)),h=ws(t,r),h!=null&&l.push(El(t,h,d))),t.tag===3)return l;t=t.return}return[]}function Qa(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function vv(t,r,a,l,h){for(var d=r._reactName,_=[];a!==null&&a!==l;){var T=a,I=T.alternate,B=T.stateNode;if(T=T.tag,I!==null&&I===l)break;T!==5&&T!==26&&T!==27||B===null||(I=B,h?(B=ws(a,d),B!=null&&_.unshift(El(a,B,I))):h||(B=ws(a,d),B!=null&&_.push(El(a,B,I)))),a=a.return}_.length!==0&&t.push({event:r,listeners:_})}var Hb=/\r\n?/g,Fb=/\u0000|\uFFFD/g;function _v(t){return(typeof t=="string"?t:""+t).replace(Hb,`
`).replace(Fb,"")}function Ev(t,r){return r=_v(r),_v(t)===r}function _c(){}function st(t,r,a,l,h,d){switch(a){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||zn(t,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&zn(t,""+l);break;case"className":fi(t,"class",l);break;case"tabIndex":fi(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":fi(t,a,l);break;case"style":Vo(t,l,d);break;case"data":if(r!=="object"){fi(t,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=ga(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(r!=="input"&&st(t,r,"name",h.name,h,null),st(t,r,"formEncType",h.formEncType,h,null),st(t,r,"formMethod",h.formMethod,h,null),st(t,r,"formTarget",h.formTarget,h,null)):(st(t,r,"encType",h.encType,h,null),st(t,r,"method",h.method,h,null),st(t,r,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=ga(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=_c);break;case"onScroll":l!=null&&xe("scroll",t);break;case"onScrollEnd":l!=null&&xe("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=ga(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":xe("beforetoggle",t),xe("toggle",t),Sr(t,"popover",l);break;case"xlinkActuate":nn(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":nn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":nn(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":nn(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":nn(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":nn(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":nn(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":nn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":nn(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Sr(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=qh.get(a)||a,Sr(t,a,l))}}function Ed(t,r,a,l,h,d){switch(a){case"style":Vo(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?zn(t,l):(typeof l=="number"||typeof l=="bigint")&&zn(t,""+l);break;case"onScroll":l!=null&&xe("scroll",t);break;case"onScrollEnd":l!=null&&xe("scrollend",t);break;case"onClick":l!=null&&(t.onclick=_c);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ha.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),r=a.slice(2,h?a.length-7:void 0),d=t[Mt]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(r,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(r,l,h);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Sr(t,a,l)}}}function on(t,r,a){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",t),xe("load",t);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var _=a[d];if(_!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:st(t,r,d,_,a,null)}}h&&st(t,r,"srcSet",a.srcSet,a,null),l&&st(t,r,"src",a.src,a,null);return;case"input":xe("invalid",t);var T=d=_=h=null,I=null,B=null;for(l in a)if(a.hasOwnProperty(l)){var K=a[l];if(K!=null)switch(l){case"name":h=K;break;case"type":_=K;break;case"checked":I=K;break;case"defaultChecked":B=K;break;case"value":d=K;break;case"defaultValue":T=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,r));break;default:st(t,r,l,K,a,null)}}Ts(t,d,T,I,B,_,h,!1),pa(t);return;case"select":xe("invalid",t),l=_=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":_=T;break;case"multiple":l=T;default:st(t,r,h,T,a,null)}r=d,a=_,t.multiple=!!l,r!=null?qi(t,!!l,r,!1):a!=null&&qi(t,!!l,a,!0);return;case"textarea":xe("invalid",t),d=h=l=null;for(_ in a)if(a.hasOwnProperty(_)&&(T=a[_],T!=null))switch(_){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:st(t,r,_,T,a,null)}Ss(t,l,h,d),pa(t);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(l=a[I],l!=null))switch(I){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:st(t,r,I,l,a,null)}return;case"dialog":xe("beforetoggle",t),xe("toggle",t),xe("cancel",t),xe("close",t);break;case"iframe":case"object":xe("load",t);break;case"video":case"audio":for(l=0;l<_l.length;l++)xe(_l[l],t);break;case"image":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"embed":case"source":case"link":xe("error",t),xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in a)if(a.hasOwnProperty(B)&&(l=a[B],l!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:st(t,r,B,l,a,null)}return;default:if(xo(r)){for(K in a)a.hasOwnProperty(K)&&(l=a[K],l!==void 0&&Ed(t,r,K,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&st(t,r,T,l,a,null))}function Yb(t,r,a,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,_=null,T=null,I=null,B=null,K=null;for(H in a){var W=a[H];if(a.hasOwnProperty(H)&&W!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":I=W;default:l.hasOwnProperty(H)||st(t,r,H,null,l,W)}}for(var q in l){var H=l[q];if(W=a[q],l.hasOwnProperty(q)&&(H!=null||W!=null))switch(q){case"type":d=H;break;case"name":h=H;break;case"checked":B=H;break;case"defaultChecked":K=H;break;case"value":_=H;break;case"defaultValue":T=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,r));break;default:H!==W&&st(t,r,q,H,l,W)}}In(t,_,T,I,B,K,d,h);return;case"select":H=_=T=q=null;for(d in a)if(I=a[d],a.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":H=I;default:l.hasOwnProperty(d)||st(t,r,d,null,l,I)}for(h in l)if(d=l[h],I=a[h],l.hasOwnProperty(h)&&(d!=null||I!=null))switch(h){case"value":q=d;break;case"defaultValue":T=d;break;case"multiple":_=d;default:d!==I&&st(t,r,h,d,l,I)}r=T,a=_,l=H,q!=null?qi(t,!!a,q,!1):!!l!=!!a&&(r!=null?qi(t,!!a,r,!0):qi(t,!!a,a?[]:"",!1));return;case"textarea":H=q=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:st(t,r,T,null,l,h)}for(_ in l)if(h=l[_],d=a[_],l.hasOwnProperty(_)&&(h!=null||d!=null))switch(_){case"value":q=h;break;case"defaultValue":H=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&st(t,r,_,h,l,d)}it(t,q,H);return;case"option":for(var Ae in a)if(q=a[Ae],a.hasOwnProperty(Ae)&&q!=null&&!l.hasOwnProperty(Ae))switch(Ae){case"selected":t.selected=!1;break;default:st(t,r,Ae,null,l,q)}for(I in l)if(q=l[I],H=a[I],l.hasOwnProperty(I)&&q!==H&&(q!=null||H!=null))switch(I){case"selected":t.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:st(t,r,I,q,l,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Se in a)q=a[Se],a.hasOwnProperty(Se)&&q!=null&&!l.hasOwnProperty(Se)&&st(t,r,Se,null,l,q);for(B in l)if(q=l[B],H=a[B],l.hasOwnProperty(B)&&q!==H&&(q!=null||H!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,r));break;default:st(t,r,B,q,l,H)}return;default:if(xo(r)){for(var at in a)q=a[at],a.hasOwnProperty(at)&&q!==void 0&&!l.hasOwnProperty(at)&&Ed(t,r,at,void 0,l,q);for(K in l)q=l[K],H=a[K],!l.hasOwnProperty(K)||q===H||q===void 0&&H===void 0||Ed(t,r,K,q,l,H);return}}for(var L in a)q=a[L],a.hasOwnProperty(L)&&q!=null&&!l.hasOwnProperty(L)&&st(t,r,L,null,l,q);for(W in l)q=l[W],H=a[W],!l.hasOwnProperty(W)||q===H||q==null&&H==null||st(t,r,W,q,l,H)}var Td=null,Sd=null;function Ec(t){return t.nodeType===9?t:t.ownerDocument}function Tv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sv(t,r){if(t===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&r==="foreignObject"?0:t}function bd(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var wd=null;function Gb(){var t=window.event;return t&&t.type==="popstate"?t===wd?!1:(wd=t,!0):(wd=null,!1)}var bv=typeof setTimeout=="function"?setTimeout:void 0,Xb=typeof clearTimeout=="function"?clearTimeout:void 0,wv=typeof Promise=="function"?Promise:void 0,Kb=typeof queueMicrotask=="function"?queueMicrotask:typeof wv<"u"?function(t){return wv.resolve(null).then(t).catch(Qb)}:bv;function Qb(t){setTimeout(function(){throw t})}function jr(t){return t==="head"}function Av(t,r){var a=r,l=0,h=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var _=t.ownerDocument;if(a&1&&Tl(_.documentElement),a&2&&Tl(_.body),a&4)for(a=_.head,Tl(a),_=a.firstChild;_;){var T=_.nextSibling,I=_.nodeName;_[ys]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&_.rel.toLowerCase()==="stylesheet"||a.removeChild(_),_=T}}if(h===0){t.removeChild(d),Il(r);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);Il(r)}function Ad(t){var r=t.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var a=r;switch(r=r.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ad(a),Tr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function $b(t,r,a,l){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ys])switch(r){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(r==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=ii(t.nextSibling),t===null)break}return null}function Zb(t,r,a){if(r==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ii(t.nextSibling),t===null))return null;return t}function Cd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Wb(t,r){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")r();else{var l=function(){r(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function ii(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return t}var Rd=null;function Cv(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}function Rv(t,r,a){switch(r=Ec(a),t){case"html":if(t=r.documentElement,!t)throw Error(s(452));return t;case"head":if(t=r.head,!t)throw Error(s(453));return t;case"body":if(t=r.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Tl(t){for(var r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Tr(t)}var Qn=new Map,Nv=new Set;function Tc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var or=te.d;te.d={f:Jb,r:ew,D:tw,C:nw,L:iw,m:rw,X:aw,S:sw,M:ow};function Jb(){var t=or.f(),r=fc();return t||r}function ew(t){var r=ci(t);r!==null&&r.tag===5&&r.type==="form"?Kg(r):or.r(t)}var $a=typeof document>"u"?null:document;function Iv(t,r,a){var l=$a;if(l&&typeof r=="string"&&r){var h=Pt(r);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),Nv.has(h)||(Nv.add(h),t={rel:t,crossOrigin:a,href:r},l.querySelector(h)===null&&(r=l.createElement("link"),on(r,"link",t),wt(r),l.head.appendChild(r)))}}function tw(t){or.D(t),Iv("dns-prefetch",t,null)}function nw(t,r){or.C(t,r),Iv("preconnect",t,r)}function iw(t,r,a){or.L(t,r,a);var l=$a;if(l&&t&&r){var h='link[rel="preload"][as="'+Pt(r)+'"]';r==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+Pt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+Pt(a.imageSizes)+'"]')):h+='[href="'+Pt(t)+'"]';var d=h;switch(r){case"style":d=Za(t);break;case"script":d=Wa(t)}Qn.has(d)||(t=E({rel:"preload",href:r==="image"&&a&&a.imageSrcSet?void 0:t,as:r},a),Qn.set(d,t),l.querySelector(h)!==null||r==="style"&&l.querySelector(Sl(d))||r==="script"&&l.querySelector(bl(d))||(r=l.createElement("link"),on(r,"link",t),wt(r),l.head.appendChild(r)))}}function rw(t,r){or.m(t,r);var a=$a;if(a&&t){var l=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+Pt(l)+'"][href="'+Pt(t)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Wa(t)}if(!Qn.has(d)&&(t=E({rel:"modulepreload",href:t},r),Qn.set(d,t),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bl(d)))return}l=a.createElement("link"),on(l,"link",t),wt(l),a.head.appendChild(l)}}}function sw(t,r,a){or.S(t,r,a);var l=$a;if(l&&t){var h=yn(l).hoistableStyles,d=Za(t);r=r||"default";var _=h.get(d);if(!_){var T={loading:0,preload:null};if(_=l.querySelector(Sl(d)))T.loading=5;else{t=E({rel:"stylesheet",href:t,"data-precedence":r},a),(a=Qn.get(d))&&Nd(t,a);var I=_=l.createElement("link");wt(I),on(I,"link",t),I._p=new Promise(function(B,K){I.onload=B,I.onerror=K}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Sc(_,r,l)}_={type:"stylesheet",instance:_,count:1,state:T},h.set(d,_)}}}function aw(t,r){or.X(t,r);var a=$a;if(a&&t){var l=yn(a).hoistableScripts,h=Wa(t),d=l.get(h);d||(d=a.querySelector(bl(h)),d||(t=E({src:t,async:!0},r),(r=Qn.get(h))&&Id(t,r),d=a.createElement("script"),wt(d),on(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function ow(t,r){or.M(t,r);var a=$a;if(a&&t){var l=yn(a).hoistableScripts,h=Wa(t),d=l.get(h);d||(d=a.querySelector(bl(h)),d||(t=E({src:t,async:!0,type:"module"},r),(r=Qn.get(h))&&Id(t,r),d=a.createElement("script"),wt(d),on(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function Dv(t,r,a,l){var h=(h=me.current)?Tc(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(r=Za(a.href),a=yn(h).hoistableStyles,l=a.get(r),l||(l={type:"style",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Za(a.href);var d=yn(h).hoistableStyles,_=d.get(t);if(_||(h=h.ownerDocument||h,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,_),(d=h.querySelector(Sl(t)))&&!d._p&&(_.instance=d,_.state.loading=5),Qn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Qn.set(t,a),d||lw(h,t,a,_.state))),r&&l===null)throw Error(s(528,""));return _}if(r&&l!==null)throw Error(s(529,""));return null;case"script":return r=a.async,a=a.src,typeof a=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Wa(a),a=yn(h).hoistableScripts,l=a.get(r),l||(l={type:"script",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Za(t){return'href="'+Pt(t)+'"'}function Sl(t){return'link[rel="stylesheet"]['+t+"]"}function Ov(t){return E({},t,{"data-precedence":t.precedence,precedence:null})}function lw(t,r,a,l){t.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=t.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),on(r,"link",a),wt(r),t.head.appendChild(r))}function Wa(t){return'[src="'+Pt(t)+'"]'}function bl(t){return"script[async]"+t}function Mv(t,r,a){if(r.count++,r.instance===null)switch(r.type){case"style":var l=t.querySelector('style[data-href~="'+Pt(a.href)+'"]');if(l)return r.instance=l,wt(l),l;var h=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),wt(l),on(l,"style",h),Sc(l,a.precedence,t),r.instance=l;case"stylesheet":h=Za(a.href);var d=t.querySelector(Sl(h));if(d)return r.state.loading|=4,r.instance=d,wt(d),d;l=Ov(a),(h=Qn.get(h))&&Nd(l,h),d=(t.ownerDocument||t).createElement("link"),wt(d);var _=d;return _._p=new Promise(function(T,I){_.onload=T,_.onerror=I}),on(d,"link",l),r.state.loading|=4,Sc(d,a.precedence,t),r.instance=d;case"script":return d=Wa(a.src),(h=t.querySelector(bl(d)))?(r.instance=h,wt(h),h):(l=a,(h=Qn.get(d))&&(l=E({},a),Id(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),wt(h),on(h,"link",l),t.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,Sc(l,a.precedence,t));return r.instance}function Sc(t,r,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,_=0;_<l.length;_++){var T=l[_];if(T.dataset.precedence===r)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(r=a.nodeType===9?a.head:a,r.insertBefore(t,r.firstChild))}function Nd(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.title==null&&(t.title=r.title)}function Id(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.integrity==null&&(t.integrity=r.integrity)}var bc=null;function Pv(t,r,a){if(bc===null){var l=new Map,h=bc=new Map;h.set(a,l)}else h=bc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var d=a[h];if(!(d[ys]||d[Bt]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(r)||"";_=t+_;var T=l.get(_);T?T.push(d):l.set(_,[d])}}return l}function kv(t,r,a){t=t.ownerDocument||t,t.head.insertBefore(a,r==="title"?t.querySelector("head > title"):null)}function uw(t,r,a){if(a===1||r.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return t=r.disabled,typeof r.precedence=="string"&&t==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function Vv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var wl=null;function cw(){}function hw(t,r,a){if(wl===null)throw Error(s(475));var l=wl;if(r.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=Za(a.href),d=t.querySelector(Sl(h));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=wc.bind(l),t.then(l,l)),r.state.loading|=4,r.instance=d,wt(d);return}d=t.ownerDocument||t,a=Ov(a),(h=Qn.get(h))&&Nd(a,h),d=d.createElement("link"),wt(d);var _=d;_._p=new Promise(function(T,I){_.onload=T,_.onerror=I}),on(d,"link",a),r.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(r,t),(t=r.state.preload)&&(r.state.loading&3)===0&&(l.count++,r=wc.bind(l),t.addEventListener("load",r),t.addEventListener("error",r))}}function fw(){if(wl===null)throw Error(s(475));var t=wl;return t.stylesheets&&t.count===0&&Dd(t,t.stylesheets),0<t.count?function(r){var a=setTimeout(function(){if(t.stylesheets&&Dd(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(a)}}:null}function wc(){if(this.count--,this.count===0){if(this.stylesheets)Dd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ac=null;function Dd(t,r){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ac=new Map,r.forEach(dw,t),Ac=null,wc.call(t))}function dw(t,r){if(!(r.state.loading&4)){var a=Ac.get(t);if(a)var l=a.get(null);else{a=new Map,Ac.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var _=h[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),l=_)}l&&a.set(null,l)}h=r.instance,_=h.getAttribute("data-precedence"),d=a.get(_)||l,d===l&&a.set(null,h),a.set(_,h),this.count++,l=wc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),r.state.loading|=4}}var Al={$$typeof:ae,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function mw(t,r,a,l,h,d,_,T){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Kt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kt(0),this.hiddenUpdates=Kt(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function xv(t,r,a,l,h,d,_,T,I,B,K,W){return t=new mw(t,r,a,_,T,I,B,W),r=1,d===!0&&(r|=24),d=On(3,null,null,r),t.current=d,d.stateNode=t,r=hf(),r.refCount++,t.pooledCache=r,r.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:r},pf(d),t}function Lv(t){return t?(t=Ia,t):Ia}function Uv(t,r,a,l,h,d){h=Lv(h),l.context===null?l.context=h:l.pendingContext=h,l=Rr(r),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Nr(t,l,r),a!==null&&(xn(a,t,r),tl(a,t,r))}function zv(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function Od(t,r){zv(t,r),(t=t.alternate)&&zv(t,r)}function jv(t){if(t.tag===13){var r=Na(t,67108864);r!==null&&xn(r,t,67108864),Od(t,67108864)}}var Cc=!0;function pw(t,r,a,l){var h=F.T;F.T=null;var d=te.p;try{te.p=2,Md(t,r,a,l)}finally{te.p=d,F.T=h}}function gw(t,r,a,l){var h=F.T;F.T=null;var d=te.p;try{te.p=8,Md(t,r,a,l)}finally{te.p=d,F.T=h}}function Md(t,r,a,l){if(Cc){var h=Pd(l);if(h===null)_d(t,r,l,Rc,a),qv(t,l);else if(vw(h,t,r,a,l))l.stopPropagation();else if(qv(t,l),r&4&&-1<yw.indexOf(t)){for(;h!==null;){var d=ci(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=Nn(d.pendingLanes);if(_!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var I=1<<31-Dt(_);T.entanglements[1]|=I,_&=~I}wi(d),(tt&6)===0&&(cc=bn()+500,vl(0))}}break;case 13:T=Na(d,2),T!==null&&xn(T,d,2),fc(),Od(d,2)}if(d=Pd(l),d===null&&_d(t,r,l,Rc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else _d(t,r,l,null,a)}}function Pd(t){return t=jn(t),kd(t)}var Rc=null;function kd(t){if(Rc=null,t=zi(t),t!==null){var r=u(t);if(r===null)t=null;else{var a=r.tag;if(a===13){if(t=f(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null)}}return Rc=t,null}function Bv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(No()){case sa:return 2;case gr:return 8;case dt:case aa:return 32;case Vi:return 268435456;default:return 32}default:return 32}}var Vd=!1,Br=null,qr=null,Hr=null,Cl=new Map,Rl=new Map,Fr=[],yw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qv(t,r){switch(t){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":Cl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rl.delete(r.pointerId)}}function Nl(t,r,a,l,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:r,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},r!==null&&(r=ci(r),r!==null&&jv(r)),t):(t.eventSystemFlags|=l,r=t.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),t)}function vw(t,r,a,l,h){switch(r){case"focusin":return Br=Nl(Br,t,r,a,l,h),!0;case"dragenter":return qr=Nl(qr,t,r,a,l,h),!0;case"mouseover":return Hr=Nl(Hr,t,r,a,l,h),!0;case"pointerover":var d=h.pointerId;return Cl.set(d,Nl(Cl.get(d)||null,t,r,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,Rl.set(d,Nl(Rl.get(d)||null,t,r,a,l,h)),!0}return!1}function Hv(t){var r=zi(t.target);if(r!==null){var a=u(r);if(a!==null){if(r=a.tag,r===13){if(r=f(a),r!==null){t.blockedOn=r,fu(t.priority,function(){if(a.tag===13){var l=Vn();l=vr(l);var h=Na(a,l);h!==null&&xn(h,a,l),Od(a,l)}});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nc(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=Pd(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Hi=l,a.target.dispatchEvent(l),Hi=null}else return r=ci(a),r!==null&&jv(r),t.blockedOn=a,!1;r.shift()}return!0}function Fv(t,r,a){Nc(t)&&a.delete(r)}function _w(){Vd=!1,Br!==null&&Nc(Br)&&(Br=null),qr!==null&&Nc(qr)&&(qr=null),Hr!==null&&Nc(Hr)&&(Hr=null),Cl.forEach(Fv),Rl.forEach(Fv)}function Ic(t,r){t.blockedOn===r&&(t.blockedOn=null,Vd||(Vd=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,_w)))}var Dc=null;function Yv(t){Dc!==t&&(Dc=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Dc===t&&(Dc=null);for(var r=0;r<t.length;r+=3){var a=t[r],l=t[r+1],h=t[r+2];if(typeof l!="function"){if(kd(l||a)===null)continue;break}var d=ci(a);d!==null&&(t.splice(r,3),r-=3,kf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function Il(t){function r(I){return Ic(I,t)}Br!==null&&Ic(Br,t),qr!==null&&Ic(qr,t),Hr!==null&&Ic(Hr,t),Cl.forEach(r),Rl.forEach(r);for(var a=0;a<Fr.length;a++){var l=Fr[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Fr.length&&(a=Fr[0],a.blockedOn===null);)Hv(a),a.blockedOn===null&&Fr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],_=h[Mt]||null;if(typeof d=="function")_||Yv(a);else if(_){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,_=d[Mt]||null)T=_.formAction;else if(kd(h)!==null)continue}else T=_.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),Yv(a)}}}function xd(t){this._internalRoot=t}Oc.prototype.render=xd.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(s(409));var a=r.current,l=Vn();Uv(a,l,t,r,null,null)},Oc.prototype.unmount=xd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Uv(t.current,2,null,t,null,null),fc(),r[Un]=null}};function Oc(t){this._internalRoot=t}Oc.prototype.unstable_scheduleHydration=function(t){if(t){var r=_r();t={blockedOn:null,target:t,priority:r};for(var a=0;a<Fr.length&&r!==0&&r<Fr[a].priority;a++);Fr.splice(a,0,t),a===0&&Hv(t)}};var Gv=e.version;if(Gv!=="19.1.0")throw Error(s(527,Gv,"19.1.0"));te.findDOMNode=function(t){var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=y(r),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var Ew={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mc.isDisabled&&Mc.supportsFiber)try{mt=Mc.inject(Ew),Xe=Mc}catch{}}return Ol.createRoot=function(t,r){if(!o(t))throw Error(s(299));var a=!1,l="",h=ly,d=uy,_=cy,T=null;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(d=r.onCaughtError),r.onRecoverableError!==void 0&&(_=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(T=r.unstable_transitionCallbacks)),r=xv(t,1,!1,null,null,a,l,h,d,_,T,null),t[Un]=r.current,vd(t),new xd(r)},Ol.hydrateRoot=function(t,r,a){if(!o(t))throw Error(s(299));var l=!1,h="",d=ly,_=uy,T=cy,I=null,B=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&(B=a.formState)),r=xv(t,1,!0,r,a??null,l,h,d,_,T,I,B),r.context=Lv(null),a=r.current,l=Vn(),l=vr(l),h=Rr(l),h.callback=null,Nr(a,h,l),a=l,r.current.lanes=a,Qt(r,a),wi(r),t[Un]=r.current,vd(t),new Oc(r)},Ol.version="19.1.0",Ol}var n_;function Dw(){if(n_)return zd.exports;n_=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),zd.exports=Iw(),zd.exports}var Ow=Dw();const Mw=$E(Ow);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),kw=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,s)=>s?s.toUpperCase():n.toLowerCase()),i_=i=>{const e=kw(i);return e.charAt(0).toUpperCase()+e.slice(1)},ZE=(...i)=>i.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim(),Vw=i=>{for(const e in i)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=oe.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:f,...m},y)=>oe.createElement("svg",{ref:y,...xw,width:e,height:e,stroke:i,strokeWidth:s?Number(n)*24/Number(e):n,className:ZE("lucide",o),...!u&&!Vw(m)&&{"aria-hidden":"true"},...m},[...f.map(([p,E])=>oe.createElement(p,E)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=(i,e)=>{const n=oe.forwardRef(({className:s,...o},u)=>oe.createElement(Lw,{ref:u,iconNode:e,className:ZE(`lucide-${Pw(i_(i))}`,`lucide-${i}`,s),...o}));return n.displayName=i_(i),n};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],$c=ms("building-2",Uw);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Hd=ms("map-pin",zw);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],Bw=ms("navigation",jw);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Hw=ms("rotate-ccw",qw);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]],Yw=ms("route",Fw);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],WE=ms("search",Gw);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],JE=ms("users",Xw);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],io=ms("x",Kw);var $n=function(i,e){return Number(i.toFixed(e))},Qw=function(i,e){return e},vt=function(i,e,n){n&&typeof n=="function"&&n(i,e)},$w=function(i){return-Math.cos(i*Math.PI)/2+.5},Zw=function(i){return i},Ww=function(i){return i*i},Jw=function(i){return i*(2-i)},eA=function(i){return i<.5?2*i*i:-1+(4-2*i)*i},tA=function(i){return i*i*i},nA=function(i){return--i*i*i+1},iA=function(i){return i<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1},rA=function(i){return i*i*i*i},sA=function(i){return 1- --i*i*i*i},aA=function(i){return i<.5?8*i*i*i*i:1-8*--i*i*i*i},oA=function(i){return i*i*i*i*i},lA=function(i){return 1+--i*i*i*i*i},uA=function(i){return i<.5?16*i*i*i*i*i:1+16*--i*i*i*i*i},eT={easeOut:$w,linear:Zw,easeInQuad:Ww,easeOutQuad:Jw,easeInOutQuad:eA,easeInCubic:tA,easeOutCubic:nA,easeInOutCubic:iA,easeInQuart:rA,easeOutQuart:sA,easeInOutQuart:aA,easeInQuint:oA,easeOutQuint:lA,easeInOutQuint:uA},tT=function(i){typeof i=="number"&&cancelAnimationFrame(i)},ri=function(i){i.mounted&&(tT(i.animation),i.animate=!1,i.animation=null,i.velocity=null)};function nT(i,e,n,s){if(i.mounted){var o=new Date().getTime(),u=1;ri(i),i.animation=function(){if(!i.mounted)return tT(i.animation);var f=new Date().getTime()-o,m=f/n,y=eT[e],p=y(m);f>=n?(s(u),i.animation=null):i.animation&&(s(p),requestAnimationFrame(i.animation))},requestAnimationFrame(i.animation)}}function cA(i){var e=i.scale,n=i.positionX,s=i.positionY;return!(Number.isNaN(e)||Number.isNaN(n)||Number.isNaN(s))}function ps(i,e,n,s){var o=cA(e);if(!(!i.mounted||!o)){var u=i.setTransformState,f=i.transformState,m=f.scale,y=f.positionX,p=f.positionY,E=e.scale-m,b=e.positionX-y,w=e.positionY-p;n===0?u(e.scale,e.positionX,e.positionY):nT(i,s,n,function(x){var z=m+E*x,G=y+b*x,X=p+w*x;u(z,G,X)})}}function hA(i,e,n){var s=i.offsetWidth,o=i.offsetHeight,u=e.offsetWidth,f=e.offsetHeight,m=u*n,y=f*n,p=s-m,E=o-y;return{wrapperWidth:s,wrapperHeight:o,newContentWidth:m,newDiffWidth:p,newContentHeight:y,newDiffHeight:E}}var fA=function(i,e,n,s,o,u,f){var m=i>e?n*(f?1:.5):0,y=s>o?u*(f?1:.5):0,p=i-e-m,E=m,b=s-o-y,w=y;return{minPositionX:p,maxPositionX:E,minPositionY:b,maxPositionY:w}},Fm=function(i,e){var n=i.wrapperComponent,s=i.contentComponent,o=i.setup.centerZoomedOut;if(!n||!s)throw new Error("Components are not mounted");var u=hA(n,s,e),f=u.wrapperWidth,m=u.wrapperHeight,y=u.newContentWidth,p=u.newDiffWidth,E=u.newContentHeight,b=u.newDiffHeight,w=fA(f,y,p,m,E,b,!!o);return w},hm=function(i,e,n,s){return s?i<e?$n(e,2):i>n?$n(n,2):$n(i,2):$n(i,2)},Qs=function(i,e){var n=Fm(i,e);return i.bounds=n,n};function tu(i,e,n,s,o,u,f){var m=n.minPositionX,y=n.minPositionY,p=n.maxPositionX,E=n.maxPositionY,b=0,w=0;f&&(b=o,w=u);var x=hm(i,m-b,p+b,s),z=hm(e,y-w,E+w,s);return{x,y:z}}function mh(i,e,n,s,o,u){var f=i.transformState,m=f.scale,y=f.positionX,p=f.positionY,E=s-m;if(typeof e!="number"||typeof n!="number")return console.error("Mouse X and Y position were not provided!"),{x:y,y:p};var b=y-e*E,w=p-n*E,x=tu(b,w,o,u,0,0,null);return x}function nu(i,e,n,s,o){var u=o?s:0,f=e-u;return!Number.isNaN(n)&&i>=n?n:!Number.isNaN(e)&&i<=f?f:i}var r_=function(i,e){var n=i.setup.panning.excluded,s=i.isInitialized,o=i.wrapperComponent,u=e.target,f="shadowRoot"in u&&"composedPath"in e,m=f?e.composedPath().some(function(E){return E instanceof Element?o==null?void 0:o.contains(E):!1}):o==null?void 0:o.contains(u),y=s&&u&&m;if(!y)return!1;var p=ph(u,n);return!p},s_=function(i){var e=i.isInitialized,n=i.isPanning,s=i.setup,o=s.panning.disabled,u=e&&n&&!o;return!!u},dA=function(i,e){var n=i.transformState,s=n.positionX,o=n.positionY;i.isPanning=!0;var u=e.clientX,f=e.clientY;i.startCoords={x:u-s,y:f-o}},mA=function(i,e){var n=e.touches,s=i.transformState,o=s.positionX,u=s.positionY;i.isPanning=!0;var f=n.length===1;if(f){var m=n[0].clientX,y=n[0].clientY;i.startCoords={x:m-o,y:y-u}}};function pA(i){var e=i.transformState,n=e.positionX,s=e.positionY,o=e.scale,u=i.setup,f=u.disabled,m=u.limitToBounds,y=u.centerZoomedOut,p=i.wrapperComponent;if(!(f||!p||!i.bounds)){var E=i.bounds,b=E.maxPositionX,w=E.minPositionX,x=E.maxPositionY,z=E.minPositionY,G=n>b||n<w,X=s>x||s<z,ue=n>b?p.offsetWidth:i.setup.minPositionX||0,re=s>x?p.offsetHeight:i.setup.minPositionY||0,ae=mh(i,ue,re,o,i.bounds,m||y),Te=ae.x,ce=ae.y;return{scale:o,positionX:G?Te:n,positionY:X?ce:s}}}function iT(i,e,n,s,o){var u=i.setup.limitToBounds,f=i.wrapperComponent,m=i.bounds,y=i.transformState,p=y.scale,E=y.positionX,b=y.positionY;if(!(f===null||m===null||e===E&&n===b)){var w=tu(e,n,m,u,s,o,f),x=w.x,z=w.y;i.setTransformState(p,x,z)}}var gA=function(i,e,n){var s=i.startCoords,o=i.transformState,u=i.setup.panning,f=u.lockAxisX,m=u.lockAxisY,y=o.positionX,p=o.positionY;if(!s)return{x:y,y:p};var E=e-s.x,b=n-s.y,w=f?y:E,x=m?p:b;return{x:w,y:x}},os=function(i,e){var n=i.setup,s=i.transformState,o=s.scale,u=n.minScale,f=n.disablePadding;return e>0&&o>=u&&!f?e:0},yA=function(i){var e=i.mounted,n=i.setup,s=n.disabled,o=n.velocityAnimation,u=i.transformState.scale,f=o.disabled,m=!f||u>1||!s||e;return!!m},vA=function(i){var e=i.mounted,n=i.velocity,s=i.bounds,o=i.setup,u=o.disabled,f=o.velocityAnimation,m=i.transformState.scale,y=f.disabled,p=!y||m>1||!u||e;return!(!p||!n||!s)};function _A(i,e){var n=i.setup.velocityAnimation,s=n.equalToMove,o=n.animationTime,u=n.sensitivity;return s?o*e*u:o}function a_(i,e,n,s,o,u,f,m,y,p){if(o){if(e>f&&n>f){var E=f+(i-f)*p;return E>y?y:E<f?f:E}if(e<u&&n<u){var E=u+(i-u)*p;return E<m?m:E>u?u:E}}return s?e:hm(i,u,f,o)}function EA(i,e){var n=1;return e?Math.min(n,i.offsetWidth/window.innerWidth):n}function TA(i,e){var n=yA(i);if(n){var s=i.lastMousePosition,o=i.velocityTime,u=i.setup,f=i.wrapperComponent,m=u.velocityAnimation.equalToMove,y=Date.now();if(s&&o&&f){var p=EA(f,m),E=e.x-s.x,b=e.y-s.y,w=E/p,x=b/p,z=y-o,G=E*E+b*b,X=Math.sqrt(G)/z;i.velocity={velocityX:w,velocityY:x,total:X}}i.lastMousePosition=e,i.velocityTime=y}}function SA(i){var e=i.velocity,n=i.bounds,s=i.setup,o=i.wrapperComponent,u=vA(i);if(!(!u||!e||!n||!o)){var f=e.velocityX,m=e.velocityY,y=e.total,p=n.maxPositionX,E=n.minPositionX,b=n.maxPositionY,w=n.minPositionY,x=s.limitToBounds,z=s.alignmentAnimation,G=s.zoomAnimation,X=s.panning,ue=X.lockAxisY,re=X.lockAxisX,ae=G.animationType,Te=z.sizeX,ce=z.sizeY,we=z.velocityAlignmentTime,O=we,A=_A(i,y),N=Math.max(A,O),M=os(i,Te),V=os(i,ce),k=M*o.offsetWidth/100,R=V*o.offsetHeight/100,Ze=p+k,Le=E-k,F=b+R,te=w-R,fe=i.transformState,ke=new Date().getTime();nT(i,ae,N,function(D){var Z=i.transformState,ne=Z.scale,ee=Z.positionX,ge=Z.positionY,Ce=new Date().getTime()-ke,me=Ce/O,Je=eT[z.animationType],Me=1-Je(Math.min(1,me)),le=1-D,Be=ee+f*le,et=ge+m*le,ot=a_(Be,fe.positionX,ee,re,x,E,p,Le,Ze,Me),Tt=a_(et,fe.positionY,ge,ue,x,w,b,te,F,Me);(ee!==Be||ge!==et)&&i.setTransformState(ne,ot,Tt)})}}function o_(i,e){var n=i.transformState.scale;ri(i),Qs(i,n),window.TouchEvent!==void 0&&e instanceof TouchEvent?mA(i,e):dA(i,e)}function Ym(i,e){var n=i.transformState.scale,s=i.setup,o=s.minScale,u=s.alignmentAnimation,f=u.disabled,m=u.sizeX,y=u.sizeY,p=u.animationTime,E=u.animationType,b=f||n<o||!m&&!y;if(!b){var w=pA(i);w&&ps(i,w,e??p,E)}}function l_(i,e,n){var s=i.startCoords,o=i.setup,u=o.alignmentAnimation,f=u.sizeX,m=u.sizeY;if(s){var y=gA(i,e,n),p=y.x,E=y.y,b=os(i,f),w=os(i,m);TA(i,{x:p,y:E}),iT(i,p,E,b,w)}}function bA(i){if(i.isPanning){var e=i.setup.panning.velocityDisabled,n=i.velocity,s=i.wrapperComponent,o=i.contentComponent;i.isPanning=!1,i.animate=!1,i.animation=null;var u=s==null?void 0:s.getBoundingClientRect(),f=o==null?void 0:o.getBoundingClientRect(),m=(u==null?void 0:u.width)||0,y=(u==null?void 0:u.height)||0,p=(f==null?void 0:f.width)||0,E=(f==null?void 0:f.height)||0,b=m<p||y<E,w=!e&&n&&(n==null?void 0:n.total)>.1&&b;w?SA(i):Ym(i)}}function Gm(i,e,n,s){var o=i.setup,u=o.minScale,f=o.maxScale,m=o.limitToBounds,y=nu($n(e,2),u,f,0,!1),p=Qs(i,y),E=mh(i,n,s,y,p,m),b=E.x,w=E.y;return{scale:y,positionX:b,positionY:w}}function rT(i,e,n){var s=i.transformState.scale,o=i.wrapperComponent,u=i.setup,f=u.minScale,m=u.limitToBounds,y=u.zoomAnimation,p=y.disabled,E=y.animationTime,b=y.animationType,w=p||s>=f;if((s>=1||m)&&Ym(i),!(w||!o||!i.mounted)){var x=e||o.offsetWidth/2,z=n||o.offsetHeight/2,G=Gm(i,f,x,z);G&&ps(i,G,E,b)}}var Jr=function(){return Jr=Object.assign||function(e){for(var n,s=1,o=arguments.length;s<o;s++){n=arguments[s];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},Jr.apply(this,arguments)};function u_(i,e,n){for(var s=0,o=e.length,u;s<o;s++)(u||!(s in e))&&(u||(u=Array.prototype.slice.call(e,0,s)),u[s]=e[s]);return i.concat(u||Array.prototype.slice.call(e))}var Pc={scale:1,positionX:0,positionY:0},Ml={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},fm={wrapperClass:"react-transform-wrapper",contentClass:"react-transform-component"},sT=function(i){var e,n,s,o;return{previousScale:(e=i.initialScale)!==null&&e!==void 0?e:Pc.scale,scale:(n=i.initialScale)!==null&&n!==void 0?n:Pc.scale,positionX:(s=i.initialPositionX)!==null&&s!==void 0?s:Pc.positionX,positionY:(o=i.initialPositionY)!==null&&o!==void 0?o:Pc.positionY}},c_=function(i){var e=Jr({},Ml);return Object.keys(i).forEach(function(n){var s=typeof i[n]<"u",o=typeof Ml[n]<"u";if(o&&s){var u=Object.prototype.toString.call(Ml[n]),f=u==="[object Object]",m=u==="[object Array]";f?e[n]=Jr(Jr({},Ml[n]),i[n]):m?e[n]=u_(u_([],Ml[n],!0),i[n]):e[n]=i[n]}}),e},aT=function(i,e,n){var s=i.transformState.scale,o=i.wrapperComponent,u=i.setup,f=u.maxScale,m=u.minScale,y=u.zoomAnimation,p=u.smooth,E=y.size;if(!o)throw new Error("Wrapper is not mounted");var b=p?s*Math.exp(e*n):s+e*n,w=nu($n(b,3),m,f,E,!1);return w};function oT(i,e,n,s,o){var u=i.wrapperComponent,f=i.transformState,m=f.scale,y=f.positionX,p=f.positionY;if(!u)return console.error("No WrapperComponent found");var E=u.offsetWidth,b=u.offsetHeight,w=(E/2-y)/m,x=(b/2-p)/m,z=aT(i,e,n),G=Gm(i,z,w,x);if(!G)return console.error("Error during zoom event. New transformation state was not calculated.");ps(i,G,s,o)}function lT(i,e,n,s){var o=i.setup,u=i.wrapperComponent,f=o.limitToBounds,m=sT(i.props),y=i.transformState,p=y.scale,E=y.positionX,b=y.positionY;if(u){var w=Fm(i,m.scale),x=tu(m.positionX,m.positionY,w,f,0,0,u),z={scale:m.scale,positionX:x.x,positionY:x.y};p===m.scale&&E===m.positionX&&b===m.positionY||(s==null||s(),ps(i,z,e,n))}}function wA(i,e,n,s){var o=i.getBoundingClientRect(),u=e.getBoundingClientRect(),f=n.getBoundingClientRect(),m=u.x*s.scale,y=u.y*s.scale;return{x:(o.x-f.x+m)/s.scale,y:(o.y-f.y+y)/s.scale}}function AA(i,e,n){var s=i.wrapperComponent,o=i.contentComponent,u=i.transformState,f=i.setup,m=f.limitToBounds,y=f.minScale,p=f.maxScale;if(!s||!o)return u;var E=s.getBoundingClientRect(),b=e.getBoundingClientRect(),w=wA(e,s,o,u),x=w.x,z=w.y,G=b.width/u.scale,X=b.height/u.scale,ue=s.offsetWidth/G,re=s.offsetHeight/X,ae=nu(n||Math.min(ue,re),y,p,0,!1),Te=(E.width-G*ae)/2,ce=(E.height-X*ae)/2,we=(E.left-x)*ae+Te,O=(E.top-z)*ae+ce,A=Fm(i,ae),N=tu(we,O,A,m,0,0,s),M=N.x,V=N.y;return{positionX:M,positionY:V,scale:ae}}var CA=function(i){return function(e,n,s){e===void 0&&(e=.5),n===void 0&&(n=300),s===void 0&&(s="easeOut"),oT(i,1,e,n,s)}},RA=function(i){return function(e,n,s){e===void 0&&(e=.5),n===void 0&&(n=300),s===void 0&&(s="easeOut"),oT(i,-1,e,n,s)}},NA=function(i){return function(e,n,s,o,u){o===void 0&&(o=300),u===void 0&&(u="easeOut");var f=i.transformState,m=f.positionX,y=f.positionY,p=f.scale,E=i.wrapperComponent,b=i.contentComponent,w=i.setup.disabled;if(!(w||!E||!b)){var x={positionX:Number.isNaN(e)?m:e,positionY:Number.isNaN(n)?y:n,scale:Number.isNaN(s)?p:s};ps(i,x,o,u)}}},IA=function(i){return function(e,n){e===void 0&&(e=200),n===void 0&&(n="easeOut"),lT(i,e,n)}},DA=function(i){return function(e,n,s){n===void 0&&(n=200),s===void 0&&(s="easeOut");var o=i.transformState,u=i.wrapperComponent,f=i.contentComponent;if(u&&f){var m=uT(e||o.scale,u,f);ps(i,m,n,s)}}},OA=function(i){return function(e,n,s,o){s===void 0&&(s=600),o===void 0&&(o="easeOut"),ri(i);var u=i.wrapperComponent,f=typeof e=="string"?document.getElementById(e):e;if(u&&f&&u.contains(f)){var m=AA(i,f,n);ps(i,m,s,o)}}},dm=function(i){return{instance:i,zoomIn:CA(i),zoomOut:RA(i),setTransform:NA(i),resetTransform:IA(i),centerView:DA(i),zoomToElement:OA(i)}},MA=function(i){return{instance:i,state:i.transformState}},ct=function(i){var e={};return Object.assign(e,MA(i)),Object.assign(e,dm(i)),e},Fd=!1;function Yd(){try{var i={get passive(){return Fd=!0,!1}};return i}catch{return Fd=!1,Fd}}var kc=".".concat(fm.wrapperClass),ph=function(i,e){return e.some(function(n){return i.matches("".concat(kc," ").concat(n,", ").concat(kc," .").concat(n,", ").concat(kc," ").concat(n," *, ").concat(kc," .").concat(n," *"))})},mm=function(i){i&&clearTimeout(i)},PA=function(i,e,n){return"translate(".concat(i,"px, ").concat(e,"px) scale(").concat(n,")")},uT=function(i,e,n){var s=n.offsetWidth*i,o=n.offsetHeight*i,u=(e.offsetWidth-s)/2,f=(e.offsetHeight-o)/2;return{scale:i,positionX:u,positionY:f}};function kA(i){return function(e){i.forEach(function(n){typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var VA=function(i,e){var n=i.setup.wheel,s=n.disabled,o=n.wheelDisabled,u=n.touchPadDisabled,f=n.excluded,m=i.isInitialized,y=i.isPanning,p=e.target,E=m&&!y&&!s&&p;if(!E||o&&!e.ctrlKey||u&&e.ctrlKey)return!1;var b=ph(p,f);return!b},xA=function(i){return i?i.deltaY<0?1:-1:0};function LA(i,e){var n=xA(i),s=Qw(e,n);return s}function cT(i,e,n){var s=e.getBoundingClientRect(),o=0,u=0;if("clientX"in i)o=(i.clientX-s.left)/n,u=(i.clientY-s.top)/n;else{var f=i.touches[0];o=(f.clientX-s.left)/n,u=(f.clientY-s.top)/n}return(Number.isNaN(o)||Number.isNaN(u))&&console.error("No mouse or touch offset found"),{x:o,y:u}}var UA=function(i,e,n,s,o){var u=i.transformState.scale,f=i.wrapperComponent,m=i.setup,y=m.maxScale,p=m.minScale,E=m.zoomAnimation,b=m.disablePadding,w=E.size,x=E.disabled;if(!f)throw new Error("Wrapper is not mounted");var z=u+e*n,G=s?!1:!x,X=nu($n(z,3),p,y,w,G&&!b);return X},zA=function(i,e){var n=i.previousWheelEvent,s=i.transformState.scale,o=i.setup,u=o.maxScale,f=o.minScale;return n?s<u||s>f||Math.sign(n.deltaY)!==Math.sign(e.deltaY)||n.deltaY>0&&n.deltaY<e.deltaY||n.deltaY<0&&n.deltaY>e.deltaY||Math.sign(n.deltaY)!==Math.sign(e.deltaY):!1},jA=function(i,e){var n=i.setup.pinch,s=n.disabled,o=n.excluded,u=i.isInitialized,f=e.target,m=u&&!s&&f;if(!m)return!1;var y=ph(f,o);return!y},BA=function(i){var e=i.setup.pinch.disabled,n=i.isInitialized,s=i.pinchStartDistance,o=n&&!e&&s;return!!o},qA=function(i,e,n){var s=n.getBoundingClientRect(),o=i.touches,u=$n(o[0].clientX-s.left,5),f=$n(o[0].clientY-s.top,5),m=$n(o[1].clientX-s.left,5),y=$n(o[1].clientY-s.top,5);return{x:(u+m)/2/e,y:(f+y)/2/e}},hT=function(i){return Math.sqrt(Math.pow(i.touches[0].pageX-i.touches[1].pageX,2)+Math.pow(i.touches[0].pageY-i.touches[1].pageY,2))},HA=function(i,e){var n=i.pinchStartScale,s=i.pinchStartDistance,o=i.setup,u=o.maxScale,f=o.minScale,m=o.zoomAnimation,y=o.disablePadding,p=m.size,E=m.disabled;if(!n||s===null||!e)throw new Error("Pinch touches distance was not provided");if(e<0)return i.transformState.scale;var b=e/s,w=b*n;return nu($n(w,2),f,u,p,!E&&!y)},FA=160,YA=100,GA=function(i,e){var n=i.props,s=n.onWheelStart,o=n.onZoomStart;i.wheelStopEventTimer||(ri(i),vt(ct(i),e,s),vt(ct(i),e,o))},XA=function(i,e){var n=i.props,s=n.onWheel,o=n.onZoom,u=i.contentComponent,f=i.setup,m=i.transformState,y=m.scale,p=f.limitToBounds,E=f.centerZoomedOut,b=f.zoomAnimation,w=f.wheel,x=f.disablePadding,z=f.smooth,G=b.size,X=b.disabled,ue=w.step,re=w.smoothStep;if(!u)throw new Error("Component not mounted");e.preventDefault(),e.stopPropagation();var ae=LA(e,null),Te=z?re*Math.abs(e.deltaY):ue,ce=UA(i,ae,Te,!e.ctrlKey);if(y!==ce){var we=Qs(i,ce),O=cT(e,u,y),A=X||G===0||E||x,N=p&&A,M=mh(i,O.x,O.y,ce,we,N),V=M.x,k=M.y;i.previousWheelEvent=e,i.setTransformState(ce,V,k),vt(ct(i),e,s),vt(ct(i),e,o)}},KA=function(i,e){var n=i.props,s=n.onWheelStop,o=n.onZoomStop;mm(i.wheelAnimationTimer),i.wheelAnimationTimer=setTimeout(function(){i.mounted&&(rT(i,e.x,e.y),i.wheelAnimationTimer=null)},YA);var u=zA(i,e);u&&(mm(i.wheelStopEventTimer),i.wheelStopEventTimer=setTimeout(function(){i.mounted&&(i.wheelStopEventTimer=null,vt(ct(i),e,s),vt(ct(i),e,o))},FA))},fT=function(i){for(var e=0,n=0,s=0;s<2;s+=1)e+=i.touches[s].clientX,n+=i.touches[s].clientY;var o=e/2,u=n/2;return{x:o,y:u}},QA=function(i,e){var n=hT(e);i.pinchStartDistance=n,i.lastDistance=n,i.pinchStartScale=i.transformState.scale,i.isPanning=!1;var s=fT(e);i.pinchLastCenterX=s.x,i.pinchLastCenterY=s.y,ri(i)},$A=function(i,e){var n=i.contentComponent,s=i.pinchStartDistance,o=i.wrapperComponent,u=i.transformState.scale,f=i.setup,m=f.limitToBounds,y=f.centerZoomedOut,p=f.zoomAnimation,E=f.alignmentAnimation,b=p.disabled,w=p.size;if(!(s===null||!n)){var x=qA(e,u,n);if(!(!Number.isFinite(x.x)||!Number.isFinite(x.y))){var z=hT(e),G=HA(i,z),X=fT(e),ue=X.x-(i.pinchLastCenterX||0),re=X.y-(i.pinchLastCenterY||0);if(!(G===u&&ue===0&&re===0)){i.pinchLastCenterX=X.x,i.pinchLastCenterY=X.y;var ae=Qs(i,G),Te=b||w===0||y,ce=m&&Te,we=mh(i,x.x,x.y,G,ae,ce),O=we.x,A=we.y;i.pinchMidpoint=x,i.lastDistance=z;var N=E.sizeX,M=E.sizeY,V=os(i,N),k=os(i,M),R=O+ue,Ze=A+re,Le=tu(R,Ze,ae,m,V,k,o),F=Le.x,te=Le.y;i.setTransformState(G,F,te)}}}},ZA=function(i){var e=i.pinchMidpoint;i.velocity=null,i.lastDistance=null,i.pinchMidpoint=null,i.pinchStartScale=null,i.pinchStartDistance=null,rT(i,e==null?void 0:e.x,e==null?void 0:e.y)},dT=function(i,e){var n=i.props.onZoomStop,s=i.setup.doubleClick.animationTime;mm(i.doubleClickStopEventTimer),i.doubleClickStopEventTimer=setTimeout(function(){i.doubleClickStopEventTimer=null,vt(ct(i),e,n)},s)},WA=function(i,e){var n=i.props,s=n.onZoomStart,o=n.onZoom,u=i.setup.doubleClick,f=u.animationTime,m=u.animationType;vt(ct(i),e,s),lT(i,f,m,function(){return vt(ct(i),e,o)}),dT(i,e)};function JA(i,e){return i==="toggle"?e===1?1:-1:i==="zoomOut"?-1:1}function e1(i,e){var n=i.setup,s=i.doubleClickStopEventTimer,o=i.transformState,u=i.contentComponent,f=o.scale,m=i.props,y=m.onZoomStart,p=m.onZoom,E=n.doubleClick,b=E.disabled,w=E.mode,x=E.step,z=E.animationTime,G=E.animationType;if(!b&&!s){if(w==="reset")return WA(i,e);if(!u)return console.error("No ContentComponent found");var X=JA(w,i.transformState.scale),ue=aT(i,X,x);if(f!==ue){vt(ct(i),e,y);var re=cT(e,u,f),ae=Gm(i,ue,re.x,re.y);if(!ae)return console.error("Error during zoom event. New transformation state was not calculated.");vt(ct(i),e,p),ps(i,ae,z,G),dT(i,e)}}}var t1=function(i,e){var n=i.isInitialized,s=i.setup,o=i.wrapperComponent,u=s.doubleClick,f=u.disabled,m=u.excluded,y=e.target,p=o==null?void 0:o.contains(y),E=n&&y&&p&&!f;if(!E)return!1;var b=ph(y,m);return!b},n1=function(){function i(e){var n=this;this.mounted=!0,this.pinchLastCenterX=null,this.pinchLastCenterY=null,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){n.initializeWindowEvents()},this.unmount=function(){n.cleanupWindowEvents()},this.update=function(s){n.props=s,Qs(n,n.transformState.scale),n.setup=c_(s)},this.initializeWindowEvents=function(){var s,o,u=Yd(),f=(s=n.wrapperComponent)===null||s===void 0?void 0:s.ownerDocument,m=f==null?void 0:f.defaultView;(o=n.wrapperComponent)===null||o===void 0||o.addEventListener("wheel",n.onWheelPanning,u),m==null||m.addEventListener("mousedown",n.onPanningStart,u),m==null||m.addEventListener("mousemove",n.onPanning,u),m==null||m.addEventListener("mouseup",n.onPanningStop,u),f==null||f.addEventListener("mouseleave",n.clearPanning,u),m==null||m.addEventListener("keyup",n.setKeyUnPressed,u),m==null||m.addEventListener("keydown",n.setKeyPressed,u)},this.cleanupWindowEvents=function(){var s,o,u=Yd(),f=(s=n.wrapperComponent)===null||s===void 0?void 0:s.ownerDocument,m=f==null?void 0:f.defaultView;m==null||m.removeEventListener("mousedown",n.onPanningStart,u),m==null||m.removeEventListener("mousemove",n.onPanning,u),m==null||m.removeEventListener("mouseup",n.onPanningStop,u),f==null||f.removeEventListener("mouseleave",n.clearPanning,u),m==null||m.removeEventListener("keyup",n.setKeyUnPressed,u),m==null||m.removeEventListener("keydown",n.setKeyPressed,u),document.removeEventListener("mouseleave",n.clearPanning,u),ri(n),(o=n.observer)===null||o===void 0||o.disconnect()},this.handleInitializeWrapperEvents=function(s){var o=Yd();s.addEventListener("wheel",n.onWheelZoom,o),s.addEventListener("dblclick",n.onDoubleClick,o),s.addEventListener("touchstart",n.onTouchPanningStart,o),s.addEventListener("touchmove",n.onTouchPanning,o),s.addEventListener("touchend",n.onTouchPanningStop,o)},this.handleInitialize=function(s,o){var u=!1,f=n.setup.centerOnInit,m=function(y,p){for(var E=0,b=y;E<b.length;E++){var w=b[E];if(w.target===p)return!0}return!1};n.applyTransformation(),n.onInitCallbacks.forEach(function(y){y(ct(n))}),n.observer=new ResizeObserver(function(y){if(m(y,s)||m(y,o))if(f&&!u){var p=o.offsetWidth,E=o.offsetHeight;(p>0||E>0)&&(u=!0,n.setCenter())}else ri(n),Qs(n,n.transformState.scale),Ym(n,0)}),n.observer.observe(s),n.observer.observe(o)},this.onWheelZoom=function(s){var o=n.setup.disabled;if(!o){var u=VA(n,s);if(u){var f=n.isPressingKeys(n.setup.wheel.activationKeys);f&&(GA(n,s),XA(n,s),KA(n,s))}}},this.onWheelPanning=function(s){var o=n.setup,u=o.disabled,f=o.wheel,m=o.panning;if(!(!n.wrapperComponent||!n.contentComponent||u||!f.wheelDisabled||m.disabled||!m.wheelPanning||s.ctrlKey)){s.preventDefault(),s.stopPropagation();var y=n.transformState,p=y.positionX,E=y.positionY,b=p-s.deltaX,w=E-s.deltaY,x=m.lockAxisX?p:b,z=m.lockAxisY?E:w,G=n.setup.alignmentAnimation,X=G.sizeX,ue=G.sizeY,re=os(n,X),ae=os(n,ue);x===p&&z===E||iT(n,x,z,re,ae)}},this.onPanningStart=function(s){var o=n.setup.disabled,u=n.props.onPanningStart;if(!o){var f=r_(n,s);if(f){var m=n.isPressingKeys(n.setup.panning.activationKeys);m&&(s.button===0&&!n.setup.panning.allowLeftClickPan||s.button===1&&!n.setup.panning.allowMiddleClickPan||s.button===2&&!n.setup.panning.allowRightClickPan||(s.preventDefault(),s.stopPropagation(),ri(n),o_(n,s),vt(ct(n),s,u)))}}},this.onPanning=function(s){var o=n.setup.disabled,u=n.props.onPanning;if(!o){var f=s_(n);if(f){var m=n.isPressingKeys(n.setup.panning.activationKeys);m&&(s.preventDefault(),s.stopPropagation(),l_(n,s.clientX,s.clientY),vt(ct(n),s,u))}}},this.onPanningStop=function(s){var o=n.props.onPanningStop;n.isPanning&&(bA(n),vt(ct(n),s,o))},this.onPinchStart=function(s){var o=n.setup.disabled,u=n.props,f=u.onPinchingStart,m=u.onZoomStart;if(!o){var y=jA(n,s);y&&(QA(n,s),ri(n),vt(ct(n),s,f),vt(ct(n),s,m))}},this.onPinch=function(s){var o=n.setup.disabled,u=n.props,f=u.onPinching,m=u.onZoom;if(!o){var y=BA(n);y&&(s.preventDefault(),s.stopPropagation(),$A(n,s),vt(ct(n),s,f),vt(ct(n),s,m))}},this.onPinchStop=function(s){var o=n.props,u=o.onPinchingStop,f=o.onZoomStop;n.pinchStartScale&&(ZA(n),vt(ct(n),s,u),vt(ct(n),s,f))},this.onTouchPanningStart=function(s){var o=n.setup.disabled,u=n.props.onPanningStart;if(!o){var f=r_(n,s);if(f){var m=n.lastTouch&&+new Date-n.lastTouch<200&&s.touches.length===1;if(!m){n.lastTouch=+new Date,ri(n);var y=s.touches,p=y.length===1,E=y.length===2;p&&(ri(n),o_(n,s),vt(ct(n),s,u)),E&&n.onPinchStart(s)}}}},this.onTouchPanning=function(s){var o=n.setup.disabled,u=n.props.onPanning;if(n.isPanning&&s.touches.length===1){if(o)return;var f=s_(n);if(!f)return;s.preventDefault(),s.stopPropagation();var m=s.touches[0];l_(n,m.clientX,m.clientY),vt(ct(n),s,u)}else s.touches.length>1&&n.onPinch(s)},this.onTouchPanningStop=function(s){n.onPanningStop(s),n.onPinchStop(s)},this.onDoubleClick=function(s){var o=n.setup.disabled;if(!o){var u=t1(n,s);u&&e1(n,s)}},this.clearPanning=function(s){n.isPanning&&n.onPanningStop(s)},this.setKeyPressed=function(s){n.pressedKeys[s.key]=!0},this.setKeyUnPressed=function(s){n.pressedKeys[s.key]=!1},this.isPressingKeys=function(s){return s.length?!!s.find(function(o){return n.pressedKeys[o]}):!0},this.setTransformState=function(s,o,u){var f=n.props.onTransformed;if(!Number.isNaN(s)&&!Number.isNaN(o)&&!Number.isNaN(u)){s!==n.transformState.scale&&(n.transformState.previousScale=n.transformState.scale,n.transformState.scale=s),n.transformState.positionX=o,n.transformState.positionY=u,n.applyTransformation();var m=ct(n);n.onChangeCallbacks.forEach(function(y){return y(m)}),vt(m,{scale:s,positionX:o,positionY:u},f)}else console.error("Detected NaN set state values")},this.setCenter=function(){if(n.wrapperComponent&&n.contentComponent){var s=uT(n.transformState.scale,n.wrapperComponent,n.contentComponent);n.setTransformState(s.scale,s.positionX,s.positionY)}},this.handleTransformStyles=function(s,o,u){return n.props.customTransform?n.props.customTransform(s,o,u):PA(s,o,u)},this.applyTransformation=function(){if(!(!n.mounted||!n.contentComponent)){var s=n.transformState,o=s.scale,u=s.positionX,f=s.positionY,m=n.handleTransformStyles(u,f,o);n.contentComponent.style.transform=m}},this.getContext=function(){return ct(n)},this.onChange=function(s){return n.onChangeCallbacks.has(s)||n.onChangeCallbacks.add(s),function(){n.onChangeCallbacks.delete(s)}},this.onInit=function(s){return n.onInitCallbacks.has(s)||n.onInitCallbacks.add(s),function(){n.onInitCallbacks.delete(s)}},this.init=function(s,o){n.cleanupWindowEvents(),n.wrapperComponent=s,n.contentComponent=o,Qs(n,n.transformState.scale),n.handleInitializeWrapperEvents(s),n.handleInitialize(s,o),n.initializeWindowEvents(),n.isInitialized=!0;var u=ct(n);vt(u,void 0,n.props.onInit)},this.props=e,this.setup=c_(this.props),this.transformState=sT(this.props)}return i}(),Xm=Lt.createContext(null),i1=function(i,e){return typeof i=="function"?i(e):i},r1=Lt.forwardRef(function(i,e){var n=oe.useRef(new n1(i)).current,s=i1(i.children,dm(n));return oe.useImperativeHandle(e,function(){return dm(n)},[n]),oe.useEffect(function(){n.update(i)},[n,i]),Lt.createElement(Xm.Provider,{value:n},s)});Lt.forwardRef(function(i,e){var n=oe.useRef(null),s=oe.useContext(Xm);return oe.useEffect(function(){return s.onChange(function(o){if(n.current){var u=0,f=0;n.current.style.transform=s.handleTransformStyles(u,f,1/o.instance.transformState.scale)}})},[s]),Lt.createElement("div",Jr({},i,{ref:kA([n,e])}))});function s1(i,e){e===void 0&&(e={});var n=e.insertAt;if(!(typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&s.firstChild?s.insertBefore(o,s.firstChild):s.appendChild(o),o.styleSheet?o.styleSheet.cssText=i:o.appendChild(document.createTextNode(i))}}var a1=`.transform-component-module_wrapper__SPB86 {
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
`,h_={wrapper:"transform-component-module_wrapper__SPB86",content:"transform-component-module_content__FBWxo"};s1(a1);var o1=function(i){var e=i.children,n=i.wrapperClass,s=n===void 0?"":n,o=i.contentClass,u=o===void 0?"":o,f=i.wrapperStyle,m=i.contentStyle,y=i.wrapperProps,p=y===void 0?{}:y,E=i.contentProps,b=E===void 0?{}:E,w=oe.useContext(Xm),x=w.init,z=w.cleanupWindowEvents,G=oe.useRef(null),X=oe.useRef(null);return oe.useEffect(function(){var ue=G.current,re=X.current;return ue!==null&&re!==null&&x&&(x==null||x(ue,re)),function(){z==null||z()}},[]),Lt.createElement("div",Jr({},p,{ref:G,className:"".concat(fm.wrapperClass," ").concat(h_.wrapper," ").concat(s),style:f}),Lt.createElement("div",Jr({},b,{ref:X,className:"".concat(fm.contentClass," ").concat(h_.content," ").concat(u),style:m}),e))};const l1=()=>{};var f_={};/**
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
 */const mT=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},u1=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const o=i[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[n++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[n++],f=i[n++],m=i[n++],y=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[n++],f=i[n++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},pT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],f=o+1<i.length,m=f?i[o+1]:0,y=o+2<i.length,p=y?i[o+2]:0,E=u>>2,b=(u&3)<<4|m>>4;let w=(m&15)<<2|p>>6,x=p&63;y||(x=64,f||(w=64)),s.push(n[E],n[b],n[w],n[x])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(mT(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):u1(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=n[i.charAt(o++)],m=o<i.length?n[i.charAt(o)]:0;++o;const p=o<i.length?n[i.charAt(o)]:64;++o;const b=o<i.length?n[i.charAt(o)]:64;if(++o,u==null||m==null||p==null||b==null)throw new c1;const w=u<<2|m>>4;if(s.push(w),p!==64){const x=m<<4&240|p>>2;if(s.push(x),b!==64){const z=p<<6&192|b;s.push(z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class c1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const h1=function(i){const e=mT(i);return pT.encodeByteArray(e,!0)},Zc=function(i){return h1(i).replace(/\./g,"")},gT=function(i){try{return pT.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function f1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const d1=()=>f1().__FIREBASE_DEFAULTS__,m1=()=>{if(typeof process>"u"||typeof f_>"u")return;const i=f_.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},p1=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&gT(i[1]);return e&&JSON.parse(e)},gh=()=>{try{return l1()||d1()||m1()||p1()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},yT=i=>{var e,n;return(n=(e=gh())==null?void 0:e.emulatorHosts)==null?void 0:n[i]},g1=i=>{const e=yT(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},vT=()=>{var i;return(i=gh())==null?void 0:i.config},_T=i=>{var e;return(e=gh())==null?void 0:e[`_${i}`]};/**
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
 */class y1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Eo(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ET(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function v1(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Zc(JSON.stringify(n)),Zc(JSON.stringify(f)),""].join(".")}const zl={};function _1(){const i={prod:[],emulator:[]};for(const e of Object.keys(zl))zl[e]?i.emulator.push(e):i.prod.push(e);return i}function E1(i){let e=document.getElementById(i),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),n=!0),{created:n,element:e}}let d_=!1;function TT(i,e){if(typeof window>"u"||typeof document>"u"||!Eo(window.location.host)||zl[i]===e||zl[i]||d_)return;zl[i]=e;function n(w){return`__firebase__banner__${w}`}const s="__firebase__banner",u=_1().prod.length>0;function f(){const w=document.getElementById(s);w&&w.remove()}function m(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function y(w,x){w.setAttribute("width","24"),w.setAttribute("id",x),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function p(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{d_=!0,f()},w}function E(w,x){w.setAttribute("id",x),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function b(){const w=E1(s),x=n("text"),z=document.getElementById(x)||document.createElement("span"),G=n("learnmore"),X=document.getElementById(G)||document.createElement("a"),ue=n("preprendIcon"),re=document.getElementById(ue)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const ae=w.element;m(ae),E(X,G);const Te=p();y(re,ue),ae.append(re,z,X,Te),document.body.appendChild(ae)}u?(z.innerText="Preview backend disconnected.",re.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(re.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function gn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function T1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gn())}function S1(){var e;const i=(e=gh())==null?void 0:e.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function b1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function w1(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function A1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function C1(){const i=gn();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function R1(){return!S1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ST(){try{return typeof indexedDB=="object"}catch{return!1}}function bT(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(n){e(n)}})}function N1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const I1="FirebaseError";class ki extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=I1,Object.setPrototypeOf(this,ki.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ia.prototype.create)}}class ia{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?D1(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new ki(o,m,s)}}function D1(i,e){return i.replace(O1,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const O1=/\{\$([^}]+)}/g;function M1(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Ws(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const u=i[o],f=e[o];if(m_(u)&&m_(f)){if(!Ws(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function m_(i){return i!==null&&typeof i=="object"}/**
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
 */function iu(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Pl(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function kl(i){const e=i.indexOf("?");if(!e)return"";const n=i.indexOf("#",e);return i.substring(e,n>0?n:void 0)}function P1(i,e){const n=new k1(i,e);return n.subscribe.bind(n)}class k1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");V1(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=Gd),o.error===void 0&&(o.error=Gd),o.complete===void 0&&(o.complete=Gd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function V1(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Gd(){}/**
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
 */function ui(i){return i&&i._delegate?i._delegate:i}class oi{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class x1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new y1;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(U1(e))try{this.getOrInitializeService({instanceIdentifier:Gs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Gs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gs){return this.instances.has(e)}getOptions(e=Gs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:L1(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Gs){return this.component?this.component.multipleInstances?e:Gs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function L1(i){return i===Gs?void 0:i}function U1(i){return i.instantiationMode==="EAGER"}/**
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
 */class z1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new x1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ze;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ze||(ze={}));const j1={debug:ze.DEBUG,verbose:ze.VERBOSE,info:ze.INFO,warn:ze.WARN,error:ze.ERROR,silent:ze.SILENT},B1=ze.INFO,q1={[ze.DEBUG]:"log",[ze.VERBOSE]:"log",[ze.INFO]:"info",[ze.WARN]:"warn",[ze.ERROR]:"error"},H1=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=q1[e];if(o)console[o](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Km{constructor(e){this.name=e,this._logLevel=B1,this._logHandler=H1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ze))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?j1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ze.DEBUG,...e),this._logHandler(this,ze.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ze.VERBOSE,...e),this._logHandler(this,ze.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ze.INFO,...e),this._logHandler(this,ze.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ze.WARN,...e),this._logHandler(this,ze.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ze.ERROR,...e),this._logHandler(this,ze.ERROR,...e)}}const F1=(i,e)=>e.some(n=>i instanceof n);let p_,g_;function Y1(){return p_||(p_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function G1(){return g_||(g_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wT=new WeakMap,pm=new WeakMap,AT=new WeakMap,Xd=new WeakMap,Qm=new WeakMap;function X1(i){const e=new Promise((n,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",f)},u=()=>{n(hr(i.result)),o()},f=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&wT.set(n,i)}).catch(()=>{}),Qm.set(e,i),e}function K1(i){if(pm.has(i))return;const e=new Promise((n,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",f),i.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",f),i.addEventListener("abort",f)});pm.set(i,e)}let gm={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return pm.get(i);if(e==="objectStoreNames")return i.objectStoreNames||AT.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Q1(i){gm=i(gm)}function $1(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(Kd(this),e,...n);return AT.set(s,e.sort?e.sort():[e]),hr(s)}:G1().includes(i)?function(...e){return i.apply(Kd(this),e),hr(wT.get(this))}:function(...e){return hr(i.apply(Kd(this),e))}}function Z1(i){return typeof i=="function"?$1(i):(i instanceof IDBTransaction&&K1(i),F1(i,Y1())?new Proxy(i,gm):i)}function hr(i){if(i instanceof IDBRequest)return X1(i);if(Xd.has(i))return Xd.get(i);const e=Z1(i);return e!==i&&(Xd.set(i,e),Qm.set(e,i)),e}const Kd=i=>Qm.get(i);function yh(i,e,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(i,e),m=hr(f);return s&&f.addEventListener("upgradeneeded",y=>{s(hr(f.result),y.oldVersion,y.newVersion,hr(f.transaction),y)}),n&&f.addEventListener("blocked",y=>n(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),o&&y.addEventListener("versionchange",p=>o(p.oldVersion,p.newVersion,p))}).catch(()=>{}),m}function Qd(i,{blocked:e}={}){const n=indexedDB.deleteDatabase(i);return e&&n.addEventListener("blocked",s=>e(s.oldVersion,s)),hr(n).then(()=>{})}const W1=["get","getKey","getAll","getAllKeys","count"],J1=["put","add","delete","clear"],$d=new Map;function y_(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if($d.get(e))return $d.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=J1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||W1.includes(n)))return;const u=async function(f,...m){const y=this.transaction(f,o?"readwrite":"readonly");let p=y.store;return s&&(p=p.index(m.shift())),(await Promise.all([p[n](...m),o&&y.done]))[0]};return $d.set(e,u),u}Q1(i=>({...i,get:(e,n,s)=>y_(e,n)||i.get(e,n,s),has:(e,n)=>!!y_(e,n)||i.has(e,n)}));/**
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
 */class eC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function tC(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ym="@firebase/app",v_="0.14.1";/**
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
 */const fr=new Km("@firebase/app"),nC="@firebase/app-compat",iC="@firebase/analytics-compat",rC="@firebase/analytics",sC="@firebase/app-check-compat",aC="@firebase/app-check",oC="@firebase/auth",lC="@firebase/auth-compat",uC="@firebase/database",cC="@firebase/data-connect",hC="@firebase/database-compat",fC="@firebase/functions",dC="@firebase/functions-compat",mC="@firebase/installations",pC="@firebase/installations-compat",gC="@firebase/messaging",yC="@firebase/messaging-compat",vC="@firebase/performance",_C="@firebase/performance-compat",EC="@firebase/remote-config",TC="@firebase/remote-config-compat",SC="@firebase/storage",bC="@firebase/storage-compat",wC="@firebase/firestore",AC="@firebase/ai",CC="@firebase/firestore-compat",RC="firebase",NC="12.1.0";/**
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
 */const vm="[DEFAULT]",IC={[ym]:"fire-core",[nC]:"fire-core-compat",[rC]:"fire-analytics",[iC]:"fire-analytics-compat",[aC]:"fire-app-check",[sC]:"fire-app-check-compat",[oC]:"fire-auth",[lC]:"fire-auth-compat",[uC]:"fire-rtdb",[cC]:"fire-data-connect",[hC]:"fire-rtdb-compat",[fC]:"fire-fn",[dC]:"fire-fn-compat",[mC]:"fire-iid",[pC]:"fire-iid-compat",[gC]:"fire-fcm",[yC]:"fire-fcm-compat",[vC]:"fire-perf",[_C]:"fire-perf-compat",[EC]:"fire-rc",[TC]:"fire-rc-compat",[SC]:"fire-gcs",[bC]:"fire-gcs-compat",[wC]:"fire-fst",[CC]:"fire-fst-compat",[AC]:"fire-vertex","fire-js":"fire-js",[RC]:"fire-js-all"};/**
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
 */const Wc=new Map,DC=new Map,_m=new Map;function __(i,e){try{i.container.addComponent(e)}catch(n){fr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function Oi(i){const e=i.name;if(_m.has(e))return fr.debug(`There were multiple attempts to register component ${e}.`),!1;_m.set(e,i);for(const n of Wc.values())__(n,i);for(const n of DC.values())__(n,i);return!0}function To(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function si(i){return i==null?!1:i.settings!==void 0}/**
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
 */const OC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},es=new ia("app","Firebase",OC);/**
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
 */class MC{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new oi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw es.create("app-deleted",{appName:this._name})}}/**
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
 */const So=NC;function CT(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s={name:vm,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw es.create("bad-app-name",{appName:String(o)});if(n||(n=vT()),!n)throw es.create("no-options");const u=Wc.get(o);if(u){if(Ws(n,u.options)&&Ws(s,u.config))return u;throw es.create("duplicate-app",{appName:o})}const f=new z1(o);for(const y of _m.values())f.addComponent(y);const m=new MC(n,s,f);return Wc.set(o,m),m}function $m(i=vm){const e=Wc.get(i);if(!e&&i===vm&&vT())return CT();if(!e)throw es.create("no-app",{appName:i});return e}function Zn(i,e,n){let s=IC[i]??i;n&&(s+=`-${n}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const f=[`Unable to register library "${s}" with version "${e}":`];o&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fr.warn(f.join(" "));return}Oi(new oi(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const PC="firebase-heartbeat-database",kC=1,Yl="firebase-heartbeat-store";let Zd=null;function RT(){return Zd||(Zd=yh(PC,kC,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Yl)}catch(n){console.warn(n)}}}}).catch(i=>{throw es.create("idb-open",{originalErrorMessage:i.message})})),Zd}async function VC(i){try{const n=(await RT()).transaction(Yl),s=await n.objectStore(Yl).get(NT(i));return await n.done,s}catch(e){if(e instanceof ki)fr.warn(e.message);else{const n=es.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fr.warn(n.message)}}}async function E_(i,e){try{const s=(await RT()).transaction(Yl,"readwrite");await s.objectStore(Yl).put(e,NT(i)),await s.done}catch(n){if(n instanceof ki)fr.warn(n.message);else{const s=es.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fr.warn(s.message)}}}function NT(i){return`${i.name}!${i.options.appId}`}/**
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
 */const xC=1024,LC=30;class UC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=T_();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>LC){const f=BC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){fr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=T_(),{heartbeatsToSend:s,unsentEntries:o}=zC(this._heartbeatsCache.heartbeats),u=Zc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return fr.warn(n),""}}}function T_(){return new Date().toISOString().substring(0,10)}function zC(i,e=xC){const n=[];let s=i.slice();for(const o of i){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),S_(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),S_(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class jC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ST()?bT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await VC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return E_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return E_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function S_(i){return Zc(JSON.stringify({version:2,heartbeats:i})).length}function BC(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
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
 */function qC(i){Oi(new oi("platform-logger",e=>new eC(e),"PRIVATE")),Oi(new oi("heartbeat",e=>new UC(e),"PRIVATE")),Zn(ym,v_,i),Zn(ym,v_,"esm2020"),Zn("fire-js","")}qC("");var b_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ts,IT;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(O,A){function N(){}N.prototype=A.prototype,O.D=A.prototype,O.prototype=new N,O.prototype.constructor=O,O.C=function(M,V,k){for(var R=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)R[Ze-2]=arguments[Ze];return A.prototype[V].apply(M,R)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(O,A,N){N||(N=0);var M=Array(16);if(typeof A=="string")for(var V=0;16>V;++V)M[V]=A.charCodeAt(N++)|A.charCodeAt(N++)<<8|A.charCodeAt(N++)<<16|A.charCodeAt(N++)<<24;else for(V=0;16>V;++V)M[V]=A[N++]|A[N++]<<8|A[N++]<<16|A[N++]<<24;A=O.g[0],N=O.g[1],V=O.g[2];var k=O.g[3],R=A+(k^N&(V^k))+M[0]+3614090360&4294967295;A=N+(R<<7&4294967295|R>>>25),R=k+(V^A&(N^V))+M[1]+3905402710&4294967295,k=A+(R<<12&4294967295|R>>>20),R=V+(N^k&(A^N))+M[2]+606105819&4294967295,V=k+(R<<17&4294967295|R>>>15),R=N+(A^V&(k^A))+M[3]+3250441966&4294967295,N=V+(R<<22&4294967295|R>>>10),R=A+(k^N&(V^k))+M[4]+4118548399&4294967295,A=N+(R<<7&4294967295|R>>>25),R=k+(V^A&(N^V))+M[5]+1200080426&4294967295,k=A+(R<<12&4294967295|R>>>20),R=V+(N^k&(A^N))+M[6]+2821735955&4294967295,V=k+(R<<17&4294967295|R>>>15),R=N+(A^V&(k^A))+M[7]+4249261313&4294967295,N=V+(R<<22&4294967295|R>>>10),R=A+(k^N&(V^k))+M[8]+1770035416&4294967295,A=N+(R<<7&4294967295|R>>>25),R=k+(V^A&(N^V))+M[9]+2336552879&4294967295,k=A+(R<<12&4294967295|R>>>20),R=V+(N^k&(A^N))+M[10]+4294925233&4294967295,V=k+(R<<17&4294967295|R>>>15),R=N+(A^V&(k^A))+M[11]+2304563134&4294967295,N=V+(R<<22&4294967295|R>>>10),R=A+(k^N&(V^k))+M[12]+1804603682&4294967295,A=N+(R<<7&4294967295|R>>>25),R=k+(V^A&(N^V))+M[13]+4254626195&4294967295,k=A+(R<<12&4294967295|R>>>20),R=V+(N^k&(A^N))+M[14]+2792965006&4294967295,V=k+(R<<17&4294967295|R>>>15),R=N+(A^V&(k^A))+M[15]+1236535329&4294967295,N=V+(R<<22&4294967295|R>>>10),R=A+(V^k&(N^V))+M[1]+4129170786&4294967295,A=N+(R<<5&4294967295|R>>>27),R=k+(N^V&(A^N))+M[6]+3225465664&4294967295,k=A+(R<<9&4294967295|R>>>23),R=V+(A^N&(k^A))+M[11]+643717713&4294967295,V=k+(R<<14&4294967295|R>>>18),R=N+(k^A&(V^k))+M[0]+3921069994&4294967295,N=V+(R<<20&4294967295|R>>>12),R=A+(V^k&(N^V))+M[5]+3593408605&4294967295,A=N+(R<<5&4294967295|R>>>27),R=k+(N^V&(A^N))+M[10]+38016083&4294967295,k=A+(R<<9&4294967295|R>>>23),R=V+(A^N&(k^A))+M[15]+3634488961&4294967295,V=k+(R<<14&4294967295|R>>>18),R=N+(k^A&(V^k))+M[4]+3889429448&4294967295,N=V+(R<<20&4294967295|R>>>12),R=A+(V^k&(N^V))+M[9]+568446438&4294967295,A=N+(R<<5&4294967295|R>>>27),R=k+(N^V&(A^N))+M[14]+3275163606&4294967295,k=A+(R<<9&4294967295|R>>>23),R=V+(A^N&(k^A))+M[3]+4107603335&4294967295,V=k+(R<<14&4294967295|R>>>18),R=N+(k^A&(V^k))+M[8]+1163531501&4294967295,N=V+(R<<20&4294967295|R>>>12),R=A+(V^k&(N^V))+M[13]+2850285829&4294967295,A=N+(R<<5&4294967295|R>>>27),R=k+(N^V&(A^N))+M[2]+4243563512&4294967295,k=A+(R<<9&4294967295|R>>>23),R=V+(A^N&(k^A))+M[7]+1735328473&4294967295,V=k+(R<<14&4294967295|R>>>18),R=N+(k^A&(V^k))+M[12]+2368359562&4294967295,N=V+(R<<20&4294967295|R>>>12),R=A+(N^V^k)+M[5]+4294588738&4294967295,A=N+(R<<4&4294967295|R>>>28),R=k+(A^N^V)+M[8]+2272392833&4294967295,k=A+(R<<11&4294967295|R>>>21),R=V+(k^A^N)+M[11]+1839030562&4294967295,V=k+(R<<16&4294967295|R>>>16),R=N+(V^k^A)+M[14]+4259657740&4294967295,N=V+(R<<23&4294967295|R>>>9),R=A+(N^V^k)+M[1]+2763975236&4294967295,A=N+(R<<4&4294967295|R>>>28),R=k+(A^N^V)+M[4]+1272893353&4294967295,k=A+(R<<11&4294967295|R>>>21),R=V+(k^A^N)+M[7]+4139469664&4294967295,V=k+(R<<16&4294967295|R>>>16),R=N+(V^k^A)+M[10]+3200236656&4294967295,N=V+(R<<23&4294967295|R>>>9),R=A+(N^V^k)+M[13]+681279174&4294967295,A=N+(R<<4&4294967295|R>>>28),R=k+(A^N^V)+M[0]+3936430074&4294967295,k=A+(R<<11&4294967295|R>>>21),R=V+(k^A^N)+M[3]+3572445317&4294967295,V=k+(R<<16&4294967295|R>>>16),R=N+(V^k^A)+M[6]+76029189&4294967295,N=V+(R<<23&4294967295|R>>>9),R=A+(N^V^k)+M[9]+3654602809&4294967295,A=N+(R<<4&4294967295|R>>>28),R=k+(A^N^V)+M[12]+3873151461&4294967295,k=A+(R<<11&4294967295|R>>>21),R=V+(k^A^N)+M[15]+530742520&4294967295,V=k+(R<<16&4294967295|R>>>16),R=N+(V^k^A)+M[2]+3299628645&4294967295,N=V+(R<<23&4294967295|R>>>9),R=A+(V^(N|~k))+M[0]+4096336452&4294967295,A=N+(R<<6&4294967295|R>>>26),R=k+(N^(A|~V))+M[7]+1126891415&4294967295,k=A+(R<<10&4294967295|R>>>22),R=V+(A^(k|~N))+M[14]+2878612391&4294967295,V=k+(R<<15&4294967295|R>>>17),R=N+(k^(V|~A))+M[5]+4237533241&4294967295,N=V+(R<<21&4294967295|R>>>11),R=A+(V^(N|~k))+M[12]+1700485571&4294967295,A=N+(R<<6&4294967295|R>>>26),R=k+(N^(A|~V))+M[3]+2399980690&4294967295,k=A+(R<<10&4294967295|R>>>22),R=V+(A^(k|~N))+M[10]+4293915773&4294967295,V=k+(R<<15&4294967295|R>>>17),R=N+(k^(V|~A))+M[1]+2240044497&4294967295,N=V+(R<<21&4294967295|R>>>11),R=A+(V^(N|~k))+M[8]+1873313359&4294967295,A=N+(R<<6&4294967295|R>>>26),R=k+(N^(A|~V))+M[15]+4264355552&4294967295,k=A+(R<<10&4294967295|R>>>22),R=V+(A^(k|~N))+M[6]+2734768916&4294967295,V=k+(R<<15&4294967295|R>>>17),R=N+(k^(V|~A))+M[13]+1309151649&4294967295,N=V+(R<<21&4294967295|R>>>11),R=A+(V^(N|~k))+M[4]+4149444226&4294967295,A=N+(R<<6&4294967295|R>>>26),R=k+(N^(A|~V))+M[11]+3174756917&4294967295,k=A+(R<<10&4294967295|R>>>22),R=V+(A^(k|~N))+M[2]+718787259&4294967295,V=k+(R<<15&4294967295|R>>>17),R=N+(k^(V|~A))+M[9]+3951481745&4294967295,O.g[0]=O.g[0]+A&4294967295,O.g[1]=O.g[1]+(V+(R<<21&4294967295|R>>>11))&4294967295,O.g[2]=O.g[2]+V&4294967295,O.g[3]=O.g[3]+k&4294967295}s.prototype.u=function(O,A){A===void 0&&(A=O.length);for(var N=A-this.blockSize,M=this.B,V=this.h,k=0;k<A;){if(V==0)for(;k<=N;)o(this,O,k),k+=this.blockSize;if(typeof O=="string"){for(;k<A;)if(M[V++]=O.charCodeAt(k++),V==this.blockSize){o(this,M),V=0;break}}else for(;k<A;)if(M[V++]=O[k++],V==this.blockSize){o(this,M),V=0;break}}this.h=V,this.o+=A},s.prototype.v=function(){var O=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);O[0]=128;for(var A=1;A<O.length-8;++A)O[A]=0;var N=8*this.o;for(A=O.length-8;A<O.length;++A)O[A]=N&255,N/=256;for(this.u(O),O=Array(16),A=N=0;4>A;++A)for(var M=0;32>M;M+=8)O[N++]=this.g[A]>>>M&255;return O};function u(O,A){var N=m;return Object.prototype.hasOwnProperty.call(N,O)?N[O]:N[O]=A(O)}function f(O,A){this.h=A;for(var N=[],M=!0,V=O.length-1;0<=V;V--){var k=O[V]|0;M&&k==A||(N[V]=k,M=!1)}this.g=N}var m={};function y(O){return-128<=O&&128>O?u(O,function(A){return new f([A|0],0>A?-1:0)}):new f([O|0],0>O?-1:0)}function p(O){if(isNaN(O)||!isFinite(O))return b;if(0>O)return X(p(-O));for(var A=[],N=1,M=0;O>=N;M++)A[M]=O/N|0,N*=4294967296;return new f(A,0)}function E(O,A){if(O.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(O.charAt(0)=="-")return X(E(O.substring(1),A));if(0<=O.indexOf("-"))throw Error('number format error: interior "-" character');for(var N=p(Math.pow(A,8)),M=b,V=0;V<O.length;V+=8){var k=Math.min(8,O.length-V),R=parseInt(O.substring(V,V+k),A);8>k?(k=p(Math.pow(A,k)),M=M.j(k).add(p(R))):(M=M.j(N),M=M.add(p(R)))}return M}var b=y(0),w=y(1),x=y(16777216);i=f.prototype,i.m=function(){if(G(this))return-X(this).m();for(var O=0,A=1,N=0;N<this.g.length;N++){var M=this.i(N);O+=(0<=M?M:4294967296+M)*A,A*=4294967296}return O},i.toString=function(O){if(O=O||10,2>O||36<O)throw Error("radix out of range: "+O);if(z(this))return"0";if(G(this))return"-"+X(this).toString(O);for(var A=p(Math.pow(O,6)),N=this,M="";;){var V=Te(N,A).g;N=ue(N,V.j(A));var k=((0<N.g.length?N.g[0]:N.h)>>>0).toString(O);if(N=V,z(N))return k+M;for(;6>k.length;)k="0"+k;M=k+M}},i.i=function(O){return 0>O?0:O<this.g.length?this.g[O]:this.h};function z(O){if(O.h!=0)return!1;for(var A=0;A<O.g.length;A++)if(O.g[A]!=0)return!1;return!0}function G(O){return O.h==-1}i.l=function(O){return O=ue(this,O),G(O)?-1:z(O)?0:1};function X(O){for(var A=O.g.length,N=[],M=0;M<A;M++)N[M]=~O.g[M];return new f(N,~O.h).add(w)}i.abs=function(){return G(this)?X(this):this},i.add=function(O){for(var A=Math.max(this.g.length,O.g.length),N=[],M=0,V=0;V<=A;V++){var k=M+(this.i(V)&65535)+(O.i(V)&65535),R=(k>>>16)+(this.i(V)>>>16)+(O.i(V)>>>16);M=R>>>16,k&=65535,R&=65535,N[V]=R<<16|k}return new f(N,N[N.length-1]&-2147483648?-1:0)};function ue(O,A){return O.add(X(A))}i.j=function(O){if(z(this)||z(O))return b;if(G(this))return G(O)?X(this).j(X(O)):X(X(this).j(O));if(G(O))return X(this.j(X(O)));if(0>this.l(x)&&0>O.l(x))return p(this.m()*O.m());for(var A=this.g.length+O.g.length,N=[],M=0;M<2*A;M++)N[M]=0;for(M=0;M<this.g.length;M++)for(var V=0;V<O.g.length;V++){var k=this.i(M)>>>16,R=this.i(M)&65535,Ze=O.i(V)>>>16,Le=O.i(V)&65535;N[2*M+2*V]+=R*Le,re(N,2*M+2*V),N[2*M+2*V+1]+=k*Le,re(N,2*M+2*V+1),N[2*M+2*V+1]+=R*Ze,re(N,2*M+2*V+1),N[2*M+2*V+2]+=k*Ze,re(N,2*M+2*V+2)}for(M=0;M<A;M++)N[M]=N[2*M+1]<<16|N[2*M];for(M=A;M<2*A;M++)N[M]=0;return new f(N,0)};function re(O,A){for(;(O[A]&65535)!=O[A];)O[A+1]+=O[A]>>>16,O[A]&=65535,A++}function ae(O,A){this.g=O,this.h=A}function Te(O,A){if(z(A))throw Error("division by zero");if(z(O))return new ae(b,b);if(G(O))return A=Te(X(O),A),new ae(X(A.g),X(A.h));if(G(A))return A=Te(O,X(A)),new ae(X(A.g),A.h);if(30<O.g.length){if(G(O)||G(A))throw Error("slowDivide_ only works with positive integers.");for(var N=w,M=A;0>=M.l(O);)N=ce(N),M=ce(M);var V=we(N,1),k=we(M,1);for(M=we(M,2),N=we(N,2);!z(M);){var R=k.add(M);0>=R.l(O)&&(V=V.add(N),k=R),M=we(M,1),N=we(N,1)}return A=ue(O,V.j(A)),new ae(V,A)}for(V=b;0<=O.l(A);){for(N=Math.max(1,Math.floor(O.m()/A.m())),M=Math.ceil(Math.log(N)/Math.LN2),M=48>=M?1:Math.pow(2,M-48),k=p(N),R=k.j(A);G(R)||0<R.l(O);)N-=M,k=p(N),R=k.j(A);z(k)&&(k=w),V=V.add(k),O=ue(O,R)}return new ae(V,O)}i.A=function(O){return Te(this,O).h},i.and=function(O){for(var A=Math.max(this.g.length,O.g.length),N=[],M=0;M<A;M++)N[M]=this.i(M)&O.i(M);return new f(N,this.h&O.h)},i.or=function(O){for(var A=Math.max(this.g.length,O.g.length),N=[],M=0;M<A;M++)N[M]=this.i(M)|O.i(M);return new f(N,this.h|O.h)},i.xor=function(O){for(var A=Math.max(this.g.length,O.g.length),N=[],M=0;M<A;M++)N[M]=this.i(M)^O.i(M);return new f(N,this.h^O.h)};function ce(O){for(var A=O.g.length+1,N=[],M=0;M<A;M++)N[M]=O.i(M)<<1|O.i(M-1)>>>31;return new f(N,O.h)}function we(O,A){var N=A>>5;A%=32;for(var M=O.g.length-N,V=[],k=0;k<M;k++)V[k]=0<A?O.i(k+N)>>>A|O.i(k+N+1)<<32-A:O.i(k+N);return new f(V,O.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,IT=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=p,f.fromString=E,ts=f}).apply(typeof b_<"u"?b_:typeof self<"u"?self:typeof window<"u"?window:{});var Vc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var DT,Vl,OT,Bc,Em,MT,PT,kT;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,v){return c==Array.prototype||c==Object.prototype||(c[g]=v.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vc=="object"&&Vc];for(var g=0;g<c.length;++g){var v=c[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=n(this);function o(c,g){if(g)e:{var v=s;c=c.split(".");for(var S=0;S<c.length-1;S++){var U=c[S];if(!(U in v))break e;v=v[U]}c=c[c.length-1],S=v[c],g=g(S),g!=S&&g!=null&&e(v,c,{configurable:!0,writable:!0,value:g})}}function u(c,g){c instanceof String&&(c+="");var v=0,S=!1,U={next:function(){if(!S&&v<c.length){var Y=v++;return{value:g(Y,c[Y]),done:!1}}return S=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(c){return c||function(){return u(this,function(g,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function y(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function p(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function E(c,g,v){return c.call.apply(c.bind,arguments)}function b(c,g,v){if(!c)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,S),c.apply(g,U)}}return function(){return c.apply(g,arguments)}}function w(c,g,v){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:b,w.apply(null,arguments)}function x(c,g){var v=Array.prototype.slice.call(arguments,1);return function(){var S=v.slice();return S.push.apply(S,arguments),c.apply(this,S)}}function z(c,g){function v(){}v.prototype=g.prototype,c.aa=g.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(S,U,Y){for(var se=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)se[qe-2]=arguments[qe];return g.prototype[U].apply(S,se)}}function G(c){const g=c.length;if(0<g){const v=Array(g);for(let S=0;S<g;S++)v[S]=c[S];return v}return[]}function X(c,g){for(let v=1;v<arguments.length;v++){const S=arguments[v];if(y(S)){const U=c.length||0,Y=S.length||0;c.length=U+Y;for(let se=0;se<Y;se++)c[U+se]=S[se]}else c.push(S)}}class ue{constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function re(c){return/^[\s\xa0]*$/.test(c)}function ae(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function Te(c){return Te[" "](c),c}Te[" "]=function(){};var ce=ae().indexOf("Gecko")!=-1&&!(ae().toLowerCase().indexOf("webkit")!=-1&&ae().indexOf("Edge")==-1)&&!(ae().indexOf("Trident")!=-1||ae().indexOf("MSIE")!=-1)&&ae().indexOf("Edge")==-1;function we(c,g,v){for(const S in c)g.call(v,c[S],S,c)}function O(c,g){for(const v in c)g.call(void 0,c[v],v,c)}function A(c){const g={};for(const v in c)g[v]=c[v];return g}const N="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(c,g){let v,S;for(let U=1;U<arguments.length;U++){S=arguments[U];for(v in S)c[v]=S[v];for(let Y=0;Y<N.length;Y++)v=N[Y],Object.prototype.hasOwnProperty.call(S,v)&&(c[v]=S[v])}}function V(c){var g=1;c=c.split(":");const v=[];for(;0<g&&c.length;)v.push(c.shift()),g--;return c.length&&v.push(c.join(":")),v}function k(c){m.setTimeout(()=>{throw c},0)}function R(){var c=ke;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class Ze{constructor(){this.h=this.g=null}add(g,v){const S=Le.get();S.set(g,v),this.h?this.h.next=S:this.g=S,this.h=S}}var Le=new ue(()=>new F,c=>c.reset());class F{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let te,fe=!1,ke=new Ze,D=()=>{const c=m.Promise.resolve(void 0);te=()=>{c.then(Z)}};var Z=()=>{for(var c;c=R();){try{c.h.call(c.g)}catch(v){k(v)}var g=Le;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}fe=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ee(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}ee.prototype.h=function(){this.defaultPrevented=!0};var ge=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};m.addEventListener("test",v,g),m.removeEventListener("test",v,g)}catch{}return c}();function Ce(c,g){if(ee.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,S=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(ce){e:{try{Te(g.nodeName);var U=!0;break e}catch{}U=!1}U||(g=null)}}else v=="mouseover"?g=c.fromElement:v=="mouseout"&&(g=c.toElement);this.relatedTarget=g,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:me[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ce.aa.h.call(this)}}z(Ce,ee);var me={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Je="closure_listenable_"+(1e6*Math.random()|0),Me=0;function le(c,g,v,S,U){this.listener=c,this.proxy=null,this.src=g,this.type=v,this.capture=!!S,this.ha=U,this.key=++Me,this.da=this.fa=!1}function Be(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function et(c){this.src=c,this.g={},this.h=0}et.prototype.add=function(c,g,v,S,U){var Y=c.toString();c=this.g[Y],c||(c=this.g[Y]=[],this.h++);var se=Tt(c,g,S,U);return-1<se?(g=c[se],v||(g.fa=!1)):(g=new le(g,this.src,Y,!!S,U),g.fa=v,c.push(g)),g};function ot(c,g){var v=g.type;if(v in c.g){var S=c.g[v],U=Array.prototype.indexOf.call(S,g,void 0),Y;(Y=0<=U)&&Array.prototype.splice.call(S,U,1),Y&&(Be(g),c.g[v].length==0&&(delete c.g[v],c.h--))}}function Tt(c,g,v,S){for(var U=0;U<c.length;++U){var Y=c[U];if(!Y.da&&Y.listener==g&&Y.capture==!!v&&Y.ha==S)return U}return-1}var jt="closure_lm_"+(1e6*Math.random()|0),Ln={};function Wn(c,g,v,S,U){if(Array.isArray(g)){for(var Y=0;Y<g.length;Y++)Wn(c,g[Y],v,S,U);return null}return v=oa(v),c&&c[Je]?c.K(g,v,p(S)?!!S.capture:!1,U):bn(c,g,v,!1,S,U)}function bn(c,g,v,S,U,Y){if(!g)throw Error("Invalid event type");var se=p(U)?!!U.capture:!!U,qe=Vi(c);if(qe||(c[jt]=qe=new et(c)),v=qe.add(g,v,S,se,Y),v.proxy)return v;if(S=No(),v.proxy=S,S.src=c,S.listener=v,c.addEventListener)ge||(U=se),U===void 0&&(U=!1),c.addEventListener(g.toString(),S,U);else if(c.attachEvent)c.attachEvent(dt(g.toString()),S);else if(c.addListener&&c.removeListener)c.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return v}function No(){function c(v){return g.call(c.src,c.listener,v)}const g=aa;return c}function sa(c,g,v,S,U){if(Array.isArray(g))for(var Y=0;Y<g.length;Y++)sa(c,g[Y],v,S,U);else S=p(S)?!!S.capture:!!S,v=oa(v),c&&c[Je]?(c=c.i,g=String(g).toString(),g in c.g&&(Y=c.g[g],v=Tt(Y,v,S,U),-1<v&&(Be(Y[v]),Array.prototype.splice.call(Y,v,1),Y.length==0&&(delete c.g[g],c.h--)))):c&&(c=Vi(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Tt(g,v,S,U)),(v=-1<c?g[c]:null)&&gr(v))}function gr(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[Je])ot(g.i,c);else{var v=c.type,S=c.proxy;g.removeEventListener?g.removeEventListener(v,S,c.capture):g.detachEvent?g.detachEvent(dt(v),S):g.addListener&&g.removeListener&&g.removeListener(S),(v=Vi(g))?(ot(v,c),v.h==0&&(v.src=null,g[jt]=null)):Be(c)}}}function dt(c){return c in Ln?Ln[c]:Ln[c]="on"+c}function aa(c,g){if(c.da)c=!0;else{g=new Ce(g,this);var v=c.listener,S=c.ha||c.src;c.fa&&gr(c),c=v.call(S,g)}return c}function Vi(c){return c=c[jt],c instanceof et?c:null}var yr="__closure_events_fn_"+(1e9*Math.random()>>>0);function oa(c){return typeof c=="function"?c:(c[yr]||(c[yr]=function(g){return c.handleEvent(g)}),c[yr])}function mt(){ne.call(this),this.i=new et(this),this.M=this,this.F=null}z(mt,ne),mt.prototype[Je]=!0,mt.prototype.removeEventListener=function(c,g,v,S){sa(this,c,g,v,S)};function Xe(c,g){var v,S=c.F;if(S)for(v=[];S;S=S.F)v.push(S);if(c=c.M,S=g.type||g,typeof g=="string")g=new ee(g,c);else if(g instanceof ee)g.target=g.target||c;else{var U=g;g=new ee(S,c),M(g,U)}if(U=!0,v)for(var Y=v.length-1;0<=Y;Y--){var se=g.g=v[Y];U=It(se,S,!0,g)&&U}if(se=g.g=c,U=It(se,S,!0,g)&&U,U=It(se,S,!1,g)&&U,v)for(Y=0;Y<v.length;Y++)se=g.g=v[Y],U=It(se,S,!1,g)&&U}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var v=c.g[g],S=0;S<v.length;S++)Be(v[S]);delete c.g[g],c.h--}}this.F=null},mt.prototype.K=function(c,g,v,S){return this.i.add(String(c),g,!1,v,S)},mt.prototype.L=function(c,g,v,S){return this.i.add(String(c),g,!0,v,S)};function It(c,g,v,S){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var U=!0,Y=0;Y<g.length;++Y){var se=g[Y];if(se&&!se.da&&se.capture==v){var qe=se.listener,qt=se.ha||se.src;se.fa&&ot(c.i,se),U=qe.call(qt,S)!==!1&&U}}return U&&!S.defaultPrevented}function Dt(c,g,v){if(typeof c=="function")v&&(c=w(c,v));else if(c&&typeof c.handleEvent=="function")c=w(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:m.setTimeout(c,g||0)}function la(c){c.g=Dt(()=>{c.g=null,c.i&&(c.i=!1,la(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class ua extends ne{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:la(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xi(c){ne.call(this),this.h=c,this.g={}}z(xi,ne);var Li=[];function Ui(c){we(c.g,function(g,v){this.g.hasOwnProperty(v)&&gr(g)},c),c.g={}}xi.prototype.N=function(){xi.aa.N.call(this),Ui(this)},xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Nn=m.JSON.stringify,Q=m.JSON.parse,he=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function Ue(){}Ue.prototype.h=null;function pt(c){return c.h||(c.h=c.i())}function Ie(){}var Kt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qt(){ee.call(this,"d")}z(Qt,ee);function ht(){ee.call(this,"c")}z(ht,ee);var Ot={},Io=null;function vr(){return Io=Io||new mt}Ot.La="serverreachability";function ca(c){ee.call(this,Ot.La,c)}z(ca,ee);function _r(c){const g=vr();Xe(g,new ca(g))}Ot.STAT_EVENT="statevent";function fu(c,g){ee.call(this,Ot.STAT_EVENT,c),this.stat=g}z(fu,ee);function gt(c){const g=vr();Xe(g,new fu(g,c))}Ot.Ma="timingevent";function Bt(c,g){ee.call(this,Ot.Ma,c),this.size=g}z(Bt,ee);function Mt(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},g)}function Un(){this.g=!0}Un.prototype.xa=function(){this.g=!1};function Do(c,g,v,S,U,Y){c.info(function(){if(c.g)if(Y)for(var se="",qe=Y.split("&"),qt=0;qt<qe.length;qt++){var He=qe[qt].split("=");if(1<He.length){var Zt=He[0];He=He[1];var Ht=Zt.split("_");se=2<=Ht.length&&Ht[1]=="type"?se+(Zt+"="+He+"&"):se+(Zt+"=redacted&")}}else se=null;else se=Y;return"XMLHTTP REQ ("+S+") [attempt "+U+"]: "+g+`
`+v+`
`+se})}function zh(c,g,v,S,U,Y,se){c.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+U+"]: "+g+`
`+v+`
`+Y+" "+se})}function Er(c,g,v,S){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+ys(c,v)+(S?" "+S:"")})}function du(c,g){c.info(function(){return"TIMEOUT: "+g})}Un.prototype.info=function(){};function ys(c,g){if(!c.g)return g;if(!g)return null;try{var v=JSON.parse(g);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var S=v[c];if(!(2>S.length)){var U=S[1];if(Array.isArray(U)&&!(1>U.length)){var Y=U[0];if(Y!="noop"&&Y!="stop"&&Y!="close")for(var se=1;se<U.length;se++)U[se]=""}}}}return Nn(v)}catch{return g}}var Tr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},zi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ci;function hi(){}z(hi,Ue),hi.prototype.g=function(){return new XMLHttpRequest},hi.prototype.i=function(){return{}},ci=new hi;function yn(c,g,v,S){this.j=c,this.i=g,this.l=v,this.R=S||1,this.U=new xi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wt}function wt(){this.i=null,this.g="",this.h=!1}var Oo={},ha={};function Jn(c,g,v){c.L=1,c.v=Ss(In(g)),c.m=v,c.P=!0,ji(c,null)}function ji(c,g){c.F=Date.now(),vs(c),c.A=In(c.v);var v=c.A,S=c.R;Array.isArray(S)||(S=[String(S)]),Lo(v.i,"t",S),c.C=0,v=c.j.J,c.h=new wt,c.g=Iu(c.j,v?g:null,!c.m),0<c.O&&(c.M=new ua(w(c.Y,c,c.g),c.O)),g=c.U,v=c.g,S=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(Li[0]=U.toString()),U=Li);for(var Y=0;Y<U.length;Y++){var se=Wn(v,U[Y],S||g.handleEvent,!1,g.h||g);if(!se)break;g.g[se.key]=se}g=c.H?A(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),_r(),Do(c.i,c.u,c.A,c.l,c.R,c.m)}yn.prototype.ca=function(c){c=c.target;const g=this.M;g&&qn(c)==3?g.j():this.Y(c)},yn.prototype.Y=function(c){try{if(c==this.g)e:{const Ht=qn(this.g);var g=this.g.Ba();const Ki=this.g.Z();if(!(3>Ht)&&(Ht!=3||this.g&&(this.h.h||this.g.oa()||Tu(this.g)))){this.J||Ht!=4||g==7||(g==8||0>=Ki?_r(3):_r(2)),Sr(this);var v=this.g.Z();this.X=v;t:if(mu(this)){var S=Tu(this.g);c="";var U=S.length,Y=qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nn(this),fi(this);var se="";break t}this.h.i=new m.TextDecoder}for(g=0;g<U;g++)this.h.h=!0,c+=this.h.i.decode(S[g],{stream:!(Y&&g==U-1)});S.length=0,this.h.g+=c,this.C=0,se=this.h.g}else se=this.g.oa();if(this.o=v==200,zh(this.i,this.u,this.A,this.l,this.R,Ht,v),this.o){if(this.T&&!this.K){t:{if(this.g){var qe,qt=this.g;if((qe=qt.g?qt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!re(qe)){var He=qe;break t}}He=null}if(v=He)Er(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_s(this,v);else{this.o=!1,this.s=3,gt(12),nn(this),fi(this);break e}}if(this.P){v=!0;let rn;for(;!this.J&&this.C<se.length;)if(rn=pu(this,se),rn==ha){Ht==4&&(this.s=4,gt(14),v=!1),Er(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==Oo){this.s=4,gt(15),Er(this.i,this.l,se,"[Invalid Chunk]"),v=!1;break}else Er(this.i,this.l,rn,null),_s(this,rn);if(mu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ht!=4||se.length!=0||this.h.h||(this.s=1,gt(16),v=!1),this.o=this.o&&v,!v)Er(this.i,this.l,se,"[Invalid Chunked Response]"),nn(this),fi(this);else if(0<se.length&&!this.W){this.W=!0;var Zt=this.j;Zt.g==this&&Zt.ba&&!Zt.M&&(Zt.j.info("Great, no buffering proxy detected. Bytes received: "+se.length),Ds(Zt),Zt.M=!0,gt(11))}}else Er(this.i,this.l,se,null),_s(this,se);Ht==4&&nn(this),this.o&&!this.J&&(Ht==4?Cu(this.j,this):(this.o=!1,vs(this)))}else Fh(this.g),v==400&&0<se.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),nn(this),fi(this)}}}catch{}finally{}};function mu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function pu(c,g){var v=c.C,S=g.indexOf(`
`,v);return S==-1?ha:(v=Number(g.substring(v,S)),isNaN(v)?Oo:(S+=1,S+v>g.length?ha:(g=g.slice(S,S+v),c.C=S+v,g)))}yn.prototype.cancel=function(){this.J=!0,nn(this)};function vs(c){c.S=Date.now()+c.I,gu(c,c.I)}function gu(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Mt(w(c.ba,c),g)}function Sr(c){c.B&&(m.clearTimeout(c.B),c.B=null)}yn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(du(this.i,this.A),this.L!=2&&(_r(),gt(17)),nn(this),this.s=2,fi(this)):gu(this,this.S-c)};function fi(c){c.j.G==0||c.J||Cu(c.j,c)}function nn(c){Sr(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,Ui(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function _s(c,g){try{var v=c.j;if(v.G!=0&&(v.g==c||Mo(v.h,c))){if(!c.K&&Mo(v.h,c)&&v.G==3){try{var S=v.Da.g.parse(g)}catch{S=null}if(Array.isArray(S)&&S.length==3){var U=S;if(U[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)ba(v),Ta(v);else break e;qo(v),gt(18)}}else v.za=U[1],0<v.za-v.T&&37500>U[2]&&v.F&&v.v==0&&!v.C&&(v.C=Mt(w(v.Za,v),6e3));if(1>=da(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Xi(v,11)}else if((c.K||v.g==c)&&ba(v),!re(g))for(U=v.Da.g.parse(g),g=0;g<U.length;g++){let He=U[g];if(v.T=He[0],He=He[1],v.G==2)if(He[0]=="c"){v.K=He[1],v.ia=He[2];const Zt=He[3];Zt!=null&&(v.la=Zt,v.j.info("VER="+v.la));const Ht=He[4];Ht!=null&&(v.Aa=Ht,v.j.info("SVER="+v.Aa));const Ki=He[5];Ki!=null&&typeof Ki=="number"&&0<Ki&&(S=1.5*Ki,v.L=S,v.j.info("backChannelRequestTimeoutMs_="+S)),S=v;const rn=c.g;if(rn){const _i=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_i){var Y=S.h;Y.g||_i.indexOf("spdy")==-1&&_i.indexOf("quic")==-1&&_i.indexOf("h2")==-1||(Y.j=Y.l,Y.g=new Set,Y.h&&(ma(Y,Y.h),Y.h=null))}if(S.D){const Fo=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;Fo&&(S.ya=Fo,it(S.I,S.D,Fo))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),S=v;var se=c;if(S.qa=Nu(S,S.J?S.ia:null,S.W),se.K){vn(S.h,se);var qe=se,qt=S.L;qt&&(qe.I=qt),qe.B&&(Sr(qe),vs(qe)),S.g=se}else wu(S);0<v.i.length&&Sa(v)}else He[0]!="stop"&&He[0]!="close"||Xi(v,7);else v.G==3&&(He[0]=="stop"||He[0]=="close"?He[0]=="stop"?Xi(v,7):jo(v):He[0]!="noop"&&v.l&&v.l.ta(He),v.v=0)}}_r(4)}catch{}}var yu=class{constructor(c,g){this.g=c,this.map=g}};function Bi(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fa(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function da(c){return c.h?1:c.g?c.g.size:0}function Mo(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function ma(c,g){c.g?c.g.add(g):c.h=g}function vn(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Bi.prototype.cancel=function(){if(this.i=Po(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Po(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const v of c.g.values())g=g.concat(v.D);return g}return G(c.i)}function jh(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(y(c)){for(var g=[],v=c.length,S=0;S<v;S++)g.push(c[S]);return g}g=[],v=0;for(S in c)g[v++]=c[S];return g}function pa(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(y(c)||typeof c=="string"){var g=[];c=c.length;for(var v=0;v<c;v++)g.push(v);return g}g=[],v=0;for(const S in c)g[v++]=S;return g}}}function ko(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(y(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var v=pa(c),S=jh(c),U=S.length,Y=0;Y<U;Y++)g.call(void 0,S[Y],v&&v[Y],c)}var Es=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bh(c,g){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var S=c[v].indexOf("="),U=null;if(0<=S){var Y=c[v].substring(0,S);U=c[v].substring(S+1)}else Y=c[v];g(Y,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Pt(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Pt){this.h=c.h,Ts(this,c.j),this.o=c.o,this.g=c.g,br(this,c.s),this.l=c.l;var g=c.i,v=new Hi;v.i=g.i,g.g&&(v.g=new Map(g.g),v.h=g.h),qi(this,v),this.m=c.m}else c&&(g=String(c).match(Es))?(this.h=!1,Ts(this,g[1]||"",!0),this.o=zn(g[2]||""),this.g=zn(g[3]||"",!0),br(this,g[4]),this.l=zn(g[5]||"",!0),qi(this,g[6]||"",!0),this.m=zn(g[7]||"")):(this.h=!1,this.i=new Hi(null,this.h))}Pt.prototype.toString=function(){var c=[],g=this.j;g&&c.push(bs(g,Vo,!0),":");var v=this.g;return(v||g=="file")&&(c.push("//"),(g=this.o)&&c.push(bs(g,Vo,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(bs(v,v.charAt(0)=="/"?qh:xo,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",bs(v,ga)),c.join("")};function In(c){return new Pt(c)}function Ts(c,g,v){c.j=v?zn(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function br(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function qi(c,g,v){g instanceof Hi?(c.i=g,_u(c.i,c.h)):(v||(g=bs(g,Hh)),c.i=new Hi(g,c.h))}function it(c,g,v){c.i.set(g,v)}function Ss(c){return it(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function zn(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function bs(c,g,v){return typeof c=="string"?(c=encodeURI(c).replace(g,vu),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function vu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Vo=/[#\/\?@]/g,xo=/[#\?:]/g,qh=/[#\?]/g,Hh=/[#\?@]/g,ga=/#/g;function Hi(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function jn(c){c.g||(c.g=new Map,c.h=0,c.i&&Bh(c.i,function(g,v){c.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}i=Hi.prototype,i.add=function(c,g){jn(this),this.i=null,c=di(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(g),this.h+=1,this};function Fi(c,g){jn(c),g=di(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Yi(c,g){return jn(c),g=di(c,g),c.g.has(g)}i.forEach=function(c,g){jn(this),this.g.forEach(function(v,S){v.forEach(function(U){c.call(g,U,S,this)},this)},this)},i.na=function(){jn(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),v=[];for(let S=0;S<g.length;S++){const U=c[S];for(let Y=0;Y<U.length;Y++)v.push(g[S])}return v},i.V=function(c){jn(this);let g=[];if(typeof c=="string")Yi(this,c)&&(g=g.concat(this.g.get(di(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)g=g.concat(c[v])}return g},i.set=function(c,g){return jn(this),this.i=null,c=di(this,c),Yi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},i.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Lo(c,g,v){Fi(c,g),0<v.length&&(c.i=null,c.g.set(di(c,g),G(v)),c.h+=v.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var v=0;v<g.length;v++){var S=g[v];const Y=encodeURIComponent(String(S)),se=this.V(S);for(S=0;S<se.length;S++){var U=Y;se[S]!==""&&(U+="="+encodeURIComponent(String(se[S]))),c.push(U)}}return this.i=c.join("&")};function di(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function _u(c,g){g&&!c.j&&(jn(c),c.i=null,c.g.forEach(function(v,S){var U=S.toLowerCase();S!=U&&(Fi(this,S),Lo(this,U,v))},c)),c.j=g}function ws(c,g){const v=new Un;if(m.Image){const S=new Image;S.onload=x(Bn,v,"TestLoadImage: loaded",!0,g,S),S.onerror=x(Bn,v,"TestLoadImage: error",!1,g,S),S.onabort=x(Bn,v,"TestLoadImage: abort",!1,g,S),S.ontimeout=x(Bn,v,"TestLoadImage: timeout",!1,g,S),m.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=c}else g(!1)}function ei(c,g){const v=new Un,S=new AbortController,U=setTimeout(()=>{S.abort(),Bn(v,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:S.signal}).then(Y=>{clearTimeout(U),Y.ok?Bn(v,"TestPingServer: ok",!0,g):Bn(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(U),Bn(v,"TestPingServer: error",!1,g)})}function Bn(c,g,v,S,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),S(v)}catch{}}function As(){this.g=new he}function mi(c,g,v){const S=v||"";try{ko(c,function(U,Y){let se=U;p(U)&&(se=Nn(U)),g.push(S+Y+"="+encodeURIComponent(se))})}catch(U){throw g.push(S+"type="+encodeURIComponent("_badmap")),U}}function wr(c){this.l=c.Ub||null,this.j=c.eb||!1}z(wr,Ue),wr.prototype.g=function(){return new Gi(this.l,this.j)},wr.prototype.i=function(c){return function(){return c}}({});function Gi(c,g){mt.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}z(Gi,mt),i=Gi.prototype,i.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,gi(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||m).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pi(this)),this.readyState=0},i.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,gi(this)),this.g&&(this.readyState=3,gi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Uo(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Uo(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}i.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?pi(this):gi(this),this.readyState==3&&Uo(this)}},i.Ra=function(c){this.g&&(this.response=this.responseText=c,pi(this))},i.Qa=function(c){this.g&&(this.response=c,pi(this))},i.ga=function(){this.g&&pi(this)};function pi(c){c.readyState=4,c.l=null,c.j=null,c.v=null,gi(c)}i.setRequestHeader=function(c,g){this.u.append(c,g)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=g.next();return c.join(`\r
`)};function gi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Gi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function zo(c){let g="";return we(c,function(v,S){g+=S,g+=":",g+=v,g+=`\r
`}),g}function $t(c,g,v){e:{for(S in v){var S=!1;break e}S=!0}S||(v=zo(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):it(c,g,v))}function We(c){mt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}z(We,mt);var ya=/^https?$/i,Cs=["POST","PUT"];i=We.prototype,i.Ha=function(c){this.J=c},i.ea=function(c,g,v,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ci.g(),this.v=this.o?pt(this.o):pt(ci),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(Y){Eu(this,Y);return}if(c=v||"",v=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var U in S)v.set(U,S[U]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const Y of S.keys())v.set(Y,S.get(Y));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(v.keys()).find(Y=>Y.toLowerCase()=="content-type"),U=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Cs,g,void 0))||S||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Y,se]of v)this.g.setRequestHeader(Y,se);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Rs(this),this.u=!0,this.g.send(c),this.u=!1}catch(Y){Eu(this,Y)}};function Eu(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,va(c),yi(c)}function va(c){c.A||(c.A=!0,Xe(c,"complete"),Xe(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Xe(this,"complete"),Xe(this,"abort"),yi(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yi(this,!0)),We.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?_a(this):this.bb())},i.bb=function(){_a(this)};function _a(c){if(c.h&&typeof f<"u"&&(!c.v[1]||qn(c)!=4||c.Z()!=2)){if(c.u&&qn(c)==4)Dt(c.Ea,0,c);else if(Xe(c,"readystatechange"),qn(c)==4){c.h=!1;try{const se=c.Z();e:switch(se){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var v;if(!(v=g)){var S;if(S=se===0){var U=String(c.D).match(Es)[1]||null;!U&&m.self&&m.self.location&&(U=m.self.location.protocol.slice(0,-1)),S=!ya.test(U?U.toLowerCase():"")}v=S}if(v)Xe(c,"complete"),Xe(c,"success");else{c.m=6;try{var Y=2<qn(c)?c.g.statusText:""}catch{Y=""}c.l=Y+" ["+c.Z()+"]",va(c)}}finally{yi(c)}}}}function yi(c,g){if(c.g){Rs(c);const v=c.g,S=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Xe(c,"ready");try{v.onreadystatechange=S}catch{}}}function Rs(c){c.I&&(m.clearTimeout(c.I),c.I=null)}i.isActive=function(){return!!this.g};function qn(c){return c.g?c.g.readyState:0}i.Z=function(){try{return 2<qn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Q(g)}};function Tu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Fh(c){const g={};c=(c.g&&2<=qn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<c.length;S++){if(re(c[S]))continue;var v=V(c[S]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const Y=g[U]||[];g[U]=Y,Y.push(v)}O(g,function(S){return S.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ns(c,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||g}function Ea(c){this.Aa=0,this.i=[],this.j=new Un,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ns("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ns("baseRetryDelayMs",5e3,c),this.cb=Ns("retryDelaySeedMs",1e4,c),this.Wa=Ns("forwardChannelMaxRetries",2,c),this.wa=Ns("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Bi(c&&c.concurrentRequestLimit),this.Da=new As,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Ea.prototype,i.la=8,i.G=1,i.connect=function(c,g,v,S){gt(0),this.W=c,this.H=g||{},v&&S!==void 0&&(this.H.OSID=v,this.H.OAID=S),this.F=this.X,this.I=Nu(this,null,this.W),Sa(this)};function jo(c){if(Su(c),c.G==3){var g=c.U++,v=In(c.I);if(it(v,"SID",c.K),it(v,"RID",g),it(v,"TYPE","terminate"),Is(c,v),g=new yn(c,c.j,g),g.L=2,g.v=Ss(In(v)),v=!1,m.navigator&&m.navigator.sendBeacon)try{v=m.navigator.sendBeacon(g.v.toString(),"")}catch{}!v&&m.Image&&(new Image().src=g.v,v=!0),v||(g.g=Iu(g.j,null),g.g.ea(g.v)),g.F=Date.now(),vs(g)}Ru(c)}function Ta(c){c.g&&(Ds(c),c.g.cancel(),c.g=null)}function Su(c){Ta(c),c.u&&(m.clearTimeout(c.u),c.u=null),ba(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function Sa(c){if(!fa(c.h)&&!c.s){c.s=!0;var g=c.Ga;te||D(),fe||(te(),fe=!0),ke.add(g,c),c.B=0}}function Yh(c,g){return da(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Mt(w(c.Ga,c,g),Ho(c,c.B)),c.B++,!0)}i.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new yn(this,this.j,c);let Y=this.o;if(this.S&&(Y?(Y=A(Y),M(Y,this.S)):Y=this.S),this.m!==null||this.O||(U.H=Y,Y=null),this.P)e:{for(var g=0,v=0;v<this.i.length;v++){t:{var S=this.i[v];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(g+=S,4096<g){g=v;break e}if(g===4096||v===this.i.length-1){g=v+1;break e}}g=1e3}else g=1e3;g=bu(this,U,g),v=In(this.I),it(v,"RID",c),it(v,"CVER",22),this.D&&it(v,"X-HTTP-Session-Id",this.D),Is(this,v),Y&&(this.O?g="headers="+encodeURIComponent(String(zo(Y)))+"&"+g:this.m&&$t(v,this.m,Y)),ma(this.h,U),this.Ua&&it(v,"TYPE","init"),this.P?(it(v,"$req",g),it(v,"SID","null"),U.T=!0,Jn(U,v,null)):Jn(U,v,g),this.G=2}}else this.G==3&&(c?Bo(this,c):this.i.length==0||fa(this.h)||Bo(this))};function Bo(c,g){var v;g?v=g.l:v=c.U++;const S=In(c.I);it(S,"SID",c.K),it(S,"RID",v),it(S,"AID",c.T),Is(c,S),c.m&&c.o&&$t(S,c.m,c.o),v=new yn(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),g&&(c.i=g.D.concat(c.i)),g=bu(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ma(c.h,v),Jn(v,S,g)}function Is(c,g){c.H&&we(c.H,function(v,S){it(g,S,v)}),c.l&&ko({},function(v,S){it(g,S,v)})}function bu(c,g,v){v=Math.min(c.i.length,v);var S=c.l?w(c.l.Na,c.l,c):null;e:{var U=c.i;let Y=-1;for(;;){const se=["count="+v];Y==-1?0<v?(Y=U[0].g,se.push("ofs="+Y)):Y=0:se.push("ofs="+Y);let qe=!0;for(let qt=0;qt<v;qt++){let He=U[qt].g;const Zt=U[qt].map;if(He-=Y,0>He)Y=Math.max(0,U[qt].g-100),qe=!1;else try{mi(Zt,se,"req"+He+"_")}catch{S&&S(Zt)}}if(qe){S=se.join("&");break e}}}return c=c.i.splice(0,v),g.D=c,S}function wu(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;te||D(),fe||(te(),fe=!0),ke.add(g,c),c.v=0}}function qo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Mt(w(c.Fa,c),Ho(c,c.v)),c.v++,!0)}i.Fa=function(){if(this.u=null,Au(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Mt(w(this.ab,this),c)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),Ta(this),Au(this))};function Ds(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function Au(c){c.g=new yn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=In(c.qa);it(g,"RID","rpc"),it(g,"SID",c.K),it(g,"AID",c.T),it(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&it(g,"TO",c.ja),it(g,"TYPE","xmlhttp"),Is(c,g),c.m&&c.o&&$t(g,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=Ss(In(g)),v.m=null,v.P=!0,ji(v,c)}i.Za=function(){this.C!=null&&(this.C=null,Ta(this),qo(this),gt(19))};function ba(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function Cu(c,g){var v=null;if(c.g==g){ba(c),Ds(c),c.g=null;var S=2}else if(Mo(c.h,g))v=g.D,vn(c.h,g),S=1;else return;if(c.G!=0){if(g.o)if(S==1){v=g.m?g.m.length:0,g=Date.now()-g.F;var U=c.B;S=vr(),Xe(S,new Bt(S,v)),Sa(c)}else wu(c);else if(U=g.s,U==3||U==0&&0<g.X||!(S==1&&Yh(c,g)||S==2&&qo(c)))switch(v&&0<v.length&&(g=c.h,g.i=g.i.concat(v)),U){case 1:Xi(c,5);break;case 4:Xi(c,10);break;case 3:Xi(c,6);break;default:Xi(c,2)}}}function Ho(c,g){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*g}function Xi(c,g){if(c.j.info("Error code "+g),g==2){var v=w(c.fb,c),S=c.Xa;const U=!S;S=new Pt(S||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Ts(S,"https"),Ss(S),U?ws(S.toString(),v):ei(S.toString(),v)}else gt(2);c.G=0,c.l&&c.l.sa(g),Ru(c),Su(c)}i.fb=function(c){c?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function Ru(c){if(c.G=0,c.ka=[],c.l){const g=Po(c.h);(g.length!=0||c.i.length!=0)&&(X(c.ka,g),X(c.ka,c.i),c.h.i.length=0,G(c.i),c.i.length=0),c.l.ra()}}function Nu(c,g,v){var S=v instanceof Pt?In(v):new Pt(v);if(S.g!="")g&&(S.g=g+"."+S.g),br(S,S.s);else{var U=m.location;S=U.protocol,g=g?g+"."+U.hostname:U.hostname,U=+U.port;var Y=new Pt(null);S&&Ts(Y,S),g&&(Y.g=g),U&&br(Y,U),v&&(Y.l=v),S=Y}return v=c.D,g=c.ya,v&&g&&it(S,v,g),it(S,"VER",c.la),Is(c,S),S}function Iu(c,g,v){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new We(new wr({eb:v})):new We(c.pa),g.Ha(c.J),g}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Du(){}i=Du.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function wa(){}wa.prototype.g=function(c,g){return new _n(c,g)};function _n(c,g){mt.call(this),this.g=new Ea(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!re(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!re(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new vi(this)}z(_n,mt),_n.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_n.prototype.close=function(){jo(this.g)},_n.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=Nn(c),c=v);g.i.push(new yu(g.Ya++,c)),g.G==3&&Sa(g)},_n.prototype.N=function(){this.g.l=null,delete this.j,jo(this.g),delete this.g,_n.aa.N.call(this)};function Ou(c){Qt.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const v in g){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}z(Ou,Qt);function Mu(){ht.call(this),this.status=1}z(Mu,ht);function vi(c){this.g=c}z(vi,Du),vi.prototype.ua=function(){Xe(this.g,"a")},vi.prototype.ta=function(c){Xe(this.g,new Ou(c))},vi.prototype.sa=function(c){Xe(this.g,new Mu)},vi.prototype.ra=function(){Xe(this.g,"b")},wa.prototype.createWebChannel=wa.prototype.g,_n.prototype.send=_n.prototype.o,_n.prototype.open=_n.prototype.m,_n.prototype.close=_n.prototype.close,kT=function(){return new wa},PT=function(){return vr()},MT=Ot,Em={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Tr.NO_ERROR=0,Tr.TIMEOUT=8,Tr.HTTP_ERROR=6,Bc=Tr,zi.COMPLETE="complete",OT=zi,Ie.EventType=Kt,Kt.OPEN="a",Kt.CLOSE="b",Kt.ERROR="c",Kt.MESSAGE="d",mt.prototype.listen=mt.prototype.K,Vl=Ie,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,DT=We}).apply(typeof Vc<"u"?Vc:typeof self<"u"?self:typeof window<"u"?window:{});const w_="@firebase/firestore",A_="4.9.0";/**
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
 */class dn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dn.UNAUTHENTICATED=new dn(null),dn.GOOGLE_CREDENTIALS=new dn("google-credentials-uid"),dn.FIRST_PARTY=new dn("first-party-uid"),dn.MOCK_USER=new dn("mock-user");/**
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
 */const Js=new Km("@firebase/firestore");function Ja(){return Js.logLevel}function de(i,...e){if(Js.logLevel<=ze.DEBUG){const n=e.map(Zm);Js.debug(`Firestore (${bo}): ${i}`,...n)}}function dr(i,...e){if(Js.logLevel<=ze.ERROR){const n=e.map(Zm);Js.error(`Firestore (${bo}): ${i}`,...n)}}function ho(i,...e){if(Js.logLevel<=ze.WARN){const n=e.map(Zm);Js.warn(`Firestore (${bo}): ${i}`,...n)}}function Zm(i){if(typeof i=="string")return i;try{/**
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
*/return function(n){return JSON.stringify(n)}(i)}catch{return i}}/**
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
 */function Ne(i,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,VT(i,s,n)}function VT(i,e,n){let s=`FIRESTORE (${bo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw dr(s),new Error(s)}function Et(i,e,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,i||VT(e,o,s)}function Ge(i,e){return i}/**
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
 */const ie={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ye extends ki{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ns{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class xT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dn.UNAUTHENTICATED))}shutdown(){}}class FC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class YC{constructor(e){this.t=e,this.currentUser=dn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Et(this.o===void 0,42304);let s=this.i;const o=y=>this.i!==s?(s=this.i,n(y)):Promise.resolve();let u=new ns;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ns,e.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const y=u;e.enqueueRetryable(async()=>{await y.promise,await o(this.currentUser)})},m=y=>{de("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(y=>m(y)),setTimeout(()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(de("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ns)}},0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(de("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Et(typeof s.accessToken=="string",31837,{l:s}),new xT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Et(e===null||typeof e=="string",2055,{h:e}),new dn(e)}}class GC{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=dn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class XC{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new GC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(dn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class C_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,si(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Et(this.o===void 0,3512);const s=u=>{u.error!=null&&de("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,de("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{de("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):de("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new C_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Et(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new C_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function QC(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<i;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Wm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=QC(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=e.charAt(o[u]%62))}return s}}function je(i,e){return i<e?-1:i>e?1:0}function Tm(i,e){const n=Math.min(i.length,e.length);for(let s=0;s<n;s++){const o=i.charAt(s),u=e.charAt(s);if(o!==u)return Wd(o)===Wd(u)?je(o,u):Wd(o)?1:-1}return je(i.length,e.length)}const $C=55296,ZC=57343;function Wd(i){const e=i.charCodeAt(0);return e>=$C&&e<=ZC}function fo(i,e,n){return i.length===e.length&&i.every((s,o)=>n(s,e[o]))}/**
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
 */const R_="__name__";class Ai{constructor(e,n,s){n===void 0?n=0:n>e.length&&Ne(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&Ne(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ai.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ai?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const u=Ai.compareSegments(e.get(o),n.get(o));if(u!==0)return u}return je(e.length,n.length)}static compareSegments(e,n){const s=Ai.isNumericId(e),o=Ai.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?Ai.extractNumericId(e).compare(Ai.extractNumericId(n)):Tm(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ts.fromString(e.substring(4,e.length-2))}}class ft extends Ai{construct(e,n,s){return new ft(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ye(ie.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new ft(n)}static emptyPath(){return new ft([])}}const WC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tn extends Ai{construct(e,n,s){return new Tn(e,n,s)}static isValidIdentifier(e){return WC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===R_}static keyField(){return new Tn([R_])}static fromServerFormat(e){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ye(ie.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ye(ie.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[o+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new ye(ie.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new ye(ie.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tn(n)}static emptyPath(){return new Tn([])}}/**
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
 */class Ee{constructor(e){this.path=e}static fromPath(e){return new Ee(ft.fromString(e))}static fromName(e){return new Ee(ft.fromString(e).popFirst(5))}static empty(){return new Ee(ft.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ft.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ft.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ee(new ft(e.slice()))}}/**
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
 */function LT(i,e,n){if(!n)throw new ye(ie.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function JC(i,e,n,s){if(e===!0&&s===!0)throw new ye(ie.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function N_(i){if(!Ee.isDocumentKey(i))throw new ye(ie.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function I_(i){if(Ee.isDocumentKey(i))throw new ye(ie.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function eR(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function tR(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Ne(12329,{type:typeof i})}function Gl(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ye(ie.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=tR(i);throw new ye(ie.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return i}/**
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
 */function zt(i,e){const n={typeString:i};return e&&(n.value=e),n}function ru(i,e){if(!eR(i))throw new ye(ie.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){n=`JSON missing required field: '${s}'`;break}const f=i[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new ye(ie.INVALID_ARGUMENT,n);return!0}/**
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
 */const D_=-62135596800,O_=1e6;class Ut{static now(){return Ut.fromMillis(Date.now())}static fromDate(e){return Ut.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*O_);return new Ut(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ye(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ye(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<D_)throw new ye(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ye(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/O_}_compareTo(e){return this.seconds===e.seconds?je(this.nanoseconds,e.nanoseconds):je(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ut._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ru(e,Ut._jsonSchema))return new Ut(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-D_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ut._jsonSchemaVersion="firestore/timestamp/1.0",Ut._jsonSchema={type:zt("string",Ut._jsonSchemaVersion),seconds:zt("number"),nanoseconds:zt("number")};/**
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
 */class Re{static fromTimestamp(e){return new Re(e)}static min(){return new Re(new Ut(0,0))}static max(){return new Re(new Ut(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Xl=-1;function nR(i,e){const n=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Re.fromTimestamp(s===1e9?new Ut(n+1,0):new Ut(n,s));return new ls(o,Ee.empty(),e)}function iR(i){return new ls(i.readTime,i.key,Xl)}class ls{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ls(Re.min(),Ee.empty(),Xl)}static max(){return new ls(Re.max(),Ee.empty(),Xl)}}function rR(i,e){let n=i.readTime.compareTo(e.readTime);return n!==0?n:(n=Ee.comparator(i.documentKey,e.documentKey),n!==0?n:je(i.largestBatchId,e.largestBatchId))}/**
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
 */const sR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function vh(i){if(i.code!==ie.FAILED_PRECONDITION||i.message!==sR)throw i;de("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ne(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new J((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof J?n:J.resolve(n)}catch(n){return J.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):J.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):J.reject(n)}static resolve(e){return new J((n,s)=>{n(e)})}static reject(e){return new J((n,s)=>{s(e)})}static waitFor(e){return new J((n,s)=>{let o=0,u=0,f=!1;e.forEach(m=>{++o,m.next(()=>{++u,f&&u===o&&n()},y=>s(y))}),f=!0,u===o&&n()})}static or(e){let n=J.resolve(!1);for(const s of e)n=n.next(o=>o?J.resolve(o):s());return n}static forEach(e,n){const s=[];return e.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(e,n){return new J((s,o)=>{const u=e.length,f=new Array(u);let m=0;for(let y=0;y<u;y++){const p=y;n(e[p]).next(E=>{f[p]=E,++m,m===u&&s(f)},E=>o(E))}})}static doWhile(e,n){return new J((s,o)=>{const u=()=>{e()===!0?n().next(()=>{u()},o):s()};u()})}}function oR(i){const e=i.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function wo(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class _h{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}_h.ce=-1;/**
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
 */const lR=-1;function Eh(i){return i==null}function Sm(i){return i===0&&1/i==-1/0}/**
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
 */const UT="";function uR(i){let e="";for(let n=0;n<i.length;n++)e.length>0&&(e=M_(e)),e=cR(i.get(n),e);return M_(e)}function cR(i,e){let n=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":n+="";break;case UT:n+="";break;default:n+=u}}return n}function M_(i){return i+UT+""}/**
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
 */function P_(i){let e=0;for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e++;return e}function su(i,e){for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e(n,i[n])}function hR(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class Nt{constructor(e,n){this.comparator=e,this.root=n||ln.EMPTY}insert(e,n){return new Nt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ln.BLACK,null,null))}remove(e){return new Nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ln.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xc(this.root,e,this.comparator,!1)}getReverseIterator(){return new xc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xc(this.root,e,this.comparator,!0)}}class xc{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?s(e.key,n):1,n&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ln{constructor(e,n,s,o,u){this.key=e,this.value=n,this.color=s??ln.RED,this.left=o??ln.EMPTY,this.right=u??ln.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,u){return new ln(e??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return ln.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return ln.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ln.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ln.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ne(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ne(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ne(27949);return e+(this.isRed()?0:1)}}ln.EMPTY=null,ln.RED=!0,ln.BLACK=!1;ln.EMPTY=new class{constructor(){this.size=0}get key(){throw Ne(57766)}get value(){throw Ne(16141)}get color(){throw Ne(16727)}get left(){throw Ne(29726)}get right(){throw Ne(36894)}copy(e,n,s,o,u){return this}insert(e,n,s){return new ln(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Xt{constructor(e){this.comparator=e,this.data=new Nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new k_(this.data.getIterator())}getIteratorFrom(e){return new k_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Xt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xt(this.comparator);return n.data=e,n}}class k_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Zr{constructor(e){this.fields=e,e.sort(Tn.comparator)}static empty(){return new Zr([])}unionWith(e){let n=new Xt(Tn.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Zr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return fo(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class zT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class un{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new zT("Invalid base64 string: "+u):u}}(e);return new un(n)}static fromUint8Array(e){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(e);return new un(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return je(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}un.EMPTY_BYTE_STRING=new un("");const fR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function us(i){if(Et(!!i,39018),typeof i=="string"){let e=0;const n=fR.exec(i);if(Et(!!n,46558,{timestamp:i}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Rt(i.seconds),nanos:Rt(i.nanos)}}function Rt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function cs(i){return typeof i=="string"?un.fromBase64String(i):un.fromUint8Array(i)}/**
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
 */const jT="server_timestamp",BT="__type__",qT="__previous_value__",HT="__local_write_time__";function Jm(i){var n,s;return((s=(((n=i==null?void 0:i.mapValue)==null?void 0:n.fields)||{})[BT])==null?void 0:s.stringValue)===jT}function Th(i){const e=i.mapValue.fields[qT];return Jm(e)?Th(e):e}function Kl(i){const e=us(i.mapValue.fields[HT].timestampValue);return new Ut(e.seconds,e.nanos)}/**
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
 */class dR{constructor(e,n,s,o,u,f,m,y,p,E){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=p,this.isUsingEmulator=E}}const Jc="(default)";class Ql{constructor(e,n){this.projectId=e,this.database=n||Jc}static empty(){return new Ql("","")}get isDefaultDatabase(){return this.database===Jc}isEqual(e){return e instanceof Ql&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const mR="__type__",pR="__max__",Lc={mapValue:{}},gR="__vector__",bm="value";function hs(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Jm(i)?4:vR(i)?9007199254740991:yR(i)?10:11:Ne(28295,{value:i})}function Mi(i,e){if(i===e)return!0;const n=hs(i);if(n!==hs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Kl(i).isEqual(Kl(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=us(o.timestampValue),m=us(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return cs(o.bytesValue).isEqual(cs(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return Rt(o.geoPointValue.latitude)===Rt(u.geoPointValue.latitude)&&Rt(o.geoPointValue.longitude)===Rt(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return Rt(o.integerValue)===Rt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=Rt(o.doubleValue),m=Rt(u.doubleValue);return f===m?Sm(f)===Sm(m):isNaN(f)&&isNaN(m)}return!1}(i,e);case 9:return fo(i.arrayValue.values||[],e.arrayValue.values||[],Mi);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(P_(f)!==P_(m))return!1;for(const y in f)if(f.hasOwnProperty(y)&&(m[y]===void 0||!Mi(f[y],m[y])))return!1;return!0}(i,e);default:return Ne(52216,{left:i})}}function $l(i,e){return(i.values||[]).find(n=>Mi(n,e))!==void 0}function mo(i,e){if(i===e)return 0;const n=hs(i),s=hs(e);if(n!==s)return je(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return je(i.booleanValue,e.booleanValue);case 2:return function(u,f){const m=Rt(u.integerValue||u.doubleValue),y=Rt(f.integerValue||f.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1}(i,e);case 3:return V_(i.timestampValue,e.timestampValue);case 4:return V_(Kl(i),Kl(e));case 5:return Tm(i.stringValue,e.stringValue);case 6:return function(u,f){const m=cs(u),y=cs(f);return m.compareTo(y)}(i.bytesValue,e.bytesValue);case 7:return function(u,f){const m=u.split("/"),y=f.split("/");for(let p=0;p<m.length&&p<y.length;p++){const E=je(m[p],y[p]);if(E!==0)return E}return je(m.length,y.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,f){const m=je(Rt(u.latitude),Rt(f.latitude));return m!==0?m:je(Rt(u.longitude),Rt(f.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return x_(i.arrayValue,e.arrayValue);case 10:return function(u,f){var w,x,z,G;const m=u.fields||{},y=f.fields||{},p=(w=m[bm])==null?void 0:w.arrayValue,E=(x=y[bm])==null?void 0:x.arrayValue,b=je(((z=p==null?void 0:p.values)==null?void 0:z.length)||0,((G=E==null?void 0:E.values)==null?void 0:G.length)||0);return b!==0?b:x_(p,E)}(i.mapValue,e.mapValue);case 11:return function(u,f){if(u===Lc.mapValue&&f===Lc.mapValue)return 0;if(u===Lc.mapValue)return 1;if(f===Lc.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),p=f.fields||{},E=Object.keys(p);y.sort(),E.sort();for(let b=0;b<y.length&&b<E.length;++b){const w=Tm(y[b],E[b]);if(w!==0)return w;const x=mo(m[y[b]],p[E[b]]);if(x!==0)return x}return je(y.length,E.length)}(i.mapValue,e.mapValue);default:throw Ne(23264,{he:n})}}function V_(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return je(i,e);const n=us(i),s=us(e),o=je(n.seconds,s.seconds);return o!==0?o:je(n.nanos,s.nanos)}function x_(i,e){const n=i.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=mo(n[o],s[o]);if(u)return u}return je(n.length,s.length)}function po(i){return wm(i)}function wm(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(n){const s=us(n);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(n){return cs(n).toBase64()}(i.bytesValue):"referenceValue"in i?function(n){return Ee.fromName(n).toString()}(i.referenceValue):"geoPointValue"in i?function(n){return`geo(${n.latitude},${n.longitude})`}(i.geoPointValue):"arrayValue"in i?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=wm(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${wm(n.fields[f])}`;return o+"}"}(i.mapValue):Ne(61005,{value:i})}function qc(i){switch(hs(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Th(i);return e?16+qc(e):16;case 5:return 2*i.stringValue.length;case 6:return cs(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+qc(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return su(s.fields,(u,f)=>{o+=u.length+qc(f)}),o}(i.mapValue);default:throw Ne(13486,{value:i})}}function Am(i){return!!i&&"integerValue"in i}function ep(i){return!!i&&"arrayValue"in i}function L_(i){return!!i&&"nullValue"in i}function U_(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Jd(i){return!!i&&"mapValue"in i}function yR(i){var n,s;return((s=(((n=i==null?void 0:i.mapValue)==null?void 0:n.fields)||{})[mR])==null?void 0:s.stringValue)===gR}function jl(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return su(i.mapValue.fields,(n,s)=>e.mapValue.fields[n]=jl(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(i.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=jl(i.arrayValue.values[n]);return e}return{...i}}function vR(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===pR}/**
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
 */class Ci{constructor(e){this.value=e}static empty(){return new Ci({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Jd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=jl(n)}setAll(e){let n=Tn.emptyPath(),s={},o=[];e.forEach((f,m)=>{if(!n.isImmediateParentOf(m)){const y=this.getFieldsMap(n);this.applyChanges(y,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=jl(f):o.push(m.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(e){const n=this.field(e.popLast());Jd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];Jd(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){su(n,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new Ci(jl(this.value))}}/**
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
 */class mn{constructor(e,n,s,o,u,f,m){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(e){return new mn(e,0,Re.min(),Re.min(),Re.min(),Ci.empty(),0)}static newFoundDocument(e,n,s,o){return new mn(e,1,n,Re.min(),s,o,0)}static newNoDocument(e,n){return new mn(e,2,n,Re.min(),Re.min(),Ci.empty(),0)}static newUnknownDocument(e,n){return new mn(e,3,n,Re.min(),Re.min(),Ci.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ci.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ci.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class eh{constructor(e,n){this.position=e,this.inclusive=n}}function z_(i,e,n){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],f=i.position[o];if(u.field.isKeyField()?s=Ee.comparator(Ee.fromName(f.referenceValue),n.key):s=mo(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function j_(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let n=0;n<i.position.length;n++)if(!Mi(i.position[n],e.position[n]))return!1;return!0}/**
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
 */class th{constructor(e,n="asc"){this.field=e,this.dir=n}}function _R(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class FT{}class Gt extends FT{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new TR(e,n,s):n==="array-contains"?new wR(e,s):n==="in"?new AR(e,s):n==="not-in"?new CR(e,s):n==="array-contains-any"?new RR(e,s):new Gt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new SR(e,s):new bR(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(mo(n,this.value)):n!==null&&hs(this.value)===hs(n)&&this.matchesComparison(mo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ne(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pi extends FT{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Pi(e,n)}matches(e){return YT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function YT(i){return i.op==="and"}function GT(i){return ER(i)&&YT(i)}function ER(i){for(const e of i.filters)if(e instanceof Pi)return!1;return!0}function Cm(i){if(i instanceof Gt)return i.field.canonicalString()+i.op.toString()+po(i.value);if(GT(i))return i.filters.map(e=>Cm(e)).join(",");{const e=i.filters.map(n=>Cm(n)).join(",");return`${i.op}(${e})`}}function XT(i,e){return i instanceof Gt?function(s,o){return o instanceof Gt&&s.op===o.op&&s.field.isEqual(o.field)&&Mi(s.value,o.value)}(i,e):i instanceof Pi?function(s,o){return o instanceof Pi&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,m)=>u&&XT(f,o.filters[m]),!0):!1}(i,e):void Ne(19439)}function KT(i){return i instanceof Gt?function(n){return`${n.field.canonicalString()} ${n.op} ${po(n.value)}`}(i):i instanceof Pi?function(n){return n.op.toString()+" {"+n.getFilters().map(KT).join(" ,")+"}"}(i):"Filter"}class TR extends Gt{constructor(e,n,s){super(e,n,s),this.key=Ee.fromName(s.referenceValue)}matches(e){const n=Ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class SR extends Gt{constructor(e,n){super(e,"in",n),this.keys=QT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class bR extends Gt{constructor(e,n){super(e,"not-in",n),this.keys=QT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function QT(i,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(s=>Ee.fromName(s.referenceValue))}class wR extends Gt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ep(n)&&$l(n.arrayValue,this.value)}}class AR extends Gt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$l(this.value.arrayValue,n)}}class CR extends Gt{constructor(e,n){super(e,"not-in",n)}matches(e){if($l(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!$l(this.value.arrayValue,n)}}class RR extends Gt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ep(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>$l(this.value.arrayValue,s))}}/**
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
 */class NR{constructor(e,n=null,s=[],o=[],u=null,f=null,m=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Te=null}}function B_(i,e=null,n=[],s=[],o=null,u=null,f=null){return new NR(i,e,n,s,o,u,f)}function tp(i){const e=Ge(i);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Cm(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Eh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>po(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>po(s)).join(",")),e.Te=n}return e.Te}function np(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<i.orderBy.length;n++)if(!_R(i.orderBy[n],e.orderBy[n]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let n=0;n<i.filters.length;n++)if(!XT(i.filters[n],e.filters[n]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!j_(i.startAt,e.startAt)&&j_(i.endAt,e.endAt)}function Rm(i){return Ee.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class Sh{constructor(e,n=null,s=[],o=[],u=null,f="F",m=null,y=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=y,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function IR(i,e,n,s,o,u,f,m){return new Sh(i,e,n,s,o,u,f,m)}function ip(i){return new Sh(i)}function q_(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function DR(i){return i.collectionGroup!==null}function Bl(i){const e=Ge(i);if(e.Ie===null){e.Ie=[];const n=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),n.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Xt(Tn.comparator);return f.filters.forEach(y=>{y.getFlattenedFilters().forEach(p=>{p.isInequality()&&(m=m.add(p.field))})}),m})(e).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new th(u,s))}),n.has(Tn.keyField().canonicalString())||e.Ie.push(new th(Tn.keyField(),s))}return e.Ie}function Ni(i){const e=Ge(i);return e.Ee||(e.Ee=OR(e,Bl(i))),e.Ee}function OR(i,e){if(i.limitType==="F")return B_(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new th(o.field,u)});const n=i.endAt?new eh(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new eh(i.startAt.position,i.startAt.inclusive):null;return B_(i.path,i.collectionGroup,e,i.filters,i.limit,n,s)}}function Nm(i,e,n){return new Sh(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,n,i.startAt,i.endAt)}function bh(i,e){return np(Ni(i),Ni(e))&&i.limitType===e.limitType}function $T(i){return`${tp(Ni(i))}|lt:${i.limitType}`}function eo(i){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>KT(o)).join(", ")}]`),Eh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>po(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>po(o)).join(",")),`Target(${s})`}(Ni(i))}; limitType=${i.limitType})`}function wh(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):Ee.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of Bl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(f,m,y){const p=z_(f,m,y);return f.inclusive?p<=0:p<0}(s.startAt,Bl(s),o)||s.endAt&&!function(f,m,y){const p=z_(f,m,y);return f.inclusive?p>=0:p>0}(s.endAt,Bl(s),o))}(i,e)}function MR(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function ZT(i){return(e,n)=>{let s=!1;for(const o of Bl(i)){const u=PR(o,e,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function PR(i,e,n){const s=i.field.isKeyField()?Ee.comparator(e.key,n.key):function(u,f,m){const y=f.data.field(u),p=m.data.field(u);return y!==null&&p!==null?mo(y,p):Ne(42886)}(i.field,e,n);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Ne(19790,{direction:i.dir})}}/**
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
 */class ra{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){su(this.inner,(n,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return hR(this.inner)}size(){return this.innerSize}}/**
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
 */const kR=new Nt(Ee.comparator);function fs(){return kR}const WT=new Nt(Ee.comparator);function xl(...i){let e=WT;for(const n of i)e=e.insert(n.key,n);return e}function VR(i){let e=WT;return i.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Xs(){return ql()}function JT(){return ql()}function ql(){return new ra(i=>i.toString(),(i,e)=>i.isEqual(e))}const xR=new Xt(Ee.comparator);function Ke(...i){let e=xR;for(const n of i)e=e.add(n);return e}const LR=new Xt(je);function UR(){return LR}/**
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
 */function zR(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sm(e)?"-0":e}}function jR(i){return{integerValue:""+i}}/**
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
 */class Ah{constructor(){this._=void 0}}function BR(i,e,n){return i instanceof Im?function(o,u){const f={fields:{[BT]:{stringValue:jT},[HT]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Jm(u)&&(u=Th(u)),u&&(f.fields[qT]=u),{mapValue:f}}(n,e):i instanceof nh?e0(i,e):i instanceof ih?t0(i,e):function(o,u){const f=HR(o,u),m=H_(f)+H_(o.Ae);return Am(f)&&Am(o.Ae)?jR(m):zR(o.serializer,m)}(i,e)}function qR(i,e,n){return i instanceof nh?e0(i,e):i instanceof ih?t0(i,e):n}function HR(i,e){return i instanceof Dm?function(s){return Am(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Im extends Ah{}class nh extends Ah{constructor(e){super(),this.elements=e}}function e0(i,e){const n=n0(e);for(const s of i.elements)n.some(o=>Mi(o,s))||n.push(s);return{arrayValue:{values:n}}}class ih extends Ah{constructor(e){super(),this.elements=e}}function t0(i,e){let n=n0(e);for(const s of i.elements)n=n.filter(o=>!Mi(o,s));return{arrayValue:{values:n}}}class Dm extends Ah{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function H_(i){return Rt(i.integerValue||i.doubleValue)}function n0(i){return ep(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function FR(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof nh&&o instanceof nh||s instanceof ih&&o instanceof ih?fo(s.elements,o.elements,Mi):s instanceof Dm&&o instanceof Dm?Mi(s.Ae,o.Ae):s instanceof Im&&o instanceof Im}(i.transform,e.transform)}class $s{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $s}static exists(e){return new $s(void 0,e)}static updateTime(e){return new $s(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hc(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class rp{}function i0(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new GR(i.key,$s.none()):new sp(i.key,i.data,$s.none());{const n=i.data,s=Ci.empty();let o=new Xt(Tn.comparator);for(let u of e.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new Ch(i.key,s,new Zr(o.toArray()),$s.none())}}function YR(i,e,n){i instanceof sp?function(o,u,f){const m=o.value.clone(),y=Y_(o.fieldTransforms,u,f.transformResults);m.setAll(y),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(i,e,n):i instanceof Ch?function(o,u,f){if(!Hc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=Y_(o.fieldTransforms,u,f.transformResults),y=u.data;y.setAll(r0(o)),y.setAll(m),u.convertToFoundDocument(f.version,y).setHasCommittedMutations()}(i,e,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,e,n)}function Hl(i,e,n,s){return i instanceof sp?function(u,f,m,y){if(!Hc(u.precondition,f))return m;const p=u.value.clone(),E=G_(u.fieldTransforms,y,f);return p.setAll(E),f.convertToFoundDocument(f.version,p).setHasLocalMutations(),null}(i,e,n,s):i instanceof Ch?function(u,f,m,y){if(!Hc(u.precondition,f))return m;const p=G_(u.fieldTransforms,y,f),E=f.data;return E.setAll(r0(u)),E.setAll(p),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(b=>b.field))}(i,e,n,s):function(u,f,m){return Hc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(i,e,n)}function F_(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&fo(s,o,(u,f)=>FR(u,f))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class sp extends rp{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ch extends rp{constructor(e,n,s,o,u=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function r0(i){const e=new Map;return i.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=i.data.field(n);e.set(n,s)}}),e}function Y_(i,e,n){const s=new Map;Et(i.length===n.length,32656,{Re:n.length,Ve:i.length});for(let o=0;o<n.length;o++){const u=i[o],f=u.transform,m=e.data.field(u.field);s.set(u.field,qR(f,m,n[o]))}return s}function G_(i,e,n){const s=new Map;for(const o of i){const u=o.transform,f=n.data.field(o.field);s.set(o.field,BR(u,f,e))}return s}class GR extends rp{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class XR{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&YR(u,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Hl(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Hl(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=JT();return this.mutations.forEach(o=>{const u=e.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const y=i0(f,m);y!==null&&s.set(o.key,y),f.isValidDocument()||f.convertToNoDocument(Re.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ke())}isEqual(e){return this.batchId===e.batchId&&fo(this.mutations,e.mutations,(n,s)=>F_(n,s))&&fo(this.baseMutations,e.baseMutations,(n,s)=>F_(n,s))}}/**
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
 */class KR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class QR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var xt,Ye;function s0(i){if(i===void 0)return dr("GRPC error has no .code"),ie.UNKNOWN;switch(i){case xt.OK:return ie.OK;case xt.CANCELLED:return ie.CANCELLED;case xt.UNKNOWN:return ie.UNKNOWN;case xt.DEADLINE_EXCEEDED:return ie.DEADLINE_EXCEEDED;case xt.RESOURCE_EXHAUSTED:return ie.RESOURCE_EXHAUSTED;case xt.INTERNAL:return ie.INTERNAL;case xt.UNAVAILABLE:return ie.UNAVAILABLE;case xt.UNAUTHENTICATED:return ie.UNAUTHENTICATED;case xt.INVALID_ARGUMENT:return ie.INVALID_ARGUMENT;case xt.NOT_FOUND:return ie.NOT_FOUND;case xt.ALREADY_EXISTS:return ie.ALREADY_EXISTS;case xt.PERMISSION_DENIED:return ie.PERMISSION_DENIED;case xt.FAILED_PRECONDITION:return ie.FAILED_PRECONDITION;case xt.ABORTED:return ie.ABORTED;case xt.OUT_OF_RANGE:return ie.OUT_OF_RANGE;case xt.UNIMPLEMENTED:return ie.UNIMPLEMENTED;case xt.DATA_LOSS:return ie.DATA_LOSS;default:return Ne(39323,{code:i})}}(Ye=xt||(xt={}))[Ye.OK=0]="OK",Ye[Ye.CANCELLED=1]="CANCELLED",Ye[Ye.UNKNOWN=2]="UNKNOWN",Ye[Ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ye[Ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ye[Ye.NOT_FOUND=5]="NOT_FOUND",Ye[Ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ye[Ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ye[Ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ye[Ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ye[Ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ye[Ye.ABORTED=10]="ABORTED",Ye[Ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ye[Ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ye[Ye.INTERNAL=13]="INTERNAL",Ye[Ye.UNAVAILABLE=14]="UNAVAILABLE",Ye[Ye.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function $R(){return new TextEncoder}/**
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
 */const ZR=new ts([4294967295,4294967295],0);function X_(i){const e=$R().encode(i),n=new IT;return n.update(e),new Uint8Array(n.digest())}function K_(i){const e=new DataView(i.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ts([n,s],0),new ts([o,u],0)]}class ap{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Ll(`Invalid padding: ${n}`);if(s<0)throw new Ll(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ll(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Ll(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ts.fromNumber(this.ge)}ye(e,n,s){let o=e.add(n.multiply(ts.fromNumber(s)));return o.compare(ZR)===1&&(o=new ts([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=X_(e),[s,o]=K_(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);if(!this.we(f))return!1}return!0}static create(e,n,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),f=new ap(u,o,n);return s.forEach(m=>f.insert(m)),f}insert(e){if(this.ge===0)return;const n=X_(e),[s,o]=K_(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);this.Se(f)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Ll extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Rh{constructor(e,n,s,o,u){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const o=new Map;return o.set(e,au.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Rh(Re.min(),o,new Nt(je),fs(),Ke())}}class au{constructor(e,n,s,o,u){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new au(s,n,Ke(),Ke(),Ke())}}/**
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
 */class Fc{constructor(e,n,s,o){this.be=e,this.removedTargetIds=n,this.key=s,this.De=o}}class a0{constructor(e,n){this.targetId=e,this.Ce=n}}class o0{constructor(e,n,s=un.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=o}}class Q_{constructor(){this.ve=0,this.Fe=$_(),this.Me=un.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ke(),n=Ke(),s=Ke();return this.Fe.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:Ne(38017,{changeType:u})}}),new au(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=$_()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Et(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class WR{constructor(e){this.Ge=e,this.ze=new Map,this.je=fs(),this.Je=Uc(),this.He=Uc(),this.Ye=new Nt(je)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:Ne(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((s,o)=>{this.rt(o)&&n(o)})}st(e){const n=e.targetId,s=e.Ce.count,o=this.ot(n);if(o){const u=o.target;if(Rm(u))if(s===0){const f=new Ee(u.path);this.et(n,f,mn.newNoDocument(f,Re.min()))}else Et(s===1,20013,{expectedCount:s});else{const f=this._t(n);if(f!==s){const m=this.ut(e),y=m?this.ct(m,e,f):1;if(y!==0){this.it(n);const p=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,p)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=cs(s).toUint8Array()}catch(y){if(y instanceof zT)return ho("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new ap(f,o,u)}catch(y){return ho(y instanceof Ll?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.ge===0?null:m}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const f=this.Ge.ht(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(n,u,null),o++)}),o}Tt(e){const n=new Map;this.ze.forEach((u,f)=>{const m=this.ot(f);if(m){if(u.current&&Rm(m.target)){const y=new Ee(m.target.path);this.It(y).has(f)||this.Et(f,y)||this.et(f,y,mn.newNoDocument(y,e))}u.Be&&(n.set(f,u.ke()),u.qe())}});let s=Ke();this.He.forEach((u,f)=>{let m=!0;f.forEachWhile(y=>{const p=this.ot(y);return!p||p.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.je.forEach((u,f)=>f.setReadTime(e));const o=new Rh(e,n,this.Ye,this.je,s);return this.je=fs(),this.Je=Uc(),this.He=Uc(),this.Ye=new Nt(je),o}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,n)?o.Qe(n,1):o.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Q_,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Xt(je),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Xt(je),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||de("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Q_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Uc(){return new Nt(Ee.comparator)}function $_(){return new Nt(Ee.comparator)}const JR={asc:"ASCENDING",desc:"DESCENDING"},eN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tN={and:"AND",or:"OR"};class nN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Om(i,e){return i.useProto3Json||Eh(e)?e:{value:e}}function iN(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rN(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function so(i){return Et(!!i,49232),Re.fromTimestamp(function(n){const s=us(n);return new Ut(s.seconds,s.nanos)}(i))}function sN(i,e){return Mm(i,e).canonicalString()}function Mm(i,e){const n=function(o){return new ft(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?n:n.child(e)}function l0(i){const e=ft.fromString(i);return Et(d0(e),10190,{key:e.toString()}),e}function em(i,e){const n=l0(e);if(n.get(1)!==i.databaseId.projectId)throw new ye(ie.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+i.databaseId.projectId);if(n.get(3)!==i.databaseId.database)throw new ye(ie.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+i.databaseId.database);return new Ee(c0(n))}function u0(i,e){return sN(i.databaseId,e)}function aN(i){const e=l0(i);return e.length===4?ft.emptyPath():c0(e)}function Z_(i){return new ft(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function c0(i){return Et(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function oN(i,e){let n;if("targetChange"in e){e.targetChange;const s=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:Ne(39313,{state:p})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(p,E){return p.useProto3Json?(Et(E===void 0||typeof E=="string",58123),un.fromBase64String(E||"")):(Et(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),un.fromUint8Array(E||new Uint8Array))}(i,e.targetChange.resumeToken),f=e.targetChange.cause,m=f&&function(p){const E=p.code===void 0?ie.UNKNOWN:s0(p.code);return new ye(E,p.message||"")}(f);n=new o0(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=em(i,s.document.name),u=so(s.document.updateTime),f=s.document.createTime?so(s.document.createTime):Re.min(),m=new Ci({mapValue:{fields:s.document.fields}}),y=mn.newFoundDocument(o,u,f,m),p=s.targetIds||[],E=s.removedTargetIds||[];n=new Fc(p,E,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=em(i,s.document),u=s.readTime?so(s.readTime):Re.min(),f=mn.newNoDocument(o,u),m=s.removedTargetIds||[];n=new Fc([],m,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=em(i,s.document),u=s.removedTargetIds||[];n=new Fc([],u,o,null)}else{if(!("filter"in e))return Ne(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new QR(o,u),m=s.targetId;n=new a0(m,f)}}return n}function lN(i,e){return{documents:[u0(i,e.path)]}}function uN(i,e){const n={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=u0(i,o);const u=function(p){if(p.length!==0)return f0(Pi.create(p,"and"))}(e.filters);u&&(n.structuredQuery.where=u);const f=function(p){if(p.length!==0)return p.map(E=>function(w){return{field:to(w.field),direction:fN(w.dir)}}(E))}(e.orderBy);f&&(n.structuredQuery.orderBy=f);const m=Om(i,e.limit);return m!==null&&(n.structuredQuery.limit=m),e.startAt&&(n.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),{ft:n,parent:o}}function cN(i){let e=aN(i.parent);const n=i.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Et(s===1,65062);const E=n.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];n.where&&(u=function(b){const w=h0(b);return w instanceof Pi&&GT(w)?w.getFilters():[w]}(n.where));let f=[];n.orderBy&&(f=function(b){return b.map(w=>function(z){return new th(no(z.field),function(X){switch(X){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(z.direction))}(w))}(n.orderBy));let m=null;n.limit&&(m=function(b){let w;return w=typeof b=="object"?b.value:b,Eh(w)?null:w}(n.limit));let y=null;n.startAt&&(y=function(b){const w=!!b.before,x=b.values||[];return new eh(x,w)}(n.startAt));let p=null;return n.endAt&&(p=function(b){const w=!b.before,x=b.values||[];return new eh(x,w)}(n.endAt)),IR(e,o,f,u,m,"F",y,p)}function hN(i,e){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ne(28987,{purpose:o})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function h0(i){return i.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=no(n.unaryFilter.field);return Gt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=no(n.unaryFilter.field);return Gt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=no(n.unaryFilter.field);return Gt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=no(n.unaryFilter.field);return Gt.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ne(61313);default:return Ne(60726)}}(i):i.fieldFilter!==void 0?function(n){return Gt.create(no(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ne(58110);default:return Ne(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(n){return Pi.create(n.compositeFilter.filters.map(s=>h0(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ne(1026)}}(n.compositeFilter.op))}(i):Ne(30097,{filter:i})}function fN(i){return JR[i]}function dN(i){return eN[i]}function mN(i){return tN[i]}function to(i){return{fieldPath:i.canonicalString()}}function no(i){return Tn.fromServerFormat(i.fieldPath)}function f0(i){return i instanceof Gt?function(n){if(n.op==="=="){if(U_(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NAN"}};if(L_(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(U_(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NOT_NAN"}};if(L_(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:to(n.field),op:dN(n.op),value:n.value}}}(i):i instanceof Pi?function(n){const s=n.getFilters().map(o=>f0(o));return s.length===1?s[0]:{compositeFilter:{op:mN(n.op),filters:s}}}(i):Ne(54877,{filter:i})}function d0(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class Wr{constructor(e,n,s,o,u=Re.min(),f=Re.min(),m=un.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new Wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class pN{constructor(e){this.yt=e}}function gN(i){const e=cN({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Nm(e,e.limit,"L"):e}/**
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
 */class yN{constructor(){this.Cn=new vN}addToCollectionParentIndex(e,n){return this.Cn.add(n),J.resolve()}getCollectionParents(e,n){return J.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return J.resolve()}deleteFieldIndex(e,n){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,n){return J.resolve()}getDocumentsMatchingTarget(e,n){return J.resolve(null)}getIndexType(e,n){return J.resolve(0)}getFieldIndexes(e,n){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,n){return J.resolve(ls.min())}getMinOffsetFromCollectionGroup(e,n){return J.resolve(ls.min())}updateCollectionGroup(e,n,s){return J.resolve()}updateIndexEntries(e,n){return J.resolve()}}class vN{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new Xt(ft.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Xt(ft.comparator)).toArray()}}/**
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
 */const W_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},m0=41943040;class Rn{static withCacheSize(e){return new Rn(e,Rn.DEFAULT_COLLECTION_PERCENTILE,Rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Rn.DEFAULT_COLLECTION_PERCENTILE=10,Rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rn.DEFAULT=new Rn(m0,Rn.DEFAULT_COLLECTION_PERCENTILE,Rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rn.DISABLED=new Rn(-1,0,0);/**
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
 */const J_="LruGarbageCollector",_N=1048576;function eE([i,e],[n,s]){const o=je(i,n);return o===0?je(e,s):o}class EN{constructor(e){this.Ir=e,this.buffer=new Xt(eE),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();eE(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class TN{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){de(J_,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){wo(n)?de(J_,"Ignoring IndexedDB error during garbage collection: ",n):await vh(n)}await this.Vr(3e5)})}}class SN{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return J.resolve(_h.ce);const s=new EN(n);return this.mr.forEachTarget(e,o=>s.Ar(o.sequenceNumber)).next(()=>this.mr.pr(e,o=>s.Ar(o))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(de("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(W_)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(de("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),W_):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,o,u,f,m,y,p;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(de("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),o=this.params.maximumSequenceNumbersToCollect):o=b,f=Date.now(),this.nthSequenceNumber(e,o))).next(b=>(s=b,m=Date.now(),this.removeTargets(e,s,n))).next(b=>(u=b,y=Date.now(),this.removeOrphanedDocuments(e,s))).next(b=>(p=Date.now(),Ja()<=ze.DEBUG&&de("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${b} documents in `+(p-y)+`ms
Total Duration: ${p-E}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:b})))}}function bN(i,e){return new SN(i,e)}/**
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
 */class wN{constructor(){this.changes=new ra(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?J.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class AN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class CN{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,n))).next(o=>(s!==null&&Hl(s.mutation,o,Zr.empty(),Ut.now()),o))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Ke()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Ke()){const o=Xs();return this.populateOverlays(e,o,n).next(()=>this.computeViews(e,n,o,s).next(u=>{let f=xl();return u.forEach((m,y)=>{f=f.insert(m,y.overlayedDocument)}),f}))}getOverlayedDocuments(e,n){const s=Xs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Ke()))}populateOverlays(e,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((f,m)=>{n.set(f,m)})})}computeViews(e,n,s,o){let u=fs();const f=ql(),m=function(){return ql()}();return n.forEach((y,p)=>{const E=s.get(p.key);o.has(p.key)&&(E===void 0||E.mutation instanceof Ch)?u=u.insert(p.key,p):E!==void 0?(f.set(p.key,E.mutation.getFieldMask()),Hl(E.mutation,p,E.mutation.getFieldMask(),Ut.now())):f.set(p.key,Zr.empty())}),this.recalculateAndSaveOverlays(e,u).next(y=>(y.forEach((p,E)=>f.set(p,E)),n.forEach((p,E)=>m.set(p,new AN(E,f.get(p)??null))),m))}recalculateAndSaveOverlays(e,n){const s=ql();let o=new Nt((f,m)=>f-m),u=Ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(f=>{for(const m of f)m.keys().forEach(y=>{const p=n.get(y);if(p===null)return;let E=s.get(y)||Zr.empty();E=m.applyToLocalView(p,E),s.set(y,E);const b=(o.get(m.batchId)||Ke()).add(y);o=o.insert(m.batchId,b)})}).next(()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),p=y.key,E=y.value,b=JT();E.forEach(w=>{if(!u.has(w)){const x=i0(n.get(w),s.get(w));x!==null&&b.set(w,x),u=u.add(w)}}),f.push(this.documentOverlayCache.saveOverlays(e,p,b))}return J.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,o){return function(f){return Ee.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):DR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-u.size):J.resolve(Xs());let m=Xl,y=u;return f.next(p=>J.forEach(p,(E,b)=>(m<b.largestBatchId&&(m=b.largestBatchId),u.get(E)?J.resolve():this.remoteDocumentCache.getEntry(e,E).next(w=>{y=y.insert(E,w)}))).next(()=>this.populateOverlays(e,p,u)).next(()=>this.computeViews(e,y,p,Ke())).next(E=>({batchId:m,changes:VR(E)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Ee(n)).next(s=>{let o=xl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const u=n.collectionGroup;let f=xl();return this.indexManager.getCollectionParents(e,u).next(m=>J.forEach(m,y=>{const p=function(b,w){return new Sh(w,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(n,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,p,s,o).next(E=>{E.forEach((b,w)=>{f=f.insert(b,w)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(e,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,u,o))).next(f=>{u.forEach((y,p)=>{const E=p.getKey();f.get(E)===null&&(f=f.insert(E,mn.newInvalidDocument(E)))});let m=xl();return f.forEach((y,p)=>{const E=u.get(y);E!==void 0&&Hl(E.mutation,p,Zr.empty(),Ut.now()),wh(n,p)&&(m=m.insert(y,p))}),m})}}/**
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
 */class RN{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return J.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:so(o.createTime)}}(n)),J.resolve()}getNamedQuery(e,n){return J.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(o){return{name:o.name,query:gN(o.bundledQuery),readTime:so(o.readTime)}}(n)),J.resolve()}}/**
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
 */class NN{constructor(){this.overlays=new Nt(Ee.comparator),this.qr=new Map}getOverlay(e,n){return J.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Xs();return J.forEach(n,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((o,u)=>{this.St(e,n,u)}),J.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.qr.delete(s)),J.resolve()}getOverlaysForCollection(e,n,s){const o=Xs(),u=n.length+1,f=new Ee(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const y=m.getNext().value,p=y.getKey();if(!n.isPrefixOf(p.path))break;p.path.length===u&&y.largestBatchId>s&&o.set(y.getKey(),y)}return J.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let u=new Nt((p,E)=>p-E);const f=this.overlays.getIterator();for(;f.hasNext();){const p=f.getNext().value;if(p.getKey().getCollectionGroup()===n&&p.largestBatchId>s){let E=u.get(p.largestBatchId);E===null&&(E=Xs(),u=u.insert(p.largestBatchId,E)),E.set(p.getKey(),p)}}const m=Xs(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach((p,E)=>m.set(p,E)),!(m.size()>=o)););return J.resolve(m)}St(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new KR(n,s));let u=this.qr.get(n);u===void 0&&(u=Ke(),this.qr.set(n,u)),this.qr.set(n,u.add(s.key))}}/**
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
 */class IN{constructor(){this.sessionToken=un.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,J.resolve()}}/**
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
 */class op{constructor(){this.Qr=new Xt(tn.$r),this.Ur=new Xt(tn.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new tn(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Gr(new tn(e,n))}zr(e,n){e.forEach(s=>this.removeReference(s,n))}jr(e){const n=new Ee(new ft([])),s=new tn(n,e),o=new tn(n,e+1),u=[];return this.Ur.forEachInRange([s,o],f=>{this.Gr(f),u.push(f.key)}),u}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Ee(new ft([])),s=new tn(n,e),o=new tn(n,e+1);let u=Ke();return this.Ur.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(e){const n=new tn(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class tn{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Ee.comparator(e.key,n.key)||je(e.Yr,n.Yr)}static Kr(e,n){return je(e.Yr,n.Yr)||Ee.comparator(e.key,n.key)}}/**
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
 */class DN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Xt(tn.$r)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new XR(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Zr=this.Zr.add(new tn(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return J.resolve(f)}lookupMutationBatch(e,n){return J.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.ei(s),u=o<0?0:o;return J.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?lR:this.tr-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new tn(n,0),o=new tn(n,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],f=>{const m=this.Xr(f.Yr);u.push(m)}),J.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Xt(je);return n.forEach(o=>{const u=new tn(o,0),f=new tn(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,f],m=>{s=s.add(m.Yr)})}),J.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let u=s;Ee.isDocumentKey(u)||(u=u.child(""));const f=new tn(new Ee(u),0);let m=new Xt(je);return this.Zr.forEachWhile(y=>{const p=y.key.path;return!!s.isPrefixOf(p)&&(p.length===o&&(m=m.add(y.Yr)),!0)},f),J.resolve(this.ti(m))}ti(e){const n=[];return e.forEach(s=>{const o=this.Xr(s);o!==null&&n.push(o)}),n}removeMutationBatch(e,n){Et(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return J.forEach(n.mutations,o=>{const u=new tn(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Zr=s})}ir(e){}containsKey(e,n){const s=new tn(n,0),o=this.Zr.firstAfterOrEqual(s);return J.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class ON{constructor(e){this.ri=e,this.docs=function(){return new Nt(Ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return J.resolve(s?s.document.mutableCopy():mn.newInvalidDocument(n))}getEntries(e,n){let s=fs();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():mn.newInvalidDocument(o))}),J.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let u=fs();const f=n.path,m=new Ee(f.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:p,value:{document:E}}=y.getNext();if(!f.isPrefixOf(p.path))break;p.path.length>f.length+1||rR(iR(E),s)<=0||(o.has(E.key)||wh(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return J.resolve(u)}getAllFromCollectionGroup(e,n,s,o){Ne(9500)}ii(e,n){return J.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new MN(this)}getSize(e){return J.resolve(this.size)}}class MN extends wN{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)}),J.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class PN{constructor(e){this.persistence=e,this.si=new ra(n=>tp(n),np),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.oi=0,this._i=new op,this.targetCount=0,this.ai=go.ur()}forEachTarget(e,n){return this.si.forEach((s,o)=>n(o)),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),J.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new go(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,J.resolve()}updateTargetData(e,n){return this.Pr(n),J.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,n,s){let o=0;const u=[];return this.si.forEach((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.si.delete(f),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),J.waitFor(u).next(()=>o)}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return J.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),J.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(e,f))}),J.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),J.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return J.resolve(s)}containsKey(e,n){return J.resolve(this._i.containsKey(n))}}/**
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
 */class p0{constructor(e,n){this.ui={},this.overlays={},this.ci=new _h(0),this.li=!1,this.li=!0,this.hi=new IN,this.referenceDelegate=e(this),this.Pi=new PN(this),this.indexManager=new yN,this.remoteDocumentCache=function(o){return new ON(o)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new pN(n),this.Ii=new RN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new NN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new DN(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){de("MemoryPersistence","Starting transaction:",e);const o=new kN(this.ci.next());return this.referenceDelegate.Ei(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ai(e,n){return J.or(Object.values(this.ui).map(s=>()=>s.containsKey(e,n)))}}class kN extends aR{constructor(e){super(),this.currentSequenceNumber=e}}class lp{constructor(e){this.persistence=e,this.Ri=new op,this.Vi=null}static mi(e){return new lp(e)}get fi(){if(this.Vi)return this.Vi;throw Ne(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),J.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),J.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),J.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(o=>this.fi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(o=>{o.forEach(u=>this.fi.add(u.toString()))}).next(()=>s.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.fi,s=>{const o=Ee.fromPath(s);return this.gi(e,o).next(u=>{u||n.removeEntry(o,Re.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return J.or([()=>J.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class rh{constructor(e,n){this.persistence=e,this.pi=new ra(s=>uR(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=bN(this,n)}static mi(e,n){return new rh(e,n)}Ei(){}di(e){return J.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(o=>s+o))}wr(e){let n=0;return this.pr(e,s=>{n++}).next(()=>n)}pr(e,n){return J.forEach(this.pi,(s,o)=>this.br(e,s,o).next(u=>u?J.resolve():n(o)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,f=>this.br(e,f,n).next(m=>{m||(s++,u.removeEntry(f,Re.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),J.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),J.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),J.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),J.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=qc(e.data.value)),n}br(e,n,s){return J.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.pi.get(n);return J.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class up{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=o}static As(e,n){let s=Ke(),o=Ke();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new up(e,n.fromCache,s,o)}}/**
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
 */class VN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class xN{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return R1()?8:oR(gn())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,o){const u={result:null};return this.ys(e,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.ws(e,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new VN;return this.Ss(e,n,f).next(m=>{if(u.result=m,this.Vs)return this.bs(e,n,f,m.size)})}).next(()=>u.result)}bs(e,n,s,o){return s.documentReadCount<this.fs?(Ja()<=ze.DEBUG&&de("QueryEngine","SDK will not create cache indexes for query:",eo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),J.resolve()):(Ja()<=ze.DEBUG&&de("QueryEngine","Query:",eo(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(Ja()<=ze.DEBUG&&de("QueryEngine","The SDK decides to create cache indexes for query:",eo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ni(n))):J.resolve())}ys(e,n){if(q_(n))return J.resolve(null);let s=Ni(n);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=Nm(n,null,"F"),s=Ni(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const f=Ke(...u);return this.ps.getDocuments(e,f).next(m=>this.indexManager.getMinOffset(e,s).next(y=>{const p=this.Ds(n,m);return this.Cs(n,p,f,y.readTime)?this.ys(e,Nm(n,null,"F")):this.vs(e,p,n,y)}))})))}ws(e,n,s,o){return q_(n)||o.isEqual(Re.min())?J.resolve(null):this.ps.getDocuments(e,s).next(u=>{const f=this.Ds(n,u);return this.Cs(n,f,s,o)?J.resolve(null):(Ja()<=ze.DEBUG&&de("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),eo(n)),this.vs(e,f,n,nR(o,Xl)).next(m=>m))})}Ds(e,n){let s=new Xt(ZT(e));return n.forEach((o,u)=>{wh(e,u)&&(s=s.add(u))}),s}Cs(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,n,s){return Ja()<=ze.DEBUG&&de("QueryEngine","Using full collection scan to execute query:",eo(n)),this.ps.getDocumentsMatchingQuery(e,n,ls.min(),s)}vs(e,n,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
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
 */const cp="LocalStore",LN=3e8;class UN{constructor(e,n,s,o){this.persistence=e,this.Fs=n,this.serializer=o,this.Ms=new Nt(je),this.xs=new ra(u=>tp(u),np),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new CN(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function zN(i,e,n,s){return new UN(i,e,n,s)}async function g0(i,e){const n=Ge(i);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.Bs(e),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],m=[];let y=Ke();for(const p of o){f.push(p.batchId);for(const E of p.mutations)y=y.add(E.key)}for(const p of u){m.push(p.batchId);for(const E of p.mutations)y=y.add(E.key)}return n.localDocuments.getDocuments(s,y).next(p=>({Ls:p,removedBatchIds:f,addedBatchIds:m}))})})}function y0(i){const e=Ge(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function jN(i,e){const n=Ge(i),s=e.snapshotVersion;let o=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=n.Ns.newChangeBuffer({trackRemovals:!0});o=n.Ms;const m=[];e.targetChanges.forEach((E,b)=>{const w=o.get(b);if(!w)return;m.push(n.Pi.removeMatchingKeys(u,E.removedDocuments,b).next(()=>n.Pi.addMatchingKeys(u,E.addedDocuments,b)));let x=w.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(b)!==null?x=x.withResumeToken(un.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):E.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(E.resumeToken,s)),o=o.insert(b,x),function(G,X,ue){return G.resumeToken.approximateByteSize()===0||X.snapshotVersion.toMicroseconds()-G.snapshotVersion.toMicroseconds()>=LN?!0:ue.addedDocuments.size+ue.modifiedDocuments.size+ue.removedDocuments.size>0}(w,x,E)&&m.push(n.Pi.updateTargetData(u,x))});let y=fs(),p=Ke();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))}),m.push(BN(u,f,e.documentUpdates).next(E=>{y=E.ks,p=E.qs})),!s.isEqual(Re.min())){const E=n.Pi.getLastRemoteSnapshotVersion(u).next(b=>n.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(E)}return J.waitFor(m).next(()=>f.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,y,p)).next(()=>y)}).then(u=>(n.Ms=o,u))}function BN(i,e,n){let s=Ke(),o=Ke();return n.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let f=fs();return n.forEach((m,y)=>{const p=u.get(m);y.isFoundDocument()!==p.isFoundDocument()&&(o=o.add(m)),y.isNoDocument()&&y.version.isEqual(Re.min())?(e.removeEntry(m,y.readTime),f=f.insert(m,y)):!p.isValidDocument()||y.version.compareTo(p.version)>0||y.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(y),f=f.insert(m,y)):de(cp,"Ignoring outdated watch update for ",m,". Current version:",p.version," Watch version:",y.version)}),{ks:f,qs:o}})}function qN(i,e){const n=Ge(i);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.Pi.getTargetData(s,e).next(u=>u?(o=u,J.resolve(o)):n.Pi.allocateTargetId(s).next(f=>(o=new Wr(e,f,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s})}async function Pm(i,e,n){const s=Ge(i),o=s.Ms.get(e),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!wo(f))throw f;de(cp,`Failed to update sequence numbers for target ${e}: ${f}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function tE(i,e,n){const s=Ge(i);let o=Re.min(),u=Ke();return s.persistence.runTransaction("Execute query","readwrite",f=>function(y,p,E){const b=Ge(y),w=b.xs.get(E);return w!==void 0?J.resolve(b.Ms.get(w)):b.Pi.getTargetData(p,E)}(s,f,Ni(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(f,m.targetId).next(y=>{u=y})}).next(()=>s.Fs.getDocumentsMatchingQuery(f,e,n?o:Re.min(),n?u:Ke())).next(m=>(HN(s,MR(e),m),{documents:m,Qs:u})))}function HN(i,e,n){let s=i.Os.get(e)||Re.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.Os.set(e,s)}class nE{constructor(){this.activeTargetIds=UR()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class FN{constructor(){this.Mo=new nE,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new nE,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class YN{Oo(e){}shutdown(){}}/**
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
 */const iE="ConnectivityMonitor";class rE{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){de(iE,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){de(iE,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zc=null;function km(){return zc===null?zc=function(){return 268435456+Math.round(2147483648*Math.random())}():zc++,"0x"+zc.toString(16)}/**
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
 */const tm="RestConnection",GN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class XN{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Jc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,n,s,o,u){const f=km(),m=this.zo(e,n.toUriEncodedString());de(tm,`Sending RPC '${e}' ${f}:`,m,s);const y={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(y,o,u);const{host:p}=new URL(m),E=Eo(p);return this.Jo(e,m,y,s,E).then(b=>(de(tm,`Received RPC '${e}' ${f}: `,b),b),b=>{throw ho(tm,`RPC '${e}' ${f} failed with error: `,b,"url: ",m,"request:",s),b})}Ho(e,n,s,o,u,f){return this.Go(e,n,s,o,u)}jo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}zo(e,n){const s=GN[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
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
 */class KN{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const fn="WebChannelConnection";class QN extends XN{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,o,u){const f=km();return new Promise((m,y)=>{const p=new DT;p.setWithCredentials(!0),p.listenOnce(OT.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Bc.NO_ERROR:const b=p.getResponseJson();de(fn,`XHR for RPC '${e}' ${f} received:`,JSON.stringify(b)),m(b);break;case Bc.TIMEOUT:de(fn,`RPC '${e}' ${f} timed out`),y(new ye(ie.DEADLINE_EXCEEDED,"Request time out"));break;case Bc.HTTP_ERROR:const w=p.getStatus();if(de(fn,`RPC '${e}' ${f} failed with status:`,w,"response text:",p.getResponseText()),w>0){let x=p.getResponseJson();Array.isArray(x)&&(x=x[0]);const z=x==null?void 0:x.error;if(z&&z.status&&z.message){const G=function(ue){const re=ue.toLowerCase().replace(/_/g,"-");return Object.values(ie).indexOf(re)>=0?re:ie.UNKNOWN}(z.status);y(new ye(G,z.message))}else y(new ye(ie.UNKNOWN,"Server responded with status "+p.getStatus()))}else y(new ye(ie.UNAVAILABLE,"Connection failed."));break;default:Ne(9055,{l_:e,streamId:f,h_:p.getLastErrorCode(),P_:p.getLastError()})}}finally{de(fn,`RPC '${e}' ${f} completed.`)}});const E=JSON.stringify(o);de(fn,`RPC '${e}' ${f} sending request:`,o),p.send(n,"POST",E,s,15)})}T_(e,n,s){const o=km(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=kT(),m=PT(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(y.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(y.useFetchStreams=!0),this.jo(y.initMessageHeaders,n,s),y.encodeInitMessageHeaders=!0;const E=u.join("");de(fn,`Creating RPC '${e}' stream ${o}: ${E}`,y);const b=f.createWebChannel(E,y);this.I_(b);let w=!1,x=!1;const z=new KN({Yo:X=>{x?de(fn,`Not sending because RPC '${e}' stream ${o} is closed:`,X):(w||(de(fn,`Opening RPC '${e}' stream ${o} transport.`),b.open(),w=!0),de(fn,`RPC '${e}' stream ${o} sending:`,X),b.send(X))},Zo:()=>b.close()}),G=(X,ue,re)=>{X.listen(ue,ae=>{try{re(ae)}catch(Te){setTimeout(()=>{throw Te},0)}})};return G(b,Vl.EventType.OPEN,()=>{x||(de(fn,`RPC '${e}' stream ${o} transport opened.`),z.o_())}),G(b,Vl.EventType.CLOSE,()=>{x||(x=!0,de(fn,`RPC '${e}' stream ${o} transport closed`),z.a_(),this.E_(b))}),G(b,Vl.EventType.ERROR,X=>{x||(x=!0,ho(fn,`RPC '${e}' stream ${o} transport errored. Name:`,X.name,"Message:",X.message),z.a_(new ye(ie.UNAVAILABLE,"The operation could not be completed")))}),G(b,Vl.EventType.MESSAGE,X=>{var ue;if(!x){const re=X.data[0];Et(!!re,16349);const ae=re,Te=(ae==null?void 0:ae.error)||((ue=ae[0])==null?void 0:ue.error);if(Te){de(fn,`RPC '${e}' stream ${o} received error:`,Te);const ce=Te.status;let we=function(N){const M=xt[N];if(M!==void 0)return s0(M)}(ce),O=Te.message;we===void 0&&(we=ie.INTERNAL,O="Unknown error status: "+ce+" with message "+Te.message),x=!0,z.a_(new ye(we,O)),b.close()}else de(fn,`RPC '${e}' stream ${o} received:`,re),z.u_(re)}}),G(m,MT.STAT_EVENT,X=>{X.stat===Em.PROXY?de(fn,`RPC '${e}' stream ${o} detected buffering proxy`):X.stat===Em.NOPROXY&&de(fn,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{z.__()},0),z}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function nm(){return typeof document<"u"?document:null}/**
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
 */function v0(i){return new nN(i,!0)}/**
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
 */class _0{constructor(e,n,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&de("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const sE="PersistentStream";class $N{constructor(e,n,s,o,u,f,m,y){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new _0(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===ie.RESOURCE_EXHAUSTED?(dr(n.toString()),dr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===ie.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.D_===n&&this.G_(s,o)},s=>{e(()=>{const o=new ye(ie.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)})})}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(o=>{s(()=>this.z_(o))}),this.stream.onMessage(o=>{s(()=>++this.F_==1?this.J_(o):this.onNext(o))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return de(sE,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(de(sE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZN extends $N{constructor(e,n,s,o,u,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=oN(this.serializer,e),s=function(u){if(!("targetChange"in u))return Re.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?Re.min():f.readTime?so(f.readTime):Re.min()}(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=Z_(this.serializer),n.addTarget=function(u,f){let m;const y=f.target;if(m=Rm(y)?{documents:lN(u,y)}:{query:uN(u,y).ft},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=rN(u,f.resumeToken);const p=Om(u,f.expectedCount);p!==null&&(m.expectedCount=p)}else if(f.snapshotVersion.compareTo(Re.min())>0){m.readTime=iN(u,f.snapshotVersion.toTimestamp());const p=Om(u,f.expectedCount);p!==null&&(m.expectedCount=p)}return m}(this.serializer,e);const s=hN(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=Z_(this.serializer),n.removeTarget=e,this.q_(n)}}/**
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
 */class WN{}class JN extends WN{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ye(ie.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.Go(e,Mm(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ye(ie.UNKNOWN,u.toString())})}Ho(e,n,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Ho(e,Mm(n,s),o,f,m,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new ye(ie.UNKNOWN,f.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class e2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(dr(n),this.aa=!1):de("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const yo="RemoteStore";class t2{constructor(e,n,s,o,u){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo(f=>{s.enqueueAndForget(async()=>{lu(this)&&(de(yo,"Restarting streams for network reachability change."),await async function(y){const p=Ge(y);p.Ea.add(4),await ou(p),p.Ra.set("Unknown"),p.Ea.delete(4),await Nh(p)}(this))})}),this.Ra=new e2(s,o)}}async function Nh(i){if(lu(i))for(const e of i.da)await e(!0)}async function ou(i){for(const e of i.da)await e(!1)}function E0(i,e){const n=Ge(i);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),mp(n)?dp(n):Ao(n).O_()&&fp(n,e))}function hp(i,e){const n=Ge(i),s=Ao(n);n.Ia.delete(e),s.O_()&&T0(n,e),n.Ia.size===0&&(s.O_()?s.L_():lu(n)&&n.Ra.set("Unknown"))}function fp(i,e){if(i.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const n=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ao(i).Y_(e)}function T0(i,e){i.Va.Ue(e),Ao(i).Z_(e)}function dp(i){i.Va=new WR({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),Ao(i).start(),i.Ra.ua()}function mp(i){return lu(i)&&!Ao(i).x_()&&i.Ia.size>0}function lu(i){return Ge(i).Ea.size===0}function S0(i){i.Va=void 0}async function n2(i){i.Ra.set("Online")}async function i2(i){i.Ia.forEach((e,n)=>{fp(i,e)})}async function r2(i,e){S0(i),mp(i)?(i.Ra.ha(e),dp(i)):i.Ra.set("Unknown")}async function s2(i,e,n){if(i.Ra.set("Online"),e instanceof o0&&e.state===2&&e.cause)try{await async function(o,u){const f=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.Ia.delete(m),o.Va.removeTarget(m))}(i,e)}catch(s){de(yo,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await aE(i,s)}else if(e instanceof Fc?i.Va.Ze(e):e instanceof a0?i.Va.st(e):i.Va.tt(e),!n.isEqual(Re.min()))try{const s=await y0(i.localStore);n.compareTo(s)>=0&&await function(u,f){const m=u.Va.Tt(f);return m.targetChanges.forEach((y,p)=>{if(y.resumeToken.approximateByteSize()>0){const E=u.Ia.get(p);E&&u.Ia.set(p,E.withResumeToken(y.resumeToken,f))}}),m.targetMismatches.forEach((y,p)=>{const E=u.Ia.get(y);if(!E)return;u.Ia.set(y,E.withResumeToken(un.EMPTY_BYTE_STRING,E.snapshotVersion)),T0(u,y);const b=new Wr(E.target,y,p,E.sequenceNumber);fp(u,b)}),u.remoteSyncer.applyRemoteEvent(m)}(i,n)}catch(s){de(yo,"Failed to raise snapshot:",s),await aE(i,s)}}async function aE(i,e,n){if(!wo(e))throw e;i.Ea.add(1),await ou(i),i.Ra.set("Offline"),n||(n=()=>y0(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{de(yo,"Retrying IndexedDB access"),await n(),i.Ea.delete(1),await Nh(i)})}async function oE(i,e){const n=Ge(i);n.asyncQueue.verifyOperationInProgress(),de(yo,"RemoteStore received new credentials");const s=lu(n);n.Ea.add(3),await ou(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Nh(n)}async function a2(i,e){const n=Ge(i);e?(n.Ea.delete(2),await Nh(n)):e||(n.Ea.add(2),await ou(n),n.Ra.set("Unknown"))}function Ao(i){return i.ma||(i.ma=function(n,s,o){const u=Ge(n);return u.sa(),new ZN(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Xo:n2.bind(null,i),t_:i2.bind(null,i),r_:r2.bind(null,i),H_:s2.bind(null,i)}),i.da.push(async e=>{e?(i.ma.B_(),mp(i)?dp(i):i.Ra.set("Unknown")):(await i.ma.stop(),S0(i))})),i.ma}/**
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
 */class pp{constructor(e,n,s,o,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new ns,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,u){const f=Date.now()+s,m=new pp(e,n,f,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ye(ie.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function b0(i,e){if(dr("AsyncQueue",`${e}: ${i}`),wo(i))return new ye(ie.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class ao{static emptySet(e){return new ao(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||Ee.comparator(n.key,s.key):(n,s)=>Ee.comparator(n.key,s.key),this.keyedMap=xl(),this.sortedSet=new Nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ao)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ao;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class lE{constructor(){this.ga=new Nt(Ee.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Ne(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,s)=>{e.push(s)}),e}}class vo{constructor(e,n,s,o,u,f,m,y,p){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=p}static fromInitialDocuments(e,n,s,o,u){const f=[];return n.forEach(m=>{f.push({type:0,doc:m})}),new vo(e,n,ao.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class o2{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class l2{constructor(){this.queries=uE(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=Ge(n),u=o.queries;o.queries=uE(),u.forEach((f,m)=>{for(const y of m.Sa)y.onError(s)})})(this,new ye(ie.ABORTED,"Firestore shutting down"))}}function uE(){return new ra(i=>$T(i),bh)}async function w0(i,e){const n=Ge(i);let s=3;const o=e.query;let u=n.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new o2,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await n.onListen(o,!0);break;case 1:u.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=b0(f,`Initialization of query '${eo(e.query)}' failed`);return void e.onError(m)}n.queries.set(o,u),u.Sa.push(e),e.va(n.onlineState),u.wa&&e.Fa(u.wa)&&gp(n)}async function A0(i,e){const n=Ge(i),s=e.query;let o=3;const u=n.queries.get(s);if(u){const f=u.Sa.indexOf(e);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function u2(i,e){const n=Ge(i);let s=!1;for(const o of e){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.Sa)m.Fa(o)&&(s=!0);f.wa=o}}s&&gp(n)}function c2(i,e,n){const s=Ge(i),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(n);s.queries.delete(e)}function gp(i){i.Ca.forEach(e=>{e.next()})}var Vm,cE;(cE=Vm||(Vm={})).Ma="default",cE.Cache="cache";class C0{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new vo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=vo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Vm.Cache}}/**
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
 */class R0{constructor(e){this.key=e}}class N0{constructor(e){this.key=e}}class h2{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ke(),this.mutatedKeys=Ke(),this.eu=ZT(e),this.tu=new ao(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new lE,o=n?n.tu:this.tu;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const y=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,p=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,b)=>{const w=o.get(E),x=wh(this.query,b)?b:null,z=!!w&&this.mutatedKeys.has(w.key),G=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let X=!1;w&&x?w.data.isEqual(x.data)?z!==G&&(s.track({type:3,doc:x}),X=!0):this.su(w,x)||(s.track({type:2,doc:x}),X=!0,(y&&this.eu(x,y)>0||p&&this.eu(x,p)<0)&&(m=!0)):!w&&x?(s.track({type:0,doc:x}),X=!0):w&&!x&&(s.track({type:1,doc:w}),X=!0,(y||p)&&(m=!0)),X&&(x?(f=f.add(x),u=G?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{tu:f,iu:s,Cs:m,mutatedKeys:u}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const f=e.iu.ya();f.sort((E,b)=>function(x,z){const G=X=>{switch(X){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ne(20277,{Rt:X})}};return G(x)-G(z)}(E.type,b.type)||this.eu(E.doc,b.doc)),this.ou(s),o=o??!1;const m=n&&!o?this._u():[],y=this.Xa.size===0&&this.current&&!o?1:0,p=y!==this.Za;return this.Za=y,f.length!==0||p?{snapshot:new vo(this.query,e.tu,u,f,e.mutatedKeys,y===0,p,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new lE,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ke(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const n=[];return e.forEach(s=>{this.Xa.has(s)||n.push(new N0(s))}),this.Xa.forEach(s=>{e.has(s)||n.push(new R0(s))}),n}cu(e){this.Ya=e.Qs,this.Xa=Ke();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return vo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const yp="SyncEngine";class f2{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class d2{constructor(e){this.key=e,this.hu=!1}}class m2{constructor(e,n,s,o,u,f){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new ra(m=>$T(m),bh),this.Iu=new Map,this.Eu=new Set,this.du=new Nt(Ee.comparator),this.Au=new Map,this.Ru=new op,this.Vu={},this.mu=new Map,this.fu=go.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function p2(i,e,n=!0){const s=P0(i);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await I0(s,e,n,!0),o}async function g2(i,e){const n=P0(i);await I0(n,e,!0,!1)}async function I0(i,e,n,s){const o=await qN(i.localStore,Ni(e)),u=o.targetId,f=i.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await y2(i,e,u,f==="current",o.resumeToken)),i.isPrimaryClient&&n&&E0(i.remoteStore,o),m}async function y2(i,e,n,s,o){i.pu=(b,w,x)=>async function(G,X,ue,re){let ae=X.view.ru(ue);ae.Cs&&(ae=await tE(G.localStore,X.query,!1).then(({documents:O})=>X.view.ru(O,ae)));const Te=re&&re.targetChanges.get(X.targetId),ce=re&&re.targetMismatches.get(X.targetId)!=null,we=X.view.applyChanges(ae,G.isPrimaryClient,Te,ce);return fE(G,X.targetId,we.au),we.snapshot}(i,b,w,x);const u=await tE(i.localStore,e,!0),f=new h2(e,u.Qs),m=f.ru(u.documents),y=au.createSynthesizedTargetChangeForCurrentChange(n,s&&i.onlineState!=="Offline",o),p=f.applyChanges(m,i.isPrimaryClient,y);fE(i,n,p.au);const E=new f2(e,n,f);return i.Tu.set(e,E),i.Iu.has(n)?i.Iu.get(n).push(e):i.Iu.set(n,[e]),p.snapshot}async function v2(i,e,n){const s=Ge(i),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter(f=>!bh(f,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Pm(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&hp(s.remoteStore,o.targetId),xm(s,o.targetId)}).catch(vh)):(xm(s,o.targetId),await Pm(s.localStore,o.targetId,!0))}async function _2(i,e){const n=Ge(i),s=n.Tu.get(e),o=n.Iu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),hp(n.remoteStore,s.targetId))}async function D0(i,e){const n=Ge(i);try{const s=await jN(n.localStore,e);e.targetChanges.forEach((o,u)=>{const f=n.Au.get(u);f&&(Et(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?Et(f.hu,14607):o.removedDocuments.size>0&&(Et(f.hu,42227),f.hu=!1))}),await M0(n,s,e)}catch(s){await vh(s)}}function hE(i,e,n){const s=Ge(i);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Tu.forEach((u,f)=>{const m=f.view.va(e);m.snapshot&&o.push(m.snapshot)}),function(f,m){const y=Ge(f);y.onlineState=m;let p=!1;y.queries.forEach((E,b)=>{for(const w of b.Sa)w.va(m)&&(p=!0)}),p&&gp(y)}(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function E2(i,e,n){const s=Ge(i);s.sharedClientState.updateQueryState(e,"rejected",n);const o=s.Au.get(e),u=o&&o.key;if(u){let f=new Nt(Ee.comparator);f=f.insert(u,mn.newNoDocument(u,Re.min()));const m=Ke().add(u),y=new Rh(Re.min(),new Map,new Nt(je),f,m);await D0(s,y),s.du=s.du.remove(u),s.Au.delete(e),vp(s)}else await Pm(s.localStore,e,!1).then(()=>xm(s,e,n)).catch(vh)}function xm(i,e,n=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Iu.get(e))i.Tu.delete(s),n&&i.Pu.yu(s,n);i.Iu.delete(e),i.isPrimaryClient&&i.Ru.jr(e).forEach(s=>{i.Ru.containsKey(s)||O0(i,s)})}function O0(i,e){i.Eu.delete(e.path.canonicalString());const n=i.du.get(e);n!==null&&(hp(i.remoteStore,n),i.du=i.du.remove(e),i.Au.delete(n),vp(i))}function fE(i,e,n){for(const s of n)s instanceof R0?(i.Ru.addReference(s.key,e),T2(i,s)):s instanceof N0?(de(yp,"Document no longer in limbo: "+s.key),i.Ru.removeReference(s.key,e),i.Ru.containsKey(s.key)||O0(i,s.key)):Ne(19791,{wu:s})}function T2(i,e){const n=e.key,s=n.path.canonicalString();i.du.get(n)||i.Eu.has(s)||(de(yp,"New document in limbo: "+n),i.Eu.add(s),vp(i))}function vp(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const n=new Ee(ft.fromString(e)),s=i.fu.next();i.Au.set(s,new d2(n)),i.du=i.du.insert(n,s),E0(i.remoteStore,new Wr(Ni(ip(n.path)),s,"TargetPurposeLimboResolution",_h.ce))}}async function M0(i,e,n){const s=Ge(i),o=[],u=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach((m,y)=>{f.push(s.pu(y,e,n).then(p=>{var E;if((p||n)&&s.isPrimaryClient){const b=p?!p.fromCache:(E=n==null?void 0:n.targetChanges.get(y.targetId))==null?void 0:E.current;s.sharedClientState.updateQueryState(y.targetId,b?"current":"not-current")}if(p){o.push(p);const b=up.As(y.targetId,p);u.push(b)}}))}),await Promise.all(f),s.Pu.H_(o),await async function(y,p){const E=Ge(y);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>J.forEach(p,w=>J.forEach(w.Es,x=>E.persistence.referenceDelegate.addReference(b,w.targetId,x)).next(()=>J.forEach(w.ds,x=>E.persistence.referenceDelegate.removeReference(b,w.targetId,x)))))}catch(b){if(!wo(b))throw b;de(cp,"Failed to update sequence numbers: "+b)}for(const b of p){const w=b.targetId;if(!b.fromCache){const x=E.Ms.get(w),z=x.snapshotVersion,G=x.withLastLimboFreeSnapshotVersion(z);E.Ms=E.Ms.insert(w,G)}}}(s.localStore,u))}async function S2(i,e){const n=Ge(i);if(!n.currentUser.isEqual(e)){de(yp,"User change. New user:",e.toKey());const s=await g0(n.localStore,e);n.currentUser=e,function(u,f){u.mu.forEach(m=>{m.forEach(y=>{y.reject(new ye(ie.CANCELLED,f))})}),u.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await M0(n,s.Ls)}}function b2(i,e){const n=Ge(i),s=n.Au.get(e);if(s&&s.hu)return Ke().add(s.key);{let o=Ke();const u=n.Iu.get(e);if(!u)return o;for(const f of u){const m=n.Tu.get(f);o=o.unionWith(m.view.nu)}return o}}function P0(i){const e=Ge(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=D0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=b2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=E2.bind(null,e),e.Pu.H_=u2.bind(null,e.eventManager),e.Pu.yu=c2.bind(null,e.eventManager),e}class sh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=v0(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return zN(this.persistence,new xN,e.initialUser,this.serializer)}Cu(e){return new p0(lp.mi,this.serializer)}Du(e){return new FN}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}sh.provider={build:()=>new sh};class w2 extends sh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Et(this.persistence.referenceDelegate instanceof rh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new TN(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Rn.withCacheSize(this.cacheSizeBytes):Rn.DEFAULT;return new p0(s=>rh.mi(s,n),this.serializer)}}class Lm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>hE(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=S2.bind(null,this.syncEngine),await a2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new l2}()}createDatastore(e){const n=v0(e.databaseInfo.databaseId),s=function(u){return new QN(u)}(e.databaseInfo);return function(u,f,m,y){return new JN(u,f,m,y)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,o,u,f,m){return new t2(s,o,u,f,m)}(this.localStore,this.datastore,e.asyncQueue,n=>hE(this.syncEngine,n,0),function(){return rE.v()?new rE:new YN}())}createSyncEngine(e,n){return function(o,u,f,m,y,p,E){const b=new m2(o,u,f,m,y,p);return E&&(b.gu=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(o){const u=Ge(o);de(yo,"RemoteStore shutting down."),u.Ea.add(5),await ou(u),u.Aa.shutdown(),u.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Lm.provider={build:()=>new Lm};/**
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
 */class k0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):dr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const ds="FirestoreClient";class A2{constructor(e,n,s,o,u){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=dn.UNAUTHENTICATED,this.clientId=Wm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{de(ds,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(de(ds,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ns;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=b0(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function im(i,e){i.asyncQueue.verifyOperationInProgress(),de(ds,"Initializing OfflineComponentProvider");const n=i.configuration;await e.initialize(n);let s=n.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await g0(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function dE(i,e){i.asyncQueue.verifyOperationInProgress();const n=await C2(i);de(ds,"Initializing OnlineComponentProvider"),await e.initialize(n,i.configuration),i.setCredentialChangeListener(s=>oE(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>oE(e.remoteStore,o)),i._onlineComponents=e}async function C2(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){de(ds,"Using user provided OfflineComponentProvider");try{await im(i,i._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(o){return o.name==="FirebaseError"?o.code===ie.FAILED_PRECONDITION||o.code===ie.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;ho("Error using user provided cache. Falling back to memory cache: "+n),await im(i,new sh)}}else de(ds,"Using default OfflineComponentProvider"),await im(i,new w2(void 0));return i._offlineComponents}async function R2(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(de(ds,"Using user provided OnlineComponentProvider"),await dE(i,i._uninitializedComponentsProvider._online)):(de(ds,"Using default OnlineComponentProvider"),await dE(i,new Lm))),i._onlineComponents}async function V0(i){const e=await R2(i),n=e.eventManager;return n.onListen=p2.bind(null,e.syncEngine),n.onUnlisten=v2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=g2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=_2.bind(null,e.syncEngine),n}function N2(i,e,n={}){const s=new ns;return i.asyncQueue.enqueueAndForget(async()=>function(u,f,m,y,p){const E=new k0({next:w=>{E.Nu(),f.enqueueAndForget(()=>A0(u,b));const x=w.docs.has(m);!x&&w.fromCache?p.reject(new ye(ie.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&w.fromCache&&y&&y.source==="server"?p.reject(new ye(ie.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):p.resolve(w)},error:w=>p.reject(w)}),b=new C0(ip(m.path),E,{includeMetadataChanges:!0,qa:!0});return w0(u,b)}(await V0(i),i.asyncQueue,e,n,s)),s.promise}function I2(i,e,n={}){const s=new ns;return i.asyncQueue.enqueueAndForget(async()=>function(u,f,m,y,p){const E=new k0({next:w=>{E.Nu(),f.enqueueAndForget(()=>A0(u,b)),w.fromCache&&y.source==="server"?p.reject(new ye(ie.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(w)},error:w=>p.reject(w)}),b=new C0(m,E,{includeMetadataChanges:!0,qa:!0});return w0(u,b)}(await V0(i),i.asyncQueue,e,n,s)),s.promise}/**
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
 */function x0(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const mE=new Map;/**
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
 */const L0="firestore.googleapis.com",pE=!0;class gE{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ye(ie.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=L0,this.ssl=pE}else this.host=e.host,this.ssl=e.ssl??pE;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=m0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<_N)throw new ye(ie.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}JC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=x0(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ye(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ye(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ye(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ih{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ye(ie.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ye(ie.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gE(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new HC;switch(s.type){case"firstParty":return new XC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ye(ie.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=mE.get(n);s&&(de("ComponentProvider","Removing Datastore"),mE.delete(n),s.terminate())}(this),Promise.resolve()}}function D2(i,e,n,s={}){var p;i=Gl(i,Ih);const o=Eo(e),u=i._getSettings(),f={...u,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${n}`;o&&(ET(`https://${m}`),TT("Firestore",!0)),u.host!==L0&&u.host!==m&&ho("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:m,ssl:o,emulatorOptions:s};if(!Ws(y,f)&&(i._setSettings(y),s.mockUserToken)){let E,b;if(typeof s.mockUserToken=="string")E=s.mockUserToken,b=dn.MOCK_USER;else{E=v1(s.mockUserToken,(p=i._app)==null?void 0:p.options.projectId);const w=s.mockUserToken.sub||s.mockUserToken.user_id;if(!w)throw new ye(ie.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new dn(w)}i._authCredentials=new FC(new xT(E,b))}}/**
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
 */class Dh{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Dh(this.firestore,e,this._query)}}class pn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new is(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pn(this.firestore,e,this._key)}toJSON(){return{type:pn._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(ru(n,pn._jsonSchema))return new pn(e,s||null,new Ee(ft.fromString(n.referencePath)))}}pn._jsonSchemaVersion="firestore/documentReference/1.0",pn._jsonSchema={type:zt("string",pn._jsonSchemaVersion),referencePath:zt("string")};class is extends Dh{constructor(e,n,s){super(e,n,ip(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pn(this.firestore,null,new Ee(e))}withConverter(e){return new is(this.firestore,e,this._path)}}function O2(i,e,...n){if(i=ui(i),LT("collection","path",e),i instanceof Ih){const s=ft.fromString(e,...n);return I_(s),new is(i,null,s)}{if(!(i instanceof pn||i instanceof is))throw new ye(ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(ft.fromString(e,...n));return I_(s),new is(i.firestore,null,s)}}function U0(i,e,...n){if(i=ui(i),arguments.length===1&&(e=Wm.newId()),LT("doc","path",e),i instanceof Ih){const s=ft.fromString(e,...n);return N_(s),new pn(i,null,new Ee(s))}{if(!(i instanceof pn||i instanceof is))throw new ye(ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(ft.fromString(e,...n));return N_(s),new pn(i.firestore,i instanceof is?i.converter:null,new Ee(s))}}/**
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
 */const yE="AsyncQueue";class vE{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new _0(this,"async_queue_retry"),this._c=()=>{const s=nm();s&&de(yE,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=nm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=nm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new ns;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!wo(e))throw e;de(yE,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,dr("INTERNAL UNHANDLED ERROR: ",_E(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const o=pp.createAndSchedule(this,e,n,s,u=>this.hc(u));return this.tc.push(o),o}uc(){this.nc&&Ne(47125,{Pc:_E(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function _E(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class _p extends Ih{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new vE,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new vE(e),this._firestoreClient=void 0,await e}}}function M2(i,e){const n=typeof i=="object"?i:$m(),s=typeof i=="string"?i:Jc,o=To(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=g1("firestore");u&&D2(o,...u)}return o}function z0(i){if(i._terminated)throw new ye(ie.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||P2(i),i._firestoreClient}function P2(i){var s,o,u;const e=i._freezeSettings(),n=function(m,y,p,E){return new dR(m,y,p,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,x0(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)}(i._databaseId,((s=i._app)==null?void 0:s.options.appId)||"",i._persistenceKey,e);i._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new A2(i._authCredentials,i._appCheckCredentials,i._queue,n,i._componentsProvider&&function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}}(i._componentsProvider))}/**
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
 */class Ri{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ri(un.fromBase64String(e))}catch(n){throw new ye(ie.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ri(un.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ri._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ru(e,Ri._jsonSchema))return Ri.fromBase64String(e.bytes)}}Ri._jsonSchemaVersion="firestore/bytes/1.0",Ri._jsonSchema={type:zt("string",Ri._jsonSchemaVersion),bytes:zt("string")};/**
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
 */class j0{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ye(ie.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class rs{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ye(ie.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ye(ie.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return je(this._lat,e._lat)||je(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rs._jsonSchemaVersion}}static fromJSON(e){if(ru(e,rs._jsonSchema))return new rs(e.latitude,e.longitude)}}rs._jsonSchemaVersion="firestore/geoPoint/1.0",rs._jsonSchema={type:zt("string",rs._jsonSchemaVersion),latitude:zt("number"),longitude:zt("number")};/**
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
 */class ss{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ss._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ru(e,ss._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new ss(e.vectorValues);throw new ye(ie.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ss._jsonSchemaVersion="firestore/vectorValue/1.0",ss._jsonSchema={type:zt("string",ss._jsonSchemaVersion),vectorValues:zt("object")};const k2=new RegExp("[~\\*/\\[\\]]");function V2(i,e,n){if(e.search(k2)>=0)throw EE(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i);try{return new j0(...e.split("."))._internalPath}catch{throw EE(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i)}}function EE(i,e,n,s,o){let u=`Function ${e}() called with invalid data`;u+=". ";let f="";return new ye(ie.INVALID_ARGUMENT,u+i+f)}/**
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
 */class B0{constructor(e,n,s,o,u){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new pn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new x2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(q0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class x2 extends B0{data(){return super.data()}}function q0(i,e){return typeof e=="string"?V2(i,e):e instanceof j0?e._internalPath:e._delegate._internalPath}/**
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
 */function L2(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ye(ie.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class U2{convertValue(e,n="none"){switch(hs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(cs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Ne(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return su(e,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(e){var s,o,u;const n=(u=(o=(s=e.fields)==null?void 0:s[bm].arrayValue)==null?void 0:o.values)==null?void 0:u.map(f=>Rt(f.doubleValue));return new ss(n)}convertGeoPoint(e){return new rs(Rt(e.latitude),Rt(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Th(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Kl(e));default:return null}}convertTimestamp(e){const n=us(e);return new Ut(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ft.fromString(e);Et(d0(s),9688,{name:e});const o=new Ql(s.get(1),s.get(3)),u=new Ee(s.popFirst(5));return o.isEqual(n)||dr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}class Ul{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zs extends B0{constructor(e,n,s,o,u,f){super(e,n,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Yc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(q0("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ye(ie.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Zs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Zs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Zs._jsonSchema={type:zt("string",Zs._jsonSchemaVersion),bundleSource:zt("string","DocumentSnapshot"),bundleName:zt("string"),bundle:zt("string")};class Yc extends Zs{data(e={}){return super.data(e)}}class oo{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Ul(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Yc(this._firestore,this._userDataWriter,s.key,s,new Ul(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ye(ie.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(m=>{const y=new Yc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ul(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const y=new Yc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ul(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let p=-1,E=-1;return m.type!==0&&(p=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),E=f.indexOf(m.doc.key)),{type:z2(m.type),doc:y,oldIndex:p,newIndex:E}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ye(ie.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=oo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Wm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function z2(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ne(61501,{type:i})}}/**
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
 */function H0(i){i=Gl(i,pn);const e=Gl(i.firestore,_p);return N2(z0(e),i._key).then(n=>B2(e,i,n))}oo._jsonSchemaVersion="firestore/querySnapshot/1.0",oo._jsonSchema={type:zt("string",oo._jsonSchemaVersion),bundleSource:zt("string","QuerySnapshot"),bundleName:zt("string"),bundle:zt("string")};class F0 extends U2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ri(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new pn(this.firestore,null,n)}}function j2(i){i=Gl(i,Dh);const e=Gl(i.firestore,_p),n=z0(e),s=new F0(e);return L2(i._query),I2(n,i._query).then(o=>new oo(e,s,i,o))}function B2(i,e,n){const s=n.docs.get(e._key),o=new F0(i);return new Zs(i,o,e._key,s,new Ul(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(o){bo=o})(So),Oi(new oi("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new _p(new YC(s.getProvider("auth-internal")),new KC(f,s.getProvider("app-check-internal")),function(p,E){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new ye(ie.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ql(p.options.projectId,E)}(f,o),f);return u={useFetchStreams:n,...u},m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),Zn(w_,A_,e),Zn(w_,A_,"esm2020")})();var q2="firebase",H2="12.1.0";/**
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
 */Zn(q2,H2,"app");function Y0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const F2=Y0,G0=new ia("auth","Firebase",Y0());/**
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
 */const ah=new Km("@firebase/auth");function Y2(i,...e){ah.logLevel<=ze.WARN&&ah.warn(`Auth (${So}): ${i}`,...e)}function Gc(i,...e){ah.logLevel<=ze.ERROR&&ah.error(`Auth (${So}): ${i}`,...e)}/**
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
 */function li(i,...e){throw Ep(i,...e)}function Ii(i,...e){return Ep(i,...e)}function X0(i,e,n){const s={...F2(),[e]:n};return new ia("auth","Firebase",s).create(e,{appName:i.name})}function as(i){return X0(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ep(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return G0.create(i,...e)}function _e(i,e,...n){if(!i)throw Ep(e,...n)}function ur(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Gc(e),new Error(e)}function mr(i,e){i||ur(e)}/**
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
 */function oh(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function G2(){return TE()==="http:"||TE()==="https:"}function TE(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
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
 */function X2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(G2()||w1()||"connection"in navigator)?navigator.onLine:!0}function K2(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class uu{constructor(e,n){this.shortDelay=e,this.longDelay=n,mr(n>e,"Short delay should be less than long delay!"),this.isMobile=T1()||A1()}get(){return X2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tp(i,e){mr(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class K0{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ur("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ur("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ur("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Q2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const $2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Z2=new uu(3e4,6e4);function gs(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function pr(i,e,n,s,o={}){return Q0(i,o,async()=>{let u={},f={};s&&(e==="GET"?f=s:u={body:JSON.stringify(s)});const m=iu({key:i.config.apiKey,...f}).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const p={method:e,headers:y,...u};return b1()||(p.referrerPolicy="no-referrer"),i.emulatorConfig&&Eo(i.emulatorConfig.host)&&(p.credentials="include"),K0.fetch()(await $0(i,i.config.apiHost,n,m),p)})}async function Q0(i,e,n){i._canInitEmulator=!1;const s={...Q2,...e};try{const o=new J2(i),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw jc(i,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[y,p]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw jc(i,"credential-already-in-use",f);if(y==="EMAIL_EXISTS")throw jc(i,"email-already-in-use",f);if(y==="USER_DISABLED")throw jc(i,"user-disabled",f);const E=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw X0(i,E,p);li(i,E)}}catch(o){if(o instanceof ki)throw o;li(i,"network-request-failed",{message:String(o)})}}async function Oh(i,e,n,s,o={}){const u=await pr(i,e,n,s,o);return"mfaPendingCredential"in u&&li(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function $0(i,e,n,s){const o=`${e}${n}?${s}`,u=i,f=u.config.emulator?Tp(i.config,o):`${i.config.apiScheme}://${o}`;return $2.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function W2(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class J2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ii(this.auth,"network-request-failed")),Z2.get())})}}function jc(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Ii(i,e,s);return o.customData._tokenResponse=n,o}function SE(i){return i!==void 0&&i.enterprise!==void 0}class eI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return W2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function tI(i,e){return pr(i,"GET","/v2/recaptchaConfig",gs(i,e))}/**
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
 */async function nI(i,e){return pr(i,"POST","/v1/accounts:delete",e)}async function lh(i,e){return pr(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fl(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iI(i,e=!1){const n=ui(i),s=await n.getIdToken(e),o=Sp(s);_e(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Fl(rm(o.auth_time)),issuedAtTime:Fl(rm(o.iat)),expirationTime:Fl(rm(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function rm(i){return Number(i)*1e3}function Sp(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return Gc("JWT malformed, contained fewer than 3 sections"),null;try{const o=gT(n);return o?JSON.parse(o):(Gc("Failed to decode base64 JWT payload"),null)}catch(o){return Gc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function bE(i){const e=Sp(i);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zl(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ki&&rI(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function rI({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class sI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Um{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fl(this.lastLoginAt),this.creationTime=Fl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function uh(i){var b;const e=i.auth,n=await i.getIdToken(),s=await Zl(i,lh(e,{idToken:n}));_e(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const u=(b=o.providerUserInfo)!=null&&b.length?Z0(o.providerUserInfo):[],f=oI(i.providerData,u),m=i.isAnonymous,y=!(i.email&&o.passwordHash)&&!(f!=null&&f.length),p=m?y:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new Um(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(i,E)}async function aI(i){const e=ui(i);await uh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oI(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Z0(i){return i.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function lI(i,e){const n=await Q0(i,{},async()=>{const s=iu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,f=await $0(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&Eo(i.emulatorConfig.host)&&(y.credentials="include"),K0.fetch()(f,y)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function uI(i,e){return pr(i,"POST","/v2/accounts:revokeToken",gs(i,e))}/**
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
 */class lo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const n=bE(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await lI(e,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new lo;return s&&(_e(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(_e(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new lo,this.toJSON())}_performRefresh(){return ur("not implemented")}}/**
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
 */function Gr(i,e){_e(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class ai{constructor({uid:e,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new sI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Um(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Zl(this,this.stsTokenManager.getToken(this.auth,e));return _e(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iI(this,e)}reload(){return aI(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ai({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await uh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(si(this.auth.app))return Promise.reject(as(this.auth));const e=await this.getIdToken();return await Zl(this,nI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,o=n.email??void 0,u=n.phoneNumber??void 0,f=n.photoURL??void 0,m=n.tenantId??void 0,y=n._redirectEventId??void 0,p=n.createdAt??void 0,E=n.lastLoginAt??void 0,{uid:b,emailVerified:w,isAnonymous:x,providerData:z,stsTokenManager:G}=n;_e(b&&G,e,"internal-error");const X=lo.fromJSON(this.name,G);_e(typeof b=="string",e,"internal-error"),Gr(s,e.name),Gr(o,e.name),_e(typeof w=="boolean",e,"internal-error"),_e(typeof x=="boolean",e,"internal-error"),Gr(u,e.name),Gr(f,e.name),Gr(m,e.name),Gr(y,e.name),Gr(p,e.name),Gr(E,e.name);const ue=new ai({uid:b,auth:e,email:o,emailVerified:w,displayName:s,isAnonymous:x,photoURL:f,phoneNumber:u,tenantId:m,stsTokenManager:X,createdAt:p,lastLoginAt:E});return z&&Array.isArray(z)&&(ue.providerData=z.map(re=>({...re}))),y&&(ue._redirectEventId=y),ue}static async _fromIdTokenResponse(e,n,s=!1){const o=new lo;o.updateFromServerResponse(n);const u=new ai({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await uh(u),u}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];_e(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Z0(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new lo;m.updateFromIdToken(s);const y=new ai({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:f}),p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Um(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,p),y}}/**
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
 */const wE=new Map;function cr(i){mr(i instanceof Function,"Expected a class definition");let e=wE.get(i);return e?(mr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,wE.set(i,e),e)}/**
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
 */class W0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}W0.type="NONE";const AE=W0;/**
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
 */function Xc(i,e,n){return`firebase:${i}:${e}:${n}`}class uo{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Xc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Xc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await lh(this.auth,{idToken:e}).catch(()=>{});return n?ai._fromGetAccountInfoResponse(this.auth,n,e):null}return ai._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new uo(cr(AE),e,s);const o=(await Promise.all(n.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let u=o[0]||cr(AE);const f=Xc(s,e.config.apiKey,e.name);let m=null;for(const p of n)try{const E=await p._get(f);if(E){let b;if(typeof E=="string"){const w=await lh(e,{idToken:E}).catch(()=>{});if(!w)break;b=await ai._fromGetAccountInfoResponse(e,w,E)}else b=ai._fromJSON(e,E);p!==u&&(m=b),u=p;break}}catch{}const y=o.filter(p=>p._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new uo(u,e,s):(u=y[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async p=>{if(p!==u)try{await p._remove(f)}catch{}})),new uo(u,e,s))}}/**
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
 */function CE(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(J0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rS(e))return"Blackberry";if(sS(e))return"Webos";if(eS(e))return"Safari";if((e.includes("chrome/")||tS(e))&&!e.includes("edge/"))return"Chrome";if(iS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function J0(i=gn()){return/firefox\//i.test(i)}function eS(i=gn()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tS(i=gn()){return/crios\//i.test(i)}function nS(i=gn()){return/iemobile/i.test(i)}function iS(i=gn()){return/android/i.test(i)}function rS(i=gn()){return/blackberry/i.test(i)}function sS(i=gn()){return/webos/i.test(i)}function bp(i=gn()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function cI(i=gn()){var e;return bp(i)&&!!((e=window.navigator)!=null&&e.standalone)}function hI(){return C1()&&document.documentMode===10}function aS(i=gn()){return bp(i)||iS(i)||sS(i)||rS(i)||/windows phone/i.test(i)||nS(i)}/**
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
 */function oS(i,e=[]){let n;switch(i){case"Browser":n=CE(gn());break;case"Worker":n=`${CE(gn())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${So}/${s}`}/**
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
 */class fI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((f,m)=>{try{const y=e(u);f(y)}catch(y){m(y)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function dI(i,e={}){return pr(i,"GET","/v2/passwordPolicy",gs(i,e))}/**
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
 */const mI=6;class pI{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??mI,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class gI{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new RE(this),this.idTokenSubscription=new RE(this),this.beforeStateQueue=new fI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=G0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cr(n)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await uo.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await lh(this,{idToken:e}),s=await ai._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(si(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,y=await this.tryRedirectSignIn(e);(!f||f===m)&&(y!=null&&y.user)&&(s=y.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(f){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await uh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=K2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(si(this.app))return Promise.reject(as(this));const n=e?ui(e):null;return n&&_e(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return si(this.app)?Promise.reject(as(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return si(this.app)?Promise.reject(as(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(cr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dI(this),n=new pI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ia("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await uI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cr(e)||this._popupRedirectResolver;_e(n,this,"argument-error"),this.redirectPersistenceManager=await uo.create(this,[cr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const y=e.addObserver(n,s,o);return()=>{f=!0,y()}}else{const y=e.addObserver(n);return()=>{f=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=oS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(si(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Y2(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Co(i){return ui(i)}class RE{constructor(e){this.auth=e,this.observer=null,this.addObserver=P1(n=>this.observer=n)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Mh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yI(i){Mh=i}function lS(i){return Mh.loadJS(i)}function vI(){return Mh.recaptchaEnterpriseScript}function _I(){return Mh.gapiScript}function EI(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class TI{constructor(){this.enterprise=new SI}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class SI{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const bI="recaptcha-enterprise",uS="NO_RECAPTCHA";class wI{constructor(e){this.type=bI,this.auth=Co(e)}async verify(e="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{tI(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const p=new eI(y);return u.tenantId==null?u._agentRecaptchaConfig=p:u._tenantRecaptchaConfigs[u.tenantId]=p,f(p.siteKey)}}).catch(y=>{m(y)})})}function o(u,f,m){const y=window.grecaptcha;SE(y)?y.enterprise.ready(()=>{y.enterprise.execute(u,{action:e}).then(p=>{f(p)}).catch(()=>{f(uS)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new TI().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!n&&SE(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let y=vI();y.length!==0&&(y+=m),lS(y).then(()=>{o(m,u,f)}).catch(p=>{f(p)})}}).catch(m=>{f(m)})})}}async function NE(i,e,n,s=!1,o=!1){const u=new wI(i);let f;if(o)f=uS;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const m={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const y=m.phoneEnrollmentInfo.phoneNumber,p=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const y=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function zm(i,e,n,s,o){var u;if((u=i._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await NE(i,e,n,n==="getOobCode");return s(i,f)}else return s(i,e).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await NE(i,e,n,n==="getOobCode");return s(i,m)}else return Promise.reject(f)})}/**
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
 */function AI(i,e){const n=To(i,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(Ws(u,e??{}))return o;li(o,"already-initialized")}return n.initialize({options:e})}function CI(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(cr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function RI(i,e,n){const s=Co(i);_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=cS(e),{host:f,port:m}=NI(e),y=m===null?"":`:${m}`,p={url:`${u}//${f}${y}/`},E=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){_e(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),_e(Ws(p,s.config.emulator)&&Ws(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=p,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,Eo(f)?(ET(`${u}//${f}${y}`),TT("Auth",!0)):II()}function cS(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function NI(i){const e=cS(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:IE(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:IE(f)}}}function IE(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function II(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class wp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ur("not implemented")}_getIdTokenResponse(e){return ur("not implemented")}_linkToIdToken(e,n){return ur("not implemented")}_getReauthenticationResolver(e){return ur("not implemented")}}async function DI(i,e){return pr(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function OI(i,e){return Oh(i,"POST","/v1/accounts:signInWithPassword",gs(i,e))}async function MI(i,e){return pr(i,"POST","/v1/accounts:sendOobCode",gs(i,e))}async function PI(i,e){return MI(i,e)}/**
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
 */async function kI(i,e){return Oh(i,"POST","/v1/accounts:signInWithEmailLink",gs(i,e))}async function VI(i,e){return Oh(i,"POST","/v1/accounts:signInWithEmailLink",gs(i,e))}/**
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
 */class Wl extends wp{constructor(e,n,s,o=null){super("password",s),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new Wl(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Wl(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zm(e,n,"signInWithPassword",OI);case"emailLink":return kI(e,{email:this._email,oobCode:this._password});default:li(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zm(e,s,"signUpPassword",DI);case"emailLink":return VI(e,{idToken:n,email:this._email,oobCode:this._password});default:li(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function co(i,e){return Oh(i,"POST","/v1/accounts:signInWithIdp",gs(i,e))}/**
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
 */const xI="http://localhost";class ea extends wp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ea(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):li("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=n;if(!s||!o)return null;const f=new ea(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return co(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,co(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,co(e,n)}buildRequest(){const e={requestUri:xI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=iu(n)}return e}}/**
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
 */function LI(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UI(i){const e=Pl(kl(i)).link,n=e?Pl(kl(e)).deep_link_id:null,s=Pl(kl(i)).deep_link_id;return(s?Pl(kl(s)).link:null)||s||n||e||i}class Ph{constructor(e){const n=Pl(kl(e)),s=n.apiKey??null,o=n.oobCode??null,u=LI(n.mode??null);_e(s&&o&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=o,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=UI(e);try{return new Ph(n)}catch{return null}}}/**
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
 */class Ro{constructor(){this.providerId=Ro.PROVIDER_ID}static credential(e,n){return Wl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ph.parseLink(n);return _e(s,"argument-error"),Wl._fromEmailAndCode(e,s.code,s.tenantId)}}Ro.PROVIDER_ID="password";Ro.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ro.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class hS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class cu extends hS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Xr extends cu{constructor(){super("facebook.com")}static credential(e){return ea._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xr.credential(e.oauthAccessToken)}catch{return null}}}Xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xr.PROVIDER_ID="facebook.com";/**
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
 */class Kr extends cu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ea._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Kr.credential(n,s)}catch{return null}}}Kr.GOOGLE_SIGN_IN_METHOD="google.com";Kr.PROVIDER_ID="google.com";/**
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
 */class Qr extends cu{constructor(){super("github.com")}static credential(e){return ea._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qr.credential(e.oauthAccessToken)}catch{return null}}}Qr.GITHUB_SIGN_IN_METHOD="github.com";Qr.PROVIDER_ID="github.com";/**
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
 */class $r extends cu{constructor(){super("twitter.com")}static credential(e,n){return ea._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return $r.credential(n,s)}catch{return null}}}$r.TWITTER_SIGN_IN_METHOD="twitter.com";$r.PROVIDER_ID="twitter.com";/**
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
 */class _o{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const u=await ai._fromIdTokenResponse(e,s,o),f=DE(s);return new _o({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=DE(s);return new _o({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function DE(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class ch extends ki{constructor(e,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,ch.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new ch(e,n,s,o)}}function fS(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?ch._fromErrorAndOperation(i,u,e,s):u})}async function zI(i,e,n=!1){const s=await Zl(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return _o._forOperation(i,"link",s)}/**
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
 */async function jI(i,e,n=!1){const{auth:s}=i;if(si(s.app))return Promise.reject(as(s));const o="reauthenticate";try{const u=await Zl(i,fS(s,o,e,i),n);_e(u.idToken,s,"internal-error");const f=Sp(u.idToken);_e(f,s,"internal-error");const{sub:m}=f;return _e(i.uid===m,s,"user-mismatch"),_o._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&li(s,"user-mismatch"),u}}/**
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
 */async function dS(i,e,n=!1){if(si(i.app))return Promise.reject(as(i));const s="signIn",o=await fS(i,s,e),u=await _o._fromIdTokenResponse(i,s,o);return n||await i._updateCurrentUser(u.user),u}async function BI(i,e){return dS(Co(i),e)}/**
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
 */function qI(i,e,n){var s;_e(((s=n.url)==null?void 0:s.length)>0,i,"invalid-continue-uri"),_e(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,i,"invalid-dynamic-link-domain"),_e(typeof n.linkDomain>"u"||n.linkDomain.length>0,i,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(_e(n.iOS.bundleId.length>0,i,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(_e(n.android.packageName.length>0,i,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function HI(i,e,n){const s=Co(i),o={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function u(f,m){_e(m.handleCodeInApp,s,"argument-error"),m&&qI(s,f,m)}u(o,n),await zm(s,o,"getOobCode",PI)}function FI(i,e){const n=Ph.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function YI(i,e,n){if(si(i.app))return Promise.reject(as(i));const s=ui(i),o=Ro.credentialWithLink(e,n||oh());return _e(o._tenantId===(s.tenantId||null),s,"tenant-id-mismatch"),BI(s,o)}function GI(i,e,n,s){return ui(i).onIdTokenChanged(e,n,s)}function XI(i,e,n){return ui(i).beforeAuthStateChanged(e,n)}function KI(i,e,n,s){return ui(i).onAuthStateChanged(e,n,s)}const hh="__sak";/**
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
 */class mS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hh,"1"),this.storage.removeItem(hh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const QI=1e3,$I=10;class pS extends mS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=aS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,m,y)=>{this.notifyListeners(f,y)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);hI()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,$I):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},QI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pS.type="LOCAL";const ZI=pS;/**
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
 */class gS extends mS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gS.type="SESSION";const yS=gS;/**
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
 */function WI(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class kh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new kh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async p=>p(n.origin,u)),y=await WI(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:y})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kh.receivers=[];/**
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
 */function Ap(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
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
 */class JI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,y)=>{const p=Ap("",20);o.port1.start();const E=setTimeout(()=>{y(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(b){const w=b;if(w.data.eventId===p)switch(w.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(w.data.response);break;default:clearTimeout(E),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:p,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function Di(){return window}function eD(i){Di().location.href=i}/**
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
 */function vS(){return typeof Di().WorkerGlobalScope<"u"&&typeof Di().importScripts=="function"}async function tD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nD(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function iD(){return vS()?self:null}/**
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
 */const _S="firebaseLocalStorageDb",rD=1,fh="firebaseLocalStorage",ES="fbase_key";class hu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vh(i,e){return i.transaction([fh],e?"readwrite":"readonly").objectStore(fh)}function sD(){const i=indexedDB.deleteDatabase(_S);return new hu(i).toPromise()}function jm(){const i=indexedDB.open(_S,rD);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(fh,{keyPath:ES})}catch(o){n(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(fh)?e(s):(s.close(),await sD(),e(await jm()))})})}async function OE(i,e,n){const s=Vh(i,!0).put({[ES]:e,value:n});return new hu(s).toPromise()}async function aD(i,e){const n=Vh(i,!1).get(e),s=await new hu(n).toPromise();return s===void 0?null:s.value}function ME(i,e){const n=Vh(i,!0).delete(e);return new hu(n).toPromise()}const oD=800,lD=3;class TS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>lD)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kh._getInstance(iD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await tD(),!this.activeServiceWorker)return;this.sender=new JI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jm();return await OE(e,hh,"1"),await ME(e,hh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>OE(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>aD(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ME(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Vh(o,!1).getAll();return new hu(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}TS.type="LOCAL";const uD=TS;new uu(3e4,6e4);/**
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
 */function cD(i,e){return e?cr(e):(_e(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Cp extends wp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return co(e,this._buildIdpRequest())}_linkToIdToken(e,n){return co(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return co(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hD(i){return dS(i.auth,new Cp(i),i.bypassAuthState)}function fD(i){const{auth:e,user:n}=i;return _e(n,e,"internal-error"),jI(n,new Cp(i),i.bypassAuthState)}async function dD(i){const{auth:e,user:n}=i;return _e(n,e,"internal-error"),zI(n,new Cp(i),i.bypassAuthState)}/**
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
 */class SS{constructor(e,n,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=e;if(f){this.reject(f);return}const y={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hD;case"linkViaPopup":case"linkViaRedirect":return dD;case"reauthViaPopup":case"reauthViaRedirect":return fD;default:li(this.auth,"internal-error")}}resolve(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const mD=new uu(2e3,1e4);class ro extends SS{constructor(e,n,s,o,u){super(e,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,ro.currentPopupAction&&ro.currentPopupAction.cancel(),ro.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){mr(this.filter.length===1,"Popup operations only handle one event");const e=Ap();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ii(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ii(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ro.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ii(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mD.get())};e()}}ro.currentPopupAction=null;/**
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
 */const pD="pendingRedirect",Kc=new Map;class gD extends SS{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Kc.get(this.auth._key());if(!e){try{const s=await yD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Kc.set(this.auth._key(),e)}return this.bypassAuthState||Kc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yD(i,e){const n=ED(e),s=_D(i);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function vD(i,e){Kc.set(i._key(),e)}function _D(i){return cr(i._redirectPersistence)}function ED(i){return Xc(pD,i.config.apiKey,i.name)}async function TD(i,e,n=!1){if(si(i.app))return Promise.reject(as(i));const s=Co(i),o=cD(s,e),f=await new gD(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
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
 */const SD=10*60*1e3;class bD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!bS(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ii(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SD&&this.cachedEventUids.clear(),this.cachedEventUids.has(PE(e))}saveEventToCache(e){this.cachedEventUids.add(PE(e)),this.lastProcessedEventTime=Date.now()}}function PE(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function bS({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wD(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bS(i);default:return!1}}/**
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
 */async function AD(i,e={}){return pr(i,"GET","/v1/projects",e)}/**
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
 */const CD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RD=/^https?/;async function ND(i){if(i.config.emulator)return;const{authorizedDomains:e}=await AD(i);for(const n of e)try{if(ID(n))return}catch{}li(i,"unauthorized-domain")}function ID(i){const e=oh(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const f=new URL(i);return f.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!RD.test(n))return!1;if(CD.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const DD=new uu(3e4,6e4);function kE(){const i=Di().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function OD(i){return new Promise((e,n)=>{var o,u,f;function s(){kE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kE(),n(Ii(i,"network-request-failed"))},timeout:DD.get()})}if((u=(o=Di().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((f=Di().gapi)!=null&&f.load)s();else{const m=EI("iframefcb");return Di()[m]=()=>{gapi.load?s():n(Ii(i,"network-request-failed"))},lS(`${_I()}?onload=${m}`).catch(y=>n(y))}}).catch(e=>{throw Qc=null,e})}let Qc=null;function MD(i){return Qc=Qc||OD(i),Qc}/**
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
 */const PD=new uu(5e3,15e3),kD="__/auth/iframe",VD="emulator/auth/iframe",xD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UD(i){const e=i.config;_e(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?Tp(e,VD):`https://${i.config.authDomain}/${kD}`,s={apiKey:e.apiKey,appName:i.name,v:So},o=LD.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${iu(s).slice(1)}`}async function zD(i){const e=await MD(i),n=Di().gapi;return _e(n,i,"internal-error"),e.open({where:document.body,url:UD(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xD,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=Ii(i,"network-request-failed"),m=Di().setTimeout(()=>{u(f)},PD.get());function y(){Di().clearTimeout(m),o(s)}s.ping(y).then(y,()=>{u(f)})}))}/**
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
 */const jD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BD=500,qD=600,HD="_blank",FD="http://localhost";class VE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YD(i,e,n,s=BD,o=qD){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y={...jD,width:s.toString(),height:o.toString(),top:u,left:f},p=gn().toLowerCase();n&&(m=tS(p)?HD:n),J0(p)&&(e=e||FD,y.scrollbars="yes");const E=Object.entries(y).reduce((w,[x,z])=>`${w}${x}=${z},`,"");if(cI(p)&&m!=="_self")return GD(e||"",m),new VE(null);const b=window.open(e||"",m,E);_e(b,i,"popup-blocked");try{b.focus()}catch{}return new VE(b)}function GD(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const XD="__/auth/handler",KD="emulator/auth/handler",QD=encodeURIComponent("fac");async function xE(i,e,n,s,o,u){_e(i.config.authDomain,i,"auth-domain-config-required"),_e(i.config.apiKey,i,"invalid-api-key");const f={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:So,eventId:o};if(e instanceof hS){e.setDefaultLanguage(i.languageCode),f.providerId=e.providerId||"",M1(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,b]of Object.entries({}))f[E]=b}if(e instanceof cu){const E=e.getScopes().filter(b=>b!=="");E.length>0&&(f.scopes=E.join(","))}i.tenantId&&(f.tid=i.tenantId);const m=f;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const y=await i._getAppCheckToken(),p=y?`#${QD}=${encodeURIComponent(y)}`:"";return`${$D(i)}?${iu(m).slice(1)}${p}`}function $D({config:i}){return i.emulator?Tp(i,KD):`https://${i.authDomain}/${XD}`}/**
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
 */const sm="webStorageSupport";class ZD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yS,this._completeRedirectFn=TD,this._overrideRedirectResult=vD}async _openPopup(e,n,s,o){var f;mr((f=this.eventManagers[e._key()])==null?void 0:f.manager,"_initialize() not called before _openPopup()");const u=await xE(e,n,s,oh(),o);return YD(e,u,Ap())}async _openRedirect(e,n,s,o){await this._originValidation(e);const u=await xE(e,n,s,oh(),o);return eD(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(mr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await zD(e),s=new bD(e);return n.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sm,{type:sm},o=>{var f;const u=(f=o==null?void 0:o[0])==null?void 0:f[sm];u!==void 0&&n(!!u),li(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ND(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return aS()||eS()||bp()}}const WD=ZD;var LE="@firebase/auth",UE="1.11.0";/**
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
 */class JD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function eO(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tO(i){Oi(new oi("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;_e(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:f,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oS(i)},p=new gI(s,o,u,y);return CI(p,n),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Oi(new oi("auth-internal",e=>{const n=Co(e.getProvider("auth").getImmediate());return(s=>new JD(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(LE,UE,eO(i)),Zn(LE,UE,"esm2020")}/**
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
 */const nO=5*60,iO=_T("authIdTokenMaxAge")||nO;let zE=null;const rO=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>iO)return;const o=n==null?void 0:n.token;zE!==o&&(zE=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function wS(i=$m()){const e=To(i,"auth");if(e.isInitialized())return e.getImmediate();const n=AI(i,{popupRedirectResolver:WD,persistence:[uD,ZI,yS]}),s=_T("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=rO(u.toString());XI(n,f,()=>f(n.currentUser)),GI(n,m=>f(m))}}const o=yT("auth");return o&&RI(n,`http://${o}`),n}function sO(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}yI({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Ii("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",sO().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tO("Browser");const AS="@firebase/installations",Rp="0.6.19";/**
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
 */const CS=1e4,RS=`w:${Rp}`,NS="FIS_v2",aO="https://firebaseinstallations.googleapis.com/v1",oO=60*60*1e3,lO="installations",uO="Installations";/**
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
 */const cO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ta=new ia(lO,uO,cO);function IS(i){return i instanceof ki&&i.code.includes("request-failed")}/**
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
 */function DS({projectId:i}){return`${aO}/projects/${i}/installations`}function OS(i){return{token:i.token,requestStatus:2,expiresIn:fO(i.expiresIn),creationTime:Date.now()}}async function MS(i,e){const s=(await e.json()).error;return ta.create("request-failed",{requestName:i,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function PS({apiKey:i}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i})}function hO(i,{refreshToken:e}){const n=PS(i);return n.append("Authorization",dO(e)),n}async function kS(i){const e=await i();return e.status>=500&&e.status<600?i():e}function fO(i){return Number(i.replace("s","000"))}function dO(i){return`${NS} ${i}`}/**
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
 */async function mO({appConfig:i,heartbeatServiceProvider:e},{fid:n}){const s=DS(i),o=PS(i),u=e.getImmediate({optional:!0});if(u){const p=await u.getHeartbeatsHeader();p&&o.append("x-firebase-client",p)}const f={fid:n,authVersion:NS,appId:i.appId,sdkVersion:RS},m={method:"POST",headers:o,body:JSON.stringify(f)},y=await kS(()=>fetch(s,m));if(y.ok){const p=await y.json();return{fid:p.fid||n,registrationStatus:2,refreshToken:p.refreshToken,authToken:OS(p.authToken)}}else throw await MS("Create Installation",y)}/**
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
 */function VS(i){return new Promise(e=>{setTimeout(e,i)})}/**
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
 */function pO(i){return btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const gO=/^[cdef][\w-]{21}$/,Bm="";function yO(){try{const i=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(i),i[0]=112+i[0]%16;const n=vO(i);return gO.test(n)?n:Bm}catch{return Bm}}function vO(i){return pO(i).substr(0,22)}/**
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
 */function xh(i){return`${i.appName}!${i.appId}`}/**
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
 */const xS=new Map;function LS(i,e){const n=xh(i);US(n,e),_O(n,e)}function US(i,e){const n=xS.get(i);if(n)for(const s of n)s(e)}function _O(i,e){const n=EO();n&&n.postMessage({key:i,fid:e}),TO()}let Ks=null;function EO(){return!Ks&&"BroadcastChannel"in self&&(Ks=new BroadcastChannel("[Firebase] FID Change"),Ks.onmessage=i=>{US(i.data.key,i.data.fid)}),Ks}function TO(){xS.size===0&&Ks&&(Ks.close(),Ks=null)}/**
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
 */const SO="firebase-installations-database",bO=1,na="firebase-installations-store";let am=null;function Np(){return am||(am=yh(SO,bO,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(na)}}})),am}async function dh(i,e){const n=xh(i),o=(await Np()).transaction(na,"readwrite"),u=o.objectStore(na),f=await u.get(n);return await u.put(e,n),await o.done,(!f||f.fid!==e.fid)&&LS(i,e.fid),e}async function zS(i){const e=xh(i),s=(await Np()).transaction(na,"readwrite");await s.objectStore(na).delete(e),await s.done}async function Lh(i,e){const n=xh(i),o=(await Np()).transaction(na,"readwrite"),u=o.objectStore(na),f=await u.get(n),m=e(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&LS(i,m.fid),m}/**
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
 */async function Ip(i){let e;const n=await Lh(i.appConfig,s=>{const o=wO(s),u=AO(i,o);return e=u.registrationPromise,u.installationEntry});return n.fid===Bm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function wO(i){const e=i||{fid:yO(),registrationStatus:0};return jS(e)}function AO(i,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ta.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=CO(i,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:RO(i)}:{installationEntry:e}}async function CO(i,e){try{const n=await mO(i,e);return dh(i.appConfig,n)}catch(n){throw IS(n)&&n.customData.serverCode===409?await zS(i.appConfig):await dh(i.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function RO(i){let e=await jE(i.appConfig);for(;e.registrationStatus===1;)await VS(100),e=await jE(i.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Ip(i);return s||n}return e}function jE(i){return Lh(i,e=>{if(!e)throw ta.create("installation-not-found");return jS(e)})}function jS(i){return NO(i)?{fid:i.fid,registrationStatus:0}:i}function NO(i){return i.registrationStatus===1&&i.registrationTime+CS<Date.now()}/**
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
 */async function IO({appConfig:i,heartbeatServiceProvider:e},n){const s=DO(i,n),o=hO(i,n),u=e.getImmediate({optional:!0});if(u){const p=await u.getHeartbeatsHeader();p&&o.append("x-firebase-client",p)}const f={installation:{sdkVersion:RS,appId:i.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},y=await kS(()=>fetch(s,m));if(y.ok){const p=await y.json();return OS(p)}else throw await MS("Generate Auth Token",y)}function DO(i,{fid:e}){return`${DS(i)}/${e}/authTokens:generate`}/**
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
 */async function Dp(i,e=!1){let n;const s=await Lh(i.appConfig,u=>{if(!BS(u))throw ta.create("not-registered");const f=u.authToken;if(!e&&PO(f))return u;if(f.requestStatus===1)return n=OO(i,e),u;{if(!navigator.onLine)throw ta.create("app-offline");const m=VO(u);return n=MO(i,m),m}});return n?await n:s.authToken}async function OO(i,e){let n=await BE(i.appConfig);for(;n.authToken.requestStatus===1;)await VS(100),n=await BE(i.appConfig);const s=n.authToken;return s.requestStatus===0?Dp(i,e):s}function BE(i){return Lh(i,e=>{if(!BS(e))throw ta.create("not-registered");const n=e.authToken;return xO(n)?{...e,authToken:{requestStatus:0}}:e})}async function MO(i,e){try{const n=await IO(i,e),s={...e,authToken:n};return await dh(i.appConfig,s),n}catch(n){if(IS(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await zS(i.appConfig);else{const s={...e,authToken:{requestStatus:0}};await dh(i.appConfig,s)}throw n}}function BS(i){return i!==void 0&&i.registrationStatus===2}function PO(i){return i.requestStatus===2&&!kO(i)}function kO(i){const e=Date.now();return e<i.creationTime||i.creationTime+i.expiresIn<e+oO}function VO(i){const e={requestStatus:1,requestTime:Date.now()};return{...i,authToken:e}}function xO(i){return i.requestStatus===1&&i.requestTime+CS<Date.now()}/**
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
 */async function LO(i){const e=i,{installationEntry:n,registrationPromise:s}=await Ip(e);return s?s.catch(console.error):Dp(e).catch(console.error),n.fid}/**
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
 */async function UO(i,e=!1){const n=i;return await zO(n),(await Dp(n,e)).token}async function zO(i){const{registrationPromise:e}=await Ip(i);e&&await e}/**
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
 */function jO(i){if(!i||!i.options)throw om("App Configuration");if(!i.name)throw om("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!i.options[n])throw om(n);return{appName:i.name,projectId:i.options.projectId,apiKey:i.options.apiKey,appId:i.options.appId}}function om(i){return ta.create("missing-app-config-values",{valueName:i})}/**
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
 */const qS="installations",BO="installations-internal",qO=i=>{const e=i.getProvider("app").getImmediate(),n=jO(e),s=To(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},HO=i=>{const e=i.getProvider("app").getImmediate(),n=To(e,qS).getImmediate();return{getId:()=>LO(n),getToken:o=>UO(n,o)}};function FO(){Oi(new oi(qS,qO,"PUBLIC")),Oi(new oi(BO,HO,"PRIVATE"))}FO();Zn(AS,Rp);Zn(AS,Rp,"esm2020");/**
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
 */const YO="/firebase-messaging-sw.js",GO="/firebase-cloud-messaging-push-scope",HS="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",XO="https://fcmregistrations.googleapis.com/v1",FS="google.c.a.c_id",KO="google.c.a.c_l",QO="google.c.a.ts",$O="google.c.a.e",qE=1e4;var HE;(function(i){i[i.DATA_MESSAGE=1]="DATA_MESSAGE",i[i.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(HE||(HE={}));/**
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
 */var Jl;(function(i){i.PUSH_RECEIVED="push-received",i.NOTIFICATION_CLICKED="notification-clicked"})(Jl||(Jl={}));/**
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
 */function lr(i){const e=new Uint8Array(i);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function ZO(i){const e="=".repeat((4-i.length%4)%4),n=(i+e).replace(/\-/g,"+").replace(/_/g,"/"),s=atob(n),o=new Uint8Array(s.length);for(let u=0;u<s.length;++u)o[u]=s.charCodeAt(u);return o}/**
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
 */const lm="fcm_token_details_db",WO=5,FE="fcm_token_object_Store";async function JO(i){if("databases"in indexedDB&&!(await indexedDB.databases()).map(u=>u.name).includes(lm))return null;let e=null;return(await yh(lm,WO,{upgrade:async(s,o,u,f)=>{if(o<2||!s.objectStoreNames.contains(FE))return;const m=f.objectStore(FE),y=await m.index("fcmSenderId").get(i);if(await m.clear(),!!y){if(o===2){const p=y;if(!p.auth||!p.p256dh||!p.endpoint)return;e={token:p.fcmToken,createTime:p.createTime??Date.now(),subscriptionOptions:{auth:p.auth,p256dh:p.p256dh,endpoint:p.endpoint,swScope:p.swScope,vapidKey:typeof p.vapidKey=="string"?p.vapidKey:lr(p.vapidKey)}}}else if(o===3){const p=y;e={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:lr(p.auth),p256dh:lr(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:lr(p.vapidKey)}}}else if(o===4){const p=y;e={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:lr(p.auth),p256dh:lr(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:lr(p.vapidKey)}}}}}})).close(),await Qd(lm),await Qd("fcm_vapid_details_db"),await Qd("undefined"),eM(e)?e:null}function eM(i){if(!i||!i.subscriptionOptions)return!1;const{subscriptionOptions:e}=i;return typeof i.createTime=="number"&&i.createTime>0&&typeof i.token=="string"&&i.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const tM="firebase-messaging-database",nM=1,eu="firebase-messaging-store";let um=null;function YS(){return um||(um=yh(tM,nM,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(eu)}}})),um}async function iM(i){const e=GS(i),s=await(await YS()).transaction(eu).objectStore(eu).get(e);if(s)return s;{const o=await JO(i.appConfig.senderId);if(o)return await Op(i,o),o}}async function Op(i,e){const n=GS(i),o=(await YS()).transaction(eu,"readwrite");return await o.objectStore(eu).put(e,n),await o.done,e}function GS({appConfig:i}){return i.appId}/**
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
 */const rM={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Sn=new ia("messaging","Messaging",rM);/**
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
 */async function sM(i,e){const n=await Pp(i),s=XS(e),o={method:"POST",headers:n,body:JSON.stringify(s)};let u;try{u=await(await fetch(Mp(i.appConfig),o)).json()}catch(f){throw Sn.create("token-subscribe-failed",{errorInfo:f==null?void 0:f.toString()})}if(u.error){const f=u.error.message;throw Sn.create("token-subscribe-failed",{errorInfo:f})}if(!u.token)throw Sn.create("token-subscribe-no-token");return u.token}async function aM(i,e){const n=await Pp(i),s=XS(e.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(s)};let u;try{u=await(await fetch(`${Mp(i.appConfig)}/${e.token}`,o)).json()}catch(f){throw Sn.create("token-update-failed",{errorInfo:f==null?void 0:f.toString()})}if(u.error){const f=u.error.message;throw Sn.create("token-update-failed",{errorInfo:f})}if(!u.token)throw Sn.create("token-update-no-token");return u.token}async function oM(i,e){const s={method:"DELETE",headers:await Pp(i)};try{const u=await(await fetch(`${Mp(i.appConfig)}/${e}`,s)).json();if(u.error){const f=u.error.message;throw Sn.create("token-unsubscribe-failed",{errorInfo:f})}}catch(o){throw Sn.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function Mp({projectId:i}){return`${XO}/projects/${i}/registrations`}async function Pp({appConfig:i,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function XS({p256dh:i,auth:e,endpoint:n,vapidKey:s}){const o={web:{endpoint:n,auth:e,p256dh:i}};return s!==HS&&(o.web.applicationPubKey=s),o}/**
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
 */const lM=7*24*60*60*1e3;async function uM(i){const e=await hM(i.swRegistration,i.vapidKey),n={vapidKey:i.vapidKey,swScope:i.swRegistration.scope,endpoint:e.endpoint,auth:lr(e.getKey("auth")),p256dh:lr(e.getKey("p256dh"))},s=await iM(i.firebaseDependencies);if(s){if(fM(s.subscriptionOptions,n))return Date.now()>=s.createTime+lM?cM(i,{token:s.token,createTime:Date.now(),subscriptionOptions:n}):s.token;try{await oM(i.firebaseDependencies,s.token)}catch(o){console.warn(o)}return YE(i.firebaseDependencies,n)}else return YE(i.firebaseDependencies,n)}async function cM(i,e){try{const n=await aM(i.firebaseDependencies,e),s={...e,token:n,createTime:Date.now()};return await Op(i.firebaseDependencies,s),n}catch(n){throw n}}async function YE(i,e){const s={token:await sM(i,e),createTime:Date.now(),subscriptionOptions:e};return await Op(i,s),s.token}async function hM(i,e){const n=await i.pushManager.getSubscription();return n||i.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:ZO(e)})}function fM(i,e){const n=e.vapidKey===i.vapidKey,s=e.endpoint===i.endpoint,o=e.auth===i.auth,u=e.p256dh===i.p256dh;return n&&s&&o&&u}/**
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
 */function GE(i){const e={from:i.from,collapseKey:i.collapse_key,messageId:i.fcmMessageId};return dM(e,i),mM(e,i),pM(e,i),e}function dM(i,e){if(!e.notification)return;i.notification={};const n=e.notification.title;n&&(i.notification.title=n);const s=e.notification.body;s&&(i.notification.body=s);const o=e.notification.image;o&&(i.notification.image=o);const u=e.notification.icon;u&&(i.notification.icon=u)}function mM(i,e){e.data&&(i.data=e.data)}function pM(i,e){var o,u,f,m;if(!e.fcmOptions&&!((o=e.notification)!=null&&o.click_action))return;i.fcmOptions={};const n=((u=e.fcmOptions)==null?void 0:u.link)??((f=e.notification)==null?void 0:f.click_action);n&&(i.fcmOptions.link=n);const s=(m=e.fcmOptions)==null?void 0:m.analytics_label;s&&(i.fcmOptions.analyticsLabel=s)}/**
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
 */function gM(i){return typeof i=="object"&&!!i&&FS in i}/**
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
 */function yM(i){if(!i||!i.options)throw cm("App Configuration Object");if(!i.name)throw cm("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=i;for(const s of e)if(!n[s])throw cm(s);return{appName:i.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function cm(i){return Sn.create("missing-app-config-values",{valueName:i})}/**
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
 */class vM{constructor(e,n,s){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=yM(e);this.firebaseDependencies={app:e,appConfig:o,installations:n,analyticsProvider:s}}_delete(){return Promise.resolve()}}/**
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
 */async function _M(i){try{i.swRegistration=await navigator.serviceWorker.register(YO,{scope:GO}),i.swRegistration.update().catch(()=>{}),await EM(i.swRegistration)}catch(e){throw Sn.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function EM(i){return new Promise((e,n)=>{const s=setTimeout(()=>n(new Error(`Service worker not registered after ${qE} ms`)),qE),o=i.installing||i.waiting;i.active?(clearTimeout(s),e()):o?o.onstatechange=u=>{var f;((f=u.target)==null?void 0:f.state)==="activated"&&(o.onstatechange=null,clearTimeout(s),e())}:(clearTimeout(s),n(new Error("No incoming service worker found.")))})}/**
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
 */async function TM(i,e){if(!e&&!i.swRegistration&&await _M(i),!(!e&&i.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Sn.create("invalid-sw-registration");i.swRegistration=e}}/**
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
 */async function SM(i,e){e?i.vapidKey=e:i.vapidKey||(i.vapidKey=HS)}/**
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
 */async function bM(i,e){if(!navigator)throw Sn.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Sn.create("permission-blocked");return await SM(i,e==null?void 0:e.vapidKey),await TM(i,e==null?void 0:e.serviceWorkerRegistration),uM(i)}/**
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
 */async function wM(i,e,n){const s=AM(e);(await i.firebaseDependencies.analyticsProvider.get()).logEvent(s,{message_id:n[FS],message_name:n[KO],message_time:n[QO],message_device_time:Math.floor(Date.now()/1e3)})}function AM(i){switch(i){case Jl.NOTIFICATION_CLICKED:return"notification_open";case Jl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function CM(i,e){const n=e.data;if(!n.isFirebaseMessaging)return;i.onMessageHandler&&n.messageType===Jl.PUSH_RECEIVED&&(typeof i.onMessageHandler=="function"?i.onMessageHandler(GE(n)):i.onMessageHandler.next(GE(n)));const s=n.data;gM(s)&&s[$O]==="1"&&await wM(i,n.messageType,s)}const XE="@firebase/messaging",KE="0.12.23";/**
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
 */const RM=i=>{const e=new vM(i.getProvider("app").getImmediate(),i.getProvider("installations-internal").getImmediate(),i.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>CM(e,n)),e},NM=i=>{const e=i.getProvider("messaging").getImmediate();return{getToken:s=>bM(e,s)}};function IM(){Oi(new oi("messaging",RM,"PUBLIC")),Oi(new oi("messaging-internal",NM,"PRIVATE")),Zn(XE,KE),Zn(XE,KE,"esm2020")}/**
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
 */async function DM(){try{await bT()}catch{return!1}return typeof window<"u"&&ST()&&N1()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function OM(i=$m()){return DM().then(e=>{if(!e)throw Sn.create("unsupported-browser")},e=>{throw Sn.create("indexed-db-unsupported")}),To(ui(i),"messaging").getImmediate()}IM();const MM={apiKey:"AIzaSyCcq7F0omw0ZAwR_Ft5_fR3MBqzbui7Ghw",authDomain:"ribbon-hope-town.firebaseapp.com",projectId:"ribbon-hope-town",storageBucket:"ribbon-hope-town.firebasestorage.app",messagingSenderId:"886523116849",appId:"1:886523116849:web:1bfa88a130bc7b33d7c410",measurementId:"G-41SN0VSCZQ"},Uh=CT(MM),kp=M2(Uh);wS(Uh);OM(Uh);const PM="employees",kM="meetingRooms",VM="facilityRooms",xM="points",LM="allPoints",UM="junctions",zM="allJunctions",Vp=async i=>{try{console.log("getCollection",i);const e=await j2(O2(kp,i)),n=[];return e.forEach(s=>{n.push({id:s.id,...s.data()})}),n}catch(e){throw console.error(`Error getting ${i} collection:`,e),e}},KS=async()=>Vp(PM),QS=async()=>Vp(kM),$S=async()=>Vp(VM),jM=async()=>qM(xM,LM),BM=async()=>HM(UM,zM),qM=async(i,e)=>{const n=U0(kp,i,e),s={};try{const o=await H0(n);if(!o.exists())return{};const u=o.data();return Object.keys(u).forEach(f=>{const m=u[f];m&&Array.isArray(m.default)?s[f]=m.default:s[f]=[]}),s}catch(o){return console.error("Error getting document:",o),{}}},HM=async(i,e)=>{const n=U0(kp,i,e),s={};try{const o=await H0(n);if(!o.exists())return{};const u=o.data();return Object.keys(u).forEach(f=>{const m=u[f];m&&typeof m.default=="object"?s[f]=m.default:s[f]={}}),s}catch(o){return console.error("Error getting document:",o),{}}return s};function qm(i,e,n,s,o){const u=new Map;if(n.forEach(z=>{u.set(z.label,z)}),!u.has(i)||!u.has(e))return null;if(i===e)return{path:[i],segments:[],totalDistance:0};const f=new Map,m=new Map,y=new Set,p=new Set;for(Object.entries(s).forEach(([z,G])=>{p.add(z),G.forEach(X=>p.add(X))}),p.forEach(z=>{f.set(z,z===i?0:1/0),m.set(z,null),y.add(z)});y.size>0;){let z=null,G=1/0;for(const re of y){const ae=f.has(re)?f.get(re):1/0;ae<G&&(G=ae,z=re)}if(!z||G===1/0||(z!==null&&y.delete(z),z===e))break;const X=s[z]||[],ue=u.get(z);ue&&X.forEach(re=>{if(!y.has(re))return;const ae=u.get(re);if(!ae)return;const Te=Math.sqrt(Math.pow(ae.x-ue.x,2)+Math.pow(ae.y-ue.y,2)),ce=(f.get(z)||0)+Te;ce<(f.get(re)||1/0)&&(f.set(re,ce),m.set(re,z))})}const E=[];let b=e;for(;b;)E.unshift(b),b=m.get(b)||null;if(i[0]===e[0]&&(E.length===0||E[0]!==i||E[E.length-1]!==e))return console.warn("Invalid path constructed:",E.length,E[0],i,E[E.length-1],e),null;const w=[];let x=0;for(let z=0;z<E.length-1;z++){const G=u.get(E[z]),X=u.get(E[z+1]);if(G&&X){const ue=Math.atan2(X.y-G.y,X.x-G.x),re=Math.sqrt(Math.pow(X.x-G.x,2)+Math.pow(X.y-G.y,2));w.push({from:G,to:X,angle:ue,floor:o}),x+=re}}return{path:E,segments:w,totalDistance:x}}function FM(i,e,n,s,o,u,f,m){const y=[];f&&y.push("B1-2","B2-2"),m&&y.push("B3");let p=null;for(const E of y){const b=u[n],w=u[s];if(!b||!w)continue;const x=qm(i,E,o,b,n),z=qm(E,e,o,w,s);if(x&&z){const G=x.totalDistance+z.totalDistance;(!p||G<p.totalDistance)&&(p={path:[...x.path,...z.path.slice(1)],segments:[...x.segments,...z.segments],totalDistance:G})}}return p}const YM=({segments:i,pathColor:e="#ff0000",pathWidth:n=2,showArrows:s=!0,arrowColor:o="#ff0000",showLine:u=!1,displayedFloor:f})=>C.jsx(C.Fragment,{children:i.filter(m=>m.floor===f).map((m,y)=>{const{from:p,to:E,angle:b}=m,w=Math.sqrt(Math.pow(E.x-p.x,2)+Math.pow(E.y-p.y,2)),x=(p.x+E.x)/2,z=(p.y+E.y)/2;return C.jsxs("div",{children:[u&&C.jsx("div",{style:{position:"absolute",left:`${p.x}%`,top:`${p.y}%`,width:`${w}%`,height:`${n}px`,backgroundColor:e,transformOrigin:"0 50%",transform:`translateY(-2px) rotate(${b}rad)`,pointerEvents:"none",zIndex:1e3}}),s&&C.jsx("div",{style:{position:"absolute",left:`${x}%`,top:`${z}%`,transform:`translate(-50%, -70%) rotate(${b}rad)`,pointerEvents:"none",zIndex:1001},children:C.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",children:C.jsx("polygon",{points:"0,10 15,5 10,10 15,15",fill:o,stroke:o,strokeWidth:"1"})})})]},y)})});function GM(i){const[e,n]=Lt.useState(null),[s,o]=Lt.useState(!1),[u,f]=Lt.useState({});oe.useEffect(()=>{(async()=>{try{const E=await BM();f(E)}catch(E){console.error("Error loading data:",E)}})()},[]);const m=Lt.useCallback((p,E,b,w,x,z)=>{o(!0);try{let G=null;if(console.log("Debug - start and end",{startFloor:b,targetFloor:w}),b===w){const X=u[b];X&&(G=qm(p,E,i,X,b),console.log("Debug - same floor"))}else console.log("Debug - between floors"),G=FM(p,E,b,w,i,u,x,z);n(G)}catch(G){console.error("Pathfinding error:",G),n(null)}finally{o(!1)}},[i]),y=Lt.useCallback(()=>{n(null)},[]);return{currentPath:e,isPathfinding:s,findAndSetPath:m,clearPath:y}}const XM=({showNavigation:i,isDevModeEnabled:e,targetRoom:n,setTargetRoom:s,myLocation:o,setMyLocation:u,startColor:f,targetColor:m,onClose:y})=>{const[p,E]=oe.useState(!1),[b,w]=oe.useState(!1),[x,z]=oe.useState(!1),G=18,X=18,[ue,re]=oe.useState(!1),ae="#ff0000",Te=2,ce=!1,[we,O]=oe.useState(null),[A,N]=oe.useState(!0),[M,V]=oe.useState(!0),k=n?n.charAt(0):null,R=o?o.charAt(0):null;console.log("debud - floor char",{targetFloorChar:k,myLocationFloorChar:R});const[Ze,Le]=oe.useState({}),[F,te]=oe.useState([]),[fe,ke]=oe.useState([]),[D,Z]=oe.useState([]),[ne,ee]=oe.useState(""),[ge,Ce]=oe.useState([]),[me,Je]=oe.useState(null),Me=oe.useRef(null),[le,Be]=oe.useState(!1);oe.useEffect(()=>{(async()=>{try{const he=await jM(),Ue=await QS(),pt=await $S(),Ie=await KS();Le(he),te(Ue),ke(pt),Z(Ie)}catch(he){console.error("Error loading data:",he)}})()},[]),oe.useEffect(()=>{n?O(k):o&&O(R)},[n,o,k,R]);const et=()=>{O(Q=>Q===k?R:k)};oe.useEffect(()=>{ua()},[n,o]),oe.useEffect(()=>{localStorage.setItem("floorplan-start-color",f)},[f]),oe.useEffect(()=>{localStorage.setItem("floorplan-target-color",m)},[m]),oe.useEffect(()=>{const Q=he=>{Me.current&&!Me.current.contains(he.target)&&Be(!1)};return document.addEventListener("mousedown",Q),()=>{document.removeEventListener("mousedown",Q)}},[Me]),oe.useEffect(()=>{if(n){const Q=D.find(he=>he.seatNumber===n)||F.find(he=>he.roomNumber===n)||fe.find(he=>he.roomNumber===n);Q?(Je(Q),"firstName"in Q?ee(`${Q.firstName} ${Q.lastName} (${Q.seatNumber})`):"Name"in Q?ee(`${Q.Name} (${Q.roomNumber})`):"Type"in Q&&ee(`${Q.Type} (${Q.roomNumber})`)):(Je(null),ee(n))}else Je(null),ee("")},[n,D,F,fe]);const ot=Lt.useMemo(()=>{const Q=[],he=new Set(D.map(Ie=>Ie.seatNumber)),Ue=new Set(F.map(Ie=>Ie.roomNumber)),pt=new Set(fe.map(Ie=>Ie.roomNumber));return Object.values(Ze).flat().forEach(Ie=>{!Ie.label.startsWith("J")&&!Ie.label.startsWith("B")&&!he.has(Ie.label)&&!Ue.has(Ie.label)&&!pt.has(Ie.label)&&Q.push(Ie)}),F.forEach(Ie=>Q.push(Ie)),fe.forEach(Ie=>Q.push(Ie)),D.forEach(Ie=>Q.push(Ie)),Q},[Ze,F,fe,D]);Lt.useEffect(()=>{const Q=ne.trim().toLowerCase();if(!Q){Ce([]);return}const he=ot.filter(Ue=>{if("Name"in Ue&&"roomNumber"in Ue){const pt=Ue.Name.toLowerCase(),Ie=Ue.roomNumber.toLowerCase();return pt.includes(Q)||Ie.includes(Q)}else if("Type"in Ue&&"roomNumber"in Ue){const pt=Ue.Type.toLowerCase(),Ie=Ue.roomNumber.toLowerCase();return pt.includes(Q)||Ie.includes(Q)}else if("firstName"in Ue&&"lastName"in Ue){const pt=Ue.firstName.toLowerCase(),Ie=Ue.lastName.toLowerCase(),Kt=Ue.seatNumber.toLowerCase(),Qt=`${pt} ${Ie}`,ht=`${Ie} ${pt}`;return pt.includes(Q)||Ie.includes(Q)||Kt.includes(Q)||Qt.includes(Q)||ht.includes(Q)}else if("label"in Ue)return Ue.label.toLowerCase().includes(Q);return!1});Ce(he)},[ne,ot]);const Tt=Lt.useMemo(()=>{const Q=new Map;return F.forEach(he=>Q.set(he.roomNumber,he.Name)),fe.forEach(he=>Q.set(he.roomNumber,he.Type)),Q},[F,fe]),jt=we?Ze[we]??[]:[],Ln=jt.filter(Q=>!Q.label.startsWith("J")&&!Q.label.startsWith("B")),Wn=jt.filter(Q=>Q.label.startsWith("J")||Q.label.startsWith("B")),bn=Lt.useMemo(()=>F.filter(Q=>Q.Type==="Meeting"||Q.Type==="Meeting + VC").map(Q=>Q.roomNumber),[F]),No=jt.filter(Q=>bn.includes(Q.label)),gr=Object.values(Ze).flat().filter(Q=>Q.label.startsWith("J")||Q.label.startsWith("B")),{currentPath:dt,isPathfinding:aa,findAndSetPath:Vi,clearPath:yr}=GM(gr),oa=(()=>{switch(we){case"1":return"/floor-plan-app/FloorPlan_1_clear.png";case"2":return"/floor-plan-app/FloorPlan_2_clear.png";case"3":return"/floor-plan-app/FloorPlan_3_clear.png";case"4":return"/floor-plan-app/FloorPlan_4 - Copy.png";default:return"/floor-plan-app/FloorPlan_4 - Copy.png"}})(),mt=Q=>p||Q===o||Q===n,Xe=Q=>Q===o?f:Q===n?m:"red",It=Q=>Q===o?G:Q===n?X:8,Dt=Lt.useCallback((Q,he)=>{if(!he)return null;const Ue=Ze[he]??[],pt=Ue.filter(ht=>ht.label.startsWith("J")||ht.label.startsWith("B")),Ie=Ue.find(ht=>ht.label===Q);if(!Ie)return null;let Kt=null,Qt=1/0;return pt.forEach(ht=>{const Ot=Math.sqrt(Math.pow(ht.x-Ie.x,2)+Math.pow(ht.y-Ie.y,2));Ot<Qt&&(Qt=Ot,Kt=ht.label)}),Kt},[Ze]),la=Lt.useCallback(()=>{if(console.log("Debug - handleFindPath called"),!o||!n)return;const Q=Dt(o,R),he=Dt(n,k);console.log("Debug - Found junctions:",{startJunction:Q,targetJunction:he}),!(!Q||!he||!k||!R)&&Q!==he&&(Vi(he,Q,k,R,A,M),O(R),re(!0))},[o,n,Dt,Vi,R,k,A,M]),ua=Lt.useCallback(()=>{yr(),re(!1)},[yr]),xi=Q=>{ee(Q.target.value),me&&Je(null)},Li=Q=>{Je(Q),"label"in Q?(s(Q.label),ee(Q.label)):"Name"in Q?(s(Q.roomNumber),ee(Q.Name)):"Type"in Q?(s(Q.roomNumber),ee(Q.Type)):"firstName"in Q&&(s(Q.seatNumber),ee(`${Q.firstName} ${Q.lastName}`)),Ce([])},Ui=()=>{Je(null),s(""),ee("")},Nn=ne.trim()&&ge.length>0&&!me&&le;return C.jsx("div",{className:"floor-plan-container",children:C.jsxs("div",{className:"floor-plan-content",children:[C.jsxs("div",{className:"floor-plan-header",children:[C.jsx("div",{className:"floor-plan-header-icon-wrapper",children:C.jsx(Bw,{className:"floor-plan-header-icon"})}),C.jsx("h2",{className:"floor-plan-title",children:"Floor Map"}),y&&C.jsx("button",{onClick:y,className:"floor-plan-close-button","aria-label":"Close floor plan",children:C.jsx(io,{size:20})})]}),C.jsxs("div",{className:"floor-plan-controls",children:[C.jsxs("div",{className:"floor-plan-room-input",ref:Me,children:[C.jsx("label",{className:"floor-plan-label",children:"Target Room"}),C.jsxs("div",{className:"floor-plan-input-wrapper",children:[C.jsx(WE,{className:"floor-plan-search-icon"}),C.jsx("input",{type:"text",placeholder:"Search rooms...",value:me?"Name"in me?`${me.Name} (${me.roomNumber})`:"Type"in me?`${me.Type} (${me.roomNumber})`:"firstName"in me?`${me.firstName} ${me.lastName} (${me.seatNumber})`:me.label:ne,onChange:xi,onFocus:()=>Be(!0),onBlur:()=>setTimeout(()=>Be(!1),100),className:"floor-plan-input"}),(me||ne)&&C.jsx("button",{className:"clear-search-button2",onClick:Ui,"aria-label":"Clear target room selection",children:C.jsx(io,{className:"floor-plan-search-icon"})})]}),Nn&&C.jsx("div",{className:"floor-plan-search-results-container",children:ge.map((Q,he)=>C.jsx("div",{onClick:()=>Li(Q),className:"floor-plan-search-result-item",children:"Name"in Q?C.jsxs(C.Fragment,{children:[C.jsx($c,{size:16}),C.jsxs("span",{children:[Q.Name," (",Q.roomNumber,")"]})]}):"Type"in Q?C.jsxs(C.Fragment,{children:[C.jsx($c,{size:16}),C.jsxs("span",{children:[Q.Type," (",Q.roomNumber,")"]})]}):"firstName"in Q?C.jsxs(C.Fragment,{children:[C.jsx(JE,{size:16}),C.jsxs("span",{children:[Q.firstName," ",Q.lastName," (",Q.seatNumber,")"]})]}):C.jsx("span",{children:Q.label})},he))})]}),C.jsxs("div",{className:"floor-plan-room-input",children:[C.jsx("label",{className:"floor-plan-label",children:"My Location"}),C.jsx("div",{className:"floor-plan-input-wrapper",children:C.jsx("input",{type:"text",placeholder:"e.g., 4N05A",value:o,onChange:Q=>u(Q.target.value.toUpperCase().replace(/\s+/g,"")),className:"floor-plan-input"})})]}),i&&C.jsxs("div",{className:"floor-plan-pathfinding-controls",children:[C.jsxs("button",{onClick:la,disabled:aa||!o||!n,className:"floor-plan-path-button",children:[C.jsx(Yw,{size:16}),aa?"Finding Path...":"Find Path"]}),dt&&C.jsxs("button",{onClick:ua,className:"floor-plan-clear-button",children:[C.jsx(Hw,{size:16}),"Clear Path"]}),R&&k&&R!==k&&C.jsxs("div",{className:"floor-plan-checkbox-group",children:[C.jsxs("label",{className:"floor-plan-checkbox",children:[C.jsx("input",{type:"checkbox",checked:A,onChange:Q=>N(Q.target.checked)}),"Use Stairs"]}),C.jsxs("label",{className:"floor-plan-checkbox",children:[C.jsx("input",{type:"checkbox",checked:M,onChange:Q=>V(Q.target.checked)}),"Use Elevator"]})]})]})]}),C.jsx("div",{className:"floor-plan-legend",children:C.jsx("div",{className:"floor-plan-legend-list"})}),i&&dt&&e&&C.jsxs("div",{className:"floor-plan-path-info",children:[C.jsxs("p",{children:["Path found: ",dt.path.length," junctions"]}),C.jsxs("p",{children:["Route: ",dt.path.join(" → ")]})]}),C.jsx("div",{className:"floor-plan-frame",children:C.jsx(r1,{initialScale:1,centerOnInit:!0,limitToBounds:!1,minScale:.2,maxScale:10,wheel:{step:50},doubleClick:{disabled:!0},children:({resetTransform:Q})=>C.jsxs(C.Fragment,{children:[C.jsx("button",{className:"fit-to-view-button",onClick:()=>Q(),children:"Fit to view"}),R&&k&&R!==k&&C.jsxs("button",{onClick:et,className:"fit-to-view-button",children:["Switch to Floor ",we===k?R:k]}),C.jsx("button",{onClick:()=>z(!x),children:x?"Hide Meeting Rooms":"Show Meeting Rooms"}),e&&C.jsxs(C.Fragment,{children:[C.jsx("button",{onClick:()=>E(!p),children:p?"Hide Points":"Show Points"}),C.jsx("button",{onClick:()=>w(!b),children:b?"Hide Junctions":"Show Junctions"})]}),C.jsx(o1,{children:C.jsxs("div",{className:"floor-plan-image-zommable-content",children:[C.jsx("img",{src:oa,alt:"Floor Plan",className:"floor-plan-image",style:{width:"100%",height:"auto",objectFit:"contain"}}),i&&ue&&dt&&C.jsx(YM,{segments:dt.segments,pathColor:ae,pathWidth:Te,showArrows:!0,showLine:ce,arrowColor:ae,displayedFloor:we}),i&&ue&&dt&&dt.path.length>0&&(()=>{const he=dt.path[0],Ue=dt.path[dt.path.length-1],pt=Wn.find(ht=>ht.label===he),Ie=Wn.find(ht=>ht.label===Ue);let Kt=dt.path.find((ht,Ot)=>!!(ht.startsWith("B")&&Ot>0&&Ot<dt.path.length-1&&dt.path[Ot-1][1]!==dt.path[Ot+1][1]));Kt||(Kt=dt.path.filter(Ot=>Ot.startsWith("B"))[0]);const Qt=Wn.find(ht=>ht.label===Kt);return C.jsxs(C.Fragment,{children:[pt&&C.jsx("div",{style:{position:"absolute",left:`${pt.x}%`,top:`${pt.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:"blue",borderRadius:"5%",width:"6px",height:"6px",pointerEvents:"none",zIndex:999}}),Ie&&C.jsx("div",{style:{position:"absolute",left:`${Ie.x}%`,top:`${Ie.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:"blue",borderRadius:"5%",width:"6px",height:"6px",pointerEvents:"none",zIndex:999}}),Qt&&C.jsx("div",{style:{position:"absolute",left:`${Qt.x}%`,top:`${Qt.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:"green",borderRadius:"5%",width:"6px",height:"6px",pointerEvents:"none",zIndex:999}})]})})(),Ln.map((he,Ue)=>mt(he.label)?C.jsx("div",{className:"point",style:{position:"absolute",left:`${he.x}%`,top:`${he.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:Xe(he.label),borderRadius:"50%",width:`${It(he.label)}px`,height:`${It(he.label)}px`,zIndex:1002},children:C.jsx("span",{className:"tooltip",children:C.jsx("span",{style:{marginTop:`${he.y+100}%`},children:he.label})})},Ue):null),Wn.map((he,Ue)=>b?C.jsx("div",{style:{position:"absolute",left:`${he.x}%`,top:`${he.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:Xe(he.label),borderRadius:"50%",width:`${It(he.label)}px`,height:`${It(he.label)}px`,pointerEvents:"none",zIndex:1002,display:"flex",alignItems:"center",justifyContent:"center",color:"black",fontSize:"10px",textAlign:"center",whiteSpace:"nowrap"},children:C.jsx("span",{style:{marginTop:`${he.y+100}%`},children:he.label})},Ue):null),No.map((he,Ue)=>x?C.jsx("div",{style:{position:"absolute",left:`${he.x}%`,top:`${he.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:Xe(he.label),borderRadius:"50%",width:`${It(he.label)}px`,height:`${It(he.label)}px`,pointerEvents:"none",zIndex:1002,display:"flex",alignItems:"center",justifyContent:"center",color:"black",fontSize:"10px",textAlign:"center",whiteSpace:"nowrap"},children:C.jsx("span",{style:{marginTop:`${he.y+100}%`},children:C.jsx("strong",{children:Tt.get(he.label)?`${Tt.get(he.label)} (${he.label})`:he.label})})},Ue):null)]})})]})})})]})})},KM=({onShowOnMap:i,onSetMyLocation:e,onSetTargetLocation:n})=>{const[s,o]=oe.useState(""),[u,f]=oe.useState(null),[m,y]=oe.useState(null),[p,E]=oe.useState(null),[b,w]=oe.useState("firstName"),[x,z]=oe.useState("asc"),[G,X]=oe.useState(()=>localStorage.getItem("myLocation")||""),[ue,re]=oe.useState(null),[ae,Te]=oe.useState(null),[ce,we]=oe.useState(!1),[O,A]=oe.useState(!1),[N,M]=oe.useState([]),[V,k]=oe.useState([]),[R,Ze]=oe.useState([]);console.log("for removing errors after removing saveLocation option",ue,ae,we,X),oe.useEffect(()=>{(async()=>{try{const Be=await KS(),et=await QS(),ot=await $S();M(Be),k(et),Ze(ot)}catch(Be){console.error("Error loading data:",Be)}})()},[]);const Le=oe.useMemo(()=>{u&&f(null);const le=s.trim().toLowerCase();return le?N.filter(et=>{const ot=et.firstName.toLowerCase(),Tt=et.lastName.toLowerCase(),jt=et.seatNumber.toLowerCase(),Ln=`${ot} ${Tt}`,Wn=`${Tt} ${ot}`;return ot.includes(le)||Tt.includes(le)||jt.includes(le)||Ln.includes(le)||Wn.includes(le)}).sort((et,ot)=>{let Tt,jt;switch(b){case"firstName":Tt=et.firstName.toLowerCase(),jt=ot.firstName.toLowerCase();break;case"lastName":Tt=et.lastName.toLowerCase(),jt=ot.lastName.toLowerCase();break;case"seat":Tt=et.seatNumber.toLowerCase(),jt=ot.seatNumber.toLowerCase();break;default:Tt=et.firstName.toLowerCase(),jt=ot.firstName.toLowerCase()}const Ln=Tt.localeCompare(jt);return x==="asc"?Ln:-Ln}):[]},[s,N,b,x]),F=oe.useMemo(()=>{m&&y(null);const le=s.trim().toLowerCase();return le?V.filter(Be=>{const et=Be.Name.toLowerCase(),ot=Be.roomNumber.toLowerCase();return et.includes(le)||ot.includes(le)}):[]},[s]),te=oe.useMemo(()=>{p&&E(null);const le=s.trim().toLowerCase();return le?R.filter(Be=>{const et=Be.Type.toLowerCase(),ot=Be.roomNumber.toLowerCase();return et.includes(le)||ot.includes(le)}):[]},[s]),fe=le=>{O&&F.length===0&&A(!1),o(le.target.value),console.log("Debug - search value",le.target.value,"xx ",F.length,Le.length,te.length,{showOnlyMeetingRooms:O})},ke=()=>o(""),D=le=>{f(le),y(null),E(null)},Z=le=>{y(le),E(null),f(null)},ne=le=>{y(null),E(le),f(null)},ee=()=>{f(null),E(null),y(null)},ge=le=>{w(le.target.value)},Ce=le=>{z(le.target.value)},me=s.trim()&&(O&&F.length>0||!O&&(Le.length>0||F.length>0||te.length>0))&&!u&&!m&&!p,Je=le=>{const Be=le.target.checked;A(Be)},Me=()=>{console.log("debug - show on map",{searchValue:s,myLocation:G},m==null?void 0:m.roomNumber,p==null?void 0:p.roomNumber);let le="";G&&ce&&(le=G),u!==null?i(u.seatNumber,le):m!=null&&m.roomNumber?i(m.roomNumber,le):p!=null&&p.roomNumber?i(p.roomNumber,le):i("",le)};return C.jsx("div",{className:"seat-finder-container",children:C.jsxs("div",{className:"seat-finder-content",children:[C.jsxs("div",{className:"seat-finder-header",children:[C.jsx("h2",{className:"seat-finder-title",children:"Seat Finder"}),C.jsx("p",{className:"seat-finder-subtitle",children:"Find colleagues and meeting rooms"})]}),C.jsxs("div",{className:"search-section",children:[C.jsxs("div",{className:"search-input-wrapper",children:[C.jsx("div",{className:"search-icon-container",children:C.jsx(WE,{className:"search-icon"})}),C.jsx("input",{type:"text",placeholder:"Search by name, seat, or room...",value:s,onChange:fe,className:"search-input"}),s&&C.jsx("button",{className:"clear-search-button",onClick:ke,"aria-label":"Clear search",children:C.jsx(io,{className:"search-icon"})})]}),u&&C.jsxs("div",{className:"selected-employee-container",children:[C.jsxs("div",{className:"selected-employee-info-wrapper",children:[C.jsxs("div",{className:"selected-employee-details",children:[C.jsx("div",{className:"selected-employee-icon-wrapper",children:C.jsx(JE,{className:"selected-employee-icon"})}),C.jsxs("div",{children:[C.jsxs("div",{className:"selected-employee-name",children:[u.firstName," ",u.lastName]}),C.jsxs("div",{className:"selected-employee-department",children:[u.department," • Seat ",u.seatNumber]})]})]}),C.jsx("button",{onClick:ee,className:"selected-employee-close-button",children:C.jsx(io,{className:"selected-employee-close-icon"})})]}),(u.floor===4||u.floor===3||u.floor===2||u.floor===1)&&C.jsxs("div",{className:"selected-item-actions",children:[C.jsx("button",{className:"map-toggle-button",onClick:Me,children:"Show on Map"}),C.jsx("button",{className:"map-toggle-button",onClick:()=>{e(u.seatNumber),re(u.seatNumber)},children:"Set as Current Location"}),C.jsx("button",{className:"map-toggle-button",onClick:()=>{n(u.seatNumber),Te(u.seatNumber)},children:"Set as Target"})]})]}),m&&C.jsxs("div",{className:"selected-employee-container",children:[C.jsxs("div",{className:"selected-employee-info-wrapper",children:[C.jsxs("div",{className:"selected-employee-details",children:[C.jsx("div",{className:"selected-employee-icon-wrapper",children:C.jsx($c,{className:"selected-employee-icon"})}),C.jsxs("div",{children:[C.jsx("div",{className:"selected-employee-name",children:m.Name}),C.jsxs("div",{className:"selected-employee-department",children:["Room ",m.roomNumber," • Floor ",m.floor," • Wing ",m.wing," • Capacity ",m.capacity," • ",m.Type," Room"]})]})]}),C.jsx("button",{onClick:ee,className:"selected-employee-close-button",children:C.jsx(io,{className:"selected-employee-close-icon"})})]}),(m.floor===4||m.floor===3||m.floor===2||m.floor===1)&&C.jsxs("div",{className:"selected-item-actions",children:[C.jsx("button",{className:"map-toggle-button",onClick:Me,children:"Show on Map"}),C.jsx("button",{className:"map-toggle-button",onClick:()=>{e(m.roomNumber),re(m.roomNumber)},children:"Set as Current Location"}),C.jsx("button",{className:"map-toggle-button",onClick:()=>{n(m.roomNumber),Te(m.roomNumber)},children:"Set as Target"})]})]}),p&&C.jsxs("div",{className:"selected-employee-container",children:[C.jsxs("div",{className:"selected-employee-info-wrapper",children:[C.jsxs("div",{className:"selected-employee-details",children:[C.jsx("div",{className:"selected-employee-icon-wrapper",children:C.jsx($c,{className:"selected-employee-icon"})}),C.jsxs("div",{children:[C.jsx("div",{className:"selected-employee-name",children:p.Type}),C.jsxs("div",{className:"selected-employee-department",children:["Room ",C.jsx("strong",{children:p.roomNumber})," • Floor ",p.floor," • Wing ",p.wing]})]})]}),C.jsx("button",{onClick:ee,className:"selected-employee-close-button",children:C.jsx(io,{className:"selected-employee-close-icon"})})]}),(p.floor===4||p.floor===3||p.floor===2||p.floor===1)&&C.jsxs("div",{className:"selected-item-actions",children:[C.jsx("button",{className:"map-toggle-button",onClick:Me,children:"Show on Map"}),C.jsx("button",{className:"map-toggle-button",onClick:()=>{e(p.roomNumber),re(p.roomNumber)},children:"Set as Current Location"}),C.jsx("button",{className:"map-toggle-button",onClick:()=>n(p.roomNumber),children:"Set as Target"})]})]}),me&&C.jsxs("div",{className:"search-results-container",children:[C.jsxs("div",{className:"search-results-header",children:[C.jsxs("div",{children:[C.jsxs("h4",{className:"search-results-title",children:["Search Results (",Le.length+F.length+te.length,")"]}),(Le.length>0||te.length>0)&&F.length>0&&C.jsx("div",{className:"sort-control",children:C.jsxs("label",{children:[C.jsx("input",{type:"checkbox",checked:O,onChange:Je}),"Only meeting rooms"]})})]}),C.jsxs("div",{className:"sorting-controls",children:[C.jsxs("div",{className:"sort-control",children:[C.jsx("label",{htmlFor:"sort-by",className:"sort-label",children:"Sort by:"}),C.jsxs("select",{id:"sort-by",value:b,onChange:ge,className:"sort-select",children:[C.jsx("option",{value:"firstName",children:"First Name"}),C.jsx("option",{value:"lastName",children:"Last Name"}),C.jsx("option",{value:"seat",children:"Seat"})]})]}),C.jsxs("div",{className:"sort-control",children:[C.jsx("label",{htmlFor:"order-by",className:"sort-label",children:"Order by:"}),C.jsxs("select",{id:"order-by",value:x,onChange:Ce,className:"sort-select",children:[C.jsx("option",{value:"asc",children:"A to Z"}),C.jsx("option",{value:"desc",children:"Z to A"})]})]})]})]}),C.jsxs("div",{className:"search-results-list",children:[!O&&Le.map((le,Be)=>C.jsx("div",{onClick:()=>{D(le)},className:"search-result-item group",children:C.jsxs("div",{className:"search-result-content",children:[C.jsxs("div",{className:"search-result-employee-info",children:[C.jsx("div",{className:"search-result-avatar-wrapper",children:C.jsxs("span",{className:"search-result-avatar-text",children:[le.firstName[0],le.lastName[0]]})}),C.jsxs("div",{children:[C.jsxs("div",{className:"search-result-name",children:[le.firstName," ",le.lastName]}),C.jsx("div",{className:"search-result-department",children:le.department})]})]}),C.jsxs("div",{className:"search-result-location",children:[C.jsxs("div",{className:"search-result-seat",children:[C.jsx(Hd,{className:"search-result-map-pin-icon"}),le.seatNumber]}),C.jsxs("div",{className:"search-result-floor-wing",children:["Floor ",le.floor," • Wing ",le.wing]})]})]})},Be)),F.map((le,Be)=>C.jsx("div",{onClick:()=>Z(le),className:"search-result-item group",children:C.jsxs("div",{className:"search-result-content",children:[C.jsxs("div",{className:"search-result-employee-info",children:[C.jsx("div",{className:"search-result-avatar-wrapper",children:C.jsx("span",{className:"search-result-avatar-text",children:le.Name[0]})}),C.jsxs("div",{children:[C.jsx("div",{className:"search-result-name",children:le.Name}),C.jsxs("div",{className:"search-result-department",children:[le.Type," Room • Capacity ",le.capacity]})]})]}),C.jsxs("div",{className:"search-result-location",children:[C.jsxs("div",{className:"search-result-seat",children:[C.jsx(Hd,{className:"search-result-map-pin-icon"}),le.roomNumber]}),C.jsxs("div",{className:"search-result-floor-wing",children:["Floor ",le.floor," • Wing ",le.wing]})]})]})},Be)),!O&&te.map((le,Be)=>C.jsx("div",{onClick:()=>ne(le),className:"search-result-item group",children:C.jsxs("div",{className:"search-result-content",children:[C.jsxs("div",{className:"search-result-employee-info",children:[C.jsx("div",{className:"search-result-avatar-wrapper",children:C.jsx("span",{className:"search-result-avatar-text",children:le.Type[0]})}),C.jsx("div",{children:C.jsx("div",{className:"search-result-name",children:le.Type})})]}),C.jsxs("div",{className:"search-result-location",children:[C.jsxs("div",{className:"search-result-seat",children:[C.jsx(Hd,{className:"search-result-map-pin-icon"}),le.roomNumber]}),C.jsxs("div",{className:"search-result-floor-wing",children:["Floor ",le.floor," • Wing ",le.wing]})]})]})},Be))]})]}),s.trim()&&Le.length===0&&F.length===0&&te.length===0&&!u&&!m&&!p&&C.jsxs("div",{className:"no-employees-found-container",children:[C.jsx("div",{className:"no-employees-found-message",children:"No results found matching your search"}),C.jsx("div",{className:"no-employees-found-tip",children:"Try searching by name or seat number"})]})]})]})})},QM="1.1.0",$M="16/09/2025",QE={version:QM,date:$M},ZS=oe.createContext(void 0),ZM=({children:i})=>{const[e,n]=oe.useState(null),[s,o]=oe.useState(!0),[u,f]=oe.useState(null),m=wS(Uh),y={url:"https://yshauser.github.io/floor-plan-app/",handleCodeInApp:!0};oe.useEffect(()=>{const b=KI(m,w=>{n(w),o(!1)});if(FI(m,window.location.href)){let w=localStorage.getItem("emailForSignIn");w||(w=window.prompt("Please provide your email for confirmation")),w?(o(!0),YI(m,w,window.location.href).then(x=>{n(x.user),localStorage.removeItem("emailForSignIn"),f(null)}).catch(x=>{console.error("Error signing in with email link:",x),f(x.message),n(null)}).finally(()=>{o(!1),window.history.replaceState({},document.title,window.location.pathname)})):(f("Email not provided for sign-in link."),o(!1))}else o(!1);return()=>b()},[m]);const p=async b=>{o(!0),f(null);try{await HI(m,b,y),localStorage.setItem("emailForSignIn",b),alert("A sign-in link has been sent to your email address. Please check your inbox.")}catch(w){console.error("Error sending sign-in link:",w),f(w.message)}finally{o(!1)}},E=async()=>{o(!0),f(null);try{await m.signOut(),n(null),localStorage.removeItem("emailForSignIn")}catch(b){console.error("Error logging out:",b),f(b.message)}finally{o(!1)}};return C.jsx(ZS.Provider,{value:{user:e,login:p,logout:E,loading:s,error:u},children:i})},xp=()=>{const i=oe.useContext(ZS);if(i===void 0)throw new Error("useAuth must be used within an AuthProvider");return i},WM=({setStartColor:i,setTargetColor:e,showNavigation:n,setShowNavigation:s,isDevModeEnabled:o,setDevModeEnabled:u,userEmail:f})=>{const{logout:m}=xp(),[y,p]=oe.useState(!1),[E,b]=oe.useState(!1),[w,x]=oe.useState(!1),[z,G]=oe.useState(!1),X=oe.useRef(null),ue=()=>p(!y),re=()=>{x(ce=>!ce)},ae=ce=>{X.current&&!X.current.contains(ce.target)&&p(!1)},Te=()=>{localStorage.removeItem("floorplan-start-color"),localStorage.removeItem("floorplan-target-color"),i&&i("#0000ff"),e&&e("#000000"),p(!1)};return oe.useEffect(()=>(document.addEventListener("mousedown",ae),()=>document.removeEventListener("mousedown",ae)),[]),C.jsxs("header",{className:"header",children:[C.jsxs("div",{className:"header-left",dir:"ltr",ref:X,children:[C.jsx("button",{className:"menu-button",onClick:ue,"aria-label":"Menu",children:C.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[C.jsx("line",{x1:"4",x2:"20",y1:"12",y2:"12"}),C.jsx("line",{x1:"4",x2:"20",y1:"6",y2:"6"}),C.jsx("line",{x1:"4",x2:"20",y1:"18",y2:"18"})]})}),y&&C.jsxs("div",{className:"menu-dropdown",children:[C.jsx("div",{onClick:Te,children:"Restore Default Colors"}),C.jsx("div",{onClick:()=>{b(!0),p(!1)},children:"About"}),C.jsx("div",{onClick:re,children:"Settings ▸"}),w&&C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"submenu",onClick:()=>{s(!n),p(!1),x(!1)},children:n?"Hide Navigation":"Show Navigation"}),C.jsx("div",{className:"submenu",onClick:()=>{u(!o),p(!1),x(!1)},children:o?"Close Dev Mode":"Enable Dev Mode"})]}),C.jsxs("div",{onClick:()=>{G(!0),p(!1)},children:["Logout (",f,")"]})]})]}),z&&C.jsx("div",{className:"modal-overlay",onClick:()=>G(!1),children:C.jsxs("div",{className:"about-modal-content",onClick:ce=>ce.stopPropagation(),children:[C.jsx("h2",{children:"Confirm Logout"}),C.jsx("p",{children:"Do you want to logout?"}),C.jsx("button",{onClick:()=>{m(),G(!1)},className:"confirm-button",children:"Yes"}),C.jsx("button",{onClick:()=>G(!1),className:"cancel-button",children:"No"})]})}),E&&C.jsx("div",{className:"modal-overlay",onClick:()=>b(!1),children:C.jsxs("div",{className:"about-modal-content",onClick:ce=>ce.stopPropagation(),children:[C.jsx("h2",{children:"Seat Finder"}),C.jsxs("p",{children:["Version: ",QE.version]}),C.jsxs("p",{children:["Date: ",QE.date]}),C.jsx("button",{onClick:()=>b(!1),className:"about-close-button",children:"Close"})]})})]})},JM=()=>{const[i,e]=oe.useState(""),[n,s]=oe.useState(null),{login:o,loading:u,error:f}=xp(),m=async y=>{if(y.preventDefault(),s(null),!i.endsWith("@rbbn.com")){s("App is available only for Ribbon employees");return}await o(i)};return C.jsx("div",{className:"login-dialog-overlay",children:C.jsxs("div",{className:"login-dialog",children:[C.jsx("h2",{children:"Login"}),C.jsxs("form",{onSubmit:m,children:[C.jsxs("div",{className:"form-group",children:[C.jsx("label",{htmlFor:"email",children:"Email:"}),C.jsx("input",{type:"email",id:"email",value:i,onChange:y=>e(y.target.value),required:!0,disabled:u})]}),(f||n)&&C.jsx("p",{className:"error-message",children:f||n}),u&&C.jsx("p",{className:"loading-message",children:"Sending sign-in link..."}),C.jsx("button",{type:"submit",disabled:u,children:"Send Sign-in Link"}),C.jsx("p",{className:"info-message",children:"A sign-in link will be sent to your email address. Click the link to log in."})]})]})})},eP=()=>{const{user:i,loading:e}=xp(),[n,s]=oe.useState(!1),[o,u]=oe.useState(!0),[f,m]=oe.useState(!1),[y,p]=oe.useState(""),[E,b]=oe.useState(""),[w,x]=oe.useState(()=>localStorage.getItem("floorplan-target-color")||"#000000"),[z,G]=oe.useState(()=>localStorage.getItem("floorplan-start-color")||"#0000ff"),X=oe.useRef(null);return oe.useEffect(()=>{n&&X.current&&X.current.scrollIntoView({behavior:"smooth",block:"center"})},[n]),e?C.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:C.jsx("p",{children:"Loading user session..."})}):i?C.jsxs(C.Fragment,{children:[C.jsx(WM,{setStartColor:G,setTargetColor:x,showNavigation:o,setShowNavigation:u,isDevModeEnabled:f,setDevModeEnabled:m,userEmail:i.email||"Guest"}),C.jsx(KM,{searchValue:y,setSearchValue:p,onShowOnMap:(ue,re)=>{p(ue),b(re),s(!0)},onSetMyLocation:ue=>{b(ue),localStorage.setItem("myLocation",ue)},onSetTargetLocation:ue=>{p(ue)}}),n&&C.jsx("div",{ref:X,children:C.jsx(XM,{showNavigation:o,isDevModeEnabled:f,targetRoom:y.trim(),setTargetRoom:p,myLocation:E.trim(),setMyLocation:b,startColor:z,setStartColor:G,targetColor:w,setTargetColor:x,onClose:()=>{console.log("Floor plan closed"),s(!1)}})})]}):C.jsx(JM,{})},tP=()=>C.jsx(ZM,{children:C.jsx(eP,{})}),nP=Mw.createRoot(document.getElementById("root"));nP.render(C.jsx(Lt.StrictMode,{children:C.jsx(tP,{})}));
