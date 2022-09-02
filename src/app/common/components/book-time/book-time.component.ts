import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-book-time',
  templateUrl: './book-time.component.html',
  styleUrls: ['./book-time.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookTimeComponent implements OnInit {
  form = this.formBuilder.group({
    start: new FormControl('', [Validators.required]),
    end: new FormControl('', [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialogRef<BookTimeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close(this.form.valid ? this.form.value : null);
  }
}
