import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { first } from 'rxjs/operators';

import { UsersService } from 'src/app/core/services/users.service';
import { CreateUserComponent } from '../shared/components/modals/create-user/create-user.component';
import { DialogComponent } from 'src/app/core/_shared/dialog/dialog.component';


@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  users: any;
  name: string;
  public isLoader: boolean;

  constructor(
    private _usersService: UsersService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.isLoader = true;
    this._usersService.getUsers()
      .pipe(first()).subscribe(users => {
        if (users) {
          console.log(users);
          this.users = users;
          this.isLoader = false;
        }
      });
  }

  onEditUser(userId: string): void {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '350px',
      data: {
        title: 'Edit',
        userId: userId,
        isEdit: true
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ngOnInit();
      }
    });
  }

  onCreateUser(): void {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '350px',
      data: {
        title: 'Create',
        userId: '',
        isEdit: false
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ngOnInit();
      }
    });
  }

  openConfirmDialog(userId: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: {
        title: 'Are you sure, you want to delete?',
        description: 'This cannot be undone!'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.isLoader = true;
        this._usersService.deleteUser(userId).subscribe(() => {
          this.ngOnInit();
        }, errr => {
          this.isLoader = false;
        });
      }
    });
  }

}
