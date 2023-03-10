import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: '[toolTip]'
})

export class ToolTip {
  @Input()
  toolTip: string;

  constructor(private element: ElementRef) {

  }

  @HostListener('mouseenter')
  onMouseEnter() {
    
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    
  }
}