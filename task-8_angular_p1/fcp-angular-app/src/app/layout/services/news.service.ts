import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';

import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { NewsItem, NewsSource } from '../interfaces';
import initConfig from '../../config/initConfig';

import { ARTICLES } from '../mock-news';
import { SOURCES } from '../mock-sources';


@Injectable({
  providedIn: 'root',
})
export class NewsService {
  newsUrl: string;
  newsApiData: Observable<NewsItem[]>;
  newsApiDataSources: Observable<NewsSource[]>;
  articles$: BehaviorSubject<NewsItem[]> = new BehaviorSubject(null);

  constructor(
    private http: HttpClient,
  ) { }

  getArticles(): Observable<NewsItem[]> {
    return of(ARTICLES);
  }

  getSourcesFromNewsAPI(source: string, type: string): Observable<NewsSource[]> {
    this.createUrlRequest(source, type);
    this.newsApiDataSources = this.getDataFromNewsAPI();
    return this.newsApiDataSources;
  }

  getSources(): Observable<NewsSource[]> {
    return of(SOURCES);
  }

  createUrlRequest(param, type) {
    if (param === 'all-news') {

    } else if (param === 'local-news') {

    } else {
      this.newsUrl = `${initConfig.NEWS_API_PATH}`;
      switch (type) {
        case 'bySource':
          this.newsUrl += `${initConfig.NEWS_TOPHEAD}?sources=${param}&apiKey=${initConfig.NEWS_API_KEY}`;
          break;
        case 'byFilterValue':
          this.newsUrl += `everything?q=${param}&apiKey=${initConfig.NEWS_API_KEY}`;
          break;
        case 'topHeadlines':
          this.newsUrl += `${initConfig.NEWS_TOPHEAD}?country=us&apiKey=${initConfig.NEWS_API_KEY}`;
          break;
        case 'sources':
          this.newsUrl += `sources?apiKey=${initConfig.NEWS_API_KEY}`;
          break;
        default:
          this.newsUrl += `${initConfig.NEWS_TOPHEAD}?country=us&apiKey=${initConfig.NEWS_API_KEY}`;
          break;
      }
    }

  }

  getDataFromNewsAPI(): Observable<any> {
    return this.http.get(this.newsUrl).pipe(map((data: any) => {
      return data.articles ? data.articles : data.sources;
    }),
      catchError(err => {
        console.log(err);
        throw new Error(err);
      }));
  }

  getArticlesBySource(source: string, type: string): Observable<NewsItem[]> {
    this.createUrlRequest(source, type);
    this.newsApiData = this.getDataFromNewsAPI();
    return this.newsApiData;
  }

  getArticle(): Observable<NewsItem[]> {
    return this.articles$.asObservable();
  }

  getPersistArticles() {
    return this.newsApiData;
  }


  getPersistArticleById(id: string): Observable<NewsItem> {
    const title = id.split('-&').join(' ').toLocaleLowerCase();
    return this.getPersistArticles().pipe(
      map((articles: NewsItem[]) => articles.find(article => article.title.toLocaleLowerCase() === title))
    );
  }

  onPostArticle(data) {
    console.log(`${initConfig.MDBASE_PATH}${initConfig.MDBASE_PATH_POST}`);
    const myHeaders = new HttpHeaders().set('Authorization', 'my-auth-token');
    this.http.post(`${initConfig.MDBASE_PATH}${initConfig.MDBASE_PATH_POST}`, data,
    { headers: myHeaders })
    .subscribe(
      (val) => {
          console.log('POST call successful value returned in body',
                      val);
      },
      response => {
          console.log('POST call in error', response);
      },
      () => {
          console.log('The POST observable is now completed.');
      });
  }
}
