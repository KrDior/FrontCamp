import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ProductsService } from './services/products.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from './product';
import { UserDataService } from 'src/app/global-service/user-data.service';

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
  done = false;
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
  userName = '';

  newsForm: FormGroup = new FormGroup({
    heading: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    content: new FormControl(''),
    image: new FormControl(''),
    date: new FormControl(Date.now()),
    author: new FormControl(this.userName),
    sourceUrl: new FormControl('', Validators.pattern('[0-9]{10}')),
});

  constructor(
    private productService: ProductsService,
    private userService: UserDataService,

    ) { }

  ngOnInit() {
    this.userService.getUser().subscribe(user => this.userName = user.name);
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
