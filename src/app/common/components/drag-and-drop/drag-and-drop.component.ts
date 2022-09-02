import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Appointment } from '../../interfaces/duration.interface';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragAndDropComponent implements OnInit {
  @Input() appointments: Appointment[] | null = null;
  @Output() chosenAppointment = new EventEmitter<Appointment>();

  rowWidth$ = new BehaviorSubject<number>(0);
  rowCount = 24;
  rows: number[] = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.rowCount; i++) {
      this.rows.push(i);
    }
  }

  onAppointmentClick(appointment: Appointment) {
    this.chosenAppointment.emit(appointment);
  }

  calculatePosition(time: Appointment) {
    return this.getStartTime(time);
  }

  calculateHeight(time: Appointment) {
    return this.getEndTime(time) - this.getStartTime(time);
  }

  getStartTime(time: Appointment) {
    const hours = time.start.getHours() * 60;
    const minutes = time.start.getMinutes() * 0.6;
    return hours + minutes;
  }
  getEndTime(time: Appointment) {
    const hours = time.end.getHours() * 60;
    const minutes = time.start.getMinutes() * 0.6;
    return hours + minutes;
  }
}
