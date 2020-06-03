import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CONSTANT } from 'src/app/constants/constants';
import { IEditor } from 'src/app/models/editor.model';


@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit {
  @Input() editor: IEditor = {
    content: '',
    options: { isCodeEditor: true, languageId: 71 }
  };
  @Output() contentChange = new EventEmitter<string>();

  languages = CONSTANT.AllowedLanguages;


  editorOptions = { theme: 'vs', language: 'javascript' };

  ngOnInit() {
  }

  onValueChange($event) {
    this.contentChange.emit($event);
  }

}
