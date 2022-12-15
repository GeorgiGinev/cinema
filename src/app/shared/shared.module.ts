import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from './components/boxes/button/button.component';
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
import { IconComponent } from './components/boxes/icon/icon.component';
import { IconButtonComponent } from './components/boxes/icon-button/icon-button.component';
import { DropdownComponent } from './components/boxes/dropdown/dropdown.component';
import { DropdownService } from './components/boxes/dropdown/dropdown.service';
import { SubtitleComponent } from './components/typography/subtitle/subtitle.component';
import { AvatarComponent } from './components/boxes/avatar/avatar.component';
import { PanelPageService } from './services/panel-page/panel-page.service';
import { AlertService } from './services/alert/alert.service';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    TabsComponent,
    MenuComponent,
    PageTitleComponent,
    ContentComponent,
    PageContainerComponent,
    IconComponent,
    IconButtonComponent,
    DropdownComponent,
    SubtitleComponent,
    AvatarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    NavigationService,
    TabsService,
    StorageService,
    AuthService,
    ToastService,
    UserService,
    PageContainerService,
    DropdownService,
    PanelPageService,
    AlertService,
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
    PageContainerComponent,
    IconComponent,
    IconButtonComponent,
    DropdownComponent,
    SubtitleComponent,
    AvatarComponent
  ],
})
export class SharedModule { }
