// public/sw.js - Optimizado para reducir tiempo de ejecución
const CACHE_NAME = "elpernilet-v2";
const STATIC_ASSETS = ["/", "/manifest.json", "/elpernilet-logo.svg"];

// Cachear solo recursos críticos
const CRITICAL_RESOURCES = ["/_next/static/css/", "/_next/static/chunks/"];

// Install event - reducido
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - simplificado
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => caches.delete(cacheName))
        )
      )
      .then(() => self.clients.claim())
  );
});

// Fetch event - solo para recursos críticos
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Solo cachear recursos críticos
  if (CRITICAL_RESOURCES.some((path) => url.pathname.startsWith(path))) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
