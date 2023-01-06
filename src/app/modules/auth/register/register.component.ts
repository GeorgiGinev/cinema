import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageContainerService } from 'src/app/shared/services/page-container/page-container.service';
import { InputTypes } from 'src/app/shared/types/inputs';
import { UserService } from '../../../shared/resources/user/user.service';
import { compareSameValues } from 'src/app/shared/validators/compareSameValue';
import { FormService } from 'src/app/shared/services/form/form.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public formGroup: FormGroup;
  public signUpButton: Promise<any>;

  public inputTypes = InputTypes

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private pageContainerService: PageContainerService,
    private formService: FormService
  ) { }

  ngOnInit() {
    this.pageContainerService.headerTitle = 'Sign Up';

    this.createForm();
  }

  /**
   * Sign in request
   */
  public signUp() {
    this.formService.isValid(this.formGroup).then(() => {
      this.signUpButton = this.userService.create(this.formGroup.value)
        .then(
          () => { },
          () => { }
        );
    }, () => { })
  }

  /**
   * Create form
   */
  private createForm() {
    this.formGroup = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      name: [null, [Validators.required, Validators.minLength(2)]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      password_confirmation: [null, [Validators.required, Validators.minLength(8)]]
    }, { validator: compareSameValues('password', 'password_confirmation') });
  }
}
