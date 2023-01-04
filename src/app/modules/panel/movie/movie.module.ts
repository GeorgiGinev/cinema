import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

import { MoviePageRoutingModule } from './movie-routing.module';

@NgModule({
  imports: [
    MoviePageRoutingModule,
    SharedModule
  ],
  declarations: [ListComponent, FormComponent]
})
export class MoviePageModule {}
