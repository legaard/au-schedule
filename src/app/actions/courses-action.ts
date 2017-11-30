import { Action } from '@ngrx/store';

export const actionTypes = {
    SET_COURSES: '[Courses] Set Courses',
    LOADING: '[Courses] Loading Courses',
    ERROR: '[Courses] Error'
};

export class SetCourses implements Action {
    readonly type = actionTypes.SET_COURSES;

    constructor(public payload: string) { }
}

export class Loading implements Action {
    readonly type = actionTypes.LOADING;
    public payload = undefined;
}

export class Error implements Action {
    readonly type = actionTypes.ERROR;

    constructor(public payload: string) { }
}

export type All = SetCourses
                | Loading
                | Error;
