import { NgModule } from '@angular/core';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { SwiperModule  } from 'swiper/angular';

@NgModule({
  imports: [SharedModule, HomePageRoutingModule, SwiperModule],
  declarations: [HomePage],
})
export class HomePageModule {}
