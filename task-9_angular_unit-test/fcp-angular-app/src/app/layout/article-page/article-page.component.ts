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
    title: 'default',
    description: 'default',
    url: '',
    urlToImage: '',
    publishedAt: '',
    content: ''
  };

  constructor(
    private articleService: ArticleService,
    private newsService: NewsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const path = window.location.pathname.slice(10);
    this.articleService.getNewsEdit()
    .subscribe(data => {
      if (!data) {
        this.newsService.onGetByUrlArticle(path.split('%2F').join('/'))
        .subscribe(data2 => {
          if (data2[0]) {
            this.article$ = data2[0];
          } else {
            this.article$ = this.defaultData;
          }
      });
      } else {
        this.article$ = data;
      }
    });
  }

  editLink(article) {
    if (article.title) {
      return article.title.split(' ').slice(0, 2).join(' ');
    }
    return 'default';
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

  passCurrentArticleData(article: NewsItem) {
    this.articleService.setNewsEdit(article);
  }

  deleteArticle(article: NewsItem): void {
    console.log('Create request for deleting item');
    this.newsService.onDeleteArticle(article._id);
    this.isItemDeleted = !this.isItemDeleted;
  }

}
