import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {tap} from 'rxjs/operators';

import {Config} from '../static-config/config';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public getUsers() {
    return this.http.get<any[]>(Config.urlAddress + '/api/Users/All', this.generateHeaders());
  }

  public createUser(body: any) {
    return this.http.post<any[]>(Config.urlAddress + '/api/Users/Create', {
      'login': body.login,
      'email': body.email,
      'firstName': body.firstName,
      'lastName': body.lastName,
      'roleNames': ['Teacher'],
      'password': body.password,
      'repeatPassword': body.repeatPassword
    }, this.generateHeaders());
  }

  public updateUser(body: any) {
    return this.http.put<any>(Config.urlAddress + '/api/Users/Update', {
      'id': body.id,
      'login': body.login,
      'email': body.email,
      'firstName': body.firstName,
      'lastName': body.lastName,
      'roleNames': ['Teacher'],
      'password': body.password,
      'repeatPassword': body.repeatPassword
    }, this.generateHeaders());
  }

  public getUser(id: string) {
    return this.http.get(Config.urlAddress + `/api/Users/${id}`, this.generateHeaders())
        .pipe(tap(() => {}));
  }

  public deleteUser(id: string) {
    return this.http.delete(Config.urlAddress + `/api/Users/${id}`, this.generateHeaders());
  }

  private generateHeaders() {
    return {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

}
