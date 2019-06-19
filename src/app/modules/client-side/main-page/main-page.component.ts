import { Component, OnInit } from '@angular/core';

import { ChallengesService } from '../../../core/services/challenges.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public challenges: any[];
  public selectedLevel = 'all';
  private isLoader: boolean;

  constructor(private _challengesService: ChallengesService) { }

  ngOnInit() {
    this.getAllChallenges();
  }

  getAllChallenges(): void {
    this.isLoader = true;
    this._challengesService.getAllChallenges()
        .subscribe(challenges => {
          if (challenges) {
            this.challenges = challenges;
            this.isLoader = false;
          }
        });
  }

  getChallengesByDiff(difficulty: string): void {
    if (difficulty === 'all') {
      this.getAllChallenges();
      return;
    }
    this.isLoader = true;
    this._challengesService.getChallengeByDifficulty(difficulty)
        .subscribe(challenges => {
          if (challenges) {
            this.challenges = challenges;
            this.isLoader = false;
            console.log(this.challenges);
          }
        });
  }

}
