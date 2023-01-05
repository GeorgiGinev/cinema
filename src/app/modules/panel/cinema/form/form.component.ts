import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cinema } from 'src/app/shared/resources/cinema/cinema.service';
import { FormService } from 'src/app/shared/services/form/form.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
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
    private formService: FormService,
    private toastService: ToastService,
    private router: Router
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

  /**
   * Create the cinema
   */
  public create() {
    this.formService.isValid(this.formGroup).then(() => {
      this.toastService.success({
        header: 'The cinema was successfully created',
      });

      this.router.navigate(['/panel/cinemas']);
    }, () => {})
  }

  /**
   * Create form group
   */
  private createForm() {
    this.formGroup = this.formBuilder.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.maxLength(this.descriptionLength)]],
      address: [null, [Validators.required]],
      backgroundImages: [null],
      logo: [null],
      cinemaSize: [null, [Validators.required]],
      location: [null, [Validators.required]]
    })
  }
}
