    // tslint:disable: max-line-length
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TemplateRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news.service';
import { routerTransition } from '../../router.animations';
import { NewsItem } from '../interfaces/index';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  animations: [routerTransition()],
})
export class TablesComponent implements OnInit {
  @ViewChild('readOnlyTemplate', { static: false }) readOnlyTemplate: TemplateRef<any>;

  articles$: Observable<NewsItem[]>;

  newsItemShow = 3;
  articleCount: number;
  editedArticle: NewsItem;
  selectedId: string;

  newsHeader = 'Select preferred source of news';
  newsSourceId: string;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    ) {
  }

  ngOnInit() {
    this.getArticles(this.newsHeader, 'topHeadlines');
  }

  getArticles(newsSource: string, newsType: string) {
    this.articles$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = params.get('id');
        return this.newsService.getArticlesBySource(newsSource, newsType);
      })
    );
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }


  onNewsSourceChange(newsSource) {
    this.newsHeader = newsSource[0];
    this.newsSourceId = newsSource[1];
    this.getArticles(this.newsSourceId, 'bySource');
  }

  showMoreNews() {
    this.newsItemShow += 5;
  }

  loadNewsTemplate(newsItem: NewsItem) {
    return this.readOnlyTemplate;
  }

}
