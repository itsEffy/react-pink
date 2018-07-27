var config = {
	cashSources: [
		"/main.css",
		"/client-bundle.js",
		"/img/index/",
		"/img/svg/",
		"/picturefill.min.js",
		"/watchforHover.js"
	],
	cachePathPattern: /img|css/
};

self.addEventListener("install", event => {
	function onInstall() {
		return caches
			.open("static")
			.then(cache => cache.addAll(config.cashSources));
	}

	event.waitUntil(onInstall(event));
});

self.addEventListener("activate", event => {
	// activate stuff
});

function addToCache(cacheKey, req, res) {
	// Кэшируем ответ и возвращаем его далее
	// * Response-объекты могут использоваться только один раз, потому требуется скопировать
	if (res.ok) {
		var copy = res.clone();
		caches.open(cacheKey).then(cache => {
			cache.put(req, copy);
		});
		return response;
	}
}

self.addEventListener("fetch", event => {
	// у автора странный метод, переписать проще
	function shouldHandleFetch(event, opts) {
		var req = event.request;
		var url = new URL(req.url);
		var criteria = {
			// matchesPathPattern: !!opts.cachePathPattern.exec(url.pathname),
			isGet: req.method === "GET"
			// isFromOurOrigin: url.origin === self.location.origin
		};

		var failingCriteria = Object.keys(criteria).filter(
			criteriaKey => !criteria[criteriaKey]
		);

		return !failingCriteria.length;

		/*

		var matchesPathPattern: !!opts.cachePathPattern.exec(url.pathname);
		var	isGet: req.method === "GET";
		var	isFromOurOrigin: url.origin === self.location.origin;

		return matchesPathPattern && isGet && isFromOurOrigin

		*/
	}

	function onFetch(event, opts) {
		var req = event.request;
		var acceptHeader = req.headers.get("Accept");
		var resourceType = "static"; // по умолчанию

		// если тип ресурса соотв., присвоим переменной другое значение
		if (acceptHeader.indexOf("text/html") !== -1) {
			resourceType = "content";
		} else if (acceptHeader.indexOf("image") !== -1) {
			resourceType = "image";
		}

		//
		cacheKey = resourceType;

		// собтсвенно ответ на событие
		if (resourseType === "content") {
			// network-first - оно могло измениться
			event.respondWith(
				fetch(request)
					.then(res => addToCache(cacheKey, request, res))
					.catch(() => fetchFromCache(event))
					.catch(() => offlineResponse(opts))
			);
		} else {
			// cash-first - картинки вряд ли меняются
			event
				.respondWith(fetchFromCache(event))
				.catch(() => fetch(request))
				.catch(() => offlineResponse(resourceType, opts));
		}
	}

	if (shouldHandleFetch(event, config)) {
		onFetch(event, config);
	}
});
