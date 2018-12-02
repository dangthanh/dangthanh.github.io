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
    "revision": "676daa74faa74670330b1806350b2da4"
  },
  {
    "url": "about/index.html",
    "revision": "76be79adc6e39a9cb5eac3ba7cae7732"
  },
  {
    "url": "blog/blog-va-toi/index.html",
    "revision": "ac58cf238b95dedb3c7c488d14632f81"
  },
  {
    "url": "blog/checkboxes-jquery-plugin/index.html",
    "revision": "c2a7a239ebd55c0e1d9129fa18928874"
  },
  {
    "url": "blog/css-triangles-mixin-trong-sass/index.html",
    "revision": "3e90189bc1ee4f53511ed3aec47cafb1"
  },
  {
    "url": "blog/do-bong-mixin-voi-text-shadow/index.html",
    "revision": "ee9310ce77a60f7fabc147156bab2def"
  },
  {
    "url": "blog/functional-css/index.html",
    "revision": "d29ec1012fcc40acee3ef9cb4f9c8160"
  },
  {
    "url": "blog/gioi-thieu-css3-transform/index.html",
    "revision": "3c8e1f74142416d5257d590ec0e08adb"
  },
  {
    "url": "blog/html5-fullscreen-api/index.html",
    "revision": "050975616d0d4b605a19cc6d2f17e3b5"
  },
  {
    "url": "blog/html5-geolocation-va-leaflet/index.html",
    "revision": "8a5bdfe00c4493229574ac32d59b5cae"
  },
  {
    "url": "blog/postcss/index.html",
    "revision": "58715c7a26197f03fb7aee3dd0416df8"
  },
  {
    "url": "blog/redesign-va-nhung-gi-tui-hoc/index.html",
    "revision": "f81d52cdeacf9f691cbfd1a06b31a101"
  },
  {
    "url": "blog/su-dung-icon-fonts/index.html",
    "revision": "9827eeb7373f4f95d867b133107550e2"
  },
  {
    "url": "blog/su-dung-sass/index.html",
    "revision": "af0d308ed4f31682c0a47f50636e9d69"
  },
  {
    "url": "blog/tao-mp3-player-voi-html5-va-css3/index.html",
    "revision": "8a64f62c3032f2075d76e87db752ac6c"
  },
  {
    "url": "blog/thu-thuat-su-dung-sublime-text-2/index.html",
    "revision": "cfef441797d4724ccb147fcaaeed022b"
  },
  {
    "url": "blog/web-storage/index.html",
    "revision": "3efec881d161948b3de7b5e0319d6461"
  },
  {
    "url": "categories/index.html",
    "revision": "c06bb676ec0dcb1e46b36946dbf35c8a"
  },
  {
    "url": "categories/index.xml",
    "revision": "637d65dda8358e5f68f6959d44a764c1"
  },
  {
    "url": "css/anitya.min.46d114cafca559fd710bfdfb1fabc5507013486a8765957db66c6f3e6fe4d7f2.css",
    "revision": "c0b74f83e1ad2b207002488851ef9693"
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
    "revision": "a26aea8b4f5a8ce8f9cfc6ad33181d0e"
  },
  {
    "url": "index.xml",
    "revision": "199ea68fc596d8033c0f1c510be95759"
  },
  {
    "url": "js/anitya.min.22de4c3dec4cfff4f2518fde252216a0afafb6a670c774cfe26416c399ecee92.js",
    "revision": "c063e0bd7c656995d7fbd73537195565"
  },
  {
    "url": "page/1/index.html",
    "revision": "61213a483ce765735be579330546d42a"
  },
  {
    "url": "page/2/index.html",
    "revision": "d9bc78d6f979c0ec0785b0d36a7efa0a"
  },
  {
    "url": "page/3/index.html",
    "revision": "c7462af25724fcef414181a100db62b8"
  },
  {
    "url": "post/index.html",
    "revision": "0bab902556ba3fca8a35fee0ad8837bf"
  },
  {
    "url": "post/index.xml",
    "revision": "a755da49b15db3a0f15175b2e8c85bd5"
  },
  {
    "url": "projects/index.html",
    "revision": "1528667c18cd56fb696b5e166be3c382"
  },
  {
    "url": "sitemap.xml",
    "revision": "9b23bd287a4fc1f81a6661e88eb151ae"
  },
  {
    "url": "tags/css/index.html",
    "revision": "d08843a65df34a8675a3b0483d70d2ee"
  },
  {
    "url": "tags/css/index.xml",
    "revision": "297f024fc7549d266f76217c686bd647"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "1961942071792dc94124a32d57914026"
  },
  {
    "url": "tags/hugo/index.xml",
    "revision": "a4f021125987ebc41136d6997fcd9aec"
  },
  {
    "url": "tags/index.html",
    "revision": "d569ca83f4d6204e458f717f0c52bc32"
  },
  {
    "url": "tags/index.xml",
    "revision": "c18b5a5b89d540ff499cb72e930f67c7"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "ba3bd0aeaf1a1316e500ec2b6a02477c"
  },
  {
    "url": "tags/javascript/index.xml",
    "revision": "fd230d00b73361947f5fb558792ed5a0"
  },
  {
    "url": "tags/personal/index.html",
    "revision": "f989ba07d3dc6edf03c04fb8995a2d6d"
  },
  {
    "url": "tags/personal/index.xml",
    "revision": "8154a47603c69d06f69a5b6df4f280b5"
  },
  {
    "url": "tags/postcss/index.html",
    "revision": "0e220bea422467a9cb59e188ab0864aa"
  },
  {
    "url": "tags/postcss/index.xml",
    "revision": "9e8f0defa09b0b9ed968c683e33f0e53"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "84054eb1234c0f72f8f6233fe46541a4"
  },
  {
    "url": "tags/sass/index.xml",
    "revision": "a02456fd600ebebe51f39ca570372e3b"
  },
  {
    "url": "tags/tailwindcss/index.html",
    "revision": "7124f712ab327b6fdad04e208d409b1c"
  },
  {
    "url": "tags/tailwindcss/index.xml",
    "revision": "66a5dbb6c56843cbeba941a767fec942"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "ab2c6d90b0970293ac5703bdbb0440bd"
  },
  {
    "url": "tags/tools/index.xml",
    "revision": "a517ded81a68fc8cfddc9c2c97098286"
  }
]);
