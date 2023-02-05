import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterModel } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit {
  counter$: Observable<{ counter: number; }> | undefined;
  constructor(private store: Store<{ counter: CounterModel }>) {}

  ngOnInit(): void {
   this.counter$ = this.store.select('counter');
  }
}
