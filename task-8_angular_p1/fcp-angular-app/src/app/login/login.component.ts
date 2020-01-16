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

  constructor(
    public router: Router,
    private userService: UserDataService,
  ) { }

  ngOnInit() { }

  onLoggedin() {
    this.userService.setUsert({ name: this.login });
    localStorage.setItem('isLoggedin', 'true');
  }
}
