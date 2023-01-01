import { Injectable, Input } from "@angular/core";
import { AbstractControl, ControlContainer, ControlValueAccessor, FormGroup, FormGroupDirective } from "@angular/forms";
import * as cloneDeep from 'lodash/cloneDeep';

@Injectable()
export class BaseInput implements ControlValueAccessor {
    @Input() public formControlName: string;
    public formControl: AbstractControl;
    public formGroup: FormGroup;
    public isRequired: boolean;

    public disabled = false;

    constructor(
        protected controlContainer: ControlContainer
    ) { }

    writeValue(obj: any): void {}
    registerOnChange(fn: any): void {}
    registerOnTouched(fn: any): void {}
    setDisabledState?(isDisabled: boolean): void {}

    /**
     * Call method on component init to get formGroup and formControl
     */
    public onInit() {
        this.formGroup = (this.controlContainer as FormGroupDirective).form;
        if (this.formGroup) {
            this.formControl = this.formGroup.get(this.formControlName);
        }

        this.isRequired = this.isControlRequired();
    }

    /**
     * Check if formControl is required
     * @returns 
     */
    private isControlRequired(): boolean {
        if(!this.formControl) {
            return false;
        }
        
        const validator = this.formControl.validator({} as AbstractControl);
        if (validator && validator.required) {
            return true;
        }

        return false
    }
}