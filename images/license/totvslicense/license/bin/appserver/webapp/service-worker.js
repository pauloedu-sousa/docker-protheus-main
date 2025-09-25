self.addEventListener('install', function(event) {
	// Perform install steps
	/*
	let req = new Request('settings.json');

	fetch(req)
		.then(function(response) {
			return response.text();
		})
		.then(function(text) {
			console.log('fetch: ' + text);
		});
	*/

	console.log('Service Worker installed!');
});

self.addEventListener('activate', event => {
	console.log('Service Worker activated!');
});
