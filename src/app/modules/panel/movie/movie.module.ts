import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

import { MoviePageRoutingModule } from './movie-routing.module';
import { MovieSlotFormComponent } from './movie-slot-form/movie-slot-form.component';

@NgModule({
  imports: [
    MoviePageRoutingModule,
    SharedModule
  ],
  declarations: [ListComponent, FormComponent, MovieSlotFormComponent]
})
export class MoviePageModule {}
