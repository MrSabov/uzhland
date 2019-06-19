import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CmsMainComponent } from './cms-main.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ChallengesPageComponent } from './challenges/challenges-page/challenges-page.component';
import { LibraryPageComponent } from './library-page/library-page.component';
import { ArchivePageComponent } from './archive-page/archive-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { ArticlePageComponent } from './articles/article-page/article-page.component';
import { ChallengePageComponent } from './challenges/challenge-page/challenge-page.component';
import { AuthGuard } from '../../core/guards/auth.guard';


const routes: Routes = [
    {path: 'admin', component: CmsMainComponent, canActivate: [AuthGuard], children: [
        {path: 'dashboard', component: DashboardPageComponent},
        {path: 'challenges', component: ChallengesPageComponent},
        {path: 'library', component: LibraryPageComponent},
        {path: 'archive', component: ArchivePageComponent},
        {path: 'users', component: UsersPageComponent},
        {path: 'articles', component: ArticlesListComponent},
        {path: 'article', component: ArticlePageComponent},
        {path: 'challenge', component: ChallengePageComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CmsRoutingModule {}
