// tslint:disable: max-line-length
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NewsItem } from '../interfaces';


@Injectable()
export class ArticleService {
  private defaultArticle: NewsItem = {
    source: {
      id: 'techcrunch',
      name: 'TechCrunch'
    },
    author: 'Jonathan Shieber',
    title: 'All tulips must wilt',
    description: 'It’s a bad day in the world of cryptocurrency. After recovering some during the summer, the value of bitcoin and other cryptocurrencies are sharply down over the last several weeks. Looking back a month, bitcoin was worth around $8,500 a coin. Today it’s wort…',
    url: 'http://techcrunch.com/2019/12/18/all-tulips-must-wilt/',
    urlToImage: 'https://techcrunch.com/wp-content/uploads/2019/12/Screen-Shot-2019-12-18-at-9.39.21-AM.png?w=669',
    publishedAt: '2019-12-18T15:17:17Z',
    content: 'It’s a bad day in the world of cryptocurrency. After recovering some during the summer, the value of bitcoin and other cryptocurrencies are sharply down over the last several weeks. Looking back a month, bitcoin was worth around $8,500 a coin. Today it’s wort… [+673 chars]'
  };


  private articleSource: BehaviorSubject<NewsItem> = new BehaviorSubject(this.defaultArticle);

  constructor() { }

  getNewsEdit(): Observable<NewsItem> {
    return this.articleSource.asObservable();
  }

  setNewsEdit(article: NewsItem) {
    this.articleSource.next(article);
  }

}
