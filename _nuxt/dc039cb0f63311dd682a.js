(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{205:function(t,e,n){var map={"./bat-dau-voi-vue.md":[181,9],"./blog-va-toi.md":[182,10],"./checkboxes-jquery-plugin.md":[183,11],"./classes-javascript-va-vue.md":[184,12],"./css-triangles-mixin-trong-sass.md":[185,13],"./do-bong-mixin-voi-text-shadow.md":[186,14],"./functional-css.md":[187,15],"./gioi-thieu-css3-transform.md":[188,16],"./html5-fullscreen-api.md":[189,17],"./html5-geolocation-va-leaflet.md":[190,18],"./postcss.md":[191,19],"./redesign-va-nhung-gi-tui-hoc.md":[192,20],"./su-dung-icon-fonts.md":[193,21],"./su-dung-sass.md":[194,22],"./tao-mp3-player-voi-html5-va-css3.md":[195,23],"./thu-thuat-su-dung-sublime-text-2.md":[196,24],"./tim-kiem-voi-algolia-hugo-va-vue.md":[197,25],"./web-storage.md":[198,26]};function r(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],r=e[0];return n.e(e[1]).then((function(){return n.t(r,7)}))}r.keys=function(){return Object.keys(map)},r.id=205,t.exports=r},211:function(t,e,n){"use strict";n.r(e);n(30);var r=n(10),o={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,e.next=3,n(205)("./".concat(r.slug,".md"));case 3:return o=e.sent,e.abrupt("return",{post:o});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Dang Thanh Blog - ".concat(this.post.attributes.title),meta:[{name:"author",content:"Dang Van Thanh"},{name:"description",property:"og:description",content:this.post.attributes.title,hid:"description"}],link:[{rel:"canonical",href:"https://dangthanh.org/".concat(this.post.attributes.slug)}]}},mounted:function(){document.querySelectorAll("a[href]").forEach((function(link){var t=link.getAttribute("href");"/"!==t.slice(0,1)&&-1===t.indexOf(window.location.host)&&(link.setAttribute("target","_blank"),link.setAttribute("rel","noopener noreferrer"))}))}},c=n(27),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"article-single"},[n("header",[n("h1",{staticClass:"text-4xl xl:text-5xl mb-3 font-semibold font-merriweather"},[t._v("\n      "+t._s(t.post.attributes.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"mb-4"},t._l(t.post.attributes.tags,(function(e){return n("span",{key:e,staticClass:"inline-block mr-2 text-gray-500 bg-gray-200 p-2 rounded uppercase text-xs leading-none"},[t._v(t._s(e))])})),0),t._v(" "),n("time",{staticClass:"text-gray-600 text-sm block"},[t._v(t._s(t.$dateFns.format(t.post.attributes.date,"MMMM dd, yyyy")))])]),t._v(" "),t._m(0),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.post.html)}})])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"max-w-2xl mx-auto px-5"},[e("hr",{staticClass:"border-b mt-6 mb-3 w-48 inline-block border-gray-300 border-solid"})])}],!1,null,null,null);e.default=component.exports}}]);