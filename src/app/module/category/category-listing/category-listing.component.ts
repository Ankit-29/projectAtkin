import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/category.model';
import { QuestionService } from 'src/app/services/question/question.service';
import { UtilityService } from 'src/app/services/helpers/utility.service';
import { MessageTypes } from 'src/app/models/enums';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.scss']
})
export class CategoryListingComponent implements OnInit {
    categories: ICategory[] = [];
    isAdmin = false;

  constructor(
    private questionService: QuestionService,
    private utilityService: UtilityService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.initCategory();
    this.isAdmin = this.router.url.split('/')[1] === 'admin';
  }

  initCategory() {
    this.questionService.getCategories().subscribe((data: { count: number, categories: ICategory[] }) => {
      this.categories = data.categories;
      console.log(data);
    }, error => {
      this.utilityService.showMessage(error.error.message, MessageTypes.Error);
    });
  }

  editCategory(id) {
    this.utilityService.changeNavigation(`admin/category/edit/${id}`);
  }


}
