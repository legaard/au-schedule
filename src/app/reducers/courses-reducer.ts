import * as CoursesActions from '../actions/courses-action';

export interface CoursesState {
    courses: Array<any>;
    loading: boolean;
    error: string;
}

const initialState: CoursesState = {
    courses: [],
    loading: false,
    error: undefined
};

export function reducer(state = initialState, action: CoursesActions.All): CoursesState {
    switch (action.type) {
        case CoursesActions.actionTypes.SET_COURSES: {
            return {
                courses: [...state.courses, action.payload],
                loading: false,
                error: undefined
            };
        }
        case CoursesActions.actionTypes.LOADING: {
            return {
                ...state,
                loading: true,
                error: undefined
            };
        }
        case CoursesActions.actionTypes.ERROR: {
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
