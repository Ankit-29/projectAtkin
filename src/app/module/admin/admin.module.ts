import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionModule } from '../question/question.module';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from '../shared/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
