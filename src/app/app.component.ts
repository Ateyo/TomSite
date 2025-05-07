import {
  Component,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  inject
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Router, NavigationEnd } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { SideNavService } from './shared/services/sidenav/side-nav.service';
import { SharedModule } from './shared/shared.module';
import { MenuItem } from './shared/interfaces';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    MatSidenavModule,
    MenuComponent,
    SharedModule
  ],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  private _sideNavService = inject(SideNavService);

  private _cdr = inject(ChangeDetectorRef);
  private _router = inject(Router);
  isBGNeeded = true;
  menuItems: MenuItem[] = [];
  title = 'TomSite';
  events: string[] = [];
  opened: boolean;

  constructor() {
    this.opened = false;
  }

  ngAfterViewInit() {
    this.menuItems = this._sideNavService.menuItems;
    this._cdr.detectChanges();
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (event.url) {
          case '/':
          case '/apropos':
          case '/cv':
          case '/mentions-legales':
            this.isBGNeeded = true;
            break;
          default:
            this.isBGNeeded = false;
        }
      }
    });
  }
}
