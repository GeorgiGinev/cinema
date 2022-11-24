import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/resources/user/user.service';
import { SessionService } from 'src/app/shared/services/session/session.service';

@Component({
  selector: 'ci-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public user: User;

  constructor(
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.user = this.sessionService.user;
  }
}
