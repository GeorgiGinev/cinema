import { Injectable } from '@angular/core';
import { IonIcons } from 'src/app/shared/enums/ion-icons';

@Injectable({
  providedIn: 'root'
})
export class PanelPageService {
  public headerName: string;
  public headerNameIcon: IonIcons;
  
  constructor() { }
}
