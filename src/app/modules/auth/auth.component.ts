import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../core/services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-cms-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

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
