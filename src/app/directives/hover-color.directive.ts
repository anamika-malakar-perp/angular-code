import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: '[hoverColor]'
})

export class OnHoverColor {
  constructor(private element : ElementRef, private render: Renderer2) {

  }

  // the Hostlistener is a decorator that declares a DOM event to listen for and provides a handler method to run when that event occurs. 
  @HostListener('mouseenter')
  onMouseEnter() {
    // alert("You just hovered over a paragraph");
    this.render.setStyle(this.element.nativeElement, 'backgroundColor', 'red')
  }
}