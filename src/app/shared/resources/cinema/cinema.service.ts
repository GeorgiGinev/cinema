import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CinemaLocation } from '../cinema-location/cinema-location.service';
import { JsonCollection } from '../collection/collection';
import { Movie } from '../movies/movie.service';
import { JsonResource, JsonResourceService } from '../resource/resource.service';

interface CinemaInterface {
  name: string;
  description: string;
  images: string[];
  logo: string;
  location?: {
    lat: number,
    long: number
  },
  capacity: any
}


export class Cinema extends JsonResource {
  public attributes: CinemaInterface = {
    name: '',
    description: '',
    logo: '',
    images: [],
    location: {
      lat: 0,
      long: 0
    },
    capacity: {}
  };

  public relationships = {
    movies: new JsonCollection<Movie>(),
    cinemaLocation: new CinemaLocation()
  }
}

@Injectable()
export class CinemaService extends JsonResourceService<Cinema> {
  public resource: string = 'cinemas';

  constructor(
    protected httpClient: HttpClient
  ) { 
    super(httpClient);
  }
}
