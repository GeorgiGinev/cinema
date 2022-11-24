import { Injectable } from '@angular/core';
import { LoginResponse } from '../../interfaces/login-response';
import { User } from '../../resources/user/user.service';
import { Preferences } from '@capacitor/preferences';

@Injectable()
export class SessionService {
  public get user(): User {
    return this._user;
  } 
  public set user(user: User) {
    this._user = user;
  }

  public get isActiveSession(): boolean {
    return this._isActiveSession;
  }
  public set isActiveSession(isActiveSession: boolean) {
    this._isActiveSession = isActiveSession;
  }

  private _user: User;
  private _isActiveSession: boolean;

  constructor() {}

  public async createSession(data: LoginResponse, user: User): Promise<boolean> {
    this.user = user;

    await Preferences.set({
      key: 'credentials',
      value: JSON.stringify(data),
    });

    return true;
  }

  public async loadSession(): Promise<boolean> {
    const loginResponse = await Preferences.get({key: 'credentials'});

    if(loginResponse.value) {
      this.isActiveSession = Boolean(loginResponse);
    }

    return true;
  }
}
