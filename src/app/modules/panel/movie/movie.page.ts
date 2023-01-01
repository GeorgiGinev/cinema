import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IonIcons } from 'src/app/shared/enums/ion-icons';
import { PanelPageService } from '../panel-page.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviePage implements OnInit {
  private iconsEnum = IonIcons;

  constructor(
    private panelPageService: PanelPageService
  ) { }

  ngOnInit() {
    // this.panelPageService.headerName = 'Movies';
    // this.panelPageService.headerNameIcon = this.iconsEnum.dashboard;

    this.panelPageService.updateHeader('Movies', this.iconsEnum.dashboard);
  }
}
