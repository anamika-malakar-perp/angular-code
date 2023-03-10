import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: '[toolTip]'
})

export class ToolTip {
  @Input()
  toolTip: string;

  hoverTooltip

  // The role of ElementRef is to provide us with direct access to the DOM element, which will be available through a property called nativeElement.

  //The Renderer2 allows us to manipulate the DOM elements, without accessing the DOM directly. It provides a layer of abstraction between the DOM element and the component code. Using Renderer2 we can create an element, add a text node to it, append child element using the appendchild method., etc. We can also add or remove styles, HTML attributes, CSS Classes & properties, etc. We can also attach and listen to events etc.
  constructor(private element: ElementRef, private render: Renderer2) {

  }

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log(!this.hoverTooltip)
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    
  }
}