// Service worker mínimo: permite instalar VIAL 360 en la pantalla de inicio del celular.
// No guarda datos: la aplicación siempre se carga en línea desde Google Apps Script.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', () => {});
