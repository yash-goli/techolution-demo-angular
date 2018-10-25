import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MarksListComponent } from './marks-list/marks-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { MarksServiceService } from './marks-service.service';


@NgModule({
  declarations: [
    AppComponent,
    MarksListComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MarksServiceService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
