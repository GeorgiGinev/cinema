import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from '../../services/alert/alert.service';
import { ToastService } from '../../services/toast/toast.service';
import { Cinema } from '../cinema/cinema.service';
import { MovieSlot } from '../movie-slot/movie-slot.service';
import { Movie } from '../movies/movie.service';
import { JsonResource, JsonResourceService } from '../resource/resource.service';
import { User } from '../user/user.service';

interface BookingInterface {
  booked_at: string,
  deleted_at: string,
  places: any
}


export class Booking extends JsonResource {
  public attributes: BookingInterface = {
    booked_at: '',
    deleted_at: '',
    places: {},
  };

  public relationships = {
    movieSlot: new MovieSlot(),
    user: new User(),
    movie: new Movie(),
    cinema: new Cinema()
  }
}

@Injectable()
export class BookingService extends JsonResourceService<Booking> {
  public resource: string = 'bookings';

  constructor(
    protected httpClient: HttpClient,
    private toastService: ToastService,
    private alertService: AlertService
    ) {
    super(httpClient);
  }

  public getAllBookings(): Promise<any> {
    return this.httpClient.get('/bookings/all').toPromise();
  }
  
  public deleteBooking(bookingId: string | number): Promise<any> {
    return this.alertService.create('Are you sure?', 'If you delete your booking you can`t restore it.', [
      {
        text: 'Yes',
        role: 'confirm',
        handler: () => {
          this.toastService.success({
            header: 'Booking was successfully removed!'
          });
          
          return this.httpClient.delete('/bookings/' + bookingId).toPromise();
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
    ]);
  }

  public getMyBookings(filter: any = null): Promise<any> {
    return this.httpClient.get('/bookings', {
      params: filter
    }).toPromise();
  }

  public getBooking(cinemaId: string | number, slotId: string | number): Promise<any> {
    return this.httpClient.get('/bookings/' + cinemaId + '/' + slotId).toPromise();
  }

  public createBooking(cinemId: string | number, slotId: string | number, booking: Booking): Promise<any> {
    return this.httpClient.post('/bookings/'+cinemId+'/'+slotId, JSON.stringify(booking)).toPromise().then(() => {
      this.toastService.success({
        header: 'You`ve successfully made you booking. See you soon.'
      })
    }, () => {});
  }
}
