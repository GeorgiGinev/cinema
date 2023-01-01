import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { CinemaPageRoutingModule } from './cinema-routing.module';

import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CinemaPageRoutingModule,
    SharedModule
  ],
  declarations: [ListComponent, FormComponent]
})
export class CinemaPageModule {}
