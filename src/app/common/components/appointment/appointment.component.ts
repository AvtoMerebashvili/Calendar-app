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
export class AppointmentComponent implements OnInit, OnChanges {
  @Input() duration: Duration | null = null;
  @Input() parentWidth: number | null = 0;

  height$ = new BehaviorSubject<string>(this.getPixels(0));
  start$ = new BehaviorSubject<number>(0);
  end$ = new BehaviorSubject<number>(0);

  constructor() {}

  ngOnInit(): void {
    this.calculateWidth();
  }

  ngOnChanges(): void {
    this.calculateWidth();
  }

  calculateWidth() {
    const duration = this.getEndTime() - this.getStartTime();
    const width = this.getPixels(duration);
    this.height$.next(width);
  }

  getPixels(width: number) {
    return width.toString() + 'px';
  }

  getStartTime() {
    const hours = this.duration?.start.getHours() as number;
    this.start$.next(hours);
    return hours;
  }
  getEndTime() {
    const hours = this.duration?.end.getHours() as number;
    this.end$.next(hours);
    return hours;
  }
}
