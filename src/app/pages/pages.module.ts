import { NgModule } from '@angular/core';

import { ExamsComponent } from './exams/exams.component';
import { CoursesComponent } from './courses/courses.component';
import { IndexComponent } from './index/index.component';
import { UiElementsModule } from '../common/ui-elements/ui-elements.module';
import { StudentDataService } from './student-data.service';

@NgModule({
  declarations: [
    ExamsComponent,
    CoursesComponent,
    IndexComponent,
  ],
  imports: [
    UiElementsModule
  ],
  exports: [
    ExamsComponent,
    CoursesComponent,
    IndexComponent
  ]
})
export class PagesModule { }
