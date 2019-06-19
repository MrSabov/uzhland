import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {UsersService} from '../../../core/services/users.service';
import {ArticlesService} from '../../../core/services/articles.service';
import {ChallengesService} from '../../../core/services/challenges.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  public articlesCount: string;
  public usersCount: string;
  public challengesCount: string;

  constructor(private _usersService: UsersService,
              private _articlesService: ArticlesService,
              private _challengeService: ChallengesService,
              private router: Router) { }

  ngOnInit() {
    this.getArticlesCount();
    this.getChallengesCount();
    this.getUsersCount();
  }

  getArticlesCount() {
    this._articlesService.getAllArticles()
        .subscribe(articles => {
          this.articlesCount = articles.length.toString();
        });
  }

  getUsersCount() {
    this._usersService.getUsers()
        .subscribe(users => {
          this.usersCount = users.length.toString();
        });
  }

  getChallengesCount() {
    this._challengeService.getAllChallenges()
        .subscribe(challenges => {
          this.challengesCount = challenges.length.toString();
        });
  }

}
