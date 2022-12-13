import { IonIcons } from "../enums/ion-icons";

export interface SelectItem {
    label: string,
    disabled: boolean,
    action: (value?: any) => void,
    class?: string,
    icon?: IonIcons,
    value: any
}