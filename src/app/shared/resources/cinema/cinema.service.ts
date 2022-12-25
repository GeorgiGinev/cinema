import { Injectable } from '@angular/core';
import { JsonCollection } from '../collection/collection';
import { Movie } from '../movies/movie.service';
import { JsonResource } from '../resource/resource';

interface CinemaInterface {
  name: string;
  description: string;
  images: string[];
  logo: string;
  location?: {
    lat: number,
    long: number
  }
}


export class Cinema extends JsonResource {
  public data: CinemaInterface = {
    name: '',
    description: '',
    logo: '',
    images: [],
    location: {
      lat: 0,
      long: 0
    },
  };

  public relationships = {
    movies: new JsonCollection<Movie>(),
  }
}

@Injectable()
export class CinemaService {
  constructor() { }
}
