// tslint:disable: max-line-length
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NewsItem } from '../interfaces';


@Injectable()
export class ArticleService {
  private articleSource: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { }

  getNewsEdit(): Observable<NewsItem> {
    return this.articleSource.asObservable();
  }

  setNewsEdit(article: NewsItem) {
    this.articleSource.next(article);
  }

  clear() {
    this.articleSource.next(null);
  }

}
