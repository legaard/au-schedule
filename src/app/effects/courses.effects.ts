import { Injectable } from '@angular/core';
import { StudentDataService } from '../pages/student-data.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';

import * as fromStudentToggles from '../actions/student-toggle-actions';
import * as fromCourses from '../actions/courses-action';
import { StudentData } from '../common/models/student-data.model';
import { Course } from '../common/models/course.model';

@Injectable()
export default class CoursesEffects {

  @Effect()
  addCourses$: Observable<Action> = this.actions$.pipe(
    ofType(fromStudentToggles.types.ADD_STUDENT),
    mergeMap(((action: any) =>
      this.studentDataService.getCourses(action.payload.id)
        .pipe(map(data => {
          const studentData: StudentData<Course> = {
            data,
            studentId: action.payload.id
          };
          return { type: fromCourses.types.ADD_COURSES, payload: studentData };
        }),
        catchError(() => of({ type: fromCourses.types.ERROR })))
    )));

  @Effect()
  removeCourses$: Observable<Action> = this.actions$.pipe(
    ofType(fromStudentToggles.types.REMOVE_STUDENT),
    map((action: any) => ({ type: fromCourses.types.REMOVE_COURSES, payload: action.payload })));

  constructor(private studentDataService: StudentDataService, private actions$: Actions) {
  }
}
