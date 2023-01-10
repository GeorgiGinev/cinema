import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { IonIcons } from '../../enums/ion-icons';
import { NavigationItem } from '../../interfaces/navigation-item';
import { UserService } from '../../resources/user/user.service';
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  public get items(): NavigationItem[] {
    if(this.sessionService.token) {
      return this._authNavigationItems;
    }

    return this._navigationItems;
  }

  private readonly _contentId: string = 'main-navigation';
  private readonly _id: string = 'main-navigation';

  private readonly _title: string = 'Navigation';
  private _authNavigationItems: NavigationItem[] = [
    {
      label: 'Dashboard',
      icon: IonIcons.dashboard,
      action: () => {
        this.router.navigate(['/dashboard']).then(() => {}, () => {});
      },
    },
    {
      label: 'Sign Out',
      icon: IonIcons.logout,
      action: () => {
        this.userService.logout();
        this.menuController.close();
      },
    },
  ];
  private _navigationItems: NavigationItem[] = [
    {
      label: 'Home',
      icon: IonIcons.home,
      action: () => {
        this.router.navigate(['/home']).then(() => {}, () => {});
      },
    },
    {
      label: 'Sign In',
      icon: IonIcons.login,
      action: () => {
        this.router.navigate(['/auth/login']).then(() => {}, () => {});
      },
    },
    {
      label: 'Sign Up',
      icon: IonIcons.register,
      action: () => {
        this.router.navigate(['/auth/register']).then(() => {}, () => {});
      },
    },
  ];

  constructor(
    private router: Router,
    private sessionService: SessionService,
    private userService: UserService,
    private menuController: MenuController
  ) {}

  public get id(): string {
    return this._id;
  }

  public get contentId(): string {
    return this._contentId;
  }

  public get title(): string {
    return this._title;
  }
}
