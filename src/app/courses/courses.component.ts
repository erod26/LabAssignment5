import { Component, OnInit } from '@angular/core';


interface IStudent {
  id?: number;
  firstName: string;
  lastName: string;
  course: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  students: Array<IStudent> = [];
  private scold: string;

  editMode: boolean = false;
  constructor() {
    this.scold = "Getting closer";
    this.students[0] = {
      id: 1,
      firstName: 'Eric',
      lastName: 'Rodriguez',
      course: 'Programming'
    }
    this.students[1] = {
      id: 1,
      firstName: 'Tom',
      lastName: 'Brady',
      course: 'Swimming'
    }
    this.students[2] = {
      id: 1,
      firstName: 'Mark',
      lastName: 'Zuck',
      course: 'Business'
    }
    this.students[3] = {
      id: 1,
      firstName: 'Joe',
      lastName: 'Biden',
      course: 'Politics'
    }
  }
  showTease() {
    const haha = document.getElementById('haha');
    haha.innerHTML = 'Not here my dude.' + ' ' + this.scold + '.'
  }
  hideTease() {
    const haha = document.getElementById('haha');
    haha.innerHTML = 'r2c3';
  }



  ngOnInit() {
  }

  addStudent() {
    this.editMode = true;
    const student: IStudent = {
      id: null,
      firstName: null,
      lastName: null,
      course: null
    };


    // this.students.push(student);
    // this.students.shift(students); //this will make addstudent appear below biden//
    this.students.push(student);
  }
  removeStudent(index: number) {
    console.log('from removeStudent function index: ', index);
    this.students.splice(index, 1);
  }
  saveStudent() {
    this.editMode = false;
  }
}


