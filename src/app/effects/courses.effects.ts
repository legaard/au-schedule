import { Injectable } from '@angular/core';
import { StudentDataService } from '../pages/student-data.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';

import { actionTypes as StudentToggleActions } from '../actions/student-toggle-actions';
import { actionTypes as CourseActions } from '../actions/courses-action';
import { StudentData } from '../common/models/student-data.model';
import { Course } from '../common/models/course.model';

@Injectable()
export class CoursesEffects {

  @Effect()
  addCourse$: Observable<Action> = this.actions$.pipe(
    ofType(StudentToggleActions.ADD_STUDENT),
    mergeMap(((action: any) => {
      return this.studentDataService.getCourses(action.payload.id)
        .pipe(map(data => {
          const studentData: StudentData<Course> = {
            data,
            studentId: action.payload.id
          };
          return { type: CourseActions.ADD_COURSES, payload: studentData };
        }),
        catchError(() => of({type: CourseActions.ERROR})));
    })));

  @Effect()
  removeCourse$: Observable<Action> = this.actions$.pipe(
    ofType(StudentToggleActions.REMOVE_STUDENT),
    mergeMap((action: any) => of({type: CourseActions.REMOVE_COURSES, payload: action.payload })));

  constructor(private studentDataService: StudentDataService, private actions$: Actions) {
  }
}
