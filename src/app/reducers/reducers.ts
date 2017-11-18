import * as fromCourses from './courses-reducer';

export interface AppState {
    courses: fromCourses.CoursesState;
}

export const reducers = {
    courses: fromCourses.reducer
};
