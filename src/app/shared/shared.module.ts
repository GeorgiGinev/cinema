import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from './components/boxes/button/button.component';
import { TabsComponent } from './components/navigation/tabs/tabs.component';
import { MenuComponent } from './components/navigation/menu/menu.component';
import { NavigationService } from './services/navigation/navigation.service';
import { TabsService } from './services/tabs/tabs.service';
import { StorageService } from './services/storage/storage.service';
import { AuthService } from './services/auth/auth.service';
import { ToastService } from './services/toast/toast.service';
import { UserService } from './resources/user/user.service';
import { PageTitleComponent } from './components/typography/page-title/page-title.component';
import { RouterModule } from '@angular/router';
import { IconComponent } from './components/boxes/icon/icon.component';
import { IconButtonComponent } from './components/boxes/icon-button/icon-button.component';
import { DropdownComponent } from './components/boxes/dropdown/dropdown.component';
import { DropdownService } from './components/boxes/dropdown/dropdown.service';
import { SubtitleComponent } from './components/typography/subtitle/subtitle.component';
import { AvatarComponent } from './components/boxes/avatar/avatar.component';
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
import { MovieSlotService } from './resources/movie-slot/movie-slot.service';
import { DayjsService } from './services/dayjs/dayjs.service';
import { DateFormatsPipe } from './pipes/date-formats/date-formats.pipe';
import { InitDirective } from './directives/init/init.directive';
import { CinemaLocationService } from './resources/cinema-location/cinema-location.service';
import { InputComponent } from './components/form/input/input.component';
import { TextareaComponent } from './components/form/textarea/textarea.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMapsComponent } from './components/form/google-maps/google-maps.component';
import { SeatsComponent } from './components/form/seats/seats.component';
import { ModalService } from './services/modal/modal.service';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';
import { AvatarInputComponent } from './components/form/avatar-input/avatar-input.component';
import { ModalFooterComponent } from './components/modal-container/modal-footer/modal-footer.component';
import { ModalContentComponent } from './components/modal-container/modal-content/modal-content.component';
import { CardTitleComponent } from './components/typography/card-title/card-title.component';
import { FormService } from './services/form/form.service';

@NgModule({
  declarations: [
    ButtonComponent,
    TabsComponent,
    MenuComponent,
    PageTitleComponent,
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
    TitleComponent,
    DateFormatsPipe,
    InitDirective,
    InputComponent,
    TextareaComponent,
    GoogleMapsComponent,
    SeatsComponent,
    ModalContainerComponent,
    AvatarInputComponent,
    ModalFooterComponent,
    ModalContentComponent,
    CardTitleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
    GoogleMapsModule,
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
    DropdownService,
    AlertService,
    BreadcrumbsService,
    MovieSlotService,
    DayjsService,
    CinemaLocationService,
    ModalService,
    FormService,
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
    TabsComponent,
    MenuComponent,
    PageTitleComponent,
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
    TitleComponent,
    InputComponent,
    TextareaComponent,
    GoogleMapsComponent,
    SeatsComponent,
    ModalContainerComponent,
    AvatarInputComponent,
    ModalFooterComponent,
    ModalContentComponent,
    CardTitleComponent,
    //Pipes
    DateFormatsPipe,
    //Directives
    InitDirective
  ],
})
export class SharedModule { }
