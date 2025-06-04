import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import { SideNavService } from './services/sidenav/side-nav.service';

const matModules = [
  CommonModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatSidenav,
  MatSidenavModule,
  RouterLink,
  MatInputModule
  // Add other Material modules here as needed
];

@NgModule({
  exports: [...matModules],
  imports: [...matModules],
  providers: [SideNavService]
})
export class SharedModule {}
