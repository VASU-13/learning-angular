import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  counter: number = 0;
  constructor() {}

  ngOnInit(): void {}

  OnIncrement() {
    this.counter++;
  }

  OnDecrement() {
    this.counter--;
  }

  OnReset() {
    this.counter = 0;
  }
}
