import {  ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { PanelPageService } from '../panel-page.service';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { DayjsService } from 'src/app/shared/services/dayjs/dayjs.service';
import { DateFormatsEnum } from 'src/app/shared/enums/date-formats';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPage implements OnInit {
  private iconsEnum = IonIcons;

  @ViewChild('BaseChartDirective') bookings: BaseChartDirective;
 
  public barChartOptions: ChartConfiguration['options'] = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 1
      }
    },
    plugins: {
      legend: {
        display: false,
      },
    }
  };

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
    }
  };

  public barChartType: ChartType = 'bar';
  public pieChartType: ChartType = 'pie';

  public barChartData: ChartData<'bar'> = {
    labels: [  ],
    datasets: [
      { 
        data: [ 65, 59, 456, 81, 800, 55, 40 ], 
        backgroundColor: [
          "rgb(255,73,97)", 
          "rgb(106,100,255)", 
          "rgb(47,223,117)", 
          "rgb(106,100,255)", 
          "rgb(255,73,97)",
          "rgb(106,100,255)",
          "rgb(255,73,97)",
        ],
      },
    ],
  };

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [  ],
    datasets: [ {
      data: [ 300, 461, 100, 65 ]
    } ]
  };

  constructor(
    private panelPageService: PanelPageService,
    private dayJsService: DayjsService
  ) { }

  ngOnInit() {
    this.panelPageService.updateHeader('Dashboard', this.iconsEnum.dashboard);

    this.generateDays();
    this.addMoviesToPieChart();
  }

  /**
   * Generate days for bar chart
   */
  private generateDays() {
    let currentDay = this.dayJsService.dayJs();
    const weekAgo = this.dayJsService.dayJs().subtract(7, 'day');

    while(currentDay.isAfter(weekAgo)) {
      this.barChartData.labels.push(currentDay.format(DateFormatsEnum.date));
      
      currentDay = currentDay.subtract(1, 'day');
    }

    this.barChartData.labels.reverse();
  }

  private addMoviesToPieChart() {
    this.pieChartData.labels.push('Spiderman');
    this.pieChartData.labels.push('Ginny & Georgia');
    this.pieChartData.labels.push('Batman');
    this.pieChartData.labels.push('Joy');
  }
}
