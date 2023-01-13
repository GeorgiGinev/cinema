import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { JsonResource } from 'src/app/shared/resources/resource/resource.service';
import { BaseInput } from '../base-input';
import * as cloneDeep from 'lodash/cloneDeep';

@UntilDestroy()
@Component({
  selector: 'ci-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SelectComponent
    } 
  ]
})
export class SelectComponent extends BaseInput implements OnInit {
  @Input() placeholder: string;
  @Input() label: string;
  @Input() multiple: boolean = false;

  @Input() get options(): any[] {
    return this._options;
  } set options(data: any[]) {
    this._options = data;
    this.selectedValue = cloneDeep(this.selectedValue);
  }

  @Input() optionValue: (option: any, index: number) => any;
  @Input() optionLabel: (option: any, index: number) => any;

  public selectedValue: any;
  private _options: any[];

  constructor(
    protected controlContainer: ControlContainer,
    private changeDetectorRef: ChangeDetectorRef
  ) { 
    super(controlContainer);
  }

  ngOnInit() {
    super.onInit();

    this.selectedValue = this.formControl.value;
  }

  public onChangeEvent(event: any) {
    this.formControl.patchValue(this.selectedValue);
  }

  public getOptionLabel(option: any, index: number) {
    if(this.optionLabel) {
      return this.optionLabel(option, index);
    }

    return option.id;
  } 

  public getOptionValue(option: any, index: number) {
    if(this.optionValue) {
      return this.optionValue(option, index);
    }

    return option;
  }

  public compareFn(firstResource: JsonResource, secondResource: JsonResource): boolean {
    return firstResource && secondResource ? firstResource.id === secondResource.id : firstResource === secondResource;
  }
}
