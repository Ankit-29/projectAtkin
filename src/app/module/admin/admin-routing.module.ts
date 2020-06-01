import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { QuestionListingComponent } from '../question/question-listing/question-listing.component';
import { QuestionModule } from '../question/question.module';

const routes: Routes = [
    { path: '', loadChildren: () => QuestionModule },
    { path: 'question', loadChildren: () => QuestionModule },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
