import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Student } from '../../shared/models/student.model';

@Injectable()
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  getStudentName(studentId: string): Observable<Student> {
    const url = `http://198.211.106.128:3033/api/v1/student/${studentId}`;

    return this.httpClient
      .get(url)
      .map((response: any) => ({name: response.studentName, id: studentId}))
      .catch(error => Observable.of(null));
  }
}
