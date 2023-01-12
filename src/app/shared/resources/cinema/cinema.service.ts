import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from '../../services/alert/alert.service';
import { CinemaLocation } from '../cinema-location/cinema-location.service';
import { JsonCollection } from '../collection/collection';
import { Movie } from '../movies/movie.service';
import { JsonResource, JsonResourceService } from '../resource/resource.service';

interface CinemaInterface {
  name: string;
  description: string;
  images: string[];
  logo: string;
  capacity: any,
  deleted_at: string
}


export class Cinema extends JsonResource {
  public attributes: CinemaInterface = {
    name: '',
    description: '',
    logo: '',
    images: [],
    capacity: {},
    deleted_at: ''
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
    protected httpClient: HttpClient,
    private alertService: AlertService
  ) { 
    super(httpClient);
  }

  /**
   * Restore the Cinema
   * @param id of the resource
   */
  public restoreCinema(id: string): Promise<any> {
    return this.alertService.create('Are you sure?', 'Are you sure you want to restore this cinema?', [
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
   * Delete cinemas
   * @param id of the resource 
   */
  public deleteCinema(id: string): Promise<any> {
    return this.alertService.create('Are you sure?', 'Are you sure you want to delete this cinema?', [
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
