import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Appointment } from '../../interfaces/duration.interface';
import { hoursValidator } from '../../validators/hours.validator';

@Component({
  selector: 'app-book-time',
  templateUrl: './book-time.component.html',
  styleUrls: ['./book-time.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookTimeComponent implements OnInit {
  isUpdate: boolean = false;
  form = this.formBuilder.group({
    start: new FormControl('', [Validators.required, hoursValidator()]),
    end: new FormControl('', [Validators.required, hoursValidator()]),
    title: new FormControl('', Validators.required),
  });

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialogRef<BookTimeComponent>,
    @Inject(MAT_DIALOG_DATA) public appointment: Appointment
  ) {}

  ngOnInit(): void {
    const appointment = this.appointment;
    if (appointment) {
      this.isUpdate = true;
      this.start.setValue(this.getTimeToSet(appointment.start));
      this.end.setValue(this.getTimeToSet(appointment.end));
      this.title.setValue(appointment.title);
    }
  }

  getTimeToSet(date: Date) {
    return date.getHours() + ':' + date.getMinutes();
  }

  closeDialog() {
    this.dialog.close(
      this.form.valid
        ? {
            update: this.isUpdate,
            appointment: this.form.value,
            toDeleteId: this.appointment?.id,
          }
        : null
    );
  }

  get start(): FormControl {
    return this.form.get('start') as FormControl;
  }

  get end(): FormControl {
    return this.form.get('end') as FormControl;
  }

  get title(): FormControl {
    return this.form.get('title') as FormControl;
  }
}
