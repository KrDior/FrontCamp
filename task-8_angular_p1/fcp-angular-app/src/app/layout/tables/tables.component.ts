    // tslint:disable: max-line-length
import { Component, OnInit, ChangeDetectorRef, ViewContainerRef, ComponentFactoryResolver, OnChanges } from '@angular/core';
import { TemplateRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news.service';
import { routerTransition } from '../../router.animations';
import { NewsItem } from '../interfaces/index';
import { ArticleItemFactoryResolverComponent } from './components/article-item-factory-resolver/article-item-factory-resolver.component';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  animations: [routerTransition()],
})
export class TablesComponent implements OnInit, OnChanges {
  @ViewChild('readOnlyTemplate', { static: false }) readOnlyTemplate: TemplateRef<any>;

  @ViewChild('container', { static: false, read: ViewContainerRef }) container: ViewContainerRef;

  articles$: NewsItem[];

  newsItemShow = 3;
  articleCount: number;
  editedArticle: NewsItem;
  selectedId: string;

  newsHeader = 'Select preferred source of news';
  newsSourceId: string;
  showOnlyLocalNews: boolean;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private newsService: NewsService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    ) {
  }

  ngOnInit() {
    this.getAllNews();
  }

  ngOnChanges() {

  }

  createItems(event = null) {
    this.container.clear();
    if (event) {
      this.articles$.filter(article => article.isLocalNews).forEach((article, index) => {
        if (index < this.newsItemShow) {
          const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ArticleItemFactoryResolverComponent);
          const componentRef = this.container.createComponent(componentFactory);

          componentRef.instance.article = article;
          componentRef.instance.deleteEvent.subscribe(val => this.receiveDeleteAction(val));
        }
      });
    } else {
      this.articles$.forEach((article, index) => {
        if (index < this.newsItemShow) {
          const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ArticleItemFactoryResolverComponent);
          const componentRef = this.container.createComponent(componentFactory);

          componentRef.instance.article = article;
          componentRef.instance.deleteEvent.subscribe(val => this.receiveDeleteAction(val));
        }
      });
    }
  }

  onNewsSourceChange(newsSource) {
    this.newsHeader = newsSource[0];
    this.newsSourceId = newsSource[1];
    this.newsItemShow = 3;
    if (this.newsSourceId === 'all-news') {
      this.getAllNews();
    } else {
      this.newsService.getData(this.newsSourceId, 'bySource', '').subscribe(data => {
        this.articles$ = data;
        this.createItems();
      });
    }

  }

  getAllNews() {
    this.articles$ = [];
    this.newsService.getData('local-news', 'all-news', '').subscribe(data => {
      this.articles$ = [...data, ...this.articles$];
      this.createItems();
    });
    this.newsService.getData('apinews', 'topHeadlines', '').subscribe(data => {
      this.articles$ = [...data, ...this.articles$];
      this.createItems();
    });
  }

  onFilterValue(filterValue) {
    this.newsService.getData(this.newsSourceId, 'byFilterValue', filterValue).subscribe(data => {
      this.articles$ = data;
      this.createItems();
    });
  }


  showMoreNews() {
    this.newsItemShow += 3;
    this.createItems();
  }

  showLocalNews(event) {
    this.createItems(event);
  }


  receiveDeleteAction($event) {
    this.articles$ = this.articles$.filter(article => article._id !== $event._id);
    this.createItems();
  }

}
