import{j as e,f as p}from"./flex.eZphK3P9.js";import{c}from"./css.5JzmkZ7k.js";import{r as n}from"./index.DhYZZe0J.js";/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),m=(...r)=>r.filter((t,s,o)=>!!t&&o.indexOf(t)===s).join(" ");/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=n.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:i="",children:a,iconNode:d,...l},h)=>n.createElement("svg",{ref:h,...y,width:t,height:t,stroke:r,strokeWidth:o?Number(s)*24/Number(t):s,className:m("lucide",i),...l},[...d.map(([f,x])=>n.createElement(f,x)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(r,t)=>{const s=n.forwardRef(({className:o,...i},a)=>n.createElement(b,{ref:a,iconNode:t,className:m(`lucide-${g(r)}`,o),...i}));return s.displayName=`${r}`,s};/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=u("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=u("Clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);function N({children:r,...t}){const s=n.useRef(null),[o,i]=n.useState(!1),a=async()=>{const l=s.current?.innerText??"";await navigator.clipboard.writeText(l),i(!0),setTimeout(()=>{i(!1)},700)};return e.jsxs("div",{className:c({pos:"relative"}),children:[e.jsxs("div",{className:p({bg:"#2e3440ff",align:"center",justify:"space-between",borderBottomWidth:1,borderColor:"gray.500",py:2,px:4,borderRadius:"0.5rem .5rem 0 0"}),children:[e.jsx("div",{className:p({align:"center",gap:1}),children:Array.from({length:3}).map((d,l)=>e.jsx("div",{className:c({w:3,h:3,bg:"gray.500",rounded:"full"})},l.toString()))}),e.jsx("button",{type:"button",className:c({display:"inline-flex",alignItems:"center",py:1,px:2,minW:20,bg:"gray.700",borderWidth:1,borderColor:"gray.500",rounded:"sm",cursor:"pointer",fontSize:"xs",gap:1,color:"white"}),onClick:()=>{o||a()},children:o?e.jsxs(e.Fragment,{children:[e.jsx(w,{className:c({color:"gray.300",w:4,h:4})}),e.jsx("span",{children:"Copied"})]}):e.jsxs(e.Fragment,{children:[e.jsx(j,{className:c({color:"gray.300",w:4,h:4})}),e.jsx("span",{children:"Copy"})]})})]}),e.jsx("div",{className:c({flexGrow:1,minW:"full",w:"fit-content"}),children:e.jsx("pre",{...t,ref:s,children:r})})]})}export{N as default};
