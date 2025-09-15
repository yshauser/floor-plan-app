(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function J0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Md={exports:{}},Il={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $v;function xw(){if($v)return Il;$v=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:i,type:s,key:f,ref:o!==void 0?o:null,props:u}}return Il.Fragment=e,Il.jsx=n,Il.jsxs=n,Il}var Zv;function Lw(){return Zv||(Zv=1,Md.exports=xw()),Md.exports}var R=Lw(),Pd={exports:{}},Ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv;function Uw(){if(Wv)return Ie;Wv=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),b=Symbol.iterator;function w(D){return D===null||typeof D!="object"?null:(D=b&&D[b]||D["@@iterator"],typeof D=="function"?D:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,Y={};function X(D,$,se){this.props=D,this.context=$,this.refs=Y,this.updater=se||k}X.prototype.isReactComponent={},X.prototype.setState=function(D,$){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,$,"setState")},X.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function ce(){}ce.prototype=X.prototype;function ie(D,$,se){this.props=D,this.context=$,this.refs=Y,this.updater=se||k}var te=ie.prototype=new ce;te.constructor=ie,U(te,X.prototype),te.isPureReactComponent=!0;var _e=Array.isArray,le={H:null,A:null,T:null,S:null,V:null},Se=Object.prototype.hasOwnProperty;function M(D,$,se,J,ge,Ce){return se=Ce.ref,{$$typeof:i,type:D,key:$,ref:se!==void 0?se:null,props:Ce}}function A(D,$){return M(D.type,$,void 0,void 0,void 0,D.props)}function I(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function O(D){var $={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(se){return $[se]})}var x=/\/+/g;function V(D,$){return typeof D=="object"&&D!==null&&D.key!=null?O(""+D.key):$.toString(36)}function C(){}function Oe(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(C,C):(D.status="pending",D.then(function($){D.status==="pending"&&(D.status="fulfilled",D.value=$)},function($){D.status==="pending"&&(D.status="rejected",D.reason=$)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function Le(D,$,se,J,ge){var Ce=typeof D;(Ce==="undefined"||Ce==="boolean")&&(D=null);var pe=!1;if(D===null)pe=!0;else switch(Ce){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(D.$$typeof){case i:case e:pe=!0;break;case T:return pe=D._init,Le(pe(D._payload),$,se,J,ge)}}if(pe)return ge=ge(D),pe=J===""?"."+V(D,0):J,_e(ge)?(se="",pe!=null&&(se=pe.replace(x,"$&/")+"/"),Le(ge,$,se,"",function(It){return It})):ge!=null&&(I(ge)&&(ge=A(ge,se+(ge.key==null||D&&D.key===ge.key?"":(""+ge.key).replace(x,"$&/")+"/")+pe)),$.push(ge)),1;pe=0;var ot=J===""?".":J+":";if(_e(D))for(var Ge=0;Ge<D.length;Ge++)J=D[Ge],Ce=ot+V(J,Ge),pe+=Le(J,$,se,Ce,ge);else if(Ge=w(D),typeof Ge=="function")for(D=Ge.call(D),Ge=0;!(J=D.next()).done;)J=J.value,Ce=ot+V(J,Ge++),pe+=Le(J,$,se,Ce,ge);else if(Ce==="object"){if(typeof D.then=="function")return Le(Oe(D),$,se,J,ge);throw $=String(D),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return pe}function G(D,$,se){if(D==null)return D;var J=[],ge=0;return Le(D,J,"","",function(Ce){return $.call(se,Ce,ge++)}),J}function re(D){if(D._status===-1){var $=D._result;$=$(),$.then(function(se){(D._status===0||D._status===-1)&&(D._status=1,D._result=se)},function(se){(D._status===0||D._status===-1)&&(D._status=2,D._result=se)}),D._status===-1&&(D._status=0,D._result=$)}if(D._status===1)return D._result.default;throw D._result}var me=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Pe(){}return Ie.Children={map:G,forEach:function(D,$,se){G(D,function(){$.apply(this,arguments)},se)},count:function(D){var $=0;return G(D,function(){$++}),$},toArray:function(D){return G(D,function($){return $})||[]},only:function(D){if(!I(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Ie.Component=X,Ie.Fragment=n,Ie.Profiler=o,Ie.PureComponent=ie,Ie.StrictMode=s,Ie.Suspense=g,Ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=le,Ie.__COMPILER_RUNTIME={__proto__:null,c:function(D){return le.H.useMemoCache(D)}},Ie.cache=function(D){return function(){return D.apply(null,arguments)}},Ie.cloneElement=function(D,$,se){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var J=U({},D.props),ge=D.key,Ce=void 0;if($!=null)for(pe in $.ref!==void 0&&(Ce=void 0),$.key!==void 0&&(ge=""+$.key),$)!Se.call($,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&$.ref===void 0||(J[pe]=$[pe]);var pe=arguments.length-2;if(pe===1)J.children=se;else if(1<pe){for(var ot=Array(pe),Ge=0;Ge<pe;Ge++)ot[Ge]=arguments[Ge+2];J.children=ot}return M(D.type,ge,void 0,void 0,Ce,J)},Ie.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},Ie.createElement=function(D,$,se){var J,ge={},Ce=null;if($!=null)for(J in $.key!==void 0&&(Ce=""+$.key),$)Se.call($,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ge[J]=$[J]);var pe=arguments.length-2;if(pe===1)ge.children=se;else if(1<pe){for(var ot=Array(pe),Ge=0;Ge<pe;Ge++)ot[Ge]=arguments[Ge+2];ge.children=ot}if(D&&D.defaultProps)for(J in pe=D.defaultProps,pe)ge[J]===void 0&&(ge[J]=pe[J]);return M(D,Ce,void 0,void 0,null,ge)},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(D){return{$$typeof:m,render:D}},Ie.isValidElement=I,Ie.lazy=function(D){return{$$typeof:T,_payload:{_status:-1,_result:D},_init:re}},Ie.memo=function(D,$){return{$$typeof:y,type:D,compare:$===void 0?null:$}},Ie.startTransition=function(D){var $=le.T,se={};le.T=se;try{var J=D(),ge=le.S;ge!==null&&ge(se,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(Pe,me)}catch(Ce){me(Ce)}finally{le.T=$}},Ie.unstable_useCacheRefresh=function(){return le.H.useCacheRefresh()},Ie.use=function(D){return le.H.use(D)},Ie.useActionState=function(D,$,se){return le.H.useActionState(D,$,se)},Ie.useCallback=function(D,$){return le.H.useCallback(D,$)},Ie.useContext=function(D){return le.H.useContext(D)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(D,$){return le.H.useDeferredValue(D,$)},Ie.useEffect=function(D,$,se){var J=le.H;if(typeof se=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(D,$)},Ie.useId=function(){return le.H.useId()},Ie.useImperativeHandle=function(D,$,se){return le.H.useImperativeHandle(D,$,se)},Ie.useInsertionEffect=function(D,$){return le.H.useInsertionEffect(D,$)},Ie.useLayoutEffect=function(D,$){return le.H.useLayoutEffect(D,$)},Ie.useMemo=function(D,$){return le.H.useMemo(D,$)},Ie.useOptimistic=function(D,$){return le.H.useOptimistic(D,$)},Ie.useReducer=function(D,$,se){return le.H.useReducer(D,$,se)},Ie.useRef=function(D){return le.H.useRef(D)},Ie.useState=function(D){return le.H.useState(D)},Ie.useSyncExternalStore=function(D,$,se){return le.H.useSyncExternalStore(D,$,se)},Ie.useTransition=function(){return le.H.useTransition()},Ie.version="19.1.0",Ie}var Jv;function zm(){return Jv||(Jv=1,Pd.exports=Uw()),Pd.exports}var ue=zm();const Wt=J0(ue);var Vd={exports:{}},Dl={},kd={exports:{}},xd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function zw(){return e_||(e_=1,function(i){function e(G,re){var me=G.length;G.push(re);e:for(;0<me;){var Pe=me-1>>>1,D=G[Pe];if(0<o(D,re))G[Pe]=re,G[me]=D,me=Pe;else break e}}function n(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var re=G[0],me=G.pop();if(me!==re){G[0]=me;e:for(var Pe=0,D=G.length,$=D>>>1;Pe<$;){var se=2*(Pe+1)-1,J=G[se],ge=se+1,Ce=G[ge];if(0>o(J,me))ge<D&&0>o(Ce,J)?(G[Pe]=Ce,G[ge]=me,Pe=ge):(G[Pe]=J,G[se]=me,Pe=se);else if(ge<D&&0>o(Ce,me))G[Pe]=Ce,G[ge]=me,Pe=ge;else break e}}return re}function o(G,re){var me=G.sortIndex-re.sortIndex;return me!==0?me:G.id-re.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();i.unstable_now=function(){return f.now()-m}}var g=[],y=[],T=1,b=null,w=3,k=!1,U=!1,Y=!1,X=!1,ce=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function _e(G){for(var re=n(y);re!==null;){if(re.callback===null)s(y);else if(re.startTime<=G)s(y),re.sortIndex=re.expirationTime,e(g,re);else break;re=n(y)}}function le(G){if(Y=!1,_e(G),!U)if(n(g)!==null)U=!0,Se||(Se=!0,V());else{var re=n(y);re!==null&&Le(le,re.startTime-G)}}var Se=!1,M=-1,A=5,I=-1;function O(){return X?!0:!(i.unstable_now()-I<A)}function x(){if(X=!1,Se){var G=i.unstable_now();I=G;var re=!0;try{e:{U=!1,Y&&(Y=!1,ie(M),M=-1),k=!0;var me=w;try{t:{for(_e(G),b=n(g);b!==null&&!(b.expirationTime>G&&O());){var Pe=b.callback;if(typeof Pe=="function"){b.callback=null,w=b.priorityLevel;var D=Pe(b.expirationTime<=G);if(G=i.unstable_now(),typeof D=="function"){b.callback=D,_e(G),re=!0;break t}b===n(g)&&s(g),_e(G)}else s(g);b=n(g)}if(b!==null)re=!0;else{var $=n(y);$!==null&&Le(le,$.startTime-G),re=!1}}break e}finally{b=null,w=me,k=!1}re=void 0}}finally{re?V():Se=!1}}}var V;if(typeof te=="function")V=function(){te(x)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,Oe=C.port2;C.port1.onmessage=x,V=function(){Oe.postMessage(null)}}else V=function(){ce(x,0)};function Le(G,re){M=ce(function(){G(i.unstable_now())},re)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(G){G.callback=null},i.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<G?Math.floor(1e3/G):5},i.unstable_getCurrentPriorityLevel=function(){return w},i.unstable_next=function(G){switch(w){case 1:case 2:case 3:var re=3;break;default:re=w}var me=w;w=re;try{return G()}finally{w=me}},i.unstable_requestPaint=function(){X=!0},i.unstable_runWithPriority=function(G,re){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var me=w;w=G;try{return re()}finally{w=me}},i.unstable_scheduleCallback=function(G,re,me){var Pe=i.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?Pe+me:Pe):me=Pe,G){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=me+D,G={id:T++,callback:re,priorityLevel:G,startTime:me,expirationTime:D,sortIndex:-1},me>Pe?(G.sortIndex=me,e(y,G),n(g)===null&&G===n(y)&&(Y?(ie(M),M=-1):Y=!0,Le(le,me-Pe))):(G.sortIndex=D,e(g,G),U||k||(U=!0,Se||(Se=!0,V()))),G},i.unstable_shouldYield=O,i.unstable_wrapCallback=function(G){var re=w;return function(){var me=w;w=re;try{return G.apply(this,arguments)}finally{w=me}}}}(xd)),xd}var t_;function jw(){return t_||(t_=1,kd.exports=zw()),kd.exports}var Ld={exports:{}},cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_;function Bw(){if(n_)return cn;n_=1;var i=zm();function e(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)y+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(g,y,T){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:g,containerInfo:y,implementation:T}}var f=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,cn.createPortal=function(g,y){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return u(g,y,null,T)},cn.flushSync=function(g){var y=f.T,T=s.p;try{if(f.T=null,s.p=2,g)return g()}finally{f.T=y,s.p=T,s.d.f()}},cn.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(g,y))},cn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},cn.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var T=y.as,b=m(T,y.crossOrigin),w=typeof y.integrity=="string"?y.integrity:void 0,k=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;T==="style"?s.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:b,integrity:w,fetchPriority:k}):T==="script"&&s.d.X(g,{crossOrigin:b,integrity:w,fetchPriority:k,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},cn.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var T=m(y.as,y.crossOrigin);s.d.M(g,{crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(g)},cn.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var T=y.as,b=m(T,y.crossOrigin);s.d.L(g,T,{crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},cn.preloadModule=function(g,y){if(typeof g=="string")if(y){var T=m(y.as,y.crossOrigin);s.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(g)},cn.requestFormReset=function(g){s.d.r(g)},cn.unstable_batchedUpdates=function(g,y){return g(y)},cn.useFormState=function(g,y,T){return f.H.useFormState(g,y,T)},cn.useFormStatus=function(){return f.H.useHostTransitionStatus()},cn.version="19.1.0",cn}var i_;function qw(){if(i_)return Ld.exports;i_=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Ld.exports=Bw(),Ld.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function Hw(){if(r_)return Dl;r_=1;var i=jw(),e=zm(),n=qw();function s(t){var r="https://react.dev/errors/"+t;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function f(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function g(t){var r=t.alternate;if(!r){if(r=u(t),r===null)throw Error(s(188));return r!==t?null:t}for(var a=t,l=r;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return m(h),t;if(d===l)return m(h),r;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var _=!1,E=h.child;E;){if(E===a){_=!0,a=h,l=d;break}if(E===l){_=!0,l=h,a=d;break}E=E.sibling}if(!_){for(E=d.child;E;){if(E===a){_=!0,a=d,l=h;break}if(E===l){_=!0,l=d,a=h;break}E=E.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:r}function y(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t;for(t=t.child;t!==null;){if(r=y(t),r!==null)return r;t=t.sibling}return null}var T=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),ce=Symbol.for("react.provider"),ie=Symbol.for("react.consumer"),te=Symbol.for("react.context"),_e=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),Se=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),x=Symbol.iterator;function V(t){return t===null||typeof t!="object"?null:(t=x&&t[x]||t["@@iterator"],typeof t=="function"?t:null)}var C=Symbol.for("react.client.reference");function Oe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===C?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case X:return"Profiler";case Y:return"StrictMode";case le:return"Suspense";case Se:return"SuspenseList";case I:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case k:return"Portal";case te:return(t.displayName||"Context")+".Provider";case ie:return(t._context.displayName||"Context")+".Consumer";case _e:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case M:return r=t.displayName||null,r!==null?r:Oe(t.type)||"Memo";case A:r=t._payload,t=t._init;try{return Oe(t(r))}catch{}}return null}var Le=Array.isArray,G=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},Pe=[],D=-1;function $(t){return{current:t}}function se(t){0>D||(t.current=Pe[D],Pe[D]=null,D--)}function J(t,r){D++,Pe[D]=t.current,t.current=r}var ge=$(null),Ce=$(null),pe=$(null),ot=$(null);function Ge(t,r){switch(J(pe,r),J(Ce,t),J(ge,null),r.nodeType){case 9:case 11:t=(t=r.documentElement)&&(t=t.namespaceURI)?wv(t):0;break;default:if(t=r.tagName,r=r.namespaceURI)r=wv(r),t=Av(r,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}se(ge),J(ge,t)}function It(){se(ge),se(Ce),se(pe)}function oe(t){t.memoizedState!==null&&J(ot,t);var r=ge.current,a=Av(r,t.type);r!==a&&(J(Ce,t),J(ge,a))}function Ve(t){Ce.current===t&&(se(ge),se(Ce)),ot.current===t&&(se(ot),wl._currentValue=me)}var We=Object.prototype.hasOwnProperty,lt=i.unstable_scheduleCallback,Ft=i.unstable_cancelCallback,gn=i.unstable_shouldYield,ut=i.unstable_requestPaint,Jt=i.unstable_now,ra=i.unstable_getCurrentPriorityLevel,yr=i.unstable_ImmediatePriority,vr=i.unstable_UserBlockingPriority,xi=i.unstable_NormalPriority,ms=i.unstable_LowPriority,In=i.unstable_IdlePriority,Li=i.log,sa=i.unstable_setDisableYieldValue,dt=null,Qe=null;function yn(t){if(typeof Li=="function"&&sa(t),Qe&&typeof Qe.setStrictMode=="function")try{Qe.setStrictMode(dt,t)}catch{}}var Yt=Math.clz32?Math.clz32:ye,aa=Math.log,ne=Math.LN2;function ye(t){return t>>>=0,t===0?32:31-(aa(t)/ne|0)|0}var Ue=256,pt=4194304;function Je(t){var r=t&42;if(r!==0)return r;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function vn(t,r,a){var l=t.pendingLanes;if(l===0)return 0;var h=0,d=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=l&134217727;return E!==0?(l=E&~d,l!==0?h=Je(l):(_&=E,_!==0?h=Je(_):a||(a=E&~t,a!==0&&(h=Je(a))))):(E=l&~d,E!==0?h=Je(E):_!==0?h=Je(_):a||(a=l&~t,a!==0&&(h=Je(a)))),h===0?0:r!==0&&r!==h&&(r&d)===0&&(d=h&-h,a=r&-r,d>=a||d===32&&(a&4194048)!==0)?r:h}function ln(t,r){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&r)===0}function mt(t,r){switch(t){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _n(){var t=Ue;return Ue<<=1,(Ue&4194048)===0&&(Ue=256),t}function Co(){var t=pt;return pt<<=1,(pt&62914560)===0&&(pt=4194304),t}function Ui(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function zi(t,r){t.pendingLanes|=r,r!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ro(t,r,a,l,h,d){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,N=t.expirationTimes,B=t.hiddenUpdates;for(a=_&~a;0<a;){var K=31-Yt(a),Z=1<<K;E[K]=0,N[K]=-1;var q=B[K];if(q!==null)for(B[K]=null,K=0;K<q.length;K++){var H=q[K];H!==null&&(H.lane&=-536870913)}a&=~Z}l!==0&&ui(t,l,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(_&~r))}function ui(t,r,a){t.pendingLanes|=r,t.suspendedLanes&=~r;var l=31-Yt(r);t.entangledLanes|=r,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function No(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var l=31-Yt(a),h=1<<l;h&r|t[l]&r&&(t[l]|=r),a&=~h}}function _r(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function oa(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Tr(){var t=re.p;return t!==0?t:(t=window.event,t===void 0?32:Fv(t.type))}function lu(t,r){var a=re.p;try{return re.p=t,r()}finally{re.p=a}}var gt=Math.random().toString(36).slice(2),Lt="__reactFiber$"+gt,Dt="__reactProps$"+gt,Un="__reactContainer$"+gt,Io="__reactEvents$"+gt,Vh="__reactListeners$"+gt,Er="__reactHandles$"+gt,uu="__reactResources$"+gt,ps="__reactMarker$"+gt;function Sr(t){delete t[Lt],delete t[Dt],delete t[Io],delete t[Vh],delete t[Er]}function ji(t){var r=t[Lt];if(r)return r;for(var a=t.parentNode;a;){if(r=a[Un]||a[Lt]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=Iv(t);t!==null;){if(a=t[Lt])return a;t=Iv(t)}return r}t=a,a=t.parentNode}return null}function ci(t){if(t=t[Lt]||t[Un]){var r=t.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return t}return null}function hi(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t.stateNode;throw Error(s(33))}function Tn(t){var r=t[uu];return r||(r=t[uu]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function wt(t){t[ps]=!0}var Do=new Set,la={};function ei(t,r){Bi(t,r),Bi(t+"Capture",r)}function Bi(t,r){for(la[t]=r,t=0;t<r.length;t++)Do.add(r[t])}var cu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hu={},gs={};function fu(t){return We.call(gs,t)?!0:We.call(hu,t)?!1:cu.test(t)?gs[t]=!0:(hu[t]=!0,!1)}function br(t,r,a){if(fu(r))if(a===null)t.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(r);return}}t.setAttribute(r,""+a)}}function fi(t,r,a){if(a===null)t.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttribute(r,""+a)}}function en(t,r,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(r,a,""+l)}}var ys,du;function qi(t){if(ys===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);ys=r&&r[1]||"",du=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ys+t+du}var ua=!1;function ca(t,r){if(!t||ua)return"";ua=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(H){var q=H}Reflect.construct(t,[],Z)}else{try{Z.call()}catch(H){q=H}t.call(Z.prototype)}}else{try{throw Error()}catch(H){q=H}(Z=t())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(H){if(H&&q&&typeof H.stack=="string")return[H.stack,q.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),_=d[0],E=d[1];if(_&&E){var N=_.split(`
`),B=E.split(`
`);for(h=l=0;l<N.length&&!N[l].includes("DetermineComponentFrameRoot");)l++;for(;h<B.length&&!B[h].includes("DetermineComponentFrameRoot");)h++;if(l===N.length||h===B.length)for(l=N.length-1,h=B.length-1;1<=l&&0<=h&&N[l]!==B[h];)h--;for(;1<=l&&0<=h;l--,h--)if(N[l]!==B[h]){if(l!==1||h!==1)do if(l--,h--,0>h||N[l]!==B[h]){var K=`
`+N[l].replace(" at new "," at ");return t.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",t.displayName)),K}while(1<=l&&0<=h);break}}}finally{ua=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?qi(a):""}function Oo(t){switch(t.tag){case 26:case 27:case 5:return qi(t.type);case 16:return qi("Lazy");case 13:return qi("Suspense");case 19:return qi("SuspenseList");case 0:case 15:return ca(t.type,!1);case 11:return ca(t.type.render,!1);case 1:return ca(t.type,!0);case 31:return qi("Activity");default:return""}}function ha(t){try{var r="";do r+=Oo(t),t=t.return;while(t);return r}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function En(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mo(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function kh(t){var r=Mo(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),l=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return h.call(this)},set:function(_){l=""+_,d.call(this,_)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(_){l=""+_},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function fa(t){t._valueTracker||(t._valueTracker=kh(t))}function Po(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),l="";return t&&(l=Mo(t)?t.checked?"true":"false":t.value),t=l,t!==a?(r.setValue(t),!0):!1}function vs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var xh=/[\n"\\]/g;function Ot(t){return t.replace(xh,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Dn(t,r,a,l,h,d,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),r!=null?_==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+En(r)):t.value!==""+En(r)&&(t.value=""+En(r)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),r!=null?wr(t,_,En(r)):a!=null?wr(t,_,En(a)):l!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+En(E):t.removeAttribute("name")}function _s(t,r,a,l,h,d,_,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),r!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||r!=null))return;a=a!=null?""+En(a):"",r=r!=null?""+En(r):a,E||r===t.value||(t.value=r),t.defaultValue=r}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=E?t.checked:!!l,t.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_)}function wr(t,r,a){r==="number"&&vs(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Hi(t,r,a,l){if(t=t.options,r){r={};for(var h=0;h<a.length;h++)r["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=r.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+En(a),r=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}r!==null||t[h].disabled||(r=t[h])}r!==null&&(r.selected=!0)}}function nt(t,r,a){if(r!=null&&(r=""+En(r),r!==t.value&&(t.value=r),a==null)){t.defaultValue!==r&&(t.defaultValue=r);return}t.defaultValue=a!=null?""+En(a):""}function Ts(t,r,a,l){if(r==null){if(l!=null){if(a!=null)throw Error(s(92));if(Le(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),r=a}a=En(r),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function zn(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var Es=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mu(t,r,a){var l=r.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="":l?t.setProperty(r,a):typeof a!="number"||a===0||Es.has(r)?r==="float"?t.cssFloat=a:t[r]=(""+a).trim():t[r]=a+"px"}function Vo(t,r,a){if(r!=null&&typeof r!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in r)l=r[h],r.hasOwnProperty(h)&&a[h]!==l&&mu(t,h,l)}else for(var d in r)r.hasOwnProperty(d)&&mu(t,d,r[d])}function ko(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Uh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function da(t){return Uh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Fi=null;function jn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yi=null,Gi=null;function xo(t){var r=ci(t);if(r&&(t=r.stateNode)){var a=t[Dt]||null;e:switch(t=r.stateNode,r.type){case"input":if(Dn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ot(""+r)+'"][type="radio"]'),r=0;r<a.length;r++){var l=a[r];if(l!==t&&l.form===t.form){var h=l[Dt]||null;if(!h)throw Error(s(90));Dn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<a.length;r++)l=a[r],l.form===t.form&&Po(l)}break e;case"textarea":nt(t,a.value,a.defaultValue);break e;case"select":r=a.value,r!=null&&Hi(t,!!a.multiple,r,!1)}}}var di=!1;function pu(t,r,a){if(di)return t(r,a);di=!0;try{var l=t(r);return l}finally{if(di=!1,(Yi!==null||Gi!==null)&&(lc(),Yi&&(r=Yi,t=Gi,Gi=Yi=null,xo(r),t)))for(r=0;r<t.length;r++)xo(t[r])}}function Ss(t,r){var a=t.stateNode;if(a===null)return null;var l=a[Dt]||null;if(l===null)return null;a=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,r,typeof a));return a}var ti=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bn=!1;if(ti)try{var bs={};Object.defineProperty(bs,"passive",{get:function(){Bn=!0}}),window.addEventListener("test",bs,bs),window.removeEventListener("test",bs,bs)}catch{Bn=!1}var mi=null,Ar=null,Xi=null;function Lo(){if(Xi)return Xi;var t,r=Ar,a=r.length,l,h="value"in mi?mi.value:mi.textContent,d=h.length;for(t=0;t<a&&r[t]===h[t];t++);var _=a-t;for(l=1;l<=_&&r[a-l]===h[d-l];l++);return Xi=h.slice(t,1<l?1-l:void 0)}function pi(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function gi(){return!0}function Uo(){return!1}function Gt(t){function r(a,l,h,d,_){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?gi:Uo,this.isPropagationStopped=Uo,this}return T(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gi)},persist:function(){},isPersistent:gi}),r}var Ze={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ma=Gt(Ze),ws=T({},Ze,{view:0,detail:0}),gu=Gt(ws),pa,ga,yi,As=T({},ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ns,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yi&&(yi&&t.type==="mousemove"?(pa=t.screenX-yi.screenX,ga=t.screenY-yi.screenY):ga=pa=0,yi=t),pa)},movementY:function(t){return"movementY"in t?t.movementY:ga}}),qn=Gt(As),yu=T({},As,{dataTransfer:0}),zh=Gt(yu),Cs=T({},ws,{relatedTarget:0}),ya=Gt(Cs),zo=T({},Ze,{animationName:0,elapsedTime:0,pseudoElement:0}),va=Gt(zo),vu=T({},Ze,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_a=Gt(vu),jh=T({},Ze,{data:0}),jo=Gt(jh),Rs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_u={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bo(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=Tu[t])?!!r[t]:!1}function Ns(){return Bo}var Eu=T({},ws,{key:function(t){if(t.key){var r=Rs[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=pi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_u[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ns,charCode:function(t){return t.type==="keypress"?pi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ta=Gt(Eu),Su=T({},As,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qo=Gt(Su),Ki=T({},ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ns}),bu=Gt(Ki),wu=T({},Ze,{propertyName:0,elapsedTime:0,pseudoElement:0}),Au=Gt(wu),Cu=T({},As,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ea=Gt(Cu),Sn=T({},Ze,{newState:0,oldState:0}),Ru=Gt(Sn),Nu=[9,13,27,32],vi=ti&&"CompositionEvent"in window,c=null;ti&&"documentMode"in document&&(c=document.documentMode);var p=ti&&"TextEvent"in window&&!c,v=ti&&(!vi||c&&8<c&&11>=c),S=" ",z=!1;function F(t,r){switch(t){case"keyup":return Nu.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ae(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Be=!1;function Ut(t,r){switch(t){case"compositionend":return ae(r);case"keypress":return r.which!==32?null:(z=!0,S);case"textInput":return t=r.data,t===S&&z?null:t;default:return null}}function qe(t,r){if(Be)return t==="compositionend"||!vi&&F(t,r)?(t=Lo(),Xi=Ar=mi=null,Be=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return v&&r.locale!=="ko"?null:r.data;default:return null}}var Xt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zt(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Xt[t.type]:r==="textarea"}function Qi(t,r,a,l){Yi?Gi?Gi.push(l):Gi=[l]:Yi=l,r=mc(r,"onChange"),0<r.length&&(a=new ma("onChange","change",null,a,l),t.push({event:a,listeners:r}))}var tn=null,_i=null;function Ho(t){_v(t,0)}function Iu(t){var r=hi(t);if(Po(r))return t}function jp(t,r){if(t==="change")return r}var Bp=!1;if(ti){var Bh;if(ti){var qh="oninput"in document;if(!qh){var qp=document.createElement("div");qp.setAttribute("oninput","return;"),qh=typeof qp.oninput=="function"}Bh=qh}else Bh=!1;Bp=Bh&&(!document.documentMode||9<document.documentMode)}function Hp(){tn&&(tn.detachEvent("onpropertychange",Fp),_i=tn=null)}function Fp(t){if(t.propertyName==="value"&&Iu(_i)){var r=[];Qi(r,_i,t,jn(t)),pu(Ho,r)}}function fb(t,r,a){t==="focusin"?(Hp(),tn=r,_i=a,tn.attachEvent("onpropertychange",Fp)):t==="focusout"&&Hp()}function db(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Iu(_i)}function mb(t,r){if(t==="click")return Iu(r)}function pb(t,r){if(t==="input"||t==="change")return Iu(r)}function gb(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var On=typeof Object.is=="function"?Object.is:gb;function Fo(t,r){if(On(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),l=Object.keys(r);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!We.call(r,h)||!On(t[h],r[h]))return!1}return!0}function Yp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gp(t,r){var a=Yp(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=r&&l>=r)return{node:a,offset:r-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Yp(a)}}function Xp(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Xp(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Kp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var r=vs(t.document);r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=vs(t.document)}return r}function Hh(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}var yb=ti&&"documentMode"in document&&11>=document.documentMode,Sa=null,Fh=null,Yo=null,Yh=!1;function Qp(t,r,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Yh||Sa==null||Sa!==vs(l)||(l=Sa,"selectionStart"in l&&Hh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Yo&&Fo(Yo,l)||(Yo=l,l=mc(Fh,"onSelect"),0<l.length&&(r=new ma("onSelect","select",null,r,a),t.push({event:r,listeners:l}),r.target=Sa)))}function Is(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var ba={animationend:Is("Animation","AnimationEnd"),animationiteration:Is("Animation","AnimationIteration"),animationstart:Is("Animation","AnimationStart"),transitionrun:Is("Transition","TransitionRun"),transitionstart:Is("Transition","TransitionStart"),transitioncancel:Is("Transition","TransitionCancel"),transitionend:Is("Transition","TransitionEnd")},Gh={},$p={};ti&&($p=document.createElement("div").style,"AnimationEvent"in window||(delete ba.animationend.animation,delete ba.animationiteration.animation,delete ba.animationstart.animation),"TransitionEvent"in window||delete ba.transitionend.transition);function Ds(t){if(Gh[t])return Gh[t];if(!ba[t])return t;var r=ba[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in $p)return Gh[t]=r[a];return t}var Zp=Ds("animationend"),Wp=Ds("animationiteration"),Jp=Ds("animationstart"),vb=Ds("transitionrun"),_b=Ds("transitionstart"),Tb=Ds("transitioncancel"),eg=Ds("transitionend"),tg=new Map,Xh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xh.push("scrollEnd");function ni(t,r){tg.set(t,r),ei(r,[t])}var ng=new WeakMap;function Hn(t,r){if(typeof t=="object"&&t!==null){var a=ng.get(t);return a!==void 0?a:(r={value:t,source:r,stack:ha(r)},ng.set(t,r),r)}return{value:t,source:r,stack:ha(r)}}var Fn=[],wa=0,Kh=0;function Du(){for(var t=wa,r=Kh=wa=0;r<t;){var a=Fn[r];Fn[r++]=null;var l=Fn[r];Fn[r++]=null;var h=Fn[r];Fn[r++]=null;var d=Fn[r];if(Fn[r++]=null,l!==null&&h!==null){var _=l.pending;_===null?h.next=h:(h.next=_.next,_.next=h),l.pending=h}d!==0&&ig(a,h,d)}}function Ou(t,r,a,l){Fn[wa++]=t,Fn[wa++]=r,Fn[wa++]=a,Fn[wa++]=l,Kh|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Qh(t,r,a,l){return Ou(t,r,a,l),Mu(t)}function Aa(t,r){return Ou(t,null,null,r),Mu(t)}function ig(t,r,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,h&&r!==null&&(h=31-Yt(a),t=d.hiddenUpdates,l=t[h],l===null?t[h]=[r]:l.push(r),r.lane=a|536870912),d):null}function Mu(t){if(50<gl)throw gl=0,nd=null,Error(s(185));for(var r=t.return;r!==null;)t=r,r=t.return;return t.tag===3?t.stateNode:null}var Ca={};function Eb(t,r,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(t,r,a,l){return new Eb(t,r,a,l)}function $h(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $i(t,r){var a=t.alternate;return a===null?(a=Mn(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function rg(t,r){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=r,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,r=a.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),t}function Pu(t,r,a,l,h,d){var _=0;if(l=t,typeof t=="function")$h(t)&&(_=1);else if(typeof t=="string")_=bw(t,a,ge.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case I:return t=Mn(31,a,r,h),t.elementType=I,t.lanes=d,t;case U:return Os(a.children,h,d,r);case Y:_=8,h|=24;break;case X:return t=Mn(12,a,r,h|2),t.elementType=X,t.lanes=d,t;case le:return t=Mn(13,a,r,h),t.elementType=le,t.lanes=d,t;case Se:return t=Mn(19,a,r,h),t.elementType=Se,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ce:case te:_=10;break e;case ie:_=9;break e;case _e:_=11;break e;case M:_=14;break e;case A:_=16,l=null;break e}_=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return r=Mn(_,a,r,h),r.elementType=t,r.type=l,r.lanes=d,r}function Os(t,r,a,l){return t=Mn(7,t,l,r),t.lanes=a,t}function Zh(t,r,a){return t=Mn(6,t,null,r),t.lanes=a,t}function Wh(t,r,a){return r=Mn(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}var Ra=[],Na=0,Vu=null,ku=0,Yn=[],Gn=0,Ms=null,Zi=1,Wi="";function Ps(t,r){Ra[Na++]=ku,Ra[Na++]=Vu,Vu=t,ku=r}function sg(t,r,a){Yn[Gn++]=Zi,Yn[Gn++]=Wi,Yn[Gn++]=Ms,Ms=t;var l=Zi;t=Wi;var h=32-Yt(l)-1;l&=~(1<<h),a+=1;var d=32-Yt(r)+h;if(30<d){var _=h-h%5;d=(l&(1<<_)-1).toString(32),l>>=_,h-=_,Zi=1<<32-Yt(r)+h|a<<h|l,Wi=d+t}else Zi=1<<d|a<<h|l,Wi=t}function Jh(t){t.return!==null&&(Ps(t,1),sg(t,1,0))}function ef(t){for(;t===Vu;)Vu=Ra[--Na],Ra[Na]=null,ku=Ra[--Na],Ra[Na]=null;for(;t===Ms;)Ms=Yn[--Gn],Yn[Gn]=null,Wi=Yn[--Gn],Yn[Gn]=null,Zi=Yn[--Gn],Yn[Gn]=null}var bn=null,St=null,$e=!1,Vs=null,Ti=!1,tf=Error(s(519));function ks(t){var r=Error(s(418,""));throw Ko(Hn(r,t)),tf}function ag(t){var r=t.stateNode,a=t.type,l=t.memoizedProps;switch(r[Lt]=t,r[Dt]=l,a){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(a=0;a<vl.length;a++)xe(vl[a],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":xe("invalid",r),_s(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),fa(r);break;case"select":xe("invalid",r);break;case"textarea":xe("invalid",r),Ts(r,l.value,l.defaultValue,l.children),fa(r)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||r.textContent===""+a||l.suppressHydrationWarning===!0||bv(r.textContent,a)?(l.popover!=null&&(xe("beforetoggle",r),xe("toggle",r)),l.onScroll!=null&&xe("scroll",r),l.onScrollEnd!=null&&xe("scrollend",r),l.onClick!=null&&(r.onclick=pc),r=!0):r=!1,r||ks(t)}function og(t){for(bn=t.return;bn;)switch(bn.tag){case 5:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:bn=bn.return}}function Go(t){if(t!==bn)return!1;if(!$e)return og(t),$e=!0,!1;var r=t.tag,a;if((a=r!==3&&r!==27)&&((a=r===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||vd(t.type,t.memoizedProps)),a=!a),a&&St&&ks(t),og(t),r===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(r===0){St=ri(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++;t=t.nextSibling}St=null}}else r===27?(r=St,Br(t.type)?(t=Sd,Sd=null,St=t):St=r):St=bn?ri(t.stateNode.nextSibling):null;return!0}function Xo(){St=bn=null,$e=!1}function lg(){var t=Vs;return t!==null&&(Rn===null?Rn=t:Rn.push.apply(Rn,t),Vs=null),t}function Ko(t){Vs===null?Vs=[t]:Vs.push(t)}var nf=$(null),xs=null,Ji=null;function Cr(t,r,a){J(nf,r._currentValue),r._currentValue=a}function er(t){t._currentValue=nf.current,se(nf)}function rf(t,r,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),t===a)break;t=t.return}}function sf(t,r,a,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var _=h.child;d=d.firstContext;e:for(;d!==null;){var E=d;d=h;for(var N=0;N<r.length;N++)if(E.context===r[N]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),rf(d.return,a,t),l||(_=null);break e}d=E.next}}else if(h.tag===18){if(_=h.return,_===null)throw Error(s(341));_.lanes|=a,d=_.alternate,d!==null&&(d.lanes|=a),rf(_,a,t),_=null}else _=h.child;if(_!==null)_.return=h;else for(_=h;_!==null;){if(_===t){_=null;break}if(h=_.sibling,h!==null){h.return=_.return,_=h;break}_=_.return}h=_}}function Qo(t,r,a,l){t=null;for(var h=r,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var _=h.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var E=h.type;On(h.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(h===ot.current){if(_=h.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(wl):t=[wl])}h=h.return}t!==null&&sf(r,t,a,l),r.flags|=262144}function xu(t){for(t=t.firstContext;t!==null;){if(!On(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ls(t){xs=t,Ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function un(t){return ug(xs,t)}function Lu(t,r){return xs===null&&Ls(t),ug(t,r)}function ug(t,r){var a=r._currentValue;if(r={context:r,memoizedValue:a,next:null},Ji===null){if(t===null)throw Error(s(308));Ji=r,t.dependencies={lanes:0,firstContext:r},t.flags|=524288}else Ji=Ji.next=r;return a}var Sb=typeof AbortController<"u"?AbortController:function(){var t=[],r=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){r.aborted=!0,t.forEach(function(a){return a()})}},bb=i.unstable_scheduleCallback,wb=i.unstable_NormalPriority,jt={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function af(){return{controller:new Sb,data:new Map,refCount:0}}function $o(t){t.refCount--,t.refCount===0&&bb(wb,function(){t.controller.abort()})}var Zo=null,of=0,Ia=0,Da=null;function Ab(t,r){if(Zo===null){var a=Zo=[];of=0,Ia=ud(),Da={status:"pending",value:void 0,then:function(l){a.push(l)}}}return of++,r.then(cg,cg),r}function cg(){if(--of===0&&Zo!==null){Da!==null&&(Da.status="fulfilled");var t=Zo;Zo=null,Ia=0,Da=null;for(var r=0;r<t.length;r++)(0,t[r])()}}function Cb(t,r){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){l.status="fulfilled",l.value=r;for(var h=0;h<a.length;h++)(0,a[h])(r)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var hg=G.S;G.S=function(t,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&Ab(t,r),hg!==null&&hg(t,r)};var Us=$(null);function lf(){var t=Us.current;return t!==null?t:ct.pooledCache}function Uu(t,r){r===null?J(Us,Us.current):J(Us,r.pool)}function fg(){var t=lf();return t===null?null:{parent:jt._currentValue,pool:t}}var Wo=Error(s(460)),dg=Error(s(474)),zu=Error(s(542)),uf={then:function(){}};function mg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ju(){}function pg(t,r,a){switch(a=t[a],a===void 0?t.push(r):a!==r&&(r.then(ju,ju),r=a),r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,yg(t),t;default:if(typeof r.status=="string")r.then(ju,ju);else{if(t=ct,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=r,t.status="pending",t.then(function(l){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=l}},function(l){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,yg(t),t}throw Jo=r,Wo}}var Jo=null;function gg(){if(Jo===null)throw Error(s(459));var t=Jo;return Jo=null,t}function yg(t){if(t===Wo||t===zu)throw Error(s(483))}var Rr=!1;function cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hf(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Nr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ir(t,r,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(et&2)!==0){var h=l.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),l.pending=r,r=Mu(t),ig(t,null,a),r}return Ou(t,l,r,a),Mu(t)}function el(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194048)!==0)){var l=r.lanes;l&=t.pendingLanes,a|=l,r.lanes=a,No(t,a)}}function ff(t,r){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=_:d=d.next=_,a=a.next}while(a!==null);d===null?h=d=r:d=d.next=r}else h=d=r;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}var df=!1;function tl(){if(df){var t=Da;if(t!==null)throw t}}function nl(t,r,a,l){df=!1;var h=t.updateQueue;Rr=!1;var d=h.firstBaseUpdate,_=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var N=E,B=N.next;N.next=null,_===null?d=B:_.next=B,_=N;var K=t.alternate;K!==null&&(K=K.updateQueue,E=K.lastBaseUpdate,E!==_&&(E===null?K.firstBaseUpdate=B:E.next=B,K.lastBaseUpdate=N))}if(d!==null){var Z=h.baseState;_=0,K=B=N=null,E=d;do{var q=E.lane&-536870913,H=q!==E.lane;if(H?(He&q)===q:(l&q)===q){q!==0&&q===Ia&&(df=!0),K!==null&&(K=K.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var we=t,Ee=E;q=r;var st=a;switch(Ee.tag){case 1:if(we=Ee.payload,typeof we=="function"){Z=we.call(st,Z,q);break e}Z=we;break e;case 3:we.flags=we.flags&-65537|128;case 0:if(we=Ee.payload,q=typeof we=="function"?we.call(st,Z,q):we,q==null)break e;Z=T({},Z,q);break e;case 2:Rr=!0}}q=E.callback,q!==null&&(t.flags|=64,H&&(t.flags|=8192),H=h.callbacks,H===null?h.callbacks=[q]:H.push(q))}else H={lane:q,tag:E.tag,payload:E.payload,callback:E.callback,next:null},K===null?(B=K=H,N=Z):K=K.next=H,_|=q;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;H=E,E=H.next,H.next=null,h.lastBaseUpdate=H,h.shared.pending=null}}while(!0);K===null&&(N=Z),h.baseState=N,h.firstBaseUpdate=B,h.lastBaseUpdate=K,d===null&&(h.shared.lanes=0),Lr|=_,t.lanes=_,t.memoizedState=Z}}function vg(t,r){if(typeof t!="function")throw Error(s(191,t));t.call(r)}function _g(t,r){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)vg(a[t],r)}var Oa=$(null),Bu=$(0);function Tg(t,r){t=or,J(Bu,t),J(Oa,r),or=t|r.baseLanes}function mf(){J(Bu,or),J(Oa,Oa.current)}function pf(){or=Bu.current,se(Oa),se(Bu)}var Dr=0,De=null,it=null,Mt=null,qu=!1,Ma=!1,zs=!1,Hu=0,il=0,Pa=null,Rb=0;function At(){throw Error(s(321))}function gf(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!On(t[a],r[a]))return!1;return!0}function yf(t,r,a,l,h,d){return Dr=d,De=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,G.H=t===null||t.memoizedState===null?iy:ry,zs=!1,d=a(l,h),zs=!1,Ma&&(d=Sg(r,a,l,h)),Eg(t),d}function Eg(t){G.H=Qu;var r=it!==null&&it.next!==null;if(Dr=0,Mt=it=De=null,qu=!1,il=0,Pa=null,r)throw Error(s(300));t===null||Kt||(t=t.dependencies,t!==null&&xu(t)&&(Kt=!0))}function Sg(t,r,a,l){De=t;var h=0;do{if(Ma&&(Pa=null),il=0,Ma=!1,25<=h)throw Error(s(301));if(h+=1,Mt=it=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}G.H=Vb,d=r(a,l)}while(Ma);return d}function Nb(){var t=G.H,r=t.useState()[0];return r=typeof r.then=="function"?rl(r):r,t=t.useState()[0],(it!==null?it.memoizedState:null)!==t&&(De.flags|=1024),r}function vf(){var t=Hu!==0;return Hu=0,t}function _f(t,r,a){r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~a}function Tf(t){if(qu){for(t=t.memoizedState;t!==null;){var r=t.queue;r!==null&&(r.pending=null),t=t.next}qu=!1}Dr=0,Mt=it=De=null,Ma=!1,il=Hu=0,Pa=null}function An(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mt===null?De.memoizedState=Mt=t:Mt=Mt.next=t,Mt}function Pt(){if(it===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=it.next;var r=Mt===null?De.memoizedState:Mt.next;if(r!==null)Mt=r,it=t;else{if(t===null)throw De.alternate===null?Error(s(467)):Error(s(310));it=t,t={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},Mt===null?De.memoizedState=Mt=t:Mt=Mt.next=t}return Mt}function Ef(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function rl(t){var r=il;return il+=1,Pa===null&&(Pa=[]),t=pg(Pa,t,r),r=De,(Mt===null?r.memoizedState:Mt.next)===null&&(r=r.alternate,G.H=r===null||r.memoizedState===null?iy:ry),t}function Fu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return rl(t);if(t.$$typeof===te)return un(t)}throw Error(s(438,String(t)))}function Sf(t){var r=null,a=De.updateQueue;if(a!==null&&(r=a.memoCache),r==null){var l=De.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),a===null&&(a=Ef(),De.updateQueue=a),a.memoCache=r,a=r.data[r.index],a===void 0)for(a=r.data[r.index]=Array(t),l=0;l<t;l++)a[l]=O;return r.index++,a}function tr(t,r){return typeof r=="function"?r(t):r}function Yu(t){var r=Pt();return bf(r,it,t)}function bf(t,r,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=t.baseQueue,d=l.pending;if(d!==null){if(h!==null){var _=h.next;h.next=d.next,d.next=_}r.baseQueue=h=d,l.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{r=h.next;var E=_=null,N=null,B=r,K=!1;do{var Z=B.lane&-536870913;if(Z!==B.lane?(He&Z)===Z:(Dr&Z)===Z){var q=B.revertLane;if(q===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),Z===Ia&&(K=!0);else if((Dr&q)===q){B=B.next,q===Ia&&(K=!0);continue}else Z={lane:0,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},N===null?(E=N=Z,_=d):N=N.next=Z,De.lanes|=q,Lr|=q;Z=B.action,zs&&a(d,Z),d=B.hasEagerState?B.eagerState:a(d,Z)}else q={lane:Z,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},N===null?(E=N=q,_=d):N=N.next=q,De.lanes|=Z,Lr|=Z;B=B.next}while(B!==null&&B!==r);if(N===null?_=d:N.next=E,!On(d,t.memoizedState)&&(Kt=!0,K&&(a=Da,a!==null)))throw a;t.memoizedState=d,t.baseState=_,t.baseQueue=N,l.lastRenderedState=d}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function wf(t){var r=Pt(),a=r.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,d=r.memoizedState;if(h!==null){a.pending=null;var _=h=h.next;do d=t(d,_.action),_=_.next;while(_!==h);On(d,r.memoizedState)||(Kt=!0),r.memoizedState=d,r.baseQueue===null&&(r.baseState=d),a.lastRenderedState=d}return[d,l]}function bg(t,r,a){var l=De,h=Pt(),d=$e;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=r();var _=!On((it||h).memoizedState,a);_&&(h.memoizedState=a,Kt=!0),h=h.queue;var E=Cg.bind(null,l,h,t);if(sl(2048,8,E,[t]),h.getSnapshot!==r||_||Mt!==null&&Mt.memoizedState.tag&1){if(l.flags|=2048,Va(9,Gu(),Ag.bind(null,l,h,a,r),null),ct===null)throw Error(s(349));d||(Dr&124)!==0||wg(l,r,a)}return a}function wg(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=De.updateQueue,r===null?(r=Ef(),De.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function Ag(t,r,a,l){r.value=a,r.getSnapshot=l,Rg(r)&&Ng(t)}function Cg(t,r,a){return a(function(){Rg(r)&&Ng(t)})}function Rg(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!On(t,a)}catch{return!0}}function Ng(t){var r=Aa(t,2);r!==null&&Ln(r,t,2)}function Af(t){var r=An();if(typeof t=="function"){var a=t;if(t=a(),zs){yn(!0);try{a()}finally{yn(!1)}}}return r.memoizedState=r.baseState=t,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:t},r}function Ig(t,r,a,l){return t.baseState=a,bf(t,it,typeof l=="function"?l:tr)}function Ib(t,r,a,l,h){if(Ku(t))throw Error(s(485));if(t=r.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};G.T!==null?a(!0):d.isTransition=!1,l(d),a=r.pending,a===null?(d.next=r.pending=d,Dg(r,d)):(d.next=a.next,r.pending=a.next=d)}}function Dg(t,r){var a=r.action,l=r.payload,h=t.state;if(r.isTransition){var d=G.T,_={};G.T=_;try{var E=a(h,l),N=G.S;N!==null&&N(_,E),Og(t,r,E)}catch(B){Cf(t,r,B)}finally{G.T=d}}else try{d=a(h,l),Og(t,r,d)}catch(B){Cf(t,r,B)}}function Og(t,r,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Mg(t,r,l)},function(l){return Cf(t,r,l)}):Mg(t,r,a)}function Mg(t,r,a){r.status="fulfilled",r.value=a,Pg(r),t.state=a,r=t.pending,r!==null&&(a=r.next,a===r?t.pending=null:(a=a.next,r.next=a,Dg(t,a)))}function Cf(t,r,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=a,Pg(r),r=r.next;while(r!==l)}t.action=null}function Pg(t){t=t.listeners;for(var r=0;r<t.length;r++)(0,t[r])()}function Vg(t,r){return r}function kg(t,r){if($e){var a=ct.formState;if(a!==null){e:{var l=De;if($e){if(St){t:{for(var h=St,d=Ti;h.nodeType!==8;){if(!d){h=null;break t}if(h=ri(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){St=ri(h.nextSibling),l=h.data==="F!";break e}}ks(l)}l=!1}l&&(r=a[0])}}return a=An(),a.memoizedState=a.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vg,lastRenderedState:r},a.queue=l,a=ey.bind(null,De,l),l.dispatch=a,l=Af(!1),d=Of.bind(null,De,!1,l.queue),l=An(),h={state:r,dispatch:null,action:t,pending:null},l.queue=h,a=Ib.bind(null,De,h,d,a),h.dispatch=a,l.memoizedState=t,[r,a,!1]}function xg(t){var r=Pt();return Lg(r,it,t)}function Lg(t,r,a){if(r=bf(t,r,Vg)[0],t=Yu(tr)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var l=rl(r)}catch(_){throw _===Wo?zu:_}else l=r;r=Pt();var h=r.queue,d=h.dispatch;return a!==r.memoizedState&&(De.flags|=2048,Va(9,Gu(),Db.bind(null,h,a),null)),[l,d,t]}function Db(t,r){t.action=r}function Ug(t){var r=Pt(),a=it;if(a!==null)return Lg(r,a,t);Pt(),r=r.memoizedState,a=Pt();var l=a.queue.dispatch;return a.memoizedState=t,[r,l,!1]}function Va(t,r,a,l){return t={tag:t,create:a,deps:l,inst:r,next:null},r=De.updateQueue,r===null&&(r=Ef(),De.updateQueue=r),a=r.lastEffect,a===null?r.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,r.lastEffect=t),t}function Gu(){return{destroy:void 0,resource:void 0}}function zg(){return Pt().memoizedState}function Xu(t,r,a,l){var h=An();l=l===void 0?null:l,De.flags|=t,h.memoizedState=Va(1|r,Gu(),a,l)}function sl(t,r,a,l){var h=Pt();l=l===void 0?null:l;var d=h.memoizedState.inst;it!==null&&l!==null&&gf(l,it.memoizedState.deps)?h.memoizedState=Va(r,d,a,l):(De.flags|=t,h.memoizedState=Va(1|r,d,a,l))}function jg(t,r){Xu(8390656,8,t,r)}function Bg(t,r){sl(2048,8,t,r)}function qg(t,r){return sl(4,2,t,r)}function Hg(t,r){return sl(4,4,t,r)}function Fg(t,r){if(typeof r=="function"){t=t();var a=r(t);return function(){typeof a=="function"?a():r(null)}}if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Yg(t,r,a){a=a!=null?a.concat([t]):null,sl(4,4,Fg.bind(null,r,t),a)}function Rf(){}function Gg(t,r){var a=Pt();r=r===void 0?null:r;var l=a.memoizedState;return r!==null&&gf(r,l[1])?l[0]:(a.memoizedState=[t,r],t)}function Xg(t,r){var a=Pt();r=r===void 0?null:r;var l=a.memoizedState;if(r!==null&&gf(r,l[1]))return l[0];if(l=t(),zs){yn(!0);try{t()}finally{yn(!1)}}return a.memoizedState=[l,r],l}function Nf(t,r,a){return a===void 0||(Dr&1073741824)!==0?t.memoizedState=r:(t.memoizedState=a,t=$y(),De.lanes|=t,Lr|=t,a)}function Kg(t,r,a,l){return On(a,r)?a:Oa.current!==null?(t=Nf(t,a,l),On(t,r)||(Kt=!0),t):(Dr&42)===0?(Kt=!0,t.memoizedState=a):(t=$y(),De.lanes|=t,Lr|=t,r)}function Qg(t,r,a,l,h){var d=re.p;re.p=d!==0&&8>d?d:8;var _=G.T,E={};G.T=E,Of(t,!1,r,a);try{var N=h(),B=G.S;if(B!==null&&B(E,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var K=Cb(N,l);al(t,r,K,xn(t))}else al(t,r,l,xn(t))}catch(Z){al(t,r,{then:function(){},status:"rejected",reason:Z},xn())}finally{re.p=d,G.T=_}}function Ob(){}function If(t,r,a,l){if(t.tag!==5)throw Error(s(476));var h=$g(t).queue;Qg(t,h,r,me,a===null?Ob:function(){return Zg(t),a(l)})}function $g(t){var r=t.memoizedState;if(r!==null)return r;r={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:me},next:null};var a={};return r.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tr,lastRenderedState:a},next:null},t.memoizedState=r,t=t.alternate,t!==null&&(t.memoizedState=r),r}function Zg(t){var r=$g(t).next.queue;al(t,r,{},xn())}function Df(){return un(wl)}function Wg(){return Pt().memoizedState}function Jg(){return Pt().memoizedState}function Mb(t){for(var r=t.return;r!==null;){switch(r.tag){case 24:case 3:var a=xn();t=Nr(a);var l=Ir(r,t,a);l!==null&&(Ln(l,r,a),el(l,r,a)),r={cache:af()},t.payload=r;return}r=r.return}}function Pb(t,r,a){var l=xn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ku(t)?ty(r,a):(a=Qh(t,r,a,l),a!==null&&(Ln(a,t,l),ny(a,r,l)))}function ey(t,r,a){var l=xn();al(t,r,a,l)}function al(t,r,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ku(t))ty(r,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=r.lastRenderedReducer,d!==null))try{var _=r.lastRenderedState,E=d(_,a);if(h.hasEagerState=!0,h.eagerState=E,On(E,_))return Ou(t,r,h,0),ct===null&&Du(),!1}catch{}finally{}if(a=Qh(t,r,h,l),a!==null)return Ln(a,t,l),ny(a,r,l),!0}return!1}function Of(t,r,a,l){if(l={lane:2,revertLane:ud(),action:l,hasEagerState:!1,eagerState:null,next:null},Ku(t)){if(r)throw Error(s(479))}else r=Qh(t,a,l,2),r!==null&&Ln(r,t,2)}function Ku(t){var r=t.alternate;return t===De||r!==null&&r===De}function ty(t,r){Ma=qu=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function ny(t,r,a){if((a&4194048)!==0){var l=r.lanes;l&=t.pendingLanes,a|=l,r.lanes=a,No(t,a)}}var Qu={readContext:un,use:Fu,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useLayoutEffect:At,useInsertionEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useSyncExternalStore:At,useId:At,useHostTransitionStatus:At,useFormState:At,useActionState:At,useOptimistic:At,useMemoCache:At,useCacheRefresh:At},iy={readContext:un,use:Fu,useCallback:function(t,r){return An().memoizedState=[t,r===void 0?null:r],t},useContext:un,useEffect:jg,useImperativeHandle:function(t,r,a){a=a!=null?a.concat([t]):null,Xu(4194308,4,Fg.bind(null,r,t),a)},useLayoutEffect:function(t,r){return Xu(4194308,4,t,r)},useInsertionEffect:function(t,r){Xu(4,2,t,r)},useMemo:function(t,r){var a=An();r=r===void 0?null:r;var l=t();if(zs){yn(!0);try{t()}finally{yn(!1)}}return a.memoizedState=[l,r],l},useReducer:function(t,r,a){var l=An();if(a!==void 0){var h=a(r);if(zs){yn(!0);try{a(r)}finally{yn(!1)}}}else h=r;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=Pb.bind(null,De,t),[l.memoizedState,t]},useRef:function(t){var r=An();return t={current:t},r.memoizedState=t},useState:function(t){t=Af(t);var r=t.queue,a=ey.bind(null,De,r);return r.dispatch=a,[t.memoizedState,a]},useDebugValue:Rf,useDeferredValue:function(t,r){var a=An();return Nf(a,t,r)},useTransition:function(){var t=Af(!1);return t=Qg.bind(null,De,t.queue,!0,!1),An().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,r,a){var l=De,h=An();if($e){if(a===void 0)throw Error(s(407));a=a()}else{if(a=r(),ct===null)throw Error(s(349));(He&124)!==0||wg(l,r,a)}h.memoizedState=a;var d={value:a,getSnapshot:r};return h.queue=d,jg(Cg.bind(null,l,d,t),[t]),l.flags|=2048,Va(9,Gu(),Ag.bind(null,l,d,a,r),null),a},useId:function(){var t=An(),r=ct.identifierPrefix;if($e){var a=Wi,l=Zi;a=(l&~(1<<32-Yt(l)-1)).toString(32)+a,r="«"+r+"R"+a,a=Hu++,0<a&&(r+="H"+a.toString(32)),r+="»"}else a=Rb++,r="«"+r+"r"+a.toString(32)+"»";return t.memoizedState=r},useHostTransitionStatus:Df,useFormState:kg,useActionState:kg,useOptimistic:function(t){var r=An();r.memoizedState=r.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=a,r=Of.bind(null,De,!0,a),a.dispatch=r,[t,r]},useMemoCache:Sf,useCacheRefresh:function(){return An().memoizedState=Mb.bind(null,De)}},ry={readContext:un,use:Fu,useCallback:Gg,useContext:un,useEffect:Bg,useImperativeHandle:Yg,useInsertionEffect:qg,useLayoutEffect:Hg,useMemo:Xg,useReducer:Yu,useRef:zg,useState:function(){return Yu(tr)},useDebugValue:Rf,useDeferredValue:function(t,r){var a=Pt();return Kg(a,it.memoizedState,t,r)},useTransition:function(){var t=Yu(tr)[0],r=Pt().memoizedState;return[typeof t=="boolean"?t:rl(t),r]},useSyncExternalStore:bg,useId:Wg,useHostTransitionStatus:Df,useFormState:xg,useActionState:xg,useOptimistic:function(t,r){var a=Pt();return Ig(a,it,t,r)},useMemoCache:Sf,useCacheRefresh:Jg},Vb={readContext:un,use:Fu,useCallback:Gg,useContext:un,useEffect:Bg,useImperativeHandle:Yg,useInsertionEffect:qg,useLayoutEffect:Hg,useMemo:Xg,useReducer:wf,useRef:zg,useState:function(){return wf(tr)},useDebugValue:Rf,useDeferredValue:function(t,r){var a=Pt();return it===null?Nf(a,t,r):Kg(a,it.memoizedState,t,r)},useTransition:function(){var t=wf(tr)[0],r=Pt().memoizedState;return[typeof t=="boolean"?t:rl(t),r]},useSyncExternalStore:bg,useId:Wg,useHostTransitionStatus:Df,useFormState:Ug,useActionState:Ug,useOptimistic:function(t,r){var a=Pt();return it!==null?Ig(a,it,t,r):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Sf,useCacheRefresh:Jg},ka=null,ol=0;function $u(t){var r=ol;return ol+=1,ka===null&&(ka=[]),pg(ka,t,r)}function ll(t,r){r=r.props.ref,t.ref=r!==void 0?r:null}function Zu(t,r){throw r.$$typeof===b?Error(s(525)):(t=Object.prototype.toString.call(r),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t)))}function sy(t){var r=t._init;return r(t._payload)}function ay(t){function r(L,P){if(t){var j=L.deletions;j===null?(L.deletions=[P],L.flags|=16):j.push(P)}}function a(L,P){if(!t)return null;for(;P!==null;)r(L,P),P=P.sibling;return null}function l(L){for(var P=new Map;L!==null;)L.key!==null?P.set(L.key,L):P.set(L.index,L),L=L.sibling;return P}function h(L,P){return L=$i(L,P),L.index=0,L.sibling=null,L}function d(L,P,j){return L.index=j,t?(j=L.alternate,j!==null?(j=j.index,j<P?(L.flags|=67108866,P):j):(L.flags|=67108866,P)):(L.flags|=1048576,P)}function _(L){return t&&L.alternate===null&&(L.flags|=67108866),L}function E(L,P,j,Q){return P===null||P.tag!==6?(P=Zh(j,L.mode,Q),P.return=L,P):(P=h(P,j),P.return=L,P)}function N(L,P,j,Q){var de=j.type;return de===U?K(L,P,j.props.children,Q,j.key):P!==null&&(P.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===A&&sy(de)===P.type)?(P=h(P,j.props),ll(P,j),P.return=L,P):(P=Pu(j.type,j.key,j.props,null,L.mode,Q),ll(P,j),P.return=L,P)}function B(L,P,j,Q){return P===null||P.tag!==4||P.stateNode.containerInfo!==j.containerInfo||P.stateNode.implementation!==j.implementation?(P=Wh(j,L.mode,Q),P.return=L,P):(P=h(P,j.children||[]),P.return=L,P)}function K(L,P,j,Q,de){return P===null||P.tag!==7?(P=Os(j,L.mode,Q,de),P.return=L,P):(P=h(P,j),P.return=L,P)}function Z(L,P,j){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=Zh(""+P,L.mode,j),P.return=L,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case w:return j=Pu(P.type,P.key,P.props,null,L.mode,j),ll(j,P),j.return=L,j;case k:return P=Wh(P,L.mode,j),P.return=L,P;case A:var Q=P._init;return P=Q(P._payload),Z(L,P,j)}if(Le(P)||V(P))return P=Os(P,L.mode,j,null),P.return=L,P;if(typeof P.then=="function")return Z(L,$u(P),j);if(P.$$typeof===te)return Z(L,Lu(L,P),j);Zu(L,P)}return null}function q(L,P,j,Q){var de=P!==null?P.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return de!==null?null:E(L,P,""+j,Q);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case w:return j.key===de?N(L,P,j,Q):null;case k:return j.key===de?B(L,P,j,Q):null;case A:return de=j._init,j=de(j._payload),q(L,P,j,Q)}if(Le(j)||V(j))return de!==null?null:K(L,P,j,Q,null);if(typeof j.then=="function")return q(L,P,$u(j),Q);if(j.$$typeof===te)return q(L,P,Lu(L,j),Q);Zu(L,j)}return null}function H(L,P,j,Q,de){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return L=L.get(j)||null,E(P,L,""+Q,de);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case w:return L=L.get(Q.key===null?j:Q.key)||null,N(P,L,Q,de);case k:return L=L.get(Q.key===null?j:Q.key)||null,B(P,L,Q,de);case A:var Me=Q._init;return Q=Me(Q._payload),H(L,P,j,Q,de)}if(Le(Q)||V(Q))return L=L.get(j)||null,K(P,L,Q,de,null);if(typeof Q.then=="function")return H(L,P,j,$u(Q),de);if(Q.$$typeof===te)return H(L,P,j,Lu(P,Q),de);Zu(P,Q)}return null}function we(L,P,j,Q){for(var de=null,Me=null,ve=P,be=P=0,$t=null;ve!==null&&be<j.length;be++){ve.index>be?($t=ve,ve=null):$t=ve.sibling;var Ke=q(L,ve,j[be],Q);if(Ke===null){ve===null&&(ve=$t);break}t&&ve&&Ke.alternate===null&&r(L,ve),P=d(Ke,P,be),Me===null?de=Ke:Me.sibling=Ke,Me=Ke,ve=$t}if(be===j.length)return a(L,ve),$e&&Ps(L,be),de;if(ve===null){for(;be<j.length;be++)ve=Z(L,j[be],Q),ve!==null&&(P=d(ve,P,be),Me===null?de=ve:Me.sibling=ve,Me=ve);return $e&&Ps(L,be),de}for(ve=l(ve);be<j.length;be++)$t=H(ve,L,be,j[be],Q),$t!==null&&(t&&$t.alternate!==null&&ve.delete($t.key===null?be:$t.key),P=d($t,P,be),Me===null?de=$t:Me.sibling=$t,Me=$t);return t&&ve.forEach(function(Gr){return r(L,Gr)}),$e&&Ps(L,be),de}function Ee(L,P,j,Q){if(j==null)throw Error(s(151));for(var de=null,Me=null,ve=P,be=P=0,$t=null,Ke=j.next();ve!==null&&!Ke.done;be++,Ke=j.next()){ve.index>be?($t=ve,ve=null):$t=ve.sibling;var Gr=q(L,ve,Ke.value,Q);if(Gr===null){ve===null&&(ve=$t);break}t&&ve&&Gr.alternate===null&&r(L,ve),P=d(Gr,P,be),Me===null?de=Gr:Me.sibling=Gr,Me=Gr,ve=$t}if(Ke.done)return a(L,ve),$e&&Ps(L,be),de;if(ve===null){for(;!Ke.done;be++,Ke=j.next())Ke=Z(L,Ke.value,Q),Ke!==null&&(P=d(Ke,P,be),Me===null?de=Ke:Me.sibling=Ke,Me=Ke);return $e&&Ps(L,be),de}for(ve=l(ve);!Ke.done;be++,Ke=j.next())Ke=H(ve,L,be,Ke.value,Q),Ke!==null&&(t&&Ke.alternate!==null&&ve.delete(Ke.key===null?be:Ke.key),P=d(Ke,P,be),Me===null?de=Ke:Me.sibling=Ke,Me=Ke);return t&&ve.forEach(function(kw){return r(L,kw)}),$e&&Ps(L,be),de}function st(L,P,j,Q){if(typeof j=="object"&&j!==null&&j.type===U&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case w:e:{for(var de=j.key;P!==null;){if(P.key===de){if(de=j.type,de===U){if(P.tag===7){a(L,P.sibling),Q=h(P,j.props.children),Q.return=L,L=Q;break e}}else if(P.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===A&&sy(de)===P.type){a(L,P.sibling),Q=h(P,j.props),ll(Q,j),Q.return=L,L=Q;break e}a(L,P);break}else r(L,P);P=P.sibling}j.type===U?(Q=Os(j.props.children,L.mode,Q,j.key),Q.return=L,L=Q):(Q=Pu(j.type,j.key,j.props,null,L.mode,Q),ll(Q,j),Q.return=L,L=Q)}return _(L);case k:e:{for(de=j.key;P!==null;){if(P.key===de)if(P.tag===4&&P.stateNode.containerInfo===j.containerInfo&&P.stateNode.implementation===j.implementation){a(L,P.sibling),Q=h(P,j.children||[]),Q.return=L,L=Q;break e}else{a(L,P);break}else r(L,P);P=P.sibling}Q=Wh(j,L.mode,Q),Q.return=L,L=Q}return _(L);case A:return de=j._init,j=de(j._payload),st(L,P,j,Q)}if(Le(j))return we(L,P,j,Q);if(V(j)){if(de=V(j),typeof de!="function")throw Error(s(150));return j=de.call(j),Ee(L,P,j,Q)}if(typeof j.then=="function")return st(L,P,$u(j),Q);if(j.$$typeof===te)return st(L,P,Lu(L,j),Q);Zu(L,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,P!==null&&P.tag===6?(a(L,P.sibling),Q=h(P,j),Q.return=L,L=Q):(a(L,P),Q=Zh(j,L.mode,Q),Q.return=L,L=Q),_(L)):a(L,P)}return function(L,P,j,Q){try{ol=0;var de=st(L,P,j,Q);return ka=null,de}catch(ve){if(ve===Wo||ve===zu)throw ve;var Me=Mn(29,ve,null,L.mode);return Me.lanes=Q,Me.return=L,Me}finally{}}}var xa=ay(!0),oy=ay(!1),Xn=$(null),Ei=null;function Or(t){var r=t.alternate;J(Bt,Bt.current&1),J(Xn,t),Ei===null&&(r===null||Oa.current!==null||r.memoizedState!==null)&&(Ei=t)}function ly(t){if(t.tag===22){if(J(Bt,Bt.current),J(Xn,t),Ei===null){var r=t.alternate;r!==null&&r.memoizedState!==null&&(Ei=t)}}else Mr()}function Mr(){J(Bt,Bt.current),J(Xn,Xn.current)}function nr(t){se(Xn),Ei===t&&(Ei=null),se(Bt)}var Bt=$(0);function Wu(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Ed(a)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Mf(t,r,a,l){r=t.memoizedState,a=a(l,r),a=a==null?r:T({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Pf={enqueueSetState:function(t,r,a){t=t._reactInternals;var l=xn(),h=Nr(l);h.payload=r,a!=null&&(h.callback=a),r=Ir(t,h,l),r!==null&&(Ln(r,t,l),el(r,t,l))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var l=xn(),h=Nr(l);h.tag=1,h.payload=r,a!=null&&(h.callback=a),r=Ir(t,h,l),r!==null&&(Ln(r,t,l),el(r,t,l))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=xn(),l=Nr(a);l.tag=2,r!=null&&(l.callback=r),r=Ir(t,l,a),r!==null&&(Ln(r,t,a),el(r,t,a))}};function uy(t,r,a,l,h,d,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,_):r.prototype&&r.prototype.isPureReactComponent?!Fo(a,l)||!Fo(h,d):!0}function cy(t,r,a,l){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,l),r.state!==t&&Pf.enqueueReplaceState(r,r.state,null)}function js(t,r){var a=r;if("ref"in r){a={};for(var l in r)l!=="ref"&&(a[l]=r[l])}if(t=t.defaultProps){a===r&&(a=T({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}var Ju=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function hy(t){Ju(t)}function fy(t){console.error(t)}function dy(t){Ju(t)}function ec(t,r){try{var a=t.onUncaughtError;a(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function my(t,r,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Vf(t,r,a){return a=Nr(a),a.tag=3,a.payload={element:null},a.callback=function(){ec(t,r)},a}function py(t){return t=Nr(t),t.tag=3,t}function gy(t,r,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;t.payload=function(){return h(d)},t.callback=function(){my(r,a,l)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){my(r,a,l),typeof h!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function kb(t,r,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=a.alternate,r!==null&&Qo(r,a,h,!0),a=Xn.current,a!==null){switch(a.tag){case 13:return Ei===null?rd():a.alternate===null&&bt===0&&(bt=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===uf?a.flags|=16384:(r=a.updateQueue,r===null?a.updateQueue=new Set([l]):r.add(l),ad(t,l,h)),!1;case 22:return a.flags|=65536,l===uf?a.flags|=16384:(r=a.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=r):(a=r.retryQueue,a===null?r.retryQueue=new Set([l]):a.add(l)),ad(t,l,h)),!1}throw Error(s(435,a.tag))}return ad(t,l,h),rd(),!1}if($e)return r=Xn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,l!==tf&&(t=Error(s(422),{cause:l}),Ko(Hn(t,a)))):(l!==tf&&(r=Error(s(423),{cause:l}),Ko(Hn(r,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=Hn(l,a),h=Vf(t.stateNode,l,h),ff(t,h),bt!==4&&(bt=2)),!1;var d=Error(s(520),{cause:l});if(d=Hn(d,a),pl===null?pl=[d]:pl.push(d),bt!==4&&(bt=2),r===null)return!0;l=Hn(l,a),a=r;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=Vf(a.stateNode,l,t),ff(a,t),!1;case 1:if(r=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ur===null||!Ur.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=py(h),gy(h,t,a,l),ff(a,h),!1}a=a.return}while(a!==null);return!1}var yy=Error(s(461)),Kt=!1;function nn(t,r,a,l){r.child=t===null?oy(r,null,a,l):xa(r,t.child,a,l)}function vy(t,r,a,l,h){a=a.render;var d=r.ref;if("ref"in l){var _={};for(var E in l)E!=="ref"&&(_[E]=l[E])}else _=l;return Ls(r),l=yf(t,r,a,_,d,h),E=vf(),t!==null&&!Kt?(_f(t,r,h),ir(t,r,h)):($e&&E&&Jh(r),r.flags|=1,nn(t,r,l,h),r.child)}function _y(t,r,a,l,h){if(t===null){var d=a.type;return typeof d=="function"&&!$h(d)&&d.defaultProps===void 0&&a.compare===null?(r.tag=15,r.type=d,Ty(t,r,d,l,h)):(t=Pu(a.type,null,l,r,r.mode,h),t.ref=r.ref,t.return=r,r.child=t)}if(d=t.child,!qf(t,h)){var _=d.memoizedProps;if(a=a.compare,a=a!==null?a:Fo,a(_,l)&&t.ref===r.ref)return ir(t,r,h)}return r.flags|=1,t=$i(d,l),t.ref=r.ref,t.return=r,r.child=t}function Ty(t,r,a,l,h){if(t!==null){var d=t.memoizedProps;if(Fo(d,l)&&t.ref===r.ref)if(Kt=!1,r.pendingProps=l=d,qf(t,h))(t.flags&131072)!==0&&(Kt=!0);else return r.lanes=t.lanes,ir(t,r,h)}return kf(t,r,a,l,h)}function Ey(t,r,a){var l=r.pendingProps,h=l.children,d=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((r.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,t!==null){for(h=r.child=t.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;r.childLanes=d&~l}else r.childLanes=0,r.child=null;return Sy(t,r,l,a)}if((a&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},t!==null&&Uu(r,d!==null?d.cachePool:null),d!==null?Tg(r,d):mf(),ly(r);else return r.lanes=r.childLanes=536870912,Sy(t,r,d!==null?d.baseLanes|a:a,a)}else d!==null?(Uu(r,d.cachePool),Tg(r,d),Mr(),r.memoizedState=null):(t!==null&&Uu(r,null),mf(),Mr());return nn(t,r,h,a),r.child}function Sy(t,r,a,l){var h=lf();return h=h===null?null:{parent:jt._currentValue,pool:h},r.memoizedState={baseLanes:a,cachePool:h},t!==null&&Uu(r,null),mf(),ly(r),t!==null&&Qo(t,r,l,!0),null}function tc(t,r){var a=r.ref;if(a===null)t!==null&&t.ref!==null&&(r.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(r.flags|=4194816)}}function kf(t,r,a,l,h){return Ls(r),a=yf(t,r,a,l,void 0,h),l=vf(),t!==null&&!Kt?(_f(t,r,h),ir(t,r,h)):($e&&l&&Jh(r),r.flags|=1,nn(t,r,a,h),r.child)}function by(t,r,a,l,h,d){return Ls(r),r.updateQueue=null,a=Sg(r,l,a,h),Eg(t),l=vf(),t!==null&&!Kt?(_f(t,r,d),ir(t,r,d)):($e&&l&&Jh(r),r.flags|=1,nn(t,r,a,d),r.child)}function wy(t,r,a,l,h){if(Ls(r),r.stateNode===null){var d=Ca,_=a.contextType;typeof _=="object"&&_!==null&&(d=un(_)),d=new a(l,d),r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Pf,r.stateNode=d,d._reactInternals=r,d=r.stateNode,d.props=l,d.state=r.memoizedState,d.refs={},cf(r),_=a.contextType,d.context=typeof _=="object"&&_!==null?un(_):Ca,d.state=r.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Mf(r,a,_,l),d.state=r.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&Pf.enqueueReplaceState(d,d.state,null),nl(r,l,d,h),tl(),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(t===null){d=r.stateNode;var E=r.memoizedProps,N=js(a,E);d.props=N;var B=d.context,K=a.contextType;_=Ca,typeof K=="object"&&K!==null&&(_=un(K));var Z=a.getDerivedStateFromProps;K=typeof Z=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=r.pendingProps!==E,K||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||B!==_)&&cy(r,d,l,_),Rr=!1;var q=r.memoizedState;d.state=q,nl(r,l,d,h),tl(),B=r.memoizedState,E||q!==B||Rr?(typeof Z=="function"&&(Mf(r,a,Z,l),B=r.memoizedState),(N=Rr||uy(r,a,N,l,q,B,_))?(K||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=B),d.props=l,d.state=B,d.context=_,l=N):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{d=r.stateNode,hf(t,r),_=r.memoizedProps,K=js(a,_),d.props=K,Z=r.pendingProps,q=d.context,B=a.contextType,N=Ca,typeof B=="object"&&B!==null&&(N=un(B)),E=a.getDerivedStateFromProps,(B=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==Z||q!==N)&&cy(r,d,l,N),Rr=!1,q=r.memoizedState,d.state=q,nl(r,l,d,h),tl();var H=r.memoizedState;_!==Z||q!==H||Rr||t!==null&&t.dependencies!==null&&xu(t.dependencies)?(typeof E=="function"&&(Mf(r,a,E,l),H=r.memoizedState),(K=Rr||uy(r,a,K,l,q,H,N)||t!==null&&t.dependencies!==null&&xu(t.dependencies))?(B||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,H,N),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,H,N)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=H),d.props=l,d.state=H,d.context=N,l=K):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(r.flags|=1024),l=!1)}return d=l,tc(t,r),l=(r.flags&128)!==0,d||l?(d=r.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),r.flags|=1,t!==null&&l?(r.child=xa(r,t.child,null,h),r.child=xa(r,null,a,h)):nn(t,r,a,h),r.memoizedState=d.state,t=r.child):t=ir(t,r,h),t}function Ay(t,r,a,l){return Xo(),r.flags|=256,nn(t,r,a,l),r.child}var xf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lf(t){return{baseLanes:t,cachePool:fg()}}function Uf(t,r,a){return t=t!==null?t.childLanes&~a:0,r&&(t|=Kn),t}function Cy(t,r,a){var l=r.pendingProps,h=!1,d=(r.flags&128)!==0,_;if((_=d)||(_=t!==null&&t.memoizedState===null?!1:(Bt.current&2)!==0),_&&(h=!0,r.flags&=-129),_=(r.flags&32)!==0,r.flags&=-33,t===null){if($e){if(h?Or(r):Mr(),$e){var E=St,N;if(N=E){e:{for(N=E,E=Ti;N.nodeType!==8;){if(!E){E=null;break e}if(N=ri(N.nextSibling),N===null){E=null;break e}}E=N}E!==null?(r.memoizedState={dehydrated:E,treeContext:Ms!==null?{id:Zi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},N=Mn(18,null,null,0),N.stateNode=E,N.return=r,r.child=N,bn=r,St=null,N=!0):N=!1}N||ks(r)}if(E=r.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Ed(E)?r.lanes=32:r.lanes=536870912,null;nr(r)}return E=l.children,l=l.fallback,h?(Mr(),h=r.mode,E=nc({mode:"hidden",children:E},h),l=Os(l,h,a,null),E.return=r,l.return=r,E.sibling=l,r.child=E,h=r.child,h.memoizedState=Lf(a),h.childLanes=Uf(t,_,a),r.memoizedState=xf,l):(Or(r),zf(r,E))}if(N=t.memoizedState,N!==null&&(E=N.dehydrated,E!==null)){if(d)r.flags&256?(Or(r),r.flags&=-257,r=jf(t,r,a)):r.memoizedState!==null?(Mr(),r.child=t.child,r.flags|=128,r=null):(Mr(),h=l.fallback,E=r.mode,l=nc({mode:"visible",children:l.children},E),h=Os(h,E,a,null),h.flags|=2,l.return=r,h.return=r,l.sibling=h,r.child=l,xa(r,t.child,null,a),l=r.child,l.memoizedState=Lf(a),l.childLanes=Uf(t,_,a),r.memoizedState=xf,r=h);else if(Or(r),Ed(E)){if(_=E.nextSibling&&E.nextSibling.dataset,_)var B=_.dgst;_=B,l=Error(s(419)),l.stack="",l.digest=_,Ko({value:l,source:null,stack:null}),r=jf(t,r,a)}else if(Kt||Qo(t,r,a,!1),_=(a&t.childLanes)!==0,Kt||_){if(_=ct,_!==null&&(l=a&-a,l=(l&42)!==0?1:_r(l),l=(l&(_.suspendedLanes|a))!==0?0:l,l!==0&&l!==N.retryLane))throw N.retryLane=l,Aa(t,l),Ln(_,t,l),yy;E.data==="$?"||rd(),r=jf(t,r,a)}else E.data==="$?"?(r.flags|=192,r.child=t.child,r=null):(t=N.treeContext,St=ri(E.nextSibling),bn=r,$e=!0,Vs=null,Ti=!1,t!==null&&(Yn[Gn++]=Zi,Yn[Gn++]=Wi,Yn[Gn++]=Ms,Zi=t.id,Wi=t.overflow,Ms=r),r=zf(r,l.children),r.flags|=4096);return r}return h?(Mr(),h=l.fallback,E=r.mode,N=t.child,B=N.sibling,l=$i(N,{mode:"hidden",children:l.children}),l.subtreeFlags=N.subtreeFlags&65011712,B!==null?h=$i(B,h):(h=Os(h,E,a,null),h.flags|=2),h.return=r,l.return=r,l.sibling=h,r.child=l,l=h,h=r.child,E=t.child.memoizedState,E===null?E=Lf(a):(N=E.cachePool,N!==null?(B=jt._currentValue,N=N.parent!==B?{parent:B,pool:B}:N):N=fg(),E={baseLanes:E.baseLanes|a,cachePool:N}),h.memoizedState=E,h.childLanes=Uf(t,_,a),r.memoizedState=xf,l):(Or(r),a=t.child,t=a.sibling,a=$i(a,{mode:"visible",children:l.children}),a.return=r,a.sibling=null,t!==null&&(_=r.deletions,_===null?(r.deletions=[t],r.flags|=16):_.push(t)),r.child=a,r.memoizedState=null,a)}function zf(t,r){return r=nc({mode:"visible",children:r},t.mode),r.return=t,t.child=r}function nc(t,r){return t=Mn(22,t,null,r),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function jf(t,r,a){return xa(r,t.child,null,a),t=zf(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Ry(t,r,a){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r),rf(t.return,r,a)}function Bf(t,r,a,l,h){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=r,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function Ny(t,r,a){var l=r.pendingProps,h=l.revealOrder,d=l.tail;if(nn(t,r,l.children,a),l=Bt.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ry(t,a,r);else if(t.tag===19)Ry(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(J(Bt,l),h){case"forwards":for(a=r.child,h=null;a!==null;)t=a.alternate,t!==null&&Wu(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=r.child,r.child=null):(h=a.sibling,a.sibling=null),Bf(r,!1,h,a,d);break;case"backwards":for(a=null,h=r.child,r.child=null;h!==null;){if(t=h.alternate,t!==null&&Wu(t)===null){r.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}Bf(r,!0,a,null,d);break;case"together":Bf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ir(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),Lr|=r.lanes,(a&r.childLanes)===0)if(t!==null){if(Qo(t,r,a,!1),(a&r.childLanes)===0)return null}else return null;if(t!==null&&r.child!==t.child)throw Error(s(153));if(r.child!==null){for(t=r.child,a=$i(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=$i(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function qf(t,r){return(t.lanes&r)!==0?!0:(t=t.dependencies,!!(t!==null&&xu(t)))}function xb(t,r,a){switch(r.tag){case 3:Ge(r,r.stateNode.containerInfo),Cr(r,jt,t.memoizedState.cache),Xo();break;case 27:case 5:oe(r);break;case 4:Ge(r,r.stateNode.containerInfo);break;case 10:Cr(r,r.type,r.memoizedProps.value);break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(Or(r),r.flags|=128,null):(a&r.child.childLanes)!==0?Cy(t,r,a):(Or(r),t=ir(t,r,a),t!==null?t.sibling:null);Or(r);break;case 19:var h=(t.flags&128)!==0;if(l=(a&r.childLanes)!==0,l||(Qo(t,r,a,!1),l=(a&r.childLanes)!==0),h){if(l)return Ny(t,r,a);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),J(Bt,Bt.current),l)break;return null;case 22:case 23:return r.lanes=0,Ey(t,r,a);case 24:Cr(r,jt,t.memoizedState.cache)}return ir(t,r,a)}function Iy(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps)Kt=!0;else{if(!qf(t,a)&&(r.flags&128)===0)return Kt=!1,xb(t,r,a);Kt=(t.flags&131072)!==0}else Kt=!1,$e&&(r.flags&1048576)!==0&&sg(r,ku,r.index);switch(r.lanes=0,r.tag){case 16:e:{t=r.pendingProps;var l=r.elementType,h=l._init;if(l=h(l._payload),r.type=l,typeof l=="function")$h(l)?(t=js(l,t),r.tag=1,r=wy(null,r,l,t,a)):(r.tag=0,r=kf(null,r,l,t,a));else{if(l!=null){if(h=l.$$typeof,h===_e){r.tag=11,r=vy(null,r,l,t,a);break e}else if(h===M){r.tag=14,r=_y(null,r,l,t,a);break e}}throw r=Oe(l)||l,Error(s(306,r,""))}}return r;case 0:return kf(t,r,r.type,r.pendingProps,a);case 1:return l=r.type,h=js(l,r.pendingProps),wy(t,r,l,h,a);case 3:e:{if(Ge(r,r.stateNode.containerInfo),t===null)throw Error(s(387));l=r.pendingProps;var d=r.memoizedState;h=d.element,hf(t,r),nl(r,l,null,a);var _=r.memoizedState;if(l=_.cache,Cr(r,jt,l),l!==d.cache&&sf(r,[jt],a,!0),tl(),l=_.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:_.cache},r.updateQueue.baseState=d,r.memoizedState=d,r.flags&256){r=Ay(t,r,l,a);break e}else if(l!==h){h=Hn(Error(s(424)),r),Ko(h),r=Ay(t,r,l,a);break e}else{switch(t=r.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(St=ri(t.firstChild),bn=r,$e=!0,Vs=null,Ti=!0,a=oy(r,null,l,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Xo(),l===h){r=ir(t,r,a);break e}nn(t,r,l,a)}r=r.child}return r;case 26:return tc(t,r),t===null?(a=Pv(r.type,null,r.pendingProps,null))?r.memoizedState=a:$e||(a=r.type,t=r.pendingProps,l=gc(pe.current).createElement(a),l[Lt]=r,l[Dt]=t,sn(l,a,t),wt(l),r.stateNode=l):r.memoizedState=Pv(r.type,t.memoizedProps,r.pendingProps,t.memoizedState),null;case 27:return oe(r),t===null&&$e&&(l=r.stateNode=Dv(r.type,r.pendingProps,pe.current),bn=r,Ti=!0,h=St,Br(r.type)?(Sd=h,St=ri(l.firstChild)):St=h),nn(t,r,r.pendingProps.children,a),tc(t,r),t===null&&(r.flags|=4194304),r.child;case 5:return t===null&&$e&&((h=l=St)&&(l=cw(l,r.type,r.pendingProps,Ti),l!==null?(r.stateNode=l,bn=r,St=ri(l.firstChild),Ti=!1,h=!0):h=!1),h||ks(r)),oe(r),h=r.type,d=r.pendingProps,_=t!==null?t.memoizedProps:null,l=d.children,vd(h,d)?l=null:_!==null&&vd(h,_)&&(r.flags|=32),r.memoizedState!==null&&(h=yf(t,r,Nb,null,null,a),wl._currentValue=h),tc(t,r),nn(t,r,l,a),r.child;case 6:return t===null&&$e&&((t=a=St)&&(a=hw(a,r.pendingProps,Ti),a!==null?(r.stateNode=a,bn=r,St=null,t=!0):t=!1),t||ks(r)),null;case 13:return Cy(t,r,a);case 4:return Ge(r,r.stateNode.containerInfo),l=r.pendingProps,t===null?r.child=xa(r,null,l,a):nn(t,r,l,a),r.child;case 11:return vy(t,r,r.type,r.pendingProps,a);case 7:return nn(t,r,r.pendingProps,a),r.child;case 8:return nn(t,r,r.pendingProps.children,a),r.child;case 12:return nn(t,r,r.pendingProps.children,a),r.child;case 10:return l=r.pendingProps,Cr(r,r.type,l.value),nn(t,r,l.children,a),r.child;case 9:return h=r.type._context,l=r.pendingProps.children,Ls(r),h=un(h),l=l(h),r.flags|=1,nn(t,r,l,a),r.child;case 14:return _y(t,r,r.type,r.pendingProps,a);case 15:return Ty(t,r,r.type,r.pendingProps,a);case 19:return Ny(t,r,a);case 31:return l=r.pendingProps,a=r.mode,l={mode:l.mode,children:l.children},t===null?(a=nc(l,a),a.ref=r.ref,r.child=a,a.return=r,r=a):(a=$i(t.child,l),a.ref=r.ref,r.child=a,a.return=r,r=a),r;case 22:return Ey(t,r,a);case 24:return Ls(r),l=un(jt),t===null?(h=lf(),h===null&&(h=ct,d=af(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),r.memoizedState={parent:l,cache:h},cf(r),Cr(r,jt,h)):((t.lanes&a)!==0&&(hf(t,r),nl(r,null,null,a),tl()),h=t.memoizedState,d=r.memoizedState,h.parent!==l?(h={parent:l,cache:l},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),Cr(r,jt,l)):(l=d.cache,Cr(r,jt,l),l!==h.cache&&sf(r,[jt],a,!0))),nn(t,r,r.pendingProps.children,a),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function rr(t){t.flags|=4}function Dy(t,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Uv(r)){if(r=Xn.current,r!==null&&((He&4194048)===He?Ei!==null:(He&62914560)!==He&&(He&536870912)===0||r!==Ei))throw Jo=uf,dg;t.flags|=8192}}function ic(t,r){r!==null&&(t.flags|=4),t.flags&16384&&(r=t.tag!==22?Co():536870912,t.lanes|=r,ja|=r)}function ul(t,r){if(!$e)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Tt(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(r)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,r}function Lb(t,r,a){var l=r.pendingProps;switch(ef(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(r),null;case 1:return Tt(r),null;case 3:return a=r.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),er(jt),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Go(r)?rr(r):t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,lg())),Tt(r),null;case 26:return a=r.memoizedState,t===null?(rr(r),a!==null?(Tt(r),Dy(r,a)):(Tt(r),r.flags&=-16777217)):a?a!==t.memoizedState?(rr(r),Tt(r),Dy(r,a)):(Tt(r),r.flags&=-16777217):(t.memoizedProps!==l&&rr(r),Tt(r),r.flags&=-16777217),null;case 27:Ve(r),a=pe.current;var h=r.type;if(t!==null&&r.stateNode!=null)t.memoizedProps!==l&&rr(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return Tt(r),null}t=ge.current,Go(r)?ag(r):(t=Dv(h,l,a),r.stateNode=t,rr(r))}return Tt(r),null;case 5:if(Ve(r),a=r.type,t!==null&&r.stateNode!=null)t.memoizedProps!==l&&rr(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return Tt(r),null}if(t=ge.current,Go(r))ag(r);else{switch(h=gc(pe.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}t[Lt]=r,t[Dt]=l;e:for(h=r.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===r)break e;for(;h.sibling===null;){if(h.return===null||h.return===r)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}r.stateNode=t;e:switch(sn(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&rr(r)}}return Tt(r),r.flags&=-16777217,null;case 6:if(t&&r.stateNode!=null)t.memoizedProps!==l&&rr(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(s(166));if(t=pe.current,Go(r)){if(t=r.stateNode,a=r.memoizedProps,l=null,h=bn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[Lt]=r,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||bv(t.nodeValue,a)),t||ks(r)}else t=gc(t).createTextNode(l),t[Lt]=r,r.stateNode=t}return Tt(r),null;case 13:if(l=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=Go(r),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Lt]=r}else Xo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Tt(r),h=!1}else h=lg(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(nr(r),r):(nr(r),null)}if(nr(r),(r.flags&128)!==0)return r.lanes=a,r;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=r.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==t&&a&&(r.child.flags|=8192),ic(r,r.updateQueue),Tt(r),null;case 4:return It(),t===null&&dd(r.stateNode.containerInfo),Tt(r),null;case 10:return er(r.type),Tt(r),null;case 19:if(se(Bt),h=r.memoizedState,h===null)return Tt(r),null;if(l=(r.flags&128)!==0,d=h.rendering,d===null)if(l)ul(h,!1);else{if(bt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(d=Wu(t),d!==null){for(r.flags|=128,ul(h,!1),t=d.updateQueue,r.updateQueue=t,ic(r,t),r.subtreeFlags=0,t=a,a=r.child;a!==null;)rg(a,t),a=a.sibling;return J(Bt,Bt.current&1|2),r.child}t=t.sibling}h.tail!==null&&Jt()>ac&&(r.flags|=128,l=!0,ul(h,!1),r.lanes=4194304)}else{if(!l)if(t=Wu(d),t!==null){if(r.flags|=128,l=!0,t=t.updateQueue,r.updateQueue=t,ic(r,t),ul(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!$e)return Tt(r),null}else 2*Jt()-h.renderingStartTime>ac&&a!==536870912&&(r.flags|=128,l=!0,ul(h,!1),r.lanes=4194304);h.isBackwards?(d.sibling=r.child,r.child=d):(t=h.last,t!==null?t.sibling=d:r.child=d,h.last=d)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=Jt(),r.sibling=null,t=Bt.current,J(Bt,l?t&1|2:t&1),r):(Tt(r),null);case 22:case 23:return nr(r),pf(),l=r.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(a&536870912)!==0&&(r.flags&128)===0&&(Tt(r),r.subtreeFlags&6&&(r.flags|=8192)):Tt(r),a=r.updateQueue,a!==null&&ic(r,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==a&&(r.flags|=2048),t!==null&&se(Us),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),r.memoizedState.cache!==a&&(r.flags|=2048),er(jt),Tt(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function Ub(t,r){switch(ef(r),r.tag){case 1:return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return er(jt),It(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 26:case 27:case 5:return Ve(r),null;case 13:if(nr(r),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(s(340));Xo()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return se(Bt),null;case 4:return It(),null;case 10:return er(r.type),null;case 22:case 23:return nr(r),pf(),t!==null&&se(Us),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 24:return er(jt),null;case 25:return null;default:return null}}function Oy(t,r){switch(ef(r),r.tag){case 3:er(jt),It();break;case 26:case 27:case 5:Ve(r);break;case 4:It();break;case 13:nr(r);break;case 19:se(Bt);break;case 10:er(r.type);break;case 22:case 23:nr(r),pf(),t!==null&&se(Us);break;case 24:er(jt)}}function cl(t,r){try{var a=r.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&t)===t){l=void 0;var d=a.create,_=a.inst;l=d(),_.destroy=l}a=a.next}while(a!==h)}}catch(E){at(r,r.return,E)}}function Pr(t,r,a){try{var l=r.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&t)===t){var _=l.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,h=r;var N=a,B=E;try{B()}catch(K){at(h,N,K)}}}l=l.next}while(l!==d)}}catch(K){at(r,r.return,K)}}function My(t){var r=t.updateQueue;if(r!==null){var a=t.stateNode;try{_g(r,a)}catch(l){at(t,t.return,l)}}}function Py(t,r,a){a.props=js(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){at(t,r,l)}}function hl(t,r){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(h){at(t,r,h)}}function Si(t,r){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){at(t,r,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){at(t,r,h)}else a.current=null}function Vy(t){var r=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){at(t,t.return,h)}}function Hf(t,r,a){try{var l=t.stateNode;sw(l,t.type,a,r),l[Dt]=r}catch(h){at(t,t.return,h)}}function ky(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Br(t.type)||t.tag===4}function Ff(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ky(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Br(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yf(t,r,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,r):(r=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,r.appendChild(t),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=pc));else if(l!==4&&(l===27&&Br(t.type)&&(a=t.stateNode,r=null),t=t.child,t!==null))for(Yf(t,r,a),t=t.sibling;t!==null;)Yf(t,r,a),t=t.sibling}function rc(t,r,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(l!==4&&(l===27&&Br(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(rc(t,r,a),t=t.sibling;t!==null;)rc(t,r,a),t=t.sibling}function xy(t){var r=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);sn(r,l,a),r[Lt]=t,r[Dt]=a}catch(d){at(t,t.return,d)}}var sr=!1,Ct=!1,Gf=!1,Ly=typeof WeakSet=="function"?WeakSet:Set,Qt=null;function zb(t,r){if(t=t.containerInfo,gd=Sc,t=Kp(t),Hh(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var _=0,E=-1,N=-1,B=0,K=0,Z=t,q=null;t:for(;;){for(var H;Z!==a||h!==0&&Z.nodeType!==3||(E=_+h),Z!==d||l!==0&&Z.nodeType!==3||(N=_+l),Z.nodeType===3&&(_+=Z.nodeValue.length),(H=Z.firstChild)!==null;)q=Z,Z=H;for(;;){if(Z===t)break t;if(q===a&&++B===h&&(E=_),q===d&&++K===l&&(N=_),(H=Z.nextSibling)!==null)break;Z=q,q=Z.parentNode}Z=H}a=E===-1||N===-1?null:{start:E,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(yd={focusedElem:t,selectionRange:a},Sc=!1,Qt=r;Qt!==null;)if(r=Qt,t=r.child,(r.subtreeFlags&1024)!==0&&t!==null)t.return=r,Qt=t;else for(;Qt!==null;){switch(r=Qt,d=r.alternate,t=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=r,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var we=js(a.type,h,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(we,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(Ee){at(a,a.return,Ee)}}break;case 3:if((t&1024)!==0){if(t=r.stateNode.containerInfo,a=t.nodeType,a===9)Td(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Td(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=r.sibling,t!==null){t.return=r.return,Qt=t;break}Qt=r.return}}function Uy(t,r,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Vr(t,a),l&4&&cl(5,a);break;case 1:if(Vr(t,a),l&4)if(t=a.stateNode,r===null)try{t.componentDidMount()}catch(_){at(a,a.return,_)}else{var h=js(a.type,r.memoizedProps);r=r.memoizedState;try{t.componentDidUpdate(h,r,t.__reactInternalSnapshotBeforeUpdate)}catch(_){at(a,a.return,_)}}l&64&&My(a),l&512&&hl(a,a.return);break;case 3:if(Vr(t,a),l&64&&(t=a.updateQueue,t!==null)){if(r=null,a.child!==null)switch(a.child.tag){case 27:case 5:r=a.child.stateNode;break;case 1:r=a.child.stateNode}try{_g(t,r)}catch(_){at(a,a.return,_)}}break;case 27:r===null&&l&4&&xy(a);case 26:case 5:Vr(t,a),r===null&&l&4&&Vy(a),l&512&&hl(a,a.return);break;case 12:Vr(t,a);break;case 13:Vr(t,a),l&4&&By(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Kb.bind(null,a),fw(t,a))));break;case 22:if(l=a.memoizedState!==null||sr,!l){r=r!==null&&r.memoizedState!==null||Ct,h=sr;var d=Ct;sr=l,(Ct=r)&&!d?kr(t,a,(a.subtreeFlags&8772)!==0):Vr(t,a),sr=h,Ct=d}break;case 30:break;default:Vr(t,a)}}function zy(t){var r=t.alternate;r!==null&&(t.alternate=null,zy(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&Sr(r)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var yt=null,Cn=!1;function ar(t,r,a){for(a=a.child;a!==null;)jy(t,r,a),a=a.sibling}function jy(t,r,a){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(dt,a)}catch{}switch(a.tag){case 26:Ct||Si(a,r),ar(t,r,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ct||Si(a,r);var l=yt,h=Cn;Br(a.type)&&(yt=a.stateNode,Cn=!1),ar(t,r,a),Tl(a.stateNode),yt=l,Cn=h;break;case 5:Ct||Si(a,r);case 6:if(l=yt,h=Cn,yt=null,ar(t,r,a),yt=l,Cn=h,yt!==null)if(Cn)try{(yt.nodeType===9?yt.body:yt.nodeName==="HTML"?yt.ownerDocument.body:yt).removeChild(a.stateNode)}catch(d){at(a,r,d)}else try{yt.removeChild(a.stateNode)}catch(d){at(a,r,d)}break;case 18:yt!==null&&(Cn?(t=yt,Nv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Nl(t)):Nv(yt,a.stateNode));break;case 4:l=yt,h=Cn,yt=a.stateNode.containerInfo,Cn=!0,ar(t,r,a),yt=l,Cn=h;break;case 0:case 11:case 14:case 15:Ct||Pr(2,a,r),Ct||Pr(4,a,r),ar(t,r,a);break;case 1:Ct||(Si(a,r),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Py(a,r,l)),ar(t,r,a);break;case 21:ar(t,r,a);break;case 22:Ct=(l=Ct)||a.memoizedState!==null,ar(t,r,a),Ct=l;break;default:ar(t,r,a)}}function By(t,r){if(r.memoizedState===null&&(t=r.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Nl(t)}catch(a){at(r,r.return,a)}}function jb(t){switch(t.tag){case 13:case 19:var r=t.stateNode;return r===null&&(r=t.stateNode=new Ly),r;case 22:return t=t.stateNode,r=t._retryCache,r===null&&(r=t._retryCache=new Ly),r;default:throw Error(s(435,t.tag))}}function Xf(t,r){var a=jb(t);r.forEach(function(l){var h=Qb.bind(null,t,l);a.has(l)||(a.add(l),l.then(h,h))})}function Pn(t,r){var a=r.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=t,_=r,E=_;e:for(;E!==null;){switch(E.tag){case 27:if(Br(E.type)){yt=E.stateNode,Cn=!1;break e}break;case 5:yt=E.stateNode,Cn=!1;break e;case 3:case 4:yt=E.stateNode.containerInfo,Cn=!0;break e}E=E.return}if(yt===null)throw Error(s(160));jy(d,_,h),yt=null,Cn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)qy(r,t),r=r.sibling}var ii=null;function qy(t,r){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Pn(r,t),Vn(t),l&4&&(Pr(3,t,t.return),cl(3,t),Pr(5,t,t.return));break;case 1:Pn(r,t),Vn(t),l&512&&(Ct||a===null||Si(a,a.return)),l&64&&sr&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=ii;if(Pn(r,t),Vn(t),l&512&&(Ct||a===null||Si(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[ps]||d[Lt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),sn(d,l,a),d[Lt]=t,wt(d),l=d;break e;case"link":var _=xv("link","href",h).get(l+(a.href||""));if(_){for(var E=0;E<_.length;E++)if(d=_[E],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(E,1);break t}}d=h.createElement(l),sn(d,l,a),h.head.appendChild(d);break;case"meta":if(_=xv("meta","content",h).get(l+(a.content||""))){for(E=0;E<_.length;E++)if(d=_[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(E,1);break t}}d=h.createElement(l),sn(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[Lt]=t,wt(d),l=d}t.stateNode=l}else Lv(h,t.type,t.stateNode);else t.stateNode=kv(h,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?Lv(h,t.type,t.stateNode):kv(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Hf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Pn(r,t),Vn(t),l&512&&(Ct||a===null||Si(a,a.return)),a!==null&&l&4&&Hf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Pn(r,t),Vn(t),l&512&&(Ct||a===null||Si(a,a.return)),t.flags&32){h=t.stateNode;try{zn(h,"")}catch(H){at(t,t.return,H)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,Hf(t,h,a!==null?a.memoizedProps:h)),l&1024&&(Gf=!0);break;case 6:if(Pn(r,t),Vn(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(H){at(t,t.return,H)}}break;case 3:if(_c=null,h=ii,ii=yc(r.containerInfo),Pn(r,t),ii=h,Vn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Nl(r.containerInfo)}catch(H){at(t,t.return,H)}Gf&&(Gf=!1,Hy(t));break;case 4:l=ii,ii=yc(t.stateNode.containerInfo),Pn(r,t),Vn(t),ii=l;break;case 12:Pn(r,t),Vn(t);break;case 13:Pn(r,t),Vn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Jf=Jt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Xf(t,l)));break;case 22:h=t.memoizedState!==null;var N=a!==null&&a.memoizedState!==null,B=sr,K=Ct;if(sr=B||h,Ct=K||N,Pn(r,t),Ct=K,sr=B,Vn(t),l&8192)e:for(r=t.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(a===null||N||sr||Ct||Bs(t)),a=null,r=t;;){if(r.tag===5||r.tag===26){if(a===null){N=a=r;try{if(d=N.stateNode,h)_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{E=N.stateNode;var Z=N.memoizedProps.style,q=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;E.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(H){at(N,N.return,H)}}}else if(r.tag===6){if(a===null){N=r;try{N.stateNode.nodeValue=h?"":N.memoizedProps}catch(H){at(N,N.return,H)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===t)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;a===r&&(a=null),r=r.return}a===r&&(a=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Xf(t,a))));break;case 19:Pn(r,t),Vn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Xf(t,l)));break;case 30:break;case 21:break;default:Pn(r,t),Vn(t)}}function Vn(t){var r=t.flags;if(r&2){try{for(var a,l=t.return;l!==null;){if(ky(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Ff(t);rc(t,d,h);break;case 5:var _=a.stateNode;a.flags&32&&(zn(_,""),a.flags&=-33);var E=Ff(t);rc(t,E,_);break;case 3:case 4:var N=a.stateNode.containerInfo,B=Ff(t);Yf(t,B,N);break;default:throw Error(s(161))}}catch(K){at(t,t.return,K)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Hy(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var r=t;Hy(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),t=t.sibling}}function Vr(t,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Uy(t,r.alternate,r),r=r.sibling}function Bs(t){for(t=t.child;t!==null;){var r=t;switch(r.tag){case 0:case 11:case 14:case 15:Pr(4,r,r.return),Bs(r);break;case 1:Si(r,r.return);var a=r.stateNode;typeof a.componentWillUnmount=="function"&&Py(r,r.return,a),Bs(r);break;case 27:Tl(r.stateNode);case 26:case 5:Si(r,r.return),Bs(r);break;case 22:r.memoizedState===null&&Bs(r);break;case 30:Bs(r);break;default:Bs(r)}t=t.sibling}}function kr(t,r,a){for(a=a&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,h=t,d=r,_=d.flags;switch(d.tag){case 0:case 11:case 15:kr(h,d,a),cl(4,d);break;case 1:if(kr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(B){at(l,l.return,B)}if(l=d,h=l.updateQueue,h!==null){var E=l.stateNode;try{var N=h.shared.hiddenCallbacks;if(N!==null)for(h.shared.hiddenCallbacks=null,h=0;h<N.length;h++)vg(N[h],E)}catch(B){at(l,l.return,B)}}a&&_&64&&My(d),hl(d,d.return);break;case 27:xy(d);case 26:case 5:kr(h,d,a),a&&l===null&&_&4&&Vy(d),hl(d,d.return);break;case 12:kr(h,d,a);break;case 13:kr(h,d,a),a&&_&4&&By(h,d);break;case 22:d.memoizedState===null&&kr(h,d,a),hl(d,d.return);break;case 30:break;default:kr(h,d,a)}r=r.sibling}}function Kf(t,r){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(t=r.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&$o(a))}function Qf(t,r){t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&$o(t))}function bi(t,r,a,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Fy(t,r,a,l),r=r.sibling}function Fy(t,r,a,l){var h=r.flags;switch(r.tag){case 0:case 11:case 15:bi(t,r,a,l),h&2048&&cl(9,r);break;case 1:bi(t,r,a,l);break;case 3:bi(t,r,a,l),h&2048&&(t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&$o(t)));break;case 12:if(h&2048){bi(t,r,a,l),t=r.stateNode;try{var d=r.memoizedProps,_=d.id,E=d.onPostCommit;typeof E=="function"&&E(_,r.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(N){at(r,r.return,N)}}else bi(t,r,a,l);break;case 13:bi(t,r,a,l);break;case 23:break;case 22:d=r.stateNode,_=r.alternate,r.memoizedState!==null?d._visibility&2?bi(t,r,a,l):fl(t,r):d._visibility&2?bi(t,r,a,l):(d._visibility|=2,La(t,r,a,l,(r.subtreeFlags&10256)!==0)),h&2048&&Kf(_,r);break;case 24:bi(t,r,a,l),h&2048&&Qf(r.alternate,r);break;default:bi(t,r,a,l)}}function La(t,r,a,l,h){for(h=h&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var d=t,_=r,E=a,N=l,B=_.flags;switch(_.tag){case 0:case 11:case 15:La(d,_,E,N,h),cl(8,_);break;case 23:break;case 22:var K=_.stateNode;_.memoizedState!==null?K._visibility&2?La(d,_,E,N,h):fl(d,_):(K._visibility|=2,La(d,_,E,N,h)),h&&B&2048&&Kf(_.alternate,_);break;case 24:La(d,_,E,N,h),h&&B&2048&&Qf(_.alternate,_);break;default:La(d,_,E,N,h)}r=r.sibling}}function fl(t,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var a=t,l=r,h=l.flags;switch(l.tag){case 22:fl(a,l),h&2048&&Kf(l.alternate,l);break;case 24:fl(a,l),h&2048&&Qf(l.alternate,l);break;default:fl(a,l)}r=r.sibling}}var dl=8192;function Ua(t){if(t.subtreeFlags&dl)for(t=t.child;t!==null;)Yy(t),t=t.sibling}function Yy(t){switch(t.tag){case 26:Ua(t),t.flags&dl&&t.memoizedState!==null&&Aw(ii,t.memoizedState,t.memoizedProps);break;case 5:Ua(t);break;case 3:case 4:var r=ii;ii=yc(t.stateNode.containerInfo),Ua(t),ii=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=dl,dl=16777216,Ua(t),dl=r):Ua(t));break;default:Ua(t)}}function Gy(t){var r=t.alternate;if(r!==null&&(t=r.child,t!==null)){r.child=null;do r=t.sibling,t.sibling=null,t=r;while(t!==null)}}function ml(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];Qt=l,Ky(l,t)}Gy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Xy(t),t=t.sibling}function Xy(t){switch(t.tag){case 0:case 11:case 15:ml(t),t.flags&2048&&Pr(9,t,t.return);break;case 3:ml(t);break;case 12:ml(t);break;case 22:var r=t.stateNode;t.memoizedState!==null&&r._visibility&2&&(t.return===null||t.return.tag!==13)?(r._visibility&=-3,sc(t)):ml(t);break;default:ml(t)}}function sc(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];Qt=l,Ky(l,t)}Gy(t)}for(t=t.child;t!==null;){switch(r=t,r.tag){case 0:case 11:case 15:Pr(8,r,r.return),sc(r);break;case 22:a=r.stateNode,a._visibility&2&&(a._visibility&=-3,sc(r));break;default:sc(r)}t=t.sibling}}function Ky(t,r){for(;Qt!==null;){var a=Qt;switch(a.tag){case 0:case 11:case 15:Pr(8,a,r);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:$o(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Qt=l;else e:for(a=t;Qt!==null;){l=Qt;var h=l.sibling,d=l.return;if(zy(l),l===a){Qt=null;break e}if(h!==null){h.return=d,Qt=h;break e}Qt=d}}}var Bb={getCacheForType:function(t){var r=un(jt),a=r.data.get(t);return a===void 0&&(a=t(),r.data.set(t,a)),a}},qb=typeof WeakMap=="function"?WeakMap:Map,et=0,ct=null,ke=null,He=0,tt=0,kn=null,xr=!1,za=!1,$f=!1,or=0,bt=0,Lr=0,qs=0,Zf=0,Kn=0,ja=0,pl=null,Rn=null,Wf=!1,Jf=0,ac=1/0,oc=null,Ur=null,rn=0,zr=null,Ba=null,qa=0,ed=0,td=null,Qy=null,gl=0,nd=null;function xn(){if((et&2)!==0&&He!==0)return He&-He;if(G.T!==null){var t=Ia;return t!==0?t:ud()}return Tr()}function $y(){Kn===0&&(Kn=(He&536870912)===0||$e?_n():536870912);var t=Xn.current;return t!==null&&(t.flags|=32),Kn}function Ln(t,r,a){(t===ct&&(tt===2||tt===9)||t.cancelPendingCommit!==null)&&(Ha(t,0),jr(t,He,Kn,!1)),zi(t,a),((et&2)===0||t!==ct)&&(t===ct&&((et&2)===0&&(qs|=a),bt===4&&jr(t,He,Kn,!1)),wi(t))}function Zy(t,r,a){if((et&6)!==0)throw Error(s(327));var l=!a&&(r&124)===0&&(r&t.expiredLanes)===0||ln(t,r),h=l?Yb(t,r):sd(t,r,!0),d=l;do{if(h===0){za&&!l&&jr(t,r,0,!1);break}else{if(a=t.current.alternate,d&&!Hb(a)){h=sd(t,r,!1),d=!1;continue}if(h===2){if(d=r,t.errorRecoveryDisabledLanes&d)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){r=_;e:{var E=t;h=pl;var N=E.current.memoizedState.isDehydrated;if(N&&(Ha(E,_).flags|=256),_=sd(E,_,!1),_!==2){if($f&&!N){E.errorRecoveryDisabledLanes|=d,qs|=d,h=4;break e}d=Rn,Rn=h,d!==null&&(Rn===null?Rn=d:Rn.push.apply(Rn,d))}h=_}if(d=!1,h!==2)continue}}if(h===1){Ha(t,0),jr(t,r,0,!0);break}e:{switch(l=t,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:jr(l,r,Kn,!xr);break e;case 2:Rn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(h=Jf+300-Jt(),10<h)){if(jr(l,r,Kn,!xr),vn(l,0,!0)!==0)break e;l.timeoutHandle=Cv(Wy.bind(null,l,a,Rn,oc,Wf,r,Kn,qs,ja,xr,d,2,-0,0),h);break e}Wy(l,a,Rn,oc,Wf,r,Kn,qs,ja,xr,d,0,-0,0)}}break}while(!0);wi(t)}function Wy(t,r,a,l,h,d,_,E,N,B,K,Z,q,H){if(t.timeoutHandle=-1,Z=r.subtreeFlags,(Z&8192||(Z&16785408)===16785408)&&(bl={stylesheets:null,count:0,unsuspend:ww},Yy(r),Z=Cw(),Z!==null)){t.cancelPendingCommit=Z(sv.bind(null,t,r,d,a,l,h,_,E,N,K,1,q,H)),jr(t,d,_,!B);return}sv(t,r,d,a,l,h,_,E,N)}function Hb(t){for(var r=t;;){var a=r.tag;if((a===0||a===11||a===15)&&r.flags&16384&&(a=r.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!On(d(),h))return!1}catch{return!1}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function jr(t,r,a,l){r&=~Zf,r&=~qs,t.suspendedLanes|=r,t.pingedLanes&=~r,l&&(t.warmLanes|=r),l=t.expirationTimes;for(var h=r;0<h;){var d=31-Yt(h),_=1<<d;l[d]=-1,h&=~_}a!==0&&ui(t,a,r)}function lc(){return(et&6)===0?(yl(0),!1):!0}function id(){if(ke!==null){if(tt===0)var t=ke.return;else t=ke,Ji=xs=null,Tf(t),ka=null,ol=0,t=ke;for(;t!==null;)Oy(t.alternate,t),t=t.return;ke=null}}function Ha(t,r){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ow(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),id(),ct=t,ke=a=$i(t.current,null),He=r,tt=0,kn=null,xr=!1,za=ln(t,r),$f=!1,ja=Kn=Zf=qs=Lr=bt=0,Rn=pl=null,Wf=!1,(r&8)!==0&&(r|=r&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=r;0<l;){var h=31-Yt(l),d=1<<h;r|=t[h],l&=~d}return or=r,Du(),a}function Jy(t,r){De=null,G.H=Qu,r===Wo||r===zu?(r=gg(),tt=3):r===dg?(r=gg(),tt=4):tt=r===yy?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,kn=r,ke===null&&(bt=1,ec(t,Hn(r,t.current)))}function ev(){var t=G.H;return G.H=Qu,t===null?Qu:t}function tv(){var t=G.A;return G.A=Bb,t}function rd(){bt=4,xr||(He&4194048)!==He&&Xn.current!==null||(za=!0),(Lr&134217727)===0&&(qs&134217727)===0||ct===null||jr(ct,He,Kn,!1)}function sd(t,r,a){var l=et;et|=2;var h=ev(),d=tv();(ct!==t||He!==r)&&(oc=null,Ha(t,r)),r=!1;var _=bt;e:do try{if(tt!==0&&ke!==null){var E=ke,N=kn;switch(tt){case 8:id(),_=6;break e;case 3:case 2:case 9:case 6:Xn.current===null&&(r=!0);var B=tt;if(tt=0,kn=null,Fa(t,E,N,B),a&&za){_=0;break e}break;default:B=tt,tt=0,kn=null,Fa(t,E,N,B)}}Fb(),_=bt;break}catch(K){Jy(t,K)}while(!0);return r&&t.shellSuspendCounter++,Ji=xs=null,et=l,G.H=h,G.A=d,ke===null&&(ct=null,He=0,Du()),_}function Fb(){for(;ke!==null;)nv(ke)}function Yb(t,r){var a=et;et|=2;var l=ev(),h=tv();ct!==t||He!==r?(oc=null,ac=Jt()+500,Ha(t,r)):za=ln(t,r);e:do try{if(tt!==0&&ke!==null){r=ke;var d=kn;t:switch(tt){case 1:tt=0,kn=null,Fa(t,r,d,1);break;case 2:case 9:if(mg(d)){tt=0,kn=null,iv(r);break}r=function(){tt!==2&&tt!==9||ct!==t||(tt=7),wi(t)},d.then(r,r);break e;case 3:tt=7;break e;case 4:tt=5;break e;case 7:mg(d)?(tt=0,kn=null,iv(r)):(tt=0,kn=null,Fa(t,r,d,7));break;case 5:var _=null;switch(ke.tag){case 26:_=ke.memoizedState;case 5:case 27:var E=ke;if(!_||Uv(_)){tt=0,kn=null;var N=E.sibling;if(N!==null)ke=N;else{var B=E.return;B!==null?(ke=B,uc(B)):ke=null}break t}}tt=0,kn=null,Fa(t,r,d,5);break;case 6:tt=0,kn=null,Fa(t,r,d,6);break;case 8:id(),bt=6;break e;default:throw Error(s(462))}}Gb();break}catch(K){Jy(t,K)}while(!0);return Ji=xs=null,G.H=l,G.A=h,et=a,ke!==null?0:(ct=null,He=0,Du(),bt)}function Gb(){for(;ke!==null&&!gn();)nv(ke)}function nv(t){var r=Iy(t.alternate,t,or);t.memoizedProps=t.pendingProps,r===null?uc(t):ke=r}function iv(t){var r=t,a=r.alternate;switch(r.tag){case 15:case 0:r=by(a,r,r.pendingProps,r.type,void 0,He);break;case 11:r=by(a,r,r.pendingProps,r.type.render,r.ref,He);break;case 5:Tf(r);default:Oy(a,r),r=ke=rg(r,or),r=Iy(a,r,or)}t.memoizedProps=t.pendingProps,r===null?uc(t):ke=r}function Fa(t,r,a,l){Ji=xs=null,Tf(r),ka=null,ol=0;var h=r.return;try{if(kb(t,h,r,a,He)){bt=1,ec(t,Hn(a,t.current)),ke=null;return}}catch(d){if(h!==null)throw ke=h,d;bt=1,ec(t,Hn(a,t.current)),ke=null;return}r.flags&32768?($e||l===1?t=!0:za||(He&536870912)!==0?t=!1:(xr=t=!0,(l===2||l===9||l===3||l===6)&&(l=Xn.current,l!==null&&l.tag===13&&(l.flags|=16384))),rv(r,t)):uc(r)}function uc(t){var r=t;do{if((r.flags&32768)!==0){rv(r,xr);return}t=r.return;var a=Lb(r.alternate,r,or);if(a!==null){ke=a;return}if(r=r.sibling,r!==null){ke=r;return}ke=r=t}while(r!==null);bt===0&&(bt=5)}function rv(t,r){do{var a=Ub(t.alternate,t);if(a!==null){a.flags&=32767,ke=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!r&&(t=t.sibling,t!==null)){ke=t;return}ke=t=a}while(t!==null);bt=6,ke=null}function sv(t,r,a,l,h,d,_,E,N){t.cancelPendingCommit=null;do cc();while(rn!==0);if((et&6)!==0)throw Error(s(327));if(r!==null){if(r===t.current)throw Error(s(177));if(d=r.lanes|r.childLanes,d|=Kh,Ro(t,a,d,_,E,N),t===ct&&(ke=ct=null,He=0),Ba=r,zr=t,qa=a,ed=d,td=h,Qy=l,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,$b(xi,function(){return cv(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||l){l=G.T,G.T=null,h=re.p,re.p=2,_=et,et|=4;try{zb(t,r,a)}finally{et=_,re.p=h,G.T=l}}rn=1,av(),ov(),lv()}}function av(){if(rn===1){rn=0;var t=zr,r=Ba,a=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||a){a=G.T,G.T=null;var l=re.p;re.p=2;var h=et;et|=4;try{qy(r,t);var d=yd,_=Kp(t.containerInfo),E=d.focusedElem,N=d.selectionRange;if(_!==E&&E&&E.ownerDocument&&Xp(E.ownerDocument.documentElement,E)){if(N!==null&&Hh(E)){var B=N.start,K=N.end;if(K===void 0&&(K=B),"selectionStart"in E)E.selectionStart=B,E.selectionEnd=Math.min(K,E.value.length);else{var Z=E.ownerDocument||document,q=Z&&Z.defaultView||window;if(q.getSelection){var H=q.getSelection(),we=E.textContent.length,Ee=Math.min(N.start,we),st=N.end===void 0?Ee:Math.min(N.end,we);!H.extend&&Ee>st&&(_=st,st=Ee,Ee=_);var L=Gp(E,Ee),P=Gp(E,st);if(L&&P&&(H.rangeCount!==1||H.anchorNode!==L.node||H.anchorOffset!==L.offset||H.focusNode!==P.node||H.focusOffset!==P.offset)){var j=Z.createRange();j.setStart(L.node,L.offset),H.removeAllRanges(),Ee>st?(H.addRange(j),H.extend(P.node,P.offset)):(j.setEnd(P.node,P.offset),H.addRange(j))}}}}for(Z=[],H=E;H=H.parentNode;)H.nodeType===1&&Z.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<Z.length;E++){var Q=Z[E];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}Sc=!!gd,yd=gd=null}finally{et=h,re.p=l,G.T=a}}t.current=r,rn=2}}function ov(){if(rn===2){rn=0;var t=zr,r=Ba,a=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||a){a=G.T,G.T=null;var l=re.p;re.p=2;var h=et;et|=4;try{Uy(t,r.alternate,r)}finally{et=h,re.p=l,G.T=a}}rn=3}}function lv(){if(rn===4||rn===3){rn=0,ut();var t=zr,r=Ba,a=qa,l=Qy;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?rn=5:(rn=0,Ba=zr=null,uv(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(Ur=null),oa(a),r=r.stateNode,Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(dt,r,void 0,(r.current.flags&128)===128)}catch{}if(l!==null){r=G.T,h=re.p,re.p=2,G.T=null;try{for(var d=t.onRecoverableError,_=0;_<l.length;_++){var E=l[_];d(E.value,{componentStack:E.stack})}}finally{G.T=r,re.p=h}}(qa&3)!==0&&cc(),wi(t),h=t.pendingLanes,(a&4194090)!==0&&(h&42)!==0?t===nd?gl++:(gl=0,nd=t):gl=0,yl(0)}}function uv(t,r){(t.pooledCacheLanes&=r)===0&&(r=t.pooledCache,r!=null&&(t.pooledCache=null,$o(r)))}function cc(t){return av(),ov(),lv(),cv()}function cv(){if(rn!==5)return!1;var t=zr,r=ed;ed=0;var a=oa(qa),l=G.T,h=re.p;try{re.p=32>a?32:a,G.T=null,a=td,td=null;var d=zr,_=qa;if(rn=0,Ba=zr=null,qa=0,(et&6)!==0)throw Error(s(331));var E=et;if(et|=4,Xy(d.current),Fy(d,d.current,_,a),et=E,yl(0,!1),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(dt,d)}catch{}return!0}finally{re.p=h,G.T=l,uv(t,r)}}function hv(t,r,a){r=Hn(a,r),r=Vf(t.stateNode,r,2),t=Ir(t,r,2),t!==null&&(zi(t,2),wi(t))}function at(t,r,a){if(t.tag===3)hv(t,t,a);else for(;r!==null;){if(r.tag===3){hv(r,t,a);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ur===null||!Ur.has(l))){t=Hn(a,t),a=py(2),l=Ir(r,a,2),l!==null&&(gy(a,l,r,t),zi(l,2),wi(l));break}}r=r.return}}function ad(t,r,a){var l=t.pingCache;if(l===null){l=t.pingCache=new qb;var h=new Set;l.set(r,h)}else h=l.get(r),h===void 0&&(h=new Set,l.set(r,h));h.has(a)||($f=!0,h.add(a),t=Xb.bind(null,t,r,a),r.then(t,t))}function Xb(t,r,a){var l=t.pingCache;l!==null&&l.delete(r),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ct===t&&(He&a)===a&&(bt===4||bt===3&&(He&62914560)===He&&300>Jt()-Jf?(et&2)===0&&Ha(t,0):Zf|=a,ja===He&&(ja=0)),wi(t)}function fv(t,r){r===0&&(r=Co()),t=Aa(t,r),t!==null&&(zi(t,r),wi(t))}function Kb(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),fv(t,a)}function Qb(t,r){var a=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(r),fv(t,a)}function $b(t,r){return lt(t,r)}var hc=null,Ya=null,od=!1,fc=!1,ld=!1,Hs=0;function wi(t){t!==Ya&&t.next===null&&(Ya===null?hc=Ya=t:Ya=Ya.next=t),fc=!0,od||(od=!0,Wb())}function yl(t,r){if(!ld&&fc){ld=!0;do for(var a=!1,l=hc;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var _=l.suspendedLanes,E=l.pingedLanes;d=(1<<31-Yt(42|t)+1)-1,d&=h&~(_&~E),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,gv(l,d))}else d=He,d=vn(l,l===ct?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||ln(l,d)||(a=!0,gv(l,d));l=l.next}while(a);ld=!1}}function Zb(){dv()}function dv(){fc=od=!1;var t=0;Hs!==0&&(aw()&&(t=Hs),Hs=0);for(var r=Jt(),a=null,l=hc;l!==null;){var h=l.next,d=mv(l,r);d===0?(l.next=null,a===null?hc=h:a.next=h,h===null&&(Ya=a)):(a=l,(t!==0||(d&3)!==0)&&(fc=!0)),l=h}yl(t)}function mv(t,r){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var _=31-Yt(d),E=1<<_,N=h[_];N===-1?((E&a)===0||(E&l)!==0)&&(h[_]=mt(E,r)):N<=r&&(t.expiredLanes|=E),d&=~E}if(r=ct,a=He,a=vn(t,t===r?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===r&&(tt===2||tt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Ft(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||ln(t,a)){if(r=a&-a,r===t.callbackPriority)return r;switch(l!==null&&Ft(l),oa(a)){case 2:case 8:a=vr;break;case 32:a=xi;break;case 268435456:a=In;break;default:a=xi}return l=pv.bind(null,t),a=lt(a,l),t.callbackPriority=r,t.callbackNode=a,r}return l!==null&&l!==null&&Ft(l),t.callbackPriority=2,t.callbackNode=null,2}function pv(t,r){if(rn!==0&&rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(cc()&&t.callbackNode!==a)return null;var l=He;return l=vn(t,t===ct?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Zy(t,l,r),mv(t,Jt()),t.callbackNode!=null&&t.callbackNode===a?pv.bind(null,t):null)}function gv(t,r){if(cc())return null;Zy(t,r,!0)}function Wb(){lw(function(){(et&6)!==0?lt(yr,Zb):dv()})}function ud(){return Hs===0&&(Hs=_n()),Hs}function yv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:da(""+t)}function vv(t,r){var a=r.ownerDocument.createElement("input");return a.name=r.name,a.value=r.value,t.id&&a.setAttribute("form",t.id),r.parentNode.insertBefore(a,r),t=new FormData(t),a.parentNode.removeChild(a),t}function Jb(t,r,a,l,h){if(r==="submit"&&a&&a.stateNode===h){var d=yv((h[Dt]||null).action),_=l.submitter;_&&(r=(r=_[Dt]||null)?yv(r.formAction):_.getAttribute("formAction"),r!==null&&(d=r,_=null));var E=new ma("action","action",null,l,h);t.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Hs!==0){var N=_?vv(h,_):new FormData(h);If(a,{pending:!0,data:N,method:h.method,action:d},null,N)}}else typeof d=="function"&&(E.preventDefault(),N=_?vv(h,_):new FormData(h),If(a,{pending:!0,data:N,method:h.method,action:d},d,N))},currentTarget:h}]})}}for(var cd=0;cd<Xh.length;cd++){var hd=Xh[cd],ew=hd.toLowerCase(),tw=hd[0].toUpperCase()+hd.slice(1);ni(ew,"on"+tw)}ni(Zp,"onAnimationEnd"),ni(Wp,"onAnimationIteration"),ni(Jp,"onAnimationStart"),ni("dblclick","onDoubleClick"),ni("focusin","onFocus"),ni("focusout","onBlur"),ni(vb,"onTransitionRun"),ni(_b,"onTransitionStart"),ni(Tb,"onTransitionCancel"),ni(eg,"onTransitionEnd"),Bi("onMouseEnter",["mouseout","mouseover"]),Bi("onMouseLeave",["mouseout","mouseover"]),Bi("onPointerEnter",["pointerout","pointerover"]),Bi("onPointerLeave",["pointerout","pointerover"]),ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ei("onBeforeInput",["compositionend","keypress","textInput","paste"]),ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vl));function _v(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var d=void 0;if(r)for(var _=l.length-1;0<=_;_--){var E=l[_],N=E.instance,B=E.currentTarget;if(E=E.listener,N!==d&&h.isPropagationStopped())break e;d=E,h.currentTarget=B;try{d(h)}catch(K){Ju(K)}h.currentTarget=null,d=N}else for(_=0;_<l.length;_++){if(E=l[_],N=E.instance,B=E.currentTarget,E=E.listener,N!==d&&h.isPropagationStopped())break e;d=E,h.currentTarget=B;try{d(h)}catch(K){Ju(K)}h.currentTarget=null,d=N}}}}function xe(t,r){var a=r[Io];a===void 0&&(a=r[Io]=new Set);var l=t+"__bubble";a.has(l)||(Tv(r,t,2,!1),a.add(l))}function fd(t,r,a){var l=0;r&&(l|=4),Tv(a,t,l,r)}var dc="_reactListening"+Math.random().toString(36).slice(2);function dd(t){if(!t[dc]){t[dc]=!0,Do.forEach(function(a){a!=="selectionchange"&&(nw.has(a)||fd(a,!1,t),fd(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[dc]||(r[dc]=!0,fd("selectionchange",!1,r))}}function Tv(t,r,a,l){switch(Fv(r)){case 2:var h=Iw;break;case 8:h=Dw;break;default:h=Rd}a=h.bind(null,r,a,t),h=void 0,!Bn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(r,a,{capture:!0,passive:h}):t.addEventListener(r,a,!0):h!==void 0?t.addEventListener(r,a,{passive:h}):t.addEventListener(r,a,!1)}function md(t,r,a,l,h){var d=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var E=l.stateNode.containerInfo;if(E===h)break;if(_===4)for(_=l.return;_!==null;){var N=_.tag;if((N===3||N===4)&&_.stateNode.containerInfo===h)return;_=_.return}for(;E!==null;){if(_=ji(E),_===null)return;if(N=_.tag,N===5||N===6||N===26||N===27){l=d=_;continue e}E=E.parentNode}}l=l.return}pu(function(){var B=d,K=jn(a),Z=[];e:{var q=tg.get(t);if(q!==void 0){var H=ma,we=t;switch(t){case"keypress":if(pi(a)===0)break e;case"keydown":case"keyup":H=Ta;break;case"focusin":we="focus",H=ya;break;case"focusout":we="blur",H=ya;break;case"beforeblur":case"afterblur":H=ya;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=qn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=zh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=bu;break;case Zp:case Wp:case Jp:H=va;break;case eg:H=Au;break;case"scroll":case"scrollend":H=gu;break;case"wheel":H=Ea;break;case"copy":case"cut":case"paste":H=_a;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=qo;break;case"toggle":case"beforetoggle":H=Ru}var Ee=(r&4)!==0,st=!Ee&&(t==="scroll"||t==="scrollend"),L=Ee?q!==null?q+"Capture":null:q;Ee=[];for(var P=B,j;P!==null;){var Q=P;if(j=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||j===null||L===null||(Q=Ss(P,L),Q!=null&&Ee.push(_l(P,Q,j))),st)break;P=P.return}0<Ee.length&&(q=new H(q,we,null,a,K),Z.push({event:q,listeners:Ee}))}}if((r&7)===0){e:{if(q=t==="mouseover"||t==="pointerover",H=t==="mouseout"||t==="pointerout",q&&a!==Fi&&(we=a.relatedTarget||a.fromElement)&&(ji(we)||we[Un]))break e;if((H||q)&&(q=K.window===K?K:(q=K.ownerDocument)?q.defaultView||q.parentWindow:window,H?(we=a.relatedTarget||a.toElement,H=B,we=we?ji(we):null,we!==null&&(st=u(we),Ee=we.tag,we!==st||Ee!==5&&Ee!==27&&Ee!==6)&&(we=null)):(H=null,we=B),H!==we)){if(Ee=qn,Q="onMouseLeave",L="onMouseEnter",P="mouse",(t==="pointerout"||t==="pointerover")&&(Ee=qo,Q="onPointerLeave",L="onPointerEnter",P="pointer"),st=H==null?q:hi(H),j=we==null?q:hi(we),q=new Ee(Q,P+"leave",H,a,K),q.target=st,q.relatedTarget=j,Q=null,ji(K)===B&&(Ee=new Ee(L,P+"enter",we,a,K),Ee.target=j,Ee.relatedTarget=st,Q=Ee),st=Q,H&&we)t:{for(Ee=H,L=we,P=0,j=Ee;j;j=Ga(j))P++;for(j=0,Q=L;Q;Q=Ga(Q))j++;for(;0<P-j;)Ee=Ga(Ee),P--;for(;0<j-P;)L=Ga(L),j--;for(;P--;){if(Ee===L||L!==null&&Ee===L.alternate)break t;Ee=Ga(Ee),L=Ga(L)}Ee=null}else Ee=null;H!==null&&Ev(Z,q,H,Ee,!1),we!==null&&st!==null&&Ev(Z,st,we,Ee,!0)}}e:{if(q=B?hi(B):window,H=q.nodeName&&q.nodeName.toLowerCase(),H==="select"||H==="input"&&q.type==="file")var de=jp;else if(zt(q))if(Bp)de=pb;else{de=db;var Me=fb}else H=q.nodeName,!H||H.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?B&&ko(B.elementType)&&(de=jp):de=mb;if(de&&(de=de(t,B))){Qi(Z,de,a,K);break e}Me&&Me(t,q,B),t==="focusout"&&B&&q.type==="number"&&B.memoizedProps.value!=null&&wr(q,"number",q.value)}switch(Me=B?hi(B):window,t){case"focusin":(zt(Me)||Me.contentEditable==="true")&&(Sa=Me,Fh=B,Yo=null);break;case"focusout":Yo=Fh=Sa=null;break;case"mousedown":Yh=!0;break;case"contextmenu":case"mouseup":case"dragend":Yh=!1,Qp(Z,a,K);break;case"selectionchange":if(yb)break;case"keydown":case"keyup":Qp(Z,a,K)}var ve;if(vi)e:{switch(t){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else Be?F(t,a)&&(be="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(be="onCompositionStart");be&&(v&&a.locale!=="ko"&&(Be||be!=="onCompositionStart"?be==="onCompositionEnd"&&Be&&(ve=Lo()):(mi=K,Ar="value"in mi?mi.value:mi.textContent,Be=!0)),Me=mc(B,be),0<Me.length&&(be=new jo(be,t,null,a,K),Z.push({event:be,listeners:Me}),ve?be.data=ve:(ve=ae(a),ve!==null&&(be.data=ve)))),(ve=p?Ut(t,a):qe(t,a))&&(be=mc(B,"onBeforeInput"),0<be.length&&(Me=new jo("onBeforeInput","beforeinput",null,a,K),Z.push({event:Me,listeners:be}),Me.data=ve)),Jb(Z,t,B,a,K)}_v(Z,r)})}function _l(t,r,a){return{instance:t,listener:r,currentTarget:a}}function mc(t,r){for(var a=r+"Capture",l=[];t!==null;){var h=t,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=Ss(t,a),h!=null&&l.unshift(_l(t,h,d)),h=Ss(t,r),h!=null&&l.push(_l(t,h,d))),t.tag===3)return l;t=t.return}return[]}function Ga(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ev(t,r,a,l,h){for(var d=r._reactName,_=[];a!==null&&a!==l;){var E=a,N=E.alternate,B=E.stateNode;if(E=E.tag,N!==null&&N===l)break;E!==5&&E!==26&&E!==27||B===null||(N=B,h?(B=Ss(a,d),B!=null&&_.unshift(_l(a,B,N))):h||(B=Ss(a,d),B!=null&&_.push(_l(a,B,N)))),a=a.return}_.length!==0&&t.push({event:r,listeners:_})}var iw=/\r\n?/g,rw=/\u0000|\uFFFD/g;function Sv(t){return(typeof t=="string"?t:""+t).replace(iw,`
`).replace(rw,"")}function bv(t,r){return r=Sv(r),Sv(t)===r}function pc(){}function rt(t,r,a,l,h,d){switch(a){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||zn(t,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&zn(t,""+l);break;case"className":fi(t,"class",l);break;case"tabIndex":fi(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":fi(t,a,l);break;case"style":Vo(t,l,d);break;case"data":if(r!=="object"){fi(t,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=da(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(r!=="input"&&rt(t,r,"name",h.name,h,null),rt(t,r,"formEncType",h.formEncType,h,null),rt(t,r,"formMethod",h.formMethod,h,null),rt(t,r,"formTarget",h.formTarget,h,null)):(rt(t,r,"encType",h.encType,h,null),rt(t,r,"method",h.method,h,null),rt(t,r,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=da(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=pc);break;case"onScroll":l!=null&&xe("scroll",t);break;case"onScrollEnd":l!=null&&xe("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=da(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":xe("beforetoggle",t),xe("toggle",t),br(t,"popover",l);break;case"xlinkActuate":en(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":en(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":en(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":en(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":en(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":en(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":en(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":en(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":en(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":br(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Lh.get(a)||a,br(t,a,l))}}function pd(t,r,a,l,h,d){switch(a){case"style":Vo(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?zn(t,l):(typeof l=="number"||typeof l=="bigint")&&zn(t,""+l);break;case"onScroll":l!=null&&xe("scroll",t);break;case"onScrollEnd":l!=null&&xe("scrollend",t);break;case"onClick":l!=null&&(t.onclick=pc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!la.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),r=a.slice(2,h?a.length-7:void 0),d=t[Dt]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(r,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(r,l,h);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):br(t,a,l)}}}function sn(t,r,a){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",t),xe("load",t);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var _=a[d];if(_!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:rt(t,r,d,_,a,null)}}h&&rt(t,r,"srcSet",a.srcSet,a,null),l&&rt(t,r,"src",a.src,a,null);return;case"input":xe("invalid",t);var E=d=_=h=null,N=null,B=null;for(l in a)if(a.hasOwnProperty(l)){var K=a[l];if(K!=null)switch(l){case"name":h=K;break;case"type":_=K;break;case"checked":N=K;break;case"defaultChecked":B=K;break;case"value":d=K;break;case"defaultValue":E=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,r));break;default:rt(t,r,l,K,a,null)}}_s(t,d,E,N,B,_,h,!1),fa(t);return;case"select":xe("invalid",t),l=_=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":_=E;break;case"multiple":l=E;default:rt(t,r,h,E,a,null)}r=d,a=_,t.multiple=!!l,r!=null?Hi(t,!!l,r,!1):a!=null&&Hi(t,!!l,a,!0);return;case"textarea":xe("invalid",t),d=h=l=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":l=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:rt(t,r,_,E,a,null)}Ts(t,l,h,d),fa(t);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(l=a[N],l!=null))switch(N){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:rt(t,r,N,l,a,null)}return;case"dialog":xe("beforetoggle",t),xe("toggle",t),xe("cancel",t),xe("close",t);break;case"iframe":case"object":xe("load",t);break;case"video":case"audio":for(l=0;l<vl.length;l++)xe(vl[l],t);break;case"image":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"embed":case"source":case"link":xe("error",t),xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in a)if(a.hasOwnProperty(B)&&(l=a[B],l!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:rt(t,r,B,l,a,null)}return;default:if(ko(r)){for(K in a)a.hasOwnProperty(K)&&(l=a[K],l!==void 0&&pd(t,r,K,l,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!=null&&rt(t,r,E,l,a,null))}function sw(t,r,a,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,_=null,E=null,N=null,B=null,K=null;for(H in a){var Z=a[H];if(a.hasOwnProperty(H)&&Z!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":N=Z;default:l.hasOwnProperty(H)||rt(t,r,H,null,l,Z)}}for(var q in l){var H=l[q];if(Z=a[q],l.hasOwnProperty(q)&&(H!=null||Z!=null))switch(q){case"type":d=H;break;case"name":h=H;break;case"checked":B=H;break;case"defaultChecked":K=H;break;case"value":_=H;break;case"defaultValue":E=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,r));break;default:H!==Z&&rt(t,r,q,H,l,Z)}}Dn(t,_,E,N,B,K,d,h);return;case"select":H=_=E=q=null;for(d in a)if(N=a[d],a.hasOwnProperty(d)&&N!=null)switch(d){case"value":break;case"multiple":H=N;default:l.hasOwnProperty(d)||rt(t,r,d,null,l,N)}for(h in l)if(d=l[h],N=a[h],l.hasOwnProperty(h)&&(d!=null||N!=null))switch(h){case"value":q=d;break;case"defaultValue":E=d;break;case"multiple":_=d;default:d!==N&&rt(t,r,h,d,l,N)}r=E,a=_,l=H,q!=null?Hi(t,!!a,q,!1):!!l!=!!a&&(r!=null?Hi(t,!!a,r,!0):Hi(t,!!a,a?[]:"",!1));return;case"textarea":H=q=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:rt(t,r,E,null,l,h)}for(_ in l)if(h=l[_],d=a[_],l.hasOwnProperty(_)&&(h!=null||d!=null))switch(_){case"value":q=h;break;case"defaultValue":H=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&rt(t,r,_,h,l,d)}nt(t,q,H);return;case"option":for(var we in a)if(q=a[we],a.hasOwnProperty(we)&&q!=null&&!l.hasOwnProperty(we))switch(we){case"selected":t.selected=!1;break;default:rt(t,r,we,null,l,q)}for(N in l)if(q=l[N],H=a[N],l.hasOwnProperty(N)&&q!==H&&(q!=null||H!=null))switch(N){case"selected":t.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:rt(t,r,N,q,l,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ee in a)q=a[Ee],a.hasOwnProperty(Ee)&&q!=null&&!l.hasOwnProperty(Ee)&&rt(t,r,Ee,null,l,q);for(B in l)if(q=l[B],H=a[B],l.hasOwnProperty(B)&&q!==H&&(q!=null||H!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,r));break;default:rt(t,r,B,q,l,H)}return;default:if(ko(r)){for(var st in a)q=a[st],a.hasOwnProperty(st)&&q!==void 0&&!l.hasOwnProperty(st)&&pd(t,r,st,void 0,l,q);for(K in l)q=l[K],H=a[K],!l.hasOwnProperty(K)||q===H||q===void 0&&H===void 0||pd(t,r,K,q,l,H);return}}for(var L in a)q=a[L],a.hasOwnProperty(L)&&q!=null&&!l.hasOwnProperty(L)&&rt(t,r,L,null,l,q);for(Z in l)q=l[Z],H=a[Z],!l.hasOwnProperty(Z)||q===H||q==null&&H==null||rt(t,r,Z,q,l,H)}var gd=null,yd=null;function gc(t){return t.nodeType===9?t:t.ownerDocument}function wv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Av(t,r){if(t===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&r==="foreignObject"?0:t}function vd(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var _d=null;function aw(){var t=window.event;return t&&t.type==="popstate"?t===_d?!1:(_d=t,!0):(_d=null,!1)}var Cv=typeof setTimeout=="function"?setTimeout:void 0,ow=typeof clearTimeout=="function"?clearTimeout:void 0,Rv=typeof Promise=="function"?Promise:void 0,lw=typeof queueMicrotask=="function"?queueMicrotask:typeof Rv<"u"?function(t){return Rv.resolve(null).then(t).catch(uw)}:Cv;function uw(t){setTimeout(function(){throw t})}function Br(t){return t==="head"}function Nv(t,r){var a=r,l=0,h=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var _=t.ownerDocument;if(a&1&&Tl(_.documentElement),a&2&&Tl(_.body),a&4)for(a=_.head,Tl(a),_=a.firstChild;_;){var E=_.nextSibling,N=_.nodeName;_[ps]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&_.rel.toLowerCase()==="stylesheet"||a.removeChild(_),_=E}}if(h===0){t.removeChild(d),Nl(r);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);Nl(r)}function Td(t){var r=t.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var a=r;switch(r=r.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Td(a),Sr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function cw(t,r,a,l){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ps])switch(r){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(r==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=ri(t.nextSibling),t===null)break}return null}function hw(t,r,a){if(r==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ri(t.nextSibling),t===null))return null;return t}function Ed(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function fw(t,r){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")r();else{var l=function(){r(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function ri(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return t}var Sd=null;function Iv(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}function Dv(t,r,a){switch(r=gc(a),t){case"html":if(t=r.documentElement,!t)throw Error(s(452));return t;case"head":if(t=r.head,!t)throw Error(s(453));return t;case"body":if(t=r.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Tl(t){for(var r=t.attributes;r.length;)t.removeAttributeNode(r[0]);Sr(t)}var Qn=new Map,Ov=new Set;function yc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var lr=re.d;re.d={f:dw,r:mw,D:pw,C:gw,L:yw,m:vw,X:Tw,S:_w,M:Ew};function dw(){var t=lr.f(),r=lc();return t||r}function mw(t){var r=ci(t);r!==null&&r.tag===5&&r.type==="form"?Zg(r):lr.r(t)}var Xa=typeof document>"u"?null:document;function Mv(t,r,a){var l=Xa;if(l&&typeof r=="string"&&r){var h=Ot(r);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),Ov.has(h)||(Ov.add(h),t={rel:t,crossOrigin:a,href:r},l.querySelector(h)===null&&(r=l.createElement("link"),sn(r,"link",t),wt(r),l.head.appendChild(r)))}}function pw(t){lr.D(t),Mv("dns-prefetch",t,null)}function gw(t,r){lr.C(t,r),Mv("preconnect",t,r)}function yw(t,r,a){lr.L(t,r,a);var l=Xa;if(l&&t&&r){var h='link[rel="preload"][as="'+Ot(r)+'"]';r==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+Ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+Ot(a.imageSizes)+'"]')):h+='[href="'+Ot(t)+'"]';var d=h;switch(r){case"style":d=Ka(t);break;case"script":d=Qa(t)}Qn.has(d)||(t=T({rel:"preload",href:r==="image"&&a&&a.imageSrcSet?void 0:t,as:r},a),Qn.set(d,t),l.querySelector(h)!==null||r==="style"&&l.querySelector(El(d))||r==="script"&&l.querySelector(Sl(d))||(r=l.createElement("link"),sn(r,"link",t),wt(r),l.head.appendChild(r)))}}function vw(t,r){lr.m(t,r);var a=Xa;if(a&&t){var l=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+Ot(l)+'"][href="'+Ot(t)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Qa(t)}if(!Qn.has(d)&&(t=T({rel:"modulepreload",href:t},r),Qn.set(d,t),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Sl(d)))return}l=a.createElement("link"),sn(l,"link",t),wt(l),a.head.appendChild(l)}}}function _w(t,r,a){lr.S(t,r,a);var l=Xa;if(l&&t){var h=Tn(l).hoistableStyles,d=Ka(t);r=r||"default";var _=h.get(d);if(!_){var E={loading:0,preload:null};if(_=l.querySelector(El(d)))E.loading=5;else{t=T({rel:"stylesheet",href:t,"data-precedence":r},a),(a=Qn.get(d))&&bd(t,a);var N=_=l.createElement("link");wt(N),sn(N,"link",t),N._p=new Promise(function(B,K){N.onload=B,N.onerror=K}),N.addEventListener("load",function(){E.loading|=1}),N.addEventListener("error",function(){E.loading|=2}),E.loading|=4,vc(_,r,l)}_={type:"stylesheet",instance:_,count:1,state:E},h.set(d,_)}}}function Tw(t,r){lr.X(t,r);var a=Xa;if(a&&t){var l=Tn(a).hoistableScripts,h=Qa(t),d=l.get(h);d||(d=a.querySelector(Sl(h)),d||(t=T({src:t,async:!0},r),(r=Qn.get(h))&&wd(t,r),d=a.createElement("script"),wt(d),sn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function Ew(t,r){lr.M(t,r);var a=Xa;if(a&&t){var l=Tn(a).hoistableScripts,h=Qa(t),d=l.get(h);d||(d=a.querySelector(Sl(h)),d||(t=T({src:t,async:!0,type:"module"},r),(r=Qn.get(h))&&wd(t,r),d=a.createElement("script"),wt(d),sn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function Pv(t,r,a,l){var h=(h=pe.current)?yc(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(r=Ka(a.href),a=Tn(h).hoistableStyles,l=a.get(r),l||(l={type:"style",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ka(a.href);var d=Tn(h).hoistableStyles,_=d.get(t);if(_||(h=h.ownerDocument||h,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,_),(d=h.querySelector(El(t)))&&!d._p&&(_.instance=d,_.state.loading=5),Qn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Qn.set(t,a),d||Sw(h,t,a,_.state))),r&&l===null)throw Error(s(528,""));return _}if(r&&l!==null)throw Error(s(529,""));return null;case"script":return r=a.async,a=a.src,typeof a=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Qa(a),a=Tn(h).hoistableScripts,l=a.get(r),l||(l={type:"script",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ka(t){return'href="'+Ot(t)+'"'}function El(t){return'link[rel="stylesheet"]['+t+"]"}function Vv(t){return T({},t,{"data-precedence":t.precedence,precedence:null})}function Sw(t,r,a,l){t.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=t.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),sn(r,"link",a),wt(r),t.head.appendChild(r))}function Qa(t){return'[src="'+Ot(t)+'"]'}function Sl(t){return"script[async]"+t}function kv(t,r,a){if(r.count++,r.instance===null)switch(r.type){case"style":var l=t.querySelector('style[data-href~="'+Ot(a.href)+'"]');if(l)return r.instance=l,wt(l),l;var h=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),wt(l),sn(l,"style",h),vc(l,a.precedence,t),r.instance=l;case"stylesheet":h=Ka(a.href);var d=t.querySelector(El(h));if(d)return r.state.loading|=4,r.instance=d,wt(d),d;l=Vv(a),(h=Qn.get(h))&&bd(l,h),d=(t.ownerDocument||t).createElement("link"),wt(d);var _=d;return _._p=new Promise(function(E,N){_.onload=E,_.onerror=N}),sn(d,"link",l),r.state.loading|=4,vc(d,a.precedence,t),r.instance=d;case"script":return d=Qa(a.src),(h=t.querySelector(Sl(d)))?(r.instance=h,wt(h),h):(l=a,(h=Qn.get(d))&&(l=T({},a),wd(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),wt(h),sn(h,"link",l),t.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,vc(l,a.precedence,t));return r.instance}function vc(t,r,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,_=0;_<l.length;_++){var E=l[_];if(E.dataset.precedence===r)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(r=a.nodeType===9?a.head:a,r.insertBefore(t,r.firstChild))}function bd(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.title==null&&(t.title=r.title)}function wd(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.integrity==null&&(t.integrity=r.integrity)}var _c=null;function xv(t,r,a){if(_c===null){var l=new Map,h=_c=new Map;h.set(a,l)}else h=_c,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var d=a[h];if(!(d[ps]||d[Lt]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(r)||"";_=t+_;var E=l.get(_);E?E.push(d):l.set(_,[d])}}return l}function Lv(t,r,a){t=t.ownerDocument||t,t.head.insertBefore(a,r==="title"?t.querySelector("head > title"):null)}function bw(t,r,a){if(a===1||r.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return t=r.disabled,typeof r.precedence=="string"&&t==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function Uv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var bl=null;function ww(){}function Aw(t,r,a){if(bl===null)throw Error(s(475));var l=bl;if(r.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=Ka(a.href),d=t.querySelector(El(h));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Tc.bind(l),t.then(l,l)),r.state.loading|=4,r.instance=d,wt(d);return}d=t.ownerDocument||t,a=Vv(a),(h=Qn.get(h))&&bd(a,h),d=d.createElement("link"),wt(d);var _=d;_._p=new Promise(function(E,N){_.onload=E,_.onerror=N}),sn(d,"link",a),r.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(r,t),(t=r.state.preload)&&(r.state.loading&3)===0&&(l.count++,r=Tc.bind(l),t.addEventListener("load",r),t.addEventListener("error",r))}}function Cw(){if(bl===null)throw Error(s(475));var t=bl;return t.stylesheets&&t.count===0&&Ad(t,t.stylesheets),0<t.count?function(r){var a=setTimeout(function(){if(t.stylesheets&&Ad(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Tc(){if(this.count--,this.count===0){if(this.stylesheets)Ad(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ec=null;function Ad(t,r){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ec=new Map,r.forEach(Rw,t),Ec=null,Tc.call(t))}function Rw(t,r){if(!(r.state.loading&4)){var a=Ec.get(t);if(a)var l=a.get(null);else{a=new Map,Ec.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var _=h[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),l=_)}l&&a.set(null,l)}h=r.instance,_=h.getAttribute("data-precedence"),d=a.get(_)||l,d===l&&a.set(null,h),a.set(_,h),this.count++,l=Tc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),r.state.loading|=4}}var wl={$$typeof:te,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function Nw(t,r,a,l,h,d,_,E){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ui(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ui(0),this.hiddenUpdates=Ui(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function zv(t,r,a,l,h,d,_,E,N,B,K,Z){return t=new Nw(t,r,a,_,E,N,B,Z),r=1,d===!0&&(r|=24),d=Mn(3,null,null,r),t.current=d,d.stateNode=t,r=af(),r.refCount++,t.pooledCache=r,r.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:r},cf(d),t}function jv(t){return t?(t=Ca,t):Ca}function Bv(t,r,a,l,h,d){h=jv(h),l.context===null?l.context=h:l.pendingContext=h,l=Nr(r),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Ir(t,l,r),a!==null&&(Ln(a,t,r),el(a,t,r))}function qv(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function Cd(t,r){qv(t,r),(t=t.alternate)&&qv(t,r)}function Hv(t){if(t.tag===13){var r=Aa(t,67108864);r!==null&&Ln(r,t,67108864),Cd(t,67108864)}}var Sc=!0;function Iw(t,r,a,l){var h=G.T;G.T=null;var d=re.p;try{re.p=2,Rd(t,r,a,l)}finally{re.p=d,G.T=h}}function Dw(t,r,a,l){var h=G.T;G.T=null;var d=re.p;try{re.p=8,Rd(t,r,a,l)}finally{re.p=d,G.T=h}}function Rd(t,r,a,l){if(Sc){var h=Nd(l);if(h===null)md(t,r,l,bc,a),Yv(t,l);else if(Mw(h,t,r,a,l))l.stopPropagation();else if(Yv(t,l),r&4&&-1<Ow.indexOf(t)){for(;h!==null;){var d=ci(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=Je(d.pendingLanes);if(_!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var N=1<<31-Yt(_);E.entanglements[1]|=N,_&=~N}wi(d),(et&6)===0&&(ac=Jt()+500,yl(0))}}break;case 13:E=Aa(d,2),E!==null&&Ln(E,d,2),lc(),Cd(d,2)}if(d=Nd(l),d===null&&md(t,r,l,bc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else md(t,r,l,null,a)}}function Nd(t){return t=jn(t),Id(t)}var bc=null;function Id(t){if(bc=null,t=ji(t),t!==null){var r=u(t);if(r===null)t=null;else{var a=r.tag;if(a===13){if(t=f(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null)}}return bc=t,null}function Fv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ra()){case yr:return 2;case vr:return 8;case xi:case ms:return 32;case In:return 268435456;default:return 32}default:return 32}}var Dd=!1,qr=null,Hr=null,Fr=null,Al=new Map,Cl=new Map,Yr=[],Ow="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yv(t,r){switch(t){case"focusin":case"focusout":qr=null;break;case"dragenter":case"dragleave":Hr=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":Al.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cl.delete(r.pointerId)}}function Rl(t,r,a,l,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:r,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},r!==null&&(r=ci(r),r!==null&&Hv(r)),t):(t.eventSystemFlags|=l,r=t.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),t)}function Mw(t,r,a,l,h){switch(r){case"focusin":return qr=Rl(qr,t,r,a,l,h),!0;case"dragenter":return Hr=Rl(Hr,t,r,a,l,h),!0;case"mouseover":return Fr=Rl(Fr,t,r,a,l,h),!0;case"pointerover":var d=h.pointerId;return Al.set(d,Rl(Al.get(d)||null,t,r,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,Cl.set(d,Rl(Cl.get(d)||null,t,r,a,l,h)),!0}return!1}function Gv(t){var r=ji(t.target);if(r!==null){var a=u(r);if(a!==null){if(r=a.tag,r===13){if(r=f(a),r!==null){t.blockedOn=r,lu(t.priority,function(){if(a.tag===13){var l=xn();l=_r(l);var h=Aa(a,l);h!==null&&Ln(h,a,l),Cd(a,l)}});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wc(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=Nd(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Fi=l,a.target.dispatchEvent(l),Fi=null}else return r=ci(a),r!==null&&Hv(r),t.blockedOn=a,!1;r.shift()}return!0}function Xv(t,r,a){wc(t)&&a.delete(r)}function Pw(){Dd=!1,qr!==null&&wc(qr)&&(qr=null),Hr!==null&&wc(Hr)&&(Hr=null),Fr!==null&&wc(Fr)&&(Fr=null),Al.forEach(Xv),Cl.forEach(Xv)}function Ac(t,r){t.blockedOn===r&&(t.blockedOn=null,Dd||(Dd=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Pw)))}var Cc=null;function Kv(t){Cc!==t&&(Cc=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Cc===t&&(Cc=null);for(var r=0;r<t.length;r+=3){var a=t[r],l=t[r+1],h=t[r+2];if(typeof l!="function"){if(Id(l||a)===null)continue;break}var d=ci(a);d!==null&&(t.splice(r,3),r-=3,If(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function Nl(t){function r(N){return Ac(N,t)}qr!==null&&Ac(qr,t),Hr!==null&&Ac(Hr,t),Fr!==null&&Ac(Fr,t),Al.forEach(r),Cl.forEach(r);for(var a=0;a<Yr.length;a++){var l=Yr[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Yr.length&&(a=Yr[0],a.blockedOn===null);)Gv(a),a.blockedOn===null&&Yr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],_=h[Dt]||null;if(typeof d=="function")_||Kv(a);else if(_){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,_=d[Dt]||null)E=_.formAction;else if(Id(h)!==null)continue}else E=_.action;typeof E=="function"?a[l+1]=E:(a.splice(l,3),l-=3),Kv(a)}}}function Od(t){this._internalRoot=t}Rc.prototype.render=Od.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(s(409));var a=r.current,l=xn();Bv(a,l,t,r,null,null)},Rc.prototype.unmount=Od.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Bv(t.current,2,null,t,null,null),lc(),r[Un]=null}};function Rc(t){this._internalRoot=t}Rc.prototype.unstable_scheduleHydration=function(t){if(t){var r=Tr();t={blockedOn:null,target:t,priority:r};for(var a=0;a<Yr.length&&r!==0&&r<Yr[a].priority;a++);Yr.splice(a,0,t),a===0&&Gv(t)}};var Qv=e.version;if(Qv!=="19.1.0")throw Error(s(527,Qv,"19.1.0"));re.findDOMNode=function(t){var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(r),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var Vw={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nc.isDisabled&&Nc.supportsFiber)try{dt=Nc.inject(Vw),Qe=Nc}catch{}}return Dl.createRoot=function(t,r){if(!o(t))throw Error(s(299));var a=!1,l="",h=hy,d=fy,_=dy,E=null;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(d=r.onCaughtError),r.onRecoverableError!==void 0&&(_=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(E=r.unstable_transitionCallbacks)),r=zv(t,1,!1,null,null,a,l,h,d,_,E,null),t[Un]=r.current,dd(t),new Od(r)},Dl.hydrateRoot=function(t,r,a){if(!o(t))throw Error(s(299));var l=!1,h="",d=hy,_=fy,E=dy,N=null,B=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(N=a.unstable_transitionCallbacks),a.formState!==void 0&&(B=a.formState)),r=zv(t,1,!0,r,a??null,l,h,d,_,E,N,B),r.context=jv(null),a=r.current,l=xn(),l=_r(l),h=Nr(l),h.callback=null,Ir(a,h,l),a=l,r.current.lanes=a,zi(r,a),wi(r),t[Un]=r.current,dd(t),new Rc(r)},Dl.version="19.1.0",Dl}var s_;function Fw(){if(s_)return Vd.exports;s_=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Vd.exports=Hw(),Vd.exports}var Yw=Fw();const Gw=J0(Yw);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Kw=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,s)=>s?s.toUpperCase():n.toLowerCase()),a_=i=>{const e=Kw(i);return e.charAt(0).toUpperCase()+e.slice(1)},eT=(...i)=>i.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim(),Qw=i=>{for(const e in i)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=ue.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:f,...m},g)=>ue.createElement("svg",{ref:g,...$w,width:e,height:e,stroke:i,strokeWidth:s?Number(n)*24/Number(e):n,className:eT("lucide",o),...!u&&!Qw(m)&&{"aria-hidden":"true"},...m},[...f.map(([y,T])=>ue.createElement(y,T)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=(i,e)=>{const n=ue.forwardRef(({className:s,...o},u)=>ue.createElement(Zw,{ref:u,iconNode:e,className:eT(`lucide-${Xw(a_(i))}`,`lucide-${i}`,s),...o}));return n.displayName=a_(i),n};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],Gc=fs("building-2",Ww);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Ud=fs("map-pin",Jw);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],tA=fs("navigation",eA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],iA=fs("rotate-ccw",nA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA=[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]],sA=fs("route",rA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],tT=fs("search",aA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oA=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],nT=fs("users",oA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],eo=fs("x",lA);var Zn=function(i,e){return Number(i.toFixed(e))},uA=function(i,e){return e},vt=function(i,e,n){n&&typeof n=="function"&&n(i,e)},cA=function(i){return-Math.cos(i*Math.PI)/2+.5},hA=function(i){return i},fA=function(i){return i*i},dA=function(i){return i*(2-i)},mA=function(i){return i<.5?2*i*i:-1+(4-2*i)*i},pA=function(i){return i*i*i},gA=function(i){return--i*i*i+1},yA=function(i){return i<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1},vA=function(i){return i*i*i*i},_A=function(i){return 1- --i*i*i*i},TA=function(i){return i<.5?8*i*i*i*i:1-8*--i*i*i*i},EA=function(i){return i*i*i*i*i},SA=function(i){return 1+--i*i*i*i*i},bA=function(i){return i<.5?16*i*i*i*i*i:1+16*--i*i*i*i*i},iT={easeOut:cA,linear:hA,easeInQuad:fA,easeOutQuad:dA,easeInOutQuad:mA,easeInCubic:pA,easeOutCubic:gA,easeInOutCubic:yA,easeInQuart:vA,easeOutQuart:_A,easeInOutQuart:TA,easeInQuint:EA,easeOutQuint:SA,easeInOutQuint:bA},rT=function(i){typeof i=="number"&&cancelAnimationFrame(i)},si=function(i){i.mounted&&(rT(i.animation),i.animate=!1,i.animation=null,i.velocity=null)};function sT(i,e,n,s){if(i.mounted){var o=new Date().getTime(),u=1;si(i),i.animation=function(){if(!i.mounted)return rT(i.animation);var f=new Date().getTime()-o,m=f/n,g=iT[e],y=g(m);f>=n?(s(u),i.animation=null):i.animation&&(s(y),requestAnimationFrame(i.animation))},requestAnimationFrame(i.animation)}}function wA(i){var e=i.scale,n=i.positionX,s=i.positionY;return!(Number.isNaN(e)||Number.isNaN(n)||Number.isNaN(s))}function ds(i,e,n,s){var o=wA(e);if(!(!i.mounted||!o)){var u=i.setTransformState,f=i.transformState,m=f.scale,g=f.positionX,y=f.positionY,T=e.scale-m,b=e.positionX-g,w=e.positionY-y;n===0?u(e.scale,e.positionX,e.positionY):sT(i,s,n,function(k){var U=m+T*k,Y=g+b*k,X=y+w*k;u(U,Y,X)})}}function AA(i,e,n){var s=i.offsetWidth,o=i.offsetHeight,u=e.offsetWidth,f=e.offsetHeight,m=u*n,g=f*n,y=s-m,T=o-g;return{wrapperWidth:s,wrapperHeight:o,newContentWidth:m,newDiffWidth:y,newContentHeight:g,newDiffHeight:T}}var CA=function(i,e,n,s,o,u,f){var m=i>e?n*(f?1:.5):0,g=s>o?u*(f?1:.5):0,y=i-e-m,T=m,b=s-o-g,w=g;return{minPositionX:y,maxPositionX:T,minPositionY:b,maxPositionY:w}},jm=function(i,e){var n=i.wrapperComponent,s=i.contentComponent,o=i.setup.centerZoomedOut;if(!n||!s)throw new Error("Components are not mounted");var u=AA(n,s,e),f=u.wrapperWidth,m=u.wrapperHeight,g=u.newContentWidth,y=u.newDiffWidth,T=u.newContentHeight,b=u.newDiffHeight,w=CA(f,g,y,m,T,b,!!o);return w},am=function(i,e,n,s){return s?i<e?Zn(e,2):i>n?Zn(n,2):Zn(i,2):Zn(i,2)},Xs=function(i,e){var n=jm(i,e);return i.bounds=n,n};function Zl(i,e,n,s,o,u,f){var m=n.minPositionX,g=n.minPositionY,y=n.maxPositionX,T=n.maxPositionY,b=0,w=0;f&&(b=o,w=u);var k=am(i,m-b,y+b,s),U=am(e,g-w,T+w,s);return{x:k,y:U}}function hh(i,e,n,s,o,u){var f=i.transformState,m=f.scale,g=f.positionX,y=f.positionY,T=s-m;if(typeof e!="number"||typeof n!="number")return console.error("Mouse X and Y position were not provided!"),{x:g,y};var b=g-e*T,w=y-n*T,k=Zl(b,w,o,u,0,0,null);return k}function Wl(i,e,n,s,o){var u=o?s:0,f=e-u;return!Number.isNaN(n)&&i>=n?n:!Number.isNaN(e)&&i<=f?f:i}var o_=function(i,e){var n=i.setup.panning.excluded,s=i.isInitialized,o=i.wrapperComponent,u=e.target,f="shadowRoot"in u&&"composedPath"in e,m=f?e.composedPath().some(function(T){return T instanceof Element?o==null?void 0:o.contains(T):!1}):o==null?void 0:o.contains(u),g=s&&u&&m;if(!g)return!1;var y=fh(u,n);return!y},l_=function(i){var e=i.isInitialized,n=i.isPanning,s=i.setup,o=s.panning.disabled,u=e&&n&&!o;return!!u},RA=function(i,e){var n=i.transformState,s=n.positionX,o=n.positionY;i.isPanning=!0;var u=e.clientX,f=e.clientY;i.startCoords={x:u-s,y:f-o}},NA=function(i,e){var n=e.touches,s=i.transformState,o=s.positionX,u=s.positionY;i.isPanning=!0;var f=n.length===1;if(f){var m=n[0].clientX,g=n[0].clientY;i.startCoords={x:m-o,y:g-u}}};function IA(i){var e=i.transformState,n=e.positionX,s=e.positionY,o=e.scale,u=i.setup,f=u.disabled,m=u.limitToBounds,g=u.centerZoomedOut,y=i.wrapperComponent;if(!(f||!y||!i.bounds)){var T=i.bounds,b=T.maxPositionX,w=T.minPositionX,k=T.maxPositionY,U=T.minPositionY,Y=n>b||n<w,X=s>k||s<U,ce=n>b?y.offsetWidth:i.setup.minPositionX||0,ie=s>k?y.offsetHeight:i.setup.minPositionY||0,te=hh(i,ce,ie,o,i.bounds,m||g),_e=te.x,le=te.y;return{scale:o,positionX:Y?_e:n,positionY:X?le:s}}}function aT(i,e,n,s,o){var u=i.setup.limitToBounds,f=i.wrapperComponent,m=i.bounds,g=i.transformState,y=g.scale,T=g.positionX,b=g.positionY;if(!(f===null||m===null||e===T&&n===b)){var w=Zl(e,n,m,u,s,o,f),k=w.x,U=w.y;i.setTransformState(y,k,U)}}var DA=function(i,e,n){var s=i.startCoords,o=i.transformState,u=i.setup.panning,f=u.lockAxisX,m=u.lockAxisY,g=o.positionX,y=o.positionY;if(!s)return{x:g,y};var T=e-s.x,b=n-s.y,w=f?g:T,k=m?y:b;return{x:w,y:k}},ss=function(i,e){var n=i.setup,s=i.transformState,o=s.scale,u=n.minScale,f=n.disablePadding;return e>0&&o>=u&&!f?e:0},OA=function(i){var e=i.mounted,n=i.setup,s=n.disabled,o=n.velocityAnimation,u=i.transformState.scale,f=o.disabled,m=!f||u>1||!s||e;return!!m},MA=function(i){var e=i.mounted,n=i.velocity,s=i.bounds,o=i.setup,u=o.disabled,f=o.velocityAnimation,m=i.transformState.scale,g=f.disabled,y=!g||m>1||!u||e;return!(!y||!n||!s)};function PA(i,e){var n=i.setup.velocityAnimation,s=n.equalToMove,o=n.animationTime,u=n.sensitivity;return s?o*e*u:o}function u_(i,e,n,s,o,u,f,m,g,y){if(o){if(e>f&&n>f){var T=f+(i-f)*y;return T>g?g:T<f?f:T}if(e<u&&n<u){var T=u+(i-u)*y;return T<m?m:T>u?u:T}}return s?e:am(i,u,f,o)}function VA(i,e){var n=1;return e?Math.min(n,i.offsetWidth/window.innerWidth):n}function kA(i,e){var n=OA(i);if(n){var s=i.lastMousePosition,o=i.velocityTime,u=i.setup,f=i.wrapperComponent,m=u.velocityAnimation.equalToMove,g=Date.now();if(s&&o&&f){var y=VA(f,m),T=e.x-s.x,b=e.y-s.y,w=T/y,k=b/y,U=g-o,Y=T*T+b*b,X=Math.sqrt(Y)/U;i.velocity={velocityX:w,velocityY:k,total:X}}i.lastMousePosition=e,i.velocityTime=g}}function xA(i){var e=i.velocity,n=i.bounds,s=i.setup,o=i.wrapperComponent,u=MA(i);if(!(!u||!e||!n||!o)){var f=e.velocityX,m=e.velocityY,g=e.total,y=n.maxPositionX,T=n.minPositionX,b=n.maxPositionY,w=n.minPositionY,k=s.limitToBounds,U=s.alignmentAnimation,Y=s.zoomAnimation,X=s.panning,ce=X.lockAxisY,ie=X.lockAxisX,te=Y.animationType,_e=U.sizeX,le=U.sizeY,Se=U.velocityAlignmentTime,M=Se,A=PA(i,g),I=Math.max(A,M),O=ss(i,_e),x=ss(i,le),V=O*o.offsetWidth/100,C=x*o.offsetHeight/100,Oe=y+V,Le=T-V,G=b+C,re=w-C,me=i.transformState,Pe=new Date().getTime();sT(i,te,I,function(D){var $=i.transformState,se=$.scale,J=$.positionX,ge=$.positionY,Ce=new Date().getTime()-Pe,pe=Ce/M,ot=iT[U.animationType],Ge=1-ot(Math.min(1,pe)),It=1-D,oe=J+f*It,Ve=ge+m*It,We=u_(oe,me.positionX,J,ie,k,T,y,Le,Oe,Ge),lt=u_(Ve,me.positionY,ge,ce,k,w,b,re,G,Ge);(J!==oe||ge!==Ve)&&i.setTransformState(se,We,lt)})}}function c_(i,e){var n=i.transformState.scale;si(i),Xs(i,n),window.TouchEvent!==void 0&&e instanceof TouchEvent?NA(i,e):RA(i,e)}function Bm(i,e){var n=i.transformState.scale,s=i.setup,o=s.minScale,u=s.alignmentAnimation,f=u.disabled,m=u.sizeX,g=u.sizeY,y=u.animationTime,T=u.animationType,b=f||n<o||!m&&!g;if(!b){var w=IA(i);w&&ds(i,w,e??y,T)}}function h_(i,e,n){var s=i.startCoords,o=i.setup,u=o.alignmentAnimation,f=u.sizeX,m=u.sizeY;if(s){var g=DA(i,e,n),y=g.x,T=g.y,b=ss(i,f),w=ss(i,m);kA(i,{x:y,y:T}),aT(i,y,T,b,w)}}function LA(i){if(i.isPanning){var e=i.setup.panning.velocityDisabled,n=i.velocity,s=i.wrapperComponent,o=i.contentComponent;i.isPanning=!1,i.animate=!1,i.animation=null;var u=s==null?void 0:s.getBoundingClientRect(),f=o==null?void 0:o.getBoundingClientRect(),m=(u==null?void 0:u.width)||0,g=(u==null?void 0:u.height)||0,y=(f==null?void 0:f.width)||0,T=(f==null?void 0:f.height)||0,b=m<y||g<T,w=!e&&n&&(n==null?void 0:n.total)>.1&&b;w?xA(i):Bm(i)}}function qm(i,e,n,s){var o=i.setup,u=o.minScale,f=o.maxScale,m=o.limitToBounds,g=Wl(Zn(e,2),u,f,0,!1),y=Xs(i,g),T=hh(i,n,s,g,y,m),b=T.x,w=T.y;return{scale:g,positionX:b,positionY:w}}function oT(i,e,n){var s=i.transformState.scale,o=i.wrapperComponent,u=i.setup,f=u.minScale,m=u.limitToBounds,g=u.zoomAnimation,y=g.disabled,T=g.animationTime,b=g.animationType,w=y||s>=f;if((s>=1||m)&&Bm(i),!(w||!o||!i.mounted)){var k=e||o.offsetWidth/2,U=n||o.offsetHeight/2,Y=qm(i,f,k,U);Y&&ds(i,Y,T,b)}}var es=function(){return es=Object.assign||function(e){for(var n,s=1,o=arguments.length;s<o;s++){n=arguments[s];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},es.apply(this,arguments)};function f_(i,e,n){for(var s=0,o=e.length,u;s<o;s++)(u||!(s in e))&&(u||(u=Array.prototype.slice.call(e,0,s)),u[s]=e[s]);return i.concat(u||Array.prototype.slice.call(e))}var Ic={scale:1,positionX:0,positionY:0},Ol={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},om={wrapperClass:"react-transform-wrapper",contentClass:"react-transform-component"},lT=function(i){var e,n,s,o;return{previousScale:(e=i.initialScale)!==null&&e!==void 0?e:Ic.scale,scale:(n=i.initialScale)!==null&&n!==void 0?n:Ic.scale,positionX:(s=i.initialPositionX)!==null&&s!==void 0?s:Ic.positionX,positionY:(o=i.initialPositionY)!==null&&o!==void 0?o:Ic.positionY}},d_=function(i){var e=es({},Ol);return Object.keys(i).forEach(function(n){var s=typeof i[n]<"u",o=typeof Ol[n]<"u";if(o&&s){var u=Object.prototype.toString.call(Ol[n]),f=u==="[object Object]",m=u==="[object Array]";f?e[n]=es(es({},Ol[n]),i[n]):m?e[n]=f_(f_([],Ol[n],!0),i[n]):e[n]=i[n]}}),e},uT=function(i,e,n){var s=i.transformState.scale,o=i.wrapperComponent,u=i.setup,f=u.maxScale,m=u.minScale,g=u.zoomAnimation,y=u.smooth,T=g.size;if(!o)throw new Error("Wrapper is not mounted");var b=y?s*Math.exp(e*n):s+e*n,w=Wl(Zn(b,3),m,f,T,!1);return w};function cT(i,e,n,s,o){var u=i.wrapperComponent,f=i.transformState,m=f.scale,g=f.positionX,y=f.positionY;if(!u)return console.error("No WrapperComponent found");var T=u.offsetWidth,b=u.offsetHeight,w=(T/2-g)/m,k=(b/2-y)/m,U=uT(i,e,n),Y=qm(i,U,w,k);if(!Y)return console.error("Error during zoom event. New transformation state was not calculated.");ds(i,Y,s,o)}function hT(i,e,n,s){var o=i.setup,u=i.wrapperComponent,f=o.limitToBounds,m=lT(i.props),g=i.transformState,y=g.scale,T=g.positionX,b=g.positionY;if(u){var w=jm(i,m.scale),k=Zl(m.positionX,m.positionY,w,f,0,0,u),U={scale:m.scale,positionX:k.x,positionY:k.y};y===m.scale&&T===m.positionX&&b===m.positionY||(s==null||s(),ds(i,U,e,n))}}function UA(i,e,n,s){var o=i.getBoundingClientRect(),u=e.getBoundingClientRect(),f=n.getBoundingClientRect(),m=u.x*s.scale,g=u.y*s.scale;return{x:(o.x-f.x+m)/s.scale,y:(o.y-f.y+g)/s.scale}}function zA(i,e,n){var s=i.wrapperComponent,o=i.contentComponent,u=i.transformState,f=i.setup,m=f.limitToBounds,g=f.minScale,y=f.maxScale;if(!s||!o)return u;var T=s.getBoundingClientRect(),b=e.getBoundingClientRect(),w=UA(e,s,o,u),k=w.x,U=w.y,Y=b.width/u.scale,X=b.height/u.scale,ce=s.offsetWidth/Y,ie=s.offsetHeight/X,te=Wl(n||Math.min(ce,ie),g,y,0,!1),_e=(T.width-Y*te)/2,le=(T.height-X*te)/2,Se=(T.left-k)*te+_e,M=(T.top-U)*te+le,A=jm(i,te),I=Zl(Se,M,A,m,0,0,s),O=I.x,x=I.y;return{positionX:O,positionY:x,scale:te}}var jA=function(i){return function(e,n,s){e===void 0&&(e=.5),n===void 0&&(n=300),s===void 0&&(s="easeOut"),cT(i,1,e,n,s)}},BA=function(i){return function(e,n,s){e===void 0&&(e=.5),n===void 0&&(n=300),s===void 0&&(s="easeOut"),cT(i,-1,e,n,s)}},qA=function(i){return function(e,n,s,o,u){o===void 0&&(o=300),u===void 0&&(u="easeOut");var f=i.transformState,m=f.positionX,g=f.positionY,y=f.scale,T=i.wrapperComponent,b=i.contentComponent,w=i.setup.disabled;if(!(w||!T||!b)){var k={positionX:Number.isNaN(e)?m:e,positionY:Number.isNaN(n)?g:n,scale:Number.isNaN(s)?y:s};ds(i,k,o,u)}}},HA=function(i){return function(e,n){e===void 0&&(e=200),n===void 0&&(n="easeOut"),hT(i,e,n)}},FA=function(i){return function(e,n,s){n===void 0&&(n=200),s===void 0&&(s="easeOut");var o=i.transformState,u=i.wrapperComponent,f=i.contentComponent;if(u&&f){var m=fT(e||o.scale,u,f);ds(i,m,n,s)}}},YA=function(i){return function(e,n,s,o){s===void 0&&(s=600),o===void 0&&(o="easeOut"),si(i);var u=i.wrapperComponent,f=typeof e=="string"?document.getElementById(e):e;if(u&&f&&u.contains(f)){var m=zA(i,f,n);ds(i,m,s,o)}}},lm=function(i){return{instance:i,zoomIn:jA(i),zoomOut:BA(i),setTransform:qA(i),resetTransform:HA(i),centerView:FA(i),zoomToElement:YA(i)}},GA=function(i){return{instance:i,state:i.transformState}},ht=function(i){var e={};return Object.assign(e,GA(i)),Object.assign(e,lm(i)),e},zd=!1;function jd(){try{var i={get passive(){return zd=!0,!1}};return i}catch{return zd=!1,zd}}var Dc=".".concat(om.wrapperClass),fh=function(i,e){return e.some(function(n){return i.matches("".concat(Dc," ").concat(n,", ").concat(Dc," .").concat(n,", ").concat(Dc," ").concat(n," *, ").concat(Dc," .").concat(n," *"))})},um=function(i){i&&clearTimeout(i)},XA=function(i,e,n){return"translate(".concat(i,"px, ").concat(e,"px) scale(").concat(n,")")},fT=function(i,e,n){var s=n.offsetWidth*i,o=n.offsetHeight*i,u=(e.offsetWidth-s)/2,f=(e.offsetHeight-o)/2;return{scale:i,positionX:u,positionY:f}};function KA(i){return function(e){i.forEach(function(n){typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var QA=function(i,e){var n=i.setup.wheel,s=n.disabled,o=n.wheelDisabled,u=n.touchPadDisabled,f=n.excluded,m=i.isInitialized,g=i.isPanning,y=e.target,T=m&&!g&&!s&&y;if(!T||o&&!e.ctrlKey||u&&e.ctrlKey)return!1;var b=fh(y,f);return!b},$A=function(i){return i?i.deltaY<0?1:-1:0};function ZA(i,e){var n=$A(i),s=uA(e,n);return s}function dT(i,e,n){var s=e.getBoundingClientRect(),o=0,u=0;if("clientX"in i)o=(i.clientX-s.left)/n,u=(i.clientY-s.top)/n;else{var f=i.touches[0];o=(f.clientX-s.left)/n,u=(f.clientY-s.top)/n}return(Number.isNaN(o)||Number.isNaN(u))&&console.error("No mouse or touch offset found"),{x:o,y:u}}var WA=function(i,e,n,s,o){var u=i.transformState.scale,f=i.wrapperComponent,m=i.setup,g=m.maxScale,y=m.minScale,T=m.zoomAnimation,b=m.disablePadding,w=T.size,k=T.disabled;if(!f)throw new Error("Wrapper is not mounted");var U=u+e*n,Y=s?!1:!k,X=Wl(Zn(U,3),y,g,w,Y&&!b);return X},JA=function(i,e){var n=i.previousWheelEvent,s=i.transformState.scale,o=i.setup,u=o.maxScale,f=o.minScale;return n?s<u||s>f||Math.sign(n.deltaY)!==Math.sign(e.deltaY)||n.deltaY>0&&n.deltaY<e.deltaY||n.deltaY<0&&n.deltaY>e.deltaY||Math.sign(n.deltaY)!==Math.sign(e.deltaY):!1},e1=function(i,e){var n=i.setup.pinch,s=n.disabled,o=n.excluded,u=i.isInitialized,f=e.target,m=u&&!s&&f;if(!m)return!1;var g=fh(f,o);return!g},t1=function(i){var e=i.setup.pinch.disabled,n=i.isInitialized,s=i.pinchStartDistance,o=n&&!e&&s;return!!o},n1=function(i,e,n){var s=n.getBoundingClientRect(),o=i.touches,u=Zn(o[0].clientX-s.left,5),f=Zn(o[0].clientY-s.top,5),m=Zn(o[1].clientX-s.left,5),g=Zn(o[1].clientY-s.top,5);return{x:(u+m)/2/e,y:(f+g)/2/e}},mT=function(i){return Math.sqrt(Math.pow(i.touches[0].pageX-i.touches[1].pageX,2)+Math.pow(i.touches[0].pageY-i.touches[1].pageY,2))},i1=function(i,e){var n=i.pinchStartScale,s=i.pinchStartDistance,o=i.setup,u=o.maxScale,f=o.minScale,m=o.zoomAnimation,g=o.disablePadding,y=m.size,T=m.disabled;if(!n||s===null||!e)throw new Error("Pinch touches distance was not provided");if(e<0)return i.transformState.scale;var b=e/s,w=b*n;return Wl(Zn(w,2),f,u,y,!T&&!g)},r1=160,s1=100,a1=function(i,e){var n=i.props,s=n.onWheelStart,o=n.onZoomStart;i.wheelStopEventTimer||(si(i),vt(ht(i),e,s),vt(ht(i),e,o))},o1=function(i,e){var n=i.props,s=n.onWheel,o=n.onZoom,u=i.contentComponent,f=i.setup,m=i.transformState,g=m.scale,y=f.limitToBounds,T=f.centerZoomedOut,b=f.zoomAnimation,w=f.wheel,k=f.disablePadding,U=f.smooth,Y=b.size,X=b.disabled,ce=w.step,ie=w.smoothStep;if(!u)throw new Error("Component not mounted");e.preventDefault(),e.stopPropagation();var te=ZA(e,null),_e=U?ie*Math.abs(e.deltaY):ce,le=WA(i,te,_e,!e.ctrlKey);if(g!==le){var Se=Xs(i,le),M=dT(e,u,g),A=X||Y===0||T||k,I=y&&A,O=hh(i,M.x,M.y,le,Se,I),x=O.x,V=O.y;i.previousWheelEvent=e,i.setTransformState(le,x,V),vt(ht(i),e,s),vt(ht(i),e,o)}},l1=function(i,e){var n=i.props,s=n.onWheelStop,o=n.onZoomStop;um(i.wheelAnimationTimer),i.wheelAnimationTimer=setTimeout(function(){i.mounted&&(oT(i,e.x,e.y),i.wheelAnimationTimer=null)},s1);var u=JA(i,e);u&&(um(i.wheelStopEventTimer),i.wheelStopEventTimer=setTimeout(function(){i.mounted&&(i.wheelStopEventTimer=null,vt(ht(i),e,s),vt(ht(i),e,o))},r1))},pT=function(i){for(var e=0,n=0,s=0;s<2;s+=1)e+=i.touches[s].clientX,n+=i.touches[s].clientY;var o=e/2,u=n/2;return{x:o,y:u}},u1=function(i,e){var n=mT(e);i.pinchStartDistance=n,i.lastDistance=n,i.pinchStartScale=i.transformState.scale,i.isPanning=!1;var s=pT(e);i.pinchLastCenterX=s.x,i.pinchLastCenterY=s.y,si(i)},c1=function(i,e){var n=i.contentComponent,s=i.pinchStartDistance,o=i.wrapperComponent,u=i.transformState.scale,f=i.setup,m=f.limitToBounds,g=f.centerZoomedOut,y=f.zoomAnimation,T=f.alignmentAnimation,b=y.disabled,w=y.size;if(!(s===null||!n)){var k=n1(e,u,n);if(!(!Number.isFinite(k.x)||!Number.isFinite(k.y))){var U=mT(e),Y=i1(i,U),X=pT(e),ce=X.x-(i.pinchLastCenterX||0),ie=X.y-(i.pinchLastCenterY||0);if(!(Y===u&&ce===0&&ie===0)){i.pinchLastCenterX=X.x,i.pinchLastCenterY=X.y;var te=Xs(i,Y),_e=b||w===0||g,le=m&&_e,Se=hh(i,k.x,k.y,Y,te,le),M=Se.x,A=Se.y;i.pinchMidpoint=k,i.lastDistance=U;var I=T.sizeX,O=T.sizeY,x=ss(i,I),V=ss(i,O),C=M+ce,Oe=A+ie,Le=Zl(C,Oe,te,m,x,V,o),G=Le.x,re=Le.y;i.setTransformState(Y,G,re)}}}},h1=function(i){var e=i.pinchMidpoint;i.velocity=null,i.lastDistance=null,i.pinchMidpoint=null,i.pinchStartScale=null,i.pinchStartDistance=null,oT(i,e==null?void 0:e.x,e==null?void 0:e.y)},gT=function(i,e){var n=i.props.onZoomStop,s=i.setup.doubleClick.animationTime;um(i.doubleClickStopEventTimer),i.doubleClickStopEventTimer=setTimeout(function(){i.doubleClickStopEventTimer=null,vt(ht(i),e,n)},s)},f1=function(i,e){var n=i.props,s=n.onZoomStart,o=n.onZoom,u=i.setup.doubleClick,f=u.animationTime,m=u.animationType;vt(ht(i),e,s),hT(i,f,m,function(){return vt(ht(i),e,o)}),gT(i,e)};function d1(i,e){return i==="toggle"?e===1?1:-1:i==="zoomOut"?-1:1}function m1(i,e){var n=i.setup,s=i.doubleClickStopEventTimer,o=i.transformState,u=i.contentComponent,f=o.scale,m=i.props,g=m.onZoomStart,y=m.onZoom,T=n.doubleClick,b=T.disabled,w=T.mode,k=T.step,U=T.animationTime,Y=T.animationType;if(!b&&!s){if(w==="reset")return f1(i,e);if(!u)return console.error("No ContentComponent found");var X=d1(w,i.transformState.scale),ce=uT(i,X,k);if(f!==ce){vt(ht(i),e,g);var ie=dT(e,u,f),te=qm(i,ce,ie.x,ie.y);if(!te)return console.error("Error during zoom event. New transformation state was not calculated.");vt(ht(i),e,y),ds(i,te,U,Y),gT(i,e)}}}var p1=function(i,e){var n=i.isInitialized,s=i.setup,o=i.wrapperComponent,u=s.doubleClick,f=u.disabled,m=u.excluded,g=e.target,y=o==null?void 0:o.contains(g),T=n&&g&&y&&!f;if(!T)return!1;var b=fh(g,m);return!b},g1=function(){function i(e){var n=this;this.mounted=!0,this.pinchLastCenterX=null,this.pinchLastCenterY=null,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){n.initializeWindowEvents()},this.unmount=function(){n.cleanupWindowEvents()},this.update=function(s){n.props=s,Xs(n,n.transformState.scale),n.setup=d_(s)},this.initializeWindowEvents=function(){var s,o,u=jd(),f=(s=n.wrapperComponent)===null||s===void 0?void 0:s.ownerDocument,m=f==null?void 0:f.defaultView;(o=n.wrapperComponent)===null||o===void 0||o.addEventListener("wheel",n.onWheelPanning,u),m==null||m.addEventListener("mousedown",n.onPanningStart,u),m==null||m.addEventListener("mousemove",n.onPanning,u),m==null||m.addEventListener("mouseup",n.onPanningStop,u),f==null||f.addEventListener("mouseleave",n.clearPanning,u),m==null||m.addEventListener("keyup",n.setKeyUnPressed,u),m==null||m.addEventListener("keydown",n.setKeyPressed,u)},this.cleanupWindowEvents=function(){var s,o,u=jd(),f=(s=n.wrapperComponent)===null||s===void 0?void 0:s.ownerDocument,m=f==null?void 0:f.defaultView;m==null||m.removeEventListener("mousedown",n.onPanningStart,u),m==null||m.removeEventListener("mousemove",n.onPanning,u),m==null||m.removeEventListener("mouseup",n.onPanningStop,u),f==null||f.removeEventListener("mouseleave",n.clearPanning,u),m==null||m.removeEventListener("keyup",n.setKeyUnPressed,u),m==null||m.removeEventListener("keydown",n.setKeyPressed,u),document.removeEventListener("mouseleave",n.clearPanning,u),si(n),(o=n.observer)===null||o===void 0||o.disconnect()},this.handleInitializeWrapperEvents=function(s){var o=jd();s.addEventListener("wheel",n.onWheelZoom,o),s.addEventListener("dblclick",n.onDoubleClick,o),s.addEventListener("touchstart",n.onTouchPanningStart,o),s.addEventListener("touchmove",n.onTouchPanning,o),s.addEventListener("touchend",n.onTouchPanningStop,o)},this.handleInitialize=function(s,o){var u=!1,f=n.setup.centerOnInit,m=function(g,y){for(var T=0,b=g;T<b.length;T++){var w=b[T];if(w.target===y)return!0}return!1};n.applyTransformation(),n.onInitCallbacks.forEach(function(g){g(ht(n))}),n.observer=new ResizeObserver(function(g){if(m(g,s)||m(g,o))if(f&&!u){var y=o.offsetWidth,T=o.offsetHeight;(y>0||T>0)&&(u=!0,n.setCenter())}else si(n),Xs(n,n.transformState.scale),Bm(n,0)}),n.observer.observe(s),n.observer.observe(o)},this.onWheelZoom=function(s){var o=n.setup.disabled;if(!o){var u=QA(n,s);if(u){var f=n.isPressingKeys(n.setup.wheel.activationKeys);f&&(a1(n,s),o1(n,s),l1(n,s))}}},this.onWheelPanning=function(s){var o=n.setup,u=o.disabled,f=o.wheel,m=o.panning;if(!(!n.wrapperComponent||!n.contentComponent||u||!f.wheelDisabled||m.disabled||!m.wheelPanning||s.ctrlKey)){s.preventDefault(),s.stopPropagation();var g=n.transformState,y=g.positionX,T=g.positionY,b=y-s.deltaX,w=T-s.deltaY,k=m.lockAxisX?y:b,U=m.lockAxisY?T:w,Y=n.setup.alignmentAnimation,X=Y.sizeX,ce=Y.sizeY,ie=ss(n,X),te=ss(n,ce);k===y&&U===T||aT(n,k,U,ie,te)}},this.onPanningStart=function(s){var o=n.setup.disabled,u=n.props.onPanningStart;if(!o){var f=o_(n,s);if(f){var m=n.isPressingKeys(n.setup.panning.activationKeys);m&&(s.button===0&&!n.setup.panning.allowLeftClickPan||s.button===1&&!n.setup.panning.allowMiddleClickPan||s.button===2&&!n.setup.panning.allowRightClickPan||(s.preventDefault(),s.stopPropagation(),si(n),c_(n,s),vt(ht(n),s,u)))}}},this.onPanning=function(s){var o=n.setup.disabled,u=n.props.onPanning;if(!o){var f=l_(n);if(f){var m=n.isPressingKeys(n.setup.panning.activationKeys);m&&(s.preventDefault(),s.stopPropagation(),h_(n,s.clientX,s.clientY),vt(ht(n),s,u))}}},this.onPanningStop=function(s){var o=n.props.onPanningStop;n.isPanning&&(LA(n),vt(ht(n),s,o))},this.onPinchStart=function(s){var o=n.setup.disabled,u=n.props,f=u.onPinchingStart,m=u.onZoomStart;if(!o){var g=e1(n,s);g&&(u1(n,s),si(n),vt(ht(n),s,f),vt(ht(n),s,m))}},this.onPinch=function(s){var o=n.setup.disabled,u=n.props,f=u.onPinching,m=u.onZoom;if(!o){var g=t1(n);g&&(s.preventDefault(),s.stopPropagation(),c1(n,s),vt(ht(n),s,f),vt(ht(n),s,m))}},this.onPinchStop=function(s){var o=n.props,u=o.onPinchingStop,f=o.onZoomStop;n.pinchStartScale&&(h1(n),vt(ht(n),s,u),vt(ht(n),s,f))},this.onTouchPanningStart=function(s){var o=n.setup.disabled,u=n.props.onPanningStart;if(!o){var f=o_(n,s);if(f){var m=n.lastTouch&&+new Date-n.lastTouch<200&&s.touches.length===1;if(!m){n.lastTouch=+new Date,si(n);var g=s.touches,y=g.length===1,T=g.length===2;y&&(si(n),c_(n,s),vt(ht(n),s,u)),T&&n.onPinchStart(s)}}}},this.onTouchPanning=function(s){var o=n.setup.disabled,u=n.props.onPanning;if(n.isPanning&&s.touches.length===1){if(o)return;var f=l_(n);if(!f)return;s.preventDefault(),s.stopPropagation();var m=s.touches[0];h_(n,m.clientX,m.clientY),vt(ht(n),s,u)}else s.touches.length>1&&n.onPinch(s)},this.onTouchPanningStop=function(s){n.onPanningStop(s),n.onPinchStop(s)},this.onDoubleClick=function(s){var o=n.setup.disabled;if(!o){var u=p1(n,s);u&&m1(n,s)}},this.clearPanning=function(s){n.isPanning&&n.onPanningStop(s)},this.setKeyPressed=function(s){n.pressedKeys[s.key]=!0},this.setKeyUnPressed=function(s){n.pressedKeys[s.key]=!1},this.isPressingKeys=function(s){return s.length?!!s.find(function(o){return n.pressedKeys[o]}):!0},this.setTransformState=function(s,o,u){var f=n.props.onTransformed;if(!Number.isNaN(s)&&!Number.isNaN(o)&&!Number.isNaN(u)){s!==n.transformState.scale&&(n.transformState.previousScale=n.transformState.scale,n.transformState.scale=s),n.transformState.positionX=o,n.transformState.positionY=u,n.applyTransformation();var m=ht(n);n.onChangeCallbacks.forEach(function(g){return g(m)}),vt(m,{scale:s,positionX:o,positionY:u},f)}else console.error("Detected NaN set state values")},this.setCenter=function(){if(n.wrapperComponent&&n.contentComponent){var s=fT(n.transformState.scale,n.wrapperComponent,n.contentComponent);n.setTransformState(s.scale,s.positionX,s.positionY)}},this.handleTransformStyles=function(s,o,u){return n.props.customTransform?n.props.customTransform(s,o,u):XA(s,o,u)},this.applyTransformation=function(){if(!(!n.mounted||!n.contentComponent)){var s=n.transformState,o=s.scale,u=s.positionX,f=s.positionY,m=n.handleTransformStyles(u,f,o);n.contentComponent.style.transform=m}},this.getContext=function(){return ht(n)},this.onChange=function(s){return n.onChangeCallbacks.has(s)||n.onChangeCallbacks.add(s),function(){n.onChangeCallbacks.delete(s)}},this.onInit=function(s){return n.onInitCallbacks.has(s)||n.onInitCallbacks.add(s),function(){n.onInitCallbacks.delete(s)}},this.init=function(s,o){n.cleanupWindowEvents(),n.wrapperComponent=s,n.contentComponent=o,Xs(n,n.transformState.scale),n.handleInitializeWrapperEvents(s),n.handleInitialize(s,o),n.initializeWindowEvents(),n.isInitialized=!0;var u=ht(n);vt(u,void 0,n.props.onInit)},this.props=e,this.setup=d_(this.props),this.transformState=lT(this.props)}return i}(),Hm=Wt.createContext(null),y1=function(i,e){return typeof i=="function"?i(e):i},v1=Wt.forwardRef(function(i,e){var n=ue.useRef(new g1(i)).current,s=y1(i.children,lm(n));return ue.useImperativeHandle(e,function(){return lm(n)},[n]),ue.useEffect(function(){n.update(i)},[n,i]),Wt.createElement(Hm.Provider,{value:n},s)});Wt.forwardRef(function(i,e){var n=ue.useRef(null),s=ue.useContext(Hm);return ue.useEffect(function(){return s.onChange(function(o){if(n.current){var u=0,f=0;n.current.style.transform=s.handleTransformStyles(u,f,1/o.instance.transformState.scale)}})},[s]),Wt.createElement("div",es({},i,{ref:KA([n,e])}))});function _1(i,e){e===void 0&&(e={});var n=e.insertAt;if(!(typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&s.firstChild?s.insertBefore(o,s.firstChild):s.appendChild(o),o.styleSheet?o.styleSheet.cssText=i:o.appendChild(document.createTextNode(i))}}var T1=`.transform-component-module_wrapper__SPB86 {
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
`,m_={wrapper:"transform-component-module_wrapper__SPB86",content:"transform-component-module_content__FBWxo"};_1(T1);var E1=function(i){var e=i.children,n=i.wrapperClass,s=n===void 0?"":n,o=i.contentClass,u=o===void 0?"":o,f=i.wrapperStyle,m=i.contentStyle,g=i.wrapperProps,y=g===void 0?{}:g,T=i.contentProps,b=T===void 0?{}:T,w=ue.useContext(Hm),k=w.init,U=w.cleanupWindowEvents,Y=ue.useRef(null),X=ue.useRef(null);return ue.useEffect(function(){var ce=Y.current,ie=X.current;return ce!==null&&ie!==null&&k&&(k==null||k(ce,ie)),function(){U==null||U()}},[]),Wt.createElement("div",es({},y,{ref:Y,className:"".concat(om.wrapperClass," ").concat(m_.wrapper," ").concat(s),style:f}),Wt.createElement("div",es({},b,{ref:X,className:"".concat(om.contentClass," ").concat(m_.content," ").concat(u),style:m}),e))};const S1=()=>{};var p_={};/**
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
 */const yT=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},b1=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const o=i[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[n++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[n++],f=i[n++],m=i[n++],g=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=i[n++],f=i[n++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},vT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],f=o+1<i.length,m=f?i[o+1]:0,g=o+2<i.length,y=g?i[o+2]:0,T=u>>2,b=(u&3)<<4|m>>4;let w=(m&15)<<2|y>>6,k=y&63;g||(k=64,f||(w=64)),s.push(n[T],n[b],n[w],n[k])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(yT(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):b1(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=n[i.charAt(o++)],m=o<i.length?n[i.charAt(o)]:0;++o;const y=o<i.length?n[i.charAt(o)]:64;++o;const b=o<i.length?n[i.charAt(o)]:64;if(++o,u==null||m==null||y==null||b==null)throw new w1;const w=u<<2|m>>4;if(s.push(w),y!==64){const k=m<<4&240|y>>2;if(s.push(k),b!==64){const U=y<<6&192|b;s.push(U)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class w1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const A1=function(i){const e=yT(i);return vT.encodeByteArray(e,!0)},Xc=function(i){return A1(i).replace(/\./g,"")},_T=function(i){try{return vT.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function C1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const R1=()=>C1().__FIREBASE_DEFAULTS__,N1=()=>{if(typeof process>"u"||typeof p_>"u")return;const i=p_.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},I1=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&_T(i[1]);return e&&JSON.parse(e)},dh=()=>{try{return S1()||R1()||N1()||I1()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},TT=i=>{var e,n;return(n=(e=dh())==null?void 0:e.emulatorHosts)==null?void 0:n[i]},D1=i=>{const e=TT(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ET=()=>{var i;return(i=dh())==null?void 0:i.config},ST=i=>{var e;return(e=dh())==null?void 0:e[`_${i}`]};/**
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
 */class O1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function yo(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function bT(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function M1(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Xc(JSON.stringify(n)),Xc(JSON.stringify(f)),""].join(".")}const xl={};function P1(){const i={prod:[],emulator:[]};for(const e of Object.keys(xl))xl[e]?i.emulator.push(e):i.prod.push(e);return i}function V1(i){let e=document.getElementById(i),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),n=!0),{created:n,element:e}}let g_=!1;function wT(i,e){if(typeof window>"u"||typeof document>"u"||!yo(window.location.host)||xl[i]===e||xl[i]||g_)return;xl[i]=e;function n(w){return`__firebase__banner__${w}`}const s="__firebase__banner",u=P1().prod.length>0;function f(){const w=document.getElementById(s);w&&w.remove()}function m(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function g(w,k){w.setAttribute("width","24"),w.setAttribute("id",k),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function y(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{g_=!0,f()},w}function T(w,k){w.setAttribute("id",k),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function b(){const w=V1(s),k=n("text"),U=document.getElementById(k)||document.createElement("span"),Y=n("learnmore"),X=document.getElementById(Y)||document.createElement("a"),ce=n("preprendIcon"),ie=document.getElementById(ce)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const te=w.element;m(te),T(X,Y);const _e=y();g(ie,ce),te.append(ie,U,X,_e),document.body.appendChild(te)}u?(U.innerText="Preview backend disconnected.",ie.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ie.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,U.innerText="Preview backend running in this workspace."),U.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
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
 */function pn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function k1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pn())}function x1(){var e;const i=(e=dh())==null?void 0:e.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function L1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function U1(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function z1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function j1(){const i=pn();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function B1(){return!x1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function AT(){try{return typeof indexedDB=="object"}catch{return!1}}function CT(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(n){e(n)}})}function q1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const H1="FirebaseError";class ki extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=H1,Object.setPrototypeOf(this,ki.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,na.prototype.create)}}class na{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?F1(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new ki(o,m,s)}}function F1(i,e){return i.replace(Y1,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Y1=/\{\$([^}]+)}/g;function G1(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Zs(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const u=i[o],f=e[o];if(y_(u)&&y_(f)){if(!Zs(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function y_(i){return i!==null&&typeof i=="object"}/**
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
 */function Jl(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function X1(i,e){const n=new K1(i,e);return n.subscribe.bind(n)}class K1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Q1(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=Bd),o.error===void 0&&(o.error=Bd),o.complete===void 0&&(o.complete=Bd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Q1(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function Bd(){}/**
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
 */function Jn(i){return i&&i._delegate?i._delegate:i}class oi{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fs="[DEFAULT]";/**
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
 */class $1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new O1;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(W1(e))try{this.getOrInitializeService({instanceIdentifier:Fs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Fs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fs){return this.instances.has(e)}getOptions(e=Fs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Z1(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Fs){return this.component?this.component.multipleInstances?e:Fs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Z1(i){return i===Fs?void 0:i}function W1(i){return i.instantiationMode==="EAGER"}/**
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
 */class J1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ze;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ze||(ze={}));const eC={debug:ze.DEBUG,verbose:ze.VERBOSE,info:ze.INFO,warn:ze.WARN,error:ze.ERROR,silent:ze.SILENT},tC=ze.INFO,nC={[ze.DEBUG]:"log",[ze.VERBOSE]:"log",[ze.INFO]:"info",[ze.WARN]:"warn",[ze.ERROR]:"error"},iC=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=nC[e];if(o)console[o](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fm{constructor(e){this.name=e,this._logLevel=tC,this._logHandler=iC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ze))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ze.DEBUG,...e),this._logHandler(this,ze.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ze.VERBOSE,...e),this._logHandler(this,ze.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ze.INFO,...e),this._logHandler(this,ze.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ze.WARN,...e),this._logHandler(this,ze.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ze.ERROR,...e),this._logHandler(this,ze.ERROR,...e)}}const rC=(i,e)=>e.some(n=>i instanceof n);let v_,__;function sC(){return v_||(v_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aC(){return __||(__=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const RT=new WeakMap,cm=new WeakMap,NT=new WeakMap,qd=new WeakMap,Ym=new WeakMap;function oC(i){const e=new Promise((n,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",f)},u=()=>{n(fr(i.result)),o()},f=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&RT.set(n,i)}).catch(()=>{}),Ym.set(e,i),e}function lC(i){if(cm.has(i))return;const e=new Promise((n,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",f),i.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",f),i.addEventListener("abort",f)});cm.set(i,e)}let hm={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return cm.get(i);if(e==="objectStoreNames")return i.objectStoreNames||NT.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fr(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function uC(i){hm=i(hm)}function cC(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(Hd(this),e,...n);return NT.set(s,e.sort?e.sort():[e]),fr(s)}:aC().includes(i)?function(...e){return i.apply(Hd(this),e),fr(RT.get(this))}:function(...e){return fr(i.apply(Hd(this),e))}}function hC(i){return typeof i=="function"?cC(i):(i instanceof IDBTransaction&&lC(i),rC(i,sC())?new Proxy(i,hm):i)}function fr(i){if(i instanceof IDBRequest)return oC(i);if(qd.has(i))return qd.get(i);const e=hC(i);return e!==i&&(qd.set(i,e),Ym.set(e,i)),e}const Hd=i=>Ym.get(i);function mh(i,e,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(i,e),m=fr(f);return s&&f.addEventListener("upgradeneeded",g=>{s(fr(f.result),g.oldVersion,g.newVersion,fr(f.transaction),g)}),n&&f.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}function Fd(i,{blocked:e}={}){const n=indexedDB.deleteDatabase(i);return e&&n.addEventListener("blocked",s=>e(s.oldVersion,s)),fr(n).then(()=>{})}const fC=["get","getKey","getAll","getAllKeys","count"],dC=["put","add","delete","clear"],Yd=new Map;function T_(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Yd.get(e))return Yd.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=dC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||fC.includes(n)))return;const u=async function(f,...m){const g=this.transaction(f,o?"readwrite":"readonly");let y=g.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[n](...m),o&&g.done]))[0]};return Yd.set(e,u),u}uC(i=>({...i,get:(e,n,s)=>T_(e,n)||i.get(e,n,s),has:(e,n)=>!!T_(e,n)||i.has(e,n)}));/**
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
 */class mC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function pC(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fm="@firebase/app",E_="0.14.1";/**
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
 */const dr=new Fm("@firebase/app"),gC="@firebase/app-compat",yC="@firebase/analytics-compat",vC="@firebase/analytics",_C="@firebase/app-check-compat",TC="@firebase/app-check",EC="@firebase/auth",SC="@firebase/auth-compat",bC="@firebase/database",wC="@firebase/data-connect",AC="@firebase/database-compat",CC="@firebase/functions",RC="@firebase/functions-compat",NC="@firebase/installations",IC="@firebase/installations-compat",DC="@firebase/messaging",OC="@firebase/messaging-compat",MC="@firebase/performance",PC="@firebase/performance-compat",VC="@firebase/remote-config",kC="@firebase/remote-config-compat",xC="@firebase/storage",LC="@firebase/storage-compat",UC="@firebase/firestore",zC="@firebase/ai",jC="@firebase/firestore-compat",BC="firebase",qC="12.1.0";/**
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
 */const dm="[DEFAULT]",HC={[fm]:"fire-core",[gC]:"fire-core-compat",[vC]:"fire-analytics",[yC]:"fire-analytics-compat",[TC]:"fire-app-check",[_C]:"fire-app-check-compat",[EC]:"fire-auth",[SC]:"fire-auth-compat",[bC]:"fire-rtdb",[wC]:"fire-data-connect",[AC]:"fire-rtdb-compat",[CC]:"fire-fn",[RC]:"fire-fn-compat",[NC]:"fire-iid",[IC]:"fire-iid-compat",[DC]:"fire-fcm",[OC]:"fire-fcm-compat",[MC]:"fire-perf",[PC]:"fire-perf-compat",[VC]:"fire-rc",[kC]:"fire-rc-compat",[xC]:"fire-gcs",[LC]:"fire-gcs-compat",[UC]:"fire-fst",[jC]:"fire-fst-compat",[zC]:"fire-vertex","fire-js":"fire-js",[BC]:"fire-js-all"};/**
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
 */const Kc=new Map,FC=new Map,mm=new Map;function S_(i,e){try{i.container.addComponent(e)}catch(n){dr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function Pi(i){const e=i.name;if(mm.has(e))return dr.debug(`There were multiple attempts to register component ${e}.`),!1;mm.set(e,i);for(const n of Kc.values())S_(n,i);for(const n of FC.values())S_(n,i);return!0}function vo(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function Ci(i){return i==null?!1:i.settings!==void 0}/**
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
 */const YC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ts=new na("app","Firebase",YC);/**
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
 */class GC{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new oi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ts.create("app-deleted",{appName:this._name})}}/**
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
 */const _o=qC;function IT(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s={name:dm,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw ts.create("bad-app-name",{appName:String(o)});if(n||(n=ET()),!n)throw ts.create("no-options");const u=Kc.get(o);if(u){if(Zs(n,u.options)&&Zs(s,u.config))return u;throw ts.create("duplicate-app",{appName:o})}const f=new J1(o);for(const g of mm.values())f.addComponent(g);const m=new GC(n,s,f);return Kc.set(o,m),m}function Gm(i=dm){const e=Kc.get(i);if(!e&&i===dm&&ET())return IT();if(!e)throw ts.create("no-app",{appName:i});return e}function Wn(i,e,n){let s=HC[i]??i;n&&(s+=`-${n}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const f=[`Unable to register library "${s}" with version "${e}":`];o&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dr.warn(f.join(" "));return}Pi(new oi(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const XC="firebase-heartbeat-database",KC=1,ql="firebase-heartbeat-store";let Gd=null;function DT(){return Gd||(Gd=mh(XC,KC,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(ql)}catch(n){console.warn(n)}}}}).catch(i=>{throw ts.create("idb-open",{originalErrorMessage:i.message})})),Gd}async function QC(i){try{const n=(await DT()).transaction(ql),s=await n.objectStore(ql).get(OT(i));return await n.done,s}catch(e){if(e instanceof ki)dr.warn(e.message);else{const n=ts.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dr.warn(n.message)}}}async function b_(i,e){try{const s=(await DT()).transaction(ql,"readwrite");await s.objectStore(ql).put(e,OT(i)),await s.done}catch(n){if(n instanceof ki)dr.warn(n.message);else{const s=ts.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dr.warn(s.message)}}}function OT(i){return`${i.name}!${i.options.appId}`}/**
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
 */const $C=1024,ZC=30;class WC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eR(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=w_();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>ZC){const f=tR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){dr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=w_(),{heartbeatsToSend:s,unsentEntries:o}=JC(this._heartbeatsCache.heartbeats),u=Xc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return dr.warn(n),""}}}function w_(){return new Date().toISOString().substring(0,10)}function JC(i,e=$C){const n=[];let s=i.slice();for(const o of i){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),A_(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),A_(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class eR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return AT()?CT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await QC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return b_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return b_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function A_(i){return Xc(JSON.stringify({version:2,heartbeats:i})).length}function tR(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
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
 */function nR(i){Pi(new oi("platform-logger",e=>new mC(e),"PRIVATE")),Pi(new oi("heartbeat",e=>new WC(e),"PRIVATE")),Wn(fm,E_,i),Wn(fm,E_,"esm2020"),Wn("fire-js","")}nR("");var C_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ns,MT;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(M,A){function I(){}I.prototype=A.prototype,M.D=A.prototype,M.prototype=new I,M.prototype.constructor=M,M.C=function(O,x,V){for(var C=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)C[Oe-2]=arguments[Oe];return A.prototype[x].apply(O,C)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(M,A,I){I||(I=0);var O=Array(16);if(typeof A=="string")for(var x=0;16>x;++x)O[x]=A.charCodeAt(I++)|A.charCodeAt(I++)<<8|A.charCodeAt(I++)<<16|A.charCodeAt(I++)<<24;else for(x=0;16>x;++x)O[x]=A[I++]|A[I++]<<8|A[I++]<<16|A[I++]<<24;A=M.g[0],I=M.g[1],x=M.g[2];var V=M.g[3],C=A+(V^I&(x^V))+O[0]+3614090360&4294967295;A=I+(C<<7&4294967295|C>>>25),C=V+(x^A&(I^x))+O[1]+3905402710&4294967295,V=A+(C<<12&4294967295|C>>>20),C=x+(I^V&(A^I))+O[2]+606105819&4294967295,x=V+(C<<17&4294967295|C>>>15),C=I+(A^x&(V^A))+O[3]+3250441966&4294967295,I=x+(C<<22&4294967295|C>>>10),C=A+(V^I&(x^V))+O[4]+4118548399&4294967295,A=I+(C<<7&4294967295|C>>>25),C=V+(x^A&(I^x))+O[5]+1200080426&4294967295,V=A+(C<<12&4294967295|C>>>20),C=x+(I^V&(A^I))+O[6]+2821735955&4294967295,x=V+(C<<17&4294967295|C>>>15),C=I+(A^x&(V^A))+O[7]+4249261313&4294967295,I=x+(C<<22&4294967295|C>>>10),C=A+(V^I&(x^V))+O[8]+1770035416&4294967295,A=I+(C<<7&4294967295|C>>>25),C=V+(x^A&(I^x))+O[9]+2336552879&4294967295,V=A+(C<<12&4294967295|C>>>20),C=x+(I^V&(A^I))+O[10]+4294925233&4294967295,x=V+(C<<17&4294967295|C>>>15),C=I+(A^x&(V^A))+O[11]+2304563134&4294967295,I=x+(C<<22&4294967295|C>>>10),C=A+(V^I&(x^V))+O[12]+1804603682&4294967295,A=I+(C<<7&4294967295|C>>>25),C=V+(x^A&(I^x))+O[13]+4254626195&4294967295,V=A+(C<<12&4294967295|C>>>20),C=x+(I^V&(A^I))+O[14]+2792965006&4294967295,x=V+(C<<17&4294967295|C>>>15),C=I+(A^x&(V^A))+O[15]+1236535329&4294967295,I=x+(C<<22&4294967295|C>>>10),C=A+(x^V&(I^x))+O[1]+4129170786&4294967295,A=I+(C<<5&4294967295|C>>>27),C=V+(I^x&(A^I))+O[6]+3225465664&4294967295,V=A+(C<<9&4294967295|C>>>23),C=x+(A^I&(V^A))+O[11]+643717713&4294967295,x=V+(C<<14&4294967295|C>>>18),C=I+(V^A&(x^V))+O[0]+3921069994&4294967295,I=x+(C<<20&4294967295|C>>>12),C=A+(x^V&(I^x))+O[5]+3593408605&4294967295,A=I+(C<<5&4294967295|C>>>27),C=V+(I^x&(A^I))+O[10]+38016083&4294967295,V=A+(C<<9&4294967295|C>>>23),C=x+(A^I&(V^A))+O[15]+3634488961&4294967295,x=V+(C<<14&4294967295|C>>>18),C=I+(V^A&(x^V))+O[4]+3889429448&4294967295,I=x+(C<<20&4294967295|C>>>12),C=A+(x^V&(I^x))+O[9]+568446438&4294967295,A=I+(C<<5&4294967295|C>>>27),C=V+(I^x&(A^I))+O[14]+3275163606&4294967295,V=A+(C<<9&4294967295|C>>>23),C=x+(A^I&(V^A))+O[3]+4107603335&4294967295,x=V+(C<<14&4294967295|C>>>18),C=I+(V^A&(x^V))+O[8]+1163531501&4294967295,I=x+(C<<20&4294967295|C>>>12),C=A+(x^V&(I^x))+O[13]+2850285829&4294967295,A=I+(C<<5&4294967295|C>>>27),C=V+(I^x&(A^I))+O[2]+4243563512&4294967295,V=A+(C<<9&4294967295|C>>>23),C=x+(A^I&(V^A))+O[7]+1735328473&4294967295,x=V+(C<<14&4294967295|C>>>18),C=I+(V^A&(x^V))+O[12]+2368359562&4294967295,I=x+(C<<20&4294967295|C>>>12),C=A+(I^x^V)+O[5]+4294588738&4294967295,A=I+(C<<4&4294967295|C>>>28),C=V+(A^I^x)+O[8]+2272392833&4294967295,V=A+(C<<11&4294967295|C>>>21),C=x+(V^A^I)+O[11]+1839030562&4294967295,x=V+(C<<16&4294967295|C>>>16),C=I+(x^V^A)+O[14]+4259657740&4294967295,I=x+(C<<23&4294967295|C>>>9),C=A+(I^x^V)+O[1]+2763975236&4294967295,A=I+(C<<4&4294967295|C>>>28),C=V+(A^I^x)+O[4]+1272893353&4294967295,V=A+(C<<11&4294967295|C>>>21),C=x+(V^A^I)+O[7]+4139469664&4294967295,x=V+(C<<16&4294967295|C>>>16),C=I+(x^V^A)+O[10]+3200236656&4294967295,I=x+(C<<23&4294967295|C>>>9),C=A+(I^x^V)+O[13]+681279174&4294967295,A=I+(C<<4&4294967295|C>>>28),C=V+(A^I^x)+O[0]+3936430074&4294967295,V=A+(C<<11&4294967295|C>>>21),C=x+(V^A^I)+O[3]+3572445317&4294967295,x=V+(C<<16&4294967295|C>>>16),C=I+(x^V^A)+O[6]+76029189&4294967295,I=x+(C<<23&4294967295|C>>>9),C=A+(I^x^V)+O[9]+3654602809&4294967295,A=I+(C<<4&4294967295|C>>>28),C=V+(A^I^x)+O[12]+3873151461&4294967295,V=A+(C<<11&4294967295|C>>>21),C=x+(V^A^I)+O[15]+530742520&4294967295,x=V+(C<<16&4294967295|C>>>16),C=I+(x^V^A)+O[2]+3299628645&4294967295,I=x+(C<<23&4294967295|C>>>9),C=A+(x^(I|~V))+O[0]+4096336452&4294967295,A=I+(C<<6&4294967295|C>>>26),C=V+(I^(A|~x))+O[7]+1126891415&4294967295,V=A+(C<<10&4294967295|C>>>22),C=x+(A^(V|~I))+O[14]+2878612391&4294967295,x=V+(C<<15&4294967295|C>>>17),C=I+(V^(x|~A))+O[5]+4237533241&4294967295,I=x+(C<<21&4294967295|C>>>11),C=A+(x^(I|~V))+O[12]+1700485571&4294967295,A=I+(C<<6&4294967295|C>>>26),C=V+(I^(A|~x))+O[3]+2399980690&4294967295,V=A+(C<<10&4294967295|C>>>22),C=x+(A^(V|~I))+O[10]+4293915773&4294967295,x=V+(C<<15&4294967295|C>>>17),C=I+(V^(x|~A))+O[1]+2240044497&4294967295,I=x+(C<<21&4294967295|C>>>11),C=A+(x^(I|~V))+O[8]+1873313359&4294967295,A=I+(C<<6&4294967295|C>>>26),C=V+(I^(A|~x))+O[15]+4264355552&4294967295,V=A+(C<<10&4294967295|C>>>22),C=x+(A^(V|~I))+O[6]+2734768916&4294967295,x=V+(C<<15&4294967295|C>>>17),C=I+(V^(x|~A))+O[13]+1309151649&4294967295,I=x+(C<<21&4294967295|C>>>11),C=A+(x^(I|~V))+O[4]+4149444226&4294967295,A=I+(C<<6&4294967295|C>>>26),C=V+(I^(A|~x))+O[11]+3174756917&4294967295,V=A+(C<<10&4294967295|C>>>22),C=x+(A^(V|~I))+O[2]+718787259&4294967295,x=V+(C<<15&4294967295|C>>>17),C=I+(V^(x|~A))+O[9]+3951481745&4294967295,M.g[0]=M.g[0]+A&4294967295,M.g[1]=M.g[1]+(x+(C<<21&4294967295|C>>>11))&4294967295,M.g[2]=M.g[2]+x&4294967295,M.g[3]=M.g[3]+V&4294967295}s.prototype.u=function(M,A){A===void 0&&(A=M.length);for(var I=A-this.blockSize,O=this.B,x=this.h,V=0;V<A;){if(x==0)for(;V<=I;)o(this,M,V),V+=this.blockSize;if(typeof M=="string"){for(;V<A;)if(O[x++]=M.charCodeAt(V++),x==this.blockSize){o(this,O),x=0;break}}else for(;V<A;)if(O[x++]=M[V++],x==this.blockSize){o(this,O),x=0;break}}this.h=x,this.o+=A},s.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var A=1;A<M.length-8;++A)M[A]=0;var I=8*this.o;for(A=M.length-8;A<M.length;++A)M[A]=I&255,I/=256;for(this.u(M),M=Array(16),A=I=0;4>A;++A)for(var O=0;32>O;O+=8)M[I++]=this.g[A]>>>O&255;return M};function u(M,A){var I=m;return Object.prototype.hasOwnProperty.call(I,M)?I[M]:I[M]=A(M)}function f(M,A){this.h=A;for(var I=[],O=!0,x=M.length-1;0<=x;x--){var V=M[x]|0;O&&V==A||(I[x]=V,O=!1)}this.g=I}var m={};function g(M){return-128<=M&&128>M?u(M,function(A){return new f([A|0],0>A?-1:0)}):new f([M|0],0>M?-1:0)}function y(M){if(isNaN(M)||!isFinite(M))return b;if(0>M)return X(y(-M));for(var A=[],I=1,O=0;M>=I;O++)A[O]=M/I|0,I*=4294967296;return new f(A,0)}function T(M,A){if(M.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(M.charAt(0)=="-")return X(T(M.substring(1),A));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=y(Math.pow(A,8)),O=b,x=0;x<M.length;x+=8){var V=Math.min(8,M.length-x),C=parseInt(M.substring(x,x+V),A);8>V?(V=y(Math.pow(A,V)),O=O.j(V).add(y(C))):(O=O.j(I),O=O.add(y(C)))}return O}var b=g(0),w=g(1),k=g(16777216);i=f.prototype,i.m=function(){if(Y(this))return-X(this).m();for(var M=0,A=1,I=0;I<this.g.length;I++){var O=this.i(I);M+=(0<=O?O:4294967296+O)*A,A*=4294967296}return M},i.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(U(this))return"0";if(Y(this))return"-"+X(this).toString(M);for(var A=y(Math.pow(M,6)),I=this,O="";;){var x=_e(I,A).g;I=ce(I,x.j(A));var V=((0<I.g.length?I.g[0]:I.h)>>>0).toString(M);if(I=x,U(I))return V+O;for(;6>V.length;)V="0"+V;O=V+O}},i.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function U(M){if(M.h!=0)return!1;for(var A=0;A<M.g.length;A++)if(M.g[A]!=0)return!1;return!0}function Y(M){return M.h==-1}i.l=function(M){return M=ce(this,M),Y(M)?-1:U(M)?0:1};function X(M){for(var A=M.g.length,I=[],O=0;O<A;O++)I[O]=~M.g[O];return new f(I,~M.h).add(w)}i.abs=function(){return Y(this)?X(this):this},i.add=function(M){for(var A=Math.max(this.g.length,M.g.length),I=[],O=0,x=0;x<=A;x++){var V=O+(this.i(x)&65535)+(M.i(x)&65535),C=(V>>>16)+(this.i(x)>>>16)+(M.i(x)>>>16);O=C>>>16,V&=65535,C&=65535,I[x]=C<<16|V}return new f(I,I[I.length-1]&-2147483648?-1:0)};function ce(M,A){return M.add(X(A))}i.j=function(M){if(U(this)||U(M))return b;if(Y(this))return Y(M)?X(this).j(X(M)):X(X(this).j(M));if(Y(M))return X(this.j(X(M)));if(0>this.l(k)&&0>M.l(k))return y(this.m()*M.m());for(var A=this.g.length+M.g.length,I=[],O=0;O<2*A;O++)I[O]=0;for(O=0;O<this.g.length;O++)for(var x=0;x<M.g.length;x++){var V=this.i(O)>>>16,C=this.i(O)&65535,Oe=M.i(x)>>>16,Le=M.i(x)&65535;I[2*O+2*x]+=C*Le,ie(I,2*O+2*x),I[2*O+2*x+1]+=V*Le,ie(I,2*O+2*x+1),I[2*O+2*x+1]+=C*Oe,ie(I,2*O+2*x+1),I[2*O+2*x+2]+=V*Oe,ie(I,2*O+2*x+2)}for(O=0;O<A;O++)I[O]=I[2*O+1]<<16|I[2*O];for(O=A;O<2*A;O++)I[O]=0;return new f(I,0)};function ie(M,A){for(;(M[A]&65535)!=M[A];)M[A+1]+=M[A]>>>16,M[A]&=65535,A++}function te(M,A){this.g=M,this.h=A}function _e(M,A){if(U(A))throw Error("division by zero");if(U(M))return new te(b,b);if(Y(M))return A=_e(X(M),A),new te(X(A.g),X(A.h));if(Y(A))return A=_e(M,X(A)),new te(X(A.g),A.h);if(30<M.g.length){if(Y(M)||Y(A))throw Error("slowDivide_ only works with positive integers.");for(var I=w,O=A;0>=O.l(M);)I=le(I),O=le(O);var x=Se(I,1),V=Se(O,1);for(O=Se(O,2),I=Se(I,2);!U(O);){var C=V.add(O);0>=C.l(M)&&(x=x.add(I),V=C),O=Se(O,1),I=Se(I,1)}return A=ce(M,x.j(A)),new te(x,A)}for(x=b;0<=M.l(A);){for(I=Math.max(1,Math.floor(M.m()/A.m())),O=Math.ceil(Math.log(I)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),V=y(I),C=V.j(A);Y(C)||0<C.l(M);)I-=O,V=y(I),C=V.j(A);U(V)&&(V=w),x=x.add(V),M=ce(M,C)}return new te(x,M)}i.A=function(M){return _e(this,M).h},i.and=function(M){for(var A=Math.max(this.g.length,M.g.length),I=[],O=0;O<A;O++)I[O]=this.i(O)&M.i(O);return new f(I,this.h&M.h)},i.or=function(M){for(var A=Math.max(this.g.length,M.g.length),I=[],O=0;O<A;O++)I[O]=this.i(O)|M.i(O);return new f(I,this.h|M.h)},i.xor=function(M){for(var A=Math.max(this.g.length,M.g.length),I=[],O=0;O<A;O++)I[O]=this.i(O)^M.i(O);return new f(I,this.h^M.h)};function le(M){for(var A=M.g.length+1,I=[],O=0;O<A;O++)I[O]=M.i(O)<<1|M.i(O-1)>>>31;return new f(I,M.h)}function Se(M,A){var I=A>>5;A%=32;for(var O=M.g.length-I,x=[],V=0;V<O;V++)x[V]=0<A?M.i(V+I)>>>A|M.i(V+I+1)<<32-A:M.i(V+I);return new f(x,M.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,MT=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=T,ns=f}).apply(typeof C_<"u"?C_:typeof self<"u"?self:typeof window<"u"?window:{});var Oc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var PT,Ml,VT,Lc,pm,kT,xT,LT;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,p,v){return c==Array.prototype||c==Object.prototype||(c[p]=v.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Oc=="object"&&Oc];for(var p=0;p<c.length;++p){var v=c[p];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=n(this);function o(c,p){if(p)e:{var v=s;c=c.split(".");for(var S=0;S<c.length-1;S++){var z=c[S];if(!(z in v))break e;v=v[z]}c=c[c.length-1],S=v[c],p=p(S),p!=S&&p!=null&&e(v,c,{configurable:!0,writable:!0,value:p})}}function u(c,p){c instanceof String&&(c+="");var v=0,S=!1,z={next:function(){if(!S&&v<c.length){var F=v++;return{value:p(F,c[F]),done:!1}}return S=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}o("Array.prototype.values",function(c){return c||function(){return u(this,function(p,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function g(c){var p=typeof c;return p=p!="object"?p:c?Array.isArray(c)?"array":p:"null",p=="array"||p=="object"&&typeof c.length=="number"}function y(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function T(c,p,v){return c.call.apply(c.bind,arguments)}function b(c,p,v){if(!c)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var z=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(z,S),c.apply(p,z)}}return function(){return c.apply(p,arguments)}}function w(c,p,v){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:b,w.apply(null,arguments)}function k(c,p){var v=Array.prototype.slice.call(arguments,1);return function(){var S=v.slice();return S.push.apply(S,arguments),c.apply(this,S)}}function U(c,p){function v(){}v.prototype=p.prototype,c.aa=p.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(S,z,F){for(var ae=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)ae[Be-2]=arguments[Be];return p.prototype[z].apply(S,ae)}}function Y(c){const p=c.length;if(0<p){const v=Array(p);for(let S=0;S<p;S++)v[S]=c[S];return v}return[]}function X(c,p){for(let v=1;v<arguments.length;v++){const S=arguments[v];if(g(S)){const z=c.length||0,F=S.length||0;c.length=z+F;for(let ae=0;ae<F;ae++)c[z+ae]=S[ae]}else c.push(S)}}class ce{constructor(p,v){this.i=p,this.j=v,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function ie(c){return/^[\s\xa0]*$/.test(c)}function te(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function _e(c){return _e[" "](c),c}_e[" "]=function(){};var le=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function Se(c,p,v){for(const S in c)p.call(v,c[S],S,c)}function M(c,p){for(const v in c)p.call(void 0,c[v],v,c)}function A(c){const p={};for(const v in c)p[v]=c[v];return p}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(c,p){let v,S;for(let z=1;z<arguments.length;z++){S=arguments[z];for(v in S)c[v]=S[v];for(let F=0;F<I.length;F++)v=I[F],Object.prototype.hasOwnProperty.call(S,v)&&(c[v]=S[v])}}function x(c){var p=1;c=c.split(":");const v=[];for(;0<p&&c.length;)v.push(c.shift()),p--;return c.length&&v.push(c.join(":")),v}function V(c){m.setTimeout(()=>{throw c},0)}function C(){var c=Pe;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class Oe{constructor(){this.h=this.g=null}add(p,v){const S=Le.get();S.set(p,v),this.h?this.h.next=S:this.g=S,this.h=S}}var Le=new ce(()=>new G,c=>c.reset());class G{constructor(){this.next=this.g=this.h=null}set(p,v){this.h=p,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let re,me=!1,Pe=new Oe,D=()=>{const c=m.Promise.resolve(void 0);re=()=>{c.then($)}};var $=()=>{for(var c;c=C();){try{c.h.call(c.g)}catch(v){V(v)}var p=Le;p.j(c),100>p.h&&(p.h++,c.next=p.g,p.g=c)}me=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function J(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var ge=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};m.addEventListener("test",v,p),m.removeEventListener("test",v,p)}catch{}return c}();function Ce(c,p){if(J.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,S=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget){if(le){e:{try{_e(p.nodeName);var z=!0;break e}catch{}z=!1}z||(p=null)}}else v=="mouseover"?p=c.fromElement:v=="mouseout"&&(p=c.toElement);this.relatedTarget=p,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:pe[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ce.aa.h.call(this)}}U(Ce,J);var pe={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ot="closure_listenable_"+(1e6*Math.random()|0),Ge=0;function It(c,p,v,S,z){this.listener=c,this.proxy=null,this.src=p,this.type=v,this.capture=!!S,this.ha=z,this.key=++Ge,this.da=this.fa=!1}function oe(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ve(c){this.src=c,this.g={},this.h=0}Ve.prototype.add=function(c,p,v,S,z){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var ae=lt(c,p,S,z);return-1<ae?(p=c[ae],v||(p.fa=!1)):(p=new It(p,this.src,F,!!S,z),p.fa=v,c.push(p)),p};function We(c,p){var v=p.type;if(v in c.g){var S=c.g[v],z=Array.prototype.indexOf.call(S,p,void 0),F;(F=0<=z)&&Array.prototype.splice.call(S,z,1),F&&(oe(p),c.g[v].length==0&&(delete c.g[v],c.h--))}}function lt(c,p,v,S){for(var z=0;z<c.length;++z){var F=c[z];if(!F.da&&F.listener==p&&F.capture==!!v&&F.ha==S)return z}return-1}var Ft="closure_lm_"+(1e6*Math.random()|0),gn={};function ut(c,p,v,S,z){if(Array.isArray(p)){for(var F=0;F<p.length;F++)ut(c,p[F],v,S,z);return null}return v=sa(v),c&&c[ot]?c.K(p,v,y(S)?!!S.capture:!1,z):Jt(c,p,v,!1,S,z)}function Jt(c,p,v,S,z,F){if(!p)throw Error("Invalid event type");var ae=y(z)?!!z.capture:!!z,Be=In(c);if(Be||(c[Ft]=Be=new Ve(c)),v=Be.add(p,v,S,ae,F),v.proxy)return v;if(S=ra(),v.proxy=S,S.src=c,S.listener=v,c.addEventListener)ge||(z=ae),z===void 0&&(z=!1),c.addEventListener(p.toString(),S,z);else if(c.attachEvent)c.attachEvent(xi(p.toString()),S);else if(c.addListener&&c.removeListener)c.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return v}function ra(){function c(v){return p.call(c.src,c.listener,v)}const p=ms;return c}function yr(c,p,v,S,z){if(Array.isArray(p))for(var F=0;F<p.length;F++)yr(c,p[F],v,S,z);else S=y(S)?!!S.capture:!!S,v=sa(v),c&&c[ot]?(c=c.i,p=String(p).toString(),p in c.g&&(F=c.g[p],v=lt(F,v,S,z),-1<v&&(oe(F[v]),Array.prototype.splice.call(F,v,1),F.length==0&&(delete c.g[p],c.h--)))):c&&(c=In(c))&&(p=c.g[p.toString()],c=-1,p&&(c=lt(p,v,S,z)),(v=-1<c?p[c]:null)&&vr(v))}function vr(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[ot])We(p.i,c);else{var v=c.type,S=c.proxy;p.removeEventListener?p.removeEventListener(v,S,c.capture):p.detachEvent?p.detachEvent(xi(v),S):p.addListener&&p.removeListener&&p.removeListener(S),(v=In(p))?(We(v,c),v.h==0&&(v.src=null,p[Ft]=null)):oe(c)}}}function xi(c){return c in gn?gn[c]:gn[c]="on"+c}function ms(c,p){if(c.da)c=!0;else{p=new Ce(p,this);var v=c.listener,S=c.ha||c.src;c.fa&&vr(c),c=v.call(S,p)}return c}function In(c){return c=c[Ft],c instanceof Ve?c:null}var Li="__closure_events_fn_"+(1e9*Math.random()>>>0);function sa(c){return typeof c=="function"?c:(c[Li]||(c[Li]=function(p){return c.handleEvent(p)}),c[Li])}function dt(){se.call(this),this.i=new Ve(this),this.M=this,this.F=null}U(dt,se),dt.prototype[ot]=!0,dt.prototype.removeEventListener=function(c,p,v,S){yr(this,c,p,v,S)};function Qe(c,p){var v,S=c.F;if(S)for(v=[];S;S=S.F)v.push(S);if(c=c.M,S=p.type||p,typeof p=="string")p=new J(p,c);else if(p instanceof J)p.target=p.target||c;else{var z=p;p=new J(S,c),O(p,z)}if(z=!0,v)for(var F=v.length-1;0<=F;F--){var ae=p.g=v[F];z=yn(ae,S,!0,p)&&z}if(ae=p.g=c,z=yn(ae,S,!0,p)&&z,z=yn(ae,S,!1,p)&&z,v)for(F=0;F<v.length;F++)ae=p.g=v[F],z=yn(ae,S,!1,p)&&z}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var c=this.i,p;for(p in c.g){for(var v=c.g[p],S=0;S<v.length;S++)oe(v[S]);delete c.g[p],c.h--}}this.F=null},dt.prototype.K=function(c,p,v,S){return this.i.add(String(c),p,!1,v,S)},dt.prototype.L=function(c,p,v,S){return this.i.add(String(c),p,!0,v,S)};function yn(c,p,v,S){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();for(var z=!0,F=0;F<p.length;++F){var ae=p[F];if(ae&&!ae.da&&ae.capture==v){var Be=ae.listener,Ut=ae.ha||ae.src;ae.fa&&We(c.i,ae),z=Be.call(Ut,S)!==!1&&z}}return z&&!S.defaultPrevented}function Yt(c,p,v){if(typeof c=="function")v&&(c=w(c,v));else if(c&&typeof c.handleEvent=="function")c=w(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:m.setTimeout(c,p||0)}function aa(c){c.g=Yt(()=>{c.g=null,c.i&&(c.i=!1,aa(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class ne extends se{constructor(p,v){super(),this.m=p,this.l=v,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:aa(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ye(c){se.call(this),this.h=c,this.g={}}U(ye,se);var Ue=[];function pt(c){Se(c.g,function(p,v){this.g.hasOwnProperty(v)&&vr(p)},c),c.g={}}ye.prototype.N=function(){ye.aa.N.call(this),pt(this)},ye.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Je=m.JSON.stringify,vn=m.JSON.parse,ln=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function mt(){}mt.prototype.h=null;function _n(c){return c.h||(c.h=c.i())}function Co(){}var Ui={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function zi(){J.call(this,"d")}U(zi,J);function Ro(){J.call(this,"c")}U(Ro,J);var ui={},No=null;function _r(){return No=No||new dt}ui.La="serverreachability";function oa(c){J.call(this,ui.La,c)}U(oa,J);function Tr(c){const p=_r();Qe(p,new oa(p))}ui.STAT_EVENT="statevent";function lu(c,p){J.call(this,ui.STAT_EVENT,c),this.stat=p}U(lu,J);function gt(c){const p=_r();Qe(p,new lu(p,c))}ui.Ma="timingevent";function Lt(c,p){J.call(this,ui.Ma,c),this.size=p}U(Lt,J);function Dt(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},p)}function Un(){this.g=!0}Un.prototype.xa=function(){this.g=!1};function Io(c,p,v,S,z,F){c.info(function(){if(c.g)if(F)for(var ae="",Be=F.split("&"),Ut=0;Ut<Be.length;Ut++){var qe=Be[Ut].split("=");if(1<qe.length){var Xt=qe[0];qe=qe[1];var zt=Xt.split("_");ae=2<=zt.length&&zt[1]=="type"?ae+(Xt+"="+qe+"&"):ae+(Xt+"=redacted&")}}else ae=null;else ae=F;return"XMLHTTP REQ ("+S+") [attempt "+z+"]: "+p+`
`+v+`
`+ae})}function Vh(c,p,v,S,z,F,ae){c.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+z+"]: "+p+`
`+v+`
`+F+" "+ae})}function Er(c,p,v,S){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+ps(c,v)+(S?" "+S:"")})}function uu(c,p){c.info(function(){return"TIMEOUT: "+p})}Un.prototype.info=function(){};function ps(c,p){if(!c.g)return p;if(!p)return null;try{var v=JSON.parse(p);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var S=v[c];if(!(2>S.length)){var z=S[1];if(Array.isArray(z)&&!(1>z.length)){var F=z[0];if(F!="noop"&&F!="stop"&&F!="close")for(var ae=1;ae<z.length;ae++)z[ae]=""}}}}return Je(v)}catch{return p}}var Sr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ji={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ci;function hi(){}U(hi,mt),hi.prototype.g=function(){return new XMLHttpRequest},hi.prototype.i=function(){return{}},ci=new hi;function Tn(c,p,v,S){this.j=c,this.i=p,this.l=v,this.R=S||1,this.U=new ye(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wt}function wt(){this.i=null,this.g="",this.h=!1}var Do={},la={};function ei(c,p,v){c.L=1,c.v=Ts(Dn(p)),c.m=v,c.P=!0,Bi(c,null)}function Bi(c,p){c.F=Date.now(),gs(c),c.A=Dn(c.v);var v=c.A,S=c.R;Array.isArray(S)||(S=[String(S)]),xo(v.i,"t",S),c.C=0,v=c.j.J,c.h=new wt,c.g=Au(c.j,v?p:null,!c.m),0<c.O&&(c.M=new ne(w(c.Y,c,c.g),c.O)),p=c.U,v=c.g,S=c.ca;var z="readystatechange";Array.isArray(z)||(z&&(Ue[0]=z.toString()),z=Ue);for(var F=0;F<z.length;F++){var ae=ut(v,z[F],S||p.handleEvent,!1,p.h||p);if(!ae)break;p.g[ae.key]=ae}p=c.H?A(c.H):{},c.m?(c.u||(c.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,p)):(c.u="GET",c.g.ea(c.A,c.u,null,p)),Tr(),Io(c.i,c.u,c.A,c.l,c.R,c.m)}Tn.prototype.ca=function(c){c=c.target;const p=this.M;p&&qn(c)==3?p.j():this.Y(c)},Tn.prototype.Y=function(c){try{if(c==this.g)e:{const zt=qn(this.g);var p=this.g.Ba();const Qi=this.g.Z();if(!(3>zt)&&(zt!=3||this.g&&(this.h.h||this.g.oa()||yu(this.g)))){this.J||zt!=4||p==7||(p==8||0>=Qi?Tr(3):Tr(2)),br(this);var v=this.g.Z();this.X=v;t:if(cu(this)){var S=yu(this.g);c="";var z=S.length,F=qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){en(this),fi(this);var ae="";break t}this.h.i=new m.TextDecoder}for(p=0;p<z;p++)this.h.h=!0,c+=this.h.i.decode(S[p],{stream:!(F&&p==z-1)});S.length=0,this.h.g+=c,this.C=0,ae=this.h.g}else ae=this.g.oa();if(this.o=v==200,Vh(this.i,this.u,this.A,this.l,this.R,zt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,Ut=this.g;if((Be=Ut.g?Ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ie(Be)){var qe=Be;break t}}qe=null}if(v=qe)Er(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ys(this,v);else{this.o=!1,this.s=3,gt(12),en(this),fi(this);break e}}if(this.P){v=!0;let tn;for(;!this.J&&this.C<ae.length;)if(tn=hu(this,ae),tn==la){zt==4&&(this.s=4,gt(14),v=!1),Er(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==Do){this.s=4,gt(15),Er(this.i,this.l,ae,"[Invalid Chunk]"),v=!1;break}else Er(this.i,this.l,tn,null),ys(this,tn);if(cu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),zt!=4||ae.length!=0||this.h.h||(this.s=1,gt(16),v=!1),this.o=this.o&&v,!v)Er(this.i,this.l,ae,"[Invalid Chunked Response]"),en(this),fi(this);else if(0<ae.length&&!this.W){this.W=!0;var Xt=this.j;Xt.g==this&&Xt.ba&&!Xt.M&&(Xt.j.info("Great, no buffering proxy detected. Bytes received: "+ae.length),Ns(Xt),Xt.M=!0,gt(11))}}else Er(this.i,this.l,ae,null),ys(this,ae);zt==4&&en(this),this.o&&!this.J&&(zt==4?Su(this.j,this):(this.o=!1,gs(this)))}else zh(this.g),v==400&&0<ae.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),en(this),fi(this)}}}catch{}finally{}};function cu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function hu(c,p){var v=c.C,S=p.indexOf(`
`,v);return S==-1?la:(v=Number(p.substring(v,S)),isNaN(v)?Do:(S+=1,S+v>p.length?la:(p=p.slice(S,S+v),c.C=S+v,p)))}Tn.prototype.cancel=function(){this.J=!0,en(this)};function gs(c){c.S=Date.now()+c.I,fu(c,c.I)}function fu(c,p){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Dt(w(c.ba,c),p)}function br(c){c.B&&(m.clearTimeout(c.B),c.B=null)}Tn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(uu(this.i,this.A),this.L!=2&&(Tr(),gt(17)),en(this),this.s=2,fi(this)):fu(this,this.S-c)};function fi(c){c.j.G==0||c.J||Su(c.j,c)}function en(c){br(c);var p=c.M;p&&typeof p.ma=="function"&&p.ma(),c.M=null,pt(c.U),c.g&&(p=c.g,c.g=null,p.abort(),p.ma())}function ys(c,p){try{var v=c.j;if(v.G!=0&&(v.g==c||Oo(v.h,c))){if(!c.K&&Oo(v.h,c)&&v.G==3){try{var S=v.Da.g.parse(p)}catch{S=null}if(Array.isArray(S)&&S.length==3){var z=S;if(z[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)Ta(v),va(v);else break e;Bo(v),gt(18)}}else v.za=z[1],0<v.za-v.T&&37500>z[2]&&v.F&&v.v==0&&!v.C&&(v.C=Dt(w(v.Za,v),6e3));if(1>=ca(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Ki(v,11)}else if((c.K||v.g==c)&&Ta(v),!ie(p))for(z=v.Da.g.parse(p),p=0;p<z.length;p++){let qe=z[p];if(v.T=qe[0],qe=qe[1],v.G==2)if(qe[0]=="c"){v.K=qe[1],v.ia=qe[2];const Xt=qe[3];Xt!=null&&(v.la=Xt,v.j.info("VER="+v.la));const zt=qe[4];zt!=null&&(v.Aa=zt,v.j.info("SVER="+v.Aa));const Qi=qe[5];Qi!=null&&typeof Qi=="number"&&0<Qi&&(S=1.5*Qi,v.L=S,v.j.info("backChannelRequestTimeoutMs_="+S)),S=v;const tn=c.g;if(tn){const _i=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_i){var F=S.h;F.g||_i.indexOf("spdy")==-1&&_i.indexOf("quic")==-1&&_i.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(ha(F,F.h),F.h=null))}if(S.D){const Ho=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ho&&(S.ya=Ho,nt(S.I,S.D,Ho))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),S=v;var ae=c;if(S.qa=wu(S,S.J?S.ia:null,S.W),ae.K){En(S.h,ae);var Be=ae,Ut=S.L;Ut&&(Be.I=Ut),Be.B&&(br(Be),gs(Be)),S.g=ae}else Tu(S);0<v.i.length&&_a(v)}else qe[0]!="stop"&&qe[0]!="close"||Ki(v,7);else v.G==3&&(qe[0]=="stop"||qe[0]=="close"?qe[0]=="stop"?Ki(v,7):zo(v):qe[0]!="noop"&&v.l&&v.l.ta(qe),v.v=0)}}Tr(4)}catch{}}var du=class{constructor(c,p){this.g=c,this.map=p}};function qi(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ua(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function ca(c){return c.h?1:c.g?c.g.size:0}function Oo(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function ha(c,p){c.g?c.g.add(p):c.h=p}function En(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}qi.prototype.cancel=function(){if(this.i=Mo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Mo(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const v of c.g.values())p=p.concat(v.D);return p}return Y(c.i)}function kh(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(g(c)){for(var p=[],v=c.length,S=0;S<v;S++)p.push(c[S]);return p}p=[],v=0;for(S in c)p[v++]=c[S];return p}function fa(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(g(c)||typeof c=="string"){var p=[];c=c.length;for(var v=0;v<c;v++)p.push(v);return p}p=[],v=0;for(const S in c)p[v++]=S;return p}}}function Po(c,p){if(c.forEach&&typeof c.forEach=="function")c.forEach(p,void 0);else if(g(c)||typeof c=="string")Array.prototype.forEach.call(c,p,void 0);else for(var v=fa(c),S=kh(c),z=S.length,F=0;F<z;F++)p.call(void 0,S[F],v&&v[F],c)}var vs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xh(c,p){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var S=c[v].indexOf("="),z=null;if(0<=S){var F=c[v].substring(0,S);z=c[v].substring(S+1)}else F=c[v];p(F,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function Ot(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Ot){this.h=c.h,_s(this,c.j),this.o=c.o,this.g=c.g,wr(this,c.s),this.l=c.l;var p=c.i,v=new Fi;v.i=p.i,p.g&&(v.g=new Map(p.g),v.h=p.h),Hi(this,v),this.m=c.m}else c&&(p=String(c).match(vs))?(this.h=!1,_s(this,p[1]||"",!0),this.o=zn(p[2]||""),this.g=zn(p[3]||"",!0),wr(this,p[4]),this.l=zn(p[5]||"",!0),Hi(this,p[6]||"",!0),this.m=zn(p[7]||"")):(this.h=!1,this.i=new Fi(null,this.h))}Ot.prototype.toString=function(){var c=[],p=this.j;p&&c.push(Es(p,Vo,!0),":");var v=this.g;return(v||p=="file")&&(c.push("//"),(p=this.o)&&c.push(Es(p,Vo,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(Es(v,v.charAt(0)=="/"?Lh:ko,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",Es(v,da)),c.join("")};function Dn(c){return new Ot(c)}function _s(c,p,v){c.j=v?zn(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function wr(c,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);c.s=p}else c.s=null}function Hi(c,p,v){p instanceof Fi?(c.i=p,pu(c.i,c.h)):(v||(p=Es(p,Uh)),c.i=new Fi(p,c.h))}function nt(c,p,v){c.i.set(p,v)}function Ts(c){return nt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function zn(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Es(c,p,v){return typeof c=="string"?(c=encodeURI(c).replace(p,mu),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function mu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Vo=/[#\/\?@]/g,ko=/[#\?:]/g,Lh=/[#\?]/g,Uh=/[#\?@]/g,da=/#/g;function Fi(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function jn(c){c.g||(c.g=new Map,c.h=0,c.i&&xh(c.i,function(p,v){c.add(decodeURIComponent(p.replace(/\+/g," ")),v)}))}i=Fi.prototype,i.add=function(c,p){jn(this),this.i=null,c=di(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(p),this.h+=1,this};function Yi(c,p){jn(c),p=di(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function Gi(c,p){return jn(c),p=di(c,p),c.g.has(p)}i.forEach=function(c,p){jn(this),this.g.forEach(function(v,S){v.forEach(function(z){c.call(p,z,S,this)},this)},this)},i.na=function(){jn(this);const c=Array.from(this.g.values()),p=Array.from(this.g.keys()),v=[];for(let S=0;S<p.length;S++){const z=c[S];for(let F=0;F<z.length;F++)v.push(p[S])}return v},i.V=function(c){jn(this);let p=[];if(typeof c=="string")Gi(this,c)&&(p=p.concat(this.g.get(di(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)p=p.concat(c[v])}return p},i.set=function(c,p){return jn(this),this.i=null,c=di(this,c),Gi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},i.get=function(c,p){return c?(c=this.V(c),0<c.length?String(c[0]):p):p};function xo(c,p,v){Yi(c,p),0<v.length&&(c.i=null,c.g.set(di(c,p),Y(v)),c.h+=v.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(var v=0;v<p.length;v++){var S=p[v];const F=encodeURIComponent(String(S)),ae=this.V(S);for(S=0;S<ae.length;S++){var z=F;ae[S]!==""&&(z+="="+encodeURIComponent(String(ae[S]))),c.push(z)}}return this.i=c.join("&")};function di(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function pu(c,p){p&&!c.j&&(jn(c),c.i=null,c.g.forEach(function(v,S){var z=S.toLowerCase();S!=z&&(Yi(this,S),xo(this,z,v))},c)),c.j=p}function Ss(c,p){const v=new Un;if(m.Image){const S=new Image;S.onload=k(Bn,v,"TestLoadImage: loaded",!0,p,S),S.onerror=k(Bn,v,"TestLoadImage: error",!1,p,S),S.onabort=k(Bn,v,"TestLoadImage: abort",!1,p,S),S.ontimeout=k(Bn,v,"TestLoadImage: timeout",!1,p,S),m.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=c}else p(!1)}function ti(c,p){const v=new Un,S=new AbortController,z=setTimeout(()=>{S.abort(),Bn(v,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:S.signal}).then(F=>{clearTimeout(z),F.ok?Bn(v,"TestPingServer: ok",!0,p):Bn(v,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(z),Bn(v,"TestPingServer: error",!1,p)})}function Bn(c,p,v,S,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),S(v)}catch{}}function bs(){this.g=new ln}function mi(c,p,v){const S=v||"";try{Po(c,function(z,F){let ae=z;y(z)&&(ae=Je(z)),p.push(S+F+"="+encodeURIComponent(ae))})}catch(z){throw p.push(S+"type="+encodeURIComponent("_badmap")),z}}function Ar(c){this.l=c.Ub||null,this.j=c.eb||!1}U(Ar,mt),Ar.prototype.g=function(){return new Xi(this.l,this.j)},Ar.prototype.i=function(c){return function(){return c}}({});function Xi(c,p){dt.call(this),this.D=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(Xi,dt),i=Xi.prototype,i.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=p,this.readyState=1,gi(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(p.body=c),(this.D||m).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pi(this)),this.readyState=0},i.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,gi(this)),this.g&&(this.readyState=3,gi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Lo(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Lo(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}i.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?pi(this):gi(this),this.readyState==3&&Lo(this)}},i.Ra=function(c){this.g&&(this.response=this.responseText=c,pi(this))},i.Qa=function(c){this.g&&(this.response=c,pi(this))},i.ga=function(){this.g&&pi(this)};function pi(c){c.readyState=4,c.l=null,c.j=null,c.v=null,gi(c)}i.setRequestHeader=function(c,p){this.u.append(c,p)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var v=p.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=p.next();return c.join(`\r
`)};function gi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Uo(c){let p="";return Se(c,function(v,S){p+=S,p+=":",p+=v,p+=`\r
`}),p}function Gt(c,p,v){e:{for(S in v){var S=!1;break e}S=!0}S||(v=Uo(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):nt(c,p,v))}function Ze(c){dt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(Ze,dt);var ma=/^https?$/i,ws=["POST","PUT"];i=Ze.prototype,i.Ha=function(c){this.J=c},i.ea=function(c,p,v,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ci.g(),this.v=this.o?_n(this.o):_n(ci),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(F){gu(this,F);return}if(c=v||"",v=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var z in S)v.set(z,S[z]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const F of S.keys())v.set(F,S.get(F));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(v.keys()).find(F=>F.toLowerCase()=="content-type"),z=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(ws,p,void 0))||S||z||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,ae]of v)this.g.setRequestHeader(F,ae);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{As(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){gu(this,F)}};function gu(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.m=5,pa(c),yi(c)}function pa(c){c.A||(c.A=!0,Qe(c,"complete"),Qe(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Qe(this,"complete"),Qe(this,"abort"),yi(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yi(this,!0)),Ze.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?ga(this):this.bb())},i.bb=function(){ga(this)};function ga(c){if(c.h&&typeof f<"u"&&(!c.v[1]||qn(c)!=4||c.Z()!=2)){if(c.u&&qn(c)==4)Yt(c.Ea,0,c);else if(Qe(c,"readystatechange"),qn(c)==4){c.h=!1;try{const ae=c.Z();e:switch(ae){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var v;if(!(v=p)){var S;if(S=ae===0){var z=String(c.D).match(vs)[1]||null;!z&&m.self&&m.self.location&&(z=m.self.location.protocol.slice(0,-1)),S=!ma.test(z?z.toLowerCase():"")}v=S}if(v)Qe(c,"complete"),Qe(c,"success");else{c.m=6;try{var F=2<qn(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",pa(c)}}finally{yi(c)}}}}function yi(c,p){if(c.g){As(c);const v=c.g,S=c.v[0]?()=>{}:null;c.g=null,c.v=null,p||Qe(c,"ready");try{v.onreadystatechange=S}catch{}}}function As(c){c.I&&(m.clearTimeout(c.I),c.I=null)}i.isActive=function(){return!!this.g};function qn(c){return c.g?c.g.readyState:0}i.Z=function(){try{return 2<qn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),vn(p)}};function yu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function zh(c){const p={};c=(c.g&&2<=qn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<c.length;S++){if(ie(c[S]))continue;var v=x(c[S]);const z=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const F=p[z]||[];p[z]=F,F.push(v)}M(p,function(S){return S.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Cs(c,p,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||p}function ya(c){this.Aa=0,this.i=[],this.j=new Un,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Cs("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Cs("baseRetryDelayMs",5e3,c),this.cb=Cs("retryDelaySeedMs",1e4,c),this.Wa=Cs("forwardChannelMaxRetries",2,c),this.wa=Cs("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new qi(c&&c.concurrentRequestLimit),this.Da=new bs,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=ya.prototype,i.la=8,i.G=1,i.connect=function(c,p,v,S){gt(0),this.W=c,this.H=p||{},v&&S!==void 0&&(this.H.OSID=v,this.H.OAID=S),this.F=this.X,this.I=wu(this,null,this.W),_a(this)};function zo(c){if(vu(c),c.G==3){var p=c.U++,v=Dn(c.I);if(nt(v,"SID",c.K),nt(v,"RID",p),nt(v,"TYPE","terminate"),Rs(c,v),p=new Tn(c,c.j,p),p.L=2,p.v=Ts(Dn(v)),v=!1,m.navigator&&m.navigator.sendBeacon)try{v=m.navigator.sendBeacon(p.v.toString(),"")}catch{}!v&&m.Image&&(new Image().src=p.v,v=!0),v||(p.g=Au(p.j,null),p.g.ea(p.v)),p.F=Date.now(),gs(p)}bu(c)}function va(c){c.g&&(Ns(c),c.g.cancel(),c.g=null)}function vu(c){va(c),c.u&&(m.clearTimeout(c.u),c.u=null),Ta(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function _a(c){if(!ua(c.h)&&!c.s){c.s=!0;var p=c.Ga;re||D(),me||(re(),me=!0),Pe.add(p,c),c.B=0}}function jh(c,p){return ca(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=p.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Dt(w(c.Ga,c,p),qo(c,c.B)),c.B++,!0)}i.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const z=new Tn(this,this.j,c);let F=this.o;if(this.S&&(F?(F=A(F),O(F,this.S)):F=this.S),this.m!==null||this.O||(z.H=F,F=null),this.P)e:{for(var p=0,v=0;v<this.i.length;v++){t:{var S=this.i[v];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(p+=S,4096<p){p=v;break e}if(p===4096||v===this.i.length-1){p=v+1;break e}}p=1e3}else p=1e3;p=_u(this,z,p),v=Dn(this.I),nt(v,"RID",c),nt(v,"CVER",22),this.D&&nt(v,"X-HTTP-Session-Id",this.D),Rs(this,v),F&&(this.O?p="headers="+encodeURIComponent(String(Uo(F)))+"&"+p:this.m&&Gt(v,this.m,F)),ha(this.h,z),this.Ua&&nt(v,"TYPE","init"),this.P?(nt(v,"$req",p),nt(v,"SID","null"),z.T=!0,ei(z,v,null)):ei(z,v,p),this.G=2}}else this.G==3&&(c?jo(this,c):this.i.length==0||ua(this.h)||jo(this))};function jo(c,p){var v;p?v=p.l:v=c.U++;const S=Dn(c.I);nt(S,"SID",c.K),nt(S,"RID",v),nt(S,"AID",c.T),Rs(c,S),c.m&&c.o&&Gt(S,c.m,c.o),v=new Tn(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),p&&(c.i=p.D.concat(c.i)),p=_u(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ha(c.h,v),ei(v,S,p)}function Rs(c,p){c.H&&Se(c.H,function(v,S){nt(p,S,v)}),c.l&&Po({},function(v,S){nt(p,S,v)})}function _u(c,p,v){v=Math.min(c.i.length,v);var S=c.l?w(c.l.Na,c.l,c):null;e:{var z=c.i;let F=-1;for(;;){const ae=["count="+v];F==-1?0<v?(F=z[0].g,ae.push("ofs="+F)):F=0:ae.push("ofs="+F);let Be=!0;for(let Ut=0;Ut<v;Ut++){let qe=z[Ut].g;const Xt=z[Ut].map;if(qe-=F,0>qe)F=Math.max(0,z[Ut].g-100),Be=!1;else try{mi(Xt,ae,"req"+qe+"_")}catch{S&&S(Xt)}}if(Be){S=ae.join("&");break e}}}return c=c.i.splice(0,v),p.D=c,S}function Tu(c){if(!c.g&&!c.u){c.Y=1;var p=c.Fa;re||D(),me||(re(),me=!0),Pe.add(p,c),c.v=0}}function Bo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Dt(w(c.Fa,c),qo(c,c.v)),c.v++,!0)}i.Fa=function(){if(this.u=null,Eu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Dt(w(this.ab,this),c)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),va(this),Eu(this))};function Ns(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function Eu(c){c.g=new Tn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var p=Dn(c.qa);nt(p,"RID","rpc"),nt(p,"SID",c.K),nt(p,"AID",c.T),nt(p,"CI",c.F?"0":"1"),!c.F&&c.ja&&nt(p,"TO",c.ja),nt(p,"TYPE","xmlhttp"),Rs(c,p),c.m&&c.o&&Gt(p,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=Ts(Dn(p)),v.m=null,v.P=!0,Bi(v,c)}i.Za=function(){this.C!=null&&(this.C=null,va(this),Bo(this),gt(19))};function Ta(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function Su(c,p){var v=null;if(c.g==p){Ta(c),Ns(c),c.g=null;var S=2}else if(Oo(c.h,p))v=p.D,En(c.h,p),S=1;else return;if(c.G!=0){if(p.o)if(S==1){v=p.m?p.m.length:0,p=Date.now()-p.F;var z=c.B;S=_r(),Qe(S,new Lt(S,v)),_a(c)}else Tu(c);else if(z=p.s,z==3||z==0&&0<p.X||!(S==1&&jh(c,p)||S==2&&Bo(c)))switch(v&&0<v.length&&(p=c.h,p.i=p.i.concat(v)),z){case 1:Ki(c,5);break;case 4:Ki(c,10);break;case 3:Ki(c,6);break;default:Ki(c,2)}}}function qo(c,p){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*p}function Ki(c,p){if(c.j.info("Error code "+p),p==2){var v=w(c.fb,c),S=c.Xa;const z=!S;S=new Ot(S||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||_s(S,"https"),Ts(S),z?Ss(S.toString(),v):ti(S.toString(),v)}else gt(2);c.G=0,c.l&&c.l.sa(p),bu(c),vu(c)}i.fb=function(c){c?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function bu(c){if(c.G=0,c.ka=[],c.l){const p=Mo(c.h);(p.length!=0||c.i.length!=0)&&(X(c.ka,p),X(c.ka,c.i),c.h.i.length=0,Y(c.i),c.i.length=0),c.l.ra()}}function wu(c,p,v){var S=v instanceof Ot?Dn(v):new Ot(v);if(S.g!="")p&&(S.g=p+"."+S.g),wr(S,S.s);else{var z=m.location;S=z.protocol,p=p?p+"."+z.hostname:z.hostname,z=+z.port;var F=new Ot(null);S&&_s(F,S),p&&(F.g=p),z&&wr(F,z),v&&(F.l=v),S=F}return v=c.D,p=c.ya,v&&p&&nt(S,v,p),nt(S,"VER",c.la),Rs(c,S),S}function Au(c,p,v){if(p&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Ca&&!c.pa?new Ze(new Ar({eb:v})):new Ze(c.pa),p.Ha(c.J),p}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cu(){}i=Cu.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Ea(){}Ea.prototype.g=function(c,p){return new Sn(c,p)};function Sn(c,p){dt.call(this),this.g=new ya(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(c?c["X-WebChannel-Client-Profile"]=p.va:c={"X-WebChannel-Client-Profile":p.va}),this.g.S=c,(c=p&&p.Sb)&&!ie(c)&&(this.g.m=c),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!ie(p)&&(this.g.D=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new vi(this)}U(Sn,dt),Sn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Sn.prototype.close=function(){zo(this.g)},Sn.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=Je(c),c=v);p.i.push(new du(p.Ya++,c)),p.G==3&&_a(p)},Sn.prototype.N=function(){this.g.l=null,delete this.j,zo(this.g),delete this.g,Sn.aa.N.call(this)};function Ru(c){zi.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){e:{for(const v in p){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}U(Ru,zi);function Nu(){Ro.call(this),this.status=1}U(Nu,Ro);function vi(c){this.g=c}U(vi,Cu),vi.prototype.ua=function(){Qe(this.g,"a")},vi.prototype.ta=function(c){Qe(this.g,new Ru(c))},vi.prototype.sa=function(c){Qe(this.g,new Nu)},vi.prototype.ra=function(){Qe(this.g,"b")},Ea.prototype.createWebChannel=Ea.prototype.g,Sn.prototype.send=Sn.prototype.o,Sn.prototype.open=Sn.prototype.m,Sn.prototype.close=Sn.prototype.close,LT=function(){return new Ea},xT=function(){return _r()},kT=ui,pm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Sr.NO_ERROR=0,Sr.TIMEOUT=8,Sr.HTTP_ERROR=6,Lc=Sr,ji.COMPLETE="complete",VT=ji,Co.EventType=Ui,Ui.OPEN="a",Ui.CLOSE="b",Ui.ERROR="c",Ui.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Ml=Co,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,PT=Ze}).apply(typeof Oc<"u"?Oc:typeof self<"u"?self:typeof window<"u"?window:{});const R_="@firebase/firestore",N_="4.9.0";/**
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
 */class fn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}fn.UNAUTHENTICATED=new fn(null),fn.GOOGLE_CREDENTIALS=new fn("google-credentials-uid"),fn.FIRST_PARTY=new fn("first-party-uid"),fn.MOCK_USER=new fn("mock-user");/**
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
 */let To="12.0.0";/**
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
 */const Ws=new Fm("@firebase/firestore");function $a(){return Ws.logLevel}function fe(i,...e){if(Ws.logLevel<=ze.DEBUG){const n=e.map(Xm);Ws.debug(`Firestore (${To}): ${i}`,...n)}}function mr(i,...e){if(Ws.logLevel<=ze.ERROR){const n=e.map(Xm);Ws.error(`Firestore (${To}): ${i}`,...n)}}function lo(i,...e){if(Ws.logLevel<=ze.WARN){const n=e.map(Xm);Ws.warn(`Firestore (${To}): ${i}`,...n)}}function Xm(i){if(typeof i=="string")return i;try{/**
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
 */function Ne(i,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,UT(i,s,n)}function UT(i,e,n){let s=`FIRESTORE (${To}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw mr(s),new Error(s)}function Et(i,e,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,i||UT(e,o,s)}function Ye(i,e){return i}/**
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
 */const ee={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends ki{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class is{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class zT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(fn.UNAUTHENTICATED))}shutdown(){}}class rR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class sR{constructor(e){this.t=e,this.currentUser=fn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Et(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,n(g)):Promise.resolve();let u=new is;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new is,e.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new is)}},0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Et(typeof s.accessToken=="string",31837,{l:s}),new zT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Et(e===null||typeof e=="string",2055,{h:e}),new fn(e)}}class aR{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=fn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class oR{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new aR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(fn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class I_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ci(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Et(this.o===void 0,3512);const s=u=>{u.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,fe("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new I_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Et(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new I_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function uR(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<i;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Km{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=uR(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=e.charAt(o[u]%62))}return s}}function je(i,e){return i<e?-1:i>e?1:0}function gm(i,e){const n=Math.min(i.length,e.length);for(let s=0;s<n;s++){const o=i.charAt(s),u=e.charAt(s);if(o!==u)return Xd(o)===Xd(u)?je(o,u):Xd(o)?1:-1}return je(i.length,e.length)}const cR=55296,hR=57343;function Xd(i){const e=i.charCodeAt(0);return e>=cR&&e<=hR}function uo(i,e,n){return i.length===e.length&&i.every((s,o)=>n(s,e[o]))}/**
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
 */const D_="__name__";class Ai{constructor(e,n,s){n===void 0?n=0:n>e.length&&Ne(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&Ne(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ai.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ai?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const u=Ai.compareSegments(e.get(o),n.get(o));if(u!==0)return u}return je(e.length,n.length)}static compareSegments(e,n){const s=Ai.isNumericId(e),o=Ai.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?Ai.extractNumericId(e).compare(Ai.extractNumericId(n)):gm(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ns.fromString(e.substring(4,e.length-2))}}class ft extends Ai{construct(e,n,s){return new ft(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new he(ee.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new ft(n)}static emptyPath(){return new ft([])}}const fR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mn extends Ai{construct(e,n,s){return new mn(e,n,s)}static isValidIdentifier(e){return fR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===D_}static keyField(){return new mn([D_])}static fromServerFormat(e){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new he(ee.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new he(ee.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new he(ee.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new he(ee.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mn(n)}static emptyPath(){return new mn([])}}/**
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
 */class Te{constructor(e){this.path=e}static fromPath(e){return new Te(ft.fromString(e))}static fromName(e){return new Te(ft.fromString(e).popFirst(5))}static empty(){return new Te(ft.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ft.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ft.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Te(new ft(e.slice()))}}/**
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
 */function jT(i,e,n){if(!n)throw new he(ee.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function dR(i,e,n,s){if(e===!0&&s===!0)throw new he(ee.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function O_(i){if(!Te.isDocumentKey(i))throw new he(ee.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function M_(i){if(Te.isDocumentKey(i))throw new he(ee.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function BT(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function ph(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Ne(12329,{type:typeof i})}function Hl(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new he(ee.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ph(i);throw new he(ee.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return i}/**
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
 */function xt(i,e){const n={typeString:i};return e&&(n.value=e),n}function eu(i,e){if(!BT(i))throw new he(ee.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){n=`JSON missing required field: '${s}'`;break}const f=i[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new he(ee.INVALID_ARGUMENT,n);return!0}/**
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
 */const P_=-62135596800,V_=1e6;class _t{static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*V_);return new _t(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new he(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new he(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<P_)throw new he(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/V_}_compareTo(e){return this.seconds===e.seconds?je(this.nanoseconds,e.nanoseconds):je(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:_t._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(eu(e,_t._jsonSchema))return new _t(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-P_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}_t._jsonSchemaVersion="firestore/timestamp/1.0",_t._jsonSchema={type:xt("string",_t._jsonSchemaVersion),seconds:xt("number"),nanoseconds:xt("number")};/**
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
 */class Re{static fromTimestamp(e){return new Re(e)}static min(){return new Re(new _t(0,0))}static max(){return new Re(new _t(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Fl=-1;function mR(i,e){const n=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Re.fromTimestamp(s===1e9?new _t(n+1,0):new _t(n,s));return new as(o,Te.empty(),e)}function pR(i){return new as(i.readTime,i.key,Fl)}class as{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new as(Re.min(),Te.empty(),Fl)}static max(){return new as(Re.max(),Te.empty(),Fl)}}function gR(i,e){let n=i.readTime.compareTo(e.readTime);return n!==0?n:(n=Te.comparator(i.documentKey,e.documentKey),n!==0?n:je(i.largestBatchId,e.largestBatchId))}/**
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
 */const yR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function gh(i){if(i.code!==ee.FAILED_PRECONDITION||i.message!==yR)throw i;fe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ne(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new W((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof W?n:W.resolve(n)}catch(n){return W.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):W.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):W.reject(n)}static resolve(e){return new W((n,s)=>{n(e)})}static reject(e){return new W((n,s)=>{s(e)})}static waitFor(e){return new W((n,s)=>{let o=0,u=0,f=!1;e.forEach(m=>{++o,m.next(()=>{++u,f&&u===o&&n()},g=>s(g))}),f=!0,u===o&&n()})}static or(e){let n=W.resolve(!1);for(const s of e)n=n.next(o=>o?W.resolve(o):s());return n}static forEach(e,n){const s=[];return e.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(e,n){return new W((s,o)=>{const u=e.length,f=new Array(u);let m=0;for(let g=0;g<u;g++){const y=g;n(e[y]).next(T=>{f[y]=T,++m,m===u&&s(f)},T=>o(T))}})}static doWhile(e,n){return new W((s,o)=>{const u=()=>{e()===!0?n().next(()=>{u()},o):s()};u()})}}function _R(i){const e=i.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Eo(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class yh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}yh.ce=-1;/**
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
 */const TR=-1;function vh(i){return i==null}function Qc(i){return i===0&&1/i==-1/0}function ER(i){return typeof i=="number"&&Number.isInteger(i)&&!Qc(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const qT="";function SR(i){let e="";for(let n=0;n<i.length;n++)e.length>0&&(e=k_(e)),e=bR(i.get(n),e);return k_(e)}function bR(i,e){let n=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":n+="";break;case qT:n+="";break;default:n+=u}}return n}function k_(i){return i+qT+""}/**
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
 */function x_(i){let e=0;for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e++;return e}function So(i,e){for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e(n,i[n])}function HT(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class Nt{constructor(e,n){this.comparator=e,this.root=n||an.EMPTY}insert(e,n){return new Nt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,an.BLACK,null,null))}remove(e){return new Nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,an.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mc(this.root,e,this.comparator,!0)}}class Mc{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?s(e.key,n):1,n&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class an{constructor(e,n,s,o,u){this.key=e,this.value=n,this.color=s??an.RED,this.left=o??an.EMPTY,this.right=u??an.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,u){return new an(e??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return an.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return an.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,an.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,an.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ne(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ne(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ne(27949);return e+(this.isRed()?0:1)}}an.EMPTY=null,an.RED=!0,an.BLACK=!1;an.EMPTY=new class{constructor(){this.size=0}get key(){throw Ne(57766)}get value(){throw Ne(16141)}get color(){throw Ne(16727)}get left(){throw Ne(29726)}get right(){throw Ne(36894)}copy(e,n,s,o,u){return this}insert(e,n,s){return new an(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ht{constructor(e){this.comparator=e,this.data=new Nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new L_(this.data.getIterator())}getIteratorFrom(e){return new L_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ht)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ht(this.comparator);return n.data=e,n}}class L_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wr{constructor(e){this.fields=e,e.sort(mn.comparator)}static empty(){return new Wr([])}unionWith(e){let n=new Ht(mn.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Wr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return uo(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class FT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class on{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new FT("Invalid base64 string: "+u):u}}(e);return new on(n)}static fromUint8Array(e){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(e);return new on(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return je(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}on.EMPTY_BYTE_STRING=new on("");const wR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function os(i){if(Et(!!i,39018),typeof i=="string"){let e=0;const n=wR.exec(i);if(Et(!!n,46558,{timestamp:i}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Rt(i.seconds),nanos:Rt(i.nanos)}}function Rt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function ls(i){return typeof i=="string"?on.fromBase64String(i):on.fromUint8Array(i)}/**
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
 */const YT="server_timestamp",GT="__type__",XT="__previous_value__",KT="__local_write_time__";function Qm(i){var n,s;return((s=(((n=i==null?void 0:i.mapValue)==null?void 0:n.fields)||{})[GT])==null?void 0:s.stringValue)===YT}function _h(i){const e=i.mapValue.fields[XT];return Qm(e)?_h(e):e}function Yl(i){const e=os(i.mapValue.fields[KT].timestampValue);return new _t(e.seconds,e.nanos)}/**
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
 */class AR{constructor(e,n,s,o,u,f,m,g,y,T){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=T}}const $c="(default)";class Gl{constructor(e,n){this.projectId=e,this.database=n||$c}static empty(){return new Gl("","")}get isDefaultDatabase(){return this.database===$c}isEqual(e){return e instanceof Gl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const QT="__type__",CR="__max__",Pc={mapValue:{}},$T="__vector__",Zc="value";function us(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Qm(i)?4:NR(i)?9007199254740991:RR(i)?10:11:Ne(28295,{value:i})}function Vi(i,e){if(i===e)return!0;const n=us(i);if(n!==us(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Yl(i).isEqual(Yl(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=os(o.timestampValue),m=os(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return ls(o.bytesValue).isEqual(ls(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return Rt(o.geoPointValue.latitude)===Rt(u.geoPointValue.latitude)&&Rt(o.geoPointValue.longitude)===Rt(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return Rt(o.integerValue)===Rt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=Rt(o.doubleValue),m=Rt(u.doubleValue);return f===m?Qc(f)===Qc(m):isNaN(f)&&isNaN(m)}return!1}(i,e);case 9:return uo(i.arrayValue.values||[],e.arrayValue.values||[],Vi);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(x_(f)!==x_(m))return!1;for(const g in f)if(f.hasOwnProperty(g)&&(m[g]===void 0||!Vi(f[g],m[g])))return!1;return!0}(i,e);default:return Ne(52216,{left:i})}}function Xl(i,e){return(i.values||[]).find(n=>Vi(n,e))!==void 0}function co(i,e){if(i===e)return 0;const n=us(i),s=us(e);if(n!==s)return je(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return je(i.booleanValue,e.booleanValue);case 2:return function(u,f){const m=Rt(u.integerValue||u.doubleValue),g=Rt(f.integerValue||f.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(i,e);case 3:return U_(i.timestampValue,e.timestampValue);case 4:return U_(Yl(i),Yl(e));case 5:return gm(i.stringValue,e.stringValue);case 6:return function(u,f){const m=ls(u),g=ls(f);return m.compareTo(g)}(i.bytesValue,e.bytesValue);case 7:return function(u,f){const m=u.split("/"),g=f.split("/");for(let y=0;y<m.length&&y<g.length;y++){const T=je(m[y],g[y]);if(T!==0)return T}return je(m.length,g.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,f){const m=je(Rt(u.latitude),Rt(f.latitude));return m!==0?m:je(Rt(u.longitude),Rt(f.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return z_(i.arrayValue,e.arrayValue);case 10:return function(u,f){var w,k,U,Y;const m=u.fields||{},g=f.fields||{},y=(w=m[Zc])==null?void 0:w.arrayValue,T=(k=g[Zc])==null?void 0:k.arrayValue,b=je(((U=y==null?void 0:y.values)==null?void 0:U.length)||0,((Y=T==null?void 0:T.values)==null?void 0:Y.length)||0);return b!==0?b:z_(y,T)}(i.mapValue,e.mapValue);case 11:return function(u,f){if(u===Pc.mapValue&&f===Pc.mapValue)return 0;if(u===Pc.mapValue)return 1;if(f===Pc.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),y=f.fields||{},T=Object.keys(y);g.sort(),T.sort();for(let b=0;b<g.length&&b<T.length;++b){const w=gm(g[b],T[b]);if(w!==0)return w;const k=co(m[g[b]],y[T[b]]);if(k!==0)return k}return je(g.length,T.length)}(i.mapValue,e.mapValue);default:throw Ne(23264,{he:n})}}function U_(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return je(i,e);const n=os(i),s=os(e),o=je(n.seconds,s.seconds);return o!==0?o:je(n.nanos,s.nanos)}function z_(i,e){const n=i.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=co(n[o],s[o]);if(u)return u}return je(n.length,s.length)}function ho(i){return ym(i)}function ym(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(n){const s=os(n);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(n){return ls(n).toBase64()}(i.bytesValue):"referenceValue"in i?function(n){return Te.fromName(n).toString()}(i.referenceValue):"geoPointValue"in i?function(n){return`geo(${n.latitude},${n.longitude})`}(i.geoPointValue):"arrayValue"in i?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=ym(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${ym(n.fields[f])}`;return o+"}"}(i.mapValue):Ne(61005,{value:i})}function Uc(i){switch(us(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=_h(i);return e?16+Uc(e):16;case 5:return 2*i.stringValue.length;case 6:return ls(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Uc(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return So(s.fields,(u,f)=>{o+=u.length+Uc(f)}),o}(i.mapValue);default:throw Ne(13486,{value:i})}}function j_(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function vm(i){return!!i&&"integerValue"in i}function $m(i){return!!i&&"arrayValue"in i}function B_(i){return!!i&&"nullValue"in i}function q_(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Kd(i){return!!i&&"mapValue"in i}function RR(i){var n,s;return((s=(((n=i==null?void 0:i.mapValue)==null?void 0:n.fields)||{})[QT])==null?void 0:s.stringValue)===$T}function Ll(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return So(i.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ll(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(i.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ll(i.arrayValue.values[n]);return e}return{...i}}function NR(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===CR}/**
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
 */class Ri{constructor(e){this.value=e}static empty(){return new Ri({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Kd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ll(n)}setAll(e){let n=mn.emptyPath(),s={},o=[];e.forEach((f,m)=>{if(!n.isImmediateParentOf(m)){const g=this.getFieldsMap(n);this.applyChanges(g,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=Ll(f):o.push(m.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(e){const n=this.field(e.popLast());Kd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];Kd(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){So(n,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new Ri(Ll(this.value))}}/**
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
 */class dn{constructor(e,n,s,o,u,f,m){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(e){return new dn(e,0,Re.min(),Re.min(),Re.min(),Ri.empty(),0)}static newFoundDocument(e,n,s,o){return new dn(e,1,n,Re.min(),s,o,0)}static newNoDocument(e,n){return new dn(e,2,n,Re.min(),Re.min(),Ri.empty(),0)}static newUnknownDocument(e,n){return new dn(e,3,n,Re.min(),Re.min(),Ri.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ri.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ri.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Wc{constructor(e,n){this.position=e,this.inclusive=n}}function H_(i,e,n){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],f=i.position[o];if(u.field.isKeyField()?s=Te.comparator(Te.fromName(f.referenceValue),n.key):s=co(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function F_(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let n=0;n<i.position.length;n++)if(!Vi(i.position[n],e.position[n]))return!1;return!0}/**
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
 */class Jc{constructor(e,n="asc"){this.field=e,this.dir=n}}function IR(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class ZT{}class kt extends ZT{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new OR(e,n,s):n==="array-contains"?new VR(e,s):n==="in"?new kR(e,s):n==="not-in"?new xR(e,s):n==="array-contains-any"?new LR(e,s):new kt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new MR(e,s):new PR(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(co(n,this.value)):n!==null&&us(this.value)===us(n)&&this.matchesComparison(co(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ne(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class li extends ZT{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new li(e,n)}matches(e){return WT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function WT(i){return i.op==="and"}function JT(i){return DR(i)&&WT(i)}function DR(i){for(const e of i.filters)if(e instanceof li)return!1;return!0}function _m(i){if(i instanceof kt)return i.field.canonicalString()+i.op.toString()+ho(i.value);if(JT(i))return i.filters.map(e=>_m(e)).join(",");{const e=i.filters.map(n=>_m(n)).join(",");return`${i.op}(${e})`}}function eE(i,e){return i instanceof kt?function(s,o){return o instanceof kt&&s.op===o.op&&s.field.isEqual(o.field)&&Vi(s.value,o.value)}(i,e):i instanceof li?function(s,o){return o instanceof li&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,m)=>u&&eE(f,o.filters[m]),!0):!1}(i,e):void Ne(19439)}function tE(i){return i instanceof kt?function(n){return`${n.field.canonicalString()} ${n.op} ${ho(n.value)}`}(i):i instanceof li?function(n){return n.op.toString()+" {"+n.getFilters().map(tE).join(" ,")+"}"}(i):"Filter"}class OR extends kt{constructor(e,n,s){super(e,n,s),this.key=Te.fromName(s.referenceValue)}matches(e){const n=Te.comparator(e.key,this.key);return this.matchesComparison(n)}}class MR extends kt{constructor(e,n){super(e,"in",n),this.keys=nE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class PR extends kt{constructor(e,n){super(e,"not-in",n),this.keys=nE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nE(i,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(s=>Te.fromName(s.referenceValue))}class VR extends kt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $m(n)&&Xl(n.arrayValue,this.value)}}class kR extends kt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Xl(this.value.arrayValue,n)}}class xR extends kt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Xl(this.value.arrayValue,n)}}class LR extends kt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$m(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Xl(this.value.arrayValue,s))}}/**
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
 */class UR{constructor(e,n=null,s=[],o=[],u=null,f=null,m=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Te=null}}function Y_(i,e=null,n=[],s=[],o=null,u=null,f=null){return new UR(i,e,n,s,o,u,f)}function Zm(i){const e=Ye(i);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>_m(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),vh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>ho(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>ho(s)).join(",")),e.Te=n}return e.Te}function Wm(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<i.orderBy.length;n++)if(!IR(i.orderBy[n],e.orderBy[n]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let n=0;n<i.filters.length;n++)if(!eE(i.filters[n],e.filters[n]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!F_(i.startAt,e.startAt)&&F_(i.endAt,e.endAt)}function Tm(i){return Te.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class tu{constructor(e,n=null,s=[],o=[],u=null,f="F",m=null,g=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function zR(i,e,n,s,o,u,f,m){return new tu(i,e,n,s,o,u,f,m)}function Jm(i){return new tu(i)}function G_(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function iE(i){return i.collectionGroup!==null}function Ul(i){const e=Ye(i);if(e.Ie===null){e.Ie=[];const n=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),n.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Ht(mn.comparator);return f.filters.forEach(g=>{g.getFlattenedFilters().forEach(y=>{y.isInequality()&&(m=m.add(y.field))})}),m})(e).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Jc(u,s))}),n.has(mn.keyField().canonicalString())||e.Ie.push(new Jc(mn.keyField(),s))}return e.Ie}function Ni(i){const e=Ye(i);return e.Ee||(e.Ee=jR(e,Ul(i))),e.Ee}function jR(i,e){if(i.limitType==="F")return Y_(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Jc(o.field,u)});const n=i.endAt?new Wc(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Wc(i.startAt.position,i.startAt.inclusive):null;return Y_(i.path,i.collectionGroup,e,i.filters,i.limit,n,s)}}function Em(i,e){const n=i.filters.concat([e]);return new tu(i.path,i.collectionGroup,i.explicitOrderBy.slice(),n,i.limit,i.limitType,i.startAt,i.endAt)}function Sm(i,e,n){return new tu(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,n,i.startAt,i.endAt)}function Th(i,e){return Wm(Ni(i),Ni(e))&&i.limitType===e.limitType}function rE(i){return`${Zm(Ni(i))}|lt:${i.limitType}`}function Za(i){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>tE(o)).join(", ")}]`),vh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>ho(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>ho(o)).join(",")),`Target(${s})`}(Ni(i))}; limitType=${i.limitType})`}function Eh(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):Te.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of Ul(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(f,m,g){const y=H_(f,m,g);return f.inclusive?y<=0:y<0}(s.startAt,Ul(s),o)||s.endAt&&!function(f,m,g){const y=H_(f,m,g);return f.inclusive?y>=0:y>0}(s.endAt,Ul(s),o))}(i,e)}function BR(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function sE(i){return(e,n)=>{let s=!1;for(const o of Ul(i)){const u=qR(o,e,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function qR(i,e,n){const s=i.field.isKeyField()?Te.comparator(e.key,n.key):function(u,f,m){const g=f.data.field(u),y=m.data.field(u);return g!==null&&y!==null?co(g,y):Ne(42886)}(i.field,e,n);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Ne(19790,{direction:i.dir})}}/**
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
 */class ia{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){So(this.inner,(n,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return HT(this.inner)}size(){return this.innerSize}}/**
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
 */const HR=new Nt(Te.comparator);function cs(){return HR}const aE=new Nt(Te.comparator);function Pl(...i){let e=aE;for(const n of i)e=e.insert(n.key,n);return e}function FR(i){let e=aE;return i.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ys(){return zl()}function oE(){return zl()}function zl(){return new ia(i=>i.toString(),(i,e)=>i.isEqual(e))}const YR=new Ht(Te.comparator);function Xe(...i){let e=YR;for(const n of i)e=e.add(n);return e}const GR=new Ht(je);function XR(){return GR}/**
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
 */function ep(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qc(e)?"-0":e}}function lE(i){return{integerValue:""+i}}function KR(i,e){return ER(e)?lE(e):ep(i,e)}/**
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
 */class Sh{constructor(){this._=void 0}}function QR(i,e,n){return i instanceof bm?function(o,u){const f={fields:{[GT]:{stringValue:YT},[KT]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Qm(u)&&(u=_h(u)),u&&(f.fields[XT]=u),{mapValue:f}}(n,e):i instanceof eh?uE(i,e):i instanceof th?cE(i,e):function(o,u){const f=ZR(o,u),m=X_(f)+X_(o.Ae);return vm(f)&&vm(o.Ae)?lE(m):ep(o.serializer,m)}(i,e)}function $R(i,e,n){return i instanceof eh?uE(i,e):i instanceof th?cE(i,e):n}function ZR(i,e){return i instanceof wm?function(s){return vm(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class bm extends Sh{}class eh extends Sh{constructor(e){super(),this.elements=e}}function uE(i,e){const n=hE(e);for(const s of i.elements)n.some(o=>Vi(o,s))||n.push(s);return{arrayValue:{values:n}}}class th extends Sh{constructor(e){super(),this.elements=e}}function cE(i,e){let n=hE(e);for(const s of i.elements)n=n.filter(o=>!Vi(o,s));return{arrayValue:{values:n}}}class wm extends Sh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function X_(i){return Rt(i.integerValue||i.doubleValue)}function hE(i){return $m(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function WR(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof eh&&o instanceof eh||s instanceof th&&o instanceof th?uo(s.elements,o.elements,Vi):s instanceof wm&&o instanceof wm?Vi(s.Ae,o.Ae):s instanceof bm&&o instanceof bm}(i.transform,e.transform)}class Ks{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ks}static exists(e){return new Ks(void 0,e)}static updateTime(e){return new Ks(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zc(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class tp{}function fE(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new eN(i.key,Ks.none()):new np(i.key,i.data,Ks.none());{const n=i.data,s=Ri.empty();let o=new Ht(mn.comparator);for(let u of e.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new bh(i.key,s,new Wr(o.toArray()),Ks.none())}}function JR(i,e,n){i instanceof np?function(o,u,f){const m=o.value.clone(),g=Q_(o.fieldTransforms,u,f.transformResults);m.setAll(g),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(i,e,n):i instanceof bh?function(o,u,f){if(!zc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=Q_(o.fieldTransforms,u,f.transformResults),g=u.data;g.setAll(dE(o)),g.setAll(m),u.convertToFoundDocument(f.version,g).setHasCommittedMutations()}(i,e,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,e,n)}function jl(i,e,n,s){return i instanceof np?function(u,f,m,g){if(!zc(u.precondition,f))return m;const y=u.value.clone(),T=$_(u.fieldTransforms,g,f);return y.setAll(T),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(i,e,n,s):i instanceof bh?function(u,f,m,g){if(!zc(u.precondition,f))return m;const y=$_(u.fieldTransforms,g,f),T=f.data;return T.setAll(dE(u)),T.setAll(y),f.convertToFoundDocument(f.version,T).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(b=>b.field))}(i,e,n,s):function(u,f,m){return zc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(i,e,n)}function K_(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&uo(s,o,(u,f)=>WR(u,f))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class np extends tp{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class bh extends tp{constructor(e,n,s,o,u=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function dE(i){const e=new Map;return i.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=i.data.field(n);e.set(n,s)}}),e}function Q_(i,e,n){const s=new Map;Et(i.length===n.length,32656,{Re:n.length,Ve:i.length});for(let o=0;o<n.length;o++){const u=i[o],f=u.transform,m=e.data.field(u.field);s.set(u.field,$R(f,m,n[o]))}return s}function $_(i,e,n){const s=new Map;for(const o of i){const u=o.transform,f=n.data.field(o.field);s.set(o.field,QR(u,f,e))}return s}class eN extends tp{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class tN{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&JR(u,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=jl(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=jl(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=oE();return this.mutations.forEach(o=>{const u=e.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const g=fE(f,m);g!==null&&s.set(o.key,g),f.isValidDocument()||f.convertToNoDocument(Re.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Xe())}isEqual(e){return this.batchId===e.batchId&&uo(this.mutations,e.mutations,(n,s)=>K_(n,s))&&uo(this.baseMutations,e.baseMutations,(n,s)=>K_(n,s))}}/**
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
 */class nN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class iN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Vt,Fe;function mE(i){if(i===void 0)return mr("GRPC error has no .code"),ee.UNKNOWN;switch(i){case Vt.OK:return ee.OK;case Vt.CANCELLED:return ee.CANCELLED;case Vt.UNKNOWN:return ee.UNKNOWN;case Vt.DEADLINE_EXCEEDED:return ee.DEADLINE_EXCEEDED;case Vt.RESOURCE_EXHAUSTED:return ee.RESOURCE_EXHAUSTED;case Vt.INTERNAL:return ee.INTERNAL;case Vt.UNAVAILABLE:return ee.UNAVAILABLE;case Vt.UNAUTHENTICATED:return ee.UNAUTHENTICATED;case Vt.INVALID_ARGUMENT:return ee.INVALID_ARGUMENT;case Vt.NOT_FOUND:return ee.NOT_FOUND;case Vt.ALREADY_EXISTS:return ee.ALREADY_EXISTS;case Vt.PERMISSION_DENIED:return ee.PERMISSION_DENIED;case Vt.FAILED_PRECONDITION:return ee.FAILED_PRECONDITION;case Vt.ABORTED:return ee.ABORTED;case Vt.OUT_OF_RANGE:return ee.OUT_OF_RANGE;case Vt.UNIMPLEMENTED:return ee.UNIMPLEMENTED;case Vt.DATA_LOSS:return ee.DATA_LOSS;default:return Ne(39323,{code:i})}}(Fe=Vt||(Vt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function rN(){return new TextEncoder}/**
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
 */const sN=new ns([4294967295,4294967295],0);function Z_(i){const e=rN().encode(i),n=new MT;return n.update(e),new Uint8Array(n.digest())}function W_(i){const e=new DataView(i.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ns([n,s],0),new ns([o,u],0)]}class ip{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Vl(`Invalid padding: ${n}`);if(s<0)throw new Vl(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Vl(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Vl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ns.fromNumber(this.ge)}ye(e,n,s){let o=e.add(n.multiply(ns.fromNumber(s)));return o.compare(sN)===1&&(o=new ns([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Z_(e),[s,o]=W_(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);if(!this.we(f))return!1}return!0}static create(e,n,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),f=new ip(u,o,n);return s.forEach(m=>f.insert(m)),f}insert(e){if(this.ge===0)return;const n=Z_(e),[s,o]=W_(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);this.Se(f)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Vl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class wh{constructor(e,n,s,o,u){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const o=new Map;return o.set(e,nu.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new wh(Re.min(),o,new Nt(je),cs(),Xe())}}class nu{constructor(e,n,s,o,u){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new nu(s,n,Xe(),Xe(),Xe())}}/**
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
 */class jc{constructor(e,n,s,o){this.be=e,this.removedTargetIds=n,this.key=s,this.De=o}}class pE{constructor(e,n){this.targetId=e,this.Ce=n}}class gE{constructor(e,n,s=on.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=o}}class J_{constructor(){this.ve=0,this.Fe=e0(),this.Me=on.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Xe(),n=Xe(),s=Xe();return this.Fe.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:Ne(38017,{changeType:u})}}),new nu(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=e0()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Et(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class aN{constructor(e){this.Ge=e,this.ze=new Map,this.je=cs(),this.Je=Vc(),this.He=Vc(),this.Ye=new Nt(je)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:Ne(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((s,o)=>{this.rt(o)&&n(o)})}st(e){const n=e.targetId,s=e.Ce.count,o=this.ot(n);if(o){const u=o.target;if(Tm(u))if(s===0){const f=new Te(u.path);this.et(n,f,dn.newNoDocument(f,Re.min()))}else Et(s===1,20013,{expectedCount:s});else{const f=this._t(n);if(f!==s){const m=this.ut(e),g=m?this.ct(m,e,f):1;if(g!==0){this.it(n);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,y)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=ls(s).toUint8Array()}catch(g){if(g instanceof FT)return lo("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new ip(f,o,u)}catch(g){return lo(g instanceof Vl?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.ge===0?null:m}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const f=this.Ge.ht(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(n,u,null),o++)}),o}Tt(e){const n=new Map;this.ze.forEach((u,f)=>{const m=this.ot(f);if(m){if(u.current&&Tm(m.target)){const g=new Te(m.target.path);this.It(g).has(f)||this.Et(f,g)||this.et(f,g,dn.newNoDocument(g,e))}u.Be&&(n.set(f,u.ke()),u.qe())}});let s=Xe();this.He.forEach((u,f)=>{let m=!0;f.forEachWhile(g=>{const y=this.ot(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.je.forEach((u,f)=>f.setReadTime(e));const o=new wh(e,n,this.Ye,this.je,s);return this.je=cs(),this.Je=Vc(),this.He=Vc(),this.Ye=new Nt(je),o}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,n)?o.Qe(n,1):o.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new J_,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Ht(je),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Ht(je),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||fe("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new J_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Vc(){return new Nt(Te.comparator)}function e0(){return new Nt(Te.comparator)}const oN={asc:"ASCENDING",desc:"DESCENDING"},lN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},uN={and:"AND",or:"OR"};class cN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Am(i,e){return i.useProto3Json||vh(e)?e:{value:e}}function Cm(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function yE(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function no(i){return Et(!!i,49232),Re.fromTimestamp(function(n){const s=os(n);return new _t(s.seconds,s.nanos)}(i))}function vE(i,e){return Rm(i,e).canonicalString()}function Rm(i,e){const n=function(o){return new ft(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?n:n.child(e)}function _E(i){const e=ft.fromString(i);return Et(wE(e),10190,{key:e.toString()}),e}function Qd(i,e){const n=_E(e);if(n.get(1)!==i.databaseId.projectId)throw new he(ee.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+i.databaseId.projectId);if(n.get(3)!==i.databaseId.database)throw new he(ee.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+i.databaseId.database);return new Te(EE(n))}function TE(i,e){return vE(i.databaseId,e)}function hN(i){const e=_E(i);return e.length===4?ft.emptyPath():EE(e)}function t0(i){return new ft(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function EE(i){return Et(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function fN(i,e){let n;if("targetChange"in e){e.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ne(39313,{state:y})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(y,T){return y.useProto3Json?(Et(T===void 0||typeof T=="string",58123),on.fromBase64String(T||"")):(Et(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),on.fromUint8Array(T||new Uint8Array))}(i,e.targetChange.resumeToken),f=e.targetChange.cause,m=f&&function(y){const T=y.code===void 0?ee.UNKNOWN:mE(y.code);return new he(T,y.message||"")}(f);n=new gE(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Qd(i,s.document.name),u=no(s.document.updateTime),f=s.document.createTime?no(s.document.createTime):Re.min(),m=new Ri({mapValue:{fields:s.document.fields}}),g=dn.newFoundDocument(o,u,f,m),y=s.targetIds||[],T=s.removedTargetIds||[];n=new jc(y,T,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Qd(i,s.document),u=s.readTime?no(s.readTime):Re.min(),f=dn.newNoDocument(o,u),m=s.removedTargetIds||[];n=new jc([],m,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Qd(i,s.document),u=s.removedTargetIds||[];n=new jc([],u,o,null)}else{if(!("filter"in e))return Ne(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new iN(o,u),m=s.targetId;n=new pE(m,f)}}return n}function dN(i,e){return{documents:[TE(i,e.path)]}}function mN(i,e){const n={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=TE(i,o);const u=function(y){if(y.length!==0)return bE(li.create(y,"and"))}(e.filters);u&&(n.structuredQuery.where=u);const f=function(y){if(y.length!==0)return y.map(T=>function(w){return{field:Wa(w.field),direction:yN(w.dir)}}(T))}(e.orderBy);f&&(n.structuredQuery.orderBy=f);const m=Am(i,e.limit);return m!==null&&(n.structuredQuery.limit=m),e.startAt&&(n.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ft:n,parent:o}}function pN(i){let e=hN(i.parent);const n=i.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Et(s===1,65062);const T=n.from[0];T.allDescendants?o=T.collectionId:e=e.child(T.collectionId)}let u=[];n.where&&(u=function(b){const w=SE(b);return w instanceof li&&JT(w)?w.getFilters():[w]}(n.where));let f=[];n.orderBy&&(f=function(b){return b.map(w=>function(U){return new Jc(Ja(U.field),function(X){switch(X){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(U.direction))}(w))}(n.orderBy));let m=null;n.limit&&(m=function(b){let w;return w=typeof b=="object"?b.value:b,vh(w)?null:w}(n.limit));let g=null;n.startAt&&(g=function(b){const w=!!b.before,k=b.values||[];return new Wc(k,w)}(n.startAt));let y=null;return n.endAt&&(y=function(b){const w=!b.before,k=b.values||[];return new Wc(k,w)}(n.endAt)),zR(e,o,f,u,m,"F",g,y)}function gN(i,e){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ne(28987,{purpose:o})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function SE(i){return i.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ja(n.unaryFilter.field);return kt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ja(n.unaryFilter.field);return kt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ja(n.unaryFilter.field);return kt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Ja(n.unaryFilter.field);return kt.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ne(61313);default:return Ne(60726)}}(i):i.fieldFilter!==void 0?function(n){return kt.create(Ja(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ne(58110);default:return Ne(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(n){return li.create(n.compositeFilter.filters.map(s=>SE(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ne(1026)}}(n.compositeFilter.op))}(i):Ne(30097,{filter:i})}function yN(i){return oN[i]}function vN(i){return lN[i]}function _N(i){return uN[i]}function Wa(i){return{fieldPath:i.canonicalString()}}function Ja(i){return mn.fromServerFormat(i.fieldPath)}function bE(i){return i instanceof kt?function(n){if(n.op==="=="){if(q_(n.value))return{unaryFilter:{field:Wa(n.field),op:"IS_NAN"}};if(B_(n.value))return{unaryFilter:{field:Wa(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(q_(n.value))return{unaryFilter:{field:Wa(n.field),op:"IS_NOT_NAN"}};if(B_(n.value))return{unaryFilter:{field:Wa(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wa(n.field),op:vN(n.op),value:n.value}}}(i):i instanceof li?function(n){const s=n.getFilters().map(o=>bE(o));return s.length===1?s[0]:{compositeFilter:{op:_N(n.op),filters:s}}}(i):Ne(54877,{filter:i})}function wE(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class Jr{constructor(e,n,s,o,u=Re.min(),f=Re.min(),m=on.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new Jr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class TN{constructor(e){this.yt=e}}function EN(i){const e=pN({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Sm(e,e.limit,"L"):e}/**
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
 */class SN{constructor(){this.Cn=new bN}addToCollectionParentIndex(e,n){return this.Cn.add(n),W.resolve()}getCollectionParents(e,n){return W.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return W.resolve()}deleteFieldIndex(e,n){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,n){return W.resolve()}getDocumentsMatchingTarget(e,n){return W.resolve(null)}getIndexType(e,n){return W.resolve(0)}getFieldIndexes(e,n){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,n){return W.resolve(as.min())}getMinOffsetFromCollectionGroup(e,n){return W.resolve(as.min())}updateCollectionGroup(e,n,s){return W.resolve()}updateIndexEntries(e,n){return W.resolve()}}class bN{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new Ht(ft.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Ht(ft.comparator)).toArray()}}/**
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
 */const n0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},AE=41943040;class Nn{static withCacheSize(e){return new Nn(e,Nn.DEFAULT_COLLECTION_PERCENTILE,Nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Nn.DEFAULT_COLLECTION_PERCENTILE=10,Nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nn.DEFAULT=new Nn(AE,Nn.DEFAULT_COLLECTION_PERCENTILE,Nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nn.DISABLED=new Nn(-1,0,0);/**
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
 */class fo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new fo(0)}static cr(){return new fo(-1)}}/**
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
 */const i0="LruGarbageCollector",wN=1048576;function r0([i,e],[n,s]){const o=je(i,n);return o===0?je(e,s):o}class AN{constructor(e){this.Ir=e,this.buffer=new Ht(r0),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();r0(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class CN{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){fe(i0,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Eo(n)?fe(i0,"Ignoring IndexedDB error during garbage collection: ",n):await gh(n)}await this.Vr(3e5)})}}class RN{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return W.resolve(yh.ce);const s=new AN(n);return this.mr.forEachTarget(e,o=>s.Ar(o.sequenceNumber)).next(()=>this.mr.pr(e,o=>s.Ar(o))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(fe("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(n0)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(fe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),n0):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,o,u,f,m,g,y;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(fe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),o=this.params.maximumSequenceNumbersToCollect):o=b,f=Date.now(),this.nthSequenceNumber(e,o))).next(b=>(s=b,m=Date.now(),this.removeTargets(e,s,n))).next(b=>(u=b,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(b=>(y=Date.now(),$a()<=ze.DEBUG&&fe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-T}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${b} documents in `+(y-g)+`ms
Total Duration: ${y-T}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:b})))}}function NN(i,e){return new RN(i,e)}/**
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
 */class IN{constructor(){this.changes=new ia(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?W.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class DN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class ON{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,n))).next(o=>(s!==null&&jl(s.mutation,o,Wr.empty(),_t.now()),o))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Xe()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Xe()){const o=Ys();return this.populateOverlays(e,o,n).next(()=>this.computeViews(e,n,o,s).next(u=>{let f=Pl();return u.forEach((m,g)=>{f=f.insert(m,g.overlayedDocument)}),f}))}getOverlayedDocuments(e,n){const s=Ys();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Xe()))}populateOverlays(e,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((f,m)=>{n.set(f,m)})})}computeViews(e,n,s,o){let u=cs();const f=zl(),m=function(){return zl()}();return n.forEach((g,y)=>{const T=s.get(y.key);o.has(y.key)&&(T===void 0||T.mutation instanceof bh)?u=u.insert(y.key,y):T!==void 0?(f.set(y.key,T.mutation.getFieldMask()),jl(T.mutation,y,T.mutation.getFieldMask(),_t.now())):f.set(y.key,Wr.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((y,T)=>f.set(y,T)),n.forEach((y,T)=>m.set(y,new DN(T,f.get(y)??null))),m))}recalculateAndSaveOverlays(e,n){const s=zl();let o=new Nt((f,m)=>f-m),u=Xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(f=>{for(const m of f)m.keys().forEach(g=>{const y=n.get(g);if(y===null)return;let T=s.get(g)||Wr.empty();T=m.applyToLocalView(y,T),s.set(g,T);const b=(o.get(m.batchId)||Xe()).add(g);o=o.insert(m.batchId,b)})}).next(()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),y=g.key,T=g.value,b=oE();T.forEach(w=>{if(!u.has(w)){const k=fE(n.get(w),s.get(w));k!==null&&b.set(w,k),u=u.add(w)}}),f.push(this.documentOverlayCache.saveOverlays(e,y,b))}return W.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,o){return function(f){return Te.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):iE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-u.size):W.resolve(Ys());let m=Fl,g=u;return f.next(y=>W.forEach(y,(T,b)=>(m<b.largestBatchId&&(m=b.largestBatchId),u.get(T)?W.resolve():this.remoteDocumentCache.getEntry(e,T).next(w=>{g=g.insert(T,w)}))).next(()=>this.populateOverlays(e,y,u)).next(()=>this.computeViews(e,g,y,Xe())).next(T=>({batchId:m,changes:FR(T)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Te(n)).next(s=>{let o=Pl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const u=n.collectionGroup;let f=Pl();return this.indexManager.getCollectionParents(e,u).next(m=>W.forEach(m,g=>{const y=function(b,w){return new tu(w,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(n,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next(T=>{T.forEach((b,w)=>{f=f.insert(b,w)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(e,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,u,o))).next(f=>{u.forEach((g,y)=>{const T=y.getKey();f.get(T)===null&&(f=f.insert(T,dn.newInvalidDocument(T)))});let m=Pl();return f.forEach((g,y)=>{const T=u.get(g);T!==void 0&&jl(T.mutation,y,Wr.empty(),_t.now()),Eh(n,y)&&(m=m.insert(g,y))}),m})}}/**
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
 */class MN{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return W.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:no(o.createTime)}}(n)),W.resolve()}getNamedQuery(e,n){return W.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(o){return{name:o.name,query:EN(o.bundledQuery),readTime:no(o.readTime)}}(n)),W.resolve()}}/**
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
 */class PN{constructor(){this.overlays=new Nt(Te.comparator),this.qr=new Map}getOverlay(e,n){return W.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ys();return W.forEach(n,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((o,u)=>{this.St(e,n,u)}),W.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.qr.delete(s)),W.resolve()}getOverlaysForCollection(e,n,s){const o=Ys(),u=n.length+1,f=new Te(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const g=m.getNext().value,y=g.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return W.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let u=new Nt((y,T)=>y-T);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let T=u.get(y.largestBatchId);T===null&&(T=Ys(),u=u.insert(y.largestBatchId,T)),T.set(y.getKey(),y)}}const m=Ys(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((y,T)=>m.set(y,T)),!(m.size()>=o)););return W.resolve(m)}St(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new nN(n,s));let u=this.qr.get(n);u===void 0&&(u=Xe(),this.qr.set(n,u)),this.qr.set(n,u.add(s.key))}}/**
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
 */class VN{constructor(){this.sessionToken=on.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,W.resolve()}}/**
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
 */class rp{constructor(){this.Qr=new Ht(Zt.$r),this.Ur=new Ht(Zt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new Zt(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Gr(new Zt(e,n))}zr(e,n){e.forEach(s=>this.removeReference(s,n))}jr(e){const n=new Te(new ft([])),s=new Zt(n,e),o=new Zt(n,e+1),u=[];return this.Ur.forEachInRange([s,o],f=>{this.Gr(f),u.push(f.key)}),u}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new Te(new ft([])),s=new Zt(n,e),o=new Zt(n,e+1);let u=Xe();return this.Ur.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(e){const n=new Zt(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Zt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return Te.comparator(e.key,n.key)||je(e.Yr,n.Yr)}static Kr(e,n){return je(e.Yr,n.Yr)||Te.comparator(e.key,n.key)}}/**
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
 */class kN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ht(Zt.$r)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new tN(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Zr=this.Zr.add(new Zt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return W.resolve(f)}lookupMutationBatch(e,n){return W.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.ei(s),u=o<0?0:o;return W.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?TR:this.tr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Zt(n,0),o=new Zt(n,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],f=>{const m=this.Xr(f.Yr);u.push(m)}),W.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ht(je);return n.forEach(o=>{const u=new Zt(o,0),f=new Zt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,f],m=>{s=s.add(m.Yr)})}),W.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let u=s;Te.isDocumentKey(u)||(u=u.child(""));const f=new Zt(new Te(u),0);let m=new Ht(je);return this.Zr.forEachWhile(g=>{const y=g.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(g.Yr)),!0)},f),W.resolve(this.ti(m))}ti(e){const n=[];return e.forEach(s=>{const o=this.Xr(s);o!==null&&n.push(o)}),n}removeMutationBatch(e,n){Et(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return W.forEach(n.mutations,o=>{const u=new Zt(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Zr=s})}ir(e){}containsKey(e,n){const s=new Zt(n,0),o=this.Zr.firstAfterOrEqual(s);return W.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class xN{constructor(e){this.ri=e,this.docs=function(){return new Nt(Te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return W.resolve(s?s.document.mutableCopy():dn.newInvalidDocument(n))}getEntries(e,n){let s=cs();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():dn.newInvalidDocument(o))}),W.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let u=cs();const f=n.path,m=new Te(f.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:y,value:{document:T}}=g.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||gR(pR(T),s)<=0||(o.has(T.key)||Eh(n,T))&&(u=u.insert(T.key,T.mutableCopy()))}return W.resolve(u)}getAllFromCollectionGroup(e,n,s,o){Ne(9500)}ii(e,n){return W.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new LN(this)}getSize(e){return W.resolve(this.size)}}class LN extends IN{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)}),W.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class UN{constructor(e){this.persistence=e,this.si=new ia(n=>Zm(n),Wm),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.oi=0,this._i=new rp,this.targetCount=0,this.ai=fo.ur()}forEachTarget(e,n){return this.si.forEach((s,o)=>n(o)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),W.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new fo(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,W.resolve()}updateTargetData(e,n){return this.Pr(n),W.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,n,s){let o=0;const u=[];return this.si.forEach((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.si.delete(f),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),W.waitFor(u).next(()=>o)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return W.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),W.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(e,f))}),W.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),W.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return W.resolve(s)}containsKey(e,n){return W.resolve(this._i.containsKey(n))}}/**
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
 */class CE{constructor(e,n){this.ui={},this.overlays={},this.ci=new yh(0),this.li=!1,this.li=!0,this.hi=new VN,this.referenceDelegate=e(this),this.Pi=new UN(this),this.indexManager=new SN,this.remoteDocumentCache=function(o){return new xN(o)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new TN(n),this.Ii=new MN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new PN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new kN(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){fe("MemoryPersistence","Starting transaction:",e);const o=new zN(this.ci.next());return this.referenceDelegate.Ei(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ai(e,n){return W.or(Object.values(this.ui).map(s=>()=>s.containsKey(e,n)))}}class zN extends vR{constructor(e){super(),this.currentSequenceNumber=e}}class sp{constructor(e){this.persistence=e,this.Ri=new rp,this.Vi=null}static mi(e){return new sp(e)}get fi(){if(this.Vi)return this.Vi;throw Ne(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),W.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),W.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),W.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(o=>this.fi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(o=>{o.forEach(u=>this.fi.add(u.toString()))}).next(()=>s.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.fi,s=>{const o=Te.fromPath(s);return this.gi(e,o).next(u=>{u||n.removeEntry(o,Re.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return W.or([()=>W.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class nh{constructor(e,n){this.persistence=e,this.pi=new ia(s=>SR(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=NN(this,n)}static mi(e,n){return new nh(e,n)}Ei(){}di(e){return W.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(o=>s+o))}wr(e){let n=0;return this.pr(e,s=>{n++}).next(()=>n)}pr(e,n){return W.forEach(this.pi,(s,o)=>this.br(e,s,o).next(u=>u?W.resolve():n(o)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,f=>this.br(e,f,n).next(m=>{m||(s++,u.removeEntry(f,Re.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),W.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),W.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),W.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Uc(e.data.value)),n}br(e,n,s){return W.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.pi.get(n);return W.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ap{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=o}static As(e,n){let s=Xe(),o=Xe();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new ap(e,n.fromCache,s,o)}}/**
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
 */class jN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class BN{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return B1()?8:_R(pn())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,o){const u={result:null};return this.ys(e,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.ws(e,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new jN;return this.Ss(e,n,f).next(m=>{if(u.result=m,this.Vs)return this.bs(e,n,f,m.size)})}).next(()=>u.result)}bs(e,n,s,o){return s.documentReadCount<this.fs?($a()<=ze.DEBUG&&fe("QueryEngine","SDK will not create cache indexes for query:",Za(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),W.resolve()):($a()<=ze.DEBUG&&fe("QueryEngine","Query:",Za(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?($a()<=ze.DEBUG&&fe("QueryEngine","The SDK decides to create cache indexes for query:",Za(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ni(n))):W.resolve())}ys(e,n){if(G_(n))return W.resolve(null);let s=Ni(n);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=Sm(n,null,"F"),s=Ni(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const f=Xe(...u);return this.ps.getDocuments(e,f).next(m=>this.indexManager.getMinOffset(e,s).next(g=>{const y=this.Ds(n,m);return this.Cs(n,y,f,g.readTime)?this.ys(e,Sm(n,null,"F")):this.vs(e,y,n,g)}))})))}ws(e,n,s,o){return G_(n)||o.isEqual(Re.min())?W.resolve(null):this.ps.getDocuments(e,s).next(u=>{const f=this.Ds(n,u);return this.Cs(n,f,s,o)?W.resolve(null):($a()<=ze.DEBUG&&fe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Za(n)),this.vs(e,f,n,mR(o,Fl)).next(m=>m))})}Ds(e,n){let s=new Ht(sE(e));return n.forEach((o,u)=>{Eh(e,u)&&(s=s.add(u))}),s}Cs(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,n,s){return $a()<=ze.DEBUG&&fe("QueryEngine","Using full collection scan to execute query:",Za(n)),this.ps.getDocumentsMatchingQuery(e,n,as.min(),s)}vs(e,n,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
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
 */const op="LocalStore",qN=3e8;class HN{constructor(e,n,s,o){this.persistence=e,this.Fs=n,this.serializer=o,this.Ms=new Nt(je),this.xs=new ia(u=>Zm(u),Wm),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ON(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function FN(i,e,n,s){return new HN(i,e,n,s)}async function RE(i,e){const n=Ye(i);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.Bs(e),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],m=[];let g=Xe();for(const y of o){f.push(y.batchId);for(const T of y.mutations)g=g.add(T.key)}for(const y of u){m.push(y.batchId);for(const T of y.mutations)g=g.add(T.key)}return n.localDocuments.getDocuments(s,g).next(y=>({Ls:y,removedBatchIds:f,addedBatchIds:m}))})})}function NE(i){const e=Ye(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function YN(i,e){const n=Ye(i),s=e.snapshotVersion;let o=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=n.Ns.newChangeBuffer({trackRemovals:!0});o=n.Ms;const m=[];e.targetChanges.forEach((T,b)=>{const w=o.get(b);if(!w)return;m.push(n.Pi.removeMatchingKeys(u,T.removedDocuments,b).next(()=>n.Pi.addMatchingKeys(u,T.addedDocuments,b)));let k=w.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(b)!==null?k=k.withResumeToken(on.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):T.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(T.resumeToken,s)),o=o.insert(b,k),function(Y,X,ce){return Y.resumeToken.approximateByteSize()===0||X.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=qN?!0:ce.addedDocuments.size+ce.modifiedDocuments.size+ce.removedDocuments.size>0}(w,k,T)&&m.push(n.Pi.updateTargetData(u,k))});let g=cs(),y=Xe();if(e.documentUpdates.forEach(T=>{e.resolvedLimboDocuments.has(T)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,T))}),m.push(GN(u,f,e.documentUpdates).next(T=>{g=T.ks,y=T.qs})),!s.isEqual(Re.min())){const T=n.Pi.getLastRemoteSnapshotVersion(u).next(b=>n.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(T)}return W.waitFor(m).next(()=>f.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,g,y)).next(()=>g)}).then(u=>(n.Ms=o,u))}function GN(i,e,n){let s=Xe(),o=Xe();return n.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let f=cs();return n.forEach((m,g)=>{const y=u.get(m);g.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(Re.min())?(e.removeEntry(m,g.readTime),f=f.insert(m,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(g),f=f.insert(m,g)):fe(op,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",g.version)}),{ks:f,qs:o}})}function XN(i,e){const n=Ye(i);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.Pi.getTargetData(s,e).next(u=>u?(o=u,W.resolve(o)):n.Pi.allocateTargetId(s).next(f=>(o=new Jr(e,f,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s})}async function Nm(i,e,n){const s=Ye(i),o=s.Ms.get(e),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!Eo(f))throw f;fe(op,`Failed to update sequence numbers for target ${e}: ${f}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function s0(i,e,n){const s=Ye(i);let o=Re.min(),u=Xe();return s.persistence.runTransaction("Execute query","readwrite",f=>function(g,y,T){const b=Ye(g),w=b.xs.get(T);return w!==void 0?W.resolve(b.Ms.get(w)):b.Pi.getTargetData(y,T)}(s,f,Ni(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(f,m.targetId).next(g=>{u=g})}).next(()=>s.Fs.getDocumentsMatchingQuery(f,e,n?o:Re.min(),n?u:Xe())).next(m=>(KN(s,BR(e),m),{documents:m,Qs:u})))}function KN(i,e,n){let s=i.Os.get(e)||Re.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.Os.set(e,s)}class a0{constructor(){this.activeTargetIds=XR()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class QN{constructor(){this.Mo=new a0,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new a0,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class $N{Oo(e){}shutdown(){}}/**
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
 */const o0="ConnectivityMonitor";class l0{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){fe(o0,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){fe(o0,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let kc=null;function Im(){return kc===null?kc=function(){return 268435456+Math.round(2147483648*Math.random())}():kc++,"0x"+kc.toString(16)}/**
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
 */const $d="RestConnection",ZN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class WN{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===$c?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,n,s,o,u){const f=Im(),m=this.zo(e,n.toUriEncodedString());fe($d,`Sending RPC '${e}' ${f}:`,m,s);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,o,u);const{host:y}=new URL(m),T=yo(y);return this.Jo(e,m,g,s,T).then(b=>(fe($d,`Received RPC '${e}' ${f}: `,b),b),b=>{throw lo($d,`RPC '${e}' ${f} failed with error: `,b,"url: ",m,"request:",s),b})}Ho(e,n,s,o,u,f){return this.Go(e,n,s,o,u)}jo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+To}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}zo(e,n){const s=ZN[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
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
 */class JN{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const hn="WebChannelConnection";class e2 extends WN{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,o,u){const f=Im();return new Promise((m,g)=>{const y=new PT;y.setWithCredentials(!0),y.listenOnce(VT.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case Lc.NO_ERROR:const b=y.getResponseJson();fe(hn,`XHR for RPC '${e}' ${f} received:`,JSON.stringify(b)),m(b);break;case Lc.TIMEOUT:fe(hn,`RPC '${e}' ${f} timed out`),g(new he(ee.DEADLINE_EXCEEDED,"Request time out"));break;case Lc.HTTP_ERROR:const w=y.getStatus();if(fe(hn,`RPC '${e}' ${f} failed with status:`,w,"response text:",y.getResponseText()),w>0){let k=y.getResponseJson();Array.isArray(k)&&(k=k[0]);const U=k==null?void 0:k.error;if(U&&U.status&&U.message){const Y=function(ce){const ie=ce.toLowerCase().replace(/_/g,"-");return Object.values(ee).indexOf(ie)>=0?ie:ee.UNKNOWN}(U.status);g(new he(Y,U.message))}else g(new he(ee.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new he(ee.UNAVAILABLE,"Connection failed."));break;default:Ne(9055,{l_:e,streamId:f,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{fe(hn,`RPC '${e}' ${f} completed.`)}});const T=JSON.stringify(o);fe(hn,`RPC '${e}' ${f} sending request:`,o),y.send(n,"POST",T,s,15)})}T_(e,n,s){const o=Im(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=LT(),m=xT(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,n,s),g.encodeInitMessageHeaders=!0;const T=u.join("");fe(hn,`Creating RPC '${e}' stream ${o}: ${T}`,g);const b=f.createWebChannel(T,g);this.I_(b);let w=!1,k=!1;const U=new JN({Yo:X=>{k?fe(hn,`Not sending because RPC '${e}' stream ${o} is closed:`,X):(w||(fe(hn,`Opening RPC '${e}' stream ${o} transport.`),b.open(),w=!0),fe(hn,`RPC '${e}' stream ${o} sending:`,X),b.send(X))},Zo:()=>b.close()}),Y=(X,ce,ie)=>{X.listen(ce,te=>{try{ie(te)}catch(_e){setTimeout(()=>{throw _e},0)}})};return Y(b,Ml.EventType.OPEN,()=>{k||(fe(hn,`RPC '${e}' stream ${o} transport opened.`),U.o_())}),Y(b,Ml.EventType.CLOSE,()=>{k||(k=!0,fe(hn,`RPC '${e}' stream ${o} transport closed`),U.a_(),this.E_(b))}),Y(b,Ml.EventType.ERROR,X=>{k||(k=!0,lo(hn,`RPC '${e}' stream ${o} transport errored. Name:`,X.name,"Message:",X.message),U.a_(new he(ee.UNAVAILABLE,"The operation could not be completed")))}),Y(b,Ml.EventType.MESSAGE,X=>{var ce;if(!k){const ie=X.data[0];Et(!!ie,16349);const te=ie,_e=(te==null?void 0:te.error)||((ce=te[0])==null?void 0:ce.error);if(_e){fe(hn,`RPC '${e}' stream ${o} received error:`,_e);const le=_e.status;let Se=function(I){const O=Vt[I];if(O!==void 0)return mE(O)}(le),M=_e.message;Se===void 0&&(Se=ee.INTERNAL,M="Unknown error status: "+le+" with message "+_e.message),k=!0,U.a_(new he(Se,M)),b.close()}else fe(hn,`RPC '${e}' stream ${o} received:`,ie),U.u_(ie)}}),Y(m,kT.STAT_EVENT,X=>{X.stat===pm.PROXY?fe(hn,`RPC '${e}' stream ${o} detected buffering proxy`):X.stat===pm.NOPROXY&&fe(hn,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{U.__()},0),U}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Zd(){return typeof document<"u"?document:null}/**
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
 */function Ah(i){return new cN(i,!0)}/**
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
 */class IE{constructor(e,n,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&fe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const u0="PersistentStream";class t2{constructor(e,n,s,o,u,f,m,g){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new IE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===ee.RESOURCE_EXHAUSTED?(mr(n.toString()),mr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===ee.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.D_===n&&this.G_(s,o)},s=>{e(()=>{const o=new he(ee.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)})})}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(o=>{s(()=>this.z_(o))}),this.stream.onMessage(o=>{s(()=>++this.F_==1?this.J_(o):this.onNext(o))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return fe(u0,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(fe(u0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class n2 extends t2{constructor(e,n,s,o,u,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=fN(this.serializer,e),s=function(u){if(!("targetChange"in u))return Re.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?Re.min():f.readTime?no(f.readTime):Re.min()}(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=t0(this.serializer),n.addTarget=function(u,f){let m;const g=f.target;if(m=Tm(g)?{documents:dN(u,g)}:{query:mN(u,g).ft},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=yE(u,f.resumeToken);const y=Am(u,f.expectedCount);y!==null&&(m.expectedCount=y)}else if(f.snapshotVersion.compareTo(Re.min())>0){m.readTime=Cm(u,f.snapshotVersion.toTimestamp());const y=Am(u,f.expectedCount);y!==null&&(m.expectedCount=y)}return m}(this.serializer,e);const s=gN(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=t0(this.serializer),n.removeTarget=e,this.q_(n)}}/**
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
 */class i2{}class r2 extends i2{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new he(ee.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.Go(e,Rm(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new he(ee.UNKNOWN,u.toString())})}Ho(e,n,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Ho(e,Rm(n,s),o,f,m,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new he(ee.UNKNOWN,f.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class s2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(mr(n),this.aa=!1):fe("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const mo="RemoteStore";class a2{constructor(e,n,s,o,u){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo(f=>{s.enqueueAndForget(async()=>{ru(this)&&(fe(mo,"Restarting streams for network reachability change."),await async function(g){const y=Ye(g);y.Ea.add(4),await iu(y),y.Ra.set("Unknown"),y.Ea.delete(4),await Ch(y)}(this))})}),this.Ra=new s2(s,o)}}async function Ch(i){if(ru(i))for(const e of i.da)await e(!0)}async function iu(i){for(const e of i.da)await e(!1)}function DE(i,e){const n=Ye(i);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),hp(n)?cp(n):bo(n).O_()&&up(n,e))}function lp(i,e){const n=Ye(i),s=bo(n);n.Ia.delete(e),s.O_()&&OE(n,e),n.Ia.size===0&&(s.O_()?s.L_():ru(n)&&n.Ra.set("Unknown"))}function up(i,e){if(i.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const n=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}bo(i).Y_(e)}function OE(i,e){i.Va.Ue(e),bo(i).Z_(e)}function cp(i){i.Va=new aN({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),bo(i).start(),i.Ra.ua()}function hp(i){return ru(i)&&!bo(i).x_()&&i.Ia.size>0}function ru(i){return Ye(i).Ea.size===0}function ME(i){i.Va=void 0}async function o2(i){i.Ra.set("Online")}async function l2(i){i.Ia.forEach((e,n)=>{up(i,e)})}async function u2(i,e){ME(i),hp(i)?(i.Ra.ha(e),cp(i)):i.Ra.set("Unknown")}async function c2(i,e,n){if(i.Ra.set("Online"),e instanceof gE&&e.state===2&&e.cause)try{await async function(o,u){const f=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.Ia.delete(m),o.Va.removeTarget(m))}(i,e)}catch(s){fe(mo,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await c0(i,s)}else if(e instanceof jc?i.Va.Ze(e):e instanceof pE?i.Va.st(e):i.Va.tt(e),!n.isEqual(Re.min()))try{const s=await NE(i.localStore);n.compareTo(s)>=0&&await function(u,f){const m=u.Va.Tt(f);return m.targetChanges.forEach((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const T=u.Ia.get(y);T&&u.Ia.set(y,T.withResumeToken(g.resumeToken,f))}}),m.targetMismatches.forEach((g,y)=>{const T=u.Ia.get(g);if(!T)return;u.Ia.set(g,T.withResumeToken(on.EMPTY_BYTE_STRING,T.snapshotVersion)),OE(u,g);const b=new Jr(T.target,g,y,T.sequenceNumber);up(u,b)}),u.remoteSyncer.applyRemoteEvent(m)}(i,n)}catch(s){fe(mo,"Failed to raise snapshot:",s),await c0(i,s)}}async function c0(i,e,n){if(!Eo(e))throw e;i.Ea.add(1),await iu(i),i.Ra.set("Offline"),n||(n=()=>NE(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{fe(mo,"Retrying IndexedDB access"),await n(),i.Ea.delete(1),await Ch(i)})}async function h0(i,e){const n=Ye(i);n.asyncQueue.verifyOperationInProgress(),fe(mo,"RemoteStore received new credentials");const s=ru(n);n.Ea.add(3),await iu(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Ch(n)}async function h2(i,e){const n=Ye(i);e?(n.Ea.delete(2),await Ch(n)):e||(n.Ea.add(2),await iu(n),n.Ra.set("Unknown"))}function bo(i){return i.ma||(i.ma=function(n,s,o){const u=Ye(n);return u.sa(),new n2(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Xo:o2.bind(null,i),t_:l2.bind(null,i),r_:u2.bind(null,i),H_:c2.bind(null,i)}),i.da.push(async e=>{e?(i.ma.B_(),hp(i)?cp(i):i.Ra.set("Unknown")):(await i.ma.stop(),ME(i))})),i.ma}/**
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
 */class fp{constructor(e,n,s,o,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new is,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,u){const f=Date.now()+s,m=new fp(e,n,f,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(ee.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function PE(i,e){if(mr("AsyncQueue",`${e}: ${i}`),Eo(i))return new he(ee.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class io{static emptySet(e){return new io(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||Te.comparator(n.key,s.key):(n,s)=>Te.comparator(n.key,s.key),this.keyedMap=Pl(),this.sortedSet=new Nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof io)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new io;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class f0{constructor(){this.ga=new Nt(Te.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Ne(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,s)=>{e.push(s)}),e}}class po{constructor(e,n,s,o,u,f,m,g,y){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(e,n,s,o,u){const f=[];return n.forEach(m=>{f.push({type:0,doc:m})}),new po(e,n,io.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Th(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class f2{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class d2{constructor(){this.queries=d0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=Ye(n),u=o.queries;o.queries=d0(),u.forEach((f,m)=>{for(const g of m.Sa)g.onError(s)})})(this,new he(ee.ABORTED,"Firestore shutting down"))}}function d0(){return new ia(i=>rE(i),Th)}async function VE(i,e){const n=Ye(i);let s=3;const o=e.query;let u=n.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new f2,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await n.onListen(o,!0);break;case 1:u.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=PE(f,`Initialization of query '${Za(e.query)}' failed`);return void e.onError(m)}n.queries.set(o,u),u.Sa.push(e),e.va(n.onlineState),u.wa&&e.Fa(u.wa)&&dp(n)}async function kE(i,e){const n=Ye(i),s=e.query;let o=3;const u=n.queries.get(s);if(u){const f=u.Sa.indexOf(e);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function m2(i,e){const n=Ye(i);let s=!1;for(const o of e){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.Sa)m.Fa(o)&&(s=!0);f.wa=o}}s&&dp(n)}function p2(i,e,n){const s=Ye(i),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(n);s.queries.delete(e)}function dp(i){i.Ca.forEach(e=>{e.next()})}var Dm,m0;(m0=Dm||(Dm={})).Ma="default",m0.Cache="cache";class xE{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new po(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=po.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Dm.Cache}}/**
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
 */class LE{constructor(e){this.key=e}}class UE{constructor(e){this.key=e}}class g2{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Xe(),this.mutatedKeys=Xe(),this.eu=sE(e),this.tu=new io(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new f0,o=n?n.tu:this.tu;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((T,b)=>{const w=o.get(T),k=Eh(this.query,b)?b:null,U=!!w&&this.mutatedKeys.has(w.key),Y=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let X=!1;w&&k?w.data.isEqual(k.data)?U!==Y&&(s.track({type:3,doc:k}),X=!0):this.su(w,k)||(s.track({type:2,doc:k}),X=!0,(g&&this.eu(k,g)>0||y&&this.eu(k,y)<0)&&(m=!0)):!w&&k?(s.track({type:0,doc:k}),X=!0):w&&!k&&(s.track({type:1,doc:w}),X=!0,(g||y)&&(m=!0)),X&&(k?(f=f.add(k),u=Y?u.add(T):u.delete(T)):(f=f.delete(T),u=u.delete(T)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const T=this.query.limitType==="F"?f.last():f.first();f=f.delete(T.key),u=u.delete(T.key),s.track({type:1,doc:T})}return{tu:f,iu:s,Cs:m,mutatedKeys:u}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const f=e.iu.ya();f.sort((T,b)=>function(k,U){const Y=X=>{switch(X){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ne(20277,{Rt:X})}};return Y(k)-Y(U)}(T.type,b.type)||this.eu(T.doc,b.doc)),this.ou(s),o=o??!1;const m=n&&!o?this._u():[],g=this.Xa.size===0&&this.current&&!o?1:0,y=g!==this.Za;return this.Za=g,f.length!==0||y?{snapshot:new po(this.query,e.tu,u,f,e.mutatedKeys,g===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new f0,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Xe(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const n=[];return e.forEach(s=>{this.Xa.has(s)||n.push(new UE(s))}),this.Xa.forEach(s=>{e.has(s)||n.push(new LE(s))}),n}cu(e){this.Ya=e.Qs,this.Xa=Xe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return po.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const mp="SyncEngine";class y2{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class v2{constructor(e){this.key=e,this.hu=!1}}class _2{constructor(e,n,s,o,u,f){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new ia(m=>rE(m),Th),this.Iu=new Map,this.Eu=new Set,this.du=new Nt(Te.comparator),this.Au=new Map,this.Ru=new rp,this.Vu={},this.mu=new Map,this.fu=fo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function T2(i,e,n=!0){const s=HE(i);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await zE(s,e,n,!0),o}async function E2(i,e){const n=HE(i);await zE(n,e,!0,!1)}async function zE(i,e,n,s){const o=await XN(i.localStore,Ni(e)),u=o.targetId,f=i.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await S2(i,e,u,f==="current",o.resumeToken)),i.isPrimaryClient&&n&&DE(i.remoteStore,o),m}async function S2(i,e,n,s,o){i.pu=(b,w,k)=>async function(Y,X,ce,ie){let te=X.view.ru(ce);te.Cs&&(te=await s0(Y.localStore,X.query,!1).then(({documents:M})=>X.view.ru(M,te)));const _e=ie&&ie.targetChanges.get(X.targetId),le=ie&&ie.targetMismatches.get(X.targetId)!=null,Se=X.view.applyChanges(te,Y.isPrimaryClient,_e,le);return g0(Y,X.targetId,Se.au),Se.snapshot}(i,b,w,k);const u=await s0(i.localStore,e,!0),f=new g2(e,u.Qs),m=f.ru(u.documents),g=nu.createSynthesizedTargetChangeForCurrentChange(n,s&&i.onlineState!=="Offline",o),y=f.applyChanges(m,i.isPrimaryClient,g);g0(i,n,y.au);const T=new y2(e,n,f);return i.Tu.set(e,T),i.Iu.has(n)?i.Iu.get(n).push(e):i.Iu.set(n,[e]),y.snapshot}async function b2(i,e,n){const s=Ye(i),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter(f=>!Th(f,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Nm(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&lp(s.remoteStore,o.targetId),Om(s,o.targetId)}).catch(gh)):(Om(s,o.targetId),await Nm(s.localStore,o.targetId,!0))}async function w2(i,e){const n=Ye(i),s=n.Tu.get(e),o=n.Iu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),lp(n.remoteStore,s.targetId))}async function jE(i,e){const n=Ye(i);try{const s=await YN(n.localStore,e);e.targetChanges.forEach((o,u)=>{const f=n.Au.get(u);f&&(Et(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?Et(f.hu,14607):o.removedDocuments.size>0&&(Et(f.hu,42227),f.hu=!1))}),await qE(n,s,e)}catch(s){await gh(s)}}function p0(i,e,n){const s=Ye(i);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Tu.forEach((u,f)=>{const m=f.view.va(e);m.snapshot&&o.push(m.snapshot)}),function(f,m){const g=Ye(f);g.onlineState=m;let y=!1;g.queries.forEach((T,b)=>{for(const w of b.Sa)w.va(m)&&(y=!0)}),y&&dp(g)}(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function A2(i,e,n){const s=Ye(i);s.sharedClientState.updateQueryState(e,"rejected",n);const o=s.Au.get(e),u=o&&o.key;if(u){let f=new Nt(Te.comparator);f=f.insert(u,dn.newNoDocument(u,Re.min()));const m=Xe().add(u),g=new wh(Re.min(),new Map,new Nt(je),f,m);await jE(s,g),s.du=s.du.remove(u),s.Au.delete(e),pp(s)}else await Nm(s.localStore,e,!1).then(()=>Om(s,e,n)).catch(gh)}function Om(i,e,n=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Iu.get(e))i.Tu.delete(s),n&&i.Pu.yu(s,n);i.Iu.delete(e),i.isPrimaryClient&&i.Ru.jr(e).forEach(s=>{i.Ru.containsKey(s)||BE(i,s)})}function BE(i,e){i.Eu.delete(e.path.canonicalString());const n=i.du.get(e);n!==null&&(lp(i.remoteStore,n),i.du=i.du.remove(e),i.Au.delete(n),pp(i))}function g0(i,e,n){for(const s of n)s instanceof LE?(i.Ru.addReference(s.key,e),C2(i,s)):s instanceof UE?(fe(mp,"Document no longer in limbo: "+s.key),i.Ru.removeReference(s.key,e),i.Ru.containsKey(s.key)||BE(i,s.key)):Ne(19791,{wu:s})}function C2(i,e){const n=e.key,s=n.path.canonicalString();i.du.get(n)||i.Eu.has(s)||(fe(mp,"New document in limbo: "+n),i.Eu.add(s),pp(i))}function pp(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const n=new Te(ft.fromString(e)),s=i.fu.next();i.Au.set(s,new v2(n)),i.du=i.du.insert(n,s),DE(i.remoteStore,new Jr(Ni(Jm(n.path)),s,"TargetPurposeLimboResolution",yh.ce))}}async function qE(i,e,n){const s=Ye(i),o=[],u=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach((m,g)=>{f.push(s.pu(g,e,n).then(y=>{var T;if((y||n)&&s.isPrimaryClient){const b=y?!y.fromCache:(T=n==null?void 0:n.targetChanges.get(g.targetId))==null?void 0:T.current;s.sharedClientState.updateQueryState(g.targetId,b?"current":"not-current")}if(y){o.push(y);const b=ap.As(g.targetId,y);u.push(b)}}))}),await Promise.all(f),s.Pu.H_(o),await async function(g,y){const T=Ye(g);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>W.forEach(y,w=>W.forEach(w.Es,k=>T.persistence.referenceDelegate.addReference(b,w.targetId,k)).next(()=>W.forEach(w.ds,k=>T.persistence.referenceDelegate.removeReference(b,w.targetId,k)))))}catch(b){if(!Eo(b))throw b;fe(op,"Failed to update sequence numbers: "+b)}for(const b of y){const w=b.targetId;if(!b.fromCache){const k=T.Ms.get(w),U=k.snapshotVersion,Y=k.withLastLimboFreeSnapshotVersion(U);T.Ms=T.Ms.insert(w,Y)}}}(s.localStore,u))}async function R2(i,e){const n=Ye(i);if(!n.currentUser.isEqual(e)){fe(mp,"User change. New user:",e.toKey());const s=await RE(n.localStore,e);n.currentUser=e,function(u,f){u.mu.forEach(m=>{m.forEach(g=>{g.reject(new he(ee.CANCELLED,f))})}),u.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await qE(n,s.Ls)}}function N2(i,e){const n=Ye(i),s=n.Au.get(e);if(s&&s.hu)return Xe().add(s.key);{let o=Xe();const u=n.Iu.get(e);if(!u)return o;for(const f of u){const m=n.Tu.get(f);o=o.unionWith(m.view.nu)}return o}}function HE(i){const e=Ye(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=jE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=N2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=A2.bind(null,e),e.Pu.H_=m2.bind(null,e.eventManager),e.Pu.yu=p2.bind(null,e.eventManager),e}class ih{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ah(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return FN(this.persistence,new BN,e.initialUser,this.serializer)}Cu(e){return new CE(sp.mi,this.serializer)}Du(e){return new QN}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ih.provider={build:()=>new ih};class I2 extends ih{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Et(this.persistence.referenceDelegate instanceof nh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new CN(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Nn.withCacheSize(this.cacheSizeBytes):Nn.DEFAULT;return new CE(s=>nh.mi(s,n),this.serializer)}}class Mm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>p0(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=R2.bind(null,this.syncEngine),await h2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new d2}()}createDatastore(e){const n=Ah(e.databaseInfo.databaseId),s=function(u){return new e2(u)}(e.databaseInfo);return function(u,f,m,g){return new r2(u,f,m,g)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,o,u,f,m){return new a2(s,o,u,f,m)}(this.localStore,this.datastore,e.asyncQueue,n=>p0(this.syncEngine,n,0),function(){return l0.v()?new l0:new $N}())}createSyncEngine(e,n){return function(o,u,f,m,g,y,T){const b=new _2(o,u,f,m,g,y);return T&&(b.gu=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(o){const u=Ye(o);fe(mo,"RemoteStore shutting down."),u.Ea.add(5),await iu(u),u.Aa.shutdown(),u.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Mm.provider={build:()=>new Mm};/**
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
 */class FE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):mr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const hs="FirestoreClient";class D2{constructor(e,n,s,o,u){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=fn.UNAUTHENTICATED,this.clientId=Km.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{fe(hs,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(fe(hs,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new is;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=PE(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Wd(i,e){i.asyncQueue.verifyOperationInProgress(),fe(hs,"Initializing OfflineComponentProvider");const n=i.configuration;await e.initialize(n);let s=n.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await RE(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function y0(i,e){i.asyncQueue.verifyOperationInProgress();const n=await O2(i);fe(hs,"Initializing OnlineComponentProvider"),await e.initialize(n,i.configuration),i.setCredentialChangeListener(s=>h0(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>h0(e.remoteStore,o)),i._onlineComponents=e}async function O2(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){fe(hs,"Using user provided OfflineComponentProvider");try{await Wd(i,i._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(o){return o.name==="FirebaseError"?o.code===ee.FAILED_PRECONDITION||o.code===ee.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;lo("Error using user provided cache. Falling back to memory cache: "+n),await Wd(i,new ih)}}else fe(hs,"Using default OfflineComponentProvider"),await Wd(i,new I2(void 0));return i._offlineComponents}async function M2(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(fe(hs,"Using user provided OnlineComponentProvider"),await y0(i,i._uninitializedComponentsProvider._online)):(fe(hs,"Using default OnlineComponentProvider"),await y0(i,new Mm))),i._onlineComponents}async function YE(i){const e=await M2(i),n=e.eventManager;return n.onListen=T2.bind(null,e.syncEngine),n.onUnlisten=b2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=E2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=w2.bind(null,e.syncEngine),n}function P2(i,e,n={}){const s=new is;return i.asyncQueue.enqueueAndForget(async()=>function(u,f,m,g,y){const T=new FE({next:w=>{T.Nu(),f.enqueueAndForget(()=>kE(u,b));const k=w.docs.has(m);!k&&w.fromCache?y.reject(new he(ee.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&w.fromCache&&g&&g.source==="server"?y.reject(new he(ee.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(w)},error:w=>y.reject(w)}),b=new xE(Jm(m.path),T,{includeMetadataChanges:!0,qa:!0});return VE(u,b)}(await YE(i),i.asyncQueue,e,n,s)),s.promise}function V2(i,e,n={}){const s=new is;return i.asyncQueue.enqueueAndForget(async()=>function(u,f,m,g,y){const T=new FE({next:w=>{T.Nu(),f.enqueueAndForget(()=>kE(u,b)),w.fromCache&&g.source==="server"?y.reject(new he(ee.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(w)},error:w=>y.reject(w)}),b=new xE(m,T,{includeMetadataChanges:!0,qa:!0});return VE(u,b)}(await YE(i),i.asyncQueue,e,n,s)),s.promise}/**
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
 */function GE(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const v0=new Map;/**
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
 */const XE="firestore.googleapis.com",_0=!0;class T0{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new he(ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=XE,this.ssl=_0}else this.host=e.host,this.ssl=e.ssl??_0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=AE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<wN)throw new he(ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=GE(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new he(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new he(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new he(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rh{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new T0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new T0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new iR;switch(s.type){case"firstParty":return new oR(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new he(ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=v0.get(n);s&&(fe("ComponentProvider","Removing Datastore"),v0.delete(n),s.terminate())}(this),Promise.resolve()}}function k2(i,e,n,s={}){var y;i=Hl(i,Rh);const o=yo(e),u=i._getSettings(),f={...u,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${n}`;o&&(bT(`https://${m}`),wT("Firestore",!0)),u.host!==XE&&u.host!==m&&lo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...u,host:m,ssl:o,emulatorOptions:s};if(!Zs(g,f)&&(i._setSettings(g),s.mockUserToken)){let T,b;if(typeof s.mockUserToken=="string")T=s.mockUserToken,b=fn.MOCK_USER;else{T=M1(s.mockUserToken,(y=i._app)==null?void 0:y.options.projectId);const w=s.mockUserToken.sub||s.mockUserToken.user_id;if(!w)throw new he(ee.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new fn(w)}i._authCredentials=new rR(new zT(T,b))}}/**
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
 */class wo{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new wo(this.firestore,e,this._query)}}class qt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qt(this.firestore,e,this._key)}toJSON(){return{type:qt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(eu(n,qt._jsonSchema))return new qt(e,s||null,new Te(ft.fromString(n.referencePath)))}}qt._jsonSchemaVersion="firestore/documentReference/1.0",qt._jsonSchema={type:xt("string",qt._jsonSchemaVersion),referencePath:xt("string")};class rs extends wo{constructor(e,n,s){super(e,n,Jm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qt(this.firestore,null,new Te(e))}withConverter(e){return new rs(this.firestore,e,this._path)}}function KE(i,e,...n){if(i=Jn(i),jT("collection","path",e),i instanceof Rh){const s=ft.fromString(e,...n);return M_(s),new rs(i,null,s)}{if(!(i instanceof qt||i instanceof rs))throw new he(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(ft.fromString(e,...n));return M_(s),new rs(i.firestore,null,s)}}function QE(i,e,...n){if(i=Jn(i),arguments.length===1&&(e=Km.newId()),jT("doc","path",e),i instanceof Rh){const s=ft.fromString(e,...n);return O_(s),new qt(i,null,new Te(s))}{if(!(i instanceof qt||i instanceof rs))throw new he(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(ft.fromString(e,...n));return O_(s),new qt(i.firestore,i instanceof rs?i.converter:null,new Te(s))}}/**
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
 */const E0="AsyncQueue";class S0{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new IE(this,"async_queue_retry"),this._c=()=>{const s=Zd();s&&fe(E0,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=Zd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Zd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new is;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Eo(e))throw e;fe(E0,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,mr("INTERNAL UNHANDLED ERROR: ",b0(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const o=fp.createAndSchedule(this,e,n,s,u=>this.hc(u));return this.tc.push(o),o}uc(){this.nc&&Ne(47125,{Pc:b0(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function b0(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class gp extends Rh{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new S0,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new S0(e),this._firestoreClient=void 0,await e}}}function x2(i,e){const n=typeof i=="object"?i:Gm(),s=typeof i=="string"?i:$c,o=vo(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=D1("firestore");u&&k2(o,...u)}return o}function $E(i){if(i._terminated)throw new he(ee.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||L2(i),i._firestoreClient}function L2(i){var s,o,u;const e=i._freezeSettings(),n=function(m,g,y,T){return new AR(m,g,y,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,GE(T.experimentalLongPollingOptions),T.useFetchStreams,T.isUsingEmulator)}(i._databaseId,((s=i._app)==null?void 0:s.options.appId)||"",i._persistenceKey,e);i._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new D2(i._authCredentials,i._appCheckCredentials,i._queue,n,i._componentsProvider&&function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}}(i._componentsProvider))}/**
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
 */class $n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $n(on.fromBase64String(e))}catch(n){throw new he(ee.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $n(on.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:$n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(eu(e,$n._jsonSchema))return $n.fromBase64String(e.bytes)}}$n._jsonSchemaVersion="firestore/bytes/1.0",$n._jsonSchema={type:xt("string",$n._jsonSchemaVersion),bytes:xt("string")};/**
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
 */class ZE{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new he(ee.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class WE{constructor(e){this._methodName=e}}/**
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
 */class Ii{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new he(ee.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new he(ee.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return je(this._lat,e._lat)||je(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ii._jsonSchemaVersion}}static fromJSON(e){if(eu(e,Ii._jsonSchema))return new Ii(e.latitude,e.longitude)}}Ii._jsonSchemaVersion="firestore/geoPoint/1.0",Ii._jsonSchema={type:xt("string",Ii._jsonSchemaVersion),latitude:xt("number"),longitude:xt("number")};/**
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
 */class Di{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Di._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(eu(e,Di._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Di(e.vectorValues);throw new he(ee.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Di._jsonSchemaVersion="firestore/vectorValue/1.0",Di._jsonSchema={type:xt("string",Di._jsonSchemaVersion),vectorValues:xt("object")};/**
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
 */const U2=/^__.*__$/;function JE(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ne(40011,{Ac:i})}}class yp{constructor(e,n,s,o,u,f){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new yp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var o;const n=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){var o;const n=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Pm(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(JE(this.Ac)&&U2.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class z2{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Ah(e)}Cc(e,n,s,o=!1){return new yp({Ac:e,methodName:n,Dc:s,path:mn.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function j2(i){const e=i._freezeSettings(),n=Ah(i._databaseId);return new z2(i._databaseId,!!e.ignoreUndefinedProperties,n)}function B2(i,e,n,s=!1){return vp(n,i.Cc(s?4:3,e))}function vp(i,e){if(eS(i=Jn(i)))return H2("Unsupported field value:",e,i),q2(i,e);if(i instanceof WE)return function(s,o){if(!JE(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(s,o){const u=[];let f=0;for(const m of s){let g=vp(m,o.wc(f));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),f++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=Jn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return KR(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=_t.fromDate(s);return{timestampValue:Cm(o.serializer,u)}}if(s instanceof _t){const u=new _t(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Cm(o.serializer,u)}}if(s instanceof Ii)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof $n)return{bytesValue:yE(o.serializer,s._byteString)};if(s instanceof qt){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:vE(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Di)return function(f,m){return{mapValue:{fields:{[QT]:{stringValue:$T},[Zc]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw m.Sc("VectorValues must only contain numeric values.");return ep(m.serializer,y)})}}}}}}(s,o);throw o.Sc(`Unsupported field value: ${ph(s)}`)}(i,e)}function q2(i,e){const n={};return HT(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):So(i,(s,o)=>{const u=vp(o,e.mc(s));u!=null&&(n[s]=u)}),{mapValue:{fields:n}}}function eS(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof _t||i instanceof Ii||i instanceof $n||i instanceof qt||i instanceof WE||i instanceof Di)}function H2(i,e,n){if(!eS(n)||!BT(n)){const s=ph(n);throw s==="an object"?e.Sc(i+" a custom object"):e.Sc(i+" "+s)}}const F2=new RegExp("[~\\*/\\[\\]]");function Y2(i,e,n){if(e.search(F2)>=0)throw Pm(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,n);try{return new ZE(...e.split("."))._internalPath}catch{throw Pm(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,n)}}function Pm(i,e,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${e}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||f)&&(g+=" (found",u&&(g+=` in field ${s}`),f&&(g+=` in document ${o}`),g+=")"),new he(ee.INVALID_ARGUMENT,m+i+g)}/**
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
 */class tS{constructor(e,n,s,o,u){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new G2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(_p("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class G2 extends tS{data(){return super.data()}}function _p(i,e){return typeof e=="string"?Y2(i,e):e instanceof ZE?e._internalPath:e._delegate._internalPath}/**
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
 */function X2(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new he(ee.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tp{}class K2 extends Tp{}function Q2(i,e,...n){let s=[];e instanceof Tp&&s.push(e),s=s.concat(n),function(u){const f=u.filter(g=>g instanceof Ep).length,m=u.filter(g=>g instanceof Nh).length;if(f>1||f>0&&m>0)throw new he(ee.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)i=o._apply(i);return i}class Nh extends K2{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Nh(e,n,s)}_apply(e){const n=this._parse(e);return nS(e._query,n),new wo(e.firestore,e.converter,Em(e._query,n))}_parse(e){const n=j2(e.firestore);return function(u,f,m,g,y,T,b){let w;if(y.isKeyField()){if(T==="array-contains"||T==="array-contains-any")throw new he(ee.INVALID_ARGUMENT,`Invalid Query. You can't perform '${T}' queries on documentId().`);if(T==="in"||T==="not-in"){A0(b,T);const U=[];for(const Y of b)U.push(w0(g,u,Y));w={arrayValue:{values:U}}}else w=w0(g,u,b)}else T!=="in"&&T!=="not-in"&&T!=="array-contains-any"||A0(b,T),w=B2(m,f,b,T==="in"||T==="not-in");return kt.create(y,T,w)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function $2(i,e,n){const s=e,o=_p("where",i);return Nh._create(o,s,n)}class Ep extends Tp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ep(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:li.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(o,u){let f=o;const m=u.getFlattenedFilters();for(const g of m)nS(f,g),f=Em(f,g)}(e._query,n),new wo(e.firestore,e.converter,Em(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function w0(i,e,n){if(typeof(n=Jn(n))=="string"){if(n==="")throw new he(ee.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!iE(e)&&n.indexOf("/")!==-1)throw new he(ee.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(ft.fromString(n));if(!Te.isDocumentKey(s))throw new he(ee.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return j_(i,new Te(s))}if(n instanceof qt)return j_(i,n._key);throw new he(ee.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ph(n)}.`)}function A0(i,e){if(!Array.isArray(i)||i.length===0)throw new he(ee.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function nS(i,e){const n=function(o,u){for(const f of o)for(const m of f.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null}(i.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new he(ee.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new he(ee.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Z2{convertValue(e,n="none"){switch(us(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ls(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Ne(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return So(e,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(e){var s,o,u;const n=(u=(o=(s=e.fields)==null?void 0:s[Zc].arrayValue)==null?void 0:o.values)==null?void 0:u.map(f=>Rt(f.doubleValue));return new Di(n)}convertGeoPoint(e){return new Ii(Rt(e.latitude),Rt(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=_h(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Yl(e));default:return null}}convertTimestamp(e){const n=os(e);return new _t(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ft.fromString(e);Et(wE(s),9688,{name:e});const o=new Gl(s.get(1),s.get(3)),u=new Te(s.popFirst(5));return o.isEqual(n)||mr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}class kl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qs extends tS{constructor(e,n,s,o,u,f){super(e,n,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(_p("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new he(ee.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Qs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Qs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Qs._jsonSchema={type:xt("string",Qs._jsonSchemaVersion),bundleSource:xt("string","DocumentSnapshot"),bundleName:xt("string"),bundle:xt("string")};class Bc extends Qs{data(e={}){return super.data(e)}}class ro{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new kl(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Bc(this._firestore,this._userDataWriter,s.key,s,new kl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new he(ee.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(m=>{const g=new Bc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new kl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const g=new Bc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new kl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,T=-1;return m.type!==0&&(y=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),T=f.indexOf(m.doc.key)),{type:W2(m.type),doc:g,oldIndex:y,newIndex:T}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new he(ee.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ro._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Km.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function W2(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ne(61501,{type:i})}}/**
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
 */function iS(i){i=Hl(i,qt);const e=Hl(i.firestore,gp);return P2($E(e),i._key).then(n=>J2(e,i,n))}ro._jsonSchemaVersion="firestore/querySnapshot/1.0",ro._jsonSchema={type:xt("string",ro._jsonSchemaVersion),bundleSource:xt("string","QuerySnapshot"),bundleName:xt("string"),bundle:xt("string")};class rS extends Z2{constructor(e){super(),this.firestore=e}convertBytes(e){return new $n(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qt(this.firestore,null,n)}}function sS(i){i=Hl(i,wo);const e=Hl(i.firestore,gp),n=$E(e),s=new rS(e);return X2(i._query),V2(n,i._query).then(o=>new ro(e,s,i,o))}function J2(i,e,n){const s=n.docs.get(e._key),o=new rS(i);return new Qs(i,o,e._key,s,new kl(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(o){To=o})(_o),Pi(new oi("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new gp(new sR(s.getProvider("auth-internal")),new lR(f,s.getProvider("app-check-internal")),function(y,T){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new he(ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gl(y.options.projectId,T)}(f,o),f);return u={useFetchStreams:n,...u},m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),Wn(R_,N_,e),Wn(R_,N_,"esm2020")})();var eI="firebase",tI="12.1.0";/**
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
 */Wn(eI,tI,"app");function aS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nI=aS,oS=new na("auth","Firebase",aS());/**
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
 */const rh=new Fm("@firebase/auth");function iI(i,...e){rh.logLevel<=ze.WARN&&rh.warn(`Auth (${_o}): ${i}`,...e)}function qc(i,...e){rh.logLevel<=ze.ERROR&&rh.error(`Auth (${_o}): ${i}`,...e)}/**
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
 */function pr(i,...e){throw Sp(i,...e)}function Oi(i,...e){return Sp(i,...e)}function lS(i,e,n){const s={...nI(),[e]:n};return new na("auth","Firebase",s).create(e,{appName:i.name})}function $s(i){return lS(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Sp(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return oS.create(i,...e)}function Ae(i,e,...n){if(!i)throw Sp(e,...n)}function cr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw qc(e),new Error(e)}function gr(i,e){i||cr(e)}/**
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
 */function Vm(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function rI(){return C0()==="http:"||C0()==="https:"}function C0(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
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
 */function sI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rI()||U1()||"connection"in navigator)?navigator.onLine:!0}function aI(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class su{constructor(e,n){this.shortDelay=e,this.longDelay=n,gr(n>e,"Short delay should be less than long delay!"),this.isMobile=k1()||z1()}get(){return sI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bp(i,e){gr(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class uS{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;cr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;cr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;cr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const oI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],uI=new su(3e4,6e4);function wp(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function Ao(i,e,n,s,o={}){return cS(i,o,async()=>{let u={},f={};s&&(e==="GET"?f=s:u={body:JSON.stringify(s)});const m=Jl({key:i.config.apiKey,...f}).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const y={method:e,headers:g,...u};return L1()||(y.referrerPolicy="no-referrer"),i.emulatorConfig&&yo(i.emulatorConfig.host)&&(y.credentials="include"),uS.fetch()(await hS(i,i.config.apiHost,n,m),y)})}async function cS(i,e,n){i._canInitEmulator=!1;const s={...oI,...e};try{const o=new hI(i),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw xc(i,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[g,y]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw xc(i,"credential-already-in-use",f);if(g==="EMAIL_EXISTS")throw xc(i,"email-already-in-use",f);if(g==="USER_DISABLED")throw xc(i,"user-disabled",f);const T=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw lS(i,T,y);pr(i,T)}}catch(o){if(o instanceof ki)throw o;pr(i,"network-request-failed",{message:String(o)})}}async function cI(i,e,n,s,o={}){const u=await Ao(i,e,n,s,o);return"mfaPendingCredential"in u&&pr(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function hS(i,e,n,s){const o=`${e}${n}?${s}`,u=i,f=u.config.emulator?bp(i.config,o):`${i.config.apiScheme}://${o}`;return lI.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}class hI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Oi(this.auth,"network-request-failed")),uI.get())})}}function xc(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=Oi(i,e,s);return o.customData._tokenResponse=n,o}/**
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
 */async function fI(i,e){return Ao(i,"POST","/v1/accounts:delete",e)}async function sh(i,e){return Ao(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Bl(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dI(i,e=!1){const n=Jn(i),s=await n.getIdToken(e),o=Ap(s);Ae(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Bl(Jd(o.auth_time)),issuedAtTime:Bl(Jd(o.iat)),expirationTime:Bl(Jd(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Jd(i){return Number(i)*1e3}function Ap(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return qc("JWT malformed, contained fewer than 3 sections"),null;try{const o=_T(n);return o?JSON.parse(o):(qc("Failed to decode base64 JWT payload"),null)}catch(o){return qc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function R0(i){const e=Ap(i);return Ae(e,"internal-error"),Ae(typeof e.exp<"u","internal-error"),Ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Kl(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ki&&mI(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function mI({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class pI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class km{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bl(this.lastLoginAt),this.creationTime=Bl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ah(i){var b;const e=i.auth,n=await i.getIdToken(),s=await Kl(i,sh(e,{idToken:n}));Ae(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const u=(b=o.providerUserInfo)!=null&&b.length?fS(o.providerUserInfo):[],f=yI(i.providerData,u),m=i.isAnonymous,g=!(i.email&&o.passwordHash)&&!(f!=null&&f.length),y=m?g:!1,T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new km(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(i,T)}async function gI(i){const e=Jn(i);await ah(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yI(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function fS(i){return i.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function vI(i,e){const n=await cS(i,{},async()=>{const s=Jl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,f=await hS(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return i.emulatorConfig&&yo(i.emulatorConfig.host)&&(g.credentials="include"),uS.fetch()(f,g)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _I(i,e){return Ao(i,"POST","/v2/accounts:revokeToken",wp(i,e))}/**
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
 */class so{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ae(e.idToken,"internal-error"),Ae(typeof e.idToken<"u","internal-error"),Ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):R0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ae(e.length!==0,"internal-error");const n=R0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await vI(e,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new so;return s&&(Ae(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(Ae(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(Ae(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new so,this.toJSON())}_performRefresh(){return cr("not implemented")}}/**
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
 */function Xr(i,e){Ae(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class ai{constructor({uid:e,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new pI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new km(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Kl(this,this.stsTokenManager.getToken(this.auth,e));return Ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dI(this,e)}reload(){return gI(this)}_assign(e){this!==e&&(Ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ai({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ah(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ci(this.auth.app))return Promise.reject($s(this.auth));const e=await this.getIdToken();return await Kl(this,fI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,o=n.email??void 0,u=n.phoneNumber??void 0,f=n.photoURL??void 0,m=n.tenantId??void 0,g=n._redirectEventId??void 0,y=n.createdAt??void 0,T=n.lastLoginAt??void 0,{uid:b,emailVerified:w,isAnonymous:k,providerData:U,stsTokenManager:Y}=n;Ae(b&&Y,e,"internal-error");const X=so.fromJSON(this.name,Y);Ae(typeof b=="string",e,"internal-error"),Xr(s,e.name),Xr(o,e.name),Ae(typeof w=="boolean",e,"internal-error"),Ae(typeof k=="boolean",e,"internal-error"),Xr(u,e.name),Xr(f,e.name),Xr(m,e.name),Xr(g,e.name),Xr(y,e.name),Xr(T,e.name);const ce=new ai({uid:b,auth:e,email:o,emailVerified:w,displayName:s,isAnonymous:k,photoURL:f,phoneNumber:u,tenantId:m,stsTokenManager:X,createdAt:y,lastLoginAt:T});return U&&Array.isArray(U)&&(ce.providerData=U.map(ie=>({...ie}))),g&&(ce._redirectEventId=g),ce}static async _fromIdTokenResponse(e,n,s=!1){const o=new so;o.updateFromServerResponse(n);const u=new ai({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await ah(u),u}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];Ae(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?fS(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new so;m.updateFromIdToken(s);const g=new ai({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new km(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,y),g}}/**
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
 */const N0=new Map;function hr(i){gr(i instanceof Function,"Expected a class definition");let e=N0.get(i);return e?(gr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,N0.set(i,e),e)}/**
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
 */class dS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dS.type="NONE";const I0=dS;/**
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
 */function Hc(i,e,n){return`firebase:${i}:${e}:${n}`}class ao{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Hc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Hc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await sh(this.auth,{idToken:e}).catch(()=>{});return n?ai._fromGetAccountInfoResponse(this.auth,n,e):null}return ai._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ao(hr(I0),e,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||hr(I0);const f=Hc(s,e.config.apiKey,e.name);let m=null;for(const y of n)try{const T=await y._get(f);if(T){let b;if(typeof T=="string"){const w=await sh(e,{idToken:T}).catch(()=>{});if(!w)break;b=await ai._fromGetAccountInfoResponse(e,w,T)}else b=ai._fromJSON(e,T);y!==u&&(m=b),u=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new ao(u,e,s):(u=g[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new ao(u,e,s))}}/**
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
 */function D0(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_S(e))return"Blackberry";if(TS(e))return"Webos";if(pS(e))return"Safari";if((e.includes("chrome/")||gS(e))&&!e.includes("edge/"))return"Chrome";if(vS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function mS(i=pn()){return/firefox\//i.test(i)}function pS(i=pn()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gS(i=pn()){return/crios\//i.test(i)}function yS(i=pn()){return/iemobile/i.test(i)}function vS(i=pn()){return/android/i.test(i)}function _S(i=pn()){return/blackberry/i.test(i)}function TS(i=pn()){return/webos/i.test(i)}function Cp(i=pn()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function TI(i=pn()){var e;return Cp(i)&&!!((e=window.navigator)!=null&&e.standalone)}function EI(){return j1()&&document.documentMode===10}function ES(i=pn()){return Cp(i)||vS(i)||TS(i)||_S(i)||/windows phone/i.test(i)||yS(i)}/**
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
 */function SS(i,e=[]){let n;switch(i){case"Browser":n=D0(pn());break;case"Worker":n=`${D0(pn())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_o}/${s}`}/**
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
 */class SI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((f,m)=>{try{const g=e(u);f(g)}catch(g){m(g)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function bI(i,e={}){return Ao(i,"GET","/v2/passwordPolicy",wp(i,e))}/**
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
 */const wI=6;class AI{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??wI,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class CI{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new O0(this),this.idTokenSubscription=new O0(this),this.beforeStateQueue=new SI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=oS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hr(n)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await ao.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await sh(this,{idToken:e}),s=await ai._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(Ci(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,g=await this.tryRedirectSignIn(e);(!f||f===m)&&(g!=null&&g.user)&&(s=g.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(f){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ah(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ci(this.app))return Promise.reject($s(this));const n=e?Jn(e):null;return n&&Ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ci(this.app)?Promise.reject($s(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ci(this.app)?Promise.reject($s(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bI(this),n=new AI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new na("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await _I(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hr(e)||this._popupRedirectResolver;Ae(n,this,"argument-error"),this.redirectPersistenceManager=await ao.create(this,[hr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ae(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const g=e.addObserver(n,s,o);return()=>{f=!0,g()}}else{const g=e.addObserver(n);return()=>{f=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=SS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(Ci(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&iI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Rp(i){return Jn(i)}class O0{constructor(e){this.auth=e,this.observer=null,this.addObserver=X1(n=>this.observer=n)}get next(){return Ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Np={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function RI(i){Np=i}function NI(i){return Np.loadJS(i)}function II(){return Np.gapiScript}function DI(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function OI(i,e){const n=vo(i,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(Zs(u,e??{}))return o;pr(o,"already-initialized")}return n.initialize({options:e})}function MI(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(hr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function PI(i,e,n){const s=Rp(i);Ae(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=bS(e),{host:f,port:m}=VI(e),g=m===null?"":`:${m}`,y={url:`${u}//${f}${g}/`},T=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Ae(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ae(Zs(y,s.config.emulator)&&Zs(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,yo(f)?(bT(`${u}//${f}${g}`),wT("Auth",!0)):kI()}function bS(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function VI(i){const e=bS(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:M0(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:M0(f)}}}function M0(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function kI(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class wS{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return cr("not implemented")}_getIdTokenResponse(e){return cr("not implemented")}_linkToIdToken(e,n){return cr("not implemented")}_getReauthenticationResolver(e){return cr("not implemented")}}/**
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
 */async function oo(i,e){return cI(i,"POST","/v1/accounts:signInWithIdp",wp(i,e))}/**
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
 */const xI="http://localhost";class Js extends wS{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Js(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=n;if(!s||!o)return null;const f=new Js(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return oo(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,oo(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,oo(e,n)}buildRequest(){const e={requestUri:xI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Jl(n)}return e}}/**
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
 */class AS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class au extends AS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kr extends au{constructor(){super("facebook.com")}static credential(e){return Js._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kr.credential(e.oauthAccessToken)}catch{return null}}}Kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kr.PROVIDER_ID="facebook.com";/**
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
 */class Qr extends au{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Js._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Qr.credential(n,s)}catch{return null}}}Qr.GOOGLE_SIGN_IN_METHOD="google.com";Qr.PROVIDER_ID="google.com";/**
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
 */class $r extends au{constructor(){super("github.com")}static credential(e){return Js._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $r.credential(e.oauthAccessToken)}catch{return null}}}$r.GITHUB_SIGN_IN_METHOD="github.com";$r.PROVIDER_ID="github.com";/**
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
 */class Zr extends au{constructor(){super("twitter.com")}static credential(e,n){return Js._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Zr.credential(n,s)}catch{return null}}}Zr.TWITTER_SIGN_IN_METHOD="twitter.com";Zr.PROVIDER_ID="twitter.com";/**
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
 */class go{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const u=await ai._fromIdTokenResponse(e,s,o),f=P0(s);return new go({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=P0(s);return new go({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function P0(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class oh extends ki{constructor(e,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,oh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new oh(e,n,s,o)}}function CS(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?oh._fromErrorAndOperation(i,u,e,s):u})}async function LI(i,e,n=!1){const s=await Kl(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return go._forOperation(i,"link",s)}/**
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
 */async function UI(i,e,n=!1){const{auth:s}=i;if(Ci(s.app))return Promise.reject($s(s));const o="reauthenticate";try{const u=await Kl(i,CS(s,o,e,i),n);Ae(u.idToken,s,"internal-error");const f=Ap(u.idToken);Ae(f,s,"internal-error");const{sub:m}=f;return Ae(i.uid===m,s,"user-mismatch"),go._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&pr(s,"user-mismatch"),u}}/**
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
 */async function zI(i,e,n=!1){if(Ci(i.app))return Promise.reject($s(i));const s="signIn",o=await CS(i,s,e),u=await go._fromIdTokenResponse(i,s,o);return n||await i._updateCurrentUser(u.user),u}function jI(i,e,n,s){return Jn(i).onIdTokenChanged(e,n,s)}function BI(i,e,n){return Jn(i).beforeAuthStateChanged(e,n)}const lh="__sak";/**
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
 */class RS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(lh,"1"),this.storage.removeItem(lh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const qI=1e3,HI=10;class NS extends RS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ES(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,m,g)=>{this.notifyListeners(f,g)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);EI()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,HI):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},qI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}NS.type="LOCAL";const FI=NS;/**
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
 */class IS extends RS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}IS.type="SESSION";const DS=IS;/**
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
 */function YI(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ih{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new Ih(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async y=>y(n.origin,u)),g=await YI(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ih.receivers=[];/**
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
 */function Ip(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
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
 */class GI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,g)=>{const y=Ip("",20);o.port1.start();const T=setTimeout(()=>{g(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(b){const w=b;if(w.data.eventId===y)switch(w.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(w.data.response);break;default:clearTimeout(T),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function Mi(){return window}function XI(i){Mi().location.href=i}/**
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
 */function OS(){return typeof Mi().WorkerGlobalScope<"u"&&typeof Mi().importScripts=="function"}async function KI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QI(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function $I(){return OS()?self:null}/**
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
 */const MS="firebaseLocalStorageDb",ZI=1,uh="firebaseLocalStorage",PS="fbase_key";class ou{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Dh(i,e){return i.transaction([uh],e?"readwrite":"readonly").objectStore(uh)}function WI(){const i=indexedDB.deleteDatabase(MS);return new ou(i).toPromise()}function xm(){const i=indexedDB.open(MS,ZI);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(uh,{keyPath:PS})}catch(o){n(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(uh)?e(s):(s.close(),await WI(),e(await xm()))})})}async function V0(i,e,n){const s=Dh(i,!0).put({[PS]:e,value:n});return new ou(s).toPromise()}async function JI(i,e){const n=Dh(i,!1).get(e),s=await new ou(n).toPromise();return s===void 0?null:s.value}function k0(i,e){const n=Dh(i,!0).delete(e);return new ou(n).toPromise()}const eD=800,tD=3;class VS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>tD)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return OS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ih._getInstance($I()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await KI(),!this.activeServiceWorker)return;this.sender=new GI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xm();return await V0(e,lh,"1"),await k0(e,lh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>V0(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>JI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>k0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Dh(o,!1).getAll();return new ou(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}VS.type="LOCAL";const nD=VS;new su(3e4,6e4);/**
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
 */function iD(i,e){return e?hr(e):(Ae(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Dp extends wS{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return oo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return oo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rD(i){return zI(i.auth,new Dp(i),i.bypassAuthState)}function sD(i){const{auth:e,user:n}=i;return Ae(n,e,"internal-error"),UI(n,new Dp(i),i.bypassAuthState)}async function aD(i){const{auth:e,user:n}=i;return Ae(n,e,"internal-error"),LI(n,new Dp(i),i.bypassAuthState)}/**
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
 */class kS{constructor(e,n,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=e;if(f){this.reject(f);return}const g={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rD;case"linkViaPopup":case"linkViaRedirect":return aD;case"reauthViaPopup":case"reauthViaRedirect":return sD;default:pr(this.auth,"internal-error")}}resolve(e){gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const oD=new su(2e3,1e4);class to extends kS{constructor(e,n,s,o,u){super(e,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,to.currentPopupAction&&to.currentPopupAction.cancel(),to.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ae(e,this.auth,"internal-error"),e}async onExecution(){gr(this.filter.length===1,"Popup operations only handle one event");const e=Ip();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Oi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Oi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,to.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Oi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,oD.get())};e()}}to.currentPopupAction=null;/**
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
 */const lD="pendingRedirect",Fc=new Map;class uD extends kS{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Fc.get(this.auth._key());if(!e){try{const s=await cD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Fc.set(this.auth._key(),e)}return this.bypassAuthState||Fc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cD(i,e){const n=dD(e),s=fD(i);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function hD(i,e){Fc.set(i._key(),e)}function fD(i){return hr(i._redirectPersistence)}function dD(i){return Hc(lD,i.config.apiKey,i.name)}async function mD(i,e,n=!1){if(Ci(i.app))return Promise.reject($s(i));const s=Rp(i),o=iD(s,e),f=await new uD(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
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
 */const pD=10*60*1e3;class gD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!xS(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(Oi(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pD&&this.cachedEventUids.clear(),this.cachedEventUids.has(x0(e))}saveEventToCache(e){this.cachedEventUids.add(x0(e)),this.lastProcessedEventTime=Date.now()}}function x0(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function xS({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yD(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xS(i);default:return!1}}/**
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
 */async function vD(i,e={}){return Ao(i,"GET","/v1/projects",e)}/**
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
 */const _D=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TD=/^https?/;async function ED(i){if(i.config.emulator)return;const{authorizedDomains:e}=await vD(i);for(const n of e)try{if(SD(n))return}catch{}pr(i,"unauthorized-domain")}function SD(i){const e=Vm(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const f=new URL(i);return f.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!TD.test(n))return!1;if(_D.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const bD=new su(3e4,6e4);function L0(){const i=Mi().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function wD(i){return new Promise((e,n)=>{var o,u,f;function s(){L0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{L0(),n(Oi(i,"network-request-failed"))},timeout:bD.get()})}if((u=(o=Mi().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((f=Mi().gapi)!=null&&f.load)s();else{const m=DI("iframefcb");return Mi()[m]=()=>{gapi.load?s():n(Oi(i,"network-request-failed"))},NI(`${II()}?onload=${m}`).catch(g=>n(g))}}).catch(e=>{throw Yc=null,e})}let Yc=null;function AD(i){return Yc=Yc||wD(i),Yc}/**
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
 */const CD=new su(5e3,15e3),RD="__/auth/iframe",ND="emulator/auth/iframe",ID={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OD(i){const e=i.config;Ae(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?bp(e,ND):`https://${i.config.authDomain}/${RD}`,s={apiKey:e.apiKey,appName:i.name,v:_o},o=DD.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Jl(s).slice(1)}`}async function MD(i){const e=await AD(i),n=Mi().gapi;return Ae(n,i,"internal-error"),e.open({where:document.body,url:OD(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ID,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=Oi(i,"network-request-failed"),m=Mi().setTimeout(()=>{u(f)},CD.get());function g(){Mi().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(f)})}))}/**
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
 */const PD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VD=500,kD=600,xD="_blank",LD="http://localhost";class U0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UD(i,e,n,s=VD,o=kD){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g={...PD,width:s.toString(),height:o.toString(),top:u,left:f},y=pn().toLowerCase();n&&(m=gS(y)?xD:n),mS(y)&&(e=e||LD,g.scrollbars="yes");const T=Object.entries(g).reduce((w,[k,U])=>`${w}${k}=${U},`,"");if(TI(y)&&m!=="_self")return zD(e||"",m),new U0(null);const b=window.open(e||"",m,T);Ae(b,i,"popup-blocked");try{b.focus()}catch{}return new U0(b)}function zD(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const jD="__/auth/handler",BD="emulator/auth/handler",qD=encodeURIComponent("fac");async function z0(i,e,n,s,o,u){Ae(i.config.authDomain,i,"auth-domain-config-required"),Ae(i.config.apiKey,i,"invalid-api-key");const f={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:_o,eventId:o};if(e instanceof AS){e.setDefaultLanguage(i.languageCode),f.providerId=e.providerId||"",G1(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,b]of Object.entries({}))f[T]=b}if(e instanceof au){const T=e.getScopes().filter(b=>b!=="");T.length>0&&(f.scopes=T.join(","))}i.tenantId&&(f.tid=i.tenantId);const m=f;for(const T of Object.keys(m))m[T]===void 0&&delete m[T];const g=await i._getAppCheckToken(),y=g?`#${qD}=${encodeURIComponent(g)}`:"";return`${HD(i)}?${Jl(m).slice(1)}${y}`}function HD({config:i}){return i.emulator?bp(i,BD):`https://${i.authDomain}/${jD}`}/**
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
 */const em="webStorageSupport";class FD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=DS,this._completeRedirectFn=mD,this._overrideRedirectResult=hD}async _openPopup(e,n,s,o){var f;gr((f=this.eventManagers[e._key()])==null?void 0:f.manager,"_initialize() not called before _openPopup()");const u=await z0(e,n,s,Vm(),o);return UD(e,u,Ip())}async _openRedirect(e,n,s,o){await this._originValidation(e);const u=await z0(e,n,s,Vm(),o);return XI(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(gr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await MD(e),s=new gD(e);return n.register("authEvent",o=>(Ae(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(em,{type:em},o=>{var f;const u=(f=o==null?void 0:o[0])==null?void 0:f[em];u!==void 0&&n(!!u),pr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ED(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ES()||pS()||Cp()}}const YD=FD;var j0="@firebase/auth",B0="1.11.0";/**
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
 */class GD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function XD(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function KD(i){Pi(new oi("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;Ae(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:f,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:SS(i)},y=new CI(s,o,u,g);return MI(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Pi(new oi("auth-internal",e=>{const n=Rp(e.getProvider("auth").getImmediate());return(s=>new GD(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wn(j0,B0,XD(i)),Wn(j0,B0,"esm2020")}/**
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
 */const QD=5*60,$D=ST("authIdTokenMaxAge")||QD;let q0=null;const ZD=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>$D)return;const o=n==null?void 0:n.token;q0!==o&&(q0=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function WD(i=Gm()){const e=vo(i,"auth");if(e.isInitialized())return e.getImmediate();const n=OI(i,{popupRedirectResolver:YD,persistence:[nD,FI,DS]}),s=ST("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=ZD(u.toString());BI(n,f,()=>f(n.currentUser)),jI(n,m=>f(m))}}const o=TT("auth");return o&&PI(n,`http://${o}`),n}function JD(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}RI({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Oi("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",JD().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});KD("Browser");const LS="@firebase/installations",Op="0.6.19";/**
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
 */const US=1e4,zS=`w:${Op}`,jS="FIS_v2",eO="https://firebaseinstallations.googleapis.com/v1",tO=60*60*1e3,nO="installations",iO="Installations";/**
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
 */const rO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ea=new na(nO,iO,rO);function BS(i){return i instanceof ki&&i.code.includes("request-failed")}/**
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
 */function qS({projectId:i}){return`${eO}/projects/${i}/installations`}function HS(i){return{token:i.token,requestStatus:2,expiresIn:aO(i.expiresIn),creationTime:Date.now()}}async function FS(i,e){const s=(await e.json()).error;return ea.create("request-failed",{requestName:i,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function YS({apiKey:i}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i})}function sO(i,{refreshToken:e}){const n=YS(i);return n.append("Authorization",oO(e)),n}async function GS(i){const e=await i();return e.status>=500&&e.status<600?i():e}function aO(i){return Number(i.replace("s","000"))}function oO(i){return`${jS} ${i}`}/**
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
 */async function lO({appConfig:i,heartbeatServiceProvider:e},{fid:n}){const s=qS(i),o=YS(i),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:n,authVersion:jS,appId:i.appId,sdkVersion:zS},m={method:"POST",headers:o,body:JSON.stringify(f)},g=await GS(()=>fetch(s,m));if(g.ok){const y=await g.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:HS(y.authToken)}}else throw await FS("Create Installation",g)}/**
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
 */function XS(i){return new Promise(e=>{setTimeout(e,i)})}/**
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
 */function uO(i){return btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const cO=/^[cdef][\w-]{21}$/,Lm="";function hO(){try{const i=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(i),i[0]=112+i[0]%16;const n=fO(i);return cO.test(n)?n:Lm}catch{return Lm}}function fO(i){return uO(i).substr(0,22)}/**
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
 */function Oh(i){return`${i.appName}!${i.appId}`}/**
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
 */const KS=new Map;function QS(i,e){const n=Oh(i);$S(n,e),dO(n,e)}function $S(i,e){const n=KS.get(i);if(n)for(const s of n)s(e)}function dO(i,e){const n=mO();n&&n.postMessage({key:i,fid:e}),pO()}let Gs=null;function mO(){return!Gs&&"BroadcastChannel"in self&&(Gs=new BroadcastChannel("[Firebase] FID Change"),Gs.onmessage=i=>{$S(i.data.key,i.data.fid)}),Gs}function pO(){KS.size===0&&Gs&&(Gs.close(),Gs=null)}/**
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
 */const gO="firebase-installations-database",yO=1,ta="firebase-installations-store";let tm=null;function Mp(){return tm||(tm=mh(gO,yO,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(ta)}}})),tm}async function ch(i,e){const n=Oh(i),o=(await Mp()).transaction(ta,"readwrite"),u=o.objectStore(ta),f=await u.get(n);return await u.put(e,n),await o.done,(!f||f.fid!==e.fid)&&QS(i,e.fid),e}async function ZS(i){const e=Oh(i),s=(await Mp()).transaction(ta,"readwrite");await s.objectStore(ta).delete(e),await s.done}async function Mh(i,e){const n=Oh(i),o=(await Mp()).transaction(ta,"readwrite"),u=o.objectStore(ta),f=await u.get(n),m=e(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&QS(i,m.fid),m}/**
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
 */async function Pp(i){let e;const n=await Mh(i.appConfig,s=>{const o=vO(s),u=_O(i,o);return e=u.registrationPromise,u.installationEntry});return n.fid===Lm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function vO(i){const e=i||{fid:hO(),registrationStatus:0};return WS(e)}function _O(i,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ea.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=TO(i,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:EO(i)}:{installationEntry:e}}async function TO(i,e){try{const n=await lO(i,e);return ch(i.appConfig,n)}catch(n){throw BS(n)&&n.customData.serverCode===409?await ZS(i.appConfig):await ch(i.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function EO(i){let e=await H0(i.appConfig);for(;e.registrationStatus===1;)await XS(100),e=await H0(i.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Pp(i);return s||n}return e}function H0(i){return Mh(i,e=>{if(!e)throw ea.create("installation-not-found");return WS(e)})}function WS(i){return SO(i)?{fid:i.fid,registrationStatus:0}:i}function SO(i){return i.registrationStatus===1&&i.registrationTime+US<Date.now()}/**
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
 */async function bO({appConfig:i,heartbeatServiceProvider:e},n){const s=wO(i,n),o=sO(i,n),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:zS,appId:i.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},g=await GS(()=>fetch(s,m));if(g.ok){const y=await g.json();return HS(y)}else throw await FS("Generate Auth Token",g)}function wO(i,{fid:e}){return`${qS(i)}/${e}/authTokens:generate`}/**
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
 */async function Vp(i,e=!1){let n;const s=await Mh(i.appConfig,u=>{if(!JS(u))throw ea.create("not-registered");const f=u.authToken;if(!e&&RO(f))return u;if(f.requestStatus===1)return n=AO(i,e),u;{if(!navigator.onLine)throw ea.create("app-offline");const m=IO(u);return n=CO(i,m),m}});return n?await n:s.authToken}async function AO(i,e){let n=await F0(i.appConfig);for(;n.authToken.requestStatus===1;)await XS(100),n=await F0(i.appConfig);const s=n.authToken;return s.requestStatus===0?Vp(i,e):s}function F0(i){return Mh(i,e=>{if(!JS(e))throw ea.create("not-registered");const n=e.authToken;return DO(n)?{...e,authToken:{requestStatus:0}}:e})}async function CO(i,e){try{const n=await bO(i,e),s={...e,authToken:n};return await ch(i.appConfig,s),n}catch(n){if(BS(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ZS(i.appConfig);else{const s={...e,authToken:{requestStatus:0}};await ch(i.appConfig,s)}throw n}}function JS(i){return i!==void 0&&i.registrationStatus===2}function RO(i){return i.requestStatus===2&&!NO(i)}function NO(i){const e=Date.now();return e<i.creationTime||i.creationTime+i.expiresIn<e+tO}function IO(i){const e={requestStatus:1,requestTime:Date.now()};return{...i,authToken:e}}function DO(i){return i.requestStatus===1&&i.requestTime+US<Date.now()}/**
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
 */async function OO(i){const e=i,{installationEntry:n,registrationPromise:s}=await Pp(e);return s?s.catch(console.error):Vp(e).catch(console.error),n.fid}/**
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
 */async function MO(i,e=!1){const n=i;return await PO(n),(await Vp(n,e)).token}async function PO(i){const{registrationPromise:e}=await Pp(i);e&&await e}/**
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
 */function VO(i){if(!i||!i.options)throw nm("App Configuration");if(!i.name)throw nm("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!i.options[n])throw nm(n);return{appName:i.name,projectId:i.options.projectId,apiKey:i.options.apiKey,appId:i.options.appId}}function nm(i){return ea.create("missing-app-config-values",{valueName:i})}/**
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
 */const eb="installations",kO="installations-internal",xO=i=>{const e=i.getProvider("app").getImmediate(),n=VO(e),s=vo(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},LO=i=>{const e=i.getProvider("app").getImmediate(),n=vo(e,eb).getImmediate();return{getId:()=>OO(n),getToken:o=>MO(n,o)}};function UO(){Pi(new oi(eb,xO,"PUBLIC")),Pi(new oi(kO,LO,"PRIVATE"))}UO();Wn(LS,Op);Wn(LS,Op,"esm2020");/**
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
 */const zO="/firebase-messaging-sw.js",jO="/firebase-cloud-messaging-push-scope",tb="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",BO="https://fcmregistrations.googleapis.com/v1",nb="google.c.a.c_id",qO="google.c.a.c_l",HO="google.c.a.ts",FO="google.c.a.e",Y0=1e4;var G0;(function(i){i[i.DATA_MESSAGE=1]="DATA_MESSAGE",i[i.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(G0||(G0={}));/**
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
 */var Ql;(function(i){i.PUSH_RECEIVED="push-received",i.NOTIFICATION_CLICKED="notification-clicked"})(Ql||(Ql={}));/**
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
 */function ur(i){const e=new Uint8Array(i);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function YO(i){const e="=".repeat((4-i.length%4)%4),n=(i+e).replace(/\-/g,"+").replace(/_/g,"/"),s=atob(n),o=new Uint8Array(s.length);for(let u=0;u<s.length;++u)o[u]=s.charCodeAt(u);return o}/**
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
 */const im="fcm_token_details_db",GO=5,X0="fcm_token_object_Store";async function XO(i){if("databases"in indexedDB&&!(await indexedDB.databases()).map(u=>u.name).includes(im))return null;let e=null;return(await mh(im,GO,{upgrade:async(s,o,u,f)=>{if(o<2||!s.objectStoreNames.contains(X0))return;const m=f.objectStore(X0),g=await m.index("fcmSenderId").get(i);if(await m.clear(),!!g){if(o===2){const y=g;if(!y.auth||!y.p256dh||!y.endpoint)return;e={token:y.fcmToken,createTime:y.createTime??Date.now(),subscriptionOptions:{auth:y.auth,p256dh:y.p256dh,endpoint:y.endpoint,swScope:y.swScope,vapidKey:typeof y.vapidKey=="string"?y.vapidKey:ur(y.vapidKey)}}}else if(o===3){const y=g;e={token:y.fcmToken,createTime:y.createTime,subscriptionOptions:{auth:ur(y.auth),p256dh:ur(y.p256dh),endpoint:y.endpoint,swScope:y.swScope,vapidKey:ur(y.vapidKey)}}}else if(o===4){const y=g;e={token:y.fcmToken,createTime:y.createTime,subscriptionOptions:{auth:ur(y.auth),p256dh:ur(y.p256dh),endpoint:y.endpoint,swScope:y.swScope,vapidKey:ur(y.vapidKey)}}}}}})).close(),await Fd(im),await Fd("fcm_vapid_details_db"),await Fd("undefined"),KO(e)?e:null}function KO(i){if(!i||!i.subscriptionOptions)return!1;const{subscriptionOptions:e}=i;return typeof i.createTime=="number"&&i.createTime>0&&typeof i.token=="string"&&i.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const QO="firebase-messaging-database",$O=1,$l="firebase-messaging-store";let rm=null;function ib(){return rm||(rm=mh(QO,$O,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore($l)}}})),rm}async function ZO(i){const e=rb(i),s=await(await ib()).transaction($l).objectStore($l).get(e);if(s)return s;{const o=await XO(i.appConfig.senderId);if(o)return await kp(i,o),o}}async function kp(i,e){const n=rb(i),o=(await ib()).transaction($l,"readwrite");return await o.objectStore($l).put(e,n),await o.done,e}function rb({appConfig:i}){return i.appId}/**
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
 */const WO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},wn=new na("messaging","Messaging",WO);/**
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
 */async function JO(i,e){const n=await Lp(i),s=sb(e),o={method:"POST",headers:n,body:JSON.stringify(s)};let u;try{u=await(await fetch(xp(i.appConfig),o)).json()}catch(f){throw wn.create("token-subscribe-failed",{errorInfo:f==null?void 0:f.toString()})}if(u.error){const f=u.error.message;throw wn.create("token-subscribe-failed",{errorInfo:f})}if(!u.token)throw wn.create("token-subscribe-no-token");return u.token}async function eM(i,e){const n=await Lp(i),s=sb(e.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(s)};let u;try{u=await(await fetch(`${xp(i.appConfig)}/${e.token}`,o)).json()}catch(f){throw wn.create("token-update-failed",{errorInfo:f==null?void 0:f.toString()})}if(u.error){const f=u.error.message;throw wn.create("token-update-failed",{errorInfo:f})}if(!u.token)throw wn.create("token-update-no-token");return u.token}async function tM(i,e){const s={method:"DELETE",headers:await Lp(i)};try{const u=await(await fetch(`${xp(i.appConfig)}/${e}`,s)).json();if(u.error){const f=u.error.message;throw wn.create("token-unsubscribe-failed",{errorInfo:f})}}catch(o){throw wn.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function xp({projectId:i}){return`${BO}/projects/${i}/registrations`}async function Lp({appConfig:i,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function sb({p256dh:i,auth:e,endpoint:n,vapidKey:s}){const o={web:{endpoint:n,auth:e,p256dh:i}};return s!==tb&&(o.web.applicationPubKey=s),o}/**
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
 */const nM=7*24*60*60*1e3;async function iM(i){const e=await sM(i.swRegistration,i.vapidKey),n={vapidKey:i.vapidKey,swScope:i.swRegistration.scope,endpoint:e.endpoint,auth:ur(e.getKey("auth")),p256dh:ur(e.getKey("p256dh"))},s=await ZO(i.firebaseDependencies);if(s){if(aM(s.subscriptionOptions,n))return Date.now()>=s.createTime+nM?rM(i,{token:s.token,createTime:Date.now(),subscriptionOptions:n}):s.token;try{await tM(i.firebaseDependencies,s.token)}catch(o){console.warn(o)}return K0(i.firebaseDependencies,n)}else return K0(i.firebaseDependencies,n)}async function rM(i,e){try{const n=await eM(i.firebaseDependencies,e),s={...e,token:n,createTime:Date.now()};return await kp(i.firebaseDependencies,s),n}catch(n){throw n}}async function K0(i,e){const s={token:await JO(i,e),createTime:Date.now(),subscriptionOptions:e};return await kp(i,s),s.token}async function sM(i,e){const n=await i.pushManager.getSubscription();return n||i.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:YO(e)})}function aM(i,e){const n=e.vapidKey===i.vapidKey,s=e.endpoint===i.endpoint,o=e.auth===i.auth,u=e.p256dh===i.p256dh;return n&&s&&o&&u}/**
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
 */function Q0(i){const e={from:i.from,collapseKey:i.collapse_key,messageId:i.fcmMessageId};return oM(e,i),lM(e,i),uM(e,i),e}function oM(i,e){if(!e.notification)return;i.notification={};const n=e.notification.title;n&&(i.notification.title=n);const s=e.notification.body;s&&(i.notification.body=s);const o=e.notification.image;o&&(i.notification.image=o);const u=e.notification.icon;u&&(i.notification.icon=u)}function lM(i,e){e.data&&(i.data=e.data)}function uM(i,e){var o,u,f,m;if(!e.fcmOptions&&!((o=e.notification)!=null&&o.click_action))return;i.fcmOptions={};const n=((u=e.fcmOptions)==null?void 0:u.link)??((f=e.notification)==null?void 0:f.click_action);n&&(i.fcmOptions.link=n);const s=(m=e.fcmOptions)==null?void 0:m.analytics_label;s&&(i.fcmOptions.analyticsLabel=s)}/**
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
 */function cM(i){return typeof i=="object"&&!!i&&nb in i}/**
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
 */function hM(i){if(!i||!i.options)throw sm("App Configuration Object");if(!i.name)throw sm("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=i;for(const s of e)if(!n[s])throw sm(s);return{appName:i.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function sm(i){return wn.create("missing-app-config-values",{valueName:i})}/**
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
 */class fM{constructor(e,n,s){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=hM(e);this.firebaseDependencies={app:e,appConfig:o,installations:n,analyticsProvider:s}}_delete(){return Promise.resolve()}}/**
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
 */async function dM(i){try{i.swRegistration=await navigator.serviceWorker.register(zO,{scope:jO}),i.swRegistration.update().catch(()=>{}),await mM(i.swRegistration)}catch(e){throw wn.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function mM(i){return new Promise((e,n)=>{const s=setTimeout(()=>n(new Error(`Service worker not registered after ${Y0} ms`)),Y0),o=i.installing||i.waiting;i.active?(clearTimeout(s),e()):o?o.onstatechange=u=>{var f;((f=u.target)==null?void 0:f.state)==="activated"&&(o.onstatechange=null,clearTimeout(s),e())}:(clearTimeout(s),n(new Error("No incoming service worker found.")))})}/**
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
 */async function pM(i,e){if(!e&&!i.swRegistration&&await dM(i),!(!e&&i.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw wn.create("invalid-sw-registration");i.swRegistration=e}}/**
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
 */async function gM(i,e){e?i.vapidKey=e:i.vapidKey||(i.vapidKey=tb)}/**
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
 */async function yM(i,e){if(!navigator)throw wn.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw wn.create("permission-blocked");return await gM(i,e==null?void 0:e.vapidKey),await pM(i,e==null?void 0:e.serviceWorkerRegistration),iM(i)}/**
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
 */async function vM(i,e,n){const s=_M(e);(await i.firebaseDependencies.analyticsProvider.get()).logEvent(s,{message_id:n[nb],message_name:n[qO],message_time:n[HO],message_device_time:Math.floor(Date.now()/1e3)})}function _M(i){switch(i){case Ql.NOTIFICATION_CLICKED:return"notification_open";case Ql.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function TM(i,e){const n=e.data;if(!n.isFirebaseMessaging)return;i.onMessageHandler&&n.messageType===Ql.PUSH_RECEIVED&&(typeof i.onMessageHandler=="function"?i.onMessageHandler(Q0(n)):i.onMessageHandler.next(Q0(n)));const s=n.data;cM(s)&&s[FO]==="1"&&await vM(i,n.messageType,s)}const $0="@firebase/messaging",Z0="0.12.23";/**
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
 */const EM=i=>{const e=new fM(i.getProvider("app").getImmediate(),i.getProvider("installations-internal").getImmediate(),i.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>TM(e,n)),e},SM=i=>{const e=i.getProvider("messaging").getImmediate();return{getToken:s=>yM(e,s)}};function bM(){Pi(new oi("messaging",EM,"PUBLIC")),Pi(new oi("messaging-internal",SM,"PRIVATE")),Wn($0,Z0),Wn($0,Z0,"esm2020")}/**
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
 */async function wM(){try{await CT()}catch{return!1}return typeof window<"u"&&AT()&&q1()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function AM(i=Gm()){return wM().then(e=>{if(!e)throw wn.create("unsupported-browser")},e=>{throw wn.create("indexed-db-unsupported")}),vo(Jn(i),"messaging").getImmediate()}bM();const CM={apiKey:"AIzaSyCcq7F0omw0ZAwR_Ft5_fR3MBqzbui7Ghw",authDomain:"ribbon-hope-town.firebaseapp.com",projectId:"ribbon-hope-town",storageBucket:"ribbon-hope-town.firebasestorage.app",messagingSenderId:"886523116849",appId:"1:886523116849:web:1bfa88a130bc7b33d7c410",measurementId:"G-41SN0VSCZQ"},Up=IT(CM),Ph=x2(Up);WD(Up);AM(Up);const ab="employees",RM="meetingRooms",NM="facilityRooms",IM="points",DM="allPoints",OM="junctions",MM="allJunctions",zp=async i=>{try{console.log("getCollection",i);const e=await sS(KE(Ph,i)),n=[];return e.forEach(s=>{n.push({id:s.id,...s.data()})}),n}catch(e){throw console.error(`Error getting ${i} collection:`,e),e}},ob=async()=>zp(ab),PM=async i=>{try{const e=KE(Ph,ab),n=Q2(e,$2("email","==",i.toLowerCase()));return!(await sS(n)).empty}catch(e){throw console.error("Error checking employee existence:",e),e}},lb=async()=>zp(RM),ub=async()=>zp(NM),VM=async()=>xM(IM,DM),kM=async()=>LM(OM,MM),xM=async(i,e)=>{const n=QE(Ph,i,e),s={};try{const o=await iS(n);if(!o.exists())return{};const u=o.data();return Object.keys(u).forEach(f=>{const m=u[f];m&&Array.isArray(m.default)?s[f]=m.default:s[f]=[]}),s}catch(o){return console.error("Error getting document:",o),{}}},LM=async(i,e)=>{const n=QE(Ph,i,e),s={};try{const o=await iS(n);if(!o.exists())return{};const u=o.data();return Object.keys(u).forEach(f=>{const m=u[f];m&&typeof m.default=="object"?s[f]=m.default:s[f]={}}),s}catch(o){return console.error("Error getting document:",o),{}}return s};function Um(i,e,n,s,o){const u=new Map;if(n.forEach(U=>{u.set(U.label,U)}),!u.has(i)||!u.has(e))return null;if(i===e)return{path:[i],segments:[],totalDistance:0};const f=new Map,m=new Map,g=new Set,y=new Set;for(Object.entries(s).forEach(([U,Y])=>{y.add(U),Y.forEach(X=>y.add(X))}),y.forEach(U=>{f.set(U,U===i?0:1/0),m.set(U,null),g.add(U)});g.size>0;){let U=null,Y=1/0;for(const ie of g){const te=f.has(ie)?f.get(ie):1/0;te<Y&&(Y=te,U=ie)}if(!U||Y===1/0||(U!==null&&g.delete(U),U===e))break;const X=s[U]||[],ce=u.get(U);ce&&X.forEach(ie=>{if(!g.has(ie))return;const te=u.get(ie);if(!te)return;const _e=Math.sqrt(Math.pow(te.x-ce.x,2)+Math.pow(te.y-ce.y,2)),le=(f.get(U)||0)+_e;le<(f.get(ie)||1/0)&&(f.set(ie,le),m.set(ie,U))})}const T=[];let b=e;for(;b;)T.unshift(b),b=m.get(b)||null;if(i[0]===e[0]&&(T.length===0||T[0]!==i||T[T.length-1]!==e))return console.warn("Invalid path constructed:",T.length,T[0],i,T[T.length-1],e),null;const w=[];let k=0;for(let U=0;U<T.length-1;U++){const Y=u.get(T[U]),X=u.get(T[U+1]);if(Y&&X){const ce=Math.atan2(X.y-Y.y,X.x-Y.x),ie=Math.sqrt(Math.pow(X.x-Y.x,2)+Math.pow(X.y-Y.y,2));w.push({from:Y,to:X,angle:ce,floor:o}),k+=ie}}return{path:T,segments:w,totalDistance:k}}function UM(i,e,n,s,o,u,f,m){const g=[];f&&g.push("B1-2","B2-2"),m&&g.push("B3");let y=null;for(const T of g){const b=u[n],w=u[s];if(!b||!w)continue;const k=Um(i,T,o,b,n),U=Um(T,e,o,w,s);if(k&&U){const Y=k.totalDistance+U.totalDistance;(!y||Y<y.totalDistance)&&(y={path:[...k.path,...U.path.slice(1)],segments:[...k.segments,...U.segments],totalDistance:Y})}}return y}const zM=({segments:i,pathColor:e="#ff0000",pathWidth:n=2,showArrows:s=!0,arrowColor:o="#ff0000",showLine:u=!1,displayedFloor:f})=>R.jsx(R.Fragment,{children:i.filter(m=>m.floor===f).map((m,g)=>{const{from:y,to:T,angle:b}=m,w=Math.sqrt(Math.pow(T.x-y.x,2)+Math.pow(T.y-y.y,2)),k=(y.x+T.x)/2,U=(y.y+T.y)/2;return R.jsxs("div",{children:[u&&R.jsx("div",{style:{position:"absolute",left:`${y.x}%`,top:`${y.y}%`,width:`${w}%`,height:`${n}px`,backgroundColor:e,transformOrigin:"0 50%",transform:`translateY(-2px) rotate(${b}rad)`,pointerEvents:"none",zIndex:1e3}}),s&&R.jsx("div",{style:{position:"absolute",left:`${k}%`,top:`${U}%`,transform:`translate(-50%, -70%) rotate(${b}rad)`,pointerEvents:"none",zIndex:1001},children:R.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",children:R.jsx("polygon",{points:"0,10 15,5 10,10 15,15",fill:o,stroke:o,strokeWidth:"1"})})})]},g)})});function jM(i){const[e,n]=Wt.useState(null),[s,o]=Wt.useState(!1),[u,f]=Wt.useState({});ue.useEffect(()=>{(async()=>{try{const T=await kM();f(T)}catch(T){console.error("Error loading data:",T)}})()},[]);const m=Wt.useCallback((y,T,b,w,k,U)=>{o(!0);try{let Y=null;if(console.log("Debug - start and end",{startFloor:b,targetFloor:w}),b===w){const X=u[b];X&&(Y=Um(y,T,i,X,b),console.log("Debug - same floor"))}else console.log("Debug - between floors"),Y=UM(y,T,b,w,i,u,k,U);n(Y)}catch(Y){console.error("Pathfinding error:",Y),n(null)}finally{o(!1)}},[i]),g=Wt.useCallback(()=>{n(null)},[]);return{currentPath:e,isPathfinding:s,findAndSetPath:m,clearPath:g}}const BM=({showNavigation:i,isDevModeEnabled:e,targetRoom:n,setTargetRoom:s,myLocation:o,setMyLocation:u,startColor:f,targetColor:m,onClose:g})=>{const[y,T]=ue.useState(!1),[b,w]=ue.useState(!1),[k,U]=ue.useState(!1),Y=18,X=18,[ce,ie]=ue.useState(!1),te="#ff0000",_e=2,le=!1,[Se,M]=ue.useState(null),[A,I]=ue.useState(!0),[O,x]=ue.useState(!0),V=n?n.charAt(0):null,C=o?o.charAt(0):null,[Oe,Le]=ue.useState({}),[G,re]=ue.useState([]),[me,Pe]=ue.useState([]),[D,$]=ue.useState([]),[se,J]=ue.useState(""),[ge,Ce]=ue.useState([]),[pe,ot]=ue.useState(null);ue.useEffect(()=>{(async()=>{try{const ye=await VM(),Ue=await lb(),pt=await ub(),Je=await ob();Le(ye),re(Ue),Pe(pt),$(Je)}catch(ye){console.error("Error loading data:",ye)}})()},[]),console.log("Debug - ALL points from DB",Oe),ue.useEffect(()=>{M(V)},[V]);const Ge=()=>{M(ne=>ne===V?C:V)};ue.useEffect(()=>{dt()},[n,o]),ue.useEffect(()=>{localStorage.setItem("floorplan-start-color",f)},[f]),ue.useEffect(()=>{localStorage.setItem("floorplan-target-color",m)},[m]);const It=Wt.useMemo(()=>{const ne=[];return Object.values(Oe).flat().forEach(ye=>{!ye.label.startsWith("J")&&!ye.label.startsWith("B")&&ne.push(ye)}),G.forEach(ye=>ne.push(ye)),me.forEach(ye=>ne.push(ye)),D.forEach(ye=>ne.push(ye)),ne},[Oe,G,me,D]);Wt.useEffect(()=>{const ne=se.trim().toLowerCase();if(!ne){Ce([]);return}const ye=It.filter(Ue=>{if("Name"in Ue&&"roomNumber"in Ue){const pt=Ue.Name.toLowerCase(),Je=Ue.roomNumber.toLowerCase();return pt.includes(ne)||Je.includes(ne)}else if("Type"in Ue&&"roomNumber"in Ue){const pt=Ue.Type.toLowerCase(),Je=Ue.roomNumber.toLowerCase();return pt.includes(ne)||Je.includes(ne)}else if("firstName"in Ue&&"lastName"in Ue){const pt=Ue.firstName.toLowerCase(),Je=Ue.lastName.toLowerCase(),vn=Ue.seatNumber.toLowerCase(),ln=`${pt} ${Je}`,mt=`${Je} ${pt}`;return pt.includes(ne)||Je.includes(ne)||vn.includes(ne)||ln.includes(ne)||mt.includes(ne)}else if("label"in Ue)return Ue.label.toLowerCase().includes(ne);return!1});Ce(ye)},[se,It]);const oe=Se?Oe[Se]??[]:[],Ve=oe.filter(ne=>!ne.label.startsWith("J")&&!ne.label.startsWith("B")),We=oe.filter(ne=>ne.label.startsWith("J")||ne.label.startsWith("B")),lt=oe.filter(ne=>ne.label.startsWith("Meeting")),gn=Object.values(Oe).flat().filter(ne=>ne.label.startsWith("J")||ne.label.startsWith("B")),{currentPath:ut,isPathfinding:Jt,findAndSetPath:ra,clearPath:yr}=jM(gn),vr=(()=>{switch(Se){case"1":return"/floor-plan-app/FloorPlan_1_clear.png";case"2":return"/floor-plan-app/FloorPlan_2_clear.png";case"3":return"/floor-plan-app/FloorPlan_3_clear.png";case"4":return"/floor-plan-app/FloorPlan_4 - Copy.png";default:return"/floor-plan-app/FloorPlan_4 - Copy.png"}})(),xi=ne=>y||ne===o||ne===n,ms=ne=>ne===o?f:ne===n?m:"red",In=ne=>ne===o?Y:ne===n?X:8,Li=Wt.useCallback((ne,ye)=>{if(!ye)return null;const Ue=Oe[ye]??[],pt=Ue.filter(mt=>mt.label.startsWith("J")||mt.label.startsWith("B")),Je=Ue.find(mt=>mt.label===ne);if(!Je)return null;let vn=null,ln=1/0;return pt.forEach(mt=>{const _n=Math.sqrt(Math.pow(mt.x-Je.x,2)+Math.pow(mt.y-Je.y,2));_n<ln&&(ln=_n,vn=mt.label)}),vn},[Oe]),sa=Wt.useCallback(()=>{if(console.log("Debug - handleFindPath called"),!o||!n)return;const ne=Li(o,C),ye=Li(n,V);console.log("Debug - Found junctions:",{startJunction:ne,targetJunction:ye}),!(!ne||!ye||!V||!C)&&ne!==ye&&(ra(ye,ne,V,C,A,O),M(C),ie(!0))},[o,n,Li,ra,C,V,A,O]),dt=Wt.useCallback(()=>{yr(),ie(!1)},[yr]),Qe=ne=>{J(ne.target.value),pe&&ot(null)},yn=ne=>{ot(ne),"label"in ne?(s(ne.label),J(ne.label)):"Name"in ne?(s(ne.roomNumber),J(ne.Name)):"Type"in ne?(s(ne.roomNumber),J(ne.Type)):"firstName"in ne&&(s(ne.seatNumber),J(`${ne.firstName} ${ne.lastName}`)),Ce([])},Yt=()=>{ot(null),s(""),J("")},aa=se.trim()&&ge.length>0&&!pe;return R.jsx("div",{className:"floor-plan-container",children:R.jsxs("div",{className:"floor-plan-content",children:[R.jsxs("div",{className:"floor-plan-header",children:[R.jsx("div",{className:"floor-plan-header-icon-wrapper",children:R.jsx(tA,{className:"floor-plan-header-icon"})}),R.jsx("h2",{className:"floor-plan-title",children:"Floor Map"}),g&&R.jsx("button",{onClick:g,className:"floor-plan-close-button","aria-label":"Close floor plan",children:R.jsx(eo,{size:20})})]}),R.jsxs("div",{className:"floor-plan-controls",children:[R.jsxs("div",{className:"floor-plan-room-input",children:[R.jsx("label",{className:"floor-plan-label",children:"Target Room"}),R.jsxs("div",{className:"floor-plan-input-wrapper",children:[R.jsx(tT,{className:"floor-plan-search-icon"}),R.jsx("input",{type:"text",placeholder:"Search rooms...",value:pe?"Name"in pe?pe.Name:"Type"in pe?pe.Type:"firstName"in pe?`${pe.firstName} ${pe.lastName}`:pe.label:se,onChange:Qe,className:"floor-plan-input"}),pe&&R.jsx("button",{className:"clear-search-button",onClick:Yt,"aria-label":"Clear target room selection",children:R.jsx(eo,{className:"floor-plan-search-icon"})})]}),aa&&R.jsx("div",{className:"floor-plan-search-results-container",children:ge.map((ne,ye)=>R.jsx("div",{onClick:()=>yn(ne),className:"floor-plan-search-result-item",children:"Name"in ne?R.jsxs(R.Fragment,{children:[R.jsx(Gc,{size:16}),R.jsxs("span",{children:[ne.Name," (",ne.roomNumber,")"]})]}):"Type"in ne?R.jsxs(R.Fragment,{children:[R.jsx(Gc,{size:16}),R.jsxs("span",{children:[ne.Type," (",ne.roomNumber,")"]})]}):"firstName"in ne?R.jsxs(R.Fragment,{children:[R.jsx(nT,{size:16}),R.jsxs("span",{children:[ne.firstName," ",ne.lastName," (",ne.seatNumber,")"]})]}):R.jsx("span",{children:ne.label})},ye))})]}),R.jsxs("div",{className:"floor-plan-room-input",children:[R.jsx("label",{className:"floor-plan-label",children:"My Location"}),R.jsx("div",{className:"floor-plan-input-wrapper",children:R.jsx("input",{type:"text",placeholder:"e.g., 4N05A",value:o,onChange:ne=>u(ne.target.value.toUpperCase().replace(/\s+/g,"")),className:"floor-plan-input"})})]}),i&&R.jsxs("div",{className:"floor-plan-pathfinding-controls",children:[R.jsxs("button",{onClick:sa,disabled:Jt||!o||!n,className:"floor-plan-path-button",children:[R.jsx(sA,{size:16}),Jt?"Finding Path...":"Find Path"]}),ut&&R.jsxs("button",{onClick:dt,className:"floor-plan-clear-button",children:[R.jsx(iA,{size:16}),"Clear Path"]}),C&&V&&C!==V&&R.jsxs("div",{className:"floor-plan-checkbox-group",children:[R.jsxs("label",{className:"floor-plan-checkbox",children:[R.jsx("input",{type:"checkbox",checked:A,onChange:ne=>I(ne.target.checked)}),"Use Stairs"]}),R.jsxs("label",{className:"floor-plan-checkbox",children:[R.jsx("input",{type:"checkbox",checked:O,onChange:ne=>x(ne.target.checked)}),"Use Elevator"]})]})]})]}),R.jsx("div",{className:"floor-plan-legend",children:R.jsx("div",{className:"floor-plan-legend-list"})}),i&&ut&&e&&R.jsxs("div",{className:"floor-plan-path-info",children:[R.jsxs("p",{children:["Path found: ",ut.path.length," junctions"]}),R.jsxs("p",{children:["Route: ",ut.path.join(" → ")]})]}),R.jsx("div",{className:"floor-plan-frame",children:R.jsx(v1,{initialScale:1,centerOnInit:!0,limitToBounds:!1,minScale:.2,maxScale:10,wheel:{step:50},doubleClick:{disabled:!0},children:({resetTransform:ne})=>R.jsxs(R.Fragment,{children:[R.jsx("button",{className:"fit-to-view-button",onClick:()=>ne(),children:"Fit to view"}),C&&V&&C!==V&&R.jsxs("button",{onClick:Ge,className:"fit-to-view-button",children:["Switch to Floor ",Se===V?C:V]}),R.jsx("button",{onClick:()=>U(!k),children:k?"Hide Meeting Rooms":"Show Meeting Rooms"}),e&&R.jsxs(R.Fragment,{children:[R.jsx("button",{onClick:()=>T(!y),children:y?"Hide Points":"Show Points"}),R.jsx("button",{onClick:()=>w(!b),children:b?"Hide Junctions":"Show Junctions"})]}),R.jsx(E1,{children:R.jsxs("div",{className:"floor-plan-image-zommable-content",children:[R.jsx("img",{src:vr,alt:"Floor Plan",className:"floor-plan-image",style:{width:"100%",height:"auto",objectFit:"contain"}}),i&&ce&&ut&&R.jsx(zM,{segments:ut.segments,pathColor:te,pathWidth:_e,showArrows:!0,showLine:le,arrowColor:te,displayedFloor:Se}),i&&ce&&ut&&ut.path.length>0&&(()=>{const ye=ut.path[0],Ue=ut.path[ut.path.length-1],pt=We.find(mt=>mt.label===ye),Je=We.find(mt=>mt.label===Ue);let vn=ut.path.find((mt,_n)=>!!(mt.startsWith("B")&&_n>0&&_n<ut.path.length-1&&ut.path[_n-1][1]!==ut.path[_n+1][1]));vn||(vn=ut.path.filter(_n=>_n.startsWith("B"))[0]);const ln=We.find(mt=>mt.label===vn);return R.jsxs(R.Fragment,{children:[pt&&R.jsx("div",{style:{position:"absolute",left:`${pt.x}%`,top:`${pt.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:"blue",borderRadius:"5%",width:"6px",height:"6px",pointerEvents:"none",zIndex:999}}),Je&&R.jsx("div",{style:{position:"absolute",left:`${Je.x}%`,top:`${Je.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:"blue",borderRadius:"5%",width:"6px",height:"6px",pointerEvents:"none",zIndex:999}}),ln&&R.jsx("div",{style:{position:"absolute",left:`${ln.x}%`,top:`${ln.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:"green",borderRadius:"5%",width:"6px",height:"6px",pointerEvents:"none",zIndex:999}})]})})(),Ve.map((ye,Ue)=>xi(ye.label)?R.jsx("div",{className:"point",style:{position:"absolute",left:`${ye.x}%`,top:`${ye.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:ms(ye.label),borderRadius:"50%",width:`${In(ye.label)}px`,height:`${In(ye.label)}px`,zIndex:1002},children:R.jsx("span",{className:"tooltip",children:ye.label})},Ue):null),We.map((ye,Ue)=>b?R.jsx("div",{style:{position:"absolute",left:`${ye.x}%`,top:`${ye.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:ms(ye.label),borderRadius:"50%",width:`${In(ye.label)}px`,height:`${In(ye.label)}px`,pointerEvents:"none",zIndex:1002,display:"flex",alignItems:"center",justifyContent:"center",color:"black",fontSize:"10px",textAlign:"center",whiteSpace:"nowrap"},children:R.jsx("span",{style:{marginTop:`${ye.y+100}%`},children:ye.label})},Ue):null),lt.map((ye,Ue)=>k?R.jsx("div",{style:{position:"absolute",left:`${ye.x}%`,top:`${ye.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:ms(ye.label),borderRadius:"50%",width:`${In(ye.label)}px`,height:`${In(ye.label)}px`,pointerEvents:"none",zIndex:1002,display:"flex",alignItems:"center",justifyContent:"center",color:"black",fontSize:"10px",textAlign:"center",whiteSpace:"nowrap"},children:R.jsx("span",{style:{marginTop:`${ye.y+100}%`},children:ye.label})},Ue):null)]})})]})})})]})})},qM=({onShowOnMap:i})=>{const[e,n]=ue.useState(""),[s,o]=ue.useState(null),[u,f]=ue.useState(null),[m,g]=ue.useState(null),[y,T]=ue.useState("firstName"),[b,w]=ue.useState("asc"),[k,U]=ue.useState(()=>localStorage.getItem("myLocation")||""),[Y,X]=ue.useState(!1),[ce,ie]=ue.useState(!1),[te,_e]=ue.useState(!1),[le,Se]=ue.useState(k),[M,A]=ue.useState([]),[I,O]=ue.useState([]),[x,V]=ue.useState([]);ue.useEffect(()=>{(async()=>{try{const Ve=await ob(),We=await lb(),lt=await ub();A(Ve),O(We),V(lt)}catch(Ve){console.error("Error loading data:",Ve)}})()},[]);const C=ue.useMemo(()=>{s&&o(null);const oe=e.trim().toLowerCase();return oe?M.filter(We=>{const lt=We.firstName.toLowerCase(),Ft=We.lastName.toLowerCase(),gn=We.seatNumber.toLowerCase(),ut=`${lt} ${Ft}`,Jt=`${Ft} ${lt}`;return lt.includes(oe)||Ft.includes(oe)||gn.includes(oe)||ut.includes(oe)||Jt.includes(oe)}).sort((We,lt)=>{let Ft,gn;switch(y){case"firstName":Ft=We.firstName.toLowerCase(),gn=lt.firstName.toLowerCase();break;case"lastName":Ft=We.lastName.toLowerCase(),gn=lt.lastName.toLowerCase();break;case"seat":Ft=We.seatNumber.toLowerCase(),gn=lt.seatNumber.toLowerCase();break;default:Ft=We.firstName.toLowerCase(),gn=lt.firstName.toLowerCase()}const ut=Ft.localeCompare(gn);return b==="asc"?ut:-ut}):[]},[e,M,y,b]),Oe=ue.useMemo(()=>{u&&f(null);const oe=e.trim().toLowerCase();return oe?I.filter(Ve=>{const We=Ve.Name.toLowerCase(),lt=Ve.roomNumber.toLowerCase();return We.includes(oe)||lt.includes(oe)}):[]},[e]),Le=ue.useMemo(()=>{m&&g(null);const oe=e.trim().toLowerCase();return oe?x.filter(Ve=>{const We=Ve.Type.toLowerCase(),lt=Ve.roomNumber.toLowerCase();return We.includes(oe)||lt.includes(oe)}):[]},[e]),G=oe=>{te&&Oe.length===0&&_e(!1),n(oe.target.value),console.log("Debug - search value",oe.target.value,"xx ",Oe.length,C.length,Le.length,{showOnlyMeetingRooms:te})},re=()=>n(""),me=oe=>{o(oe),f(null),g(null)},Pe=oe=>{f(oe),g(null),o(null)},D=oe=>{f(null),g(oe),o(null)},$=()=>{o(null),g(null),f(null)},se=oe=>{T(oe.target.value)},J=oe=>{w(oe.target.value)},ge=e.trim()&&(te&&Oe.length>0||!te&&(C.length>0||Oe.length>0||Le.length>0))&&!s&&!u&&!m,Ce=()=>{Se(k),ie(!0)},pe=()=>{U(le),localStorage.setItem("myLocation",le),ie(!1),Y&&(s!==null?i(s.seatNumber,le):u!=null&&u.roomNumber?i(u.roomNumber,le):i("",le))},ot=oe=>{const Ve=oe.target.checked;X(Ve),Ve&&k!==""?s!==null?i(s.seatNumber,k):u!=null&&u.roomNumber?i(u.roomNumber,k):i("",k):Ve||Se("")},Ge=oe=>{const Ve=oe.target.checked;_e(Ve)},It=()=>{console.log("debug - show on map",{searchValue:e,myLocation:k},u==null?void 0:u.roomNumber,m==null?void 0:m.roomNumber);let oe="";Y&&(oe=k),s!==null?i(s.seatNumber,oe):u!=null&&u.roomNumber?i(u.roomNumber,oe):m!=null&&m.roomNumber?i(m.roomNumber,oe):i("",oe)};return R.jsx("div",{className:"seat-finder-container",children:R.jsxs("div",{className:"seat-finder-content",children:[R.jsxs("div",{className:"seat-finder-header",children:[R.jsx("h2",{className:"seat-finder-title",children:"Seat Finder"}),R.jsx("p",{className:"seat-finder-subtitle",children:"Find colleagues and meeting rooms"})]}),R.jsxs("div",{className:"search-section",children:[R.jsxs("div",{className:"search-input-wrapper",children:[R.jsx("div",{className:"search-icon-container",children:R.jsx(tT,{className:"search-icon"})}),R.jsx("input",{type:"text",placeholder:"Search by name, seat, or room...",value:e,onChange:G,className:"search-input"}),e&&R.jsx("button",{className:"clear-search-button",onClick:re,"aria-label":"Clear search",children:R.jsx(eo,{className:"search-icon"})})]}),s&&R.jsxs("div",{className:"selected-employee-container",children:[R.jsxs("div",{className:"selected-employee-info-wrapper",children:[R.jsxs("div",{className:"selected-employee-details",children:[R.jsx("div",{className:"selected-employee-icon-wrapper",children:R.jsx(nT,{className:"selected-employee-icon"})}),R.jsxs("div",{children:[R.jsxs("div",{className:"selected-employee-name",children:[s.firstName," ",s.lastName]}),R.jsxs("div",{className:"selected-employee-department",children:[s.department," • Seat ",s.seatNumber]})]})]}),R.jsx("button",{onClick:$,className:"selected-employee-close-button",children:R.jsx(eo,{className:"selected-employee-close-icon"})})]}),(s.floor===4||s.floor===3||s.floor===2||s.floor===1)&&R.jsx("button",{className:"map-toggle-button",onClick:It,children:"Show on Map"})]}),u&&R.jsxs("div",{className:"selected-employee-container",children:[R.jsxs("div",{className:"selected-employee-info-wrapper",children:[R.jsxs("div",{className:"selected-employee-details",children:[R.jsx("div",{className:"selected-employee-icon-wrapper",children:R.jsx(Gc,{className:"selected-employee-icon"})}),R.jsxs("div",{children:[R.jsx("div",{className:"selected-employee-name",children:u.Name}),R.jsxs("div",{className:"selected-employee-department",children:["Room ",u.roomNumber," • Floor ",u.floor," • Wing ",u.wing," • Capacity ",u.capacity," • ",u.Type," Room"]})]})]}),R.jsx("button",{onClick:$,className:"selected-employee-close-button",children:R.jsx(eo,{className:"selected-employee-close-icon"})})]}),(u.floor===4||u.floor===3||u.floor===2||u.floor===1)&&R.jsx("button",{className:"map-toggle-button",onClick:It,children:"Show on Map"})]}),m&&R.jsxs("div",{className:"selected-employee-container",children:[R.jsxs("div",{className:"selected-employee-info-wrapper",children:[R.jsxs("div",{className:"selected-employee-details",children:[R.jsx("div",{className:"selected-employee-icon-wrapper",children:R.jsx(Gc,{className:"selected-employee-icon"})}),R.jsxs("div",{children:[R.jsx("div",{className:"selected-employee-name",children:m.Type}),R.jsxs("div",{className:"selected-employee-department",children:["Room ",R.jsx("strong",{children:m.roomNumber})," • Floor ",m.floor," • Wing ",m.wing]})]})]}),R.jsx("button",{onClick:$,className:"selected-employee-close-button",children:R.jsx(eo,{className:"selected-employee-close-icon"})})]}),(m.floor===4||m.floor===3||m.floor===2||m.floor===1)&&R.jsx("button",{className:"map-toggle-button",onClick:It,children:"Show on Map"})]}),ge&&R.jsxs("div",{className:"search-results-container",children:[R.jsxs("div",{className:"search-results-header",children:[R.jsxs("div",{children:[R.jsxs("h4",{className:"search-results-title",children:["Search Results (",C.length+Oe.length+Le.length,")"]}),(C.length>0||Le.length>0)&&Oe.length>0&&R.jsx("div",{className:"sort-control",children:R.jsxs("label",{children:[R.jsx("input",{type:"checkbox",checked:te,onChange:Ge}),"Only meeting rooms"]})})]}),R.jsxs("div",{className:"sorting-controls",children:[R.jsxs("div",{className:"sort-control",children:[R.jsx("label",{htmlFor:"sort-by",className:"sort-label",children:"Sort by:"}),R.jsxs("select",{id:"sort-by",value:y,onChange:se,className:"sort-select",children:[R.jsx("option",{value:"firstName",children:"First Name"}),R.jsx("option",{value:"lastName",children:"Last Name"}),R.jsx("option",{value:"seat",children:"Seat"})]})]}),R.jsxs("div",{className:"sort-control",children:[R.jsx("label",{htmlFor:"order-by",className:"sort-label",children:"Order by:"}),R.jsxs("select",{id:"order-by",value:b,onChange:J,className:"sort-select",children:[R.jsx("option",{value:"asc",children:"A to Z"}),R.jsx("option",{value:"desc",children:"Z to A"})]})]})]})]}),R.jsxs("div",{className:"search-results-list",children:[!te&&C.map((oe,Ve)=>R.jsx("div",{onClick:()=>{me(oe)},className:"search-result-item group",children:R.jsxs("div",{className:"search-result-content",children:[R.jsxs("div",{className:"search-result-employee-info",children:[R.jsx("div",{className:"search-result-avatar-wrapper",children:R.jsxs("span",{className:"search-result-avatar-text",children:[oe.firstName[0],oe.lastName[0]]})}),R.jsxs("div",{children:[R.jsxs("div",{className:"search-result-name",children:[oe.firstName," ",oe.lastName]}),R.jsx("div",{className:"search-result-department",children:oe.department})]})]}),R.jsxs("div",{className:"search-result-location",children:[R.jsxs("div",{className:"search-result-seat",children:[R.jsx(Ud,{className:"search-result-map-pin-icon"}),oe.seatNumber]}),R.jsxs("div",{className:"search-result-floor-wing",children:["Floor ",oe.floor," • Wing ",oe.wing]})]})]})},Ve)),Oe.map((oe,Ve)=>R.jsx("div",{onClick:()=>Pe(oe),className:"search-result-item group",children:R.jsxs("div",{className:"search-result-content",children:[R.jsxs("div",{className:"search-result-employee-info",children:[R.jsx("div",{className:"search-result-avatar-wrapper",children:R.jsx("span",{className:"search-result-avatar-text",children:oe.Name[0]})}),R.jsxs("div",{children:[R.jsx("div",{className:"search-result-name",children:oe.Name}),R.jsxs("div",{className:"search-result-department",children:[oe.Type," Room • Capacity ",oe.capacity]})]})]}),R.jsxs("div",{className:"search-result-location",children:[R.jsxs("div",{className:"search-result-seat",children:[R.jsx(Ud,{className:"search-result-map-pin-icon"}),oe.roomNumber]}),R.jsxs("div",{className:"search-result-floor-wing",children:["Floor ",oe.floor," • Wing ",oe.wing]})]})]})},Ve)),!te&&Le.map((oe,Ve)=>R.jsx("div",{onClick:()=>D(oe),className:"search-result-item group",children:R.jsxs("div",{className:"search-result-content",children:[R.jsxs("div",{className:"search-result-employee-info",children:[R.jsx("div",{className:"search-result-avatar-wrapper",children:R.jsx("span",{className:"search-result-avatar-text",children:oe.Type[0]})}),R.jsx("div",{children:R.jsx("div",{className:"search-result-name",children:oe.Type})})]}),R.jsxs("div",{className:"search-result-location",children:[R.jsxs("div",{className:"search-result-seat",children:[R.jsx(Ud,{className:"search-result-map-pin-icon"}),oe.roomNumber]}),R.jsxs("div",{className:"search-result-floor-wing",children:["Floor ",oe.floor," • Wing ",oe.wing]})]})]})},Ve))]})]}),R.jsxs("div",{className:"my-location-controls",style:{display:"flex",alignItems:"center",gap:"1rem",marginTop:"0.5rem"},children:[k!==""&&R.jsxs("label",{children:[R.jsx("input",{type:"checkbox",checked:Y,onChange:ot})," ","show my location (",k,")"]}),R.jsx("button",{className:"set-location-button",onClick:Ce,disabled:ce,children:k===""?"set my location":"edit my location"})]}),ce&&R.jsxs("div",{className:"my-location-input",style:{marginTop:"0.5rem",display:"flex",gap:"0.5rem"},children:[R.jsx("input",{type:"text",value:le,onChange:oe=>Se(oe.target.value.toUpperCase().replace(/\s+/g,"")),placeholder:"Location not defined",style:{flex:1,padding:"0.5rem",borderRadius:"0.5rem",border:"1px solid #ccc"}}),R.jsx("button",{onClick:pe,children:"Save"})]}),e.trim()&&C.length===0&&Oe.length===0&&Le.length===0&&!s&&!u&&!m&&R.jsxs("div",{className:"no-employees-found-container",children:[R.jsx("div",{className:"no-employees-found-message",children:"No results found matching your search"}),R.jsx("div",{className:"no-employees-found-tip",children:"Try searching by name or seat number"})]})]})]})})},HM="1.0.5",FM="15/09/2025",W0={version:HM,date:FM},cb=ue.createContext(void 0),YM=({children:i})=>{const[e,n]=ue.useState(null);ue.useEffect(()=>{const u=localStorage.getItem("loggedInUser");u&&n(u)},[]);const s=u=>{localStorage.setItem("loggedInUser",u),n(u)},o=()=>{localStorage.removeItem("loggedInUser"),n(null)};return R.jsx(cb.Provider,{value:{user:e,login:s,logout:o},children:i})},hb=()=>{const i=ue.useContext(cb);if(i===void 0)throw new Error("useAuth must be used within an AuthProvider");return i},GM=({setStartColor:i,setTargetColor:e,showNavigation:n,setShowNavigation:s,isDevModeEnabled:o,setDevModeEnabled:u})=>{const{user:f,logout:m}=hb(),[g,y]=ue.useState(!1),[T,b]=ue.useState(!1),[w,k]=ue.useState(!1),[U,Y]=ue.useState(!1),X=ue.useRef(null),ce=()=>y(!g),ie=()=>{k(le=>!le)},te=le=>{X.current&&!X.current.contains(le.target)&&y(!1)},_e=()=>{localStorage.removeItem("floorplan-start-color"),localStorage.removeItem("floorplan-target-color"),i&&i("#0000ff"),e&&e("#000000"),y(!1)};return ue.useEffect(()=>(document.addEventListener("mousedown",te),()=>document.removeEventListener("mousedown",te)),[]),R.jsxs("header",{className:"header",children:[R.jsxs("div",{className:"header-left",dir:"ltr",ref:X,children:[R.jsx("button",{className:"menu-button",onClick:ce,"aria-label":"Menu",children:R.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[R.jsx("line",{x1:"4",x2:"20",y1:"12",y2:"12"}),R.jsx("line",{x1:"4",x2:"20",y1:"6",y2:"6"}),R.jsx("line",{x1:"4",x2:"20",y1:"18",y2:"18"})]})}),g&&R.jsxs("div",{className:"menu-dropdown",children:[R.jsx("div",{onClick:_e,children:"Restore Default Colors"}),R.jsx("div",{onClick:()=>{b(!0),y(!1)},children:"About"}),R.jsx("div",{onClick:ie,children:"Settings ▸"}),w&&R.jsxs(R.Fragment,{children:[R.jsx("div",{className:"submenu",onClick:()=>{s(!n),y(!1),k(!1)},children:n?"Hide Navigation":"Show Navigation"}),R.jsx("div",{className:"submenu",onClick:()=>{u(!o),y(!1),k(!1)},children:o?"Close Dev Mode":"Enable Dev Mode"})]}),R.jsxs("div",{onClick:()=>{Y(!0),y(!1)},children:["Logout (",f==null?void 0:f.toLowerCase(),")"]})]})]}),U&&R.jsx("div",{className:"modal-overlay",onClick:()=>Y(!1),children:R.jsxs("div",{className:"about-modal-content",onClick:le=>le.stopPropagation(),children:[R.jsx("h2",{children:"Confirm Logout"}),R.jsx("p",{children:"Do you want to logout?"}),R.jsx("button",{onClick:()=>{m(),Y(!1)},className:"confirm-button",children:"Yes"}),R.jsx("button",{onClick:()=>Y(!1),className:"cancel-button",children:"No"})]})}),T&&R.jsx("div",{className:"modal-overlay",onClick:()=>b(!1),children:R.jsxs("div",{className:"about-modal-content",onClick:le=>le.stopPropagation(),children:[R.jsx("h2",{children:"Seat Finder"}),R.jsxs("p",{children:["Version: ",W0.version]}),R.jsxs("p",{children:["Date: ",W0.date]}),R.jsx("button",{onClick:()=>b(!1),className:"about-close-button",children:"Close"})]})})]})},XM=({onLogin:i,errorMessage:e})=>{const[n,s]=ue.useState(""),o=u=>{u.preventDefault(),i(n)};return R.jsx("div",{className:"login-dialog-overlay",children:R.jsxs("div",{className:"login-dialog",children:[R.jsx("h2",{children:"Login"}),R.jsxs("form",{onSubmit:o,children:[R.jsxs("div",{className:"form-group",children:[R.jsx("label",{htmlFor:"email",children:"Email:"}),R.jsx("input",{type:"email",id:"email",value:n,onChange:u=>s(u.target.value),required:!0})]}),e&&R.jsx("p",{className:"error-message",children:e}),R.jsx("button",{type:"submit",children:"Login"})]})]})})},KM=()=>{const{user:i,login:e}=hb(),[n,s]=ue.useState(!1),[o,u]=ue.useState(!0),[f,m]=ue.useState(!1),[g,y]=ue.useState(""),[T,b]=ue.useState(""),[w,k]=ue.useState(()=>localStorage.getItem("floorplan-target-color")||"#000000"),[U,Y]=ue.useState(()=>localStorage.getItem("floorplan-start-color")||"#0000ff"),X=ue.useRef(null),[ce,ie]=ue.useState(null);ue.useEffect(()=>{n&&X.current&&X.current.scrollIntoView({behavior:"smooth"})},[n]);const te=async _e=>{await PM(_e)?(e(_e),ie(null)):ie("No such user/email found.")};return i?R.jsxs(R.Fragment,{children:[R.jsx(GM,{setStartColor:Y,setTargetColor:k,showNavigation:o,setShowNavigation:u,isDevModeEnabled:f,setDevModeEnabled:m}),R.jsx(qM,{searchValue:g,setSearchValue:y,onShowOnMap:(_e,le)=>{y(_e),b(le),s(!0)}}),n&&R.jsx("div",{ref:X,children:R.jsx(BM,{showNavigation:o,isDevModeEnabled:f,targetRoom:g.trim(),setTargetRoom:y,myLocation:T.trim(),setMyLocation:b,startColor:U,setStartColor:Y,targetColor:w,setTargetColor:k,onClose:()=>{console.log("Floor plan closed"),s(!1)}})})]}):R.jsx(XM,{onLogin:te,errorMessage:ce})},QM=()=>R.jsx(YM,{children:R.jsx(KM,{})}),$M=Gw.createRoot(document.getElementById("root"));$M.render(R.jsx(Wt.StrictMode,{children:R.jsx(QM,{})}));
