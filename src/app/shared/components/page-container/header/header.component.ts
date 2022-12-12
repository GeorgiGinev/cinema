import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { User, UserService } from 'src/app/shared/resources/user/user.service';
import { SessionService } from 'src/app/shared/services/session/session.service';
import { Shapes } from 'src/app/shared/types/shapes';
import { Sizes } from 'src/app/shared/types/sizes';

@Component({
  selector: 'ci-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public user: User;
  public icons = IonIcons;
  public sizes = Sizes;
  public shapes = Shapes;

  public isLoggedIn: boolean;

  public logoutPromise: Promise<any>;

  constructor(
    private userService: UserService,
    private changeDetector: ChangeDetectorRef,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = Boolean(this.sessionService.token);
  }

  /**
   * Trigger logout method from userService
   */
  public logout() {
    this.logoutPromise = this.userService.logout().then(() => {
      this.changeDetector.markForCheck();
    }, () => {});
  }
}
