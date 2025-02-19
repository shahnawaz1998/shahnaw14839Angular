import { Component, inject, Pipe } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { Course } from '../Models/course';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-courses',
  imports: [CurrencyPipe,CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
  providers: [CurrencyPipe,CourseService]
})
export class CoursesComponent {
  AllCourses: Course[]  | undefined;
  // coursesService = inject(CourseService);
  constructor(private coursesService:CourseService ){
  }

ngOnInit(){
 this.AllCourses = this.coursesService.courses;
}

}
