import { NgModule } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { SharedModule } from 'src/app/shared/shared.module';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';

@NgModule({
  imports: [
    DashboardPageRoutingModule,
    SharedModule,
    NgChartsModule.forRoot()
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
