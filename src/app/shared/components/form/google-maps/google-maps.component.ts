import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Sizes } from 'src/app/shared/types/sizes';
import { environment } from 'src/environments/environment';
import { BaseInput } from '../base-input';

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
    center: { lat: 24, lng: 12 },
    zoom: 7,
    streetViewControl: false,
    mapTypeControl: false,
    disableDoubleClickZoom: true,
    scrollwheel: false,
  }

  public markerPosition = {
    lat: 24,
    lng: 12
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
    if(!this.formControl?.value) {
      this.formControl.patchValue(this.markerPosition);
    }

    if(this.formControl?.value) {
      this.markerPosition = this.formControl.value;
    }

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

    this.formControl.patchValue(this.markerPosition);
  }
}
