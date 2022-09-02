import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from './calendar/calendar.module';
import { ButtonModule } from './button/button.module';
import { DragAndDropModule } from './drag-and-drop/drag-and-drop.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [CalendarModule, ButtonModule, DragAndDropModule],
})
export class ComponentsModule {}
