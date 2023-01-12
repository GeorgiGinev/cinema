import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime } from 'rxjs/operators';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { Cinema, CinemaService } from 'src/app/shared/resources/cinema/cinema.service';
import { JsonCollection } from 'src/app/shared/resources/collection/collection';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { Sizes } from 'src/app/shared/types/sizes';
import { PanelPageService } from '../../panel-page.service';

@UntilDestroy()
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public cinemas: JsonCollection<Cinema> = new JsonCollection<Cinema>();
  public iconsEnum = IonIcons;
  public formGroup: FormGroup;
  public sizes = Sizes;

  public loadData: boolean = true;
  public data: any[] = [];

  public filters: {} = {};

  public withTrashed: boolean = false;

  constructor(
    private panelPageService: PanelPageService,
    private formBuilder: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
    private cinemaService: CinemaService,
    private alertService: AlertService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.panelPageService.updateHeader('Your cinemas', IonIcons.cinema);
    this.getCinemasCollection();
  }

  /**
   * Restore the Cinema
   * @param cinema resource
   */
  public restoreCinema(cinema: Cinema) { 
    this.cinemaService.restoreCinema(cinema.id).then(() => {
      this.getCinemasCollection();
    }); 
  }

  /**
   * Delete cinemas
   * @param cinema 
   */
  public deleteCinema(cinema: Cinema) {
    this.cinemaService.deleteCinema(cinema.id).then(() => {
      this.getCinemasCollection();
    }, () => {});
  }

  public loadOnlyTrashedData() {
    this.withTrashed = !this.withTrashed;

    this.getCinemasCollection();
  }

  private getCinemasCollection() {
    this.cinemaService.all(this.getFilters()).pipe(untilDestroyed(this)).subscribe((data: JsonCollection<Cinema>) => {
      this.cinemas = data;

      this.loadData = false;
    });
  }

  /**
   * Create form for the searchbar
   */
  private createForm() {
    this.formGroup = this.formBuilder.group({
      keywords: [null]
    });

    this.createControlChangeListener();
  }

  /**
   * Add searchbar control change listener
   */
  private createControlChangeListener() {
    this.formGroup.get('keywords').valueChanges.pipe(debounceTime(500), untilDestroyed(this)).subscribe((keywords: string) => {
      this.loadData = true;

      this.getCinemasCollection();

      this.changeDetectorRef.markForCheck();

      setTimeout(() => {
        this.loadData = false;
        this.changeDetectorRef.markForCheck();
      }, 2000)
    });
  }

  private getFilters(): {} {
    const filters: {} = {};

    if (this.formGroup.get('keywords').value) {
      filters['keywords'] = this.formGroup.get('keywords').value;
    }

    if (this.withTrashed) {
      filters['with_trashed'] = true;
    }

    return filters;
  }
}
