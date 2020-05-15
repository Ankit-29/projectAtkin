import { Injectable } from '@angular/core';
import { StorageType } from '../models/enums';
import { Subscription, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbStorageService {

  private storageType = StorageType.LocalStorage;

  constructor() {
    this.selectStorageType();
  }

  setItem(key: string, value: any) {
    switch (this.storageType) {
      case StorageType.LocalStorage:
        localStorage.setItem(key, value);
        break;
      case StorageType.Cookie:
        this.setCookie(key, value);
        break;
      default:
        localStorage.setItem(key, value);
        break;
    }
  }

  getItem(key: string) {
    switch (this.storageType) {
      case StorageType.LocalStorage:
        return localStorage.getItem(key);
      case StorageType.Cookie:
        return this.getCookie(key);
      default:
        return localStorage.getItem(key);
    }
  }


  private setCookie(key: any, value: any) {
    const date = new Date();
    const days = 365 * 10;
    // Set Cookie for next 10 years
    date.setTime(date.getTime() + (days * (24 * 60 * 60 * 1000)));
    document.cookie = `${key}=${value};expires=${date.toUTCString()}`;
  }


  private getCookie(key: string) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const cookieData = cookie.split('=');
      if (cookieData[0] === key) {
        return cookieData[1];
      }
    }
    return null;
  }



  private selectStorageType() {
    const isLocalStorageAvailable = this.storageAvailable(StorageType.LocalStorage);
    const isCookieEnabled = navigator.cookieEnabled;
    if (isLocalStorageAvailable) {
      this.storageType = StorageType.LocalStorage;
    } else if (isCookieEnabled) {
      this.storageType = StorageType.Cookie;
    } else {
      this.storageType = StorageType.LocalStorage;
    }
  }

  private storageAvailable(type) {
    try {
      const storage = window[type];
      const x = '__storage_test__';
      (storage as any).setItem(x, x);
      (storage as any).removeItem(x);
      return true;
    } catch (e) {
      return false;
    }
  }

}
