import { Component, OnInit } from '@angular/core';
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
export class IndexComponent implements OnInit {
  private searchValue = new Subject<string>();

  isLoading = false;
  student: Student;

  constructor(
    private studentService: StudentService,
    private store: Store<AppState>) { }

  ngOnInit(): void {
    this.searchValue
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((studentId: string) => this.studentService.getStudent(studentId)))
      .subscribe(student => {
        this.isLoading = false;
        this.student = student;
      });
  }

  search(value: string) {
    this.isLoading = true;
    this.searchValue.next(value);
  }

  addStudent(student: Student) {
    this.store.dispatch(new StudentToggleActions.AddStudent(student));
  }
}
