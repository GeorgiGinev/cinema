import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelPage } from './panel.page';

const routes: Routes = [
  {
    path: '',
    component: PanelPage,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'movies',
        loadChildren: () => import('./movie/movie.module').then(m => m.MoviePageModule)
      },
      {
        path: 'cinemas',
        loadChildren: () => import('./cinema/cinema.module').then(m => m.CinemaPageModule)
      },
    ]
  },
  {
    path: 'cinema',
    loadChildren: () => import('./cinema/cinema.module').then( m => m.CinemaPageModule)
  },
  {
    path: 'movie',
    loadChildren: () => import('./movie/movie.module').then( m => m.MoviePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelPageRoutingModule { }
