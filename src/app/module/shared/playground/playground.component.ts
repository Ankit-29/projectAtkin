import { Component, OnInit } from '@angular/core';
import { IEditor } from 'src/app/models/editor.model';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  code: IEditor = {
    content: `print('Hello world')`,
    options: {
      isCodeEditor: true,
      languageId: 71,
    }
  };

  input: IEditor = {
    content: 'Input',
    options: {
      isCodeEditor: false,
    }
  };
  isStdin = false;
  output = 'No Output Yet';


  constructor() { }


  ngOnInit() {
  }

  onCodeChange(code) {
    this.code = code;
  }

  onInputChange(input) {
    this.input = input;
  }

}
