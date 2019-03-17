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
    "revision": "4633f5b0bcb8b965b446d02f51b8d441"
  },
  {
    "url": "about/index.html",
    "revision": "911e83adb42f68f51467aadc1d23a296"
  },
  {
    "url": "algolia.json",
    "revision": "ee779d98cc7cbe4f244f9ddb703d5e7a"
  },
  {
    "url": "archives/index.html",
    "revision": "78a90555380f9e57fefc42ce6d176a04"
  },
  {
    "url": "blog/bat-dau-voi-vue/index.html",
    "revision": "607033ada9a00169b7f1a861e5b97037"
  },
  {
    "url": "blog/blog-va-toi/index.html",
    "revision": "0ce327bb7474ead318178b5f4f957a15"
  },
  {
    "url": "blog/checkboxes-jquery-plugin/index.html",
    "revision": "5ef310258433e436bfbfb13bf981056c"
  },
  {
    "url": "blog/classes-javascript-va-vue/index.html",
    "revision": "1c9df70c4198662f327ee292ac4ac299"
  },
  {
    "url": "blog/css-triangles-mixin-trong-sass/index.html",
    "revision": "e09965dfa771b32f047ebf3db58d3302"
  },
  {
    "url": "blog/do-bong-mixin-voi-text-shadow/index.html",
    "revision": "071d25d19fc5b939567f21f3b4ac8c38"
  },
  {
    "url": "blog/functional-css/index.html",
    "revision": "b0a448f24e714987ab1b1a2b818ca95f"
  },
  {
    "url": "blog/gioi-thieu-css3-transform/index.html",
    "revision": "e0b7d906228f551192dcb1eea766a89b"
  },
  {
    "url": "blog/html5-fullscreen-api/index.html",
    "revision": "87faa676b1348924c34ab5ef65db834a"
  },
  {
    "url": "blog/html5-geolocation-va-leaflet/index.html",
    "revision": "b0ec643d2edf4dc6cfbac5f3289c10d4"
  },
  {
    "url": "blog/postcss/index.html",
    "revision": "63a68d594a587b1aabfc054e4293232c"
  },
  {
    "url": "blog/redesign-va-nhung-gi-toi-hoc/index.html",
    "revision": "025efcc26b9a12c765b06b9925a8324f"
  },
  {
    "url": "blog/su-dung-icon-fonts/index.html",
    "revision": "375e3b1042bca8fcb257562f4bf158f7"
  },
  {
    "url": "blog/su-dung-sass/index.html",
    "revision": "c3feb208c46110b38200903995b34bc5"
  },
  {
    "url": "blog/tao-mp3-player-voi-html5-va-css3/index.html",
    "revision": "5276f0f07681f2aa2d063ca2575a564d"
  },
  {
    "url": "blog/thu-thuat-su-dung-sublime-text-2/index.html",
    "revision": "3b70e88cfbeb742f14e2916e9fdb6e5e"
  },
  {
    "url": "blog/tim-kiem-voi-algolia-hugo-va-vue/index.html",
    "revision": "2e52e07dd5c4eaeed431f2286c2fee9d"
  },
  {
    "url": "blog/web-storage/index.html",
    "revision": "46965d236cb96a4a023fcb10a48e846b"
  },
  {
    "url": "categories/index.html",
    "revision": "1699a5182ac6907a1e1d6dde0fb131a1"
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
    "revision": "80646478f16d5e49fd275085764db07b"
  },
  {
    "url": "index.xml",
    "revision": "9e6656b5b263ae6c8715c53e5ccaed27"
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
    "revision": "662855a34a06f20aa66d7c6727b3f9bf"
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
    "revision": "7038c0a5fee57fdad6796c5eb3fcef6c"
  },
  {
    "url": "page/3/index.html",
    "revision": "cbd03915a3c66b46a58ebc5ba0d7a767"
  },
  {
    "url": "page/4/index.html",
    "revision": "536cca2bda66410673040301222adcbc"
  },
  {
    "url": "post/index.html",
    "revision": "9e4d332b9bdd970ad28b68e0445b5ffd"
  },
  {
    "url": "post/index.xml",
    "revision": "ef23ffe675f608a47a8773f0d5c6b8f2"
  },
  {
    "url": "projects/index.html",
    "revision": "75dcd5d1e64ec42d258cc661829bb7c8"
  },
  {
    "url": "sitemap.xml",
    "revision": "db6cdbdb725c792385e5f9f8abe2dba6"
  },
  {
    "url": "tags/css/index.html",
    "revision": "37d76f9489c3f14c1135d27deaf4964c"
  },
  {
    "url": "tags/css/index.xml",
    "revision": "a710e911659f21c5b74a078af5483e92"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "5e4bd092ed86ccded18d4dcf08d92c5c"
  },
  {
    "url": "tags/hugo/index.xml",
    "revision": "69cdd12d04bddd7cca4fed907d97e26c"
  },
  {
    "url": "tags/index.html",
    "revision": "58ce39bbfb19e45bb81f1a521553e221"
  },
  {
    "url": "tags/index.xml",
    "revision": "f95ff285782a43cc6ea36d4c6afd2557"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "f37c2d29b5564de610ed16f2ca4cc9ac"
  },
  {
    "url": "tags/javascript/index.xml",
    "revision": "8ca0bce3c195f03978931581666ea6e4"
  },
  {
    "url": "tags/personal/index.html",
    "revision": "66768980814f05dc0c97fad789f68ff6"
  },
  {
    "url": "tags/personal/index.xml",
    "revision": "075558038177c92b2940ea11dffcf344"
  },
  {
    "url": "tags/postcss/index.html",
    "revision": "9e4e2709edbdd9c3ad1ea9b501a9dc31"
  },
  {
    "url": "tags/postcss/index.xml",
    "revision": "74a2d1dbb01ceb660dd63a16afd8aaf3"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "3a3f28c175a1210da5d7a4b664dd72b3"
  },
  {
    "url": "tags/sass/index.xml",
    "revision": "3ec12bb59e9042a8b1701e32c010205c"
  },
  {
    "url": "tags/tailwindcss/index.html",
    "revision": "a39e47d8e76e205acd1e642b53346989"
  },
  {
    "url": "tags/tailwindcss/index.xml",
    "revision": "d5f20f91429d8ca8ab57dd4fe4692c94"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "4afb49a48ec7ce4dbd68d0f0ee8329c5"
  },
  {
    "url": "tags/tools/index.xml",
    "revision": "a517ded81a68fc8cfddc9c2c97098286"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "64f6748269e9c33cc452e00b8955fabc"
  },
  {
    "url": "tags/vue/index.xml",
    "revision": "852bd5ca902f9805a6827c15260e91ac"
  }
]);
