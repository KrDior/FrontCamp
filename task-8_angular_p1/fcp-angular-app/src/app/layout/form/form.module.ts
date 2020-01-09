import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';
import { ProductsService } from './services/products.service';


@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule, FormsModule],
	declarations: [FormComponent],
	providers: [ProductsService],
})
export class FormModule {}
