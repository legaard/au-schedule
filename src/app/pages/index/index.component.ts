import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Student } from '../../common/models/student.model';
import { AppState } from '../../reducers';
import * as studentToggleActions from '../../actions/student-toggles.action';

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
    this.store.dispatch(new studentToggleActions.AddStudent(student));
    this.router.navigate(['/courses']);
  }

  onStudentFound(student: Student) {
    this.student = student;
  }
}
