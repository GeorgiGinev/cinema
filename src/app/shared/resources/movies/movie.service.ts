import { Injectable } from '@angular/core';
import { JsonCollection } from '../collection/collection';
import { MovieSlot } from '../movie-slot/movie-slot.service';
import { JsonResource } from '../resource/resource';

interface MovieInterface {
  name: string;
  description: string;
  release_date?: string;
  image: string;
  background_image?: string,
}


export class Movie extends JsonResource<Movie> {
  public data: MovieInterface = {
    name: '',
    description: '',
    release_date: '',
    image: '',
    background_image: '',
  };

  public relationships = {
    slots: new JsonCollection<MovieSlot>()
  }
}

@Injectable()
export class MovieService {
  constructor() { }
}
