import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { Course } from '../common/models/course.model';
import { Exam, ExamPeriode } from '../common/models/exam.model';

@Injectable()
export class StudentDataService {

  constructor(private httpClient: HttpClient) { }

  getCourses(studentId: string): Observable<Course[]> {
    const url = `api/v1/students/${studentId}/courses`;

    return this.httpClient
      .get(url)
      .map((response: any) => response.courses)
      .catch(error => Observable.of(null));
  }

  getExams(studentId: string, periode: ExamPeriode): Observable<Exam[]> {
    const url = `api/v1/students/${studentId}/exams?periode=${ExamPeriode[periode].toLowerCase()}`;

    return this.httpClient
      .get(url)
      .map((response: any) => response.exams)
      .catch(error => Observable.of(null));
  }
}
