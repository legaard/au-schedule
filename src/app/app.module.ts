import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { ExamModule } from './exams/exams.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { APP_ROUTES } from './routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoursesModule,
    ExamModule,
    SidebarModule,
    StoreModule,
    RouterModule.forRoot(
      APP_ROUTES,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
