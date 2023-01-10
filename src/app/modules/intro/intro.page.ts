import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageKeysEnum } from 'src/app/shared/enums/storage-keys';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {
  private readonly storageKeysEnum = StorageKeysEnum;

  constructor(private storageService: StorageService, private router: Router) {}

  /**
   * Skip intro
   */
  public skipIntro() {
    this.storageService.set(this.storageKeysEnum.SkipIntro, true).then(() => {
      this.goToLogin();
    }, () => {});
  }

  /**
   * Route to login page
   */
  private goToLogin() {
    this.router.navigate(['/auth/login']).then(() => {}, () => {});
  }
}
