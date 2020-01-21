import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { NewsSource } from 'src/app/layout/interfaces';
import { Observable } from 'rxjs';
import { NewsService } from 'src/app/layout/services/news.service';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {
  @Output() newsSourceName = new EventEmitter<[string, string]>();

  news = {
    createdByMe: false,
    filterValue: '',
    filterByValue: '',
  };

  sources$: NewsSource[];

  constructor(
    private newsService: NewsService,
  ) { }

  ngOnInit() {
    this.newsService.getSources().subscribe(sources => this.sources$ = sources);
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
    this.newsService.getArticlesByFilterValue(value, 'byFilterValue');
    this.news.filterValue = '';
  }

  onFilterChange() {
    this.news.createdByMe = !this.news.createdByMe;
  }

  addNews() {
    console.log('Add news');
  }

}
