import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { ClientSideComponent } from './client-side.component';
import { MySolutionComponent } from './my-solution/my-solution.component';
import { SolvingProblemComponent } from './solving-problem/solving-problem.component';
import { ViewProblemComponent } from './view-problem/view-problem.component';

const routes: Routes = [
  {path: 'home', component: ClientSideComponent, children: [
      {path: 'problems', component: MainPageComponent},
      {path: 'solutions/:id', component: MySolutionComponent},
      {path: 'solving-problem/:id', component: SolvingProblemComponent},
      {path: 'problem/:id', component: ViewProblemComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSideRoutingModule { }
