import{j as c}from"./jsx-runtime.7faW4zRM.js";import{c as i}from"./css.5JzmkZ7k.js";import{r as a}from"./index.DhYZZe0J.js";/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),u=(...e)=>e.filter((t,r,o)=>!!t&&o.indexOf(t)===r).join(" ");/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var g={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=a.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:n="",children:s,iconNode:l,...d},p)=>a.createElement("svg",{ref:p,...g,width:t,height:t,stroke:e,strokeWidth:o?Number(r)*24/Number(t):r,className:u("lucide",n),...d},[...l.map(([h,f])=>a.createElement(h,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(e,t)=>{const r=a.forwardRef(({className:o,...n},s)=>a.createElement(b,{ref:s,iconNode:t,className:u(`lucide-${x(e)}`,o),...n}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=m("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.411.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=m("Clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);function v({children:e,...t}){const r=a.useRef(null),[o,n]=a.useState(!1),s=o?c.jsx(w,{className:i({color:"gray.300",w:4,h:4})}):c.jsx(C,{className:i({color:"gray.300",w:4,h:4})}),l=async()=>{const p=r.current?.innerText??"";await navigator.clipboard.writeText(p),n(!0),setTimeout(()=>{n(!1)},700)};return c.jsxs("div",{className:i({pos:"relative"}),children:[c.jsx("pre",{...t,ref:r,children:e}),c.jsx("button",{type:"button",className:i({pos:"absolute",top:4,right:4,p:1,borderWidth:1,borderColor:"gray.500",rounded:"sm",cursor:"pointer"}),onClick:()=>{o||l()},children:s})]})}export{v as default};
