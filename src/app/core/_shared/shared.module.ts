import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import {ChallengeStatusPipe} from '../pipes/challenge-status.pipe';
import {ChallengeVerdictPipe} from '../pipes/challenge-verdict.pipe';
import {ChallengeLevelPipe} from '../pipes/challenge-level.pipe';


@NgModule({
  declarations: [
      LoaderComponent,
      ChallengeStatusPipe,
      ChallengeVerdictPipe,
      ChallengeLevelPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
      LoaderComponent,
      ChallengeStatusPipe,
      ChallengeVerdictPipe,
      ChallengeLevelPipe
  ]
})
export class SharedModule { }
