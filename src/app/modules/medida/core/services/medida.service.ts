import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Measure } from 'kawesqar-class-model';

@Injectable({
  providedIn: 'root'
})
export class MedidaService {

  constructor(private readonly http: HttpClient) { }

  getMedidas(): Observable<Measure[]> {
    return this.http.get<Measure[]>(`${environment.apiUrl}/api/measure`);
  }

  getMedida(id: number): Observable<Measure> {
    return this.http.get<Measure>(`${environment.apiUrl}/api/medida/${id}`);
  }

  putMedidas(model: Measure): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http
      .put(`${environment.apiUrl}/api/medida/${model.id}`,
        JSON.stringify(model), httpOptions)
      .pipe(
        map(data => data),
        catchError((error) => {
          throw error;
        })
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: 3it -> send the error to remote logging infrastructure
      // console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
