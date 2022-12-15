import { Injectable } from '@angular/core';
import { LoginResponse } from '../../interfaces/login-response';
import { User } from '../../resources/user/user.service';
import { Preferences } from '@capacitor/preferences';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SessionService {
  public get user(): User {
    return this._user;
  } 
  public set user(user: User) {
    this._user = user;
  }

  public get token(): string {
    return this._token;
  }
  public set token(token: string) {
    this._token = token;
  }

  private _user: User;
  private _token: string;

  constructor(
    private httpClient: HttpClient
  ) {}

  public async createSession(data: LoginResponse, user: User): Promise<boolean> {
    this.user = user;

    console.log('Logged in: ', this.user);

    await Preferences.set({
      key: 'credentials',
      value: JSON.stringify(data),
    }); 

    return true;
  }

  public async clearSession(): Promise<void> {
    await Preferences.remove({key: 'credentials'});
    
    this.token = '';
    this.user = undefined;
  }
  
  /**
   * Load session if a token is in storage if it is not loaded
   * @returns 
   */
  public async loadSession(): Promise<boolean> {
    await this.getToken();

    console.log('load session : ', this.token)

    if(this.token) {
      console.log('token exists');
      await this.loadUser();

      return Promise.resolve(true);
    }

    return Promise.reject(false);
  }

  public loadUser(): Promise<any> {
    return this.httpClient.get('/user').toPromise().then((user: User) => {
      this.user = user;
    }, () => {})
  }

  public async getToken(): Promise<string> {
    if(this.token) {
      return Promise.resolve(this.token);
    }

    const loginResponse = await Preferences.get({key: 'credentials'});

    /**
     * If user is not logged in
     */
    if(!loginResponse.value) {
      return null;
    }

    this.token = (JSON.parse(loginResponse.value) as LoginResponse)?.token_type + ' ' + (JSON.parse(loginResponse.value) as LoginResponse)?.access_token;
    return this.token;
  }
}
