import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cinema } from 'src/app/shared/resources/cinema/cinema.service';
import { InputTypes } from 'src/app/shared/types/inputs';
import { PanelPageService } from '../../panel-page.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public cinema: Cinema;
  public formGroup: FormGroup;
  public inputTypes = InputTypes;

  public descriptionLength: number = 200;

  constructor(
    private panelService: PanelPageService,
    private formBuilder: FormBuilder,
  ) {
    this.createForm();
  }

  ngOnInit() {
    if(this.cinema) {
      this.panelService.updateHeader('Edit cinema');
    } else {
      this.panelService.updateHeader('Add cinema');
    }
  }

  public create() {
    console.log('create cinema : ', this.formGroup);
  }

  /**
   * Create form group
   */
  private createForm() {
    this.formGroup = this.formBuilder.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.maxLength(this.descriptionLength)]],
      address: [null, [Validators.required]],
      cinemaSize: [null, [Validators.required]],
      location: [null, [Validators.required]]
    })
  }
}
