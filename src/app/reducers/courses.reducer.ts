import * as coursesActions from '../actions/courses.action';
import { StudentData } from '../common/models/student-data.model';
import { Course } from '../common/models/course.model';

export interface CoursesState {
    studentData: Array<StudentData<Course>>;
    loading: boolean;
    error: string;
}

const initialState: CoursesState = {
    studentData: [],
    loading: true,
    error: undefined
};

export function reducer(state = initialState, action: coursesActions.All): CoursesState {
    switch (action.type) {
        case coursesActions.types.ADD_COURSES: {
            return {
                studentData: [...state.studentData, action.payload],
                loading: false,
                error: undefined
            };
        }
        case coursesActions.types.REMOVE_COURSES: {
          return {
              studentData: state.studentData.filter(studentData => studentData.studentId !== action.payload),
              loading: false,
              error: undefined
          };
        }
        case coursesActions.types.LOADING: {
            return {
                ...state,
                loading: true,
                error: undefined
            };
        }
        case coursesActions.types.ERROR: {
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
