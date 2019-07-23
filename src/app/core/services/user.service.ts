import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  setDefaultSubsidiary(data: any): any {
    const url = `${environment.apiUrl}/api/user/${data.rut}/default/subsidiary`;
    return this.http
      .post<any>(url, data, this.httpOptions)
      .pipe(
        // map(data => data),
        catchError((error) => {
          throw error;
        })
      );
  }
}
