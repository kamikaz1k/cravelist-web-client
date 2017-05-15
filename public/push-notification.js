self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.', event);
  // console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  // Fetch Data from your server because data is always null

  const title = 'Push Codelab';
  const options = {
    body: 'Yay it works.',
    icon: 'assets/images/icon.png',
    badge: 'assets/images/badge.png',
    data: { a: "thanks" }
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.', event);

  event.notification.close();

  event.waitUntil(
    clients.openWindow('https://developers.google.com/web/')
  );
});