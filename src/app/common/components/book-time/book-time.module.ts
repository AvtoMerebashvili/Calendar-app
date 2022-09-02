import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookTimeComponent } from './book-time.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InputModule } from '../input/input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [BookTimeComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    InputModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
  exports: [BookTimeComponent],
})
export class BookTimeModule {}
