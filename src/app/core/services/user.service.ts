import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { SystemUser } from "kawesqar-class-model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(private http: HttpClient) {}

  login(user: string, password: string) {
    return this.http.post("", {
      user: "",
      password: ""
    });
  }

  getUser(rut: string) {
    const url = `${environment.apiUrl}/api/user/${rut}`;
    return this.http.get<SystemUser>(url).pipe(
      catchError(error => {
        throw error;
      })
    );
  }

  setDefaultSubsidiary(data: any): any {
    const url = `${environment.apiUrl}/api/user/${data.rut}/default/subsidiary`;
    return this.http.post<any>(url, data, this.httpOptions).pipe(
      // map(data => data),
      catchError(error => {
        throw error;
      })
    );
  }
}
