import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { User, UserService } from 'src/app/shared/resources/user/user.service';
import { ModalService } from 'src/app/shared/services/modal/modal.service';
import { SessionService } from 'src/app/shared/services/session/session.service';
import { Shapes } from 'src/app/shared/types/shapes';
import { Sizes } from 'src/app/shared/types/sizes';

@Component({
  selector: 'app-public-site',
  templateUrl: './public-site.page.html',
  styleUrls: ['./public-site.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicSitePage {
  public user: User;
  public icons = IonIcons;
  public sizes = Sizes;
  public shapes = Shapes;

  public get isLoggedIn(): boolean {
    return Boolean(this.sessionService.token);
  }

  public logoutPromise: Promise<any>;

  constructor(
    private userService: UserService,
    private changeDetector: ChangeDetectorRef,
    private sessionService: SessionService
  ) {}

  /**
   * Trigger logout method from userService
   */
  public logout() {
    this.logoutPromise = this.userService.logout().then(() => {
      this.changeDetector.markForCheck();
    }, () => {});
  }

  /**
   * Open user profile in modal
   */
  public openProfile() {
    this.userService.openForm();
  }
}
