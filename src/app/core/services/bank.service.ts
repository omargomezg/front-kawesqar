import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Bank } from "kawesqar-class-model";
import { StorageDataService } from "./storage-data.service";

@Injectable({
  providedIn: "root"
})
export class BankService {
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(
    private http: HttpClient,
    private localStorage: StorageDataService
  ) {}

  getAll(): Observable<Bank[]> {
    const url = `${environment.apiUrl}/api/bank`;
    return this.http.get<Bank[]>(url).pipe(
      catchError(error => {
        throw error;
      })
    );
  }
}
