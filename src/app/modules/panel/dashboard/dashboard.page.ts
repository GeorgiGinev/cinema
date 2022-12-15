import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { PanelPageService } from '../../../shared/services/panel-page/panel-page.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPage implements OnInit {
  private iconsEnum = IonIcons;

  constructor(
    private panelPageService: PanelPageService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.panelPageService.headerName = 'Dashboard';
    this.panelPageService.headerNameIcon = this.iconsEnum.dashboard;
  }

}
