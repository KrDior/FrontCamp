// Implement for fetch news servise
// cache news and when do new request before fetching check cache


// add proxy trap for bad response



function networkFetch(url) {
    return `${url} - Response from network`;
}

// Proxy
// ES6 Proxy API = new Proxy(target, handler);
const cache = [];
const proxiedNetworkFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args) {
        const urlParam = args[0];
        if (cache.includes(urlParam)) {
            return `${urlParam} - Response from cache`;
        } else {
            cache.push(urlParam);
            return Reflect.apply(target, thisArg, args);
        }
    },
});

// usage
console.log(proxiedNetworkFetch('dogPic.jpg')); // 'dogPic.jpg - Response from network'
console.log(proxiedNetworkFetch('dogPic.jpg')); // 'dogPic.jpg - Response from cache'
