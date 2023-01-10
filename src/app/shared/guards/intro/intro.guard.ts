import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { StorageKeysEnum } from '../../enums/storage-keys';
import { StorageService } from '../../services/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {
  constructor(
    private storage: StorageService,
    private router: Router
  ) {}

  public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const isComplete = await this.storage.get(StorageKeysEnum.SkipIntro);

    if(!isComplete) {
      this.router.navigate(['/intro']).then(() => {}, () => {});
    }

    return isComplete;
  }
  
}
