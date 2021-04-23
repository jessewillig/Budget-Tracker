const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

const iconSizes = ["192", "512"];
const iconFiles = iconSizes.map(
    (size) => `/icons/icon-${size}x${size}.png`
);

const FilesToCache = [
    "/",
    "/index.js",
    "/index.html",
    "/db.js",
    "/manifest.webmanifest",
].concat(iconFiles);

// install
self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Your files were pre-cached successfully!");
            return cache.addAll(FilesToCache);
        })
    );
    self.skipWaiting();
});