import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticlePageRoutingModule } from './article-page-routing.module';
import { ArticlePageComponent } from './article-page.component';
import { PageHeaderModule } from './../../shared';
import { ProductsService } from '../form/services/products.service';


@NgModule({
  imports: [CommonModule, ArticlePageRoutingModule, PageHeaderModule, FormsModule],
  declarations: [ArticlePageComponent],
  providers: [ProductsService],
})
export class ArticlePageModule { }
