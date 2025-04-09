import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../store/items.action';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent {
title: any = "counter redux";
counter: number = 0;

constructor(private store: Store < {counter : number} >) { 
  //this.counter = 0;
  this.store.select('counter').subscribe( counter  => {
    this.counter = counter;
  });
}

increment(): void {
  this.store.dispatch( increment({add: 3}));
  //this.counter++;
}


decrement(): void {
  this.store.dispatch( decrement());
  //this.counter--;
}


reset(): void {
  this.store.dispatch(reset());
  //this.counter = 0;
}

}
