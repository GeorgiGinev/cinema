import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public formGroup: FormGroup;

  public fakeSeats: {} = {
    1: 12,
    2: 23,
    3: 100,
    4: 12
  }

  public fakeBookedSeats: number[][] = [
    [1, 2, 6],
    [3],
    [4],
    [5]
  ]

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.createForm();
  }

  ngOnInit() {}

  private createForm() {
    this.formGroup = this.formBuilder.group({
      seats: [null, [Validators.required]]
    })
  }
}
