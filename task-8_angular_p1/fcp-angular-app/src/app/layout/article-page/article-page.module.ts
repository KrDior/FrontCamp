import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticlePageRoutingModule } from './article-page-routing.module';
import { ArticlePageComponent } from './article-page.component';
import { PageHeaderModule } from './../../shared';
import { ModalWindowModule } from 'src/app/components/modal-window/modal-window.module';


@NgModule({
  imports: [CommonModule, ArticlePageRoutingModule, PageHeaderModule, FormsModule, ModalWindowModule,],
  declarations: [ArticlePageComponent],
})
export class ArticlePageModule { }
