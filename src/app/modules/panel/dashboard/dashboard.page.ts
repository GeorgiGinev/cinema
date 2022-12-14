import { Component, OnInit } from '@angular/core';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { PanelPageService } from '../panel-page.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  private iconsEnum = IonIcons;

  constructor(
    private panelPageService: PanelPageService
  ) { }

  ngOnInit() {
    console.log('dashboard init');
    this.panelPageService.headerName = 'Dashboard';
    this.panelPageService.headerNameIcon = this.iconsEnum.dashboard;
  }

}
