import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ModalWindowModule } from '../components/modal-window/modal-window.module';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        ModalWindowModule,
        ReactiveFormsModule,
      ],
    declarations: [LoginComponent],
    exports: [],
})
export class LoginModule {}
