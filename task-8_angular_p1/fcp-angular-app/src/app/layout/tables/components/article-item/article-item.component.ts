import { Component, OnInit, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { NewsItem } from 'src/app/layout/interfaces';
import { ArticleService } from 'src/app/layout/services/article.service';
import { NewsService } from 'src/app/layout/services/news.service';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss'],
})
export class ArticleItemComponent implements OnInit {
  @Input() article: NewsItem;
  @Output() deleteEvent = new EventEmitter<NewsItem>();

  constructor(
    private articleService: ArticleService,
    private newsService: NewsService,
  ) { }

  ngOnInit() {
  }

  passCurrentArticleData(article) {
    this.articleService.setNewsEdit(article);
  }

  editUrl(article) {
    if (article.isLocalNews) {
      return article.url ? article.url : article.title.split(' ').join('-&').toLocaleLowerCase();
    } else {
      return article.title.split(' ').join('-&').toLocaleLowerCase();
    }
  }

  deleteArticle(article: NewsItem): void {
    this.newsService.onDeleteArticle(article._id);
    this.deleteEvent.emit(article);
  }

}
