"use strict";(self.webpackChunkkdz_portal=self.webpackChunkkdz_portal||[]).push([[86],{3472:(M,f,a)=>{a.d(f,{W:()=>u});var s=a(4650),o=a(6895),b=a(4859);let u=(()=>{class _{constructor(c){this._locationService=c}ngOnInit(){}onBackClick(){this._locationService.back()}}return _.\u0275fac=function(c){return new(c||_)(s.\u0275\u0275directiveInject(o.Location))},_.\u0275cmp=s.\u0275\u0275defineComponent({type:_,selectors:[["app-back-button"]],decls:2,vars:0,consts:[["mat-raised-button","","type","button",3,"click"]],template:function(c,y){1&c&&(s.\u0275\u0275elementStart(0,"button",0),s.\u0275\u0275listener("click",function(){return y.onBackClick()}),s.\u0275\u0275text(1,"\u0628\u0631\u06af\u0634\u062a"),s.\u0275\u0275elementEnd())},dependencies:[b.lW],styles:["button[_ngcontent-%COMP%]{width:100%}"]}),_})()},9078:(M,f,a)=>{a.d(f,{M:()=>b});var s=a(1572),o=a(4650);let b=(()=>{class u{constructor(i,c,y,v){this.componentFactoryResolver=i,this.viewContainerRef=c,this.renderer=y,this._nativeElement=v.nativeElement,this.spinnerFactory=this.componentFactoryResolver.resolveComponentFactory(s.Ou)}ngOnChanges(i){i.largeLoading.currentValue?(this._nativeElement.classList.add("mat-loading"),this._createSpinner()):(this._nativeElement.classList.remove("mat-loading"),this._destroySpinner())}_createSpinner(){this.spinner||(this.spinner=this.viewContainerRef.createComponent(this.spinnerFactory),this.spinner.instance.diameter=50,this.spinner.instance.mode="indeterminate",this.renderer.appendChild(this._nativeElement,this.spinner.instance._elementRef.nativeElement))}_destroySpinner(){this.spinner&&(this.spinner.destroy(),this.spinner=null)}}return u.\u0275fac=function(i){return new(i||u)(o.\u0275\u0275directiveInject(o.ComponentFactoryResolver),o.\u0275\u0275directiveInject(o.ViewContainerRef),o.\u0275\u0275directiveInject(o.Renderer2),o.\u0275\u0275directiveInject(o.ElementRef))},u.\u0275dir=o.\u0275\u0275defineDirective({type:u,selectors:[["","largeLoading",""]],inputs:{largeLoading:"largeLoading"},features:[o.\u0275\u0275NgOnChangesFeature]}),u})()},7641:(M,f,a)=>{a.d(f,{Z:()=>er});var s=Object.prototype;const b=function o(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||s)};var i=function u(e,t){return function(n){return e(t(n))}}(Object.keys,Object);const c=i;var v=Object.prototype.hasOwnProperty;const B="object"==typeof global&&global&&global.Object===Object&&global;var re="object"==typeof self&&self&&self.Object===Object&&self;const p=B||re||Function("return this")();var oe=p.Symbol,F=Object.prototype,ae=F.hasOwnProperty,se=F.toString,d=oe?oe.toStringTag:void 0;var _e=Object.prototype.toString;var L=oe?oe.toStringTag:void 0;const T=function fe(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":L&&L in Object(e)?function ie(e){var t=ae.call(e,d),n=e[d];try{e[d]=void 0;var A=!0}catch{}var tr=se.call(e);return A&&(t?e[d]=n:delete e[d]),tr}(e):function pe(e){return _e.call(e)}(e)},R=function ye(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},x=function ve(e){if(!R(e))return!1;var t=T(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t};var e,he=p["__core-js_shared__"],D=(e=/[^.]+$/.exec(he&&he.keys&&he.keys.IE_PROTO||""))?"Symbol(src)_1."+e:"";var Ee=Function.prototype.toString;const g=function we(e){if(null!=e){try{return Ee.call(e)}catch{}try{return e+""}catch{}}return""};var Ie=/^\[object .+?Constructor\]$/,Fe=RegExp("^"+Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Re=function Le(e){return!(!R(e)||function Ae(e){return!!D&&D in e}(e))&&(x(e)?Fe:Ie).test(g(e))},m=function Ue(e,t){var n=function xe(e,t){return e?.[t]}(e,t);return Re(n)?n:void 0},S=m(p,"DataView"),E=m(p,"Map"),w=m(p,"Promise"),P=m(p,"Set"),I=m(p,"WeakMap");var U="[object Map]",N="[object Promise]",K="[object Set]",V="[object WeakMap]",W="[object DataView]",ze=g(S),Je=g(E),He=g(w),Xe=g(P),Ze=g(I),l=T;(S&&l(new S(new ArrayBuffer(1)))!=W||E&&l(new E)!=U||w&&l(w.resolve())!=N||P&&l(new P)!=K||I&&l(new I)!=V)&&(l=function(e){var t=T(e),n="[object Object]"==t?e.constructor:void 0,A=n?g(n):"";if(A)switch(A){case ze:return W;case Je:return U;case He:return N;case Xe:return K;case Ze:return V}return t});const Qe=l,C=function Ye(e){return null!=e&&"object"==typeof e},G=function et(e){return C(e)&&"[object Arguments]"==T(e)};var $=Object.prototype,tt=$.hasOwnProperty,rt=$.propertyIsEnumerable,nt=G(function(){return arguments}())?G:function(e){return C(e)&&tt.call(e,"callee")&&!rt.call(e,"callee")};const ot=nt,st=Array.isArray,z=function ct(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991};var J="object"==typeof exports&&exports&&!exports.nodeType&&exports,H=J&&"object"==typeof module&&module&&!module.nodeType&&module,X=H&&H.exports===J?p.Buffer:void 0;const yt=(X?X.isBuffer:void 0)||function pt(){return!1};var r={};r["[object Float32Array]"]=r["[object Float64Array]"]=r["[object Int8Array]"]=r["[object Int16Array]"]=r["[object Int32Array]"]=r["[object Uint8Array]"]=r["[object Uint8ClampedArray]"]=r["[object Uint16Array]"]=r["[object Uint32Array]"]=!0,r["[object Arguments]"]=r["[object Array]"]=r["[object ArrayBuffer]"]=r["[object Boolean]"]=r["[object DataView]"]=r["[object Date]"]=r["[object Error]"]=r["[object Function]"]=r["[object Map]"]=r["[object Number]"]=r["[object Object]"]=r["[object RegExp]"]=r["[object Set]"]=r["[object String]"]=r["[object WeakMap]"]=!1;var Z="object"==typeof exports&&exports&&!exports.nodeType&&exports,j=Z&&"object"==typeof module&&module&&!module.nodeType&&module,k=j&&j.exports===Z&&B.process,zt=function(){try{return j&&j.require&&j.require("util").types||k&&k.binding&&k.binding("util")}catch{}}(),Y=zt&&zt.isTypedArray;const Ht=Y?function Wt(e){return function(t){return e(t)}}(Y):function Kt(e){return C(e)&&z(e.length)&&!!r[T(e)]};var Yt=Object.prototype.hasOwnProperty;const er=function qt(e){if(null==e)return!0;if(function ut(e){return null!=e&&z(e.length)&&!x(e)}(e)&&(st(e)||"string"==typeof e||"function"==typeof e.splice||yt(e)||Ht(e)||ot(e)))return!e.length;var t=Qe(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(b(e))return!function q(e){if(!b(e))return c(e);var t=[];for(var n in Object(e))v.call(e,n)&&"constructor"!=n&&t.push(n);return t}(e).length;for(var n in e)if(Yt.call(e,n))return!1;return!0}}}]);