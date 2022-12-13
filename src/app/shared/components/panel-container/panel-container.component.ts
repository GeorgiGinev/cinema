import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ci-panel',
  templateUrl: './panel-container.component.html',
  styleUrls: ['./panel-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelContainerComponent implements OnInit {
  constructor() { }

  ngOnInit() {}
}
