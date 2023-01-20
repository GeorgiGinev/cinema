import { Component, OnInit } from '@angular/core';
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
    private bookingService: BookingService
  ) { }

  ngOnInit() {
    this.panelPageService.updateHeader('Booking list', IonIcons.booking);

    this.loadBookings();
  }

  public goToBookingForm(booking: Booking) {
    
  }

  private loadBookings() {
    this.bookingService.getAllBookings().then((bookings: JsonCollection<Booking>) => {
      this.bookings = bookings;

      this.loadData = false;
    }, () => {})
  }
}
