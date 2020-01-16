import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ARTICLES } from '../mock-news';
import { NewsItem } from '../interfaces';


@Injectable({
  providedIn: 'root',
})
export class NewsService {

  constructor() { }

  getArticles(): Observable<NewsItem[]> {
    return of(ARTICLES);
  }

  getArticle(id: string) {
    const title = id.split('-').join(' ');
    return this.getArticles().pipe(
      map((articles: NewsItem[]) => articles.find(article => article.title === title))
    );
  }
}
