import { Component, OnInit, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { NewsItem } from 'src/app/layout/interfaces';
import { ArticleService } from 'src/app/layout/services/article.service';
import { NewsService } from 'src/app/layout/services/news.service';

@Component({
  selector: 'app-article-item-factory-resolver',
  templateUrl: './article-item-factory-resolver.component.html',
  styleUrls: ['./article-item-factory-resolver.component.scss']
})
export class ArticleItemFactoryResolverComponent implements OnInit {
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

  setImage(article) {
    if (article.pictureFile && article.pictureFile !== 'null') {
      return article.pictureFile;
    } else if (article.urlToImage) {
      return article.urlToImage;
    } else {
      return 'assets/images/album-default.png';
    }
  }

  deleteArticle(article: NewsItem): void {
    this.newsService.onDeleteArticle(article._id);
    this.deleteEvent.emit(article);
  }

}
