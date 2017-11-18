import { Routes } from '@angular/router';

import { CoursesComponent } from './pages/courses/courses.component';
import { ExamsComponent } from './pages/exams/exams.component';

export const routes: Routes = [
    { path: 'courses', component: CoursesComponent },
    { path: 'exams', component: ExamsComponent },
    { path: '', redirectTo: '/courses', pathMatch: 'full' }
];
