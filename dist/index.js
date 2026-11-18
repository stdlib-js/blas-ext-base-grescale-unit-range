"use strict";var p=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var g=p(function(U,v){
var d=require('@stdlib/blas-ext-base-gwaxpb/dist');function y(e,r,a,n,i,s,u){var t=1/(a-r);return d(e,t,-(r*t),n,i,s,u)}v.exports=y
});var o=p(function(m,l){
var R=require('@stdlib/blas-ext-base-gwaxpb/dist').ndarray;function b(e,r,a,n,i,s,u,t,x){var c=1/(a-r);return R(e,c,-(r*c),n,i,s,u,t,x)}l.exports=b
});var f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=g(),h=o();f(q,"ndarray",h);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
