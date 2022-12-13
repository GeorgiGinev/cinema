import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { IonSelect } from '@ionic/angular';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { SelectItem } from 'src/app/shared/interfaces/select-item';
import { UserService } from 'src/app/shared/resources/user/user.service';
import { Shapes } from 'src/app/shared/types/shapes';
import { Sizes } from 'src/app/shared/types/sizes';
import { PanelContainerService } from '../panel-container.service';

@Component({
  selector: 'ci-panel-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public pageName: string;
  public pageNameIcon: IonIcons;
  public iconsEnum = IonIcons;
  public sizeEnum = Sizes;
  public shapeEnum = Shapes;

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
        await this.userService.logout();
        return Promise.resolve();
      },
      value: 'logout'
    }
  ]

  constructor(
    private panelContainerService: PanelContainerService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    /**
     * Set panel header data
     */
    this.pageName = this.panelContainerService.headerName;
    this.pageNameIcon = this.panelContainerService.headerNameIcon;
  }
}
