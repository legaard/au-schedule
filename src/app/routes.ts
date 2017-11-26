import { Routes } from '@angular/router';

import { CoursesComponent } from './pages/courses/courses.component';
import { ExamsComponent } from './pages/exams/exams.component';
import { IndexComponent } from './pages/index/index.component';

export const routes: Routes = [
    { path: 'courses', component: CoursesComponent },
    { path: 'exams', component: ExamsComponent },
    { path: '', component: IndexComponent }
];
