import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionModule } from '../question/question.module';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
