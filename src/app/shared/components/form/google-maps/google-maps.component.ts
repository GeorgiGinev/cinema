import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Sizes } from 'src/app/shared/types/sizes';
import { environment } from 'src/environments/environment';
import { BaseInput } from '../base-input';
import * as cloneDeep from 'lodash/cloneDeep';

@UntilDestroy()
@Component({
  selector: 'ci-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: GoogleMapsComponent
    }
  ]
})
export class GoogleMapsComponent extends BaseInput implements OnInit {
  @Input() label: string;
  @Input() draggable: boolean = true;

  @ViewChild('googleMap') googleMap: google.maps.Map;

  public apiLoaded: Observable<boolean>;
  public options: google.maps.MapOptions = {
    center: {
      lat: 42.67633188852, lng: 23.340857861
    },
    zoom: 7,
    streetViewControl: false,
    mapTypeControl: false,
    disableDoubleClickZoom: true,
    scrollwheel: false,
  }

  public markerPosition = {
    lat: 42.67633188852,
    lng: 23.340857861
  };

  public sizeEnum = Sizes;

  private env = environment;

  constructor(
    private httpClient: HttpClient,
    protected controlContainer: ControlContainer
  ) {
    super(controlContainer)
  }

  ngOnInit() {
    super.onInit();
    if (!this.formControl?.value) {
      this.formControl.patchValue(this.markerPosition);
    }

    this.formControl.valueChanges.pipe(untilDestroyed(this)).subscribe((data: any) => {
      this.markerPosition = data;
      this.options.center = data;

      this.options = cloneDeep(this.options);
    });

    this.apiLoaded = this.httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=' + this.env.googlemaps_key, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  public onMapDrag() {
    this.markerPosition = {
      lat: this.googleMap.getCenter().lat(),
      lng: this.googleMap.getCenter().lng()
    }

    this.formControl.patchValue(this.markerPosition, { emitEvent: false });
  }
}
