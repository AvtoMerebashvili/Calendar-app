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
