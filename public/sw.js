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
    "revision": "5b0f4eb3d6d1dd450818a9ab2459a13f"
  },
  {
    "url": "about/index.html",
    "revision": "d48c63bf778fa2cb2b54b980a83e01ef"
  },
  {
    "url": "algolia.json",
    "revision": "ee779d98cc7cbe4f244f9ddb703d5e7a"
  },
  {
    "url": "archives/index.html",
    "revision": "3b848e3627b6d11ac40ddace1c40fbdc"
  },
  {
    "url": "blog/bat-dau-voi-vue/index.html",
    "revision": "26a3dac42035b02b831c1fe8c12960e0"
  },
  {
    "url": "blog/blog-va-toi/index.html",
    "revision": "43b64d9fbe490491a09d5b5bbff88a8a"
  },
  {
    "url": "blog/checkboxes-jquery-plugin/index.html",
    "revision": "8b4a3f6a9b85b4dbcca449c82a6c36d7"
  },
  {
    "url": "blog/classes-javascript-va-vue/index.html",
    "revision": "d0f9f56115d53ea52ba2c4db3499907b"
  },
  {
    "url": "blog/css-triangles-mixin-trong-sass/index.html",
    "revision": "8acd5feaffb26d8b89ad0115cdd48c0f"
  },
  {
    "url": "blog/do-bong-mixin-voi-text-shadow/index.html",
    "revision": "0fc232ad1f71dfde651232dae1d1e20d"
  },
  {
    "url": "blog/functional-css/index.html",
    "revision": "b3e7d00e3b495803576d10827c062599"
  },
  {
    "url": "blog/gioi-thieu-css3-transform/index.html",
    "revision": "f600de0cddbd69914a733a69df4c85fa"
  },
  {
    "url": "blog/html5-fullscreen-api/index.html",
    "revision": "37551fbaf2c9edd9f8c9849849a40bb0"
  },
  {
    "url": "blog/html5-geolocation-va-leaflet/index.html",
    "revision": "8760217d227bbcd917f41f683c3c3fa4"
  },
  {
    "url": "blog/postcss/index.html",
    "revision": "9fe42b68be8033bc4f558d597bbd870d"
  },
  {
    "url": "blog/redesign-va-nhung-gi-toi-hoc/index.html",
    "revision": "3279bbfee9e137daa8f5f0687f9e1ddf"
  },
  {
    "url": "blog/su-dung-icon-fonts/index.html",
    "revision": "896a4f82393b67e019bf5a540e753abe"
  },
  {
    "url": "blog/su-dung-sass/index.html",
    "revision": "db5b51178f57fbc8f64034048b4e3060"
  },
  {
    "url": "blog/tao-mp3-player-voi-html5-va-css3/index.html",
    "revision": "f6ad52f32a5bc98ca2b83b0a9dba5743"
  },
  {
    "url": "blog/thu-thuat-su-dung-sublime-text-2/index.html",
    "revision": "20a6ec9530515a74878d92f1aaa7dbec"
  },
  {
    "url": "blog/tim-kiem-voi-algolia-hugo-va-vue/index.html",
    "revision": "1e7aee66512176d519034697d4cd9eb7"
  },
  {
    "url": "blog/web-storage/index.html",
    "revision": "f9c739fb3a533685d2e15b22adbac905"
  },
  {
    "url": "categories/index.html",
    "revision": "f4087bc2562cd2ab4618e5c1b3758018"
  },
  {
    "url": "categories/index.xml",
    "revision": "386333cebf890b5b23dc859de56d65d8"
  },
  {
    "url": "css/anitya.min.efd27097a6f7d0bd59430abcbfa90a46aa0ea28df0e43edd90b1387a0b750c80.css",
    "revision": "90e8599e14201a0d9665858efc20de09"
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
    "revision": "d30b13f2687dc2e080b63f5d4f07fb89"
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
    "revision": "a502352c04f281342b16e0cc94466904"
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
    "url": "page/2/index.html",
    "revision": "0e705bed058bf726504c096bbfddf22c"
  },
  {
    "url": "page/3/index.html",
    "revision": "6120d55e915f9f562c20fb8db15ce2fb"
  },
  {
    "url": "page/4/index.html",
    "revision": "9a241be564820a6247796e7e12a5db79"
  },
  {
    "url": "post/index.html",
    "revision": "24306e3fe57da7ddd0c09bb71936ceef"
  },
  {
    "url": "post/index.xml",
    "revision": "95e81913781ca206048663e7468e1f2b"
  },
  {
    "url": "projects/index.html",
    "revision": "5f5fae43b729f808c3333cbcf4576a70"
  },
  {
    "url": "sitemap.xml",
    "revision": "3aaf0abd0e3101fc376a325e8b339e65"
  },
  {
    "url": "tags/css/index.html",
    "revision": "88ac9570170becd15ccd71edc1956590"
  },
  {
    "url": "tags/css/index.xml",
    "revision": "beee56434646eecef61a2eeb10a3f811"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "203ef6996edd99fd4c995ba20d48375a"
  },
  {
    "url": "tags/hugo/index.xml",
    "revision": "bca14116f3aac7e4dd6bcdae053e7068"
  },
  {
    "url": "tags/index.html",
    "revision": "3ea35b8b3765f98fe35af98186456469"
  },
  {
    "url": "tags/index.xml",
    "revision": "c0e383a5b4828e13b44fd4297edaef05"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "acb819552bd84dc03bc3cad5c691ebec"
  },
  {
    "url": "tags/javascript/index.xml",
    "revision": "e39459a620005494e7846e58584ef115"
  },
  {
    "url": "tags/personal/index.html",
    "revision": "3888ea166842d7b94a2da0cce9ee8acb"
  },
  {
    "url": "tags/personal/index.xml",
    "revision": "7a776781e503a5e72f33dccedc769dd1"
  },
  {
    "url": "tags/postcss/index.html",
    "revision": "13d9f54d86f72ae0aafaaee79122e09a"
  },
  {
    "url": "tags/postcss/index.xml",
    "revision": "21a5e7a1033cf52b580527a8d579a270"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "a1d821b55050b7e77734907526cf6bd4"
  },
  {
    "url": "tags/sass/index.xml",
    "revision": "b140d42a5b7ab759ecb0c917673d474d"
  },
  {
    "url": "tags/tailwindcss/index.html",
    "revision": "8910261cab61fa185a520f4efbb62077"
  },
  {
    "url": "tags/tailwindcss/index.xml",
    "revision": "297a95cddd97a3610918d695678a8ec1"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "0d5f455423e781ca1ee0a1e446d21dc4"
  },
  {
    "url": "tags/tools/index.xml",
    "revision": "d2c2b804a98cfe15b5685403ee9d876e"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "d3ee9725208ae8276374b11db9bb92ed"
  },
  {
    "url": "tags/vue/index.xml",
    "revision": "74435ca3ab4eb5807aceed709d69cf02"
  }
]);
