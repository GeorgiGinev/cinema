import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime } from 'rxjs/operators';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { Cinema, CinemaService } from 'src/app/shared/resources/cinema/cinema.service';
import { JsonCollection } from 'src/app/shared/resources/collection/collection';
import { PanelPageService } from '../../panel-page.service';

@UntilDestroy()
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public iconsEnum = IonIcons;
  public formGroup: FormGroup;

  public loadData: boolean = false;
  public data: any[] = [];

  constructor(
    private panelPageService: PanelPageService,
    private formBuilder: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
    private cinemaService: CinemaService
  ) { 
    this.createForm();
  }

  ngOnInit() {
    this.panelPageService.updateHeader('Your cinemas');
    this.getCinemasCollection();
  }

  private getCinemasCollection () {
    this.cinemaService.all().subscribe((data: JsonCollection<Cinema>) => {
      console.log('cinema');
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
    this.formGroup.get('keywords').valueChanges.pipe(debounceTime(500), untilDestroyed(this)).subscribe(() => {
      this.loadData = true;
      this.changeDetectorRef.markForCheck();
      setTimeout(() => {
        this.loadData = false;
        this.changeDetectorRef.markForCheck();
      }, 2000)
    });
  }
}
