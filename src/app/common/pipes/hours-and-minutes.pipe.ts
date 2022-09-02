import { Pipe, PipeTransform } from '@angular/core';
import { Appointment } from '../interfaces/duration.interface';

@Pipe({
  name: 'hoursAndMinutes',
})
export class HoursAndMinutesPipe implements PipeTransform {
  transform(value: Appointment): String {
    return (
      value.start.getHours() +
      '.' +
      value.start.getMinutes() +
      ' - ' +
      value.end.getHours() +
      '.' +
      value.end.getMinutes()
    ).toString();
  }
}
