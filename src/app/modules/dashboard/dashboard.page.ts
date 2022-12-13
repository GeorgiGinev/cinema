import { Component, OnInit } from '@angular/core';
import { PanelContainerService } from 'src/app/shared/components/panel-container/panel-container.service';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { PageContainerService } from 'src/app/shared/services/page-container/page-container.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  private iconsEnum = IonIcons;

  constructor(
    private panelContainerService: PanelContainerService
  ) { }

  ngOnInit() {
    this.panelContainerService.headerName = 'Dashboard';
    this.panelContainerService.headerNameIcon = this.iconsEnum.dashboard;
  }

}
