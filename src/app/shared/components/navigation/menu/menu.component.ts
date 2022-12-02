import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationItem } from 'src/app/shared/interfaces/navigation-item';
import { NavigationService } from 'src/app/shared/services/navigation/navigation.service';

@Component({
  selector: 'ci-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public get navigationId(): string {
    return this.navigationService.id;
  }

  public get navigationContentId(): string {
    return this.navigationService.contentId;
  }

  public get navigationTitle(): string {
    return this.navigationService.title;
  }

  public get items(): NavigationItem[] {
    return this.navigationService.items;
  }

  constructor(private navigationService: NavigationService) {}
}
