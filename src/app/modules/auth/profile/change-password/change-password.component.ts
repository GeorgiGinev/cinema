import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputTypes } from 'src/app/shared/types/inputs';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  public formGroup: FormGroup;
  public inputTypes = InputTypes;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.createForm();
   }

  ngOnInit() {}

  public update() {
    
  }

  private createForm() {
    this.formGroup = this.formBuilder.group({
      oldPassword: [null, [Validators.required]],
      newPassword: [null, [Validators.required, Validators.minLength(8)]],
      repeatNewPassword: [null, [Validators.required, Validators.minLength(8)]]
    })
  }
}
