import { NgModule } from '@angular/core';

import { MoviePageRoutingModule } from './movie-routing.module';

import { MoviePage } from './movie.page';

@NgModule({
  imports: [
    MoviePageRoutingModule
  ],
  declarations: [MoviePage]
})
export class MoviePageModule {}
