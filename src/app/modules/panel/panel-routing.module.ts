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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelPageRoutingModule { }
