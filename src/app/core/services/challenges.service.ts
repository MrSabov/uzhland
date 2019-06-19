import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Config} from '../static-config/config';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChallengesService {

  constructor(private http: HttpClient) { }

  public getAllChallenges() {
    return this.http.get<any[]>(Config.urlAddress + '/api/Challenges/All', this.generateHeaders());
  }

  public getChallengeByDifficulty(difficulty: string) {
    return this.http.get<any[]>(Config.urlAddress + `/api/Challenges/ByDifficulty/${difficulty}`, this.generateHeaders());
  }

  public getChallengeById(id: string) {
    return this.http.get(Config.urlAddress + `/api/Challenge/${id}`, this.generateHeaders());
  }

  public solvingProblem(challengeId: number, body: any) {
    return this.http.post(Config.urlAddress + `/api/${challengeId}/SendSubmit`, {
      'sourceCode': body.sourceCode,
      'language': body.language
    }, this.generateHeaders());
  }

  public getSolutionsProblem(challengeId: number) {
    return this.http.get(Config.urlAddress + `/api/${challengeId}/Submits`, this.generateHeaders());
  }

  public createChallenge(challenge: any) {
    return this.http.post<any>(Config.urlAddress + '/api/Challenge/Create', {
      'title': challenge.title,
      'description': challenge.description,
      'difficulty': challenge.difficulty,
      'timeLimit': challenge.timeLimit,
      'memoryLimit': challenge.memoryLimit
    }, this.generateHeaders())
        .pipe(tap(() => { }));
  }

  public updateChallenge(challenge: any) {
    return this.http.put<any>(Config.urlAddress + `/api/Challenge/Update`, {
      'id': challenge.id,
      'title': challenge.title,
      'description': challenge.description,
      'difficulty': challenge.difficulty,
      'timeLimit': challenge.timeLimit,
      'memoryLimit': challenge.memoryLimit
    }, this.generateHeaders())
        .pipe(tap(() => { }));
  }

  public deleteChallenge(id: string) {
    return this.http.delete(Config.urlAddress + `/api/Challenge/${id}`, this.generateHeaders());
  }

  private generateHeaders() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }
}
