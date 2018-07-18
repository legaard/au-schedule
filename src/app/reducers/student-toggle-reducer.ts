import { StudentToggle } from '../common/models/student-toggle.model';
import { Student } from '../common/models/student.model';
import * as fromStudentToggles from '../actions/student-toggle-actions';

export interface StudentToggleState {
    toggles: Array<StudentToggle>;
}

const initialState: StudentToggleState = {
    toggles: []
};

export function reducer(state = initialState, action: fromStudentToggles.All): StudentToggleState {
    switch (action.type) {
        case fromStudentToggles.types.ADD_STUDENT: {
            const student = action.payload as Student;
            const isContained = state.toggles
                .some(toggle => toggle.student.id === student.id);

            if (isContained) { return state; }

            return {
                toggles: [...state.toggles, { isToggled: true, student }]
            };
        }
        case fromStudentToggles.types.REMOVE_STUDENT: {
            const id = <string> action.payload;
            const toggles = [...state.toggles]
                .filter(toggle => toggle.student.id !== id);

            return {
                toggles
            };
        }
        case fromStudentToggles.types.TOGGLE_STUDENT: {
            const toggleData = <{id: string; isToggled: boolean}> action.payload;
            const studentIndex = state.toggles
                .findIndex(toggle => toggle.student.id === toggleData.id);

            if (studentIndex < 0) { return state; }

            const isToggled = toggleData.isToggled !== undefined ? toggleData.isToggled : !state.toggles[studentIndex].isToggled;

            const student = {
                ...state.toggles[studentIndex],
                isToggled
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
