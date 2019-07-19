import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StorageDataService {
    private readonly localStorageService;

    constructor() {
        this.localStorageService = localStorage;
    }

    setRutUser(data: string): void {
        this.localStorageService.setItem('user', JSON.stringify(data));
    }

    getRutUser(): string {
        if (this.localStorageService.getItem('user')) {
            const data = this.localStorageService.getItem('user');
            return (data) ? <string>JSON.parse(data) : '';
        } else {
            return '';
        }
    }

}
