import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewsItem, NewsSource } from '../interfaces';

import { ARTICLES } from '../mock-news';
import { SOURCES } from '../mock-sources';


@Injectable({
  providedIn: 'root',
})
export class NewsService {

  constructor() { }

  getArticles(): Observable<NewsItem[]> {
    return of(ARTICLES);
  }

  getSources(): Observable<NewsSource[]> {
    return of(SOURCES);
  }

  getArticle(id: string) {
    const title = id.split('-').join(' ').toLocaleLowerCase();
    console.log(title)
    return this.getArticles().pipe(
      map((articles: NewsItem[]) => articles.find(article => article.title.toLocaleLowerCase() === title))
    );
  }
}
