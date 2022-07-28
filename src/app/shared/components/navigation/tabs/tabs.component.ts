import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavigationService } from 'src/app/shared/services/navigation/navigation.service';

@Component({
  selector: 'ci-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
  constructor(
    private menu: MenuController,
    private navigationService: NavigationService
  ) {}

  openMenu() {
    this.menu.open(this.navigationService.contentId);
  }
}
