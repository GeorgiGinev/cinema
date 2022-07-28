import { Injectable } from '@angular/core';
import { NavigationItem } from '../../interfaces/navigation-item';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private readonly _contentId: string = 'main-navigation';
  private readonly _id: string = 'main-navigation';

  private readonly _title: string = 'Navigation';
  private _navigationItems: NavigationItem[] = [
    {
      label: 'Item',
      action: () => {},
    },
    {
      label: 'Item',
      action: () => {},
    },
    {
      label: 'Item',
      action: () => {},
    },
  ];

  constructor() {}

  public get items(): NavigationItem[] {
    return this._navigationItems;
  }

  public get id(): string {
    return this._id;
  }

  public get contentId(): string {
    return this._contentId;
  }

  public get title(): string {
    return this._title;
  }
}
