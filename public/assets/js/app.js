!function t(e,n,o){function l(s,i){if(!n[s]){if(!e[s]){var a="function"==typeof require&&require;if(!i&&a)return a(s,!0);if(r)return r(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var d=n[s]={exports:{}};e[s][0].call(d.exports,function(t){var n=e[s][1][t];return l(n?n:t)},d,d.exports,t,e,n,o)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)l(o[s]);return l}({1:[function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var l=t("./blog/zoom-vanilla"),r=(o(l),t("./blog/web-font-vanilla")),s=t("./blog/blog-vanilla"),i=t("./components/caniuse"),a=o(i),c=t("./components/skills"),d=o(c),m=t("./components/projects"),p=o(m);new Vue({el:"#app",components:{Caniuse:a.default,Skills:d.default,Projects:p.default}});(0,r.addWebfont)(),(0,s.addZoomImage)(),(0,s.addBlankLink)()},{"./blog/blog-vanilla":2,"./blog/web-font-vanilla":3,"./blog/zoom-vanilla":4,"./components/caniuse":5,"./components/projects":6,"./components/skills":7}],2:[function(t,e,n){"use strict";function o(){for(var t=document.querySelectorAll("article img"),e=0,n=t.length;e<n;e++){var o=t[e];"A"!==o.parentNode.tagName&&o.setAttribute("data-action","zoom")}}function l(){for(var t=document.querySelectorAll("a"),e=0,n=t.length;e<n;e++){var o=t[e];o.getAttribute("href").indexOf("http")>-1&&o.setAttribute("target","_blank")}}Object.defineProperty(n,"__esModule",{value:!0}),n.addZoomImage=o,n.addBlankLink=l},{}],3:[function(t,e,n){"use strict";function o(){WebFont.load({google:{families:["Muli","Source Code Pro"]}})}Object.defineProperty(n,"__esModule",{value:!0}),n.addWebfont=o},{}],4:[function(t,e,n){"use strict";+function(){function t(t){var e=t.getBoundingClientRect();return{top:e.top+document.body.scrollTop,left:e.left+document.body.scrollLeft}}function e(){function t(){document.body.addEventListener("click",function(t){"zoom"===t.target.getAttribute("data-action")&&"IMG"===t.target.tagName&&e(t)})}function e(t){if(t.stopPropagation(),!(document.body.classList.contains("zoom-overlay-open")||t.target.width>=window.innerWidth-n)){if(t.metaKey||t.ctrlKey)return l();r({forceDispose:!0}),u=o(t.target),u.zoomImage(),s()}}function l(){window.open(event.target.getAttribute("data-original")||event.target.currentSrc||event.target.src,"_blank")}function r(t){t=t||{forceDispose:!1},u&&(u[t.forceDispose?"dispose":"close"](),i(),u=null)}function s(){window.addEventListener("scroll",a),document.addEventListener("click",d),document.addEventListener("keyup",c),document.addEventListener("touchstart",m)}function i(){window.removeEventListener("scroll",a),document.removeEventListener("keyup",c),document.removeEventListener("click",d),document.removeEventListener("touchstart",m)}function a(t){null===f&&(f=window.scrollY);var e=f-window.scrollY;Math.abs(e)>=40&&r()}function c(t){27==t.keyCode&&r()}function d(t){t.stopPropagation(),t.preventDefault(),r()}function m(t){v=t.touches[0].pageY,t.target.addEventListener("touchmove",p)}function p(t){Math.abs(t.touches[0].pageY-v)<=10||(r(),t.target.removeEventListener("touchmove",p))}var u=null,f=null,v=null;return{listen:t}}var n=80,o=function(){function e(){var t=document.createElement("img");t.onload=function(){a=Number(t.height),c=Number(t.width),o()},t.src=p.currentSrc||p.src}function o(){u=document.createElement("div"),u.className="zoom-img-wrap",u.style.position="absolute",u.style.top=t(p).top+"px",u.style.left=t(p).left+"px",f=p.cloneNode(),f.style.visibility="hidden",p.style.width=p.offsetWidth+"px",p.parentNode.replaceChild(f,p),document.body.appendChild(u),u.appendChild(p),p.classList.add("zoom-img"),p.setAttribute("data-action","zoom-out"),d=document.createElement("div"),d.className="zoom-overlay",document.body.appendChild(d),l(),r()}function l(){p.offsetWidth;var t=c,e=a,o=t/p.width,l=window.innerHeight-n,r=window.innerWidth-n,s=t/e,i=r/l;m=t<r&&e<l?o:s<i?l/e*o:r/t*o}function r(){p.offsetWidth;var e=t(p),n=window.scrollY,o=n+window.innerHeight/2,l=window.innerWidth/2,r=e.top+p.height/2,s=e.left+p.width/2,i=o-r,a=l-s,c="scale("+m+")",d="translate("+a+"px, "+i+"px) translateZ(0)";p.style.webkitTransform=c,p.style.msTransform=c,p.style.transform=c,u.style.webkitTransform=d,u.style.msTransform=d,u.style.transform=d,document.body.classList.add("zoom-overlay-open")}function s(){return document.body.classList.remove("zoom-overlay-open"),document.body.classList.add("zoom-overlay-transitioning"),p.style.webkitTransform="",p.style.msTransform="",p.style.transform="",u.style.webkitTransform="",u.style.msTransform="",u.style.transform="",!1 in document.body.style?i():(p.addEventListener("transitionend",i),void p.addEventListener("webkitTransitionEnd",i))}function i(){p.removeEventListener("transitionend",i),p.removeEventListener("webkitTransitionEnd",i),u&&u.parentNode&&(p.classList.remove("zoom-img"),p.style.width="",p.setAttribute("data-action","zoom"),f.parentNode.replaceChild(p,f),u.parentNode.removeChild(u),d.parentNode.removeChild(d),document.body.classList.remove("zoom-overlay-transitioning"))}var a=null,c=null,d=null,m=null,p=null,u=null,f=null;return function(t){return p=t,{zoomImage:e,close:s,dispose:i}}}();e().listen()}()},{}],5:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={template:'\n\t\t<div class="browsers">\n\t    <h2 class="browser-title">{{ browserTitle}}</h2>\n\t    <div class="browser-categories">\n\t      <span class="browser-category" v-for="category in browserCategories">{{ category }}</span>\n\t    </div>\n\t    <div class="browser-support">\n\t      <div v-for="browser in browsers" class="browser-support-item" v-bind:class="{ \'no\': browser.version == 0 }">\n\t        <span v-if="browser.name == \'ie\'" class="browser-support-logo">\n\t          <svg viewBox="0 0 128 128">\n\t            <path fill="#1ebbee" d="M126.11 66.834c0-9.82-2.539-19.034-6.991-27.051 18.978-42.95-20.334-36.653-22.523-36.225-8.328 1.629-16.034 4.249-23.142 7.566-1.048-.059-2.102-.09-3.166-.09-26.525 0-48.729 18.501-54.411 43.303 13.98-15.684 23.765-22.012 29.624-24.544-.936.835-1.851 1.681-2.751 2.532l-.885.855c-.594.571-1.186 1.143-1.765 1.72-.344.343-.68.689-1.019 1.035-.514.522-1.026 1.044-1.527 1.569l-1.052 1.122c-.468.501-.934 1.003-1.39 1.506l-1.053 1.175c-.432.487-.861.974-1.285 1.463-.351.405-.698.81-1.042 1.216-.401.473-.797.947-1.189 1.42-.347.419-.692.838-1.031 1.256-.367.453-.726.905-1.083 1.356-.348.438-.695.875-1.034 1.312l-.953 1.246c-.356.469-.715.938-1.063 1.404l-.731.998c-2.205 3.01-4.221 5.961-6.041 8.796l-.013.021c-.479.747-.941 1.482-1.395 2.211l-.074.12c-.454.732-.892 1.451-1.319 2.164l-.045.075c-1.148 1.917-2.213 3.764-3.172 5.501-5.027 9.111-7.475 15.477-7.581 15.854-15.876 56.759 33.674 32.791 40.588 29.213 7.445 3.678 15.827 5.973 24.692 5.973 24.275-.001 44.925-15.906 52.612-36.906h-29.331c-4.34 7-12.694 12.049-22.293 12.049-14.065 0-25.466-11.049-25.466-24.049h79.842c.303-2 .458-4.73.458-7.166zm-112.584 49.983c-3.916-4.015-4.608-13.795 4.032-31.616 4.36 12.537 13.061 23.041 24.307 29.708-5.593 3.079-20.441 10.009-28.339 1.908zm32.161-57.817c.446-13 11.564-23.005 25.226-23.005 13.661 0 24.781 10.005 25.227 23.005h-50.453zm44.776-44.204c5.166-2.495 17.958-7.771 25.22-2.871 4.807 3.245 8.663 8.34 2.042 25.499-6.351-10.213-15.905-18.224-27.262-22.628z"></path>\n\t          </svg>\n\t        </span>\n\t        <span v-else-if="browser.name == \'chrome\'" class="browser-support-logo">\n\t          <svg viewBox="0 0 128 128">\n\t          <path fill="#ce4e4e" d="M64 37h54.186c-9.944-20-30.64-33.633-54.562-33.633-19.367 0-36.619 9.173-47.764 23.271l21.123 35.748c1.032-13.906 11.017-25.316 27.017-25.386zM120.126 41h-41.832c7.403 6 12.299 13.884 12.299 23.369 0 4.663-1.183 8.631-3.268 13.631h.015l-27.757 47.511c1.335.087 2.682-.022 4.04-.022 33.609 0 60.855-27.746 60.855-61.355.001-8-1.546-15.134-4.352-23.134zM63.624 91.445c-11.672 0-21.611-7.414-25.368-17.789l-25.186-43.071c-6.505 9.686-10.303 21.345-10.303 33.889 0 30.632 22.634 55.972 52.089 60.224l20.996-36.179c-3.671 1.871-7.827 2.926-12.228 2.926z"></path>\n\t          </svg>\n\t        </span>\n\t        <span v-else-if="browser.name == \'firefox\'" class="browser-support-logo">\n\t          <svg viewBox="0 0 128 128">\n\t            <path fill-rule="evenodd" clip-rule="evenodd" fill="#dd732a" d="M7.275 51.747l-3.221 2.579c-.477-1.941-.046-3.636.455-5.277 1.034-3.391 2.858-6.386 4.936-9.232.753-1.032 1.29-2.053 1.267-3.443-.085-4.919.436-9.778 2.122-14.443.86-2.379 2.022-4.592 4.008-6.514.783 3.826 1.493 7.503 3.586 10.261 1.51-1.339 3.021-2.613 4.457-3.965 8.624-8.111 18.778-13.179 30.482-14.847 14.681-2.093 28.23 1.056 40.53 9.432 1.162.792 2.496 1.333 3.763 1.962 5.825 2.893 10.222 7.198 12.976 13.119.462.991.82 2.03 1.227 3.046l.366-.063-1.584-9.499c6.35 8.911 8.353 18.801 8.895 29.179 1.186-1.655 1.177-3.615 1.819-5.49.211 1.362.475 2.719.624 4.087.586 5.377-.457 10.593-1.447 15.845-2.339 12.405-7.712 23.385-15.81 32.926-9.22 10.864-20.737 18.118-35.143 19.84-20.904 2.498-38.465-4.219-52.648-19.764-6.806-7.455-11.307-16.133-13.322-26.016-1.524-7.481-1.157-14.921 1.326-22.198l.389-1.116c.022-.065-.016-.15-.053-.409zm94.636-9.92l.396-.342 4.464 3.447c-.059-1.046-.014-2.147-.195-3.208-.795-4.628-3.6-7.983-7.086-10.862-4.369-3.608-9.383-6.09-14.579-8.244-.511-.212-1.012-.449-1.516-.674l.062-.522 7.325-.434c-2.706-4.465-7.356-5.711-12.068-6.993l.587-.311c-9.55-2.982-19.015-3.216-28.551-.776-8.871 2.27-22.19 10.357-24.248 14.72l.6-.146c3.348-.822 6.69-1.048 10.062-.07.367.106.979-.137 1.295-.421 3.159-2.829 6.672-5.044 10.742-6.297 1.282-.395 2.604-.658 3.908-.981-.108.441-.305.621-.521.77-4.22 2.9-7.064 6.714-7.857 11.877-.043.283 0 .708.181.879 1.869 1.758 3.724 3.537 5.693 5.176.681.566 1.641.946 2.524 1.086 1.706.271 3.449.322 5.178.444 1.063.075 1.751.826 1.37 1.687-.565 1.282-1.182 2.471-2.479 3.336-2.454 1.638-4.726 3.551-7.093 5.322-.591.443-.614.845-.307 1.499.567 1.208 1.109 2.447 1.473 3.727.46 1.618.616 3.291.196 5.002-1.337-.295-2.562-.586-3.794-.831-1.238-.246-2.486-.438-3.728-.667-1.552-.285-2.876.259-3.672 1.524-.923 1.468-.938 3.002.049 4.26 2.011 2.561 4.288 4.858 6.977 6.712 2.225 1.536 4.726 2.39 7.388 1.82 1.853-.396 3.668-1.189 5.354-2.081 5.112-2.701 10.879-1.79 14.416 2.414.633.751 1.012 1.603.475 2.485-.516.847-1.382 1.046-2.377.797-1.034-.259-1.99-.081-2.924.539-2.465 1.636-4.886 3.378-7.5 4.744-4.211 2.201-8.8 2.942-13.539 2.766-.488-.016-.976 0-1.635 0 .244.289.331.412.438.515 3.423 3.319 7.347 5.87 11.876 7.363 4.987 1.644 10.084 2.317 15.258.888 5.799-1.601 10.354-5.114 14.25-9.553 1.57-1.79 2.994-3.707 4.485-5.565l.373.081-1.316 8.981c7.149-8.746 7.377-18.745 6.371-29.287 2.057 2.291 2.681 4.977 3.86 7.669 2.408-8.36 1.217-16.32-.641-24.265z"></path>\n\t          </svg>\n\t        </span>\n\t        <span v-else-if="browser.name == \'safari\'" class="browser-support-logo">\n\t          <svg viewBox="0 0 128 128">\n\t            <path fill="#1b88ca" d="M64 1.5c-34.5 0-62.5 28-62.5 62.5s28 62.5 62.5 62.5 62.5-28 62.5-62.5-28-62.5-62.5-62.5zm56 57.9l-5 .4-.1-1 5-.4.1 1zm0 3.6v1h-9v-1h9zm-.6-8.4l-9.1 1.6-.2-1 9.1-1.6.2 1zm-1-4.8l-4.9 1.3-.3-1 4.9-1.3.3 1zm-1.4-4.7l-8.6 3.2-.3-.9 8.6-3.2.3.9zm-1.8-4.6l-4.5 2.1-.4-.9 4.5-2.1.4.9zm-2.3-4.3l-8 4.6-.5-.9 8-4.6.5.9zm-3.1-5l.6.8-4.1 2.9-.6-.8 4.1-2.9zm-2.4-3.1l-7.1 5.9-.6-.8 7.1-5.9.6.8zm-6.9-7l-5.9 7.1-.8-.6 5.9-7.1.8.6zm-4.7-3.6l.8.6-2.9 4.1-.8-.6 2.9-4.1zm-3.2-2.1l-4.6 8-.9-.5 4.6-8 .9.5zm-5.3-2.7l.9.4-2.1 4.5-.9-.4 2.1-4.5zm-4.5-1.8l.9.3-3.2 8.6-.9-.3 3.2-8.6zm-4.7-1.5l1 .3-1.3 4.9-1-.3 1.3-4.9zm-4.8-1l1 .2-1.6 9.1-1-.2 1.6-9.1zm-4.9-.6l1 .1-.4 5-1-.1.4-5zm-5.4.2h1v9h-1v-9zm-3.4-.2l.4 5-1 .1-.4-5 1-.1zm-4.9.6l1.6 9.1-1 .2-1.6-9.1 1-.2zm-4.8 1l1.3 4.9-1 .3-1.2-4.9.9-.3zm-4.7 1.5l3.2 8.6-.9.3-3.2-8.6.9-.3zm-4.5 1.8l2.1 4.5-.9.4-2.1-4.5.9-.4zm-4.4 2.2l4.6 8-.9.5-4.6-8 .9-.5zm-4.1 2.6l2.9 4.1-.8.6-2.9-4.1.8-.6zm-3.9 3l5.9 7.1-.8.6-5.9-7.1.8-.6zm-3.7 3.2l3.5 3.5-.7.8-3.5-3.5.7-.8zm-3.4 3.6l7.1 5.9-.6.8-7.1-5.9.6-.8zm-3 3.9l4.1 2.9-.6.8-4.1-2.9.6-.8zm-2.6 4.1l8 4.6-.6.9-8-4.6.6-.9zm-2.3 4.3l4.5 2.1-.4.9-4.5-2.1.4-.9zm-1.9 4.6l8.6 3.2-.3.9-8.7-3.2.4-.9zm-1.6 4.6l4.9 1.3-.3 1-4.9-1.3.3-1zm-1.1 4.8l9.1 1.6-.2 1-9.1-1.6.2-1zm-.7 4.9l5 .4-.1 1-5-.4.1-1zm9 4.5v1h-9v-1h9zm-9 5.3l5-.4.1 1-5 .4-.1-1zm.6 4.8l9.1-1.6.2 1-9.1 1.6-.2-1zm1 4.8l4.9-1.3.3 1-4.9 1.3-.3-1zm1.4 4.7l8.6-3.2.3.9-8.6 3.2-.3-.9zm1.8 4.6l4.5-2.1.4.9-4.5 2.1-.4-.9zm2.3 4.4l8-4.6.5.9-8 4.6-.5-.9zm3.1 4.9l-.6-.8 4.1-2.9.6.8-4.1 2.9zm9.5-2.8l.6.8-7.1 5.9-.6-.8 7.1-5.9zm-.2 12.9l5.9-7.1.8.6-5.9 7.1-.8-.6zm4.7 3.6l-.8-.6 2.9-4.1.8.6-2.9 4.1zm3.2 2.1l4.6-8 .9.5-4.6 8-.9-.5zm5.3 2.7l-.9-.4 2.1-4.5.9.4-2.1 4.5zm4.5 1.9l-.9-.3 3.2-8.6.9.3-3.2 8.6zm4.7 1.4l-1-.3 1.3-4.9 1 .3-1.3 4.9zm4.8 1l-1-.2 1.6-9.1 1 .2-1.6 9.1zm4.9.6l-1-.1.4-5 1 .1-.4 5zm4.4.1h-1v-9h1v9zm4.4-.1l-.4-5 1-.1.4 5-1 .1zm-47.4-13.2l37.7-48 48-37.7-36.8 48.9-48.9 36.8zm52.3 12.6l-1.6-9.1 1-.2 1.6 9.1-1 .2zm4.8-1l-1.3-4.9 1-.3 1.2 4.9-.9.3zm4.7-1.4l-3.2-8.6.9-.3 3.2 8.6-.9.3zm4.5-1.9l-2.1-4.5.9-.4 2.1 4.5-.9.4zm4.4-2.2l-4.6-8 .9-.5 4.6 8-.9.5zm4.1-2.6l-2.9-4.1.8-.6 2.9 4.1-.8.6zm3.9-2.9l-5.9-7.1.8-.6 5.9 7.1-.8.6zm3.7-3.3l-3.5-3.5.7-.7 3.5 3.5-.7.7zm3.4-3.6l-7.1-5.9.6-.8 7.1 5.9-.6.8zm3-3.9l-4.1-2.9.6-.8 4.1 2.9-.6.8zm2.6-4.1l-8-4.6.5-.9 8 4.6-.5.9zm2.3-4.3l-4.5-2.1.4-.9 4.5 2.1-.4.9zm1.9-4.5l-8.6-3.2.3-.9 8.6 3.2-.3.9zm1.6-4.7l-4.9-1.3.3-1 4.9 1.3-.3 1zm1.1-4.8l-9.1-1.6.2-1 9.1 1.6-.2 1zm.7-4.8l-5-.4.1-1 5 .4-.1 1z"></path>\n\t          </svg>\n\t        </span>\n\t        <span v-if="browser.version > 0" class="browser-support-version">{{ browser.version | plus }}</span>\n\t        <span v-else class="browser-support-version">-</span>\n\t      </div>\n\t    </div>\n\t  </div>\n\t',props:{features:{type:String,required:!0}},data:function(){return{browserTitle:"",browserCategories:[],browsers:[{name:"ie",version:0},{name:"chrome",version:0},{name:"firefox",version:0},{name:"safari",version:0}]}},filters:{capitalize:function(t){return t?(t=t.toString(),2===t.length?t.toUpperCase():t.charAt(0).toUpperCase()+t.slice(1)):""},plus:function(t){return t?(t=t.toString(),t+"+"):""}},mounted:function(){var t=this,e="https://raw.githubusercontent.com/Fyrd/caniuse/master/features-json/"+t.features+".json";fetch(e).then(function(t){return t.json()}).then(function(e){var n=e.stats;t.browserTitle=e.title,t.browserCategories=e.categories;for(var o=0,l=t.browsers.length;o<l;o++){var r=t.browsers[o].name,s=n[r];for(var i in s)if(s[i].indexOf("y")>-1||s[i].indexOf("x")>-1){t.browsers[o].version=i;break}}})}};n.default=o},{}],6:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={template:'\n\t\t<div class="projects">\n\t\t\t<div class="project" v-for="project in projects">\n\t\t\t\t<h2 class="fl w-100 mt3 f5 ttu tracked fw3">{{ project.title }}</h2>\n\t\t\t\t<div class="cf">\n\t\t\t\t\t<article class="pv2 fl w-100 w-50-l pr0 pr4-l" v-for="item in project.items">\n\t\t\t\t\t\t<h3 class="f4-ns fw3 mb2 mt0"><a v-bind:href="item.urlLink" class="link dim black">{{ item.name }}</a></h3>\n\t\t\t\t\t\t<a v-bind:href="item.urlLink" class="db ba b--black-10">\n\t\t\t\t\t\t\t<img v-bind:src="item.urlImg | portfolioUrl" alt="" class="w-100 db v-mid">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</article>\n\t\t\t\t</div>\n\t\t\t</div>\n    </div>\n\t',filters:{portfolioUrl:function(t){return t?(t=t.toString(),"/assets/images/portfolio/"+t):""}},data:function(){return{projects:[{title:"Sass/PostCSS",items:[{name:"Tipsy.sass",urlLink:"https://github.com/dangvanthanh/tipsy.sass",urlImg:"tipsy-sass.png"},{name:"Postcss-longshadow-text",urlLink:"https://www.npmjs.com/package/postcss-longshadow-text",urlImg:"postcss-longshadow.png"}]},{title:"Vue.js",items:[{name:"Vue-rollup-boilerplate",urlLink:"https://github.com/dangvanthanh/vue-rollup-boilerplate",urlImg:"vue-rollup-boilerplate.png"}]},{title:"jQuery",items:[{name:"jquery.longShadow",urlLink:"https://github.com/dangvanthanh/jquery.longShadow",urlImg:"jquery-longshadow.png"}]}]}}};n.default=o},{}],7:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={template:'\n\t<div class="programs">\n\t\t<div class="programming" v-for="skill in skills">\n\t\t\t<div class="programming-language">\n\t\t\t\t<h4 class="programming-title mb0 mt0">{{ skill.name }}</h4>\n\t\t\t\t<div class="programming-content">\n\t\t\t\t\t<div class="programming-icon" v-html="skill.icon"></div>\n\t\t\t\t\t<div class="programming-process">\n\t\t\t\t\t\t<div class="programming-percent" v-bind:style="{ background: skill.color, width: skill.percent + \'%\' }"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t',data:function(){return{skills:[{name:"HTML/HTML5",icon:'\n\t\t\t\t\t\t<svg viewBox="0 0 128 128">\n\t            <path fill="#E44D26" d="M19.037 113.876l-10.005-112.215h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878h-44.937z"></path><path fill="#EBEBEB" d="M64 52.455h-18.212l-1.258-14.094h19.47v-13.762h-34.511l.33 3.692 3.382 37.927h30.799zM64 88.198l-.061.017-15.327-4.14-.979-10.975h-13.817l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zM63.952 24.599v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>\n\t          </svg>\n\t\t\t\t\t',percent:90,color:"#e44d26"},{name:"CSS/CSS3",icon:'\n\t\t\t\t\t\t<svg viewBox="0 0 128 128">\n\t            <path fill="#1572B6" d="M18.814 114.123l-10.054-112.771h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163h-19.566v-13.831h34.681999999999995l-.332 3.711-3.4 38.114h-30.95v-13.831z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031h-13.882l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881h-13.876z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831000000000001h-33.407999999999994l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.431v13.831000000000001h-15.209l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>\n\t          </svg>\n\t\t\t\t\t',percent:85,color:"#1572b6"},{name:"Sass/PostCSS",icon:'\n\t\t\t\t\t\t<svg viewBox="0 0 128 128">\n\t            <path fill-rule="evenodd" clip-rule="evenodd" fill="#CB6699" d="M1.219 56.156c0 .703.207 1.167.323 1.618.756 2.933 2.381 5.45 4.309 7.746 2.746 3.272 6.109 5.906 9.554 8.383 2.988 2.148 6.037 4.248 9.037 6.38.515.366 1.002.787 1.561 1.236-.481.26-.881.489-1.297.7-3.959 2.008-7.768 4.259-11.279 6.986-2.116 1.644-4.162 3.391-5.607 5.674-2.325 3.672-3.148 7.584-1.415 11.761.506 1.22 1.278 2.274 2.367 3.053.353.252.749.502 1.162.6 1.058.249 2.136.412 3.207.609l3.033-.002c3.354-.299 6.407-1.448 9.166-3.352 4.312-2.976 7.217-6.966 8.466-12.087.908-3.722.945-7.448-.125-11.153-.099-.344-.224-.681-.354-1.014-.13-.333-.283-.657-.463-1.072l6.876-3.954.103.088c-.125.409-.258.817-.371 1.23-.817 2.984-1.36 6.02-1.165 9.117.208 3.3 1.129 6.389 3.061 9.146 1.562 2.23 5.284 2.313 6.944.075.589-.795 1.16-1.626 1.589-2.513 1.121-2.315 2.159-4.671 3.23-7.011l.187-.428c-.077 1.108-.167 2.081-.208 3.055-.064 1.521.025 3.033.545 4.48.445 1.238 1.202 2.163 2.62 2.326.97.111 1.743-.333 2.456-.896 1.114-.879 2.019-1.965 2.691-3.199 1.901-3.491 3.853-6.961 5.576-10.54 1.864-3.871 3.494-7.855 5.225-11.792l.286-.698c.409 1.607.694 3.181 1.219 4.671.61 1.729 1.365 3.417 2.187 5.058.389.775.344 1.278-.195 1.928-2.256 2.72-4.473 5.473-6.692 8.223-.491.607-.98 1.225-1.389 1.888-.247.403-.411.894-.48 1.364-.133.898.422 1.764 1.383 1.971.878.189 1.813.259 2.708.193 3.097-.228 5.909-1.315 8.395-3.157 3.221-2.386 4.255-5.642 3.475-9.501-.211-1.047-.584-2.065-.947-3.074-.163-.455-.174-.774.123-1.198 2.575-3.677 4.775-7.578 6.821-11.569.081-.157.164-.314.306-.482.663 3.45 1.661 6.775 3.449 9.792-.912.879-1.815 1.676-2.632 2.554-1.799 1.934-3.359 4.034-4.173 6.595-.35 1.104-.619 2.226-.463 3.405.242 1.831 1.742 3.021 3.543 2.604 3.854-.892 7.181-2.708 9.612-5.925 1.636-2.166 1.785-4.582 1.1-7.113-.188-.688-.411-1.365-.651-2.154.951-.295 1.878-.649 2.837-.868 4.979-1.136 9.904-.938 14.702.86 2.801 1.05 5.064 2.807 6.406 5.571 1.639 3.379.733 6.585-2.452 8.721-.297.199-.637.356-.883.605-.151.153-.242.459-.205.67.021.123.346.277.533.275 1.047-.008 1.896-.557 2.711-1.121 2.042-1.413 3.532-3.314 3.853-5.817l.063-.188-.077-1.63c-.031-.094.023-.187.016-.258-.434-3.645-2.381-6.472-5.213-8.688-3.28-2.565-7.153-3.621-11.249-3.788-3.338-.136-6.619.36-9.765 1.503-.897.325-1.786.71-2.688 1.073-.121-.219-.251-.429-.358-.646-.926-1.896-2.048-3.708-2.296-5.882-.176-1.544-.392-3.086-.025-4.613.353-1.469.813-2.913 1.246-4.362.223-.746.066-1.164-.646-1.5-.248-.117-.518-.219-.786-.258-1.75-.254-3.476-.109-5.171.384-.6.175-1.036.511-1.169 1.175-.076.381-.231.746-.339 1.122-.443 1.563-.757 3.156-1.473 4.645-1.794 3.735-3.842 7.329-5.938 10.897-.227.385-.466.763-.752 1.23-.736-1.54-1.521-2.922-1.759-4.542-.269-1.832-.481-3.661-.025-5.479.339-1.356.782-2.687 1.19-4.025.193-.636.104-.97-.472-1.305-.291-.169-.62-.319-.948-.368-1.815-.269-3.603-.128-5.354.438-.543.176-.828.527-.994 1.087-.488 1.652-.904 3.344-1.589 4.915-2.774 6.36-5.628 12.687-8.479 19.013-.595 1.321-1.292 2.596-1.963 3.882-.17.326-.418.613-.63.919-.17-.201-.236-.339-.235-.477.005-.813-.092-1.65.063-2.436.469-2.378 1.009-4.743 1.578-7.099.47-1.946 1.017-3.874 1.538-5.807.175-.647.178-1.252-.287-1.796-.781-.911-2.413-1.111-3.381-.409l-.428.242.083-.69c.204-1.479.245-2.953-.161-4.41-.506-1.816-1.802-2.861-3.686-2.803-.878.027-1.8.177-2.613.497-3.419 1.34-6.048 3.713-8.286 6.568-.203.259-.471.495-.757.654-2.893 1.604-5.795 3.188-8.696 4.778l-3.229 1.769c-.866-.826-1.653-1.683-2.546-2.41-2.727-2.224-5.498-4.393-8.244-6.592-2.434-1.949-4.792-3.979-6.596-6.56-1.342-1.92-2.207-4.021-2.29-6.395-.105-3.025.753-5.789 2.293-8.362 1.97-3.292 4.657-5.934 7.611-8.327 3.125-2.53 6.505-4.678 10.008-6.639 4.901-2.743 9.942-5.171 15.347-6.774 5.542-1.644 11.165-2.585 16.965-1.929 2.28.258 4.494.78 6.527 1.895 1.557.853 2.834 1.97 3.428 3.716.586 1.718.568 3.459.162 5.204-.825 3.534-2.76 6.447-5.195 9.05-3.994 4.267-8.866 7.172-14.351 9.091-3.165 1.107-6.421 1.802-9.765 2.083-2.729.229-5.401-.013-7.985-.962-1.711-.629-3.201-1.591-4.399-2.987-.214-.25-.488-.521-.887-.287-.391.23-.46.602-.329.979.219.626.421 1.278.762 1.838.857 1.405 2.107 2.424 3.483 3.298 2.643 1.681 5.597 2.246 8.66 2.377 4.648.201 9.183-.493 13.654-1.74 6.383-1.78 11.933-4.924 16.384-9.884 3.706-4.13 6.353-8.791 6.92-14.419.277-2.747-.018-5.438-1.304-7.944-1.395-2.715-3.613-4.734-6.265-6.125-3.862-2.025-8.03-3.204-12.332-3.204h-4.31c-5.21 0-10.247 1.493-15.143 3.274-3.706 1.349-7.34 2.941-10.868 4.703-7.683 3.839-14.838 8.468-20.715 14.833-2.928 3.171-5.407 6.67-6.833 10.79-.417 1.206-.813 2.499-1.111 3.746m27.839 36.013c-.333 4.459-2.354 8.074-5.657 11.002-1.858 1.646-3.989 2.818-6.471 3.23-.9.149-1.821.185-2.694-.188-1.245-.532-1.524-1.637-1.548-2.814-.037-1.876.62-3.572 1.521-5.186 1.176-2.104 2.9-3.708 4.741-5.206 2.9-2.361 6.046-4.359 9.268-6.245l.243-.1c.498 1.84.735 3.657.597 5.507zm25.158-19.379c-.235 1.424-.529 2.849-.945 4.229-1.438 4.777-3.285 9.406-5.282 13.973-.369.845-.906 1.616-1.373 2.417-.072.124-.179.231-.283.334-.578.571-1.126.541-1.418-.206-.34-.868-.549-1.797-.729-2.716-.121-.617-.092-1.265-.13-1.897.039-4.494 1.41-8.578 3.736-12.38.959-1.568 2.003-3.062 3.598-4.054.49-.305 1.04-.55 1.595-.706.85-.239 1.372.154 1.231 1.006zm17.164 21.868l6.169-7.203c.257 2.675-4.29 8.015-6.169 7.203zm19.703-4.847c-.436.25-.911.43-1.358.661-.409.212-.544-.002-.556-.354-.008-.239.027-.489.093-.721.833-2.938 2.366-5.446 4.647-7.486l.16-.082c1.085 3.035-.169 6.368-2.986 7.982z"></path>\n\t          </svg>\n\t\t\t\t\t',percent:85,color:"#cb6699"},{name:"JavaScript",icon:'\n\t\t\t\t\t\t<svg viewBox="0 0 128 128">\n\t            <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>\n\t          </svg>\n\t\t\t\t\t',percent:75,color:"#f0db4f"},{name:"Vue.js",icon:"",percent:78,color:"#41b883"},{name:"D3.js",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-201.009" y1="376.844" x2="-200.098" y2="375.873" gradientTransform="matrix(82.4907 0 0 -81.4303 16634.416 30700.326)"><stop offset="0" stop-color="#f9a03c"/><stop offset="1" stop-color="#f7974e"/></linearGradient><path fill="url(#a)" d="M126.334 90.59a37.18 37.18 0 0 0 .128-1.647C126.5 88.288 87.094 50.9 87.094 50.9h-.942s39.94 42.13 40.182 39.69z"/><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="-199.257" y1="373.615" x2="-197.514" y2="371.916" gradientTransform="matrix(40.2105 0 0 -40.4122 8003.203 15127)"><stop offset="0" stop-color="#f9a03c"/><stop offset="1" stop-color="#f7974e"/></linearGradient><path fill="url(#b)" d="M42.26 77.62a26.282 26.282 0 0 1-.328.702c-1.256 2.62 17.585 21.038 19.1 18.8.07-.098.14-.202.208-.3.077-.118.152-.23.228-.348 1.213-1.84-18.67-20.05-19.207-18.854z"/><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="-199.836" y1="374.252" x2="-198.286" y2="372.475" gradientTransform="matrix(41.0403 0 0 -39.9333 8224.5 14997.683)"><stop offset="0" stop-color="#f9a03c"/><stop offset="1" stop-color="#f7974e"/></linearGradient><path fill="url(#c)" d="M68.886 103.52c-.053.118-.433.76-.78 1.098-.058.117 18.394 18.417 18.394 18.417h1.66c.002 0-17.32-18.74-19.274-19.514z"/><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="-201.143" y1="379.263" x2="-200.795" y2="378.804" gradientTransform="matrix(255.8347 0 0 -242.016 51476.605 91789.102)"><stop offset="0" stop-color="#f26d58"/><stop offset="1" stop-color="#f9a03c"/></linearGradient><path fill="url(#d)" d="M126.488 88.61c-.863 19.13-16.69 34.425-36.024 34.425H87.85l-19.31-19.022a69.313 69.313 0 0 0 4.38-6.98h17.544c5.55 0 10.064-4.514 10.064-10.065 0-5.55-4.515-10.064-10.064-10.064H80.082A69.373 69.373 0 0 0 81.306 64c0-4.48-.44-8.852-1.26-13.1h6.45l39.88 39.295a48.62 48.62 0 0 0 .112-1.585zM11.962 4.772H1.472v26.003h10.49c18.32 0 33.23 14.903 33.23 33.225 0 4.984-1.113 9.716-3.088 13.964L61.24 96.82A58.882 58.882 0 0 0 71.2 64c0-32.658-26.574-59.228-59.236-59.228z"/><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="-200.962" y1="378.553" x2="-200.452" y2="378.218" gradientTransform="matrix(160.7307 0 0 -174.8133 32360.78 66184.883)"><stop offset="0" stop-color="#b84e51"/><stop offset="1" stop-color="#f68e48"/></linearGradient><path fill="url(#e)" d="M90.464 4.772H47.986a69.81 69.81 0 0 1 24.82 26.003h17.658c5.55 0 10.064 4.513 10.064 10.064 0 5.55-4.515 10.06-10.064 10.06h-3.968l39.88 39.296a36.65 36.65 0 0 0 .152-3.228c0-8.766-3.146-16.807-8.368-23.066 5.223-6.256 8.368-14.3 8.368-23.063 0-19.887-16.177-36.068-36.064-36.068z"/><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="-200.619" y1="377.137" x2="-200.595" y2="376.532" gradientTransform="matrix(176.7653 0 0 -92.6293 35504.598 35022.56)"><stop offset="0" stop-color="#f9a03c"/><stop offset="1" stop-color="#f7974e"/></linearGradient><path fill="url(#f)" d="M87.85 123.035H48.29a69.95 69.95 0 0 0 20.25-19.022l19.31 19.022zM61.24 96.82L42.106 77.965c-5.287 11.362-16.807 19.264-30.143 19.264H1.472v26h10.49c20.53 0 38.648-10.5 49.28-26.407z"/></svg>',percent:50,color:"#f5854b"},{name:"Gulp",icon:'\n\t\t\t\t\t\t<svg viewBox="0 0 128 128">\n\t            <path fill-rule="evenodd" clip-rule="evenodd" fill="#EB4A4B" d="M36.965 35.459c.877 9.232 1.747 18.412 2.637 27.798 1.451-2.495 2.501-4.888 4.085-6.848 1.475-1.826 3.334-3.511 5.357-4.678 2.641-1.524 6.104-.089 6.96 2.614.23.725-.319 1.697-.511 2.556-.646-.341-1.479-.529-1.901-1.051-1.793-2.217-2.873-2.479-4.856-.563-3.699 3.576-5.779 8.056-6.573 13.091-.153.974.456 2.067.713 3.105 1.011-.348 2.185-.476 3.002-1.084 2.656-1.977 4.302-4.666 5.21-7.88.197-.696 1.265-1.145 1.933-1.708.32.658 1.05 1.433.897 1.954-1.407 4.84-2.934 9.649-4.536 14.429-.162.484-1.051.725-1.604 1.079-.223-.636-.692-1.302-.617-1.901.168-1.358.605-2.683.91-3.927l-7.24 3.333c.405 4.622.825 9.807 1.323 14.985.382 3.954 1.029 4.978 4.923 5.728 4.544.875 9.173 1.434 13.792 1.774 6.825.503 13.59-.119 20.23-1.904 2.472-.664 3.458-2.29 3.635-4.717.162-2.235.524-4.456.775-6.685.493-4.391.972-8.783 1.476-13.358-1.667 1.056-2.978 2.238-4.511 2.739-1.116.365-2.524-.169-3.803-.303.245-1.174.23-2.497.796-3.487.922-1.618 2.224-3.021 3.364-4.515l-.491-.591c-.817.483-1.832.8-2.413 1.485-1.182 1.394-2.339 2.886-3.13 4.52-1.324 2.735-2.333 5.622-3.518 8.426-.515 1.216-.959 3.076-2.684 2.366-1.845-.761-.547-2.386-.114-3.542.689-1.844 1.599-3.606 2.215-4.962-1.746.208-3.516.459-5.294.614-.752.064-1.646-.348-2.261-.07-2.045.924-3.341.553-3.766-1.711-.947.615-1.749 1.448-2.694 1.672-1.147.273-2.703.452-3.543-.121-.673-.459-.918-2.184-.688-3.196.457-2.012 1.311-3.946 2.122-5.859.502-1.185 1.007-3.077 2.701-2.253 1.674.813.154 2.185-.232 3.286-.599 1.702-1.209 3.401-1.813 5.101l.96.58c.914-.794 2.053-1.441 2.693-2.415 1.048-1.592 1.681-3.452 2.673-5.086.411-.677 1.296-1.065 1.967-1.584.136.862.462 1.748.354 2.58-.107.841-.698 1.61-.981 2.442-.425 1.246-.768 2.52-1.2 3.969 2.043.078 2.918-.782 3.495-2.299 1.826-4.793 3.672-9.581 5.679-14.3.343-.808 1.509-1.264 2.296-1.884.091.974.525 2.078.216 2.899-1.645 4.349-3.492 8.62-5.228 12.935-.293.727-.387 1.534-.572 2.304 3.059-1.375 5.612-2.895 6.544-6.146.228-.79 1.162-1.377 1.771-2.058l1.416 1.5c.43-.362.824-.774 1.291-1.075 1.47-.947 3.053-1.782 4.603-.315 1.604 1.517.39 2.995-.448 4.307-.912 1.431-2.029 2.73-3.057 4.086 2.312-1.49 5.469-2.158 5.889-5.378 1.024-7.865 1.924-15.746 2.837-23.625.271-2.332.416-4.679.627-7.109-18.21 4.409-36.029 4.436-54.088-.069zM44.781 96.828c.877 2.317 2.209 4.593 2.558 7.011.737 5.147.924 10.372 1.446 15.554.076.755.565 1.792 1.175 2.124 8.98 4.88 18.047 5.726 27.209.389 1.367-.796 1.62-1.847 1.797-3.325.857-7.181-1.051-14.798 3.54-21.56-12.856 3.189-25.403 3.288-37.725-.193zM75.772 36.748c4.362-.421 8.671-1.445 12.985-2.291.813-.159 1.535-.778 2.299-1.185-1.007-.885-1.878-1.311-2.788-1.418-4.53-.535-9.076-.947-13.603-1.508-.684-.085-1.905-.929-1.854-1.083 1.321-3.98 1.256-8.485 4.254-11.839 3.789-4.24 7.617-8.443 11.416-12.648-2.826-3.04-2.864-3.044-5.425-.383-1.448 1.504-2.771 3.15-4.342 4.512-5.813 5.038-9.896 11.005-10.692 18.872-.183 1.805-1.174 2.457-3.069 2.485-6.256.091-12.519.263-18.761.674-3.093.203-6.148.997-9.221 1.523l-.028 1.149c1.923.593 3.809 1.372 5.773 1.749 10.944 2.098 21.991 2.458 33.056 1.391zm-3.496-2.748c-2.477 2-4.524 2-6.501 0h6.501z"></path>\n\t          </svg>\n\t\t\t\t\t',percent:75,color:"#eb4a4b"},{name:"Git/Github",icon:'\n\t\t\t\t\t\t<svg viewBox="0 0 128 128">\n\t            <path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>\n\t          </svg>\n\t\t\t\t\t',
percent:75,color:"#000"},{name:"Node.js",icon:'\n\t\t\t\t\t\t<svg viewBox="0 0 128 128">\n\t            <path fill="#83CD29" d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>\n\t          </svg>\n\t\t\t\t\t',percent:50,color:"#83cd29"}]}}};n.default=o},{}]},{},[1]);