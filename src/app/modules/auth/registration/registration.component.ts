import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../core/services/auth.service';
import {first, take, tap} from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
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

  registration(): void {
    if (this.registrationForm.invalid) {
      return;
    }
    this.loading = true;
    this._authService.register(this.registrationForm.value)
        .pipe(take(1))
        .subscribe(res => {
              if (res) {
                this.loading = false;
                this.router.navigate(['/home/login']);
              }
            },
            error => {
              this.error = error;
              this.loading = false;
            });

  }

  private init() {
    this.registrationForm = this.formBuilder.group({
      login: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    });
  }

}
