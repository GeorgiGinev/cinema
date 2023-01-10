import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest, HttpResponse,
} from '@angular/common/http';
import {NGXLogger} from 'ngx-logger';
import {environment} from '../../../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {ToastService} from '../toast/toast.service';
import { SessionService } from '../session/session.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(
    private logger: NGXLogger,
    private toastService: ToastService,
    private sessionService: SessionService
  ) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): any {
    let headers: HttpHeaders;

    if(!this.sessionService.token) {
      headers = req.headers.set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    } else {
      headers = req.headers.set('Content-Type', 'application/json')
      .set('Authorization', this.sessionService.token)
      .set('Accept', 'application/json')
      .set('Access-Control-Allow-Origin', '*') ;
    }
    
    req = req.clone({
      url: environment.api.url + req.url,
      headers: headers
    });
    return next.handle(req).pipe(
      /**
       * Show returned error from server
       */
      map((result: HttpResponse<any>) => {
        if(result?.body?.error) {
          this.toastService.error({
            message: result.body.error[Object.keys(result.body.error)[0]]
          }).then(() => {}, () => {});
          return throwError(result.body.error[Object.keys(result.body.error)[0]]);
        }

        return result;
      }),
      /**
       * Request error
       */
      catchError((error: HttpErrorResponse) => {
        console.log('HttpErrorResponse : ', error);
        if(error.status === 0) {
          this.toastService.error({
            message: error.statusText
          }).then(() => {}, () => {});
        }
        if(error.error.errors) {
          this.toastService.error({
            message: error.error.errors[Object.keys(error.error.errors)[0]]
          }).then(() => {}, () => {});
        }
        return throwError(error.error.message);
      })
    );
  }
}
