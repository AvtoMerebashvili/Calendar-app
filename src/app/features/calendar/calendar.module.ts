import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { BookViewComponent } from './components/book-view/book-view.component';
import { ComponentsModule } from 'src/app/common/components/components.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AppointmentsManagementService } from './services/appointments-management.service';

@NgModule({
  declarations: [BookViewComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    ComponentsModule,
    MatDialogModule,
  ],
  providers: [AppointmentsManagementService],
})
export class CalendarModule {}
