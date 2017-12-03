import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentSearchInputComponent } from './student-search-input/student-search-input.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    StudentSearchInputComponent
  ],
  declarations: [StudentSearchInputComponent]
})
export class UiModule { }
