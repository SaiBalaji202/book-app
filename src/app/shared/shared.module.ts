import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { BackdropComponent } from './backdrop/backdrop.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [
    SpinnerComponent,
    ConfirmDialogComponent,
    BackdropComponent,
    CapitalizePipe,
  ],
  imports: [CommonModule],
  exports: [SpinnerComponent, CapitalizePipe],
})
export class SharedModule {}
