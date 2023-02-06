import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../state/counter.actions';
import { CounterModel } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent implements OnInit {
  value!: number;
  constructor(private store: Store<{ counter: CounterModel }>) {}

  onAdd() {
    this.store.dispatch(customIncrement({ count: +this.value }));
  }

  ngOnInit(): void {}
}
