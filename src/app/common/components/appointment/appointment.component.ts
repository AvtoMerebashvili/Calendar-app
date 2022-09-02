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
  @Input() time: Appointment = {
    start: new Date(),
    end: new Date(),
    id: getRandomId(),
  };

  constructor() {}

  ngOnInit(): void {}
}
