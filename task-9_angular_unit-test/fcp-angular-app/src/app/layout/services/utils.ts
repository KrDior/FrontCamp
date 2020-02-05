import initConfig from '../../config/initConfig';

const queryMaker = (param, type, filter) => {
  if (param === 'local-news') {
    return urlForLocalDB(param, type, filter);
  } else {
    return urlForApiNews(param, type, filter);
  }
}

const urlForLocalDB = (param, type, filter) => {
  let newsUrl = `${initConfig.MDBASE_PATH}${initConfig.MDBASE_PATH_NEWS}`;
  switch (type) {
    case 'bySource':
      newsUrl = `${initConfig.MDBASE_PATH}${initConfig.MDBASE_PATH_NEWS}`;
      break;
    case 'byFilterValue':
      newsUrl = `${initConfig.MDBASE_PATH}${initConfig.MDBASE_PATH_SEARCH}${filter}`;
      break;
    default:
      newsUrl = `${initConfig.MDBASE_PATH}${initConfig.MDBASE_PATH_NEWS}`;
      break;
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
