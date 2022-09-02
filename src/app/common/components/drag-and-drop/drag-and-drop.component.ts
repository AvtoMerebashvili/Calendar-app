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
export class DragAndDropComponent implements OnInit, AfterViewInit {
  @ViewChild('row') rowRef: ElementRef | null = null;
  @Input() times: DragAndDropItems[] = [
    {
      start: new Date(2001, 12, 1, 11, 21),
      end: new Date(2001, 12, 1, 15, 21),
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

  ngAfterViewInit() {
    this.rowWidth$.next(this.rowRef?.nativeElement.offsetWidth);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.times, event.previousIndex, event.currentIndex);
  }
}
