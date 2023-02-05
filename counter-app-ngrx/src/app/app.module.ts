import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterComponent } from './counter/counter.component';
import { counterReducer } from './state/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterButtonsComponent,
    CounterComponent,
    CounterOutputComponent
  ],
  imports: [
    BrowserModule, StoreModule.forRoot({counter: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
