import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[myngIf]'
})

export class CustomNgIf {
  @Input() myngIf: boolean;
  constructor(private view: ViewContainerRef, private template: TemplateRef<any>) {

  }

  ngOnChanges() {
    if(this.myngIf) {

      this.view.createEmbeddedView(this.template)
    } else {
      this.view.clear()
    }
  }
}