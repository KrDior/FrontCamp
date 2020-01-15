import { Component, OnInit } from '@angular/core';
import { TemplateRef, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NewsItem } from '../interfaces';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  animations: [routerTransition()],
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  @ViewChild('readOnlyTemplate', { static: false }) readOnlyTemplate: TemplateRef<any>;

  article: NewsItem;

  constructor(
    private articleService: ArticleService,
  ) { }

  ngOnInit() {
    this.articleService.getNewsEdit().subscribe(article => this.article = article);
  }

  deleteArticle(article: NewsItem):void {

  }

}
