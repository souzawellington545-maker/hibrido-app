self.addEventListener('install', (e) => {
  console.log('Veloxx Service Worker instalado com sucesso.');
});
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
