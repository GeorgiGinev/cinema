import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/shared/interfaces/login-response';
import { FormService } from 'src/app/shared/services/form/form.service';
import { PageContainerService } from 'src/app/shared/services/page-container/page-container.service';
import { InputTypes } from 'src/app/shared/types/inputs';
import {UserService} from '../../../shared/resources/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public formGroup: FormGroup;
  public promise: Promise<any>;
  public inputTypes = InputTypes;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private pageContainerService: PageContainerService,
    private router: Router,
    private formService: FormService
  ) {}

  ngOnInit() {
    this.pageContainerService.headerTitle = 'Sign In';
    
    this.createForm();
  }

  /**
   * Sign in request
   */
  public signIn() {
    this.formService.isValid(this.formGroup).then(() => {
      this.promise = this.userService.login(this.formGroup.value).then((data: LoginResponse) => {
        this.router.navigate(['/panel/dashboard']);
      }, () => {});
    }, () => {})
  }

  /**
   * Create form
   */
  private createForm() {
    this.formGroup = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, [Validators.required]],
    });
  }
}
