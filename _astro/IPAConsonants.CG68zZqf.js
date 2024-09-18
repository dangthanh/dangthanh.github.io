import{c as A}from"./css.5JzmkZ7k.js";import{c as h}from"./cx.BFURdk0p.js";import{_ as C}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{d as L,o as l,c as o,a as t,n,b,F as c,r as d,e as u,t as p}from"./runtime-core.esm-bundler.B76b3JA6.js";const P=L({__name:"IPAConsonants",setup(f,{expose:r}){r();const g=u(["Bilabial","Labio-dental","Lingua-dental","Alveolar","Post-alveolar","Palatal","Velar","Glottal"]),e=u(["Stop","Fricative","Afficate","Nasal","Liquid (Lateral)","Liquid (Rhotic)","Glide"]),m=u({Bilabial:["p, <b>b</b>","","","m","","","w"],"Labio-dental":["","f, <b>v</b>","","","","",""],"Lingua-dental":["","θ, <b>ð</b>","","","","",""],Alveolar:["t, <b>d</b>","s, <b>z</b>","","n","l","r",""],"Post-alveolar":["","ʃ, <b>ʒ</b>","tʃ, <b>dʒ</b>","","","",""],Palatal:["","","","","","","j"],Velar:["k, <b>g</b>","","","ŋ","","","w"],Glottal:["","h","","","","",""]}),s={consonantPlaces:g,manners:e,pulmonicConsonants:m,get css(){return A},get cx(){return h}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),v=["colspan"],k=["innerHTML"];function y(f,r,g,e,m,s){return l(),o("div",null,[t("table",{class:n(e.cx("s",e.css({tableLayout:"fixed",width:"100%"})))},[t("thead",null,[t("tr",null,[t("th",{class:n(e.css({p:2,bg:"white",border:"0"}))},null,2),t("th",{colspan:e.consonantPlaces.length,class:n(e.css({bg:"ui.table.background",p:2,borderWidth:1,borderColor:"ui.table.border",textAlign:"center"}))},r[0]||(r[0]=[t("strong",null,"PLACE (Tougue placement)",-1)]),10,v)]),t("tr",null,[t("th",{class:n(e.css({bg:"ui.table.background",p:2,borderWidth:1,borderColor:"ui.table.border",textAlign:"center"}))},r[1]||(r[1]=[t("strong",null,[b("MANNER "),t("br"),b(" (Air released)")],-1)]),2),(l(!0),o(c,null,d(e.consonantPlaces,(i,a)=>(l(),o("th",{class:n(e.css({bg:"ui.table.background",p:2,borderWidth:1,borderColor:"ui.table.border",textAlign:"center"})),key:a},p(i),3))),128))])]),t("tbody",null,[(l(!0),o(c,null,d(e.manners,(i,a)=>(l(),o("tr",{key:a},[t("td",{class:n(e.css({p:2,borderWidth:1,borderColor:"ui.table.border",textAlign:"left"}))},p(i),3),(l(!0),o(c,null,d(e.consonantPlaces,(_,x)=>(l(),o("td",{class:n(e.css({p:2,borderWidth:1,borderColor:"ui.table.border",textAlign:"center"})),key:x},[t("span",{innerHTML:e.pulmonicConsonants[_][a]},null,8,k)],2))),128))]))),128))])],2),t("div",{class:n(e.css({mt:4,textAlign:"left",textIndent:2}))},r[2]||(r[2]=[t("strong",null,"*Bolded",-1),b(" symbol is a voiced consonants. ")]),2)])}const F=C(P,[["render",y]]);export{F as default};