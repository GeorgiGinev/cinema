import { NgModule } from '@angular/core';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [SharedModule, AuthPageRoutingModule],
  declarations: [AuthPage, LoginComponent, RegisterComponent],
})
export class AuthPageModule {}
