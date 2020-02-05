import { Component, OnInit, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { routerTransition } from '../router.animations';
import { UserDataService } from '../global-service/user-data.service';
import { User } from '../layout/interfaces';
import { Observable } from 'rxjs';
import { PopupService } from '../components/angular-element-component/popup.service';
import { PopupComponent } from '../components/angular-element-component/popup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()],
})
export class LoginComponent implements OnInit {
  login = '';
  password = '';
  isUserDataCorrect = true;
  isPopupCreated = false;
  isUserExit: Observable<any>;

  loginForm: FormGroup = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  formData = new FormData();

  constructor(
    public router: Router,
    private userService: UserDataService,
    injector: Injector,
    public popup: PopupService
  ) {
        // Convert `PopupComponent` to a custom element.
        const PopupElement = createCustomElement(PopupComponent, {injector});
        // Register the custom element with the browser.
        customElements.define('popup-element', PopupElement);
  }

  ngOnInit() { }

  onLoggedin() {
    this.userService.onCheckUser(this.loginForm.value)
    .subscribe(data => {
      if (data.user) {
        this.isUserDataCorrect = true;
        const popup = document.querySelector('popup-element');
        popup ? popup.remove() : null;
        this.userService.setUsert({ name: this.login });
        this.router.navigateByUrl("newslist");
      }
    });
    const popup = document.querySelector('popup-element');
    popup ? popup.remove() : this.popup.showAsElement(`Your login, ${this.login} or password incorrect. Please try again`);
  }

}
