import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: HTMLIonModalElement[] = [];
  constructor(private modalController: ModalController) { }

  public async openModal(component: any): Promise<any> {
    const modal = await this.modalController.create({
      component,
      cssClass: 'primary-modal-container'
    });

    this.modals.push(modal);

    modal.present();

    return modal.onDidDismiss().then(() => {
      this.modals.pop();
    }, () => {});
  }

  public closeModal(): Promise<any> {
    const modal = this.modals[this.modals.length-1];

    return modal.dismiss();
  }
}
