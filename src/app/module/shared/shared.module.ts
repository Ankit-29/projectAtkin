import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { E404Component } from './e404/e404.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
  declarations: [E404Component],
  imports: [
    CommonModule
  ],
  exports: [
    E404Component,
    FormsModule,
    NzSelectModule,
    NzInputModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzIconModule,
    NzTableModule,
  ]
})
export class SharedModule { }
