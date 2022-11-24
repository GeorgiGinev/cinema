import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { TabItem } from '../../interfaces/tab-item';
import { NavigationService } from '../navigation/navigation.service';
import { SessionService } from '../session/session.service';

@Injectable()
export class TabsService {
  public get tabItems(): TabItem[] {
    if (this.sessionService.token) {
      return this._authTabs;
    }

    return this._unAuthTabs;
  }

  private _authTabs: TabItem[] = [
    {
      label: 'Home',
      icon: 'home-outline',
      action: () => {
        this.router.navigate(['/home']);
      },
    },
    {
      label: 'Menu',
      icon: 'menu',
      action: () => {
        this.menu.open(this.navigationService.contentId);
      },
    },
  ];
  private _unAuthTabs: TabItem[] = [
    {
      label: 'Sign In',
      icon: 'log-in-outline',
      action: () => {
        this.router.navigate(['/auth/login']);
      },
    },
    {
      label: 'Sign Up',
      icon: 'download-outline',
      action: () => {
        this.router.navigate(['/auth/register']);
      },
    },
    {
      label: 'Menu',
      icon: 'menu',
      action: () => {
        this.menu.open(this.navigationService.contentId);
      },
    },
  ];

  constructor(
    private sessionService: SessionService,
    private menu: MenuController,
    private navigationService: NavigationService,
    private router: Router
  ) {}
}
