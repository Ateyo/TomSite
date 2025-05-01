import {
  Component,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { SideNavService } from './shared/services/sidenav/side-nav.service';
import { SharedModule } from './shared/shared.module';
import { MenuItem } from './shared/interfaces';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

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

  isAproposRouteLoaded = false;
  menuItems: MenuItem[] = [];
  title = 'TomSite';
  events: string[] = [];
  opened: boolean;

  constructor(
    private _sideNavService: SideNavService,
    private _cdr: ChangeDetectorRef,
    private _router: Router
  ) {
    this.opened = false;
  }

  ngAfterViewInit() {
    this.menuItems = this._sideNavService.menuItems;
    this._cdr.detectChanges();
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/apropos') {
          this.isAproposRouteLoaded = true;
        } else {
          this.isAproposRouteLoaded = false;
        }
      }
    });
  }
}
