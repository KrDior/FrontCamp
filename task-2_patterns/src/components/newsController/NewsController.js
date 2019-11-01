/* eslint-disable object-curly-newline */
import createCanvas from '../../container/newsCanvas/newsCanvas';
import AlertWindow from '../alertWindow/AlertWindow';
import defaultConfig from '../../defaultConfig';
import CreateNewsTemplate from '../createNewsTemplate/CreateNewsTemplate';

import Emitter from '../emitter/Emitter';

const { newsCategory, newsOnPage, inputCategoryId, inputNumberId } = defaultConfig;

export default class NewsController {
    constructor() {
        this.newsContainer = createCanvas();
        this.newsCanvas = new CreateNewsTemplate();
        this.alertWindow = new AlertWindow();
        this.emt = new Emitter();

        this.showSeachWindowButton = document.querySelector('#showSeachWindow');
        this.showSeachWindowButton.addEventListener('click', () => {
            this.alertWindow.createSeachWindow(newsCategory, newsOnPage,
                inputCategoryId, inputNumberId);

            this.getNewsButton = document.querySelector('#getNewsButton');
            this.getNewsButton.addEventListener('click', () => {
                this.newsCanvas.getNews();
            });

            this.getTopNewsButton = document.querySelector('#getTopNewsButton');
            this.getTopNewsButton.addEventListener('click', () => {
                this.newsCanvas.getTopNews();
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

        // remove??
        this.newsContainer.firstChild.appendChild(this.newsCanvas.getElement());
        document.body.querySelector('main').appendChild(this.newsContainer);

        // this.subscribeHandler();
    }

    subscribeHandler = () => {
        this.emt.subscribe('messageFromServer', this.storage.addToStorage);
        this.emt.subscribe('messageFromServer', this.notify.visibilityStatus);
        this.emt.subscribe('messageFromClient', this.wsclient.sendMessage);
        this.emt.subscribe('localSystemMessage', this.interface.renderMessage);
        this.emt.subscribe('connecting', this.interface.renderMessage);
        this.emt.subscribe('welcom user', this.interface.renderMessage);
    }

    destroy = () => {
        this.interface.destroy();
        this.wsclient.destroy();
        this.emt.clearEmit();
        this.storage.clearStorage();
        this.notify.destroy();
        this.messages = null;
    }
}
