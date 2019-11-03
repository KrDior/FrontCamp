/* eslint-disable import/prefer-default-export */
function Wrapper(country = '', language = '', category = '', pageSize = '', apiKey = '') {
    this.country = country;
    this.language = language;
    this.category = category;
    this.pageSize = pageSize;
    this.apiKey = apiKey;
}

export const proxyLoggerHandler = {
    get: (target) => {
        const country = target.request.substr(target.request.indexOf('country') + 8, 2);
        const language = target.request.substr(target.request.indexOf('language') + 9, 2);
        const category = target.request.substr(target.request.indexOf('category') + 9, 8);
        const pageSize = target.request.substr(target.request.indexOf('pageSize') + 9, 2);
        const apiKey = target.request.substr(target.request.indexOf('apiKey') + 7, 32);
        const loggerObj = new Wrapper(country, language, category, pageSize, apiKey);

        console.table(loggerObj);
        return target;
    },
};
