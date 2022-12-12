import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth/auth.guard';
import { GuestGuard } from './shared/guards/guest/guest.guard';
import { SessionResolver } from './shared/resolvers/session.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: [SessionResolver],
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./modules/auth/auth.module').then((m) => m.AuthPageModule),
        canActivate: [GuestGuard],
      },
      // {
      //   path: 'intro',
      //   loadChildren: () =>
      //     import('./modules/intro/intro.module').then((m) => m.IntroPageModule),
      //     canActivate: [AuthGuard],
      // },
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardPageModule),
        canActivate: [AuthGuard]
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, 
      { preloadingStrategy: PreloadAllModules,
       }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
