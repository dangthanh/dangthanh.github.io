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
    "revision": "0ae920f67d7eba0557ea299ad3ee1c03"
  },
  {
    "url": "about/index.html",
    "revision": "157aedc6fea83fa48fb03db2cff3ee15"
  },
  {
    "url": "algolia.json",
    "revision": "f193f21103197be9774ce63660ec96eb"
  },
  {
    "url": "archives/index.html",
    "revision": "93d0ea9c20d24ccec1861812b2c4f4f0"
  },
  {
    "url": "blog/bat-dau-voi-vue/index.html",
    "revision": "60165ebd0900ba87ce764858438af3de"
  },
  {
    "url": "blog/blog-va-toi/index.html",
    "revision": "f4d596fe31eedfc9a5aaaadd368680c0"
  },
  {
    "url": "blog/checkboxes-jquery-plugin/index.html",
    "revision": "59cabce82621244f6f1432153e818a6f"
  },
  {
    "url": "blog/css-triangles-mixin-trong-sass/index.html",
    "revision": "a2f3c4fc8c74c8509fc2f9aef97d702d"
  },
  {
    "url": "blog/do-bong-mixin-voi-text-shadow/index.html",
    "revision": "0c7bb8d8c6861d8e99703d2c9d9b8d9d"
  },
  {
    "url": "blog/functional-css/index.html",
    "revision": "e6651666c621244829e61dcd63099c38"
  },
  {
    "url": "blog/gioi-thieu-css3-transform/index.html",
    "revision": "73ffec0e86493891478cc7ccbe541219"
  },
  {
    "url": "blog/html5-fullscreen-api/index.html",
    "revision": "b17b5a5859195d4b01aa07d77f9f3aea"
  },
  {
    "url": "blog/html5-geolocation-va-leaflet/index.html",
    "revision": "dba7b5f8ca8e796e71bf37e8fc935ddf"
  },
  {
    "url": "blog/postcss/index.html",
    "revision": "42e5a1838ca2a30636405ee7d75a93d9"
  },
  {
    "url": "blog/redesign-va-nhung-gi-tôi-hoc/index.html",
    "revision": "634947be3514bea7e02cceebb1620714"
  },
  {
    "url": "blog/su-dung-icon-fonts/index.html",
    "revision": "f6dce3378d4153cece6e37294e330654"
  },
  {
    "url": "blog/su-dung-sass/index.html",
    "revision": "23fc45a150d40bfbf6326fd7399ee4c2"
  },
  {
    "url": "blog/tao-mp3-player-voi-html5-va-css3/index.html",
    "revision": "e24abb4e8a7f0fa62ea2cdfdfec736e2"
  },
  {
    "url": "blog/thu-thuat-su-dung-sublime-text-2/index.html",
    "revision": "e944b3a6bc4de067178e0ad7c1721135"
  },
  {
    "url": "blog/tim-kiem-voi-algolia-hugo-va-vue/index.html",
    "revision": "f9479ae32b4ea6187016509e25db4721"
  },
  {
    "url": "blog/web-storage/index.html",
    "revision": "bd9dff8b34f022f13468fe8c11b12b9d"
  },
  {
    "url": "categories/index.html",
    "revision": "7dcf2b208ed70408e2ae36206ce350c2"
  },
  {
    "url": "categories/index.xml",
    "revision": "637d65dda8358e5f68f6959d44a764c1"
  },
  {
    "url": "css/anitya.min.1f98855843ea34e8d7118de5a1264ce999694d35f2ede7c910b5a008efb64e20.css",
    "revision": "ef6d20089c4d4214eb37e992b236b298"
  },
  {
    "url": "images/algolia_create_app.png",
    "revision": "ee9b857dd00cad9d9d3601fe196532ff"
  },
  {
    "url": "images/algolia_create_index.png",
    "revision": "09a85403a4f8dfd6c3bd2cbb5d115d03"
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
    "revision": "4d3513995cd39ec16e524729e7912516"
  },
  {
    "url": "index.xml",
    "revision": "56c8cc798cf3fc3f1c79e9b7702fe2fe"
  },
  {
    "url": "js/anitya.min.ebd58a912bc7dc6eaf621c9f20b3a0fc1eba33e30bc06818cddd85fdbba8f0cf.js",
    "revision": "47dcb27ef4ebe4c254330c834c115fe2"
  },
  {
    "url": "page/1/index.html",
    "revision": "61213a483ce765735be579330546d42a"
  },
  {
    "url": "page/2/index.html",
    "revision": "c1cdf6befe118a48e101eefd3ab29178"
  },
  {
    "url": "page/3/index.html",
    "revision": "3499a0f4cad0f20ab3e710b06f27301c"
  },
  {
    "url": "page/4/index.html",
    "revision": "abbab1856a6798a1108d6770f8a7077b"
  },
  {
    "url": "post/index.html",
    "revision": "ee96b1cbc9d28537cd5db5a3f82a2f8b"
  },
  {
    "url": "post/index.xml",
    "revision": "807fa096db924ea7fe4885c7ea46563d"
  },
  {
    "url": "projects/index.html",
    "revision": "db29e3f45e41cc7925e3dbcdd5ecbcf7"
  },
  {
    "url": "sitemap.xml",
    "revision": "c013c935bbf06adf33d652bfd7e3a195"
  },
  {
    "url": "tags/css/index.html",
    "revision": "28b37bbe8d2f3ca9f118c70cd4fa8449"
  },
  {
    "url": "tags/css/index.xml",
    "revision": "fd2de10295f8fa2ed1e3ee87f58be3f3"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "32468fada1bd0b2f6584ad8f448d7b2b"
  },
  {
    "url": "tags/hugo/index.xml",
    "revision": "55107a03e973ada5b23390263148badd"
  },
  {
    "url": "tags/index.html",
    "revision": "172758f193a9f626de8aca2a61c7413a"
  },
  {
    "url": "tags/index.xml",
    "revision": "df5991facbd85acb7e73ba5121a16ed0"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "925a3b4529f3ab2d9b0e876dc03747a5"
  },
  {
    "url": "tags/javascript/index.xml",
    "revision": "db390bdb4d617638c22a853e6ccded73"
  },
  {
    "url": "tags/personal/index.html",
    "revision": "d01941378bc15823bcb781539bddc413"
  },
  {
    "url": "tags/personal/index.xml",
    "revision": "2471fb040bf5511ee76b6fa5f07af218"
  },
  {
    "url": "tags/postcss/index.html",
    "revision": "7774acd28ff43ca2eb6a7af4eee3968f"
  },
  {
    "url": "tags/postcss/index.xml",
    "revision": "428939205356ef99b6184e616fb36537"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "87d316b73b02893167eb94013c6b41f0"
  },
  {
    "url": "tags/sass/index.xml",
    "revision": "3784ddeb75b82a9d889ddc458179fce4"
  },
  {
    "url": "tags/tailwindcss/index.html",
    "revision": "306f232e658a0b2a20c2dd62a690c0e9"
  },
  {
    "url": "tags/tailwindcss/index.xml",
    "revision": "d5f20f91429d8ca8ab57dd4fe4692c94"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "b1e1d10f56273f0ac5c3cc64d43c1739"
  },
  {
    "url": "tags/tools/index.xml",
    "revision": "a517ded81a68fc8cfddc9c2c97098286"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "d419788819d4e5267014c0c976d036e6"
  },
  {
    "url": "tags/vue/index.xml",
    "revision": "c117345e2eab7be45a7bd769435abf7e"
  }
]);
