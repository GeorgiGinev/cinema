import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageContainerService {
  public get headerTitle(): string {
    return this._headerTitle;
  }
  public set headerTitle(headerTitle: string) {
    this._headerTitle = headerTitle;
  }
  private _headerTitle: string;

  constructor() { }
}
