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
  @Output() appointmentChanged = new EventEmitter<Appointment>();
  draging = false;
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
    if (!this.draging) this.chosenAppointment.emit(appointment);
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

  dragingStarted() {
    this.draging = true;
  }

  dragingEnded(dragged: any, appointment: Appointment) {
    setTimeout(() => (this.draging = false), 100);
    const calculatedTime = this.calculateTime(dragged.distance.y);
    const newAppointment = { ...appointment };
    const previousAppointmentStart = new Date(appointment.start.getTime());
    newAppointment.start = new Date(
      previousAppointmentStart.setHours(
        previousAppointmentStart.getHours() + calculatedTime.hours,
        previousAppointmentStart.getMinutes() + calculatedTime.minutes
      )
    );
    const previousAppointmentEnd = new Date(appointment.end.getTime());
    newAppointment.end = new Date(
      previousAppointmentEnd.setHours(
        previousAppointmentEnd.getHours() + calculatedTime.hours,
        previousAppointmentEnd.getMinutes() + calculatedTime.minutes
      )
    );

    this.appointmentChanged.emit(newAppointment);
  }

  calculateTime(pixels: number) {
    const hours = Math.trunc(+(pixels / 60));
    const minutes = +(pixels % 60);
    return {
      hours: hours,
      minutes: minutes,
    };
  }
}
