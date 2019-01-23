import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {

  serviceShowList: Observable<boolean>;

  private serviceShowListSubject = new Subject<any>();

  constructor() {
    this.serviceShowList = this.serviceShowListSubject.asObservable();
  }

  showData(data: boolean) {
    this.serviceShowListSubject.next(data);
  }

}
