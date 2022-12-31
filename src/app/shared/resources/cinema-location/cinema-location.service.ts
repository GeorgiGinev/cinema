import { Injectable } from '@angular/core';
import { JsonResource } from '../resource/resource';

interface CinemaLocationInterface {
  address: string,
  latitude: number,
  longitude: number
}

export class CinemaLocation extends JsonResource {
  public data: CinemaLocationInterface = {
    address: '',
    latitude: 0,
    longitude: 0
  };

  public relationships = {};
}

@Injectable()
export class CinemaLocationService {
  constructor() { }
}
