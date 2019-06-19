import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CmsMainModule } from './modules/cms-main/cms-main.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './modules/auth/auth.module';
import { MaterialModule } from './core/_shared/material/material.module';

import { ErrorInterceptor } from './core/_helpers/error.interceptor';
import { JwtInterceptor } from './core/_helpers/jwt.interceptor';
import { DialogComponent } from './core/_shared/dialog/dialog.component';
import {ClientSideModule} from './modules/client-side/client-side.module';
import {AuthGuard} from './core/guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CmsMainModule,
    AppRoutingModule,
    AuthModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClientSideModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
