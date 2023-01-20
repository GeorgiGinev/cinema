import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseInput } from '../base-input';
import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'ci-select-seats',
  templateUrl: './select-seats.component.html',
  styleUrls: ['./select-seats.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SelectSeatsComponent
    }
  ]
})
export class SelectSeatsComponent extends BaseInput implements OnInit {
  @Input() label: string;
  @Input() seats: {};
  @Input() bookedSeats: number[][] = [[]];

  constructor(
    protected controlContainer: ControlContainer
  ) {
    super(controlContainer)
  }

  ngOnInit() {
    super.onInit();
  }

  /**
   * Get movie seats rows
   * @returns 
   */
  public getSeatsRows(): number {
    return Object.keys(this.seats).length;
  }

  /**
   * Get movie seats in a row
   * @param index of a row
   * @returns 
   */
  public getSeatsInARow(index: number): number {
    return Number(this.seats[index + 1]);
  }

  /**
   * Select seat
   * @param rowIndex number of the row  
   * @param seatIndex number of the seat
   */
  public selectSeatEvent(rowIndex: number, seatIndex: number) {
    if (this.isSeatAlreadyBooked(rowIndex, seatIndex)) {
      return;
    }

    if(this.isSeatAlreadySelected(rowIndex, seatIndex)) {
      this.unselectASeat(rowIndex, seatIndex);
      return;
    }

    const seat = seatIndex + 1;

    let booking: number[][] | null | undefined = this.formControl.value;

    if (!booking) {
      booking = new Array(Object.keys(this.seats).length);
      for(let i = 0; i < booking.length; i++) {
        booking[i] = [];
      }
    }

    if(!booking[rowIndex]) {
      booking[rowIndex] = [];
    }

    booking[rowIndex].push(seat);

    this.formControl.patchValue(booking);
  }

  /**
   * Checks if the booked place is already booked
   * @param rowIndex number of the row  
   * @param seatIndex number of the seat
   */
  public isSeatAlreadySelected(rowIndex: number, seatIndex: number): boolean {
    const selectedSeats: number[][] | null | undefined = this.formControl.value;
    const row = rowIndex + 1;
    const seat = seatIndex + 1;

    if(!selectedSeats) {
      return false;
    }

    return Boolean(selectedSeats.find((bookedRow: number[], index: number) => {
      if(!bookedRow) {
        return;
      }

      return bookedRow.find((bookedSeat: number) => bookedSeat === seat) && index + 1 === row
    }));;
  }

  /**
   * Checks if the selected place is already booked
   * @param rowIndex number of the row  
   * @param seatIndex number of the seat
   */
  public isSeatAlreadyBooked(rowIndex: number, seatIndex: number): boolean {
    if(!this.bookedSeats) {
      return false;
    }
    
    const row = rowIndex + 1;
    const seat = seatIndex + 1;

    return Boolean(this.bookedSeats.find((bookedRow: number[], index: number) => bookedRow.find((bookedSeat: number) => bookedSeat === seat) && index + 1 === row));
  }

  /**
   * Unselect a seat
   * @param rowIndex number of the row  
   * @param seatIndex number of the seat
   */
  private unselectASeat(rowIndex: number, seatIndex: number) {
    const selectedSeats: number[][] | null | undefined = this.formControl.value;

    const newSelectedSeats = selectedSeats[rowIndex].filter((selectedSeat: number) => {
      if(selectedSeat !== seatIndex+1) {
        return selectedSeat;
      }
    });

    selectedSeats[rowIndex] = newSelectedSeats;

    this.formControl.patchValue(selectedSeats);
  }
}
