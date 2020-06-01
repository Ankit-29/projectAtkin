import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedin$: BehaviorSubject<boolean>;
  title = 'projectAtkin';

  constructor(private authService: AuthService) {
    this.isLoggedin$ = this.authService.isLoggedIn$;
  }
}

