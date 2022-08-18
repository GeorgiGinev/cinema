import { Injectable } from '@angular/core';
import { ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private readonly toastDuration: number = 2000;

  constructor(private toastController: ToastController) {}

  public error(options: ToastOptions): Promise<any> {
    return this.initToast({
      ...options,
      duration: this.toastDuration,
      color: 'danger',
    });
  }

  public success(options: ToastOptions): Promise<any> {
    return this.initToast({
      ...options,
      duration: this.toastDuration,
      color: 'success',
    });
  }

  private async initToast(options: ToastOptions): Promise<any> {
    const toast = await this.toastController.create(options);
    await toast.present();

    return toast.onDidDismiss();
  }
}
