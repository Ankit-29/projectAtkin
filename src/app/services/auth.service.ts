import { ApiService } from './api.service';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { DbStorageService } from './helpers/db-storage.service';
import { CONSTANT } from '../constants/constants';
import { IUser } from '../models/user.model';
import { map } from 'rxjs/operators';
import { UtilityService } from './helpers/utility.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private user: IUser = null;
    private authToken = null;

    isLoggedIn$ = new BehaviorSubject<boolean>(false);

    getAppConfigState$: Observable<any> = null;
    subscriptions: Subscription[] = [];

    constructor(
        private apiService: ApiService,
        private dbStorageService: DbStorageService,
        private utitlityService: UtilityService,
    ) {
        this.isLoggedIn$.next(this.checkLogin());
    }

    refeshToken() {
    }

    checkLogin(): boolean {
        this.authToken = this.dbStorageService.getItem('token') || null;
        this.user = JSON.parse(this.dbStorageService.getItem('user')) || null;
        return this.user != null && this.authToken != null;
    }

    getAuthorizationHeaderValue(): string {
        return this.authToken || '';
    }

    login(credential) {
        return this.apiService.post(`user/login/`, credential).pipe(
            map((data: { message: string; data: IUser; token: string; }) => {
                this.user = data.data;
                this.dbStorageService.setItem('token', data.token);
                this.dbStorageService.setItem('user', JSON.stringify(data.data));
                this.isLoggedIn$.next(this.checkLogin());
                return data;
            })
        );
    }

    logout() {
        this.dbStorageService.setItem('user', null);
        this.dbStorageService.setItem('token', null);
        this.isLoggedIn$.next(this.checkLogin());
    }

    register() {
    }

    changePassword() {
    }

    getUser() {
        return this.user;
    }
}
