import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentSearchInputComponent } from './student-search-input/student-search-input.component';
import { StudentService } from './student-search-input/student.service';

@NgModule({
  declarations: [
    StudentSearchInputComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    StudentSearchInputComponent
  ],
  providers: [
    StudentService
  ]
})
export class UiElementsModule { }
