import { reducer as sut, ExamsState } from './exams.reducer';
import * as examsActions from '../actions/exams.action';
import { StudentData } from '../common/models/student-data.model';
import { Exam } from '../common/models/exam.model';

describe('Exams Reducer', () => {
    const studentId = 'a4dcec52-e43e-4a63-93fa-54c2c7e5e350';
    const StudentData: StudentData<Exam> = {
        data: [],
        studentId
    };
    const initialState: ExamsState = {
        studentData: [],
        loading: false,
        error: undefined
    };

    it('should add StudentData with ID and exam data', () => {
        const newState = sut(initialState, new examsActions.AddExams(StudentData));

        expect(newState.studentData.length).toBe(1);
        expect(newState.studentData[0].studentId).toBe(studentId);
        expect(newState.loading).toBeFalsy();
    });

    it('should set loading to false and error to undefined when new StudentData is added', () => {
        const newState = sut({...initialState, loading: true, error: 'test error'}, new examsActions.AddExams(StudentData));

        expect(newState.error).toBeUndefined();
        expect(newState.loading).toBeFalsy();
    });

    it('should set loading to true and error to undefined on loading action', () => {
        const newState = sut({...initialState, loading: false, error: 'test error'}, new examsActions.Loading());

        expect(newState.error).toBeUndefined();
        expect(newState.loading).toBeTruthy();
    });

    it('should set an error message and loading to false on error action', () => {
        const errorMsg = 'test error';
        const newState = sut({...initialState, loading: true, error: undefined}, new examsActions.Error(errorMsg));

        expect(newState.error).toBe(errorMsg);
        expect(newState.loading).toBeFalsy();
    });

    it('should append new StudentData to StudentData array on state', () => {
        const secondStudentId = 'a4dcec52-e43e-4a63-93fa-54c2c7e5e351';
        const firstState = sut(initialState, new examsActions.AddExams(StudentData));
        const lastState = sut(firstState, new examsActions.AddExams({...StudentData, studentId: secondStudentId}));

        expect(lastState.studentData.length).toBe(2);
        expect(lastState.studentData[1].studentId).toBe(secondStudentId);
    });

    it('should remove StudentData with correct studentId from state', () => {
        const secondStudentId = 'a4dcec52-e43e-4a63-93fa-54c2c7e5e351';
        const firstState = sut(initialState, new examsActions.AddExams(StudentData));
        const secondState = sut(firstState, new examsActions.AddExams({...StudentData, studentId: secondStudentId}));
        const lastState = sut(secondState, new examsActions.RemoveExams(secondStudentId));

        expect(lastState.studentData.length).toBe(1);
        expect(lastState.studentData[0].studentId).toBe(studentId);
    });

});
