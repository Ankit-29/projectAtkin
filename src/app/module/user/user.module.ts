import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { QuestionRoutingModule } from '../question/question-routing.module';
import { QuestionModule } from '../question/question.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    QuestionModule,
    SharedModule
  ]
})
export class UserModule { }
