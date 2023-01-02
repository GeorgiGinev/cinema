import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [ListComponent, ViewComponent, FormComponent],
  imports: [
    SharedModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
