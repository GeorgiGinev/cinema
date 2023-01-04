import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseInput } from '../base-input';

@Component({
  selector: 'ci-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SearchComponent
    } 
  ]
})
export class SearchComponent extends BaseInput implements OnInit {
  
  constructor(
    protected controlContainer: ControlContainer
  ) { 
    super(controlContainer);
  }

  ngOnInit() {
    super.onInit();
  }
}
