import { Component, OnInit } from '@angular/core';
import {ChallengesService} from '../../../core/services/challenges.service';
import {take} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-solving-problem',
  templateUrl: './solving-problem.component.html',
  styleUrls: ['./solving-problem.component.css']
})
export class SolvingProblemComponent implements OnInit {

  solvingProblemForm: FormGroup;
  private readonly challengeId: any;
  private isLoader: boolean;
  private challenge: any;

  constructor(private _challengesService: ChallengesService,
              private route: ActivatedRoute,
              private router: Router) {
    this.challengeId = this.route.snapshot.url[1].path;
  }

  ngOnInit() {
    this.init();
    this.getChallenge(this.challengeId);
  }

  sentSolvingProblem(): void {
    this.isLoader = true;
    this._challengesService.solvingProblem(this.challengeId, this.solvingProblemForm.value)
        .pipe(take(1)).subscribe(() => {
          this.router.navigate(['/home', 'solutions', this.challengeId]);
          this.isLoader = false;
    }, errr => {
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

  private init(): void {
    this.solvingProblemForm = new FormGroup({
      'sourceCode': new FormControl(''),
      'language': new FormControl(null)
    });
  }

}
