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
    "revision": "baa9a4b11f26ea7dad1b87532f909e5a"
  },
  {
    "url": "about/index.html",
    "revision": "6272a48a3822a7094dd0bdc0929474ae"
  },
  {
    "url": "blog/blog-va-toi/index.html",
    "revision": "95284378ccaebcbac9f96fee123329ed"
  },
  {
    "url": "blog/checkboxes-jquery-plugin/index.html",
    "revision": "fca211195da7642441c182894a37d389"
  },
  {
    "url": "blog/css-triangles-mixin-trong-sass/index.html",
    "revision": "54f9a407d79d0e7e0b5113fb0edb87f4"
  },
  {
    "url": "blog/do-bong-mixin-voi-text-shadow/index.html",
    "revision": "751f6776f13903d85fbe220f10993ab7"
  },
  {
    "url": "blog/functional-css/index.html",
    "revision": "a64fa63dfae6eced99a18e4a7c4f1012"
  },
  {
    "url": "blog/gioi-thieu-css3-transform/index.html",
    "revision": "83c1d18ba5529bd72208805304d95aaa"
  },
  {
    "url": "blog/html5-fullscreen-api/index.html",
    "revision": "b4b82a91b26e3b4fa83816134c3b165a"
  },
  {
    "url": "blog/html5-geolocation-va-leaflet/index.html",
    "revision": "5633c7842cd59b0cddca1a2e9c4b031c"
  },
  {
    "url": "blog/postcss/index.html",
    "revision": "0662d416d0c631366d97f8cb8c64e4e0"
  },
  {
    "url": "blog/redesign-va-nhung-gi-tui-hoc/index.html",
    "revision": "f1b3bcef2d33558e8e6d7cea390a6dac"
  },
  {
    "url": "blog/su-dung-icon-fonts/index.html",
    "revision": "1c092d5bc26a0ad002ec3d6d0e08902f"
  },
  {
    "url": "blog/su-dung-sass/index.html",
    "revision": "a8946f723ecf8a1453c27f1ffbce6db9"
  },
  {
    "url": "blog/tao-mp3-player-voi-html5-va-css3/index.html",
    "revision": "356cee44bc12ad8ff77a17f11a62bb2d"
  },
  {
    "url": "blog/thu-thuat-su-dung-sublime-text-2/index.html",
    "revision": "1b43a14be5a98dfcad19f45c9aef7431"
  },
  {
    "url": "blog/web-storage/index.html",
    "revision": "bb04f1b3f81defa7504a48f84f80097f"
  },
  {
    "url": "categories/index.html",
    "revision": "1f7587838a7e688d6e3b30deddc7b041"
  },
  {
    "url": "categories/index.xml",
    "revision": "637d65dda8358e5f68f6959d44a764c1"
  },
  {
    "url": "css/anitya.min.2046aa632f49d5d259d3838a59a3b5ec09f509a23898eae8f2ac091c507dcd3d.css",
    "revision": "9462091bff313c1bfb09fa0438976422"
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
    "revision": "b8d8e2a4e25ccde8e4649ac9117048e7"
  },
  {
    "url": "index.xml",
    "revision": "199ea68fc596d8033c0f1c510be95759"
  },
  {
    "url": "js/anitya.min.72210058bd1aa87963f8d6d4ba6fd9e78c65d4eac4054982b312045cfb02bd68.js",
    "revision": "9df601c144af76ae1e53e2c8d1c7243c"
  },
  {
    "url": "page/1/index.html",
    "revision": "61213a483ce765735be579330546d42a"
  },
  {
    "url": "page/2/index.html",
    "revision": "b790b281f61178d0835b15510795f4c2"
  },
  {
    "url": "page/3/index.html",
    "revision": "5810109b17453e166c998175326de649"
  },
  {
    "url": "post/index.html",
    "revision": "b5f537666638d29c45e4dd6de030fad7"
  },
  {
    "url": "post/index.xml",
    "revision": "a755da49b15db3a0f15175b2e8c85bd5"
  },
  {
    "url": "projects/index.html",
    "revision": "38ba7ca4d593317f093d21e95943c232"
  },
  {
    "url": "sitemap.xml",
    "revision": "9b23bd287a4fc1f81a6661e88eb151ae"
  },
  {
    "url": "tags/css/index.html",
    "revision": "ced2075a949f0bf78ab7a2b34473651a"
  },
  {
    "url": "tags/css/index.xml",
    "revision": "297f024fc7549d266f76217c686bd647"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "56d87edfa6336cbbaee10d8dd4953bf8"
  },
  {
    "url": "tags/hugo/index.xml",
    "revision": "a4f021125987ebc41136d6997fcd9aec"
  },
  {
    "url": "tags/index.html",
    "revision": "f546d2fa88955fa3c40774e7ae5f8792"
  },
  {
    "url": "tags/index.xml",
    "revision": "c18b5a5b89d540ff499cb72e930f67c7"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "6f208fd6a3f21671f5494aee6a83cd21"
  },
  {
    "url": "tags/javascript/index.xml",
    "revision": "fd230d00b73361947f5fb558792ed5a0"
  },
  {
    "url": "tags/personal/index.html",
    "revision": "4349bf44fb13b52e15eed828d4d549b1"
  },
  {
    "url": "tags/personal/index.xml",
    "revision": "8154a47603c69d06f69a5b6df4f280b5"
  },
  {
    "url": "tags/postcss/index.html",
    "revision": "168bd72dcc21718950e6d820d69bc07e"
  },
  {
    "url": "tags/postcss/index.xml",
    "revision": "9e8f0defa09b0b9ed968c683e33f0e53"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "e70f29a4aba4f0abf49d9a6b0691ac35"
  },
  {
    "url": "tags/sass/index.xml",
    "revision": "a02456fd600ebebe51f39ca570372e3b"
  },
  {
    "url": "tags/tailwindcss/index.html",
    "revision": "2815b6a381078851879339895345f310"
  },
  {
    "url": "tags/tailwindcss/index.xml",
    "revision": "66a5dbb6c56843cbeba941a767fec942"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "b74dbdb5e22e769e3a8a5e6b71073ddf"
  },
  {
    "url": "tags/tools/index.xml",
    "revision": "a517ded81a68fc8cfddc9c2c97098286"
  }
]);
