import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookTimeComponent } from 'src/app/common/components/book-time/book-time.component';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookViewComponent implements OnInit {
  dateState: Date = new Date();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  onSelectDate(date: Date) {
    this.dateState = date;
  }

  openBooking() {
    this.dialog
      .open(BookTimeComponent, {
        panelClass: 'book-time-cdk',
      })
      .afterClosed()
      .subscribe((v) => console.log(v));
  }
}
