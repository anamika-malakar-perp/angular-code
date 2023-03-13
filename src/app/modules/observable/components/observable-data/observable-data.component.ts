import { Component } from '@angular/core';
import { combineLatest, map, merge, of } from 'rxjs';
import { concatWith } from 'rxjs/operators';

@Component({
  selector: 'app-observable-data',
  templateUrl: './observable-data.component.html'
})
export class ObservableData {
  amount = of(70, 72, 76, 79, 75);
  conversionRate = of(0.06, 0.07, 0.08);
  list1 = of(2, 3, 4, 5, 6);
  list2 = of(4, 9, 16, 25, 36);
  final_value: any;
  fees: any;
  constructor() {

    this.fees = combineLatest([this.amount, this.conversionRate]).pipe(
      map(([a, r]) => a * r)
    );
  
    this.fees.subscribe((res) => console.log('data',res))

    this.final_value = this.list1.pipe(concatWith(this.list2))
    this.final_value.subscribe(x => console.log(x));

    this.final_value = this.list1.pipe(merge(this.list2))
  }
  // A stream is data, which arrives over a period of time.
  // value is not only that stream emits
  // an error also stream
  // at any point stream can emit 
  // 1.value: the next value in the stream
  // 2.complete: the stream has ended
  // 3.next: the error has stopped the stream
  // Two main players i)Observable and Observer(Subscribers)
  // The observers must subscribe to the observable to receive the values from the observable. while subscribing it will pass three optionally callbacks.next(), error(), complete()
  //the observable invokes the next() callback whenever the value arrives in the stream.

  // List of the commonly used operators
  // 1.Combination -> combineLatest
  // In RxJS CombineLatest combines multiple observables to create an observable, those values are calculated from the latest values of each of its input observables, once any of them emit irrespective of their index.

  //In Rxjs ConcatWith - This operator will sequentially emit the Observable given as input and proceed to the next one.(order is maintened)
}
