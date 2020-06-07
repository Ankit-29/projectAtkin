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
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { PlaygroundComponent } from './playground/playground.component'
import { MonacoEditorModule } from 'ngx-monaco-editor';


@NgModule({
  declarations: [E404Component, CodeEditorComponent, PlaygroundComponent],
  imports: [
    CommonModule,
    NzSwitchModule,
    FormsModule,
    MonacoEditorModule.forRoot(),
    NzSelectModule,
    NzButtonModule,
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
    NzSwitchModule,
  ]
})
export class SharedModule { }
