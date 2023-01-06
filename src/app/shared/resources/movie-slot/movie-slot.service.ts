import { Injectable } from '@angular/core';
import { Cinema } from '../cinema/cinema.service';
import { Movie } from '../movies/movie.service';
import { JsonResource } from '../resource/resource';

interface MovieSlotInterface {
  date: string
}

export class MovieSlot extends JsonResource {
  public data: MovieSlotInterface = {
    date: ''
  };

  public relationships = {
    movie: new Movie(),
    cinema: new Cinema()
  };
}

@Injectable()
export class MovieSlotService {
  constructor() { }
}
