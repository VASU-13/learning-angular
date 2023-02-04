import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counter-app';

  counterValue = 0;

  receiveCounter($event: number) {
    this.counterValue= $event;
  }

}
