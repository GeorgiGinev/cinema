import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DayjsService } from 'src/app/shared/services/dayjs/dayjs.service';
import { BaseInput } from '../base-input';

@Component({
  selector: 'ci-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: DatetimeComponent
    }
  ]
})
export class DatetimeComponent extends BaseInput implements OnInit {
  @Input() label: string;
  @Input() onlyDate: boolean = false;

  public date: string;

  constructor(
    protected contorlContainer: ControlContainer,
    private dayJsService: DayjsService,
  ) { 
    super(contorlContainer);
  }

  ngOnInit() {
    super.onInit();

    if(this.formControl.value) {
      this.date = this.dayJsService.dayJs().toISOString();
    }

    this.formControl.valueChanges.pipe().subscribe((data: any) => {
      this.date = this.dayJsService.dayJs(data).toISOString();
    });
  }

  /**
   * Model change event listener
   */
  public onChangeEvent() {
    this.formControl.patchValue(this.date);
  }
}
