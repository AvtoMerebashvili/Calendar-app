import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookTimeComponent } from 'src/app/common/components/book-time/book-time.component';
import { map, tap } from 'rxjs/operators';
import { Duration } from 'src/app/common/interfaces/duration.interface';
import { AppointmentsManagementService } from '../../services/appointments-management.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookViewComponent implements OnInit {
  allAppointments$ = new BehaviorSubject<Duration[]>([]);
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

  openBooking() {
    this.dialog
      .open(BookTimeComponent, {
        panelClass: 'book-time-cdk',
        data: this.dateState,
      })
      .afterClosed()
      .pipe(
        map((v) => {
          return {
            startHour: v.start.split(',')[0],
            startMin: v.start.split(',')[1] || null,
            endHour: v.end.split(',')[0],
            endMin: v.end.split(',')[1] || null,
          };
        }),
        map((v) => {
          const newAppointment: Duration = {
            start: new Date(this.dateState.setHours(v.startHour, v.startMin)),
            end: new Date(this.dateState.setHours(v.endHour, v.endMin)),
          };
          return newAppointment;
        }),
        map((newAppointment) => {
          const exicstingAppointments = [
            ...this.management.getAppointments(this.dateState),
          ];
          exicstingAppointments.push(newAppointment);
          return exicstingAppointments;
        }),
        tap((newAppointmentsArray) =>
          this.management.setAppointments(this.dateState, newAppointmentsArray)
        ),
        tap(() => this.updateView())
      )
      .subscribe();
  }

  updateView() {
    this.allAppointments$.next(this.management.getAppointments(this.dateState));
  }
}
