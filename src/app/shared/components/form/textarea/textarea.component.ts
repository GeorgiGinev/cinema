import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseInput } from '../base-input';

@Component({
  selector: 'ci-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TextareaComponent
    }
  ]
})
export class TextareaComponent extends BaseInput<string> implements OnInit {
  @Input() placeholder: string; 
  @Input() label: string;

  @Input() rows: number = 3;
  
  constructor(
    protected controlContainer: ControlContainer
  ) { 
    super(controlContainer);
  }

  ngOnInit() {
    this.onInit();
  }

}
