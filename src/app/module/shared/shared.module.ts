import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { E404Component } from './e404/e404.component';

@NgModule({
  declarations: [E404Component],
  imports: [
    CommonModule
  ],
  exports: [
    E404Component
  ]
})
export class SharedModule { }
