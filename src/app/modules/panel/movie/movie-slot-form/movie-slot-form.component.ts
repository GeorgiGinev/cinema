import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieSlot, MovieSlotService } from 'src/app/shared/resources/movie-slot/movie-slot.service';
import { FormService } from 'src/app/shared/services/form/form.service';
import { ModalService } from 'src/app/shared/services/modal/modal.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { InputTypes } from 'src/app/shared/types/inputs';

@Component({
  selector: 'app-movie-slot-form',
  templateUrl: './movie-slot-form.component.html',
  styleUrls: ['./movie-slot-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieSlotFormComponent implements OnInit {
  public inputTypes = InputTypes;
  public slot: MovieSlot;
  
  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService,
    private modalService: ModalService,
    private toastService: ToastService,
    private changeDetectorRef: ChangeDetectorRef,
    private movieSlotService: MovieSlotService
  ) { 
    this.createForm();
  }

  ngOnInit() {
    this.patchValuesFromObject();
  }

  /**
   * Remove movie slot
   */
  public remove() {
    this.movieSlotService.alertDeleteMessage().then(() => {
      this.modalService.closeModal();
    }, () => {})
  }

  /**
   * Save slot
   */
  public save() {
    this.formService.isValid(this.formGroup).then(() => {
      const movieSlot = new MovieSlot();
      movieSlot.fillAttributes(this.formGroup.value);

      movieSlot.addRelationship(this.formGroup.get('cinema').value, 'cinema');

      this.toastService.success({
        header: 'A slot was created.'
      });

      this.modalService.closeModal(movieSlot);
    }, () => {})
  }

  private createForm() {
    this.formGroup = this.formBuilder.group({
      date: [null, [Validators.required]],
      cinema: [null, [Validators.required]],
      price: [null, [Validators.required, Validators.min(1)]]
    })
  }

  /**
   * Patch values to form group if a slot resource is given
   */
  private patchValuesFromObject() {
    if(this.slot) {
      this.formGroup.get('date').patchValue(this.slot.attributes.date);
      this.formGroup.get('cinema').patchValue(this.slot.relationships.cinema);

      this.changeDetectorRef.markForCheck();
    }
  }
}
