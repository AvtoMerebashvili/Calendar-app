import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from './calendar/calendar.module';
import { ButtonModule } from './button/button.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [CalendarModule, ButtonModule],
})
export class ComponentsModule {}
