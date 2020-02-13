import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { UserDataService } from './global-service/user-data.service';
import { ModalWindowModule } from './components/modal-window/modal-window.module';
import { ArticleService } from './layout/services/article.service';
import { NewsService } from './layout/services/news.service';
import { PopupService } from './components/angular-element-component/popup.service';
import { PopupComponent } from './components/angular-element-component/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ModalWindowModule,
  ],
  providers: [
    AuthGuard,
    UserDataService,
    ArticleService,
    NewsService,
    PopupService,
  ],
  entryComponents: [PopupComponent],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule { }
