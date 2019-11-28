import { Injectable } from '@angular/core';
import { MeasureModel } from '../models/database/measure.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeasureService {

  constructor(private readonly httpClient: HttpClient) { }

  getMedida(id: number): Observable<MeasureModel> {
    return this.httpClient.get<MeasureModel>(`${environment.apiUrl}/api/measure/${id}`);
  }
}
