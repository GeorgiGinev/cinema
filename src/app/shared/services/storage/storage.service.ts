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
  public get(key: string): Promise<any> {
    if (this._storage) {
      return this._storage.get(key);
    }

    return Promise.reject();
  }

  /**
   * Set storage key
   */
  public async set(key: string, value: any): Promise<any> {
    if (this._storage) {
      return this._storage.set(key, value);
    }

    return Promise.reject();
  }

  /**
   * Init storage
   */
  private async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }
}
