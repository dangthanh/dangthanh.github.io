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
    "revision": "a74c0c8af11b222c83bc7ed05a18a180"
  },
  {
    "url": "about/index.html",
    "revision": "b5ff14d2a3dbb399f75e94c0b7ff6680"
  },
  {
    "url": "algolia.json",
    "revision": "5143101943b40538fe2a63c03d395213"
  },
  {
    "url": "archives/index.html",
    "revision": "192a71229f251ac3c7e9dd5eb051581f"
  },
  {
    "url": "categories/index.html",
    "revision": "6e09d01dc7b8946dc7d3d6ea9de24ffb"
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
    "revision": "4e6d58d3d49de816811f6620f140c189"
  },
  {
    "url": "index.xml",
    "revision": "c4bc69bf614b684dbaf097fc6bf47ea3"
  },
  {
    "url": "js/anitya.min.de09b377a0eb9cc660c15c66099b9c1334c10df224d80e92c7e034c45c0c69a9.js",
    "revision": "a92bd8f6f79058256778e6a51300dbfa"
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
    "revision": "335a79805ab0879903273964cb8f54c8"
  },
  {
    "url": "labs/index.xml",
    "revision": "e376995e6adc7ffda3da8885e78696ce"
  },
  {
    "url": "labs/longshadow-jquery-plugin/index.html",
    "revision": "334a1ee0d95a523b14126186aaa6f69d"
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
    "revision": "efeba1348a03b32d0351cf7add9b6510"
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
    "url": "posts/bat-dau-voi-vue/index.html",
    "revision": "34f1fbf7ccca773112a4162e7d06d398"
  },
  {
    "url": "posts/blog-va-toi/index.html",
    "revision": "fa97174f49f5c1ee4eec59577f16b9b5"
  },
  {
    "url": "posts/checkboxes-jquery-plugin/index.html",
    "revision": "185d2b45b8f99d9f4ae7d036bc6455b3"
  },
  {
    "url": "posts/classes-javascript-va-vue/index.html",
    "revision": "91795e2804219b98c6908c7fe348fd32"
  },
  {
    "url": "posts/css-triangles-mixin-trong-sass/index.html",
    "revision": "41440a72d112af9229681828cd25ae1c"
  },
  {
    "url": "posts/do-bong-mixin-voi-text-shadow/index.html",
    "revision": "cdd20ddf7b433acedc5d05ed12c83706"
  },
  {
    "url": "posts/functional-css/index.html",
    "revision": "b0fcf4bb36ca31800da4ecc5cbed749a"
  },
  {
    "url": "posts/gioi-thieu-css3-transform/index.html",
    "revision": "5c56bf0757ad3cb10d445063a875d390"
  },
  {
    "url": "posts/html5-fullscreen-api/index.html",
    "revision": "a2118469128db5b7c078288d2e810e21"
  },
  {
    "url": "posts/html5-geolocation-va-leaflet/index.html",
    "revision": "30352356160376fa793a700df8aaa39f"
  },
  {
    "url": "posts/index.html",
    "revision": "12a7ba03db3c3583123672c1c4cd4401"
  },
  {
    "url": "posts/index.xml",
    "revision": "6559a4eae6b3c04c50eacf7d616da32d"
  },
  {
    "url": "posts/postcss/index.html",
    "revision": "d0021cefb4afcab4aad49226533d1325"
  },
  {
    "url": "posts/redesign-va-nhung-gi-toi-hoc/index.html",
    "revision": "8d0453bd68af1e41804da088c4c51a6d"
  },
  {
    "url": "posts/su-dung-icon-fonts/index.html",
    "revision": "7fe247231d40bffbe18199524bc766d8"
  },
  {
    "url": "posts/su-dung-sass/index.html",
    "revision": "b7f3ec872842a3c073702b16e8db96b5"
  },
  {
    "url": "posts/tao-mp3-player-voi-html5-va-css3/index.html",
    "revision": "63b167e0276b129f90f720e010da942c"
  },
  {
    "url": "posts/thu-thuat-su-dung-sublime-text-2/index.html",
    "revision": "fca3cfcf7e618fa710722eadd7485fab"
  },
  {
    "url": "posts/tim-kiem-voi-algolia-hugo-va-vue/index.html",
    "revision": "bdd48f45f54a7517993036de9fc9e731"
  },
  {
    "url": "posts/web-storage/index.html",
    "revision": "540bbf0280f45402d9f2a1816c13c3ef"
  },
  {
    "url": "projects/index.html",
    "revision": "760eb5582b9a6ca059050c402dcd9638"
  },
  {
    "url": "sitemap.xml",
    "revision": "34b3f4c161bdbc7e39978e7b9d6793e2"
  },
  {
    "url": "tags/css/index.html",
    "revision": "2751517a85267c4cac5934f8ee427b90"
  },
  {
    "url": "tags/css/index.xml",
    "revision": "994e6e823755c4f161a1794349c8e278"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "007468cac0257892d6420c60885a8ed8"
  },
  {
    "url": "tags/hugo/index.xml",
    "revision": "6591a942c68026f1c7211d453aeba23a"
  },
  {
    "url": "tags/index.html",
    "revision": "fb6c5f82e5570e16df8c011ed25df0a8"
  },
  {
    "url": "tags/index.xml",
    "revision": "ce0a9afe2f1fc615d9e328327923586d"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "6112a761880e070602ad0918659def39"
  },
  {
    "url": "tags/javascript/index.xml",
    "revision": "5b5474b3adea2ae8794cb17f4049c60c"
  },
  {
    "url": "tags/personal/index.html",
    "revision": "2951efa6c51b3025955a03b42d3475ce"
  },
  {
    "url": "tags/personal/index.xml",
    "revision": "46667bf3dcb78c27d8fc5dfe9c01ce0c"
  },
  {
    "url": "tags/postcss/index.html",
    "revision": "bb30390a58b423c24d51602258348158"
  },
  {
    "url": "tags/postcss/index.xml",
    "revision": "c9f4238647512db3117f583c873e68bc"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "e36e70dc80265cf044e8271ee3b44004"
  },
  {
    "url": "tags/sass/index.xml",
    "revision": "dbb1116df5ed41b6af5632eb98763f86"
  },
  {
    "url": "tags/tailwindcss/index.html",
    "revision": "98d2ec11fdce0f77a9b586caf5d99e80"
  },
  {
    "url": "tags/tailwindcss/index.xml",
    "revision": "1f8a2735cab87074840063de55a951a3"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "080f77a7e25604a6714dc62301761013"
  },
  {
    "url": "tags/tools/index.xml",
    "revision": "87b64be0692c848a4a7d69d9a5478b19"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "596a0ae6bccb782bab504430b8ad08ca"
  },
  {
    "url": "tags/vue/index.xml",
    "revision": "4e1235275e250526bb12d4c4f95d06b1"
  }
]);
