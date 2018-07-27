import { reducer, StudentToggleState } from './student-toggles.reducer';
import { Student } from '../common/models/student.model';
import * as StudentToggleActions from '../actions/student-toggles.action';


describe('Student Toggle Reducer', () => {
  const studentId = 'a4dcec52-e43e-4a63-93fa-54c2c7e5e348';
  const studentName = 'Marty McFly';
  const initalState: StudentToggleState = {
    toggles: []
  };

  it('should add new StudentToggle with correct ID and toggle value of \'true\'', () => {
    const newState = reducer(initalState, new StudentToggleActions.AddStudent({
      id: studentId,
      name: studentName
    }));

    expect(newState.toggles.length).toBe(1);
    expect(newState.toggles[0].isToggled).toBeTruthy();
    expect(newState.toggles[0].student.name).toBe(studentName);
    expect(newState.toggles[0].student.id).toBe(studentId);
  });

  it('should only add the same student once (should be idempotent)', () => {
    const student: Student = {
      name: studentName,
      id: studentId
    };

    const firstState = reducer(initalState, new StudentToggleActions.AddStudent(student));
    const lastState = reducer(firstState, new StudentToggleActions.AddStudent(student));

    expect(lastState.toggles.length).toBe(1);
    expect(lastState.toggles[0].isToggled).toBeTruthy();
    expect(lastState.toggles[0].student.name).toBe(studentName);
    expect(lastState.toggles[0].student.id).toBe(studentId);
  });

  it('should add new students last in the list of toggles', () => {
    const firstStudent: Student = {
      name: studentName,
      id: studentId
    };

    const secondStudentName = `${studentName} Junior`;
    const secondStudentId = `${studentId}-1337`;
    const studentTwo: Student = {
      name: secondStudentName,
      id: secondStudentId
    };

    const firstState = reducer(initalState, new StudentToggleActions.AddStudent(firstStudent));
    const lastState = reducer(firstState, new StudentToggleActions.AddStudent(studentTwo));

    expect(lastState.toggles.length).toBe(2);

    expect(lastState.toggles[0].isToggled).toBeTruthy();
    expect(lastState.toggles[0].student.name).toBe(studentName);
    expect(lastState.toggles[0].student.id).toBe(studentId);

    expect(lastState.toggles[1].isToggled).toBeTruthy();
    expect(lastState.toggles[1].student.name).toBe(secondStudentName);
    expect(lastState.toggles[1].student.id).toBe(secondStudentId);
  });

  it('should remove correct student from toggle list', () => {
    const firstStudent: Student = {
      name: studentName,
      id: studentId
    };

    const secondStudentName = `${studentName} Junior`;
    const secondStudentId = `${studentId}-1337`;
    const studentTwo: Student = {
      name: secondStudentName,
      id: secondStudentId
    };

    const thirdStudentName = `${studentName} Senior`;
    const thirdStudentId = `${studentId}-1337-1337`;
    const thirdStudent: Student = {
      name: thirdStudentName,
      id: thirdStudentId
    };

    const firstState = reducer(initalState, new StudentToggleActions.AddStudent(firstStudent));
    const secondState = reducer(firstState, new StudentToggleActions.AddStudent(studentTwo));
    const thirdState = reducer(secondState, new StudentToggleActions.AddStudent(thirdStudent));

    expect(thirdState.toggles.length).toBe(3);

    const lastState =  reducer(thirdState, new StudentToggleActions.RemoveStudent(secondStudentId));

    expect(lastState.toggles.length).toBe(2);
    expect(lastState.toggles.some(toggle => toggle.student.id === firstStudent.id)).toBeTruthy();
    expect(lastState.toggles.some(toggle => toggle.student.id === thirdStudent.id)).toBeTruthy();
    expect(lastState.toggles.some(toggle => toggle.student.id === secondStudentId)).toBeFalsy();
  });

  it('should toggle StudentToggle correctly when action has no toggle value', () => {
    const student: Student = {
      name: studentName,
      id: studentId
    };

    const firsState = reducer(initalState, new StudentToggleActions.AddStudent(student));

    expect(firsState.toggles.length).toBe(1);
    expect(firsState.toggles[0].isToggled).toBeTruthy();

    const secondState = reducer(firsState, new StudentToggleActions.ToggleStudent(studentId));

    expect(secondState.toggles[0].isToggled).toBeFalsy();

    const lastState = reducer(secondState, new StudentToggleActions.ToggleStudent(studentId));

    expect(lastState.toggles[0].isToggled).toBeTruthy();
  });

  it('should toggle StudentToggle correctly when action has toggle value', () => {
    const student: Student = {
      name: studentName,
      id: studentId
    };

    const firsState = reducer(initalState, new StudentToggleActions.AddStudent(student));
    const secondState = reducer(firsState, new StudentToggleActions.ToggleStudent(studentId));

    const thirdState = reducer(secondState, new StudentToggleActions.ToggleStudent(studentId, true));

    expect(thirdState.toggles[0].isToggled).toBeTruthy();

    const lastState = reducer(thirdState, new StudentToggleActions.ToggleStudent(studentId, false));

    expect(lastState.toggles[0].isToggled).toBeFalsy();
  });

  it('should preserve order when StudentToggle gets toggled', () => {
    const firstStudent: Student = {
      name: studentName,
      id: studentId
    };

    const secondStudentName = `${studentName} Junior`;
    const secondStudentId = `${studentId}-1337`;
    const studentTwo: Student = {
      name: secondStudentName,
      id: secondStudentId
    };

    const thirdStudentName = `${studentName} Senior`;
    const thirdStudentId = `${studentId}-1337-1337`;
    const thirdStudent: Student = {
      name: thirdStudentName,
      id: thirdStudentId
    };

    const firstState = reducer(initalState, new StudentToggleActions.AddStudent(firstStudent));
    const secondState = reducer(firstState, new StudentToggleActions.AddStudent(studentTwo));
    const thirdState = reducer(secondState, new StudentToggleActions.AddStudent(thirdStudent));
    const lastState = reducer(thirdState, new StudentToggleActions.ToggleStudent(secondStudentId));

    expect(lastState.toggles.length).toBe(3);
    expect(lastState.toggles[1].student.id).toBe(secondStudentId);
  });

  it('should not modify state if StudentToggle does not exist', () => {
    const student: Student = {
      name: studentName,
      id: studentId
    };

    const randomStudentId = 'random-id';

    const firstState = reducer(initalState, new StudentToggleActions.AddStudent(student));
    expect(firstState.toggles[0].isToggled).toBeTruthy();

    const lastState = reducer(firstState, new StudentToggleActions.ToggleStudent(randomStudentId));
    expect(firstState.toggles[0].isToggled).toBeTruthy();
  });
});
