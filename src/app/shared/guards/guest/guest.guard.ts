import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SessionService } from '../../services/session/session.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {
  constructor(
    private sessionService: SessionService,
    private router: Router
  ) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    if (await this.sessionService.getToken()) {
      /**
       * If session is not loaded, load it
       */
      if (!this.sessionService.user) {
        await this.sessionService.loadSession();
      }
      this.router.navigate(['/dashboard'], { replaceUrl: true });
      return false;
    }

    return true;
  }

}
