import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';

import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading: boolean;
  error: string;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private _authService: AuthService) { }

  ngOnInit() {
    this.init();
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this._authService.login(this.f.email.value, this.f.password.value)
        .pipe(first())
        .subscribe(res => {
              if (res) {
                this.loading = false;
                this.router.navigate(['/admin/dashboard']);
              }
            },
            error => {
              this.error = error;
              this.loading = false;
            });

  }

  private init() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
