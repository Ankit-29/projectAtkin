import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryListingComponent } from './category-listing/category-listing.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [AddCategoryComponent, CategoryListingComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule
  ]
})
export class CategoryModule { }
