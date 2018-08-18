const CACHE_NAME = "base22";
const CACHED_URLS = [
	// фолбэк-страница и главная
	"/offline",
	"/",
	// Скрипты
	"/client-bundle.js",
	// Стили
	"/main.css",
	"/slick.css",
	// Важные изображения
	"/img/svg/logo.svg",
	"/img/svg/sprite.svg",
	"/img/svg/home-sprite.svg",
	"/img/index/50-bg-back-mobile.jpg",
	"/img/index/map-mobile.png",
	"/img/index/map-marker.png",
	"/img/index/80-iphone-hand-mobile@2x.webp",
	"/img/index/iphone-hand-tablet.png",
	// шрифты
	"/fonts/opensans.woff2",
	"/fonts/opensanslight.woff2"
];

// Упрощенный сервис воркер

self.addEventListener("install", event => {
	console.log("installed");
	event.waitUntil(
		caches.open(CACHE_NAME).then(cache => cache.addAll(CACHED_URLS))
	);
});

self.addEventListener("activate", event => {
	console.log("activated");
	event.waitUntil(
		// чистим старые кэши
		caches.keys().then(cacheNames => {
			return Promise.all(
				// возвращаем массив промизов на удаление
				cacheNames.map(cacheName => {
					// если это наш кэш (специально для воркера), но он не совпадает с текущей версией, удаляем
					if (
						CACHE_NAME !== cacheName &&
						cacheName.startsWith("base")
					) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});

self.addEventListener("fetch", event => {
	const url = new URL(event.request.url);

	// определение типа ресурса
	let resourceType;
	// ресурс должен быть с нашего источника
	if (url.origin === self.location.origin) {
		if (url.href.includes("api")) {
			resourceType = "info";
		} else if (event.request.headers.get("accept").includes("text/html")) {
			resourceType = "page";
		} else {
			resourceType = "static";
		}
	} else {
		resourceType = "other";
	}

	switch (resourceType) {
		case "info":
			// предварительно не обрабатывать из-за 504 ошибки (возможно, баг axios)
			/*
			event.respondWith(
				//Network-first with cache fallback, frequent updates
				caches.open(CACHE_NAME).then(cache => {
					return fetch(event.request)
						.then(networkResponse => {
							cache.put(event.request, networkResponse.clone());
							return networkResponse;
						})
						.catch(() => {
							return caches.match(event.request, {
								ignoreSearch: false
							});
						});
				})
			);
			*/
			break;
		case "page":
			event.respondWith(
				// Network-first with cache, then offline fallback
				fetch(event.request).catch(() =>
					caches
						.match(event.request, { ignoreSearch: true })
						.then(res => {
							// если такой ответ в кэше существует, вернуть его
							if (res) {
								return res;
							} // если нет, возвращаем оффлайн
							// (никогда не будет использоваться, на самом деле,
							// ибо бандл целостный - для демнстрации)
							else {
								return caches.match("offline");
							}
						})
				)
			);
			break;
		case "static":
			event.respondWith(
				// Cache-first with Network fallback
				caches.open(CACHE_NAME).then(cache => {
					return cache.match(event.request).then(cachedResponse => {
						// фетчим всегда, независимо от наличия ресурса в кеше
						const fetchPromise = fetch(event.request).then(
							networkResponse => {
								cache.put(
									event.request,
									networkResponse.clone()
								);
								return networkResponse;
							}
						);
						// отдаем кешированную версию
						return cachedResponse || fetchPromise;
					});
				})
			);

			break;
		default:
			break;
	}
});
