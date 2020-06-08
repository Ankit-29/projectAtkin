import { Injectable } from '@angular/core';
import { MessageTypes } from '../../models/enums';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  _preloaderHost = null;
  _preloaderCount = 0;

  constructor(
    private nzMessageService: NzMessageService,
    private router: Router) {

  }


  showMessage(message: string, type: MessageTypes = MessageTypes.Info, duration: number = 2000) {
    switch (type) {
      case MessageTypes.Error:
        this.showErrorMessage(message, duration); break;
      case MessageTypes.Warning:
        this.showWarningMessage(message, duration); break;
      case MessageTypes.Success:
        this.showSuccessMessage(message, duration); break;
      case MessageTypes.Info:
        this.showInfoMessage(message, duration); break;
      default:
        this.showInfoMessage(message, duration); break;
    }
  }

  showErrorMessage(message: string, duration = 2000) {
    this.nzMessageService.error(message, {
      nzDuration: duration
    });
  }

  showSuccessMessage(message: string, duration = 2000) {
    this.nzMessageService.success(message, {
      nzDuration: duration
    });
  }

  showInfoMessage(message: string, duration = 2000) {
    this.nzMessageService.info(message, {
      nzDuration: duration
    });
  }

  showWarningMessage(message: string, duration = 2000) {
    this.nzMessageService.warning(message, {
      nzDuration: duration
    });
  }

  showPreLoader() {
    // create preloader if doesn't exists
    if (this._preloaderHost) {
      this._preloaderCount++;
      return;
    }
    const preloaderTemp = `
      <div class='preloader'>
          <div class='spinner'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
      `;

    const el = document.createElement('div');
    el.innerHTML = preloaderTemp;
    this._preloaderHost = el.children[0];
    const top = document.scrollingElement.scrollTop;
    this._preloaderHost.style.top = top + 'px';
    document.body.appendChild(this._preloaderHost);
    document.body.style.overflow = 'hidden';
    this._preloaderCount++;
  }

  hidePreLoader() {
    this._preloaderCount--;
    if (this._preloaderHost && this._preloaderCount <= 0) {
      this._preloaderHost.remove();
      document.body.style.overflow = null;
      this._preloaderHost = null;
      this._preloaderCount = 0;
    } else if (!this._preloaderCount) {
      this._preloaderCount = 0;
    }
  }


  changeNavigation(path, state = {}) {
    this.router.navigateByUrl(path, state);
  }

}
