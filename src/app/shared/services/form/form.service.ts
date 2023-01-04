import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastService } from '../toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private readonly errorMessage = 'Error! Please try again';
  private readonly matchInputsErrorMessage = 'Error! There are inputs which should be with same value.';

  constructor(
    private toastService: ToastService
  ) { }

  public isValid(formGroup: FormGroup): Promise<boolean> {
    let valid: boolean = true;

    if(formGroup.errors && formGroup.errors['missMatch']) {
      this.toastService.error({
        header: this.matchInputsErrorMessage
      })

      return Promise.reject(false);
    }

    Object.keys(formGroup.controls).forEach((key: string) => {
      const ctrl = formGroup.get(key);
      ctrl.markAsTouched({ onlySelf: true });

      if(!ctrl.valid && ctrl.status !== 'DISABLED') {
        valid = false;
      }
    });

    if(valid) {
      return Promise.resolve(true);
    }

    this.toastService.error({
      header: this.errorMessage
    })

    return Promise.reject(false);
  }
}
