import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditPageRoutingModule } from './edit-page-routing.module';
import { EditPageComponent } from './edit-page.component';
import { PageHeaderModule } from './../../shared';
import { ProductsService } from '../form/services/products.service';


@NgModule({
  imports: [CommonModule, EditPageRoutingModule, PageHeaderModule, FormsModule],
  declarations: [EditPageComponent],
  providers: [ProductsService],
})
export class EditPageModule { }
