import { Component, OnInit } from '@angular/core';
import { NewsItem } from '../interfaces';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {
  article: NewsItem;

  constructor(
    private articleService: ArticleService,
  ) { }

  ngOnInit() {
    this.articleService.getNewsEdit().subscribe(article => this.article = article);
  }

}
