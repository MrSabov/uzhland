import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../../../core/services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  date: Date = new Date;
  name: string = 'Admin';

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this._authService.logout();
  }

}
