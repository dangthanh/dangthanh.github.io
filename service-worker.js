/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

<<<<<<< HEAD
var precacheConfig = [["404.html","41b7c507871c85400b9c9b49fb6d4070"],["README.md","134c7672c481405f3861103de0aa64a0"],["about/index.html","79344d1b89ba2c0db0bd23569f195e0c"],["blog/blog-va-toi/index.html","00afe51cd2a74aa310f673c01fbb58b5"],["blog/checkboxes-jquery-plugin/index.html","ee5f313ff9afc3199648a9fd3bf952bf"],["blog/css-triangles-mixin-trong-sass/index.html","4f4843412c1ab20d0a034b9a220ac902"],["blog/do-bong-mixin-voi-text-shadow/index.html","bc720d27b80ca01dd78eb2928ac12128"],["blog/functional-css/index.html","f977df1d4a10dc14b52c69cb68030b3f"],["blog/gioi-thieu-css3-transform/index.html","d576d42fd4154226dc8d42f3f2eb90de"],["blog/html5-fullscreen-api/index.html","87b4697eccc030b698eaa97843905d98"],["blog/html5-geolocation-va-leaflet/index.html","d2707f62d33a597f9cd9cad60134397e"],["blog/postcss/index.html","a108ee82f18bbae8416ef631b8e48b06"],["blog/redesign-va-nhung-gi-tui-hoc/index.html","78fe4d26b6095365f28ffcd77a753d3d"],["blog/su-dung-icon-fonts/index.html","6f72a2c892a9fec037a55d09db606274"],["blog/su-dung-sass/index.html","b604f25988e1c631dd6f1b61714085d0"],["blog/tao-mp3-player-voi-html5-va-css3/index.html","e4d7433d047fb84a4b71eed84ca75de2"],["blog/thu-thuat-su-dung-sublime-text-2/index.html","06619b17e13f37f3b05a21bf007a626c"],["blog/web-storage/index.html","1353fd503fafa9179d52a3d74b5931a5"],["browserconfig.xml","1c32f682ad780c7a0ddb0d3608b14e8b"],["categories/index.html","53de1e7f24298cfde2f9e5954a39df8a"],["categories/index.xml","637d65dda8358e5f68f6959d44a764c1"],["css/anitya.min.d278f9e4174d14ee9d2e2b88053b717dea6619a85b35918ed79df9428374f1fc.css","1b1931c5c12e77bafba170b164d133d3"],["favicon.ico","0fdea87b3347f8371cf143f3434fd6b5"],["images/blog_v1.png","15869ac1296c611f8a961dff6487b3bb"],["images/blog_v1.webp","c8d5c2e28e43c90ce5e16bd0ce858cac"],["images/favicon/android-icon-144x144.png","f4b5153a2ee629a92a77392a6083d063"],["images/favicon/android-icon-192x192.png","63e34a514f65df82ea06b1eee5b24672"],["images/favicon/android-icon-36x36.png","e8e30536b3b359f9fa2137e65ce71e83"],["images/favicon/android-icon-48x48.png","b8892a3ad65f28b98ba1b9145abe4eb5"],["images/favicon/android-icon-512x512.png","63e34a514f65df82ea06b1eee5b24672"],["images/favicon/android-icon-72x72.png","687eb895fbf37078a1c9d27c75b4965d"],["images/favicon/android-icon-96x96.png","18b4cd4e7e5bc8b66d33fb5740dfd8be"],["images/favicon/apple-icon-114x114.png","7025d6bab10a376ba0c5f34dd035e8e3"],["images/favicon/apple-icon-120x120.png","2299ace92433195bc4e945b26c882d77"],["images/favicon/apple-icon-144x144.png","f4b5153a2ee629a92a77392a6083d063"],["images/favicon/apple-icon-152x152.png","2628af3dde0e88035d3572f9bd01dcf8"],["images/favicon/apple-icon-180x180.png","6bfb7836ffa85211057f7084e1b0acf3"],["images/favicon/apple-icon-57x57.png","14f1519c5a5e65efc2674d6ad34865fa"],["images/favicon/apple-icon-60x60.png","f8733ac82ca52b1b226d0f4b9fdc8ba4"],["images/favicon/apple-icon-72x72.png","687eb895fbf37078a1c9d27c75b4965d"],["images/favicon/apple-icon-76x76.png","49a2160419d2b62f6b42f4ea5e3a8a8d"],["images/favicon/apple-icon-precomposed.png","81abdbed764061ed12024aea0e4054d6"],["images/favicon/apple-icon.png","81abdbed764061ed12024aea0e4054d6"],["images/favicon/browserconfig.xml","1c32f682ad780c7a0ddb0d3608b14e8b"],["images/favicon/favicon-16x16.png","dffa80cc118a99ca89f6658a1e8686c1"],["images/favicon/favicon-32x32.png","c112ce3ad52a226a1b19538705d2561e"],["images/favicon/favicon-96x96.png","18b4cd4e7e5bc8b66d33fb5740dfd8be"],["images/favicon/favicon.ico","0fdea87b3347f8371cf143f3434fd6b5"],["images/favicon/manifest.json","2d4884c8eeff85b55d730fa48ea10090"],["images/favicon/ms-icon-144x144.png","f4b5153a2ee629a92a77392a6083d063"],["images/favicon/ms-icon-150x150.png","61144027f42ac4f011313177506f2508"],["images/favicon/ms-icon-310x310.png","594a160823468b80ae4d682e87e9e9be"],["images/favicon/ms-icon-70x70.png","59ee754500d41511040f15e1227aab17"],["images/favicon/mstile-150x150.png","c330b03ade52363eaf5fa3ea363b59fc"],["images/favicon/safari-pinned-tab.svg","4b97844e43aa4f27137e607b0d426b72"],["images/icomoon.jpg","ef562440f335f1a91db4cd9670828053"],["images/icomoon.webp","e5aeed27fbbd02aefd324de270f5d6db"],["images/localstorage.jpg","5b1560091fd1ab4bc90764dcdb08e6cb"],["images/localstorage.webp","1e59a5e1601c7f9179b2b115f6757fa4"],["images/package_control.jpg","b6e48f09cf6f0cd78974c50bf87c4f05"],["images/package_control.webp","ea478218c9ae5e3dd0eb97bc73956440"],["images/portfolio/css_flag.jpg","e3269774f190a3a12e1a1f7efd1e2ebe"],["images/portfolio/jquery-longshadow.png","c8de9c68875a3730b17c8721bffabb30"],["images/portfolio/longshadow_jquery_plugin.jpg","260e9d1fa9e970d935c2f1b3a40c416e"],["images/portfolio/postcss-longshadow.png","114fb03efe8af415b1f74782cd37fd07"],["images/portfolio/tipsy-sass.png","1cbd74e838dc59f12ddfdd619bdb6962"],["images/portfolio/vue-rollup-boilerplate.png","8d35067a7de287752f8b6cac5e719f59"],["images/rubyinstaller.jpg","a80f843adf350fd2773f724a2c3a5d37"],["images/rubyinstaller.webp","228ae34bfbf99b281c45469690a82c3b"],["images/sublime_text_2.jpg","e74458efe434308c8f51045921cd3a42"],["images/sublime_text_2.webp","c3fe631ca5fbf8ed6083cc769866c10e"],["images/weloveiconfonts.jpg","90d15fc06086ee0e617502eb458ba0ec"],["images/weloveiconfonts.webp","3591c7f45e7113456446852c0d232c5b"],["index.html","0f90d906c8cd1179c1d8450ad6f1c45c"],["index.xml","199ea68fc596d8033c0f1c510be95759"],["js/anitya.min.7d1c31ea696590943b4b34b392326c06d6c0d9deef1f4d09e63dd3aa44877e35.js","afd0c7c84065da2d4ac2ba5e6b8a7bcd"],["page/1/index.html","61213a483ce765735be579330546d42a"],["page/2/index.html","20e03e46003d9fd9e2bfbfaf74aeb8ed"],["page/3/index.html","f1512cae86974b0e98b7590a61f11518"],["post/index.html","78d7e4cb7b052508d4b620e8e7b6eefd"],["post/index.xml","a755da49b15db3a0f15175b2e8c85bd5"],["projects/index.html","85adb801be4f19da97c6be623904bd15"],["robots.txt","6978a616c585d03cb5b542a891995efb"],["sitemap.xml","dcdf97d4af6245ba5dde808c4e5a0c7e"],["tags/css/index.html","5c50c2fbb212b8a05c3e0b57971869ca"],["tags/css/index.xml","297f024fc7549d266f76217c686bd647"],["tags/hugo/index.html","6117c9afcf62c1caf62bafb662566a3e"],["tags/hugo/index.xml","a4f021125987ebc41136d6997fcd9aec"],["tags/index.html","a909d17ae719c9e8ae5a7ba14f0ab49c"],["tags/index.xml","335b8fd7ec6fba490b277eeadae67190"],["tags/javascript/index.html","dd8398792d055038c609840f8a21004d"],["tags/javascript/index.xml","65ddae04ccb89a277e68f96fdac493b1"],["tags/personal/index.html","cadee3eb85c8d142d6156f1f9604f372"],["tags/personal/index.xml","8154a47603c69d06f69a5b6df4f280b5"],["tags/postcss/index.html","8e4f86d1a668c4378f7ba59291b293d1"],["tags/postcss/index.xml","9e8f0defa09b0b9ed968c683e33f0e53"],["tags/sass/index.html","0ce48a068d708b3e49e5724cfa713402"],["tags/sass/index.xml","a02456fd600ebebe51f39ca570372e3b"],["tags/tailwindcss/index.html","2f9ee770dfd87504dbba6a40fa00224f"],["tags/tailwindcss/index.xml","66a5dbb6c56843cbeba941a767fec942"],["tags/tools/index.html","1eabfac6e4cd8443325025192256923f"],["tags/tools/index.xml","a517ded81a68fc8cfddc9c2c97098286"]];
=======
<<<<<<< HEAD
var precacheConfig = [["404.html","41b7c507871c85400b9c9b49fb6d4070"],["README.md","134c7672c481405f3861103de0aa64a0"],["about/index.html","79344d1b89ba2c0db0bd23569f195e0c"],["blog/blog-va-toi/index.html","00afe51cd2a74aa310f673c01fbb58b5"],["blog/checkboxes-jquery-plugin/index.html","ee5f313ff9afc3199648a9fd3bf952bf"],["blog/css-triangles-mixin-trong-sass/index.html","4f4843412c1ab20d0a034b9a220ac902"],["blog/do-bong-mixin-voi-text-shadow/index.html","bc720d27b80ca01dd78eb2928ac12128"],["blog/functional-css/index.html","f977df1d4a10dc14b52c69cb68030b3f"],["blog/gioi-thieu-css3-transform/index.html","d576d42fd4154226dc8d42f3f2eb90de"],["blog/html5-fullscreen-api/index.html","87b4697eccc030b698eaa97843905d98"],["blog/html5-geolocation-va-leaflet/index.html","d2707f62d33a597f9cd9cad60134397e"],["blog/postcss/index.html","a108ee82f18bbae8416ef631b8e48b06"],["blog/redesign-va-nhung-gi-tui-hoc/index.html","78fe4d26b6095365f28ffcd77a753d3d"],["blog/su-dung-icon-fonts/index.html","6f72a2c892a9fec037a55d09db606274"],["blog/su-dung-sass/index.html","b604f25988e1c631dd6f1b61714085d0"],["blog/tao-mp3-player-voi-html5-va-css3/index.html","e4d7433d047fb84a4b71eed84ca75de2"],["blog/thu-thuat-su-dung-sublime-text-2/index.html","06619b17e13f37f3b05a21bf007a626c"],["blog/web-storage/index.html","1353fd503fafa9179d52a3d74b5931a5"],["browserconfig.xml","1c32f682ad780c7a0ddb0d3608b14e8b"],["categories/index.html","53de1e7f24298cfde2f9e5954a39df8a"],["categories/index.xml","637d65dda8358e5f68f6959d44a764c1"],["css/anitya.min.d278f9e4174d14ee9d2e2b88053b717dea6619a85b35918ed79df9428374f1fc.css","1b1931c5c12e77bafba170b164d133d3"],["favicon.ico","0fdea87b3347f8371cf143f3434fd6b5"],["images/blog_v1.png","15869ac1296c611f8a961dff6487b3bb"],["images/blog_v1.webp","c8d5c2e28e43c90ce5e16bd0ce858cac"],["images/favicon/android-icon-144x144.png","f4b5153a2ee629a92a77392a6083d063"],["images/favicon/android-icon-192x192.png","63e34a514f65df82ea06b1eee5b24672"],["images/favicon/android-icon-36x36.png","e8e30536b3b359f9fa2137e65ce71e83"],["images/favicon/android-icon-48x48.png","b8892a3ad65f28b98ba1b9145abe4eb5"],["images/favicon/android-icon-512x512.png","63e34a514f65df82ea06b1eee5b24672"],["images/favicon/android-icon-72x72.png","687eb895fbf37078a1c9d27c75b4965d"],["images/favicon/android-icon-96x96.png","18b4cd4e7e5bc8b66d33fb5740dfd8be"],["images/favicon/apple-icon-114x114.png","7025d6bab10a376ba0c5f34dd035e8e3"],["images/favicon/apple-icon-120x120.png","2299ace92433195bc4e945b26c882d77"],["images/favicon/apple-icon-144x144.png","f4b5153a2ee629a92a77392a6083d063"],["images/favicon/apple-icon-152x152.png","2628af3dde0e88035d3572f9bd01dcf8"],["images/favicon/apple-icon-180x180.png","6bfb7836ffa85211057f7084e1b0acf3"],["images/favicon/apple-icon-57x57.png","14f1519c5a5e65efc2674d6ad34865fa"],["images/favicon/apple-icon-60x60.png","f8733ac82ca52b1b226d0f4b9fdc8ba4"],["images/favicon/apple-icon-72x72.png","687eb895fbf37078a1c9d27c75b4965d"],["images/favicon/apple-icon-76x76.png","49a2160419d2b62f6b42f4ea5e3a8a8d"],["images/favicon/apple-icon-precomposed.png","81abdbed764061ed12024aea0e4054d6"],["images/favicon/apple-icon.png","81abdbed764061ed12024aea0e4054d6"],["images/favicon/browserconfig.xml","1c32f682ad780c7a0ddb0d3608b14e8b"],["images/favicon/favicon-16x16.png","dffa80cc118a99ca89f6658a1e8686c1"],["images/favicon/favicon-32x32.png","c112ce3ad52a226a1b19538705d2561e"],["images/favicon/favicon-96x96.png","18b4cd4e7e5bc8b66d33fb5740dfd8be"],["images/favicon/favicon.ico","0fdea87b3347f8371cf143f3434fd6b5"],["images/favicon/manifest.json","2d4884c8eeff85b55d730fa48ea10090"],["images/favicon/ms-icon-144x144.png","f4b5153a2ee629a92a77392a6083d063"],["images/favicon/ms-icon-150x150.png","61144027f42ac4f011313177506f2508"],["images/favicon/ms-icon-310x310.png","594a160823468b80ae4d682e87e9e9be"],["images/favicon/ms-icon-70x70.png","59ee754500d41511040f15e1227aab17"],["images/favicon/mstile-150x150.png","c330b03ade52363eaf5fa3ea363b59fc"],["images/favicon/safari-pinned-tab.svg","4b97844e43aa4f27137e607b0d426b72"],["images/icomoon.jpg","ef562440f335f1a91db4cd9670828053"],["images/icomoon.webp","e5aeed27fbbd02aefd324de270f5d6db"],["images/localstorage.jpg","5b1560091fd1ab4bc90764dcdb08e6cb"],["images/localstorage.webp","1e59a5e1601c7f9179b2b115f6757fa4"],["images/package_control.jpg","b6e48f09cf6f0cd78974c50bf87c4f05"],["images/package_control.webp","ea478218c9ae5e3dd0eb97bc73956440"],["images/portfolio/css_flag.jpg","e3269774f190a3a12e1a1f7efd1e2ebe"],["images/portfolio/jquery-longshadow.png","c8de9c68875a3730b17c8721bffabb30"],["images/portfolio/longshadow_jquery_plugin.jpg","260e9d1fa9e970d935c2f1b3a40c416e"],["images/portfolio/postcss-longshadow.png","114fb03efe8af415b1f74782cd37fd07"],["images/portfolio/tipsy-sass.png","1cbd74e838dc59f12ddfdd619bdb6962"],["images/portfolio/vue-rollup-boilerplate.png","8d35067a7de287752f8b6cac5e719f59"],["images/rubyinstaller.jpg","a80f843adf350fd2773f724a2c3a5d37"],["images/rubyinstaller.webp","228ae34bfbf99b281c45469690a82c3b"],["images/sublime_text_2.jpg","e74458efe434308c8f51045921cd3a42"],["images/sublime_text_2.webp","c3fe631ca5fbf8ed6083cc769866c10e"],["images/weloveiconfonts.jpg","90d15fc06086ee0e617502eb458ba0ec"],["images/weloveiconfonts.webp","3591c7f45e7113456446852c0d232c5b"],["index.html","0f90d906c8cd1179c1d8450ad6f1c45c"],["index.xml","199ea68fc596d8033c0f1c510be95759"],["js/anitya.min.7d1c31ea696590943b4b34b392326c06d6c0d9deef1f4d09e63dd3aa44877e35.js","afd0c7c84065da2d4ac2ba5e6b8a7bcd"],["page/1/index.html","61213a483ce765735be579330546d42a"],["page/2/index.html","20e03e46003d9fd9e2bfbfaf74aeb8ed"],["page/3/index.html","f1512cae86974b0e98b7590a61f11518"],["post/index.html","78d7e4cb7b052508d4b620e8e7b6eefd"],["post/index.xml","a755da49b15db3a0f15175b2e8c85bd5"],["projects/index.html","85adb801be4f19da97c6be623904bd15"],["robots.txt","6978a616c585d03cb5b542a891995efb"],["sitemap.xml","dcdf97d4af6245ba5dde808c4e5a0c7e"],["tags/css/index.html","5c50c2fbb212b8a05c3e0b57971869ca"],["tags/css/index.xml","297f024fc7549d266f76217c686bd647"],["tags/hugo/index.html","6117c9afcf62c1caf62bafb662566a3e"],["tags/hugo/index.xml","a4f021125987ebc41136d6997fcd9aec"],["tags/index.html","a909d17ae719c9e8ae5a7ba14f0ab49c"],["tags/index.xml","335b8fd7ec6fba490b277eeadae67190"],["tags/javascript/index.html","dd8398792d055038c609840f8a21004d"],["tags/javascript/index.xml","65ddae04ccb89a277e68f96fdac493b1"],["tags/personal/index.html","cadee3eb85c8d142d6156f1f9604f372"],["tags/personal/index.xml","8154a47603c69d06f69a5b6df4f280b5"],["tags/postcss/index.html","8e4f86d1a668c4378f7ba59291b293d1"],["tags/postcss/index.xml","9e8f0defa09b0b9ed968c683e33f0e53"],["tags/sass/index.html","0ce48a068d708b3e49e5724cfa713402"],["tags/sass/index.xml","a02456fd600ebebe51f39ca570372e3b"],["tags/tailwindcss/index.html","2f9ee770dfd87504dbba6a40fa00224f"],["tags/tailwindcss/index.xml","66a5dbb6c56843cbeba941a767fec942"],["tags/tools/index.html","1eabfac6e4cd8443325025192256923f"],["tags/tools/index.xml","a517ded81a68fc8cfddc9c2c97098286"]];
=======
<<<<<<< HEAD:public/service-worker.js
var precacheConfig = [["404.html","41b7c507871c85400b9c9b49fb6d4070"],["README.md","134c7672c481405f3861103de0aa64a0"],["about/index.html","79344d1b89ba2c0db0bd23569f195e0c"],["blog/blog-va-toi/index.html","00afe51cd2a74aa310f673c01fbb58b5"],["blog/checkboxes-jquery-plugin/index.html","ee5f313ff9afc3199648a9fd3bf952bf"],["blog/css-triangles-mixin-trong-sass/index.html","4f4843412c1ab20d0a034b9a220ac902"],["blog/do-bong-mixin-voi-text-shadow/index.html","bc720d27b80ca01dd78eb2928ac12128"],["blog/functional-css/index.html","f977df1d4a10dc14b52c69cb68030b3f"],["blog/gioi-thieu-css3-transform/index.html","d576d42fd4154226dc8d42f3f2eb90de"],["blog/html5-fullscreen-api/index.html","87b4697eccc030b698eaa97843905d98"],["blog/html5-geolocation-va-leaflet/index.html","d2707f62d33a597f9cd9cad60134397e"],["blog/postcss/index.html","a108ee82f18bbae8416ef631b8e48b06"],["blog/redesign-va-nhung-gi-tui-hoc/index.html","78fe4d26b6095365f28ffcd77a753d3d"],["blog/su-dung-icon-fonts/index.html","6f72a2c892a9fec037a55d09db606274"],["blog/su-dung-sass/index.html","b604f25988e1c631dd6f1b61714085d0"],["blog/tao-mp3-player-voi-html5-va-css3/index.html","e4d7433d047fb84a4b71eed84ca75de2"],["blog/thu-thuat-su-dung-sublime-text-2/index.html","06619b17e13f37f3b05a21bf007a626c"],["blog/web-storage/index.html","1353fd503fafa9179d52a3d74b5931a5"],["browserconfig.xml","1c32f682ad780c7a0ddb0d3608b14e8b"],["categories/index.html","53de1e7f24298cfde2f9e5954a39df8a"],["categories/index.xml","637d65dda8358e5f68f6959d44a764c1"],["css/anitya.min.d278f9e4174d14ee9d2e2b88053b717dea6619a85b35918ed79df9428374f1fc.css","1b1931c5c12e77bafba170b164d133d3"],["favicon.ico","0fdea87b3347f8371cf143f3434fd6b5"],["images/blog_v1.png","15869ac1296c611f8a961dff6487b3bb"],["images/blog_v1.webp","c8d5c2e28e43c90ce5e16bd0ce858cac"],["images/favicon/android-icon-144x144.png","f4b5153a2ee629a92a77392a6083d063"],["images/favicon/android-icon-192x192.png","63e34a514f65df82ea06b1eee5b24672"],["images/favicon/android-icon-36x36.png","e8e30536b3b359f9fa2137e65ce71e83"],["images/favicon/android-icon-48x48.png","b8892a3ad65f28b98ba1b9145abe4eb5"],["images/favicon/android-icon-512x512.png","63e34a514f65df82ea06b1eee5b24672"],["images/favicon/android-icon-72x72.png","687eb895fbf37078a1c9d27c75b4965d"],["images/favicon/android-icon-96x96.png","18b4cd4e7e5bc8b66d33fb5740dfd8be"],["images/favicon/apple-icon-114x114.png","7025d6bab10a376ba0c5f34dd035e8e3"],["images/favicon/apple-icon-120x120.png","2299ace92433195bc4e945b26c882d77"],["images/favicon/apple-icon-144x144.png","f4b5153a2ee629a92a77392a6083d063"],["images/favicon/apple-icon-152x152.png","2628af3dde0e88035d3572f9bd01dcf8"],["images/favicon/apple-icon-180x180.png","6bfb7836ffa85211057f7084e1b0acf3"],["images/favicon/apple-icon-57x57.png","14f1519c5a5e65efc2674d6ad34865fa"],["images/favicon/apple-icon-60x60.png","f8733ac82ca52b1b226d0f4b9fdc8ba4"],["images/favicon/apple-icon-72x72.png","687eb895fbf37078a1c9d27c75b4965d"],["images/favicon/apple-icon-76x76.png","49a2160419d2b62f6b42f4ea5e3a8a8d"],["images/favicon/apple-icon-precomposed.png","81abdbed764061ed12024aea0e4054d6"],["images/favicon/apple-icon.png","81abdbed764061ed12024aea0e4054d6"],["images/favicon/browserconfig.xml","1c32f682ad780c7a0ddb0d3608b14e8b"],["images/favicon/favicon-16x16.png","dffa80cc118a99ca89f6658a1e8686c1"],["images/favicon/favicon-32x32.png","c112ce3ad52a226a1b19538705d2561e"],["images/favicon/favicon-96x96.png","18b4cd4e7e5bc8b66d33fb5740dfd8be"],["images/favicon/favicon.ico","0fdea87b3347f8371cf143f3434fd6b5"],["images/favicon/manifest.json","2d4884c8eeff85b55d730fa48ea10090"],["images/favicon/ms-icon-144x144.png","f4b5153a2ee629a92a77392a6083d063"],["images/favicon/ms-icon-150x150.png","61144027f42ac4f011313177506f2508"],["images/favicon/ms-icon-310x310.png","594a160823468b80ae4d682e87e9e9be"],["images/favicon/ms-icon-70x70.png","59ee754500d41511040f15e1227aab17"],["images/favicon/mstile-150x150.png","c330b03ade52363eaf5fa3ea363b59fc"],["images/favicon/safari-pinned-tab.svg","4b97844e43aa4f27137e607b0d426b72"],["images/icomoon.jpg","ef562440f335f1a91db4cd9670828053"],["images/icomoon.webp","e5aeed27fbbd02aefd324de270f5d6db"],["images/localstorage.jpg","5b1560091fd1ab4bc90764dcdb08e6cb"],["images/localstorage.webp","1e59a5e1601c7f9179b2b115f6757fa4"],["images/package_control.jpg","b6e48f09cf6f0cd78974c50bf87c4f05"],["images/package_control.webp","ea478218c9ae5e3dd0eb97bc73956440"],["images/portfolio/css_flag.jpg","e3269774f190a3a12e1a1f7efd1e2ebe"],["images/portfolio/jquery-longshadow.png","c8de9c68875a3730b17c8721bffabb30"],["images/portfolio/longshadow_jquery_plugin.jpg","260e9d1fa9e970d935c2f1b3a40c416e"],["images/portfolio/postcss-longshadow.png","114fb03efe8af415b1f74782cd37fd07"],["images/portfolio/tipsy-sass.png","1cbd74e838dc59f12ddfdd619bdb6962"],["images/portfolio/vue-rollup-boilerplate.png","8d35067a7de287752f8b6cac5e719f59"],["images/rubyinstaller.jpg","a80f843adf350fd2773f724a2c3a5d37"],["images/rubyinstaller.webp","228ae34bfbf99b281c45469690a82c3b"],["images/sublime_text_2.jpg","e74458efe434308c8f51045921cd3a42"],["images/sublime_text_2.webp","c3fe631ca5fbf8ed6083cc769866c10e"],["images/weloveiconfonts.jpg","90d15fc06086ee0e617502eb458ba0ec"],["images/weloveiconfonts.webp","3591c7f45e7113456446852c0d232c5b"],["index.html","0f90d906c8cd1179c1d8450ad6f1c45c"],["index.xml","199ea68fc596d8033c0f1c510be95759"],["js/anitya.min.7d1c31ea696590943b4b34b392326c06d6c0d9deef1f4d09e63dd3aa44877e35.js","afd0c7c84065da2d4ac2ba5e6b8a7bcd"],["page/1/index.html","61213a483ce765735be579330546d42a"],["page/2/index.html","20e03e46003d9fd9e2bfbfaf74aeb8ed"],["page/3/index.html","f1512cae86974b0e98b7590a61f11518"],["post/index.html","78d7e4cb7b052508d4b620e8e7b6eefd"],["post/index.xml","a755da49b15db3a0f15175b2e8c85bd5"],["projects/index.html","85adb801be4f19da97c6be623904bd15"],["robots.txt","6978a616c585d03cb5b542a891995efb"],["sitemap.xml","dcdf97d4af6245ba5dde808c4e5a0c7e"],["tags/css/index.html","5c50c2fbb212b8a05c3e0b57971869ca"],["tags/css/index.xml","297f024fc7549d266f76217c686bd647"],["tags/hugo/index.html","6117c9afcf62c1caf62bafb662566a3e"],["tags/hugo/index.xml","a4f021125987ebc41136d6997fcd9aec"],["tags/index.html","a909d17ae719c9e8ae5a7ba14f0ab49c"],["tags/index.xml","335b8fd7ec6fba490b277eeadae67190"],["tags/javascript/index.html","dd8398792d055038c609840f8a21004d"],["tags/javascript/index.xml","65ddae04ccb89a277e68f96fdac493b1"],["tags/personal/index.html","cadee3eb85c8d142d6156f1f9604f372"],["tags/personal/index.xml","8154a47603c69d06f69a5b6df4f280b5"],["tags/postcss/index.html","8e4f86d1a668c4378f7ba59291b293d1"],["tags/postcss/index.xml","9e8f0defa09b0b9ed968c683e33f0e53"],["tags/sass/index.html","0ce48a068d708b3e49e5724cfa713402"],["tags/sass/index.xml","a02456fd600ebebe51f39ca570372e3b"],["tags/tailwindcss/index.html","2f9ee770dfd87504dbba6a40fa00224f"],["tags/tailwindcss/index.xml","66a5dbb6c56843cbeba941a767fec942"],["tags/tools/index.html","1eabfac6e4cd8443325025192256923f"],["tags/tools/index.xml","a517ded81a68fc8cfddc9c2c97098286"]];
=======
var precacheConfig = [["404.html","41b7c507871c85400b9c9b49fb6d4070"],["about/index.html","79344d1b89ba2c0db0bd23569f195e0c"],["blog/blog-va-toi/index.html","00afe51cd2a74aa310f673c01fbb58b5"],["blog/checkboxes-jquery-plugin/index.html","ee5f313ff9afc3199648a9fd3bf952bf"],["blog/css-triangles-mixin-trong-sass/index.html","4f4843412c1ab20d0a034b9a220ac902"],["blog/do-bong-mixin-voi-text-shadow/index.html","bc720d27b80ca01dd78eb2928ac12128"],["blog/functional-css/index.html","f977df1d4a10dc14b52c69cb68030b3f"],["blog/gioi-thieu-css3-transform/index.html","d576d42fd4154226dc8d42f3f2eb90de"],["blog/html5-fullscreen-api/index.html","87b4697eccc030b698eaa97843905d98"],["blog/html5-geolocation-va-leaflet/index.html","d2707f62d33a597f9cd9cad60134397e"],["blog/postcss/index.html","a108ee82f18bbae8416ef631b8e48b06"],["blog/redesign-va-nhung-gi-tui-hoc/index.html","78fe4d26b6095365f28ffcd77a753d3d"],["blog/su-dung-icon-fonts/index.html","6f72a2c892a9fec037a55d09db606274"],["blog/su-dung-sass/index.html","b604f25988e1c631dd6f1b61714085d0"],["blog/tao-mp3-player-voi-html5-va-css3/index.html","e4d7433d047fb84a4b71eed84ca75de2"],["blog/thu-thuat-su-dung-sublime-text-2/index.html","06619b17e13f37f3b05a21bf007a626c"],["blog/web-storage/index.html","1353fd503fafa9179d52a3d74b5931a5"],["categories/index.html","53de1e7f24298cfde2f9e5954a39df8a"],["categories/index.xml","637d65dda8358e5f68f6959d44a764c1"],["css/anitya.min.d278f9e4174d14ee9d2e2b88053b717dea6619a85b35918ed79df9428374f1fc.css","1b1931c5c12e77bafba170b164d133d3"],["images/blog_v1.png","15869ac1296c611f8a961dff6487b3bb"],["images/blog_v1.webp","c8d5c2e28e43c90ce5e16bd0ce858cac"],["images/favicon/android-icon-144x144.png","f4b5153a2ee629a92a77392a6083d063"],["images/favicon/android-icon-192x192.png","63e34a514f65df82ea06b1eee5b24672"],["images/favicon/android-icon-36x36.png","e8e30536b3b359f9fa2137e65ce71e83"],["images/favicon/android-icon-48x48.png","b8892a3ad65f28b98ba1b9145abe4eb5"],["images/favicon/android-icon-512x512.png","63e34a514f65df82ea06b1eee5b24672"],["images/favicon/android-icon-72x72.png","687eb895fbf37078a1c9d27c75b4965d"],["images/favicon/android-icon-96x96.png","18b4cd4e7e5bc8b66d33fb5740dfd8be"],["images/favicon/apple-icon-114x114.png","7025d6bab10a376ba0c5f34dd035e8e3"],["images/favicon/apple-icon-120x120.png","2299ace92433195bc4e945b26c882d77"],["images/favicon/apple-icon-144x144.png","f4b5153a2ee629a92a77392a6083d063"],["images/favicon/apple-icon-152x152.png","2628af3dde0e88035d3572f9bd01dcf8"],["images/favicon/apple-icon-180x180.png","6bfb7836ffa85211057f7084e1b0acf3"],["images/favicon/apple-icon-57x57.png","14f1519c5a5e65efc2674d6ad34865fa"],["images/favicon/apple-icon-60x60.png","f8733ac82ca52b1b226d0f4b9fdc8ba4"],["images/favicon/apple-icon-72x72.png","687eb895fbf37078a1c9d27c75b4965d"],["images/favicon/apple-icon-76x76.png","49a2160419d2b62f6b42f4ea5e3a8a8d"],["images/favicon/apple-icon-precomposed.png","81abdbed764061ed12024aea0e4054d6"],["images/favicon/apple-icon.png","81abdbed764061ed12024aea0e4054d6"],["images/favicon/browserconfig.xml","1c32f682ad780c7a0ddb0d3608b14e8b"],["images/favicon/favicon-16x16.png","dffa80cc118a99ca89f6658a1e8686c1"],["images/favicon/favicon-32x32.png","c112ce3ad52a226a1b19538705d2561e"],["images/favicon/favicon-96x96.png","18b4cd4e7e5bc8b66d33fb5740dfd8be"],["images/favicon/favicon.ico","0fdea87b3347f8371cf143f3434fd6b5"],["images/favicon/manifest.json","2d4884c8eeff85b55d730fa48ea10090"],["images/favicon/ms-icon-144x144.png","f4b5153a2ee629a92a77392a6083d063"],["images/favicon/ms-icon-150x150.png","61144027f42ac4f011313177506f2508"],["images/favicon/ms-icon-310x310.png","594a160823468b80ae4d682e87e9e9be"],["images/favicon/ms-icon-70x70.png","59ee754500d41511040f15e1227aab17"],["images/favicon/mstile-150x150.png","c330b03ade52363eaf5fa3ea363b59fc"],["images/favicon/safari-pinned-tab.svg","4b97844e43aa4f27137e607b0d426b72"],["images/icomoon.jpg","ef562440f335f1a91db4cd9670828053"],["images/icomoon.webp","e5aeed27fbbd02aefd324de270f5d6db"],["images/localstorage.jpg","5b1560091fd1ab4bc90764dcdb08e6cb"],["images/localstorage.webp","1e59a5e1601c7f9179b2b115f6757fa4"],["images/package_control.jpg","b6e48f09cf6f0cd78974c50bf87c4f05"],["images/package_control.webp","ea478218c9ae5e3dd0eb97bc73956440"],["images/portfolio/css_flag.jpg","e3269774f190a3a12e1a1f7efd1e2ebe"],["images/portfolio/jquery-longshadow.png","c8de9c68875a3730b17c8721bffabb30"],["images/portfolio/longshadow_jquery_plugin.jpg","260e9d1fa9e970d935c2f1b3a40c416e"],["images/portfolio/postcss-longshadow.png","114fb03efe8af415b1f74782cd37fd07"],["images/portfolio/tipsy-sass.png","1cbd74e838dc59f12ddfdd619bdb6962"],["images/portfolio/vue-rollup-boilerplate.png","8d35067a7de287752f8b6cac5e719f59"],["images/rubyinstaller.jpg","a80f843adf350fd2773f724a2c3a5d37"],["images/rubyinstaller.webp","228ae34bfbf99b281c45469690a82c3b"],["images/sublime_text_2.jpg","e74458efe434308c8f51045921cd3a42"],["images/sublime_text_2.webp","c3fe631ca5fbf8ed6083cc769866c10e"],["images/weloveiconfonts.jpg","90d15fc06086ee0e617502eb458ba0ec"],["images/weloveiconfonts.webp","3591c7f45e7113456446852c0d232c5b"],["index.html","0f90d906c8cd1179c1d8450ad6f1c45c"],["index.xml","199ea68fc596d8033c0f1c510be95759"],["js/anitya.min.7d1c31ea696590943b4b34b392326c06d6c0d9deef1f4d09e63dd3aa44877e35.js","afd0c7c84065da2d4ac2ba5e6b8a7bcd"],["page/1/index.html","61213a483ce765735be579330546d42a"],["page/2/index.html","20e03e46003d9fd9e2bfbfaf74aeb8ed"],["page/3/index.html","f1512cae86974b0e98b7590a61f11518"],["post/index.html","78d7e4cb7b052508d4b620e8e7b6eefd"],["post/index.xml","a755da49b15db3a0f15175b2e8c85bd5"],["projects/index.html","85adb801be4f19da97c6be623904bd15"],["sitemap.xml","dcdf97d4af6245ba5dde808c4e5a0c7e"],["tags/css/index.html","5c50c2fbb212b8a05c3e0b57971869ca"],["tags/css/index.xml","297f024fc7549d266f76217c686bd647"],["tags/hugo/index.html","6117c9afcf62c1caf62bafb662566a3e"],["tags/hugo/index.xml","a4f021125987ebc41136d6997fcd9aec"],["tags/index.html","a909d17ae719c9e8ae5a7ba14f0ab49c"],["tags/index.xml","335b8fd7ec6fba490b277eeadae67190"],["tags/javascript/index.html","dd8398792d055038c609840f8a21004d"],["tags/javascript/index.xml","65ddae04ccb89a277e68f96fdac493b1"],["tags/personal/index.html","cadee3eb85c8d142d6156f1f9604f372"],["tags/personal/index.xml","8154a47603c69d06f69a5b6df4f280b5"],["tags/postcss/index.html","8e4f86d1a668c4378f7ba59291b293d1"],["tags/postcss/index.xml","9e8f0defa09b0b9ed968c683e33f0e53"],["tags/sass/index.html","0ce48a068d708b3e49e5724cfa713402"],["tags/sass/index.xml","a02456fd600ebebe51f39ca570372e3b"],["tags/tailwindcss/index.html","2f9ee770dfd87504dbba6a40fa00224f"],["tags/tailwindcss/index.xml","66a5dbb6c56843cbeba941a767fec942"],["tags/tools/index.html","1eabfac6e4cd8443325025192256923f"],["tags/tools/index.xml","a517ded81a68fc8cfddc9c2c97098286"]];
>>>>>>> 82d03cf3d73d405037fce04aeb214db1bb03d9cd:public/service-worker.js
>>>>>>> c1a6c629ade0880122b1ce6a4f031169564aa35e
>>>>>>> 25fb96c6c00df9289b545446fab39270bbf91c83
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







