import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from './components/boxes/button/button.component';
import { SessionService } from './services/session/session.service';
import { HeaderComponent } from './components/page-container/header/header.component';
import { TabsComponent } from './components/navigation/tabs/tabs.component';
import { MenuComponent as PanelMenuComponent } from './components/panel-container/menu/menu.component';
import { HeaderComponent as PanelHeaderComponent } from './components/panel-container/header/header.component';
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
import { PanelContainerComponent } from './components/panel-container/panel-container.component';
import { PanelContainerService } from './components/panel-container/panel-container.service';
import { IconComponent } from './components/boxes/icon/icon.component';
import { IconButtonComponent } from './components/boxes/icon-button/icon-button.component';
import { DropdownComponent } from './components/boxes/dropdown/dropdown.component';
import { DropdownService } from './components/boxes/dropdown/dropdown.service';
import { SubtitleComponent } from './components/typography/subtitle/subtitle.component';
import { AvatarComponent } from './components/boxes/avatar/avatar.component';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    TabsComponent,
    MenuComponent,
    PageTitleComponent,
    ContentComponent,
    PageContainerComponent,
    PanelContainerComponent,
    PanelMenuComponent,
    IconComponent,
    PanelHeaderComponent,
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
    PanelContainerService,
    DropdownService
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
    PanelContainerComponent,
    IconComponent,
    PanelHeaderComponent,
    IconButtonComponent,
    DropdownComponent,
    SubtitleComponent,
    AvatarComponent
  ],
})
export class SharedModule { }
