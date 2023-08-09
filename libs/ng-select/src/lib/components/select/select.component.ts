import { Component, EventEmitter, Inject, InjectionToken, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const SELECTED = new InjectionToken('selected');

export function selectedFactory<T>(){
  return new BehaviorSubject<T>(null as T);
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [{
    provide: SELECTED, useFactory: selectedFactory
  }]
})
export class SelectComponent<T> {
  current?: T;
  constructor(@Inject(SELECTED) private selected$: BehaviorSubject<T>) {
    selected$.subscribe(value => {
      if (value !== this.current) {
        this.current = value;
        this.selectedChange.emit(value);
      } else {
        this.current = null as T;
        this.selectedChange.emit(null);
      }
    })
  }

  @Input()
  set selected(value: T) {
    this.current = value;
    this.selected$.next(value);
  }

  @Output() selectedChange = new EventEmitter();
}
