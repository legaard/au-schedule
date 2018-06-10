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
import { UrlInterceptor } from './url.interceptor';
import { UiElementsModule } from './common/ui-elements/ui-elements.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
  ],
  imports: [
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
    { provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
