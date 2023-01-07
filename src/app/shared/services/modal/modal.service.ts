import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: HTMLIonModalElement[] = [];
  constructor(private modalController: ModalController) { }

  public async openModal(component: any, data: {} | null = null): Promise<any> {
    const modal = await this.modalController.create({
      component,
      componentProps: data,
      cssClass: 'primary-modal-container',
    });

    this.modals.push(modal);

    modal.present();

    return modal.onDidDismiss().then((data: any) => {
      this.modals.pop();

      if(data.role === 'backdrop' || data.role === 'close') {
        return Promise.reject(); 
      }

      return data.data;
    }, () => {});
  }

  public closeModal(data: any | null = null, closeOnly: boolean = false): Promise<any> {
    const modal = this.modals[this.modals.length-1];

    if(closeOnly) {
      return modal.dismiss(data, 'close');
    } else {
      return modal.dismiss(data);
    }
  }
}
