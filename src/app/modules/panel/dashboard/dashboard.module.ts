import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';

@NgModule({
  imports: [
    DashboardPageRoutingModule,
    SharedModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
