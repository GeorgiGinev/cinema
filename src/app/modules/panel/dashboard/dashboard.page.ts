import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { PanelPageService } from '../panel-page.service';
import Chart, { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPage implements OnInit, AfterViewInit {
  private iconsEnum = IonIcons;

  @ViewChild('BaseChartDirective') bookings: BaseChartDirective;
 
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    }
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ],
    datasets: [ {
      data: [ 300, 500, 100 ]
    } ]
  };
  public pieChartType: ChartType = 'pie';

  constructor(
    private panelPageService: PanelPageService
  ) { }

  ngOnInit() {
    this.panelPageService.updateHeader('Dashboard', this.iconsEnum.dashboard);
  }

  ngAfterViewInit(): void {
    
  }
}
