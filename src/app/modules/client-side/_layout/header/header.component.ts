import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private _authService: AuthService,
              private router: Router) { }

  public logout(): void {
    this._authService.logout();
    this.router.navigate(['/home', 'login']).then();
  }

}
