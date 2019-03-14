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
    "revision": "46fa78605fe9cc7f164e1158988b0ab6"
  },
  {
    "url": "about/index.html",
    "revision": "a6d08da0ca9dbbd2af742882e6caf5b7"
  },
  {
    "url": "algolia.json",
    "revision": "91f58713512805cb7e6f69e875073e6e"
  },
  {
    "url": "archives/index.html",
    "revision": "a2b4cae103c5c915c8a94899ce9b501e"
  },
  {
    "url": "blog/bat-dau-voi-vue/index.html",
    "revision": "8c2b9f763c1c5c6a9223d6a8e6c2b058"
  },
  {
    "url": "blog/blog-va-toi/index.html",
    "revision": "60ff5282601ac432fd7bcbaf5a9fd979"
  },
  {
    "url": "blog/checkboxes-jquery-plugin/index.html",
    "revision": "961f78f96ef59fe0800bb4c1bfd03ebe"
  },
  {
    "url": "blog/css-triangles-mixin-trong-sass/index.html",
    "revision": "1561762e6058a77cc87fd37fd4e4245e"
  },
  {
    "url": "blog/do-bong-mixin-voi-text-shadow/index.html",
    "revision": "8935b0fef0275ef65a50511c2690bc1c"
  },
  {
    "url": "blog/functional-css/index.html",
    "revision": "f405f5934ef027167eb9b654ccc388bc"
  },
  {
    "url": "blog/gioi-thieu-css3-transform/index.html",
    "revision": "15dd7ec325bb0d226d69da87f005f007"
  },
  {
    "url": "blog/html5-fullscreen-api/index.html",
    "revision": "4bcc7f4847c285447b74b138b2073184"
  },
  {
    "url": "blog/html5-geolocation-va-leaflet/index.html",
    "revision": "1191ed9431c4bc432a12f85381b889db"
  },
  {
    "url": "blog/postcss/index.html",
    "revision": "22196522d66d51f8ffee2388871962e2"
  },
  {
    "url": "blog/redesign-va-nhung-gi-toi-hoc/index.html",
    "revision": "745c969308b7a532f70d1d50db882a79"
  },
  {
    "url": "blog/su-dung-icon-fonts/index.html",
    "revision": "b377dce15608b124b221f784b34adab2"
  },
  {
    "url": "blog/su-dung-sass/index.html",
    "revision": "441abc0fc245afab89d3deb29dd7afc4"
  },
  {
    "url": "blog/tao-mp3-player-voi-html5-va-css3/index.html",
    "revision": "70e8a0a9048d948cdb3e95b9416714cd"
  },
  {
    "url": "blog/thu-thuat-su-dung-sublime-text-2/index.html",
    "revision": "67c75b213f41f2706becf84dcaa2812a"
  },
  {
    "url": "blog/tim-kiem-voi-algolia-hugo-va-vue/index.html",
    "revision": "2ba6c995a6b549db5ded709a76fc5ed9"
  },
  {
    "url": "blog/web-storage/index.html",
    "revision": "19a300ec87db8d5f7f2a01015331ddae"
  },
  {
    "url": "categories/index.html",
    "revision": "6cfd453360d00e44705a8c5b1194c139"
  },
  {
    "url": "categories/index.xml",
    "revision": "637d65dda8358e5f68f6959d44a764c1"
  },
  {
    "url": "css/anitya.min.fae8a8668f86bb7645232066a03dc8246b767c120a851e8e61d596ec13b1d6f2.css",
    "revision": "fa1e3de2f980e57d3be7065c2323a613"
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
    "revision": "d568d021b391a33a87a1524b7c111590"
  },
  {
    "url": "index.xml",
    "revision": "61bda19f48e08f55220c81d842788a96"
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
    "revision": "f829b115aa282e5d564d5d80f7e41ee7"
  },
  {
    "url": "labs/index.xml",
    "revision": "220626041d975f43b20c97ba98228b40"
  },
  {
    "url": "labs/longshadow-jquery-plugin/index.html",
    "revision": "fc4d2f75ecbf478d74066d7d2e7fc697"
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
    "revision": "4218e57decf972c2738dadb80952b73c"
  },
  {
    "url": "labs/tipsy/tipsy.min.bd630386b0a49bfff3e11d0d65c31fbdd556a9ae1036e4d9237b72f10d7dec51.css",
    "revision": "21c850f7f30aabd2d1353b815e384ddd"
  },
  {
    "url": "page/1/index.html",
    "revision": "61213a483ce765735be579330546d42a"
  },
  {
    "url": "page/2/index.html",
    "revision": "3d73efa0c814903696afd44966b0d66c"
  },
  {
    "url": "page/3/index.html",
    "revision": "6bfa78bd90da32d3a16fbca3d67b10c7"
  },
  {
    "url": "page/4/index.html",
    "revision": "5255459878f51ca625c37b4cd6acb140"
  },
  {
    "url": "post/index.html",
    "revision": "70fac5640868354ceb4d0add80aea817"
  },
  {
    "url": "post/index.xml",
    "revision": "f8df27f1c32ad023dabd81d127363aab"
  },
  {
    "url": "projects/index.html",
    "revision": "04453c332ef7af9201f626b8934705cb"
  },
  {
    "url": "sitemap.xml",
    "revision": "70d275609c0fd0c665e0f7ef3433be0f"
  },
  {
    "url": "tags/css/index.html",
    "revision": "2259af7060857be99edfdddf2b619bd0"
  },
  {
    "url": "tags/css/index.xml",
    "revision": "a710e911659f21c5b74a078af5483e92"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "4d6e399a1db313d97a4fdda6042aa9df"
  },
  {
    "url": "tags/hugo/index.xml",
    "revision": "69cdd12d04bddd7cca4fed907d97e26c"
  },
  {
    "url": "tags/index.html",
    "revision": "a38dbc25d2ba45cfa658a91436688a47"
  },
  {
    "url": "tags/index.xml",
    "revision": "df5991facbd85acb7e73ba5121a16ed0"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "1014124c52a8254cae77738b2308e5cf"
  },
  {
    "url": "tags/javascript/index.xml",
    "revision": "5bdd17da118c4ab3be3c1cc112a88f79"
  },
  {
    "url": "tags/personal/index.html",
    "revision": "0de1ddd1d13c29b68783ef99900b153d"
  },
  {
    "url": "tags/personal/index.xml",
    "revision": "075558038177c92b2940ea11dffcf344"
  },
  {
    "url": "tags/postcss/index.html",
    "revision": "6e1cdc551f1822c9fe82b923db0ef309"
  },
  {
    "url": "tags/postcss/index.xml",
    "revision": "74a2d1dbb01ceb660dd63a16afd8aaf3"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "138f8e36ad9b2309a1fda68888b8fabd"
  },
  {
    "url": "tags/sass/index.xml",
    "revision": "3ec12bb59e9042a8b1701e32c010205c"
  },
  {
    "url": "tags/tailwindcss/index.html",
    "revision": "6cb44a6434dbf49266d925447cab57e0"
  },
  {
    "url": "tags/tailwindcss/index.xml",
    "revision": "d5f20f91429d8ca8ab57dd4fe4692c94"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "7fb239abbb3fb1ff4da0840089805faf"
  },
  {
    "url": "tags/tools/index.xml",
    "revision": "a517ded81a68fc8cfddc9c2c97098286"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "4834e053e758939b8e688e27f759bdbd"
  },
  {
    "url": "tags/vue/index.xml",
    "revision": "c117345e2eab7be45a7bd769435abf7e"
  }
]);
