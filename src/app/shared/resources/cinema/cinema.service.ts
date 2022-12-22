import { Injectable } from '@angular/core';
import { JsonResource } from '../resource/resource';

interface CinemaInterface {
  name: string;
  description: string;
  images: string[];
  location?: {
    lat: number,
    long: number
  }
  relationships: {}
}


export class Cinema extends JsonResource {
  public data: CinemaInterface = {
    name: '',
    description: '',
    images: [],
    location: {
      lat: 0,
      long: 0
    },
    relationships: {}
  };
}

@Injectable()
export class CinemaService {
  constructor() { }
}
