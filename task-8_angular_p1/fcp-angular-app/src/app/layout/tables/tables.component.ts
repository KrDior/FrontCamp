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
  providers: [],
})
export class TablesComponent implements OnInit {
  @ViewChild('readOnlyTemplate', { static: false }) readOnlyTemplate: TemplateRef<any>;

  articles$: Observable<NewsItem[]>;

  newsItemShow = 3;
  articleCount: number;
  editedArticle: NewsItem;
  selectedId: string;

  newsHeader = 'Select preferred source of news';

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    ) {
  }

  ngOnInit() {
    // this.loadProducts();
    this.articles$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = params.get('id');
        return this.newsService.getArticles();
      })
    );
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }


  onNewsSourceChange(newsSource) {
    this.newsHeader = newsSource;
  }

  showMoreNews() {
    this.newsItemShow += 5;
  }

  loadNewsTemplate(newsItem: NewsItem) {
    return this.readOnlyTemplate;
  }

  saveProduct() {
    // if (this.isNewRecord) {
    //   this.productService.createProduct(this.editedProduct).subscribe((data: Product) => {
    //     this.statusMessage = 'Data was added';
    //     this.loadProducts();
    //   });
    //   this.isNewRecord = false;
    //   this.editedProduct = null;
    // } else {
    //   this.productService.updateProductBase(this.editedProduct._id, this.editedProduct).subscribe(
    //     (data: Product) => {
    //       this.statusMessage = 'Data was updated';
    //       this.loadProducts();
    //     }, error => console.log(error));
    //   this.editedProduct = null;
    // }
  }


  deleteProduct() {
  //   this.productService.deleteProduct(product._id).subscribe(data => {
  //     this.statusMessage = 'Data was deleted',
  //       this.loadProducts();
  //   });
  }
}
