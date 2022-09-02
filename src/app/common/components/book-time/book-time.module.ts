import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookTimeComponent } from './book-time.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [BookTimeComponent],
  imports: [CommonModule, MatDialogModule],
  exports: [BookTimeComponent],
})
export class BookTimeModule {}
