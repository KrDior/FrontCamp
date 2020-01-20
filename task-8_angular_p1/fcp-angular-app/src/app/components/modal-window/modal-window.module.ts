import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  ModalWindowComponent
} from './modal-window.component';


@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [ModalWindowComponent],
  exports: [ModalWindowComponent],
  bootstrap: [ModalWindowComponent],
  entryComponents: []
})
export class ModalWindowModule {}
