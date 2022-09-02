import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-book-time',
  templateUrl: './book-time.component.html',
  styleUrls: ['./book-time.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookTimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
