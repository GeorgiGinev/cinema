import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Cinema } from 'src/app/shared/resources/cinema/cinema.service';
import * as cloneDeep from 'lodash/cloneDeep';
import { JsonCollection } from 'src/app/shared/resources/collection/collection';
import { JsonResource } from 'src/app/shared/resources/resource/resource.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { HttpClient } from '@angular/common/http';

@UntilDestroy()
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public topCinemas: JsonCollection<Cinema> = new JsonCollection<Cinema>();

  public formGroup: FormGroup;
  public loadData: boolean = true;

  public filters: {} = {};

  constructor(
    private formBuilder: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
    private httpClient: HttpClient
  ) { 
    this.createForm();
  }

  ngOnInit() {
    this.loadCinemas();
  }

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
      this.loadCinemas();
      this.changeDetectorRef.markForCheck();
      setTimeout(() => {
        this.loadData = false;
        this.changeDetectorRef.markForCheck();
      }, 2000)
    });
  }

  private loadCinemas() {
    this.httpClient.get('/allCinemas', {
      params: this.getFilters()
    }).pipe(untilDestroyed(this)).subscribe((cinemas: JsonCollection<Cinema>) => {
      this.topCinemas = cinemas;
      this.loadData = false;
      this.changeDetectorRef.markForCheck();
    });
  }

  private getFilters(): {} {
    const filters: {} = {};

    if (this.formGroup.get('keywords').value) {
      filters['keywords'] = this.formGroup.get('keywords').value;
    }

    return filters;
  }
}
