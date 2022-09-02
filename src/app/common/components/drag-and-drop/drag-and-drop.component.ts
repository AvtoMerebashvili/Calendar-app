import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Duration } from '../../interfaces/duration.interface';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragAndDropComponent implements OnInit {
  @Input() times: Duration[] | null = [
    {
      start: new Date(2001, 12, 1, 11, 21),
      end: new Date(2001, 12, 1, 12, 21),
    },
  ];
  rowWidth$ = new BehaviorSubject<number>(0);
  rowCount = 24;
  rows: number[] = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.rowCount; i++) {
      this.rows.push(i);
    }
  }

  calculatePosition(time: Duration) {
    return -(1440 - this.getEndTime(time) + 60);
  }

  calculateHeight(time: Duration) {
    return this.getEndTime(time) - this.getStartTime(time);
  }

  getStartTime(time: Duration) {
    const hours = time.start.getHours() * 60;
    const minutes = time.start.getMinutes() * 0.6;
    return hours + minutes;
  }
  getEndTime(time: Duration) {
    const hours = time.end.getHours() * 60;
    const minutes = time.start.getMinutes() * 0.6;
    return hours + minutes;
  }
}
