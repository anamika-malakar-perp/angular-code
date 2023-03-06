import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollProgress]',
})
export class AppScrollProgress {
  constructor() {
    console.log('call');
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    var h = document.documentElement;
    console.log('h', h);
    // var b = document.body;
    // console.log('b', b);
    var scrollTop = 'scrollTop';
    var scrollHeight = 'scrollHeight';
    console.log('h-data',parseInt(h[scrollTop]))
    // console.log('b-top',b[scrollTop])
    console.log('h-height',h[scrollHeight])
    // console.log('b-height',b[scrollHeight])
    console.log('client-height',h.clientHeight)
    // b = document.body,
    // this.progresValue = (h[scrollTop]||b[scrollTop]) / ((h[scrollHeight]||b[scrollHeight]) - h.clientHeight) * 100;
  }
}
