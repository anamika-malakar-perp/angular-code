import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: '[myToggle]'
})

export class MyToggleDirective {
  toggleElement = false;
  constructor(private element: ElementRef) {

  }

  @HostListener('click') 
  OnClick() {
    this.toggleElement = !this.toggleElement
    if(this.toggleElement) {
      this.element.nativeElement.classList.add('toggle')
    } else {
      this.element.nativeElement.classList.remove('toggle')
    }

  }
}