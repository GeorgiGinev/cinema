import { Injectable } from '@angular/core';
import { Cinema } from '../cinema/cinema.service';
import { Movie } from '../movies/movie.service';
import { JsonResource } from '../resource/resource.service';

interface MovieSlotInterface {
  date: string
}

export class MovieSlot extends JsonResource {
  public attributes: MovieSlotInterface = {
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
