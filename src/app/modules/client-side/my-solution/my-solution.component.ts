import { Component, OnInit } from '@angular/core';
import {ChallengesService} from '../../../core/services/challenges.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-my-solution',
  templateUrl: './my-solution.component.html',
  styleUrls: ['./my-solution.component.css']
})
export class MySolutionComponent implements OnInit {

  private readonly challengeId: any;
  private isLoader: boolean;
  public solutions: any;
  public challenge: any;

  constructor(private _challengesService: ChallengesService,
              private route: ActivatedRoute) {
    this.challengeId = this.route.snapshot.url[1].path;
  }

  ngOnInit() {
    if (this.challengeId) {
      this.getChallengeSolutions();
      this.getChallenge(this.challengeId);
    }
  }

  getChallengeSolutions(): void {
    this.isLoader = true;
    this._challengesService.getSolutionsProblem(this.challengeId)
        .subscribe(res => {
          if (res) {
            console.log(res);
            this.solutions = res;
            this.isLoader = false;
          }
        }, error => {
          console.log(error);
          this.isLoader = false;
        });
  }

  getChallenge(id: string): void {
    this.isLoader = true;
    this._challengesService.getChallengeById(id)
        .subscribe(challenge => {
          if (challenge) {
            this.challenge = challenge;
            console.log(this.challenge);
            this.isLoader = false;
          }
        });
  }

}
