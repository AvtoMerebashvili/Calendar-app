import { Injectable } from '@angular/core';
import { Duration } from 'src/app/common/interfaces/duration.interface';

@Injectable()
export class AppointmentsManagementService {
  appointments = new Map();
  constructor() {}

  getAppointments(currentDate: Date) {
    return this.appointments.has(currentDate)
      ? this.appointments.get(currentDate)
      : [];
  }

  setAppointments(currentDate: Date, appointments: Duration[]) {
    this.appointments.set(currentDate, appointments);
  }
}
