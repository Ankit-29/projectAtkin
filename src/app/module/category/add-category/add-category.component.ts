import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question/question.service';
import { ICategory } from 'src/app/models/category.model';
import { UtilityService } from 'src/app/services/helpers/utility.service';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageTypes } from 'src/app/models/enums';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  categoryForm: FormGroup = null;
  isEdit = false;
  editId = null;

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionService,
    private utilityService: UtilityService,
    private activatedRoutes: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.initCategoryForm();
    this.isEdit = this.activatedRoutes.snapshot.url[0].path === 'edit';
    this.editId = this.isEdit ? this.activatedRoutes.snapshot.params.id : null;
    if (this.isEdit && this.editId) {
      this.getEditData();
    }
  }

  initCategoryForm() {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addCategories() {
    if (!this.isEdit) {
      this.questionService.addCategory(this.categoryForm.value).subscribe(res => {
        this.utilityService.showMessage(res.message, MessageTypes.Success);
        this.initCategoryForm();
      }, error => {
        this.utilityService.showMessage(error.error.message, MessageTypes.Error);
      });
    } else {
      this.questionService.updateCategory({ id: this.editId, categoryData: this.categoryForm.value }).subscribe(res => {
        this.utilityService.showMessage(res.message, MessageTypes.Success);
      }, error => {
        this.utilityService.showMessage(error.error.message, MessageTypes.Error);
      });
    }
  }

  getEditData() {
    this.questionService.getCategoryById(this.editId).subscribe((category: ICategory) => {
      this.categoryForm.patchValue(category);
    }, error => {
      this.utilityService.showMessage(error.error.message, MessageTypes.Error);
      this.utilityService.hidePreLoader();
    });
  }
}





