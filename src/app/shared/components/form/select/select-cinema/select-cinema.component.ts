import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Cinema, CinemaService } from 'src/app/shared/resources/cinema/cinema.service';
import { JsonCollection } from 'src/app/shared/resources/collection/collection';
import { BaseInput } from '../../base-input';
import * as cloneDeep from 'lodash/cloneDeep';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'ci-select-cinema',
  templateUrl: './select-cinema.component.html',
  styleUrls: ['./select-cinema.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SelectCinemaComponent
    } 
  ]
})
export class SelectCinemaComponent extends BaseInput implements OnInit {
  @Input() placeholder: string = 'Select cinemas';
  @Input() multiple: boolean = true;
  @Input() label: string = 'Cinemas';

  public collection: JsonCollection<Cinema> = new JsonCollection<Cinema>();

  constructor(
    protected controlContainer: ControlContainer,
    private cinemaService: CinemaService,
    private changeDetectorRef: ChangeDetectorRef
  ) { 
    super(controlContainer);
    this.loadCinemas();
  }

  ngOnInit() {
    super.onInit();
  }

  public getOptionLabel(option: Cinema, index: number) {
    return option.attributes.name;
  } 

  public getOptionValue(option: any, index: number) {
    return option;
  }

  private loadCinemas(){
    this.cinemaService.all().pipe(untilDestroyed(this)).subscribe((data: JsonCollection<Cinema>) => {
      this.collection = data;

      this.changeDetectorRef.markForCheck();
    });
  }
}
