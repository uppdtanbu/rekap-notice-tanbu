self.addEventListener('install', (e) => {
    console.log('[Service Worker] Aplikasi berhasil diinstal');
});

self.addEventListener('fetch', (e) => {
    // Membiarkan aplikasi mengambil data langsung dari internet
    e.respondWith(fetch(e.request).catch(() => console.log('Koneksi terputus')));
});