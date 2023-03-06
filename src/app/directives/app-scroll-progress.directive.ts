import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollProgress]',
})
export class AppScrollProgress {
  constructor() {
    console.log('call');
  }
  @HostListener('scroll', ['$event'])
  doSomething(event) {
    console.log('testing', event);
  }
}
