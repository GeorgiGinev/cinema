import { Injectable } from '@angular/core';
import { JsonResource, JsonResourceService } from '../resource/resource.service';
import { HttpClient } from '@angular/common/http';
import { ToastService } from '../../services/toast/toast.service';
import { SessionService } from '../../services/session/session.service';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert/alert.service';
import { JsonCollection } from '../collection/collection';
import { Cinema } from '../cinema/cinema.service';
import { ModalService } from '../../services/modal/modal.service';
import { ProfileComponent } from 'src/app/modules/auth/profile/profile.component';
import * as cloneDeep from 'lodash/cloneDeep';
import { LoginResponse } from '../../interfaces/login-response';
import { PasswordChangeInterface } from '../../interfaces/passwordChange';

export interface UserInterface {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  avatar: ''
}

export class User extends JsonResource {
  public attributes: UserInterface = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    avatar: '',
  };

  public relationships = {
    cinema: new JsonCollection<Cinema>()
  }
}

@Injectable()
export class UserService extends JsonResourceService<User>{
  public resource: string = 'me';

  constructor(
    protected httpClient: HttpClient,
    private toastService: ToastService,
    private sessionService: SessionService,
    private router: Router,
    private alertService: AlertService,
    private modalService: ModalService
  ) { 
    super(httpClient);
  }

  public openForm(): Promise<void> {
    return this.modalService.openModal(ProfileComponent).then(() => {

    }, () => {});
  }

  /**
   * Change password
   * @param data attributes
   * @returns 
   */
  public changePassword(data: PasswordChangeInterface): Promise<any> {
    return this.httpClient.patch('/' + this.resource + '/change-password', data)
    .toPromise().then(() => {

    }, () => {})
  }

  /**
   * Update user
   * @param user resource 
   * @returns 
   */
  public update(user: User): Promise<any> {
    return this.httpClient.post('/' + this.resource + '/update', user)
    .toPromise().finally(() => {
      this.createPath = '';
    });
  }

  /**
   * Create user
   */
  public create(data: any): Promise<any> {
    const user = new User();
    user.fillAttributes(data);

    return this.httpClient.post('/register', JSON.stringify(user.attributes))
    .toPromise().then(() => {
      this.toastService.success({
        message: 'The account was created successfully'
      });
    }, () => {}).finally(() => {
      this.createPath = '';
    });
  }

  /**
   * Login into the account
   *
   * @param data object
   */
  public login(data: any): Promise<any> {
    const user = new User();
    user.fillAttributes(data);

    return this.httpClient.post('/login', JSON.stringify(user.attributes))
      .toPromise().then((data: LoginResponse) => {
        this.toastService.success({
          message: 'You were logged.'
        });

        this.sessionService.user = new User();
        this.sessionService.user.fillAttributes(data.user);
        
        this.sessionService.createSession(data, user);

        return Promise.resolve(data);
      }, () => {});
  }

  /**
   * Logout from profile
   * @returns 
   */
  public logout(): Promise<any> {
    const user = this.sessionService.user;

    return this.alertService.create('Are you sure?', 'Are you sure you want to logout?', [
      {
        text: 'Yes',
        role: 'confirm',
        handler: () => {
          return this.httpClient.post('/' + this.resource + '/logout', JSON.stringify(user))
            .toPromise().then(async (data: any) => {
              this.router.navigate(['/home']).then(() => {}, () => {});

              await this.sessionService.clearSession();

              this.toastService.success({
                message: 'You have successfully logged out.'
              });
              return data;
            }, () => { })
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
    ])
  }
}
