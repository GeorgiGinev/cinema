import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest, HttpResponse,
} from '@angular/common/http';
import {NGXLogger} from 'ngx-logger';
import {environment} from '../../../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {ToastService} from '../toast/toast.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(
    private logger: NGXLogger,
    private toastService: ToastService
  ) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): any {
    req = req.clone({
      url: environment.api.url + req.url,
      headers: req.headers.set('Content-Type', 'application/json')
        .set('Accept', 'application/json'),
    });
    return next.handle(req).pipe(
      /**
       * Show returned error from server
       */
      map((result: HttpResponse<any>) => {
        console.log('httpRepsonse : ', result);
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
