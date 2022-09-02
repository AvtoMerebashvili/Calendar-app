import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit {
  @Input() controlName = '';
  @Input() label = '';
  @Input() type: 'text' | 'number' = 'text';

  constructor(private cc: ControlContainer) {}

  ngOnInit(): void {}

  get control(): FormControl {
    return this.cc.control?.get(this.controlName) as FormControl;
  }
}
