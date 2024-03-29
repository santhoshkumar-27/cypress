import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from './student-service';


const appRoutes: Routes = [
  { path: 'student-add', component: StudentAddComponent },
  { path: 'student/:id',      component: StudentViewComponent },
  {
    path: 'students',
    component: StudentListComponent
  },
  { path: 'student-add/:id', component: StudentAddComponent },
  {
    path: 'students',
    component: StudentListComponent
  },
  { path: '',
    redirectTo: '/students',
    pathMatch: 'full'
  },
  
];


@NgModule({
  imports:      [ 
    BrowserModule, 
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [ AppComponent, StudentAddComponent,StudentViewComponent,StudentListComponent ],
  providers: [StudentService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
