import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CinemaLocation } from 'src/app/shared/resources/cinema-location/cinema-location.service';
import { Cinema, CinemaService } from 'src/app/shared/resources/cinema/cinema.service';
import { FormService } from 'src/app/shared/services/form/form.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { InputTypes } from 'src/app/shared/types/inputs';
import { PanelPageService } from '../../panel-page.service';
import * as cloneDeep from 'lodash/cloneDeep';
import { IonIcons } from 'src/app/shared/enums/ion-icons';

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
    private router: Router,
    private cinemaService: CinemaService
  ) {
    this.createForm();
  }

  ngOnInit() {
    if(this.cinema) {
      this.panelService.updateHeader('Edit cinema', IonIcons.cinema);
    } else {
      this.panelService.updateHeader('Add cinema', IonIcons.cinema);
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

      const cinema = new Cinema();
      cinema.fillAttributes(this.formGroup.value);
      cinema.attributes.logo = this.formGroup.value.logo[0];

      const cinemaLocation = new CinemaLocation();
      cinemaLocation.fillAttributes(this.formGroup.value);
      cinemaLocation.attributes.latitude = this.formGroup.value.location.lat;
      cinemaLocation.attributes.longitude = this.formGroup.value.location.lng;

      cinema.addRelationship(cinemaLocation, 'cinemaLocation');

      this.cinemaService.save(cinema);
    }, () => {})
  }

  /**
   * Create form group
   */
  private createForm() {
    this.formGroup = this.formBuilder.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.maxLength(this.descriptionLength), Validators.required]],
      address: [null, [Validators.required]],
      images: [null, [Validators.required]],
      logo: [null, [Validators.required]],
      capacity: [null, [Validators.required]],
      location: [null, [Validators.required]]
    })
  }
}
