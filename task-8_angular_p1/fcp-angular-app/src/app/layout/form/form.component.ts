import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ProductsService } from './services/products.service';
import { NgForm } from '@angular/forms';
import { Product } from './product';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  animations: [routerTransition()],
  providers: [ProductsService],

})
export class FormComponent implements OnInit {

  product: Product = new Product('', '', '', '', 0, '', 0, '', '', false, '', false);
  receivedProduct: Product;
  done: boolean = false;
  error: any;
  formTitle = 'Add new article to localbase';
  news =  {
    heading: 'a',
    description: 'a',
    content: 'a',
    image: 'a',
    date: 'a',
    author: 'a',
    sourceUrl: 'a',
  };

  constructor(private productService: ProductsService) { }

  ngOnInit() { }

  addNews(form: NgForm) {
    // this.productService.createProduct(form.value)
    //   .subscribe(
    //     (data: Product) => { this.receivedProduct = data; this.done = true; },
    //     error => console.log(error)
    //   );
    // form.reset();
  }
}
