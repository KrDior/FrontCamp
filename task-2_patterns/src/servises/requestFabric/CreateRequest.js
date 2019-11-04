/* eslint-disable object-curly-newline */
/* eslint-disable no-undef */
/* eslint-disable max-classes-per-file */
import defaultConfig from '../../defaultConfig';

const { BASE_URL } = defaultConfig;

const createLink = (props) => {
    const { country, category, pageSize, language } = props;
    let link = '';
    if (country) link += `country=${country}`;
    if (category) link += `&category=${category}`;
    if (pageSize) link += `&pageSize=${pageSize}`;
    if (language) link += `&language=${language}`;
    return link;
};

const topHeadlinesNews = (props) => {
    const link = createLink(props);
    return `${BASE_URL}top-headlines?${link}&apiKey=${API_KEY}`;
};

const everythingNews = (props) => {
    const { theme } = props;
    return `${BASE_URL}everything?q=${theme}&apiKey=${API_KEY}`;
};

const sourcesNews = (props) => {
    const link = createLink(props);
    return `${BASE_URL}sources?${link}&apiKey=${API_KEY}`;
};

const searchNews = (props) => {
    const { seachString } = props;
    return `${BASE_URL}everything?q=${seachString}&apiKey=${API_KEY}`;
};

export default class CreateRequest {
    constructor(type, props) {
        this.init(type, props);
    }

    init = (type, props) => {
        this.url = this.createUrl(props);
        this.requestMethod = this.requestMethod(type, props);
        this.requestData = {
            url: this.url,
            requestTypeParams: this.requestMethod,
        };
        return this.requestData;
    }

    requestMethod = (type, props) => {
        this.init = {
            method: '',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrer: 'no-referrer',
        };
        switch (type) {
        case 'GET':
            this.init = {};
            break;
        case 'POST':
            this.init.method = 'POST';
            this.init.data = JSON.stringify(props.data);
            this.init.headers = {
                'Content-Type': 'application/json',
            };
            this.init.mode = 'cors';
            break;
        case 'PUT':
            this.init.method = 'PUT';
            this.init.data = JSON.stringify(props.data);
            this.init.headers = {
                'Content-Type': 'application/json',
            };
            this.init.mode = 'cors';
            break;
        default:
            console.log('Wrong request method');
            break;
        }
        return this.init;
    };

    createUrl = (props) => {
        this.request = '';
        switch (props.method) {
        case 'topNews':
            this.request = topHeadlinesNews(props);
            break;
        case 'allNews':
            this.request = everythingNews(props);
            break;
        case 'SourceNews':
            this.request = sourcesNews(props);
            break;
        case 'searchNews':
            this.request = searchNews(props);
            break;
        default:
            console.log('Wrong request parameters');
            break;
        }
        return this.request;
    };
}
