import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from '../../services/alert/alert.service';
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
    slots: new JsonCollection<MovieSlot>(),
    cinema: new Cinema()
  }
}

@Injectable()
export class MovieService extends JsonResourceService<Movie> {
  public resource: string = 'movies';

  constructor(
    protected httpClient: HttpClient,
    private alertService: AlertService
  ) {
    super(httpClient);
  }

  /**
 * Restore the Movie
 * @param id of the resource
 */
  public restoreMovie(id: string): Promise<any> {
    return this.alertService.create('Are you sure?', 'Are you sure you want to restore this movie?', [
      {
        text: 'Yes',
        role: 'confirm',
        handler: () => {
          return this.restore(id);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
    ]);
  }

  /**
   * Delete the movie
   * @param id of the resource 
   */
  public deleteMovie(id: string): Promise<any> {
    return this.alertService.create('Are you sure?', 'Are you sure you want to delete this movie?', [
      {
        text: 'Yes',
        role: 'confirm',
        handler: () => {
          return this.delete(id);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
    ]);
  }
}
