import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TurnService {
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private http: HttpClient) {
    }

    turnByUser(rut: string, status: string) {
        return this.http
            .get<any>(`${environment.apiUrl}/api/user/turn/${rut}/${status}`)
            .pipe(map(data => data));
    }
}
