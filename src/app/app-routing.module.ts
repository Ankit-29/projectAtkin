import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { E404Component } from './module/shared/e404/e404.component';
import { LoginModule } from './module/login/login.module';
import { AuthGuard } from './guards/auth.guard';
import { LoginScreenGuard } from './guards/login-screen.guard';
import { AdminModule } from './module/admin/admin.module';
import { UserModule } from './module/user/user.module';
import { PlaygroundComponent } from './module/shared/playground/playground.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', loadChildren: () => UserModule, canActivate: [AuthGuard] },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'login', loadChildren: () => LoginModule, canActivate: [LoginScreenGuard] },
  { path: 'admin', loadChildren: () => AdminModule, canActivate: [AuthGuard, AdminGuard] },
  { path: '**', component: E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
