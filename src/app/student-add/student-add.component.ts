import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student-service';
import { group } from '@angular/animations';

@Component({
  selector: 'student-add',
  templateUrl: './student-add.component.html',
  styles: [`input{width:100%;padding: 10px 15px;margin-top:20px ;}`],
})
export class StudentAddComponent implements OnInit {
  studentForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    id: new FormControl(''),
    gender: new FormControl(''),
    address: new FormControl(''),
  });
  isEdit: Boolean = false;
  msg: String = '';
  submitted: boolean = false;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      id:  ['', Validators.required],
      address: new FormControl('',[Validators.required]),
      gender: new FormControl('',[Validators.required]),
    });
    this.route.params.subscribe((param:any) => {
      console.log(param,param);
      if (param && param.id) {
        let student = this.studentService.getStudent(param.id);
        if (student) {
          this.studentForm.setValue(student);
          this.isEdit = true;
        } else this.router.navigate(['/students']);
      }
    });
  }



  get f(): { [key: string]: AbstractControl } {
    return this.studentForm.controls;
  }


  resetForm() {
    console.log('reset', this.studentForm);
    this.studentForm.reset();
  }

  add() {
    this.submitted = true;
    if (this.studentForm.valid) {
      this.studentService.studentList.push(this.studentForm.value);
      // this.resetForm();
      console.log(
        'this.studentService.studelost',
        this.studentService.getStudents()
      );

      this.msg = 'Saved successfully';
      this.router.navigate(['/students']);
    } else {
      this.msg = 'Please complete form';
      return;
    }
  }

  edit() {
    this.msg = '';
    if (this.studentForm.valid) {
      if (this.studentService.studentEdit(this.studentForm.value)) {
        this.router.navigate(['/students']);
      } else {
        this.msg = 'Something went wrong';
      }
    } else {
      this.msg = 'Please complete form';
    }
  }
}
