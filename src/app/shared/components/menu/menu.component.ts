import { Component, inject, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from '../../interfaces';
import { SideNavService } from '../../services/sidenav/side-nav.service';
import { SharedModule } from '../../shared.module';

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
    { label: 'A propos', link: '/' },
    { label: 'CV', link: '/cv' },
    { label: 'Portfolio', link: '/portfolio' }
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
