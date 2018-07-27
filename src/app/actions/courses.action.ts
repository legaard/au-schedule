import { Action } from '@ngrx/store';
import { Course } from '../common/models/course.model';
import { StudentData } from '../common/models/student-data.model';

export const types = {
    ADD_COURSES: '[Courses] Add Courses',
    REMOVE_COURSES: '[Courses] Remove Courses',
    LOADING: '[Courses] Loading Courses',
    ERROR: '[Courses] Error'
};

export class AddCourses implements Action {
    readonly type = types.ADD_COURSES;

    constructor(readonly payload: StudentData<Course>) {
    }
}

export class RemoveCourses implements Action {
  readonly type = types.REMOVE_COURSES;

  constructor(readonly payload: string) {
  }
}

export class Loading implements Action {
    readonly type = types.LOADING;
    readonly payload = undefined;
}

export class Error implements Action {
    readonly type = types.ERROR;

    constructor(readonly payload: string) { }
}

export type All = AddCourses
                | RemoveCourses
                | Loading
                | Error;
