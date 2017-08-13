import { NgModule } from '@angular/core';

import { ExamsComponent } from './exams.component';

@NgModule({
    declarations: [
        ExamsComponent
    ],
    exports: [
        ExamsComponent
    ]
})
export class ExamModule { }
