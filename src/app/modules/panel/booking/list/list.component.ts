import { Component, OnInit } from '@angular/core';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { PanelPageService } from '../../panel-page.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  constructor(
    private panelPageService: PanelPageService
  ) { }

  ngOnInit() {
    this.panelPageService.updateHeader('Booking list', IonIcons.booking);
  }

}
