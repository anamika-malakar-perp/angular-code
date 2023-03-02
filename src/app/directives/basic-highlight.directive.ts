import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class AppHighlight {
  constructor(private eleRef: ElementRef) {
    this.eleRef.nativeElement.style.background = 'red';
  }
}
