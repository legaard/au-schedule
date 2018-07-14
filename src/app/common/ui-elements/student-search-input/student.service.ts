import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Student } from '../../models/student.model';

@Injectable()
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  getStudent(studentId: string): Observable<Student> {
    const url = `api/v1/students/${studentId}`;

    return this.httpClient
      .get(url)
      .pipe(
        map((response: any) => ({name: response.studentName, id: studentId})),
        catchError(error => of(null)));
  }
}
