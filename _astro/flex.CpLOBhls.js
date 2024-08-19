import{r as m}from"./index.DhYZZe0J.js";import{c as u,g as y,p as d}from"./css.COg7gKxU.js";var a={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=m,w=Symbol.for("react.element"),g=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,E=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function p(t,r,n){var e,s={},o=null,f=null;n!==void 0&&(o=""+n),r.key!==void 0&&(o=""+r.key),r.ref!==void 0&&(f=r.ref);for(e in r)j.call(r,e)&&!O.hasOwnProperty(e)&&(s[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)s[e]===void 0&&(s[e]=r[e]);return{$$typeof:w,type:t,key:o,ref:f,props:s,_owner:E.current}}i.Fragment=g;i.jsx=p;i.jsxs=p;a.exports=i;var b=a.exports;const l={transform(t){const{direction:r,align:n,justify:e,wrap:s,basis:o,grow:f,shrink:_,...c}=t;return{display:"flex",flexDirection:r,alignItems:n,justifyContent:e,flexWrap:s,flexBasis:o,flexGrow:f,flexShrink:_,...c}}},x=(t={})=>{const r=y(l,t);return l.transform(r,d)},R=t=>u(x(t));R.raw=x;export{R as f,b as j};
