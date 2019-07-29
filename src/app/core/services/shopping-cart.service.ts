import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {catchError, map, retry} from 'rxjs/operators';
import {ShoppingCartModel} from '../../core/models/database/ShoppingCart.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getCart(rut: string, id: number) {
    return this.http
      .get<ShoppingCartModel>(`${environment.apiUrl}/api/shopping-cart/${id}/${rut}`)
      .pipe(map(data => data));
  }

  addToCart(data: any, rut: string): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/api/shopping-cart/${data.id}/${rut}`, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  branchTransfer(data: any) {
    return this.http.put<any>(`${environment.apiUrl}/api/shopping-cart/branch-transfer`, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
