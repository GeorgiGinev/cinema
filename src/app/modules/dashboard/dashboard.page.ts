import { Component, OnInit } from '@angular/core';
import { PageContainerService } from 'src/app/shared/services/page-container/page-container.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private pageContainerService: PageContainerService
  ) { }

  ngOnInit() {
    this.pageContainerService.headerTitle = 'Dashboard';
  }

}
