import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CsrfService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  
  public csrf: string | undefined;

  constructor(private httpClient: HttpClient) {}

  /**
   * Load csrf token
   */
  public load() {
    this.httpClient
      .get(environment.api + '/sanctum/csrf-cookie')
      .toPromise()
      .then(
        (token: any) => {
          this.csrf = token;
          console.log('this.csrf : ', token);
        },
        () => {}
      );
  }
}
