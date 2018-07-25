
import { Action } from '@ngrx/store';

import { Student } from '../common/models/student.model';

export const types = {
    ADD_STUDENT: '[StudentToggle] Add Student',
    REMOVE_STUDENT: '[StudentToggle] Remove Student',
    TOGGLE_STUDENT: '[StudentToggle] Toggle Student',
    LOAD_ALL: '[StudentToggle] Load All'
};

export class AddStudent implements Action {
    readonly type = types.ADD_STUDENT;

    constructor(readonly payload: Student) { }
}

export class RemoveStudent implements Action {
    readonly type = types.REMOVE_STUDENT;

    constructor(readonly payload: string) { }
}

export class ToggleStudent implements Action {
    readonly type = types.TOGGLE_STUDENT;
    readonly payload = {
        id: this.studentId,
        isToggled: this.isToggled
    };

    constructor(private studentId: string, private isToggled?: boolean) { }
}

export type All = AddStudent
                | RemoveStudent
                | ToggleStudent;

