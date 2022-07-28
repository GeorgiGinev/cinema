import { Component, OnInit } from '@angular/core';
import { NavigationService } from './shared/services/navigation/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public navigationId: string;

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navigationId = this.navigationService.contentId;
  }
}
