import {Component, Inject, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/core/services/users.service';
import { take } from 'rxjs/operators';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public rolesNames: any = [
    {name: 'Administrator'},
    {name: 'Student'},
    {name: 'Teacher'}
  ];
  public isEdit: boolean;
  public userId: any;
  createUserForm: FormGroup;

  constructor(private _usersService: UsersService,
              private matDialogRef: MatDialogRef<CreateUserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
      this.isEdit = data.isEdit;
      this.userId = data.userId;
  }

  ngOnInit() {
    this.init();
    if (this.isEdit) {
        this.fillUserForm();
    }
  }

  public createUser() {
    this._usersService.createUser(this.createUserForm.value)
      .pipe(take(1)).subscribe(data => {
        console.log(data);
      });
  }

  fillUserForm(): void {
      this._usersService.getUser(this.userId)
          .subscribe(user => {
              this.createUserForm.patchValue({
                  id: user['id'],
                  firstName: user['firstName'],
                  lastName: user['lastName'],
                  login: user['login'],
                  email: user['email'],
                  password: user['password'],
                  repeatPassword: user['repeatPassword']
              });
              console.log(this.createUserForm.value);
          });
  }

  public editUser() {
      if (this.createUserForm.invalid) {
          return;
      }
      console.log(this.createUserForm.value);
      this._usersService.updateUser(this.createUserForm.value)
          .pipe(take(1)).subscribe(res => {
          if (res) {
              console.log(res);
          }
      }, erro => {
          console.log(erro);
      });
  }

  public close() {
      this.close();
  }

  private init() {
    this.createUserForm = new FormGroup({
        'id': new FormControl(null),
        'firstName': new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(32)]),
        'lastName': new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(32)]),
        'login': new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(32)]),
        'email': new FormControl('', [Validators.required, Validators.email]),
        'password': new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(26)]),
        'repeatPassword': new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(26)])
    });
}

}
