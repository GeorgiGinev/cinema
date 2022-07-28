import { NgModule } from '@angular/core';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [SharedModule, AuthPageRoutingModule],
  declarations: [AuthPage],
})
export class AuthPageModule {}
