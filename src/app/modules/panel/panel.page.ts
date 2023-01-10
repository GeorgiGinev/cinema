import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { filter, pairwise } from 'rxjs/operators';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { NavigationItem } from 'src/app/shared/interfaces/navigation-item';
import { PanelPageHeaderInterface } from 'src/app/shared/interfaces/panel-page-header';
import { SelectItem } from 'src/app/shared/interfaces/select-item';
import { User, UserService } from 'src/app/shared/resources/user/user.service';
import { SessionService } from 'src/app/shared/services/session/session.service';
import { Shapes } from 'src/app/shared/types/shapes';
import { Sizes } from 'src/app/shared/types/sizes';
import { PanelPageService } from './panel-page.service';

@UntilDestroy()
@Component({
  selector: 'app-panel',
  templateUrl: './panel.page.html',
  styleUrls: ['./panel.page.scss']
})
export class PanelPage implements OnInit {
  public pageName: string;
  public pageNameIcon: IonIcons;

  public iconsEnum = IonIcons;
  public sizesEnum = Sizes;
  public shapeEnum = Shapes;

  public user: User;

  public navigationItems: NavigationItem[] = [
    {
      label: 'Pages',
      action: () => { },
      children: [
        {
          label: 'Dashboard',
          icon: this.iconsEnum.dashboard,
          routerLink: '/panel/dashboard',
          action: () => { }
        },
        {
          label: 'Cinemas',
          icon: this.iconsEnum.dashboard,
          routerLink: '/panel/cinemas',
          action: () => { }
        },
        {
          label: 'Movies',
          icon: this.iconsEnum.dashboard,
          routerLink: '/panel/movies',
          action: () => { }
        }
      ]
    },
    {
      label: 'Support',
      action: () => { },
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
      action: () => { },
      value: 'profile'
    },
    {
      label: 'To website',
      disabled: false,
      action: () => {
        this.router.navigate(['/home']).then(() => {}, () => {});
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

  public currentUrl: string;
  public previousUrl: string;

  constructor(
    private panelPageService: PanelPageService,
    private userService: UserService,
    private router: Router,
    private sessionService: SessionService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.user = this.sessionService.user;
    console.log('panel init : ', this.user);
    this.currentUrl = this.router.url;
    this.generatePrevRoutes(this.currentUrl);

    /**
     * Create subscriber to listen if panel header information is updated
     */
    this.panelPageService.headerObservable.subscribe((data: PanelPageHeaderInterface) => {
      this.pageName = data.title;
      if (data.icon) {
        this.pageNameIcon = data.icon;
      } else {
        this.pageNameIcon = null;
      }

      this.changeDetectorRef.detectChanges();
    });

    this.router.events.subscribe((data: any) => {
      this.generatePrevRoutes(this.router.url);
    })
  }

  /**
   * Generate prev routes
   */
  private generatePrevRoutes(route: string) {
    const routes = route.split('/');
    if(routes.length > 3) {
      this.previousUrl = '';
      for(let i = 1; i < routes.length - 1; i++) {
        this.previousUrl += '/' + routes[i];
      }

    } else {
      this.previousUrl = null;
    }
  }

  /**
   * Open user profile form
   */
  public openProfile() {
    this.userService.openForm().then(() => {

    }, () => { })
  }

  /**
   * Logout user
   */
  private async logout(): Promise<any> {
    await this.userService.logout();
    return Promise.resolve();
  }
}
