import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ChangePasswordComponent } from 'src/app/modules/auth/profile/change-password/change-password.component';
import { Booking, BookingService } from 'src/app/shared/resources/bookings/booking.service';
import { JsonCollection } from 'src/app/shared/resources/collection/collection';
import { MovieSlot, MovieSlotService } from 'src/app/shared/resources/movie-slot/movie-slot.service';
import * as cloneDeep from 'lodash/cloneDeep';
import { SessionService } from 'src/app/shared/services/session/session.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';

@UntilDestroy()
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public formGroup: FormGroup;
  public cinemaId: string;
  public slotId: string;

  public slot: MovieSlot = new MovieSlot();

  public booking: Booking = new Booking();

  public price: number = 0;

  public bookedSeats: number[][];

  public bookNowPromise: Promise<any>;

  constructor(
    private formBuilder: FormBuilder,
    private bookingService: BookingService,
    private activatedRoute: ActivatedRoute,
    private movieSlotService: MovieSlotService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private sessionService: SessionService,
    private toastService: ToastService
  ) { 
    this.createForm();
  }

  ngOnInit() {
    this.cinemaId = (this.activatedRoute.snapshot.params as any).cinemaId;
    this.slotId = this.activatedRoute.snapshot.queryParams.slotId;

    this.loadSlot();
    this.loadBooking();
  }

  public createBooking() {
    if(!this.sessionService.user) {
      this.toastService.error({
        header: 'Please sign in into your account before making the booking.'
      })
      return;
    }
    const booking = new Booking();
    booking.attributes.places = this.formGroup.get('places').value;
    booking.attributes.places.forEach((booking: number[]) => {
      if(!booking) {
        booking = [];
      }
    });
    
    booking.addRelationship(this.slot, 'slot');
    
    this.bookNowPromise = this.bookingService.createBooking(this.cinemaId, this.slotId, booking).then(() => {
      this.router.navigate(['/cinema/' + this.cinemaId]);
    }, () => {})
  }

  /**
   * Create form
   */
  private createForm() {
    this.formGroup = this.formBuilder.group({
      places: [null, [Validators.required]]
    });

    this.seatsChangeListener();
  }

  /**
   * Load slot from server
   */
  public loadSlot() {
    this.movieSlotService.get(this.slotId).pipe(untilDestroyed(this)).subscribe((slot: MovieSlot) => {
      this.slot = slot;

      console.log('this.slot?.relationships?.cinema?.attributes?.capacity', this.slot)
      this.changeDetectorRef.markForCheck();
    })
  }

  public seatsChangeListener() {
    this.formGroup.get('places').valueChanges.subscribe((data: []) => {
      let counter: number = 0;
      data.forEach((row: []) => {
        row.forEach(() => {
          counter++;
        })
      })

      this.price = counter * this.slot.attributes.price;
    });
  }

  private loadBooking() {
    this.bookingService.getBooking(this.cinemaId, this.slotId).then((bookings: JsonCollection<Booking>) => {
      bookings.data.forEach((booking: Booking) => {
        if(!this.bookedSeats || this.bookedSeats?.length === 0) {
          this.bookedSeats = booking.attributes.places;
        } else {
          (booking.attributes.places as []).forEach((place: number[], index: number) => {
            if(!this.bookedSeats[index]) {
              this.bookedSeats[index] = [];
            }

            this.bookedSeats[index] = this.bookedSeats[index].concat(place);
          })
        }
      });

      this.changeDetectorRef.markForCheck();
    }, () => {})
  }
}
