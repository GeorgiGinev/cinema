import { Injectable } from '@angular/core';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { NavigationItem } from 'src/app/shared/interfaces/navigation-item';

@Injectable({
  providedIn: 'root'
})
export class PanelMenuService {
  private iconsEnum = IonIcons;
  private navigationItems: NavigationItem[] = [
    {
      label: 'Pages',
      children: [
        {
          label: 'Dashboard',
          icon: this.iconsEnum.dashboard,
          routerLink: '/panel/dashboard'
        },
        {
          label: 'Cinemas',
          icon: this.iconsEnum.dashboard,
          routerLink: '/panel/cinemas'
        },
        {
          label: 'Movies',
          icon: this.iconsEnum.dashboard,
          routerLink: '/panel/movies'
        }
      ]
    },
    {
      label: 'Support',
      children: [
        {
          label: 'Logout',
          icon: this.iconsEnum.logout,
          action: () => {}
        },
      ]
    }
  ]
  constructor() { }

  /**
   * Get access to navigation items
   * @returns 
   */
  public getNavigationItems(): NavigationItem[] {
    return this.navigationItems;
  }
}
