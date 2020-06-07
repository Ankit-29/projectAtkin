import { Component, OnInit } from '@angular/core';
import { IEditor } from 'src/app/models/editor.model';
import { ICodeSubmission } from 'src/app/models/code-submission.model';
import { CompilerService } from 'src/app/services/compiler/compiler.service';
import { UtilityService } from 'src/app/services/helpers/utility.service';
import { MessageTypes } from 'src/app/models/enums';
import { CONSTANT } from 'src/app/constants/constants';
import { QuestionService } from 'src/app/services/question/question.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solve-question',
  templateUrl: './solve-question.component.html',
  styleUrls: ['./solve-question.component.scss']
})
export class SolveQuestionComponent implements OnInit {

  qId = 0;
  question = 'Question Here';
  code = 'print("hello")';
  input = '\n\n';
  languageId = 71;
  languages = CONSTANT.AllowedLanguages;
  editorOptions = { theme: 'vs', language: 'c' };
  isStdin = false;
  output = 'No Output Yet';

  constructor(
    private compilerService: CompilerService,
    private utilityService: UtilityService,
    private questionService: QuestionService,
    private activatedRoutes: ActivatedRoute
  ) {
    this.qId = this.activatedRoutes.snapshot.params.id;
  }


  ngOnInit() {
    this.questionService.getQuestion(this.qId).subscribe(res => {
      this.question = res.question;
      console.log(this.question);
    }, error => {
      this.utilityService.showMessage(error.error.message, MessageTypes.Error);
    });
  }


  onRunCode() {
    const submission: ICodeSubmission = {
      sourceCode: this.code,
      stdin: this.input,
      languageId: this.languageId
    };
    this.compilerService.compile(submission).subscribe((response: { stdout: string, stderr: string }) => {
      this.output = response.stdout !== null ? response.stdout : response.stderr;
    }, error => {
      this.utilityService.showMessage(error.error.message, MessageTypes.Error);
    });
  }

}
