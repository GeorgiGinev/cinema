import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { InputTypes } from 'src/app/shared/types/inputs';
import { Sizes } from 'src/app/shared/types/sizes';
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
export class InputComponent extends BaseInput implements OnInit {
  @Input() placeholder: string; 
  @Input() label: string;
  @Input() type: InputTypes = InputTypes.text;
  @Input() disabled: boolean = false;

  public inputTypes = InputTypes;
  public iconsEnum = IonIcons;
  public sizes = Sizes;

  public visibleType: InputTypes;
  
  constructor(
    protected controlContainer: ControlContainer
  ) { 
    super(controlContainer);
  }

  ngOnInit() {
    this.onInit();

    this.visibleType = this.type;
  }

  /**
   * Trigger password to be visible or not
   * @returns 
   */
  public passwordVisisble() {
    if(this.visibleType === this.inputTypes.text) {
      this.visibleType = this.inputTypes.password;
      return;
    }

    this.visibleType = this.inputTypes.text;
  }
}
