/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable no-undef */
import NewsCard from '../newsCard/NewsCard';
import loadNewsData from '../../servises/loadNewsData';
import defaultConfig from '../../defaultConfig';
import lazyLoader from '../lazyLoader/lazyLoader';
import CreateRequest from '../../servises/requestFabric/CreateRequest';

const { preferedLanguage: language, preferedCountry: country } = defaultConfig;

const lazyErrorHandler = (message) => {
    import('../alertWindow/AlertWindow')
        .then((module) => {
            const modal = module.modalWindow;
            modal.createMessagehWindow(message);
            modal.showWindow();
        });
};

export default class CreateNewsTemplate {
    constructor() {
        this.initCanvas();
    }

    initCanvas = () => {
        this.newsCanvas = document.createElement('div');
        this.newsCanvas.classList.add(defaultConfig.classNames.cardRow);
    }

    getElement = () => this.newsCanvas;

    clearNewsTemplate = () => {
        while (this.newsCanvas.hasChildNodes()) {
            this.newsCanvas.removeChild(this.newsCanvas.childNodes[0]);
        }
    }

    getNews = (method) => {
        this.clearNewsTemplate();
        const props = {
            method,
            country,
            language,
            pageSize: inputNumberNews.value,
            category: inputCategory.value,
        };
        const type = 'GET';
        const request = new CreateRequest(type, props);

        return loadNewsData(request)
            .then((newsData) => {
                if (newsData.status === 'error') return lazyErrorHandler(newsData.message);
                newsData.articles.forEach((newsItemData) => {
                    const { title, description, url, urlToImage, content } = newsItemData;
                    const newsItem = new NewsCard(this.newsCanvas, title, description, url, urlToImage, content);
                    return newsItem;
                });
                lazyLoader();
            });
    }
}
