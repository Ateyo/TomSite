import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Input } from '@angular/core';
import { SideNavService } from '../services/sidenav/side-nav.service';
import { SharedModule } from '../shared.module';
import { MenuItem } from '../interfaces';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  imports: [RouterLink, RouterLinkActive, SharedModule],

  selector: 'app-menu',
  styleUrls: ['./menu.component.scss'],
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  @Input() sidenav!: MatSidenav;
  private _sideNavService = inject(SideNavService);

  menuItems: MenuItem[] = [
    { label: 'A propos', link: '/apropos' },
    { label: 'CV', link: '/cv' },
    { label: 'Portfolio', link: '/portfolio' }
    // { label: 'Contact', link: '/contact' }
  ];

  constructor() {
    this._sideNavService.menuItems = this.menuItems;
    this._sideNavService.setSidenav(this.sidenav);
  }

  toggleSidenav() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }
}
