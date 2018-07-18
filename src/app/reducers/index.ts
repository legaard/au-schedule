import { ActionReducerMap } from '@ngrx/store';

import * as fromCourses from './courses-reducer';
import * as fromStudentToggles from './student-toggle-reducer';

export interface AppState {
    courses: fromCourses.CoursesState;
    studentToggles: fromStudentToggles.StudentToggleState;
}

export const reducers: ActionReducerMap<AppState> = {
    courses: fromCourses.reducer,
    studentToggles: fromStudentToggles.reducer
};
