/* eslint-disable no-underscore-dangle */
// Singleton implementation
import * as $ from 'jquery';
import defaultConfig from '../../defaultConfig';

export default class AlertWindow {
    constructor() {
        if (AlertWindow.instance) {
            return AlertWindow.instance;
        }
        this.id = defaultConfig.classNames.alertWindow.windowFadeId;
        AlertWindow.instance = this.init();
    }

    init = () => {
        this.alertWindow = document.createElement('div');
        this.alertWindow.classList.add(defaultConfig.classNames.alertWindow.windowFade1,
            defaultConfig.classNames.alertWindow.windowFade1);
        this.alertWindow.id = defaultConfig.classNames.alertWindow.windowFadeId;
        this.alertWindow.setAttribute('tabindex', '-1');
        this.alertWindow.setAttribute('role', 'dialog');
        this.alertWindow.setAttribute('aria-labelledby', 'modalCenterTitle');
        this.alertWindow.setAttribute('aria-hidden', true);

        this.windowPosition = document.createElement('div');
        this.windowPosition.classList.add(defaultConfig.classNames.alertWindow.modalPosition1,
            defaultConfig.classNames.alertWindow.modalPosition2);
        this.windowPosition.setAttribute('role', 'document');
        this.alertWindow.appendChild(this.windowPosition);

        this.windowContent = document.createElement('div');
        this.windowContent.classList.add(defaultConfig.classNames.alertWindow.modalContent);
        this.alertWindow.appendChild(this.windowContent);

        this.windowHeader = document.createElement('div');
        this.windowHeader.classList.add(defaultConfig.classNames.alertWindow.modalHeader);
        this.windowContent.appendChild(this.windowHeader);
        this.windowTitle = document.createElement('h5');
        this.windowTitle.classList.add(defaultConfig.classNames.alertWindow.modalTitle);
        this.windowTitle.id = 'modalCenterTitle';

        this.windowButton = document.createElement('button');
        this.windowButton.classList.add(defaultConfig.classNames.alertWindow.closeButton);
        this.windowButton.setAttribute('data-dismiss', 'modal');
        this.windowButton.setAttribute('aria-label', 'Close');
        this.windowsBtn = document.createElement('span');
        this.windowsBtn.setAttribute('aria-hidden', true);
        this.windowsBtn.innerHTML = '&times;';
        this.windowButton.appendChild(this.windowsBtn);
        this.windowHeader.appendChild(this.windowTitle);
        this.windowHeader.appendChild(this.windowButton);

        this.windowBody = document.createElement('div');
        this.windowBody.classList.add(defaultConfig.classNames.alertWindow.modalBody);
        this.windowBody.id = defaultConfig.classNames.alertWindow.modalBodyId;

        this.windowFooter = document.createElement('div');
        this.windowFooter.classList.add(defaultConfig.classNames.alertWindow.modalFooter);

        this.windowContent.appendChild(this.windowHeader);
        this.windowContent.appendChild(this.windowBody);
        this.windowContent.appendChild(this.windowFooter);

        this.windowPosition.appendChild(this.windowContent);
        document.body.append(this.alertWindow);

        return this.alertWindow;
    }

    toggleWindow = () => {
        $(`#${this.id}`).modal('toggle');
    }

    showWindow = () => {
        $(`#${this.id}`).modal('show');
    }

    hideWindow = () => {
        $(`#${this.id}`).modal('hide');
    }

    destroyWindow = () => {
        $(`#${this.id}`).modal('dispose');
    }

    getModalWindow = () => this.alertWindow;

    changeWarningMessage = (msg) => {
        this.textMessage = document.createElement('div');
        this.textMessage.classList.add(defaultConfig.classNames.modalInput.inputItem);
        this.textMessage.innerHTML = msg;
        this.windowBody.appendChild(this.textMessage);
    }

    clearContentTemplate = () => {
        while (this.windowBody.hasChildNodes()) {
            this.windowBody.removeChild(this.windowBody.childNodes[0]);
        }
        while (this.windowFooter.hasChildNodes()) {
            this.windowFooter.removeChild(this.windowFooter.childNodes[0]);
        }
    }

