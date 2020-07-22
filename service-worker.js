const cacheName = 'v1::static';

self.addEventListener( 'install', e => {
	e.waitUntil(
		caches.open( cacheName ).then( cache => {
			return cache.addAll( [
				// array of files to store offline
			] ).then( () => self.skipWaiting() );
		} )
	);
} );

self.addEventListener( 'fetch', event => {
	event.respondWith(
		caches.match( event.request ).then( res => res || fetch( event.request ) )
	);
} );
