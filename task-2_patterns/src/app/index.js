import NewsController from '../components/newsController/NewsController';
import '../style/app.scss';
import '../style/custom.scss';
import 'bootstrap';

function AppInit() {
    console.log('App init');
    document.body.newsApp = new NewsController();
    window.removeEventListener('DOMContentLoaded', AppInit);
}

window.addEventListener('DOMContentLoaded', AppInit);
