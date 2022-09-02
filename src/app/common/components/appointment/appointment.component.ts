import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { getRandomId } from '../../helper/random.generator';
import { Appointment } from '../../interfaces/duration.interface';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentComponent implements OnInit {
  @Input() appointment: Appointment = {
    start: new Date(),
    end: new Date(),
    id: getRandomId(),
    title: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
