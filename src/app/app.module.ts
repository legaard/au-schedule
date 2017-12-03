import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { SidebarComponent } from './shell/sidebar/sidebar.component';
import { routes } from './routes';
import { reducers } from './reducers/reducers';
import { ExamsComponent } from './pages/exams/exams.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { IndexComponent } from './pages/index/index.component';
import { StudentService } from './pages/index/student.service';
import { UrlInterceptor } from './shared/util/url.interceptor';
import { UiModule } from './shared/ui/ui.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    IndexComponent,
    ExamsComponent,
    CoursesComponent
  ],
  imports: [
    UiModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    RouterModule.forRoot(
      routes,
      { enableTracing: false }
    )
  ],
  providers: [
    StudentService,
    { provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
