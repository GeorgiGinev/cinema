import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DateFormatsEnum } from 'src/app/shared/enums/date-formats';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { JsonCollection } from 'src/app/shared/resources/collection/collection';
import { MovieSlot, MovieSlotService } from 'src/app/shared/resources/movie-slot/movie-slot.service';
import { Movie, MovieService } from 'src/app/shared/resources/movies/movie.service';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { FormService } from 'src/app/shared/services/form/form.service';
import { ModalService } from 'src/app/shared/services/modal/modal.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { Sizes } from 'src/app/shared/types/sizes';
import { PanelPageService } from '../../panel-page.service';
import { MovieSlotFormComponent } from '../movie-slot-form/movie-slot-form.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public movie: Movie;
  public formGroup: FormGroup;
  public dateFormats = DateFormatsEnum;
  public sizes = Sizes;

  public iconsEnum = IonIcons;

  public slots: JsonCollection<MovieSlot> = new JsonCollection<MovieSlot>();

  public createPromise: Promise<any>;

  constructor(
    private formBuilder: FormBuilder,
    private panelPageService: PanelPageService,
    private formService: FormService,
    private toastService: ToastService,
    private router: Router,
    private modalService: ModalService,
    private changeDetectorRef: ChangeDetectorRef,
    private movieSlotService: MovieSlotService,
    private movieService: MovieService
  ) { 
    this.createForm();
  }

  ngOnInit() {
    if(this.movie) {
      this.panelPageService.updateHeader('Edit Movie')
    } else {
      this.panelPageService.updateHeader('Add Movie')
    }
  }

  /**
   * Remove slot
   * @param event mouse event 
   * @param i index
   */
  public removeSlot(event: MouseEvent, i: number) {
    event.stopPropagation();
    
    this.movieSlotService.alertDeleteMessage().then(() => {
      this.removeSlotFromCollection(i);
    }, () => {})
  }

  /**
   * Edit slot
   */
  public editSlot(index: number) {
    this.modalService.openModal(MovieSlotFormComponent, {
      slot: this.slots.data[index]
    }).then((slot: MovieSlot | null | undefined) => {
      if(!slot) {
        this.removeSlotFromCollection(index);
        return;
      }
      this.slots.data[index] = slot;
      this.changeDetectorRef.markForCheck();
    }, () => {})
  }

  /** 
   * Add slot
  */
  public addMovieSlot(){
    this.modalService.openModal(MovieSlotFormComponent).then((slot: MovieSlot) => {
      this.slots.data.push(slot);
      this.changeDetectorRef.markForCheck();
    }, () => {})
  }

  public create() {
    this.formService.isValid(this.formGroup).then(() => {
      const movie = new Movie();
      movie.fillAttributes(this.formGroup.value);

      movie.attributes.image = this.formGroup.get('logo').value[0];

      this.slots.data.forEach((slot: MovieSlot) => {
        movie.addRelationship(slot, 'slots');
      })

      this.createPromise = this.movieService.save(movie).then(() => {
        this.toastService.success({
          header: 'The movie was successfully added',
        });

        this.router.navigate(['/panel/movies']).then(() => {}, () => {});
      }, () => {})
    }, () => {})
  }

  private createForm() {
    this.formGroup = this.formBuilder.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.maxLength(200)]],
      logo: [null]
    });
  }

  /**
   * Remove slot from the collection
   * @param i index
   */
  private removeSlotFromCollection(i: number) {
    this.slots.data = this.slots.data.filter((slot: MovieSlot, index: number) => index !== i);
          this.changeDetectorRef.markForCheck();
  }
}
