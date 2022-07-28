import { Component } from '@angular/core';
import { Sizes } from '../../shared/types/sizes';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public buttonSizes = Sizes;

  constructor() {}
}
