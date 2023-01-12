import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CinemaLocation } from 'src/app/shared/resources/cinema-location/cinema-location.service';
import { Cinema, CinemaService } from 'src/app/shared/resources/cinema/cinema.service';
import { FormService } from 'src/app/shared/services/form/form.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { InputTypes } from 'src/app/shared/types/inputs';
import { PanelPageService } from '../../panel-page.service';
import * as cloneDeep from 'lodash/cloneDeep';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public cinema: Cinema = new Cinema();
  public cinemaId: string;
  public formGroup: FormGroup;
  public inputTypes = InputTypes;

  public descriptionLength: number = 200;

  public savePromise: Promise<any>;
  public deletePromise: Promise<any>;

  constructor(
    private panelService: PanelPageService,
    private formBuilder: FormBuilder,
    private formService: FormService,
    private toastService: ToastService,
    private router: Router,
    private cinemaService: CinemaService,
    private activatedRoute: ActivatedRoute
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.cinemaId = (this.activatedRoute.snapshot.params as any).id;

    if(this.cinemaId) {
      this.panelService.updateHeader('Edit cinema', IonIcons.cinema);
      this.loadCinema();
    } else {
      this.panelService.updateHeader('Add cinema', IonIcons.cinema);
    }
  }

  /**
   * Restore the cinema
   */
  public restore() {
    this.deletePromise = this.cinemaService.restoreCinema(this.cinemaId).then(() => {
      this.toastService.success({
        header: 'The cinema was restored successfully'
      });

      this.router.navigate(['/panel/cinemas']);
    }, () => {})
  }

  /**
   * Delete the cinema
   */
  public delete() {
    this.deletePromise = this.cinemaService.deleteCinema(this.cinemaId).then(() => {
      this.toastService.success({
        header: 'The cinema was deleted successfully'
      });

      this.router.navigate(['/panel/cinemas']);
    }, () => {});
  }

  /**
   * Create the cinema
   */
  public create() {
    this.formService.isValid(this.formGroup).then(() => {
      const cinema = new Cinema();
      cinema.id = this.cinema.id;
      cinema.fillAttributes(this.formGroup.value);
      cinema.attributes.logo = this.formGroup.value.logo[0];

      const cinemaLocation = new CinemaLocation();
      cinemaLocation.fillAttributes(this.formGroup.value);
      cinemaLocation.attributes.latitude = this.formGroup.value.location.lat;
      cinemaLocation.attributes.longitude = this.formGroup.value.location.lng;

      cinema.addRelationship(cinemaLocation, 'cinemaLocation');

      this.savePromise = this.cinemaService.save(cinema).then(() => {
        this.toastService.success({
          header: !this.cinemaId ? 'The cinema was successfully created' : 'The cinema was successfully updated',
        });

        this.router.navigate(['/panel/cinemas']);
      }, () => {});
    }, () => {})
  }

  /**
   * Load cinema
   */
  public loadCinema() {
    this.cinemaService.get(this.cinemaId).pipe(untilDestroyed(this)).subscribe((cinema: Cinema) => {
      this.cinema = cinema;
      this.formGroup.patchValue(cinema.attributes);
      this.formGroup.get('address').patchValue(cinema.relationships.cinemaLocation.attributes.address);
      this.formGroup.get('location').patchValue({
        lat: cinema.relationships.cinemaLocation.attributes.latitude,
        lng: cinema.relationships.cinemaLocation.attributes.longitude 
      });

      const logoArray: string[] = [];
      logoArray.push(cinema.attributes.logo);
      this.formGroup.get('logo').patchValue(logoArray);
    });
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
    });
  }
}
