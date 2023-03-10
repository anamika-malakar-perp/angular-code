import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: '[hoverColor]'
})

export class OnHoverColor {
  constructor(private element : ElementRef) {

  }

  // the Hostlistener is a decorator that declares a DOM event to listen for and provides a handler method to run when that event occurs. 
  @HostListener('mouseenter')
  onMouseEnter() {
    alert("You just hovered over a paragraph");
  }
}