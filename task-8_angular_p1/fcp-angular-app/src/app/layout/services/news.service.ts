import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { queryMaker } from './utils'

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

  constructor(
    private http: HttpClient,
  ) { }

  getMockedArticles(): Observable<NewsItem[]> {
    return of(ARTICLES);
  }

  getMockedSources(): Observable<NewsSource[]> {
    return of(SOURCES);
  }

  getData(source: string, type: string, filter?: string) {
    
  }

  getSourcesFromNewsAPI(source: string, type: string): Observable<NewsSource[]> {
    this.createUrlRequest(source, type, '');
    this.newsApiDataSources = this.getDataFromNewsAPI();
    return this.newsApiDataSources;
  }



  createUrlRequest(param, type, filter) {
    if (param === 'all-news' && type === 'all-news') {
      this.newsUrl = `${initConfig.MDBASE_PATH}${initConfig.MDBASE_PATH_NEWS}`;
    } else if (param === 'local-news' && !filter) {
      this.newsUrl = `${initConfig.MDBASE_PATH}${initConfig.MDBASE_PATH_NEWS}`;
    } else if (param === 'local-news' && filter) {
      this.newsUrl = `${initConfig.MDBASE_PATH}${initConfig.MDBASE_PATH_SEARCH}${filter}`;
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
      if (data.articles) {
        return data.articles;
      } else if (data.sources) {
        return data.sources;
      } else {
        data.forEach(item => item.isLocalNews = true);
        return data;
      }
    }),
      catchError(err => {
        console.log(err);
        throw new Error(err);
      }));
  }


  getArticlesBySource(source: string, type: string, filter: string = ''): Observable<NewsItem[]> {
    this.createUrlRequest(source, type, filter);
    this.newsApiData = this.getDataFromNewsAPI();
    return this.newsApiData;
  }

  onPostArticle(data) {
    const myHeaders = new HttpHeaders().set('Authorization', `Token ${localStorage.getItem('token')}`);
    this.http.post(`${initConfig.MDBASE_PATH}${initConfig.MDBASE_PATH_NEWS}`, data,
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

  onDeleteArticle(id) {
    const myHeaders = new HttpHeaders().set('Authorization', `Token ${localStorage.getItem('token')}`);
    this.http.delete(`${initConfig.MDBASE_PATH}${initConfig.MDBASE_PATH_NEWS}${id}`,
    { headers: myHeaders })
    .subscribe(
      (val) => {
          console.log('DELETE call successful', val);
      },
      response => {
          console.log('DELETE call in error', response);
      },
      () => {
          console.log('The DELETE observable is now completed.');
      });
  }

  onGetByUrlArticle(url): Observable<any> {
    return this.http.get(`${initConfig.MDBASE_PATH}${initConfig.MDBASE_PATH_NEWS}${url}`).pipe(map((data: any) => {
      return data;
    }),
      catchError(err => {
        console.log(err);
        throw new Error(err);
      }));
  }

  onEditArticle(id, data) {
    const myHeaders = new HttpHeaders().set('Authorization', `Token ${localStorage.getItem('token')}`);
    this.http.put(`${initConfig.MDBASE_PATH}${initConfig.MDBASE_PATH_NEWS}${id}`, data,
    { headers: myHeaders })
    .subscribe(
      (val) => {
          console.log('PUT call successful value returned in body',
                      val);
      },
      response => {
          console.log('PUT call in error', response);
      },
      () => {
          console.log('The PUT observable is now completed.');
      });
  }
}
