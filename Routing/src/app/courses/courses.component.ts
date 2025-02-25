import { Component, inject, OnInit, Pipe } from '@angular/core';
import { CourseService } from '../Services/course.service';
import { Course } from '../Models/course';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  imports: [CurrencyPipe,CommonModule,RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
  providers: [CurrencyPipe]
})
export class CoursesComponent implements OnInit{
  AllCourses: Course[]  | undefined;
  // coursesService = inject(CourseService);
  constructor(private coursesService:CourseService ){
  }

ngOnInit(){
 this.AllCourses = this.coursesService.courses;
}

}
