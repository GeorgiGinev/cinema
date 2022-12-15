import { Injectable } from '@angular/core';
import { AlertButton, AlertController } from '@ionic/angular';

@Injectable()
export class AlertService {
  
  constructor(
    private alertController: AlertController
  ) { }

  /**
   * Create alert
   */
  public async create(header: string, subHeader: string | null,  buttons: AlertButton[]) {
    let alert = await this.alertController.create({
      header,
      subHeader,
      buttons, 
    });

    await alert.present();

    return alert.onDidDismiss();
  }
}
