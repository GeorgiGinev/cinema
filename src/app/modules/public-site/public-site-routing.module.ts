import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestGuard } from 'src/app/shared/guards/guest/guest.guard';

import { PublicSitePage } from './public-site.page';

const routes: Routes = [
  {
    path: '',
    component: PublicSitePage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('../auth/auth.module').then((m) => m.AuthPageModule),
        canActivate: [GuestGuard],
      },
      {
        path: 'cinema',
        loadChildren: () => import('./cinema/cinema.module').then( m => m.CinemaPageModule)
      },
      {
        path: 'movie',
        loadChildren: () => import('./movie/movie.module').then( m => m.MovieModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicSitePageRoutingModule {}
