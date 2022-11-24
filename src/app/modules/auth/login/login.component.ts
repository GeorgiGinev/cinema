import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/shared/interfaces/login-response';
import { PageContainerService } from 'src/app/shared/services/page-container/page-container.service';
import {UserService} from '../../../shared/resources/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public formGroup: FormGroup;
  public promise: Promise<any>;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private pageContainerService: PageContainerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.pageContainerService.headerTitle = 'Sign In';
    
    this.createForm();
  }

  /**
   * Sign in request
   */
  public signIn() {
    if (this.formGroup.valid) {
      this.promise = this.userService.login(this.formGroup.value).then((data: LoginResponse) => {
        this.router.navigate(['/dashboard']);
      }, () => {});
    }
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
