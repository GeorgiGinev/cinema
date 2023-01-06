import { Injectable } from '@angular/core';
import { Cinema } from '../cinema/cinema.service';
import { MovieSlot } from '../movie-slot/movie-slot.service';
import { Movie } from '../movies/movie.service';
import { JsonResource } from '../resource/resource.service';
import { User } from '../user/user.service';

interface BookingInterface {
  booked_at: string
}


export class Booking extends JsonResource {
  public attributes: BookingInterface = {
    booked_at: '',
  };

  public relationships = {
    slot: new MovieSlot(),
    user: new User(),
    movie: new Movie(),
    cinema: new Cinema()
  }
}

@Injectable()
export class BookingService {
  constructor() { }
}
