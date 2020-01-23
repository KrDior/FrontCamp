import { Component, OnInit } from '@angular/core';
import { TemplateRef, ViewChild } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { routerTransition } from '../../router.animations';
import { NewsItem } from '../interfaces';
import { ArticleService } from '../services/article.service';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  animations: [routerTransition()],
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  @ViewChild('readOnlyTemplate', { static: false }) readOnlyTemplate: TemplateRef<any>;
  article$: NewsItem;
  isItemDeleted = false;
  defaultData: NewsItem = {
    _id: 'no id',
    author: '',
    title: '',
    description: '',
    url: '',
    urlToImage: '',
    publishedAt: '',
    content: ''
  }

  constructor(
    private articleService: ArticleService,
    private newsService: NewsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const persistArticles = this.newsService.getPersistArticles();
    const path = window.location.pathname.slice(10);
    if (persistArticles) {
      this.newsService.getPersistArticleById(path)
      .subscribe(data => this.article$ = data);
    } else {
      this.newsService.onGetByUrlArticle(path.split('%2F').join('/'))
      .subscribe(data => {
        this.article$ = data[0].title ? data[0] : this.defaultData;
      });
    }
  }

  editLink(article) {
    if (article.title) {
      return article.title.split(' ').slice(0, 2).join(' ');
    }
    return 'default';
  }

  passCurrentArticleData(article: NewsItem) {
    this.articleService.setNewsEdit(article);
  }

  deleteArticle(article: NewsItem): void {
    console.log('Create request for deleting item');
    this.newsService.onDeleteArticle(article._id);
    this.isItemDeleted = !this.isItemDeleted;
  }

}
