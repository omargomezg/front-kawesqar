import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FamilyModel } from '../models/family.model';
import { ExistenceRequestModel, ExistenceResponsModel } from '../models/existence.model';

@Injectable({
    providedIn: 'root'
})
export class ExistenceService {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    constructor(private http: HttpClient) { }

    getExistence(model: ExistenceRequestModel): Observable<ExistenceResponsModel[]> {
        let url = '';
        url = `${environment.apiUrl}/api/existence`;
        return this.http
            .post<ExistenceResponsModel[]>(url,
                model, this.httpOptions)
            .pipe(
                // map(data => data),
                catchError((error) => {
                    throw error;
                })
            );
    }
}
