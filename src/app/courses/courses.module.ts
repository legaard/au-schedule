import { NgModule } from '@angular/core';

import { CoursesComponent } from './courses.component';

@NgModule({
    declarations: [
        CoursesComponent
    ],
    exports: [
        CoursesComponent
    ]
})
export class CoursesModule { }
