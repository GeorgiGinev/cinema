import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationItem } from 'src/app/shared/interfaces/navigation-item';
import { NavigationService } from 'src/app/shared/services/navigation/navigation.service';

@Component({
  selector: 'ci-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  public navigationId: string;
  public navigationContentId: string;
  public navigationTitle: string;
  public items: NavigationItem[];

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navigationId = this.navigationService.id;
    this.navigationContentId = this.navigationService.contentId;

    this.items = this.navigationService.items;
    this.navigationTitle = this.navigationService.title;
  }
}
