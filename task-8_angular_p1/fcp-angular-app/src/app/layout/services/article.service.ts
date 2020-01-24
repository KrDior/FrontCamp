// tslint:disable: max-line-length
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NewsItem } from '../interfaces';


@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articleData: BehaviorSubject<any> = new BehaviorSubject(null);
  private changeSuccess: BehaviorSubject<any> = new BehaviorSubject(false);

  constructor() { }

  getNewsEdit(): Observable<NewsItem> {
    return this.articleData.asObservable();
  }

  setNewsEdit(article: NewsItem) {
    this.articleData.next(article);
  }

  getChangeSuccess(): Observable<boolean> {
    return this.changeSuccess.asObservable();
  }

  setChangeSuccess(value) {
    this.changeSuccess.next(value);
  }

  clear() {
    this.articleData.next(null);
  }

}
