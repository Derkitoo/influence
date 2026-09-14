const CACHE_NAME = 'cialdini-guide-v2.0.0';


const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './styles.css',
  './data.js',
  './app.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon.png',
  './icons/favicon-32.png'
];

// Installation : Mise en cache des assets statiques de l'application
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Mise en cache des fichiers de l’application');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activation : Nettoyage des anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Suppression de l’ancien cache :', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch : Stratégie Cache First avec fallback Réseau et mise en cache dynamique
self.addEventListener('fetch', (event) => {
  // Ignorer les requêtes non GET ou d'extensions
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Pour les pages et ressources locales ou CDN Tailwind
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Retourne la ressource en cache
        return cachedResponse;
      }

      // Si non présent dans le cache, aller sur le réseau
      return fetch(event.request).then((networkResponse) => {
        // Vérifier si la réponse est valide
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
          // Si opaque (ex: CDN externe), on peut quand même le mettre en cache
          if (networkResponse && networkResponse.type === 'opaque') {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        }

        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      }).catch(() => {
        // En cas de panne de réseau et absence de cache, fallback sur index.html pour les navigations
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
