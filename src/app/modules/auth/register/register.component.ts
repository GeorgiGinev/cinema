import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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
  public signUp() {
    if (this.formGroup.valid) {
      const email: string = this.formGroup.get('email').value;
      const name: string = this.formGroup.get('name').value;
      const password: string = this.formGroup.get('password').value;

      this.authService
        .signUp(email, name, password)
        .then(
          () => {},
          () => {}
        )
        .catch(() => {});
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
    });
  }
}
