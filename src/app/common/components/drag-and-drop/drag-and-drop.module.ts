import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropComponent } from './drag-and-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppointmentModule } from '../appointment/appointment.module';

@NgModule({
  declarations: [DragAndDropComponent],
  imports: [CommonModule, DragDropModule, AppointmentModule],
  exports: [DragAndDropComponent],
})
export class DragAndDropModule {}
