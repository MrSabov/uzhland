import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuillModule } from 'ngx-quill';

import { CmsMainComponent } from './cms-main.component';
import { CmsRoutingModule } from './cms-routing.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { ChallengesPageComponent } from './challenges/challenges-page/challenges-page.component';
import { ArchivePageComponent } from './archive-page/archive-page.component';
import { LibraryPageComponent } from './library-page/library-page.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { DialogComponent } from '../../core/_shared/dialog/dialog.component';
import { CreateUserComponent } from './shared/components/modals/create-user/create-user.component';
import { MaterialModule } from '../../core/_shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { ArticlePageComponent } from './articles/article-page/article-page.component';
import { ChallengePageComponent } from './challenges/challenge-page/challenge-page.component';
import {SharedModule} from '../../core/_shared/shared.module';


@NgModule({
    declarations: [
        CmsMainComponent,
        DashboardPageComponent,
        UsersPageComponent,
        ChallengesPageComponent,
        ArchivePageComponent,
        LibraryPageComponent,
        SidebarComponent,
        HeaderComponent,
        DropdownDirective,
        CreateUserComponent,
        ArticlesListComponent,
        ArticlePageComponent,
        ChallengePageComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        CmsRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        QuillModule,
        SharedModule
    ],
    entryComponents: [
        DialogComponent,
        CreateUserComponent
    ]
})
export class CmsMainModule { }
