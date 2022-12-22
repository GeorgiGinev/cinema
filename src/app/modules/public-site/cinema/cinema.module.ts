import { NgModule } from '@angular/core';

import { CinemaPageRoutingModule } from './cinema-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListComponent } from './list/list.component';


@NgModule({
  imports: [
    SharedModule,
    CinemaPageRoutingModule
  ],
  declarations: [ListComponent]
})
export class CinemaPageModule {}
