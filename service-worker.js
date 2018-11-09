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

var precacheConfig = [["404.html","1334c2c84cb74bcf3752c09ab091d997"],["about/index.html","270ce46ec499fdddd451fc709b17ecec"],["blog/blog-va-toi/index.html","afa61ac6f1f71021b71e94988c8e5148"],["blog/checkboxes-jquery-plugin/index.html","2a903a993369cdd1927c0ccc98957b32"],["blog/css-triangles-mixin-trong-sass/index.html","4430c9e5238f62d1fd0cd4451110ba23"],["blog/do-bong-mixin-voi-text-shadow/index.html","1b3779a02c4645b639ffce9f30abad7f"],["blog/functional-css/index.html","08f6da344048d8aef929f0c45195f2e1"],["blog/gioi-thieu-css3-transform/index.html","cde02de76689544df44b7d24abc02fb8"],["blog/html5-fullscreen-api/index.html","304a0deb5f4d9a41818dad3ffc8df038"],["blog/html5-geolocation-va-leaflet/index.html","e45717c73a8245d4c564a89128919e54"],["blog/postcss/index.html","7447b0b6adf4ee5ed89243ef4c753838"],["blog/redesign-va-nhung-gi-tui-hoc/index.html","d21a1e7ef9555702b39b21e9d4ff4085"],["blog/su-dung-icon-fonts/index.html","5fdb4cc746c69bb767e306bde2097f59"],["blog/su-dung-sass/index.html","6093b0f89d74f5d6df33f68fe7ff324c"],["blog/tao-mp3-player-voi-html5-va-css3/index.html","acb3cd6764db265955d089e8ec3a80e2"],["blog/thu-thuat-su-dung-sublime-text-2/index.html","37df216b9c320dc98932d3d022882539"],["blog/web-storage/index.html","32317dad950526749aa9ae35fbe64450"],["categories/index.html","b5a6ff1e4bfc4962a2c3ad68e6c4777e"],["categories/index.xml","637d65dda8358e5f68f6959d44a764c1"],["css/anitya.min.b9ea1e4344bb1863e4e2d8af779e041bf1cfe4e34caa544b51cf04ede4a80b39.css","937a05d0e05c424a94758fdadde3300a"],["images/blog_v1.png","15869ac1296c611f8a961dff6487b3bb"],["images/blog_v2.png","36f598eb7364a002b421c8f8f33171ff"],["images/favicon/android-icon-144x144.png","f4b5153a2ee629a92a77392a6083d063"],["images/favicon/android-icon-192x192.png","63e34a514f65df82ea06b1eee5b24672"],["images/favicon/android-icon-36x36.png","e8e30536b3b359f9fa2137e65ce71e83"],["images/favicon/android-icon-48x48.png","b8892a3ad65f28b98ba1b9145abe4eb5"],["images/favicon/android-icon-512x512.png","63e34a514f65df82ea06b1eee5b24672"],["images/favicon/android-icon-72x72.png","687eb895fbf37078a1c9d27c75b4965d"],["images/favicon/android-icon-96x96.png","18b4cd4e7e5bc8b66d33fb5740dfd8be"],["images/favicon/apple-icon-114x114.png","7025d6bab10a376ba0c5f34dd035e8e3"],["images/favicon/apple-icon-120x120.png","2299ace92433195bc4e945b26c882d77"],["images/favicon/apple-icon-144x144.png","f4b5153a2ee629a92a77392a6083d063"],["images/favicon/apple-icon-152x152.png","2628af3dde0e88035d3572f9bd01dcf8"],["images/favicon/apple-icon-180x180.png","6bfb7836ffa85211057f7084e1b0acf3"],["images/favicon/apple-icon-57x57.png","14f1519c5a5e65efc2674d6ad34865fa"],["images/favicon/apple-icon-60x60.png","f8733ac82ca52b1b226d0f4b9fdc8ba4"],["images/favicon/apple-icon-72x72.png","687eb895fbf37078a1c9d27c75b4965d"],["images/favicon/apple-icon-76x76.png","49a2160419d2b62f6b42f4ea5e3a8a8d"],["images/favicon/apple-icon-precomposed.png","81abdbed764061ed12024aea0e4054d6"],["images/favicon/apple-icon.png","81abdbed764061ed12024aea0e4054d6"],["images/favicon/browserconfig.xml","1c32f682ad780c7a0ddb0d3608b14e8b"],["images/favicon/favicon-16x16.png","dffa80cc118a99ca89f6658a1e8686c1"],["images/favicon/favicon-32x32.png","c112ce3ad52a226a1b19538705d2561e"],["images/favicon/favicon-96x96.png","18b4cd4e7e5bc8b66d33fb5740dfd8be"],["images/favicon/favicon.ico","0fdea87b3347f8371cf143f3434fd6b5"],["images/favicon/manifest.json","2d4884c8eeff85b55d730fa48ea10090"],["images/favicon/ms-icon-144x144.png","f4b5153a2ee629a92a77392a6083d063"],["images/favicon/ms-icon-150x150.png","61144027f42ac4f011313177506f2508"],["images/favicon/ms-icon-310x310.png","594a160823468b80ae4d682e87e9e9be"],["images/favicon/ms-icon-70x70.png","59ee754500d41511040f15e1227aab17"],["images/favicon/mstile-150x150.png","c330b03ade52363eaf5fa3ea363b59fc"],["images/favicon/safari-pinned-tab.svg","4b97844e43aa4f27137e607b0d426b72"],["images/icomoon.jpg","ef562440f335f1a91db4cd9670828053"],["images/localstorage.jpg","5b1560091fd1ab4bc90764dcdb08e6cb"],["images/package_control.jpg","b6e48f09cf6f0cd78974c50bf87c4f05"],["images/portfolio/css_flag.jpg","e3269774f190a3a12e1a1f7efd1e2ebe"],["images/portfolio/jquery-longshadow.png","c8de9c68875a3730b17c8721bffabb30"],["images/portfolio/longshadow_jquery_plugin.jpg","260e9d1fa9e970d935c2f1b3a40c416e"],["images/portfolio/postcss-longshadow.png","114fb03efe8af415b1f74782cd37fd07"],["images/portfolio/tipsy-sass.png","1cbd74e838dc59f12ddfdd619bdb6962"],["images/portfolio/vue-rollup-boilerplate.png","8d35067a7de287752f8b6cac5e719f59"],["images/rubyinstaller.jpg","a80f843adf350fd2773f724a2c3a5d37"],["images/sublime_text_2.jpg","e74458efe434308c8f51045921cd3a42"],["images/weloveiconfonts.jpg","90d15fc06086ee0e617502eb458ba0ec"],["index.html","4e31990d79f7c2ed692aea1107e16356"],["index.xml","199ea68fc596d8033c0f1c510be95759"],["js/anitya.min.7d1c31ea696590943b4b34b392326c06d6c0d9deef1f4d09e63dd3aa44877e35.js","afd0c7c84065da2d4ac2ba5e6b8a7bcd"],["page/1/index.html","61213a483ce765735be579330546d42a"],["page/2/index.html","f3ff0ced86d30949e50fad967e282b4f"],["page/3/index.html","8b18d74f23bd8ef331ef8bacfa486fb5"],["post/index.html","2d869dbcb74420de7968a4f19a52c49c"],["post/index.xml","a755da49b15db3a0f15175b2e8c85bd5"],["projects/index.html","ebf21e8b8ae6efa55bf93233c12dfc12"],["sitemap.xml","9b23bd287a4fc1f81a6661e88eb151ae"],["tags/css/index.html","85f0cd562c5687e830973e78f365dc13"],["tags/css/index.xml","297f024fc7549d266f76217c686bd647"],["tags/hugo/index.html","a7e2f4bb943e75af9e1cdf6838cd2889"],["tags/hugo/index.xml","a4f021125987ebc41136d6997fcd9aec"],["tags/index.html","7145a8bad9c1ea3c1516e725185b39ec"],["tags/index.xml","c18b5a5b89d540ff499cb72e930f67c7"],["tags/javascript/index.html","964c5b354ccee998b13c67e3bcb192f9"],["tags/javascript/index.xml","fd230d00b73361947f5fb558792ed5a0"],["tags/personal/index.html","4aad64f4b46b25ffd37679ffea6ec54b"],["tags/personal/index.xml","8154a47603c69d06f69a5b6df4f280b5"],["tags/postcss/index.html","caefda847e0b27a5b0ad88293d9f2867"],["tags/postcss/index.xml","9e8f0defa09b0b9ed968c683e33f0e53"],["tags/sass/index.html","da8174b7ba0282006a38bd2b4bbf7564"],["tags/sass/index.xml","a02456fd600ebebe51f39ca570372e3b"],["tags/tailwindcss/index.html","8db9919db131f2824c06ccadb5d4cefb"],["tags/tailwindcss/index.xml","66a5dbb6c56843cbeba941a767fec942"],["tags/tools/index.html","beb7596da9bb5d5396b877f46b2578d5"],["tags/tools/index.xml","a517ded81a68fc8cfddc9c2c97098286"]];
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







