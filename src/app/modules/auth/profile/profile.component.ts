import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { User } from 'src/app/shared/resources/user/user.service';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { FormService } from 'src/app/shared/services/form/form.service';
import { ModalService } from 'src/app/shared/services/modal/modal.service';
import { SessionService } from 'src/app/shared/services/session/session.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { InputTypes } from 'src/app/shared/types/inputs';
import { Sizes } from 'src/app/shared/types/sizes';
import { ChangePasswordComponent } from './change-password/change-password.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public iconsEnum = IonIcons;
  public sizes = Sizes;
  public inputTypes = InputTypes;

  public formGroup: FormGroup;

  public user: User = this.sessionService.user;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder,
    private sessionService: SessionService,
    private formService: FormService,
    private toastService: ToastService,
    private alertService: AlertService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.formGroup.get('name').patchValue(this.user.data.name);
    this.formGroup.get('email').patchValue(this.user.data.email);
  }

  public goToChangePassword() {
    this.modalService.openModal(ChangePasswordComponent).then(() => { }, () => { });
  }

  /**
   * Update data
   */
  public save() {
    this.formService.isValid(this.formGroup).then(() => {
      this.alertService.create('Are you sure?', 'Are you sure you want to change user`s data?', [
        {
          text: 'Yes',
          role: 'confirm',
          handler: () => {
            Promise.resolve().then(() => {
              this.toastService.success({
                header: 'Successfully changed user`s data!'
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
      avatar: [null],
      name: [null, Validators.required],
      email: [null, Validators.required]
    });

    this.formGroup.get('email').disable();
  }
}
