// Galaxy Service Worker — GitHub Pages
const CACHE = 'galaxy-v10';
const BASE = '/galaxy-ideas-economy';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache =>
      cache.addAll([BASE + '/', BASE + '/index.html'])
        .catch(() => console.log('[SW] Cache partial'))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (e.request.url.includes('api.anthropic.com')) return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      const fresh = fetch(e.request).then(res => {
        if (res.ok) {
          caches.open(CACHE).then(cache => cache.put(e.request, res.clone()));
        }
        return res;
      }).catch(() => cached);
      return cached || fresh;
    })
  );
});

self.addEventListener('push', e => {
  e.waitUntil(
    self.registration.showNotification('🌌 مجرة اقتصاد الأفكار', {
      body: e.data?.text() || 'لديك إشعار جديد',
      icon: BASE + '/icon-192.png',
      badge: BASE + '/icon-192.png',
      dir: 'rtl', lang: 'ar'
    })
  );
});

console.log('[SW] Galaxy Service Worker loaded ✅');
