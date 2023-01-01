import { Injectable, Input } from "@angular/core";
import { AbstractControl, ControlContainer, ControlValueAccessor, FormGroup, FormGroupDirective } from "@angular/forms";
import * as cloneDeep from 'lodash/cloneDeep';

@Injectable()
export class BaseInput<T> implements ControlValueAccessor {
    @Input() public formControlName: string;
    public formControl: AbstractControl;
    public formGroup: FormGroup;
    public isRequired: boolean;

    public disabled = false;
    /**
     * Call when value has changed programatically
    */
    public onChange(newVal: T) { }
    public onTouched(_?: any) { }
    public value: T;

    constructor(
        protected controlContainer: ControlContainer
    ) { }

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
     * Model -> View changes
     */
    public writeValue(obj: T): void { this.value = obj; }
    public registerOnChange(fn: any): void { this.onChange = fn; }
    public registerOnTouched(fn: any): void { this.onTouched = fn; }
    public setDisabledState?(isDisabled: boolean): void { this.disabled = isDisabled; }

    /**
     * Check if formControl is required
     * @returns 
     */
    private isControlRequired(): boolean {
        const validator = this.formGroup.get(this.formControlName).validator({} as AbstractControl);
        if (validator && validator.required) {
            return true;
        }

        return false
    }
}