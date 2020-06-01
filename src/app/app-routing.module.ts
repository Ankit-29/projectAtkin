import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { E404Component } from './module/shared/e404/e404.component';
import { QuestionModule } from './module/question/question.module';
import { LoginModule } from './module/login/login.module';
import { AuthGuard } from './guards/auth.guard';
import { LoginScreenGuard } from './guards/login-screen.guard';
import { AdminModule } from './module/admin/admin.module';
import { UserModule } from './module/user/user.module';

const routes: Routes = [
  { path: 'login', loadChildren: () => LoginModule, canActivate: [LoginScreenGuard] },
  { path: 'admin', loadChildren: () => AdminModule, canActivate: [AuthGuard] },
  { path: '', loadChildren: () => UserModule, canActivate: [AuthGuard] },
  { path: '**', component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
