const CACHE_NAME = "base13";
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

// поскольку если ресурс не найден, промис все равно будет разрезолвлен
const getFromCache = resource => {
	return caches.match(resource).then(res => {
		if (!res) {
			throw Error(`${resource} не найден к кэше`);
		}
		return res;
	});
};

self.addEventListener("install", event => {
	debugger;
	event.waitUntil(
		caches.open(CACHE_NAME).then(cache => cache.addAll(CACHED_URLS))
	);
});

self.addEventListener("activate", event => {
	debugger;
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
	event.respondWith(
		fetch(event.request).catch(() =>
			caches.match(event.request, { ignoreSearch: true }).then(res => {
				// если такой ответ в кэше существует, вернуть его
				if (res) {
					return res;
				} // если нет, проверить, является ли ресурс html-страницей. Если да, вернуть страницу offline
				else if (
					event.request.headers.get("accept").includes("text/html")
				) {
					return caches.match("offline");
				}
			})
		)
	);
});
