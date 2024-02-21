// アクションなし
// self.addEventListener("fetch", function (event) {})

// ネットワークファースト
self.addEventListener('fetch', function (event) {
	event.respondWith(
		fetch(event.request).catch(function () {
			return caches.match(event.request);
		})
	);
});
