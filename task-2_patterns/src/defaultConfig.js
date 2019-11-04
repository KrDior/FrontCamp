/* eslint-disable no-undef */
const defaultConfig = {
    BASE_URL: 'https://newsapi.org/v2/',
    preferedLanguage: 'en',
    preferedCountry: 'ru',
    newsCategory: [
        'business',
        'entertainment',
        'general',
        'science',
        'sports',
        'technology',
    ],
    newsOnPage: [
        1,
        3,
        5,
        7,
        10,
        20,
        50,
        100,
    ],
    searchBoxTemplate: {
        placeholder: 'Type search words...',
        modal: true,
        buttonName: 'Seach',
        buttonId: 'searchStringButton',
        inputId: 'searchStringInput',
    },
    inputCategoryId: 'inputCategory',
    inputNumberId: 'inputNumberNews',
    classNames: {
        mainCanvas: {
            canvas1: 'album',
            canvas2: 'py-5',
            canvas3: 'bg-light',
            container: 'container',
            containerId: 'newsContainer',
        },
        newsCard: {
            position: 'col-md-4',
            cardElement: 'card',
            cardElement2: 'mb-4',
            cardElement3: 'shadow-sm',
            image: 'card-img-top',
            lazyLoad: 'lazy-image',
            body: 'card-body',
            title: 'card-title',
            text: 'card-text',
            button: 'btn',
            btnPrimary: 'btn-primary',
        },
        modalParentElement: 'modal-body-wrapper',
        modalInput: {
            inputItem: 'modal-body',
            inputGroup1: 'input-group',
            inputGroup2: 'mb-3',
            inputGroupApp: 'input-group-append',
            inputGroupText: 'input-group-text',
            select: 'custom-select',
        },
        cardRow: 'row',
        alertWindow: {
            category: 'Category',
            newsNumber: 'News per page',
            windowFade1: 'modal',
            windowFade2: 'fade',
            windowFadeId: 'modalCenter',
            modalPosition1: 'modal-dialog',
            modalPosition2: 'modal-dialog-centered',
            modalContent: 'modal-content',
            modalHeader: 'modal-header',
            modalTitle: 'modal-title',
            closeButton: 'close',
            modalBody: 'modal-body-wrapper',
            modalBodyId: 'mainMessage',
            modalFooter: 'modal-footer',
            btn1: 'btn',
            btn2: 'btn-warning',
            btnPrimary: 'btn-primary',
            btnSecondary: 'btn-secondary',
            btnSuccess: 'btn-success',
            btnNewsId: 'getNewsButton',
            btnTopNewsId: 'getTopNewsButton',
        },
    },
};

export default defaultConfig;
