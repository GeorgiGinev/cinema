import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { NavigationItem } from 'src/app/shared/interfaces/navigation-item';
import { SelectItem } from 'src/app/shared/interfaces/select-item';
import { User, UserService } from 'src/app/shared/resources/user/user.service';
import { SessionService } from 'src/app/shared/services/session/session.service';
import { Shapes } from 'src/app/shared/types/shapes';
import { Sizes } from 'src/app/shared/types/sizes';
import { PanelPageService } from '../../shared/services/panel-page/panel-page.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.page.html',
  styleUrls: ['./panel.page.scss'],
})
export class PanelPage implements OnInit {
  public get pageName(): string {
    return this.panelPageService.headerName;
  }
  public get pageNameIcon(): IonIcons {
    return this.panelPageService.headerNameIcon;
  }
  public iconsEnum = IonIcons;
  public sizesEnum = Sizes;
  public shapeEnum = Shapes;

  public user: User;

  public navigationItems: NavigationItem[] = [
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
          action: () => {
            return this.logout();
          }
        },
      ]
    }
  ];
  
  public navItems: SelectItem[] = [
    {
      label: 'Profile',
      disabled: true,
      action: () => {},
      value: 'profile'
    },
    {
      label: 'To website',
      disabled: false,
      action: () => {
        this.router.navigate(['/home']);
      },
      value: 'website'
    },
    {
      label: 'Logout',
      disabled: false,
      class: 'panel-logout-select-option',
      action: async (event: MouseEvent) => {
        return this.logout();
      },
      value: 'logout'
    }
  ]

  constructor(
    private panelPageService: PanelPageService,
    private userService: UserService,
    private router: Router,
    private sessionService: SessionService,
  ) { }

  ngOnInit(): void {
    this.user = this.sessionService.user;
  }

  /**
   * Logout user
   */
  private async logout(): Promise<any> {
    await this.userService.logout();
    return Promise.resolve();
  }
}
