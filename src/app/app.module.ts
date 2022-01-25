import { CourseService } from './course-component-generated-by-console/course.service';
import { CourseComponent } from './course.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponentGeneratedByConsoleComponent } from './course-component-generated-by-console/course-component-generated-by-console.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseComponentGeneratedByConsoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
