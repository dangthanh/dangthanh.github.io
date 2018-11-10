importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js'
);

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "3b9f45e24eab96e84f283be3e0bc78f1"
  },
  {
    "url": "about/index.html",
    "revision": "8db481f825a565aee9f6476f1f9cf6e8"
  },
  {
    "url": "blog/blog-va-toi/index.html",
    "revision": "2a335a3ac62902780e1340558a1e0321"
  },
  {
    "url": "blog/checkboxes-jquery-plugin/index.html",
    "revision": "4144bb9afd7cc3e8b075af8af831a91d"
  },
  {
    "url": "blog/css-triangles-mixin-trong-sass/index.html",
    "revision": "dd99d4bc671978b308f2e576bf8aff65"
  },
  {
    "url": "blog/do-bong-mixin-voi-text-shadow/index.html",
    "revision": "8c645f3389af63852ebb16720e0a6233"
  },
  {
    "url": "blog/functional-css/index.html",
    "revision": "25700546795b816e1cade18eefe11655"
  },
  {
    "url": "blog/gioi-thieu-css3-transform/index.html",
    "revision": "30a2eeaeb8f0f570a3395b67ae0b167b"
  },
  {
    "url": "blog/html5-fullscreen-api/index.html",
    "revision": "81b05e588430ec3379f510fde3e65fa1"
  },
  {
    "url": "blog/html5-geolocation-va-leaflet/index.html",
    "revision": "e86cf631d9b8353ca1992d8eae4d0ab1"
  },
  {
    "url": "blog/postcss/index.html",
    "revision": "0f75d714bab0f702aba0b857f5236b63"
  },
  {
    "url": "blog/redesign-va-nhung-gi-tui-hoc/index.html",
    "revision": "7bc9c979eb72bb9a12a48ceb53029366"
  },
  {
    "url": "blog/su-dung-icon-fonts/index.html",
    "revision": "909db3a44a0bc1e57072c241c1d56ffa"
  },
  {
    "url": "blog/su-dung-sass/index.html",
    "revision": "ec5a09994be02c3e830a7df93a276f5c"
  },
  {
    "url": "blog/tao-mp3-player-voi-html5-va-css3/index.html",
    "revision": "9409ec31549593f035fc309e63f93c49"
  },
  {
    "url": "blog/thu-thuat-su-dung-sublime-text-2/index.html",
    "revision": "288ea32bde6affa1f3cdfb6cd1c272a0"
  },
  {
    "url": "blog/web-storage/index.html",
    "revision": "227bb43d6774e80fb0bb3cde5da48ca4"
  },
  {
    "url": "categories/index.html",
    "revision": "056c1a666379084314aeb5d6bfebcab1"
  },
  {
    "url": "categories/index.xml",
    "revision": "637d65dda8358e5f68f6959d44a764c1"
  },
  {
    "url": "css/anitya.min.b9ea1e4344bb1863e4e2d8af779e041bf1cfe4e34caa544b51cf04ede4a80b39.css",
    "revision": "937a05d0e05c424a94758fdadde3300a"
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
    "revision": "993857a71ea75972ee0970331f6f1746"
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
    "revision": "315fdcc778877c33ede989b612cebe96"
  },
  {
    "url": "page/3/index.html",
    "revision": "641a2868c3a33740e843ba77a90b5c44"
  },
  {
    "url": "post/index.html",
    "revision": "2e56747f3e2096eb6c588d2751a8fbf6"
  },
  {
    "url": "post/index.xml",
    "revision": "a755da49b15db3a0f15175b2e8c85bd5"
  },
  {
    "url": "projects/index.html",
    "revision": "5aa6ac6e1aa560b76fa8456a11a11ff0"
  },
  {
    "url": "sitemap.xml",
    "revision": "9b23bd287a4fc1f81a6661e88eb151ae"
  },
  {
    "url": "tags/css/index.html",
    "revision": "81448608b6beae94e599c7109ae4f667"
  },
  {
    "url": "tags/css/index.xml",
    "revision": "297f024fc7549d266f76217c686bd647"
  },
  {
    "url": "tags/hugo/index.html",
    "revision": "6b1688262c5dad083ab7aabdd771e938"
  },
  {
    "url": "tags/hugo/index.xml",
    "revision": "a4f021125987ebc41136d6997fcd9aec"
  },
  {
    "url": "tags/index.html",
    "revision": "707e2c1082cb1d75b2b303228577903e"
  },
  {
    "url": "tags/index.xml",
    "revision": "c18b5a5b89d540ff499cb72e930f67c7"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "8e8d055dfa1132bd81720c643fd18231"
  },
  {
    "url": "tags/javascript/index.xml",
    "revision": "fd230d00b73361947f5fb558792ed5a0"
  },
  {
    "url": "tags/personal/index.html",
    "revision": "cb213ad348f462a931b0a96af8043356"
  },
  {
    "url": "tags/personal/index.xml",
    "revision": "8154a47603c69d06f69a5b6df4f280b5"
  },
  {
    "url": "tags/postcss/index.html",
    "revision": "f2c2fb104e940e6cce4edb30a992cc2d"
  },
  {
    "url": "tags/postcss/index.xml",
    "revision": "9e8f0defa09b0b9ed968c683e33f0e53"
  },
  {
    "url": "tags/sass/index.html",
    "revision": "bcd4797e29e0ede86f22e078cd5f69b9"
  },
  {
    "url": "tags/sass/index.xml",
    "revision": "a02456fd600ebebe51f39ca570372e3b"
  },
  {
    "url": "tags/tailwindcss/index.html",
    "revision": "6a606fc3accb78c81b6ec76c2fca6be4"
  },
  {
    "url": "tags/tailwindcss/index.xml",
    "revision": "66a5dbb6c56843cbeba941a767fec942"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "a1c181462896ed1fabe38fba065b6667"
  },
  {
    "url": "tags/tools/index.xml",
    "revision": "a517ded81a68fc8cfddc9c2c97098286"
  }
]);
