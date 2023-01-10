import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { SessionService } from '../services/session/session.service';

@Injectable({
  providedIn: 'root'
})
export class SessionResolver implements Resolve<boolean> {
  constructor(
    private sessionService: SessionService,
  ) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    if (await this.sessionService.getToken()) {
      await this.sessionService.loadSession().then(() => {}, () => {});
    }

    return Promise.resolve(true);
  }
}
