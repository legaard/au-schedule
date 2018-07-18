import * as fromCourses from '../actions/courses-action';
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

export function reducer(state = initialState, action: fromCourses.All): CoursesState {
    switch (action.type) {
        case fromCourses.types.ADD_COURSES: {
            return {
                studentData: [...state.studentData, action.payload],
                loading: false,
                error: undefined
            };
        }
        case fromCourses.types.REMOVE_COURSES: {
          return {
              studentData: state.studentData.filter(studentData => studentData.studentId !== action.payload),
              loading: false,
              error: undefined
          };
        }
        case fromCourses.types.LOADING: {
            return {
                ...state,
                loading: true,
                error: undefined
            };
        }
        case fromCourses.types.ERROR: {
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
