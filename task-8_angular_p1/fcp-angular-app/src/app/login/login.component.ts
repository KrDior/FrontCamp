import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { UserDataService } from '../global-service/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  login = '';
  password = '';
  isModal = true;

  constructor(
    public router: Router,
    private userService: UserDataService,
  ) { }

  ngOnInit() { }

  onLoggedin() {

    if (!this.login || !this.password) {
      this.onWarning();
    } else {
      // implement auth service check
      console.log('auth service check');
      this.userService.setUsert({ name: this.login });
      localStorage.setItem('isLoggedin', 'true');
      localStorage.setItem('userName', this.login);
    }

  }

  onWarning() {
    this.userService.popup.next('open');
  }
}
