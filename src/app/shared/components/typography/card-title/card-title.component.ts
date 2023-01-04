import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ci-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardTitleComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
