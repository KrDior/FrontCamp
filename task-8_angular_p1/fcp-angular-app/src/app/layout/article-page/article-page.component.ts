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
  article$: Observable<NewsItem>;

  constructor(
    private articleService: ArticleService,
    private newsService: NewsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.article$ = this.route.paramMap
    .pipe(
      switchMap((params: ParamMap) =>
      this.newsService.getPersistArticleById(params.get('id')))
    );
  }

  passCurrentArticleData(article: NewsItem) {
    this.articleService.setNewsEdit(article);
  }

  deleteArticle(article: NewsItem): void {
    console.log('Create request for deleting item');
  }

}
