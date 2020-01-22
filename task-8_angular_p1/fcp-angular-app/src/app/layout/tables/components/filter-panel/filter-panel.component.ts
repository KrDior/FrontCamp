import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { NewsSource, NewsItem } from 'src/app/layout/interfaces';
import { NewsService } from 'src/app/layout/services/news.service';
import { ArticleService } from 'src/app/layout/services/article.service';


@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss'],
})
export class FilterPanelComponent implements OnInit {
  @Output() newsSourceName = new EventEmitter<[string, string]>();
  @Output() filterValue = new EventEmitter<string>();

  news = {
    createdByMe: false,
    filterValue: '',
    filterByValue: '',
  };
  articles$: NewsItem[];

  sources$: NewsSource[] = [
    { id: 'all-news', name: 'All News' },
    { id: 'local-news', name: 'Local News' }
  ];

  constructor(
    private newsService: NewsService,
    private articleService: ArticleService,
  ) { }

  ngOnInit() {
    this.newsService.getSourcesFromNewsAPI('', 'sources').subscribe(sources => this.sources$ = [...this.sources$, ...sources]);
  }

  onChangeSource(sourceName) {
    let sourceId;
    this.sources$.forEach(source => {
      if (source.name === sourceName) {
        sourceId = source.id;
      }
    });
    this.newsSourceName.emit([sourceName, sourceId]);
  }

  filterSubmit(value) {
    this.filterValue.emit(value);
    this.news.filterValue = '';
  }

  onFilterChange() {
    this.news.createdByMe = !this.news.createdByMe;
  }

  addNews() {
    this.articleService.setNewsEdit(null);
  }

}
