// tslint:disable: max-line-length
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../layout/interfaces';

@Injectable()
export class UserDataService {

  private user: BehaviorSubject<User> = new BehaviorSubject({ name: 'Unknown user' });

  constructor() { }

  getUser(): Observable<User> {
    return this.user.asObservable();
  }

  setUsert(user: User) {
    this.user.next(user);
  }

}
