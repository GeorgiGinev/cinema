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
import { CardComponent } from './components/boxes/card/card.component';
import { MovieService } from './resources/movies/movie.service';
import { CinemaService } from './resources/cinema/cinema.service';
import { CinemaComponent } from './components/boxes/cinema/cinema.component';
import { MovieComponent } from './components/boxes/movie/movie.component';
import { BreadcrumbsComponent } from './components/boxes/breadcrumbs/breadcrumbs.component';
import { BreadcrumbsService } from './components/boxes/breadcrumbs/breadcrumbs.service';
import { PaginationComponent } from './components/boxes/pagination/pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TitleComponent } from './components/typography/title/title.component';

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
    AvatarComponent,
    CardComponent,
    CinemaComponent,
    MovieComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
    NavigationService,
    TabsService,
    StorageService,
    AuthService,
    ToastService,
    UserService,
    MovieService,
    CinemaService,
    PageContainerService,
    DropdownService,
    PanelPageService,
    AlertService,
    BreadcrumbsService
  ],
  exports: [
    //Modules
    RouterModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NgxPaginationModule,
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
    AvatarComponent,
    CardComponent,
    CinemaComponent,
    MovieComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    TitleComponent
  ],
})
export class SharedModule { }
