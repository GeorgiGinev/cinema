import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from './components/boxes/button/button.component';
import { SessionService } from './services/session/session.service';
import { HeaderComponent } from './components/page-container/header/header.component';
import { TabsComponent } from './components/navigation/tabs/tabs.component';
import { MenuComponent } from './components/navigation/menu/menu.component';
import { NavigationService } from './services/navigation/navigation.service';
import { TabsService } from './services/tabs/tabs.service';
import { StorageService } from './services/storage/storage.service';
import { AuthService } from './services/auth/auth.service';
import { ToastService } from './services/toast/toast.service';
import { UserService } from './resources/user/user.service';
import { PageTitleComponent } from './components/typography/page-title/page-title.component';
import { ContentComponent } from './components/page-container/content/content.component';
import { RouterModule } from '@angular/router';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { PageContainerService } from './services/page-container/page-container.service';
@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    TabsComponent,
    MenuComponent,
    PageTitleComponent,
    ContentComponent,
    PageContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    SessionService,
    NavigationService,
    TabsService,
    StorageService,
    AuthService,
    ToastService,
    UserService,
    PageContainerService
  ],
  exports: [
    //Modules
    RouterModule,
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
    ContentComponent,
    PageContainerComponent
  ],
})
export class SharedModule { }
