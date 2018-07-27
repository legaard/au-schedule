import * as examsActions from '../actions/exams.action';
import { StudentData } from '../common/models/student-data.model';
import { Exam } from '../common/models/exam.model';

export interface ExamsState {
    studentData: Array<StudentData<Exam>>;
    loading: boolean;
    error: string;
}

const initialState: ExamsState = {
    studentData: [],
    loading: true,
    error: undefined
};

export function reducer(state = initialState, action: examsActions.All): ExamsState {
    switch(action.type) {
        case examsActions.types.ADD_EXAMS: {
            return {
                studentData: [...state.studentData, action.payload],
                loading: false,
                error: undefined
            };
        }
        case examsActions.types.REMOVE_EXAMS: {
            return {
                studentData: state.studentData.filter(studentData => studentData.studentId !== action.payload),
                loading: false,
                error: undefined
            };
        }
        case examsActions.types.LOADING: {
            return {
                ...state,
                loading: true,
                error: undefined
            };
        }
        case examsActions.types.ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        }
        default: {
            return state;
        }
    }
}
