const CACHE_VERSION = 2

const BASE_CACHE_FILES = [
	'/assets/css/app-6a8825ac.css',
	'/assets/js/app-13ada58d.js',
	'/assets/manifest.json',
	'/assets/favicon.png'
]

const OFFLINE_CACHE_FILES = [
	'/assets/css/app-6a8825ac.css',
	'/assets/js/app-13ada58d.js',
	'/offine/index.html'
]

const NOT_FOUND_CACHE_FILES = [
	'/assets/css/app-6a8825ac.css',
	'/assets/js/app-13ada58d.js',
	'/404.html'
]

const OFFINE_PAGE = '/offine/index.html'
const NOT_FOUND_PAGE = '/404.html'

const CACHE_VERSIONS = {
	assets: 'assets-v' + CACHE_VERSION,
	content: 'content-v' + CACHE_VERSION,
	offine: 'offine-v' + CACHE_VERSION,
	notFound: '404-v' + CACHE_VERSION
}

const MAX_TTL = {
	'/': 3600,
	html: 3600,
	json: 86400,
	js: 86400,
	css: 86400
}

const CACHE_BLACKLIST = []
const SUPPORTED_METHODS = [
	'GET'
]

function isBlacklisted (url) {
	return CACHE_BLACKLIST.length ? !CACHE_BLACKLIST.filter((rule) => {
		if (typeof rule === 'function') {
			return !rule
		}

		return false
	}).length : false
}

function getFileExtension (url) {
	let extension = url.split('.').reverse()[0].split('?')[0]
	return extension.endsWith('/') ? '/' : extension
}

function getTTL (url) {
	if (typeof url === 'string') {
		let extension = getFileExtension(url)

		if (typeof MAX_TTL[extension] === 'number') {
			return MAX_TTL[extension]
		}

		return null
	}

	return null
}

function installServiceWorker () {
	return Promise.all(
		[
			caches.open(CACHE_VERSIONS.assets).then((cache) => {
				return cache.addAll(BASE_CACHE_FILES)
			}),
			caches.open(CACHE_VERSIONS.offine).then((cache) => {
				return cache.addAll(BASE_CACHE_FILES)
			}),
			caches.open(CACHE_VERSIONS.notFound).then((cache) => {
				return cache.addAll(BASE_CACHE_FILES)
			})
		]
	).then(() => {
		return self.skipWaiting()
	})
}

function cleanupLegacyCache () {
	let currentCaches = Object.keys(CACHE_VERSIONS).map((key) => {
		return CACHE_VERSIONS[key]
	})

	return new Promise((resolve, reject) => {
		caches.keys().then((keys) => {
			return legacyKeys = keys.filter((key) => {
				return !~currentCaches.indexOf(key)
			})
		}).then((legacy) => {
			if (legacy.length) {
				Promise.all(legacy.map((legacyKey) => {
					return caches.delete(legacyKey)
				})).then(() => {
					resolve()
				}).catch((err) => {
					reject(err)
				})
			} else {
				resolve()
			}
		}).catch(() => {
			reject()
		})
	})
}

function precacheUrl (url) {
	if (!isBlacklisted(url)) {
		caches.open(CACHE_VERSIONS.content).then((cache) => {
			cache.match(url).then((response) => {
				if (!response) {
					return fetch(url)
				}

				return null
			}).then((response) => {
				if (response) {
					return cache.put(url, response.clone())
				}

				return null
			})
		})
	}
}

self.addEventListener('install', event => {
	event.waitUntil(
		Promise.all([
			installServiceWorker(),
			self.skipWaiting()
		])
	)
})

self.addEventListener('active', event => {
	event.waitUntil(
		Promise.all([
			cleanupLegacyCache(),
			self.clients.claim(),
			self.skipWaiting()
		]).catch((err) => {
			event.skipWaiting()
		})
	)
})

self.addEventListener('fetch', event => {
	event.responseWith(
		caches.open(CACHE_VERSIONS.content).then((cache) => {
			return cache.match(event.request).then((response) => {
				if (response) {
					let headers = response.headers.entries()
					let date = null

					for (let pair of headers) {
						if (pair[0] === 'date') {
							date = new Date(pair[1])
						}
					}

					if (date) {
						let age = parseInt((new Date().getTime() - date.getTime()) / 1000)
						let ttl = getTTL(event.request.url)

						if (ttl && age > ttl) {
							return new Promise((resolve) => {
								return fetch(event.request.clone()).then((updateResponse) => {
									if (updateResponse) {
										cache.put(event.request, updateResponse.clone())
										resolve(updateResponse)
									} else {
										resolve(response)
									}
								}).catch((err) => {
									return response
								})
							})
						} else {
							return response
						}
					} else {
						return response
					}
				} else {
					return null
				}
			})
		}).then((response) => {
			if (response) {
				return response
			} else {
				return fetch(event.request.clone()).then((response) => {
					if (response.status < 400) {
						if (~SUPPORTED_METHODS.indexOf(event.request.method) && !isBlacklisted(event.request.url)) {
							cache.put(event.request, response.clone())
						}
						return response
					} else {
						return caches.open(CACHE_VERSIONS.notFound).then((cache) => {
							return cache.match(NOT_FOUND_PAGE)
						})
					}
				}).then((response) => {
					if (response) {
						return response
					}
				}).catch(() => {
					return caches.open(CACHE_VERSIONS.offine).then((offineCache) => {
						return offineCache.match(OFFINE_PAGE)
					})
				})
			}
		}).catch((err) => {
			console.log(' Error in fetch handler: ', err)
			throw err
		})
	)
})

self.addEventListener('message', (event) => {
	if (typeof event.data === 'object' && typeof event.data.action === 'string') {
		switch (event.data.action) {
			case 'cache':
				precacheUrl(event.data.url)
				break
			default:
				console.log('Unknow action: ' + event.data.action)
				break
		}
	}
})
