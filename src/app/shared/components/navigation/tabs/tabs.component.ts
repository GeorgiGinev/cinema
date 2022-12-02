import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TabItem } from 'src/app/shared/interfaces/tab-item';
import { TabsService } from 'src/app/shared/services/tabs/tabs.service';

@Component({
  selector: 'ci-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  public get tabs(): TabItem[] {
    return this.tabsService.tabItems;
  }

  constructor(private tabsService: TabsService) {}
}
