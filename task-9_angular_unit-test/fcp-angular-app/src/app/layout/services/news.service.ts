import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { queryMaker } from './utils';

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

  getData(source: string, type: string, filter?: string): Observable<any> {
    const url = queryMaker(source, type, filter);
    this.newsApiDataSources = this.useHttpClient(url);
    return this.newsApiDataSources;
  }

  useHttpClient(url): Observable<any> {
    return this.http.get(url).pipe(map((data: any) => {
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
