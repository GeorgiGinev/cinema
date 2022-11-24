import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { PageContainerService } from 'src/app/shared/services/page-container/page-container.service';
import {User, UserService} from '../../../shared/resources/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public formGroup: FormGroup;
  public signUpButton: Promise<any>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private pageContainerService: PageContainerService
  ) {}

  ngOnInit() {
    this.pageContainerService.headerTitle = 'Sign Up';
    
    this.createForm();
  }

  /**
   * Sign in request
   */
  public signUp() {
    if (this.formGroup.valid) {
      this.signUpButton = this.userService.create(this.formGroup.value)
        .then(
          () => {},
          () => {}
        );
    }
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
    });
  }
}
