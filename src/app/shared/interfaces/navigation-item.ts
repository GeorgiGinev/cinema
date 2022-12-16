import { IonIcons } from "../enums/ion-icons";

export interface NavigationItem {
  label: string;
  icon?: IonIcons;
  action: () => void;
  routerLink?: string,
  children?: NavigationItem[]
}