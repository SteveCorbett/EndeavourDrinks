import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoadingComponent } from '../dialogs/loading/loading.component';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private counter: number = 0;
  private opened: boolean = false;
  private loadingDlg: MatDialogRef<LoadingComponent> | null = null;

  constructor(private dialog: MatDialog) {}

  onPreRequest(): void {
    this.counter++;
    if (!this.opened) {
      this.opened = true;
      this.loadingDlg = this.dialog.open(LoadingComponent, {
        disableClose: true,
        width: '100px',
        height: '120px',
        hasBackdrop: true,
      });

      this.loadingDlg.afterClosed().subscribe(() => {
        this.opened = false;
        this.counter = 0;
      });
    }
  }

  onPostRequest(): void {
    this.counter--;
    if (this.counter === 0) {
      this.loadingDlg?.close();
      this.loadingDlg = null;
    }
  }
}
