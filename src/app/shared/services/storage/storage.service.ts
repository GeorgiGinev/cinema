import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | undefined;

  constructor(private storage: Storage) {
    this.init();
  }

  /**
   * Get value from storage
   * @param key identificator
   * @returns
   */
  public get(key: string): any {
    if (this._storage) {
      return this._storage.get(key);
    }

    return undefined;
  }

  /**
   * Set storage key
   */
  public set(key: string, value: any) {
    if (this._storage) {
      console.log('set storage');
      this._storage.set(key, value);
    }
  }

  /**
   * Init storage
   */
  private async init() {
    this._storage = await this.storage.create();
  }
}
