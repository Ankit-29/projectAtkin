import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { E404Component } from './module/shared/e404/e404.component';
import { QuestionModule } from './module/question/question.module';
import { LoginModule } from './module/login/login.module';
import { AuthGuard } from './guards/auth.guard';
import { LoginScreenGuard } from './guards/login-screen.guard';

const routes: Routes = [
  { path: '', loadChildren: () => LoginModule, canActivate: [LoginScreenGuard] },
  { path: 'admin/question', loadChildren: () => QuestionModule, canActivate: [AuthGuard] },
  { path: '**', component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
