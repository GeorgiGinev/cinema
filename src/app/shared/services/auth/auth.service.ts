import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ToastService } from '../toast/toast.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userData: any;
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  // Returns true when user is looged in and email is verified
  public get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }

  constructor(
    private httpClient: HttpClient,
    private toastService: ToastService
  ) {}

  /**
   * Sign up method
   * @param email string
   * @param name string
   * @param password string
   */
  public signUp(email: string, name: string, password: string): Promise<any> {
    return this.httpClient
      .post(
        environment.api + '/api/register',
        JSON.stringify({
            email: email,
            name: name,
            password: password,
        }),
        { headers: this.headers }
      )
      .toPromise()
      .then(
        () => {
          this.toastService.success({
            message: 'You were successfully signed up.',
          });
        },
        () => {
          this.toastService.error({
            message: 'Error while trying to sign you up. Please try again.',
          });
        }
      );
  }
}
