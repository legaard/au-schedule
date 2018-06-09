
import { Action } from '@ngrx/store';

import { Student } from '../common/models/student.model';

export const actionTypes = {
    ADD_STUDENT: '[StudentToggle] Add Student',
    REMOVE_STUDENT: '[StudentToggle] Remove Student',
    TOGGLE_STUDENT: '[StudentToggle] Toggle Student'
};

export class AddStudent implements Action {
    public type = actionTypes.ADD_STUDENT;

    constructor(public payload: Student) { }
}

export class RemoveStudent implements Action {
    public type = actionTypes.REMOVE_STUDENT;

    constructor(public payload: string) { }
}

export class ToggleStudent implements Action {
    public type = actionTypes.TOGGLE_STUDENT;
    public payload = {
        id: this.studentId,
        isToggled: this.isToggled
    };

    constructor(private studentId: string, private isToggled?: boolean) { }
}

export type All = AddStudent
    | RemoveStudent
    | ToggleStudent;

