import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CompilerService } from 'src/app/services/compiler/compiler.service';
import { exhaustMap, map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { MessageTypes } from 'src/app/models/enums';
import { QuestionService } from 'src/app/services/question/question.service';
import { UtilityService } from 'src/app/services/helpers/utility.service';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent implements OnInit {
  token = [];
  reqTokens = [];
  correct = {};
  incorrect = {};
  solvedQuestions = [];
  qId = 0;


  constructor(
    private router: Router,
    private activatedRoutes: ActivatedRoute,
    private compilerService: CompilerService,
    private questionService: QuestionService,
    private utilityService: UtilityService
  ) {
    this.qId = parseInt(this.activatedRoutes.snapshot.params.qid, 10);
    this.token = JSON.parse(atob(this.activatedRoutes.snapshot.params.token));
    this.reqTokens = [...this.token];
  }

  ngOnInit() {
    this.getSolvedQuestionForUser();
    console.log('compiling');
    this.checkResult();
  }

  removeToken() {
    this.reqTokens.splice(0, 1);
  }

  async checkResult() {
    if (this.reqTokens.length === 0) {
      setTimeout(() => {
        if (this.solvedQuestions.indexOf(this.qId) === -1) {
          this.solvedQuestions.push(this.qId);
        }
        this.updateUserSolvedQuestion();
      }, 0);
      return true;
    } else {
      const currentToken = this.reqTokens[0];
      this.makeCall(currentToken).then(res => {
        console.log(res);
        const result = res.submissions[0];
        if (result.status.id > 2) {
          if (result.status.id === 3) {
            this.correct[currentToken.token] = result.status.description;
          } else {
            this.incorrect[currentToken.token] = result.status.description;
          }
          console.log(this.incorrect);
          this.removeToken();
        }
        this.checkResult();
      });
    }
  }

  async makeCall(currentToken) {
    return this.compilerService.getResult([...[], currentToken]).toPromise();
  }

  getSolvedQuestionForUser() {
    this.questionService.getSolvedQuestions().subscribe(response => {
      this.solvedQuestions = response.solvedQuestions;
    }, error => {
      this.utilityService.showMessage(error.error.message, MessageTypes.Error);
    });
  }

  updateUserSolvedQuestion() {
    console.log(this.solvedQuestions);
    this.questionService.updateSolvedQuestions({ solvedQuestions: this.solvedQuestions }).subscribe(response => {
      this.utilityService.showMessage('Question Solved', MessageTypes.Success);
    }, error => {
      this.utilityService.showMessage(error.error.message, MessageTypes.Error);
    });
  }
}
