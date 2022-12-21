import { Injectable } from '@angular/core';
import { JsonResource } from '../resource/resource';

interface MovieInterface {
  name: string;
  description: string;
  release_date?: string;
  image: string;
  background_image?: string,
  relationships: {}
}


export class Movie extends JsonResource {
  public data: MovieInterface = {
    name: '',
    description: '',
    release_date: '',
    image: '',
    background_image: '',
    relationships: {}
  };
}

@Injectable()
export class MovieService {
  constructor() { }
}
