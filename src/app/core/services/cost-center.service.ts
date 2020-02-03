import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { FamilyModel } from "../models/family.model";
import {
  ExistenceRequestModel,
  ExistenceResponsModel
} from "../models/existence.model";
import { CostCenterChild } from "kawesqar-class-model";
import { StorageDataService } from "./storage-data.service";

@Injectable({
  providedIn: "root"
})
export class CostCenterService {
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(
    private http: HttpClient,
    private localStorage: StorageDataService
  ) {}

  getCostCenterChild(): Observable<CostCenterChild[]> {
    let url = "";
    url = `${
      environment.apiUrl
    }/api/cost-center/child/${this.localStorage.getRutUser()}`;
    return this.http.get<CostCenterChild[]>(url).pipe(
      catchError(error => {
        throw error;
      })
    );
  }
}