    createMessagehWindow = (msg) => {
        this.clearContentTemplate();
        this.windowTitle.innerHTML = 'Warning message!';

        this.footerButton = document.createElement('button');
        this.footerButton.classList.add(defaultConfig.classNames.alertWindow.btn1,
            defaultConfig.classNames.alertWindow.btn2);
        this.footerButton.setAttribute('data-dismiss', 'modal');
        this.footerButton.innerHTML = 'Close warning...';
        this.windowFooter.appendChild(this.footerButton);

        if (msg) this.changeWarningMessage(msg);
    }

    createSeachWindow = (newsCategory, newsOnPage, inputCategoryId, inputNumberId) => {
        this.clearContentTemplate();
        const { category, newsNumber } = defaultConfig.classNames.alertWindow;

        this.windowTitle.innerHTML = 'Choose parameters for prefered news';

        this.footerButtonClose = document.createElement('button');
        this.footerButtonClose.classList.add(defaultConfig.classNames.alertWindow.btn1,
            defaultConfig.classNames.alertWindow.btnSecondary);
        this.footerButtonClose.setAttribute('data-dismiss', 'modal');
        this.footerButtonClose.innerHTML = 'Close';
        this.footerButtonSubmit = document.createElement('button');
        this.footerButtonSubmit.classList.add(defaultConfig.classNames.alertWindow.btn1,
            defaultConfig.classNames.alertWindow.btnPrimary);
        this.footerButtonSubmit.id = defaultConfig.classNames.alertWindow.btnNewsId;
        this.footerButtonSubmit.setAttribute('data-dismiss', 'modal');
        this.footerButtonSubmit.innerHTML = 'Get a news';
        this.footerButtonTopNews = document.createElement('button');
        this.footerButtonTopNews.classList.add(defaultConfig.classNames.alertWindow.btn1,
            defaultConfig.classNames.alertWindow.btnSuccess);
        this.footerButtonTopNews.id = defaultConfig.classNames.alertWindow.btnTopNewsId;
        this.footerButtonTopNews.setAttribute('data-dismiss', 'modal');
        this.footerButtonTopNews.innerHTML = 'Get top News';

        this.addOption(newsCategory, inputCategoryId, category);
        this.addOption(newsOnPage, inputNumberId, newsNumber);

        this.windowFooter.appendChild(this.footerButtonClose);
        this.windowFooter.appendChild(this.footerButtonSubmit);
        this.windowFooter.appendChild(this.footerButtonTopNews);
    }

    addOption = (optionParams, id, labelText) => {
        this.selectElem = document.createElement('select');
        this.selectElem.classList.add(defaultConfig.classNames.modalInput.select);
        this.selectElem.id = id;
        optionParams.forEach((param) => {
            const optionSelect = document.createElement('option');
            optionSelect.value = param;
            optionSelect.innerText = (typeof param === 'string') ? param.toUpperCase() : param;
            this.selectElem.appendChild(optionSelect);
        });

        this.inputWrapper = document.createElement('div');
        this.inputWrapper.classList.add(defaultConfig.classNames.modalInput.inputGroup1,
            defaultConfig.classNames.modalInput.inputGroup1);

        this.labelWrapper = document.createElement('div');
        this.labelWrapper.classList.add(defaultConfig.classNames.modalInput.inputGroupApp);

        this.inputLabel = document.createElement('label');
        this.inputLabel.classList.add(defaultConfig.classNames.modalInput.inputGroupText);
        this.inputLabel.setAttribute('for', id);
        this.inputLabel.innerText = labelText;

        this.labelWrapper.appendChild(this.inputLabel);
        this.inputWrapper.appendChild(this.selectElem);
        this.inputWrapper.appendChild(this.labelWrapper);

        this.inputItem = document.createElement('div');
        this.inputItem.classList.add(defaultConfig.classNames.modalInput.inputItem);

        this.inputItem.appendChild(this.inputWrapper);
        this.windowBody.appendChild(this.inputItem);
    }
}
