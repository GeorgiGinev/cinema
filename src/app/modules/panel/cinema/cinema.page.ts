import { Component, OnInit } from '@angular/core';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { PanelPageService } from 'src/app/shared/services/panel-page/panel-page.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.page.html',
  styleUrls: ['./cinema.page.scss'],
})
export class CinemaPage implements OnInit {
  private iconsEnum = IonIcons;

  constructor(
    private panelPageService: PanelPageService
  ) { }

  ngOnInit() {
    this.panelPageService.updateHeader('Cinemas', this.iconsEnum.dashboard);
  }
}
