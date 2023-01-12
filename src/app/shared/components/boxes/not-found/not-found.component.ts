import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { JsonCollection } from 'src/app/shared/resources/collection/collection';
import { JsonResource } from 'src/app/shared/resources/resource/resource.service';

@Component({
  selector: 'ci-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent implements OnInit {
  @Input() data: JsonCollection<JsonResource>;
  
  constructor() { }

  ngOnInit() {}

}
