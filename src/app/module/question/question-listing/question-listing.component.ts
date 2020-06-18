import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/helpers/utility.service';
import { QuestionService } from 'src/app/services/question/question.service';
import { MessageTypes } from 'src/app/models/enums';
import { CONSTANT } from 'src/app/constants/constants';
import { ICategory } from 'src/app/models/category.model';
import { IQuestion } from 'src/app/models/question.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-question-listing',
  templateUrl: './question-listing.component.html',
  styleUrls: ['./question-listing.component.scss']
})
export class QuestionListingComponent implements OnInit {

  isAdmin = false;

  categoryList: string[] = [];
  difficulty = CONSTANT.LEVEL;

  questions: IQuestion[] = [];
  solvedQuestions = [];

  filterGroup: FormGroup = null;

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionService,
    private utilityService: UtilityService,
    private activatedRoutes: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    console.log(this.router.url.split('/')[1]);
    this.isAdmin = this.router.url.split('/')[1] === 'admin';
    console.log(this.isAdmin);
    this.initCategories();
    this.initQuestion();
    this.initFilterGroup();
    this.getSolvedQuestionForUser();
  }

  initCategories() {
    const children: string[] = [];
    this.questionService.getCategories().subscribe((data: { count: number, categories: ICategory[] }) => {
      data.categories.forEach(category => {
        children.push(category.name);
      });
      this.categoryList = children;
    }, error => {
      this.utilityService.showMessage(error.error.message, MessageTypes.Error);
    });
  }

  initQuestion() {
    this.questionService.getAllQuestion().subscribe((data: { count: number, questions: IQuestion[] }) => {
      this.questions = data.questions;
    }, error => {
      this.utilityService.showMessage(error.error.message, MessageTypes.Error);
    });
  }

  initFilterGroup() {
    this.filterGroup = this.fb.group({
      categories: [[]],
      qId: [''],
      level: [''],
    });
  }

  filter() {
    this.questionService.getQuestionsByFilter(this.filterGroup.value).subscribe((data: { count: number, questions: IQuestion[] }) => {
      this.questions = data.questions;
    }, error => {
      this.utilityService.showMessage(error.error.message, MessageTypes.Error);
    });
  }

  editQuestion(qId) {
    this.utilityService.changeNavigation(`admin/question/edit/${qId}`);
  }

  solveQuestion(qId) {
    this.utilityService.changeNavigation(`question/solve/${qId}`);
  }

  getSolvedQuestionForUser(){
    this.questionService.getSolvedQuestions().subscribe(response => {
      this.solvedQuestions = response.solvedQuestions;
    }, error => {
      this.utilityService.showMessage(error.error.message, MessageTypes.Error);
    });
  }
}
