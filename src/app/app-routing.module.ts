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
        loadChildren: () => import('./modules/public-site/public-site.module').then(m => m.PublicSitePageModule)
      },
      // {
      //   path: 'intro',
      //   loadChildren: () =>
      //     import('./modules/intro/intro.module').then((m) => m.IntroPageModule),
      //     canActivate: [AuthGuard],
      // },
      {
        path: 'panel',
        canActivate: [AuthGuard],
        loadChildren: () => import('./modules/panel/panel.module').then(m => m.PanelPageModule)
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
