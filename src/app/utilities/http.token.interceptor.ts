import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

// public routes/routes that do not need token
const _exclusionList = [];

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

    constructor(private router: Router, private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const exclusionList = _exclusionList;

        let isPresent = false;
        const url = req.url.toLowerCase();
        for (let i = 0; i < exclusionList.length; i++) {
            isPresent = url.search(exclusionList[i]) !== -1;
            if (isPresent) {
                break;
            }
        }

        const headersConfig = {
            Accept: 'application/json,*/*',
        };

        if (!(req.body instanceof FormData)) {
            headersConfig['Content-Type'] = 'application/json';
        }


        if (isPresent === false) {
            const token = this.authService.getAuthorizationHeaderValue();
            if (token) {
                headersConfig['Authorization'] = `Bearer ${token}`;
            }
        }
        req = req.clone({ setHeaders: headersConfig });
        return next.handle(req);
    }
}
