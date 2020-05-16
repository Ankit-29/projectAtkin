import { Injectable } from '@angular/core';
import { MessageTypes } from '../../models/enums';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  preloaderHost = null;
  preloaderCount = 0;

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
    if (this.preloaderHost) {
      this.preloaderCount++;
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
    this.preloaderHost = el.children[0];
    const top = document.scrollingElement.scrollTop;
    this.preloaderHost.style.top = top + 'px';
    document.body.appendChild(this.preloaderHost);
    document.body.style.overflow = 'hidden';
    this.preloaderCount++;
  }

  hidePreLoader() {
    this.preloaderCount--;
    if (this.preloaderHost && this.preloaderCount <= 0) {
      this.preloaderHost.remove();
      document.body.style.overflow = null;
      this.preloaderHost = null;
      this.preloaderCount = 0;
    } else if (!this.preloaderCount) {
      this.preloaderCount = 0;
    }
  }


  changeNavigation(path) {
    this.router.navigateByUrl(path);
  }

}
