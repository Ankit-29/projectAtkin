import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { AddQuestionComponent } from './add-question/add-question.component';
import { SharedModule } from '../shared/shared.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


@NgModule({
  declarations: [AddQuestionComponent],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    SharedModule,
    CKEditorModule,
  ]
})
export class QuestionModule { }
