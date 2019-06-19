import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ClientSideRoutingModule } from './client-side-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { ViewProblemComponent } from './view-problem/view-problem.component';
import { SolvingProblemComponent } from './solving-problem/solving-problem.component';
import { MySolutionComponent } from './my-solution/my-solution.component';
import { MaterialModule } from '../../core/_shared/material/material.module';
import { HeaderComponent } from './_layout/header/header.component';
import { FooterComponent } from './_layout/footer/footer.component';
import {ClientSideComponent} from './client-side.component';
import {SharedModule} from '../../core/_shared/shared.module';

@NgModule({
  imports: [
      CommonModule,
      ClientSideRoutingModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
      SharedModule
  ],
  declarations: [
      MainPageComponent,
      ViewProblemComponent,
      SolvingProblemComponent,
      MySolutionComponent,
      HeaderComponent,
      FooterComponent,
      ClientSideComponent
  ]
})
export class ClientSideModule { }
