import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { Booking, BookingService } from 'src/app/shared/resources/bookings/booking.service';
import { JsonCollection } from 'src/app/shared/resources/collection/collection';
import { PanelPageService } from '../../panel-page.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public bookings: JsonCollection<Booking> = new JsonCollection<Booking>();

  public loadData: boolean = true;
  
  constructor(
    private panelPageService: PanelPageService,
    private bookingService: BookingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.panelPageService.updateHeader('Booking list', IonIcons.booking);

    this.loadBookings();
  }

  /**
   * Go to booking form
   * @param booking 
   */
   public goToBookingForm(booking: Booking) {
    this.router.navigate(['/movie/form/' + booking.relationships.cinema.id], {
      queryParams: {
        slotId: booking.relationships.movieSlot.id
      }
    })
  }

  private loadBookings() {
    this.bookingService.getAllBookings().then((bookings: JsonCollection<Booking>) => {
      this.bookings = bookings;

      this.loadData = false;
    }, () => {})
  }
}
