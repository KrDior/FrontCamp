import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
import { PageHeaderModule } from './../../shared';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { NewsItemComponent } from './components/news-item/news-item.component';

@NgModule({
    imports: [CommonModule, TablesRoutingModule, PageHeaderModule, FormsModule, NgbModule],
    declarations: [TablesComponent, FilterPanelComponent, NewsItemComponent]
})
export class TablesModule {}
