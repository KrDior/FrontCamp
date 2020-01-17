import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from './product';
import { UserDataService } from 'src/app/global-service/user-data.service';
import { NewsItem } from '../interfaces';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  animations: [routerTransition()],
  providers: [],

})
export class FormComponent implements OnInit {

  product: Product = new Product('', '', '', '', 0, '', 0, '', '', false, '', false);
  receivedProduct: Product;
  done = false;
  error: any;
  formTitle: string;
  news =  {
    heading: 'a',
    description: 'a',
    content: 'a',
    image: 'a',
    date: 'a',
    author: 'a',
    sourceUrl: 'a',
  };
  userName = '';
  editedArticle: NewsItem;

  newsForm: FormGroup = new FormGroup({
    heading: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    content: new FormControl(''),
    image: new FormControl(''),
    date: new FormControl({value: new Date(), disabled: true}),
    author: new FormControl(''),
    sourceUrl: new FormControl(''),
});

  constructor(
    private userService: UserDataService,
    private articleService: ArticleService,

    ) { }

  ngOnInit() {
    this.articleService.getNewsEdit().subscribe(article => this.editedArticle = article);

    this.formTitle = this.editedArticle ? 'Edit your choosen article' : 'Add new article to localbase';

    if (this.editedArticle) {
      this.setFormValue();
    } else {
      this.userName = localStorage.getItem('userName');
      this.newsForm.patchValue({
        author: this.userName,
      });
    }
  }

  setFormValue() {
    const { id, isLocalNews, author, title, description, url, urlToImage, publishedAt, content } = this.editedArticle;
    this.newsForm.patchValue({
      heading: title ? title : '',
      description: description ? description : '',
      content: content ? content : '',
      image: urlToImage ? urlToImage : '',
      date: publishedAt ? publishedAt : '',
      author: author ? author : '',
      sourceUrl: url ? url : '',
    });
  }

  addNews(form: NgForm) {
    // this.productService.createProduct(form.value)
    //   .subscribe(
    //     (data: Product) => { this.receivedProduct = data; this.done = true; },
    //     error => console.log(error)
    //   );
    // form.reset();
  }
}
