import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
title: any = "counter redux";
counter: number = 0;

increment(): void {
  this.counter++;
}


decrement(): void {
  this.counter--;
}


reset(): void {
  this.counter = 0;
}

}
