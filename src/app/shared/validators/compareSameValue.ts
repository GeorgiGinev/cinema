import { FormGroup, ValidatorFn } from "@angular/forms";

export function compareSameValues(fieldOne: string, fieldTwo: string): ValidatorFn {
    return function (formGroup: FormGroup) {
        let fieldOneValue = formGroup.get(fieldOne).value;
        let fieldTwoValue = formGroup.get(fieldTwo).value;
        
        if (fieldOneValue !== fieldTwoValue) {
          return { missMatch: `field ${fieldOne} is not equal to ${fieldTwo}` }
        }
        return null;
      }
}