import { Component, Inject, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SELECTED } from '../select/select.component';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss'],
})
export class OptionComponent<T> {

  constructor(@Inject(SELECTED) public selectedSubject: BehaviorSubject<T>) {}

  @Input() value?: T;

  isSelected() {
    return this.selectedSubject.getValue() === this.value;
  }

  select() {
    this.selectedSubject.next(this.value as T);
  }
}
