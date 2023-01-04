import { NgModule } from '@angular/core';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';

@NgModule({
  imports: [SharedModule, AuthPageRoutingModule],
  declarations: [AuthPage, LoginComponent, RegisterComponent, ProfileComponent, ChangePasswordComponent],
})
export class AuthPageModule {}
