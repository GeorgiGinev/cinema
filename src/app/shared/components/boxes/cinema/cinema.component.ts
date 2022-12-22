import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { Cinema } from 'src/app/shared/resources/cinema/cinema.service';
import { Sizes } from 'src/app/shared/types/sizes';

@Component({
  selector: 'ci-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CinemaComponent implements OnInit {
  @Input() cinema: Cinema;

  public sizes = Sizes;
  public iconsEnum = IonIcons;
  constructor() { }

  ngOnInit() {}

}
