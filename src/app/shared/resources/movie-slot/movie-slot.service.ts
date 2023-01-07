import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from '../../services/alert/alert.service';
import { Cinema } from '../cinema/cinema.service';
import { Movie } from '../movies/movie.service';
import { JsonResource, JsonResourceService } from '../resource/resource.service';

interface MovieSlotInterface {
  date: string,
  price: number
}

export class MovieSlot extends JsonResource {
  public attributes: MovieSlotInterface = {
    date: '',
    price: 0
  };

  public relationships = {
    movie: new Movie(),
    cinema: new Cinema()
  };
}

@Injectable()
export class MovieSlotService extends JsonResourceService<MovieSlot> {
  public resource: string = 'movie-slot';

  constructor(
    protected httpClient: HttpClient,
    private alertService: AlertService
  ) { 
    super(httpClient);
  }

  public alertDeleteMessage(): Promise<any> {
    return this.alertService.create('Are you sure?', 'Are you sure you want to remove this slot?', [
      {
        text: 'Yes',
        role: 'Confirm',
      },
      {
        text: 'Cancel',
        role: 'cancel',
      },
    ])
  }
}
