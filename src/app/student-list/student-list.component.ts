import { Component } from '@angular/core';
import { Student } from '../student-interface';
import { StudentService } from '../student-service';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styles: [ `a{text-decoration:none;color: black;display:block;padding:15px;}ul{padding:0;}li{list-style:none;}.w-50{display:inline-block;width:45%;cursor:pointer}li:hover{background:#eee}.text-right{text-align: right;}.text-center{text-align: center;}` ]
})
export class StudentListComponent {
  studentList!: Student[];
  
  constructor(private studentService : StudentService){}

    ngOnInit(){
      this.studentList = this.studentService.getStudents();
      console.log('this.studentList',this.studentList)
    }
}
