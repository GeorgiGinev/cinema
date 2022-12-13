import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { PredefinedColors } from '@ionic/core';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { Sizes } from 'src/app/shared/types/sizes';

@Component({
  selector: 'ci-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent implements OnInit {
  @Input() name: IonIcons;
  @Input() size: Sizes;
  @Input() color: PredefinedColors;

  constructor() { }

  ngOnInit() {}

}
