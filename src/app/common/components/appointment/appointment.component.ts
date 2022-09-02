import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Duration } from '../../interfaces/duration.interface';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentComponent implements OnInit {
  @Input() start: string | number = 0;
  @Input() end: string | number = 0;

  constructor() {}

  ngOnInit(): void {}
}

// ngOnChanges(): void {
//   this.calculateWidth();
// }

// calculateWidth() {
//   const duration = this.getEndTime() - this.getStartTime();
//   const width = this.getPixels(duration);
//   this.height$.next(width);
// }

// getPixels(width: number) {
//   return width.toString() + 'px';
// }

// getStartTime() {
//   console.log(this.duration);
//   const hours = this.duration?.start.getHours() as number;
//   this.start$.next(hours);
//   return hours;
// }
// getEndTime() {
//   const hours = this.duration?.end.getHours() as number;
//   this.end$.next(hours);
//   return hours;
// }
