import { Component, OnInit } from '@angular/core';
import { TemplateRef, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ProductsService } from '../form/services/products.service';
import { Product } from '../form/product';

@Component({
	selector: 'app-tables',
	templateUrl: './tables.component.html',
	styleUrls: ['./tables.component.scss'],
	animations: [routerTransition()],
	providers: [ProductsService],
})
export class TablesComponent implements OnInit {
	@ViewChild('readOnlyTemplate', { static: false }) readOnlyTemplate: TemplateRef<any>;
	@ViewChild('editTemplate', { static: false }) editTemplate: TemplateRef<any>;

	editedProduct: Product;
	products: Array<Product>;
	isNewRecord: boolean;
	statusMessage: string;
	error: any;

	constructor(private productService: ProductsService) {
		this.products = new Array<Product>();
	}

	ngOnInit() {
		this.loadProducts();
	}

	private loadProducts() {
		this.productService.getProducts().subscribe(
			data => this.products = data,
			error => {
				this.error = error.message; console.log(error);
			});
	}

	addProduct() {
		this.editedProduct = new Product(undefined,"","","", 0,"", 0,"","", false,"", false);
		this.products.push(this.editedProduct);
		this.isNewRecord = true;
	}

	editProduct(product: Product) {
        this.editedProduct = new Product(
			product._id,
			product.manufacturer,
			product.model,
			product.picture,
			product.price,
			product.description,
			product.diagonal,
			product.typeOfMatrix,
			product.resolution,
			product.support3D,
			product.portInterface,
			product.available
			);
    }

	loadTemplate(product: Product) {
		if (this.editedProduct && this.editedProduct._id == product._id) {
			return this.editTemplate;
		} else {
			return this.readOnlyTemplate;
		}
	}

	saveProduct() {
        if (this.isNewRecord) {
            this.productService.createProduct(this.editedProduct).subscribe((data: Product) => {
                this.statusMessage = 'Data was added';
				this.loadProducts();
            });
            this.isNewRecord = false;
            this.editedProduct = null;
        } else {
            this.productService.updateProductBase(this.editedProduct._id, this.editedProduct).subscribe(
				(data: Product) => {
				this.statusMessage = 'Data was updated';
				this.loadProducts();
            }, error => console.log(error));
            this.editedProduct = null;
        }
	}

	cancel() {
        if (this.isNewRecord) {
            this.products.pop();
            this.isNewRecord = false;
        }
        this.editedProduct = null;
	}

	deleteProduct(product: Product) {
        this.productService.deleteProduct(product._id).subscribe(data => {
            this.statusMessage = 'Data was deleted',
            this.loadProducts();
        });
    }
}
