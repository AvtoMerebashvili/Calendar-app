import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatIconModule],
  exports: [InputComponent],
})
export class InputModule {}
