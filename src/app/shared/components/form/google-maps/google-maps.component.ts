import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@UntilDestroy()
@Component({
  selector: 'ci-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
})
export class GoogleMapsComponent implements OnInit {
  public apiLoaded: Observable<boolean>;

  private env = environment;

  constructor(
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.apiLoaded = this.httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key='+this.env.googlemaps_key, 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );

  }

}
