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

workbox.routing.registerRoute(
  'https//cdn.jsdelivr.net/npm/vue-instantsearch@1.7.0/dist/vue-instantsearch.js',
  workbox.strategies.cacheFirst()
);

workbox.googleAnalytics.initialize();
workbox.strategies.networkFirst();
workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "4ee28629201a158aa29b7a99c9ece0ff"
  },
  {
    "url": "about/index.html",
    "revision": "95074353e8b9942efdfa19792d8c6638"
  },
  {
    "url": "algolia.json",
    "revision": "5462b37d846347870baf501c7fdfde8e"
  },
  {
    "url": "archives/index.html",
    "revision": "04478db1e6350736efbfac971c95bfca"
  },
  {
    "url": "blog/bat-dau-voi-vue/index.html",
    "revision": "2f3a3b5dbffe2e5e4a76e3e7d54d1f5c"
  },
  {
    "url": "blog/blog-va-toi/index.html",
    "revision": "04a6be676b7ec66e8bcf5a973e6d2731"
  },
  {
    "url": "blog/checkboxes-jquery-plugin/index.html",
    "revision": "e2b167b2f3465b958c848de2cdb99d57"
  },
  {
    "url": "blog/classes-javascript-va-vue/index.html",
    "revision": "1dacf14ad049c6a68a53b7f2f541ab8a"
  },
  {
    "url": "blog/css-triangles-mixin-trong-sass/index.html",
    "revision": "29d22a907cb2145a277e9f142d84fa0e"
  },
  {
    "url": "blog/do-bong-mixin-voi-text-shadow/index.html",
    "revision": "1aab8bade1f3317ae3c29ecb2b4ea494"
  },
  {
    "url": "blog/functional-css/index.html",
    "revision": "d7324073a2b6d483315be5e7a3d23867"
  },
  {
    "url": "blog/gioi-thieu-css3-transform/index.html",
    "revision": "aee34710f04972eeba7043802b9ce181"
  },
  {
    "url": "blog/html5-fullscreen-api/index.html",
    "revision": "57cb5651d542e4d77f67ea9572be1614"
  },
  {
    "url": "blog/html5-geolocation-va-leaflet/index.html",
    "revision": "2c821bfa3eec2d0504b42fe81fa58745"
  },
  {
    "url": "blog/postcss/index.html",
    "revision": "69398e4c313cbfc9df2e7024c5da0fae"
  },
  {
    "url": "blog/redesign-va-nhung-gi-toi-hoc/index.html",
    "revision": "e5308fb6bfbc15d90550075e9b3b45b6"
  },
  {
    "url": "blog/su-dung-icon-fonts/index.html",
    "revision": "e1dbfd871fe60583c3965aa8f69e1d84"
  },
  {
    "url": "blog/su-dung-sass/index.html",
    "revision": "cb551aa632b42ef2b7dc6dc3f07bb0b8"
  },
  {
    "url": "blog/tao-mp3-player-voi-html5-va-css3/index.html",
    "revision": "beb61939eb3d1dc017eef9860aafc377"
  },
  {
    "url": "blog/thu-thuat-su-dung-sublime-text-2/index.html",
    "revision": "9cd6d3eb9d6349f8f37af575926378d6"
  },
  {
    "url": "blog/tim-kiem-voi-algolia-hugo-va-vue/index.html",
    "revision": "b3efecc9d8c75ecda3b9ec0905a44cd6"
  },
  {
    "url": "blog/web-storage/index.html",
    "revision": "99d3c6f100d67517829025c48a304978"
  },
  {
    "url": "categories/index.html",
    "revision": "8cd93b1189e33c18871e033200c69649"
  },
  {
    "url": "categories/index.xml",
    "revision": "386333cebf890b5b23dc859de56d65d8"
  },
  {
    "url": "css/anitya.min.a847b8197b90569a092353c6b97ac8bc09ef0e805879cd3853500c24f4416742.css",
    "revision": "25433da3d26df74ac595f88a4e936cb3"
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
    "revision": "5df4c6fe839dc6331497bdf906f4d361"
  },
  {
    "url": "index.xml",
    "revision": "5a11ed51e5a5c25efd246350c84c2860"
  },
  {
    "url": "js/anitya.min.87d36a8e442765e0afc75780d52177aa07a30cd3414aebbd6e21050cfc3b9355.js",
    "revision": "23fe4c95f1358bf1b0eafbf814136aa0"
  },
  {
    "url": "labs/base.min.08dc0a7a3128be3b1595e79d38d54f7be4c899f71fbb84353aeb39d90c2b2da5.js",
    "revision": "d5bb0ceaecdd8e26e621c7c8e2e72855"
  },
  {
    "url": "labs/base.min.0b980d31098fdfcec59a2987f9d5ba6d336ebc5bdbff27813def484246f7082d.css",
    "revision": "2762b78d20d3864232a17d8eec6a4170"
  },
  {
    "url": "labs/index.html",
    "revision": "aea42f7cf80da443c71089f551782af6"
  },
  {
    "url": "labs/index.xml",
    "revision": "e376995e6adc7ffda3da8885e78696ce"
  },
  {
    "url": "labs/longshadow-jquery-plugin/index.html",
    "revision": "168ff4bfc17242bb9909be257381be09"
  },
  {
    "url": "labs/longshadow-jquery-plugin/longshadow-jquery-plugin.min.b8fa0606111e921438e5de41deaa23abcb669550d287c559718b1675b5181859.css",
    "revision": "cb5958edb1009006df2f8dda96d3772a"
  },
  {
    "url": "labs/longshadow-jquery-plugin/longshadow-jquery-plugin.min.c7c0e22f448db63df35f100b0c93ec1b743fe716e3afb7793e95fe3e83790e60.js",
    "revision": "2a76f6bce7966cfc01075580c73707ff"
  },
  {
    "url": "labs/tipsy/index.html",
    "revision": "ed53060e53d03585430a52e9bd051f86"
  },
  {
    "url": "labs/tipsy/tipsy.min.bd630386b0a49bfff3e11d0d65c31fbdd556a9ae1036e4d9237b72f10d7dec51.css",
    "revision": "21c850f7f30aabd2d1353b815e384ddd"
  },
  {
    "url": "page/1/index.html",
    "revision": "96d1621a6e9b366b88736b1ca7f38b78"
  },
  {
    "url": "post/index.html",
    "revision": "81e7ce82acc1975e98f76f548e24284e"
  },
  {
    "url": "post/index.xml",
    "revision": "95e81913781ca206048663e7468e1f2b"
  },
  {
    "url": "projects/index.html",
    "revision": "72a233e2ed555d7c7083811e3d4da3ee"
  },
  {
    "url": "sitemap.xml",
    "revision": "3d2c30f4a366380723bc23f541eb14cf"
  },
  {
    "url": "tags/css/index.html",
    "revision": "e08b04866d9085fbf4f2257cc62d58b4"
  },
  {
    "url": "tags/css/index.xml",
    "revision": "af64b63712c82417862a27555a2b7e74"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "1d58390b21483262a6d166c31cbaa29f"
  },
  {
    "url": "tags/hugo/index.xml",
    "revision": "168fd157a7ad39ad492c3cdf24ca67ee"
  },
  {
    "url": "tags/index.html",
    "revision": "5b1000a94fc9f0bce511be168967bfe6"
  },
  {
    "url": "tags/index.xml",
    "revision": "ce0a9afe2f1fc615d9e328327923586d"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "a142d553498125ff078c150e2ed5474f"
  },
  {
    "url": "tags/javascript/index.xml",
    "revision": "40e29b373c61867728ab62d04031a468"
  },
  {
    "url": "tags/personal/index.html",
    "revision": "988ef392c7adcf51d9235d0b71393fe6"
  },
  {
    "url": "tags/personal/index.xml",
    "revision": "de0099220f156c3db047779341e485df"
  },
  {
    "url": "tags/postcss/index.html",
    "revision": "2aac974e3f877c3a48f552e45488287a"
  },
  {
    "url": "tags/postcss/index.xml",
    "revision": "5e48be91888a8643b32eb1ead26ae0a6"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "951a9b611f94fa689e3a5042d129c2d1"
  },
  {
    "url": "tags/sass/index.xml",
    "revision": "ab2f053328fb1c9d4dc43a37afe23269"
  },
  {
    "url": "tags/tailwindcss/index.html",
    "revision": "56c7b4ee1fd32b8b83866c0b5013f092"
  },
  {
    "url": "tags/tailwindcss/index.xml",
    "revision": "b4975f03b8ca4448bfce60e69ccc0b72"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "c642d1ccfe211b715160d138c1dc3402"
  },
  {
    "url": "tags/tools/index.xml",
    "revision": "13b6f5755f5b3eacf76b033cc46d6ca1"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "854f6a61747edcdf505ea4e548362672"
  },
  {
    "url": "tags/vue/index.xml",
    "revision": "094e0d5296f446a928eed1395f1227fb"
  }
]);
