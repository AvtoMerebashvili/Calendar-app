import { Injectable } from '@angular/core';
import { Appointment } from 'src/app/common/interfaces/duration.interface';

@Injectable()
export class AppointmentsManagementService {
  appointments = new Map();
  constructor() {}

  getAppointments(currentDate: Date) {
    const key = this.mapKey(currentDate);
    return this.appointments.has(key) ? this.appointments.get(key) : [];
  }

  setAppointments(currentDate: Date, appointments: Appointment[]) {
    const key = this.mapKey(currentDate);
    this.appointments.set(key, appointments);
  }

  mapKey(date: Date) {
    return date.getFullYear() + date.getMonth() + date.getDate();
  }
}
