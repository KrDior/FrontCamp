import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { routerTransition } from '../router.animations';
import { UserDataService } from '../global-service/user-data.service';
import { User } from '../layout/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()],
})
export class LoginComponent implements OnInit {
  login = '';
  password = '';
  isUserDataCorrect = false;

  loginForm: FormGroup = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  formData = new FormData();

  constructor(
    public router: Router,
    private userService: UserDataService,
  ) { }

  ngOnInit() { }

  onLoggedin() {
    console.log('Form submit', this.loginForm.value);
    if (!this.isUserRegistered()) {
      this.isUserDataCorrect = !this.isUserDataCorrect;
    } else {
      // implement auth service check
      console.log('auth service check');
      this.userService.setUsert({ name: this.login });
      localStorage.setItem('isLoggedin', 'true');
      localStorage.setItem('userName', this.login);
    }

  }

  isUserRegistered() {
    return true;
  }

}
