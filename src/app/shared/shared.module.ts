import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { SideNavService } from './services/sidenav/side-nav.service';
import { NgModule } from '@angular/core';

const matModules = [
  MatSidenav,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule
];

@NgModule({
  exports: [...matModules, MatSidenav],
  imports: [...matModules],
  providers: [SideNavService]
})
export class SharedModule {}
