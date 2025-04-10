import {
  Component,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { SideNavService } from './shared/services/sidenav/side-nav.service';
import { SharedModule } from './shared/shared.module';
import { MenuItem } from './shared/interfaces';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    MatSidenavModule,
    MenuComponent,
    SharedModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  menuItems: MenuItem[] = [];
  title = 'TomSite';
  events: string[] = [];
  opened: boolean;

  constructor(
    private _sideNavService: SideNavService,
    private _cdr: ChangeDetectorRef // Inject ChangeDetectorRef
  ) {
    this.opened = false;
  }

  ngAfterViewInit() {
    this.menuItems = this._sideNavService.menuItems;
    this._cdr.detectChanges();
  }
}
