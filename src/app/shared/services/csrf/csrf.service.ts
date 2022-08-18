import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CsrfService {
  public csrf: string | undefined;

  constructor(private httpClient: HttpClient) {}

  /**
   * Load csrf token
   */
  public load() {
    this.httpClient
      .get('http://127.0.0.1:8000/sanctum/csrf-cookie')
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
