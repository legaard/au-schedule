import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { SidebarComponent } from './shell/sidebar/sidebar.component';
import { routes } from './routes';
import { effects } from './effects';
import { reducers } from './reducers';
import { UrlInterceptor } from './url.interceptor';
import { UiElementsModule } from './common/ui-elements/ui-elements.module';
import { PagesModule } from './pages/pages.module';
import { StudentDataService } from './pages/student-data.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
  ],
  imports: [
    EffectsModule.forRoot(effects),
    UiElementsModule,
    PagesModule,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    RouterModule.forRoot(
      routes,
      { enableTracing: false }
    )
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true },
    StudentDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
