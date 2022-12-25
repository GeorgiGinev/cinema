import { NgModule } from '@angular/core';

import { CinemaPageRoutingModule } from './cinema-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  imports: [
    SharedModule,
    CinemaPageRoutingModule,
    SwiperModule
  ],
  declarations: [ListComponent, ViewComponent]
})
export class CinemaPageModule {}
