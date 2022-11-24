import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PageContainerService } from '../../services/page-container/page-container.service';

@Component({
  selector: 'ci-page',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageContainerComponent implements OnInit {
  public headerTitle: string;

  constructor(
    private pageContainerService: PageContainerService
  ) { }

  ngOnInit() {
    this.headerTitle = this.pageContainerService.headerTitle;
  }
}
