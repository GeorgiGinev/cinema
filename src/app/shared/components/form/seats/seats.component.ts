import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { InputTypes } from 'src/app/shared/types/inputs';
import { Sizes } from 'src/app/shared/types/sizes';
import { BaseInput } from '../base-input';

@UntilDestroy()
@Component({
  selector: 'ci-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SeatsComponent
    }
  ]
})
export class SeatsComponent extends BaseInput implements OnInit {
  @Input() label: string;

  public seats: any = {};
  public insideFormGroup: FormGroup;
  public iconsEnum = IonIcons;
  public inputTypes = InputTypes;
  public sizes = Sizes;

  public seatsLength: number = 0;

  constructor(
    protected controlContainer: ControlContainer,
    private formBuilder: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super(controlContainer);

    this.createForm();
  }

  ngOnInit() {
    super.onInit();

    /**
     * Patch given value from form control
     */
    this.formControl.valueChanges.pipe(untilDestroyed(this)).subscribe((data: {}) => {
      this.seats = data;
      this.seatsLength = Object.keys(this.seats).length;
    });
  }

  public removeRow(index: number) {
    const newSeats = {};
    Object.keys(this.seats).forEach((key: string) => {
      if (Number(key) !== index) {
        const newSeatsLength = Object.keys(newSeats).length + 1;

        newSeats[newSeatsLength] = this.seats[key];
      }
    });

    this.seats = newSeats;
    this.seatsLength = Object.keys(this.seats).length;

    this.updateControl();
  }

  /**
   * Add row with number of seats in the object
   */
  public addRow() {
    if (this.insideFormGroup.valid && this.insideFormGroup.get('rowSeats').value > 0) {
      this.seatsLength = Object.keys(this.seats).length + 1;

      this.seats[this.seatsLength] = Number(this.insideFormGroup.get('rowSeats').value);

      this.insideFormGroup.get('rowSeats').patchValue(null);
    }

    this.seats = this.seats;

    this.updateControl();
  }

  private createForm() {
    this.insideFormGroup = this.formBuilder.group({
      rowSeats: [null]
    });
  }

  private updateControl() {
    this.formControl.patchValue(this.seats);
  }
}
