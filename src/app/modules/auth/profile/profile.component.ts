import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { User, UserInterface, UserService } from 'src/app/shared/resources/user/user.service';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { FormService } from 'src/app/shared/services/form/form.service';
import { ModalService } from 'src/app/shared/services/modal/modal.service';
import { SessionService } from 'src/app/shared/services/session/session.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { InputTypes } from 'src/app/shared/types/inputs';
import { Sizes } from 'src/app/shared/types/sizes';
import { ChangePasswordComponent } from './change-password/change-password.component';
import * as cloneDeep from 'lodash/cloneDeep';


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

  public savePromise: Promise<any>;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder,
    private sessionService: SessionService,
    private formService: FormService,
    private toastService: ToastService,
    private alertService: AlertService,
    private userService: UserService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.formGroup.get('name').patchValue(this.user.attributes.name);
    this.formGroup.get('email').patchValue(this.user.attributes.email);
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
            const clonnedUser = cloneDeep(this.user);
            clonnedUser.fillAttributes(this.formGroup.value);
            this.savePromise = this.userService.update(clonnedUser).then((userAttributes: UserInterface) => {
              this.toastService.success({
                header: 'Successfully changed user`s data!'
              });

              this.sessionService.user.fillAttributes(userAttributes);

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
