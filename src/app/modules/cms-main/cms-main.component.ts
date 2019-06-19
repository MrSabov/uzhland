import { Component } from '@angular/core';
import { NavigationEnd, Router} from '@angular/router';

import {AuthService} from '../../core/services/auth.service';
import {split} from 'ts-node';

@Component({
  selector: 'app-cms-main',
  templateUrl: './cms-main.component.html',
  styleUrls: ['./cms-main.component.css']
})
export class CmsMainComponent {

  public simpleBanckmark: any;
  public isOpenSidebar: boolean;

  constructor(private _authService: AuthService,
              private router: Router) {
    this.routeEvent(this.router);
  }

  public logout(): void {
    this._authService.logout();
    this.router.navigate(['/home', 'login']).then();
  }

  public toggle(): void {
    this.isOpenSidebar = !this.isOpenSidebar;
  }

  private routeEvent(router: Router) {
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.simpleBanckmark = this.router.url.split('/', 3);
      }
    });
  }

}
