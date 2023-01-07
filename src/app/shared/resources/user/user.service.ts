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

interface UserInterface {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  relationships: any;
}

export class User extends JsonResource {
  public attributes: UserInterface = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    relationships: {}
  };

  public relationships = {
    cinema: new JsonCollection<Cinema>()
  }
}

@Injectable()
export class UserService extends JsonResourceService<User>{
  public resource: string = 'users';

  constructor(
    protected httpClient: HttpClient,
    private toastService: ToastService,
    private sessionService: SessionService,
    private router: Router,
    private alertService: AlertService,
    private modalService: ModalService
  ) { 
    super(httpClient);

    this.createPath = '/register/';
  }

  public openForm(): Promise<void> {
    return this.modalService.openModal(ProfileComponent).then(() => {
      
    }, () => {});
  }

  /**
   * Create user
   */
  public create(data: any): Promise<any> {
    console.log('data : ', data);
    const user = new User();
    user.fillAttributes(data);

    return this.save(user).then(() => {
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

    return this.httpClient.post('/login', JSON.stringify(user.attributes))
      .toPromise().then((data: any) => {
        this.toastService.success({
          message: 'You were logged.'
        });

        this.sessionService.user = new User();
        this.sessionService.user.fillAttributes(data.user);
        
        console.log('http client login : ', data);
        this.sessionService.createSession(data, user);

        return data;
      }, () => {
        this.toastService.error({
          header: 'There was a problem connecting to the server. Please try again in a moment.'
        })
       });
  }

  public logout(): Promise<any> {
    const user = this.sessionService.user;

    return this.alertService.create('Are you sure?', 'Are you sure you want to logout?', [
      {
        text: 'Yes',
        role: 'confirm',
        handler: () => {
          return this.httpClient.post('/logout', JSON.stringify(user))
            .toPromise().then(async (data: any) => {
              this.router.navigate(['/home']);

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
