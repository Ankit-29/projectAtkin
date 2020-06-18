import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { QuestionListingComponent } from '../question/question-listing/question-listing.component';
import { QuestionModule } from '../question/question.module';
import { AddQuestionComponent } from '../question/add-question/add-question.component';
import { SolveQuestionComponent } from '../question/solve-question/solve-question.component';
import { SubmissionComponent } from '../question/submission/submission.component';

const routes: Routes = [
    { path: '', component: QuestionListingComponent },
    { path: 'question', component: QuestionListingComponent },
    { path: 'question/solve/:id', component: SolveQuestionComponent },
    { path: 'submission/:qid/:token', component: SubmissionComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
