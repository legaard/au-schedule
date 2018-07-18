import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as studentTogglesActions from '../../actions/student-toggle-actions';
import { AppState } from '../../reducers';
import { Student } from '../../common/models/student.model';
import { StudentToggle } from '../../common/models/student-toggle.model';

@Component({
  selector: 'sg-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  studentToggles: StudentToggle[];
  student: Student;

  @Input() isVisible: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store
      .select(state => state.studentToggles.toggles)
      .subscribe(toggles => this.studentToggles = toggles);
  }

  onStudentFound(student: Student) {
    this.student = student;
  }

  addStudent(student: Student) {
    this.store.dispatch(new studentTogglesActions.AddStudent(student));
  }

  removeStudent(id: string) {
    this.store.dispatch(new studentTogglesActions.RemoveStudent(id));
  }

  toggleStudent(id: string) {
    this.store.dispatch(new studentTogglesActions.ToggleStudent(id));
  }
}
