// tslint:disable: max-line-length
import { Injectable } from "@angular/core";
import { HttpClient, HttpEventType, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { User } from "../layout/interfaces";

import initConfig from "../config/initConfig";
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class UserDataService {
  private user: BehaviorSubject<User> = new BehaviorSubject({
    name: "Unknown user"
  });
  public popup: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.user.asObservable();
  }

  setUsert(user: User) {
    this.user.next(user);
  }

  onCreateUser(userData) {
    this.http
      .post(
        `${initConfig.MDBASE_PATH}${initConfig.MDBASE_PATH_USERS}`,
        userData
      )
      .subscribe(
        val => {
          console.log("New user registered successfully", val);
        },
        response => {
          console.log("Creating new user Error", response);
        },
        () => {
          console.log("User POST observable is now completed.");
        }
      );
  }

  onCheckUser(userData): Observable<any> {
      return this.http.post(`${initConfig.MDBASE_PATH}${initConfig.MDBASE_PATH_USER_LOGIN}`,
          userData
        ).pipe(map((data: any) => {
        if (data.user) {
          console.log("User login is successfully", data.user);
          this.setSession(data);
          return data;
        }
        return null;
      }),
        catchError(err => {
          console.log("User login is Error", err);
          throw new Error(err);
        }));
  }

  setSession(auth) {
    const {
      user: { login, token }
    } = auth;
    localStorage.setItem("token", token);
    localStorage.setItem("isLoggedin", "true");
    localStorage.setItem("userName", login);
  }

  logout() {
    localStorage.removeItem("isLoggedin");
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
  }
}
