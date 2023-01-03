import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Sizes } from 'src/app/shared/types/sizes';

@Component({
  selector: 'ci-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent {
  @Input() img: string;
  @Input() clickable: boolean;
  @Input() size: Sizes = Sizes.default;

  constructor() { }
}
