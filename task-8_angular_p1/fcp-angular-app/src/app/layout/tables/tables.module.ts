import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { ModalWindowModule } from 'src/app/components/modal-window/modal-window.module';
import { ArticleItemFactoryResolverComponent } from './components/article-item-factory-resolver/article-item-factory-resolver.component';
import { LocalNewsFilterPipe } from './pipes/filter.pipe';

@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule, FormsModule, NgbModule, ModalWindowModule],
    declarations: [TablesComponent, FilterPanelComponent, ArticleItemComponent, ArticleItemFactoryResolverComponent, LocalNewsFilterPipe],
    entryComponents: [ArticleItemFactoryResolverComponent]
})
export class TablesModule {}
