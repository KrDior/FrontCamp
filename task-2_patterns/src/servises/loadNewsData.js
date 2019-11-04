import { proxyLoggerHandler } from '../components/proxyLogger/proxyLoggerHandler';

export default async function loadNewsData(requetData) {
    try {
        const proxy = new Proxy(requetData, proxyLoggerHandler);
        const { url, requestTypeParams } = proxy.url;
        const req = new Request(url);
        const newsResponse = await fetch(req, requestTypeParams);
        const newsData = await newsResponse.json();
        return newsData;
    } catch (error) {
        console.error(error);
        return null;
    }
}
