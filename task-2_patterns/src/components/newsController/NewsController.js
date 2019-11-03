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
        });

        const getAlertButton1 = document.querySelector('#testAlert1');
        getAlertButton1.addEventListener('click', () => {
            this.alertWindow.showWindow();
        });

        const getAlertButton2 = document.querySelector('#testAlert2');
        getAlertButton2.addEventListener('click', () => {
            this.alertWindow.createMessagehWindow('one');
        });

        const getAlertButton3 = document.querySelector('#testAlert3');
        getAlertButton3.addEventListener('click', () => {
            this.alertWindow.createMessagehWindow('two');
        });

        this.newsContainer.firstChild.appendChild(this.newsCanvas.getElement());
        document.body.querySelector('main').appendChild(this.newsContainer);
    }
}
