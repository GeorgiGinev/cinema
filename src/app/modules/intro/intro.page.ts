import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageKeysEnum } from 'src/app/shared/enums/storage-keys';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  private readonly storageKeysEnum = StorageKeysEnum;

  constructor(private storageService: StorageService, private router: Router) {}

  ngOnInit() {
    if (this.storageService.get(this.storageKeysEnum.SkipIntro) !== undefined) {
      this.goToLogin();
    }
  }

  /**
   * Skip intro
   */
  public skipIntro() {
    this.storageService.set(this.storageKeysEnum.SkipIntro, true);

    this.goToLogin();
  }

  /**
   * Route to login page
   */
  private goToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
