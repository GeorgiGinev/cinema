import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from './components/boxes/button/button.component';
import { SessionService } from './services/session/session.service';
import { HeaderComponent } from './components/page/header/header.component';
import { TabsComponent } from './components/navigation/tabs/tabs.component';
import { MenuComponent } from './components/navigation/menu/menu.component';
import { NavigationService } from './services/navigation/navigation.service';
import { TabsService } from './services/tabs/tabs.service';
import { StorageService } from './services/storage/storage.service';
import { AuthService } from './services/auth/auth.service';
import { ToastService } from './services/toast/toast.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpXsrfInterceptor } from './classes/http-xsrf-interceptor/http-xsrf-interceptor';
import { CsrfService } from './services/csrf/csrf.service';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    TabsComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    CsrfService,
    {
      provide: APP_INITIALIZER,
      useFactory: (csrfService: CsrfService) => () => csrfService.load(),
      deps: [CsrfService],
      multi: true,
    },
    SessionService,
    NavigationService,
    TabsService,
    StorageService,
    AuthService,
    ToastService,
  ],
  exports: [
    //Modules
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    //Components
    ButtonComponent,
    HeaderComponent,
    TabsComponent,
    MenuComponent,
  ],
})
export class SharedModule {}
