import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: '[ciInit]'
})
export class InitDirective {
  @Input() ciInit: () => void;

  constructor(private elementRef: ElementRef) {
  }
}
