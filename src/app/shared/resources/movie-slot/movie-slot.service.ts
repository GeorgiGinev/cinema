import { Injectable } from '@angular/core';
import { JsonResource } from '../resource/resource';

interface MovieSlotInterface {
  movieId: string,
  date: string
}


export class MovieSlot extends JsonResource {
  public data: MovieSlotInterface = {
    movieId: '',
    date: ''
  };

  public relationships = {};
}

@Injectable()
export class MovieSlotService {
  constructor() { }
}
