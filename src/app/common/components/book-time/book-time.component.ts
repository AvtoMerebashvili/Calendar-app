import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { hoursValidator } from '../../validators/hours.validator';

@Component({
  selector: 'app-book-time',
  templateUrl: './book-time.component.html',
  styleUrls: ['./book-time.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookTimeComponent implements OnInit {
  form = this.formBuilder.group({
    start: new FormControl('', [Validators.required, hoursValidator()]),
    end: new FormControl('', [Validators.required, hoursValidator()]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialogRef<BookTimeComponent>
  ) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close(this.form.valid ? this.form.value : null);
  }
}
