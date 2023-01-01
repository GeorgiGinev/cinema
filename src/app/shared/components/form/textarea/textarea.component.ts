import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
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
export class TextareaComponent extends BaseInput implements OnInit {
  @Input() placeholder: string;
  @Input() label: string;
  @Input() maxLength: number;
  @Input() withCounter: boolean = true;

  @Input() rows: number = 3;

  public currentLength: number = 0;

  constructor(
    protected controlContainer: ControlContainer
  ) {
    super(controlContainer);
  }

  ngOnInit() {
    this.onInit();

    this.getMaxLength();

    if(this.formControl.value) {
      this.currentLength = this.formControl.value.length;
    }
  }

  /**
   * Trigger event when control value changes
   * @param event event 
   */
  public onControlChange(event: any) {
    this.currentLength = event.detail.value.length;
    this.formControl.updateValueAndValidity();
    console.log(this.formControl);
  }

  /**
   * Get max length from control validator
   * @returns 
   */
  private getMaxLength() {
    const validator = this.formControl.validator({} as AbstractControl);
    console.log('validator : ', this.formControl);
    if (validator && validator.required) {
      return true;
    }
  }
}
