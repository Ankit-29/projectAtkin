import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { QuestionListingComponent } from './question-listing/question-listing.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionListingComponent
  },
  {
    path: 'add',
    component: AddQuestionComponent
  },
  {
    path: 'edit/:id',
    component: AddQuestionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
