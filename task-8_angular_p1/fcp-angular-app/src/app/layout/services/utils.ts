import initConfig from '../../config/initConfig';

const queryMaker = (param, type, filter) => {
  let newsUrl = '';
  if (param === 'all-news' && type === 'all-news') {
    newsUrl = `${initConfig.MDBASE_PATH}${initConfig.MDBASE_PATH_NEWS}`;
  } else if (param === 'local-news' && !filter) {
    newsUrl = `${initConfig.MDBASE_PATH}${initConfig.MDBASE_PATH_NEWS}`;
  } else if (param === 'local-news' && filter) {
    newsUrl = `${initConfig.MDBASE_PATH}${initConfig.MDBASE_PATH_SEARCH}${filter}`;
  } else {
    newsUrl = `${initConfig.NEWS_API_PATH}`;
    switch (type) {
      case 'bySource':
        newsUrl += `${initConfig.NEWS_TOPHEAD}?sources=${param}&apiKey=${initConfig.NEWS_API_KEY}`;
        break;
      case 'byFilterValue':
        newsUrl += `everything?q=${param}&apiKey=${initConfig.NEWS_API_KEY}`;
        break;
      case 'topHeadlines':
        newsUrl += `${initConfig.NEWS_TOPHEAD}?country=us&apiKey=${initConfig.NEWS_API_KEY}`;
        break;
      case 'sources':
        newsUrl += `sources?apiKey=${initConfig.NEWS_API_KEY}`;
        break;
      default:
        newsUrl += `${initConfig.NEWS_TOPHEAD}?country=us&apiKey=${initConfig.NEWS_API_KEY}`;
        break;
    }
  }
  return newsUrl;
}

const urlForApiNews = (param, type, filter) => {
  let newsUrl = `${initConfig.NEWS_API_PATH}`;
  switch (type) {
    case 'bySource':
      newsUrl += `${initConfig.NEWS_TOPHEAD}?sources=${param}&apiKey=${initConfig.NEWS_API_KEY}`;
      break;
    case 'byFilterValue':
      newsUrl += `everything?q=${param}&apiKey=${initConfig.NEWS_API_KEY}`;
      break;
    case 'topHeadlines':
      newsUrl += `${initConfig.NEWS_TOPHEAD}?country=us&apiKey=${initConfig.NEWS_API_KEY}`;
      break;
    case 'sources':
      newsUrl += `sources?apiKey=${initConfig.NEWS_API_KEY}`;
      break;
    default:
      newsUrl += `${initConfig.NEWS_TOPHEAD}?country=us&apiKey=${initConfig.NEWS_API_KEY}`;
      break;
  }
  return newsUrl;
}

export { queryMaker };
