import { reducer as sut, CoursesState } from './courses-reducer';
import * as CourseActions from '../actions/courses-action';
import { StudentData } from '../common/models/student-data.model';
import { Course } from '../common/models/course.model';

describe('Courses Reducer', () => {
    const studentId = 'a4dcec52-e43e-4a63-93fa-54c2c7e5e348';
    const studentData: StudentData<Course> = {
        data: [],
        studentId
    };
    const initialState: CoursesState = {
        error: undefined,
        loading: false,
        studentData: []
    };

    it('Should add StudentData with ID and course data', () => {
        const newState = sut(initialState, new CourseActions.AddCourses(studentData));

        expect(newState.studentData.length).toBe(1);
        expect(newState.studentData[0].studentId).toBe(studentId);
        expect(newState.loading).toBeFalsy();
    });

    it('Should set loading to false and error to undefined when new StudentData is added', () => {
        const newState = sut({...initialState, loading: true, error: 'test error'}, new CourseActions.AddCourses(studentData));

        expect(newState.loading).toBeFalsy();
        expect(newState.error).toBeUndefined();
    });

    it('Should set loading to true and error to undefined on loading action', () => {
        const newState = sut({...initialState, error: 'test error'}, new CourseActions.Loading());

        expect(newState.loading).toBeTruthy();
        expect(newState.error).toBeUndefined();
    });

    it('Should set error message and loading to false on error action', () => {
        const errorMsg = 'test error';
        const newState = sut({...initialState, error: undefined, loading: true}, new CourseActions.Error(errorMsg));

        expect(newState.loading).toBeFalsy();
        expect(newState.error).toBe(errorMsg);
    });

    it('Should append new StudenData to StudentData array on state', () => {
        const secondStudentId = 'a4dcec52-e43e-4a63-93fa-54c2c7e5e349';
        const firstState = sut(initialState, new CourseActions.AddCourses(studentData));
        const lastState = sut(firstState, new CourseActions.AddCourses({...studentData, studentId: secondStudentId}));

        expect(lastState.studentData.length).toBe(2);
        expect(lastState.studentData[1].studentId).toBe(secondStudentId);
    });

    it('Should remove StudentData with correct studentId from state', () => {
        const secondStudentId = 'a4dcec52-e43e-4a63-93fa-54c2c7e5e349';
        const firstState = sut(initialState, new CourseActions.AddCourses(studentData));
        const secondState = sut(firstState, new CourseActions.AddCourses({...studentData, studentId: secondStudentId}));
        const lastState = sut(secondState, new CourseActions.RemoveCourses(studentId));

        expect(lastState.studentData.length).toBe(1);
        expect(lastState.studentData[0].studentId).toBe(secondStudentId);
    });
});
