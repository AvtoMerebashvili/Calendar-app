import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DragAndDropItems } from '../../interfaces/drag-and-drop-items.interface';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragAndDropComponent implements OnInit {
  @Input() times: DragAndDropItems[] = [
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

  calculateHeight(time: DragAndDropItems) {
    console.log(this.getEndTime(time) - this.getStartTime(time));
    return this.getEndTime(time) - this.getStartTime(time);
  }

  getStartTime(time: DragAndDropItems) {
    const hours = time.start.getHours() * 60;
    const minutes = time.start.getMinutes() * 0.6;
    return hours + minutes;
  }
  getEndTime(time: DragAndDropItems) {
    const hours = time.end.getHours() * 60;
    const minutes = time.start.getMinutes() * 0.6;
    return hours + minutes;
  }
}
