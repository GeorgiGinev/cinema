import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../../services/session/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private readonly disabledRoutesForAuthUsers: string[] = ['/auth/login', '/auth/register'];

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) { }

  public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    if (await this.sessionService.getToken()) {
      /**
       * If session is not loaded, load it
       */
      if (!this.sessionService.user) {
        await this.sessionService.loadSession();
      }
      return true;
    }

    this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
