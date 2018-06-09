import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Student } from '../../models/student.model';

@Injectable()
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  getStudent(studentId: string): Observable<Student> {
    const url = `api/v1/students/${studentId}`;

    return this.httpClient
      .get(url)
      .map((response: any) => ({name: response.studentName, id: studentId}))
      .catch(error => Observable.of(null));
  }
}
