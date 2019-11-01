/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable no-undef */
import NewsCard from '../newsCard/NewsCard';
import getNewsData from '../../servises/getNewsData';
import getTopNewsData from '../../servises/getTopNewsData';
import defaultConfig from '../../defaultConfig';
import lazyLoader from '../lazyLoader/lazyLoader';

const { preferedLanguage: language, preferedCountry: country } = defaultConfig;

export default class CreateNewsTemplate {
    constructor() {
        this.initCanvas();
    }

    initCanvas = () => {
        this.newsCanvas = document.createElement('div');
        this.newsCanvas.classList.add(defaultConfig.classNames.cardRow);
    }

    getElement = () => this.newsCanvas;

    getNews = () => {
        while (this.newsCanvas.hasChildNodes()) {
            this.newsCanvas.removeChild(this.newsCanvas.childNodes[0]);
        }
        return getNewsData(country, language, inputCategory.value, inputNumberNews.value)
            .then((newsData) => {
                newsData.articles.forEach((newsItemData) => {
                    const { title, description, url, urlToImage, content } = newsItemData;
                    const newsItem = new NewsCard(this.newsCanvas, title, description, url, urlToImage, content);
                    return newsItem;
                });
            });
    }

    getTopNews = () => {
        while (this.newsCanvas.hasChildNodes()) {
            this.newsCanvas.removeChild(this.newsCanvas.childNodes[0]);
        }
        return getTopNewsData(country)
            .then((newsData) => {
                newsData.articles.forEach((newsItemData) => {
                    const { title, description, url, urlToImage, content } = newsItemData;
                    const newsItem = new NewsCard(this.newsCanvas, title, description, url, urlToImage, content);
                    return newsItem;
                });
                lazyLoader();
            });
    }
}
