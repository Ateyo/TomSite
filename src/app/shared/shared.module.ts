import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { SideNavService } from './services/sidenav/side-nav.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

const matModules = [
  CommonModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatSidenav,
  MatSidenavModule,
  RouterLink
  // Add other Material modules here as needed
];

@NgModule({
  exports: [...matModules],
  imports: [...matModules],
  providers: [SideNavService]
})
export class SharedModule {}
