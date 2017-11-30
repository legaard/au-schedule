import { StudentToggle } from '../shared/models/student-toggle.model';
import * as StudentToggleActions from '../actions/student-toggle-actions';
import { Student } from '../shared/models/student.model';

export interface StudentToggleState {
    toggles: Array<StudentToggle>;
}

const initialState: StudentToggleState = {
    toggles: []
};

export function reducer(state = initialState, action: StudentToggleActions.All): StudentToggleState {
    switch (action.type) {
        case StudentToggleActions.actionTypes.ADD_STUDENT: {
            const student = action.payload as Student;
            const isContained = state.toggles
                .some(toggle => toggle.student.id === student.id);

            if (isContained) { return state; }

            return {
                toggles: [...state.toggles, { isToggled: true, student }]
            };
        }
        case StudentToggleActions.actionTypes.REMOVE_STUDENT: {
            const toggles = [...state.toggles]
                .filter(toggle => toggle.student.id !== action.payload);

            return {
                toggles
            };
        }
        case StudentToggleActions.actionTypes.TOGGLE_STUDENT: {
            const studentIndex = state.toggles
                .findIndex(toggle => toggle.student.id === action.payload);

            if (studentIndex < 0) { return state; }

            const student = {
                ...state.toggles[studentIndex],
                isToggled: !state.toggles[studentIndex].isToggled
            };

            const toggles = [...state.toggles];
            toggles[studentIndex] = student;

            return {
                toggles
            };
        }
        default: {
            return state;
        }
    }
}
