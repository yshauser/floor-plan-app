(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function J0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Od={exports:{}},wl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv;function Mw(){if(Qv)return wl;Qv=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:i,type:s,key:f,ref:o!==void 0?o:null,props:u}}return wl.Fragment=e,wl.jsx=n,wl.jsxs=n,wl}var $v;function Pw(){return $v||($v=1,Od.exports=Mw()),Od.exports}var D=Pw(),Md={exports:{}},Ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zv;function Vw(){if(Zv)return Ie;Zv=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),b=Symbol.iterator;function w(I){return I===null||typeof I!="object"?null:(I=b&&I[b]||I["@@iterator"],typeof I=="function"?I:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,Y={};function G(I,$,se){this.props=I,this.context=$,this.refs=Y,this.updater=se||k}G.prototype.isReactComponent={},G.prototype.setState=function(I,$){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,$,"setState")},G.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function ue(){}ue.prototype=G.prototype;function ie(I,$,se){this.props=I,this.context=$,this.refs=Y,this.updater=se||k}var te=ie.prototype=new ue;te.constructor=ie,U(te,G.prototype),te.isPureReactComponent=!0;var ge=Array.isArray,oe={H:null,A:null,T:null,S:null,V:null},be=Object.prototype.hasOwnProperty;function V(I,$,se,J,pe,Ce){return se=Ce.ref,{$$typeof:i,type:I,key:$,ref:se!==void 0?se:null,props:Ce}}function A(I,$){return V(I.type,$,void 0,void 0,void 0,I.props)}function N(I){return typeof I=="object"&&I!==null&&I.$$typeof===i}function O(I){var $={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(se){return $[se]})}var M=/\/+/g;function x(I,$){return typeof I=="object"&&I!==null&&I.key!=null?O(""+I.key):$.toString(36)}function C(){}function Ge(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(C,C):(I.status="pending",I.then(function($){I.status==="pending"&&(I.status="fulfilled",I.value=$)},function($){I.status==="pending"&&(I.status="rejected",I.reason=$)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function Me(I,$,se,J,pe){var Ce=typeof I;(Ce==="undefined"||Ce==="boolean")&&(I=null);var Te=!1;if(I===null)Te=!0;else switch(Ce){case"bigint":case"string":case"number":Te=!0;break;case"object":switch(I.$$typeof){case i:case e:Te=!0;break;case T:return Te=I._init,Me(Te(I._payload),$,se,J,pe)}}if(Te)return pe=pe(I),Te=J===""?"."+x(I,0):J,ge(pe)?(se="",Te!=null&&(se=Te.replace(M,"$&/")+"/"),Me(pe,$,se,"",function(Pt){return Pt})):pe!=null&&(N(pe)&&(pe=A(pe,se+(pe.key==null||I&&I.key===pe.key?"":(""+pe.key).replace(M,"$&/")+"/")+Te)),$.push(pe)),1;Te=0;var it=J===""?".":J+":";if(ge(I))for(var Le=0;Le<I.length;Le++)J=I[Le],Ce=it+x(J,Le),Te+=Me(J,$,se,Ce,pe);else if(Le=w(I),typeof Le=="function")for(I=Le.call(I),Le=0;!(J=I.next()).done;)J=J.value,Ce=it+x(J,Le++),Te+=Me(J,$,se,Ce,pe);else if(Ce==="object"){if(typeof I.then=="function")return Me(Ge(I),$,se,J,pe);throw $=String(I),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return Te}function X(I,$,se){if(I==null)return I;var J=[],pe=0;return Me(I,J,"","",function(Ce){return $.call(se,Ce,pe++)}),J}function ne(I){if(I._status===-1){var $=I._result;$=$(),$.then(function(se){(I._status===0||I._status===-1)&&(I._status=1,I._result=se)},function(se){(I._status===0||I._status===-1)&&(I._status=2,I._result=se)}),I._status===-1&&(I._status=0,I._result=$)}if(I._status===1)return I._result.default;throw I._result}var me=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function Pe(){}return Ie.Children={map:X,forEach:function(I,$,se){X(I,function(){$.apply(this,arguments)},se)},count:function(I){var $=0;return X(I,function(){$++}),$},toArray:function(I){return X(I,function($){return $})||[]},only:function(I){if(!N(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Ie.Component=G,Ie.Fragment=n,Ie.Profiler=o,Ie.PureComponent=ie,Ie.StrictMode=s,Ie.Suspense=g,Ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=oe,Ie.__COMPILER_RUNTIME={__proto__:null,c:function(I){return oe.H.useMemoCache(I)}},Ie.cache=function(I){return function(){return I.apply(null,arguments)}},Ie.cloneElement=function(I,$,se){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var J=U({},I.props),pe=I.key,Ce=void 0;if($!=null)for(Te in $.ref!==void 0&&(Ce=void 0),$.key!==void 0&&(pe=""+$.key),$)!be.call($,Te)||Te==="key"||Te==="__self"||Te==="__source"||Te==="ref"&&$.ref===void 0||(J[Te]=$[Te]);var Te=arguments.length-2;if(Te===1)J.children=se;else if(1<Te){for(var it=Array(Te),Le=0;Le<Te;Le++)it[Le]=arguments[Le+2];J.children=it}return V(I.type,pe,void 0,void 0,Ce,J)},Ie.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:u,_context:I},I},Ie.createElement=function(I,$,se){var J,pe={},Ce=null;if($!=null)for(J in $.key!==void 0&&(Ce=""+$.key),$)be.call($,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(pe[J]=$[J]);var Te=arguments.length-2;if(Te===1)pe.children=se;else if(1<Te){for(var it=Array(Te),Le=0;Le<Te;Le++)it[Le]=arguments[Le+2];pe.children=it}if(I&&I.defaultProps)for(J in Te=I.defaultProps,Te)pe[J]===void 0&&(pe[J]=Te[J]);return V(I,Ce,void 0,void 0,null,pe)},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(I){return{$$typeof:m,render:I}},Ie.isValidElement=N,Ie.lazy=function(I){return{$$typeof:T,_payload:{_status:-1,_result:I},_init:ne}},Ie.memo=function(I,$){return{$$typeof:y,type:I,compare:$===void 0?null:$}},Ie.startTransition=function(I){var $=oe.T,se={};oe.T=se;try{var J=I(),pe=oe.S;pe!==null&&pe(se,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(Pe,me)}catch(Ce){me(Ce)}finally{oe.T=$}},Ie.unstable_useCacheRefresh=function(){return oe.H.useCacheRefresh()},Ie.use=function(I){return oe.H.use(I)},Ie.useActionState=function(I,$,se){return oe.H.useActionState(I,$,se)},Ie.useCallback=function(I,$){return oe.H.useCallback(I,$)},Ie.useContext=function(I){return oe.H.useContext(I)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(I,$){return oe.H.useDeferredValue(I,$)},Ie.useEffect=function(I,$,se){var J=oe.H;if(typeof se=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(I,$)},Ie.useId=function(){return oe.H.useId()},Ie.useImperativeHandle=function(I,$,se){return oe.H.useImperativeHandle(I,$,se)},Ie.useInsertionEffect=function(I,$){return oe.H.useInsertionEffect(I,$)},Ie.useLayoutEffect=function(I,$){return oe.H.useLayoutEffect(I,$)},Ie.useMemo=function(I,$){return oe.H.useMemo(I,$)},Ie.useOptimistic=function(I,$){return oe.H.useOptimistic(I,$)},Ie.useReducer=function(I,$,se){return oe.H.useReducer(I,$,se)},Ie.useRef=function(I){return oe.H.useRef(I)},Ie.useState=function(I){return oe.H.useState(I)},Ie.useSyncExternalStore=function(I,$,se){return oe.H.useSyncExternalStore(I,$,se)},Ie.useTransition=function(){return oe.H.useTransition()},Ie.version="19.1.0",Ie}var Wv;function Um(){return Wv||(Wv=1,Md.exports=Vw()),Md.exports}var he=Um();const ln=J0(he);var Pd={exports:{}},Al={},Vd={exports:{}},kd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jv;function kw(){return Jv||(Jv=1,function(i){function e(X,ne){var me=X.length;X.push(ne);e:for(;0<me;){var Pe=me-1>>>1,I=X[Pe];if(0<o(I,ne))X[Pe]=ne,X[me]=I,me=Pe;else break e}}function n(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var ne=X[0],me=X.pop();if(me!==ne){X[0]=me;e:for(var Pe=0,I=X.length,$=I>>>1;Pe<$;){var se=2*(Pe+1)-1,J=X[se],pe=se+1,Ce=X[pe];if(0>o(J,me))pe<I&&0>o(Ce,J)?(X[Pe]=Ce,X[pe]=me,Pe=pe):(X[Pe]=J,X[se]=me,Pe=se);else if(pe<I&&0>o(Ce,me))X[Pe]=Ce,X[pe]=me,Pe=pe;else break e}}return ne}function o(X,ne){var me=X.sortIndex-ne.sortIndex;return me!==0?me:X.id-ne.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();i.unstable_now=function(){return f.now()-m}}var g=[],y=[],T=1,b=null,w=3,k=!1,U=!1,Y=!1,G=!1,ue=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function ge(X){for(var ne=n(y);ne!==null;){if(ne.callback===null)s(y);else if(ne.startTime<=X)s(y),ne.sortIndex=ne.expirationTime,e(g,ne);else break;ne=n(y)}}function oe(X){if(Y=!1,ge(X),!U)if(n(g)!==null)U=!0,be||(be=!0,x());else{var ne=n(y);ne!==null&&Me(oe,ne.startTime-X)}}var be=!1,V=-1,A=5,N=-1;function O(){return G?!0:!(i.unstable_now()-N<A)}function M(){if(G=!1,be){var X=i.unstable_now();N=X;var ne=!0;try{e:{U=!1,Y&&(Y=!1,ie(V),V=-1),k=!0;var me=w;try{t:{for(ge(X),b=n(g);b!==null&&!(b.expirationTime>X&&O());){var Pe=b.callback;if(typeof Pe=="function"){b.callback=null,w=b.priorityLevel;var I=Pe(b.expirationTime<=X);if(X=i.unstable_now(),typeof I=="function"){b.callback=I,ge(X),ne=!0;break t}b===n(g)&&s(g),ge(X)}else s(g);b=n(g)}if(b!==null)ne=!0;else{var $=n(y);$!==null&&Me(oe,$.startTime-X),ne=!1}}break e}finally{b=null,w=me,k=!1}ne=void 0}}finally{ne?x():be=!1}}}var x;if(typeof te=="function")x=function(){te(M)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,Ge=C.port2;C.port1.onmessage=M,x=function(){Ge.postMessage(null)}}else x=function(){ue(M,0)};function Me(X,ne){V=ue(function(){X(i.unstable_now())},ne)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(X){X.callback=null},i.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<X?Math.floor(1e3/X):5},i.unstable_getCurrentPriorityLevel=function(){return w},i.unstable_next=function(X){switch(w){case 1:case 2:case 3:var ne=3;break;default:ne=w}var me=w;w=ne;try{return X()}finally{w=me}},i.unstable_requestPaint=function(){G=!0},i.unstable_runWithPriority=function(X,ne){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var me=w;w=X;try{return ne()}finally{w=me}},i.unstable_scheduleCallback=function(X,ne,me){var Pe=i.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?Pe+me:Pe):me=Pe,X){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=me+I,X={id:T++,callback:ne,priorityLevel:X,startTime:me,expirationTime:I,sortIndex:-1},me>Pe?(X.sortIndex=me,e(y,X),n(g)===null&&X===n(y)&&(Y?(ie(V),V=-1):Y=!0,Me(oe,me-Pe))):(X.sortIndex=I,e(g,X),U||k||(U=!0,be||(be=!0,x()))),X},i.unstable_shouldYield=O,i.unstable_wrapCallback=function(X){var ne=w;return function(){var me=w;w=ne;try{return X.apply(this,arguments)}finally{w=me}}}}(kd)),kd}var e_;function xw(){return e_||(e_=1,Vd.exports=kw()),Vd.exports}var xd={exports:{}},rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function Lw(){if(t_)return rn;t_=1;var i=Um();function e(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)y+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(g,y,T){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:g,containerInfo:y,implementation:T}}var f=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,rn.createPortal=function(g,y){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(e(299));return u(g,y,null,T)},rn.flushSync=function(g){var y=f.T,T=s.p;try{if(f.T=null,s.p=2,g)return g()}finally{f.T=y,s.p=T,s.d.f()}},rn.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(g,y))},rn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},rn.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var T=y.as,b=m(T,y.crossOrigin),w=typeof y.integrity=="string"?y.integrity:void 0,k=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;T==="style"?s.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:b,integrity:w,fetchPriority:k}):T==="script"&&s.d.X(g,{crossOrigin:b,integrity:w,fetchPriority:k,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},rn.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var T=m(y.as,y.crossOrigin);s.d.M(g,{crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(g)},rn.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var T=y.as,b=m(T,y.crossOrigin);s.d.L(g,T,{crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},rn.preloadModule=function(g,y){if(typeof g=="string")if(y){var T=m(y.as,y.crossOrigin);s.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(g)},rn.requestFormReset=function(g){s.d.r(g)},rn.unstable_batchedUpdates=function(g,y){return g(y)},rn.useFormState=function(g,y,T){return f.H.useFormState(g,y,T)},rn.useFormStatus=function(){return f.H.useHostTransitionStatus()},rn.version="19.1.0",rn}var n_;function Uw(){if(n_)return xd.exports;n_=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),xd.exports=Lw(),xd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function zw(){if(i_)return Al;i_=1;var i=xw(),e=Um(),n=Uw();function s(t){var r="https://react.dev/errors/"+t;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function f(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function g(t){var r=t.alternate;if(!r){if(r=u(t),r===null)throw Error(s(188));return r!==t?null:t}for(var a=t,l=r;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return m(h),t;if(d===l)return m(h),r;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var _=!1,E=h.child;E;){if(E===a){_=!0,a=h,l=d;break}if(E===l){_=!0,l=h,a=d;break}E=E.sibling}if(!_){for(E=d.child;E;){if(E===a){_=!0,a=d,l=h;break}if(E===l){_=!0,l=d,a=h;break}E=E.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:r}function y(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t;for(t=t.child;t!==null;){if(r=y(t),r!==null)return r;t=t.sibling}return null}var T=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),ue=Symbol.for("react.provider"),ie=Symbol.for("react.consumer"),te=Symbol.for("react.context"),ge=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),be=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function x(t){return t===null||typeof t!="object"?null:(t=M&&t[M]||t["@@iterator"],typeof t=="function"?t:null)}var C=Symbol.for("react.client.reference");function Ge(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===C?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case G:return"Profiler";case Y:return"StrictMode";case oe:return"Suspense";case be:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case k:return"Portal";case te:return(t.displayName||"Context")+".Provider";case ie:return(t._context.displayName||"Context")+".Consumer";case ge:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case V:return r=t.displayName||null,r!==null?r:Ge(t.type)||"Memo";case A:r=t._payload,t=t._init;try{return Ge(t(r))}catch{}}return null}var Me=Array.isArray,X=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},Pe=[],I=-1;function $(t){return{current:t}}function se(t){0>I||(t.current=Pe[I],Pe[I]=null,I--)}function J(t,r){I++,Pe[I]=t.current,t.current=r}var pe=$(null),Ce=$(null),Te=$(null),it=$(null);function Le(t,r){switch(J(Te,r),J(Ce,t),J(pe,null),r.nodeType){case 9:case 11:t=(t=r.documentElement)&&(t=t.namespaceURI)?bv(t):0;break;default:if(t=r.tagName,r=r.namespaceURI)r=bv(r),t=wv(r,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}se(pe),J(pe,t)}function Pt(){se(pe),se(Ce),se(Te)}function ae(t){t.memoizedState!==null&&J(it,t);var r=pe.current,a=wv(r,t.type);r!==a&&(J(Ce,t),J(pe,a))}function le(t){Ce.current===t&&(se(pe),se(Ce)),it.current===t&&(se(it),_l._currentValue=me)}var ve=Object.prototype.hasOwnProperty,Fe=i.unstable_scheduleCallback,ft=i.unstable_cancelCallback,vt=i.unstable_shouldYield,en=i.unstable_requestPaint,_t=i.unstable_now,Tt=i.unstable_getCurrentPriorityLevel,hn=i.unstable_ImmediatePriority,Zs=i.unstable_UserBlockingPriority,is=i.unstable_NormalPriority,Oh=i.unstable_LowPriority,Ws=i.unstable_IdlePriority,vo=i.log,ru=i.unstable_setDisableYieldValue,pt=null,$e=null;function En(t){if(typeof vo=="function"&&ru(t),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(pt,t)}catch{}}var tn=Math.clz32?Math.clz32:rs,su=Math.log,Mh=Math.LN2;function rs(t){return t>>>=0,t===0?32:31-(su(t)/Mh|0)|0}var ss=256,as=4194304;function Gn(t){var r=t&42;if(r!==0)return r;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Js(t,r,a){var l=t.pendingLanes;if(l===0)return 0;var h=0,d=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=l&134217727;return E!==0?(l=E&~d,l!==0?h=Gn(l):(_&=E,_!==0?h=Gn(_):a||(a=E&~t,a!==0&&(h=Gn(a))))):(E=l&~d,E!==0?h=Gn(E):_!==0?h=Gn(_):a||(a=l&~t,a!==0&&(h=Gn(a)))),h===0?0:r!==0&&r!==h&&(r&d)===0&&(d=h&-h,a=r&-r,d>=a||d===32&&(a&4194048)!==0)?r:h}function os(t,r){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&r)===0}function _o(t,r){switch(t){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function To(){var t=ss;return ss<<=1,(ss&4194048)===0&&(ss=256),t}function Eo(){var t=as;return as<<=1,(as&62914560)===0&&(as=4194304),t}function Ii(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function Di(t,r){t.pendingLanes|=r,r!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function So(t,r,a,l,h,d){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,R=t.expirationTimes,B=t.hiddenUpdates;for(a=_&~a;0<a;){var K=31-tn(a),Z=1<<K;E[K]=0,R[K]=-1;var q=B[K];if(q!==null)for(B[K]=null,K=0;K<q.length;K++){var H=q[K];H!==null&&(H.lane&=-536870913)}a&=~Z}l!==0&&ni(t,l,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(_&~r))}function ni(t,r,a){t.pendingLanes|=r,t.suspendedLanes&=~r;var l=31-tn(r);t.entangledLanes|=r,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function bo(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var l=31-tn(a),h=1<<l;h&r|t[l]&r&&(t[l]|=r),a&=~h}}function lr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ea(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ur(){var t=ne.p;return t!==0?t:(t=window.event,t===void 0?32:Hv(t.type))}function au(t,r){var a=ne.p;try{return ne.p=t,r()}finally{ne.p=a}}var lt=Math.random().toString(36).slice(2),Vt="__reactFiber$"+lt,Ct="__reactProps$"+lt,Dn="__reactContainer$"+lt,wo="__reactEvents$"+lt,Ph="__reactListeners$"+lt,cr="__reactHandles$"+lt,ou="__reactResources$"+lt,ls="__reactMarker$"+lt;function hr(t){delete t[Vt],delete t[Ct],delete t[wo],delete t[Ph],delete t[cr]}function Oi(t){var r=t[Vt];if(r)return r;for(var a=t.parentNode;a;){if(r=a[Dn]||a[Vt]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=Nv(t);t!==null;){if(a=t[Vt])return a;t=Nv(t)}return r}t=a,a=t.parentNode}return null}function ii(t){if(t=t[Vt]||t[Dn]){var r=t.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return t}return null}function ri(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t.stateNode;throw Error(s(33))}function fn(t){var r=t[ou];return r||(r=t[ou]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Et(t){t[ls]=!0}var Ao=new Set,ta={};function Xn(t,r){Mi(t,r),Mi(t+"Capture",r)}function Mi(t,r){for(ta[t]=r,t=0;t<r.length;t++)Ao.add(r[t])}var lu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),uu={},us={};function cu(t){return ve.call(us,t)?!0:ve.call(uu,t)?!1:lu.test(t)?us[t]=!0:(uu[t]=!0,!1)}function fr(t,r,a){if(cu(r))if(a===null)t.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(r);return}}t.setAttribute(r,""+a)}}function si(t,r,a){if(a===null)t.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttribute(r,""+a)}}function Xt(t,r,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(r,a,""+l)}}var cs,hu;function Pi(t){if(cs===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);cs=r&&r[1]||"",hu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+cs+t+hu}var na=!1;function ia(t,r){if(!t||na)return"";na=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(H){var q=H}Reflect.construct(t,[],Z)}else{try{Z.call()}catch(H){q=H}t.call(Z.prototype)}}else{try{throw Error()}catch(H){q=H}(Z=t())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(H){if(H&&q&&typeof H.stack=="string")return[H.stack,q.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),_=d[0],E=d[1];if(_&&E){var R=_.split(`
`),B=E.split(`
`);for(h=l=0;l<R.length&&!R[l].includes("DetermineComponentFrameRoot");)l++;for(;h<B.length&&!B[h].includes("DetermineComponentFrameRoot");)h++;if(l===R.length||h===B.length)for(l=R.length-1,h=B.length-1;1<=l&&0<=h&&R[l]!==B[h];)h--;for(;1<=l&&0<=h;l--,h--)if(R[l]!==B[h]){if(l!==1||h!==1)do if(l--,h--,0>h||R[l]!==B[h]){var K=`
`+R[l].replace(" at new "," at ");return t.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",t.displayName)),K}while(1<=l&&0<=h);break}}}finally{na=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Pi(a):""}function Co(t){switch(t.tag){case 26:case 27:case 5:return Pi(t.type);case 16:return Pi("Lazy");case 13:return Pi("Suspense");case 19:return Pi("SuspenseList");case 0:case 15:return ia(t.type,!1);case 11:return ia(t.type.render,!1);case 1:return ia(t.type,!0);case 31:return Pi("Activity");default:return""}}function ra(t){try{var r="";do r+=Co(t),t=t.return;while(t);return r}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function dn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ro(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Vh(t){var r=Ro(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),l=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return h.call(this)},set:function(_){l=""+_,d.call(this,_)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(_){l=""+_},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function sa(t){t._valueTracker||(t._valueTracker=Vh(t))}function No(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),l="";return t&&(l=Ro(t)?t.checked?"true":"false":t.value),t=l,t!==a?(r.setValue(t),!0):!1}function hs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var kh=/[\n"\\]/g;function Rt(t){return t.replace(kh,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Sn(t,r,a,l,h,d,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),r!=null?_==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+dn(r)):t.value!==""+dn(r)&&(t.value=""+dn(r)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),r!=null?dr(t,_,dn(r)):a!=null?dr(t,_,dn(a)):l!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+dn(E):t.removeAttribute("name")}function fs(t,r,a,l,h,d,_,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),r!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||r!=null))return;a=a!=null?""+dn(a):"",r=r!=null?""+dn(r):a,E||r===t.value||(t.value=r),t.defaultValue=r}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=E?t.checked:!!l,t.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_)}function dr(t,r,a){r==="number"&&hs(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Vi(t,r,a,l){if(t=t.options,r){r={};for(var h=0;h<a.length;h++)r["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=r.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+dn(a),r=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}r!==null||t[h].disabled||(r=t[h])}r!==null&&(r.selected=!0)}}function Je(t,r,a){if(r!=null&&(r=""+dn(r),r!==t.value&&(t.value=r),a==null)){t.defaultValue!==r&&(t.defaultValue=r);return}t.defaultValue=a!=null?""+dn(a):""}function ds(t,r,a,l){if(r==null){if(l!=null){if(a!=null)throw Error(s(92));if(Me(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),r=a}a=dn(r),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function On(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var ms=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fu(t,r,a){var l=r.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="":l?t.setProperty(r,a):typeof a!="number"||a===0||ms.has(r)?r==="float"?t.cssFloat=a:t[r]=(""+a).trim():t[r]=a+"px"}function Io(t,r,a){if(r!=null&&typeof r!="object")throw Error(s(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in r)l=r[h],r.hasOwnProperty(h)&&a[h]!==l&&fu(t,h,l)}else for(var d in r)r.hasOwnProperty(d)&&fu(t,d,r[d])}function Do(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Lh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function aa(t){return Lh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var ki=null;function Mn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xi=null,Li=null;function Oo(t){var r=ii(t);if(r&&(t=r.stateNode)){var a=t[Ct]||null;e:switch(t=r.stateNode,r.type){case"input":if(Sn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Rt(""+r)+'"][type="radio"]'),r=0;r<a.length;r++){var l=a[r];if(l!==t&&l.form===t.form){var h=l[Ct]||null;if(!h)throw Error(s(90));Sn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<a.length;r++)l=a[r],l.form===t.form&&No(l)}break e;case"textarea":Je(t,a.value,a.defaultValue);break e;case"select":r=a.value,r!=null&&Vi(t,!!a.multiple,r,!1)}}}var ai=!1;function du(t,r,a){if(ai)return t(r,a);ai=!0;try{var l=t(r);return l}finally{if(ai=!1,(xi!==null||Li!==null)&&(ac(),xi&&(r=xi,t=Li,Li=xi=null,Oo(r),t)))for(r=0;r<t.length;r++)Oo(t[r])}}function ps(t,r){var a=t.stateNode;if(a===null)return null;var l=a[Ct]||null;if(l===null)return null;a=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,r,typeof a));return a}var Kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pn=!1;if(Kn)try{var gs={};Object.defineProperty(gs,"passive",{get:function(){Pn=!0}}),window.addEventListener("test",gs,gs),window.removeEventListener("test",gs,gs)}catch{Pn=!1}var oi=null,mr=null,Ui=null;function Mo(){if(Ui)return Ui;var t,r=mr,a=r.length,l,h="value"in oi?oi.value:oi.textContent,d=h.length;for(t=0;t<a&&r[t]===h[t];t++);var _=a-t;for(l=1;l<=_&&r[a-l]===h[d-l];l++);return Ui=h.slice(t,1<l?1-l:void 0)}function li(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function ui(){return!0}function Po(){return!1}function Bt(t){function r(a,l,h,d,_){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ui:Po,this.isPropagationStopped=Po,this}return T(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ui)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ui)},persist:function(){},isPersistent:ui}),r}var Qe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oa=Bt(Qe),ys=T({},Qe,{view:0,detail:0}),mu=Bt(ys),la,ua,ci,vs=T({},ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Es,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ci&&(ci&&t.type==="mousemove"?(la=t.screenX-ci.screenX,ua=t.screenY-ci.screenY):ua=la=0,ci=t),la)},movementY:function(t){return"movementY"in t?t.movementY:ua}}),Vn=Bt(vs),pu=T({},vs,{dataTransfer:0}),Uh=Bt(pu),_s=T({},ys,{relatedTarget:0}),ca=Bt(_s),Vo=T({},Qe,{animationName:0,elapsedTime:0,pseudoElement:0}),ha=Bt(Vo),gu=T({},Qe,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fa=Bt(gu),zh=T({},Qe,{data:0}),ko=Bt(zh),Ts={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xo(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=vu[t])?!!r[t]:!1}function Es(){return xo}var _u=T({},ys,{key:function(t){if(t.key){var r=Ts[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=li(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Es,charCode:function(t){return t.type==="keypress"?li(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?li(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),da=Bt(_u),Tu=T({},vs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lo=Bt(Tu),zi=T({},ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Es}),Eu=Bt(zi),Su=T({},Qe,{propertyName:0,elapsedTime:0,pseudoElement:0}),bu=Bt(Su),wu=T({},vs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ma=Bt(wu),mn=T({},Qe,{newState:0,oldState:0}),Au=Bt(mn),Cu=[9,13,27,32],hi=Kn&&"CompositionEvent"in window,c=null;Kn&&"documentMode"in document&&(c=document.documentMode);var p=Kn&&"TextEvent"in window&&!c,v=Kn&&(!hi||c&&8<c&&11>=c),S=" ",z=!1;function F(t,r){switch(t){case"keyup":return Cu.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function re(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ze=!1;function kt(t,r){switch(t){case"compositionend":return re(r);case"keypress":return r.which!==32?null:(z=!0,S);case"textInput":return t=r.data,t===S&&z?null:t;default:return null}}function je(t,r){if(ze)return t==="compositionend"||!hi&&F(t,r)?(t=Mo(),Ui=mr=oi=null,ze=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return v&&r.locale!=="ko"?null:r.data;default:return null}}var qt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xt(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!qt[t.type]:r==="textarea"}function ji(t,r,a,l){xi?Li?Li.push(l):Li=[l]:xi=l,r=fc(r,"onChange"),0<r.length&&(a=new oa("onChange","change",null,a,l),t.push({event:a,listeners:r}))}var Kt=null,fi=null;function Uo(t){vv(t,0)}function Ru(t){var r=ri(t);if(No(r))return t}function zp(t,r){if(t==="change")return r}var jp=!1;if(Kn){var jh;if(Kn){var Bh="oninput"in document;if(!Bh){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),Bh=typeof Bp.oninput=="function"}jh=Bh}else jh=!1;jp=jh&&(!document.documentMode||9<document.documentMode)}function qp(){Kt&&(Kt.detachEvent("onpropertychange",Hp),fi=Kt=null)}function Hp(t){if(t.propertyName==="value"&&Ru(fi)){var r=[];ji(r,fi,t,Mn(t)),du(Uo,r)}}function lb(t,r,a){t==="focusin"?(qp(),Kt=r,fi=a,Kt.attachEvent("onpropertychange",Hp)):t==="focusout"&&qp()}function ub(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ru(fi)}function cb(t,r){if(t==="click")return Ru(r)}function hb(t,r){if(t==="input"||t==="change")return Ru(r)}function fb(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var bn=typeof Object.is=="function"?Object.is:fb;function zo(t,r){if(bn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),l=Object.keys(r);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!ve.call(r,h)||!bn(t[h],r[h]))return!1}return!0}function Fp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yp(t,r){var a=Fp(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=r&&l>=r)return{node:a,offset:r-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Fp(a)}}function Gp(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Gp(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Xp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var r=hs(t.document);r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=hs(t.document)}return r}function qh(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}var db=Kn&&"documentMode"in document&&11>=document.documentMode,pa=null,Hh=null,jo=null,Fh=!1;function Kp(t,r,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fh||pa==null||pa!==hs(l)||(l=pa,"selectionStart"in l&&qh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),jo&&zo(jo,l)||(jo=l,l=fc(Hh,"onSelect"),0<l.length&&(r=new oa("onSelect","select",null,r,a),t.push({event:r,listeners:l}),r.target=pa)))}function Ss(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var ga={animationend:Ss("Animation","AnimationEnd"),animationiteration:Ss("Animation","AnimationIteration"),animationstart:Ss("Animation","AnimationStart"),transitionrun:Ss("Transition","TransitionRun"),transitionstart:Ss("Transition","TransitionStart"),transitioncancel:Ss("Transition","TransitionCancel"),transitionend:Ss("Transition","TransitionEnd")},Yh={},Qp={};Kn&&(Qp=document.createElement("div").style,"AnimationEvent"in window||(delete ga.animationend.animation,delete ga.animationiteration.animation,delete ga.animationstart.animation),"TransitionEvent"in window||delete ga.transitionend.transition);function bs(t){if(Yh[t])return Yh[t];if(!ga[t])return t;var r=ga[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in Qp)return Yh[t]=r[a];return t}var $p=bs("animationend"),Zp=bs("animationiteration"),Wp=bs("animationstart"),mb=bs("transitionrun"),pb=bs("transitionstart"),gb=bs("transitioncancel"),Jp=bs("transitionend"),eg=new Map,Gh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gh.push("scrollEnd");function Qn(t,r){eg.set(t,r),Xn(r,[t])}var tg=new WeakMap;function kn(t,r){if(typeof t=="object"&&t!==null){var a=tg.get(t);return a!==void 0?a:(r={value:t,source:r,stack:ra(r)},tg.set(t,r),r)}return{value:t,source:r,stack:ra(r)}}var xn=[],ya=0,Xh=0;function Nu(){for(var t=ya,r=Xh=ya=0;r<t;){var a=xn[r];xn[r++]=null;var l=xn[r];xn[r++]=null;var h=xn[r];xn[r++]=null;var d=xn[r];if(xn[r++]=null,l!==null&&h!==null){var _=l.pending;_===null?h.next=h:(h.next=_.next,_.next=h),l.pending=h}d!==0&&ng(a,h,d)}}function Iu(t,r,a,l){xn[ya++]=t,xn[ya++]=r,xn[ya++]=a,xn[ya++]=l,Xh|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Kh(t,r,a,l){return Iu(t,r,a,l),Du(t)}function va(t,r){return Iu(t,null,null,r),Du(t)}function ng(t,r,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=t.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,h&&r!==null&&(h=31-tn(a),t=d.hiddenUpdates,l=t[h],l===null?t[h]=[r]:l.push(r),r.lane=a|536870912),d):null}function Du(t){if(50<hl)throw hl=0,td=null,Error(s(185));for(var r=t.return;r!==null;)t=r,r=t.return;return t.tag===3?t.stateNode:null}var _a={};function yb(t,r,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,r,a,l){return new yb(t,r,a,l)}function Qh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bi(t,r){var a=t.alternate;return a===null?(a=wn(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function ig(t,r){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=r,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,r=a.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),t}function Ou(t,r,a,l,h,d){var _=0;if(l=t,typeof t=="function")Qh(t)&&(_=1);else if(typeof t=="string")_=_w(t,a,pe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=wn(31,a,r,h),t.elementType=N,t.lanes=d,t;case U:return ws(a.children,h,d,r);case Y:_=8,h|=24;break;case G:return t=wn(12,a,r,h|2),t.elementType=G,t.lanes=d,t;case oe:return t=wn(13,a,r,h),t.elementType=oe,t.lanes=d,t;case be:return t=wn(19,a,r,h),t.elementType=be,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ue:case te:_=10;break e;case ie:_=9;break e;case ge:_=11;break e;case V:_=14;break e;case A:_=16,l=null;break e}_=29,a=Error(s(130,t===null?"null":typeof t,"")),l=null}return r=wn(_,a,r,h),r.elementType=t,r.type=l,r.lanes=d,r}function ws(t,r,a,l){return t=wn(7,t,l,r),t.lanes=a,t}function $h(t,r,a){return t=wn(6,t,null,r),t.lanes=a,t}function Zh(t,r,a){return r=wn(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}var Ta=[],Ea=0,Mu=null,Pu=0,Ln=[],Un=0,As=null,qi=1,Hi="";function Cs(t,r){Ta[Ea++]=Pu,Ta[Ea++]=Mu,Mu=t,Pu=r}function rg(t,r,a){Ln[Un++]=qi,Ln[Un++]=Hi,Ln[Un++]=As,As=t;var l=qi;t=Hi;var h=32-tn(l)-1;l&=~(1<<h),a+=1;var d=32-tn(r)+h;if(30<d){var _=h-h%5;d=(l&(1<<_)-1).toString(32),l>>=_,h-=_,qi=1<<32-tn(r)+h|a<<h|l,Hi=d+t}else qi=1<<d|a<<h|l,Hi=t}function Wh(t){t.return!==null&&(Cs(t,1),rg(t,1,0))}function Jh(t){for(;t===Mu;)Mu=Ta[--Ea],Ta[Ea]=null,Pu=Ta[--Ea],Ta[Ea]=null;for(;t===As;)As=Ln[--Un],Ln[Un]=null,Hi=Ln[--Un],Ln[Un]=null,qi=Ln[--Un],Ln[Un]=null}var pn=null,gt=null,Ke=!1,Rs=null,di=!1,ef=Error(s(519));function Ns(t){var r=Error(s(418,""));throw Ho(kn(r,t)),ef}function sg(t){var r=t.stateNode,a=t.type,l=t.memoizedProps;switch(r[Vt]=t,r[Ct]=l,a){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(a=0;a<dl.length;a++)ke(dl[a],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":ke("invalid",r),fs(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),sa(r);break;case"select":ke("invalid",r);break;case"textarea":ke("invalid",r),ds(r,l.value,l.defaultValue,l.children),sa(r)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||r.textContent===""+a||l.suppressHydrationWarning===!0||Sv(r.textContent,a)?(l.popover!=null&&(ke("beforetoggle",r),ke("toggle",r)),l.onScroll!=null&&ke("scroll",r),l.onScrollEnd!=null&&ke("scrollend",r),l.onClick!=null&&(r.onclick=dc),r=!0):r=!1,r||Ns(t)}function ag(t){for(pn=t.return;pn;)switch(pn.tag){case 5:case 13:di=!1;return;case 27:case 3:di=!0;return;default:pn=pn.return}}function Bo(t){if(t!==pn)return!1;if(!Ke)return ag(t),Ke=!0,!1;var r=t.tag,a;if((a=r!==3&&r!==27)&&((a=r===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||yd(t.type,t.memoizedProps)),a=!a),a&&gt&&Ns(t),ag(t),r===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(r===0){gt=Zn(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++;t=t.nextSibling}gt=null}}else r===27?(r=gt,Dr(t.type)?(t=Ed,Ed=null,gt=t):gt=r):gt=pn?Zn(t.stateNode.nextSibling):null;return!0}function qo(){gt=pn=null,Ke=!1}function og(){var t=Rs;return t!==null&&(_n===null?_n=t:_n.push.apply(_n,t),Rs=null),t}function Ho(t){Rs===null?Rs=[t]:Rs.push(t)}var tf=$(null),Is=null,Fi=null;function pr(t,r,a){J(tf,r._currentValue),r._currentValue=a}function Yi(t){t._currentValue=tf.current,se(tf)}function nf(t,r,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),t===a)break;t=t.return}}function rf(t,r,a,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var _=h.child;d=d.firstContext;e:for(;d!==null;){var E=d;d=h;for(var R=0;R<r.length;R++)if(E.context===r[R]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),nf(d.return,a,t),l||(_=null);break e}d=E.next}}else if(h.tag===18){if(_=h.return,_===null)throw Error(s(341));_.lanes|=a,d=_.alternate,d!==null&&(d.lanes|=a),nf(_,a,t),_=null}else _=h.child;if(_!==null)_.return=h;else for(_=h;_!==null;){if(_===t){_=null;break}if(h=_.sibling,h!==null){h.return=_.return,_=h;break}_=_.return}h=_}}function Fo(t,r,a,l){t=null;for(var h=r,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var _=h.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var E=h.type;bn(h.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(h===it.current){if(_=h.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(_l):t=[_l])}h=h.return}t!==null&&rf(r,t,a,l),r.flags|=262144}function Vu(t){for(t=t.firstContext;t!==null;){if(!bn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ds(t){Is=t,Fi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function nn(t){return lg(Is,t)}function ku(t,r){return Is===null&&Ds(t),lg(t,r)}function lg(t,r){var a=r._currentValue;if(r={context:r,memoizedValue:a,next:null},Fi===null){if(t===null)throw Error(s(308));Fi=r,t.dependencies={lanes:0,firstContext:r},t.flags|=524288}else Fi=Fi.next=r;return a}var vb=typeof AbortController<"u"?AbortController:function(){var t=[],r=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){r.aborted=!0,t.forEach(function(a){return a()})}},_b=i.unstable_scheduleCallback,Tb=i.unstable_NormalPriority,Lt={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sf(){return{controller:new vb,data:new Map,refCount:0}}function Yo(t){t.refCount--,t.refCount===0&&_b(Tb,function(){t.controller.abort()})}var Go=null,af=0,Sa=0,ba=null;function Eb(t,r){if(Go===null){var a=Go=[];af=0,Sa=ld(),ba={status:"pending",value:void 0,then:function(l){a.push(l)}}}return af++,r.then(ug,ug),r}function ug(){if(--af===0&&Go!==null){ba!==null&&(ba.status="fulfilled");var t=Go;Go=null,Sa=0,ba=null;for(var r=0;r<t.length;r++)(0,t[r])()}}function Sb(t,r){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){l.status="fulfilled",l.value=r;for(var h=0;h<a.length;h++)(0,a[h])(r)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var cg=X.S;X.S=function(t,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&Eb(t,r),cg!==null&&cg(t,r)};var Os=$(null);function of(){var t=Os.current;return t!==null?t:st.pooledCache}function xu(t,r){r===null?J(Os,Os.current):J(Os,r.pool)}function hg(){var t=of();return t===null?null:{parent:Lt._currentValue,pool:t}}var Xo=Error(s(460)),fg=Error(s(474)),Lu=Error(s(542)),lf={then:function(){}};function dg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Uu(){}function mg(t,r,a){switch(a=t[a],a===void 0?t.push(r):a!==r&&(r.then(Uu,Uu),r=a),r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,gg(t),t;default:if(typeof r.status=="string")r.then(Uu,Uu);else{if(t=st,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=r,t.status="pending",t.then(function(l){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=l}},function(l){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,gg(t),t}throw Ko=r,Xo}}var Ko=null;function pg(){if(Ko===null)throw Error(s(459));var t=Ko;return Ko=null,t}function gg(t){if(t===Xo||t===Lu)throw Error(s(483))}var gr=!1;function uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cf(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function yr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function vr(t,r,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ze&2)!==0){var h=l.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),l.pending=r,r=Du(t),ng(t,null,a),r}return Iu(t,l,r,a),Du(t)}function Qo(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194048)!==0)){var l=r.lanes;l&=t.pendingLanes,a|=l,r.lanes=a,bo(t,a)}}function hf(t,r){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=_:d=d.next=_,a=a.next}while(a!==null);d===null?h=d=r:d=d.next=r}else h=d=r;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}var ff=!1;function $o(){if(ff){var t=ba;if(t!==null)throw t}}function Zo(t,r,a,l){ff=!1;var h=t.updateQueue;gr=!1;var d=h.firstBaseUpdate,_=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var R=E,B=R.next;R.next=null,_===null?d=B:_.next=B,_=R;var K=t.alternate;K!==null&&(K=K.updateQueue,E=K.lastBaseUpdate,E!==_&&(E===null?K.firstBaseUpdate=B:E.next=B,K.lastBaseUpdate=R))}if(d!==null){var Z=h.baseState;_=0,K=B=R=null,E=d;do{var q=E.lane&-536870913,H=q!==E.lane;if(H?(Be&q)===q:(l&q)===q){q!==0&&q===Sa&&(ff=!0),K!==null&&(K=K.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var we=t,Ee=E;q=r;var nt=a;switch(Ee.tag){case 1:if(we=Ee.payload,typeof we=="function"){Z=we.call(nt,Z,q);break e}Z=we;break e;case 3:we.flags=we.flags&-65537|128;case 0:if(we=Ee.payload,q=typeof we=="function"?we.call(nt,Z,q):we,q==null)break e;Z=T({},Z,q);break e;case 2:gr=!0}}q=E.callback,q!==null&&(t.flags|=64,H&&(t.flags|=8192),H=h.callbacks,H===null?h.callbacks=[q]:H.push(q))}else H={lane:q,tag:E.tag,payload:E.payload,callback:E.callback,next:null},K===null?(B=K=H,R=Z):K=K.next=H,_|=q;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;H=E,E=H.next,H.next=null,h.lastBaseUpdate=H,h.shared.pending=null}}while(!0);K===null&&(R=Z),h.baseState=R,h.firstBaseUpdate=B,h.lastBaseUpdate=K,d===null&&(h.shared.lanes=0),Cr|=_,t.lanes=_,t.memoizedState=Z}}function yg(t,r){if(typeof t!="function")throw Error(s(191,t));t.call(r)}function vg(t,r){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)yg(a[t],r)}var wa=$(null),zu=$(0);function _g(t,r){t=Wi,J(zu,t),J(wa,r),Wi=t|r.baseLanes}function df(){J(zu,Wi),J(wa,wa.current)}function mf(){Wi=zu.current,se(wa),se(zu)}var _r=0,De=null,et=null,Nt=null,ju=!1,Aa=!1,Ms=!1,Bu=0,Wo=0,Ca=null,bb=0;function St(){throw Error(s(321))}function pf(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!bn(t[a],r[a]))return!1;return!0}function gf(t,r,a,l,h,d){return _r=d,De=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,X.H=t===null||t.memoizedState===null?ny:iy,Ms=!1,d=a(l,h),Ms=!1,Aa&&(d=Eg(r,a,l,h)),Tg(t),d}function Tg(t){X.H=Xu;var r=et!==null&&et.next!==null;if(_r=0,Nt=et=De=null,ju=!1,Wo=0,Ca=null,r)throw Error(s(300));t===null||Ht||(t=t.dependencies,t!==null&&Vu(t)&&(Ht=!0))}function Eg(t,r,a,l){De=t;var h=0;do{if(Aa&&(Ca=null),Wo=0,Aa=!1,25<=h)throw Error(s(301));if(h+=1,Nt=et=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}X.H=Db,d=r(a,l)}while(Aa);return d}function wb(){var t=X.H,r=t.useState()[0];return r=typeof r.then=="function"?Jo(r):r,t=t.useState()[0],(et!==null?et.memoizedState:null)!==t&&(De.flags|=1024),r}function yf(){var t=Bu!==0;return Bu=0,t}function vf(t,r,a){r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~a}function _f(t){if(ju){for(t=t.memoizedState;t!==null;){var r=t.queue;r!==null&&(r.pending=null),t=t.next}ju=!1}_r=0,Nt=et=De=null,Aa=!1,Wo=Bu=0,Ca=null}function yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?De.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function It(){if(et===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=et.next;var r=Nt===null?De.memoizedState:Nt.next;if(r!==null)Nt=r,et=t;else{if(t===null)throw De.alternate===null?Error(s(467)):Error(s(310));et=t,t={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},Nt===null?De.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function Tf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jo(t){var r=Wo;return Wo+=1,Ca===null&&(Ca=[]),t=mg(Ca,t,r),r=De,(Nt===null?r.memoizedState:Nt.next)===null&&(r=r.alternate,X.H=r===null||r.memoizedState===null?ny:iy),t}function qu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Jo(t);if(t.$$typeof===te)return nn(t)}throw Error(s(438,String(t)))}function Ef(t){var r=null,a=De.updateQueue;if(a!==null&&(r=a.memoCache),r==null){var l=De.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),a===null&&(a=Tf(),De.updateQueue=a),a.memoCache=r,a=r.data[r.index],a===void 0)for(a=r.data[r.index]=Array(t),l=0;l<t;l++)a[l]=O;return r.index++,a}function Gi(t,r){return typeof r=="function"?r(t):r}function Hu(t){var r=It();return Sf(r,et,t)}function Sf(t,r,a){var l=t.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=t.baseQueue,d=l.pending;if(d!==null){if(h!==null){var _=h.next;h.next=d.next,d.next=_}r.baseQueue=h=d,l.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{r=h.next;var E=_=null,R=null,B=r,K=!1;do{var Z=B.lane&-536870913;if(Z!==B.lane?(Be&Z)===Z:(_r&Z)===Z){var q=B.revertLane;if(q===0)R!==null&&(R=R.next={lane:0,revertLane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),Z===Sa&&(K=!0);else if((_r&q)===q){B=B.next,q===Sa&&(K=!0);continue}else Z={lane:0,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},R===null?(E=R=Z,_=d):R=R.next=Z,De.lanes|=q,Cr|=q;Z=B.action,Ms&&a(d,Z),d=B.hasEagerState?B.eagerState:a(d,Z)}else q={lane:Z,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},R===null?(E=R=q,_=d):R=R.next=q,De.lanes|=Z,Cr|=Z;B=B.next}while(B!==null&&B!==r);if(R===null?_=d:R.next=E,!bn(d,t.memoizedState)&&(Ht=!0,K&&(a=ba,a!==null)))throw a;t.memoizedState=d,t.baseState=_,t.baseQueue=R,l.lastRenderedState=d}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function bf(t){var r=It(),a=r.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,d=r.memoizedState;if(h!==null){a.pending=null;var _=h=h.next;do d=t(d,_.action),_=_.next;while(_!==h);bn(d,r.memoizedState)||(Ht=!0),r.memoizedState=d,r.baseQueue===null&&(r.baseState=d),a.lastRenderedState=d}return[d,l]}function Sg(t,r,a){var l=De,h=It(),d=Ke;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=r();var _=!bn((et||h).memoizedState,a);_&&(h.memoizedState=a,Ht=!0),h=h.queue;var E=Ag.bind(null,l,h,t);if(el(2048,8,E,[t]),h.getSnapshot!==r||_||Nt!==null&&Nt.memoizedState.tag&1){if(l.flags|=2048,Ra(9,Fu(),wg.bind(null,l,h,a,r),null),st===null)throw Error(s(349));d||(_r&124)!==0||bg(l,r,a)}return a}function bg(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=De.updateQueue,r===null?(r=Tf(),De.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function wg(t,r,a,l){r.value=a,r.getSnapshot=l,Cg(r)&&Rg(t)}function Ag(t,r,a){return a(function(){Cg(r)&&Rg(t)})}function Cg(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!bn(t,a)}catch{return!0}}function Rg(t){var r=va(t,2);r!==null&&In(r,t,2)}function wf(t){var r=yn();if(typeof t=="function"){var a=t;if(t=a(),Ms){En(!0);try{a()}finally{En(!1)}}}return r.memoizedState=r.baseState=t,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:t},r}function Ng(t,r,a,l){return t.baseState=a,Sf(t,et,typeof l=="function"?l:Gi)}function Ab(t,r,a,l,h){if(Gu(t))throw Error(s(485));if(t=r.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};X.T!==null?a(!0):d.isTransition=!1,l(d),a=r.pending,a===null?(d.next=r.pending=d,Ig(r,d)):(d.next=a.next,r.pending=a.next=d)}}function Ig(t,r){var a=r.action,l=r.payload,h=t.state;if(r.isTransition){var d=X.T,_={};X.T=_;try{var E=a(h,l),R=X.S;R!==null&&R(_,E),Dg(t,r,E)}catch(B){Af(t,r,B)}finally{X.T=d}}else try{d=a(h,l),Dg(t,r,d)}catch(B){Af(t,r,B)}}function Dg(t,r,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Og(t,r,l)},function(l){return Af(t,r,l)}):Og(t,r,a)}function Og(t,r,a){r.status="fulfilled",r.value=a,Mg(r),t.state=a,r=t.pending,r!==null&&(a=r.next,a===r?t.pending=null:(a=a.next,r.next=a,Ig(t,a)))}function Af(t,r,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=a,Mg(r),r=r.next;while(r!==l)}t.action=null}function Mg(t){t=t.listeners;for(var r=0;r<t.length;r++)(0,t[r])()}function Pg(t,r){return r}function Vg(t,r){if(Ke){var a=st.formState;if(a!==null){e:{var l=De;if(Ke){if(gt){t:{for(var h=gt,d=di;h.nodeType!==8;){if(!d){h=null;break t}if(h=Zn(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){gt=Zn(h.nextSibling),l=h.data==="F!";break e}}Ns(l)}l=!1}l&&(r=a[0])}}return a=yn(),a.memoizedState=a.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pg,lastRenderedState:r},a.queue=l,a=Jg.bind(null,De,l),l.dispatch=a,l=wf(!1),d=Df.bind(null,De,!1,l.queue),l=yn(),h={state:r,dispatch:null,action:t,pending:null},l.queue=h,a=Ab.bind(null,De,h,d,a),h.dispatch=a,l.memoizedState=t,[r,a,!1]}function kg(t){var r=It();return xg(r,et,t)}function xg(t,r,a){if(r=Sf(t,r,Pg)[0],t=Hu(Gi)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var l=Jo(r)}catch(_){throw _===Xo?Lu:_}else l=r;r=It();var h=r.queue,d=h.dispatch;return a!==r.memoizedState&&(De.flags|=2048,Ra(9,Fu(),Cb.bind(null,h,a),null)),[l,d,t]}function Cb(t,r){t.action=r}function Lg(t){var r=It(),a=et;if(a!==null)return xg(r,a,t);It(),r=r.memoizedState,a=It();var l=a.queue.dispatch;return a.memoizedState=t,[r,l,!1]}function Ra(t,r,a,l){return t={tag:t,create:a,deps:l,inst:r,next:null},r=De.updateQueue,r===null&&(r=Tf(),De.updateQueue=r),a=r.lastEffect,a===null?r.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,r.lastEffect=t),t}function Fu(){return{destroy:void 0,resource:void 0}}function Ug(){return It().memoizedState}function Yu(t,r,a,l){var h=yn();l=l===void 0?null:l,De.flags|=t,h.memoizedState=Ra(1|r,Fu(),a,l)}function el(t,r,a,l){var h=It();l=l===void 0?null:l;var d=h.memoizedState.inst;et!==null&&l!==null&&pf(l,et.memoizedState.deps)?h.memoizedState=Ra(r,d,a,l):(De.flags|=t,h.memoizedState=Ra(1|r,d,a,l))}function zg(t,r){Yu(8390656,8,t,r)}function jg(t,r){el(2048,8,t,r)}function Bg(t,r){return el(4,2,t,r)}function qg(t,r){return el(4,4,t,r)}function Hg(t,r){if(typeof r=="function"){t=t();var a=r(t);return function(){typeof a=="function"?a():r(null)}}if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Fg(t,r,a){a=a!=null?a.concat([t]):null,el(4,4,Hg.bind(null,r,t),a)}function Cf(){}function Yg(t,r){var a=It();r=r===void 0?null:r;var l=a.memoizedState;return r!==null&&pf(r,l[1])?l[0]:(a.memoizedState=[t,r],t)}function Gg(t,r){var a=It();r=r===void 0?null:r;var l=a.memoizedState;if(r!==null&&pf(r,l[1]))return l[0];if(l=t(),Ms){En(!0);try{t()}finally{En(!1)}}return a.memoizedState=[l,r],l}function Rf(t,r,a){return a===void 0||(_r&1073741824)!==0?t.memoizedState=r:(t.memoizedState=a,t=Qy(),De.lanes|=t,Cr|=t,a)}function Xg(t,r,a,l){return bn(a,r)?a:wa.current!==null?(t=Rf(t,a,l),bn(t,r)||(Ht=!0),t):(_r&42)===0?(Ht=!0,t.memoizedState=a):(t=Qy(),De.lanes|=t,Cr|=t,r)}function Kg(t,r,a,l,h){var d=ne.p;ne.p=d!==0&&8>d?d:8;var _=X.T,E={};X.T=E,Df(t,!1,r,a);try{var R=h(),B=X.S;if(B!==null&&B(E,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var K=Sb(R,l);tl(t,r,K,Nn(t))}else tl(t,r,l,Nn(t))}catch(Z){tl(t,r,{then:function(){},status:"rejected",reason:Z},Nn())}finally{ne.p=d,X.T=_}}function Rb(){}function Nf(t,r,a,l){if(t.tag!==5)throw Error(s(476));var h=Qg(t).queue;Kg(t,h,r,me,a===null?Rb:function(){return $g(t),a(l)})}function Qg(t){var r=t.memoizedState;if(r!==null)return r;r={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:me},next:null};var a={};return r.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:a},next:null},t.memoizedState=r,t=t.alternate,t!==null&&(t.memoizedState=r),r}function $g(t){var r=Qg(t).next.queue;tl(t,r,{},Nn())}function If(){return nn(_l)}function Zg(){return It().memoizedState}function Wg(){return It().memoizedState}function Nb(t){for(var r=t.return;r!==null;){switch(r.tag){case 24:case 3:var a=Nn();t=yr(a);var l=vr(r,t,a);l!==null&&(In(l,r,a),Qo(l,r,a)),r={cache:sf()},t.payload=r;return}r=r.return}}function Ib(t,r,a){var l=Nn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Gu(t)?ey(r,a):(a=Kh(t,r,a,l),a!==null&&(In(a,t,l),ty(a,r,l)))}function Jg(t,r,a){var l=Nn();tl(t,r,a,l)}function tl(t,r,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gu(t))ey(r,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=r.lastRenderedReducer,d!==null))try{var _=r.lastRenderedState,E=d(_,a);if(h.hasEagerState=!0,h.eagerState=E,bn(E,_))return Iu(t,r,h,0),st===null&&Nu(),!1}catch{}finally{}if(a=Kh(t,r,h,l),a!==null)return In(a,t,l),ty(a,r,l),!0}return!1}function Df(t,r,a,l){if(l={lane:2,revertLane:ld(),action:l,hasEagerState:!1,eagerState:null,next:null},Gu(t)){if(r)throw Error(s(479))}else r=Kh(t,a,l,2),r!==null&&In(r,t,2)}function Gu(t){var r=t.alternate;return t===De||r!==null&&r===De}function ey(t,r){Aa=ju=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function ty(t,r,a){if((a&4194048)!==0){var l=r.lanes;l&=t.pendingLanes,a|=l,r.lanes=a,bo(t,a)}}var Xu={readContext:nn,use:qu,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useLayoutEffect:St,useInsertionEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useSyncExternalStore:St,useId:St,useHostTransitionStatus:St,useFormState:St,useActionState:St,useOptimistic:St,useMemoCache:St,useCacheRefresh:St},ny={readContext:nn,use:qu,useCallback:function(t,r){return yn().memoizedState=[t,r===void 0?null:r],t},useContext:nn,useEffect:zg,useImperativeHandle:function(t,r,a){a=a!=null?a.concat([t]):null,Yu(4194308,4,Hg.bind(null,r,t),a)},useLayoutEffect:function(t,r){return Yu(4194308,4,t,r)},useInsertionEffect:function(t,r){Yu(4,2,t,r)},useMemo:function(t,r){var a=yn();r=r===void 0?null:r;var l=t();if(Ms){En(!0);try{t()}finally{En(!1)}}return a.memoizedState=[l,r],l},useReducer:function(t,r,a){var l=yn();if(a!==void 0){var h=a(r);if(Ms){En(!0);try{a(r)}finally{En(!1)}}}else h=r;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=Ib.bind(null,De,t),[l.memoizedState,t]},useRef:function(t){var r=yn();return t={current:t},r.memoizedState=t},useState:function(t){t=wf(t);var r=t.queue,a=Jg.bind(null,De,r);return r.dispatch=a,[t.memoizedState,a]},useDebugValue:Cf,useDeferredValue:function(t,r){var a=yn();return Rf(a,t,r)},useTransition:function(){var t=wf(!1);return t=Kg.bind(null,De,t.queue,!0,!1),yn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,r,a){var l=De,h=yn();if(Ke){if(a===void 0)throw Error(s(407));a=a()}else{if(a=r(),st===null)throw Error(s(349));(Be&124)!==0||bg(l,r,a)}h.memoizedState=a;var d={value:a,getSnapshot:r};return h.queue=d,zg(Ag.bind(null,l,d,t),[t]),l.flags|=2048,Ra(9,Fu(),wg.bind(null,l,d,a,r),null),a},useId:function(){var t=yn(),r=st.identifierPrefix;if(Ke){var a=Hi,l=qi;a=(l&~(1<<32-tn(l)-1)).toString(32)+a,r="«"+r+"R"+a,a=Bu++,0<a&&(r+="H"+a.toString(32)),r+="»"}else a=bb++,r="«"+r+"r"+a.toString(32)+"»";return t.memoizedState=r},useHostTransitionStatus:If,useFormState:Vg,useActionState:Vg,useOptimistic:function(t){var r=yn();r.memoizedState=r.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=a,r=Df.bind(null,De,!0,a),a.dispatch=r,[t,r]},useMemoCache:Ef,useCacheRefresh:function(){return yn().memoizedState=Nb.bind(null,De)}},iy={readContext:nn,use:qu,useCallback:Yg,useContext:nn,useEffect:jg,useImperativeHandle:Fg,useInsertionEffect:Bg,useLayoutEffect:qg,useMemo:Gg,useReducer:Hu,useRef:Ug,useState:function(){return Hu(Gi)},useDebugValue:Cf,useDeferredValue:function(t,r){var a=It();return Xg(a,et.memoizedState,t,r)},useTransition:function(){var t=Hu(Gi)[0],r=It().memoizedState;return[typeof t=="boolean"?t:Jo(t),r]},useSyncExternalStore:Sg,useId:Zg,useHostTransitionStatus:If,useFormState:kg,useActionState:kg,useOptimistic:function(t,r){var a=It();return Ng(a,et,t,r)},useMemoCache:Ef,useCacheRefresh:Wg},Db={readContext:nn,use:qu,useCallback:Yg,useContext:nn,useEffect:jg,useImperativeHandle:Fg,useInsertionEffect:Bg,useLayoutEffect:qg,useMemo:Gg,useReducer:bf,useRef:Ug,useState:function(){return bf(Gi)},useDebugValue:Cf,useDeferredValue:function(t,r){var a=It();return et===null?Rf(a,t,r):Xg(a,et.memoizedState,t,r)},useTransition:function(){var t=bf(Gi)[0],r=It().memoizedState;return[typeof t=="boolean"?t:Jo(t),r]},useSyncExternalStore:Sg,useId:Zg,useHostTransitionStatus:If,useFormState:Lg,useActionState:Lg,useOptimistic:function(t,r){var a=It();return et!==null?Ng(a,et,t,r):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ef,useCacheRefresh:Wg},Na=null,nl=0;function Ku(t){var r=nl;return nl+=1,Na===null&&(Na=[]),mg(Na,t,r)}function il(t,r){r=r.props.ref,t.ref=r!==void 0?r:null}function Qu(t,r){throw r.$$typeof===b?Error(s(525)):(t=Object.prototype.toString.call(r),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t)))}function ry(t){var r=t._init;return r(t._payload)}function sy(t){function r(L,P){if(t){var j=L.deletions;j===null?(L.deletions=[P],L.flags|=16):j.push(P)}}function a(L,P){if(!t)return null;for(;P!==null;)r(L,P),P=P.sibling;return null}function l(L){for(var P=new Map;L!==null;)L.key!==null?P.set(L.key,L):P.set(L.index,L),L=L.sibling;return P}function h(L,P){return L=Bi(L,P),L.index=0,L.sibling=null,L}function d(L,P,j){return L.index=j,t?(j=L.alternate,j!==null?(j=j.index,j<P?(L.flags|=67108866,P):j):(L.flags|=67108866,P)):(L.flags|=1048576,P)}function _(L){return t&&L.alternate===null&&(L.flags|=67108866),L}function E(L,P,j,Q){return P===null||P.tag!==6?(P=$h(j,L.mode,Q),P.return=L,P):(P=h(P,j),P.return=L,P)}function R(L,P,j,Q){var de=j.type;return de===U?K(L,P,j.props.children,Q,j.key):P!==null&&(P.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===A&&ry(de)===P.type)?(P=h(P,j.props),il(P,j),P.return=L,P):(P=Ou(j.type,j.key,j.props,null,L.mode,Q),il(P,j),P.return=L,P)}function B(L,P,j,Q){return P===null||P.tag!==4||P.stateNode.containerInfo!==j.containerInfo||P.stateNode.implementation!==j.implementation?(P=Zh(j,L.mode,Q),P.return=L,P):(P=h(P,j.children||[]),P.return=L,P)}function K(L,P,j,Q,de){return P===null||P.tag!==7?(P=ws(j,L.mode,Q,de),P.return=L,P):(P=h(P,j),P.return=L,P)}function Z(L,P,j){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=$h(""+P,L.mode,j),P.return=L,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case w:return j=Ou(P.type,P.key,P.props,null,L.mode,j),il(j,P),j.return=L,j;case k:return P=Zh(P,L.mode,j),P.return=L,P;case A:var Q=P._init;return P=Q(P._payload),Z(L,P,j)}if(Me(P)||x(P))return P=ws(P,L.mode,j,null),P.return=L,P;if(typeof P.then=="function")return Z(L,Ku(P),j);if(P.$$typeof===te)return Z(L,ku(L,P),j);Qu(L,P)}return null}function q(L,P,j,Q){var de=P!==null?P.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return de!==null?null:E(L,P,""+j,Q);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case w:return j.key===de?R(L,P,j,Q):null;case k:return j.key===de?B(L,P,j,Q):null;case A:return de=j._init,j=de(j._payload),q(L,P,j,Q)}if(Me(j)||x(j))return de!==null?null:K(L,P,j,Q,null);if(typeof j.then=="function")return q(L,P,Ku(j),Q);if(j.$$typeof===te)return q(L,P,ku(L,j),Q);Qu(L,j)}return null}function H(L,P,j,Q,de){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return L=L.get(j)||null,E(P,L,""+Q,de);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case w:return L=L.get(Q.key===null?j:Q.key)||null,R(P,L,Q,de);case k:return L=L.get(Q.key===null?j:Q.key)||null,B(P,L,Q,de);case A:var Oe=Q._init;return Q=Oe(Q._payload),H(L,P,j,Q,de)}if(Me(Q)||x(Q))return L=L.get(j)||null,K(P,L,Q,de,null);if(typeof Q.then=="function")return H(L,P,j,Ku(Q),de);if(Q.$$typeof===te)return H(L,P,j,ku(P,Q),de);Qu(P,Q)}return null}function we(L,P,j,Q){for(var de=null,Oe=null,ye=P,Se=P=0,Yt=null;ye!==null&&Se<j.length;Se++){ye.index>Se?(Yt=ye,ye=null):Yt=ye.sibling;var Xe=q(L,ye,j[Se],Q);if(Xe===null){ye===null&&(ye=Yt);break}t&&ye&&Xe.alternate===null&&r(L,ye),P=d(Xe,P,Se),Oe===null?de=Xe:Oe.sibling=Xe,Oe=Xe,ye=Yt}if(Se===j.length)return a(L,ye),Ke&&Cs(L,Se),de;if(ye===null){for(;Se<j.length;Se++)ye=Z(L,j[Se],Q),ye!==null&&(P=d(ye,P,Se),Oe===null?de=ye:Oe.sibling=ye,Oe=ye);return Ke&&Cs(L,Se),de}for(ye=l(ye);Se<j.length;Se++)Yt=H(ye,L,Se,j[Se],Q),Yt!==null&&(t&&Yt.alternate!==null&&ye.delete(Yt.key===null?Se:Yt.key),P=d(Yt,P,Se),Oe===null?de=Yt:Oe.sibling=Yt,Oe=Yt);return t&&ye.forEach(function(kr){return r(L,kr)}),Ke&&Cs(L,Se),de}function Ee(L,P,j,Q){if(j==null)throw Error(s(151));for(var de=null,Oe=null,ye=P,Se=P=0,Yt=null,Xe=j.next();ye!==null&&!Xe.done;Se++,Xe=j.next()){ye.index>Se?(Yt=ye,ye=null):Yt=ye.sibling;var kr=q(L,ye,Xe.value,Q);if(kr===null){ye===null&&(ye=Yt);break}t&&ye&&kr.alternate===null&&r(L,ye),P=d(kr,P,Se),Oe===null?de=kr:Oe.sibling=kr,Oe=kr,ye=Yt}if(Xe.done)return a(L,ye),Ke&&Cs(L,Se),de;if(ye===null){for(;!Xe.done;Se++,Xe=j.next())Xe=Z(L,Xe.value,Q),Xe!==null&&(P=d(Xe,P,Se),Oe===null?de=Xe:Oe.sibling=Xe,Oe=Xe);return Ke&&Cs(L,Se),de}for(ye=l(ye);!Xe.done;Se++,Xe=j.next())Xe=H(ye,L,Se,Xe.value,Q),Xe!==null&&(t&&Xe.alternate!==null&&ye.delete(Xe.key===null?Se:Xe.key),P=d(Xe,P,Se),Oe===null?de=Xe:Oe.sibling=Xe,Oe=Xe);return t&&ye.forEach(function(Ow){return r(L,Ow)}),Ke&&Cs(L,Se),de}function nt(L,P,j,Q){if(typeof j=="object"&&j!==null&&j.type===U&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case w:e:{for(var de=j.key;P!==null;){if(P.key===de){if(de=j.type,de===U){if(P.tag===7){a(L,P.sibling),Q=h(P,j.props.children),Q.return=L,L=Q;break e}}else if(P.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===A&&ry(de)===P.type){a(L,P.sibling),Q=h(P,j.props),il(Q,j),Q.return=L,L=Q;break e}a(L,P);break}else r(L,P);P=P.sibling}j.type===U?(Q=ws(j.props.children,L.mode,Q,j.key),Q.return=L,L=Q):(Q=Ou(j.type,j.key,j.props,null,L.mode,Q),il(Q,j),Q.return=L,L=Q)}return _(L);case k:e:{for(de=j.key;P!==null;){if(P.key===de)if(P.tag===4&&P.stateNode.containerInfo===j.containerInfo&&P.stateNode.implementation===j.implementation){a(L,P.sibling),Q=h(P,j.children||[]),Q.return=L,L=Q;break e}else{a(L,P);break}else r(L,P);P=P.sibling}Q=Zh(j,L.mode,Q),Q.return=L,L=Q}return _(L);case A:return de=j._init,j=de(j._payload),nt(L,P,j,Q)}if(Me(j))return we(L,P,j,Q);if(x(j)){if(de=x(j),typeof de!="function")throw Error(s(150));return j=de.call(j),Ee(L,P,j,Q)}if(typeof j.then=="function")return nt(L,P,Ku(j),Q);if(j.$$typeof===te)return nt(L,P,ku(L,j),Q);Qu(L,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,P!==null&&P.tag===6?(a(L,P.sibling),Q=h(P,j),Q.return=L,L=Q):(a(L,P),Q=$h(j,L.mode,Q),Q.return=L,L=Q),_(L)):a(L,P)}return function(L,P,j,Q){try{nl=0;var de=nt(L,P,j,Q);return Na=null,de}catch(ye){if(ye===Xo||ye===Lu)throw ye;var Oe=wn(29,ye,null,L.mode);return Oe.lanes=Q,Oe.return=L,Oe}finally{}}}var Ia=sy(!0),ay=sy(!1),zn=$(null),mi=null;function Tr(t){var r=t.alternate;J(Ut,Ut.current&1),J(zn,t),mi===null&&(r===null||wa.current!==null||r.memoizedState!==null)&&(mi=t)}function oy(t){if(t.tag===22){if(J(Ut,Ut.current),J(zn,t),mi===null){var r=t.alternate;r!==null&&r.memoizedState!==null&&(mi=t)}}else Er()}function Er(){J(Ut,Ut.current),J(zn,zn.current)}function Xi(t){se(zn),mi===t&&(mi=null),se(Ut)}var Ut=$(0);function $u(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Td(a)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Of(t,r,a,l){r=t.memoizedState,a=a(l,r),a=a==null?r:T({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Mf={enqueueSetState:function(t,r,a){t=t._reactInternals;var l=Nn(),h=yr(l);h.payload=r,a!=null&&(h.callback=a),r=vr(t,h,l),r!==null&&(In(r,t,l),Qo(r,t,l))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var l=Nn(),h=yr(l);h.tag=1,h.payload=r,a!=null&&(h.callback=a),r=vr(t,h,l),r!==null&&(In(r,t,l),Qo(r,t,l))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=Nn(),l=yr(a);l.tag=2,r!=null&&(l.callback=r),r=vr(t,l,a),r!==null&&(In(r,t,a),Qo(r,t,a))}};function ly(t,r,a,l,h,d,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,_):r.prototype&&r.prototype.isPureReactComponent?!zo(a,l)||!zo(h,d):!0}function uy(t,r,a,l){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,l),r.state!==t&&Mf.enqueueReplaceState(r,r.state,null)}function Ps(t,r){var a=r;if("ref"in r){a={};for(var l in r)l!=="ref"&&(a[l]=r[l])}if(t=t.defaultProps){a===r&&(a=T({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}var Zu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function cy(t){Zu(t)}function hy(t){console.error(t)}function fy(t){Zu(t)}function Wu(t,r){try{var a=t.onUncaughtError;a(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function dy(t,r,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Pf(t,r,a){return a=yr(a),a.tag=3,a.payload={element:null},a.callback=function(){Wu(t,r)},a}function my(t){return t=yr(t),t.tag=3,t}function py(t,r,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;t.payload=function(){return h(d)},t.callback=function(){dy(r,a,l)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){dy(r,a,l),typeof h!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function Ob(t,r,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=a.alternate,r!==null&&Fo(r,a,h,!0),a=zn.current,a!==null){switch(a.tag){case 13:return mi===null?id():a.alternate===null&&yt===0&&(yt=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===lf?a.flags|=16384:(r=a.updateQueue,r===null?a.updateQueue=new Set([l]):r.add(l),sd(t,l,h)),!1;case 22:return a.flags|=65536,l===lf?a.flags|=16384:(r=a.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=r):(a=r.retryQueue,a===null?r.retryQueue=new Set([l]):a.add(l)),sd(t,l,h)),!1}throw Error(s(435,a.tag))}return sd(t,l,h),id(),!1}if(Ke)return r=zn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=h,l!==ef&&(t=Error(s(422),{cause:l}),Ho(kn(t,a)))):(l!==ef&&(r=Error(s(423),{cause:l}),Ho(kn(r,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=kn(l,a),h=Pf(t.stateNode,l,h),hf(t,h),yt!==4&&(yt=2)),!1;var d=Error(s(520),{cause:l});if(d=kn(d,a),cl===null?cl=[d]:cl.push(d),yt!==4&&(yt=2),r===null)return!0;l=kn(l,a),a=r;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=Pf(a.stateNode,l,t),hf(a,t),!1;case 1:if(r=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Rr===null||!Rr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=my(h),py(h,t,a,l),hf(a,h),!1}a=a.return}while(a!==null);return!1}var gy=Error(s(461)),Ht=!1;function Qt(t,r,a,l){r.child=t===null?ay(r,null,a,l):Ia(r,t.child,a,l)}function yy(t,r,a,l,h){a=a.render;var d=r.ref;if("ref"in l){var _={};for(var E in l)E!=="ref"&&(_[E]=l[E])}else _=l;return Ds(r),l=gf(t,r,a,_,d,h),E=yf(),t!==null&&!Ht?(vf(t,r,h),Ki(t,r,h)):(Ke&&E&&Wh(r),r.flags|=1,Qt(t,r,l,h),r.child)}function vy(t,r,a,l,h){if(t===null){var d=a.type;return typeof d=="function"&&!Qh(d)&&d.defaultProps===void 0&&a.compare===null?(r.tag=15,r.type=d,_y(t,r,d,l,h)):(t=Ou(a.type,null,l,r,r.mode,h),t.ref=r.ref,t.return=r,r.child=t)}if(d=t.child,!Bf(t,h)){var _=d.memoizedProps;if(a=a.compare,a=a!==null?a:zo,a(_,l)&&t.ref===r.ref)return Ki(t,r,h)}return r.flags|=1,t=Bi(d,l),t.ref=r.ref,t.return=r,r.child=t}function _y(t,r,a,l,h){if(t!==null){var d=t.memoizedProps;if(zo(d,l)&&t.ref===r.ref)if(Ht=!1,r.pendingProps=l=d,Bf(t,h))(t.flags&131072)!==0&&(Ht=!0);else return r.lanes=t.lanes,Ki(t,r,h)}return Vf(t,r,a,l,h)}function Ty(t,r,a){var l=r.pendingProps,h=l.children,d=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((r.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,t!==null){for(h=r.child=t.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;r.childLanes=d&~l}else r.childLanes=0,r.child=null;return Ey(t,r,l,a)}if((a&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},t!==null&&xu(r,d!==null?d.cachePool:null),d!==null?_g(r,d):df(),oy(r);else return r.lanes=r.childLanes=536870912,Ey(t,r,d!==null?d.baseLanes|a:a,a)}else d!==null?(xu(r,d.cachePool),_g(r,d),Er(),r.memoizedState=null):(t!==null&&xu(r,null),df(),Er());return Qt(t,r,h,a),r.child}function Ey(t,r,a,l){var h=of();return h=h===null?null:{parent:Lt._currentValue,pool:h},r.memoizedState={baseLanes:a,cachePool:h},t!==null&&xu(r,null),df(),oy(r),t!==null&&Fo(t,r,l,!0),null}function Ju(t,r){var a=r.ref;if(a===null)t!==null&&t.ref!==null&&(r.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(r.flags|=4194816)}}function Vf(t,r,a,l,h){return Ds(r),a=gf(t,r,a,l,void 0,h),l=yf(),t!==null&&!Ht?(vf(t,r,h),Ki(t,r,h)):(Ke&&l&&Wh(r),r.flags|=1,Qt(t,r,a,h),r.child)}function Sy(t,r,a,l,h,d){return Ds(r),r.updateQueue=null,a=Eg(r,l,a,h),Tg(t),l=yf(),t!==null&&!Ht?(vf(t,r,d),Ki(t,r,d)):(Ke&&l&&Wh(r),r.flags|=1,Qt(t,r,a,d),r.child)}function by(t,r,a,l,h){if(Ds(r),r.stateNode===null){var d=_a,_=a.contextType;typeof _=="object"&&_!==null&&(d=nn(_)),d=new a(l,d),r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Mf,r.stateNode=d,d._reactInternals=r,d=r.stateNode,d.props=l,d.state=r.memoizedState,d.refs={},uf(r),_=a.contextType,d.context=typeof _=="object"&&_!==null?nn(_):_a,d.state=r.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Of(r,a,_,l),d.state=r.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&Mf.enqueueReplaceState(d,d.state,null),Zo(r,l,d,h),$o(),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(t===null){d=r.stateNode;var E=r.memoizedProps,R=Ps(a,E);d.props=R;var B=d.context,K=a.contextType;_=_a,typeof K=="object"&&K!==null&&(_=nn(K));var Z=a.getDerivedStateFromProps;K=typeof Z=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=r.pendingProps!==E,K||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||B!==_)&&uy(r,d,l,_),gr=!1;var q=r.memoizedState;d.state=q,Zo(r,l,d,h),$o(),B=r.memoizedState,E||q!==B||gr?(typeof Z=="function"&&(Of(r,a,Z,l),B=r.memoizedState),(R=gr||ly(r,a,R,l,q,B,_))?(K||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=B),d.props=l,d.state=B,d.context=_,l=R):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{d=r.stateNode,cf(t,r),_=r.memoizedProps,K=Ps(a,_),d.props=K,Z=r.pendingProps,q=d.context,B=a.contextType,R=_a,typeof B=="object"&&B!==null&&(R=nn(B)),E=a.getDerivedStateFromProps,(B=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==Z||q!==R)&&uy(r,d,l,R),gr=!1,q=r.memoizedState,d.state=q,Zo(r,l,d,h),$o();var H=r.memoizedState;_!==Z||q!==H||gr||t!==null&&t.dependencies!==null&&Vu(t.dependencies)?(typeof E=="function"&&(Of(r,a,E,l),H=r.memoizedState),(K=gr||ly(r,a,K,l,q,H,R)||t!==null&&t.dependencies!==null&&Vu(t.dependencies))?(B||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,H,R),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,H,R)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=H),d.props=l,d.state=H,d.context=R,l=K):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&q===t.memoizedState||(r.flags|=1024),l=!1)}return d=l,Ju(t,r),l=(r.flags&128)!==0,d||l?(d=r.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),r.flags|=1,t!==null&&l?(r.child=Ia(r,t.child,null,h),r.child=Ia(r,null,a,h)):Qt(t,r,a,h),r.memoizedState=d.state,t=r.child):t=Ki(t,r,h),t}function wy(t,r,a,l){return qo(),r.flags|=256,Qt(t,r,a,l),r.child}var kf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xf(t){return{baseLanes:t,cachePool:hg()}}function Lf(t,r,a){return t=t!==null?t.childLanes&~a:0,r&&(t|=jn),t}function Ay(t,r,a){var l=r.pendingProps,h=!1,d=(r.flags&128)!==0,_;if((_=d)||(_=t!==null&&t.memoizedState===null?!1:(Ut.current&2)!==0),_&&(h=!0,r.flags&=-129),_=(r.flags&32)!==0,r.flags&=-33,t===null){if(Ke){if(h?Tr(r):Er(),Ke){var E=gt,R;if(R=E){e:{for(R=E,E=di;R.nodeType!==8;){if(!E){E=null;break e}if(R=Zn(R.nextSibling),R===null){E=null;break e}}E=R}E!==null?(r.memoizedState={dehydrated:E,treeContext:As!==null?{id:qi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},R=wn(18,null,null,0),R.stateNode=E,R.return=r,r.child=R,pn=r,gt=null,R=!0):R=!1}R||Ns(r)}if(E=r.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return Td(E)?r.lanes=32:r.lanes=536870912,null;Xi(r)}return E=l.children,l=l.fallback,h?(Er(),h=r.mode,E=ec({mode:"hidden",children:E},h),l=ws(l,h,a,null),E.return=r,l.return=r,E.sibling=l,r.child=E,h=r.child,h.memoizedState=xf(a),h.childLanes=Lf(t,_,a),r.memoizedState=kf,l):(Tr(r),Uf(r,E))}if(R=t.memoizedState,R!==null&&(E=R.dehydrated,E!==null)){if(d)r.flags&256?(Tr(r),r.flags&=-257,r=zf(t,r,a)):r.memoizedState!==null?(Er(),r.child=t.child,r.flags|=128,r=null):(Er(),h=l.fallback,E=r.mode,l=ec({mode:"visible",children:l.children},E),h=ws(h,E,a,null),h.flags|=2,l.return=r,h.return=r,l.sibling=h,r.child=l,Ia(r,t.child,null,a),l=r.child,l.memoizedState=xf(a),l.childLanes=Lf(t,_,a),r.memoizedState=kf,r=h);else if(Tr(r),Td(E)){if(_=E.nextSibling&&E.nextSibling.dataset,_)var B=_.dgst;_=B,l=Error(s(419)),l.stack="",l.digest=_,Ho({value:l,source:null,stack:null}),r=zf(t,r,a)}else if(Ht||Fo(t,r,a,!1),_=(a&t.childLanes)!==0,Ht||_){if(_=st,_!==null&&(l=a&-a,l=(l&42)!==0?1:lr(l),l=(l&(_.suspendedLanes|a))!==0?0:l,l!==0&&l!==R.retryLane))throw R.retryLane=l,va(t,l),In(_,t,l),gy;E.data==="$?"||id(),r=zf(t,r,a)}else E.data==="$?"?(r.flags|=192,r.child=t.child,r=null):(t=R.treeContext,gt=Zn(E.nextSibling),pn=r,Ke=!0,Rs=null,di=!1,t!==null&&(Ln[Un++]=qi,Ln[Un++]=Hi,Ln[Un++]=As,qi=t.id,Hi=t.overflow,As=r),r=Uf(r,l.children),r.flags|=4096);return r}return h?(Er(),h=l.fallback,E=r.mode,R=t.child,B=R.sibling,l=Bi(R,{mode:"hidden",children:l.children}),l.subtreeFlags=R.subtreeFlags&65011712,B!==null?h=Bi(B,h):(h=ws(h,E,a,null),h.flags|=2),h.return=r,l.return=r,l.sibling=h,r.child=l,l=h,h=r.child,E=t.child.memoizedState,E===null?E=xf(a):(R=E.cachePool,R!==null?(B=Lt._currentValue,R=R.parent!==B?{parent:B,pool:B}:R):R=hg(),E={baseLanes:E.baseLanes|a,cachePool:R}),h.memoizedState=E,h.childLanes=Lf(t,_,a),r.memoizedState=kf,l):(Tr(r),a=t.child,t=a.sibling,a=Bi(a,{mode:"visible",children:l.children}),a.return=r,a.sibling=null,t!==null&&(_=r.deletions,_===null?(r.deletions=[t],r.flags|=16):_.push(t)),r.child=a,r.memoizedState=null,a)}function Uf(t,r){return r=ec({mode:"visible",children:r},t.mode),r.return=t,t.child=r}function ec(t,r){return t=wn(22,t,null,r),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function zf(t,r,a){return Ia(r,t.child,null,a),t=Uf(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Cy(t,r,a){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r),nf(t.return,r,a)}function jf(t,r,a,l,h){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=r,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function Ry(t,r,a){var l=r.pendingProps,h=l.revealOrder,d=l.tail;if(Qt(t,r,l.children,a),l=Ut.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cy(t,a,r);else if(t.tag===19)Cy(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(J(Ut,l),h){case"forwards":for(a=r.child,h=null;a!==null;)t=a.alternate,t!==null&&$u(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=r.child,r.child=null):(h=a.sibling,a.sibling=null),jf(r,!1,h,a,d);break;case"backwards":for(a=null,h=r.child,r.child=null;h!==null;){if(t=h.alternate,t!==null&&$u(t)===null){r.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}jf(r,!0,a,null,d);break;case"together":jf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ki(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),Cr|=r.lanes,(a&r.childLanes)===0)if(t!==null){if(Fo(t,r,a,!1),(a&r.childLanes)===0)return null}else return null;if(t!==null&&r.child!==t.child)throw Error(s(153));if(r.child!==null){for(t=r.child,a=Bi(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=Bi(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function Bf(t,r){return(t.lanes&r)!==0?!0:(t=t.dependencies,!!(t!==null&&Vu(t)))}function Mb(t,r,a){switch(r.tag){case 3:Le(r,r.stateNode.containerInfo),pr(r,Lt,t.memoizedState.cache),qo();break;case 27:case 5:ae(r);break;case 4:Le(r,r.stateNode.containerInfo);break;case 10:pr(r,r.type,r.memoizedProps.value);break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(Tr(r),r.flags|=128,null):(a&r.child.childLanes)!==0?Ay(t,r,a):(Tr(r),t=Ki(t,r,a),t!==null?t.sibling:null);Tr(r);break;case 19:var h=(t.flags&128)!==0;if(l=(a&r.childLanes)!==0,l||(Fo(t,r,a,!1),l=(a&r.childLanes)!==0),h){if(l)return Ry(t,r,a);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),J(Ut,Ut.current),l)break;return null;case 22:case 23:return r.lanes=0,Ty(t,r,a);case 24:pr(r,Lt,t.memoizedState.cache)}return Ki(t,r,a)}function Ny(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps)Ht=!0;else{if(!Bf(t,a)&&(r.flags&128)===0)return Ht=!1,Mb(t,r,a);Ht=(t.flags&131072)!==0}else Ht=!1,Ke&&(r.flags&1048576)!==0&&rg(r,Pu,r.index);switch(r.lanes=0,r.tag){case 16:e:{t=r.pendingProps;var l=r.elementType,h=l._init;if(l=h(l._payload),r.type=l,typeof l=="function")Qh(l)?(t=Ps(l,t),r.tag=1,r=by(null,r,l,t,a)):(r.tag=0,r=Vf(null,r,l,t,a));else{if(l!=null){if(h=l.$$typeof,h===ge){r.tag=11,r=yy(null,r,l,t,a);break e}else if(h===V){r.tag=14,r=vy(null,r,l,t,a);break e}}throw r=Ge(l)||l,Error(s(306,r,""))}}return r;case 0:return Vf(t,r,r.type,r.pendingProps,a);case 1:return l=r.type,h=Ps(l,r.pendingProps),by(t,r,l,h,a);case 3:e:{if(Le(r,r.stateNode.containerInfo),t===null)throw Error(s(387));l=r.pendingProps;var d=r.memoizedState;h=d.element,cf(t,r),Zo(r,l,null,a);var _=r.memoizedState;if(l=_.cache,pr(r,Lt,l),l!==d.cache&&rf(r,[Lt],a,!0),$o(),l=_.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:_.cache},r.updateQueue.baseState=d,r.memoizedState=d,r.flags&256){r=wy(t,r,l,a);break e}else if(l!==h){h=kn(Error(s(424)),r),Ho(h),r=wy(t,r,l,a);break e}else{switch(t=r.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(gt=Zn(t.firstChild),pn=r,Ke=!0,Rs=null,di=!0,a=ay(r,null,l,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(qo(),l===h){r=Ki(t,r,a);break e}Qt(t,r,l,a)}r=r.child}return r;case 26:return Ju(t,r),t===null?(a=Mv(r.type,null,r.pendingProps,null))?r.memoizedState=a:Ke||(a=r.type,t=r.pendingProps,l=mc(Te.current).createElement(a),l[Vt]=r,l[Ct]=t,Zt(l,a,t),Et(l),r.stateNode=l):r.memoizedState=Mv(r.type,t.memoizedProps,r.pendingProps,t.memoizedState),null;case 27:return ae(r),t===null&&Ke&&(l=r.stateNode=Iv(r.type,r.pendingProps,Te.current),pn=r,di=!0,h=gt,Dr(r.type)?(Ed=h,gt=Zn(l.firstChild)):gt=h),Qt(t,r,r.pendingProps.children,a),Ju(t,r),t===null&&(r.flags|=4194304),r.child;case 5:return t===null&&Ke&&((h=l=gt)&&(l=aw(l,r.type,r.pendingProps,di),l!==null?(r.stateNode=l,pn=r,gt=Zn(l.firstChild),di=!1,h=!0):h=!1),h||Ns(r)),ae(r),h=r.type,d=r.pendingProps,_=t!==null?t.memoizedProps:null,l=d.children,yd(h,d)?l=null:_!==null&&yd(h,_)&&(r.flags|=32),r.memoizedState!==null&&(h=gf(t,r,wb,null,null,a),_l._currentValue=h),Ju(t,r),Qt(t,r,l,a),r.child;case 6:return t===null&&Ke&&((t=a=gt)&&(a=ow(a,r.pendingProps,di),a!==null?(r.stateNode=a,pn=r,gt=null,t=!0):t=!1),t||Ns(r)),null;case 13:return Ay(t,r,a);case 4:return Le(r,r.stateNode.containerInfo),l=r.pendingProps,t===null?r.child=Ia(r,null,l,a):Qt(t,r,l,a),r.child;case 11:return yy(t,r,r.type,r.pendingProps,a);case 7:return Qt(t,r,r.pendingProps,a),r.child;case 8:return Qt(t,r,r.pendingProps.children,a),r.child;case 12:return Qt(t,r,r.pendingProps.children,a),r.child;case 10:return l=r.pendingProps,pr(r,r.type,l.value),Qt(t,r,l.children,a),r.child;case 9:return h=r.type._context,l=r.pendingProps.children,Ds(r),h=nn(h),l=l(h),r.flags|=1,Qt(t,r,l,a),r.child;case 14:return vy(t,r,r.type,r.pendingProps,a);case 15:return _y(t,r,r.type,r.pendingProps,a);case 19:return Ry(t,r,a);case 31:return l=r.pendingProps,a=r.mode,l={mode:l.mode,children:l.children},t===null?(a=ec(l,a),a.ref=r.ref,r.child=a,a.return=r,r=a):(a=Bi(t.child,l),a.ref=r.ref,r.child=a,a.return=r,r=a),r;case 22:return Ty(t,r,a);case 24:return Ds(r),l=nn(Lt),t===null?(h=of(),h===null&&(h=st,d=sf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),r.memoizedState={parent:l,cache:h},uf(r),pr(r,Lt,h)):((t.lanes&a)!==0&&(cf(t,r),Zo(r,null,null,a),$o()),h=t.memoizedState,d=r.memoizedState,h.parent!==l?(h={parent:l,cache:l},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),pr(r,Lt,l)):(l=d.cache,pr(r,Lt,l),l!==h.cache&&rf(r,[Lt],a,!0))),Qt(t,r,r.pendingProps.children,a),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function Qi(t){t.flags|=4}function Iy(t,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Lv(r)){if(r=zn.current,r!==null&&((Be&4194048)===Be?mi!==null:(Be&62914560)!==Be&&(Be&536870912)===0||r!==mi))throw Ko=lf,fg;t.flags|=8192}}function tc(t,r){r!==null&&(t.flags|=4),t.flags&16384&&(r=t.tag!==22?Eo():536870912,t.lanes|=r,Pa|=r)}function rl(t,r){if(!Ke)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dt(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(r)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,r}function Pb(t,r,a){var l=r.pendingProps;switch(Jh(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(r),null;case 1:return dt(r),null;case 3:return a=r.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),Yi(Lt),Pt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Bo(r)?Qi(r):t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,og())),dt(r),null;case 26:return a=r.memoizedState,t===null?(Qi(r),a!==null?(dt(r),Iy(r,a)):(dt(r),r.flags&=-16777217)):a?a!==t.memoizedState?(Qi(r),dt(r),Iy(r,a)):(dt(r),r.flags&=-16777217):(t.memoizedProps!==l&&Qi(r),dt(r),r.flags&=-16777217),null;case 27:le(r),a=Te.current;var h=r.type;if(t!==null&&r.stateNode!=null)t.memoizedProps!==l&&Qi(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return dt(r),null}t=pe.current,Bo(r)?sg(r):(t=Iv(h,l,a),r.stateNode=t,Qi(r))}return dt(r),null;case 5:if(le(r),a=r.type,t!==null&&r.stateNode!=null)t.memoizedProps!==l&&Qi(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return dt(r),null}if(t=pe.current,Bo(r))sg(r);else{switch(h=mc(Te.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}t[Vt]=r,t[Ct]=l;e:for(h=r.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===r)break e;for(;h.sibling===null;){if(h.return===null||h.return===r)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}r.stateNode=t;e:switch(Zt(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Qi(r)}}return dt(r),r.flags&=-16777217,null;case 6:if(t&&r.stateNode!=null)t.memoizedProps!==l&&Qi(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(s(166));if(t=Te.current,Bo(r)){if(t=r.stateNode,a=r.memoizedProps,l=null,h=pn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[Vt]=r,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Sv(t.nodeValue,a)),t||Ns(r)}else t=mc(t).createTextNode(l),t[Vt]=r,r.stateNode=t}return dt(r),null;case 13:if(l=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=Bo(r),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Vt]=r}else qo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;dt(r),h=!1}else h=og(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return r.flags&256?(Xi(r),r):(Xi(r),null)}if(Xi(r),(r.flags&128)!==0)return r.lanes=a,r;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=r.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==t&&a&&(r.child.flags|=8192),tc(r,r.updateQueue),dt(r),null;case 4:return Pt(),t===null&&fd(r.stateNode.containerInfo),dt(r),null;case 10:return Yi(r.type),dt(r),null;case 19:if(se(Ut),h=r.memoizedState,h===null)return dt(r),null;if(l=(r.flags&128)!==0,d=h.rendering,d===null)if(l)rl(h,!1);else{if(yt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(d=$u(t),d!==null){for(r.flags|=128,rl(h,!1),t=d.updateQueue,r.updateQueue=t,tc(r,t),r.subtreeFlags=0,t=a,a=r.child;a!==null;)ig(a,t),a=a.sibling;return J(Ut,Ut.current&1|2),r.child}t=t.sibling}h.tail!==null&&_t()>rc&&(r.flags|=128,l=!0,rl(h,!1),r.lanes=4194304)}else{if(!l)if(t=$u(d),t!==null){if(r.flags|=128,l=!0,t=t.updateQueue,r.updateQueue=t,tc(r,t),rl(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Ke)return dt(r),null}else 2*_t()-h.renderingStartTime>rc&&a!==536870912&&(r.flags|=128,l=!0,rl(h,!1),r.lanes=4194304);h.isBackwards?(d.sibling=r.child,r.child=d):(t=h.last,t!==null?t.sibling=d:r.child=d,h.last=d)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=_t(),r.sibling=null,t=Ut.current,J(Ut,l?t&1|2:t&1),r):(dt(r),null);case 22:case 23:return Xi(r),mf(),l=r.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(a&536870912)!==0&&(r.flags&128)===0&&(dt(r),r.subtreeFlags&6&&(r.flags|=8192)):dt(r),a=r.updateQueue,a!==null&&tc(r,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==a&&(r.flags|=2048),t!==null&&se(Os),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),r.memoizedState.cache!==a&&(r.flags|=2048),Yi(Lt),dt(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function Vb(t,r){switch(Jh(r),r.tag){case 1:return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Yi(Lt),Pt(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 26:case 27:case 5:return le(r),null;case 13:if(Xi(r),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(s(340));qo()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return se(Ut),null;case 4:return Pt(),null;case 10:return Yi(r.type),null;case 22:case 23:return Xi(r),mf(),t!==null&&se(Os),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 24:return Yi(Lt),null;case 25:return null;default:return null}}function Dy(t,r){switch(Jh(r),r.tag){case 3:Yi(Lt),Pt();break;case 26:case 27:case 5:le(r);break;case 4:Pt();break;case 13:Xi(r);break;case 19:se(Ut);break;case 10:Yi(r.type);break;case 22:case 23:Xi(r),mf(),t!==null&&se(Os);break;case 24:Yi(Lt)}}function sl(t,r){try{var a=r.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&t)===t){l=void 0;var d=a.create,_=a.inst;l=d(),_.destroy=l}a=a.next}while(a!==h)}}catch(E){rt(r,r.return,E)}}function Sr(t,r,a){try{var l=r.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&t)===t){var _=l.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,h=r;var R=a,B=E;try{B()}catch(K){rt(h,R,K)}}}l=l.next}while(l!==d)}}catch(K){rt(r,r.return,K)}}function Oy(t){var r=t.updateQueue;if(r!==null){var a=t.stateNode;try{vg(r,a)}catch(l){rt(t,t.return,l)}}}function My(t,r,a){a.props=Ps(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){rt(t,r,l)}}function al(t,r){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(h){rt(t,r,h)}}function pi(t,r){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){rt(t,r,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){rt(t,r,h)}else a.current=null}function Py(t){var r=t.type,a=t.memoizedProps,l=t.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){rt(t,t.return,h)}}function qf(t,r,a){try{var l=t.stateNode;tw(l,t.type,a,r),l[Ct]=r}catch(h){rt(t,t.return,h)}}function Vy(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Dr(t.type)||t.tag===4}function Hf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Dr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ff(t,r,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,r):(r=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,r.appendChild(t),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=dc));else if(l!==4&&(l===27&&Dr(t.type)&&(a=t.stateNode,r=null),t=t.child,t!==null))for(Ff(t,r,a),t=t.sibling;t!==null;)Ff(t,r,a),t=t.sibling}function nc(t,r,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(l!==4&&(l===27&&Dr(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(nc(t,r,a),t=t.sibling;t!==null;)nc(t,r,a),t=t.sibling}function ky(t){var r=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,h=r.attributes;h.length;)r.removeAttributeNode(h[0]);Zt(r,l,a),r[Vt]=t,r[Ct]=a}catch(d){rt(t,t.return,d)}}var $i=!1,bt=!1,Yf=!1,xy=typeof WeakSet=="function"?WeakSet:Set,Ft=null;function kb(t,r){if(t=t.containerInfo,pd=Tc,t=Xp(t),qh(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var _=0,E=-1,R=-1,B=0,K=0,Z=t,q=null;t:for(;;){for(var H;Z!==a||h!==0&&Z.nodeType!==3||(E=_+h),Z!==d||l!==0&&Z.nodeType!==3||(R=_+l),Z.nodeType===3&&(_+=Z.nodeValue.length),(H=Z.firstChild)!==null;)q=Z,Z=H;for(;;){if(Z===t)break t;if(q===a&&++B===h&&(E=_),q===d&&++K===l&&(R=_),(H=Z.nextSibling)!==null)break;Z=q,q=Z.parentNode}Z=H}a=E===-1||R===-1?null:{start:E,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(gd={focusedElem:t,selectionRange:a},Tc=!1,Ft=r;Ft!==null;)if(r=Ft,t=r.child,(r.subtreeFlags&1024)!==0&&t!==null)t.return=r,Ft=t;else for(;Ft!==null;){switch(r=Ft,d=r.alternate,t=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=r,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var we=Ps(a.type,h,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(we,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(Ee){rt(a,a.return,Ee)}}break;case 3:if((t&1024)!==0){if(t=r.stateNode.containerInfo,a=t.nodeType,a===9)_d(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":_d(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=r.sibling,t!==null){t.return=r.return,Ft=t;break}Ft=r.return}}function Ly(t,r,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:br(t,a),l&4&&sl(5,a);break;case 1:if(br(t,a),l&4)if(t=a.stateNode,r===null)try{t.componentDidMount()}catch(_){rt(a,a.return,_)}else{var h=Ps(a.type,r.memoizedProps);r=r.memoizedState;try{t.componentDidUpdate(h,r,t.__reactInternalSnapshotBeforeUpdate)}catch(_){rt(a,a.return,_)}}l&64&&Oy(a),l&512&&al(a,a.return);break;case 3:if(br(t,a),l&64&&(t=a.updateQueue,t!==null)){if(r=null,a.child!==null)switch(a.child.tag){case 27:case 5:r=a.child.stateNode;break;case 1:r=a.child.stateNode}try{vg(t,r)}catch(_){rt(a,a.return,_)}}break;case 27:r===null&&l&4&&ky(a);case 26:case 5:br(t,a),r===null&&l&4&&Py(a),l&512&&al(a,a.return);break;case 12:br(t,a);break;case 13:br(t,a),l&4&&jy(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Fb.bind(null,a),lw(t,a))));break;case 22:if(l=a.memoizedState!==null||$i,!l){r=r!==null&&r.memoizedState!==null||bt,h=$i;var d=bt;$i=l,(bt=r)&&!d?wr(t,a,(a.subtreeFlags&8772)!==0):br(t,a),$i=h,bt=d}break;case 30:break;default:br(t,a)}}function Uy(t){var r=t.alternate;r!==null&&(t.alternate=null,Uy(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&hr(r)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ut=null,vn=!1;function Zi(t,r,a){for(a=a.child;a!==null;)zy(t,r,a),a=a.sibling}function zy(t,r,a){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(pt,a)}catch{}switch(a.tag){case 26:bt||pi(a,r),Zi(t,r,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:bt||pi(a,r);var l=ut,h=vn;Dr(a.type)&&(ut=a.stateNode,vn=!1),Zi(t,r,a),pl(a.stateNode),ut=l,vn=h;break;case 5:bt||pi(a,r);case 6:if(l=ut,h=vn,ut=null,Zi(t,r,a),ut=l,vn=h,ut!==null)if(vn)try{(ut.nodeType===9?ut.body:ut.nodeName==="HTML"?ut.ownerDocument.body:ut).removeChild(a.stateNode)}catch(d){rt(a,r,d)}else try{ut.removeChild(a.stateNode)}catch(d){rt(a,r,d)}break;case 18:ut!==null&&(vn?(t=ut,Rv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),bl(t)):Rv(ut,a.stateNode));break;case 4:l=ut,h=vn,ut=a.stateNode.containerInfo,vn=!0,Zi(t,r,a),ut=l,vn=h;break;case 0:case 11:case 14:case 15:bt||Sr(2,a,r),bt||Sr(4,a,r),Zi(t,r,a);break;case 1:bt||(pi(a,r),l=a.stateNode,typeof l.componentWillUnmount=="function"&&My(a,r,l)),Zi(t,r,a);break;case 21:Zi(t,r,a);break;case 22:bt=(l=bt)||a.memoizedState!==null,Zi(t,r,a),bt=l;break;default:Zi(t,r,a)}}function jy(t,r){if(r.memoizedState===null&&(t=r.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{bl(t)}catch(a){rt(r,r.return,a)}}function xb(t){switch(t.tag){case 13:case 19:var r=t.stateNode;return r===null&&(r=t.stateNode=new xy),r;case 22:return t=t.stateNode,r=t._retryCache,r===null&&(r=t._retryCache=new xy),r;default:throw Error(s(435,t.tag))}}function Gf(t,r){var a=xb(t);r.forEach(function(l){var h=Yb.bind(null,t,l);a.has(l)||(a.add(l),l.then(h,h))})}function An(t,r){var a=r.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=t,_=r,E=_;e:for(;E!==null;){switch(E.tag){case 27:if(Dr(E.type)){ut=E.stateNode,vn=!1;break e}break;case 5:ut=E.stateNode,vn=!1;break e;case 3:case 4:ut=E.stateNode.containerInfo,vn=!0;break e}E=E.return}if(ut===null)throw Error(s(160));zy(d,_,h),ut=null,vn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)By(r,t),r=r.sibling}var $n=null;function By(t,r){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:An(r,t),Cn(t),l&4&&(Sr(3,t,t.return),sl(3,t),Sr(5,t,t.return));break;case 1:An(r,t),Cn(t),l&512&&(bt||a===null||pi(a,a.return)),l&64&&$i&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=$n;if(An(r,t),Cn(t),l&512&&(bt||a===null||pi(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){e:{l=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[ls]||d[Vt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Zt(d,l,a),d[Vt]=t,Et(d),l=d;break e;case"link":var _=kv("link","href",h).get(l+(a.href||""));if(_){for(var E=0;E<_.length;E++)if(d=_[E],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(E,1);break t}}d=h.createElement(l),Zt(d,l,a),h.head.appendChild(d);break;case"meta":if(_=kv("meta","content",h).get(l+(a.content||""))){for(E=0;E<_.length;E++)if(d=_[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(E,1);break t}}d=h.createElement(l),Zt(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[Vt]=t,Et(d),l=d}t.stateNode=l}else xv(h,t.type,t.stateNode);else t.stateNode=Vv(h,l,t.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?xv(h,t.type,t.stateNode):Vv(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&qf(t,t.memoizedProps,a.memoizedProps)}break;case 27:An(r,t),Cn(t),l&512&&(bt||a===null||pi(a,a.return)),a!==null&&l&4&&qf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(An(r,t),Cn(t),l&512&&(bt||a===null||pi(a,a.return)),t.flags&32){h=t.stateNode;try{On(h,"")}catch(H){rt(t,t.return,H)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,qf(t,h,a!==null?a.memoizedProps:h)),l&1024&&(Yf=!0);break;case 6:if(An(r,t),Cn(t),l&4){if(t.stateNode===null)throw Error(s(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(H){rt(t,t.return,H)}}break;case 3:if(yc=null,h=$n,$n=pc(r.containerInfo),An(r,t),$n=h,Cn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{bl(r.containerInfo)}catch(H){rt(t,t.return,H)}Yf&&(Yf=!1,qy(t));break;case 4:l=$n,$n=pc(t.stateNode.containerInfo),An(r,t),Cn(t),$n=l;break;case 12:An(r,t),Cn(t);break;case 13:An(r,t),Cn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Wf=_t()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Gf(t,l)));break;case 22:h=t.memoizedState!==null;var R=a!==null&&a.memoizedState!==null,B=$i,K=bt;if($i=B||h,bt=K||R,An(r,t),bt=K,$i=B,Cn(t),l&8192)e:for(r=t.stateNode,r._visibility=h?r._visibility&-2:r._visibility|1,h&&(a===null||R||$i||bt||Vs(t)),a=null,r=t;;){if(r.tag===5||r.tag===26){if(a===null){R=a=r;try{if(d=R.stateNode,h)_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{E=R.stateNode;var Z=R.memoizedProps.style,q=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;E.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(H){rt(R,R.return,H)}}}else if(r.tag===6){if(a===null){R=r;try{R.stateNode.nodeValue=h?"":R.memoizedProps}catch(H){rt(R,R.return,H)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===t)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;a===r&&(a=null),r=r.return}a===r&&(a=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Gf(t,a))));break;case 19:An(r,t),Cn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Gf(t,l)));break;case 30:break;case 21:break;default:An(r,t),Cn(t)}}function Cn(t){var r=t.flags;if(r&2){try{for(var a,l=t.return;l!==null;){if(Vy(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Hf(t);nc(t,d,h);break;case 5:var _=a.stateNode;a.flags&32&&(On(_,""),a.flags&=-33);var E=Hf(t);nc(t,E,_);break;case 3:case 4:var R=a.stateNode.containerInfo,B=Hf(t);Ff(t,B,R);break;default:throw Error(s(161))}}catch(K){rt(t,t.return,K)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function qy(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var r=t;qy(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),t=t.sibling}}function br(t,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Ly(t,r.alternate,r),r=r.sibling}function Vs(t){for(t=t.child;t!==null;){var r=t;switch(r.tag){case 0:case 11:case 14:case 15:Sr(4,r,r.return),Vs(r);break;case 1:pi(r,r.return);var a=r.stateNode;typeof a.componentWillUnmount=="function"&&My(r,r.return,a),Vs(r);break;case 27:pl(r.stateNode);case 26:case 5:pi(r,r.return),Vs(r);break;case 22:r.memoizedState===null&&Vs(r);break;case 30:Vs(r);break;default:Vs(r)}t=t.sibling}}function wr(t,r,a){for(a=a&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,h=t,d=r,_=d.flags;switch(d.tag){case 0:case 11:case 15:wr(h,d,a),sl(4,d);break;case 1:if(wr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(B){rt(l,l.return,B)}if(l=d,h=l.updateQueue,h!==null){var E=l.stateNode;try{var R=h.shared.hiddenCallbacks;if(R!==null)for(h.shared.hiddenCallbacks=null,h=0;h<R.length;h++)yg(R[h],E)}catch(B){rt(l,l.return,B)}}a&&_&64&&Oy(d),al(d,d.return);break;case 27:ky(d);case 26:case 5:wr(h,d,a),a&&l===null&&_&4&&Py(d),al(d,d.return);break;case 12:wr(h,d,a);break;case 13:wr(h,d,a),a&&_&4&&jy(h,d);break;case 22:d.memoizedState===null&&wr(h,d,a),al(d,d.return);break;case 30:break;default:wr(h,d,a)}r=r.sibling}}function Xf(t,r){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(t=r.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Yo(a))}function Kf(t,r){t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&Yo(t))}function gi(t,r,a,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Hy(t,r,a,l),r=r.sibling}function Hy(t,r,a,l){var h=r.flags;switch(r.tag){case 0:case 11:case 15:gi(t,r,a,l),h&2048&&sl(9,r);break;case 1:gi(t,r,a,l);break;case 3:gi(t,r,a,l),h&2048&&(t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&Yo(t)));break;case 12:if(h&2048){gi(t,r,a,l),t=r.stateNode;try{var d=r.memoizedProps,_=d.id,E=d.onPostCommit;typeof E=="function"&&E(_,r.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(R){rt(r,r.return,R)}}else gi(t,r,a,l);break;case 13:gi(t,r,a,l);break;case 23:break;case 22:d=r.stateNode,_=r.alternate,r.memoizedState!==null?d._visibility&2?gi(t,r,a,l):ol(t,r):d._visibility&2?gi(t,r,a,l):(d._visibility|=2,Da(t,r,a,l,(r.subtreeFlags&10256)!==0)),h&2048&&Xf(_,r);break;case 24:gi(t,r,a,l),h&2048&&Kf(r.alternate,r);break;default:gi(t,r,a,l)}}function Da(t,r,a,l,h){for(h=h&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var d=t,_=r,E=a,R=l,B=_.flags;switch(_.tag){case 0:case 11:case 15:Da(d,_,E,R,h),sl(8,_);break;case 23:break;case 22:var K=_.stateNode;_.memoizedState!==null?K._visibility&2?Da(d,_,E,R,h):ol(d,_):(K._visibility|=2,Da(d,_,E,R,h)),h&&B&2048&&Xf(_.alternate,_);break;case 24:Da(d,_,E,R,h),h&&B&2048&&Kf(_.alternate,_);break;default:Da(d,_,E,R,h)}r=r.sibling}}function ol(t,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var a=t,l=r,h=l.flags;switch(l.tag){case 22:ol(a,l),h&2048&&Xf(l.alternate,l);break;case 24:ol(a,l),h&2048&&Kf(l.alternate,l);break;default:ol(a,l)}r=r.sibling}}var ll=8192;function Oa(t){if(t.subtreeFlags&ll)for(t=t.child;t!==null;)Fy(t),t=t.sibling}function Fy(t){switch(t.tag){case 26:Oa(t),t.flags&ll&&t.memoizedState!==null&&Ew($n,t.memoizedState,t.memoizedProps);break;case 5:Oa(t);break;case 3:case 4:var r=$n;$n=pc(t.stateNode.containerInfo),Oa(t),$n=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=ll,ll=16777216,Oa(t),ll=r):Oa(t));break;default:Oa(t)}}function Yy(t){var r=t.alternate;if(r!==null&&(t=r.child,t!==null)){r.child=null;do r=t.sibling,t.sibling=null,t=r;while(t!==null)}}function ul(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];Ft=l,Xy(l,t)}Yy(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Gy(t),t=t.sibling}function Gy(t){switch(t.tag){case 0:case 11:case 15:ul(t),t.flags&2048&&Sr(9,t,t.return);break;case 3:ul(t);break;case 12:ul(t);break;case 22:var r=t.stateNode;t.memoizedState!==null&&r._visibility&2&&(t.return===null||t.return.tag!==13)?(r._visibility&=-3,ic(t)):ul(t);break;default:ul(t)}}function ic(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];Ft=l,Xy(l,t)}Yy(t)}for(t=t.child;t!==null;){switch(r=t,r.tag){case 0:case 11:case 15:Sr(8,r,r.return),ic(r);break;case 22:a=r.stateNode,a._visibility&2&&(a._visibility&=-3,ic(r));break;default:ic(r)}t=t.sibling}}function Xy(t,r){for(;Ft!==null;){var a=Ft;switch(a.tag){case 0:case 11:case 15:Sr(8,a,r);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Yo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ft=l;else e:for(a=t;Ft!==null;){l=Ft;var h=l.sibling,d=l.return;if(Uy(l),l===a){Ft=null;break e}if(h!==null){h.return=d,Ft=h;break e}Ft=d}}}var Lb={getCacheForType:function(t){var r=nn(Lt),a=r.data.get(t);return a===void 0&&(a=t(),r.data.set(t,a)),a}},Ub=typeof WeakMap=="function"?WeakMap:Map,Ze=0,st=null,Ve=null,Be=0,We=0,Rn=null,Ar=!1,Ma=!1,Qf=!1,Wi=0,yt=0,Cr=0,ks=0,$f=0,jn=0,Pa=0,cl=null,_n=null,Zf=!1,Wf=0,rc=1/0,sc=null,Rr=null,$t=0,Nr=null,Va=null,ka=0,Jf=0,ed=null,Ky=null,hl=0,td=null;function Nn(){if((Ze&2)!==0&&Be!==0)return Be&-Be;if(X.T!==null){var t=Sa;return t!==0?t:ld()}return ur()}function Qy(){jn===0&&(jn=(Be&536870912)===0||Ke?To():536870912);var t=zn.current;return t!==null&&(t.flags|=32),jn}function In(t,r,a){(t===st&&(We===2||We===9)||t.cancelPendingCommit!==null)&&(xa(t,0),Ir(t,Be,jn,!1)),Di(t,a),((Ze&2)===0||t!==st)&&(t===st&&((Ze&2)===0&&(ks|=a),yt===4&&Ir(t,Be,jn,!1)),yi(t))}function $y(t,r,a){if((Ze&6)!==0)throw Error(s(327));var l=!a&&(r&124)===0&&(r&t.expiredLanes)===0||os(t,r),h=l?Bb(t,r):rd(t,r,!0),d=l;do{if(h===0){Ma&&!l&&Ir(t,r,0,!1);break}else{if(a=t.current.alternate,d&&!zb(a)){h=rd(t,r,!1),d=!1;continue}if(h===2){if(d=r,t.errorRecoveryDisabledLanes&d)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){r=_;e:{var E=t;h=cl;var R=E.current.memoizedState.isDehydrated;if(R&&(xa(E,_).flags|=256),_=rd(E,_,!1),_!==2){if(Qf&&!R){E.errorRecoveryDisabledLanes|=d,ks|=d,h=4;break e}d=_n,_n=h,d!==null&&(_n===null?_n=d:_n.push.apply(_n,d))}h=_}if(d=!1,h!==2)continue}}if(h===1){xa(t,0),Ir(t,r,0,!0);break}e:{switch(l=t,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:Ir(l,r,jn,!Ar);break e;case 2:_n=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(h=Wf+300-_t(),10<h)){if(Ir(l,r,jn,!Ar),Js(l,0,!0)!==0)break e;l.timeoutHandle=Av(Zy.bind(null,l,a,_n,sc,Zf,r,jn,ks,Pa,Ar,d,2,-0,0),h);break e}Zy(l,a,_n,sc,Zf,r,jn,ks,Pa,Ar,d,0,-0,0)}}break}while(!0);yi(t)}function Zy(t,r,a,l,h,d,_,E,R,B,K,Z,q,H){if(t.timeoutHandle=-1,Z=r.subtreeFlags,(Z&8192||(Z&16785408)===16785408)&&(vl={stylesheets:null,count:0,unsuspend:Tw},Fy(r),Z=Sw(),Z!==null)){t.cancelPendingCommit=Z(rv.bind(null,t,r,d,a,l,h,_,E,R,K,1,q,H)),Ir(t,d,_,!B);return}rv(t,r,d,a,l,h,_,E,R)}function zb(t){for(var r=t;;){var a=r.tag;if((a===0||a===11||a===15)&&r.flags&16384&&(a=r.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!bn(d(),h))return!1}catch{return!1}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ir(t,r,a,l){r&=~$f,r&=~ks,t.suspendedLanes|=r,t.pingedLanes&=~r,l&&(t.warmLanes|=r),l=t.expirationTimes;for(var h=r;0<h;){var d=31-tn(h),_=1<<d;l[d]=-1,h&=~_}a!==0&&ni(t,a,r)}function ac(){return(Ze&6)===0?(fl(0),!1):!0}function nd(){if(Ve!==null){if(We===0)var t=Ve.return;else t=Ve,Fi=Is=null,_f(t),Na=null,nl=0,t=Ve;for(;t!==null;)Dy(t.alternate,t),t=t.return;Ve=null}}function xa(t,r){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,iw(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),nd(),st=t,Ve=a=Bi(t.current,null),Be=r,We=0,Rn=null,Ar=!1,Ma=os(t,r),Qf=!1,Pa=jn=$f=ks=Cr=yt=0,_n=cl=null,Zf=!1,(r&8)!==0&&(r|=r&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=r;0<l;){var h=31-tn(l),d=1<<h;r|=t[h],l&=~d}return Wi=r,Nu(),a}function Wy(t,r){De=null,X.H=Xu,r===Xo||r===Lu?(r=pg(),We=3):r===fg?(r=pg(),We=4):We=r===gy?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Rn=r,Ve===null&&(yt=1,Wu(t,kn(r,t.current)))}function Jy(){var t=X.H;return X.H=Xu,t===null?Xu:t}function ev(){var t=X.A;return X.A=Lb,t}function id(){yt=4,Ar||(Be&4194048)!==Be&&zn.current!==null||(Ma=!0),(Cr&134217727)===0&&(ks&134217727)===0||st===null||Ir(st,Be,jn,!1)}function rd(t,r,a){var l=Ze;Ze|=2;var h=Jy(),d=ev();(st!==t||Be!==r)&&(sc=null,xa(t,r)),r=!1;var _=yt;e:do try{if(We!==0&&Ve!==null){var E=Ve,R=Rn;switch(We){case 8:nd(),_=6;break e;case 3:case 2:case 9:case 6:zn.current===null&&(r=!0);var B=We;if(We=0,Rn=null,La(t,E,R,B),a&&Ma){_=0;break e}break;default:B=We,We=0,Rn=null,La(t,E,R,B)}}jb(),_=yt;break}catch(K){Wy(t,K)}while(!0);return r&&t.shellSuspendCounter++,Fi=Is=null,Ze=l,X.H=h,X.A=d,Ve===null&&(st=null,Be=0,Nu()),_}function jb(){for(;Ve!==null;)tv(Ve)}function Bb(t,r){var a=Ze;Ze|=2;var l=Jy(),h=ev();st!==t||Be!==r?(sc=null,rc=_t()+500,xa(t,r)):Ma=os(t,r);e:do try{if(We!==0&&Ve!==null){r=Ve;var d=Rn;t:switch(We){case 1:We=0,Rn=null,La(t,r,d,1);break;case 2:case 9:if(dg(d)){We=0,Rn=null,nv(r);break}r=function(){We!==2&&We!==9||st!==t||(We=7),yi(t)},d.then(r,r);break e;case 3:We=7;break e;case 4:We=5;break e;case 7:dg(d)?(We=0,Rn=null,nv(r)):(We=0,Rn=null,La(t,r,d,7));break;case 5:var _=null;switch(Ve.tag){case 26:_=Ve.memoizedState;case 5:case 27:var E=Ve;if(!_||Lv(_)){We=0,Rn=null;var R=E.sibling;if(R!==null)Ve=R;else{var B=E.return;B!==null?(Ve=B,oc(B)):Ve=null}break t}}We=0,Rn=null,La(t,r,d,5);break;case 6:We=0,Rn=null,La(t,r,d,6);break;case 8:nd(),yt=6;break e;default:throw Error(s(462))}}qb();break}catch(K){Wy(t,K)}while(!0);return Fi=Is=null,X.H=l,X.A=h,Ze=a,Ve!==null?0:(st=null,Be=0,Nu(),yt)}function qb(){for(;Ve!==null&&!vt();)tv(Ve)}function tv(t){var r=Ny(t.alternate,t,Wi);t.memoizedProps=t.pendingProps,r===null?oc(t):Ve=r}function nv(t){var r=t,a=r.alternate;switch(r.tag){case 15:case 0:r=Sy(a,r,r.pendingProps,r.type,void 0,Be);break;case 11:r=Sy(a,r,r.pendingProps,r.type.render,r.ref,Be);break;case 5:_f(r);default:Dy(a,r),r=Ve=ig(r,Wi),r=Ny(a,r,Wi)}t.memoizedProps=t.pendingProps,r===null?oc(t):Ve=r}function La(t,r,a,l){Fi=Is=null,_f(r),Na=null,nl=0;var h=r.return;try{if(Ob(t,h,r,a,Be)){yt=1,Wu(t,kn(a,t.current)),Ve=null;return}}catch(d){if(h!==null)throw Ve=h,d;yt=1,Wu(t,kn(a,t.current)),Ve=null;return}r.flags&32768?(Ke||l===1?t=!0:Ma||(Be&536870912)!==0?t=!1:(Ar=t=!0,(l===2||l===9||l===3||l===6)&&(l=zn.current,l!==null&&l.tag===13&&(l.flags|=16384))),iv(r,t)):oc(r)}function oc(t){var r=t;do{if((r.flags&32768)!==0){iv(r,Ar);return}t=r.return;var a=Pb(r.alternate,r,Wi);if(a!==null){Ve=a;return}if(r=r.sibling,r!==null){Ve=r;return}Ve=r=t}while(r!==null);yt===0&&(yt=5)}function iv(t,r){do{var a=Vb(t.alternate,t);if(a!==null){a.flags&=32767,Ve=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!r&&(t=t.sibling,t!==null)){Ve=t;return}Ve=t=a}while(t!==null);yt=6,Ve=null}function rv(t,r,a,l,h,d,_,E,R){t.cancelPendingCommit=null;do lc();while($t!==0);if((Ze&6)!==0)throw Error(s(327));if(r!==null){if(r===t.current)throw Error(s(177));if(d=r.lanes|r.childLanes,d|=Xh,So(t,a,d,_,E,R),t===st&&(Ve=st=null,Be=0),Va=r,Nr=t,ka=a,Jf=d,ed=h,Ky=l,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Gb(is,function(){return uv(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||l){l=X.T,X.T=null,h=ne.p,ne.p=2,_=Ze,Ze|=4;try{kb(t,r,a)}finally{Ze=_,ne.p=h,X.T=l}}$t=1,sv(),av(),ov()}}function sv(){if($t===1){$t=0;var t=Nr,r=Va,a=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||a){a=X.T,X.T=null;var l=ne.p;ne.p=2;var h=Ze;Ze|=4;try{By(r,t);var d=gd,_=Xp(t.containerInfo),E=d.focusedElem,R=d.selectionRange;if(_!==E&&E&&E.ownerDocument&&Gp(E.ownerDocument.documentElement,E)){if(R!==null&&qh(E)){var B=R.start,K=R.end;if(K===void 0&&(K=B),"selectionStart"in E)E.selectionStart=B,E.selectionEnd=Math.min(K,E.value.length);else{var Z=E.ownerDocument||document,q=Z&&Z.defaultView||window;if(q.getSelection){var H=q.getSelection(),we=E.textContent.length,Ee=Math.min(R.start,we),nt=R.end===void 0?Ee:Math.min(R.end,we);!H.extend&&Ee>nt&&(_=nt,nt=Ee,Ee=_);var L=Yp(E,Ee),P=Yp(E,nt);if(L&&P&&(H.rangeCount!==1||H.anchorNode!==L.node||H.anchorOffset!==L.offset||H.focusNode!==P.node||H.focusOffset!==P.offset)){var j=Z.createRange();j.setStart(L.node,L.offset),H.removeAllRanges(),Ee>nt?(H.addRange(j),H.extend(P.node,P.offset)):(j.setEnd(P.node,P.offset),H.addRange(j))}}}}for(Z=[],H=E;H=H.parentNode;)H.nodeType===1&&Z.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<Z.length;E++){var Q=Z[E];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}Tc=!!pd,gd=pd=null}finally{Ze=h,ne.p=l,X.T=a}}t.current=r,$t=2}}function av(){if($t===2){$t=0;var t=Nr,r=Va,a=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||a){a=X.T,X.T=null;var l=ne.p;ne.p=2;var h=Ze;Ze|=4;try{Ly(t,r.alternate,r)}finally{Ze=h,ne.p=l,X.T=a}}$t=3}}function ov(){if($t===4||$t===3){$t=0,en();var t=Nr,r=Va,a=ka,l=Ky;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?$t=5:($t=0,Va=Nr=null,lv(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(Rr=null),ea(a),r=r.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(pt,r,void 0,(r.current.flags&128)===128)}catch{}if(l!==null){r=X.T,h=ne.p,ne.p=2,X.T=null;try{for(var d=t.onRecoverableError,_=0;_<l.length;_++){var E=l[_];d(E.value,{componentStack:E.stack})}}finally{X.T=r,ne.p=h}}(ka&3)!==0&&lc(),yi(t),h=t.pendingLanes,(a&4194090)!==0&&(h&42)!==0?t===td?hl++:(hl=0,td=t):hl=0,fl(0)}}function lv(t,r){(t.pooledCacheLanes&=r)===0&&(r=t.pooledCache,r!=null&&(t.pooledCache=null,Yo(r)))}function lc(t){return sv(),av(),ov(),uv()}function uv(){if($t!==5)return!1;var t=Nr,r=Jf;Jf=0;var a=ea(ka),l=X.T,h=ne.p;try{ne.p=32>a?32:a,X.T=null,a=ed,ed=null;var d=Nr,_=ka;if($t=0,Va=Nr=null,ka=0,(Ze&6)!==0)throw Error(s(331));var E=Ze;if(Ze|=4,Gy(d.current),Hy(d,d.current,_,a),Ze=E,fl(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(pt,d)}catch{}return!0}finally{ne.p=h,X.T=l,lv(t,r)}}function cv(t,r,a){r=kn(a,r),r=Pf(t.stateNode,r,2),t=vr(t,r,2),t!==null&&(Di(t,2),yi(t))}function rt(t,r,a){if(t.tag===3)cv(t,t,a);else for(;r!==null;){if(r.tag===3){cv(r,t,a);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Rr===null||!Rr.has(l))){t=kn(a,t),a=my(2),l=vr(r,a,2),l!==null&&(py(a,l,r,t),Di(l,2),yi(l));break}}r=r.return}}function sd(t,r,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Ub;var h=new Set;l.set(r,h)}else h=l.get(r),h===void 0&&(h=new Set,l.set(r,h));h.has(a)||(Qf=!0,h.add(a),t=Hb.bind(null,t,r,a),r.then(t,t))}function Hb(t,r,a){var l=t.pingCache;l!==null&&l.delete(r),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,st===t&&(Be&a)===a&&(yt===4||yt===3&&(Be&62914560)===Be&&300>_t()-Wf?(Ze&2)===0&&xa(t,0):$f|=a,Pa===Be&&(Pa=0)),yi(t)}function hv(t,r){r===0&&(r=Eo()),t=va(t,r),t!==null&&(Di(t,r),yi(t))}function Fb(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),hv(t,a)}function Yb(t,r){var a=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(r),hv(t,a)}function Gb(t,r){return Fe(t,r)}var uc=null,Ua=null,ad=!1,cc=!1,od=!1,xs=0;function yi(t){t!==Ua&&t.next===null&&(Ua===null?uc=Ua=t:Ua=Ua.next=t),cc=!0,ad||(ad=!0,Kb())}function fl(t,r){if(!od&&cc){od=!0;do for(var a=!1,l=uc;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var _=l.suspendedLanes,E=l.pingedLanes;d=(1<<31-tn(42|t)+1)-1,d&=h&~(_&~E),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,pv(l,d))}else d=Be,d=Js(l,l===st?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||os(l,d)||(a=!0,pv(l,d));l=l.next}while(a);od=!1}}function Xb(){fv()}function fv(){cc=ad=!1;var t=0;xs!==0&&(nw()&&(t=xs),xs=0);for(var r=_t(),a=null,l=uc;l!==null;){var h=l.next,d=dv(l,r);d===0?(l.next=null,a===null?uc=h:a.next=h,h===null&&(Ua=a)):(a=l,(t!==0||(d&3)!==0)&&(cc=!0)),l=h}fl(t)}function dv(t,r){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var _=31-tn(d),E=1<<_,R=h[_];R===-1?((E&a)===0||(E&l)!==0)&&(h[_]=_o(E,r)):R<=r&&(t.expiredLanes|=E),d&=~E}if(r=st,a=Be,a=Js(t,t===r?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===r&&(We===2||We===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&ft(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||os(t,a)){if(r=a&-a,r===t.callbackPriority)return r;switch(l!==null&&ft(l),ea(a)){case 2:case 8:a=Zs;break;case 32:a=is;break;case 268435456:a=Ws;break;default:a=is}return l=mv.bind(null,t),a=Fe(a,l),t.callbackPriority=r,t.callbackNode=a,r}return l!==null&&l!==null&&ft(l),t.callbackPriority=2,t.callbackNode=null,2}function mv(t,r){if($t!==0&&$t!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(lc()&&t.callbackNode!==a)return null;var l=Be;return l=Js(t,t===st?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:($y(t,l,r),dv(t,_t()),t.callbackNode!=null&&t.callbackNode===a?mv.bind(null,t):null)}function pv(t,r){if(lc())return null;$y(t,r,!0)}function Kb(){rw(function(){(Ze&6)!==0?Fe(hn,Xb):fv()})}function ld(){return xs===0&&(xs=To()),xs}function gv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:aa(""+t)}function yv(t,r){var a=r.ownerDocument.createElement("input");return a.name=r.name,a.value=r.value,t.id&&a.setAttribute("form",t.id),r.parentNode.insertBefore(a,r),t=new FormData(t),a.parentNode.removeChild(a),t}function Qb(t,r,a,l,h){if(r==="submit"&&a&&a.stateNode===h){var d=gv((h[Ct]||null).action),_=l.submitter;_&&(r=(r=_[Ct]||null)?gv(r.formAction):_.getAttribute("formAction"),r!==null&&(d=r,_=null));var E=new oa("action","action",null,l,h);t.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(xs!==0){var R=_?yv(h,_):new FormData(h);Nf(a,{pending:!0,data:R,method:h.method,action:d},null,R)}}else typeof d=="function"&&(E.preventDefault(),R=_?yv(h,_):new FormData(h),Nf(a,{pending:!0,data:R,method:h.method,action:d},d,R))},currentTarget:h}]})}}for(var ud=0;ud<Gh.length;ud++){var cd=Gh[ud],$b=cd.toLowerCase(),Zb=cd[0].toUpperCase()+cd.slice(1);Qn($b,"on"+Zb)}Qn($p,"onAnimationEnd"),Qn(Zp,"onAnimationIteration"),Qn(Wp,"onAnimationStart"),Qn("dblclick","onDoubleClick"),Qn("focusin","onFocus"),Qn("focusout","onBlur"),Qn(mb,"onTransitionRun"),Qn(pb,"onTransitionStart"),Qn(gb,"onTransitionCancel"),Qn(Jp,"onTransitionEnd"),Mi("onMouseEnter",["mouseout","mouseover"]),Mi("onMouseLeave",["mouseout","mouseover"]),Mi("onPointerEnter",["pointerout","pointerover"]),Mi("onPointerLeave",["pointerout","pointerover"]),Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dl));function vv(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var d=void 0;if(r)for(var _=l.length-1;0<=_;_--){var E=l[_],R=E.instance,B=E.currentTarget;if(E=E.listener,R!==d&&h.isPropagationStopped())break e;d=E,h.currentTarget=B;try{d(h)}catch(K){Zu(K)}h.currentTarget=null,d=R}else for(_=0;_<l.length;_++){if(E=l[_],R=E.instance,B=E.currentTarget,E=E.listener,R!==d&&h.isPropagationStopped())break e;d=E,h.currentTarget=B;try{d(h)}catch(K){Zu(K)}h.currentTarget=null,d=R}}}}function ke(t,r){var a=r[wo];a===void 0&&(a=r[wo]=new Set);var l=t+"__bubble";a.has(l)||(_v(r,t,2,!1),a.add(l))}function hd(t,r,a){var l=0;r&&(l|=4),_v(a,t,l,r)}var hc="_reactListening"+Math.random().toString(36).slice(2);function fd(t){if(!t[hc]){t[hc]=!0,Ao.forEach(function(a){a!=="selectionchange"&&(Wb.has(a)||hd(a,!1,t),hd(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[hc]||(r[hc]=!0,hd("selectionchange",!1,r))}}function _v(t,r,a,l){switch(Hv(r)){case 2:var h=Aw;break;case 8:h=Cw;break;default:h=Cd}a=h.bind(null,r,a,t),h=void 0,!Pn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(r,a,{capture:!0,passive:h}):t.addEventListener(r,a,!0):h!==void 0?t.addEventListener(r,a,{passive:h}):t.addEventListener(r,a,!1)}function dd(t,r,a,l,h){var d=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var E=l.stateNode.containerInfo;if(E===h)break;if(_===4)for(_=l.return;_!==null;){var R=_.tag;if((R===3||R===4)&&_.stateNode.containerInfo===h)return;_=_.return}for(;E!==null;){if(_=Oi(E),_===null)return;if(R=_.tag,R===5||R===6||R===26||R===27){l=d=_;continue e}E=E.parentNode}}l=l.return}du(function(){var B=d,K=Mn(a),Z=[];e:{var q=eg.get(t);if(q!==void 0){var H=oa,we=t;switch(t){case"keypress":if(li(a)===0)break e;case"keydown":case"keyup":H=da;break;case"focusin":we="focus",H=ca;break;case"focusout":we="blur",H=ca;break;case"beforeblur":case"afterblur":H=ca;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Vn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Uh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=Eu;break;case $p:case Zp:case Wp:H=ha;break;case Jp:H=bu;break;case"scroll":case"scrollend":H=mu;break;case"wheel":H=ma;break;case"copy":case"cut":case"paste":H=fa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=Lo;break;case"toggle":case"beforetoggle":H=Au}var Ee=(r&4)!==0,nt=!Ee&&(t==="scroll"||t==="scrollend"),L=Ee?q!==null?q+"Capture":null:q;Ee=[];for(var P=B,j;P!==null;){var Q=P;if(j=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||j===null||L===null||(Q=ps(P,L),Q!=null&&Ee.push(ml(P,Q,j))),nt)break;P=P.return}0<Ee.length&&(q=new H(q,we,null,a,K),Z.push({event:q,listeners:Ee}))}}if((r&7)===0){e:{if(q=t==="mouseover"||t==="pointerover",H=t==="mouseout"||t==="pointerout",q&&a!==ki&&(we=a.relatedTarget||a.fromElement)&&(Oi(we)||we[Dn]))break e;if((H||q)&&(q=K.window===K?K:(q=K.ownerDocument)?q.defaultView||q.parentWindow:window,H?(we=a.relatedTarget||a.toElement,H=B,we=we?Oi(we):null,we!==null&&(nt=u(we),Ee=we.tag,we!==nt||Ee!==5&&Ee!==27&&Ee!==6)&&(we=null)):(H=null,we=B),H!==we)){if(Ee=Vn,Q="onMouseLeave",L="onMouseEnter",P="mouse",(t==="pointerout"||t==="pointerover")&&(Ee=Lo,Q="onPointerLeave",L="onPointerEnter",P="pointer"),nt=H==null?q:ri(H),j=we==null?q:ri(we),q=new Ee(Q,P+"leave",H,a,K),q.target=nt,q.relatedTarget=j,Q=null,Oi(K)===B&&(Ee=new Ee(L,P+"enter",we,a,K),Ee.target=j,Ee.relatedTarget=nt,Q=Ee),nt=Q,H&&we)t:{for(Ee=H,L=we,P=0,j=Ee;j;j=za(j))P++;for(j=0,Q=L;Q;Q=za(Q))j++;for(;0<P-j;)Ee=za(Ee),P--;for(;0<j-P;)L=za(L),j--;for(;P--;){if(Ee===L||L!==null&&Ee===L.alternate)break t;Ee=za(Ee),L=za(L)}Ee=null}else Ee=null;H!==null&&Tv(Z,q,H,Ee,!1),we!==null&&nt!==null&&Tv(Z,nt,we,Ee,!0)}}e:{if(q=B?ri(B):window,H=q.nodeName&&q.nodeName.toLowerCase(),H==="select"||H==="input"&&q.type==="file")var de=zp;else if(xt(q))if(jp)de=hb;else{de=ub;var Oe=lb}else H=q.nodeName,!H||H.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?B&&Do(B.elementType)&&(de=zp):de=cb;if(de&&(de=de(t,B))){ji(Z,de,a,K);break e}Oe&&Oe(t,q,B),t==="focusout"&&B&&q.type==="number"&&B.memoizedProps.value!=null&&dr(q,"number",q.value)}switch(Oe=B?ri(B):window,t){case"focusin":(xt(Oe)||Oe.contentEditable==="true")&&(pa=Oe,Hh=B,jo=null);break;case"focusout":jo=Hh=pa=null;break;case"mousedown":Fh=!0;break;case"contextmenu":case"mouseup":case"dragend":Fh=!1,Kp(Z,a,K);break;case"selectionchange":if(db)break;case"keydown":case"keyup":Kp(Z,a,K)}var ye;if(hi)e:{switch(t){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else ze?F(t,a)&&(Se="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(v&&a.locale!=="ko"&&(ze||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&ze&&(ye=Mo()):(oi=K,mr="value"in oi?oi.value:oi.textContent,ze=!0)),Oe=fc(B,Se),0<Oe.length&&(Se=new ko(Se,t,null,a,K),Z.push({event:Se,listeners:Oe}),ye?Se.data=ye:(ye=re(a),ye!==null&&(Se.data=ye)))),(ye=p?kt(t,a):je(t,a))&&(Se=fc(B,"onBeforeInput"),0<Se.length&&(Oe=new ko("onBeforeInput","beforeinput",null,a,K),Z.push({event:Oe,listeners:Se}),Oe.data=ye)),Qb(Z,t,B,a,K)}vv(Z,r)})}function ml(t,r,a){return{instance:t,listener:r,currentTarget:a}}function fc(t,r){for(var a=r+"Capture",l=[];t!==null;){var h=t,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=ps(t,a),h!=null&&l.unshift(ml(t,h,d)),h=ps(t,r),h!=null&&l.push(ml(t,h,d))),t.tag===3)return l;t=t.return}return[]}function za(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Tv(t,r,a,l,h){for(var d=r._reactName,_=[];a!==null&&a!==l;){var E=a,R=E.alternate,B=E.stateNode;if(E=E.tag,R!==null&&R===l)break;E!==5&&E!==26&&E!==27||B===null||(R=B,h?(B=ps(a,d),B!=null&&_.unshift(ml(a,B,R))):h||(B=ps(a,d),B!=null&&_.push(ml(a,B,R)))),a=a.return}_.length!==0&&t.push({event:r,listeners:_})}var Jb=/\r\n?/g,ew=/\u0000|\uFFFD/g;function Ev(t){return(typeof t=="string"?t:""+t).replace(Jb,`
`).replace(ew,"")}function Sv(t,r){return r=Ev(r),Ev(t)===r}function dc(){}function tt(t,r,a,l,h,d){switch(a){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||On(t,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&On(t,""+l);break;case"className":si(t,"class",l);break;case"tabIndex":si(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":si(t,a,l);break;case"style":Io(t,l,d);break;case"data":if(r!=="object"){si(t,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=aa(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(r!=="input"&&tt(t,r,"name",h.name,h,null),tt(t,r,"formEncType",h.formEncType,h,null),tt(t,r,"formMethod",h.formMethod,h,null),tt(t,r,"formTarget",h.formTarget,h,null)):(tt(t,r,"encType",h.encType,h,null),tt(t,r,"method",h.method,h,null),tt(t,r,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=aa(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=dc);break;case"onScroll":l!=null&&ke("scroll",t);break;case"onScrollEnd":l!=null&&ke("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=aa(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":ke("beforetoggle",t),ke("toggle",t),fr(t,"popover",l);break;case"xlinkActuate":Xt(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Xt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Xt(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Xt(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Xt(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Xt(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Xt(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Xt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Xt(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":fr(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=xh.get(a)||a,fr(t,a,l))}}function md(t,r,a,l,h,d){switch(a){case"style":Io(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof l=="string"?On(t,l):(typeof l=="number"||typeof l=="bigint")&&On(t,""+l);break;case"onScroll":l!=null&&ke("scroll",t);break;case"onScrollEnd":l!=null&&ke("scrollend",t);break;case"onClick":l!=null&&(t.onclick=dc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ta.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),r=a.slice(2,h?a.length-7:void 0),d=t[Ct]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(r,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(r,l,h);break e}a in t?t[a]=l:l===!0?t.setAttribute(a,""):fr(t,a,l)}}}function Zt(t,r,a){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ke("error",t),ke("load",t);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var _=a[d];if(_!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:tt(t,r,d,_,a,null)}}h&&tt(t,r,"srcSet",a.srcSet,a,null),l&&tt(t,r,"src",a.src,a,null);return;case"input":ke("invalid",t);var E=d=_=h=null,R=null,B=null;for(l in a)if(a.hasOwnProperty(l)){var K=a[l];if(K!=null)switch(l){case"name":h=K;break;case"type":_=K;break;case"checked":R=K;break;case"defaultChecked":B=K;break;case"value":d=K;break;case"defaultValue":E=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,r));break;default:tt(t,r,l,K,a,null)}}fs(t,d,E,R,B,_,h,!1),sa(t);return;case"select":ke("invalid",t),l=_=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":_=E;break;case"multiple":l=E;default:tt(t,r,h,E,a,null)}r=d,a=_,t.multiple=!!l,r!=null?Vi(t,!!l,r,!1):a!=null&&Vi(t,!!l,a,!0);return;case"textarea":ke("invalid",t),d=h=l=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":l=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:tt(t,r,_,E,a,null)}ds(t,l,h,d),sa(t);return;case"option":for(R in a)if(a.hasOwnProperty(R)&&(l=a[R],l!=null))switch(R){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:tt(t,r,R,l,a,null)}return;case"dialog":ke("beforetoggle",t),ke("toggle",t),ke("cancel",t),ke("close",t);break;case"iframe":case"object":ke("load",t);break;case"video":case"audio":for(l=0;l<dl.length;l++)ke(dl[l],t);break;case"image":ke("error",t),ke("load",t);break;case"details":ke("toggle",t);break;case"embed":case"source":case"link":ke("error",t),ke("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in a)if(a.hasOwnProperty(B)&&(l=a[B],l!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:tt(t,r,B,l,a,null)}return;default:if(Do(r)){for(K in a)a.hasOwnProperty(K)&&(l=a[K],l!==void 0&&md(t,r,K,l,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!=null&&tt(t,r,E,l,a,null))}function tw(t,r,a,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,_=null,E=null,R=null,B=null,K=null;for(H in a){var Z=a[H];if(a.hasOwnProperty(H)&&Z!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":R=Z;default:l.hasOwnProperty(H)||tt(t,r,H,null,l,Z)}}for(var q in l){var H=l[q];if(Z=a[q],l.hasOwnProperty(q)&&(H!=null||Z!=null))switch(q){case"type":d=H;break;case"name":h=H;break;case"checked":B=H;break;case"defaultChecked":K=H;break;case"value":_=H;break;case"defaultValue":E=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,r));break;default:H!==Z&&tt(t,r,q,H,l,Z)}}Sn(t,_,E,R,B,K,d,h);return;case"select":H=_=E=q=null;for(d in a)if(R=a[d],a.hasOwnProperty(d)&&R!=null)switch(d){case"value":break;case"multiple":H=R;default:l.hasOwnProperty(d)||tt(t,r,d,null,l,R)}for(h in l)if(d=l[h],R=a[h],l.hasOwnProperty(h)&&(d!=null||R!=null))switch(h){case"value":q=d;break;case"defaultValue":E=d;break;case"multiple":_=d;default:d!==R&&tt(t,r,h,d,l,R)}r=E,a=_,l=H,q!=null?Vi(t,!!a,q,!1):!!l!=!!a&&(r!=null?Vi(t,!!a,r,!0):Vi(t,!!a,a?[]:"",!1));return;case"textarea":H=q=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:tt(t,r,E,null,l,h)}for(_ in l)if(h=l[_],d=a[_],l.hasOwnProperty(_)&&(h!=null||d!=null))switch(_){case"value":q=h;break;case"defaultValue":H=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&tt(t,r,_,h,l,d)}Je(t,q,H);return;case"option":for(var we in a)if(q=a[we],a.hasOwnProperty(we)&&q!=null&&!l.hasOwnProperty(we))switch(we){case"selected":t.selected=!1;break;default:tt(t,r,we,null,l,q)}for(R in l)if(q=l[R],H=a[R],l.hasOwnProperty(R)&&q!==H&&(q!=null||H!=null))switch(R){case"selected":t.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:tt(t,r,R,q,l,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ee in a)q=a[Ee],a.hasOwnProperty(Ee)&&q!=null&&!l.hasOwnProperty(Ee)&&tt(t,r,Ee,null,l,q);for(B in l)if(q=l[B],H=a[B],l.hasOwnProperty(B)&&q!==H&&(q!=null||H!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,r));break;default:tt(t,r,B,q,l,H)}return;default:if(Do(r)){for(var nt in a)q=a[nt],a.hasOwnProperty(nt)&&q!==void 0&&!l.hasOwnProperty(nt)&&md(t,r,nt,void 0,l,q);for(K in l)q=l[K],H=a[K],!l.hasOwnProperty(K)||q===H||q===void 0&&H===void 0||md(t,r,K,q,l,H);return}}for(var L in a)q=a[L],a.hasOwnProperty(L)&&q!=null&&!l.hasOwnProperty(L)&&tt(t,r,L,null,l,q);for(Z in l)q=l[Z],H=a[Z],!l.hasOwnProperty(Z)||q===H||q==null&&H==null||tt(t,r,Z,q,l,H)}var pd=null,gd=null;function mc(t){return t.nodeType===9?t:t.ownerDocument}function bv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wv(t,r){if(t===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&r==="foreignObject"?0:t}function yd(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var vd=null;function nw(){var t=window.event;return t&&t.type==="popstate"?t===vd?!1:(vd=t,!0):(vd=null,!1)}var Av=typeof setTimeout=="function"?setTimeout:void 0,iw=typeof clearTimeout=="function"?clearTimeout:void 0,Cv=typeof Promise=="function"?Promise:void 0,rw=typeof queueMicrotask=="function"?queueMicrotask:typeof Cv<"u"?function(t){return Cv.resolve(null).then(t).catch(sw)}:Av;function sw(t){setTimeout(function(){throw t})}function Dr(t){return t==="head"}function Rv(t,r){var a=r,l=0,h=0;do{var d=a.nextSibling;if(t.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var _=t.ownerDocument;if(a&1&&pl(_.documentElement),a&2&&pl(_.body),a&4)for(a=_.head,pl(a),_=a.firstChild;_;){var E=_.nextSibling,R=_.nodeName;_[ls]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&_.rel.toLowerCase()==="stylesheet"||a.removeChild(_),_=E}}if(h===0){t.removeChild(d),bl(r);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);bl(r)}function _d(t){var r=t.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var a=r;switch(r=r.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":_d(a),hr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function aw(t,r,a,l){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ls])switch(r){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(r==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Zn(t.nextSibling),t===null)break}return null}function ow(t,r,a){if(r==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Zn(t.nextSibling),t===null))return null;return t}function Td(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function lw(t,r){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")r();else{var l=function(){r(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Zn(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return t}var Ed=null;function Nv(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}function Iv(t,r,a){switch(r=mc(a),t){case"html":if(t=r.documentElement,!t)throw Error(s(452));return t;case"head":if(t=r.head,!t)throw Error(s(453));return t;case"body":if(t=r.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function pl(t){for(var r=t.attributes;r.length;)t.removeAttributeNode(r[0]);hr(t)}var Bn=new Map,Dv=new Set;function pc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ji=ne.d;ne.d={f:uw,r:cw,D:hw,C:fw,L:dw,m:mw,X:gw,S:pw,M:yw};function uw(){var t=Ji.f(),r=ac();return t||r}function cw(t){var r=ii(t);r!==null&&r.tag===5&&r.type==="form"?$g(r):Ji.r(t)}var ja=typeof document>"u"?null:document;function Ov(t,r,a){var l=ja;if(l&&typeof r=="string"&&r){var h=Rt(r);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),Dv.has(h)||(Dv.add(h),t={rel:t,crossOrigin:a,href:r},l.querySelector(h)===null&&(r=l.createElement("link"),Zt(r,"link",t),Et(r),l.head.appendChild(r)))}}function hw(t){Ji.D(t),Ov("dns-prefetch",t,null)}function fw(t,r){Ji.C(t,r),Ov("preconnect",t,r)}function dw(t,r,a){Ji.L(t,r,a);var l=ja;if(l&&t&&r){var h='link[rel="preload"][as="'+Rt(r)+'"]';r==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+Rt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+Rt(a.imageSizes)+'"]')):h+='[href="'+Rt(t)+'"]';var d=h;switch(r){case"style":d=Ba(t);break;case"script":d=qa(t)}Bn.has(d)||(t=T({rel:"preload",href:r==="image"&&a&&a.imageSrcSet?void 0:t,as:r},a),Bn.set(d,t),l.querySelector(h)!==null||r==="style"&&l.querySelector(gl(d))||r==="script"&&l.querySelector(yl(d))||(r=l.createElement("link"),Zt(r,"link",t),Et(r),l.head.appendChild(r)))}}function mw(t,r){Ji.m(t,r);var a=ja;if(a&&t){var l=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+Rt(l)+'"][href="'+Rt(t)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=qa(t)}if(!Bn.has(d)&&(t=T({rel:"modulepreload",href:t},r),Bn.set(d,t),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yl(d)))return}l=a.createElement("link"),Zt(l,"link",t),Et(l),a.head.appendChild(l)}}}function pw(t,r,a){Ji.S(t,r,a);var l=ja;if(l&&t){var h=fn(l).hoistableStyles,d=Ba(t);r=r||"default";var _=h.get(d);if(!_){var E={loading:0,preload:null};if(_=l.querySelector(gl(d)))E.loading=5;else{t=T({rel:"stylesheet",href:t,"data-precedence":r},a),(a=Bn.get(d))&&Sd(t,a);var R=_=l.createElement("link");Et(R),Zt(R,"link",t),R._p=new Promise(function(B,K){R.onload=B,R.onerror=K}),R.addEventListener("load",function(){E.loading|=1}),R.addEventListener("error",function(){E.loading|=2}),E.loading|=4,gc(_,r,l)}_={type:"stylesheet",instance:_,count:1,state:E},h.set(d,_)}}}function gw(t,r){Ji.X(t,r);var a=ja;if(a&&t){var l=fn(a).hoistableScripts,h=qa(t),d=l.get(h);d||(d=a.querySelector(yl(h)),d||(t=T({src:t,async:!0},r),(r=Bn.get(h))&&bd(t,r),d=a.createElement("script"),Et(d),Zt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function yw(t,r){Ji.M(t,r);var a=ja;if(a&&t){var l=fn(a).hoistableScripts,h=qa(t),d=l.get(h);d||(d=a.querySelector(yl(h)),d||(t=T({src:t,async:!0,type:"module"},r),(r=Bn.get(h))&&bd(t,r),d=a.createElement("script"),Et(d),Zt(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function Mv(t,r,a,l){var h=(h=Te.current)?pc(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(r=Ba(a.href),a=fn(h).hoistableStyles,l=a.get(r),l||(l={type:"style",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ba(a.href);var d=fn(h).hoistableStyles,_=d.get(t);if(_||(h=h.ownerDocument||h,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,_),(d=h.querySelector(gl(t)))&&!d._p&&(_.instance=d,_.state.loading=5),Bn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Bn.set(t,a),d||vw(h,t,a,_.state))),r&&l===null)throw Error(s(528,""));return _}if(r&&l!==null)throw Error(s(529,""));return null;case"script":return r=a.async,a=a.src,typeof a=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=qa(a),a=fn(h).hoistableScripts,l=a.get(r),l||(l={type:"script",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ba(t){return'href="'+Rt(t)+'"'}function gl(t){return'link[rel="stylesheet"]['+t+"]"}function Pv(t){return T({},t,{"data-precedence":t.precedence,precedence:null})}function vw(t,r,a,l){t.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=t.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),Zt(r,"link",a),Et(r),t.head.appendChild(r))}function qa(t){return'[src="'+Rt(t)+'"]'}function yl(t){return"script[async]"+t}function Vv(t,r,a){if(r.count++,r.instance===null)switch(r.type){case"style":var l=t.querySelector('style[data-href~="'+Rt(a.href)+'"]');if(l)return r.instance=l,Et(l),l;var h=T({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Et(l),Zt(l,"style",h),gc(l,a.precedence,t),r.instance=l;case"stylesheet":h=Ba(a.href);var d=t.querySelector(gl(h));if(d)return r.state.loading|=4,r.instance=d,Et(d),d;l=Pv(a),(h=Bn.get(h))&&Sd(l,h),d=(t.ownerDocument||t).createElement("link"),Et(d);var _=d;return _._p=new Promise(function(E,R){_.onload=E,_.onerror=R}),Zt(d,"link",l),r.state.loading|=4,gc(d,a.precedence,t),r.instance=d;case"script":return d=qa(a.src),(h=t.querySelector(yl(d)))?(r.instance=h,Et(h),h):(l=a,(h=Bn.get(d))&&(l=T({},a),bd(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),Et(h),Zt(h,"link",l),t.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,gc(l,a.precedence,t));return r.instance}function gc(t,r,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,_=0;_<l.length;_++){var E=l[_];if(E.dataset.precedence===r)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(r=a.nodeType===9?a.head:a,r.insertBefore(t,r.firstChild))}function Sd(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.title==null&&(t.title=r.title)}function bd(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.integrity==null&&(t.integrity=r.integrity)}var yc=null;function kv(t,r,a){if(yc===null){var l=new Map,h=yc=new Map;h.set(a,l)}else h=yc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var d=a[h];if(!(d[ls]||d[Vt]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(r)||"";_=t+_;var E=l.get(_);E?E.push(d):l.set(_,[d])}}return l}function xv(t,r,a){t=t.ownerDocument||t,t.head.insertBefore(a,r==="title"?t.querySelector("head > title"):null)}function _w(t,r,a){if(a===1||r.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return t=r.disabled,typeof r.precedence=="string"&&t==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function Lv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var vl=null;function Tw(){}function Ew(t,r,a){if(vl===null)throw Error(s(475));var l=vl;if(r.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=Ba(a.href),d=t.querySelector(gl(h));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=vc.bind(l),t.then(l,l)),r.state.loading|=4,r.instance=d,Et(d);return}d=t.ownerDocument||t,a=Pv(a),(h=Bn.get(h))&&Sd(a,h),d=d.createElement("link"),Et(d);var _=d;_._p=new Promise(function(E,R){_.onload=E,_.onerror=R}),Zt(d,"link",a),r.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(r,t),(t=r.state.preload)&&(r.state.loading&3)===0&&(l.count++,r=vc.bind(l),t.addEventListener("load",r),t.addEventListener("error",r))}}function Sw(){if(vl===null)throw Error(s(475));var t=vl;return t.stylesheets&&t.count===0&&wd(t,t.stylesheets),0<t.count?function(r){var a=setTimeout(function(){if(t.stylesheets&&wd(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(a)}}:null}function vc(){if(this.count--,this.count===0){if(this.stylesheets)wd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var _c=null;function wd(t,r){t.stylesheets=null,t.unsuspend!==null&&(t.count++,_c=new Map,r.forEach(bw,t),_c=null,vc.call(t))}function bw(t,r){if(!(r.state.loading&4)){var a=_c.get(t);if(a)var l=a.get(null);else{a=new Map,_c.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var _=h[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),l=_)}l&&a.set(null,l)}h=r.instance,_=h.getAttribute("data-precedence"),d=a.get(_)||l,d===l&&a.set(null,h),a.set(_,h),this.count++,l=vc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),r.state.loading|=4}}var _l={$$typeof:te,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function ww(t,r,a,l,h,d,_,E){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ii(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ii(0),this.hiddenUpdates=Ii(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Uv(t,r,a,l,h,d,_,E,R,B,K,Z){return t=new ww(t,r,a,_,E,R,B,Z),r=1,d===!0&&(r|=24),d=wn(3,null,null,r),t.current=d,d.stateNode=t,r=sf(),r.refCount++,t.pooledCache=r,r.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:r},uf(d),t}function zv(t){return t?(t=_a,t):_a}function jv(t,r,a,l,h,d){h=zv(h),l.context===null?l.context=h:l.pendingContext=h,l=yr(r),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=vr(t,l,r),a!==null&&(In(a,t,r),Qo(a,t,r))}function Bv(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function Ad(t,r){Bv(t,r),(t=t.alternate)&&Bv(t,r)}function qv(t){if(t.tag===13){var r=va(t,67108864);r!==null&&In(r,t,67108864),Ad(t,67108864)}}var Tc=!0;function Aw(t,r,a,l){var h=X.T;X.T=null;var d=ne.p;try{ne.p=2,Cd(t,r,a,l)}finally{ne.p=d,X.T=h}}function Cw(t,r,a,l){var h=X.T;X.T=null;var d=ne.p;try{ne.p=8,Cd(t,r,a,l)}finally{ne.p=d,X.T=h}}function Cd(t,r,a,l){if(Tc){var h=Rd(l);if(h===null)dd(t,r,l,Ec,a),Fv(t,l);else if(Nw(h,t,r,a,l))l.stopPropagation();else if(Fv(t,l),r&4&&-1<Rw.indexOf(t)){for(;h!==null;){var d=ii(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=Gn(d.pendingLanes);if(_!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var R=1<<31-tn(_);E.entanglements[1]|=R,_&=~R}yi(d),(Ze&6)===0&&(rc=_t()+500,fl(0))}}break;case 13:E=va(d,2),E!==null&&In(E,d,2),ac(),Ad(d,2)}if(d=Rd(l),d===null&&dd(t,r,l,Ec,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else dd(t,r,l,null,a)}}function Rd(t){return t=Mn(t),Nd(t)}var Ec=null;function Nd(t){if(Ec=null,t=Oi(t),t!==null){var r=u(t);if(r===null)t=null;else{var a=r.tag;if(a===13){if(t=f(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null)}}return Ec=t,null}function Hv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Tt()){case hn:return 2;case Zs:return 8;case is:case Oh:return 32;case Ws:return 268435456;default:return 32}default:return 32}}var Id=!1,Or=null,Mr=null,Pr=null,Tl=new Map,El=new Map,Vr=[],Rw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fv(t,r){switch(t){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":Tl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":El.delete(r.pointerId)}}function Sl(t,r,a,l,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:r,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},r!==null&&(r=ii(r),r!==null&&qv(r)),t):(t.eventSystemFlags|=l,r=t.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),t)}function Nw(t,r,a,l,h){switch(r){case"focusin":return Or=Sl(Or,t,r,a,l,h),!0;case"dragenter":return Mr=Sl(Mr,t,r,a,l,h),!0;case"mouseover":return Pr=Sl(Pr,t,r,a,l,h),!0;case"pointerover":var d=h.pointerId;return Tl.set(d,Sl(Tl.get(d)||null,t,r,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,El.set(d,Sl(El.get(d)||null,t,r,a,l,h)),!0}return!1}function Yv(t){var r=Oi(t.target);if(r!==null){var a=u(r);if(a!==null){if(r=a.tag,r===13){if(r=f(a),r!==null){t.blockedOn=r,au(t.priority,function(){if(a.tag===13){var l=Nn();l=lr(l);var h=va(a,l);h!==null&&In(h,a,l),Ad(a,l)}});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sc(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=Rd(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);ki=l,a.target.dispatchEvent(l),ki=null}else return r=ii(a),r!==null&&qv(r),t.blockedOn=a,!1;r.shift()}return!0}function Gv(t,r,a){Sc(t)&&a.delete(r)}function Iw(){Id=!1,Or!==null&&Sc(Or)&&(Or=null),Mr!==null&&Sc(Mr)&&(Mr=null),Pr!==null&&Sc(Pr)&&(Pr=null),Tl.forEach(Gv),El.forEach(Gv)}function bc(t,r){t.blockedOn===r&&(t.blockedOn=null,Id||(Id=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Iw)))}var wc=null;function Xv(t){wc!==t&&(wc=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){wc===t&&(wc=null);for(var r=0;r<t.length;r+=3){var a=t[r],l=t[r+1],h=t[r+2];if(typeof l!="function"){if(Nd(l||a)===null)continue;break}var d=ii(a);d!==null&&(t.splice(r,3),r-=3,Nf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function bl(t){function r(R){return bc(R,t)}Or!==null&&bc(Or,t),Mr!==null&&bc(Mr,t),Pr!==null&&bc(Pr,t),Tl.forEach(r),El.forEach(r);for(var a=0;a<Vr.length;a++){var l=Vr[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<Vr.length&&(a=Vr[0],a.blockedOn===null);)Yv(a),a.blockedOn===null&&Vr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],_=h[Ct]||null;if(typeof d=="function")_||Xv(a);else if(_){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,_=d[Ct]||null)E=_.formAction;else if(Nd(h)!==null)continue}else E=_.action;typeof E=="function"?a[l+1]=E:(a.splice(l,3),l-=3),Xv(a)}}}function Dd(t){this._internalRoot=t}Ac.prototype.render=Dd.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(s(409));var a=r.current,l=Nn();jv(a,l,t,r,null,null)},Ac.prototype.unmount=Dd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;jv(t.current,2,null,t,null,null),ac(),r[Dn]=null}};function Ac(t){this._internalRoot=t}Ac.prototype.unstable_scheduleHydration=function(t){if(t){var r=ur();t={blockedOn:null,target:t,priority:r};for(var a=0;a<Vr.length&&r!==0&&r<Vr[a].priority;a++);Vr.splice(a,0,t),a===0&&Yv(t)}};var Kv=e.version;if(Kv!=="19.1.0")throw Error(s(527,Kv,"19.1.0"));ne.findDOMNode=function(t){var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(r),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var Dw={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cc.isDisabled&&Cc.supportsFiber)try{pt=Cc.inject(Dw),$e=Cc}catch{}}return Al.createRoot=function(t,r){if(!o(t))throw Error(s(299));var a=!1,l="",h=cy,d=hy,_=fy,E=null;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(d=r.onCaughtError),r.onRecoverableError!==void 0&&(_=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(E=r.unstable_transitionCallbacks)),r=Uv(t,1,!1,null,null,a,l,h,d,_,E,null),t[Dn]=r.current,fd(t),new Dd(r)},Al.hydrateRoot=function(t,r,a){if(!o(t))throw Error(s(299));var l=!1,h="",d=cy,_=hy,E=fy,R=null,B=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(R=a.unstable_transitionCallbacks),a.formState!==void 0&&(B=a.formState)),r=Uv(t,1,!0,r,a??null,l,h,d,_,E,R,B),r.context=zv(null),a=r.current,l=Nn(),l=lr(l),h=yr(l),h.callback=null,vr(a,h,l),a=l,r.current.lanes=a,Di(r,a),yi(r),t[Dn]=r.current,fd(t),new Ac(r)},Al.version="19.1.0",Al}var r_;function jw(){if(r_)return Pd.exports;r_=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Pd.exports=zw(),Pd.exports}var Bw=jw();const qw=J0(Bw);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Fw=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,s)=>s?s.toUpperCase():n.toLowerCase()),s_=i=>{const e=Fw(i);return e.charAt(0).toUpperCase()+e.slice(1)},eT=(...i)=>i.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim(),Yw=i=>{for(const e in i)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Gw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=he.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:f,...m},g)=>he.createElement("svg",{ref:g,...Gw,width:e,height:e,stroke:i,strokeWidth:s?Number(n)*24/Number(e):n,className:eT("lucide",o),...!u&&!Yw(m)&&{"aria-hidden":"true"},...m},[...f.map(([y,T])=>he.createElement(y,T)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=(i,e)=>{const n=he.forwardRef(({className:s,...o},u)=>he.createElement(Xw,{ref:u,iconNode:e,className:eT(`lucide-${Hw(s_(i))}`,`lucide-${i}`,s),...o}));return n.displayName=s_(i),n};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],a_=ts("building-2",Kw);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Ld=ts("map-pin",Qw);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],Zw=ts("navigation",$w);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Jw=ts("rotate-ccw",Ww);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA=[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]],tA=ts("route",eA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nA=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],tT=ts("search",nA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iA=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],rA=ts("users",iA);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Rl=ts("x",sA);var Hn=function(i,e){return Number(i.toFixed(e))},aA=function(i,e){return e},ct=function(i,e,n){n&&typeof n=="function"&&n(i,e)},oA=function(i){return-Math.cos(i*Math.PI)/2+.5},lA=function(i){return i},uA=function(i){return i*i},cA=function(i){return i*(2-i)},hA=function(i){return i<.5?2*i*i:-1+(4-2*i)*i},fA=function(i){return i*i*i},dA=function(i){return--i*i*i+1},mA=function(i){return i<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1},pA=function(i){return i*i*i*i},gA=function(i){return 1- --i*i*i*i},yA=function(i){return i<.5?8*i*i*i*i:1-8*--i*i*i*i},vA=function(i){return i*i*i*i*i},_A=function(i){return 1+--i*i*i*i*i},TA=function(i){return i<.5?16*i*i*i*i*i:1+16*--i*i*i*i*i},nT={easeOut:oA,linear:lA,easeInQuad:uA,easeOutQuad:cA,easeInOutQuad:hA,easeInCubic:fA,easeOutCubic:dA,easeInOutCubic:mA,easeInQuart:pA,easeOutQuart:gA,easeInOutQuart:yA,easeInQuint:vA,easeOutQuint:_A,easeInOutQuint:TA},iT=function(i){typeof i=="number"&&cancelAnimationFrame(i)},Wn=function(i){i.mounted&&(iT(i.animation),i.animate=!1,i.animation=null,i.velocity=null)};function rT(i,e,n,s){if(i.mounted){var o=new Date().getTime(),u=1;Wn(i),i.animation=function(){if(!i.mounted)return iT(i.animation);var f=new Date().getTime()-o,m=f/n,g=nT[e],y=g(m);f>=n?(s(u),i.animation=null):i.animation&&(s(y),requestAnimationFrame(i.animation))},requestAnimationFrame(i.animation)}}function EA(i){var e=i.scale,n=i.positionX,s=i.positionY;return!(Number.isNaN(e)||Number.isNaN(n)||Number.isNaN(s))}function ns(i,e,n,s){var o=EA(e);if(!(!i.mounted||!o)){var u=i.setTransformState,f=i.transformState,m=f.scale,g=f.positionX,y=f.positionY,T=e.scale-m,b=e.positionX-g,w=e.positionY-y;n===0?u(e.scale,e.positionX,e.positionY):rT(i,s,n,function(k){var U=m+T*k,Y=g+b*k,G=y+w*k;u(U,Y,G)})}}function SA(i,e,n){var s=i.offsetWidth,o=i.offsetHeight,u=e.offsetWidth,f=e.offsetHeight,m=u*n,g=f*n,y=s-m,T=o-g;return{wrapperWidth:s,wrapperHeight:o,newContentWidth:m,newDiffWidth:y,newContentHeight:g,newDiffHeight:T}}var bA=function(i,e,n,s,o,u,f){var m=i>e?n*(f?1:.5):0,g=s>o?u*(f?1:.5):0,y=i-e-m,T=m,b=s-o-g,w=g;return{minPositionX:y,maxPositionX:T,minPositionY:b,maxPositionY:w}},zm=function(i,e){var n=i.wrapperComponent,s=i.contentComponent,o=i.setup.centerZoomedOut;if(!n||!s)throw new Error("Components are not mounted");var u=SA(n,s,e),f=u.wrapperWidth,m=u.wrapperHeight,g=u.newContentWidth,y=u.newDiffWidth,T=u.newContentHeight,b=u.newDiffHeight,w=bA(f,g,y,m,T,b,!!o);return w},sm=function(i,e,n,s){return s?i<e?Hn(e,2):i>n?Hn(n,2):Hn(i,2):Hn(i,2)},js=function(i,e){var n=zm(i,e);return i.bounds=n,n};function Xl(i,e,n,s,o,u,f){var m=n.minPositionX,g=n.minPositionY,y=n.maxPositionX,T=n.maxPositionY,b=0,w=0;f&&(b=o,w=u);var k=sm(i,m-b,y+b,s),U=sm(e,g-w,T+w,s);return{x:k,y:U}}function lh(i,e,n,s,o,u){var f=i.transformState,m=f.scale,g=f.positionX,y=f.positionY,T=s-m;if(typeof e!="number"||typeof n!="number")return console.error("Mouse X and Y position were not provided!"),{x:g,y};var b=g-e*T,w=y-n*T,k=Xl(b,w,o,u,0,0,null);return k}function Kl(i,e,n,s,o){var u=o?s:0,f=e-u;return!Number.isNaN(n)&&i>=n?n:!Number.isNaN(e)&&i<=f?f:i}var o_=function(i,e){var n=i.setup.panning.excluded,s=i.isInitialized,o=i.wrapperComponent,u=e.target,f="shadowRoot"in u&&"composedPath"in e,m=f?e.composedPath().some(function(T){return T instanceof Element?o==null?void 0:o.contains(T):!1}):o==null?void 0:o.contains(u),g=s&&u&&m;if(!g)return!1;var y=uh(u,n);return!y},l_=function(i){var e=i.isInitialized,n=i.isPanning,s=i.setup,o=s.panning.disabled,u=e&&n&&!o;return!!u},wA=function(i,e){var n=i.transformState,s=n.positionX,o=n.positionY;i.isPanning=!0;var u=e.clientX,f=e.clientY;i.startCoords={x:u-s,y:f-o}},AA=function(i,e){var n=e.touches,s=i.transformState,o=s.positionX,u=s.positionY;i.isPanning=!0;var f=n.length===1;if(f){var m=n[0].clientX,g=n[0].clientY;i.startCoords={x:m-o,y:g-u}}};function CA(i){var e=i.transformState,n=e.positionX,s=e.positionY,o=e.scale,u=i.setup,f=u.disabled,m=u.limitToBounds,g=u.centerZoomedOut,y=i.wrapperComponent;if(!(f||!y||!i.bounds)){var T=i.bounds,b=T.maxPositionX,w=T.minPositionX,k=T.maxPositionY,U=T.minPositionY,Y=n>b||n<w,G=s>k||s<U,ue=n>b?y.offsetWidth:i.setup.minPositionX||0,ie=s>k?y.offsetHeight:i.setup.minPositionY||0,te=lh(i,ue,ie,o,i.bounds,m||g),ge=te.x,oe=te.y;return{scale:o,positionX:Y?ge:n,positionY:G?oe:s}}}function sT(i,e,n,s,o){var u=i.setup.limitToBounds,f=i.wrapperComponent,m=i.bounds,g=i.transformState,y=g.scale,T=g.positionX,b=g.positionY;if(!(f===null||m===null||e===T&&n===b)){var w=Xl(e,n,m,u,s,o,f),k=w.x,U=w.y;i.setTransformState(y,k,U)}}var RA=function(i,e,n){var s=i.startCoords,o=i.transformState,u=i.setup.panning,f=u.lockAxisX,m=u.lockAxisY,g=o.positionX,y=o.positionY;if(!s)return{x:g,y};var T=e-s.x,b=n-s.y,w=f?g:T,k=m?y:b;return{x:w,y:k}},Kr=function(i,e){var n=i.setup,s=i.transformState,o=s.scale,u=n.minScale,f=n.disablePadding;return e>0&&o>=u&&!f?e:0},NA=function(i){var e=i.mounted,n=i.setup,s=n.disabled,o=n.velocityAnimation,u=i.transformState.scale,f=o.disabled,m=!f||u>1||!s||e;return!!m},IA=function(i){var e=i.mounted,n=i.velocity,s=i.bounds,o=i.setup,u=o.disabled,f=o.velocityAnimation,m=i.transformState.scale,g=f.disabled,y=!g||m>1||!u||e;return!(!y||!n||!s)};function DA(i,e){var n=i.setup.velocityAnimation,s=n.equalToMove,o=n.animationTime,u=n.sensitivity;return s?o*e*u:o}function u_(i,e,n,s,o,u,f,m,g,y){if(o){if(e>f&&n>f){var T=f+(i-f)*y;return T>g?g:T<f?f:T}if(e<u&&n<u){var T=u+(i-u)*y;return T<m?m:T>u?u:T}}return s?e:sm(i,u,f,o)}function OA(i,e){var n=1;return e?Math.min(n,i.offsetWidth/window.innerWidth):n}function MA(i,e){var n=NA(i);if(n){var s=i.lastMousePosition,o=i.velocityTime,u=i.setup,f=i.wrapperComponent,m=u.velocityAnimation.equalToMove,g=Date.now();if(s&&o&&f){var y=OA(f,m),T=e.x-s.x,b=e.y-s.y,w=T/y,k=b/y,U=g-o,Y=T*T+b*b,G=Math.sqrt(Y)/U;i.velocity={velocityX:w,velocityY:k,total:G}}i.lastMousePosition=e,i.velocityTime=g}}function PA(i){var e=i.velocity,n=i.bounds,s=i.setup,o=i.wrapperComponent,u=IA(i);if(!(!u||!e||!n||!o)){var f=e.velocityX,m=e.velocityY,g=e.total,y=n.maxPositionX,T=n.minPositionX,b=n.maxPositionY,w=n.minPositionY,k=s.limitToBounds,U=s.alignmentAnimation,Y=s.zoomAnimation,G=s.panning,ue=G.lockAxisY,ie=G.lockAxisX,te=Y.animationType,ge=U.sizeX,oe=U.sizeY,be=U.velocityAlignmentTime,V=be,A=DA(i,g),N=Math.max(A,V),O=Kr(i,ge),M=Kr(i,oe),x=O*o.offsetWidth/100,C=M*o.offsetHeight/100,Ge=y+x,Me=T-x,X=b+C,ne=w-C,me=i.transformState,Pe=new Date().getTime();rT(i,te,N,function(I){var $=i.transformState,se=$.scale,J=$.positionX,pe=$.positionY,Ce=new Date().getTime()-Pe,Te=Ce/V,it=nT[U.animationType],Le=1-it(Math.min(1,Te)),Pt=1-I,ae=J+f*Pt,le=pe+m*Pt,ve=u_(ae,me.positionX,J,ie,k,T,y,Me,Ge,Le),Fe=u_(le,me.positionY,pe,ue,k,w,b,ne,X,Le);(J!==ae||pe!==le)&&i.setTransformState(se,ve,Fe)})}}function c_(i,e){var n=i.transformState.scale;Wn(i),js(i,n),window.TouchEvent!==void 0&&e instanceof TouchEvent?AA(i,e):wA(i,e)}function jm(i,e){var n=i.transformState.scale,s=i.setup,o=s.minScale,u=s.alignmentAnimation,f=u.disabled,m=u.sizeX,g=u.sizeY,y=u.animationTime,T=u.animationType,b=f||n<o||!m&&!g;if(!b){var w=CA(i);w&&ns(i,w,e??y,T)}}function h_(i,e,n){var s=i.startCoords,o=i.setup,u=o.alignmentAnimation,f=u.sizeX,m=u.sizeY;if(s){var g=RA(i,e,n),y=g.x,T=g.y,b=Kr(i,f),w=Kr(i,m);MA(i,{x:y,y:T}),sT(i,y,T,b,w)}}function VA(i){if(i.isPanning){var e=i.setup.panning.velocityDisabled,n=i.velocity,s=i.wrapperComponent,o=i.contentComponent;i.isPanning=!1,i.animate=!1,i.animation=null;var u=s==null?void 0:s.getBoundingClientRect(),f=o==null?void 0:o.getBoundingClientRect(),m=(u==null?void 0:u.width)||0,g=(u==null?void 0:u.height)||0,y=(f==null?void 0:f.width)||0,T=(f==null?void 0:f.height)||0,b=m<y||g<T,w=!e&&n&&(n==null?void 0:n.total)>.1&&b;w?PA(i):jm(i)}}function Bm(i,e,n,s){var o=i.setup,u=o.minScale,f=o.maxScale,m=o.limitToBounds,g=Kl(Hn(e,2),u,f,0,!1),y=js(i,g),T=lh(i,n,s,g,y,m),b=T.x,w=T.y;return{scale:g,positionX:b,positionY:w}}function aT(i,e,n){var s=i.transformState.scale,o=i.wrapperComponent,u=i.setup,f=u.minScale,m=u.limitToBounds,g=u.zoomAnimation,y=g.disabled,T=g.animationTime,b=g.animationType,w=y||s>=f;if((s>=1||m)&&jm(i),!(w||!o||!i.mounted)){var k=e||o.offsetWidth/2,U=n||o.offsetHeight/2,Y=Bm(i,f,k,U);Y&&ns(i,Y,T,b)}}var Hr=function(){return Hr=Object.assign||function(e){for(var n,s=1,o=arguments.length;s<o;s++){n=arguments[s];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},Hr.apply(this,arguments)};function f_(i,e,n){for(var s=0,o=e.length,u;s<o;s++)(u||!(s in e))&&(u||(u=Array.prototype.slice.call(e,0,s)),u[s]=e[s]);return i.concat(u||Array.prototype.slice.call(e))}var Rc={scale:1,positionX:0,positionY:0},Cl={disabled:!1,minPositionX:null,maxPositionX:null,minPositionY:null,maxPositionY:null,minScale:1,maxScale:8,limitToBounds:!0,centerZoomedOut:!1,centerOnInit:!1,disablePadding:!1,smooth:!0,wheel:{step:.2,disabled:!1,smoothStep:.001,wheelDisabled:!1,touchPadDisabled:!1,activationKeys:[],excluded:[]},panning:{disabled:!1,velocityDisabled:!1,lockAxisX:!1,lockAxisY:!1,allowLeftClickPan:!0,allowMiddleClickPan:!0,allowRightClickPan:!0,wheelPanning:!1,activationKeys:[],excluded:[]},pinch:{step:5,disabled:!1,excluded:[]},doubleClick:{disabled:!1,step:.7,mode:"zoomIn",animationType:"easeOut",animationTime:200,excluded:[]},zoomAnimation:{disabled:!1,size:.4,animationTime:200,animationType:"easeOut"},alignmentAnimation:{disabled:!1,sizeX:100,sizeY:100,animationTime:200,velocityAlignmentTime:400,animationType:"easeOut"},velocityAnimation:{disabled:!1,sensitivity:1,animationTime:400,animationType:"easeOut",equalToMove:!0}},am={wrapperClass:"react-transform-wrapper",contentClass:"react-transform-component"},oT=function(i){var e,n,s,o;return{previousScale:(e=i.initialScale)!==null&&e!==void 0?e:Rc.scale,scale:(n=i.initialScale)!==null&&n!==void 0?n:Rc.scale,positionX:(s=i.initialPositionX)!==null&&s!==void 0?s:Rc.positionX,positionY:(o=i.initialPositionY)!==null&&o!==void 0?o:Rc.positionY}},d_=function(i){var e=Hr({},Cl);return Object.keys(i).forEach(function(n){var s=typeof i[n]<"u",o=typeof Cl[n]<"u";if(o&&s){var u=Object.prototype.toString.call(Cl[n]),f=u==="[object Object]",m=u==="[object Array]";f?e[n]=Hr(Hr({},Cl[n]),i[n]):m?e[n]=f_(f_([],Cl[n],!0),i[n]):e[n]=i[n]}}),e},lT=function(i,e,n){var s=i.transformState.scale,o=i.wrapperComponent,u=i.setup,f=u.maxScale,m=u.minScale,g=u.zoomAnimation,y=u.smooth,T=g.size;if(!o)throw new Error("Wrapper is not mounted");var b=y?s*Math.exp(e*n):s+e*n,w=Kl(Hn(b,3),m,f,T,!1);return w};function uT(i,e,n,s,o){var u=i.wrapperComponent,f=i.transformState,m=f.scale,g=f.positionX,y=f.positionY;if(!u)return console.error("No WrapperComponent found");var T=u.offsetWidth,b=u.offsetHeight,w=(T/2-g)/m,k=(b/2-y)/m,U=lT(i,e,n),Y=Bm(i,U,w,k);if(!Y)return console.error("Error during zoom event. New transformation state was not calculated.");ns(i,Y,s,o)}function cT(i,e,n,s){var o=i.setup,u=i.wrapperComponent,f=o.limitToBounds,m=oT(i.props),g=i.transformState,y=g.scale,T=g.positionX,b=g.positionY;if(u){var w=zm(i,m.scale),k=Xl(m.positionX,m.positionY,w,f,0,0,u),U={scale:m.scale,positionX:k.x,positionY:k.y};y===m.scale&&T===m.positionX&&b===m.positionY||(s==null||s(),ns(i,U,e,n))}}function kA(i,e,n,s){var o=i.getBoundingClientRect(),u=e.getBoundingClientRect(),f=n.getBoundingClientRect(),m=u.x*s.scale,g=u.y*s.scale;return{x:(o.x-f.x+m)/s.scale,y:(o.y-f.y+g)/s.scale}}function xA(i,e,n){var s=i.wrapperComponent,o=i.contentComponent,u=i.transformState,f=i.setup,m=f.limitToBounds,g=f.minScale,y=f.maxScale;if(!s||!o)return u;var T=s.getBoundingClientRect(),b=e.getBoundingClientRect(),w=kA(e,s,o,u),k=w.x,U=w.y,Y=b.width/u.scale,G=b.height/u.scale,ue=s.offsetWidth/Y,ie=s.offsetHeight/G,te=Kl(n||Math.min(ue,ie),g,y,0,!1),ge=(T.width-Y*te)/2,oe=(T.height-G*te)/2,be=(T.left-k)*te+ge,V=(T.top-U)*te+oe,A=zm(i,te),N=Xl(be,V,A,m,0,0,s),O=N.x,M=N.y;return{positionX:O,positionY:M,scale:te}}var LA=function(i){return function(e,n,s){e===void 0&&(e=.5),n===void 0&&(n=300),s===void 0&&(s="easeOut"),uT(i,1,e,n,s)}},UA=function(i){return function(e,n,s){e===void 0&&(e=.5),n===void 0&&(n=300),s===void 0&&(s="easeOut"),uT(i,-1,e,n,s)}},zA=function(i){return function(e,n,s,o,u){o===void 0&&(o=300),u===void 0&&(u="easeOut");var f=i.transformState,m=f.positionX,g=f.positionY,y=f.scale,T=i.wrapperComponent,b=i.contentComponent,w=i.setup.disabled;if(!(w||!T||!b)){var k={positionX:Number.isNaN(e)?m:e,positionY:Number.isNaN(n)?g:n,scale:Number.isNaN(s)?y:s};ns(i,k,o,u)}}},jA=function(i){return function(e,n){e===void 0&&(e=200),n===void 0&&(n="easeOut"),cT(i,e,n)}},BA=function(i){return function(e,n,s){n===void 0&&(n=200),s===void 0&&(s="easeOut");var o=i.transformState,u=i.wrapperComponent,f=i.contentComponent;if(u&&f){var m=hT(e||o.scale,u,f);ns(i,m,n,s)}}},qA=function(i){return function(e,n,s,o){s===void 0&&(s=600),o===void 0&&(o="easeOut"),Wn(i);var u=i.wrapperComponent,f=typeof e=="string"?document.getElementById(e):e;if(u&&f&&u.contains(f)){var m=xA(i,f,n);ns(i,m,s,o)}}},om=function(i){return{instance:i,zoomIn:LA(i),zoomOut:UA(i),setTransform:zA(i),resetTransform:jA(i),centerView:BA(i),zoomToElement:qA(i)}},HA=function(i){return{instance:i,state:i.transformState}},at=function(i){var e={};return Object.assign(e,HA(i)),Object.assign(e,om(i)),e},Ud=!1;function zd(){try{var i={get passive(){return Ud=!0,!1}};return i}catch{return Ud=!1,Ud}}var Nc=".".concat(am.wrapperClass),uh=function(i,e){return e.some(function(n){return i.matches("".concat(Nc," ").concat(n,", ").concat(Nc," .").concat(n,", ").concat(Nc," ").concat(n," *, ").concat(Nc," .").concat(n," *"))})},lm=function(i){i&&clearTimeout(i)},FA=function(i,e,n){return"translate(".concat(i,"px, ").concat(e,"px) scale(").concat(n,")")},hT=function(i,e,n){var s=n.offsetWidth*i,o=n.offsetHeight*i,u=(e.offsetWidth-s)/2,f=(e.offsetHeight-o)/2;return{scale:i,positionX:u,positionY:f}};function YA(i){return function(e){i.forEach(function(n){typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var GA=function(i,e){var n=i.setup.wheel,s=n.disabled,o=n.wheelDisabled,u=n.touchPadDisabled,f=n.excluded,m=i.isInitialized,g=i.isPanning,y=e.target,T=m&&!g&&!s&&y;if(!T||o&&!e.ctrlKey||u&&e.ctrlKey)return!1;var b=uh(y,f);return!b},XA=function(i){return i?i.deltaY<0?1:-1:0};function KA(i,e){var n=XA(i),s=aA(e,n);return s}function fT(i,e,n){var s=e.getBoundingClientRect(),o=0,u=0;if("clientX"in i)o=(i.clientX-s.left)/n,u=(i.clientY-s.top)/n;else{var f=i.touches[0];o=(f.clientX-s.left)/n,u=(f.clientY-s.top)/n}return(Number.isNaN(o)||Number.isNaN(u))&&console.error("No mouse or touch offset found"),{x:o,y:u}}var QA=function(i,e,n,s,o){var u=i.transformState.scale,f=i.wrapperComponent,m=i.setup,g=m.maxScale,y=m.minScale,T=m.zoomAnimation,b=m.disablePadding,w=T.size,k=T.disabled;if(!f)throw new Error("Wrapper is not mounted");var U=u+e*n,Y=s?!1:!k,G=Kl(Hn(U,3),y,g,w,Y&&!b);return G},$A=function(i,e){var n=i.previousWheelEvent,s=i.transformState.scale,o=i.setup,u=o.maxScale,f=o.minScale;return n?s<u||s>f||Math.sign(n.deltaY)!==Math.sign(e.deltaY)||n.deltaY>0&&n.deltaY<e.deltaY||n.deltaY<0&&n.deltaY>e.deltaY||Math.sign(n.deltaY)!==Math.sign(e.deltaY):!1},ZA=function(i,e){var n=i.setup.pinch,s=n.disabled,o=n.excluded,u=i.isInitialized,f=e.target,m=u&&!s&&f;if(!m)return!1;var g=uh(f,o);return!g},WA=function(i){var e=i.setup.pinch.disabled,n=i.isInitialized,s=i.pinchStartDistance,o=n&&!e&&s;return!!o},JA=function(i,e,n){var s=n.getBoundingClientRect(),o=i.touches,u=Hn(o[0].clientX-s.left,5),f=Hn(o[0].clientY-s.top,5),m=Hn(o[1].clientX-s.left,5),g=Hn(o[1].clientY-s.top,5);return{x:(u+m)/2/e,y:(f+g)/2/e}},dT=function(i){return Math.sqrt(Math.pow(i.touches[0].pageX-i.touches[1].pageX,2)+Math.pow(i.touches[0].pageY-i.touches[1].pageY,2))},e1=function(i,e){var n=i.pinchStartScale,s=i.pinchStartDistance,o=i.setup,u=o.maxScale,f=o.minScale,m=o.zoomAnimation,g=o.disablePadding,y=m.size,T=m.disabled;if(!n||s===null||!e)throw new Error("Pinch touches distance was not provided");if(e<0)return i.transformState.scale;var b=e/s,w=b*n;return Kl(Hn(w,2),f,u,y,!T&&!g)},t1=160,n1=100,i1=function(i,e){var n=i.props,s=n.onWheelStart,o=n.onZoomStart;i.wheelStopEventTimer||(Wn(i),ct(at(i),e,s),ct(at(i),e,o))},r1=function(i,e){var n=i.props,s=n.onWheel,o=n.onZoom,u=i.contentComponent,f=i.setup,m=i.transformState,g=m.scale,y=f.limitToBounds,T=f.centerZoomedOut,b=f.zoomAnimation,w=f.wheel,k=f.disablePadding,U=f.smooth,Y=b.size,G=b.disabled,ue=w.step,ie=w.smoothStep;if(!u)throw new Error("Component not mounted");e.preventDefault(),e.stopPropagation();var te=KA(e,null),ge=U?ie*Math.abs(e.deltaY):ue,oe=QA(i,te,ge,!e.ctrlKey);if(g!==oe){var be=js(i,oe),V=fT(e,u,g),A=G||Y===0||T||k,N=y&&A,O=lh(i,V.x,V.y,oe,be,N),M=O.x,x=O.y;i.previousWheelEvent=e,i.setTransformState(oe,M,x),ct(at(i),e,s),ct(at(i),e,o)}},s1=function(i,e){var n=i.props,s=n.onWheelStop,o=n.onZoomStop;lm(i.wheelAnimationTimer),i.wheelAnimationTimer=setTimeout(function(){i.mounted&&(aT(i,e.x,e.y),i.wheelAnimationTimer=null)},n1);var u=$A(i,e);u&&(lm(i.wheelStopEventTimer),i.wheelStopEventTimer=setTimeout(function(){i.mounted&&(i.wheelStopEventTimer=null,ct(at(i),e,s),ct(at(i),e,o))},t1))},mT=function(i){for(var e=0,n=0,s=0;s<2;s+=1)e+=i.touches[s].clientX,n+=i.touches[s].clientY;var o=e/2,u=n/2;return{x:o,y:u}},a1=function(i,e){var n=dT(e);i.pinchStartDistance=n,i.lastDistance=n,i.pinchStartScale=i.transformState.scale,i.isPanning=!1;var s=mT(e);i.pinchLastCenterX=s.x,i.pinchLastCenterY=s.y,Wn(i)},o1=function(i,e){var n=i.contentComponent,s=i.pinchStartDistance,o=i.wrapperComponent,u=i.transformState.scale,f=i.setup,m=f.limitToBounds,g=f.centerZoomedOut,y=f.zoomAnimation,T=f.alignmentAnimation,b=y.disabled,w=y.size;if(!(s===null||!n)){var k=JA(e,u,n);if(!(!Number.isFinite(k.x)||!Number.isFinite(k.y))){var U=dT(e),Y=e1(i,U),G=mT(e),ue=G.x-(i.pinchLastCenterX||0),ie=G.y-(i.pinchLastCenterY||0);if(!(Y===u&&ue===0&&ie===0)){i.pinchLastCenterX=G.x,i.pinchLastCenterY=G.y;var te=js(i,Y),ge=b||w===0||g,oe=m&&ge,be=lh(i,k.x,k.y,Y,te,oe),V=be.x,A=be.y;i.pinchMidpoint=k,i.lastDistance=U;var N=T.sizeX,O=T.sizeY,M=Kr(i,N),x=Kr(i,O),C=V+ue,Ge=A+ie,Me=Xl(C,Ge,te,m,M,x,o),X=Me.x,ne=Me.y;i.setTransformState(Y,X,ne)}}}},l1=function(i){var e=i.pinchMidpoint;i.velocity=null,i.lastDistance=null,i.pinchMidpoint=null,i.pinchStartScale=null,i.pinchStartDistance=null,aT(i,e==null?void 0:e.x,e==null?void 0:e.y)},pT=function(i,e){var n=i.props.onZoomStop,s=i.setup.doubleClick.animationTime;lm(i.doubleClickStopEventTimer),i.doubleClickStopEventTimer=setTimeout(function(){i.doubleClickStopEventTimer=null,ct(at(i),e,n)},s)},u1=function(i,e){var n=i.props,s=n.onZoomStart,o=n.onZoom,u=i.setup.doubleClick,f=u.animationTime,m=u.animationType;ct(at(i),e,s),cT(i,f,m,function(){return ct(at(i),e,o)}),pT(i,e)};function c1(i,e){return i==="toggle"?e===1?1:-1:i==="zoomOut"?-1:1}function h1(i,e){var n=i.setup,s=i.doubleClickStopEventTimer,o=i.transformState,u=i.contentComponent,f=o.scale,m=i.props,g=m.onZoomStart,y=m.onZoom,T=n.doubleClick,b=T.disabled,w=T.mode,k=T.step,U=T.animationTime,Y=T.animationType;if(!b&&!s){if(w==="reset")return u1(i,e);if(!u)return console.error("No ContentComponent found");var G=c1(w,i.transformState.scale),ue=lT(i,G,k);if(f!==ue){ct(at(i),e,g);var ie=fT(e,u,f),te=Bm(i,ue,ie.x,ie.y);if(!te)return console.error("Error during zoom event. New transformation state was not calculated.");ct(at(i),e,y),ns(i,te,U,Y),pT(i,e)}}}var f1=function(i,e){var n=i.isInitialized,s=i.setup,o=i.wrapperComponent,u=s.doubleClick,f=u.disabled,m=u.excluded,g=e.target,y=o==null?void 0:o.contains(g),T=n&&g&&y&&!f;if(!T)return!1;var b=uh(g,m);return!b},d1=function(){function i(e){var n=this;this.mounted=!0,this.pinchLastCenterX=null,this.pinchLastCenterY=null,this.onChangeCallbacks=new Set,this.onInitCallbacks=new Set,this.wrapperComponent=null,this.contentComponent=null,this.isInitialized=!1,this.bounds=null,this.previousWheelEvent=null,this.wheelStopEventTimer=null,this.wheelAnimationTimer=null,this.isPanning=!1,this.isWheelPanning=!1,this.startCoords=null,this.lastTouch=null,this.distance=null,this.lastDistance=null,this.pinchStartDistance=null,this.pinchStartScale=null,this.pinchMidpoint=null,this.doubleClickStopEventTimer=null,this.velocity=null,this.velocityTime=null,this.lastMousePosition=null,this.animate=!1,this.animation=null,this.maxBounds=null,this.pressedKeys={},this.mount=function(){n.initializeWindowEvents()},this.unmount=function(){n.cleanupWindowEvents()},this.update=function(s){n.props=s,js(n,n.transformState.scale),n.setup=d_(s)},this.initializeWindowEvents=function(){var s,o,u=zd(),f=(s=n.wrapperComponent)===null||s===void 0?void 0:s.ownerDocument,m=f==null?void 0:f.defaultView;(o=n.wrapperComponent)===null||o===void 0||o.addEventListener("wheel",n.onWheelPanning,u),m==null||m.addEventListener("mousedown",n.onPanningStart,u),m==null||m.addEventListener("mousemove",n.onPanning,u),m==null||m.addEventListener("mouseup",n.onPanningStop,u),f==null||f.addEventListener("mouseleave",n.clearPanning,u),m==null||m.addEventListener("keyup",n.setKeyUnPressed,u),m==null||m.addEventListener("keydown",n.setKeyPressed,u)},this.cleanupWindowEvents=function(){var s,o,u=zd(),f=(s=n.wrapperComponent)===null||s===void 0?void 0:s.ownerDocument,m=f==null?void 0:f.defaultView;m==null||m.removeEventListener("mousedown",n.onPanningStart,u),m==null||m.removeEventListener("mousemove",n.onPanning,u),m==null||m.removeEventListener("mouseup",n.onPanningStop,u),f==null||f.removeEventListener("mouseleave",n.clearPanning,u),m==null||m.removeEventListener("keyup",n.setKeyUnPressed,u),m==null||m.removeEventListener("keydown",n.setKeyPressed,u),document.removeEventListener("mouseleave",n.clearPanning,u),Wn(n),(o=n.observer)===null||o===void 0||o.disconnect()},this.handleInitializeWrapperEvents=function(s){var o=zd();s.addEventListener("wheel",n.onWheelZoom,o),s.addEventListener("dblclick",n.onDoubleClick,o),s.addEventListener("touchstart",n.onTouchPanningStart,o),s.addEventListener("touchmove",n.onTouchPanning,o),s.addEventListener("touchend",n.onTouchPanningStop,o)},this.handleInitialize=function(s,o){var u=!1,f=n.setup.centerOnInit,m=function(g,y){for(var T=0,b=g;T<b.length;T++){var w=b[T];if(w.target===y)return!0}return!1};n.applyTransformation(),n.onInitCallbacks.forEach(function(g){g(at(n))}),n.observer=new ResizeObserver(function(g){if(m(g,s)||m(g,o))if(f&&!u){var y=o.offsetWidth,T=o.offsetHeight;(y>0||T>0)&&(u=!0,n.setCenter())}else Wn(n),js(n,n.transformState.scale),jm(n,0)}),n.observer.observe(s),n.observer.observe(o)},this.onWheelZoom=function(s){var o=n.setup.disabled;if(!o){var u=GA(n,s);if(u){var f=n.isPressingKeys(n.setup.wheel.activationKeys);f&&(i1(n,s),r1(n,s),s1(n,s))}}},this.onWheelPanning=function(s){var o=n.setup,u=o.disabled,f=o.wheel,m=o.panning;if(!(!n.wrapperComponent||!n.contentComponent||u||!f.wheelDisabled||m.disabled||!m.wheelPanning||s.ctrlKey)){s.preventDefault(),s.stopPropagation();var g=n.transformState,y=g.positionX,T=g.positionY,b=y-s.deltaX,w=T-s.deltaY,k=m.lockAxisX?y:b,U=m.lockAxisY?T:w,Y=n.setup.alignmentAnimation,G=Y.sizeX,ue=Y.sizeY,ie=Kr(n,G),te=Kr(n,ue);k===y&&U===T||sT(n,k,U,ie,te)}},this.onPanningStart=function(s){var o=n.setup.disabled,u=n.props.onPanningStart;if(!o){var f=o_(n,s);if(f){var m=n.isPressingKeys(n.setup.panning.activationKeys);m&&(s.button===0&&!n.setup.panning.allowLeftClickPan||s.button===1&&!n.setup.panning.allowMiddleClickPan||s.button===2&&!n.setup.panning.allowRightClickPan||(s.preventDefault(),s.stopPropagation(),Wn(n),c_(n,s),ct(at(n),s,u)))}}},this.onPanning=function(s){var o=n.setup.disabled,u=n.props.onPanning;if(!o){var f=l_(n);if(f){var m=n.isPressingKeys(n.setup.panning.activationKeys);m&&(s.preventDefault(),s.stopPropagation(),h_(n,s.clientX,s.clientY),ct(at(n),s,u))}}},this.onPanningStop=function(s){var o=n.props.onPanningStop;n.isPanning&&(VA(n),ct(at(n),s,o))},this.onPinchStart=function(s){var o=n.setup.disabled,u=n.props,f=u.onPinchingStart,m=u.onZoomStart;if(!o){var g=ZA(n,s);g&&(a1(n,s),Wn(n),ct(at(n),s,f),ct(at(n),s,m))}},this.onPinch=function(s){var o=n.setup.disabled,u=n.props,f=u.onPinching,m=u.onZoom;if(!o){var g=WA(n);g&&(s.preventDefault(),s.stopPropagation(),o1(n,s),ct(at(n),s,f),ct(at(n),s,m))}},this.onPinchStop=function(s){var o=n.props,u=o.onPinchingStop,f=o.onZoomStop;n.pinchStartScale&&(l1(n),ct(at(n),s,u),ct(at(n),s,f))},this.onTouchPanningStart=function(s){var o=n.setup.disabled,u=n.props.onPanningStart;if(!o){var f=o_(n,s);if(f){var m=n.lastTouch&&+new Date-n.lastTouch<200&&s.touches.length===1;if(!m){n.lastTouch=+new Date,Wn(n);var g=s.touches,y=g.length===1,T=g.length===2;y&&(Wn(n),c_(n,s),ct(at(n),s,u)),T&&n.onPinchStart(s)}}}},this.onTouchPanning=function(s){var o=n.setup.disabled,u=n.props.onPanning;if(n.isPanning&&s.touches.length===1){if(o)return;var f=l_(n);if(!f)return;s.preventDefault(),s.stopPropagation();var m=s.touches[0];h_(n,m.clientX,m.clientY),ct(at(n),s,u)}else s.touches.length>1&&n.onPinch(s)},this.onTouchPanningStop=function(s){n.onPanningStop(s),n.onPinchStop(s)},this.onDoubleClick=function(s){var o=n.setup.disabled;if(!o){var u=f1(n,s);u&&h1(n,s)}},this.clearPanning=function(s){n.isPanning&&n.onPanningStop(s)},this.setKeyPressed=function(s){n.pressedKeys[s.key]=!0},this.setKeyUnPressed=function(s){n.pressedKeys[s.key]=!1},this.isPressingKeys=function(s){return s.length?!!s.find(function(o){return n.pressedKeys[o]}):!0},this.setTransformState=function(s,o,u){var f=n.props.onTransformed;if(!Number.isNaN(s)&&!Number.isNaN(o)&&!Number.isNaN(u)){s!==n.transformState.scale&&(n.transformState.previousScale=n.transformState.scale,n.transformState.scale=s),n.transformState.positionX=o,n.transformState.positionY=u,n.applyTransformation();var m=at(n);n.onChangeCallbacks.forEach(function(g){return g(m)}),ct(m,{scale:s,positionX:o,positionY:u},f)}else console.error("Detected NaN set state values")},this.setCenter=function(){if(n.wrapperComponent&&n.contentComponent){var s=hT(n.transformState.scale,n.wrapperComponent,n.contentComponent);n.setTransformState(s.scale,s.positionX,s.positionY)}},this.handleTransformStyles=function(s,o,u){return n.props.customTransform?n.props.customTransform(s,o,u):FA(s,o,u)},this.applyTransformation=function(){if(!(!n.mounted||!n.contentComponent)){var s=n.transformState,o=s.scale,u=s.positionX,f=s.positionY,m=n.handleTransformStyles(u,f,o);n.contentComponent.style.transform=m}},this.getContext=function(){return at(n)},this.onChange=function(s){return n.onChangeCallbacks.has(s)||n.onChangeCallbacks.add(s),function(){n.onChangeCallbacks.delete(s)}},this.onInit=function(s){return n.onInitCallbacks.has(s)||n.onInitCallbacks.add(s),function(){n.onInitCallbacks.delete(s)}},this.init=function(s,o){n.cleanupWindowEvents(),n.wrapperComponent=s,n.contentComponent=o,js(n,n.transformState.scale),n.handleInitializeWrapperEvents(s),n.handleInitialize(s,o),n.initializeWindowEvents(),n.isInitialized=!0;var u=at(n);ct(u,void 0,n.props.onInit)},this.props=e,this.setup=d_(this.props),this.transformState=oT(this.props)}return i}(),qm=ln.createContext(null),m1=function(i,e){return typeof i=="function"?i(e):i},p1=ln.forwardRef(function(i,e){var n=he.useRef(new d1(i)).current,s=m1(i.children,om(n));return he.useImperativeHandle(e,function(){return om(n)},[n]),he.useEffect(function(){n.update(i)},[n,i]),ln.createElement(qm.Provider,{value:n},s)});ln.forwardRef(function(i,e){var n=he.useRef(null),s=he.useContext(qm);return he.useEffect(function(){return s.onChange(function(o){if(n.current){var u=0,f=0;n.current.style.transform=s.handleTransformStyles(u,f,1/o.instance.transformState.scale)}})},[s]),ln.createElement("div",Hr({},i,{ref:YA([n,e])}))});function g1(i,e){e===void 0&&(e={});var n=e.insertAt;if(!(typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&s.firstChild?s.insertBefore(o,s.firstChild):s.appendChild(o),o.styleSheet?o.styleSheet.cssText=i:o.appendChild(document.createTextNode(i))}}var y1=`.transform-component-module_wrapper__SPB86 {
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
`,m_={wrapper:"transform-component-module_wrapper__SPB86",content:"transform-component-module_content__FBWxo"};g1(y1);var v1=function(i){var e=i.children,n=i.wrapperClass,s=n===void 0?"":n,o=i.contentClass,u=o===void 0?"":o,f=i.wrapperStyle,m=i.contentStyle,g=i.wrapperProps,y=g===void 0?{}:g,T=i.contentProps,b=T===void 0?{}:T,w=he.useContext(qm),k=w.init,U=w.cleanupWindowEvents,Y=he.useRef(null),G=he.useRef(null);return he.useEffect(function(){var ue=Y.current,ie=G.current;return ue!==null&&ie!==null&&k&&(k==null||k(ue,ie)),function(){U==null||U()}},[]),ln.createElement("div",Hr({},y,{ref:Y,className:"".concat(am.wrapperClass," ").concat(m_.wrapper," ").concat(s),style:f}),ln.createElement("div",Hr({},b,{ref:G,className:"".concat(am.contentClass," ").concat(m_.content," ").concat(u),style:m}),e))};const _1=()=>{};var p_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=function(i){const e=[];let n=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},T1=function(i){const e=[];let n=0,s=0;for(;n<i.length;){const o=i[n++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[n++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[n++],f=i[n++],m=i[n++],g=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=i[n++],f=i[n++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return e.join("")},yT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],f=o+1<i.length,m=f?i[o+1]:0,g=o+2<i.length,y=g?i[o+2]:0,T=u>>2,b=(u&3)<<4|m>>4;let w=(m&15)<<2|y>>6,k=y&63;g||(k=64,f||(w=64)),s.push(n[T],n[b],n[w],n[k])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(gT(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):T1(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=n[i.charAt(o++)],m=o<i.length?n[i.charAt(o)]:0;++o;const y=o<i.length?n[i.charAt(o)]:64;++o;const b=o<i.length?n[i.charAt(o)]:64;if(++o,u==null||m==null||y==null||b==null)throw new E1;const w=u<<2|m>>4;if(s.push(w),y!==64){const k=m<<4&240|y>>2;if(s.push(k),b!==64){const U=y<<6&192|b;s.push(U)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class E1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const S1=function(i){const e=gT(i);return yT.encodeByteArray(e,!0)},Fc=function(i){return S1(i).replace(/\./g,"")},vT=function(i){try{return yT.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function b1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const w1=()=>b1().__FIREBASE_DEFAULTS__,A1=()=>{if(typeof process>"u"||typeof p_>"u")return;const i=p_.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},C1=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&vT(i[1]);return e&&JSON.parse(e)},ch=()=>{try{return _1()||w1()||A1()||C1()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},_T=i=>{var e,n;return(n=(e=ch())==null?void 0:e.emulatorHosts)==null?void 0:n[i]},R1=i=>{const e=_T(i);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},TT=()=>{var i;return(i=ch())==null?void 0:i.config},ET=i=>{var e;return(e=ch())==null?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function lo(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ST(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function I1(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Fc(JSON.stringify(n)),Fc(JSON.stringify(f)),""].join(".")}const Ml={};function D1(){const i={prod:[],emulator:[]};for(const e of Object.keys(Ml))Ml[e]?i.emulator.push(e):i.prod.push(e);return i}function O1(i){let e=document.getElementById(i),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),n=!0),{created:n,element:e}}let g_=!1;function bT(i,e){if(typeof window>"u"||typeof document>"u"||!lo(window.location.host)||Ml[i]===e||Ml[i]||g_)return;Ml[i]=e;function n(w){return`__firebase__banner__${w}`}const s="__firebase__banner",u=D1().prod.length>0;function f(){const w=document.getElementById(s);w&&w.remove()}function m(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function g(w,k){w.setAttribute("width","24"),w.setAttribute("id",k),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function y(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{g_=!0,f()},w}function T(w,k){w.setAttribute("id",k),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function b(){const w=O1(s),k=n("text"),U=document.getElementById(k)||document.createElement("span"),Y=n("learnmore"),G=document.getElementById(Y)||document.createElement("a"),ue=n("preprendIcon"),ie=document.getElementById(ue)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const te=w.element;m(te),T(G,Y);const ge=y();g(ie,ue),te.append(ie,U,G,ge),document.body.appendChild(te)}u?(U.innerText="Preview backend disconnected.",ie.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function cn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function M1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(cn())}function P1(){var e;const i=(e=ch())==null?void 0:e.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function V1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function k1(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function x1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function L1(){const i=cn();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function U1(){return!P1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function wT(){try{return typeof indexedDB=="object"}catch{return!1}}function AT(){return new Promise((i,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;e(((u=o.error)==null?void 0:u.message)||"")}}catch(n){e(n)}})}function z1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1="FirebaseError";class Ni extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=j1,Object.setPrototypeOf(this,Ni.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qs.prototype.create)}}class Qs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},o=`${this.service}/${e}`,u=this.errors[e],f=u?B1(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new Ni(o,m,s)}}function B1(i,e){return i.replace(q1,(n,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const q1=/\{\$([^}]+)}/g;function H1(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Fs(i,e){if(i===e)return!0;const n=Object.keys(i),s=Object.keys(e);for(const o of n){if(!s.includes(o))return!1;const u=i[o],f=e[o];if(y_(u)&&y_(f)){if(!Fs(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function y_(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(i){const e=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function F1(i,e){const n=new Y1(i,e);return n.subscribe.bind(n)}class Y1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let o;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");G1(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:s},o.next===void 0&&(o.next=jd),o.error===void 0&&(o.error=jd),o.complete===void 0&&(o.complete=jd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function G1(i,e){if(typeof i!="object"||i===null)return!1;for(const n of e)if(n in i&&typeof i[n]=="function")return!0;return!1}function jd(){}/**
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
 */function Yn(i){return i&&i._delegate?i._delegate:i}class ei{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ls="[DEFAULT]";/**
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
 */class X1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new N1;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Q1(e))try{this.getOrInitializeService({instanceIdentifier:Ls})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Ls){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ls){return this.instances.has(e)}getOptions(e=Ls){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(e),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&e(u,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:K1(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ls){return this.component?this.component.multipleInstances?e:Ls:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function K1(i){return i===Ls?void 0:i}function Q1(i){return i.instantiationMode==="EAGER"}/**
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
 */class $1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new X1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(xe||(xe={}));const Z1={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},W1=xe.INFO,J1={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},eC=(i,e,...n)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=J1[e];if(o)console[o](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hm{constructor(e){this.name=e,this._logLevel=W1,this._logHandler=eC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Z1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const tC=(i,e)=>e.some(n=>i instanceof n);let v_,__;function nC(){return v_||(v_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iC(){return __||(__=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const CT=new WeakMap,um=new WeakMap,RT=new WeakMap,Bd=new WeakMap,Fm=new WeakMap;function rC(i){const e=new Promise((n,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",f)},u=()=>{n(ir(i.result)),o()},f=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&CT.set(n,i)}).catch(()=>{}),Fm.set(e,i),e}function sC(i){if(um.has(i))return;const e=new Promise((n,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",f),i.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",f),i.addEventListener("abort",f)});um.set(i,e)}let cm={get(i,e,n){if(i instanceof IDBTransaction){if(e==="done")return um.get(i);if(e==="objectStoreNames")return i.objectStoreNames||RT.get(i);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ir(i[e])},set(i,e,n){return i[e]=n,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function aC(i){cm=i(cm)}function oC(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=i.call(qd(this),e,...n);return RT.set(s,e.sort?e.sort():[e]),ir(s)}:iC().includes(i)?function(...e){return i.apply(qd(this),e),ir(CT.get(this))}:function(...e){return ir(i.apply(qd(this),e))}}function lC(i){return typeof i=="function"?oC(i):(i instanceof IDBTransaction&&sC(i),tC(i,nC())?new Proxy(i,cm):i)}function ir(i){if(i instanceof IDBRequest)return rC(i);if(Bd.has(i))return Bd.get(i);const e=lC(i);return e!==i&&(Bd.set(i,e),Fm.set(e,i)),e}const qd=i=>Fm.get(i);function hh(i,e,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(i,e),m=ir(f);return s&&f.addEventListener("upgradeneeded",g=>{s(ir(f.result),g.oldVersion,g.newVersion,ir(f.transaction),g)}),n&&f.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}function Hd(i,{blocked:e}={}){const n=indexedDB.deleteDatabase(i);return e&&n.addEventListener("blocked",s=>e(s.oldVersion,s)),ir(n).then(()=>{})}const uC=["get","getKey","getAll","getAllKeys","count"],cC=["put","add","delete","clear"],Fd=new Map;function T_(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Fd.get(e))return Fd.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,o=cC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||uC.includes(n)))return;const u=async function(f,...m){const g=this.transaction(f,o?"readwrite":"readonly");let y=g.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[n](...m),o&&g.done]))[0]};return Fd.set(e,u),u}aC(i=>({...i,get:(e,n,s)=>T_(e,n)||i.get(e,n,s),has:(e,n)=>!!T_(e,n)||i.has(e,n)}));/**
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
 */class hC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function fC(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hm="@firebase/app",E_="0.14.1";/**
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
 */const rr=new Hm("@firebase/app"),dC="@firebase/app-compat",mC="@firebase/analytics-compat",pC="@firebase/analytics",gC="@firebase/app-check-compat",yC="@firebase/app-check",vC="@firebase/auth",_C="@firebase/auth-compat",TC="@firebase/database",EC="@firebase/data-connect",SC="@firebase/database-compat",bC="@firebase/functions",wC="@firebase/functions-compat",AC="@firebase/installations",CC="@firebase/installations-compat",RC="@firebase/messaging",NC="@firebase/messaging-compat",IC="@firebase/performance",DC="@firebase/performance-compat",OC="@firebase/remote-config",MC="@firebase/remote-config-compat",PC="@firebase/storage",VC="@firebase/storage-compat",kC="@firebase/firestore",xC="@firebase/ai",LC="@firebase/firestore-compat",UC="firebase",zC="12.1.0";/**
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
 */const fm="[DEFAULT]",jC={[hm]:"fire-core",[dC]:"fire-core-compat",[pC]:"fire-analytics",[mC]:"fire-analytics-compat",[yC]:"fire-app-check",[gC]:"fire-app-check-compat",[vC]:"fire-auth",[_C]:"fire-auth-compat",[TC]:"fire-rtdb",[EC]:"fire-data-connect",[SC]:"fire-rtdb-compat",[bC]:"fire-fn",[wC]:"fire-fn-compat",[AC]:"fire-iid",[CC]:"fire-iid-compat",[RC]:"fire-fcm",[NC]:"fire-fcm-compat",[IC]:"fire-perf",[DC]:"fire-perf-compat",[OC]:"fire-rc",[MC]:"fire-rc-compat",[PC]:"fire-gcs",[VC]:"fire-gcs-compat",[kC]:"fire-fst",[LC]:"fire-fst-compat",[xC]:"fire-vertex","fire-js":"fire-js",[UC]:"fire-js-all"};/**
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
 */const Yc=new Map,BC=new Map,dm=new Map;function S_(i,e){try{i.container.addComponent(e)}catch(n){rr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,n)}}function Ci(i){const e=i.name;if(dm.has(e))return rr.debug(`There were multiple attempts to register component ${e}.`),!1;dm.set(e,i);for(const n of Yc.values())S_(n,i);for(const n of BC.values())S_(n,i);return!0}function uo(i,e){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(e)}function _i(i){return i==null?!1:i.settings!==void 0}/**
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
 */const qC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fr=new Qs("app","Firebase",qC);/**
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
 */class HC{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ei("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fr.create("app-deleted",{appName:this._name})}}/**
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
 */const co=zC;function NT(i,e={}){let n=i;typeof e!="object"&&(e={name:e});const s={name:fm,automaticDataCollectionEnabled:!0,...e},o=s.name;if(typeof o!="string"||!o)throw Fr.create("bad-app-name",{appName:String(o)});if(n||(n=TT()),!n)throw Fr.create("no-options");const u=Yc.get(o);if(u){if(Fs(n,u.options)&&Fs(s,u.config))return u;throw Fr.create("duplicate-app",{appName:o})}const f=new $1(o);for(const g of dm.values())f.addComponent(g);const m=new HC(n,s,f);return Yc.set(o,m),m}function Ym(i=fm){const e=Yc.get(i);if(!e&&i===fm&&TT())return NT();if(!e)throw Fr.create("no-app",{appName:i});return e}function Fn(i,e,n){let s=jC[i]??i;n&&(s+=`-${n}`);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const f=[`Unable to register library "${s}" with version "${e}":`];o&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rr.warn(f.join(" "));return}Ci(new ei(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const FC="firebase-heartbeat-database",YC=1,Ul="firebase-heartbeat-store";let Yd=null;function IT(){return Yd||(Yd=hh(FC,YC,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Ul)}catch(n){console.warn(n)}}}}).catch(i=>{throw Fr.create("idb-open",{originalErrorMessage:i.message})})),Yd}async function GC(i){try{const n=(await IT()).transaction(Ul),s=await n.objectStore(Ul).get(DT(i));return await n.done,s}catch(e){if(e instanceof Ni)rr.warn(e.message);else{const n=Fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rr.warn(n.message)}}}async function b_(i,e){try{const s=(await IT()).transaction(Ul,"readwrite");await s.objectStore(Ul).put(e,DT(i)),await s.done}catch(n){if(n instanceof Ni)rr.warn(n.message);else{const s=Fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rr.warn(s.message)}}}function DT(i){return`${i.name}!${i.options.appId}`}/**
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
 */const XC=1024,KC=30;class QC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ZC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=w_();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>KC){const f=WC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){rr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=w_(),{heartbeatsToSend:s,unsentEntries:o}=$C(this._heartbeatsCache.heartbeats),u=Fc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return rr.warn(n),""}}}function w_(){return new Date().toISOString().substring(0,10)}function $C(i,e=XC){const n=[];let s=i.slice();for(const o of i){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),A_(n)>e){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),A_(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ZC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wT()?AT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await GC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return b_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return b_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function A_(i){return Fc(JSON.stringify({version:2,heartbeats:i})).length}function WC(i){if(i.length===0)return-1;let e=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,e=s);return e}/**
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
 */function JC(i){Ci(new ei("platform-logger",e=>new hC(e),"PRIVATE")),Ci(new ei("heartbeat",e=>new QC(e),"PRIVATE")),Fn(hm,E_,i),Fn(hm,E_,"esm2020"),Fn("fire-js","")}JC("");var C_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yr,OT;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(V,A){function N(){}N.prototype=A.prototype,V.D=A.prototype,V.prototype=new N,V.prototype.constructor=V,V.C=function(O,M,x){for(var C=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)C[Ge-2]=arguments[Ge];return A.prototype[M].apply(O,C)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(V,A,N){N||(N=0);var O=Array(16);if(typeof A=="string")for(var M=0;16>M;++M)O[M]=A.charCodeAt(N++)|A.charCodeAt(N++)<<8|A.charCodeAt(N++)<<16|A.charCodeAt(N++)<<24;else for(M=0;16>M;++M)O[M]=A[N++]|A[N++]<<8|A[N++]<<16|A[N++]<<24;A=V.g[0],N=V.g[1],M=V.g[2];var x=V.g[3],C=A+(x^N&(M^x))+O[0]+3614090360&4294967295;A=N+(C<<7&4294967295|C>>>25),C=x+(M^A&(N^M))+O[1]+3905402710&4294967295,x=A+(C<<12&4294967295|C>>>20),C=M+(N^x&(A^N))+O[2]+606105819&4294967295,M=x+(C<<17&4294967295|C>>>15),C=N+(A^M&(x^A))+O[3]+3250441966&4294967295,N=M+(C<<22&4294967295|C>>>10),C=A+(x^N&(M^x))+O[4]+4118548399&4294967295,A=N+(C<<7&4294967295|C>>>25),C=x+(M^A&(N^M))+O[5]+1200080426&4294967295,x=A+(C<<12&4294967295|C>>>20),C=M+(N^x&(A^N))+O[6]+2821735955&4294967295,M=x+(C<<17&4294967295|C>>>15),C=N+(A^M&(x^A))+O[7]+4249261313&4294967295,N=M+(C<<22&4294967295|C>>>10),C=A+(x^N&(M^x))+O[8]+1770035416&4294967295,A=N+(C<<7&4294967295|C>>>25),C=x+(M^A&(N^M))+O[9]+2336552879&4294967295,x=A+(C<<12&4294967295|C>>>20),C=M+(N^x&(A^N))+O[10]+4294925233&4294967295,M=x+(C<<17&4294967295|C>>>15),C=N+(A^M&(x^A))+O[11]+2304563134&4294967295,N=M+(C<<22&4294967295|C>>>10),C=A+(x^N&(M^x))+O[12]+1804603682&4294967295,A=N+(C<<7&4294967295|C>>>25),C=x+(M^A&(N^M))+O[13]+4254626195&4294967295,x=A+(C<<12&4294967295|C>>>20),C=M+(N^x&(A^N))+O[14]+2792965006&4294967295,M=x+(C<<17&4294967295|C>>>15),C=N+(A^M&(x^A))+O[15]+1236535329&4294967295,N=M+(C<<22&4294967295|C>>>10),C=A+(M^x&(N^M))+O[1]+4129170786&4294967295,A=N+(C<<5&4294967295|C>>>27),C=x+(N^M&(A^N))+O[6]+3225465664&4294967295,x=A+(C<<9&4294967295|C>>>23),C=M+(A^N&(x^A))+O[11]+643717713&4294967295,M=x+(C<<14&4294967295|C>>>18),C=N+(x^A&(M^x))+O[0]+3921069994&4294967295,N=M+(C<<20&4294967295|C>>>12),C=A+(M^x&(N^M))+O[5]+3593408605&4294967295,A=N+(C<<5&4294967295|C>>>27),C=x+(N^M&(A^N))+O[10]+38016083&4294967295,x=A+(C<<9&4294967295|C>>>23),C=M+(A^N&(x^A))+O[15]+3634488961&4294967295,M=x+(C<<14&4294967295|C>>>18),C=N+(x^A&(M^x))+O[4]+3889429448&4294967295,N=M+(C<<20&4294967295|C>>>12),C=A+(M^x&(N^M))+O[9]+568446438&4294967295,A=N+(C<<5&4294967295|C>>>27),C=x+(N^M&(A^N))+O[14]+3275163606&4294967295,x=A+(C<<9&4294967295|C>>>23),C=M+(A^N&(x^A))+O[3]+4107603335&4294967295,M=x+(C<<14&4294967295|C>>>18),C=N+(x^A&(M^x))+O[8]+1163531501&4294967295,N=M+(C<<20&4294967295|C>>>12),C=A+(M^x&(N^M))+O[13]+2850285829&4294967295,A=N+(C<<5&4294967295|C>>>27),C=x+(N^M&(A^N))+O[2]+4243563512&4294967295,x=A+(C<<9&4294967295|C>>>23),C=M+(A^N&(x^A))+O[7]+1735328473&4294967295,M=x+(C<<14&4294967295|C>>>18),C=N+(x^A&(M^x))+O[12]+2368359562&4294967295,N=M+(C<<20&4294967295|C>>>12),C=A+(N^M^x)+O[5]+4294588738&4294967295,A=N+(C<<4&4294967295|C>>>28),C=x+(A^N^M)+O[8]+2272392833&4294967295,x=A+(C<<11&4294967295|C>>>21),C=M+(x^A^N)+O[11]+1839030562&4294967295,M=x+(C<<16&4294967295|C>>>16),C=N+(M^x^A)+O[14]+4259657740&4294967295,N=M+(C<<23&4294967295|C>>>9),C=A+(N^M^x)+O[1]+2763975236&4294967295,A=N+(C<<4&4294967295|C>>>28),C=x+(A^N^M)+O[4]+1272893353&4294967295,x=A+(C<<11&4294967295|C>>>21),C=M+(x^A^N)+O[7]+4139469664&4294967295,M=x+(C<<16&4294967295|C>>>16),C=N+(M^x^A)+O[10]+3200236656&4294967295,N=M+(C<<23&4294967295|C>>>9),C=A+(N^M^x)+O[13]+681279174&4294967295,A=N+(C<<4&4294967295|C>>>28),C=x+(A^N^M)+O[0]+3936430074&4294967295,x=A+(C<<11&4294967295|C>>>21),C=M+(x^A^N)+O[3]+3572445317&4294967295,M=x+(C<<16&4294967295|C>>>16),C=N+(M^x^A)+O[6]+76029189&4294967295,N=M+(C<<23&4294967295|C>>>9),C=A+(N^M^x)+O[9]+3654602809&4294967295,A=N+(C<<4&4294967295|C>>>28),C=x+(A^N^M)+O[12]+3873151461&4294967295,x=A+(C<<11&4294967295|C>>>21),C=M+(x^A^N)+O[15]+530742520&4294967295,M=x+(C<<16&4294967295|C>>>16),C=N+(M^x^A)+O[2]+3299628645&4294967295,N=M+(C<<23&4294967295|C>>>9),C=A+(M^(N|~x))+O[0]+4096336452&4294967295,A=N+(C<<6&4294967295|C>>>26),C=x+(N^(A|~M))+O[7]+1126891415&4294967295,x=A+(C<<10&4294967295|C>>>22),C=M+(A^(x|~N))+O[14]+2878612391&4294967295,M=x+(C<<15&4294967295|C>>>17),C=N+(x^(M|~A))+O[5]+4237533241&4294967295,N=M+(C<<21&4294967295|C>>>11),C=A+(M^(N|~x))+O[12]+1700485571&4294967295,A=N+(C<<6&4294967295|C>>>26),C=x+(N^(A|~M))+O[3]+2399980690&4294967295,x=A+(C<<10&4294967295|C>>>22),C=M+(A^(x|~N))+O[10]+4293915773&4294967295,M=x+(C<<15&4294967295|C>>>17),C=N+(x^(M|~A))+O[1]+2240044497&4294967295,N=M+(C<<21&4294967295|C>>>11),C=A+(M^(N|~x))+O[8]+1873313359&4294967295,A=N+(C<<6&4294967295|C>>>26),C=x+(N^(A|~M))+O[15]+4264355552&4294967295,x=A+(C<<10&4294967295|C>>>22),C=M+(A^(x|~N))+O[6]+2734768916&4294967295,M=x+(C<<15&4294967295|C>>>17),C=N+(x^(M|~A))+O[13]+1309151649&4294967295,N=M+(C<<21&4294967295|C>>>11),C=A+(M^(N|~x))+O[4]+4149444226&4294967295,A=N+(C<<6&4294967295|C>>>26),C=x+(N^(A|~M))+O[11]+3174756917&4294967295,x=A+(C<<10&4294967295|C>>>22),C=M+(A^(x|~N))+O[2]+718787259&4294967295,M=x+(C<<15&4294967295|C>>>17),C=N+(x^(M|~A))+O[9]+3951481745&4294967295,V.g[0]=V.g[0]+A&4294967295,V.g[1]=V.g[1]+(M+(C<<21&4294967295|C>>>11))&4294967295,V.g[2]=V.g[2]+M&4294967295,V.g[3]=V.g[3]+x&4294967295}s.prototype.u=function(V,A){A===void 0&&(A=V.length);for(var N=A-this.blockSize,O=this.B,M=this.h,x=0;x<A;){if(M==0)for(;x<=N;)o(this,V,x),x+=this.blockSize;if(typeof V=="string"){for(;x<A;)if(O[M++]=V.charCodeAt(x++),M==this.blockSize){o(this,O),M=0;break}}else for(;x<A;)if(O[M++]=V[x++],M==this.blockSize){o(this,O),M=0;break}}this.h=M,this.o+=A},s.prototype.v=function(){var V=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);V[0]=128;for(var A=1;A<V.length-8;++A)V[A]=0;var N=8*this.o;for(A=V.length-8;A<V.length;++A)V[A]=N&255,N/=256;for(this.u(V),V=Array(16),A=N=0;4>A;++A)for(var O=0;32>O;O+=8)V[N++]=this.g[A]>>>O&255;return V};function u(V,A){var N=m;return Object.prototype.hasOwnProperty.call(N,V)?N[V]:N[V]=A(V)}function f(V,A){this.h=A;for(var N=[],O=!0,M=V.length-1;0<=M;M--){var x=V[M]|0;O&&x==A||(N[M]=x,O=!1)}this.g=N}var m={};function g(V){return-128<=V&&128>V?u(V,function(A){return new f([A|0],0>A?-1:0)}):new f([V|0],0>V?-1:0)}function y(V){if(isNaN(V)||!isFinite(V))return b;if(0>V)return G(y(-V));for(var A=[],N=1,O=0;V>=N;O++)A[O]=V/N|0,N*=4294967296;return new f(A,0)}function T(V,A){if(V.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(V.charAt(0)=="-")return G(T(V.substring(1),A));if(0<=V.indexOf("-"))throw Error('number format error: interior "-" character');for(var N=y(Math.pow(A,8)),O=b,M=0;M<V.length;M+=8){var x=Math.min(8,V.length-M),C=parseInt(V.substring(M,M+x),A);8>x?(x=y(Math.pow(A,x)),O=O.j(x).add(y(C))):(O=O.j(N),O=O.add(y(C)))}return O}var b=g(0),w=g(1),k=g(16777216);i=f.prototype,i.m=function(){if(Y(this))return-G(this).m();for(var V=0,A=1,N=0;N<this.g.length;N++){var O=this.i(N);V+=(0<=O?O:4294967296+O)*A,A*=4294967296}return V},i.toString=function(V){if(V=V||10,2>V||36<V)throw Error("radix out of range: "+V);if(U(this))return"0";if(Y(this))return"-"+G(this).toString(V);for(var A=y(Math.pow(V,6)),N=this,O="";;){var M=ge(N,A).g;N=ue(N,M.j(A));var x=((0<N.g.length?N.g[0]:N.h)>>>0).toString(V);if(N=M,U(N))return x+O;for(;6>x.length;)x="0"+x;O=x+O}},i.i=function(V){return 0>V?0:V<this.g.length?this.g[V]:this.h};function U(V){if(V.h!=0)return!1;for(var A=0;A<V.g.length;A++)if(V.g[A]!=0)return!1;return!0}function Y(V){return V.h==-1}i.l=function(V){return V=ue(this,V),Y(V)?-1:U(V)?0:1};function G(V){for(var A=V.g.length,N=[],O=0;O<A;O++)N[O]=~V.g[O];return new f(N,~V.h).add(w)}i.abs=function(){return Y(this)?G(this):this},i.add=function(V){for(var A=Math.max(this.g.length,V.g.length),N=[],O=0,M=0;M<=A;M++){var x=O+(this.i(M)&65535)+(V.i(M)&65535),C=(x>>>16)+(this.i(M)>>>16)+(V.i(M)>>>16);O=C>>>16,x&=65535,C&=65535,N[M]=C<<16|x}return new f(N,N[N.length-1]&-2147483648?-1:0)};function ue(V,A){return V.add(G(A))}i.j=function(V){if(U(this)||U(V))return b;if(Y(this))return Y(V)?G(this).j(G(V)):G(G(this).j(V));if(Y(V))return G(this.j(G(V)));if(0>this.l(k)&&0>V.l(k))return y(this.m()*V.m());for(var A=this.g.length+V.g.length,N=[],O=0;O<2*A;O++)N[O]=0;for(O=0;O<this.g.length;O++)for(var M=0;M<V.g.length;M++){var x=this.i(O)>>>16,C=this.i(O)&65535,Ge=V.i(M)>>>16,Me=V.i(M)&65535;N[2*O+2*M]+=C*Me,ie(N,2*O+2*M),N[2*O+2*M+1]+=x*Me,ie(N,2*O+2*M+1),N[2*O+2*M+1]+=C*Ge,ie(N,2*O+2*M+1),N[2*O+2*M+2]+=x*Ge,ie(N,2*O+2*M+2)}for(O=0;O<A;O++)N[O]=N[2*O+1]<<16|N[2*O];for(O=A;O<2*A;O++)N[O]=0;return new f(N,0)};function ie(V,A){for(;(V[A]&65535)!=V[A];)V[A+1]+=V[A]>>>16,V[A]&=65535,A++}function te(V,A){this.g=V,this.h=A}function ge(V,A){if(U(A))throw Error("division by zero");if(U(V))return new te(b,b);if(Y(V))return A=ge(G(V),A),new te(G(A.g),G(A.h));if(Y(A))return A=ge(V,G(A)),new te(G(A.g),A.h);if(30<V.g.length){if(Y(V)||Y(A))throw Error("slowDivide_ only works with positive integers.");for(var N=w,O=A;0>=O.l(V);)N=oe(N),O=oe(O);var M=be(N,1),x=be(O,1);for(O=be(O,2),N=be(N,2);!U(O);){var C=x.add(O);0>=C.l(V)&&(M=M.add(N),x=C),O=be(O,1),N=be(N,1)}return A=ue(V,M.j(A)),new te(M,A)}for(M=b;0<=V.l(A);){for(N=Math.max(1,Math.floor(V.m()/A.m())),O=Math.ceil(Math.log(N)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),x=y(N),C=x.j(A);Y(C)||0<C.l(V);)N-=O,x=y(N),C=x.j(A);U(x)&&(x=w),M=M.add(x),V=ue(V,C)}return new te(M,V)}i.A=function(V){return ge(this,V).h},i.and=function(V){for(var A=Math.max(this.g.length,V.g.length),N=[],O=0;O<A;O++)N[O]=this.i(O)&V.i(O);return new f(N,this.h&V.h)},i.or=function(V){for(var A=Math.max(this.g.length,V.g.length),N=[],O=0;O<A;O++)N[O]=this.i(O)|V.i(O);return new f(N,this.h|V.h)},i.xor=function(V){for(var A=Math.max(this.g.length,V.g.length),N=[],O=0;O<A;O++)N[O]=this.i(O)^V.i(O);return new f(N,this.h^V.h)};function oe(V){for(var A=V.g.length+1,N=[],O=0;O<A;O++)N[O]=V.i(O)<<1|V.i(O-1)>>>31;return new f(N,V.h)}function be(V,A){var N=A>>5;A%=32;for(var O=V.g.length-N,M=[],x=0;x<O;x++)M[x]=0<A?V.i(x+N)>>>A|V.i(x+N+1)<<32-A:V.i(x+N);return new f(M,V.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,OT=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=T,Yr=f}).apply(typeof C_<"u"?C_:typeof self<"u"?self:typeof window<"u"?window:{});var Ic=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var MT,Nl,PT,kc,mm,VT,kT,xT;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,p,v){return c==Array.prototype||c==Object.prototype||(c[p]=v.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ic=="object"&&Ic];for(var p=0;p<c.length;++p){var v=c[p];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=n(this);function o(c,p){if(p)e:{var v=s;c=c.split(".");for(var S=0;S<c.length-1;S++){var z=c[S];if(!(z in v))break e;v=v[z]}c=c[c.length-1],S=v[c],p=p(S),p!=S&&p!=null&&e(v,c,{configurable:!0,writable:!0,value:p})}}function u(c,p){c instanceof String&&(c+="");var v=0,S=!1,z={next:function(){if(!S&&v<c.length){var F=v++;return{value:p(F,c[F]),done:!1}}return S=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}o("Array.prototype.values",function(c){return c||function(){return u(this,function(p,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function g(c){var p=typeof c;return p=p!="object"?p:c?Array.isArray(c)?"array":p:"null",p=="array"||p=="object"&&typeof c.length=="number"}function y(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function T(c,p,v){return c.call.apply(c.bind,arguments)}function b(c,p,v){if(!c)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var z=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(z,S),c.apply(p,z)}}return function(){return c.apply(p,arguments)}}function w(c,p,v){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?T:b,w.apply(null,arguments)}function k(c,p){var v=Array.prototype.slice.call(arguments,1);return function(){var S=v.slice();return S.push.apply(S,arguments),c.apply(this,S)}}function U(c,p){function v(){}v.prototype=p.prototype,c.aa=p.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(S,z,F){for(var re=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)re[ze-2]=arguments[ze];return p.prototype[z].apply(S,re)}}function Y(c){const p=c.length;if(0<p){const v=Array(p);for(let S=0;S<p;S++)v[S]=c[S];return v}return[]}function G(c,p){for(let v=1;v<arguments.length;v++){const S=arguments[v];if(g(S)){const z=c.length||0,F=S.length||0;c.length=z+F;for(let re=0;re<F;re++)c[z+re]=S[re]}else c.push(S)}}class ue{constructor(p,v){this.i=p,this.j=v,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function ie(c){return/^[\s\xa0]*$/.test(c)}function te(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function ge(c){return ge[" "](c),c}ge[" "]=function(){};var oe=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function be(c,p,v){for(const S in c)p.call(v,c[S],S,c)}function V(c,p){for(const v in c)p.call(void 0,c[v],v,c)}function A(c){const p={};for(const v in c)p[v]=c[v];return p}const N="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(c,p){let v,S;for(let z=1;z<arguments.length;z++){S=arguments[z];for(v in S)c[v]=S[v];for(let F=0;F<N.length;F++)v=N[F],Object.prototype.hasOwnProperty.call(S,v)&&(c[v]=S[v])}}function M(c){var p=1;c=c.split(":");const v=[];for(;0<p&&c.length;)v.push(c.shift()),p--;return c.length&&v.push(c.join(":")),v}function x(c){m.setTimeout(()=>{throw c},0)}function C(){var c=Pe;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class Ge{constructor(){this.h=this.g=null}add(p,v){const S=Me.get();S.set(p,v),this.h?this.h.next=S:this.g=S,this.h=S}}var Me=new ue(()=>new X,c=>c.reset());class X{constructor(){this.next=this.g=this.h=null}set(p,v){this.h=p,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ne,me=!1,Pe=new Ge,I=()=>{const c=m.Promise.resolve(void 0);ne=()=>{c.then($)}};var $=()=>{for(var c;c=C();){try{c.h.call(c.g)}catch(v){x(v)}var p=Me;p.j(c),100>p.h&&(p.h++,c.next=p.g,p.g=c)}me=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function J(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var pe=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};m.addEventListener("test",v,p),m.removeEventListener("test",v,p)}catch{}return c}();function Ce(c,p){if(J.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,S=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget){if(oe){e:{try{ge(p.nodeName);var z=!0;break e}catch{}z=!1}z||(p=null)}}else v=="mouseover"?p=c.fromElement:v=="mouseout"&&(p=c.toElement);this.relatedTarget=p,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Te[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ce.aa.h.call(this)}}U(Ce,J);var Te={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var it="closure_listenable_"+(1e6*Math.random()|0),Le=0;function Pt(c,p,v,S,z){this.listener=c,this.proxy=null,this.src=p,this.type=v,this.capture=!!S,this.ha=z,this.key=++Le,this.da=this.fa=!1}function ae(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function le(c){this.src=c,this.g={},this.h=0}le.prototype.add=function(c,p,v,S,z){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var re=Fe(c,p,S,z);return-1<re?(p=c[re],v||(p.fa=!1)):(p=new Pt(p,this.src,F,!!S,z),p.fa=v,c.push(p)),p};function ve(c,p){var v=p.type;if(v in c.g){var S=c.g[v],z=Array.prototype.indexOf.call(S,p,void 0),F;(F=0<=z)&&Array.prototype.splice.call(S,z,1),F&&(ae(p),c.g[v].length==0&&(delete c.g[v],c.h--))}}function Fe(c,p,v,S){for(var z=0;z<c.length;++z){var F=c[z];if(!F.da&&F.listener==p&&F.capture==!!v&&F.ha==S)return z}return-1}var ft="closure_lm_"+(1e6*Math.random()|0),vt={};function en(c,p,v,S,z){if(Array.isArray(p)){for(var F=0;F<p.length;F++)en(c,p[F],v,S,z);return null}return v=ru(v),c&&c[it]?c.K(p,v,y(S)?!!S.capture:!1,z):_t(c,p,v,!1,S,z)}function _t(c,p,v,S,z,F){if(!p)throw Error("Invalid event type");var re=y(z)?!!z.capture:!!z,ze=Ws(c);if(ze||(c[ft]=ze=new le(c)),v=ze.add(p,v,S,re,F),v.proxy)return v;if(S=Tt(),v.proxy=S,S.src=c,S.listener=v,c.addEventListener)pe||(z=re),z===void 0&&(z=!1),c.addEventListener(p.toString(),S,z);else if(c.attachEvent)c.attachEvent(is(p.toString()),S);else if(c.addListener&&c.removeListener)c.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Tt(){function c(v){return p.call(c.src,c.listener,v)}const p=Oh;return c}function hn(c,p,v,S,z){if(Array.isArray(p))for(var F=0;F<p.length;F++)hn(c,p[F],v,S,z);else S=y(S)?!!S.capture:!!S,v=ru(v),c&&c[it]?(c=c.i,p=String(p).toString(),p in c.g&&(F=c.g[p],v=Fe(F,v,S,z),-1<v&&(ae(F[v]),Array.prototype.splice.call(F,v,1),F.length==0&&(delete c.g[p],c.h--)))):c&&(c=Ws(c))&&(p=c.g[p.toString()],c=-1,p&&(c=Fe(p,v,S,z)),(v=-1<c?p[c]:null)&&Zs(v))}function Zs(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[it])ve(p.i,c);else{var v=c.type,S=c.proxy;p.removeEventListener?p.removeEventListener(v,S,c.capture):p.detachEvent?p.detachEvent(is(v),S):p.addListener&&p.removeListener&&p.removeListener(S),(v=Ws(p))?(ve(v,c),v.h==0&&(v.src=null,p[ft]=null)):ae(c)}}}function is(c){return c in vt?vt[c]:vt[c]="on"+c}function Oh(c,p){if(c.da)c=!0;else{p=new Ce(p,this);var v=c.listener,S=c.ha||c.src;c.fa&&Zs(c),c=v.call(S,p)}return c}function Ws(c){return c=c[ft],c instanceof le?c:null}var vo="__closure_events_fn_"+(1e9*Math.random()>>>0);function ru(c){return typeof c=="function"?c:(c[vo]||(c[vo]=function(p){return c.handleEvent(p)}),c[vo])}function pt(){se.call(this),this.i=new le(this),this.M=this,this.F=null}U(pt,se),pt.prototype[it]=!0,pt.prototype.removeEventListener=function(c,p,v,S){hn(this,c,p,v,S)};function $e(c,p){var v,S=c.F;if(S)for(v=[];S;S=S.F)v.push(S);if(c=c.M,S=p.type||p,typeof p=="string")p=new J(p,c);else if(p instanceof J)p.target=p.target||c;else{var z=p;p=new J(S,c),O(p,z)}if(z=!0,v)for(var F=v.length-1;0<=F;F--){var re=p.g=v[F];z=En(re,S,!0,p)&&z}if(re=p.g=c,z=En(re,S,!0,p)&&z,z=En(re,S,!1,p)&&z,v)for(F=0;F<v.length;F++)re=p.g=v[F],z=En(re,S,!1,p)&&z}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var c=this.i,p;for(p in c.g){for(var v=c.g[p],S=0;S<v.length;S++)ae(v[S]);delete c.g[p],c.h--}}this.F=null},pt.prototype.K=function(c,p,v,S){return this.i.add(String(c),p,!1,v,S)},pt.prototype.L=function(c,p,v,S){return this.i.add(String(c),p,!0,v,S)};function En(c,p,v,S){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();for(var z=!0,F=0;F<p.length;++F){var re=p[F];if(re&&!re.da&&re.capture==v){var ze=re.listener,kt=re.ha||re.src;re.fa&&ve(c.i,re),z=ze.call(kt,S)!==!1&&z}}return z&&!S.defaultPrevented}function tn(c,p,v){if(typeof c=="function")v&&(c=w(c,v));else if(c&&typeof c.handleEvent=="function")c=w(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:m.setTimeout(c,p||0)}function su(c){c.g=tn(()=>{c.g=null,c.i&&(c.i=!1,su(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class Mh extends se{constructor(p,v){super(),this.m=p,this.l=v,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:su(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rs(c){se.call(this),this.h=c,this.g={}}U(rs,se);var ss=[];function as(c){be(c.g,function(p,v){this.g.hasOwnProperty(v)&&Zs(p)},c),c.g={}}rs.prototype.N=function(){rs.aa.N.call(this),as(this)},rs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gn=m.JSON.stringify,Js=m.JSON.parse,os=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function _o(){}_o.prototype.h=null;function To(c){return c.h||(c.h=c.i())}function Eo(){}var Ii={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Di(){J.call(this,"d")}U(Di,J);function So(){J.call(this,"c")}U(So,J);var ni={},bo=null;function lr(){return bo=bo||new pt}ni.La="serverreachability";function ea(c){J.call(this,ni.La,c)}U(ea,J);function ur(c){const p=lr();$e(p,new ea(p))}ni.STAT_EVENT="statevent";function au(c,p){J.call(this,ni.STAT_EVENT,c),this.stat=p}U(au,J);function lt(c){const p=lr();$e(p,new au(p,c))}ni.Ma="timingevent";function Vt(c,p){J.call(this,ni.Ma,c),this.size=p}U(Vt,J);function Ct(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},p)}function Dn(){this.g=!0}Dn.prototype.xa=function(){this.g=!1};function wo(c,p,v,S,z,F){c.info(function(){if(c.g)if(F)for(var re="",ze=F.split("&"),kt=0;kt<ze.length;kt++){var je=ze[kt].split("=");if(1<je.length){var qt=je[0];je=je[1];var xt=qt.split("_");re=2<=xt.length&&xt[1]=="type"?re+(qt+"="+je+"&"):re+(qt+"=redacted&")}}else re=null;else re=F;return"XMLHTTP REQ ("+S+") [attempt "+z+"]: "+p+`
`+v+`
`+re})}function Ph(c,p,v,S,z,F,re){c.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+z+"]: "+p+`
`+v+`
`+F+" "+re})}function cr(c,p,v,S){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+ls(c,v)+(S?" "+S:"")})}function ou(c,p){c.info(function(){return"TIMEOUT: "+p})}Dn.prototype.info=function(){};function ls(c,p){if(!c.g)return p;if(!p)return null;try{var v=JSON.parse(p);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var S=v[c];if(!(2>S.length)){var z=S[1];if(Array.isArray(z)&&!(1>z.length)){var F=z[0];if(F!="noop"&&F!="stop"&&F!="close")for(var re=1;re<z.length;re++)z[re]=""}}}}return Gn(v)}catch{return p}}var hr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Oi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ii;function ri(){}U(ri,_o),ri.prototype.g=function(){return new XMLHttpRequest},ri.prototype.i=function(){return{}},ii=new ri;function fn(c,p,v,S){this.j=c,this.i=p,this.l=v,this.R=S||1,this.U=new rs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Et}function Et(){this.i=null,this.g="",this.h=!1}var Ao={},ta={};function Xn(c,p,v){c.L=1,c.v=ds(Sn(p)),c.m=v,c.P=!0,Mi(c,null)}function Mi(c,p){c.F=Date.now(),us(c),c.A=Sn(c.v);var v=c.A,S=c.R;Array.isArray(S)||(S=[String(S)]),Oo(v.i,"t",S),c.C=0,v=c.j.J,c.h=new Et,c.g=bu(c.j,v?p:null,!c.m),0<c.O&&(c.M=new Mh(w(c.Y,c,c.g),c.O)),p=c.U,v=c.g,S=c.ca;var z="readystatechange";Array.isArray(z)||(z&&(ss[0]=z.toString()),z=ss);for(var F=0;F<z.length;F++){var re=en(v,z[F],S||p.handleEvent,!1,p.h||p);if(!re)break;p.g[re.key]=re}p=c.H?A(c.H):{},c.m?(c.u||(c.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,p)):(c.u="GET",c.g.ea(c.A,c.u,null,p)),ur(),wo(c.i,c.u,c.A,c.l,c.R,c.m)}fn.prototype.ca=function(c){c=c.target;const p=this.M;p&&Vn(c)==3?p.j():this.Y(c)},fn.prototype.Y=function(c){try{if(c==this.g)e:{const xt=Vn(this.g);var p=this.g.Ba();const ji=this.g.Z();if(!(3>xt)&&(xt!=3||this.g&&(this.h.h||this.g.oa()||pu(this.g)))){this.J||xt!=4||p==7||(p==8||0>=ji?ur(3):ur(2)),fr(this);var v=this.g.Z();this.X=v;t:if(lu(this)){var S=pu(this.g);c="";var z=S.length,F=Vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xt(this),si(this);var re="";break t}this.h.i=new m.TextDecoder}for(p=0;p<z;p++)this.h.h=!0,c+=this.h.i.decode(S[p],{stream:!(F&&p==z-1)});S.length=0,this.h.g+=c,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=v==200,Ph(this.i,this.u,this.A,this.l,this.R,xt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var ze,kt=this.g;if((ze=kt.g?kt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ie(ze)){var je=ze;break t}}je=null}if(v=je)cr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cs(this,v);else{this.o=!1,this.s=3,lt(12),Xt(this),si(this);break e}}if(this.P){v=!0;let Kt;for(;!this.J&&this.C<re.length;)if(Kt=uu(this,re),Kt==ta){xt==4&&(this.s=4,lt(14),v=!1),cr(this.i,this.l,null,"[Incomplete Response]");break}else if(Kt==Ao){this.s=4,lt(15),cr(this.i,this.l,re,"[Invalid Chunk]"),v=!1;break}else cr(this.i,this.l,Kt,null),cs(this,Kt);if(lu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),xt!=4||re.length!=0||this.h.h||(this.s=1,lt(16),v=!1),this.o=this.o&&v,!v)cr(this.i,this.l,re,"[Invalid Chunked Response]"),Xt(this),si(this);else if(0<re.length&&!this.W){this.W=!0;var qt=this.j;qt.g==this&&qt.ba&&!qt.M&&(qt.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),Es(qt),qt.M=!0,lt(11))}}else cr(this.i,this.l,re,null),cs(this,re);xt==4&&Xt(this),this.o&&!this.J&&(xt==4?Tu(this.j,this):(this.o=!1,us(this)))}else Uh(this.g),v==400&&0<re.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),Xt(this),si(this)}}}catch{}finally{}};function lu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function uu(c,p){var v=c.C,S=p.indexOf(`
`,v);return S==-1?ta:(v=Number(p.substring(v,S)),isNaN(v)?Ao:(S+=1,S+v>p.length?ta:(p=p.slice(S,S+v),c.C=S+v,p)))}fn.prototype.cancel=function(){this.J=!0,Xt(this)};function us(c){c.S=Date.now()+c.I,cu(c,c.I)}function cu(c,p){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Ct(w(c.ba,c),p)}function fr(c){c.B&&(m.clearTimeout(c.B),c.B=null)}fn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(ou(this.i,this.A),this.L!=2&&(ur(),lt(17)),Xt(this),this.s=2,si(this)):cu(this,this.S-c)};function si(c){c.j.G==0||c.J||Tu(c.j,c)}function Xt(c){fr(c);var p=c.M;p&&typeof p.ma=="function"&&p.ma(),c.M=null,as(c.U),c.g&&(p=c.g,c.g=null,p.abort(),p.ma())}function cs(c,p){try{var v=c.j;if(v.G!=0&&(v.g==c||Co(v.h,c))){if(!c.K&&Co(v.h,c)&&v.G==3){try{var S=v.Da.g.parse(p)}catch{S=null}if(Array.isArray(S)&&S.length==3){var z=S;if(z[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)da(v),ha(v);else break e;xo(v),lt(18)}}else v.za=z[1],0<v.za-v.T&&37500>z[2]&&v.F&&v.v==0&&!v.C&&(v.C=Ct(w(v.Za,v),6e3));if(1>=ia(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else zi(v,11)}else if((c.K||v.g==c)&&da(v),!ie(p))for(z=v.Da.g.parse(p),p=0;p<z.length;p++){let je=z[p];if(v.T=je[0],je=je[1],v.G==2)if(je[0]=="c"){v.K=je[1],v.ia=je[2];const qt=je[3];qt!=null&&(v.la=qt,v.j.info("VER="+v.la));const xt=je[4];xt!=null&&(v.Aa=xt,v.j.info("SVER="+v.Aa));const ji=je[5];ji!=null&&typeof ji=="number"&&0<ji&&(S=1.5*ji,v.L=S,v.j.info("backChannelRequestTimeoutMs_="+S)),S=v;const Kt=c.g;if(Kt){const fi=Kt.g?Kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fi){var F=S.h;F.g||fi.indexOf("spdy")==-1&&fi.indexOf("quic")==-1&&fi.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(ra(F,F.h),F.h=null))}if(S.D){const Uo=Kt.g?Kt.g.getResponseHeader("X-HTTP-Session-Id"):null;Uo&&(S.ya=Uo,Je(S.I,S.D,Uo))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),S=v;var re=c;if(S.qa=Su(S,S.J?S.ia:null,S.W),re.K){dn(S.h,re);var ze=re,kt=S.L;kt&&(ze.I=kt),ze.B&&(fr(ze),us(ze)),S.g=re}else vu(S);0<v.i.length&&fa(v)}else je[0]!="stop"&&je[0]!="close"||zi(v,7);else v.G==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?zi(v,7):Vo(v):je[0]!="noop"&&v.l&&v.l.ta(je),v.v=0)}}ur(4)}catch{}}var hu=class{constructor(c,p){this.g=c,this.map=p}};function Pi(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function na(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function ia(c){return c.h?1:c.g?c.g.size:0}function Co(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function ra(c,p){c.g?c.g.add(p):c.h=p}function dn(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}Pi.prototype.cancel=function(){if(this.i=Ro(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Ro(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const v of c.g.values())p=p.concat(v.D);return p}return Y(c.i)}function Vh(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(g(c)){for(var p=[],v=c.length,S=0;S<v;S++)p.push(c[S]);return p}p=[],v=0;for(S in c)p[v++]=c[S];return p}function sa(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(g(c)||typeof c=="string"){var p=[];c=c.length;for(var v=0;v<c;v++)p.push(v);return p}p=[],v=0;for(const S in c)p[v++]=S;return p}}}function No(c,p){if(c.forEach&&typeof c.forEach=="function")c.forEach(p,void 0);else if(g(c)||typeof c=="string")Array.prototype.forEach.call(c,p,void 0);else for(var v=sa(c),S=Vh(c),z=S.length,F=0;F<z;F++)p.call(void 0,S[F],v&&v[F],c)}var hs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kh(c,p){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var S=c[v].indexOf("="),z=null;if(0<=S){var F=c[v].substring(0,S);z=c[v].substring(S+1)}else F=c[v];p(F,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function Rt(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Rt){this.h=c.h,fs(this,c.j),this.o=c.o,this.g=c.g,dr(this,c.s),this.l=c.l;var p=c.i,v=new ki;v.i=p.i,p.g&&(v.g=new Map(p.g),v.h=p.h),Vi(this,v),this.m=c.m}else c&&(p=String(c).match(hs))?(this.h=!1,fs(this,p[1]||"",!0),this.o=On(p[2]||""),this.g=On(p[3]||"",!0),dr(this,p[4]),this.l=On(p[5]||"",!0),Vi(this,p[6]||"",!0),this.m=On(p[7]||"")):(this.h=!1,this.i=new ki(null,this.h))}Rt.prototype.toString=function(){var c=[],p=this.j;p&&c.push(ms(p,Io,!0),":");var v=this.g;return(v||p=="file")&&(c.push("//"),(p=this.o)&&c.push(ms(p,Io,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(ms(v,v.charAt(0)=="/"?xh:Do,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",ms(v,aa)),c.join("")};function Sn(c){return new Rt(c)}function fs(c,p,v){c.j=v?On(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function dr(c,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);c.s=p}else c.s=null}function Vi(c,p,v){p instanceof ki?(c.i=p,du(c.i,c.h)):(v||(p=ms(p,Lh)),c.i=new ki(p,c.h))}function Je(c,p,v){c.i.set(p,v)}function ds(c){return Je(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function On(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ms(c,p,v){return typeof c=="string"?(c=encodeURI(c).replace(p,fu),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function fu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Io=/[#\/\?@]/g,Do=/[#\?:]/g,xh=/[#\?]/g,Lh=/[#\?@]/g,aa=/#/g;function ki(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function Mn(c){c.g||(c.g=new Map,c.h=0,c.i&&kh(c.i,function(p,v){c.add(decodeURIComponent(p.replace(/\+/g," ")),v)}))}i=ki.prototype,i.add=function(c,p){Mn(this),this.i=null,c=ai(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(p),this.h+=1,this};function xi(c,p){Mn(c),p=ai(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function Li(c,p){return Mn(c),p=ai(c,p),c.g.has(p)}i.forEach=function(c,p){Mn(this),this.g.forEach(function(v,S){v.forEach(function(z){c.call(p,z,S,this)},this)},this)},i.na=function(){Mn(this);const c=Array.from(this.g.values()),p=Array.from(this.g.keys()),v=[];for(let S=0;S<p.length;S++){const z=c[S];for(let F=0;F<z.length;F++)v.push(p[S])}return v},i.V=function(c){Mn(this);let p=[];if(typeof c=="string")Li(this,c)&&(p=p.concat(this.g.get(ai(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)p=p.concat(c[v])}return p},i.set=function(c,p){return Mn(this),this.i=null,c=ai(this,c),Li(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},i.get=function(c,p){return c?(c=this.V(c),0<c.length?String(c[0]):p):p};function Oo(c,p,v){xi(c,p),0<v.length&&(c.i=null,c.g.set(ai(c,p),Y(v)),c.h+=v.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(var v=0;v<p.length;v++){var S=p[v];const F=encodeURIComponent(String(S)),re=this.V(S);for(S=0;S<re.length;S++){var z=F;re[S]!==""&&(z+="="+encodeURIComponent(String(re[S]))),c.push(z)}}return this.i=c.join("&")};function ai(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function du(c,p){p&&!c.j&&(Mn(c),c.i=null,c.g.forEach(function(v,S){var z=S.toLowerCase();S!=z&&(xi(this,S),Oo(this,z,v))},c)),c.j=p}function ps(c,p){const v=new Dn;if(m.Image){const S=new Image;S.onload=k(Pn,v,"TestLoadImage: loaded",!0,p,S),S.onerror=k(Pn,v,"TestLoadImage: error",!1,p,S),S.onabort=k(Pn,v,"TestLoadImage: abort",!1,p,S),S.ontimeout=k(Pn,v,"TestLoadImage: timeout",!1,p,S),m.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=c}else p(!1)}function Kn(c,p){const v=new Dn,S=new AbortController,z=setTimeout(()=>{S.abort(),Pn(v,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:S.signal}).then(F=>{clearTimeout(z),F.ok?Pn(v,"TestPingServer: ok",!0,p):Pn(v,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(z),Pn(v,"TestPingServer: error",!1,p)})}function Pn(c,p,v,S,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),S(v)}catch{}}function gs(){this.g=new os}function oi(c,p,v){const S=v||"";try{No(c,function(z,F){let re=z;y(z)&&(re=Gn(z)),p.push(S+F+"="+encodeURIComponent(re))})}catch(z){throw p.push(S+"type="+encodeURIComponent("_badmap")),z}}function mr(c){this.l=c.Ub||null,this.j=c.eb||!1}U(mr,_o),mr.prototype.g=function(){return new Ui(this.l,this.j)},mr.prototype.i=function(c){return function(){return c}}({});function Ui(c,p){pt.call(this),this.D=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(Ui,pt),i=Ui.prototype,i.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=p,this.readyState=1,ui(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(p.body=c),(this.D||m).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,li(this)),this.readyState=0},i.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ui(this)),this.g&&(this.readyState=3,ui(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Mo(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Mo(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}i.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?li(this):ui(this),this.readyState==3&&Mo(this)}},i.Ra=function(c){this.g&&(this.response=this.responseText=c,li(this))},i.Qa=function(c){this.g&&(this.response=c,li(this))},i.ga=function(){this.g&&li(this)};function li(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ui(c)}i.setRequestHeader=function(c,p){this.u.append(c,p)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var v=p.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=p.next();return c.join(`\r
`)};function ui(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Po(c){let p="";return be(c,function(v,S){p+=S,p+=":",p+=v,p+=`\r
`}),p}function Bt(c,p,v){e:{for(S in v){var S=!1;break e}S=!0}S||(v=Po(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):Je(c,p,v))}function Qe(c){pt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(Qe,pt);var oa=/^https?$/i,ys=["POST","PUT"];i=Qe.prototype,i.Ha=function(c){this.J=c},i.ea=function(c,p,v,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ii.g(),this.v=this.o?To(this.o):To(ii),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(F){mu(this,F);return}if(c=v||"",v=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var z in S)v.set(z,S[z]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const F of S.keys())v.set(F,S.get(F));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(v.keys()).find(F=>F.toLowerCase()=="content-type"),z=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(ys,p,void 0))||S||z||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,re]of v)this.g.setRequestHeader(F,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vs(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){mu(this,F)}};function mu(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.m=5,la(c),ci(c)}function la(c){c.A||(c.A=!0,$e(c,"complete"),$e(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,$e(this,"complete"),$e(this,"abort"),ci(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ci(this,!0)),Qe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?ua(this):this.bb())},i.bb=function(){ua(this)};function ua(c){if(c.h&&typeof f<"u"&&(!c.v[1]||Vn(c)!=4||c.Z()!=2)){if(c.u&&Vn(c)==4)tn(c.Ea,0,c);else if($e(c,"readystatechange"),Vn(c)==4){c.h=!1;try{const re=c.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var v;if(!(v=p)){var S;if(S=re===0){var z=String(c.D).match(hs)[1]||null;!z&&m.self&&m.self.location&&(z=m.self.location.protocol.slice(0,-1)),S=!oa.test(z?z.toLowerCase():"")}v=S}if(v)$e(c,"complete"),$e(c,"success");else{c.m=6;try{var F=2<Vn(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",la(c)}}finally{ci(c)}}}}function ci(c,p){if(c.g){vs(c);const v=c.g,S=c.v[0]?()=>{}:null;c.g=null,c.v=null,p||$e(c,"ready");try{v.onreadystatechange=S}catch{}}}function vs(c){c.I&&(m.clearTimeout(c.I),c.I=null)}i.isActive=function(){return!!this.g};function Vn(c){return c.g?c.g.readyState:0}i.Z=function(){try{return 2<Vn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),Js(p)}};function pu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Uh(c){const p={};c=(c.g&&2<=Vn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<c.length;S++){if(ie(c[S]))continue;var v=M(c[S]);const z=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const F=p[z]||[];p[z]=F,F.push(v)}V(p,function(S){return S.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function _s(c,p,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||p}function ca(c){this.Aa=0,this.i=[],this.j=new Dn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_s("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_s("baseRetryDelayMs",5e3,c),this.cb=_s("retryDelaySeedMs",1e4,c),this.Wa=_s("forwardChannelMaxRetries",2,c),this.wa=_s("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Pi(c&&c.concurrentRequestLimit),this.Da=new gs,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=ca.prototype,i.la=8,i.G=1,i.connect=function(c,p,v,S){lt(0),this.W=c,this.H=p||{},v&&S!==void 0&&(this.H.OSID=v,this.H.OAID=S),this.F=this.X,this.I=Su(this,null,this.W),fa(this)};function Vo(c){if(gu(c),c.G==3){var p=c.U++,v=Sn(c.I);if(Je(v,"SID",c.K),Je(v,"RID",p),Je(v,"TYPE","terminate"),Ts(c,v),p=new fn(c,c.j,p),p.L=2,p.v=ds(Sn(v)),v=!1,m.navigator&&m.navigator.sendBeacon)try{v=m.navigator.sendBeacon(p.v.toString(),"")}catch{}!v&&m.Image&&(new Image().src=p.v,v=!0),v||(p.g=bu(p.j,null),p.g.ea(p.v)),p.F=Date.now(),us(p)}Eu(c)}function ha(c){c.g&&(Es(c),c.g.cancel(),c.g=null)}function gu(c){ha(c),c.u&&(m.clearTimeout(c.u),c.u=null),da(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function fa(c){if(!na(c.h)&&!c.s){c.s=!0;var p=c.Ga;ne||I(),me||(ne(),me=!0),Pe.add(p,c),c.B=0}}function zh(c,p){return ia(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=p.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Ct(w(c.Ga,c,p),Lo(c,c.B)),c.B++,!0)}i.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const z=new fn(this,this.j,c);let F=this.o;if(this.S&&(F?(F=A(F),O(F,this.S)):F=this.S),this.m!==null||this.O||(z.H=F,F=null),this.P)e:{for(var p=0,v=0;v<this.i.length;v++){t:{var S=this.i[v];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(p+=S,4096<p){p=v;break e}if(p===4096||v===this.i.length-1){p=v+1;break e}}p=1e3}else p=1e3;p=yu(this,z,p),v=Sn(this.I),Je(v,"RID",c),Je(v,"CVER",22),this.D&&Je(v,"X-HTTP-Session-Id",this.D),Ts(this,v),F&&(this.O?p="headers="+encodeURIComponent(String(Po(F)))+"&"+p:this.m&&Bt(v,this.m,F)),ra(this.h,z),this.Ua&&Je(v,"TYPE","init"),this.P?(Je(v,"$req",p),Je(v,"SID","null"),z.T=!0,Xn(z,v,null)):Xn(z,v,p),this.G=2}}else this.G==3&&(c?ko(this,c):this.i.length==0||na(this.h)||ko(this))};function ko(c,p){var v;p?v=p.l:v=c.U++;const S=Sn(c.I);Je(S,"SID",c.K),Je(S,"RID",v),Je(S,"AID",c.T),Ts(c,S),c.m&&c.o&&Bt(S,c.m,c.o),v=new fn(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),p&&(c.i=p.D.concat(c.i)),p=yu(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ra(c.h,v),Xn(v,S,p)}function Ts(c,p){c.H&&be(c.H,function(v,S){Je(p,S,v)}),c.l&&No({},function(v,S){Je(p,S,v)})}function yu(c,p,v){v=Math.min(c.i.length,v);var S=c.l?w(c.l.Na,c.l,c):null;e:{var z=c.i;let F=-1;for(;;){const re=["count="+v];F==-1?0<v?(F=z[0].g,re.push("ofs="+F)):F=0:re.push("ofs="+F);let ze=!0;for(let kt=0;kt<v;kt++){let je=z[kt].g;const qt=z[kt].map;if(je-=F,0>je)F=Math.max(0,z[kt].g-100),ze=!1;else try{oi(qt,re,"req"+je+"_")}catch{S&&S(qt)}}if(ze){S=re.join("&");break e}}}return c=c.i.splice(0,v),p.D=c,S}function vu(c){if(!c.g&&!c.u){c.Y=1;var p=c.Fa;ne||I(),me||(ne(),me=!0),Pe.add(p,c),c.v=0}}function xo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Ct(w(c.Fa,c),Lo(c,c.v)),c.v++,!0)}i.Fa=function(){if(this.u=null,_u(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Ct(w(this.ab,this),c)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),ha(this),_u(this))};function Es(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function _u(c){c.g=new fn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var p=Sn(c.qa);Je(p,"RID","rpc"),Je(p,"SID",c.K),Je(p,"AID",c.T),Je(p,"CI",c.F?"0":"1"),!c.F&&c.ja&&Je(p,"TO",c.ja),Je(p,"TYPE","xmlhttp"),Ts(c,p),c.m&&c.o&&Bt(p,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=ds(Sn(p)),v.m=null,v.P=!0,Mi(v,c)}i.Za=function(){this.C!=null&&(this.C=null,ha(this),xo(this),lt(19))};function da(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function Tu(c,p){var v=null;if(c.g==p){da(c),Es(c),c.g=null;var S=2}else if(Co(c.h,p))v=p.D,dn(c.h,p),S=1;else return;if(c.G!=0){if(p.o)if(S==1){v=p.m?p.m.length:0,p=Date.now()-p.F;var z=c.B;S=lr(),$e(S,new Vt(S,v)),fa(c)}else vu(c);else if(z=p.s,z==3||z==0&&0<p.X||!(S==1&&zh(c,p)||S==2&&xo(c)))switch(v&&0<v.length&&(p=c.h,p.i=p.i.concat(v)),z){case 1:zi(c,5);break;case 4:zi(c,10);break;case 3:zi(c,6);break;default:zi(c,2)}}}function Lo(c,p){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*p}function zi(c,p){if(c.j.info("Error code "+p),p==2){var v=w(c.fb,c),S=c.Xa;const z=!S;S=new Rt(S||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||fs(S,"https"),ds(S),z?ps(S.toString(),v):Kn(S.toString(),v)}else lt(2);c.G=0,c.l&&c.l.sa(p),Eu(c),gu(c)}i.fb=function(c){c?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function Eu(c){if(c.G=0,c.ka=[],c.l){const p=Ro(c.h);(p.length!=0||c.i.length!=0)&&(G(c.ka,p),G(c.ka,c.i),c.h.i.length=0,Y(c.i),c.i.length=0),c.l.ra()}}function Su(c,p,v){var S=v instanceof Rt?Sn(v):new Rt(v);if(S.g!="")p&&(S.g=p+"."+S.g),dr(S,S.s);else{var z=m.location;S=z.protocol,p=p?p+"."+z.hostname:z.hostname,z=+z.port;var F=new Rt(null);S&&fs(F,S),p&&(F.g=p),z&&dr(F,z),v&&(F.l=v),S=F}return v=c.D,p=c.ya,v&&p&&Je(S,v,p),Je(S,"VER",c.la),Ts(c,S),S}function bu(c,p,v){if(p&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Ca&&!c.pa?new Qe(new mr({eb:v})):new Qe(c.pa),p.Ha(c.J),p}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function wu(){}i=wu.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function ma(){}ma.prototype.g=function(c,p){return new mn(c,p)};function mn(c,p){pt.call(this),this.g=new ca(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(c?c["X-WebChannel-Client-Profile"]=p.va:c={"X-WebChannel-Client-Profile":p.va}),this.g.S=c,(c=p&&p.Sb)&&!ie(c)&&(this.g.m=c),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!ie(p)&&(this.g.D=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new hi(this)}U(mn,pt),mn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},mn.prototype.close=function(){Vo(this.g)},mn.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=Gn(c),c=v);p.i.push(new hu(p.Ya++,c)),p.G==3&&fa(p)},mn.prototype.N=function(){this.g.l=null,delete this.j,Vo(this.g),delete this.g,mn.aa.N.call(this)};function Au(c){Di.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){e:{for(const v in p){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}U(Au,Di);function Cu(){So.call(this),this.status=1}U(Cu,So);function hi(c){this.g=c}U(hi,wu),hi.prototype.ua=function(){$e(this.g,"a")},hi.prototype.ta=function(c){$e(this.g,new Au(c))},hi.prototype.sa=function(c){$e(this.g,new Cu)},hi.prototype.ra=function(){$e(this.g,"b")},ma.prototype.createWebChannel=ma.prototype.g,mn.prototype.send=mn.prototype.o,mn.prototype.open=mn.prototype.m,mn.prototype.close=mn.prototype.close,xT=function(){return new ma},kT=function(){return lr()},VT=ni,mm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},hr.NO_ERROR=0,hr.TIMEOUT=8,hr.HTTP_ERROR=6,kc=hr,Oi.COMPLETE="complete",PT=Oi,Eo.EventType=Ii,Ii.OPEN="a",Ii.CLOSE="b",Ii.ERROR="c",Ii.MESSAGE="d",pt.prototype.listen=pt.prototype.K,Nl=Eo,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,MT=Qe}).apply(typeof Ic<"u"?Ic:typeof self<"u"?self:typeof window<"u"?window:{});const R_="@firebase/firestore",N_="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}an.UNAUTHENTICATED=new an(null),an.GOOGLE_CREDENTIALS=new an("google-credentials-uid"),an.FIRST_PARTY=new an("first-party-uid"),an.MOCK_USER=new an("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ho="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=new Hm("@firebase/firestore");function Ha(){return Ys.logLevel}function fe(i,...e){if(Ys.logLevel<=xe.DEBUG){const n=e.map(Gm);Ys.debug(`Firestore (${ho}): ${i}`,...n)}}function sr(i,...e){if(Ys.logLevel<=xe.ERROR){const n=e.map(Gm);Ys.error(`Firestore (${ho}): ${i}`,...n)}}function eo(i,...e){if(Ys.logLevel<=xe.WARN){const n=e.map(Gm);Ys.warn(`Firestore (${ho}): ${i}`,...n)}}function Gm(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Ne(i,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,LT(i,s,n)}function LT(i,e,n){let s=`FIRESTORE (${ho}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw sr(s),new Error(s)}function mt(i,e,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,i||LT(e,o,s)}function He(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends Ni{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class eR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(an.UNAUTHENTICATED))}shutdown(){}}class tR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class nR{constructor(e){this.t=e,this.currentUser=an.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){mt(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,n(g)):Promise.resolve();let u=new Gr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Gr,e.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Gr)}},0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(mt(typeof s.accessToken=="string",31837,{l:s}),new UT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return mt(e===null||typeof e=="string",2055,{h:e}),new an(e)}}class iR{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=an.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class rR{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new iR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(an.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class I_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,_i(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){mt(this.o===void 0,3512);const s=u=>{u.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,fe("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new I_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(mt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new I_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<i;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=aR(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=e.charAt(o[u]%62))}return s}}function Ue(i,e){return i<e?-1:i>e?1:0}function pm(i,e){const n=Math.min(i.length,e.length);for(let s=0;s<n;s++){const o=i.charAt(s),u=e.charAt(s);if(o!==u)return Gd(o)===Gd(u)?Ue(o,u):Gd(o)?1:-1}return Ue(i.length,e.length)}const oR=55296,lR=57343;function Gd(i){const e=i.charCodeAt(0);return e>=oR&&e<=lR}function to(i,e,n){return i.length===e.length&&i.every((s,o)=>n(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="__name__";class vi{constructor(e,n,s){n===void 0?n=0:n>e.length&&Ne(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&Ne(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return vi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vi?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let o=0;o<s;o++){const u=vi.compareSegments(e.get(o),n.get(o));if(u!==0)return u}return Ue(e.length,n.length)}static compareSegments(e,n){const s=vi.isNumericId(e),o=vi.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?vi.extractNumericId(e).compare(vi.extractNumericId(n)):pm(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Yr.fromString(e.substring(4,e.length-2))}}class ot extends vi{construct(e,n,s){return new ot(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ce(ee.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new ot(n)}static emptyPath(){return new ot([])}}const uR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class un extends vi{construct(e,n,s){return new un(e,n,s)}static isValidIdentifier(e){return uR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),un.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===D_}static keyField(){return new un([D_])}static fromServerFormat(e){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ce(ee.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ce(ee.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ce(ee.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new ce(ee.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new un(n)}static emptyPath(){return new un([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(ot.fromString(e))}static fromName(e){return new _e(ot.fromString(e).popFirst(5))}static empty(){return new _e(ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ot.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ot.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new ot(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(i,e,n){if(!n)throw new ce(ee.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function cR(i,e,n,s){if(e===!0&&s===!0)throw new ce(ee.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function O_(i){if(!_e.isDocumentKey(i))throw new ce(ee.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function M_(i){if(_e.isDocumentKey(i))throw new ce(ee.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function jT(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function fh(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Ne(12329,{type:typeof i})}function zl(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ce(ee.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fh(i);throw new ce(ee.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return i}/**
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
 */function Mt(i,e){const n={typeString:i};return e&&(n.value=e),n}function $l(i,e){if(!jT(i))throw new ce(ee.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const o=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){n=`JSON missing required field: '${s}'`;break}const f=i[s];if(o&&typeof f!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new ce(ee.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_=-62135596800,V_=1e6;class ht{static now(){return ht.fromMillis(Date.now())}static fromDate(e){return ht.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*V_);return new ht(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ce(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ce(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<P_)throw new ce(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/V_}_compareTo(e){return this.seconds===e.seconds?Ue(this.nanoseconds,e.nanoseconds):Ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ht._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if($l(e,ht._jsonSchema))return new ht(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-P_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ht._jsonSchemaVersion="firestore/timestamp/1.0",ht._jsonSchema={type:Mt("string",ht._jsonSchemaVersion),seconds:Mt("number"),nanoseconds:Mt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{static fromTimestamp(e){return new Re(e)}static min(){return new Re(new ht(0,0))}static max(){return new Re(new ht(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const jl=-1;function hR(i,e){const n=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=Re.fromTimestamp(s===1e9?new ht(n+1,0):new ht(n,s));return new Qr(o,_e.empty(),e)}function fR(i){return new Qr(i.readTime,i.key,jl)}class Qr{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Qr(Re.min(),_e.empty(),jl)}static max(){return new Qr(Re.max(),_e.empty(),jl)}}function dR(i,e){let n=i.readTime.compareTo(e.readTime);return n!==0?n:(n=_e.comparator(i.documentKey,e.documentKey),n!==0?n:Ue(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dh(i){if(i.code!==ee.FAILED_PRECONDITION||i.message!==mR)throw i;fe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ne(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new W((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof W?n:W.resolve(n)}catch(n){return W.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):W.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):W.reject(n)}static resolve(e){return new W((n,s)=>{n(e)})}static reject(e){return new W((n,s)=>{s(e)})}static waitFor(e){return new W((n,s)=>{let o=0,u=0,f=!1;e.forEach(m=>{++o,m.next(()=>{++u,f&&u===o&&n()},g=>s(g))}),f=!0,u===o&&n()})}static or(e){let n=W.resolve(!1);for(const s of e)n=n.next(o=>o?W.resolve(o):s());return n}static forEach(e,n){const s=[];return e.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(e,n){return new W((s,o)=>{const u=e.length,f=new Array(u);let m=0;for(let g=0;g<u;g++){const y=g;n(e[y]).next(T=>{f[y]=T,++m,m===u&&s(f)},T=>o(T))}})}static doWhile(e,n){return new W((s,o)=>{const u=()=>{e()===!0?n().next(()=>{u()},o):s()};u()})}}function gR(i){const e=i.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function fo(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class mh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}mh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR=-1;function ph(i){return i==null}function Gc(i){return i===0&&1/i==-1/0}function vR(i){return typeof i=="number"&&Number.isInteger(i)&&!Gc(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT="";function _R(i){let e="";for(let n=0;n<i.length;n++)e.length>0&&(e=k_(e)),e=TR(i.get(n),e);return k_(e)}function TR(i,e){let n=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":n+="";break;case BT:n+="";break;default:n+=u}}return n}function k_(i){return i+BT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(i){let e=0;for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e++;return e}function mo(i,e){for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&e(n,i[n])}function qT(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n){this.comparator=e,this.root=n||Wt.EMPTY}insert(e,n){return new At(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Wt.BLACK,null,null))}remove(e){return new At(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Wt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Dc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Dc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Dc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Dc(this.root,e,this.comparator,!0)}}class Dc{constructor(e,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?s(e.key,n):1,n&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Wt{constructor(e,n,s,o,u){this.key=e,this.value=n,this.color=s??Wt.RED,this.left=o??Wt.EMPTY,this.right=u??Wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,o,u){return new Wt(e??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Wt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return Wt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ne(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ne(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ne(27949);return e+(this.isRed()?0:1)}}Wt.EMPTY=null,Wt.RED=!0,Wt.BLACK=!1;Wt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ne(57766)}get value(){throw Ne(16141)}get color(){throw Ne(16727)}get left(){throw Ne(29726)}get right(){throw Ne(36894)}copy(e,n,s,o,u){return this}insert(e,n,s){return new Wt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.comparator=e,this.data=new At(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new L_(this.data.getIterator())}getIteratorFrom(e){return new L_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof jt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new jt(this.comparator);return n.data=e,n}}class L_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.fields=e,e.sort(un.comparator)}static empty(){return new Br([])}unionWith(e){let n=new jt(un.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Br(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return to(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class HT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new HT("Invalid base64 string: "+u):u}}(e);return new Jt(n)}static fromUint8Array(e){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(e);return new Jt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Jt.EMPTY_BYTE_STRING=new Jt("");const ER=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $r(i){if(mt(!!i,39018),typeof i=="string"){let e=0;const n=ER.exec(i);if(mt(!!n,46558,{timestamp:i}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:wt(i.seconds),nanos:wt(i.nanos)}}function wt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Zr(i){return typeof i=="string"?Jt.fromBase64String(i):Jt.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT="server_timestamp",YT="__type__",GT="__previous_value__",XT="__local_write_time__";function Km(i){var n,s;return((s=(((n=i==null?void 0:i.mapValue)==null?void 0:n.fields)||{})[YT])==null?void 0:s.stringValue)===FT}function gh(i){const e=i.mapValue.fields[GT];return Km(e)?gh(e):e}function Bl(i){const e=$r(i.mapValue.fields[XT].timestampValue);return new ht(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e,n,s,o,u,f,m,g,y,T){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=T}}const Xc="(default)";class ql{constructor(e,n){this.projectId=e,this.database=n||Xc}static empty(){return new ql("","")}get isDefaultDatabase(){return this.database===Xc}isEqual(e){return e instanceof ql&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT="__type__",bR="__max__",Oc={mapValue:{}},QT="__vector__",Kc="value";function Wr(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Km(i)?4:AR(i)?9007199254740991:wR(i)?10:11:Ne(28295,{value:i})}function Ri(i,e){if(i===e)return!0;const n=Wr(i);if(n!==Wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Bl(i).isEqual(Bl(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=$r(o.timestampValue),m=$r(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return Zr(o.bytesValue).isEqual(Zr(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return wt(o.geoPointValue.latitude)===wt(u.geoPointValue.latitude)&&wt(o.geoPointValue.longitude)===wt(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return wt(o.integerValue)===wt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=wt(o.doubleValue),m=wt(u.doubleValue);return f===m?Gc(f)===Gc(m):isNaN(f)&&isNaN(m)}return!1}(i,e);case 9:return to(i.arrayValue.values||[],e.arrayValue.values||[],Ri);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(x_(f)!==x_(m))return!1;for(const g in f)if(f.hasOwnProperty(g)&&(m[g]===void 0||!Ri(f[g],m[g])))return!1;return!0}(i,e);default:return Ne(52216,{left:i})}}function Hl(i,e){return(i.values||[]).find(n=>Ri(n,e))!==void 0}function no(i,e){if(i===e)return 0;const n=Wr(i),s=Wr(e);if(n!==s)return Ue(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ue(i.booleanValue,e.booleanValue);case 2:return function(u,f){const m=wt(u.integerValue||u.doubleValue),g=wt(f.integerValue||f.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(i,e);case 3:return U_(i.timestampValue,e.timestampValue);case 4:return U_(Bl(i),Bl(e));case 5:return pm(i.stringValue,e.stringValue);case 6:return function(u,f){const m=Zr(u),g=Zr(f);return m.compareTo(g)}(i.bytesValue,e.bytesValue);case 7:return function(u,f){const m=u.split("/"),g=f.split("/");for(let y=0;y<m.length&&y<g.length;y++){const T=Ue(m[y],g[y]);if(T!==0)return T}return Ue(m.length,g.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,f){const m=Ue(wt(u.latitude),wt(f.latitude));return m!==0?m:Ue(wt(u.longitude),wt(f.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return z_(i.arrayValue,e.arrayValue);case 10:return function(u,f){var w,k,U,Y;const m=u.fields||{},g=f.fields||{},y=(w=m[Kc])==null?void 0:w.arrayValue,T=(k=g[Kc])==null?void 0:k.arrayValue,b=Ue(((U=y==null?void 0:y.values)==null?void 0:U.length)||0,((Y=T==null?void 0:T.values)==null?void 0:Y.length)||0);return b!==0?b:z_(y,T)}(i.mapValue,e.mapValue);case 11:return function(u,f){if(u===Oc.mapValue&&f===Oc.mapValue)return 0;if(u===Oc.mapValue)return 1;if(f===Oc.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),y=f.fields||{},T=Object.keys(y);g.sort(),T.sort();for(let b=0;b<g.length&&b<T.length;++b){const w=pm(g[b],T[b]);if(w!==0)return w;const k=no(m[g[b]],y[T[b]]);if(k!==0)return k}return Ue(g.length,T.length)}(i.mapValue,e.mapValue);default:throw Ne(23264,{he:n})}}function U_(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ue(i,e);const n=$r(i),s=$r(e),o=Ue(n.seconds,s.seconds);return o!==0?o:Ue(n.nanos,s.nanos)}function z_(i,e){const n=i.values||[],s=e.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=no(n[o],s[o]);if(u)return u}return Ue(n.length,s.length)}function io(i){return gm(i)}function gm(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(n){const s=$r(n);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(n){return Zr(n).toBase64()}(i.bytesValue):"referenceValue"in i?function(n){return _e.fromName(n).toString()}(i.referenceValue):"geoPointValue"in i?function(n){return`geo(${n.latitude},${n.longitude})`}(i.geoPointValue):"arrayValue"in i?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=gm(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${gm(n.fields[f])}`;return o+"}"}(i.mapValue):Ne(61005,{value:i})}function xc(i){switch(Wr(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=gh(i);return e?16+xc(e):16;case 5:return 2*i.stringValue.length;case 6:return Zr(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+xc(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return mo(s.fields,(u,f)=>{o+=u.length+xc(f)}),o}(i.mapValue);default:throw Ne(13486,{value:i})}}function j_(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function ym(i){return!!i&&"integerValue"in i}function Qm(i){return!!i&&"arrayValue"in i}function B_(i){return!!i&&"nullValue"in i}function q_(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Xd(i){return!!i&&"mapValue"in i}function wR(i){var n,s;return((s=(((n=i==null?void 0:i.mapValue)==null?void 0:n.fields)||{})[KT])==null?void 0:s.stringValue)===QT}function Pl(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return mo(i.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Pl(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(i.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Pl(i.arrayValue.values[n]);return e}return{...i}}function AR(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===bR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.value=e}static empty(){return new Ti({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Xd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pl(n)}setAll(e){let n=un.emptyPath(),s={},o=[];e.forEach((f,m)=>{if(!n.isImmediateParentOf(m)){const g=this.getFieldsMap(n);this.applyChanges(g,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=Pl(f):o.push(m.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(e){const n=this.field(e.popLast());Xd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ri(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=n.mapValue.fields[e.get(s)];Xd(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,s){mo(n,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new Ti(Pl(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,n,s,o,u,f,m){this.key=e,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(e){return new on(e,0,Re.min(),Re.min(),Re.min(),Ti.empty(),0)}static newFoundDocument(e,n,s,o){return new on(e,1,n,Re.min(),s,o,0)}static newNoDocument(e,n){return new on(e,2,n,Re.min(),Re.min(),Ti.empty(),0)}static newUnknownDocument(e,n){return new on(e,3,n,Re.min(),Re.min(),Ti.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ti.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ti.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof on&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new on(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qc{constructor(e,n){this.position=e,this.inclusive=n}}function H_(i,e,n){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],f=i.position[o];if(u.field.isKeyField()?s=_e.comparator(_e.fromName(f.referenceValue),n.key):s=no(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function F_(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let n=0;n<i.position.length;n++)if(!Ri(i.position[n],e.position[n]))return!1;return!0}/**
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
 */class $c{constructor(e,n="asc"){this.field=e,this.dir=n}}function CR(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class $T{}class Ot extends $T{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new NR(e,n,s):n==="array-contains"?new OR(e,s):n==="in"?new MR(e,s):n==="not-in"?new PR(e,s):n==="array-contains-any"?new VR(e,s):new Ot(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new IR(e,s):new DR(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(no(n,this.value)):n!==null&&Wr(this.value)===Wr(n)&&this.matchesComparison(no(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ne(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ti extends $T{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new ti(e,n)}matches(e){return ZT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ZT(i){return i.op==="and"}function WT(i){return RR(i)&&ZT(i)}function RR(i){for(const e of i.filters)if(e instanceof ti)return!1;return!0}function vm(i){if(i instanceof Ot)return i.field.canonicalString()+i.op.toString()+io(i.value);if(WT(i))return i.filters.map(e=>vm(e)).join(",");{const e=i.filters.map(n=>vm(n)).join(",");return`${i.op}(${e})`}}function JT(i,e){return i instanceof Ot?function(s,o){return o instanceof Ot&&s.op===o.op&&s.field.isEqual(o.field)&&Ri(s.value,o.value)}(i,e):i instanceof ti?function(s,o){return o instanceof ti&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,m)=>u&&JT(f,o.filters[m]),!0):!1}(i,e):void Ne(19439)}function eE(i){return i instanceof Ot?function(n){return`${n.field.canonicalString()} ${n.op} ${io(n.value)}`}(i):i instanceof ti?function(n){return n.op.toString()+" {"+n.getFilters().map(eE).join(" ,")+"}"}(i):"Filter"}class NR extends Ot{constructor(e,n,s){super(e,n,s),this.key=_e.fromName(s.referenceValue)}matches(e){const n=_e.comparator(e.key,this.key);return this.matchesComparison(n)}}class IR extends Ot{constructor(e,n){super(e,"in",n),this.keys=tE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class DR extends Ot{constructor(e,n){super(e,"not-in",n),this.keys=tE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function tE(i,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(s=>_e.fromName(s.referenceValue))}class OR extends Ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qm(n)&&Hl(n.arrayValue,this.value)}}class MR extends Ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Hl(this.value.arrayValue,n)}}class PR extends Ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(Hl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Hl(this.value.arrayValue,n)}}class VR extends Ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Hl(this.value.arrayValue,s))}}/**
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
 */class kR{constructor(e,n=null,s=[],o=[],u=null,f=null,m=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Te=null}}function Y_(i,e=null,n=[],s=[],o=null,u=null,f=null){return new kR(i,e,n,s,o,u,f)}function $m(i){const e=He(i);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>vm(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),ph(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>io(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>io(s)).join(",")),e.Te=n}return e.Te}function Zm(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<i.orderBy.length;n++)if(!CR(i.orderBy[n],e.orderBy[n]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let n=0;n<i.filters.length;n++)if(!JT(i.filters[n],e.filters[n]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!F_(i.startAt,e.startAt)&&F_(i.endAt,e.endAt)}function _m(i){return _e.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n=null,s=[],o=[],u=null,f="F",m=null,g=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function xR(i,e,n,s,o,u,f,m){return new Zl(i,e,n,s,o,u,f,m)}function Wm(i){return new Zl(i)}function G_(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function nE(i){return i.collectionGroup!==null}function Vl(i){const e=He(i);if(e.Ie===null){e.Ie=[];const n=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),n.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new jt(un.comparator);return f.filters.forEach(g=>{g.getFlattenedFilters().forEach(y=>{y.isInequality()&&(m=m.add(y.field))})}),m})(e).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new $c(u,s))}),n.has(un.keyField().canonicalString())||e.Ie.push(new $c(un.keyField(),s))}return e.Ie}function Ei(i){const e=He(i);return e.Ee||(e.Ee=LR(e,Vl(i))),e.Ee}function LR(i,e){if(i.limitType==="F")return Y_(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new $c(o.field,u)});const n=i.endAt?new Qc(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Qc(i.startAt.position,i.startAt.inclusive):null;return Y_(i.path,i.collectionGroup,e,i.filters,i.limit,n,s)}}function Tm(i,e){const n=i.filters.concat([e]);return new Zl(i.path,i.collectionGroup,i.explicitOrderBy.slice(),n,i.limit,i.limitType,i.startAt,i.endAt)}function Em(i,e,n){return new Zl(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,n,i.startAt,i.endAt)}function yh(i,e){return Zm(Ei(i),Ei(e))&&i.limitType===e.limitType}function iE(i){return`${$m(Ei(i))}|lt:${i.limitType}`}function Fa(i){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>eE(o)).join(", ")}]`),ph(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>io(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>io(o)).join(",")),`Target(${s})`}(Ei(i))}; limitType=${i.limitType})`}function vh(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):_e.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of Vl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(f,m,g){const y=H_(f,m,g);return f.inclusive?y<=0:y<0}(s.startAt,Vl(s),o)||s.endAt&&!function(f,m,g){const y=H_(f,m,g);return f.inclusive?y>=0:y>0}(s.endAt,Vl(s),o))}(i,e)}function UR(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function rE(i){return(e,n)=>{let s=!1;for(const o of Vl(i)){const u=zR(o,e,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function zR(i,e,n){const s=i.field.isKeyField()?_e.comparator(e.key,n.key):function(u,f,m){const g=f.data.field(u),y=m.data.field(u);return g!==null&&y!==null?no(g,y):Ne(42886)}(i.field,e,n);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Ne(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){mo(this.inner,(n,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return qT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=new At(_e.comparator);function Jr(){return jR}const sE=new At(_e.comparator);function Il(...i){let e=sE;for(const n of i)e=e.insert(n.key,n);return e}function BR(i){let e=sE;return i.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Us(){return kl()}function aE(){return kl()}function kl(){return new $s(i=>i.toString(),(i,e)=>i.isEqual(e))}const qR=new jt(_e.comparator);function Ye(...i){let e=qR;for(const n of i)e=e.add(n);return e}const HR=new jt(Ue);function FR(){return HR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gc(e)?"-0":e}}function oE(i){return{integerValue:""+i}}function YR(i,e){return vR(e)?oE(e):Jm(i,e)}/**
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
 */class _h{constructor(){this._=void 0}}function GR(i,e,n){return i instanceof Sm?function(o,u){const f={fields:{[YT]:{stringValue:FT},[XT]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Km(u)&&(u=gh(u)),u&&(f.fields[GT]=u),{mapValue:f}}(n,e):i instanceof Zc?lE(i,e):i instanceof Wc?uE(i,e):function(o,u){const f=KR(o,u),m=X_(f)+X_(o.Ae);return ym(f)&&ym(o.Ae)?oE(m):Jm(o.serializer,m)}(i,e)}function XR(i,e,n){return i instanceof Zc?lE(i,e):i instanceof Wc?uE(i,e):n}function KR(i,e){return i instanceof bm?function(s){return ym(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Sm extends _h{}class Zc extends _h{constructor(e){super(),this.elements=e}}function lE(i,e){const n=cE(e);for(const s of i.elements)n.some(o=>Ri(o,s))||n.push(s);return{arrayValue:{values:n}}}class Wc extends _h{constructor(e){super(),this.elements=e}}function uE(i,e){let n=cE(e);for(const s of i.elements)n=n.filter(o=>!Ri(o,s));return{arrayValue:{values:n}}}class bm extends _h{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function X_(i){return wt(i.integerValue||i.doubleValue)}function cE(i){return Qm(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function QR(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof Zc&&o instanceof Zc||s instanceof Wc&&o instanceof Wc?to(s.elements,o.elements,Ri):s instanceof bm&&o instanceof bm?Ri(s.Ae,o.Ae):s instanceof Sm&&o instanceof Sm}(i.transform,e.transform)}class Bs{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bs}static exists(e){return new Bs(void 0,e)}static updateTime(e){return new Bs(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lc(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class ep{}function hE(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new ZR(i.key,Bs.none()):new tp(i.key,i.data,Bs.none());{const n=i.data,s=Ti.empty();let o=new jt(un.comparator);for(let u of e.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new Th(i.key,s,new Br(o.toArray()),Bs.none())}}function $R(i,e,n){i instanceof tp?function(o,u,f){const m=o.value.clone(),g=Q_(o.fieldTransforms,u,f.transformResults);m.setAll(g),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(i,e,n):i instanceof Th?function(o,u,f){if(!Lc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=Q_(o.fieldTransforms,u,f.transformResults),g=u.data;g.setAll(fE(o)),g.setAll(m),u.convertToFoundDocument(f.version,g).setHasCommittedMutations()}(i,e,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,e,n)}function xl(i,e,n,s){return i instanceof tp?function(u,f,m,g){if(!Lc(u.precondition,f))return m;const y=u.value.clone(),T=$_(u.fieldTransforms,g,f);return y.setAll(T),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(i,e,n,s):i instanceof Th?function(u,f,m,g){if(!Lc(u.precondition,f))return m;const y=$_(u.fieldTransforms,g,f),T=f.data;return T.setAll(fE(u)),T.setAll(y),f.convertToFoundDocument(f.version,T).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(b=>b.field))}(i,e,n,s):function(u,f,m){return Lc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(i,e,n)}function K_(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&to(s,o,(u,f)=>QR(u,f))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class tp extends ep{constructor(e,n,s,o=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Th extends ep{constructor(e,n,s,o,u=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function fE(i){const e=new Map;return i.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=i.data.field(n);e.set(n,s)}}),e}function Q_(i,e,n){const s=new Map;mt(i.length===n.length,32656,{Re:n.length,Ve:i.length});for(let o=0;o<n.length;o++){const u=i[o],f=u.transform,m=e.data.field(u.field);s.set(u.field,XR(f,m,n[o]))}return s}function $_(i,e,n){const s=new Map;for(const o of i){const u=o.transform,f=n.data.field(o.field);s.set(o.field,GR(u,f,e))}return s}class ZR extends ep{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,n,s,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&$R(u,e,s[o])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=xl(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=xl(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=aE();return this.mutations.forEach(o=>{const u=e.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const g=hE(f,m);g!==null&&s.set(o.key,g),f.isValidDocument()||f.convertToNoDocument(Re.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ye())}isEqual(e){return this.batchId===e.batchId&&to(this.mutations,e.mutations,(n,s)=>K_(n,s))&&to(this.baseMutations,e.baseMutations,(n,s)=>K_(n,s))}}/**
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
 */class JR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class e2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt,qe;function dE(i){if(i===void 0)return sr("GRPC error has no .code"),ee.UNKNOWN;switch(i){case Dt.OK:return ee.OK;case Dt.CANCELLED:return ee.CANCELLED;case Dt.UNKNOWN:return ee.UNKNOWN;case Dt.DEADLINE_EXCEEDED:return ee.DEADLINE_EXCEEDED;case Dt.RESOURCE_EXHAUSTED:return ee.RESOURCE_EXHAUSTED;case Dt.INTERNAL:return ee.INTERNAL;case Dt.UNAVAILABLE:return ee.UNAVAILABLE;case Dt.UNAUTHENTICATED:return ee.UNAUTHENTICATED;case Dt.INVALID_ARGUMENT:return ee.INVALID_ARGUMENT;case Dt.NOT_FOUND:return ee.NOT_FOUND;case Dt.ALREADY_EXISTS:return ee.ALREADY_EXISTS;case Dt.PERMISSION_DENIED:return ee.PERMISSION_DENIED;case Dt.FAILED_PRECONDITION:return ee.FAILED_PRECONDITION;case Dt.ABORTED:return ee.ABORTED;case Dt.OUT_OF_RANGE:return ee.OUT_OF_RANGE;case Dt.UNIMPLEMENTED:return ee.UNIMPLEMENTED;case Dt.DATA_LOSS:return ee.DATA_LOSS;default:return Ne(39323,{code:i})}}(qe=Dt||(Dt={}))[qe.OK=0]="OK",qe[qe.CANCELLED=1]="CANCELLED",qe[qe.UNKNOWN=2]="UNKNOWN",qe[qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qe[qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qe[qe.NOT_FOUND=5]="NOT_FOUND",qe[qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",qe[qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",qe[qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",qe[qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qe[qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qe[qe.ABORTED=10]="ABORTED",qe[qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",qe[qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",qe[qe.INTERNAL=13]="INTERNAL",qe[qe.UNAVAILABLE=14]="UNAVAILABLE",qe[qe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function t2(){return new TextEncoder}/**
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
 */const n2=new Yr([4294967295,4294967295],0);function Z_(i){const e=t2().encode(i),n=new OT;return n.update(e),new Uint8Array(n.digest())}function W_(i){const e=new DataView(i.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new Yr([n,s],0),new Yr([o,u],0)]}class np{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Dl(`Invalid padding: ${n}`);if(s<0)throw new Dl(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Dl(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Dl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Yr.fromNumber(this.ge)}ye(e,n,s){let o=e.add(n.multiply(Yr.fromNumber(s)));return o.compare(n2)===1&&(o=new Yr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Z_(e),[s,o]=W_(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);if(!this.we(f))return!1}return!0}static create(e,n,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),f=new np(u,o,n);return s.forEach(m=>f.insert(m)),f}insert(e){if(this.ge===0)return;const n=Z_(e),[s,o]=W_(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,o,u);this.Se(f)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Dl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,n,s,o,u){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const o=new Map;return o.set(e,Wl.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Eh(Re.min(),o,new At(Ue),Jr(),Ye())}}class Wl{constructor(e,n,s,o,u){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Wl(s,n,Ye(),Ye(),Ye())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,n,s,o){this.be=e,this.removedTargetIds=n,this.key=s,this.De=o}}class mE{constructor(e,n){this.targetId=e,this.Ce=n}}class pE{constructor(e,n,s=Jt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=o}}class J_{constructor(){this.ve=0,this.Fe=e0(),this.Me=Jt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ye(),n=Ye(),s=Ye();return this.Fe.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:Ne(38017,{changeType:u})}}),new Wl(this.Me,this.xe,e,n,s)}qe(){this.Oe=!1,this.Fe=e0()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,mt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class i2{constructor(e){this.Ge=e,this.ze=new Map,this.je=Jr(),this.Je=Mc(),this.He=Mc(),this.Ye=new At(Ue)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:Ne(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((s,o)=>{this.rt(o)&&n(o)})}st(e){const n=e.targetId,s=e.Ce.count,o=this.ot(n);if(o){const u=o.target;if(_m(u))if(s===0){const f=new _e(u.path);this.et(n,f,on.newNoDocument(f,Re.min()))}else mt(s===1,20013,{expectedCount:s});else{const f=this._t(n);if(f!==s){const m=this.ut(e),g=m?this.ct(m,e,f):1;if(g!==0){this.it(n);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,y)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=Zr(s).toUint8Array()}catch(g){if(g instanceof HT)return eo("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new np(f,o,u)}catch(g){return eo(g instanceof Dl?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.ge===0?null:m}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const f=this.Ge.ht(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(n,u,null),o++)}),o}Tt(e){const n=new Map;this.ze.forEach((u,f)=>{const m=this.ot(f);if(m){if(u.current&&_m(m.target)){const g=new _e(m.target.path);this.It(g).has(f)||this.Et(f,g)||this.et(f,g,on.newNoDocument(g,e))}u.Be&&(n.set(f,u.ke()),u.qe())}});let s=Ye();this.He.forEach((u,f)=>{let m=!0;f.forEachWhile(g=>{const y=this.ot(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.je.forEach((u,f)=>f.setReadTime(e));const o=new Eh(e,n,this.Ye,this.je,s);return this.je=Jr(),this.Je=Mc(),this.He=Mc(),this.Ye=new At(Ue),o}Xe(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const o=this.nt(e);this.Et(e,n)?o.Qe(n,1):o.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new J_,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new jt(Ue),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new jt(Ue),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||fe("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new J_),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Mc(){return new At(_e.comparator)}function e0(){return new At(_e.comparator)}const r2={asc:"ASCENDING",desc:"DESCENDING"},s2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},a2={and:"AND",or:"OR"};class o2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function wm(i,e){return i.useProto3Json||ph(e)?e:{value:e}}function Am(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gE(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function Ka(i){return mt(!!i,49232),Re.fromTimestamp(function(n){const s=$r(n);return new ht(s.seconds,s.nanos)}(i))}function yE(i,e){return Cm(i,e).canonicalString()}function Cm(i,e){const n=function(o){return new ot(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?n:n.child(e)}function vE(i){const e=ot.fromString(i);return mt(bE(e),10190,{key:e.toString()}),e}function Kd(i,e){const n=vE(e);if(n.get(1)!==i.databaseId.projectId)throw new ce(ee.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+i.databaseId.projectId);if(n.get(3)!==i.databaseId.database)throw new ce(ee.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+i.databaseId.database);return new _e(TE(n))}function _E(i,e){return yE(i.databaseId,e)}function l2(i){const e=vE(i);return e.length===4?ot.emptyPath():TE(e)}function t0(i){return new ot(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function TE(i){return mt(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function u2(i,e){let n;if("targetChange"in e){e.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ne(39313,{state:y})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(y,T){return y.useProto3Json?(mt(T===void 0||typeof T=="string",58123),Jt.fromBase64String(T||"")):(mt(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),Jt.fromUint8Array(T||new Uint8Array))}(i,e.targetChange.resumeToken),f=e.targetChange.cause,m=f&&function(y){const T=y.code===void 0?ee.UNKNOWN:dE(y.code);return new ce(T,y.message||"")}(f);n=new pE(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Kd(i,s.document.name),u=Ka(s.document.updateTime),f=s.document.createTime?Ka(s.document.createTime):Re.min(),m=new Ti({mapValue:{fields:s.document.fields}}),g=on.newFoundDocument(o,u,f,m),y=s.targetIds||[],T=s.removedTargetIds||[];n=new Uc(y,T,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Kd(i,s.document),u=s.readTime?Ka(s.readTime):Re.min(),f=on.newNoDocument(o,u),m=s.removedTargetIds||[];n=new Uc([],m,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Kd(i,s.document),u=s.removedTargetIds||[];n=new Uc([],u,o,null)}else{if(!("filter"in e))return Ne(11601,{Rt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new e2(o,u),m=s.targetId;n=new mE(m,f)}}return n}function c2(i,e){return{documents:[_E(i,e.path)]}}function h2(i,e){const n={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=_E(i,o);const u=function(y){if(y.length!==0)return SE(ti.create(y,"and"))}(e.filters);u&&(n.structuredQuery.where=u);const f=function(y){if(y.length!==0)return y.map(T=>function(w){return{field:Ya(w.field),direction:m2(w.dir)}}(T))}(e.orderBy);f&&(n.structuredQuery.orderBy=f);const m=wm(i,e.limit);return m!==null&&(n.structuredQuery.limit=m),e.startAt&&(n.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ft:n,parent:o}}function f2(i){let e=l2(i.parent);const n=i.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){mt(s===1,65062);const T=n.from[0];T.allDescendants?o=T.collectionId:e=e.child(T.collectionId)}let u=[];n.where&&(u=function(b){const w=EE(b);return w instanceof ti&&WT(w)?w.getFilters():[w]}(n.where));let f=[];n.orderBy&&(f=function(b){return b.map(w=>function(U){return new $c(Ga(U.field),function(G){switch(G){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(U.direction))}(w))}(n.orderBy));let m=null;n.limit&&(m=function(b){let w;return w=typeof b=="object"?b.value:b,ph(w)?null:w}(n.limit));let g=null;n.startAt&&(g=function(b){const w=!!b.before,k=b.values||[];return new Qc(k,w)}(n.startAt));let y=null;return n.endAt&&(y=function(b){const w=!b.before,k=b.values||[];return new Qc(k,w)}(n.endAt)),xR(e,o,f,u,m,"F",g,y)}function d2(i,e){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ne(28987,{purpose:o})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function EE(i){return i.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ga(n.unaryFilter.field);return Ot.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Ga(n.unaryFilter.field);return Ot.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Ga(n.unaryFilter.field);return Ot.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Ga(n.unaryFilter.field);return Ot.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ne(61313);default:return Ne(60726)}}(i):i.fieldFilter!==void 0?function(n){return Ot.create(Ga(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ne(58110);default:return Ne(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(n){return ti.create(n.compositeFilter.filters.map(s=>EE(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ne(1026)}}(n.compositeFilter.op))}(i):Ne(30097,{filter:i})}function m2(i){return r2[i]}function p2(i){return s2[i]}function g2(i){return a2[i]}function Ya(i){return{fieldPath:i.canonicalString()}}function Ga(i){return un.fromServerFormat(i.fieldPath)}function SE(i){return i instanceof Ot?function(n){if(n.op==="=="){if(q_(n.value))return{unaryFilter:{field:Ya(n.field),op:"IS_NAN"}};if(B_(n.value))return{unaryFilter:{field:Ya(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(q_(n.value))return{unaryFilter:{field:Ya(n.field),op:"IS_NOT_NAN"}};if(B_(n.value))return{unaryFilter:{field:Ya(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ya(n.field),op:p2(n.op),value:n.value}}}(i):i instanceof ti?function(n){const s=n.getFilters().map(o=>SE(o));return s.length===1?s[0]:{compositeFilter:{op:g2(n.op),filters:s}}}(i):Ne(54877,{filter:i})}function bE(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n,s,o,u=Re.min(),f=Re.min(),m=Jt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new qr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(e){this.yt=e}}function v2(i){const e=f2({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Em(e,e.limit,"L"):e}/**
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
 */class _2{constructor(){this.Cn=new T2}addToCollectionParentIndex(e,n){return this.Cn.add(n),W.resolve()}getCollectionParents(e,n){return W.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return W.resolve()}deleteFieldIndex(e,n){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,n){return W.resolve()}getDocumentsMatchingTarget(e,n){return W.resolve(null)}getIndexType(e,n){return W.resolve(0)}getFieldIndexes(e,n){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,n){return W.resolve(Qr.min())}getMinOffsetFromCollectionGroup(e,n){return W.resolve(Qr.min())}updateCollectionGroup(e,n,s){return W.resolve()}updateIndexEntries(e,n){return W.resolve()}}class T2{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n]||new jt(ot.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(e){const n=e.lastSegment(),s=e.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(e){return(this.index[e]||new jt(ot.comparator)).toArray()}}/**
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
 */const n0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},wE=41943040;class Tn{static withCacheSize(e){return new Tn(e,Tn.DEFAULT_COLLECTION_PERCENTILE,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tn.DEFAULT_COLLECTION_PERCENTILE=10,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tn.DEFAULT=new Tn(wE,Tn.DEFAULT_COLLECTION_PERCENTILE,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tn.DISABLED=new Tn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ro(0)}static cr(){return new ro(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="LruGarbageCollector",E2=1048576;function r0([i,e],[n,s]){const o=Ue(i,n);return o===0?Ue(e,s):o}class S2{constructor(e){this.Ir=e,this.buffer=new jt(r0),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();r0(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class b2{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){fe(i0,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){fo(n)?fe(i0,"Ignoring IndexedDB error during garbage collection: ",n):await dh(n)}await this.Vr(3e5)})}}class w2{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return W.resolve(mh.ce);const s=new S2(n);return this.mr.forEachTarget(e,o=>s.Ar(o.sequenceNumber)).next(()=>this.mr.pr(e,o=>s.Ar(o))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.mr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(fe("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(n0)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(fe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),n0):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let s,o,u,f,m,g,y;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(fe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),o=this.params.maximumSequenceNumbersToCollect):o=b,f=Date.now(),this.nthSequenceNumber(e,o))).next(b=>(s=b,m=Date.now(),this.removeTargets(e,s,n))).next(b=>(u=b,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(b=>(y=Date.now(),Ha()<=xe.DEBUG&&fe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-T}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${b} documents in `+(y-g)+`ms
Total Duration: ${y-T}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:b})))}}function A2(i,e){return new w2(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(){this.changes=new $s(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,on.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?W.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class R2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e,n,s,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,n))).next(o=>(s!==null&&xl(s.mutation,o,Br.empty(),ht.now()),o))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Ye()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Ye()){const o=Us();return this.populateOverlays(e,o,n).next(()=>this.computeViews(e,n,o,s).next(u=>{let f=Il();return u.forEach((m,g)=>{f=f.insert(m,g.overlayedDocument)}),f}))}getOverlayedDocuments(e,n){const s=Us();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Ye()))}populateOverlays(e,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((f,m)=>{n.set(f,m)})})}computeViews(e,n,s,o){let u=Jr();const f=kl(),m=function(){return kl()}();return n.forEach((g,y)=>{const T=s.get(y.key);o.has(y.key)&&(T===void 0||T.mutation instanceof Th)?u=u.insert(y.key,y):T!==void 0?(f.set(y.key,T.mutation.getFieldMask()),xl(T.mutation,y,T.mutation.getFieldMask(),ht.now())):f.set(y.key,Br.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((y,T)=>f.set(y,T)),n.forEach((y,T)=>m.set(y,new R2(T,f.get(y)??null))),m))}recalculateAndSaveOverlays(e,n){const s=kl();let o=new At((f,m)=>f-m),u=Ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(f=>{for(const m of f)m.keys().forEach(g=>{const y=n.get(g);if(y===null)return;let T=s.get(g)||Br.empty();T=m.applyToLocalView(y,T),s.set(g,T);const b=(o.get(m.batchId)||Ye()).add(g);o=o.insert(m.batchId,b)})}).next(()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),y=g.key,T=g.value,b=aE();T.forEach(w=>{if(!u.has(w)){const k=hE(n.get(w),s.get(w));k!==null&&b.set(w,k),u=u.add(w)}}),f.push(this.documentOverlayCache.saveOverlays(e,y,b))}return W.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,o){return function(f){return _e.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):nE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,o):this.getDocumentsMatchingCollectionQuery(e,n,s,o)}getNextDocuments(e,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,o-u.size):W.resolve(Us());let m=jl,g=u;return f.next(y=>W.forEach(y,(T,b)=>(m<b.largestBatchId&&(m=b.largestBatchId),u.get(T)?W.resolve():this.remoteDocumentCache.getEntry(e,T).next(w=>{g=g.insert(T,w)}))).next(()=>this.populateOverlays(e,y,u)).next(()=>this.computeViews(e,g,y,Ye())).next(T=>({batchId:m,changes:BR(T)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new _e(n)).next(s=>{let o=Il();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,n,s,o){const u=n.collectionGroup;let f=Il();return this.indexManager.getCollectionParents(e,u).next(m=>W.forEach(m,g=>{const y=function(b,w){return new Zl(w,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(n,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next(T=>{T.forEach((b,w)=>{f=f.insert(b,w)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(e,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,u,o))).next(f=>{u.forEach((g,y)=>{const T=y.getKey();f.get(T)===null&&(f=f.insert(T,on.newInvalidDocument(T)))});let m=Il();return f.forEach((g,y)=>{const T=u.get(g);T!==void 0&&xl(T.mutation,y,Br.empty(),ht.now()),vh(n,y)&&(m=m.insert(g,y))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return W.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:Ka(o.createTime)}}(n)),W.resolve()}getNamedQuery(e,n){return W.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(o){return{name:o.name,query:v2(o.bundledQuery),readTime:Ka(o.readTime)}}(n)),W.resolve()}}/**
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
 */class D2{constructor(){this.overlays=new At(_e.comparator),this.qr=new Map}getOverlay(e,n){return W.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Us();return W.forEach(n,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((o,u)=>{this.St(e,n,u)}),W.resolve()}removeOverlaysForBatchId(e,n,s){const o=this.qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.qr.delete(s)),W.resolve()}getOverlaysForCollection(e,n,s){const o=Us(),u=n.length+1,f=new _e(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const g=m.getNext().value,y=g.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return W.resolve(o)}getOverlaysForCollectionGroup(e,n,s,o){let u=new At((y,T)=>y-T);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let T=u.get(y.largestBatchId);T===null&&(T=Us(),u=u.insert(y.largestBatchId,T)),T.set(y.getKey(),y)}}const m=Us(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((y,T)=>m.set(y,T)),!(m.size()>=o)););return W.resolve(m)}St(e,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.qr.get(o.largestBatchId).delete(s.key);this.qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new JR(n,s));let u=this.qr.get(n);u===void 0&&(u=Ye(),this.qr.set(n,u)),this.qr.set(n,u.add(s.key))}}/**
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
 */class O2{constructor(){this.sessionToken=Jt.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(){this.Qr=new jt(Gt.$r),this.Ur=new jt(Gt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const s=new Gt(e,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Gr(new Gt(e,n))}zr(e,n){e.forEach(s=>this.removeReference(s,n))}jr(e){const n=new _e(new ot([])),s=new Gt(n,e),o=new Gt(n,e+1),u=[];return this.Ur.forEachInRange([s,o],f=>{this.Gr(f),u.push(f.key)}),u}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new _e(new ot([])),s=new Gt(n,e),o=new Gt(n,e+1);let u=Ye();return this.Ur.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(e){const n=new Gt(e,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Gt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return _e.comparator(e.key,n.key)||Ue(e.Yr,n.Yr)}static Kr(e,n){return Ue(e.Yr,n.Yr)||_e.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new jt(Gt.$r)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new WR(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Zr=this.Zr.add(new Gt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return W.resolve(f)}lookupMutationBatch(e,n){return W.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,o=this.ei(s),u=o<0?0:o;return W.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?yR:this.tr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Gt(n,0),o=new Gt(n,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,o],f=>{const m=this.Xr(f.Yr);u.push(m)}),W.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new jt(Ue);return n.forEach(o=>{const u=new Gt(o,0),f=new Gt(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,f],m=>{s=s.add(m.Yr)})}),W.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,o=s.length+1;let u=s;_e.isDocumentKey(u)||(u=u.child(""));const f=new Gt(new _e(u),0);let m=new jt(Ue);return this.Zr.forEachWhile(g=>{const y=g.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(g.Yr)),!0)},f),W.resolve(this.ti(m))}ti(e){const n=[];return e.forEach(s=>{const o=this.Xr(s);o!==null&&n.push(o)}),n}removeMutationBatch(e,n){mt(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return W.forEach(n.mutations,o=>{const u=new Gt(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Zr=s})}ir(e){}containsKey(e,n){const s=new Gt(n,0),o=this.Zr.firstAfterOrEqual(s);return W.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e){this.ri=e,this.docs=function(){return new At(_e.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return W.resolve(s?s.document.mutableCopy():on.newInvalidDocument(n))}getEntries(e,n){let s=Jr();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():on.newInvalidDocument(o))}),W.resolve(s)}getDocumentsMatchingQuery(e,n,s,o){let u=Jr();const f=n.path,m=new _e(f.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:y,value:{document:T}}=g.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||dR(fR(T),s)<=0||(o.has(T.key)||vh(n,T))&&(u=u.insert(T.key,T.mutableCopy()))}return W.resolve(u)}getAllFromCollectionGroup(e,n,s,o){Ne(9500)}ii(e,n){return W.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new V2(this)}getSize(e){return W.resolve(this.size)}}class V2 extends C2{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Nr.addEntry(e,o)):this.Nr.removeEntry(s)}),W.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e){this.persistence=e,this.si=new $s(n=>$m(n),Zm),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.oi=0,this._i=new ip,this.targetCount=0,this.ai=ro.ur()}forEachTarget(e,n){return this.si.forEach((s,o)=>n(o)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),W.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new ro(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,W.resolve()}updateTargetData(e,n){return this.Pr(n),W.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,n,s){let o=0;const u=[];return this.si.forEach((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.si.delete(f),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),W.waitFor(u).next(()=>o)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,n){const s=this.si.get(n)||null;return W.resolve(s)}addMatchingKeys(e,n,s){return this._i.Wr(n,s),W.resolve()}removeMatchingKeys(e,n,s){this._i.zr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(e,f))}),W.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),W.resolve()}getMatchingKeysForTargetId(e,n){const s=this._i.Hr(n);return W.resolve(s)}containsKey(e,n){return W.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,n){this.ui={},this.overlays={},this.ci=new mh(0),this.li=!1,this.li=!0,this.hi=new O2,this.referenceDelegate=e(this),this.Pi=new k2(this),this.indexManager=new _2,this.remoteDocumentCache=function(o){return new P2(o)}(s=>this.referenceDelegate.Ti(s)),this.serializer=new y2(n),this.Ii=new I2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new D2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ui[e.toKey()];return s||(s=new M2(n,this.referenceDelegate),this.ui[e.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,s){fe("MemoryPersistence","Starting transaction:",e);const o=new x2(this.ci.next());return this.referenceDelegate.Ei(),s(o).next(u=>this.referenceDelegate.di(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ai(e,n){return W.or(Object.values(this.ui).map(s=>()=>s.containsKey(e,n)))}}class x2 extends pR{constructor(e){super(),this.currentSequenceNumber=e}}class rp{constructor(e){this.persistence=e,this.Ri=new ip,this.Vi=null}static mi(e){return new rp(e)}get fi(){if(this.Vi)return this.Vi;throw Ne(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),W.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),W.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),W.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(o=>this.fi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(o=>{o.forEach(u=>this.fi.add(u.toString()))}).next(()=>s.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.fi,s=>{const o=_e.fromPath(s);return this.gi(e,o).next(u=>{u||n.removeEntry(o,Re.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return W.or([()=>W.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Jc{constructor(e,n){this.persistence=e,this.pi=new $s(s=>_R(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=A2(this,n)}static mi(e,n){return new Jc(e,n)}Ei(){}di(e){return W.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(o=>s+o))}wr(e){let n=0;return this.pr(e,s=>{n++}).next(()=>n)}pr(e,n){return W.forEach(this.pi,(s,o)=>this.br(e,s,o).next(u=>u?W.resolve():n(o)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(e,f=>this.br(e,f,n).next(m=>{m||(s++,u.removeEntry(f,Re.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),W.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),W.resolve()}removeReference(e,n,s){return this.pi.set(s,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),W.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=xc(e.data.value)),n}br(e,n,s){return W.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.pi.get(n);return W.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,n,s,o){this.targetId=e,this.fromCache=n,this.Es=s,this.ds=o}static As(e,n){let s=Ye(),o=Ye();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new sp(e,n.fromCache,s,o)}}/**
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
 */class L2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class U2{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return U1()?8:gR(cn())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,o){const u={result:null};return this.ys(e,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.ws(e,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new L2;return this.Ss(e,n,f).next(m=>{if(u.result=m,this.Vs)return this.bs(e,n,f,m.size)})}).next(()=>u.result)}bs(e,n,s,o){return s.documentReadCount<this.fs?(Ha()<=xe.DEBUG&&fe("QueryEngine","SDK will not create cache indexes for query:",Fa(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),W.resolve()):(Ha()<=xe.DEBUG&&fe("QueryEngine","Query:",Fa(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.gs*o?(Ha()<=xe.DEBUG&&fe("QueryEngine","The SDK decides to create cache indexes for query:",Fa(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ei(n))):W.resolve())}ys(e,n){if(G_(n))return W.resolve(null);let s=Ei(n);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=Em(n,null,"F"),s=Ei(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const f=Ye(...u);return this.ps.getDocuments(e,f).next(m=>this.indexManager.getMinOffset(e,s).next(g=>{const y=this.Ds(n,m);return this.Cs(n,y,f,g.readTime)?this.ys(e,Em(n,null,"F")):this.vs(e,y,n,g)}))})))}ws(e,n,s,o){return G_(n)||o.isEqual(Re.min())?W.resolve(null):this.ps.getDocuments(e,s).next(u=>{const f=this.Ds(n,u);return this.Cs(n,f,s,o)?W.resolve(null):(Ha()<=xe.DEBUG&&fe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Fa(n)),this.vs(e,f,n,hR(o,jl)).next(m=>m))})}Ds(e,n){let s=new jt(rE(e));return n.forEach((o,u)=>{vh(e,u)&&(s=s.add(u))}),s}Cs(e,n,s,o){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,n,s){return Ha()<=xe.DEBUG&&fe("QueryEngine","Using full collection scan to execute query:",Fa(n)),this.ps.getDocumentsMatchingQuery(e,n,Qr.min(),s)}vs(e,n,s,o){return this.ps.getDocumentsMatchingQuery(e,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap="LocalStore",z2=3e8;class j2{constructor(e,n,s,o){this.persistence=e,this.Fs=n,this.serializer=o,this.Ms=new At(Ue),this.xs=new $s(u=>$m(u),Zm),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(s)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new N2(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function B2(i,e,n,s){return new j2(i,e,n,s)}async function CE(i,e){const n=He(i);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.Bs(e),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],m=[];let g=Ye();for(const y of o){f.push(y.batchId);for(const T of y.mutations)g=g.add(T.key)}for(const y of u){m.push(y.batchId);for(const T of y.mutations)g=g.add(T.key)}return n.localDocuments.getDocuments(s,g).next(y=>({Ls:y,removedBatchIds:f,addedBatchIds:m}))})})}function RE(i){const e=He(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function q2(i,e){const n=He(i),s=e.snapshotVersion;let o=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=n.Ns.newChangeBuffer({trackRemovals:!0});o=n.Ms;const m=[];e.targetChanges.forEach((T,b)=>{const w=o.get(b);if(!w)return;m.push(n.Pi.removeMatchingKeys(u,T.removedDocuments,b).next(()=>n.Pi.addMatchingKeys(u,T.addedDocuments,b)));let k=w.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(b)!==null?k=k.withResumeToken(Jt.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):T.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(T.resumeToken,s)),o=o.insert(b,k),function(Y,G,ue){return Y.resumeToken.approximateByteSize()===0||G.snapshotVersion.toMicroseconds()-Y.snapshotVersion.toMicroseconds()>=z2?!0:ue.addedDocuments.size+ue.modifiedDocuments.size+ue.removedDocuments.size>0}(w,k,T)&&m.push(n.Pi.updateTargetData(u,k))});let g=Jr(),y=Ye();if(e.documentUpdates.forEach(T=>{e.resolvedLimboDocuments.has(T)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,T))}),m.push(H2(u,f,e.documentUpdates).next(T=>{g=T.ks,y=T.qs})),!s.isEqual(Re.min())){const T=n.Pi.getLastRemoteSnapshotVersion(u).next(b=>n.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(T)}return W.waitFor(m).next(()=>f.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,g,y)).next(()=>g)}).then(u=>(n.Ms=o,u))}function H2(i,e,n){let s=Ye(),o=Ye();return n.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let f=Jr();return n.forEach((m,g)=>{const y=u.get(m);g.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(Re.min())?(e.removeEntry(m,g.readTime),f=f.insert(m,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(g),f=f.insert(m,g)):fe(ap,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",g.version)}),{ks:f,qs:o}})}function F2(i,e){const n=He(i);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.Pi.getTargetData(s,e).next(u=>u?(o=u,W.resolve(o)):n.Pi.allocateTargetId(s).next(f=>(o=new qr(e,f,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.Ms.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(e,s.targetId)),s})}async function Rm(i,e,n){const s=He(i),o=s.Ms.get(e),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!fo(f))throw f;fe(ap,`Failed to update sequence numbers for target ${e}: ${f}`)}s.Ms=s.Ms.remove(e),s.xs.delete(o.target)}function s0(i,e,n){const s=He(i);let o=Re.min(),u=Ye();return s.persistence.runTransaction("Execute query","readwrite",f=>function(g,y,T){const b=He(g),w=b.xs.get(T);return w!==void 0?W.resolve(b.Ms.get(w)):b.Pi.getTargetData(y,T)}(s,f,Ei(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(f,m.targetId).next(g=>{u=g})}).next(()=>s.Fs.getDocumentsMatchingQuery(f,e,n?o:Re.min(),n?u:Ye())).next(m=>(Y2(s,UR(e),m),{documents:m,Qs:u})))}function Y2(i,e,n){let s=i.Os.get(e)||Re.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.Os.set(e,s)}class a0{constructor(){this.activeTargetIds=FR()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class G2{constructor(){this.Mo=new a0,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,s){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new a0,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class X2{Oo(e){}shutdown(){}}/**
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
 */let Pc=null;function Nm(){return Pc===null?Pc=function(){return 268435456+Math.round(2147483648*Math.random())}():Pc++,"0x"+Pc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="RestConnection",K2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Q2{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${s}/databases/${o}`,this.Wo=this.databaseId.database===Xc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Go(e,n,s,o,u){const f=Nm(),m=this.zo(e,n.toUriEncodedString());fe(Qd,`Sending RPC '${e}' ${f}:`,m,s);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,o,u);const{host:y}=new URL(m),T=lo(y);return this.Jo(e,m,g,s,T).then(b=>(fe(Qd,`Received RPC '${e}' ${f}: `,b),b),b=>{throw eo(Qd,`RPC '${e}' ${f} failed with error: `,b,"url: ",m,"request:",s),b})}Ho(e,n,s,o,u,f){return this.Go(e,n,s,o,u)}jo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ho}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}zo(e,n){const s=K2[e];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="WebChannelConnection";class Z2 extends Q2{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,o,u){const f=Nm();return new Promise((m,g)=>{const y=new MT;y.setWithCredentials(!0),y.listenOnce(PT.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case kc.NO_ERROR:const b=y.getResponseJson();fe(sn,`XHR for RPC '${e}' ${f} received:`,JSON.stringify(b)),m(b);break;case kc.TIMEOUT:fe(sn,`RPC '${e}' ${f} timed out`),g(new ce(ee.DEADLINE_EXCEEDED,"Request time out"));break;case kc.HTTP_ERROR:const w=y.getStatus();if(fe(sn,`RPC '${e}' ${f} failed with status:`,w,"response text:",y.getResponseText()),w>0){let k=y.getResponseJson();Array.isArray(k)&&(k=k[0]);const U=k==null?void 0:k.error;if(U&&U.status&&U.message){const Y=function(ue){const ie=ue.toLowerCase().replace(/_/g,"-");return Object.values(ee).indexOf(ie)>=0?ie:ee.UNKNOWN}(U.status);g(new ce(Y,U.message))}else g(new ce(ee.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new ce(ee.UNAVAILABLE,"Connection failed."));break;default:Ne(9055,{l_:e,streamId:f,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{fe(sn,`RPC '${e}' ${f} completed.`)}});const T=JSON.stringify(o);fe(sn,`RPC '${e}' ${f} sending request:`,o),y.send(n,"POST",T,s,15)})}T_(e,n,s){const o=Nm(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=xT(),m=kT(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,n,s),g.encodeInitMessageHeaders=!0;const T=u.join("");fe(sn,`Creating RPC '${e}' stream ${o}: ${T}`,g);const b=f.createWebChannel(T,g);this.I_(b);let w=!1,k=!1;const U=new $2({Yo:G=>{k?fe(sn,`Not sending because RPC '${e}' stream ${o} is closed:`,G):(w||(fe(sn,`Opening RPC '${e}' stream ${o} transport.`),b.open(),w=!0),fe(sn,`RPC '${e}' stream ${o} sending:`,G),b.send(G))},Zo:()=>b.close()}),Y=(G,ue,ie)=>{G.listen(ue,te=>{try{ie(te)}catch(ge){setTimeout(()=>{throw ge},0)}})};return Y(b,Nl.EventType.OPEN,()=>{k||(fe(sn,`RPC '${e}' stream ${o} transport opened.`),U.o_())}),Y(b,Nl.EventType.CLOSE,()=>{k||(k=!0,fe(sn,`RPC '${e}' stream ${o} transport closed`),U.a_(),this.E_(b))}),Y(b,Nl.EventType.ERROR,G=>{k||(k=!0,eo(sn,`RPC '${e}' stream ${o} transport errored. Name:`,G.name,"Message:",G.message),U.a_(new ce(ee.UNAVAILABLE,"The operation could not be completed")))}),Y(b,Nl.EventType.MESSAGE,G=>{var ue;if(!k){const ie=G.data[0];mt(!!ie,16349);const te=ie,ge=(te==null?void 0:te.error)||((ue=te[0])==null?void 0:ue.error);if(ge){fe(sn,`RPC '${e}' stream ${o} received error:`,ge);const oe=ge.status;let be=function(N){const O=Dt[N];if(O!==void 0)return dE(O)}(oe),V=ge.message;be===void 0&&(be=ee.INTERNAL,V="Unknown error status: "+oe+" with message "+ge.message),k=!0,U.a_(new ce(be,V)),b.close()}else fe(sn,`RPC '${e}' stream ${o} received:`,ie),U.u_(ie)}}),Y(m,VT.STAT_EVENT,G=>{G.stat===mm.PROXY?fe(sn,`RPC '${e}' stream ${o} detected buffering proxy`):G.stat===mm.NOPROXY&&fe(sn,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{U.__()},0),U}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function $d(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(i){return new o2(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,n,s=1e3,o=1.5,u=6e4){this.Mi=e,this.timerId=n,this.d_=s,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&fe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0="PersistentStream";class W2{constructor(e,n,s,o,u,f,m,g){this.Mi=e,this.S_=s,this.b_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new NE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===ee.RESOURCE_EXHAUSTED?(sr(n.toString()),sr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===ee.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.D_===n&&this.G_(s,o)},s=>{e(()=>{const o=new ce(ee.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(o)})})}G_(e,n){const s=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{s(()=>this.listener.Xo())}),this.stream.t_(()=>{s(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(o=>{s(()=>this.z_(o))}),this.stream.onMessage(o=>{s(()=>++this.F_==1?this.J_(o):this.onNext(o))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return fe(u0,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(fe(u0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class J2 extends W2{constructor(e,n,s,o,u,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=u2(this.serializer,e),s=function(u){if(!("targetChange"in u))return Re.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?Re.min():f.readTime?Ka(f.readTime):Re.min()}(e);return this.listener.H_(n,s)}Y_(e){const n={};n.database=t0(this.serializer),n.addTarget=function(u,f){let m;const g=f.target;if(m=_m(g)?{documents:c2(u,g)}:{query:h2(u,g).ft},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=gE(u,f.resumeToken);const y=wm(u,f.expectedCount);y!==null&&(m.expectedCount=y)}else if(f.snapshotVersion.compareTo(Re.min())>0){m.readTime=Am(u,f.snapshotVersion.toTimestamp());const y=wm(u,f.expectedCount);y!==null&&(m.expectedCount=y)}return m}(this.serializer,e);const s=d2(this.serializer,e);s&&(n.labels=s),this.q_(n)}Z_(e){const n={};n.database=t0(this.serializer),n.removeTarget=e,this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{}class tN extends eN{constructor(e,n,s,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new ce(ee.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.Go(e,Cm(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ce(ee.UNKNOWN,u.toString())})}Ho(e,n,s,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Ho(e,Cm(n,s),o,f,m,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new ce(ee.UNKNOWN,f.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class nN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(sr(n),this.aa=!1):fe("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so="RemoteStore";class iN{constructor(e,n,s,o,u){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo(f=>{s.enqueueAndForget(async()=>{eu(this)&&(fe(so,"Restarting streams for network reachability change."),await async function(g){const y=He(g);y.Ea.add(4),await Jl(y),y.Ra.set("Unknown"),y.Ea.delete(4),await bh(y)}(this))})}),this.Ra=new nN(s,o)}}async function bh(i){if(eu(i))for(const e of i.da)await e(!0)}async function Jl(i){for(const e of i.da)await e(!1)}function IE(i,e){const n=He(i);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),cp(n)?up(n):po(n).O_()&&lp(n,e))}function op(i,e){const n=He(i),s=po(n);n.Ia.delete(e),s.O_()&&DE(n,e),n.Ia.size===0&&(s.O_()?s.L_():eu(n)&&n.Ra.set("Unknown"))}function lp(i,e){if(i.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const n=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}po(i).Y_(e)}function DE(i,e){i.Va.Ue(e),po(i).Z_(e)}function up(i){i.Va=new i2({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),po(i).start(),i.Ra.ua()}function cp(i){return eu(i)&&!po(i).x_()&&i.Ia.size>0}function eu(i){return He(i).Ea.size===0}function OE(i){i.Va=void 0}async function rN(i){i.Ra.set("Online")}async function sN(i){i.Ia.forEach((e,n)=>{lp(i,e)})}async function aN(i,e){OE(i),cp(i)?(i.Ra.ha(e),up(i)):i.Ra.set("Unknown")}async function oN(i,e,n){if(i.Ra.set("Online"),e instanceof pE&&e.state===2&&e.cause)try{await async function(o,u){const f=u.cause;for(const m of u.targetIds)o.Ia.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.Ia.delete(m),o.Va.removeTarget(m))}(i,e)}catch(s){fe(so,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await c0(i,s)}else if(e instanceof Uc?i.Va.Ze(e):e instanceof mE?i.Va.st(e):i.Va.tt(e),!n.isEqual(Re.min()))try{const s=await RE(i.localStore);n.compareTo(s)>=0&&await function(u,f){const m=u.Va.Tt(f);return m.targetChanges.forEach((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const T=u.Ia.get(y);T&&u.Ia.set(y,T.withResumeToken(g.resumeToken,f))}}),m.targetMismatches.forEach((g,y)=>{const T=u.Ia.get(g);if(!T)return;u.Ia.set(g,T.withResumeToken(Jt.EMPTY_BYTE_STRING,T.snapshotVersion)),DE(u,g);const b=new qr(T.target,g,y,T.sequenceNumber);lp(u,b)}),u.remoteSyncer.applyRemoteEvent(m)}(i,n)}catch(s){fe(so,"Failed to raise snapshot:",s),await c0(i,s)}}async function c0(i,e,n){if(!fo(e))throw e;i.Ea.add(1),await Jl(i),i.Ra.set("Offline"),n||(n=()=>RE(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{fe(so,"Retrying IndexedDB access"),await n(),i.Ea.delete(1),await bh(i)})}async function h0(i,e){const n=He(i);n.asyncQueue.verifyOperationInProgress(),fe(so,"RemoteStore received new credentials");const s=eu(n);n.Ea.add(3),await Jl(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await bh(n)}async function lN(i,e){const n=He(i);e?(n.Ea.delete(2),await bh(n)):e||(n.Ea.add(2),await Jl(n),n.Ra.set("Unknown"))}function po(i){return i.ma||(i.ma=function(n,s,o){const u=He(n);return u.sa(),new J2(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{Xo:rN.bind(null,i),t_:sN.bind(null,i),r_:aN.bind(null,i),H_:oN.bind(null,i)}),i.da.push(async e=>{e?(i.ma.B_(),cp(i)?up(i):i.Ra.set("Unknown")):(await i.ma.stop(),OE(i))})),i.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,n,s,o,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,o,u){const f=Date.now()+s,m=new hp(e,n,f,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(ee.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ME(i,e){if(sr("AsyncQueue",`${e}: ${i}`),fo(i))return new ce(ee.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{static emptySet(e){return new Qa(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||_e.comparator(n.key,s.key):(n,s)=>_e.comparator(n.key,s.key),this.keyedMap=Il(),this.sortedSet=new At(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qa)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Qa;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(){this.ga=new At(_e.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Ne(63341,{Rt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,s)=>{e.push(s)}),e}}class ao{constructor(e,n,s,o,u,f,m,g,y){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(e,n,s,o,u){const f=[];return n.forEach(m=>{f.push({type:0,doc:m})}),new ao(e,n,Qa.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class cN{constructor(){this.queries=d0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const o=He(n),u=o.queries;o.queries=d0(),u.forEach((f,m)=>{for(const g of m.Sa)g.onError(s)})})(this,new ce(ee.ABORTED,"Firestore shutting down"))}}function d0(){return new $s(i=>iE(i),yh)}async function PE(i,e){const n=He(i);let s=3;const o=e.query;let u=n.queries.get(o);u?!u.ba()&&e.Da()&&(s=2):(u=new uN,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await n.onListen(o,!0);break;case 1:u.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=ME(f,`Initialization of query '${Fa(e.query)}' failed`);return void e.onError(m)}n.queries.set(o,u),u.Sa.push(e),e.va(n.onlineState),u.wa&&e.Fa(u.wa)&&fp(n)}async function VE(i,e){const n=He(i),s=e.query;let o=3;const u=n.queries.get(s);if(u){const f=u.Sa.indexOf(e);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=e.Da()?0:1:!u.ba()&&e.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function hN(i,e){const n=He(i);let s=!1;for(const o of e){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.Sa)m.Fa(o)&&(s=!0);f.wa=o}}s&&fp(n)}function fN(i,e,n){const s=He(i),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(n);s.queries.delete(e)}function fp(i){i.Ca.forEach(e=>{e.next()})}var Im,m0;(m0=Im||(Im={})).Ma="default",m0.Cache="cache";class kE{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new ao(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=ao.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Im.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e){this.key=e}}class LE{constructor(e){this.key=e}}class dN{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ye(),this.mutatedKeys=Ye(),this.eu=rE(e),this.tu=new Qa(this.eu)}get nu(){return this.Ya}ru(e,n){const s=n?n.iu:new f0,o=n?n.tu:this.tu;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((T,b)=>{const w=o.get(T),k=vh(this.query,b)?b:null,U=!!w&&this.mutatedKeys.has(w.key),Y=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let G=!1;w&&k?w.data.isEqual(k.data)?U!==Y&&(s.track({type:3,doc:k}),G=!0):this.su(w,k)||(s.track({type:2,doc:k}),G=!0,(g&&this.eu(k,g)>0||y&&this.eu(k,y)<0)&&(m=!0)):!w&&k?(s.track({type:0,doc:k}),G=!0):w&&!k&&(s.track({type:1,doc:w}),G=!0,(g||y)&&(m=!0)),G&&(k?(f=f.add(k),u=Y?u.add(T):u.delete(T)):(f=f.delete(T),u=u.delete(T)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const T=this.query.limitType==="F"?f.last():f.first();f=f.delete(T.key),u=u.delete(T.key),s.track({type:1,doc:T})}return{tu:f,iu:s,Cs:m,mutatedKeys:u}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,o){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const f=e.iu.ya();f.sort((T,b)=>function(k,U){const Y=G=>{switch(G){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ne(20277,{Rt:G})}};return Y(k)-Y(U)}(T.type,b.type)||this.eu(T.doc,b.doc)),this.ou(s),o=o??!1;const m=n&&!o?this._u():[],g=this.Xa.size===0&&this.current&&!o?1:0,y=g!==this.Za;return this.Za=g,f.length!==0||y?{snapshot:new ao(this.query,e.tu,u,f,e.mutatedKeys,g===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new f0,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ye(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))});const n=[];return e.forEach(s=>{this.Xa.has(s)||n.push(new LE(s))}),this.Xa.forEach(s=>{e.has(s)||n.push(new xE(s))}),n}cu(e){this.Ya=e.Qs,this.Xa=Ye();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return ao.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const dp="SyncEngine";class mN{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class pN{constructor(e){this.key=e,this.hu=!1}}class gN{constructor(e,n,s,o,u,f){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new $s(m=>iE(m),yh),this.Iu=new Map,this.Eu=new Set,this.du=new At(_e.comparator),this.Au=new Map,this.Ru=new ip,this.Vu={},this.mu=new Map,this.fu=ro.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function yN(i,e,n=!0){const s=qE(i);let o;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await UE(s,e,n,!0),o}async function vN(i,e){const n=qE(i);await UE(n,e,!0,!1)}async function UE(i,e,n,s){const o=await F2(i.localStore,Ei(e)),u=o.targetId,f=i.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await _N(i,e,u,f==="current",o.resumeToken)),i.isPrimaryClient&&n&&IE(i.remoteStore,o),m}async function _N(i,e,n,s,o){i.pu=(b,w,k)=>async function(Y,G,ue,ie){let te=G.view.ru(ue);te.Cs&&(te=await s0(Y.localStore,G.query,!1).then(({documents:V})=>G.view.ru(V,te)));const ge=ie&&ie.targetChanges.get(G.targetId),oe=ie&&ie.targetMismatches.get(G.targetId)!=null,be=G.view.applyChanges(te,Y.isPrimaryClient,ge,oe);return g0(Y,G.targetId,be.au),be.snapshot}(i,b,w,k);const u=await s0(i.localStore,e,!0),f=new dN(e,u.Qs),m=f.ru(u.documents),g=Wl.createSynthesizedTargetChangeForCurrentChange(n,s&&i.onlineState!=="Offline",o),y=f.applyChanges(m,i.isPrimaryClient,g);g0(i,n,y.au);const T=new mN(e,n,f);return i.Tu.set(e,T),i.Iu.has(n)?i.Iu.get(n).push(e):i.Iu.set(n,[e]),y.snapshot}async function TN(i,e,n){const s=He(i),o=s.Tu.get(e),u=s.Iu.get(o.targetId);if(u.length>1)return s.Iu.set(o.targetId,u.filter(f=>!yh(f,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Rm(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&op(s.remoteStore,o.targetId),Dm(s,o.targetId)}).catch(dh)):(Dm(s,o.targetId),await Rm(s.localStore,o.targetId,!0))}async function EN(i,e){const n=He(i),s=n.Tu.get(e),o=n.Iu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),op(n.remoteStore,s.targetId))}async function zE(i,e){const n=He(i);try{const s=await q2(n.localStore,e);e.targetChanges.forEach((o,u)=>{const f=n.Au.get(u);f&&(mt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?mt(f.hu,14607):o.removedDocuments.size>0&&(mt(f.hu,42227),f.hu=!1))}),await BE(n,s,e)}catch(s){await dh(s)}}function p0(i,e,n){const s=He(i);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.Tu.forEach((u,f)=>{const m=f.view.va(e);m.snapshot&&o.push(m.snapshot)}),function(f,m){const g=He(f);g.onlineState=m;let y=!1;g.queries.forEach((T,b)=>{for(const w of b.Sa)w.va(m)&&(y=!0)}),y&&fp(g)}(s.eventManager,e),o.length&&s.Pu.H_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function SN(i,e,n){const s=He(i);s.sharedClientState.updateQueryState(e,"rejected",n);const o=s.Au.get(e),u=o&&o.key;if(u){let f=new At(_e.comparator);f=f.insert(u,on.newNoDocument(u,Re.min()));const m=Ye().add(u),g=new Eh(Re.min(),new Map,new At(Ue),f,m);await zE(s,g),s.du=s.du.remove(u),s.Au.delete(e),mp(s)}else await Rm(s.localStore,e,!1).then(()=>Dm(s,e,n)).catch(dh)}function Dm(i,e,n=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Iu.get(e))i.Tu.delete(s),n&&i.Pu.yu(s,n);i.Iu.delete(e),i.isPrimaryClient&&i.Ru.jr(e).forEach(s=>{i.Ru.containsKey(s)||jE(i,s)})}function jE(i,e){i.Eu.delete(e.path.canonicalString());const n=i.du.get(e);n!==null&&(op(i.remoteStore,n),i.du=i.du.remove(e),i.Au.delete(n),mp(i))}function g0(i,e,n){for(const s of n)s instanceof xE?(i.Ru.addReference(s.key,e),bN(i,s)):s instanceof LE?(fe(dp,"Document no longer in limbo: "+s.key),i.Ru.removeReference(s.key,e),i.Ru.containsKey(s.key)||jE(i,s.key)):Ne(19791,{wu:s})}function bN(i,e){const n=e.key,s=n.path.canonicalString();i.du.get(n)||i.Eu.has(s)||(fe(dp,"New document in limbo: "+n),i.Eu.add(s),mp(i))}function mp(i){for(;i.Eu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const n=new _e(ot.fromString(e)),s=i.fu.next();i.Au.set(s,new pN(n)),i.du=i.du.insert(n,s),IE(i.remoteStore,new qr(Ei(Wm(n.path)),s,"TargetPurposeLimboResolution",mh.ce))}}async function BE(i,e,n){const s=He(i),o=[],u=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach((m,g)=>{f.push(s.pu(g,e,n).then(y=>{var T;if((y||n)&&s.isPrimaryClient){const b=y?!y.fromCache:(T=n==null?void 0:n.targetChanges.get(g.targetId))==null?void 0:T.current;s.sharedClientState.updateQueryState(g.targetId,b?"current":"not-current")}if(y){o.push(y);const b=sp.As(g.targetId,y);u.push(b)}}))}),await Promise.all(f),s.Pu.H_(o),await async function(g,y){const T=He(g);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>W.forEach(y,w=>W.forEach(w.Es,k=>T.persistence.referenceDelegate.addReference(b,w.targetId,k)).next(()=>W.forEach(w.ds,k=>T.persistence.referenceDelegate.removeReference(b,w.targetId,k)))))}catch(b){if(!fo(b))throw b;fe(ap,"Failed to update sequence numbers: "+b)}for(const b of y){const w=b.targetId;if(!b.fromCache){const k=T.Ms.get(w),U=k.snapshotVersion,Y=k.withLastLimboFreeSnapshotVersion(U);T.Ms=T.Ms.insert(w,Y)}}}(s.localStore,u))}async function wN(i,e){const n=He(i);if(!n.currentUser.isEqual(e)){fe(dp,"User change. New user:",e.toKey());const s=await CE(n.localStore,e);n.currentUser=e,function(u,f){u.mu.forEach(m=>{m.forEach(g=>{g.reject(new ce(ee.CANCELLED,f))})}),u.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await BE(n,s.Ls)}}function AN(i,e){const n=He(i),s=n.Au.get(e);if(s&&s.hu)return Ye().add(s.key);{let o=Ye();const u=n.Iu.get(e);if(!u)return o;for(const f of u){const m=n.Tu.get(f);o=o.unionWith(m.view.nu)}return o}}function qE(i){const e=He(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=zE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=AN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=SN.bind(null,e),e.Pu.H_=hN.bind(null,e.eventManager),e.Pu.yu=fN.bind(null,e.eventManager),e}class eh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Sh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return B2(this.persistence,new U2,e.initialUser,this.serializer)}Cu(e){return new AE(rp.mi,this.serializer)}Du(e){return new G2}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}eh.provider={build:()=>new eh};class CN extends eh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){mt(this.persistence.referenceDelegate instanceof Jc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new b2(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Tn.withCacheSize(this.cacheSizeBytes):Tn.DEFAULT;return new AE(s=>Jc.mi(s,n),this.serializer)}}class Om{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>p0(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=wN.bind(null,this.syncEngine),await lN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new cN}()}createDatastore(e){const n=Sh(e.databaseInfo.databaseId),s=function(u){return new Z2(u)}(e.databaseInfo);return function(u,f,m,g){return new tN(u,f,m,g)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,o,u,f,m){return new iN(s,o,u,f,m)}(this.localStore,this.datastore,e.asyncQueue,n=>p0(this.syncEngine,n,0),function(){return l0.v()?new l0:new X2}())}createSyncEngine(e,n){return function(o,u,f,m,g,y,T){const b=new gN(o,u,f,m,g,y);return T&&(b.gu=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(o){const u=He(o);fe(so,"RemoteStore shutting down."),u.Ea.add(5),await Jl(u),u.Aa.shutdown(),u.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Om.provider={build:()=>new Om};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class HE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):sr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="FirestoreClient";class RN{constructor(e,n,s,o,u){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=an.UNAUTHENTICATED,this.clientId=Xm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{fe(es,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(fe(es,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ME(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Zd(i,e){i.asyncQueue.verifyOperationInProgress(),fe(es,"Initializing OfflineComponentProvider");const n=i.configuration;await e.initialize(n);let s=n.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await CE(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function y0(i,e){i.asyncQueue.verifyOperationInProgress();const n=await NN(i);fe(es,"Initializing OnlineComponentProvider"),await e.initialize(n,i.configuration),i.setCredentialChangeListener(s=>h0(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>h0(e.remoteStore,o)),i._onlineComponents=e}async function NN(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){fe(es,"Using user provided OfflineComponentProvider");try{await Zd(i,i._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(o){return o.name==="FirebaseError"?o.code===ee.FAILED_PRECONDITION||o.code===ee.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;eo("Error using user provided cache. Falling back to memory cache: "+n),await Zd(i,new eh)}}else fe(es,"Using default OfflineComponentProvider"),await Zd(i,new CN(void 0));return i._offlineComponents}async function IN(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(fe(es,"Using user provided OnlineComponentProvider"),await y0(i,i._uninitializedComponentsProvider._online)):(fe(es,"Using default OnlineComponentProvider"),await y0(i,new Om))),i._onlineComponents}async function FE(i){const e=await IN(i),n=e.eventManager;return n.onListen=yN.bind(null,e.syncEngine),n.onUnlisten=TN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=vN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=EN.bind(null,e.syncEngine),n}function DN(i,e,n={}){const s=new Gr;return i.asyncQueue.enqueueAndForget(async()=>function(u,f,m,g,y){const T=new HE({next:w=>{T.Nu(),f.enqueueAndForget(()=>VE(u,b));const k=w.docs.has(m);!k&&w.fromCache?y.reject(new ce(ee.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&w.fromCache&&g&&g.source==="server"?y.reject(new ce(ee.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(w)},error:w=>y.reject(w)}),b=new kE(Wm(m.path),T,{includeMetadataChanges:!0,qa:!0});return PE(u,b)}(await FE(i),i.asyncQueue,e,n,s)),s.promise}function ON(i,e,n={}){const s=new Gr;return i.asyncQueue.enqueueAndForget(async()=>function(u,f,m,g,y){const T=new HE({next:w=>{T.Nu(),f.enqueueAndForget(()=>VE(u,b)),w.fromCache&&g.source==="server"?y.reject(new ce(ee.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(w)},error:w=>y.reject(w)}),b=new kE(m,T,{includeMetadataChanges:!0,qa:!0});return PE(u,b)}(await FE(i),i.asyncQueue,e,n,s)),s.promise}/**
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
 */function YE(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const GE="firestore.googleapis.com",_0=!0;class T0{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ce(ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=GE,this.ssl=_0}else this.host=e.host,this.ssl=e.ssl??_0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=wE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<E2)throw new ce(ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=YE(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ce(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ce(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ce(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wh{constructor(e,n,s,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new T0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new T0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new eR;switch(s.type){case"firstParty":return new rR(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ce(ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=v0.get(n);s&&(fe("ComponentProvider","Removing Datastore"),v0.delete(n),s.terminate())}(this),Promise.resolve()}}function MN(i,e,n,s={}){var y;i=zl(i,wh);const o=lo(e),u=i._getSettings(),f={...u,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${n}`;o&&(ST(`https://${m}`),bT("Firestore",!0)),u.host!==GE&&u.host!==m&&eo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...u,host:m,ssl:o,emulatorOptions:s};if(!Fs(g,f)&&(i._setSettings(g),s.mockUserToken)){let T,b;if(typeof s.mockUserToken=="string")T=s.mockUserToken,b=an.MOCK_USER;else{T=I1(s.mockUserToken,(y=i._app)==null?void 0:y.options.projectId);const w=s.mockUserToken.sub||s.mockUserToken.user_id;if(!w)throw new ce(ee.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new an(w)}i._authCredentials=new tR(new UT(T,b))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new go(this.firestore,e,this._query)}}class zt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zt(this.firestore,e,this._key)}toJSON(){return{type:zt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if($l(n,zt._jsonSchema))return new zt(e,s||null,new _e(ot.fromString(n.referencePath)))}}zt._jsonSchemaVersion="firestore/documentReference/1.0",zt._jsonSchema={type:Mt("string",zt._jsonSchemaVersion),referencePath:Mt("string")};class Xr extends go{constructor(e,n,s){super(e,n,Wm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new zt(this.firestore,null,new _e(e))}withConverter(e){return new Xr(this.firestore,e,this._path)}}function XE(i,e,...n){if(i=Yn(i),zT("collection","path",e),i instanceof wh){const s=ot.fromString(e,...n);return M_(s),new Xr(i,null,s)}{if(!(i instanceof zt||i instanceof Xr))throw new ce(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(ot.fromString(e,...n));return M_(s),new Xr(i.firestore,null,s)}}function KE(i,e,...n){if(i=Yn(i),arguments.length===1&&(e=Xm.newId()),zT("doc","path",e),i instanceof wh){const s=ot.fromString(e,...n);return O_(s),new zt(i,null,new _e(s))}{if(!(i instanceof zt||i instanceof Xr))throw new ce(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(ot.fromString(e,...n));return O_(s),new zt(i.firestore,i instanceof Xr?i.converter:null,new _e(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0="AsyncQueue";class S0{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new NE(this,"async_queue_retry"),this._c=()=>{const s=$d();s&&fe(E0,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=$d();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=$d();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Gr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!fo(e))throw e;fe(E0,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,sr("INTERNAL UNHANDLED ERROR: ",b0(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const o=hp.createAndSchedule(this,e,n,s,u=>this.hc(u));return this.tc.push(o),o}uc(){this.nc&&Ne(47125,{Pc:b0(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function b0(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class pp extends wh{constructor(e,n,s,o){super(e,n,s,o),this.type="firestore",this._queue=new S0,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new S0(e),this._firestoreClient=void 0,await e}}}function PN(i,e){const n=typeof i=="object"?i:Ym(),s=typeof i=="string"?i:Xc,o=uo(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=R1("firestore");u&&MN(o,...u)}return o}function QE(i){if(i._terminated)throw new ce(ee.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||VN(i),i._firestoreClient}function VN(i){var s,o,u;const e=i._freezeSettings(),n=function(m,g,y,T){return new SR(m,g,y,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,YE(T.experimentalLongPollingOptions),T.useFetchStreams,T.isUsingEmulator)}(i._databaseId,((s=i._app)==null?void 0:s.options.appId)||"",i._persistenceKey,e);i._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((u=e.localCache)!=null&&u._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new RN(i._authCredentials,i._appCheckCredentials,i._queue,n,i._componentsProvider&&function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qn(Jt.fromBase64String(e))}catch(n){throw new ce(ee.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qn(Jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:qn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if($l(e,qn._jsonSchema))return qn.fromBase64String(e.bytes)}}qn._jsonSchemaVersion="firestore/bytes/1.0",qn._jsonSchema={type:Mt("string",qn._jsonSchemaVersion),bytes:Mt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ce(ee.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new un(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ce(ee.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ce(ee.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ue(this._lat,e._lat)||Ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Si._jsonSchemaVersion}}static fromJSON(e){if($l(e,Si._jsonSchema))return new Si(e.latitude,e.longitude)}}Si._jsonSchemaVersion="firestore/geoPoint/1.0",Si._jsonSchema={type:Mt("string",Si._jsonSchemaVersion),latitude:Mt("number"),longitude:Mt("number")};/**
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
 */class bi{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}toJSON(){return{type:bi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if($l(e,bi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new bi(e.vectorValues);throw new ce(ee.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}bi._jsonSchemaVersion="firestore/vectorValue/1.0",bi._jsonSchema={type:Mt("string",bi._jsonSchemaVersion),vectorValues:Mt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN=/^__.*__$/;function WE(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ne(40011,{Ac:i})}}class gp{constructor(e,n,s,o,u,f){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new gp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var o;const n=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:n,fc:!1});return s.gc(e),s}yc(e){var o;const n=(o=this.path)==null?void 0:o.child(e),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Mm(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(WE(this.Ac)&&kN.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class xN{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Sh(e)}Cc(e,n,s,o=!1){return new gp({Ac:e,methodName:n,Dc:s,path:un.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function LN(i){const e=i._freezeSettings(),n=Sh(i._databaseId);return new xN(i._databaseId,!!e.ignoreUndefinedProperties,n)}function UN(i,e,n,s=!1){return yp(n,i.Cc(s?4:3,e))}function yp(i,e){if(JE(i=Yn(i)))return jN("Unsupported field value:",e,i),zN(i,e);if(i instanceof ZE)return function(s,o){if(!WE(o.Ac))throw o.Sc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(s,o){const u=[];let f=0;for(const m of s){let g=yp(m,o.wc(f));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),f++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=Yn(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return YR(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=ht.fromDate(s);return{timestampValue:Am(o.serializer,u)}}if(s instanceof ht){const u=new ht(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Am(o.serializer,u)}}if(s instanceof Si)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof qn)return{bytesValue:gE(o.serializer,s._byteString)};if(s instanceof zt){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:yE(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof bi)return function(f,m){return{mapValue:{fields:{[KT]:{stringValue:QT},[Kc]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw m.Sc("VectorValues must only contain numeric values.");return Jm(m.serializer,y)})}}}}}}(s,o);throw o.Sc(`Unsupported field value: ${fh(s)}`)}(i,e)}function zN(i,e){const n={};return qT(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mo(i,(s,o)=>{const u=yp(o,e.mc(s));u!=null&&(n[s]=u)}),{mapValue:{fields:n}}}function JE(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof ht||i instanceof Si||i instanceof qn||i instanceof zt||i instanceof ZE||i instanceof bi)}function jN(i,e,n){if(!JE(n)||!jT(n)){const s=fh(n);throw s==="an object"?e.Sc(i+" a custom object"):e.Sc(i+" "+s)}}const BN=new RegExp("[~\\*/\\[\\]]");function qN(i,e,n){if(e.search(BN)>=0)throw Mm(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,n);try{return new $E(...e.split("."))._internalPath}catch{throw Mm(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,n)}}function Mm(i,e,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${e}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||f)&&(g+=" (found",u&&(g+=` in field ${s}`),f&&(g+=` in document ${o}`),g+=")"),new ce(ee.INVALID_ARGUMENT,m+i+g)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,n,s,o,u){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class HN extends eS{data(){return super.data()}}function vp(i,e){return typeof e=="string"?qN(i,e):e instanceof $E?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FN(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ce(ee.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _p{}class YN extends _p{}function GN(i,e,...n){let s=[];e instanceof _p&&s.push(e),s=s.concat(n),function(u){const f=u.filter(g=>g instanceof Tp).length,m=u.filter(g=>g instanceof Ah).length;if(f>1||f>0&&m>0)throw new ce(ee.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)i=o._apply(i);return i}class Ah extends YN{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Ah(e,n,s)}_apply(e){const n=this._parse(e);return tS(e._query,n),new go(e.firestore,e.converter,Tm(e._query,n))}_parse(e){const n=LN(e.firestore);return function(u,f,m,g,y,T,b){let w;if(y.isKeyField()){if(T==="array-contains"||T==="array-contains-any")throw new ce(ee.INVALID_ARGUMENT,`Invalid Query. You can't perform '${T}' queries on documentId().`);if(T==="in"||T==="not-in"){A0(b,T);const U=[];for(const Y of b)U.push(w0(g,u,Y));w={arrayValue:{values:U}}}else w=w0(g,u,b)}else T!=="in"&&T!=="not-in"&&T!=="array-contains-any"||A0(b,T),w=UN(m,f,b,T==="in"||T==="not-in");return Ot.create(y,T,w)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function XN(i,e,n){const s=e,o=vp("where",i);return Ah._create(o,s,n)}class Tp extends _p{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Tp(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:ti.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(o,u){let f=o;const m=u.getFlattenedFilters();for(const g of m)tS(f,g),f=Tm(f,g)}(e._query,n),new go(e.firestore,e.converter,Tm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function w0(i,e,n){if(typeof(n=Yn(n))=="string"){if(n==="")throw new ce(ee.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nE(e)&&n.indexOf("/")!==-1)throw new ce(ee.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(ot.fromString(n));if(!_e.isDocumentKey(s))throw new ce(ee.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return j_(i,new _e(s))}if(n instanceof zt)return j_(i,n._key);throw new ce(ee.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fh(n)}.`)}function A0(i,e){if(!Array.isArray(i)||i.length===0)throw new ce(ee.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function tS(i,e){const n=function(o,u){for(const f of o)for(const m of f.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null}(i.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ce(ee.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ce(ee.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class KN{convertValue(e,n="none"){switch(Wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return wt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Ne(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return mo(e,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(e){var s,o,u;const n=(u=(o=(s=e.fields)==null?void 0:s[Kc].arrayValue)==null?void 0:o.values)==null?void 0:u.map(f=>wt(f.doubleValue));return new bi(n)}convertGeoPoint(e){return new Si(wt(e.latitude),wt(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=gh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Bl(e));default:return null}}convertTimestamp(e){const n=$r(e);return new ht(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ot.fromString(e);mt(bE(s),9688,{name:e});const o=new ql(s.get(1),s.get(3)),u=new _e(s.popFirst(5));return o.isEqual(n)||sr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}class Ol{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qs extends eS{constructor(e,n,s,o,u,f){super(e,n,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(vp("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(ee.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=qs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}qs._jsonSchemaVersion="firestore/documentSnapshot/1.0",qs._jsonSchema={type:Mt("string",qs._jsonSchemaVersion),bundleSource:Mt("string","DocumentSnapshot"),bundleName:Mt("string"),bundle:Mt("string")};class zc extends qs{data(e={}){return super.data(e)}}class $a{constructor(e,n,s,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Ol(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new zc(this._firestore,this._userDataWriter,s.key,s,new Ol(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ce(ee.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(m=>{const g=new zc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ol(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const g=new zc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ol(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,T=-1;return m.type!==0&&(y=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),T=f.indexOf(m.doc.key)),{type:QN(m.type),doc:g,oldIndex:y,newIndex:T}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ce(ee.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=$a._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Xm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach(u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function QN(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ne(61501,{type:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(i){i=zl(i,zt);const e=zl(i.firestore,pp);return DN(QE(e),i._key).then(n=>$N(e,i,n))}$a._jsonSchemaVersion="firestore/querySnapshot/1.0",$a._jsonSchema={type:Mt("string",$a._jsonSchemaVersion),bundleSource:Mt("string","QuerySnapshot"),bundleName:Mt("string"),bundle:Mt("string")};class iS extends KN{constructor(e){super(),this.firestore=e}convertBytes(e){return new qn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new zt(this.firestore,null,n)}}function rS(i){i=zl(i,go);const e=zl(i.firestore,pp),n=QE(e),s=new iS(e);return FN(i._query),ON(n,i._query).then(o=>new $a(e,s,i,o))}function $N(i,e,n){const s=n.docs.get(e._key),o=new iS(i);return new qs(i,o,e._key,s,new Ol(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(o){ho=o})(co),Ci(new ei("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new pp(new nR(s.getProvider("auth-internal")),new sR(f,s.getProvider("app-check-internal")),function(y,T){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ce(ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ql(y.options.projectId,T)}(f,o),f);return u={useFetchStreams:n,...u},m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),Fn(R_,N_,e),Fn(R_,N_,"esm2020")})();var ZN="firebase",WN="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fn(ZN,WN,"app");function sS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JN=sS,aS=new Qs("auth","Firebase",sS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=new Hm("@firebase/auth");function eI(i,...e){th.logLevel<=xe.WARN&&th.warn(`Auth (${co}): ${i}`,...e)}function jc(i,...e){th.logLevel<=xe.ERROR&&th.error(`Auth (${co}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(i,...e){throw Ep(i,...e)}function wi(i,...e){return Ep(i,...e)}function oS(i,e,n){const s={...JN(),[e]:n};return new Qs("auth","Firebase",s).create(e,{appName:i.name})}function Hs(i){return oS(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ep(i,...e){if(typeof i!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return aS.create(i,...e)}function Ae(i,e,...n){if(!i)throw Ep(e,...n)}function tr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw jc(e),new Error(e)}function or(i,e){i||tr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function tI(){return C0()==="http:"||C0()==="https:"}function C0(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tI()||k1()||"connection"in navigator)?navigator.onLine:!0}function iI(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n){this.shortDelay=e,this.longDelay=n,or(n>e,"Short delay should be less than long delay!"),this.isMobile=M1()||x1()}get(){return nI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(i,e){or(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],aI=new tu(3e4,6e4);function bp(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function yo(i,e,n,s,o={}){return uS(i,o,async()=>{let u={},f={};s&&(e==="GET"?f=s:u={body:JSON.stringify(s)});const m=Ql({key:i.config.apiKey,...f}).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const y={method:e,headers:g,...u};return V1()||(y.referrerPolicy="no-referrer"),i.emulatorConfig&&lo(i.emulatorConfig.host)&&(y.credentials="include"),lS.fetch()(await cS(i,i.config.apiHost,n,m),y)})}async function uS(i,e,n){i._canInitEmulator=!1;const s={...rI,...e};try{const o=new lI(i),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Vc(i,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[g,y]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vc(i,"credential-already-in-use",f);if(g==="EMAIL_EXISTS")throw Vc(i,"email-already-in-use",f);if(g==="USER_DISABLED")throw Vc(i,"user-disabled",f);const T=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw oS(i,T,y);ar(i,T)}}catch(o){if(o instanceof Ni)throw o;ar(i,"network-request-failed",{message:String(o)})}}async function oI(i,e,n,s,o={}){const u=await yo(i,e,n,s,o);return"mfaPendingCredential"in u&&ar(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function cS(i,e,n,s){const o=`${e}${n}?${s}`,u=i,f=u.config.emulator?Sp(i.config,o):`${i.config.apiScheme}://${o}`;return sI.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}class lI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(wi(this.auth,"network-request-failed")),aI.get())})}}function Vc(i,e,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=wi(i,e,s);return o.customData._tokenResponse=n,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uI(i,e){return yo(i,"POST","/v1/accounts:delete",e)}async function nh(i,e){return yo(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cI(i,e=!1){const n=Yn(i),s=await n.getIdToken(e),o=wp(s);Ae(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Ll(Wd(o.auth_time)),issuedAtTime:Ll(Wd(o.iat)),expirationTime:Ll(Wd(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Wd(i){return Number(i)*1e3}function wp(i){const[e,n,s]=i.split(".");if(e===void 0||n===void 0||s===void 0)return jc("JWT malformed, contained fewer than 3 sections"),null;try{const o=vT(n);return o?JSON.parse(o):(jc("Failed to decode base64 JWT payload"),null)}catch(o){return jc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function R0(i){const e=wp(i);return Ae(e,"internal-error"),Ae(typeof e.exp<"u","internal-error"),Ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fl(i,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ni&&hI(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function hI({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ll(this.lastLoginAt),this.creationTime=Ll(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ih(i){var b;const e=i.auth,n=await i.getIdToken(),s=await Fl(i,nh(e,{idToken:n}));Ae(s==null?void 0:s.users.length,e,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const u=(b=o.providerUserInfo)!=null&&b.length?hS(o.providerUserInfo):[],f=mI(i.providerData,u),m=i.isAnonymous,g=!(i.email&&o.passwordHash)&&!(f!=null&&f.length),y=m?g:!1,T={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new Vm(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(i,T)}async function dI(i){const e=Yn(i);await ih(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mI(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function hS(i){return i.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pI(i,e){const n=await uS(i,{},async()=>{const s=Ql({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,f=await cS(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return i.emulatorConfig&&lo(i.emulatorConfig.host)&&(g.credentials="include"),lS.fetch()(f,g)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function gI(i,e){return yo(i,"POST","/v2/accounts:revokeToken",bp(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ae(e.idToken,"internal-error"),Ae(typeof e.idToken<"u","internal-error"),Ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):R0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ae(e.length!==0,"internal-error");const n=R0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await pI(e,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new Za;return s&&(Ae(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(Ae(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),u&&(Ae(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Za,this.toJSON())}_performRefresh(){return tr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(i,e){Ae(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Jn{constructor({uid:e,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new fI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Vm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Fl(this,this.stsTokenManager.getToken(this.auth,e));return Ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cI(this,e)}reload(){return dI(this)}_assign(e){this!==e&&(Ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ih(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_i(this.auth.app))return Promise.reject(Hs(this.auth));const e=await this.getIdToken();return await Fl(this,uI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,o=n.email??void 0,u=n.phoneNumber??void 0,f=n.photoURL??void 0,m=n.tenantId??void 0,g=n._redirectEventId??void 0,y=n.createdAt??void 0,T=n.lastLoginAt??void 0,{uid:b,emailVerified:w,isAnonymous:k,providerData:U,stsTokenManager:Y}=n;Ae(b&&Y,e,"internal-error");const G=Za.fromJSON(this.name,Y);Ae(typeof b=="string",e,"internal-error"),xr(s,e.name),xr(o,e.name),Ae(typeof w=="boolean",e,"internal-error"),Ae(typeof k=="boolean",e,"internal-error"),xr(u,e.name),xr(f,e.name),xr(m,e.name),xr(g,e.name),xr(y,e.name),xr(T,e.name);const ue=new Jn({uid:b,auth:e,email:o,emailVerified:w,displayName:s,isAnonymous:k,photoURL:f,phoneNumber:u,tenantId:m,stsTokenManager:G,createdAt:y,lastLoginAt:T});return U&&Array.isArray(U)&&(ue.providerData=U.map(ie=>({...ie}))),g&&(ue._redirectEventId=g),ue}static async _fromIdTokenResponse(e,n,s=!1){const o=new Za;o.updateFromServerResponse(n);const u=new Jn({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await ih(u),u}static async _fromGetAccountInfoResponse(e,n,s){const o=n.users[0];Ae(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?hS(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new Za;m.updateFromIdToken(s);const g=new Jn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Vm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,y),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0=new Map;function nr(i){or(i instanceof Function,"Expected a class definition");let e=N0.get(i);return e?(or(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,N0.set(i,e),e)}/**
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
 */class fS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}fS.type="NONE";const I0=fS;/**
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
 */function Bc(i,e,n){return`firebase:${i}:${e}:${n}`}class Wa{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Bc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Bc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await nh(this.auth,{idToken:e}).catch(()=>{});return n?Jn._fromGetAccountInfoResponse(this.auth,n,e):null}return Jn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Wa(nr(I0),e,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||nr(I0);const f=Bc(s,e.config.apiKey,e.name);let m=null;for(const y of n)try{const T=await y._get(f);if(T){let b;if(typeof T=="string"){const w=await nh(e,{idToken:T}).catch(()=>{});if(!w)break;b=await Jn._fromGetAccountInfoResponse(e,w,T)}else b=Jn._fromJSON(e,T);y!==u&&(m=b),u=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new Wa(u,e,s):(u=g[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new Wa(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vS(e))return"Blackberry";if(_S(e))return"Webos";if(mS(e))return"Safari";if((e.includes("chrome/")||pS(e))&&!e.includes("edge/"))return"Chrome";if(yS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function dS(i=cn()){return/firefox\//i.test(i)}function mS(i=cn()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pS(i=cn()){return/crios\//i.test(i)}function gS(i=cn()){return/iemobile/i.test(i)}function yS(i=cn()){return/android/i.test(i)}function vS(i=cn()){return/blackberry/i.test(i)}function _S(i=cn()){return/webos/i.test(i)}function Ap(i=cn()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function yI(i=cn()){var e;return Ap(i)&&!!((e=window.navigator)!=null&&e.standalone)}function vI(){return L1()&&document.documentMode===10}function TS(i=cn()){return Ap(i)||yS(i)||_S(i)||vS(i)||/windows phone/i.test(i)||gS(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(i,e=[]){let n;switch(i){case"Browser":n=D0(cn());break;case"Worker":n=`${D0(cn())}-${i}`;break;default:n=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${co}/${s}`}/**
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
 */class _I{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((f,m)=>{try{const g=e(u);f(g)}catch(g){m(g)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function TI(i,e={}){return yo(i,"GET","/v2/passwordPolicy",bp(i,e))}/**
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
 */const EI=6;class SI{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??EI,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,n,s,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new O0(this),this.idTokenSubscription=new O0(this),this.beforeStateQueue=new _I(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nr(n)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await Wa.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await nh(this,{idToken:e}),s=await Jn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(_i(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(u=this.redirectUser)==null?void 0:u._redirectEventId,m=s==null?void 0:s._redirectEventId,g=await this.tryRedirectSignIn(e);(!f||f===m)&&(g!=null&&g.user)&&(s=g.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(f){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ih(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_i(this.app))return Promise.reject(Hs(this));const n=e?Yn(e):null;return n&&Ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _i(this.app)?Promise.reject(Hs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _i(this.app)?Promise.reject(Hs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await TI(this),n=new SI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Qs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await gI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nr(e)||this._popupRedirectResolver;Ae(n,this,"argument-error"),this.redirectPersistenceManager=await Wa.create(this,[nr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ae(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const g=e.addObserver(n,s,o);return()=>{f=!0,g()}}else{const g=e.addObserver(n);return()=>{f=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ES(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(_i(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&eI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Cp(i){return Yn(i)}class O0{constructor(e){this.auth=e,this.observer=null,this.addObserver=F1(n=>this.observer=n)}get next(){return Ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wI(i){Rp=i}function AI(i){return Rp.loadJS(i)}function CI(){return Rp.gapiScript}function RI(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(i,e){const n=uo(i,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(Fs(u,e??{}))return o;ar(o,"already-initialized")}return n.initialize({options:e})}function II(i,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(nr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function DI(i,e,n){const s=Cp(i);Ae(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=SS(e),{host:f,port:m}=OI(e),g=m===null?"":`:${m}`,y={url:`${u}//${f}${g}/`},T=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Ae(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ae(Fs(y,s.config.emulator)&&Fs(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,lo(f)?(ST(`${u}//${f}${g}`),bT("Auth",!0)):MI()}function SS(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function OI(i){const e=SS(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:M0(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:M0(f)}}}function M0(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function MI(){function i(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tr("not implemented")}_getIdTokenResponse(e){return tr("not implemented")}_linkToIdToken(e,n){return tr("not implemented")}_getReauthenticationResolver(e){return tr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ja(i,e){return oI(i,"POST","/v1/accounts:signInWithIdp",bp(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI="http://localhost";class Gs extends bS{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ar("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o,...u}=n;if(!s||!o)return null;const f=new Gs(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return Ja(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ja(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ja(e,n)}buildRequest(){const e={requestUri:PI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ql(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class nu extends wS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends nu{constructor(){super("facebook.com")}static credential(e){return Gs._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lr.credential(e.oauthAccessToken)}catch{return null}}}Lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Lr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends nu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gs._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ur.credential(n,s)}catch{return null}}}Ur.GOOGLE_SIGN_IN_METHOD="google.com";Ur.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr extends nu{constructor(){super("github.com")}static credential(e){return Gs._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zr.credential(e.oauthAccessToken)}catch{return null}}}zr.GITHUB_SIGN_IN_METHOD="github.com";zr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr extends nu{constructor(){super("twitter.com")}static credential(e,n){return Gs._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return jr.credential(n,s)}catch{return null}}}jr.TWITTER_SIGN_IN_METHOD="twitter.com";jr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,o=!1){const u=await Jn._fromIdTokenResponse(e,s,o),f=P0(s);return new oo({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const o=P0(s);return new oo({user:e,providerId:o,_tokenResponse:s,operationType:n})}}function P0(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh extends Ni{constructor(e,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,rh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,o){return new rh(e,n,s,o)}}function AS(i,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?rh._fromErrorAndOperation(i,u,e,s):u})}async function VI(i,e,n=!1){const s=await Fl(i,e._linkToIdToken(i.auth,await i.getIdToken()),n);return oo._forOperation(i,"link",s)}/**
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
 */async function kI(i,e,n=!1){const{auth:s}=i;if(_i(s.app))return Promise.reject(Hs(s));const o="reauthenticate";try{const u=await Fl(i,AS(s,o,e,i),n);Ae(u.idToken,s,"internal-error");const f=wp(u.idToken);Ae(f,s,"internal-error");const{sub:m}=f;return Ae(i.uid===m,s,"user-mismatch"),oo._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&ar(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xI(i,e,n=!1){if(_i(i.app))return Promise.reject(Hs(i));const s="signIn",o=await AS(i,s,e),u=await oo._fromIdTokenResponse(i,s,o);return n||await i._updateCurrentUser(u.user),u}function LI(i,e,n,s){return Yn(i).onIdTokenChanged(e,n,s)}function UI(i,e,n){return Yn(i).beforeAuthStateChanged(e,n)}const sh="__sak";/**
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
 */class CS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sh,"1"),this.storage.removeItem(sh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=1e3,jI=10;class RS extends CS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=TS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&e(n,o,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,m,g)=>{this.notifyListeners(f,g)});return}const s=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);vI()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,jI):o()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},zI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}RS.type="LOCAL";const BI=RS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS extends CS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}NS.type="SESSION";const IS=NS;/**
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
 */function qI(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ch{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const s=new Ch(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async y=>y(n.origin,u)),g=await qI(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ch.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(i="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return i+n}/**
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
 */class HI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,g)=>{const y=Np("",20);o.port1.start();const T=setTimeout(()=>{g(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(b){const w=b;if(w.data.eventId===y)switch(w.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(w.data.response);break;default:clearTimeout(T),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(){return window}function FI(i){Ai().location.href=i}/**
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
 */function DS(){return typeof Ai().WorkerGlobalScope<"u"&&typeof Ai().importScripts=="function"}async function YI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function GI(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function XI(){return DS()?self:null}/**
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
 */const OS="firebaseLocalStorageDb",KI=1,ah="firebaseLocalStorage",MS="fbase_key";class iu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rh(i,e){return i.transaction([ah],e?"readwrite":"readonly").objectStore(ah)}function QI(){const i=indexedDB.deleteDatabase(OS);return new iu(i).toPromise()}function km(){const i=indexedDB.open(OS,KI);return new Promise((e,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(ah,{keyPath:MS})}catch(o){n(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(ah)?e(s):(s.close(),await QI(),e(await km()))})})}async function V0(i,e,n){const s=Rh(i,!0).put({[MS]:e,value:n});return new iu(s).toPromise()}async function $I(i,e){const n=Rh(i,!1).get(e),s=await new iu(n).toPromise();return s===void 0?null:s.value}function k0(i,e){const n=Rh(i,!0).delete(e);return new iu(n).toPromise()}const ZI=800,WI=3;class PS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await km(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>WI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return DS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ch._getInstance(XI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await YI(),!this.activeServiceWorker)return;this.sender=new HI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||GI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await km();return await V0(e,sh,"1"),await k0(e,sh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>V0(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>$I(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>k0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Rh(o,!1).getAll();return new iu(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ZI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}PS.type="LOCAL";const JI=PS;new tu(3e4,6e4);/**
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
 */function eD(i,e){return e?nr(e):(Ae(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Ip extends bS{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ja(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ja(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ja(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tD(i){return xI(i.auth,new Ip(i),i.bypassAuthState)}function nD(i){const{auth:e,user:n}=i;return Ae(n,e,"internal-error"),kI(n,new Ip(i),i.bypassAuthState)}async function iD(i){const{auth:e,user:n}=i;return Ae(n,e,"internal-error"),VI(n,new Ip(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e,n,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=e;if(f){this.reject(f);return}const g={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tD;case"linkViaPopup":case"linkViaRedirect":return iD;case"reauthViaPopup":case"reauthViaRedirect":return nD;default:ar(this.auth,"internal-error")}}resolve(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD=new tu(2e3,1e4);class Xa extends VS{constructor(e,n,s,o,u){super(e,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Xa.currentPopupAction&&Xa.currentPopupAction.cancel(),Xa.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ae(e,this.auth,"internal-error"),e}async onExecution(){or(this.filter.length===1,"Popup operations only handle one event");const e=Np();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(wi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xa.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rD.get())};e()}}Xa.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD="pendingRedirect",qc=new Map;class aD extends VS{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=qc.get(this.auth._key());if(!e){try{const s=await oD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}qc.set(this.auth._key(),e)}return this.bypassAuthState||qc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oD(i,e){const n=cD(e),s=uD(i);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function lD(i,e){qc.set(i._key(),e)}function uD(i){return nr(i._redirectPersistence)}function cD(i){return Bc(sD,i.config.apiKey,i.name)}async function hD(i,e,n=!1){if(_i(i.app))return Promise.reject(Hs(i));const s=Cp(i),o=eD(s,e),f=await new aD(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD=10*60*1e3;class dD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!kS(e)){const o=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(wi(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fD&&this.cachedEventUids.clear(),this.cachedEventUids.has(x0(e))}saveEventToCache(e){this.cachedEventUids.add(x0(e)),this.lastProcessedEventTime=Date.now()}}function x0(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function kS({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mD(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kS(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pD(i,e={}){return yo(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yD=/^https?/;async function vD(i){if(i.config.emulator)return;const{authorizedDomains:e}=await pD(i);for(const n of e)try{if(_D(n))return}catch{}ar(i,"unauthorized-domain")}function _D(i){const e=Pm(),{protocol:n,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const f=new URL(i);return f.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!yD.test(n))return!1;if(gD.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const TD=new tu(3e4,6e4);function L0(){const i=Ai().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function ED(i){return new Promise((e,n)=>{var o,u,f;function s(){L0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{L0(),n(wi(i,"network-request-failed"))},timeout:TD.get()})}if((u=(o=Ai().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((f=Ai().gapi)!=null&&f.load)s();else{const m=RI("iframefcb");return Ai()[m]=()=>{gapi.load?s():n(wi(i,"network-request-failed"))},AI(`${CI()}?onload=${m}`).catch(g=>n(g))}}).catch(e=>{throw Hc=null,e})}let Hc=null;function SD(i){return Hc=Hc||ED(i),Hc}/**
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
 */const bD=new tu(5e3,15e3),wD="__/auth/iframe",AD="emulator/auth/iframe",CD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ND(i){const e=i.config;Ae(e.authDomain,i,"auth-domain-config-required");const n=e.emulator?Sp(e,AD):`https://${i.config.authDomain}/${wD}`,s={apiKey:e.apiKey,appName:i.name,v:co},o=RD.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Ql(s).slice(1)}`}async function ID(i){const e=await SD(i),n=Ai().gapi;return Ae(n,i,"internal-error"),e.open({where:document.body,url:ND(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CD,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=wi(i,"network-request-failed"),m=Ai().setTimeout(()=>{u(f)},bD.get());function g(){Ai().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(f)})}))}/**
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
 */const DD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OD=500,MD=600,PD="_blank",VD="http://localhost";class U0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kD(i,e,n,s=OD,o=MD){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g={...DD,width:s.toString(),height:o.toString(),top:u,left:f},y=cn().toLowerCase();n&&(m=pS(y)?PD:n),dS(y)&&(e=e||VD,g.scrollbars="yes");const T=Object.entries(g).reduce((w,[k,U])=>`${w}${k}=${U},`,"");if(yI(y)&&m!=="_self")return xD(e||"",m),new U0(null);const b=window.open(e||"",m,T);Ae(b,i,"popup-blocked");try{b.focus()}catch{}return new U0(b)}function xD(i,e){const n=document.createElement("a");n.href=i,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const LD="__/auth/handler",UD="emulator/auth/handler",zD=encodeURIComponent("fac");async function z0(i,e,n,s,o,u){Ae(i.config.authDomain,i,"auth-domain-config-required"),Ae(i.config.apiKey,i,"invalid-api-key");const f={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:co,eventId:o};if(e instanceof wS){e.setDefaultLanguage(i.languageCode),f.providerId=e.providerId||"",H1(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,b]of Object.entries({}))f[T]=b}if(e instanceof nu){const T=e.getScopes().filter(b=>b!=="");T.length>0&&(f.scopes=T.join(","))}i.tenantId&&(f.tid=i.tenantId);const m=f;for(const T of Object.keys(m))m[T]===void 0&&delete m[T];const g=await i._getAppCheckToken(),y=g?`#${zD}=${encodeURIComponent(g)}`:"";return`${jD(i)}?${Ql(m).slice(1)}${y}`}function jD({config:i}){return i.emulator?Sp(i,UD):`https://${i.authDomain}/${LD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="webStorageSupport";class BD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=IS,this._completeRedirectFn=hD,this._overrideRedirectResult=lD}async _openPopup(e,n,s,o){var f;or((f=this.eventManagers[e._key()])==null?void 0:f.manager,"_initialize() not called before _openPopup()");const u=await z0(e,n,s,Pm(),o);return kD(e,u,Np())}async _openRedirect(e,n,s,o){await this._originValidation(e);const u=await z0(e,n,s,Pm(),o);return FI(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(or(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await ID(e),s=new dD(e);return n.register("authEvent",o=>(Ae(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jd,{type:Jd},o=>{var f;const u=(f=o==null?void 0:o[0])==null?void 0:f[Jd];u!==void 0&&n(!!u),ar(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return TS()||mS()||Ap()}}const qD=BD;var j0="@firebase/auth",B0="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FD(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function YD(i){Ci(new ei("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;Ae(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:f,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ES(i)},y=new bI(s,o,u,g);return II(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ci(new ei("auth-internal",e=>{const n=Cp(e.getProvider("auth").getImmediate());return(s=>new HD(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fn(j0,B0,FD(i)),Fn(j0,B0,"esm2020")}/**
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
 */const GD=5*60,XD=ET("authIdTokenMaxAge")||GD;let q0=null;const KD=i=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>XD)return;const o=n==null?void 0:n.token;q0!==o&&(q0=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function QD(i=Ym()){const e=uo(i,"auth");if(e.isInitialized())return e.getImmediate();const n=NI(i,{popupRedirectResolver:qD,persistence:[JI,BI,IS]}),s=ET("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=KD(u.toString());UI(n,f,()=>f(n.currentUser)),LI(n,m=>f(m))}}const o=_T("auth");return o&&DI(n,`http://${o}`),n}function $D(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}wI({loadJS(i){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=wi("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",$D().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});YD("Browser");const xS="@firebase/installations",Dp="0.6.19";/**
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
 */const LS=1e4,US=`w:${Dp}`,zS="FIS_v2",ZD="https://firebaseinstallations.googleapis.com/v1",WD=60*60*1e3,JD="installations",eO="Installations";/**
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
 */const tO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Xs=new Qs(JD,eO,tO);function jS(i){return i instanceof Ni&&i.code.includes("request-failed")}/**
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
 */function BS({projectId:i}){return`${ZD}/projects/${i}/installations`}function qS(i){return{token:i.token,requestStatus:2,expiresIn:iO(i.expiresIn),creationTime:Date.now()}}async function HS(i,e){const s=(await e.json()).error;return Xs.create("request-failed",{requestName:i,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function FS({apiKey:i}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i})}function nO(i,{refreshToken:e}){const n=FS(i);return n.append("Authorization",rO(e)),n}async function YS(i){const e=await i();return e.status>=500&&e.status<600?i():e}function iO(i){return Number(i.replace("s","000"))}function rO(i){return`${zS} ${i}`}/**
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
 */async function sO({appConfig:i,heartbeatServiceProvider:e},{fid:n}){const s=BS(i),o=FS(i),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:n,authVersion:zS,appId:i.appId,sdkVersion:US},m={method:"POST",headers:o,body:JSON.stringify(f)},g=await YS(()=>fetch(s,m));if(g.ok){const y=await g.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:qS(y.authToken)}}else throw await HS("Create Installation",g)}/**
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
 */function GS(i){return new Promise(e=>{setTimeout(e,i)})}/**
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
 */function aO(i){return btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const oO=/^[cdef][\w-]{21}$/,xm="";function lO(){try{const i=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(i),i[0]=112+i[0]%16;const n=uO(i);return oO.test(n)?n:xm}catch{return xm}}function uO(i){return aO(i).substr(0,22)}/**
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
 */function Nh(i){return`${i.appName}!${i.appId}`}/**
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
 */const XS=new Map;function KS(i,e){const n=Nh(i);QS(n,e),cO(n,e)}function QS(i,e){const n=XS.get(i);if(n)for(const s of n)s(e)}function cO(i,e){const n=hO();n&&n.postMessage({key:i,fid:e}),fO()}let zs=null;function hO(){return!zs&&"BroadcastChannel"in self&&(zs=new BroadcastChannel("[Firebase] FID Change"),zs.onmessage=i=>{QS(i.data.key,i.data.fid)}),zs}function fO(){XS.size===0&&zs&&(zs.close(),zs=null)}/**
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
 */const dO="firebase-installations-database",mO=1,Ks="firebase-installations-store";let em=null;function Op(){return em||(em=hh(dO,mO,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(Ks)}}})),em}async function oh(i,e){const n=Nh(i),o=(await Op()).transaction(Ks,"readwrite"),u=o.objectStore(Ks),f=await u.get(n);return await u.put(e,n),await o.done,(!f||f.fid!==e.fid)&&KS(i,e.fid),e}async function $S(i){const e=Nh(i),s=(await Op()).transaction(Ks,"readwrite");await s.objectStore(Ks).delete(e),await s.done}async function Ih(i,e){const n=Nh(i),o=(await Op()).transaction(Ks,"readwrite"),u=o.objectStore(Ks),f=await u.get(n),m=e(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&KS(i,m.fid),m}/**
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
 */async function Mp(i){let e;const n=await Ih(i.appConfig,s=>{const o=pO(s),u=gO(i,o);return e=u.registrationPromise,u.installationEntry});return n.fid===xm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function pO(i){const e=i||{fid:lO(),registrationStatus:0};return ZS(e)}function gO(i,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Xs.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=yO(i,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:vO(i)}:{installationEntry:e}}async function yO(i,e){try{const n=await sO(i,e);return oh(i.appConfig,n)}catch(n){throw jS(n)&&n.customData.serverCode===409?await $S(i.appConfig):await oh(i.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function vO(i){let e=await H0(i.appConfig);for(;e.registrationStatus===1;)await GS(100),e=await H0(i.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Mp(i);return s||n}return e}function H0(i){return Ih(i,e=>{if(!e)throw Xs.create("installation-not-found");return ZS(e)})}function ZS(i){return _O(i)?{fid:i.fid,registrationStatus:0}:i}function _O(i){return i.registrationStatus===1&&i.registrationTime+LS<Date.now()}/**
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
 */async function TO({appConfig:i,heartbeatServiceProvider:e},n){const s=EO(i,n),o=nO(i,n),u=e.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:US,appId:i.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},g=await YS(()=>fetch(s,m));if(g.ok){const y=await g.json();return qS(y)}else throw await HS("Generate Auth Token",g)}function EO(i,{fid:e}){return`${BS(i)}/${e}/authTokens:generate`}/**
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
 */async function Pp(i,e=!1){let n;const s=await Ih(i.appConfig,u=>{if(!WS(u))throw Xs.create("not-registered");const f=u.authToken;if(!e&&wO(f))return u;if(f.requestStatus===1)return n=SO(i,e),u;{if(!navigator.onLine)throw Xs.create("app-offline");const m=CO(u);return n=bO(i,m),m}});return n?await n:s.authToken}async function SO(i,e){let n=await F0(i.appConfig);for(;n.authToken.requestStatus===1;)await GS(100),n=await F0(i.appConfig);const s=n.authToken;return s.requestStatus===0?Pp(i,e):s}function F0(i){return Ih(i,e=>{if(!WS(e))throw Xs.create("not-registered");const n=e.authToken;return RO(n)?{...e,authToken:{requestStatus:0}}:e})}async function bO(i,e){try{const n=await TO(i,e),s={...e,authToken:n};return await oh(i.appConfig,s),n}catch(n){if(jS(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await $S(i.appConfig);else{const s={...e,authToken:{requestStatus:0}};await oh(i.appConfig,s)}throw n}}function WS(i){return i!==void 0&&i.registrationStatus===2}function wO(i){return i.requestStatus===2&&!AO(i)}function AO(i){const e=Date.now();return e<i.creationTime||i.creationTime+i.expiresIn<e+WD}function CO(i){const e={requestStatus:1,requestTime:Date.now()};return{...i,authToken:e}}function RO(i){return i.requestStatus===1&&i.requestTime+LS<Date.now()}/**
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
 */async function NO(i){const e=i,{installationEntry:n,registrationPromise:s}=await Mp(e);return s?s.catch(console.error):Pp(e).catch(console.error),n.fid}/**
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
 */async function IO(i,e=!1){const n=i;return await DO(n),(await Pp(n,e)).token}async function DO(i){const{registrationPromise:e}=await Mp(i);e&&await e}/**
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
 */function OO(i){if(!i||!i.options)throw tm("App Configuration");if(!i.name)throw tm("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!i.options[n])throw tm(n);return{appName:i.name,projectId:i.options.projectId,apiKey:i.options.apiKey,appId:i.options.appId}}function tm(i){return Xs.create("missing-app-config-values",{valueName:i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS="installations",MO="installations-internal",PO=i=>{const e=i.getProvider("app").getImmediate(),n=OO(e),s=uo(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},VO=i=>{const e=i.getProvider("app").getImmediate(),n=uo(e,JS).getImmediate();return{getId:()=>NO(n),getToken:o=>IO(n,o)}};function kO(){Ci(new ei(JS,PO,"PUBLIC")),Ci(new ei(MO,VO,"PRIVATE"))}kO();Fn(xS,Dp);Fn(xS,Dp,"esm2020");/**
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
 */const xO="/firebase-messaging-sw.js",LO="/firebase-cloud-messaging-push-scope",eb="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",UO="https://fcmregistrations.googleapis.com/v1",tb="google.c.a.c_id",zO="google.c.a.c_l",jO="google.c.a.ts",BO="google.c.a.e",Y0=1e4;var G0;(function(i){i[i.DATA_MESSAGE=1]="DATA_MESSAGE",i[i.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(G0||(G0={}));/**
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
 */var Yl;(function(i){i.PUSH_RECEIVED="push-received",i.NOTIFICATION_CLICKED="notification-clicked"})(Yl||(Yl={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(i){const e=new Uint8Array(i);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function qO(i){const e="=".repeat((4-i.length%4)%4),n=(i+e).replace(/\-/g,"+").replace(/_/g,"/"),s=atob(n),o=new Uint8Array(s.length);for(let u=0;u<s.length;++u)o[u]=s.charCodeAt(u);return o}/**
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
 */const nm="fcm_token_details_db",HO=5,X0="fcm_token_object_Store";async function FO(i){if("databases"in indexedDB&&!(await indexedDB.databases()).map(u=>u.name).includes(nm))return null;let e=null;return(await hh(nm,HO,{upgrade:async(s,o,u,f)=>{if(o<2||!s.objectStoreNames.contains(X0))return;const m=f.objectStore(X0),g=await m.index("fcmSenderId").get(i);if(await m.clear(),!!g){if(o===2){const y=g;if(!y.auth||!y.p256dh||!y.endpoint)return;e={token:y.fcmToken,createTime:y.createTime??Date.now(),subscriptionOptions:{auth:y.auth,p256dh:y.p256dh,endpoint:y.endpoint,swScope:y.swScope,vapidKey:typeof y.vapidKey=="string"?y.vapidKey:er(y.vapidKey)}}}else if(o===3){const y=g;e={token:y.fcmToken,createTime:y.createTime,subscriptionOptions:{auth:er(y.auth),p256dh:er(y.p256dh),endpoint:y.endpoint,swScope:y.swScope,vapidKey:er(y.vapidKey)}}}else if(o===4){const y=g;e={token:y.fcmToken,createTime:y.createTime,subscriptionOptions:{auth:er(y.auth),p256dh:er(y.p256dh),endpoint:y.endpoint,swScope:y.swScope,vapidKey:er(y.vapidKey)}}}}}})).close(),await Hd(nm),await Hd("fcm_vapid_details_db"),await Hd("undefined"),YO(e)?e:null}function YO(i){if(!i||!i.subscriptionOptions)return!1;const{subscriptionOptions:e}=i;return typeof i.createTime=="number"&&i.createTime>0&&typeof i.token=="string"&&i.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const GO="firebase-messaging-database",XO=1,Gl="firebase-messaging-store";let im=null;function nb(){return im||(im=hh(GO,XO,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(Gl)}}})),im}async function KO(i){const e=ib(i),s=await(await nb()).transaction(Gl).objectStore(Gl).get(e);if(s)return s;{const o=await FO(i.appConfig.senderId);if(o)return await Vp(i,o),o}}async function Vp(i,e){const n=ib(i),o=(await nb()).transaction(Gl,"readwrite");return await o.objectStore(Gl).put(e,n),await o.done,e}function ib({appConfig:i}){return i.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},gn=new Qs("messaging","Messaging",QO);/**
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
 */async function $O(i,e){const n=await xp(i),s=rb(e),o={method:"POST",headers:n,body:JSON.stringify(s)};let u;try{u=await(await fetch(kp(i.appConfig),o)).json()}catch(f){throw gn.create("token-subscribe-failed",{errorInfo:f==null?void 0:f.toString()})}if(u.error){const f=u.error.message;throw gn.create("token-subscribe-failed",{errorInfo:f})}if(!u.token)throw gn.create("token-subscribe-no-token");return u.token}async function ZO(i,e){const n=await xp(i),s=rb(e.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(s)};let u;try{u=await(await fetch(`${kp(i.appConfig)}/${e.token}`,o)).json()}catch(f){throw gn.create("token-update-failed",{errorInfo:f==null?void 0:f.toString()})}if(u.error){const f=u.error.message;throw gn.create("token-update-failed",{errorInfo:f})}if(!u.token)throw gn.create("token-update-no-token");return u.token}async function WO(i,e){const s={method:"DELETE",headers:await xp(i)};try{const u=await(await fetch(`${kp(i.appConfig)}/${e}`,s)).json();if(u.error){const f=u.error.message;throw gn.create("token-unsubscribe-failed",{errorInfo:f})}}catch(o){throw gn.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function kp({projectId:i}){return`${UO}/projects/${i}/registrations`}async function xp({appConfig:i,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function rb({p256dh:i,auth:e,endpoint:n,vapidKey:s}){const o={web:{endpoint:n,auth:e,p256dh:i}};return s!==eb&&(o.web.applicationPubKey=s),o}/**
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
 */const JO=7*24*60*60*1e3;async function eM(i){const e=await nM(i.swRegistration,i.vapidKey),n={vapidKey:i.vapidKey,swScope:i.swRegistration.scope,endpoint:e.endpoint,auth:er(e.getKey("auth")),p256dh:er(e.getKey("p256dh"))},s=await KO(i.firebaseDependencies);if(s){if(iM(s.subscriptionOptions,n))return Date.now()>=s.createTime+JO?tM(i,{token:s.token,createTime:Date.now(),subscriptionOptions:n}):s.token;try{await WO(i.firebaseDependencies,s.token)}catch(o){console.warn(o)}return K0(i.firebaseDependencies,n)}else return K0(i.firebaseDependencies,n)}async function tM(i,e){try{const n=await ZO(i.firebaseDependencies,e),s={...e,token:n,createTime:Date.now()};return await Vp(i.firebaseDependencies,s),n}catch(n){throw n}}async function K0(i,e){const s={token:await $O(i,e),createTime:Date.now(),subscriptionOptions:e};return await Vp(i,s),s.token}async function nM(i,e){const n=await i.pushManager.getSubscription();return n||i.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:qO(e)})}function iM(i,e){const n=e.vapidKey===i.vapidKey,s=e.endpoint===i.endpoint,o=e.auth===i.auth,u=e.p256dh===i.p256dh;return n&&s&&o&&u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(i){const e={from:i.from,collapseKey:i.collapse_key,messageId:i.fcmMessageId};return rM(e,i),sM(e,i),aM(e,i),e}function rM(i,e){if(!e.notification)return;i.notification={};const n=e.notification.title;n&&(i.notification.title=n);const s=e.notification.body;s&&(i.notification.body=s);const o=e.notification.image;o&&(i.notification.image=o);const u=e.notification.icon;u&&(i.notification.icon=u)}function sM(i,e){e.data&&(i.data=e.data)}function aM(i,e){var o,u,f,m;if(!e.fcmOptions&&!((o=e.notification)!=null&&o.click_action))return;i.fcmOptions={};const n=((u=e.fcmOptions)==null?void 0:u.link)??((f=e.notification)==null?void 0:f.click_action);n&&(i.fcmOptions.link=n);const s=(m=e.fcmOptions)==null?void 0:m.analytics_label;s&&(i.fcmOptions.analyticsLabel=s)}/**
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
 */function oM(i){return typeof i=="object"&&!!i&&tb in i}/**
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
 */function lM(i){if(!i||!i.options)throw rm("App Configuration Object");if(!i.name)throw rm("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=i;for(const s of e)if(!n[s])throw rm(s);return{appName:i.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function rm(i){return gn.create("missing-app-config-values",{valueName:i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uM{constructor(e,n,s){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=lM(e);this.firebaseDependencies={app:e,appConfig:o,installations:n,analyticsProvider:s}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cM(i){try{i.swRegistration=await navigator.serviceWorker.register(xO,{scope:LO}),i.swRegistration.update().catch(()=>{}),await hM(i.swRegistration)}catch(e){throw gn.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function hM(i){return new Promise((e,n)=>{const s=setTimeout(()=>n(new Error(`Service worker not registered after ${Y0} ms`)),Y0),o=i.installing||i.waiting;i.active?(clearTimeout(s),e()):o?o.onstatechange=u=>{var f;((f=u.target)==null?void 0:f.state)==="activated"&&(o.onstatechange=null,clearTimeout(s),e())}:(clearTimeout(s),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fM(i,e){if(!e&&!i.swRegistration&&await cM(i),!(!e&&i.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw gn.create("invalid-sw-registration");i.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dM(i,e){e?i.vapidKey=e:i.vapidKey||(i.vapidKey=eb)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mM(i,e){if(!navigator)throw gn.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw gn.create("permission-blocked");return await dM(i,e==null?void 0:e.vapidKey),await fM(i,e==null?void 0:e.serviceWorkerRegistration),eM(i)}/**
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
 */async function pM(i,e,n){const s=gM(e);(await i.firebaseDependencies.analyticsProvider.get()).logEvent(s,{message_id:n[tb],message_name:n[zO],message_time:n[jO],message_device_time:Math.floor(Date.now()/1e3)})}function gM(i){switch(i){case Yl.NOTIFICATION_CLICKED:return"notification_open";case Yl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yM(i,e){const n=e.data;if(!n.isFirebaseMessaging)return;i.onMessageHandler&&n.messageType===Yl.PUSH_RECEIVED&&(typeof i.onMessageHandler=="function"?i.onMessageHandler(Q0(n)):i.onMessageHandler.next(Q0(n)));const s=n.data;oM(s)&&s[BO]==="1"&&await pM(i,n.messageType,s)}const $0="@firebase/messaging",Z0="0.12.23";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vM=i=>{const e=new uM(i.getProvider("app").getImmediate(),i.getProvider("installations-internal").getImmediate(),i.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>yM(e,n)),e},_M=i=>{const e=i.getProvider("messaging").getImmediate();return{getToken:s=>mM(e,s)}};function TM(){Ci(new ei("messaging",vM,"PUBLIC")),Ci(new ei("messaging-internal",_M,"PRIVATE")),Fn($0,Z0),Fn($0,Z0,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EM(){try{await AT()}catch{return!1}return typeof window<"u"&&wT()&&z1()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SM(i=Ym()){return EM().then(e=>{if(!e)throw gn.create("unsupported-browser")},e=>{throw gn.create("indexed-db-unsupported")}),uo(Yn(i),"messaging").getImmediate()}TM();const bM={apiKey:"AIzaSyCcq7F0omw0ZAwR_Ft5_fR3MBqzbui7Ghw",authDomain:"ribbon-hope-town.firebaseapp.com",projectId:"ribbon-hope-town",storageBucket:"ribbon-hope-town.firebasestorage.app",messagingSenderId:"886523116849",appId:"1:886523116849:web:1bfa88a130bc7b33d7c410",measurementId:"G-41SN0VSCZQ"},Lp=NT(bM),Dh=PN(Lp);QD(Lp);SM(Lp);const sb="employees",wM="meetingRooms",AM="facilityRooms",CM="points",RM="allPoints",NM="junctions",IM="allJunctions",Up=async i=>{try{console.log("getCollection",i);const e=await rS(XE(Dh,i)),n=[];return e.forEach(s=>{n.push({id:s.id,...s.data()})}),n}catch(e){throw console.error(`Error getting ${i} collection:`,e),e}},DM=async()=>Up(sb),OM=async i=>{try{const e=XE(Dh,sb),n=GN(e,XN("email","==",i.toLowerCase()));return!(await rS(n)).empty}catch(e){throw console.error("Error checking employee existence:",e),e}},MM=async()=>Up(wM),PM=async()=>Up(AM),VM=async()=>xM(CM,RM),kM=async()=>LM(NM,IM),xM=async(i,e)=>{const n=KE(Dh,i,e),s={};try{const o=await nS(n);if(!o.exists())return{};const u=o.data();return Object.keys(u).forEach(f=>{const m=u[f];m&&Array.isArray(m.default)?s[f]=m.default:s[f]=[]}),s}catch(o){return console.error("Error getting document:",o),{}}},LM=async(i,e)=>{const n=KE(Dh,i,e),s={};try{const o=await nS(n);if(!o.exists())return{};const u=o.data();return Object.keys(u).forEach(f=>{const m=u[f];m&&typeof m.default=="object"?s[f]=m.default:s[f]={}}),s}catch(o){return console.error("Error getting document:",o),{}}return s};function Lm(i,e,n,s,o){const u=new Map;if(n.forEach(U=>{u.set(U.label,U)}),!u.has(i)||!u.has(e))return null;if(i===e)return{path:[i],segments:[],totalDistance:0};const f=new Map,m=new Map,g=new Set,y=new Set;for(Object.entries(s).forEach(([U,Y])=>{y.add(U),Y.forEach(G=>y.add(G))}),y.forEach(U=>{f.set(U,U===i?0:1/0),m.set(U,null),g.add(U)});g.size>0;){let U=null,Y=1/0;for(const ie of g){const te=f.has(ie)?f.get(ie):1/0;te<Y&&(Y=te,U=ie)}if(!U||Y===1/0||(U!==null&&g.delete(U),U===e))break;const G=s[U]||[],ue=u.get(U);ue&&G.forEach(ie=>{if(!g.has(ie))return;const te=u.get(ie);if(!te)return;const ge=Math.sqrt(Math.pow(te.x-ue.x,2)+Math.pow(te.y-ue.y,2)),oe=(f.get(U)||0)+ge;oe<(f.get(ie)||1/0)&&(f.set(ie,oe),m.set(ie,U))})}const T=[];let b=e;for(;b;)T.unshift(b),b=m.get(b)||null;if(i[0]===e[0]&&(T.length===0||T[0]!==i||T[T.length-1]!==e))return console.warn("Invalid path constructed:",T.length,T[0],i,T[T.length-1],e),null;const w=[];let k=0;for(let U=0;U<T.length-1;U++){const Y=u.get(T[U]),G=u.get(T[U+1]);if(Y&&G){const ue=Math.atan2(G.y-Y.y,G.x-Y.x),ie=Math.sqrt(Math.pow(G.x-Y.x,2)+Math.pow(G.y-Y.y,2));w.push({from:Y,to:G,angle:ue,floor:o}),k+=ie}}return{path:T,segments:w,totalDistance:k}}function UM(i,e,n,s,o,u,f,m){const g=[];f&&g.push("B1-2","B2-2"),m&&g.push("B3");let y=null;for(const T of g){const b=u[n],w=u[s];if(!b||!w)continue;const k=Lm(i,T,o,b,n),U=Lm(T,e,o,w,s);if(k&&U){const Y=k.totalDistance+U.totalDistance;(!y||Y<y.totalDistance)&&(y={path:[...k.path,...U.path.slice(1)],segments:[...k.segments,...U.segments],totalDistance:Y})}}return y}const zM=({segments:i,pathColor:e="#ff0000",pathWidth:n=2,showArrows:s=!0,arrowColor:o="#ff0000",showLine:u=!1,displayedFloor:f})=>D.jsx(D.Fragment,{children:i.filter(m=>m.floor===f).map((m,g)=>{const{from:y,to:T,angle:b}=m,w=Math.sqrt(Math.pow(T.x-y.x,2)+Math.pow(T.y-y.y,2)),k=(y.x+T.x)/2,U=(y.y+T.y)/2;return D.jsxs("div",{children:[u&&D.jsx("div",{style:{position:"absolute",left:`${y.x}%`,top:`${y.y}%`,width:`${w}%`,height:`${n}px`,backgroundColor:e,transformOrigin:"0 50%",transform:`translateY(-2px) rotate(${b}rad)`,pointerEvents:"none",zIndex:1e3}}),s&&D.jsx("div",{style:{position:"absolute",left:`${k}%`,top:`${U}%`,transform:`translate(-50%, -70%) rotate(${b}rad)`,pointerEvents:"none",zIndex:1001},children:D.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",children:D.jsx("polygon",{points:"0,10 15,5 10,10 15,15",fill:o,stroke:o,strokeWidth:"1"})})})]},g)})});function jM(i){const[e,n]=ln.useState(null),[s,o]=ln.useState(!1),[u,f]=ln.useState({});he.useEffect(()=>{(async()=>{try{const T=await kM();f(T)}catch(T){console.error("Error loading data:",T)}})()},[]);const m=ln.useCallback((y,T,b,w,k,U)=>{o(!0);try{let Y=null;if(console.log("Debug - start and end",{startFloor:b,targetFloor:w}),b===w){const G=u[b];G&&(Y=Lm(y,T,i,G,b),console.log("Debug - same floor"))}else console.log("Debug - between floors"),Y=UM(y,T,b,w,i,u,k,U);n(Y)}catch(Y){console.error("Pathfinding error:",Y),n(null)}finally{o(!1)}},[i]),g=ln.useCallback(()=>{n(null)},[]);return{currentPath:e,isPathfinding:s,findAndSetPath:m,clearPath:g}}const BM=({showNavigation:i,isDevModeEnabled:e,targetRoom:n,setTargetRoom:s,myLocation:o,setMyLocation:u,startColor:f,targetColor:m,onClose:g})=>{const[y,T]=he.useState(!1),[b,w]=he.useState(!1),k=18,U=18,[Y,G]=he.useState(!1),ue="#ff0000",ie=2,te=!1,[ge,oe]=he.useState(null),[be,V]=he.useState(!0),[A,N]=he.useState(!0),O=n?n.charAt(0):null,M=o?o.charAt(0):null,[x,C]=he.useState({});he.useEffect(()=>{(async()=>{try{const ve=await VM();C(ve)}catch(ve){console.error("Error loading data:",ve)}})()},[]),he.useEffect(()=>{oe(O)},[O]);const Ge=()=>{oe(le=>le===O?M:O)};he.useEffect(()=>{ae()},[n,o]),he.useEffect(()=>{localStorage.setItem("floorplan-start-color",f)},[f]),he.useEffect(()=>{localStorage.setItem("floorplan-target-color",m)},[m]);const Me=ge?x[ge]??[]:[],X=Me.filter(le=>!le.label.startsWith("J")&&!le.label.startsWith("B")),ne=Me.filter(le=>le.label.startsWith("J")||le.label.startsWith("B")),Pe=Object.values(x).flat().filter(le=>le.label.startsWith("J")||le.label.startsWith("B")),{currentPath:I,isPathfinding:$,findAndSetPath:se,clearPath:J}=jM(Pe),pe=(()=>{switch(ge){case"1":return"/floor-plan-app/FloorPlan_1_clear.png";case"2":return"/floor-plan-app/FloorPlan_2_clear.png";case"3":return"/floor-plan-app/FloorPlan_3_clear.png";case"4":return"/floor-plan-app/FloorPlan_4 - Copy.png";default:return"/floor-plan-app/FloorPlan_4 - Copy.png"}})(),Ce=le=>y||le===o||le===n,Te=le=>le===o?f:le===n?m:"red",it=le=>le===o?k:le===n?U:8,Le=ln.useCallback((le,ve)=>{if(!ve)return null;const Fe=x[ve]??[],ft=Fe.filter(Tt=>Tt.label.startsWith("J")||Tt.label.startsWith("B")),vt=Fe.find(Tt=>Tt.label===le);if(!vt)return null;let en=null,_t=1/0;return ft.forEach(Tt=>{const hn=Math.sqrt(Math.pow(Tt.x-vt.x,2)+Math.pow(Tt.y-vt.y,2));hn<_t&&(_t=hn,en=Tt.label)}),en},[x]),Pt=ln.useCallback(()=>{if(console.log("Debug - handleFindPath called"),!o||!n)return;const le=Le(o,M),ve=Le(n,O);console.log("Debug - Found junctions:",{startJunction:le,targetJunction:ve}),!(!le||!ve||!O||!M)&&le!==ve&&(se(ve,le,O,M,be,A),oe(M),G(!0))},[o,n,Le,se,M,O,be,A]),ae=ln.useCallback(()=>{J(),G(!1)},[J]);return D.jsx("div",{className:"floor-plan-container",children:D.jsxs("div",{className:"floor-plan-content",children:[D.jsxs("div",{className:"floor-plan-header",children:[D.jsx("div",{className:"floor-plan-header-icon-wrapper",children:D.jsx(Zw,{className:"floor-plan-header-icon"})}),D.jsx("h2",{className:"floor-plan-title",children:"Floor Map"}),g&&D.jsx("button",{onClick:g,className:"floor-plan-close-button","aria-label":"Close floor plan",children:D.jsx(Rl,{size:20})})]}),D.jsxs("div",{className:"floor-plan-controls",children:[D.jsxs("div",{className:"floor-plan-room-input",children:[D.jsx("label",{className:"floor-plan-label",children:"Target Room"}),D.jsxs("div",{className:"floor-plan-input-wrapper",children:[D.jsx(tT,{className:"floor-plan-search-icon"}),D.jsx("input",{type:"text",placeholder:"Search rooms...",value:n,onChange:le=>s(le.target.value.toUpperCase().replace(/\s+/g,"")),className:"floor-plan-input"})]})]}),D.jsxs("div",{className:"floor-plan-room-input",children:[D.jsx("label",{className:"floor-plan-label",children:"My Location"}),D.jsx("div",{className:"floor-plan-input-wrapper",children:D.jsx("input",{type:"text",placeholder:"e.g., 4N05A",value:o,onChange:le=>u(le.target.value.toUpperCase().replace(/\s+/g,"")),className:"floor-plan-input"})})]}),i&&D.jsxs("div",{className:"floor-plan-pathfinding-controls",children:[D.jsxs("button",{onClick:Pt,disabled:$||!o||!n,className:"floor-plan-path-button",children:[D.jsx(tA,{size:16}),$?"Finding Path...":"Find Path"]}),I&&D.jsxs("button",{onClick:ae,className:"floor-plan-clear-button",children:[D.jsx(Jw,{size:16}),"Clear Path"]}),M&&O&&M!==O&&D.jsxs("div",{className:"floor-plan-checkbox-group",children:[D.jsxs("label",{className:"floor-plan-checkbox",children:[D.jsx("input",{type:"checkbox",checked:be,onChange:le=>V(le.target.checked)}),"Use Stairs"]}),D.jsxs("label",{className:"floor-plan-checkbox",children:[D.jsx("input",{type:"checkbox",checked:A,onChange:le=>N(le.target.checked)}),"Use Elevator"]})]})]})]}),D.jsx("div",{className:"floor-plan-legend",children:D.jsx("div",{className:"floor-plan-legend-list"})}),i&&I&&e&&D.jsxs("div",{className:"floor-plan-path-info",children:[D.jsxs("p",{children:["Path found: ",I.path.length," junctions"]}),D.jsxs("p",{children:["Route: ",I.path.join(" → ")]})]}),D.jsx("div",{className:"floor-plan-frame",children:D.jsx(p1,{initialScale:1,centerOnInit:!0,limitToBounds:!1,minScale:.2,maxScale:10,wheel:{step:50},doubleClick:{disabled:!0},children:({resetTransform:le})=>D.jsxs(D.Fragment,{children:[D.jsx("button",{className:"fit-to-view-button",onClick:()=>le(),children:"Fit to view"}),M&&O&&M!==O&&D.jsxs("button",{onClick:Ge,className:"fit-to-view-button",children:["Switch to Floor ",ge===O?M:O]}),e&&D.jsxs(D.Fragment,{children:[D.jsx("button",{onClick:()=>T(!y),children:y?"Hide Points":"Show Points"}),D.jsx("button",{onClick:()=>w(!b),children:b?"Hide Junctions":"Show Junctions"})]}),D.jsx(v1,{children:D.jsxs("div",{className:"floor-plan-image-zommable-content",children:[D.jsx("img",{src:pe,alt:"Floor Plan",className:"floor-plan-image",style:{width:"100%",height:"auto",objectFit:"contain"}}),i&&Y&&I&&D.jsx(zM,{segments:I.segments,pathColor:ue,pathWidth:ie,showArrows:!0,showLine:te,arrowColor:ue,displayedFloor:ge}),i&&Y&&I&&I.path.length>0&&(()=>{const ve=I.path[0],Fe=I.path[I.path.length-1],ft=ne.find(Tt=>Tt.label===ve),vt=ne.find(Tt=>Tt.label===Fe);let en=I.path.find((Tt,hn)=>!!(Tt.startsWith("B")&&hn>0&&hn<I.path.length-1&&I.path[hn-1][1]!==I.path[hn+1][1]));en||(en=I.path.filter(hn=>hn.startsWith("B"))[0]);const _t=ne.find(Tt=>Tt.label===en);return D.jsxs(D.Fragment,{children:[ft&&D.jsx("div",{style:{position:"absolute",left:`${ft.x}%`,top:`${ft.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:"blue",borderRadius:"5%",width:"6px",height:"6px",pointerEvents:"none",zIndex:999}}),vt&&D.jsx("div",{style:{position:"absolute",left:`${vt.x}%`,top:`${vt.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:"blue",borderRadius:"5%",width:"6px",height:"6px",pointerEvents:"none",zIndex:999}}),_t&&D.jsx("div",{style:{position:"absolute",left:`${_t.x}%`,top:`${_t.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:"green",borderRadius:"5%",width:"6px",height:"6px",pointerEvents:"none",zIndex:999}})]})})(),X.map((ve,Fe)=>Ce(ve.label)?D.jsx("div",{className:"point",style:{position:"absolute",left:`${ve.x}%`,top:`${ve.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:Te(ve.label),borderRadius:"50%",width:`${it(ve.label)}px`,height:`${it(ve.label)}px`,zIndex:1002},children:D.jsx("span",{className:"tooltip",children:ve.label})},Fe):null),ne.map((ve,Fe)=>b?D.jsx("div",{style:{position:"absolute",left:`${ve.x}%`,top:`${ve.y-.5}%`,transform:"translate(-50%, -50%)",backgroundColor:Te(ve.label),borderRadius:"50%",width:`${it(ve.label)}px`,height:`${it(ve.label)}px`,pointerEvents:"none",zIndex:1002,display:"flex",alignItems:"center",justifyContent:"center",color:"black",fontSize:"10px",textAlign:"center",whiteSpace:"nowrap"},children:D.jsx("span",{style:{marginTop:`${ve.y+100}%`},children:ve.label})},Fe):null)]})})]})})})]})})},qM=({onShowOnMap:i})=>{const[e,n]=he.useState(""),[s,o]=he.useState(null),[u,f]=he.useState(null),[m,g]=he.useState(null),[y,T]=he.useState("firstName"),[b,w]=he.useState("asc"),[k,U]=he.useState(()=>localStorage.getItem("myLocation")||""),[Y,G]=he.useState(!1),[ue,ie]=he.useState(!1),[te,ge]=he.useState(!1),[oe,be]=he.useState(k),[V,A]=he.useState([]),[N,O]=he.useState([]),[M,x]=he.useState([]);he.useEffect(()=>{(async()=>{try{const le=await DM(),ve=await MM(),Fe=await PM();A(le),O(ve),x(Fe)}catch(le){console.error("Error loading data:",le)}})()},[]);const C=he.useMemo(()=>{s&&o(null);const ae=e.trim().toLowerCase();return ae?V.filter(ve=>{const Fe=ve.firstName.toLowerCase(),ft=ve.lastName.toLowerCase(),vt=ve.seatNumber.toLowerCase(),en=`${Fe} ${ft}`,_t=`${ft} ${Fe}`;return Fe.includes(ae)||ft.includes(ae)||vt.includes(ae)||en.includes(ae)||_t.includes(ae)}).sort((ve,Fe)=>{let ft,vt;switch(y){case"firstName":ft=ve.firstName.toLowerCase(),vt=Fe.firstName.toLowerCase();break;case"lastName":ft=ve.lastName.toLowerCase(),vt=Fe.lastName.toLowerCase();break;case"seat":ft=ve.seatNumber.toLowerCase(),vt=Fe.seatNumber.toLowerCase();break;default:ft=ve.firstName.toLowerCase(),vt=Fe.firstName.toLowerCase()}const en=ft.localeCompare(vt);return b==="asc"?en:-en}):[]},[e,V,y,b]),Ge=he.useMemo(()=>{u&&f(null);const ae=e.trim().toLowerCase();return ae?N.filter(le=>{const ve=le.Name.toLowerCase(),Fe=le.roomNumber.toLowerCase();return ve.includes(ae)||Fe.includes(ae)}):[]},[e]),Me=he.useMemo(()=>{m&&g(null);const ae=e.trim().toLowerCase();return ae?M.filter(le=>{const ve=le.Type.toLowerCase(),Fe=le.roomNumber.toLowerCase();return ve.includes(ae)||Fe.includes(ae)}):[]},[e]),X=ae=>{te&&Ge.length===0&&ge(!1),n(ae.target.value),console.log("Debug - search value",ae.target.value,"xx ",Ge.length,C.length,Me.length,{showOnlyMeetingRooms:te})},ne=()=>n(""),me=ae=>{o(ae),f(null),g(null)},Pe=ae=>{f(ae),g(null),o(null)},I=ae=>{f(null),g(ae),o(null)},$=()=>{o(null),g(null),f(null)},se=ae=>{T(ae.target.value)},J=ae=>{w(ae.target.value)},pe=e.trim()&&(te&&Ge.length>0||!te&&(C.length>0||Ge.length>0||Me.length>0))&&!s&&!u&&!m,Ce=()=>{be(k),ie(!0)},Te=()=>{U(oe),localStorage.setItem("myLocation",oe),ie(!1),Y&&(s!==null?i(s.seatNumber,oe):u!=null&&u.roomNumber?i(u.roomNumber,oe):i("",oe))},it=ae=>{const le=ae.target.checked;G(le),le&&k!==""?s!==null?i(s.seatNumber,k):u!=null&&u.roomNumber?i(u.roomNumber,k):i("",k):le||be("")},Le=ae=>{const le=ae.target.checked;ge(le)},Pt=()=>{console.log("debug - show on map",{searchValue:e,myLocation:k},u==null?void 0:u.roomNumber,m==null?void 0:m.roomNumber);let ae="";Y&&(ae=k),s!==null?i(s.seatNumber,ae):u!=null&&u.roomNumber?i(u.roomNumber,ae):m!=null&&m.roomNumber?i(m.roomNumber,ae):i("",ae)};return D.jsx("div",{className:"seat-finder-container",children:D.jsxs("div",{className:"seat-finder-content",children:[D.jsxs("div",{className:"seat-finder-header",children:[D.jsx("h2",{className:"seat-finder-title",children:"Seat Finder"}),D.jsx("p",{className:"seat-finder-subtitle",children:"Find colleagues and meeting rooms"})]}),D.jsxs("div",{className:"search-section",children:[D.jsxs("div",{className:"search-input-wrapper",children:[D.jsx("div",{className:"search-icon-container",children:D.jsx(tT,{className:"search-icon"})}),D.jsx("input",{type:"text",placeholder:"Search by name, seat, or room...",value:e,onChange:X,className:"search-input"}),e&&D.jsx("button",{className:"clear-search-button",onClick:ne,"aria-label":"Clear search",children:D.jsx(Rl,{className:"search-icon"})})]}),s&&D.jsxs("div",{className:"selected-employee-container",children:[D.jsxs("div",{className:"selected-employee-info-wrapper",children:[D.jsxs("div",{className:"selected-employee-details",children:[D.jsx("div",{className:"selected-employee-icon-wrapper",children:D.jsx(rA,{className:"selected-employee-icon"})}),D.jsxs("div",{children:[D.jsxs("div",{className:"selected-employee-name",children:[s.firstName," ",s.lastName]}),D.jsxs("div",{className:"selected-employee-department",children:[s.department," • Seat ",s.seatNumber]})]})]}),D.jsx("button",{onClick:$,className:"selected-employee-close-button",children:D.jsx(Rl,{className:"selected-employee-close-icon"})})]}),(s.floor===4||s.floor===3||s.floor===2||s.floor===1)&&D.jsx("button",{className:"map-toggle-button",onClick:Pt,children:"Show on Map"})]}),u&&D.jsxs("div",{className:"selected-employee-container",children:[D.jsxs("div",{className:"selected-employee-info-wrapper",children:[D.jsxs("div",{className:"selected-employee-details",children:[D.jsx("div",{className:"selected-employee-icon-wrapper",children:D.jsx(a_,{className:"selected-employee-icon"})}),D.jsxs("div",{children:[D.jsx("div",{className:"selected-employee-name",children:u.Name}),D.jsxs("div",{className:"selected-employee-department",children:["Room ",u.roomNumber," • Floor ",u.floor," • Wing ",u.wing," • Capacity ",u.capacity," • ",u.Type," Room"]})]})]}),D.jsx("button",{onClick:$,className:"selected-employee-close-button",children:D.jsx(Rl,{className:"selected-employee-close-icon"})})]}),(u.floor===4||u.floor===3||u.floor===2||u.floor===1)&&D.jsx("button",{className:"map-toggle-button",onClick:Pt,children:"Show on Map"})]}),m&&D.jsxs("div",{className:"selected-employee-container",children:[D.jsxs("div",{className:"selected-employee-info-wrapper",children:[D.jsxs("div",{className:"selected-employee-details",children:[D.jsx("div",{className:"selected-employee-icon-wrapper",children:D.jsx(a_,{className:"selected-employee-icon"})}),D.jsxs("div",{children:[D.jsx("div",{className:"selected-employee-name",children:m.Type}),D.jsxs("div",{className:"selected-employee-department",children:["Room ",D.jsx("strong",{children:m.roomNumber})," • Floor ",m.floor," • Wing ",m.wing]})]})]}),D.jsx("button",{onClick:$,className:"selected-employee-close-button",children:D.jsx(Rl,{className:"selected-employee-close-icon"})})]}),(m.floor===4||m.floor===3||m.floor===2||m.floor===1)&&D.jsx("button",{className:"map-toggle-button",onClick:Pt,children:"Show on Map"})]}),pe&&D.jsxs("div",{className:"search-results-container",children:[D.jsxs("div",{className:"search-results-header",children:[D.jsxs("div",{children:[D.jsxs("h4",{className:"search-results-title",children:["Search Results (",C.length+Ge.length+Me.length,")"]}),(C.length>0||Me.length>0)&&Ge.length>0&&D.jsx("div",{className:"sort-control",children:D.jsxs("label",{children:[D.jsx("input",{type:"checkbox",checked:te,onChange:Le}),"Only meeting rooms"]})})]}),D.jsxs("div",{className:"sorting-controls",children:[D.jsxs("div",{className:"sort-control",children:[D.jsx("label",{htmlFor:"sort-by",className:"sort-label",children:"Sort by:"}),D.jsxs("select",{id:"sort-by",value:y,onChange:se,className:"sort-select",children:[D.jsx("option",{value:"firstName",children:"First Name"}),D.jsx("option",{value:"lastName",children:"Last Name"}),D.jsx("option",{value:"seat",children:"Seat"})]})]}),D.jsxs("div",{className:"sort-control",children:[D.jsx("label",{htmlFor:"order-by",className:"sort-label",children:"Order by:"}),D.jsxs("select",{id:"order-by",value:b,onChange:J,className:"sort-select",children:[D.jsx("option",{value:"asc",children:"A to Z"}),D.jsx("option",{value:"desc",children:"Z to A"})]})]})]})]}),D.jsxs("div",{className:"search-results-list",children:[!te&&C.map((ae,le)=>D.jsx("div",{onClick:()=>{me(ae)},className:"search-result-item group",children:D.jsxs("div",{className:"search-result-content",children:[D.jsxs("div",{className:"search-result-employee-info",children:[D.jsx("div",{className:"search-result-avatar-wrapper",children:D.jsxs("span",{className:"search-result-avatar-text",children:[ae.firstName[0],ae.lastName[0]]})}),D.jsxs("div",{children:[D.jsxs("div",{className:"search-result-name",children:[ae.firstName," ",ae.lastName]}),D.jsx("div",{className:"search-result-department",children:ae.department})]})]}),D.jsxs("div",{className:"search-result-location",children:[D.jsxs("div",{className:"search-result-seat",children:[D.jsx(Ld,{className:"search-result-map-pin-icon"}),ae.seatNumber]}),D.jsxs("div",{className:"search-result-floor-wing",children:["Floor ",ae.floor," • Wing ",ae.wing]})]})]})},le)),Ge.map((ae,le)=>D.jsx("div",{onClick:()=>Pe(ae),className:"search-result-item group",children:D.jsxs("div",{className:"search-result-content",children:[D.jsxs("div",{className:"search-result-employee-info",children:[D.jsx("div",{className:"search-result-avatar-wrapper",children:D.jsx("span",{className:"search-result-avatar-text",children:ae.Name[0]})}),D.jsxs("div",{children:[D.jsx("div",{className:"search-result-name",children:ae.Name}),D.jsxs("div",{className:"search-result-department",children:[ae.Type," Room • Capacity ",ae.capacity]})]})]}),D.jsxs("div",{className:"search-result-location",children:[D.jsxs("div",{className:"search-result-seat",children:[D.jsx(Ld,{className:"search-result-map-pin-icon"}),ae.roomNumber]}),D.jsxs("div",{className:"search-result-floor-wing",children:["Floor ",ae.floor," • Wing ",ae.wing]})]})]})},le)),!te&&Me.map((ae,le)=>D.jsx("div",{onClick:()=>I(ae),className:"search-result-item group",children:D.jsxs("div",{className:"search-result-content",children:[D.jsxs("div",{className:"search-result-employee-info",children:[D.jsx("div",{className:"search-result-avatar-wrapper",children:D.jsx("span",{className:"search-result-avatar-text",children:ae.Type[0]})}),D.jsx("div",{children:D.jsx("div",{className:"search-result-name",children:ae.Type})})]}),D.jsxs("div",{className:"search-result-location",children:[D.jsxs("div",{className:"search-result-seat",children:[D.jsx(Ld,{className:"search-result-map-pin-icon"}),ae.roomNumber]}),D.jsxs("div",{className:"search-result-floor-wing",children:["Floor ",ae.floor," • Wing ",ae.wing]})]})]})},le))]})]}),D.jsxs("div",{className:"my-location-controls",style:{display:"flex",alignItems:"center",gap:"1rem",marginTop:"0.5rem"},children:[k!==""&&D.jsxs("label",{children:[D.jsx("input",{type:"checkbox",checked:Y,onChange:it})," ","show my location (",k,")"]}),D.jsx("button",{className:"set-location-button",onClick:Ce,disabled:ue,children:k===""?"set my location":"edit my location"})]}),ue&&D.jsxs("div",{className:"my-location-input",style:{marginTop:"0.5rem",display:"flex",gap:"0.5rem"},children:[D.jsx("input",{type:"text",value:oe,onChange:ae=>be(ae.target.value.toUpperCase().replace(/\s+/g,"")),placeholder:"Location not defined",style:{flex:1,padding:"0.5rem",borderRadius:"0.5rem",border:"1px solid #ccc"}}),D.jsx("button",{onClick:Te,children:"Save"})]}),e.trim()&&C.length===0&&Ge.length===0&&Me.length===0&&!s&&!u&&!m&&D.jsxs("div",{className:"no-employees-found-container",children:[D.jsx("div",{className:"no-employees-found-message",children:"No results found matching your search"}),D.jsx("div",{className:"no-employees-found-tip",children:"Try searching by name or seat number"})]})]})]})})},HM="1.0.4",FM="28/08/2025",W0={version:HM,date:FM},ab=he.createContext(void 0),YM=({children:i})=>{const[e,n]=he.useState(null);he.useEffect(()=>{const u=localStorage.getItem("loggedInUser");u&&n(u)},[]);const s=u=>{localStorage.setItem("loggedInUser",u),n(u)},o=()=>{localStorage.removeItem("loggedInUser"),n(null)};return D.jsx(ab.Provider,{value:{user:e,login:s,logout:o},children:i})},ob=()=>{const i=he.useContext(ab);if(i===void 0)throw new Error("useAuth must be used within an AuthProvider");return i},GM=({setStartColor:i,setTargetColor:e,showNavigation:n,setShowNavigation:s,isDevModeEnabled:o,setDevModeEnabled:u})=>{const{user:f,logout:m}=ob(),[g,y]=he.useState(!1),[T,b]=he.useState(!1),[w,k]=he.useState(!1),[U,Y]=he.useState(!1),G=he.useRef(null),ue=()=>y(!g),ie=()=>{k(oe=>!oe)},te=oe=>{G.current&&!G.current.contains(oe.target)&&y(!1)},ge=()=>{localStorage.removeItem("floorplan-start-color"),localStorage.removeItem("floorplan-target-color"),i&&i("#0000ff"),e&&e("#000000"),y(!1)};return he.useEffect(()=>(document.addEventListener("mousedown",te),()=>document.removeEventListener("mousedown",te)),[]),D.jsxs("header",{className:"header",children:[D.jsxs("div",{className:"header-left",dir:"ltr",ref:G,children:[D.jsx("button",{className:"menu-button",onClick:ue,"aria-label":"Menu",children:D.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[D.jsx("line",{x1:"4",x2:"20",y1:"12",y2:"12"}),D.jsx("line",{x1:"4",x2:"20",y1:"6",y2:"6"}),D.jsx("line",{x1:"4",x2:"20",y1:"18",y2:"18"})]})}),g&&D.jsxs("div",{className:"menu-dropdown",children:[D.jsx("div",{onClick:ge,children:"Restore Default Colors"}),D.jsx("div",{onClick:()=>{b(!0),y(!1)},children:"About"}),D.jsx("div",{onClick:ie,children:"Settings ▸"}),w&&D.jsxs(D.Fragment,{children:[D.jsx("div",{className:"submenu",onClick:()=>{s(!n),y(!1),k(!1)},children:n?"Hide Navigation":"Show Navigation"}),D.jsx("div",{className:"submenu",onClick:()=>{u(!o),y(!1),k(!1)},children:o?"Close Dev Mode":"Enable Dev Mode"})]}),D.jsxs("div",{onClick:()=>{Y(!0),y(!1)},children:["Logout (",f==null?void 0:f.toLowerCase(),")"]})]})]}),U&&D.jsx("div",{className:"modal-overlay",onClick:()=>Y(!1),children:D.jsxs("div",{className:"about-modal-content",onClick:oe=>oe.stopPropagation(),children:[D.jsx("h2",{children:"Confirm Logout"}),D.jsx("p",{children:"Do you want to logout?"}),D.jsx("button",{onClick:()=>{m(),Y(!1)},className:"confirm-button",children:"Yes"}),D.jsx("button",{onClick:()=>Y(!1),className:"cancel-button",children:"No"})]})}),T&&D.jsx("div",{className:"modal-overlay",onClick:()=>b(!1),children:D.jsxs("div",{className:"about-modal-content",onClick:oe=>oe.stopPropagation(),children:[D.jsx("h2",{children:"Seat Finder"}),D.jsxs("p",{children:["Version: ",W0.version]}),D.jsxs("p",{children:["Date: ",W0.date]}),D.jsx("button",{onClick:()=>b(!1),className:"about-close-button",children:"Close"})]})})]})},XM=({onLogin:i,errorMessage:e})=>{const[n,s]=he.useState(""),o=u=>{u.preventDefault(),i(n)};return D.jsx("div",{className:"login-dialog-overlay",children:D.jsxs("div",{className:"login-dialog",children:[D.jsx("h2",{children:"Login"}),D.jsxs("form",{onSubmit:o,children:[D.jsxs("div",{className:"form-group",children:[D.jsx("label",{htmlFor:"email",children:"Email:"}),D.jsx("input",{type:"email",id:"email",value:n,onChange:u=>s(u.target.value),required:!0})]}),e&&D.jsx("p",{className:"error-message",children:e}),D.jsx("button",{type:"submit",children:"Login"})]})]})})},KM=()=>{const{user:i,login:e}=ob(),[n,s]=he.useState(!1),[o,u]=he.useState(!1),[f,m]=he.useState(!1),[g,y]=he.useState(""),[T,b]=he.useState(""),[w,k]=he.useState(()=>localStorage.getItem("floorplan-target-color")||"#000000"),[U,Y]=he.useState(()=>localStorage.getItem("floorplan-start-color")||"#0000ff"),G=he.useRef(null),[ue,ie]=he.useState(null);he.useEffect(()=>{n&&G.current&&G.current.scrollIntoView({behavior:"smooth"})},[n]);const te=async ge=>{await OM(ge)?(e(ge),ie(null)):ie("No such user/email found.")};return i?D.jsxs(D.Fragment,{children:[D.jsx(GM,{setStartColor:Y,setTargetColor:k,showNavigation:o,setShowNavigation:u,isDevModeEnabled:f,setDevModeEnabled:m}),D.jsx(qM,{searchValue:g,setSearchValue:y,onShowOnMap:(ge,oe)=>{y(ge),b(oe),s(!0)}}),n&&D.jsx("div",{ref:G,children:D.jsx(BM,{showNavigation:o,isDevModeEnabled:f,targetRoom:g.trim(),setTargetRoom:y,myLocation:T.trim(),setMyLocation:b,startColor:U,setStartColor:Y,targetColor:w,setTargetColor:k,onClose:()=>{console.log("Floor plan closed"),s(!1)}})})]}):D.jsx(XM,{onLogin:te,errorMessage:ue})},QM=()=>D.jsx(YM,{children:D.jsx(KM,{})}),$M=qw.createRoot(document.getElementById("root"));$M.render(D.jsx(ln.StrictMode,{children:D.jsx(QM,{})}));
