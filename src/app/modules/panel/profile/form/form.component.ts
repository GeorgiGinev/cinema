import { Component, OnInit } from '@angular/core';
import { PanelPageService } from '../../panel-page.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  constructor(
    private panelPageService: PanelPageService
  ) { }

  ngOnInit() {
    this.panelPageService.updateHeader('Edit profile')
  }

}
