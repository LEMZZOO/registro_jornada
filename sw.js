// Service Worker v0ae276e383 — auto-generated
const CACHE_NAME = 'jornada-0ae276e383';
const PRECACHE = ['./', './index.html', './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request).then(r => {
      caches.open(CACHE_NAME).then(c => c.put(e.request, r.clone()));
      return r;
    }).catch(() => caches.match(e.request)));
    return;
  }
  e.respondWith(caches.match(e.request).then(cached => cached ||
    fetch(e.request).then(r => {
      if (r&&r.status===200&&r.type!=='opaque')
        caches.open(CACHE_NAME).then(c => c.put(e.request, r.clone()));
      return r;
    })));
});
self.addEventListener('message', e => { if (e.data==='SKIP_WAITING') self.skipWaiting(); });
