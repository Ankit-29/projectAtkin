import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryListingComponent } from './category-listing/category-listing.component';

const routes: Routes = [
  { path: '',
    component: CategoryListingComponent
  },
  {
    path: 'add',
    component: AddCategoryComponent
  },
  {
    path: 'edit/:id',
    component: AddCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
