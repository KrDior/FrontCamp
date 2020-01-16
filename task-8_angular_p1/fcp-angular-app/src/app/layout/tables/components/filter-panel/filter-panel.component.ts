import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit {
  @Output() newsSourceName = new EventEmitter<string>();

  news = {
    createdByMe: false,
    filterValue: '',
  };

  sources: Array<{ id: string, name: string }> = [
    { id: 'all-news', name: 'All News' },
    { id: 'local-news', name: 'Local News' },
    { id: 'abc-news', name: 'ABC News' },
    { id: 'aftenposten', name: 'Aftenposten' },
    { id: 'bbc-news', name: 'BBC News' },
    { id: 'financial-post', name: 'Financial Post' },
    { id: 'fortune', name: 'Fortune'},
    { id: 'google-news-ru', name: 'Google News (Russia)'},
    { id: 'mtv-news', name: 'MTV News' },
    { id: 'cbs-news', name: 'CBS News' },
  ];

  constructor() { }

  ngOnInit() {
  }

  onChangeSource(deviceValue) {
    this.newsSourceName.emit(deviceValue);
  }

  filterSubmit(value) {
    this.news.filterValue = '';
  }

  onFilterChange() {
    this.news.createdByMe = !this.news.createdByMe;
  }

  addNews() {
    console.log('Add news');
  }

}
