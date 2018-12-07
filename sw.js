importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js'
);

workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets'
  })
);

workbox.routing.registerRoute(
  'https//codepen.io/assets/embed/ei.js',
  workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
  'https//unpkg.com/vue@2.5.17/dist/vue.min.js',
  workbox.strategies.cacheFirst()
);

workbox.strategies.networkFirst();
workbox.googleAnalytics.initialize();
workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "77b6e7cd4119f10de9e16befc7f821f3"
  },
  {
    "url": "about/index.html",
    "revision": "c93ae4825dbfbe6a7cabe5c662969536"
  },
  {
    "url": "algolia.json",
    "revision": "83e3549e2e39a6161842b115ff988a62"
  },
  {
    "url": "archives/index.html",
    "revision": "a83848c26e80b81c6995ea97c174bbb9"
  },
  {
    "url": "blog/bat-dau-voi-vue/index.html",
    "revision": "818463955009dbd553e729d0f8c279af"
  },
  {
    "url": "blog/blog-va-toi/index.html",
    "revision": "bbbe189d0072619ceb3fe60e10803aa7"
  },
  {
    "url": "blog/checkboxes-jquery-plugin/index.html",
    "revision": "890929bf6cacbe1151e647f10d00d8e9"
  },
  {
    "url": "blog/css-triangles-mixin-trong-sass/index.html",
    "revision": "3da172806a778e95e302dca64eb9e0a6"
  },
  {
    "url": "blog/do-bong-mixin-voi-text-shadow/index.html",
    "revision": "1fd9b6fd6ed95790a905a45a0ea1b27b"
  },
  {
    "url": "blog/functional-css/index.html",
    "revision": "502c7a7c0c21066000b81f4c95dc5a04"
  },
  {
    "url": "blog/gioi-thieu-css3-transform/index.html",
    "revision": "bcee76089c584d6cc8fed32c166aa563"
  },
  {
    "url": "blog/html5-fullscreen-api/index.html",
    "revision": "03012b717ede74ac03f9be6af7ea0d9c"
  },
  {
    "url": "blog/html5-geolocation-va-leaflet/index.html",
    "revision": "6d817751519d8c3fe9cb93c9800b6e9f"
  },
  {
    "url": "blog/postcss/index.html",
    "revision": "628a447b096cc05986177cbc3e5f11c8"
  },
  {
    "url": "blog/redesign-va-nhung-gi-tui-hoc/index.html",
    "revision": "a3c8679dddc0e8faa74ca56fd14af8b2"
  },
  {
    "url": "blog/su-dung-icon-fonts/index.html",
    "revision": "0d8c224c7e55bdcf7858c5de45343413"
  },
  {
    "url": "blog/su-dung-sass/index.html",
    "revision": "a225023b92bc8bb0d5762bc5df8abaae"
  },
  {
    "url": "blog/tao-mp3-player-voi-html5-va-css3/index.html",
    "revision": "e523f43e981e7d9bf7442663743da8ff"
  },
  {
    "url": "blog/thu-thuat-su-dung-sublime-text-2/index.html",
    "revision": "0828d0bd8ac996ca83fe9b265d2ac008"
  },
  {
    "url": "blog/web-storage/index.html",
    "revision": "a72d7896b746b19e4317044270bf73f6"
  },
  {
    "url": "categories/index.html",
    "revision": "7b5dde171d1ed1ad70a51e61fc762c6a"
  },
  {
    "url": "categories/index.xml",
    "revision": "637d65dda8358e5f68f6959d44a764c1"
  },
  {
    "url": "css/anitya.min.4d35951a97d10f7f28a06a7e5f2542b647f98fbb1290c279c3cddbe17fc4fc34.css",
    "revision": "471dfe6430f04d1fe3cb29b0c193814a"
  },
  {
    "url": "images/blog_v1.png",
    "revision": "15869ac1296c611f8a961dff6487b3bb"
  },
  {
    "url": "images/blog_v2.png",
    "revision": "36f598eb7364a002b421c8f8f33171ff"
  },
  {
    "url": "images/favicon/android-icon-144x144.png",
    "revision": "f4b5153a2ee629a92a77392a6083d063"
  },
  {
    "url": "images/favicon/android-icon-192x192.png",
    "revision": "63e34a514f65df82ea06b1eee5b24672"
  },
  {
    "url": "images/favicon/android-icon-36x36.png",
    "revision": "e8e30536b3b359f9fa2137e65ce71e83"
  },
  {
    "url": "images/favicon/android-icon-48x48.png",
    "revision": "b8892a3ad65f28b98ba1b9145abe4eb5"
  },
  {
    "url": "images/favicon/android-icon-512x512.png",
    "revision": "63e34a514f65df82ea06b1eee5b24672"
  },
  {
    "url": "images/favicon/android-icon-72x72.png",
    "revision": "687eb895fbf37078a1c9d27c75b4965d"
  },
  {
    "url": "images/favicon/android-icon-96x96.png",
    "revision": "18b4cd4e7e5bc8b66d33fb5740dfd8be"
  },
  {
    "url": "images/favicon/apple-icon-114x114.png",
    "revision": "7025d6bab10a376ba0c5f34dd035e8e3"
  },
  {
    "url": "images/favicon/apple-icon-120x120.png",
    "revision": "2299ace92433195bc4e945b26c882d77"
  },
  {
    "url": "images/favicon/apple-icon-144x144.png",
    "revision": "f4b5153a2ee629a92a77392a6083d063"
  },
  {
    "url": "images/favicon/apple-icon-152x152.png",
    "revision": "2628af3dde0e88035d3572f9bd01dcf8"
  },
  {
    "url": "images/favicon/apple-icon-180x180.png",
    "revision": "6bfb7836ffa85211057f7084e1b0acf3"
  },
  {
    "url": "images/favicon/apple-icon-57x57.png",
    "revision": "14f1519c5a5e65efc2674d6ad34865fa"
  },
  {
    "url": "images/favicon/apple-icon-60x60.png",
    "revision": "f8733ac82ca52b1b226d0f4b9fdc8ba4"
  },
  {
    "url": "images/favicon/apple-icon-72x72.png",
    "revision": "687eb895fbf37078a1c9d27c75b4965d"
  },
  {
    "url": "images/favicon/apple-icon-76x76.png",
    "revision": "49a2160419d2b62f6b42f4ea5e3a8a8d"
  },
  {
    "url": "images/favicon/apple-icon-precomposed.png",
    "revision": "81abdbed764061ed12024aea0e4054d6"
  },
  {
    "url": "images/favicon/apple-icon.png",
    "revision": "81abdbed764061ed12024aea0e4054d6"
  },
  {
    "url": "images/favicon/browserconfig.xml",
    "revision": "1c32f682ad780c7a0ddb0d3608b14e8b"
  },
  {
    "url": "images/favicon/favicon-16x16.png",
    "revision": "dffa80cc118a99ca89f6658a1e8686c1"
  },
  {
    "url": "images/favicon/favicon-32x32.png",
    "revision": "c112ce3ad52a226a1b19538705d2561e"
  },
  {
    "url": "images/favicon/favicon-96x96.png",
    "revision": "18b4cd4e7e5bc8b66d33fb5740dfd8be"
  },
  {
    "url": "images/favicon/favicon.ico",
    "revision": "0fdea87b3347f8371cf143f3434fd6b5"
  },
  {
    "url": "images/favicon/manifest.json",
    "revision": "2d4884c8eeff85b55d730fa48ea10090"
  },
  {
    "url": "images/favicon/ms-icon-144x144.png",
    "revision": "f4b5153a2ee629a92a77392a6083d063"
  },
  {
    "url": "images/favicon/ms-icon-150x150.png",
    "revision": "61144027f42ac4f011313177506f2508"
  },
  {
    "url": "images/favicon/ms-icon-310x310.png",
    "revision": "594a160823468b80ae4d682e87e9e9be"
  },
  {
    "url": "images/favicon/ms-icon-70x70.png",
    "revision": "59ee754500d41511040f15e1227aab17"
  },
  {
    "url": "images/favicon/mstile-150x150.png",
    "revision": "c330b03ade52363eaf5fa3ea363b59fc"
  },
  {
    "url": "images/favicon/safari-pinned-tab.svg",
    "revision": "4b97844e43aa4f27137e607b0d426b72"
  },
  {
    "url": "images/icomoon.jpg",
    "revision": "ef562440f335f1a91db4cd9670828053"
  },
  {
    "url": "images/localstorage.jpg",
    "revision": "5b1560091fd1ab4bc90764dcdb08e6cb"
  },
  {
    "url": "images/package_control.jpg",
    "revision": "b6e48f09cf6f0cd78974c50bf87c4f05"
  },
  {
    "url": "images/portfolio/css_flag.jpg",
    "revision": "e3269774f190a3a12e1a1f7efd1e2ebe"
  },
  {
    "url": "images/portfolio/jquery-longshadow.png",
    "revision": "c8de9c68875a3730b17c8721bffabb30"
  },
  {
    "url": "images/portfolio/longshadow_jquery_plugin.jpg",
    "revision": "260e9d1fa9e970d935c2f1b3a40c416e"
  },
  {
    "url": "images/portfolio/postcss-longshadow.png",
    "revision": "114fb03efe8af415b1f74782cd37fd07"
  },
  {
    "url": "images/portfolio/tipsy-sass.png",
    "revision": "1cbd74e838dc59f12ddfdd619bdb6962"
  },
  {
    "url": "images/portfolio/vue-rollup-boilerplate.png",
    "revision": "8d35067a7de287752f8b6cac5e719f59"
  },
  {
    "url": "images/rubyinstaller.jpg",
    "revision": "a80f843adf350fd2773f724a2c3a5d37"
  },
  {
    "url": "images/sublime_text_2.jpg",
    "revision": "e74458efe434308c8f51045921cd3a42"
  },
  {
    "url": "images/weloveiconfonts.jpg",
    "revision": "90d15fc06086ee0e617502eb458ba0ec"
  },
  {
    "url": "index.html",
    "revision": "afe15d403ac9c21dceafc87164f37448"
  },
  {
    "url": "index.xml",
    "revision": "f12f2ac63e232806b1fe648c59c9d753"
  },
  {
    "url": "js/anitya.min.5c87bf176f344234e62db96f5e140b5ffe5ce25c0154c34d22e437f8c98b7ce8.js",
    "revision": "d84ff6d472352a34c89542a187aaf0a6"
  },
  {
    "url": "page/1/index.html",
    "revision": "61213a483ce765735be579330546d42a"
  },
  {
    "url": "page/2/index.html",
    "revision": "87af63b5bc62780e1a12417914582ce3"
  },
  {
    "url": "page/3/index.html",
    "revision": "99c7a926b678e762fb024e9d6a94be0f"
  },
  {
    "url": "page/4/index.html",
    "revision": "6e57d99de6391a200c26729bad7c4c9e"
  },
  {
    "url": "post/index.html",
    "revision": "0d8d8cf61f989fbb91a27de53a625f79"
  },
  {
    "url": "post/index.xml",
    "revision": "cefada6711ded68dffce2d7aea9fd72a"
  },
  {
    "url": "projects/index.html",
    "revision": "f9a7fc5b9900b5e70c8432038c2234ef"
  },
  {
    "url": "sitemap.xml",
    "revision": "066efa86a28658dfa7aa498db58f84dc"
  },
  {
    "url": "tags/css/index.html",
    "revision": "c5da53e18d58af3cd79611640af1ab77"
  },
  {
    "url": "tags/css/index.xml",
    "revision": "fed537b199a2b024c818a8d3b814ffee"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "04029dca57013c550415b7238cf20c47"
  },
  {
    "url": "tags/hugo/index.xml",
    "revision": "a4f021125987ebc41136d6997fcd9aec"
  },
  {
    "url": "tags/index.html",
    "revision": "078eaad47d2f608c82478b1f4a463f33"
  },
  {
    "url": "tags/index.xml",
    "revision": "0ff16c4ef3eabc9b7bf647fe2ba361e2"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "c24b8c92d4ee057826d69774eec19b99"
  },
  {
    "url": "tags/javascript/index.xml",
    "revision": "963937b26bf89fcc6380b547fa57bf2e"
  },
  {
    "url": "tags/personal/index.html",
    "revision": "856dff1b16b6581ece4f0a527733814e"
  },
  {
    "url": "tags/personal/index.xml",
    "revision": "8154a47603c69d06f69a5b6df4f280b5"
  },
  {
    "url": "tags/postcss/index.html",
    "revision": "9e9e78fd431a293a71217ebbe1dbe2df"
  },
  {
    "url": "tags/postcss/index.xml",
    "revision": "9e8f0defa09b0b9ed968c683e33f0e53"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "83abf84d8a4cda6d4c5a565e285c638f"
  },
  {
    "url": "tags/sass/index.xml",
    "revision": "a02456fd600ebebe51f39ca570372e3b"
  },
  {
    "url": "tags/tailwindcss/index.html",
    "revision": "fbe2c6182d052438ff1cf60c279627b2"
  },
  {
    "url": "tags/tailwindcss/index.xml",
    "revision": "66a5dbb6c56843cbeba941a767fec942"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "58bb7487646d9429ae62ccd6e4f861ca"
  },
  {
    "url": "tags/tools/index.xml",
    "revision": "a517ded81a68fc8cfddc9c2c97098286"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "3cf75c33404cb30dc7883f80382d6676"
  },
  {
    "url": "tags/vue/index.xml",
    "revision": "ac987b82f1b22400bf60cd77d593a2b3"
  }
]);
