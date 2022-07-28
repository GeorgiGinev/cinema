import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PredefinedColors } from '@ionic/core';
import { Sizes } from '../../../types/sizes';

@Component({
  selector: 'ci-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() color: PredefinedColors;
  @Input() size: Sizes;

  constructor() {}
}
