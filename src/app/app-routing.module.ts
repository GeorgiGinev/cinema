import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './shared/guards/intro/intro.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomePageModule),
    canActivate: [IntroGuard],
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomePageModule),
    canActivate: [IntroGuard]
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthPageModule),
    canActivate: [IntroGuard]
  },
  {
    path: 'intro',
    loadChildren: () =>
      import('./modules/intro/intro.module').then((m) => m.IntroPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
