import { Component } from '@angular/core';
import { NavigationService } from './shared/services/navigation/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public get navigationContentId(): string {
    return this.navigationService.contentId;
  }

  constructor(private navigationService: NavigationService) {}
}
