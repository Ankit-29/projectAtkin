import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { QuestionListingComponent } from '../question/question-listing/question-listing.component';
import { QuestionModule } from '../question/question.module';
import { CategoryModule } from '../category/category.module';

const routes: Routes = [
    { path: '', loadChildren: () => QuestionModule },
    { path: 'question', loadChildren: () => QuestionModule },
    { path: 'category', loadChildren: () => CategoryModule}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
