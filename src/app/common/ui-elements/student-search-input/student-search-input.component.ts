import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Student } from '../../models/student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'sg-student-search-input',
  templateUrl: './student-search-input.component.html',
  styleUrls: ['./student-search-input.component.scss']
})
export class StudentSearchInputComponent implements OnInit {
  private searchValue = new Subject<string>();
  isLoading = false;

  @Output() onStudentFound = new EventEmitter<Student>();

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.searchValue
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((studentId: string) => this.studentService.getStudent(studentId)))
      .subscribe(student => {
        this.isLoading = false;
        this.onStudentFound.emit(student);
      });
  }

  search(value: string) {
    this.isLoading = true;
    this.searchValue.next(value);
  }
}
