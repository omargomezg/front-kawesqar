import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StorageDataService {
  private readonly localStorageService;

  constructor(private router: Router) {
    this.localStorageService = localStorage;
  }

  setPath(path: string) {
    this.localStorageService.setItem('path', path);
  }

  getPath() {
    return this.localStorageService.getItem('path');
  }

  setRutUser(data: string): void {
    this.localStorageService.setItem('user', JSON.stringify(data));
  }

  getRutUser(): string {
    if (this.localStorageService.getItem('user')) {
      const data = this.localStorageService.getItem('user');
      return (data) ? <string>JSON.parse(data) : '';
    } else {
      this.router.navigateByUrl('/login');
    }
  }

}
