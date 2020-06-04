import { Component, OnInit } from '@angular/core';
import { IEditor } from 'src/app/models/editor.model';
import { ICodeSubmission } from 'src/app/models/code-submission.model';
import { CompilerService } from 'src/app/services/compiler/compiler.service';
import { UtilityService } from 'src/app/services/helpers/utility.service';
import { MessageTypes } from 'src/app/models/enums';
import { CONSTANT } from 'src/app/constants/constants';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  code = 'print("hello")';
  input = '\n\n';
  languageId = 71;
  languages = CONSTANT.AllowedLanguages;
  editorOptions = { theme: 'vs', language: 'c' };
  isStdin = false;
  output = 'No Output Yet';


  constructor(
    private compilerService: CompilerService,
    private utilityService: UtilityService
  ) { }


  ngOnInit() {
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
