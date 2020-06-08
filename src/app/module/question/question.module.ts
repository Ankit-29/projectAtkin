import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { AddQuestionComponent } from './add-question/add-question.component';
import { SharedModule } from '../shared/shared.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { QuestionListingComponent } from './question-listing/question-listing.component';
import { SolveQuestionComponent } from './solve-question/solve-question.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { SubmissionComponent } from './submission/submission.component';


@NgModule({
  declarations: [AddQuestionComponent, QuestionListingComponent, SolveQuestionComponent, SubmissionComponent],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    SharedModule,
    CKEditorModule,
    MonacoEditorModule.forRoot(),
  ]
})
export class QuestionModule { }
