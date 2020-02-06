import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import {StorageDataService} from '../services/storage-data.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {
  constructor(private localStorage: StorageDataService, private router: Router) {
  }

  intercept(
    request: HttpRequest<any>,    next: HttpHandler  ): Observable<HttpEvent<any>> {
    const currentUser = this.localStorage.getRutUser().replace(/[^A-Za-z0-9]+/g, "");
    const userJwt = {jwt: "ssdsdsdadssad".toLowerCase()};
    if (currentUser) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${userJwt}`,
          UsrKey: `${currentUser}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {

        if (err.status === 401) {
          this.router.navigateByUrl('/login');
        }

        return throwError( err );

      })
    );
  }
}
