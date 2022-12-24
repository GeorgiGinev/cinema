import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: ':cinemaId',
    component: ViewComponent
  },
  {
    path: ':cinemaId/:movieId',
    component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CinemaPageRoutingModule {}
