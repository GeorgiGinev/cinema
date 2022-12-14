import { Component, OnInit } from '@angular/core';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { NavigationItem } from 'src/app/shared/interfaces/navigation-item';
import { User } from 'src/app/shared/resources/user/user.service';
import { SessionService } from 'src/app/shared/services/session/session.service';
import { Sizes } from 'src/app/shared/types/sizes';
import { PanelMenuService } from './menu.service';

@Component({
  selector: 'ci-panel-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public user: User;
  public sizesEnum = Sizes;
  public iconsEnum = IonIcons;

  public navigationItems: NavigationItem[];

  constructor(
    private sessionService: SessionService,
    private panelMenuService: PanelMenuService
  ) { }

  ngOnInit() {
    this.user = this.sessionService.user;

    this.navigationItems = this.panelMenuService.getNavigationItems();
  }
}
