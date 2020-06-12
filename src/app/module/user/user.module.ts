import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { QuestionRoutingModule } from '../question/question-routing.module';
import { QuestionModule } from '../question/question.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    QuestionModule
  ]
})
export class UserModule { }
