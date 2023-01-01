import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseInput } from '../base-input';

@Component({
  selector: 'ci-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent
    }
  ]
})
export class InputComponent extends BaseInput<string> implements OnInit {
  @Input() placeholder: string; 
  @Input() label: string;
  
  constructor(
    protected controlContainer: ControlContainer
  ) { 
    super(controlContainer);
  }

  ngOnInit() {
    this.onInit();
  }
}
