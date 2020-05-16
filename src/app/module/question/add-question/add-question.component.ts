import { Component, OnInit } from '@angular/core';
import * as Editor from '../../../ckEditor-widmits';
import { CONSTANT } from 'src/app/constants/constants';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { QuestionService } from 'src/app/services/question/question.service';
import { ICategory } from 'src/app/models/category.model';
import { UtilityService } from 'src/app/services/helpers/utility.service';
import { MessageTypes } from 'src/app/models/enums';
import { ActivatedRoute } from '@angular/router';
import { IQuestion } from 'src/app/models/question.model';

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

  isEdit = false;
  editQId = null;

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionService,
    private utilityService: UtilityService,
    private activatedRoutes: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.initCategories();
    this.initQuestionForm();
    this.isEdit = this.activatedRoutes.snapshot.url[0].path === 'edit';
    this.editQId = this.isEdit ? this.activatedRoutes.snapshot.params.id : null;
    if (this.isEdit) {
      this.getEditData();
    }
  }

  get testCases() {
    return this.questionForm && this.questionForm.get('testCases') as FormArray;
  }

  initQuestionForm() {
    this.questionForm = this.fb.group({
      qId: [''],
      title: ['', Validators.required],
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
    if (!this.isEdit) {
      this.questionService.addQuestion(this.questionForm.value).subscribe(res => {
        this.utilityService.showMessage(res.message, MessageTypes.Success);
        this.initQuestionForm();
      }, error => {
        this.utilityService.showMessage(error.error.message, MessageTypes.Error);
      });
    } else {
      this.questionService.updateQuestion(this.questionForm.value, this.editQId).subscribe(res => {
        this.utilityService.showMessage(res.message, MessageTypes.Success);
      }, error => {
        this.utilityService.showMessage(error.error.message, MessageTypes.Error);
      });
    }

  }

  getEditData() {
    this.questionService.getQuestionsByFilter({
      categories: [],
      qId: this.editQId,
      level: ''
    }).subscribe((data: { count: number, questions: IQuestion[] }) => {
      if (data.count === 0) {
        this.utilityService.changeNavigation(`question/add`);
      } else {
        this.questionForm.patchValue(data.questions[0]);
      }
    }, error => {
      this.utilityService.showMessage(error.error.message, MessageTypes.Error);
    });
  }

}
