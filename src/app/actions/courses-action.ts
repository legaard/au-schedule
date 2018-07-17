import { Action } from '@ngrx/store';
import { Course } from '../common/models/course.model';
import { StudentData } from '../common/models/student-data.model';

export const actionTypes = {
    ADD_COURSES: '[Courses] Set Courses',
    REMOVE_COURSES: '[Courses] Remove Courses',
    LOADING: '[Courses] Loading Courses',
    ERROR: '[Courses] Error'
};

export class AddCourses implements Action {
    readonly type = actionTypes.ADD_COURSES;

    constructor(public payload: StudentData<Course>) {
    }
}

export class RemoveCourses implements Action {
  readonly type = actionTypes.REMOVE_COURSES;

  constructor(public payload: string) {
  }
}

export class Loading implements Action {
    readonly type = actionTypes.LOADING;
    public payload = undefined;
}

export class Error implements Action {
    readonly type = actionTypes.ERROR;

    constructor(public payload: string) { }
}

export type All = AddCourses
                | RemoveCourses
                | Loading
                | Error;
