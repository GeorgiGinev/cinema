import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BreadcrumbsInterface } from 'src/app/shared/interfaces/breadcrumbs';
import { BreadcrumbsService } from './breadcrumbs.service';

@Component({
  selector: 'ci-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbsItems: BreadcrumbsInterface[];
  constructor(
    private breadcrumbsService: BreadcrumbsService
  ) { }

  ngOnInit() {
    this.breadcrumbsItems = this.breadcrumbsService.generate();
  }

}
