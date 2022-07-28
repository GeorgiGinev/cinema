import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from './components/boxes/button/button.component';
import { SessionService } from './services/session/session.service';
import { HeaderComponent } from './components/page/header/header.component';
import { TabsComponent } from './components/navigation/tabs/tabs.component';
import { MenuComponent } from './components/navigation/menu/menu.component';
import { NavigationService } from './services/navigation/navigation.service';
import { TabsService } from './services/tabs/tabs.service';
import { StorageService } from './services/storage/storage.service';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    TabsComponent,
    MenuComponent,
  ],
  imports: [CommonModule, FormsModule, IonicModule],
  providers: [SessionService, NavigationService, TabsService, StorageService],
  exports: [
    //Modules
    CommonModule,
    FormsModule,
    IonicModule,
    //Components
    ButtonComponent,
    HeaderComponent,
    TabsComponent,
    MenuComponent,
  ],
})
export class SharedModule {}