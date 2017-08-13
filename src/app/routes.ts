import { Routes } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import { ExamsComponent } from './exams/exams.component';

export const APP_ROUTES: Routes = [
    { path: 'courses', component: CoursesComponent },
    { path: 'exams', component: ExamsComponent },
    { path: '', redirectTo: '/courses', pathMatch: 'full' }
];
