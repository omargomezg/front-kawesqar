import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { ExistenciaResponseModel } from '../models/existencia-response.model';
import { ExistenciaRequestModel } from '../models/existencia-request.model';
import { ExistenciaDetailModel } from '../models/existencia-detail.model';

@Injectable({
  providedIn: 'root'
})
export class ExistenciaService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private readonly http: HttpClient) { }

  getExistenciaHistorica(idBodega: number, idSucursal: number): Observable<ExistenciaDetailModel[]> {
    return this.http.get<ExistenciaDetailModel[]>(`${environment.apiUrl}/api/existencia/${idBodega}/${idSucursal}`);
  }

  deleteExistencia(id: number): Observable<{}> {
    const url = `${environment.apiUrl}/api/existencia/${id}`; // DELETE api/heroes/42

    return this.http.delete(url, this.httpOptions)
      .pipe(
        catchError((error) => {
          throw error;
        })
      );
  }

  getExistencias(model: ExistenciaRequestModel): Observable<ExistenciaResponseModel[]> {
    return this.http
      .post<ExistenciaResponseModel[]>(`${environment.apiUrl}/api/existencia`,
        model, this.httpOptions)
      .pipe(
        // map(data => data),
        catchError((error) => {
          throw error;
        })
      );
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

}
