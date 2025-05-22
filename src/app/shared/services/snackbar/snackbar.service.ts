import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../../components/snackbar/snackbar.component';

export interface SnackbarData {
  message: string;
  // Add more properties if needed
}

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private _snackBar = inject(MatSnackBar);

  openComponent(data?: any, duration?: number, type?: string): void {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data,
      duration,
      panelClass: type // Optional: add your own class for styling
    });
  }
}
