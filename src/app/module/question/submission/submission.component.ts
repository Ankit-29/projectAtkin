import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CompilerService } from 'src/app/services/compiler/compiler.service';
import { exhaustMap, map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent implements OnInit {
  token = [];
  correct = {};
  incorrect = {};

  constructor(
    private router: Router,
    private activatedRoutes: ActivatedRoute,
    private compilerService: CompilerService
  ) {
    this.token = JSON.parse(atob(this.activatedRoutes.snapshot.params.token));
  }

  ngOnInit() {
    console.log('compiling');
    this.checkResult();
  }

  removeToken() {
    this.token.splice(0, 1);
  }

  checkResult() {
    while (this.token.length > 0) {
      const currentToken = this.token[0];
      this.makeCall(currentToken).then(res => {
        console.log(res);
        this.removeToken();
      });
    }
  }

  async makeCall(currentToken) {
    return this.compilerService.getResult([...[], currentToken]).toPromise();
  }

}
