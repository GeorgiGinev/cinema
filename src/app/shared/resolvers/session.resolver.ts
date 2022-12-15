import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { SessionService } from '../services/session/session.service';

@Injectable({
  providedIn: 'root'
})
export class SessionResolver implements Resolve<boolean> {
  constructor(
    private readonly sessionService: SessionService,
    private loadingCtrl: LoadingController,
  ) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    if (!this.sessionService.user) {
      console.log('session resolver');
      await this.sessionService.loadSession().then(() => {}, () => {});
    }

    return Promise.resolve(true);
  }
}
