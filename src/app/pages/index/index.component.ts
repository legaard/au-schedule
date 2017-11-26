import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { StudentService } from './student.service';

@Component({
  selector: 'sg-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  studentName: Observable<string>;
  searchValue = new Subject<string>();
  isIdValid = false;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentName = this.searchValue
      .pipe(
        debounceTime(750),
        distinctUntilChanged(),
        switchMap((studentId: string) => this.studentService.getStudentName(studentId)))
      .do(studentName => this.isIdValid = studentName !== null);
  }

  search(value: string) {
    if (value === '') { return; }
    this.searchValue.next(value);
  }
}
