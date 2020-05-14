import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { E404Component } from './module/shared/e404/e404.component';
import { QuestionModule } from './module/question/question.module';

const routes: Routes = [
  { path: 'question', loadChildren: () => QuestionModule},
  { path: '**', component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
