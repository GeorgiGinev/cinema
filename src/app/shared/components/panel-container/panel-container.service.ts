import { Injectable } from '@angular/core';
import { IonIcons } from '../../enums/ion-icons';

@Injectable({
  providedIn: 'root'
})
export class PanelContainerService {
  public headerName: string;
  public headerNameIcon: IonIcons;

  constructor() { }
}
