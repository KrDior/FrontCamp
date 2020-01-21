// tslint:disable: max-line-length
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from '../layout/interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {

  private user: BehaviorSubject<User> = new BehaviorSubject({ name: 'Unknown user' });
  public popup: Subject<any> = new Subject<any>();

  constructor() { }

  getUser(): Observable<User> {
    return this.user.asObservable();
  }

  setUsert(user: User) {
    this.user.next(user);
  }

}
