import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentComponent } from './appointment.component';
import { HoursAndMinutesPipe } from '../../pipes/hours-and-minutes.pipe';

@NgModule({
  declarations: [AppointmentComponent, HoursAndMinutesPipe],
  imports: [CommonModule],
  exports: [AppointmentComponent],
})
export class AppointmentModule {}
