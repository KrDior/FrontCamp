/* eslint-disable no-underscore-dangle */
// Singleton implementation
import defaultConfig from '../../defaultConfig';

export default class AlertWindow {
    constructor() {
        if (AlertWindow.instance) {
            return AlertWindow.instance;
        }
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
        this.alertWindow.id = 'modalCenterTitle';
        this.alertWindow.innerHTML = 'Warning message!';
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
        this.footerButton = document.createElement('button');
        this.footerButton.classList.add(defaultConfig.classNames.alertWindow.btn1,
            defaultConfig.classNames.alertWindow.btn2);
        this.footerButton.setAttribute('data-dismiss', 'modal');
        this.footerButton.innerHTML = 'Close warning...';
        this.windowFooter.appendChild(this.footerButton);

        this.windowContent.appendChild(this.windowHeader);
        this.windowContent.appendChild(this.windowBody);
        this.windowContent.appendChild(this.windowFooter);

        this.windowPosition.appendChild(this.windowContent);
        document.body.append(this.alertWindow);

        return this.alertWindow;
    }

    toggleWindow = () => {
        this.alertWindow.modal('toggle');
    }

    showWindow = () => {
        this.alertWindow.modal('show');
    }

    hideWindow = () => {
        this.alertWindow.modal('hide');
    }

    destroyWindow = () => {
        this.alertWindow.modal('dispose');
    }

    getModalWindow = () => this.alertWindow;

    changeWarningMessage = (msg) => {
        this.windowBody.innerHTML = msg;
    }
}
