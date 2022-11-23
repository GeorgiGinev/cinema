import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnChanges } from '@angular/core';
import { PredefinedColors } from '@ionic/core';
import { Sizes } from '../../../types/sizes';

@Component({
  selector: 'ci-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnChanges {
  @Input() color: PredefinedColors;
  @Input() size: Sizes;
  @Input() promise: Promise<any>;

  private showLoadingEffect = false;

  @HostBinding('class.has-promise') get promiseWrapper() {
    return this.showLoadingEffect;
  }

  constructor(
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnChanges() {
    /**
     * Check if promise is given and show loading effect
     */
    if(this.promise) {
      console.log('promise change');
      this.showLoadingEffect = true;

      this.promise.then(() => {
        this.showLoadingEffect = false;
        this.changeDetector.markForCheck();
      }, () => {});
    }
  }
}
