import { Component, OnInit } from '@angular/core';
import * as Editor from '../../../ckEditor-widmits';
import { CONSTANT } from 'src/app/constants/constants';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { QuestionService } from 'src/app/services/question/question.service';
import { ICategory } from 'src/app/models/category.model';
import { UtilityService } from 'src/app/services/helpers/utility.service';
import { MessageTypes } from 'src/app/models/enums';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  Editor = Editor;
  ckConfig = CONSTANT.CkeditorConfig;
  difficulty = CONSTANT.LEVEL;

  categoryList: string[] = [];


  questionForm: FormGroup = null;

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionService,
    private utilityService: UtilityService
  ) { }

  ngOnInit() {
    this.initCategories();
    this.initQuestionForm();
  }

  get testCases() {
    return this.questionForm && this.questionForm.get('testCases') as FormArray;
  }

  initQuestionForm() {
    this.questionForm = this.fb.group({
      qId: [''],
      question: ['Add Question Here <p></p>', Validators.required],
      categories: [[], Validators.required],
      testCases: this.fb.array([
        this.fb.group({
          testCase: ['', Validators.required],
          answer: ['', Validators.required],
        }),
      ]),
      level: ['1'],
    });
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


  addTestCase() {
    this.testCases.push(
      this.fb.group({
        testCase: ['', Validators.required],
        answer: ['', Validators.required],
      }),
    );
  }

  deleteTestCase(index) {
    this.testCases.removeAt(index);
  }

  saveQuestion() {
    this.questionService.addQuestion(this.questionForm.value).subscribe(res => {
      this.utilityService.showMessage(res.message, MessageTypes.Success);
      this.initQuestionForm();
    }, error => {
      this.utilityService.showMessage(error.error.message, MessageTypes.Error);
    });
  }

}
