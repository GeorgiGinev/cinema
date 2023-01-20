import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { Booking, BookingService } from 'src/app/shared/resources/bookings/booking.service';
import { JsonCollection } from 'src/app/shared/resources/collection/collection';
import { ModalService } from 'src/app/shared/services/modal/modal.service';
import { Sizes } from 'src/app/shared/types/sizes';

@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings-list.component.html',
  styleUrls: ['./bookings-list.component.scss'],
})
export class BookingsListComponent implements OnInit {
  public filters: {} = {};

  public withTrashed: boolean = false;
  public iconsEnum = IonIcons;
  public formGroup: FormGroup;
  public sizes = Sizes;

  public bookings: JsonCollection<Booking> = new JsonCollection<Booking>();

  public loadData: boolean = true;
  
  constructor(
    private bookingService: BookingService,
    private modalService: ModalService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadMyBookingsFromTheServer();
  }

  /**
   * Go to booking form
   * @param booking 
   */
  public goToBookingForm(booking: Booking) {
    this.modalService.closeAll();
    this.router.navigate(['/movie/form/' + booking.relationships.cinema.id], {
      queryParams: {
        slotId: booking.relationships.movieSlot.id
      }
    })
  }

  /**
   * Delete booking
   * @param booking 
   */
   public deleteBooking(booking: Booking) {
    this.bookingService.deleteBooking(booking.id).then(() => {
      this.loadMyBookingsFromTheServer();
    }, () => {});
  }

  public loadOnlyTrashedData() {
    this.withTrashed = !this.withTrashed;

    this.loadMyBookingsFromTheServer();
  }

  private loadMyBookingsFromTheServer() {
    this.bookingService.getMyBookings(this.getFilters()).then((bookings: JsonCollection<Booking>) => {
      this.bookings = bookings;

      this.loadData = false;
    }, () => {})
  }

  private getFilters(): {} {
    const filters: {} = {};

    if (this.withTrashed) {
      filters['with_trashed'] = true;
    }

    return filters;
  }
}
