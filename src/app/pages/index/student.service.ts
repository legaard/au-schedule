import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  getStudentName(studentId: string): Observable<string> {
    const url = `http://198.211.106.128:3033/api/v1/student/${studentId}`;

    return this.httpClient
      .get(url)
      .map((student: any) => student.studentName)
      .catch(error => Observable.of(null));
  }
}
