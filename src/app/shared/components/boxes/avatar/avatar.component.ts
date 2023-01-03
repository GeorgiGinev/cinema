import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Sizes } from 'src/app/shared/types/sizes';

@Component({
  selector: 'ci-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent {
  @Input() img: string | SafeResourceUrl;
  @Input() clickable: boolean;
  @Input() size: Sizes = Sizes.default;

  constructor() { }
}
