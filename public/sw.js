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
    "revision": "e9fe99bdce2aaebeb48a4e135675107f"
  },
  {
    "url": "about/index.html",
    "revision": "19d541e8769090369db6fd40534319c0"
  },
  {
    "url": "algolia.json",
    "revision": "83e3549e2e39a6161842b115ff988a62"
  },
  {
    "url": "archives/index.html",
    "revision": "34c53526ee1b826c028ad77385a3d3ac"
  },
  {
    "url": "blog/bat-dau-voi-vue/index.html",
    "revision": "f03c29397a40197c2fe9c95cebf6f68b"
  },
  {
    "url": "blog/blog-va-toi/index.html",
    "revision": "3b75b1199fa82ca7d49ad7ccc2832655"
  },
  {
    "url": "blog/checkboxes-jquery-plugin/index.html",
    "revision": "9e9cbd3cd0916affce643eac96b5a340"
  },
  {
    "url": "blog/css-triangles-mixin-trong-sass/index.html",
    "revision": "03dca512f4f1bc6a2c6e22c1ef4d0e4d"
  },
  {
    "url": "blog/do-bong-mixin-voi-text-shadow/index.html",
    "revision": "1ab4c4146a05fc13d0880a8fd7da0d25"
  },
  {
    "url": "blog/functional-css/index.html",
    "revision": "b75e807fe67faf0ebceca468fb5015e8"
  },
  {
    "url": "blog/gioi-thieu-css3-transform/index.html",
    "revision": "39ad380f12aca70bd4cd4f393651dfe7"
  },
  {
    "url": "blog/html5-fullscreen-api/index.html",
    "revision": "23ca12b5a05205696e618dc041fcf1fe"
  },
  {
    "url": "blog/html5-geolocation-va-leaflet/index.html",
    "revision": "32c0b58aebf103114d5d13caecb679eb"
  },
  {
    "url": "blog/postcss/index.html",
    "revision": "af73acdadd11322a3684e242d3e67481"
  },
  {
    "url": "blog/redesign-va-nhung-gi-tui-hoc/index.html",
    "revision": "530e7a91f05f1c5b7f0d0834826fbb15"
  },
  {
    "url": "blog/su-dung-icon-fonts/index.html",
    "revision": "0d93a633f084326f924f0ed3b73f8da5"
  },
  {
    "url": "blog/su-dung-sass/index.html",
    "revision": "31a30db3b9ca6bd62b390808d4787639"
  },
  {
    "url": "blog/tao-mp3-player-voi-html5-va-css3/index.html",
    "revision": "d7b3cdd9315c95b50d403abcb4562b34"
  },
  {
    "url": "blog/thu-thuat-su-dung-sublime-text-2/index.html",
    "revision": "c8f97785d578696e00e3a2ec2b49f35c"
  },
  {
    "url": "blog/web-storage/index.html",
    "revision": "bed93207138a52029c1b96f33eb454fa"
  },
  {
    "url": "categories/index.html",
    "revision": "e5f50e1050b0a432829ef93a5b3a5a8d"
  },
  {
    "url": "categories/index.xml",
    "revision": "637d65dda8358e5f68f6959d44a764c1"
  },
  {
    "url": "css/anitya.min.5cd3b75da990dab3edebac43f693697b4de178a074c8f97e10d6e41a5a08cf84.css",
    "revision": "43aad11386e375f34156d2161c25d1e7"
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
    "revision": "40fe49a13ecba172d6da35db14bcd947"
  },
  {
    "url": "index.xml",
    "revision": "f12f2ac63e232806b1fe648c59c9d753"
  },
  {
    "url": "js/anitya.min.da904f651a9aa5dd4485edcdf7cc26d2050c5affee32f6590ca476763cb85939.js",
    "revision": "2b88117710664b1c34566bb3b01f48ee"
  },
  {
    "url": "page/1/index.html",
    "revision": "61213a483ce765735be579330546d42a"
  },
  {
    "url": "page/2/index.html",
    "revision": "20be7138a46d2c92cef9010e0e47a8c4"
  },
  {
    "url": "page/3/index.html",
    "revision": "b7d89431d6d0e451500827461ded1349"
  },
  {
    "url": "page/4/index.html",
    "revision": "57367420a97cb3658ffd9346e19a2b88"
  },
  {
    "url": "post/index.html",
    "revision": "db6f1392298086d98d5c01961f8b956a"
  },
  {
    "url": "post/index.xml",
    "revision": "cefada6711ded68dffce2d7aea9fd72a"
  },
  {
    "url": "projects/index.html",
    "revision": "01eddfeabe4c002d8ec060f25b8ea992"
  },
  {
    "url": "sitemap.xml",
    "revision": "066efa86a28658dfa7aa498db58f84dc"
  },
  {
    "url": "tags/css/index.html",
    "revision": "f25d4356137b2c40057d012db8c69e71"
  },
  {
    "url": "tags/css/index.xml",
    "revision": "fed537b199a2b024c818a8d3b814ffee"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "4b1ac22dfde66083bbb10ba834239372"
  },
  {
    "url": "tags/hugo/index.xml",
    "revision": "a4f021125987ebc41136d6997fcd9aec"
  },
  {
    "url": "tags/index.html",
    "revision": "f62a56d3de3bd8d3ba92ee9758ae755b"
  },
  {
    "url": "tags/index.xml",
    "revision": "0ff16c4ef3eabc9b7bf647fe2ba361e2"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "b0426466fea122565a302ee93aad1e1c"
  },
  {
    "url": "tags/javascript/index.xml",
    "revision": "963937b26bf89fcc6380b547fa57bf2e"
  },
  {
    "url": "tags/personal/index.html",
    "revision": "07498b1ebd398c907cc20f474c907c69"
  },
  {
    "url": "tags/personal/index.xml",
    "revision": "8154a47603c69d06f69a5b6df4f280b5"
  },
  {
    "url": "tags/postcss/index.html",
    "revision": "dc4c195925712c4c26d5bd0d586a59af"
  },
  {
    "url": "tags/postcss/index.xml",
    "revision": "9e8f0defa09b0b9ed968c683e33f0e53"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "eb4d89e92b689b7cdaa55be9071f0d5a"
  },
  {
    "url": "tags/sass/index.xml",
    "revision": "a02456fd600ebebe51f39ca570372e3b"
  },
  {
    "url": "tags/tailwindcss/index.html",
    "revision": "1082f7727734e755578b9d867646a1e9"
  },
  {
    "url": "tags/tailwindcss/index.xml",
    "revision": "66a5dbb6c56843cbeba941a767fec942"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "f1e76c33a41a706ffd4f0069d90dcc81"
  },
  {
    "url": "tags/tools/index.xml",
    "revision": "a517ded81a68fc8cfddc9c2c97098286"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "73e45da8a086588faf43907a30de9a49"
  },
  {
    "url": "tags/vue/index.xml",
    "revision": "ac987b82f1b22400bf60cd77d593a2b3"
  }
]);
