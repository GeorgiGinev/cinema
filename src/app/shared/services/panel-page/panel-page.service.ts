import { Injectable } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Subject } from 'rxjs';
import { IonIcons } from 'src/app/shared/enums/ion-icons';

@UntilDestroy()
@Injectable()
export class PanelPageService {
  public headerObservable = new Subject();
  
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

  public updateHeader(title: string, icon: IonIcons) {
    this.headerObservable.next({title, icon});
  }
}
