import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MenuItem } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  sidenav!: MatSidenav;
  menuItems: MenuItem[] = [];

  setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  toggleSidenav() {
    if (this.sidenav) {
      console.log('Current isOpen state:', this.sidenav.opened);
      this.sidenav.toggle();
      console.log('New isOpen state:', this.sidenav.opened);
    } else {
      console.error('Sidenav is not initialized');
    }
  }
}
