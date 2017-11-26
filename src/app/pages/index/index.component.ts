import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { StudentService } from './student.service';
import { Student } from '../../shared/models/student.model';

@Component({
  selector: 'sg-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  private searchValue = new Subject<string>();

  isLoading = false;
  student: Student;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.searchValue
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((studentId: string) => this.studentService.getStudentName(studentId)))
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
    // dispatch action to Store
  }
}
