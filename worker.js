// THIS IS NECESSARY TO ENABLE CENSORSHIP.

self.addEventListener('install', function (event) {
    console.log('Installing')
});

var censored = false;
self.addEventListener('message', e => {
    censored = e.data;
});

self.addEventListener('fetch', function (event) {
    var url = event.request.url.split('?')[0];
    console.log('a')
    if (!!url.split('.')[1] && !!event.request.url.split('?')[1]) {
        console.log('1');
        if (url.split('.')[1] == 'ks') {
            var file = url.split('/')[url.split('/').length - 1];
            var updirectory = url.split('/')[url.split('/').length - 2];
            var directory = (updirectory == "system" ? "system/" : "")
            console.log(file, updirectory, directory)
            if (censored) {
                event.respondWith(fetch('censorship/'+directory+file));
            } else {
                return
            }
        } else {
            return;
        }
    } else {
        return
    }
});


self.addEventListener('activate', function (event) {
    console.log('Activated')
});
