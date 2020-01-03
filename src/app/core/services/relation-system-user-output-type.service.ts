import { environment } from "../../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { RelationSystemUserOutputType } from "kawesqar-class-model";

@Injectable({
  providedIn: "root"
})
export class RelationSystemUserOutputTypeService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) {}

  getRelations(rut: string): Observable<RelationSystemUserOutputType[]> {
    return this.http
      .get<RelationSystemUserOutputType[]>(
        `${environment.apiUrl}/api/user-output-type/${rut}`
      )
      .pipe(map(data => data));
  }
}
