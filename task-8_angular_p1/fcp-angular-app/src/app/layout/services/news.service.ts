import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

import { Observable, of } from 'rxjs';
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

  constructor(
    private http: HttpClient,
  ) {}

  getArticles(): Observable<NewsItem[]> {
    return of(ARTICLES);
  }

  getSources(): Observable<NewsSource[]> {
    return of(SOURCES);
  }

  createUrlRequest(param, type) {
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
      default:
        break;
    }
  }

  getDataFromNewsAPI(): Observable<NewsItem[]> {
    console.log('!!!!!!!!', this);
    return this.http.get(this.newsUrl).pipe(map((data: any) => {
      console.log('!!!data', data);
      return data.articles;
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

  getPersistArticles() {
    return this.newsApiData;
  }


  getPersistArticleById(id: string): Observable<NewsItem> {
    const title = id.split('-&').join(' ').toLocaleLowerCase();
    return this.getPersistArticles().pipe(
      map((articles: NewsItem[]) => articles.find(article => article.title.toLocaleLowerCase() === title ))
    );
  }

  onSubmit(data) {
    this.http.post('https://us-central1-tutorial-e6ea7.cloudfunctions.net/fileUpload', data, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(events => {
        if (events.type === HttpEventType.UploadProgress) {
          console.log('upload');
        } else if (events.type === HttpEventType.Response) {
          console.log(events.body);
        }
      });
  }
}
