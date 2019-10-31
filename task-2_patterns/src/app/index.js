/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import ModalWindowFiller from '../components/modalWindowFiller/ModalWindowFiller';
import createCanvas from '../container/newsCanvas/newsCanvas';
import AlertWindow from '../components/alertWindow/AlertWindow';
import defaultConfig from '../defaultConfig';

import createNewsTemplate from '../components/createNewsTemplate/createNewsTemplate';
import '../style/app.scss';
import '../style/custom.scss';
import 'bootstrap';

function AppInit() {
    const alertWindow = new AlertWindow();
    const getAlertButton = document.querySelector('#testAlert');
    getAlertButton.addEventListener('click', () => {
        console.log(alertWindow);
        alertWindow.toggleWindow();
    });

    const newsContainer = createCanvas();
    const newsCanvas = createNewsTemplate();
    const { newsCategory, newsOnPage, inputCategoryId, inputNumberId } = defaultConfig;
    const parentModalElem = document.querySelector(`.${defaultConfig.classNames.modalParentElement}`);
    // eslint-disable-next-line no-unused-vars
    const modal = new ModalWindowFiller(parentModalElem, newsCategory, newsOnPage, inputCategoryId, inputNumberId);

    newsContainer.firstChild.appendChild(newsCanvas);
    document.body.querySelector('main').appendChild(newsContainer);
    window.removeEventListener('DOMContentLoaded', AppInit);
}

window.addEventListener('DOMContentLoaded', AppInit);
