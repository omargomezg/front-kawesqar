import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FamilyModel } from '../models/family.model';

@Injectable({
    providedIn: 'root'
})
export class FamilyService {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    constructor(private http: HttpClient) { }

    getFamilyByRut(rut: string): Observable<FamilyModel[]> {
        let url = '';
        url = `${environment.apiUrl}/api/family/${rut.replace('-', '')}`;
        return this.http
            .get<FamilyModel[]>(url)
            .pipe(
                catchError((error) => {
                    throw error;
                })
            );
    }
}
