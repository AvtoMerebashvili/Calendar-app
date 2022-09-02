import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookTimeComponent } from 'src/app/common/components/book-time/book-time.component';
import { filter, map, tap } from 'rxjs/operators';

import { AppointmentsManagementService } from '../../services/appointments-management.service';
import { BehaviorSubject } from 'rxjs';
import { Appointment } from 'src/app/common/interfaces/duration.interface';
import { getRandomId } from 'src/app/common/helper/random.generator';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookViewComponent implements OnInit {
  allAppointments$ = new BehaviorSubject<Appointment[]>([]);
  dateState: Date = new Date();

  constructor(
    private dialog: MatDialog,
    private management: AppointmentsManagementService
  ) {}

  ngOnInit(): void {}

  onSelectDate(date: Date) {
    this.dateState = date;
    this.updateView();
  }

  onSelectAppointment(appointment: Appointment | Event) {
    // console.log(appointment);
    this.openBooking(appointment as Appointment);
  }

  openBooking(appointment?: Appointment) {
    this.dialog
      .open(BookTimeComponent, {
        panelClass: 'book-time-cdk',
        data: appointment,
      })
      .afterClosed()
      .pipe(
        filter((data) => data != null),
        map(({ update, appointment, toDeleteId }) => {
          return {
            update,
            toDeleteId,
            appointment: {
              startHour: appointment.start.split(':')[0],
              startMin: appointment.start.split(':')[1] || null,
              endHour: appointment.end.split(':')[0],
              endMin: appointment.end.split(':')[1] || null,
              title: appointment.title,
            },
          };
        }),
        map(({ update, appointment, toDeleteId }) => {
          const newAppointment: Appointment = {
            start: new Date(
              this.dateState.setHours(
                appointment.startHour,
                appointment.startMin
              )
            ),
            end: new Date(
              this.dateState.setHours(appointment.endHour, appointment.endMin)
            ),
            id: getRandomId(),
            title: appointment.title,
          };
          return { update, newAppointment: newAppointment, toDeleteId };
        }),
        map(({ update, newAppointment, toDeleteId }) => {
          const exicstingAppointments = [
            ...this.management.getAppointments(this.dateState),
          ];
          let updatedAppointments = [];

          if (update) {
            updatedAppointments = exicstingAppointments.filter(
              (appointment) => appointment.id != toDeleteId.toString()
            );

            updatedAppointments.push(newAppointment);
          } else {
            updatedAppointments = exicstingAppointments;
            updatedAppointments.push(newAppointment);
          }

          return updatedAppointments;
        }),
        tap((newAppointmentsArray) =>
          this.management.setAppointments(this.dateState, newAppointmentsArray)
        ),
        tap(() => this.updateView())
      )
      .subscribe();
  }

  onAppointmentChange(appointment: Appointment) {
    const exicstingAppointments = [
      ...this.management.getAppointments(this.dateState),
    ];
    let updatedAppointments = [];

    updatedAppointments = exicstingAppointments.filter(
      (app) => app.id != appointment.id
    );
    updatedAppointments.push(appointment);
    this.management.setAppointments(this.dateState, updatedAppointments);
    this.updateView();
  }

  updateView() {
    this.allAppointments$.next(this.management.getAppointments(this.dateState));
  }
}
