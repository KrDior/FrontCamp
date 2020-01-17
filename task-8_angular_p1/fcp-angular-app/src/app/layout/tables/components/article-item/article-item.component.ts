import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { NewsItem } from 'src/app/layout/interfaces';
import { ArticleService } from 'src/app/layout/services/article.service';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit {
  @Input() article: NewsItem;

  constructor(
    private articleService: ArticleService,
  ) { }

  ngOnInit() {
  }

  passCurrentArticleData() {
    this.articleService.setNewsEdit(this.article);
  }

  deleteArticle(article: NewsItem): void {
    console.log('Create request for deleting item');
  }

}
