import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from '../../../shared/resources/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  /**
   * Sign in request
   */
  public async signIn() {
    if (this.formGroup.valid) {
      await this.userService.login(this.formGroup.value);
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
