var config = {
	cashSources: [
		"/main.css",
		"/client-bundle.js",
		"/img/index/",
		"/img/svg/",
		"/picturefill.min.js",
		"/watchforHover.js"
	],
	cachePathPattern: /img|css/,
	version: "0"
};

/*
*  addAll работает только с ответом 200, что нам не подходит - придется 
*  складывать вручную с помощью put
*  TODO - требуется написать более отказоустойчивую версию
/
*/

function addAllAtAll(sources) {}

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

function fetchFromCache(event) {
	// проверяем все кеши сразу
	return caches.match(event.request).then(res => {
		if (!res) {
			throw Error(`${event.request.url} не найден в кеше`);
		}
		return res;
	});
}

function offlineResponse(resourseType, opts) {
	// за такой сервис мне никто не платит
	return undefined;
}

self.addEventListener("install", event => {
	function onInstall(events, opts) {
		return caches
			.open("static")
			.then(cache => cache.addAll(opts.cashSources));
	}

	// skipWaiting вызовет activate сразу
	event.waitUntil(onInstall(event, config).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
	function onActivate(event, opts) {
		return caches.keys().then(cacheKeys => {
			var oldCacheKeys = cacheKeys.filter(
				key => key.indexOf(opts.version) !== 0
			);
			var deletePromises = oldCacheKeys.map(oldKey =>
				caches.delete(oldKey)
			);
			return Promise.all(deletePromises);
		});
	}

	// включает sw немедленно на всех страницах в зоне его действия
	event.waitUntil(event, config).then(() => self.clients.claim());
});

self.addEventListener("fetch", event => {
	// у автора странный метод, переписать проще
	console.log(event);

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
				fetch(req)
					.then(res => addToCache(cacheKey, req, res))
					.catch(() => fetchFromCache(event))
					.catch(() => offlineResponse(opts))
			);
		} else {
			// cash-first - картинки вряд ли меняются
			event
				.respondWith(fetchFromCache(event))
				.catch(() => fetch(req))
				.catch(() => offlineResponse(resourceType, opts));
		}
	}

	if (shouldHandleFetch(event, config)) {
		onFetch(event, config);
	}
});
