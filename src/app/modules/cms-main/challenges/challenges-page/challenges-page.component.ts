import { Component, OnInit } from '@angular/core';
import {ChallengesService} from '../../../../core/services/challenges.service';

@Component({
  selector: 'app-challenges-page',
  templateUrl: './challenges-page.component.html',
  styleUrls: ['./challenges-page.component.css']
})
export class ChallengesPageComponent implements OnInit {

  public challenges: any;
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
        }, errr => {
            if (errr) {
                this.isLoader = false;
            }
        });
  }

  onChallengeDelete(challengeId: any): void {
      this.isLoader = true;
      this._challengesService.deleteChallenge(challengeId)
          .subscribe(res => {
              if (res) {
                  this.getAllChallenges();
              }
          }, errr => {
              if (errr) {
                  this.isLoader = false;
              }
          });
  }

}
