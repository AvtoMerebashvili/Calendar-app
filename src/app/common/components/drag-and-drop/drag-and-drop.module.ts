import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropComponent } from './drag-and-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [DragAndDropComponent],
  imports: [CommonModule, DragDropModule],
  exports: [DragAndDropComponent],
})
export class DragAndDropModule {}
