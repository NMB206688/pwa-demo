const cacheName = 'pwa-demo-v1';
const filesToCache = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/main.js',
    '/images/icon-192x192.png',
    '/images/icon-512x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(filesToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
