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

  articles$: NewsItem[];

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
    this.newsService.getArticlesBySource('', '').subscribe(data => this.articles$ = data);
  }

  // tslint:disable-next-line: use-lifecycle-interface
  // ngAfterViewInit(): void {
  //   this.cdr.detectChanges();
  // }


  onNewsSourceChange(newsSource) {
    this.newsHeader = newsSource[0];
    this.newsSourceId = newsSource[1];
    this.newsService.getArticlesBySource(this.newsSourceId, 'bySource').subscribe(data => this.articles$ = data);
  }

  onFilterValue(filterValue) {
    this.newsService.getArticlesBySource(filterValue, 'byFilterValue').subscribe(data => this.articles$ = data);
  }

  showMoreNews() {
    this.newsItemShow += 5;
  }

  loadNewsTemplate(newsItem: NewsItem) {
    return this.readOnlyTemplate;
  }

  receiveDeleteAction($event) {
    this.articles$.filter(article => article._id !== $event._id);
  }

}
