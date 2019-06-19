import { Component, OnInit } from '@angular/core';
import {take} from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';

import {ChallengesService} from '../../../../core/services/challenges.service';

@Component({
  selector: 'app-challenge-page',
  templateUrl: './challenge-page.component.html',
  styleUrls: ['./challenge-page.component.css']
})
export class ChallengePageComponent implements OnInit {

  private isEdit: boolean;
  challengeForm: FormGroup;

  constructor(private  _challengesService: ChallengesService) { }

  ngOnInit() {
    this.init();
  }

  onCreateChallenge(): void {
    this._challengesService.createChallenge(this.challengeForm.value)
        .pipe(take(1)).subscribe(res => {
      if (res) {
        console.log(res);
      }
    }, errr => {
      console.log(errr);
    });
  }

  private init(): void {
    this.challengeForm = new FormGroup({
      'id': new FormControl(null),
      'title': new FormControl(''),
      'description': new FormControl(null),
      'difficulty': new FormControl(null),
      'timeLimit': new FormControl(null),
      'memoryLimit': new FormControl(null)
    });
  }

}
