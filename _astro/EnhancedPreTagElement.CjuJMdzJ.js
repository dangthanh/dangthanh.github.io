import{j as c}from"./jsx-runtime.7faW4zRM.js";import{c as i}from"./css.5JzmkZ7k.js";import{r as n}from"./index.DhYZZe0J.js";/**
 * @license lucide-react v0.407.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),f=(...e)=>e.filter((t,r,o)=>!!t&&o.indexOf(t)===r).join(" ");/**
 * @license lucide-react v0.407.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.407.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=n.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:a="",children:s,iconNode:l,...u},d)=>n.createElement("svg",{ref:d,...y,width:t,height:t,stroke:e,strokeWidth:o?Number(r)*24/Number(t):r,className:f("lucide",a),...u},[...l.map(([p,m])=>n.createElement(p,m)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.407.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=(e,t)=>{const r=n.forwardRef(({className:o,...a},s)=>n.createElement(w,{ref:s,iconNode:t,className:f(`lucide-${x(e)}`,o),...a}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.407.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=h("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.407.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=h("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);function v({children:e,...t}){const r=n.useRef(null),o=n.useRef(null),[a,s]=n.useState(!1),l=a?c.jsx(g,{className:i({color:"gray.300",w:4,h:4})}):c.jsx(C,{className:i({color:"gray.300",w:4,h:4})}),u=async()=>{const p=r.current?.innerText??"";await navigator.clipboard.writeText(p),s(!0);const m=setTimeout(()=>{o.current=null,s(!1)},700);o.current=m};return c.jsxs("div",{className:i({pos:"relative"}),children:[c.jsx("pre",{...t,ref:r,children:e}),c.jsx("button",{type:"button",className:i({pos:"absolute",top:4,right:4,p:2}),onClick:()=>{if(o.current)return!1;u()},children:l})]})}export{v as default};
