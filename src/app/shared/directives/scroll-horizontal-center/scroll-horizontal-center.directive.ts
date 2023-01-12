import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[ciScrollHorizontalCenter]'
})
export class ScrollHorizontalCenterDirective implements AfterViewInit {
  @Input('ciScrollHorizontalCenter') element: HTMLElement;

  constructor(
    private elementRef: ElementRef
  ) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.element.scrollLeft = (this.elementRef.nativeElement.clientWidth - this.element.clientWidth) / 2;
    })
  }
}
