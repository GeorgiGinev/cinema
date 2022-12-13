import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { PredefinedColors } from '@ionic/core';
import { Shapes } from 'src/app/shared/types/shapes';
import { Sizes } from 'src/app/shared/types/sizes';

@Component({
  selector: 'ci-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconButtonComponent implements OnInit {
  @Input() public color: PredefinedColors;
  @Input() public shape: Shapes;
  @Input() public size: Sizes;

  constructor() { }

  ngOnInit() {}

}
