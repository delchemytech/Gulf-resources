const CACHE_NAME = 'gulf-resources-v1';
const urlsToCache = [
  '/',
  '/about',
  '/contact-us',
  '/our-companies/facilities-management',
  '/our-companies/business-setup&visa-work',
  '/our-companies/tours-and-travels',
  '/webp/hero_bg_optimized.webp',
  '/webp/about_workers.webp',
  '/webp/images/logo.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});