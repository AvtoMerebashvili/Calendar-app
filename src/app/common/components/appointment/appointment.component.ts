import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
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
  @Input() time: Duration = {
    start: new Date(),
    end: new Date(),
  };

  constructor() {}

  ngOnInit(): void {}
}
