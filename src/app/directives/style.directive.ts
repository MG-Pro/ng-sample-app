import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core'

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color: string = 'blue'

  @HostBinding('style.backgroundColor') bgColor = null

  constructor(private el: ElementRef, private r: Renderer2) {

  }

  @HostListener('mouseenter', ['$event']) enter(e: Event) {
    this.bgColor = 'yellow'
    this.r.setStyle(this.el.nativeElement, 'color', this.color)
  }

  @HostListener('mouseleave') leave() {
    this.bgColor = null
    this.r.setStyle(this.el.nativeElement, 'color', null)
  }

}
