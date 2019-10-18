import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortcutNavService {
  private pathLvl1 = new BehaviorSubject([]);
  private pathLvl2 = new BehaviorSubject([]);
  currentPathLvl1 = this.pathLvl1.asObservable();
  currentPathLvl2 = this.pathLvl2.asObservable();

  constructor() {
  }

  /**
   * Set url path for navigation
   * @param pathLvl1 A array of string where [0]: routerLink, [1]: name, [2]: isActive
   * @param pathLvl2 A array of string where [0]: routerLink, [1]: name, [2]: isActive
   */
  changePath(pathLvl1: Array<string>, pathLvl2?: Array<string>) {
    this.pathLvl1.next(pathLvl1);
    this.pathLvl2.next(pathLvl2);
  }
}
