import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from './meta-reducers/local-storage-sync.reducer';

import * as fromCourses from './courses.reducer';
import * as fromExams from './exams.reducer';
import * as fromStudentToggles from './student-toggles.reducer';

export interface AppState {
    courses: fromCourses.CoursesState;
    exams: fromExams.ExamsState;
    studentToggles: fromStudentToggles.StudentToggleState;
}

export const reducers: ActionReducerMap<AppState> = {
    courses: fromCourses.reducer,
    exams: fromExams.reducer,
    studentToggles: fromStudentToggles.reducer
};

export const metaReducers: MetaReducer<any>[] = [
  localStorageSyncReducer
];

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync(
    {
      slices: ['studentToggles', 'courses'],
      key: 'appState'
    }
  )(reducer);
}
