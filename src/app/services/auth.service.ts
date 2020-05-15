import { ApiService } from './api.service';
import { Observable, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { DbStorageService } from './db-storage.service';
import { CONSTANT } from '../constants/constants';

@Injectable({
    providedIn: "root"
})
export class AuthService {

    private user = null;
    private authToken = null;

    getAppConfigState$: Observable<any> = null;
    subscriptions: Subscription[] = [];


    constructor(
        private apiService: ApiService,
        private dbStorageService: DbStorageService
    ) {
        this.authToken = this.dbStorageService.getItem('token') || CONSTANT.TOKEN;
    }

    refeshToken() {
    }

    isLoggedIn(): boolean {
        return this.user != null && !this.user.expired;
    }

    getAuthorizationHeaderValue(): string {
        return this.authToken || '';
    }

    login() {
    }

    logout() {
    }

    register() {
    }

    changePassword() {
    }
}
