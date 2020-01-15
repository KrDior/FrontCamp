import { Component, OnInit } from '@angular/core';
import { NewsItem } from '../interfaces';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
  providers: [],
})
export class EditPageComponent implements OnInit {
  editedArticle: NewsItem;

  constructor(
    private articleService: ArticleService,
  ) { }

  ngOnInit() {
    this.articleService.getNewsEdit().subscribe(article => this.editedArticle = article);
  }


}
