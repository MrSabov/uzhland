import { Component, OnInit } from '@angular/core';
import {ChallengesService} from '../../../core/services/challenges.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-view-problem',
  templateUrl: './view-problem.component.html',
  styleUrls: ['./view-problem.component.css']
})
export class ViewProblemComponent implements OnInit {

  challengeId: any;
  challenge: any;
  private isLoader: boolean;

  constructor(private _challengesService: ChallengesService,
              private route: ActivatedRoute) {
    this.challengeId = this.route.snapshot.url[1].path;
  }

  ngOnInit() {
    this.getChallenge(this.challengeId);
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
