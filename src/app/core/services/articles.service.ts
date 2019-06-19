import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap} from 'rxjs/operators';

import { Config } from '../static-config/config';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) {
  }

  public getAllArticles(): Observable<any[]> {
    return this.http.get<any>(`${Config.urlAddress}/api/Articles/All`, this.generateHeaders())
      .pipe(
        tap(() => {})
      );
  }

  public getArticle(id: string) {
    return this.http.get<any>(Config.urlAddress + `/api/Articles/${id}`, this.generateHeaders())
      .pipe(
        tap(() => {})
      );
  }

  public createArticle(article: any) {
    return this.http.post<any>(Config.urlAddress + '/api/Articles/Create', {
      'title': article.title,
      'content': article.content
    }, this.generateHeaders())
      .pipe(tap(() => { }));
  }

  public updateArticle(article: any) {
    return this.http.put<any>(Config.urlAddress + `/api/Articles/Update`, {
      'id': article.id,
      'title': article.title,
      'content': article.content
    }, this.generateHeaders())
      .pipe(
        tap(() => { })
      );
  }

  public deleteArticle(id: string) {
    return this.http.delete(Config.urlAddress + `/api/Articles/${id}`, this.generateHeaders());
  }

  private generateHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'text/plain'
      })
    };
  }
}
