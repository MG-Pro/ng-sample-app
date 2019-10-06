import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core'

@Directive({
  selector: '[appNotIf]'
})
export class NotIfDirective {
  @Input('appNotIf') set if(visible: boolean) {
    if(visible) {
      this.viewContainer.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainer.clear()
    }
  }
  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
    console.log(templateRef, viewContainer);
  }


}
