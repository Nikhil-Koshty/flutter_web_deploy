'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "0c61a8a749448d2ce1015854e0cc148a",
"index.html": "527d6708147346e20b4df325e3d07874",
"/": "527d6708147346e20b4df325e3d07874",
"main.dart.js": "c6e2e5adf39f4162360ae9428a203fc6",
"payment.html": "fdd47fb3caa2e26d1956fc95a1328a4b",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "8670b467f0b7693badfc534dfe14b7b2",
"icons/Icon-192.png": "7c1f3572a220f9cac8631e31dc6ea90b",
"icons/Icon-maskable-192.png": "7c1f3572a220f9cac8631e31dc6ea90b",
"icons/Icon-maskable-512.png": "160db30ced518a45d57a12a73689a779",
"icons/Icon-512.png": "160db30ced518a45d57a12a73689a779",
"manifest.json": "a32285fead2aaa079a832c807553c645",
"assets/AssetManifest.json": "e38a6507fa43c3cfc6fadaa74f77ccd0",
"assets/NOTICES": "99629bdddefbc1e117adeb0ca059c652",
"assets/FontManifest.json": "8d757a149af3f439cbe94ab33ffd57fa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_credit_card/icons/discover.png": "ea70c496dfa0169f6a3e59412472d6c1",
"assets/packages/flutter_credit_card/icons/chip.png": "5728d5ac34dbb1feac78ebfded493d69",
"assets/packages/flutter_credit_card/icons/visa.png": "9db6b8c16d9afbb27b29ec0596be128b",
"assets/packages/flutter_credit_card/icons/amex.png": "dad771da6513cec63005d2ef1271189f",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/fonts/oswaldl.ttf": "0e85aec1f69f88a462959e415f5e8944",
"assets/fonts/segoeuil.ttf": "d44929d62a49114d494d1768893fcdf7",
"assets/fonts/oswaldm.ttf": "e0f21da93916967b421f0c99e9a0f0b0",
"assets/fonts/segoeuisl.ttf": "426088e434f43481b24859270171b906",
"assets/fonts/seguisb.ttf": "bc74928e0b7d13379ccf0b39354e87ad",
"assets/fonts/oswaldb.ttf": "92837a203f0eb773631f579ddd426543",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/segoeui.ttf": "d9076ed73f2501090da92fe3c72d3ce6",
"assets/assets/images/decrease.png": "c4d6089ace1ffe3bd0a6582c9ef5dd4d",
"assets/assets/images/food_delivery.svg": "a91ca63127d6ae1792053c6c76f21a01",
"assets/assets/images/clickpos_logo.png": "183ca1e01f2dfe14b442f550a577a4a2",
"assets/assets/images/creditcard.svg": "c0f0500a694a9de75d12c592e7714a79",
"assets/assets/images/increase.png": "b1dd481b80e840e10d7e597aa579d1d0",
"assets/assets/images/delivery.svg": "244451cd920066e4a78cc6857cfc955e",
"assets/assets/images/2.0x/fries.png": "81bf6ce12216a5f399eeb44ba3db7c75",
"assets/assets/images/2.0x/ramen.png": "b808eacc12ca88e9be3a1ecc6d1b326e",
"assets/assets/images/2.0x/pizza.png": "a464e360644554513697dfee772207af",
"assets/assets/images/2.0x/burger.png": "db08528b2c32734943f318c128de78d9",
"assets/assets/images/carts.svg": "a09ff04ae027c84bee7d86f210b0ff45",
"assets/assets/images/plus.svg": "9c44613ab128f58f41f721e5c0a1ef26",
"assets/assets/images/3.0x/fries.png": "a0c207e243ba1d60be6288070a0b101b",
"assets/assets/images/3.0x/ramen.png": "f946036030c7b872b6f83d01321a1647",
"assets/assets/images/3.0x/pizza.png": "fcdbc210a839efcc73d2c32f350a2c84",
"assets/assets/images/3.0x/burger.png": "aa45588930d9d0f203defd7610730605",
"assets/assets/images/burger_item.jpg": "7d9a10ff8d8332100fc2127b4fd79223",
"assets/assets/images/fries.png": "734154d8026a2bdeb421df1549eea6ea",
"assets/assets/images/takeaway.svg": "630447bf103d6f471a678f6b1f7fdb75",
"assets/assets/images/ramen.png": "d4b72c2661a80660d1809ccaa167e63e",
"assets/assets/images/accepted.svg": "cbbbf22cea2d844320ce89f296ffa688",
"assets/assets/images/restaurant_placeholder.jpg": "6b78bc6254f1ec4f5296ce8e52075167",
"assets/assets/images/clickpos_logo_white.png": "54ec1a35532c4d68c285c12dd3462f90",
"assets/assets/images/edit.svg": "1f949fe209532cfe25b1e9e3bff7b411",
"assets/assets/images/foodpod_logo_white.png": "952f595f7c00b38e3c6c5d1b3b00e781",
"assets/assets/images/pizza.png": "9070ae6ebdb99f1fcee7199e8bbbbd8c",
"assets/assets/images/foodpod_logo.png": "def397ffdd87c138c58fb3fac45545ce",
"assets/assets/images/man.svg": "2369d24d785f348feeb8b6cb8d555864",
"assets/assets/images/minus.svg": "4842f2e6b4c18d8d73676e4148cea235",
"assets/assets/images/burger.png": "93ba22c28591281442cf04f60543ac5d",
"assets/assets/images/delivery_pin.svg": "e4c57e8b931876aefc7302d61b4c6713",
"assets/assets/images/heart.svg": "ece31ef7aa7a7249315bc98d92c2466a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
