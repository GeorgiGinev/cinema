import { Injectable } from '@angular/core';
import {JsonResource} from '../resource/resource';
import {HttpClient} from '@angular/common/http';
import {ToastService} from '../../services/toast/toast.service';
import { LoginResponse } from '../../interfaces/login-response';
import { SessionService } from '../../services/session/session.service';

interface UserInterface {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  relationships: any;
}

export class User extends JsonResource {
  public data: UserInterface = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    relationships: {}
  };
}

@Injectable()
export class UserService {
  constructor(
    private httpClient: HttpClient,
    private toastService: ToastService,
    private sessionService: SessionService
  ) {}

  /**
   * Create user
   */
  public create(data: any): Promise<any> {
    const user = new User();
    user.fillAttributes(data);

    return this.httpClient.post('/register', JSON.stringify(user.data))
      .toPromise().then((response: any) => {
        this.toastService.success({
          message: 'The account was created successfully'
        });
      }, () => {});
  }

  /**
   * Login into the account
   *
   * @param data object
   */
  public login(data: any): Promise<any> {
    const user = new User();
    user.fillAttributes(data);

    return this.httpClient.post('/login', JSON.stringify(user.data))
      .toPromise().then((data: any) => {
        this.toastService.success({
          message: 'You were logged.'
        });

        this.sessionService.createSession(data, user);

        return data;
      }, () => {});
  }
}
