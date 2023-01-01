import { NgModule } from '@angular/core';

import { PanelPageRoutingModule } from './panel-routing.module';

import { PanelPage } from './panel.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { PanelPageService } from './panel-page.service';

@NgModule({
  imports: [
    SharedModule,
    PanelPageRoutingModule
  ],
  providers: [PanelPageService],
  declarations: [PanelPage]
})
export class PanelPageModule {}
