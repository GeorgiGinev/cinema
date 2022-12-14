import { NgModule } from '@angular/core';

import { PanelPageRoutingModule } from './panel-routing.module';

import { PanelPage } from './panel.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    PanelPageRoutingModule
  ],
  declarations: [PanelPage]
})
export class PanelPageModule {}
