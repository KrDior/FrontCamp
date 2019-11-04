/* eslint-disable object-curly-newline */
import createCanvas from '../../container/newsCanvas/newsCanvas';
import { modalWindow as AlertWindow } from '../alertWindow/AlertWindow';
import defaultConfig from '../../defaultConfig';
import CreateNewsTemplate from '../createNewsTemplate/createNewsTemplate';

const { newsCategory, newsOnPage, inputCategoryId, inputNumberId } = defaultConfig;

export default class NewsController {
    constructor() {
        this.newsContainer = createCanvas();
        this.newsCanvas = new CreateNewsTemplate();
        this.alertWindow = AlertWindow;

        this.showSeachWindowButton = document.querySelector('#showSeachWindow');
        this.showSeachWindowButton.addEventListener('click', () => {
            this.alertWindow.createSeachWindow(newsCategory, newsOnPage,
                inputCategoryId, inputNumberId);

            this.getNewsButton = document.querySelector('#getNewsButton');
            this.getNewsButton.addEventListener('click', () => {
                this.newsCanvas.getNews('topNews');
            });

            this.getTopNewsButton = document.querySelector('#getTopNewsButton');
            this.getTopNewsButton.addEventListener('click', () => {
                this.newsCanvas.getNews('allNews');
            });

            this.getTopNewsButton = document.querySelector('#searchStringButton');
            this.getTopNewsButton.addEventListener('click', () => {
                this.newsCanvas.getNews('searchNews');
            });
        });

        this.newsContainer.firstChild.appendChild(this.newsCanvas.getElement());
        document.body.querySelector('main').appendChild(this.newsContainer);
    }
}
