import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';
import { ModalWindowModule } from 'src/app/components/modal-window/modal-window.module';
import { AlertSelfclosingComponent } from './components/alert/alert-selfclosing.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    FormRoutingModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    ModalWindowModule,
    NgbAlertModule
  ],
  declarations: [FormComponent, AlertSelfclosingComponent]
})
export class FormModule { }
