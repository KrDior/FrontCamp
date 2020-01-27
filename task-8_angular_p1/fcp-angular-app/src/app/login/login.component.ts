import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { routerTransition } from '../router.animations';
import { UserDataService } from '../global-service/user-data.service';
import { User } from '../layout/interfaces';
import { Observable } from 'rxjs';

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
  isUserExit: Observable<any>;

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
    this.isUserDataCorrect = false;
    this.userService.onCheckUser(this.loginForm.value)
    .subscribe(data => {
      if (data.user) {
        this.isUserDataCorrect = true;
        this.userService.setUsert({ name: this.login });
        this.router.navigateByUrl("newslist");
      }
    });
  }

}
