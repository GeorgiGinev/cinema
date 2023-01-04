import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { FormService } from 'src/app/shared/services/form/form.service';
import { ModalService } from 'src/app/shared/services/modal/modal.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { InputTypes } from 'src/app/shared/types/inputs';
import { compareSameValues } from 'src/app/shared/validators/compareSameValue';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangePasswordComponent {
  public formGroup: FormGroup;
  public inputTypes = InputTypes;

  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private modalService: ModalService,
    private formService: FormService,
    private alertService: AlertService
  ) {
    this.createForm();
  }

  public update() {
    this.formService.isValid(this.formGroup).then(() => {
      this.alertService.create('Are you sure?', 'Are you sure you want to change user`s data?', [
        {
          text: 'Yes',
          role: 'confirm',
          handler: () => {
            Promise.resolve().then(() => {
              this.toastService.success({
                header: 'The password was successfully changed!'
              });

              this.modalService.closeModal();
            }, () => { })
          }
        },
        {
          text: 'No',
          role: 'cancel'
        }
      ]);
    }, () => { })
  }

  private createForm() {
    this.formGroup = this.formBuilder.group({
      oldPassword: [null, [Validators.required]],
      newPassword: [null, [Validators.required, Validators.minLength(8)]],
      repeatNewPassword: [null, [Validators.required, Validators.minLength(8)]]
    }, { validator: compareSameValues('newPassword', 'repeatNewPassword') })
  }
}
