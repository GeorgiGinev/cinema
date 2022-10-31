import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IonIcons } from '../../enums/ion-icons';
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
      label: 'Home',
      icon: IonIcons.home,
      action: () => {
        this.router.navigate(['/home']);
      },
    },
    {
      label: 'Sign In',
      icon: IonIcons.login,
      action: () => {
        this.router.navigate(['/auth/login']);
      },
    },
    {
      label: 'Sign Up',
      icon: IonIcons.register,
      action: () => {
        this.router.navigate(['/auth/register']);
      },
    },
  ];

  constructor(
    private router: Router
  ) {}

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
