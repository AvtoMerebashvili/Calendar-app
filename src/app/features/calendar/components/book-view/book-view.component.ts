import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookViewComponent implements OnInit {
  dateState: Date = new Date();

  constructor() {}

  ngOnInit(): void {}

  onSelectDate(date: Date) {
    this.dateState = date;
  }
}
