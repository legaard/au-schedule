import { Action } from '@ngrx/store';
import { Exam } from '../common/models/exam.model';
import { StudentData } from '../common/models/student-data.model';

export const types = {
    ADD_EXAMS: '[Exams] Add Exams',
    REMOVE_EXAMS: '[Exams] Remove Exams',
    LOADING: '[Exams] Loading Exams',
    ERROR: '[Exams] Error'
};

export class AddExams implements Action {
    readonly type = types.ADD_EXAMS;

    constructor(public payload: StudentData<Exam>) {
    }
}

export class RemoveExams implements Action {
    readonly type = types.REMOVE_EXAMS;

    constructor(public payload: string) {
    }
}

export class Loading implements Action {
    readonly type = types.LOADING;
    readonly payload = undefined;
}

export class Error implements Action {
    readonly type = types.ERROR;

    constructor(public payload: string) {
    }
}

export type All = AddExams
                | RemoveExams
                | Loading
                | Error;
