import { Pipe, PipeTransform } from '@angular/core';
import { Duration } from '../interfaces/duration.interface';

@Pipe({
  name: 'hoursAndMinutes',
})
export class HoursAndMinutesPipe implements PipeTransform {
  transform(value: Duration): String {
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
