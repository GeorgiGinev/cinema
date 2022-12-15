import { Injectable } from '@angular/core';
import { IonIcons } from 'src/app/shared/enums/ion-icons';

@Injectable()
export class PanelPageService {
  public get headerName(): string {
    return this._headerName;
  }
  public set headerName(headerName: string) {
    this._headerName = headerName;
  }

  public get headerNameIcon(): IonIcons {
    return this._headerNameIcon;
  }
  public set headerNameIcon(headerNameIcon: IonIcons) {
    this._headerNameIcon = headerNameIcon;
  }

  private _headerName: string;
  private _headerNameIcon: IonIcons;

  constructor() { }
}
