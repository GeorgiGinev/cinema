import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ci-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageTitleComponent implements OnInit {
  @Input() underline: boolean;

  @HostBinding('class.with-underline') get withUnderline() {
    return this.underline;
  }
  constructor() { }

  ngOnInit() {}

}
