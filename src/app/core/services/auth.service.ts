import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';

import { Config } from '../static-config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private userAdmin: boolean;

  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
      return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(Config.urlAddress + '/api/Auth/Login', { email, password })
        .pipe(map(user => {
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                    user.userRoles.forEach(role => {
                        if (role === 'Administrator') {
                            this.userAdmin = true;
                        } else {
                            this.userAdmin = false;
                        }
                    });
            }
            return user;
        }));
  }

  isAdmin(): any {
      if (this.userAdmin) {
          return true;
      } else {
          return 'isUser';
      }
  }

  public register(body: any): Observable<any> {
      return this.http
          .post(`${Config.urlAddress}/api/Auth/Register`, {
              'login': body.login,
              'email': body.email,
              'password': body.password,
              'repeatPassword': body.repeatPassword
          })
          .pipe(tap(() => { }));
  }

logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}

}
