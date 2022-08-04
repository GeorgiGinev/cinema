import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  /**
   * Sign in request
   */
  public signIn() {
    if (this.formGroup.valid) {
      const email: string = this.formGroup.get('email').value;
      const password: string = this.formGroup.get('password').value;

      this.authService.signIn(email, password);
    }
  }

  /**
   * Create form
   */
  private createForm() {
    this.formGroup = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }
}
