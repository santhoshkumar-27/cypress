import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student-service';
import { Student } from '../student-interface';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent {
  student!: Student;
  
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ){}

    ngOnInit(){
      this.route.params.subscribe((param:any) => {
        console.log(param)
        if(param){
          this.student = this.studentService.getStudent(param.id);
        }
      })
      
    }
}
