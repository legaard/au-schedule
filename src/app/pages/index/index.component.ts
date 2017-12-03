import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Rx';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { StudentService } from './student.service';
import { Student } from '../../shared/models/student.model';
import { AppState } from '../../reducers/reducers';
import * as StudentToggleActions from '../../actions/student-toggle-actions';

@Component({
  selector: 'sg-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  student: Student;

  constructor(
    private router: Router,
    private store: Store<AppState>) { }

  addStudent(student: Student) {
    this.store.dispatch(new StudentToggleActions.AddStudent(student));
    this.router.navigate(['/courses']);
  }

  onStudentFound(student: Student) {
    this.student = student;
  }
}
