import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {
  counterValue = signal(0);
  increment() {
    console.log('Increment button clicked');
    this.counterValue.update((val => val +1))
  }
  decrement() {
    console.log('Decrement button clicked');
    this.counterValue.update((val => val -1))
  }
  reset() {
    console.log('Reset button clicked');
    this.counterValue.set(0);
  }

}
