import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  inject,
  ViewChild
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { MenuComponent } from './shared/components/menu/menu.component';
import { MenuItem } from './shared/interfaces';
import { SideNavService } from './shared/services/sidenav/side-nav.service';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    MatSidenavModule,
    MenuComponent,
    SharedModule
  ],
  providers: [HttpClient, SharedModule],
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
          case '/portfolio/form':
            this.isBGNeeded = true;
            break;
          default:
            this.isBGNeeded = false;
        }
      }
    });
  }
}
