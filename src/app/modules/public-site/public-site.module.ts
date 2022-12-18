import { NgModule } from '@angular/core';

import { PublicSitePageRoutingModule } from './public-site-routing.module';

import { PublicSitePage } from './public-site.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    PublicSitePageRoutingModule
  ],
  declarations: [PublicSitePage]
})
export class PublicSitePageModule {}
