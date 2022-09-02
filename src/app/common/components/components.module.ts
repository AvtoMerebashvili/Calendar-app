import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from './calendar/calendar.module';
import { ButtonModule } from './button/button.module';
import { DragAndDropModule } from './drag-and-drop/drag-and-drop.module';
import { AppointmentModule } from './appointment/appointment.module';
import { BookTimeModule } from './book-time/book-time.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    CalendarModule,
    ButtonModule,
    DragAndDropModule,
    AppointmentModule,
    BookTimeModule,
  ],
})
export class ComponentsModule {}
