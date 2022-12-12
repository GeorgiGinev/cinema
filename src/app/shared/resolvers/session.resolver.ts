import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { SessionService } from '../services/session/session.service';

@Injectable({
  providedIn: 'root'
})
export class SessionResolver implements Resolve<boolean> {
  constructor(
    private readonly sessionService: SessionService
  ) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    if (!this.sessionService.user) {
      await this.sessionService.loadSession().then(() => {}, () => {});
    }

    return Promise.resolve(true);
  }
}
