import { NgModule } from '@angular/core';

import { CinemaPageRoutingModule } from './cinema-routing.module';

import { CinemaPage } from './cinema.page';

@NgModule({
  imports: [
    CinemaPageRoutingModule
  ],
  declarations: [CinemaPage]
})
export class CinemaPageModule {}
