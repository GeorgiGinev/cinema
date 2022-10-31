import { NgModule } from '@angular/core';
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
import {UserService} from './resources/user/user.service';
import { PageTitleComponent } from './components/typography/page-title/page-title.component';
import { ContentComponent } from './components/page/content/content.component';
@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    TabsComponent,
    MenuComponent,
    PageTitleComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ],
  providers: [
    SessionService,
    NavigationService,
    TabsService,
    StorageService,
    AuthService,
    ToastService,
    UserService
  ],
  exports: [
    //Modules
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    //Components
    ButtonComponent,
    HeaderComponent,
    TabsComponent,
    MenuComponent,
    PageTitleComponent,
    ContentComponent
  ],
})
export class SharedModule {}
