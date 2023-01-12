import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cinema } from '../cinema/cinema.service';
import { JsonCollection } from '../collection/collection';
import { MovieSlot } from '../movie-slot/movie-slot.service';
import { JsonResource, JsonResourceService } from '../resource/resource.service';

interface MovieInterface {
  name: string;
  description: string;
  release_date?: string;
  image: string;
  deleted_at: string
}


export class Movie extends JsonResource {
  public attributes: MovieInterface = {
    name: '',
    description: '',
    release_date: '',
    image: '',
    deleted_at: ''
  };

  public relationships = {
    slots: new JsonCollection<MovieSlot>()
  }
}

@Injectable()
export class MovieService extends JsonResourceService<Movie> {
  public resource: string = 'movies';

  constructor(
    protected httpClient: HttpClient
  ) { 
    super(httpClient);
  }
}
