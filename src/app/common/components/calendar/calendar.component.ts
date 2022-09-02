import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnInit {
  selected: Date | any;
  @Output() selectedDate = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.selectedDate.emit(new Date());
  }

  onChange(newDate: any) {
    this.selectedDate.emit(this.selected);
  }
}
